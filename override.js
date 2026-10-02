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
            // Di HTML: btn-reset-stock = tombol hapus framsys (ZMM_LTO)
            if (id === 'btn-reset-stock') {
                window.uploadedData['ZMM_LTO'] = [];
                saveToDB('ZMM_LTO', []);
                alert('Data Framsys berhasil dihapus dari memori lokal.');
            }
            // Di HTML: btn-reset-mb51 = tombol hapus work days (mb51)
            else if (id === 'btn-reset-mb51') {
                window.uploadedData['mb51'] = [];
                saveToDB('mb51', []);
                alert('Data Work Days berhasil dihapus dari memori lokal.');
            }
            // Di HTML: btn-reset-zmmlto = tombol hapus master employee (stock)
            else if (id === 'btn-reset-zmmlto') {
                window.uploadedData['stock'] = [];
                saveToDB('stock', []);
                alert('Data Master Employee berhasil dihapus dari memori lokal.');
            }
            // Tombol hapus semua data
            else if (id === 'btn-reset-all') {
                window.uploadedData['ZMM_LTO'] = [];
                window.uploadedData['mb51'] = [];
                window.uploadedData['stock'] = [];
                saveToDB('ZMM_LTO', []);
                saveToDB('mb51', []);
                saveToDB('stock', []);
                alert('Semua data berhasil dihapus dari memori lokal.');
            }
            
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
    
    // OTOMATISASI RUMUS VLOOKUP: Ambil Area, Bagian, dsb dari master emplye
    const masterData = window.uploadedData['stock'] || [];
    const masterMap = {};
    
    masterData.forEach(row => {
        const persNo = row['Pers.No.'] || '';
        if (persNo) {
            masterMap[persNo.toString().trim()] = {
                area: row['Area'] || row['WH Area'] || '',
                bagian: row['Bagian'] || '',
                workContract: row['Work Contract'] || '',
                employeeSubgroup: row['Employee Subgroup'] || '',
                costCenter: row['Cost Ctr'] || row['Cost Center'] || ''
            };
        }
    });
    
    // Urutan presisi sesuai permintaan (screenshot)
    const targetOrder = [
        'Month', 'Area', 'Index', 'Nama', 'Work Contract', 'Employee Subgroup', 
        'Bagian', 'Hari Kerja', 'Sakit', 'Izin', 'CT', 'CH', 'CK', 
        'Libur Bersama', 'Dispens.', 'Alpa', 'Cost Center', 'Keterangan'
    ];
    
    data = data.map(row => {
        const indexValue = row['Index'] ? row['Index'].toString().trim() : '';
        const match = masterMap[indexValue];
        
        let tempRow = { ...row };
        if (match) {
            tempRow['Area'] = match.area || '';
            tempRow['Bagian'] = match.bagian || '';
            tempRow['Work Contract'] = match.workContract || '';
            tempRow['Employee Subgroup'] = match.employeeSubgroup || '';
            tempRow['Cost Center'] = match.costCenter || '';
        }

        // Menyusun ulang kunci object agar urutan kolom dari kiri ke kanan 100% pas
        const orderedRow = {};
        targetOrder.forEach(key => {
            orderedRow[key] = tempRow[key] !== undefined ? tempRow[key] : '';
        });
        
        return orderedRow;
    });

    if(typeof renderTable === 'function') renderTable('mb51-table', data);
    const span = document.getElementById('mb51-dynamic-total-line');
    if (span) span.textContent = data.length;
}

