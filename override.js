// Override for Attendance Dashboard
console.log("Loading Attendance Override...");

window.uploadedData = window.uploadedData || { ZMM_LTO: [], mb51: [], stock: [] };

// IndexedDB Helper
const DB_NAME = 'OfflineAttendanceDB';
const STORE_NAME = 'files';

function saveToDB(key, data) {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = (e) => e.target.result.createObjectStore(STORE_NAME);
    req.onsuccess = (e) => {
        const db = e.target.result;
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).put(data, key);
    };
}

function loadFromDB(key) {
    return new Promise((resolve) => {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = (e) => e.target.result.createObjectStore(STORE_NAME);
        req.onsuccess = (e) => {
            const tx = e.target.result.transaction(STORE_NAME, 'readonly');
            const getReq = tx.objectStore(STORE_NAME).get(key);
            getReq.onsuccess = () => resolve(getReq.result);
            getReq.onerror = () => resolve(null);
        };
        req.onerror = () => resolve(null);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    // Muat data dari IndexedDB saat pertama kali buka web
    const savedZmm = await loadFromDB('ZMM_LTO');
    const savedMb51 = await loadFromDB('mb51');
    const savedStock = await loadFromDB('stock');
    if (savedZmm) window.uploadedData['ZMM_LTO'] = savedZmm;
    if (savedMb51) window.uploadedData['mb51'] = savedMb51;
    if (savedStock) window.uploadedData['stock'] = savedStock;
    if (typeof init === 'function' && (savedZmm || savedMb51 || savedStock)) {
        init();
    }

    // Intercept tombol "Hapus Data" agar berfungsi untuk file lokal
    document.querySelectorAll('.reset-db-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Stop Supabase logic
            
            const id = btn.id;
            if (id === 'btn-reset-framsys') {
                window.uploadedData['ZMM_LTO'] = [];
                saveToDB('ZMM_LTO', []);
            }
            else if (id === 'btn-reset-mb51') {
                window.uploadedData['mb51'] = [];
                saveToDB('mb51', []);
            }
            else if (id === 'btn-reset-zmmlto') {
                window.uploadedData['stock'] = [];
                saveToDB('stock', []);
            }
            
            alert('Data berhasil dihapus dari memori (Mode Lokal).');
            if (typeof init === 'function') init();
        }, true); // use capture phase to intercept before old scripts
    });
});

// Overwrite the original function declaration globally
window.fetchData = async function(tableName) {
    return window.uploadedData[tableName] || [];
};

// Just to be absolutely sure
async function fetchData(tableName) {
    return window.uploadedData[tableName] || [];
}

// Override fungsi render yang lama (karena mereka mencari kolom 'Posting Date' dsb yang tidak ada di CSV baru)
function renderMb51() {
    let data = window.globalMb51Data || window.uploadedData['mb51'] || [];
    
    // OTOMATISASI RUMUS VLOOKUP: Area & Bagian berdasarkan master emplye
    const masterData = window.uploadedData['stock'] || [];
    const masterMap = {};
    
    masterData.forEach(row => {
        const persNo = row['Pers.No.'];
        if (persNo) {
            masterMap[persNo.toString().trim()] = {
                area: row['Area'] || '',
                bagian: row['Bagian'] || ''
            };
        }
    });
    
    data = data.map(row => {
        const indexValue = row['Index'] ? row['Index'].toString().trim() : '';
        const match = masterMap[indexValue];
        if (match) {
            return {
                ...row,
                'Area': match.area || '#N/A',
                'Bagian': match.bagian || '#N/A'
            };
        }
        return row;
    });

    if(typeof renderTable === 'function') renderTable('mb51-table', data);
    const span = document.getElementById('mb51-dynamic-total-line');
    if (span) span.textContent = data.length;
}

function renderZmmLto() {
    const data = window.globalZmmLtoData || window.uploadedData['ZMM_LTO'] || [];
    if(typeof renderTable === 'function') renderTable('zmmlto-table', data);
    const span = document.getElementById('zmmlto-dynamic-total-line');
    if (span) span.textContent = data.length;
}

function renderStock() {
    let data = window.globalStockData || window.uploadedData['stock'] || [];
    
    // OTOMATISASI RUMUS EXCEL: Double Check & >1 Name
    const workDaysData = window.uploadedData['mb51'] || [];
    const nameCounts = {};
    
    // Hitung kemunculan tiap nama di file work days (kolom 'Nama')
    workDaysData.forEach(row => {
        let nama = row['Nama'];
        if (nama) {
            nama = nama.toString().trim().toLowerCase();
            nameCounts[nama] = (nameCounts[nama] || 0) + 1;
        }
    });
    
    // Terapkan rumus ke master emplye
    data = data.map(row => {
        const fullName = row['Full Name'] || '';
        const searchName = fullName.toString().trim().toLowerCase();
        const count = nameCounts[searchName] || 0;
        return {
            ...row,
            'Double Check': count > 0 ? fullName : '#N/A',
            // Kita jadikan string agar tidak terhapus (karena 0 || '' di renderTable jadinya kosong)
            '>1 Name': count === 0 ? '0' : count.toString()
        };
    });

    if(typeof renderTable === 'function') renderTable('stock-table', data);
    const span = document.getElementById('stock-dynamic-total-line');
    if (span) span.textContent = data.length;
}

