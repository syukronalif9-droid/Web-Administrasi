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
        // Jangan pernah menggantung: maksimal tunggu 3 detik
        const timer = setTimeout(() => resolve(null), 3000);
        const done = (v) => { clearTimeout(timer); resolve(v); };
        try {
            const req = indexedDB.open(DB_NAME, 1);
            req.onupgradeneeded = (e) => e.target.result.createObjectStore(STORE_NAME);
            req.onsuccess = (e) => {
                try {
                    const tx = e.target.result.transaction(STORE_NAME, 'readonly');
                    const getReq = tx.objectStore(STORE_NAME).get(key);
                    getReq.onsuccess = () => done(getReq.result);
                    getReq.onerror = () => done(null);
                } catch (err) { done(null); }
            };
            req.onerror = () => done(null);
            req.onblocked = () => done(null);
        } catch (err) { done(null); }
    });
}

// Tampilkan pesan status di tabel selama data dimuat
function showTableStatus(msg) {
    ['stock-table', 'mb51-table', 'zmmlto-table'].forEach(id => {
        const t = document.getElementById(id);
        if (t) t.innerHTML = `<thead><tr><th>Informasi</th></tr></thead><tbody><tr><td style="text-align:center;padding:20px;">${msg}</td></tr></tbody>`;
    });
}

// Mapping nama tabel Supabase -> key data lokal
const TABLE_TO_LOCAL = { master_employee: 'stock', work_days: 'mb51', framsys: 'ZMM_LTO' };

