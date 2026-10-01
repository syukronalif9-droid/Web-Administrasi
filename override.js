// Override for Attendance Dashboard
console.log("Loading Attendance Override...");

window.uploadedData = window.uploadedData || { ZMM_LTO: [], mb51: [], stock: [] };

// Overwrite the original function declaration globally
window.fetchData = async function(tableName) {
    return window.uploadedData[tableName] || [];
};

// Just to be absolutely sure
async function fetchData(tableName) {
    return window.uploadedData[tableName] || [];
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