// Override renderTable agar tidak bikin lag karena meload puluhan ribu baris!
window.renderTable = function(tableId, data) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    if (!data || data.length === 0) {
        table.innerHTML = '<thead><tr><th>Informasi</th></tr></thead><tbody><tr><td style="text-align: center; padding: 20px; font-weight: 500; color: #888;">Data Tidak Ditemukan / Kosong</td></tr></tbody>';
        return;
    }

    const headers = Object.keys(data[0]);
    const thead = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>`;
    
    // Batasi hanya 100 baris pertama supaya super cepat (no lag)
    const displayData = data.slice(0, 100);
    
    const tbody = `<tbody>${displayData.map(row => {
        return `<tr>${headers.map(h => `<td>${row[h] || ''}</td>`).join('')}</tr>`;
    }).join('')}</tbody>`;
    
    table.innerHTML = thead + tbody;
};

function renderTable(tableId, data) {
    window.renderTable(tableId, data);
}

document.addEventListener('DOMContentLoaded', () => {
    const newBtn = document.getElementById('btn-process-upload-offline');
    if (newBtn) {
        newBtn.addEventListener('click', async () => {
            newBtn.textContent = 'Memproses...';
            newBtn.disabled = true;

            const fileStock = document.getElementById('upload-stock').files[0];
            const fileMb51 = document.getElementById('upload-mb51').files[0];
            const fileZmmlto = document.getElementById('upload-zmmlto').files[0];

            function parseCSVFile(file, headerOffset) {
                return new Promise((resolve, reject) => {
                    if (!file) return resolve(null);
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const content = e.target.result;
                        const lines = content.split(/\r?\n/);
                        if (lines.length <= headerOffset) return resolve([]);
                        
                        // Buang baris sebelum header
                        const validContent = lines.slice(headerOffset).join('\n');
                        
                        Papa.parse(validContent, {
                            header: true,
                            skipEmptyLines: true,
                            delimiter: ";", // Pastikan delimiter semicolon
                            complete: function(results) {
                                resolve(results.data);
                            },
                            error: function(err) {
                                reject(err);
                            }
                        });
                    };
                    reader.onerror = () => reject(new Error("Gagal membaca file"));
                    reader.readAsText(file);
                });
            }

            try {
                // Sekarang semua file diasumsikan header/judul kolomnya ada di baris pertama (paling atas)
                const dataFramsys = await parseCSVFile(fileStock, 0);
                const dataWorkdays = await parseCSVFile(fileMb51, 0);
                const dataMaster = await parseCSVFile(fileZmmlto, 0);

                // Daftar kolom yang diizinkan untuk masing-masing tabel (agar tidak ditolak Supabase)
                const validColumns = {
                    'master_employee': ['Pers.No.', 'Full Name', 'Area', 'Bagian', 'Double Check', '>1 Name'],
                    'work_days': ['Index', 'Nama', 'Hari Kerja', 'Sakit', 'Izin', 'Alpa', 'CT', 'Area', 'Bagian'],
                    'framsys': ['KIT TK', 'Nama TK', 'Date Shift', 'Time In', 'Time Out', 'Durasi (Jam)']
                };

                async function uploadToSupabase(tableName, data) {
                    if (!data || data.length === 0) return;
                    
                    const allowedKeys = validColumns[tableName] || [];
                    
                    // Bersihkan data: hanya kirim kolom yang Dikenali oleh Supabase
                    const cleanedData = data.map(row => {
                        const cleanRow = {};
                        for (let key in row) {
                            // Jika key ada di daftar validColumns, baru dimasukkan
                            if (allowedKeys.includes(key)) {
                                cleanRow[key] = row[key];
                            }
                        }
                        return cleanRow;
                    });
                    
                    // Supabase membatasi maksimal insert biasanya sekitar 1000 row per request, jadi kita pecah (chunking) per 500 baris
                    for (let i = 0; i < cleanedData.length; i += 500) {
                        const chunk = cleanedData.slice(i, i + 500);
                        const { error } = await window.supabaseClient.from(tableName).insert(chunk);
                        if (error) throw new Error(`Gagal upload ke ${tableName}: ` + error.message);
                    }
                }

                newBtn.textContent = 'Mengupload ke Supabase...';
                
                // Upload data satu per satu ke Supabase jika ada file yang dipilih
                if (dataMaster && dataMaster.length > 0) {
                    await uploadToSupabase('master_employee', dataMaster);
                    window.uploadedData['stock'] = dataMaster;
                    saveToDB('stock', dataMaster); // Tetap simpan di memori lokal agar tampilan web langsung berubah
                }
                if (dataWorkdays && dataWorkdays.length > 0) {
                    await uploadToSupabase('work_days', dataWorkdays);
                    window.uploadedData['mb51'] = dataWorkdays;
                    saveToDB('mb51', dataWorkdays);
                }
                if (dataFramsys && dataFramsys.length > 0) {
                    await uploadToSupabase('framsys', dataFramsys);
                    window.uploadedData['ZMM_LTO'] = dataFramsys;
                    saveToDB('ZMM_LTO', dataFramsys);
                }

                alert("Hebat! Data berhasil diproses dan diupload LANGSUNG ke Database Supabase!");
                
                // Panggil init() dari script.js untuk memuat ulang tabel dengan data baru
                if (typeof init === 'function') {
                    await init();
                }
            } catch (err) {
                console.error(err);
                alert("Gagal memproses file CSV: " + err.message);
            } finally {
                newBtn.textContent = 'Proses & Upload';
                newBtn.disabled = false;
            }
        });
    }
});
