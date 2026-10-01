// Override for Attendance Dashboard
console.log("Loading Attendance Override...");

window.uploadedData = window.offlineData || window.uploadedData || { ZMM_LTO: [], mb51: [], stock: [] };

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
        const nama = row['Nama'];
        if (nama) {
            nameCounts[nama] = (nameCounts[nama] || 0) + 1;
        }
    });
    
    // Terapkan rumus ke master emplye
    data = data.map(row => {
        const fullName = row['Full Name'];
        const count = nameCounts[fullName] || 0;
        return {
            ...row,
            'Double Check': count > 0 ? fullName : '#N/A',
            '>1 Name': count
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

            function parseCSVFile(file) {
                return new Promise((resolve, reject) => {
                    if (!file) return resolve(null);
                    Papa.parse(file, {
                        header: true,
                        skipEmptyLines: true,
                        complete: function(results) {
                            resolve(results.data);
                        },
                        error: function(err) {
                            reject(err);
                        }
                    });
                });
            }

            try {
                const dataStock = await parseCSVFile(fileStock);
                const dataMb51 = await parseCSVFile(fileMb51);
                const dataZmmlto = await parseCSVFile(fileZmmlto);

                if (dataStock) window.uploadedData['stock'] = dataStock;
                if (dataMb51) window.uploadedData['mb51'] = dataMb51;
                if (dataZmmlto) window.uploadedData['ZMM_LTO'] = dataZmmlto;

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