function renderZmmLto() {
    let data = window.globalZmmLtoData || window.uploadedData['ZMM_LTO'] || [];
    
    // OTOMATISASI VLOOKUP: WH Area dari master emplye menggunakan KIT TK
    const masterData = window.uploadedData['stock'] || [];
    const masterMap = {};
    
    masterData.forEach(row => {
        const persNo = row['Pers.No.'] || '';
        if (persNo) {
            masterMap[persNo.toString().trim()] = {
                area: row['Area'] || row['WH Area'] || ''
            };
        }
    });

    const targetOrder = [
        'KIT TK', 'Nama TK', 'WH Area', 'Hari', 'Date Shift', 'Time In', 'Time Out', 'Durasi (Jam)'
    ];

    data = data.map(row => {
        const kitTk = row['KIT TK'] ? row['KIT TK'].toString().trim() : '';
        const match = masterMap[kitTk];
        
        let tempRow = { ...row };
        
        // 1. VLOOKUP WH Area
        tempRow['WH Area'] = match ? match.area : '';
        
        // 2. Buat otomatis Hari dari Date Shift
        let hari = '';
        if (tempRow['Date Shift']) {
            const dateStr = tempRow['Date Shift'].toString().trim();
            // Mendukung format DD/MM/YYYY atau DD.MM.YYYY atau YYYY-MM-DD
            const parts = dateStr.split(/[-/.]/);
            let d;
            if (parts.length === 3) {
                 if (parts[2].length === 4) { 
                      // Format Indonesia (DD/MM/YYYY) menjadi YYYY-MM-DD (Standar JS)
                      d = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
                 } else {
                      d = new Date(dateStr);
                 }
                 if (!isNaN(d.getTime())) {
                     const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
                     hari = days[d.getDay()];
                     
                     // Ubah format tanggal menjadi 11 Des 2025
                     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];
                     tempRow['Date Shift'] = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
                 }
            }
        }
        tempRow['Hari'] = hari;
        
        // 3. Biarkan tempRow tetap utuh, kita mapping manual di HTML
        return tempRow;
    });

    // 4. Render tabel framsys secara KUSTOM dengan header bertingkat
    const table = document.getElementById('zmmlto-table');
    if (table && data.length > 0) {
        // Desain Header Tabel yang Digabung (Merged) tanpa In/Out/Total di sebelah kiri
        const thead = `
        <thead>
          <tr>
            <th rowspan="2" style="position: sticky; left: 0; z-index: 3; min-width: 100px; vertical-align: middle; text-align: center; background-color: #f8f9fa;">KIT TK</th>
            <th rowspan="2" style="position: sticky; left: 100px; z-index: 3; min-width: 200px; vertical-align: middle; text-align: center; background-color: #f8f9fa;">Nama TK</th>
            <th rowspan="2" style="position: sticky; left: 300px; z-index: 3; min-width: 120px; vertical-align: middle; text-align: center; background-color: #f8f9fa; box-shadow: 4px 0 6px -2px rgba(0,0,0,0.1);">WH Area</th>
            <th rowspan="2" style="vertical-align: middle; text-align: center; background-color: #f8f9fa;">Date Shift</th>
            <th rowspan="2" style="vertical-align: middle; text-align: center; background-color: #f8f9fa;">Hari</th>
            <th rowspan="2" style="vertical-align: middle; text-align: center; background-color: #f8f9fa;">Time In</th>
            <th rowspan="2" style="vertical-align: middle; text-align: center; background-color: #f8f9fa;">Time Out</th>
            <th rowspan="2" style="vertical-align: middle; text-align: center; background-color: #f8f9fa; border-right: 2px solid #ccc;">Durasi (Jam)</th>
            
            <th colspan="3" style="text-align: center; background-color: #92d050; color: #000; border-left: 2px solid #ccc;">Working Days</th>
            <th colspan="3" style="text-align: center; background-color: #ffc000; color: #000; border-left: 2px solid #ccc;">Attendance</th>
          </tr>
          <tr>
            <th style="background-color: #92d050; color: #000; top: 58px;">In</th>
            <th style="background-color: #92d050; color: #000; top: 58px;">Out</th>
            <th style="background-color: #92d050; color: #000; top: 58px;">Total</th>
            <th style="background-color: #ffc000; color: #000; top: 58px;">In</th>
            <th style="background-color: #ffc000; color: #000; top: 58px;">Out</th>
            <th style="background-color: #ffc000; color: #000; top: 58px;">Total</th>
          </tr>
        </thead>`;
        
        // Batasi 100 baris agar tidak lag
        const displayData = data.slice(0, 100);
        const tbody = `<tbody>${displayData.map(row => {
            // Rumus Working Days
            const tIn = (row['Time In'] || '').toString().trim();
            const tOut = (row['Time Out'] || '').toString().trim();
            
            const wdIn = (tIn === '' || tIn === '-') ? '' : 1;
            const wdOut = (tOut === '' || tOut === '-') ? '' : 1;
            
            let wdTotal = '';
            if (wdIn !== '' && wdOut !== '') wdTotal = 1; // Average dari 1 dan 1
            else if (wdIn !== '') wdTotal = 1;
            else if (wdOut !== '') wdTotal = 1;
            
            // Rumus Attendance
            const attIn = (tIn === '' || tIn === '-') ? 0 : 0.5;
            const attOut = (tOut === '' || tOut === '-') ? 0 : 0.5;
            const attTotal = attIn + attOut;

            return `<tr>
                <td style="position: sticky; left: 0; z-index: 2; background-color: #fff;">${row['KIT TK'] || ''}</td>
                <td style="position: sticky; left: 100px; z-index: 2; background-color: #fff;">${row['Nama TK'] || ''}</td>
                <td style="position: sticky; left: 300px; z-index: 2; background-color: #fff; font-weight: 500; box-shadow: 4px 0 6px -2px rgba(0,0,0,0.1);">${row['WH Area'] || ''}</td>
                <td>${row['Date Shift'] || ''}</td>
                <td>${row['Hari'] || ''}</td>
                <td>${row['Time In'] || ''}</td>
                <td>${row['Time Out'] || ''}</td>
                <td style="border-right: 2px solid #ccc;">${row['Durasi (Jam)'] || ''}</td>
                <td style="border-left: 2px solid #ccc; text-align: center;">${wdIn}</td>
                <td style="text-align: center;">${wdOut}</td>
                <td style="font-weight: 600; text-align: center;">${wdTotal}</td>
                <td style="border-left: 2px solid #ccc; text-align: center;">${attIn}</td>
                <td style="text-align: center;">${attOut}</td>
                <td style="font-weight: 600; text-align: center;">${attTotal}</td>
            </tr>`;
        }).join('')}</tbody>`;
        
        table.innerHTML = thead + tbody;
    } else if (table) {
        table.innerHTML = '<thead><tr><th>Informasi</th></tr></thead><tbody><tr><td style="text-align: center; padding: 20px;">Data Tidak Ditemukan / Kosong</td></tr></tbody>';
    }
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
            'Double Check': count > 0 ? fullName : '',
            // Kita jadikan string agar tidak terhapus (karena 0 || '' di renderTable jadinya kosong)
            '>1 Name': count === 0 ? '0' : count.toString(),
            'Remarks': row['Remarks'] || ''
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
                                // Bersihkan semua nilai #N/A bawaan dari CSV user
                                const cleanData = results.data.map(row => {
                                    const newRow = {};
                                    for (let key in row) {
                                        let val = row[key];
                                        if (typeof val === 'string' && (val.trim() === '#N/A' || val.trim() === '#N/A!')) {
                                            newRow[key] = '';
                                        } else {
                                            newRow[key] = val;
                                        }
                                    }
                                    return newRow;
                                });
                                resolve(cleanData);
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
                    'master_employee': ['Pers.No.', 'Full Name', 'Area', 'Bagian', 'Remarks', 'Double Check', '>1 Name'],
                    'work_days': [
                        'Month', 'Area', 'Index', 'Nama', 'Work Contract', 'Employee Subgroup', 
                        'Bagian', 'Hari Kerja', 'Sakit', 'Izin', 'CT', 'CH', 'CK', 
                        'Libur Bersama', 'Dispens.', 'Alpa', 'Cost Center', 'Keterangan'
                    ],
                    'framsys': ['KIT TK', 'Nama TK', 'Date Shift', 'Time In', 'Time Out', 'Durasi (Jam)']
                };

                async function uploadToSupabase(tableName, data) {
                    if (!data || data.length === 0) return;
                    
                    const allowedKeys = validColumns[tableName] || [];
                    
                    // Bersihkan data: hanya kirim kolom yang Dikenali oleh Supabase
                    const cleanedData = data.map(row => {
                        const cleanRow = {};
                        for (let key in row) {
                            if (allowedKeys.includes(key)) {
                                cleanRow[key] = row[key];
                            }
                        }
                        return cleanRow;
                    });
                    
                    // Kita kembalikan ke 1000 agar aman dari limit database gratisan Supabase,
                    // Tapi kali ini kita pasang INDIKATOR PERSENTASE agar Anda tahu prosesnya berjalan!
                    const chunkSize = 1000;
                    const totalRows = cleanedData.length;
                    
                    for (let i = 0; i < totalRows; i += chunkSize) {
                        const chunk = cleanedData.slice(i, i + chunkSize);
                        const { error } = await window.supabaseClient.from(tableName).insert(chunk);
                        if (error) throw new Error(`Gagal upload ke ${tableName}: ` + error.message);
                        
                        // Update tulisan di tombol agar user tahu progresnya
                        const percent = Math.round(((i + chunk.length) / totalRows) * 100);
                        newBtn.textContent = `Mengupload ${tableName}: ${percent}%...`;
                    }
                }

                newBtn.textContent = 'Memulai Upload ke Supabase...';
                
                // Upload data satu per satu ke Supabase jika ada file yang dipilih
                if (dataMaster && dataMaster.length > 0) {
                    newBtn.textContent = 'Menyiapkan master_employee...';
                    await uploadToSupabase('master_employee', dataMaster);
                    window.uploadedData['stock'] = dataMaster;
                    saveToDB('stock', dataMaster);
                }
                if (dataWorkdays && dataWorkdays.length > 0) {
                    newBtn.textContent = 'Menyiapkan work_days...';
                    await uploadToSupabase('work_days', dataWorkdays);
                    window.uploadedData['mb51'] = dataWorkdays;
                    saveToDB('mb51', dataWorkdays);
                }
                if (dataFramsys && dataFramsys.length > 0) {
                    newBtn.textContent = 'Menyiapkan framsys...';
                    await uploadToSupabase('framsys', dataFramsys);
                    window.uploadedData['ZMM_LTO'] = dataFramsys;
                    saveToDB('ZMM_LTO', dataFramsys);
                }

                alert("Hebat! Data berhasil diproses dan diupload LANGSUNG ke Database Supabase!");
                
                // Refresh halaman agar form bersih, tombol Batal hilang, dan data terbaru termuat ulang
                window.location.reload();
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
