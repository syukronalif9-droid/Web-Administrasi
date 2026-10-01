// Override for Attendance Dashboard
console.log("Loading Attendance Override...");

window.uploadedData = window.uploadedData || { ZMM_LTO: [], mb51: [], stock: [] };

document.addEventListener('DOMContentLoaded', () => {
    // Intercept tombol "Hapus Data" agar berfungsi untuk file lokal
    document.querySelectorAll('.reset-db-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Stop Supabase logic
            
            const id = btn.id;
            if (id === 'btn-reset-framsys') window.uploadedData['ZMM_LTO'] = [];
            else if (id === 'btn-reset-mb51') window.uploadedData['mb51'] = [];
            else if (id === 'btn-reset-zmmlto') window.uploadedData['stock'] = [];
            
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
    const data = window.globalMb51Data || window.uploadedData['mb51'] || [];
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
                // upload-stock di HTML sebenarnya adalah framsys (ZMM_LTO), header di baris ke-2 (index 1)
                const dataFramsys = await parseCSVFile(fileStock, 1);
                // upload-mb51 adalah work days (mb51), header di baris ke-3 (index 2)
                const dataWorkdays = await parseCSVFile(fileMb51, 2);
                // upload-zmmlto adalah master emplye (stock), header di baris ke-1 (index 0)
                const dataMaster = await parseCSVFile(fileZmmlto, 0);

                if (dataFramsys) window.uploadedData['ZMM_LTO'] = dataFramsys;
                if (dataWorkdays) window.uploadedData['mb51'] = dataWorkdays;
                if (dataMaster) window.uploadedData['stock'] = dataMaster;

                alert("Data berhasil diproses secara offline (tersimpan di memori). Silakan klik menu di sebelah kiri untuk melihat tabelnya.");
                
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