// Ambil SEMUA data dari Supabase (per 1000 baris)
async function fetchFromSupabase(tableName) {
    if (!window.supabaseClient) return [];
    let all = [];
    const step = 1000;
    const parallel = 6; // ambil 6 halaman sekaligus agar cepat
    try {
        let from = 0;
        let finished = false;
        
        // Timeout mechanism to prevent infinite hanging
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Supabase fetch timeout')), 10000));
        
        while (!finished) {
            const reqs = [];
            for (let p = 0; p < parallel; p++) {
                const start = from + p * step;
                reqs.push(window.supabaseClient.from(tableName).select('*').range(start, start + step - 1));
            }
            
            // Race the fetch against a 10-second timeout per batch
            const results = await Promise.race([Promise.all(reqs), timeoutPromise]);
            
            for (const { data, error } of results) {
                if (error) throw error;
                if (!data || data.length === 0) { finished = true; break; }
                all = all.concat(data);
                if (data.length < step) { finished = true; break; }
            }
            from += parallel * step;
        }
        console.log(`[Supabase] ${tableName}: ${all.length} baris dimuat`);
    } catch (err) {
        console.warn(`[Timeout/Error] Gagal mengambil ${tableName} dari Supabase:`, err.message);
        return []; // Pastikan return array kosong agar tidak hang
    }
    // Samakan nama kolom Supabase dengan nama kolom CSV
    if (tableName === 'master_employee') {
        all.forEach(row => {
            if (row['WH Area'] === undefined) row['WH Area'] = row['Area'] || '';
            if (row['Work Contract'] === undefined) row['Work Contract'] = row['Bagian'] || '';
        });
    }
    return all;
}

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Muat data dari IndexedDB (memori lokal browser)
    const savedZmm = await loadFromDB('ZMM_LTO');
    const savedMb51 = await loadFromDB('mb51');
    const savedStock = await loadFromDB('stock');
    if (savedZmm && savedZmm.length) window.uploadedData['ZMM_LTO'] = savedZmm;
    if (savedMb51 && savedMb51.length) window.uploadedData['mb51'] = savedMb51;
    if (savedStock && savedStock.length) window.uploadedData['stock'] = savedStock;

    const isEmpty = (key) => !window.uploadedData[key] || window.uploadedData[key].length === 0;

    // 2. Ambil Master Employee + Work Days dari Supabase (paralel) kalau lokal kosong
    if (isEmpty('stock') || isEmpty('mb51')) {
        showTableStatus('⏳ Mengambil data dari Supabase...');
        await Promise.all(['master_employee', 'work_days'].map(async (table) => {
            const key = TABLE_TO_LOCAL[table];
            if (!isEmpty(key)) return;
            const remote = await fetchFromSupabase(table);
            if (remote.length) {
                window.uploadedData[key] = remote;
                saveToDB(key, remote);
            }
        }));
    }

    // 3. Tampilkan dulu (tidak menunggu framsys yang datanya sangat besar)
    try {
        if (typeof init === 'function') await init();
    } catch (err) {
        console.error('init() error:', err);
    }
    // Render tiap tabel sendiri-sendiri, supaya kalau satu error yang lain tetap tampil
    [renderStock, renderMb51, renderZmmLto].forEach(fn => {
        try { fn(); } catch (err) { console.error(fn.name + ' error:', err); }
    });

    // 4. Framsys dimuat di belakang layar (tidak menahan proses lain), lalu tabelnya di-refresh
    if (isEmpty('ZMM_LTO')) {
        const zt = document.getElementById('zmmlto-table');
        if (zt) zt.innerHTML = '<thead><tr><th>Informasi</th></tr></thead><tbody><tr><td style="text-align:center;padding:20px;">⏳ Mengambil data Framsys dari Supabase (data besar, mohon tunggu)...</td></tr></tbody>';
        fetchFromSupabase('framsys').then(remote => {
            if (remote.length) {
                window.uploadedData['ZMM_LTO'] = remote;
                saveToDB('ZMM_LTO', remote);
            }
            try { renderZmmLto(); } catch (err) { console.error('renderZmmLto error:', err); }
        });
    }

    // Intercept tombol "Hapus Data" agar berfungsi untuk file lokal
    document.querySelectorAll('.reset-db-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Stop Supabase logic
            
            const id = btn.id;
            // Di HTML: btn-reset-stock = tombol hapus framsys (ZMM_LTO)
            if (id === 'btn-reset-stock') {
                window.uploadedData['stock'] = [];
                saveToDB('stock', []);
                alert('Data Master Employee berhasil dihapus dari memori lokal.');
            }
            // Di HTML: btn-reset-mb51 = tombol hapus work days (mb51)
            else if (id === 'btn-reset-mb51') {
                window.uploadedData['mb51'] = [];
                saveToDB('mb51', []);
                alert('Data Work Days berhasil dihapus dari memori lokal.');
            }
            // Di HTML: btn-reset-zmmlto = tombol hapus master employee (stock)
            else if (id === 'btn-reset-zmmlto') {
                window.uploadedData['ZMM_LTO'] = [];
                saveToDB('ZMM_LTO', []);
                alert('Data Framsys berhasil dihapus dari memori lokal.');
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
// script.js memanggil fetchData('master_employee'/'work_days'/'framsys'),
// jadi nama tabel harus dipetakan ke key lokal ('stock'/'mb51'/'ZMM_LTO').
// (Pengambilan dari Supabase sudah dilakukan di atas saat halaman dibuka.)
async function fetchData(tableName) {
    const key = TABLE_TO_LOCAL[tableName] || tableName;
    return window.uploadedData[key] || [];
}
window.fetchData = fetchData;

// Override fungsi render yang lama (karena mereka mencari kolom 'Posting Date' dsb yang tidak ada di CSV baru)
function renderMb51() {
    let data = (window.uploadedData['mb51'] && window.uploadedData['mb51'].length > 0) ? window.uploadedData['mb51'] : (window.globalMb51Data || []);
    
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
}

function renderZmmLto() {
    let data = (window.uploadedData['ZMM_LTO'] && window.uploadedData['ZMM_LTO'].length > 0) ? window.uploadedData['ZMM_LTO'] : (window.globalZmmLtoData || []);
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

    // SEARCH FILTER
    const searchInput = document.getElementById('zmmlto-search');
    if (searchInput && searchInput.value) {
        const query = searchInput.value.toLowerCase();
        data = data.filter(row => {
            return Object.values(row).some(val => val && val.toString().toLowerCase().includes(query));
        });
    }

    // 4. Render tabel framsys secara KUSTOM dengan header bertingkat
    const table = document.getElementById('zmmlto-table');
    if (table && data.length > 0) {
        // Desain Header Tabel yang Digabung (Merged) tanpa In/Out/Total di sebelah kiri
        const thead = `
        <thead>
          <tr>
            <th rowspan="2" style="position: sticky; left: 0; z-index: 3; width: 150px; min-width: 150px; max-width: 150px; box-sizing: border-box; vertical-align: middle; text-align: center; background-color: #f8f9fa;">KIT TK</th>
            <th rowspan="2" style="position: sticky; left: 150px; z-index: 3; width: 220px; min-width: 220px; max-width: 220px; box-sizing: border-box; vertical-align: middle; text-align: center; background-color: #f8f9fa;">Nama TK</th>
            <th rowspan="2" style="position: sticky; left: 370px; z-index: 3; width: 200px; min-width: 200px; max-width: 200px; box-sizing: border-box; vertical-align: middle; text-align: center; background-color: #f8f9fa; box-shadow: 4px 0 6px -2px rgba(0,0,0,0.1);">WH Area</th>
            <th rowspan="2" style="vertical-align: middle; text-align: center; background-color: #f8f9fa;">Date Shift</th>
            <th rowspan="2" style="vertical-align: middle; text-align: center; background-color: #f8f9fa;">Hari</th>
            <th rowspan="2" style="vertical-align: middle; text-align: center; background-color: #f8f9fa;">Time In</th>
            <th rowspan="2" style="vertical-align: middle; text-align: center; background-color: #f8f9fa;">Time Out</th>
            <th rowspan="2" style="vertical-align: middle; text-align: center; background-color: #f8f9fa; border-right: 2px solid #ccc;">Durasi (Jam)</th>
            
            <th colspan="3" style="text-align: center; background-color: #92d050; color: #000; border-left: 2px solid #ccc; padding: 6px; font-size: 13px; height: 32px; box-sizing: border-box;">Working Days</th>
            <th colspan="3" style="text-align: center; background-color: #ffc000; color: #000; border-left: 2px solid #ccc; padding: 6px; font-size: 13px; height: 32px; box-sizing: border-box;">Attendance</th>
          </tr>
          <tr>
            <th style="background-color: #92d050; color: #000; top: 32px; width: 45px; min-width: 45px; padding: 4px; font-size: 12px; text-align: center; box-sizing: border-box;">In</th>
            <th style="background-color: #92d050; color: #000; top: 32px; width: 45px; min-width: 45px; padding: 4px; font-size: 12px; text-align: center; box-sizing: border-box;">Out</th>
            <th style="background-color: #92d050; color: #000; top: 32px; width: 55px; min-width: 55px; padding: 4px; font-size: 12px; text-align: center; font-weight: bold; box-sizing: border-box;">Total</th>
            <th style="background-color: #ffc000; color: #000; top: 32px; width: 45px; min-width: 45px; padding: 4px; font-size: 12px; text-align: center; border-left: 2px solid #ccc; box-sizing: border-box;">In</th>
            <th style="background-color: #ffc000; color: #000; top: 32px; width: 45px; min-width: 45px; padding: 4px; font-size: 12px; text-align: center; box-sizing: border-box;">Out</th>
            <th style="background-color: #ffc000; color: #000; top: 32px; width: 55px; min-width: 55px; padding: 4px; font-size: 12px; text-align: center; font-weight: bold; box-sizing: border-box;">Total</th>
          </tr>
        </thead>`;
        
        // Batasi 100 baris agar tidak lag
        const displayData = data.slice(0, 100);
        const tbody = `<tbody>${displayData.map(row => {
            // Rumus Working Days
            const tIn = (row['Time In'] || '').toString().trim();
            const tOut = (row['Time Out'] || '').toString().trim();
            
            let durasi = row['Durasi (Jam)'];
            let durasiVal = parseFloat(String(durasi || '0').replace(',', '.'));
            
            // PAKSA Hitung Ulang murni dari Time In dan Time Out (Mengabaikan nilai error dari Excel)
            if (tIn && tOut && tIn !== '-' && tOut !== '-') {
                const dIn = new Date(tIn);
                const dOut = new Date(tOut);
                if (!isNaN(dIn.getTime()) && !isNaN(dOut.getTime())) {
                    let calc = (dOut.getTime() - dIn.getTime()) / (1000 * 60 * 60);
                    if (calc > 0) {
                        durasiVal = calc;
                    } else {
                        durasiVal = 0; // Misal salah input jam pulang lebih pagi dari jam masuk
                    }
                } else {
                    durasiVal = 0;
                }
            } else {
                durasiVal = 0; // Jika salah satu tidak ada (In atau Out kosong), durasi pasti 0
            }
            durasi = Number(durasiVal.toFixed(2)).toString().replace('.', ',');

            // Rumus Working Days
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
                <td style="position: sticky; left: 0; z-index: 2; width: 150px; min-width: 150px; max-width: 150px; box-sizing: border-box; background-color: #fff; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${row['KIT TK'] || ''}</td>
                <td style="position: sticky; left: 150px; z-index: 2; width: 220px; min-width: 220px; max-width: 220px; box-sizing: border-box; background-color: #fff; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${row['Nama TK'] || ''}</td>
                <td style="position: sticky; left: 370px; z-index: 2; width: 200px; min-width: 200px; max-width: 200px; box-sizing: border-box; background-color: #fff; font-weight: 500; box-shadow: 4px 0 6px -2px rgba(0,0,0,0.1); overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${row['WH Area'] || ''}</td>
                <td>${row['Date Shift'] || ''}</td>
                <td>${row['Hari'] || ''}</td>
                <td>${tIn}</td>
                <td>${tOut}</td>
                <td style="border-right: 2px solid #ccc; font-weight: ${durasiVal !== parseFloat(String(row['Durasi (Jam)'] || '0').replace(',', '.')) ? '700; color: #16A34A;' : 'normal;'}">${durasi || ''}</td>
                <td style="border-left: 2px solid #ccc; text-align: center; padding: 4px;">${wdIn}</td>
                <td style="text-align: center; padding: 4px;">${wdOut}</td>
                <td style="font-weight: 600; text-align: center; padding: 4px;">${wdTotal}</td>
                <td style="border-left: 2px solid #ccc; text-align: center; padding: 4px;">${attIn}</td>
                <td style="text-align: center; padding: 4px;">${attOut}</td>
                <td style="font-weight: 600; text-align: center; padding: 4px;">${attTotal}</td>
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
    let data = (window.uploadedData['stock'] && window.uploadedData['stock'].length > 0) ? window.uploadedData['stock'] : (window.globalStockData || []);
    
    // OTOMATISASI RUMUS EXCEL: Double Check & >1 Name
    const workDaysData = (window.uploadedData['mb51'] && window.uploadedData['mb51'].length > 0) ? window.uploadedData['mb51'] : (window.globalMb51Data || []);
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
}

// Override renderTable agar tidak bikin lag karena meload puluhan ribu baris!
window.renderTable = function(tableId, data) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    let searchInputId = '';
    if (tableId === 'zmmlto-table') searchInputId = 'zmmlto-search';
    else if (tableId === 'mb51-table') searchInputId = 'mb51-search';
    else if (tableId === 'stock-table') searchInputId = 'stock-search';
    else if (tableId === 'summary-table') searchInputId = 'summary-search';
    
    let filteredData = [];
    let originalIndices = [];
    
    const searchInput = document.getElementById(searchInputId);
    const query = (searchInput && searchInput.value) ? searchInput.value.toLowerCase() : '';
    
    let doubleCheckFilter = 'all';
    if (tableId === 'stock-table') {
        const dcFilter = document.getElementById('stock-doublecheck-filter');
        if (dcFilter) doubleCheckFilter = dcFilter.value;
    }
    
    data.forEach((row, i) => {
        let matchSearch = true;
        let matchDC = true;

        if (query) {
            matchSearch = Object.values(row).some(val => val && val.toString().toLowerCase().includes(query));
        }
        
        if (tableId === 'stock-table' && doubleCheckFilter !== 'all') {
            const dcVal = (row['Double Check'] || '').toString().trim();
            if (doubleCheckFilter === 'filled') matchDC = dcVal !== '';
            else if (doubleCheckFilter === 'empty') matchDC = dcVal === '';
        }
        
        if (matchSearch && matchDC) {
            filteredData.push(row);
            originalIndices.push(i);
        }
    });

    // Update the total line counter dynamically based on filteredData length
    let prefix = '';
    if (tableId === 'stock-table') prefix = 'stock';
    else if (tableId === 'mb51-table') prefix = 'mb51';
    else if (tableId === 'summary-table') prefix = 'summary';
    
    if (prefix) {
        const span = document.getElementById(`${prefix}-dynamic-total-line`);
        if (span) span.textContent = filteredData.length;
    }

    if (filteredData.length === 0) {
        table.innerHTML = '<thead><tr><th>Informasi</th></tr></thead><tbody><tr><td style="text-align: center; padding: 20px; font-weight: 500; color: #888;">Data Tidak Ditemukan / Kosong</td></tr></tbody>';
        return;
    }

    const headers = Object.keys(filteredData[0]);
    
    // Logika kustom untuk freeze kolom di slide Hari Kerja (mb51-table) sampai kolom Nama (index ke-3)
    const isMb51 = tableId === 'mb51-table';
    const mb51Widths = [120, 200, 150, 250]; // Lebar kolom: Month, Area, Index, Nama
    
    const isStock = tableId === 'stock-table';
    
    const getFreezeStyle = (idx, headerName) => {
        let isSticky = false;
        let left = 0;
        let width = 150;
        let forceStrictWidth = false;
        let hasShadow = false;

        if (tableId === 'mb51-table' && idx < mb51Widths.length) {
            isSticky = true;
            width = mb51Widths[idx];
            for (let i = 0; i < idx; i++) left += mb51Widths[i];
            forceStrictWidth = (idx < mb51Widths.length - 1);
            if (idx === mb51Widths.length - 1) hasShadow = true;
        } else if (tableId === 'stock-table') {
            const stockCols = {
                'Pers.No.': 140, 'Full Name': 300, 'Employee Subgroup': 200,
                'Work Contract': 150, 'Cost Ctr': 120, 'WH Area': 120,
                'Location': 150, 'Double Check': 150, '>1 Name': 100, 'Remarks': 200
            };
            width = stockCols[headerName] || 150;
            if (idx < 2) {
                isSticky = true;
                left = (idx === 0) ? 0 : 140; // Sama dengan lebar Pers.No.
                forceStrictWidth = (idx === 0);
                if (idx === 1) hasShadow = true;
            }
        } else if (tableId === 'summary-table') {
            const summaryCols = {
                'Employee ID': 140, 'Employee Name': 300, 'Work Contract': 180,
                'WH Area': 180, 'Working Days': 140, 'Attendance': 140, 'Discipline (%)': 150
            };
            width = summaryCols[headerName] || 150;
            if (idx < 2) {
                isSticky = true;
                left = (idx === 0) ? 0 : 140; // Sama dengan lebar Employee ID
                forceStrictWidth = (idx === 0);
                if (idx === 1) hasShadow = true;
            }
        } else {
            // Default styling and width for other tables (ZMM_LTO, etc)
            const defaultWidths = {
                'Employee Name': 250, 'Nama': 250, 'Employee ID': 120, 'Index': 120,
                'Working Days': 120, 'Attendance': 120, 'Discipline (%)': 150,
                'Work Contract': 150, 'WH Area': 150, 'Material': 150,
                'Long Text': 300, 'PO': 120, 'Tanggal': 120
            };
            width = defaultWidths[headerName] || 150;
        }

        let style = `min-width: ${width}px; box-sizing: border-box; white-space: nowrap;`;
        if (forceStrictWidth) {
            style += ` max-width: ${width}px; width: ${width}px; overflow: hidden; text-overflow: ellipsis;`;
        }
        
        if (isSticky) {
            style = `position: sticky; left: ${left}px; ` + style;
            if (hasShadow) style += ' box-shadow: 4px 0 6px -2px rgba(0,0,0,0.1);';
        }
        
        return { style, isSticky };
    };

    const thead = `<thead><tr>${headers.map((h, idx) => {
        const freezeObj = getFreezeStyle(idx, h);
        const style = freezeObj.style;
        let thStyle = style ? style + (freezeObj.isSticky ? ' z-index: 3; background-color: #F1F5F9; font-weight: 700; color: #1E293B;' : '') : '';
        thStyle += ' text-align: left; padding-left: 12px; color: #1E293B; font-weight: 700;'; // Terapkan rata kiri & hitam ke SEMUA header
        return `<th style="${thStyle}">${h}</th>`;
    }).join('')}</tr></thead>`;
    
    // Batasi hanya 100 baris pertama supaya super cepat (no lag)
    const displayData = filteredData.slice(0, 100);
    
    const tbody = `<tbody>${displayData.map((row, rIdx) => {
        const originalIndex = originalIndices[rIdx];
        return `<tr data-rowindex="${originalIndex}">${headers.map((h, idx) => {
            const freezeObj = getFreezeStyle(idx, h);
            const style = freezeObj.style;
            const isSticky = freezeObj.isSticky;
            
            const isEditable = (isMb51 && h === 'Keterangan') || (isStock && h === 'Remarks');
            const editAttr = isEditable ? ` class="editable-cell" data-field="${h}" title="Klik 2 kali untuk mengedit (Enter untuk simpan)"` : '';
            
            let finalStyle = style ? style + (isSticky ? ' z-index: 2; background-color: #fff;' : '') : '';
            if (isSticky && (idx === 1 || (isMb51 && idx === mb51Widths.length - 1))) {
                finalStyle += ' font-weight: 500;';
            }
            if (isEditable) finalStyle += ' cursor: pointer;'; // Beri tanda bisa diklik
            
            finalStyle += ' text-align: left; padding-left: 12px;'; // Terapkan rata kiri ke SEMUA tabel
            
            return `<td${editAttr} style="${finalStyle}">${row[h] || ''}</td>`;
        }).join('')}</tr>`;
    }).join('')}</tbody>`;
    
    table.innerHTML = thead + tbody;

    // Pasang Event Listener untuk Kolom yang Bisa Diedit
    const editableCells = table.querySelectorAll('.editable-cell');
    editableCells.forEach(cell => {
        cell.addEventListener('dblclick', function() {
            this.contentEditable = true;
            this.focus();
            this.style.backgroundColor = '#fef08a'; // Warna kuning terang saat diedit
            this.style.outline = '2px solid #eab308';
        });
        
        cell.addEventListener('blur', function() {
            this.contentEditable = false;
            this.style.backgroundColor = '';
            this.style.outline = '';
            
            // Simpan teks baru ke array data agar tidak hilang
            const tr = this.closest('tr');
            if (tr) {
                const globalIdx = parseInt(tr.getAttribute('data-rowindex'));
                const field = this.getAttribute('data-field');
                if (!isNaN(globalIdx)) {
                    // Update array lokal
                    if (data[globalIdx]) data[globalIdx][field] = this.innerText.trim();
                    
                    // Update array global agar tersimpan
                    let globalData;
                    if (isMb51) globalData = window.globalMb51Data || window.uploadedData['mb51'];
                    else if (isStock) globalData = window.globalStockData || window.uploadedData['stock'];
                    
                    if (globalData && globalData[globalIdx]) {
                        globalData[globalIdx][field] = this.innerText.trim();
                    }
                }
            }
        });
        
        cell.addEventListener('keydown', function(e) {
            // Jika ditekan Enter, simpan & keluar dari mode edit
            if (e.key === 'Enter') {
                e.preventDefault();
                this.blur();
            }
        });
    });
};

function renderTable(tableId, data) {
    window.renderTable(tableId, data);
}

// Pasang event listener untuk semua kolom pencarian
document.addEventListener('DOMContentLoaded', () => {
    const setupSearch = (inputId, renderFunc) => {
        const input = document.getElementById(inputId);
        if (input && typeof renderFunc === 'function') {
            input.addEventListener('input', () => {
                renderFunc();
            });
        }
    };
    
    setupSearch('zmmlto-search', () => typeof renderZmmLto === 'function' && renderZmmLto());
    setupSearch('mb51-search', () => typeof renderMb51 === 'function' && renderMb51());
    setupSearch('stock-search', () => typeof renderStock === 'function' && renderStock());
    
    // Pasang listener untuk dropdown filter Double Check
    const dcFilter = document.getElementById('stock-doublecheck-filter');
    if (dcFilter) {
        dcFilter.addEventListener('change', () => typeof renderStock === 'function' && renderStock());
    }
});

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
                        let validContent = lines.slice(headerOffset).join('\n');
                        
                        // Hapus karakter BOM (Byte Order Mark) jika ada di awal teks
                        if (validContent.charCodeAt(0) === 0xFEFF) {
                            validContent = validContent.slice(1);
                        }
                        // Kadang-kadang karakter BOM tersembunyi sebagai string literal
                        validContent = validContent.replace(/^\uFEFF/g, '');
                        
                        Papa.parse(validContent, {
                            header: true,
                            skipEmptyLines: true,
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
                                    // Pindahkan data dari kolom tanpa nama (string kosong) ke 'Remarks'
                                    if (newRow[''] !== undefined) {
                                        if (newRow[''] && String(newRow['']).trim() !== '') {
                                            newRow['Remarks'] = newRow[''];
                                        }
                                        delete newRow[''];
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
                const dataMaster = await parseCSVFile(fileStock, 0);
                const dataWorkdays = await parseCSVFile(fileMb51, 0);
                const dataFramsys = await parseCSVFile(fileZmmlto, 0);

                // Mapping header baru (Work Contract, WH Area) ke header lama (Bagian, Area) agar diterima Supabase
                (dataMaster || []).forEach(row => {
                    if (row['Work Contract'] !== undefined) row['Bagian'] = row['Work Contract'];
                    if (row['WH Area'] !== undefined) row['Area'] = row['WH Area'];
                });

                // Daftar kolom yang diizinkan untuk masing-masing tabel (agar tidak ditolak Supabase)
                const validColumns = {
                    // Catatan: kolom 'Remarks' belum ada di tabel Supabase, jadi tidak dikirim
                    'master_employee': ['Pers.No.', 'Full Name', 'Area', 'Bagian', 'Double Check', '>1 Name'],
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
                            const trimmedKey = key.trim();
                            if (allowedKeys.includes(trimmedKey)) {
                                cleanRow[trimmedKey] = row[key];
                            }
                        }
                        return cleanRow;
                    });

                    // Hapus baris yang hanya berisi null/undefined/string kosong pada field utamanya
                    const filteredData = cleanedData.filter(row => {
                        if (Object.keys(row).length === 0) return false;
                        
                        // Periksa apakah baris ini memiliki key utama
                        let hasData = false;
                        if (tableName === 'master_employee' && row['Pers.No.']) hasData = true;
                        if (tableName === 'work_days' && row['Index']) hasData = true;
                        if (tableName === 'framsys' && row['KIT TK']) hasData = true;
                        
                        return hasData;
                    });
                    
                    if (filteredData.length === 0) {
                        let requiredCol = '';
                        if (tableName === 'master_employee') requiredCol = 'Pers.No.';
                        if (tableName === 'work_days') requiredCol = 'Index';
                        if (tableName === 'framsys') requiredCol = 'KIT TK';
                        
                        alert(`❌ PERINGATAN: File yang Anda upload untuk tabel ${tableName} sepertinya SALAH.\n\nFile ini tidak memiliki kolom utama "${requiredCol}".\nMohon pastikan Anda tidak terbalik saat memasukkan file!`);
                        console.warn(`[WARNING] No valid data found for ${tableName}. Skipping upload.`);
                        return;
                    }

                    // Kita kembalikan ke 1000 agar aman dari limit database gratisan Supabase,
                    // Tapi kali ini kita pasang INDIKATOR PERSENTASE agar Anda tahu prosesnya berjalan!
                    const chunkSize = 1000;
                    const totalRows = filteredData.length;
                    
                    for (let i = 0; i < totalRows; i += chunkSize) {
                        const chunk = filteredData.slice(i, i + chunkSize);
                        if (i === 0) console.log(`[DEBUG] Uploading to ${tableName}. First row in chunk:`, chunk[0]);
                        const { error } = await window.supabaseClient.from(tableName).upsert(chunk);
                        if (error) throw new Error(`Gagal upload ke ${tableName}: ` + error.message);
                        
                        // Update tulisan di tombol agar user tahu progresnya
                        const percent = Math.round(((i + chunk.length) / totalRows) * 100);
                        newBtn.textContent = `Mengupload ${tableName}: ${percent}%...`;
                    }
                }

                newBtn.textContent = 'Memulai Upload ke Supabase...';
                
                // 1. SIMPAN KE MEMORI LOKAL DULU agar web langsung terisi walau Supabase error
                const jobs = [
                    ['master_employee', 'stock', dataMaster],
                    ['work_days', 'mb51', dataWorkdays],
                    ['framsys', 'ZMM_LTO', dataFramsys]
                ];
                const savePromises = [];
                for (const [, key, rows] of jobs) {
                    if (rows && rows.length > 0) {
                        window.uploadedData[key] = rows;
                        savePromises.push(new Promise(res => {
                            const req = indexedDB.open(DB_NAME, 1);
                            req.onupgradeneeded = (e) => e.target.result.createObjectStore(STORE_NAME);
                            req.onsuccess = (e) => {
                                const tx = e.target.result.transaction(STORE_NAME, 'readwrite');
                                tx.objectStore(STORE_NAME).put(rows, key);
                                tx.oncomplete = res;
                                tx.onerror = res;
                            };
                            req.onerror = res;
                        }));
                    }
                }
                await Promise.all(savePromises);

                // RE-RENDER LANGSUNG agar user bisa langsung lihat hasil tanpa menunggu Supabase
                try {
                    if (typeof init === 'function') init();
                    [renderStock, renderMb51, renderZmmLto].forEach(fn => {
                        try { fn(); } catch(e) {}
                    });
                    renderSummary();
                } catch(e) { console.error('Error re-render lokal:', e); }

                // 2. Upload ke Supabase di background
                newBtn.textContent = 'Menyinkronkan dengan Supabase...';
                
                // Jangan pakai await di luar, jalankan sebagai background process
                (async () => {
                    const uploadErrors = [];
                    for (const [table, , rows] of jobs) {
                        if (rows && rows.length > 0) {
                            try {
                                await uploadToSupabase(table, rows);
                            } catch (e) {
                                console.error(e);
                                uploadErrors.push(e.message);
                            }
                        }
                    }
                    if (uploadErrors.length) {
                        console.warn("Sebagian gagal dikirim ke Supabase:\n" + uploadErrors.join('\n'));
                    } else {
                        console.log("Sinkronisasi Supabase Selesai!");
                    }
                    newBtn.textContent = 'Upload Selesai & Tersimpan!';
                    setTimeout(() => { newBtn.textContent = 'Proses & Upload'; newBtn.disabled = false; }, 3000);
                })();
                
                alert("Data berhasil diproses dan disimpan di memori lokal! Anda sudah bisa melihatnya di tabel sekarang.");
                // Hilangkan window.location.reload() agar tidak mereset state dan loading ulang
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

// Drag to Scroll implementation for all table wrappers
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.table-wrapper');
    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;
        let startY;
        let scrollTop;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            startY = e.pageY - slider.offsetTop;
            scrollTop = slider.scrollTop;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'default';
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'default';
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walkX = (x - startX) * 1.5;
            slider.scrollLeft = scrollLeft - walkX;
            const y = e.pageY - slider.offsetTop;
            const walkY = (y - startY) * 1.5;
            slider.scrollTop = scrollTop - walkY;
        });
    });
});


