/**
 * Master Employee 1 & Report SPL Module
 * Menyediakan Sidebar/Drawer 2 Slide:
 * - Slide 1: Tampilan Data Master Employee 1 (Struktur Hierarki Tim & Approver)
 * - Slide 2: Report & Rekapitulasi SPL Lembur (KPI, Filter, Export CSV & Print)
 */

let currentMasterFilterArea = 'ALL';
let currentMasterFilterLoc = 'ALL';
let currentMasterSearch = '';

let currentReportFilterMonth = 'ALL';
let currentReportFilterStatus = 'ALL';
let currentReportSearch = '';

function toggleMasterReportSidebar() {
    const sidebar = document.getElementById('master-report-sidebar');
    const overlay = document.getElementById('master-report-overlay');
    if (!sidebar || !overlay) return;
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) {
        closeMasterReportSidebar();
    } else {
        openMasterReportSidebar();
    }
}

function toggleMasterReportView() {
    const masterView = document.getElementById('master-report-view');
    if (!masterView) return;

    const isActive = masterView.classList.contains('active');

    // Hide all view sections
    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    // Deselect all nav items
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    if (isActive) {
        // If already showing, go back to dashboard
        const dashView = document.getElementById('dashboard-view');
        const dashNav = document.querySelector('.nav-item[data-target="dashboard"]');
        if (dashView) dashView.classList.add('active');
        if (dashNav) dashNav.classList.add('active');
    } else {
        // Show master-report-view
        masterView.classList.add('active');
        // Hide topbar buttons that don't apply
        const uploadBtn = document.getElementById('btn-upload');
        if (uploadBtn) uploadBtn.style.display = 'none';
        const exportBtn = document.getElementById('btn-print');
        if (exportBtn) exportBtn.style.display = 'none';
        const btnExportCen5 = document.getElementById('btn-export-cen5');
        const btnExportCen2 = document.getElementById('btn-export-cen2');
        if (btnExportCen5) btnExportCen5.style.display = 'none';
        if (btnExportCen2) btnExportCen2.style.display = 'none';
        const resetBtn = document.getElementById('btn-reset-summary');
        if (resetBtn) resetBtn.style.display = 'none';

        // Render Report SPL directly
        initReportDateFilter();
        renderSplReportSlide();
    }
}

function openMasterReportSidebar() {
    const sidebar = document.getElementById('master-report-sidebar');
    const overlay = document.getElementById('master-report-overlay');
    if (sidebar && overlay) {
        sidebar.classList.add('open');
        overlay.classList.add('open');
        sidebar.style.pointerEvents = 'auto';
        document.body.style.overflow = 'hidden';
        
        // Render kedua slide saat dibuka
        renderMasterEmployeeSlide();
        renderSplReportSlide();
    }
}

function closeMasterReportSidebar() {
    const sidebar = document.getElementById('master-report-sidebar');
    const overlay = document.getElementById('master-report-overlay');
    if (sidebar && overlay) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function switchMasterReportSlide(slideNum) {
    const tab1 = document.getElementById('mr-tab-1');
    const tab2 = document.getElementById('mr-tab-2');
    const slide1 = document.getElementById('mr-slide-1');
    const slide2 = document.getElementById('mr-slide-2');

    if (!tab1 || !tab2 || !slide1 || !slide2) return;

    if (slideNum === 1) {
        tab1.classList.add('active');
        tab2.classList.remove('active');
        slide1.style.display = 'block';
        slide2.style.display = 'none';
        renderMasterEmployeeSlide();
    } else {
        tab2.classList.add('active');
        tab1.classList.remove('active');
        slide2.style.display = 'block';
        slide1.style.display = 'none';
        initReportDateFilter();
        renderSplReportSlide();
    }
}

// ========================================================
// SLIDE 1: DATA MASTER EMPLOYEE 1
// ========================================================

function getMasterEmployeeData() {
    if (typeof SPL_MASTER_DATA !== 'undefined' && Array.isArray(SPL_MASTER_DATA)) {
        return SPL_MASTER_DATA;
    }
    return [];
}

function populateMasterEmployeeFilters() {
    const data = getMasterEmployeeData();
    const areaSelect = document.getElementById('mr-filter-area');
    const locSelect = document.getElementById('mr-filter-loc');
    if (!areaSelect || !locSelect) return;

    const areas = [...new Set(data.map(d => d.area).filter(Boolean))].sort();
    const locs = [...new Set(data.map(d => d.location).filter(Boolean))].sort();

    areaSelect.innerHTML = '<option value="ALL">Semua Area Warehouse</option>' + 
        areas.map(a => `<option value="${a}">${a}</option>`).join('');

    locSelect.innerHTML = '<option value="ALL">Semua Lokasi</option>' + 
        locs.map(l => `<option value="${l}">${l}</option>`).join('');
}

function renderMasterEmployeeSlide() {
    const data = getMasterEmployeeData();
    const tbody = document.getElementById('mr-employee-tbody');
    const countBadge = document.getElementById('mr-total-emp-count');
    const filterArea = document.getElementById('mr-filter-area')?.value || 'ALL';
    const filterLoc = document.getElementById('mr-filter-loc')?.value || 'ALL';
    const searchVal = (document.getElementById('mr-search-employee')?.value || '').toLowerCase().trim();

    if (!tbody) return;

    let filtered = data.filter(item => {
        if (filterArea !== 'ALL' && item.area !== filterArea) return false;
        if (filterLoc !== 'ALL' && item.location !== filterLoc) return false;
        if (searchVal) {
            const matchName = item.name && item.name.toLowerCase().includes(searchVal);
            const matchPersNo = item.persNo && String(item.persNo).includes(searchVal);
            const matchKasie = item.kasieName && item.kasieName.toLowerCase().includes(searchVal);
            if (!matchName && !matchPersNo && !matchKasie) return false;
        }
        return true;
    });

    if (countBadge) {
        countBadge.textContent = `${filtered.length} Karyawan`;
    }

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 36px 16px; color: #94a3b8; font-size: 0.88rem;">
                    Data Master Employee tidak ditemukan dengan filter yang dipilih.
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = filtered.map((item, idx) => `
        <tr style="border-bottom: 1px solid #f1f5f9; transition: background 0.15s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
            <td style="padding: 12px 16px; font-size: 0.85rem; color: #000000; text-align: left; font-weight: 600;">${idx + 1}</td>
            <td style="padding: 12px 16px; font-size: 0.85rem; color: #000000; font-family: monospace; font-weight: 600;">${item.persNo || '-'}</td>
            <td style="padding: 12px 16px; font-weight: 700; color: #000000; font-size: 0.88rem;">👤 ${item.name || '-'}</td>
            <td style="padding: 12px 16px;">
                <span style="display: inline-block; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 6px; font-size: 0.76rem; font-weight: 700;">${item.area || '-'}</span>
            </td>
            <td style="padding: 12px 16px; font-size: 0.85rem; color: #000000; font-weight: 500;">${item.location || '-'}</td>
            <td style="padding: 12px 16px;">
                <div style="font-weight: 600; color: #000000; font-size: 0.85rem;">${item.kasieName || '-'}</div>
                <div style="font-size: 0.74rem; color: #64748b;">${item.kasieNo ? 'NIK: ' + item.kasieNo : 'Inisiator'}</div>
            </td>
        </tr>
    `).join('');
}

// Export Master Employee ke Excel / CSV
function exportMasterEmployeeExcel() {
    if (typeof XLSX === 'undefined') {
        alert('Pustaka XLSX (SheetJS) belum termuat. Mohon muat ulang halaman.');
        return;
    }

    const data = getMasterEmployeeData();
    const filterArea = document.getElementById('mr-filter-area')?.value || 'ALL';
    const filterLoc = document.getElementById('mr-filter-loc')?.value || 'ALL';
    const searchVal = (document.getElementById('mr-search-employee')?.value || '').toLowerCase().trim();

    const filtered = data.filter(item => {
        if (filterArea !== 'ALL' && item.area !== filterArea) return false;
        if (filterLoc !== 'ALL' && item.location !== filterLoc) return false;
        if (searchVal) {
            const matchName = item.name && item.name.toLowerCase().includes(searchVal);
            const matchPersNo = item.persNo && String(item.persNo).includes(searchVal);
            const matchKasie = item.kasieName && item.kasieName.toLowerCase().includes(searchVal);
            if (!matchName && !matchPersNo && !matchKasie) return false;
        }
        return true;
    });

    if (filtered.length === 0) {
        alert('Tidak ada data Master Employee yang sesuai filter untuk diekspor!');
        return;
    }

    const rows = filtered.map((item, idx) => ({
        'No': idx + 1,
        'Employee ID': item.persNo || '-',
        'Employee Name': item.name || '-',
        'WH Area': item.area || '-',
        'Location': item.location || '-',
        'Kasie (Inisiator)': item.kasieName || '-'
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    ws['!cols'] = [
        { wch: 6 },
        { wch: 16 },
        { wch: 28 },
        { wch: 18 },
        { wch: 18 },
        { wch: 26 }
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Master Employee");
    XLSX.writeFile(wb, `Master_Employee_${new Date().toISOString().substring(0, 10)}.xlsx`);
}

window.exportMasterEmployeeExcel = exportMasterEmployeeExcel;
window.exportMasterEmployeeCsv = exportMasterEmployeeExcel;

// ========================================================
// Helper konversi aneka format tanggal (YYYY-MM-DD, DD/MM/YYYY, DD Mon YYYY, Date) ke YYYY-MM-DD
function normalizeDateToYmd(val) {
    if (!val) return '';
    if (val instanceof Date) {
        if (isNaN(val.getTime())) return '';
        const y = val.getFullYear();
        const m = String(val.getMonth() + 1).padStart(2, '0');
        const d = String(val.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }
    const str = String(val).trim();
    if (!str || str === '-') return '';

    // Format YYYY-MM-DD atau YYYY/MM/DD
    let m = str.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
    if (m) {
        return `${m[1]}-${String(m[2]).padStart(2, '0')}-${String(m[3]).padStart(2, '0')}`;
    }

    // Format DD-MM-YYYY atau DD/MM/YYYY
    m = str.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/);
    if (m) {
        return `${m[3]}-${String(m[2]).padStart(2, '0')}-${String(m[1]).padStart(2, '0')}`;
    }

    // Format DD Mon YYYY (contoh: 01 Okt 2026 atau 19 Oktober 2026)
    const idMonths = {
        jan: '01', januari: '01',
        feb: '02', februari: '02',
        mar: '03', maret: '03',
        apr: '04', april: '04',
        mei: '05', may: '05',
        jun: '06', juni: '06',
        jul: '07', juli: '07',
        agu: '08', agustus: '08', aug: '08',
        sep: '09', september: '09',
        okt: '10', oktober: '10', oct: '10',
        nov: '11', november: '11',
        des: '12', desember: '12', dec: '12'
    };
    m = str.match(/^(\d{1,2})\s+([a-zA-Z]+)\s+(\d{4})/);
    if (m) {
        const monKey = m[2].toLowerCase();
        const mm = idMonths[monKey] || '01';
        return `${m[3]}-${mm}-${String(m[1]).padStart(2, '0')}`;
    }

    const parsed = new Date(str);
    if (!isNaN(parsed.getTime())) {
        const y = parsed.getFullYear();
        const mo = String(parsed.getMonth() + 1).padStart(2, '0');
        const d = String(parsed.getDate()).padStart(2, '0');
        return `${y}-${mo}-${d}`;
    }

    return str;
}

function getActiveDateFilterRange() {
    const dateInput = document.getElementById('mr-report-date-filter');
    if (!dateInput) return { start: '', end: '' };

    const fp = dateInput._flatpickr;
    if (fp && fp.selectedDates && fp.selectedDates.length > 0) {
        const s = normalizeDateToYmd(fp.selectedDates[0]);
        const e = fp.selectedDates[1] ? normalizeDateToYmd(fp.selectedDates[1]) : s;
        return { start: s, end: e };
    }

    const val = (fp && fp.altInput && fp.altInput.value) ? fp.altInput.value.trim() : (dateInput.value || '').trim();
    if (!val || val.toLowerCase().includes('semua')) {
        return { start: '', end: '' };
    }

    const parts = val.split(/\s+(?:to|s\/d|sampai|-)\s+/i);
    if (parts.length >= 2) {
        return {
            start: normalizeDateToYmd(parts[0]),
            end: normalizeDateToYmd(parts[1])
        };
    } else if (parts.length === 1 && parts[0]) {
        const s = normalizeDateToYmd(parts[0]);
        return { start: s, end: s };
    }

    return { start: '', end: '' };
}

/**
 * Mengubah status SPL ke Bahasa Inggris profesional
 * Mendukung data historis Bahasa Indonesia maupun Bahasa Inggris
 */
function formatFinalStatusEn(status) {
    if (!status) return '-';
    const s = String(status).trim();
    const lower = s.toLowerCase();

    if (lower === 'disetujui' || lower === 'approved') return 'Approved';
    if (lower === 'ditolak manager' || lower === 'rejected by manager' || lower === 'rejected manager') return 'Rejected by Manager';
    if (lower === 'menunggu manager' || lower === 'pending manager' || lower === 'waiting for manager') return 'Pending Manager';
    if (lower === 'ditolak kabag' || lower === 'rejected by kabag' || lower === 'rejected by dept head') return 'Rejected by Dept Head';
    if (lower === 'menunggu kabag' || lower === 'pending kabag' || lower === 'pending dept head') return 'Pending Dept Head';
    if (lower === 'ditolak kasie' || lower === 'rejected by kasie' || lower === 'rejected by section head') return 'Rejected by Section Head';
    if (lower === 'menunggu kasie' || lower === 'pending kasie' || lower === 'pending section head') return 'Pending Section Head';
    if (lower === 'ditolak' || lower === 'rejected') return 'Rejected';
    if (lower === 'menunggu' || lower === 'menunggu approval' || lower === 'pending approval') return 'Pending Approval';

    if (lower.startsWith('menunggu')) return s.replace(/^menunggu\s*/i, 'Pending ');
    if (lower.startsWith('ditolak')) return s.replace(/^ditolak\s*/i, 'Rejected by ');
    return s;
}

async function syncSplFromCloud() {
    if (!window.supabaseClient) return;
    try {
        const { data, error } = await window.supabaseClient.from('digital_spl').select('*').limit(200);
        if (!error && Array.isArray(data) && data.length > 0) {
            let localList = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
            let changed = false;

            data.forEach(remote => {
                if (!remote) return;
                const remoteDoc = remote.data || {
                    id: remote.id,
                    splNo: remote.spl_no
                };

                // Pastikan status approval terbaru dari database selalu dipakai
                if (remote.final_status) remoteDoc.finalStatus = remote.final_status;
                if (remote.kabag) remoteDoc.kabag = remote.kabag;
                if (remote.manager) remoteDoc.manager = remote.manager;

                const idx = localList.findIndex(l => l.id === remote.id || l.splNo === remote.spl_no);
                if (idx >= 0) {
                    const local = localList[idx];
                    if (
                        local.finalStatus !== remoteDoc.finalStatus ||
                        JSON.stringify(local.kabag) !== JSON.stringify(remoteDoc.kabag) ||
                        JSON.stringify(local.manager) !== JSON.stringify(remoteDoc.manager) ||
                        JSON.stringify(local.employees) !== JSON.stringify(remoteDoc.employees)
                    ) {
                        localList[idx] = { ...local, ...remoteDoc };
                        changed = true;
                    }
                } else {
                    localList.unshift(remoteDoc);
                    changed = true;
                }
            });

            if (changed) {
                if (typeof saveSplList === 'function') {
                    saveSplList(localList);
                } else {
                    localStorage.setItem('DIGITAL_SPL_DATA', JSON.stringify(localList));
                }
                renderSplReportSlide(true); // render ulang tanpa loop
            }
        }
    } catch (e) {
        console.warn('Sync SPL notice:', e);
    }
}

function renderSplReportSlide(skipCloudSync = false) {
    if (!skipCloudSync) {
        syncSplFromCloud();
    }
    const list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    const tbody = document.getElementById('mr-report-tbody');
    initReportDateFilter();

    const { start: filterStart, end: filterEnd } = getActiveDateFilterRange();
    const filterStatus = document.getElementById('mr-report-status')?.value || 'ALL';
    const filterSap = document.getElementById('mr-report-sap')?.value || 'ALL';
    const searchVal = (document.getElementById('mr-report-search')?.value || '').toLowerCase().trim();

    let filtered = list.filter(item => {
        if (!item) return false;
        if (filterStart && filterEnd) {
            const itemDate = normalizeDateToYmd(item.date);
            if (!itemDate) return false;
            if (itemDate < filterStart || itemDate > filterEnd) return false;
        }
        if (filterStatus !== 'ALL') {
            const rawStatus = (item.finalStatus || '').toLowerCase();
            const statusEn = formatFinalStatusEn(item.finalStatus).toLowerCase();
            if (filterStatus === 'approved' && !rawStatus.includes('setuju') && statusEn !== 'approved') return false;
            if (filterStatus === 'pending' && !rawStatus.includes('menunggu') && !statusEn.startsWith('pending')) return false;
            if (filterStatus === 'rejected' && !rawStatus.includes('tolak') && !statusEn.startsWith('rejected')) return false;
        }
        if (searchVal) {
            const statusEn = formatFinalStatusEn(item.finalStatus);
            const noMatch = item.splNo && item.splNo.toLowerCase().includes(searchVal);
            const areaMatch = item.area && item.area.toLowerCase().includes(searchVal);
            const reasonMatch = item.reason && item.reason.toLowerCase().includes(searchVal);
            const statusMatch = (item.finalStatus && item.finalStatus.toLowerCase().includes(searchVal)) ||
                                (statusEn && statusEn.toLowerCase().includes(searchVal));
            const creatorMatch = item.kasie && item.kasie.name && item.kasie.name.toLowerCase().includes(searchVal);
            const empMatch = item.employees && item.employees.some(e => e.name && e.name.toLowerCase().includes(searchVal));
            if (!noMatch && !areaMatch && !reasonMatch && !creatorMatch && !empMatch && !statusMatch) return false;
        }
        return true;
    });

    // Urutkan dokumen SPL secara berurutan berdasarkan tanggal dan nomor urut SPL
    filtered.sort((a, b) => {
        const dateA = a.date || '';
        const dateB = b.date || '';
        if (dateA !== dateB) return dateA.localeCompare(dateB);
        return (a.splNo || '').localeCompare(b.splNo || '', undefined, { numeric: true, sensitivity: 'base' });
    });

    // Hitung KPI Statistik dan breakdown per line karyawan
    const allLines = [];
    let totalManHours = 0;
    let totalOrang = 0;
    const matchingSplMap = new Map();

    filtered.forEach(item => {
        const emps = (Array.isArray(item.employees) && item.employees.length > 0)
            ? item.employees
            : [{ persNo: '-', name: '-', startTime: item.startTime, endTime: item.endTime, duration: item.duration, reason: item.reason }];

        const totalEmpInSpl = emps.length;

        emps.forEach((e, empIdx) => {
            if (searchVal) {
                const statusEn = formatFinalStatusEn(item.finalStatus);
                const docMatches = (item.splNo && item.splNo.toLowerCase().includes(searchVal)) ||
                                   (item.area && item.area.toLowerCase().includes(searchVal)) ||
                                   (item.location && item.location.toLowerCase().includes(searchVal)) ||
                                   (item.finalStatus && item.finalStatus.toLowerCase().includes(searchVal)) ||
                                   (statusEn && statusEn.toLowerCase().includes(searchVal)) ||
                                   (item.kasie && item.kasie.name && item.kasie.name.toLowerCase().includes(searchVal));
                const empMatches = (e.name && e.name.toLowerCase().includes(searchVal)) ||
                                   (e.persNo && String(e.persNo).includes(searchVal)) ||
                                   (e.reason && e.reason.toLowerCase().includes(searchVal));
                if (!docMatches && !empMatches) return;
            }

            // Filter SAP Status
            const statusVal = e.sapStatus || '';
            if (filterSap === 'Sudah' && statusVal !== 'Sudah') return;
            if (filterSap === 'Kosong' && statusVal !== '') return;

            const empDuration = Number(e.duration) || Number(item.duration) || 0;
            totalManHours += empDuration;
            totalOrang++;

            const splKey = item.id || item.splNo;
            if (!matchingSplMap.has(splKey)) {
                matchingSplMap.set(splKey, item);
            }

            allLines.push({
                spl: item,
                emp: e,
                empIdx: empIdx,
                totalEmpInSpl: totalEmpInSpl,
                statusVal: statusVal
            });
        });
    });

    // Hitung total dokumen SPL yang lolos filter dan total yang disetujui
    let countApproved = 0;
    matchingSplMap.forEach(splItem => {
        const rawStatus = (splItem.finalStatus || '').toLowerCase();
        const statusEn = formatFinalStatusEn(splItem.finalStatus).toLowerCase();
        if (rawStatus === 'disetujui' || statusEn === 'approved') {
            countApproved++;
        }
    });

    // Update KPI Card di Header Slide 2 sesuai hasil filter aktif
    document.getElementById('mr-kpi-total-spl').textContent = matchingSplMap.size;
    document.getElementById('mr-kpi-approved').textContent = countApproved;
    document.getElementById('mr-kpi-total-hours').textContent = totalManHours.toFixed(1);
    document.getElementById('mr-kpi-total-emp').textContent = totalOrang;

    // Update Total Line Counter
    const totalLineEl = document.getElementById('mr-report-total-line');
    if (totalLineEl) totalLineEl.textContent = allLines.length;

    if (!tbody) return;

    if (allLines.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="13" style="text-align: center; padding: 36px 16px; color: #94a3b8; font-size: 0.88rem;">
                    Belum ada rekapan data line SPL yang cocok dengan filter.
                </td>
            </tr>
        `;
        return;
    }

    const userRole = localStorage.getItem('AOT_USER_ROLE') || 'admin';
    const isAdmin = (userRole === 'admin');

    tbody.innerHTML = allLines.map((lineObj, idx) => {
        const item = lineObj.spl;
        const e = lineObj.emp;
        const empIdx = lineObj.empIdx;
        const totalEmpInSpl = lineObj.totalEmpInSpl;
        const statusVal = lineObj.statusVal || '';
        const sapDate = e.sapInputDate || item.sapInputDate || '';

        const statusEn = formatFinalStatusEn(item.finalStatus);
        const isApproved = statusEn === 'Approved';
        const isRejected = statusEn.startsWith('Rejected') || (item.finalStatus && item.finalStatus.includes('Ditolak'));
        const isPending = statusEn.startsWith('Pending') || (item.finalStatus && item.finalStatus.includes('Menunggu'));

        let badgeBg = '#f1f5f9';
        let badgeColor = '#475569';
        let badgeBorder = '#cbd5e1';
        let badgeDot = '#94a3b8';

        if (isApproved) {
            badgeBg = '#dcfce7';
            badgeColor = '#15803d';
            badgeBorder = '#86efac';
            badgeDot = '#16a34a';
        } else if (isRejected) {
            badgeBg = '#fee2e2';
            badgeColor = '#b91c1c';
            badgeBorder = '#fca5a5';
            badgeDot = '#ef4444';
        } else if (isPending) {
            badgeBg = '#fef3c7';
            badgeColor = '#b45309';
            badgeBorder = '#fde68a';
            badgeDot = '#d97706';
        }

        const startTime = e.startTime || item.startTime || '-';
        const endTime = e.endTime || item.endTime || '-';
        const duration = e.duration || item.duration || 0;
        const reason = e.reason || item.reason || '-';

        const isFirstLineOfSpl = empIdx === 0;
        const borderTopStyle = (idx > 0 && isFirstLineOfSpl) ? 'border-top: 2px solid #cbd5e1;' : 'border-bottom: 1px solid #f1f5f9;';

        return `
            <tr style="${borderTopStyle} transition: background 0.15s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
                <td style="padding: 12px 16px; font-size: 0.85rem; color: #000000; text-align: left; font-weight: 600;">${idx + 1}</td>
                <td style="padding: 12px 16px; white-space: nowrap; text-align: left;">
                    <span style="font-weight: 700; color: #000000; font-size: 0.88rem; font-family: monospace;">${item.splNo}</span>
                </td>
                <!-- Kolom Tanggal (Editable) -->
                <td style="padding: 12px 16px; white-space: nowrap; text-align: left;">
                    <span class="mr-editable-cell" 
                        contenteditable="true" 
                        onblur="saveSplReportInlineEdit('${item.id}', ${empIdx}, 'date', this.innerText)" 
                        onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}" 
                        title="Klik untuk mengedit Tanggal"
                        style="display: inline-block; font-weight: 600; color: #000000; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; border: 1px dashed transparent; outline: none; cursor: text; transition: all 0.2s;" 
                        onfocus="this.style.background='#fef08a'; this.style.borderColor='#eab308';" 
                        onblur="this.style.background='transparent'; this.style.borderColor='transparent';">${item.date || '-'}</span>
                </td>
                <td style="padding: 12px 16px; white-space: nowrap; text-align: left;">
                    <span style="font-weight: 600; color: #000000; font-size: 0.85rem;">${item.area || '-'}</span>
                </td>
                <td style="padding: 12px 16px; white-space: nowrap; text-align: left;">
                    <span style="color: #000000; font-size: 0.85rem;">${item.location || '-'}</span>
                </td>
                <td style="padding: 12px 16px; white-space: nowrap; text-align: left;">
                    <div style="font-weight: 600; color: #000000; font-size: 0.85rem;">${item.kasie ? item.kasie.name : '-'}</div>
                    <div style="font-size: 0.76rem; color: #64748b;">${item.creatorRole || 'Kasie'}</div>
                </td>
                <td style="padding: 12px 16px; white-space: nowrap; text-align: left;">
                    <div style="font-weight: 700; color: #000000; font-size: 0.88rem;">👤 ${e.name || '-'}</div>
                </td>
                <!-- Kolom Waktu Lembur (Editable) -->
                <td style="padding: 12px 16px; text-align: left; white-space: nowrap;">
                    <span class="mr-editable-cell" 
                        contenteditable="true" 
                        onblur="saveSplReportInlineEdit('${item.id}', ${empIdx}, 'time', this.innerText)" 
                        onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}" 
                        title="Klik untuk mengedit Waktu Lembur (contoh: 17:00 - 21:00)"
                        style="display: inline-block; font-weight: 600; color: #000000; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; border: 1px dashed transparent; outline: none; cursor: text; transition: all 0.2s;" 
                        onfocus="this.style.background='#fef08a'; this.style.borderColor='#eab308';" 
                        onblur="this.style.background='transparent'; this.style.borderColor='transparent';">${startTime} - ${endTime}</span>
                </td>
                <!-- Kolom Durasi (Editable) -->
                <td style="padding: 12px 16px; text-align: left; white-space: nowrap;">
                    <span class="mr-editable-cell" 
                        contenteditable="true" 
                        onblur="saveSplReportInlineEdit('${item.id}', ${empIdx}, 'duration', this.innerText)" 
                        onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}" 
                        title="Klik untuk mengedit Durasi (contoh: 4)"
                        style="display: inline-block; font-weight: 600; color: #000000; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; border: 1px dashed transparent; outline: none; cursor: text; transition: all 0.2s;" 
                        onfocus="this.style.background='#fef08a'; this.style.borderColor='#eab308';" 
                        onblur="this.style.background='transparent'; this.style.borderColor='transparent';">${duration} ${parseFloat(duration) <= 1 ? 'Hour' : 'Hours'}</span>
                </td>
                <td style="padding: 12px 16px; text-align: left; white-space: nowrap;">
                    <span style="
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        background: ${badgeBg};
                        color: ${badgeColor};
                        border: 1px solid ${badgeBorder};
                        padding: 5px 12px;
                        border-radius: 9999px;
                        font-size: 0.8rem;
                        font-weight: 700;
                        box-shadow: 0 1px 2px rgba(0,0,0,0.03);
                        letter-spacing: 0.01em;
                    ">
                        <span style="width: 6.5px; height: 6.5px; border-radius: 50%; background: ${badgeDot}; flex-shrink: 0;"></span>
                        ${statusEn}
                    </span>
                </td>
                <!-- Kolom Status SAP: Hanya Administrator yang bisa memilih dropdown, akun Viewer hanya melihat tampilan non-aktif -->
                <td style="padding: 10px 16px; text-align: left; white-space: nowrap;">
                    ${statusVal === 'Sudah' ? `
                        <span style="
                            display: inline-flex;
                            align-items: center;
                            gap: 6px;
                            background: #16a34a;
                            color: #ffffff;
                            border: 1.5px solid #15803d;
                            padding: 6px 14px;
                            border-radius: 8px;
                            font-size: 0.8rem;
                            font-weight: 700;
                            box-shadow: 0 2px 6px rgba(22, 163, 74, 0.25);
                            cursor: not-allowed;
                            user-select: none;
                        " title="Terkunci: Sudah di-input ke SAP (Tidak dapat diubah lagi)">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            Sudah
                        </span>
                    ` : (isAdmin ? `
                        <select onchange="updateSapStatus('${item.id}', ${empIdx}, this.value)" 
                            style="
                                background: #ffffff;
                                color: #000000;
                                border: 1.5px solid #cbd5e1;
                                padding: 6px 12px;
                                border-radius: 8px;
                                font-size: 0.8rem;
                                font-weight: 700;
                                cursor: pointer;
                                outline: none;
                                font-family: 'Inter', sans-serif;
                                box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                                transition: all 0.2s;
                            ">
                            <option value="" selected>-</option>
                            <option value="Sudah" style="color: #15803d; font-weight: 700; background: #fff;">Sudah</option>
                        </select>
                    ` : `
                        <span style="
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            color: #94a3b8;
                            font-weight: 700;
                            padding: 6px 16px;
                            font-size: 0.82rem;
                            background: #f8fafc;
                            border: 1.5px dashed #cbd5e1;
                            border-radius: 8px;
                            cursor: not-allowed;
                            user-select: none;
                        " title="Hanya Administrator yang memiliki hak mengubah Status SAP">-</span>
                    `)}
                </td>
                <td style="padding: 12px 16px; text-align: left;">
                    <button type="button" onclick="printSplDocument('${item.id}')" style="background: #f1f5f9; border: 1px solid #cbd5e1; color: #1e293b; padding: 6px 14px; border-radius: 8px; font-size: 0.78rem; font-weight: 600; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 5px;" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                        <span>Print</span>
                    </button>
                </td>
                <!-- Kolom Uraian / Pekerjaan (Editable) -->
                <td style="padding: 12px 16px; min-width: 240px; max-width: 450px; text-align: left; white-space: normal; word-break: break-word;">
                    <div class="mr-editable-cell" 
                        contenteditable="true" 
                        onblur="saveSplReportInlineEdit('${item.id}', ${empIdx}, 'reason', this.innerText)" 
                        title="Klik untuk mengedit Uraian / Pekerjaan"
                        style="display: block; font-size: 0.85rem; color: #000000; font-weight: 500; line-height: 1.45; padding: 3px 6px; border-radius: 4px; border: 1px dashed transparent; outline: none; cursor: text; transition: all 0.2s;" 
                        onfocus="this.style.background='#fef08a'; this.style.borderColor='#eab308';" 
                        onblur="this.style.background='transparent'; this.style.borderColor='transparent';">${reason}</div>
                </td>
                <!-- Kolom Aksi (Tambah Karyawan ke SPL & Hapus Baris) -->
                <td style="padding: 12px 16px; text-align: center; vertical-align: middle; white-space: nowrap;">
                    <div style="display: inline-flex; align-items: center; gap: 6px;">
                        <button type="button" 
                            onclick="openAddSplEmpModal('${item.id}', '${item.splNo}')" 
                            title="Tambah karyawan baru ke dokumen SPL ini" 
                            style="background: #eff6ff; border: 1px solid #bfdbfe; color: #1d4ed8; border-radius: 8px; padding: 6px 9px; cursor: pointer; font-size: 12px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px; transition: all 0.15s;"
                            onmouseover="this.style.background='#dbeafe'; this.style.borderColor='#3b82f6';"
                            onmouseout="this.style.background='#eff6ff'; this.style.borderColor='#bfdbfe';">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span>Tambah</span>
                        </button>

                        <button type="button" 
                            onclick="deleteSplReportRow('${item.id}', ${empIdx}, '${(e.name || '').replace(/'/g, "\\'")}')" 
                            title="Hapus baris lembur ini" 
                            style="background: #fee2e2; border: 1px solid #fca5a5; color: #dc2626; border-radius: 8px; padding: 6px 9px; cursor: pointer; font-size: 12px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px; transition: all 0.15s;"
                            onmouseover="this.style.background='#fecaca'; this.style.borderColor='#ef4444';"
                            onmouseout="this.style.background='#fee2e2'; this.style.borderColor='#fca5a5';">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            <span>Hapus</span>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Fungsi Update Status SAP Langsung dari Kolom oleh User (Sudah / Kosong)
window.updateSapStatus = function(splId, empIdx, newStatus) {
    const userRole = localStorage.getItem('AOT_USER_ROLE') || 'admin';
    if (userRole !== 'admin') {
        alert('Akses Ditolak: Hanya akun Administrator yang memiliki hak mengubah Status SAP.');
        renderSplReportSlide();
        return;
    }

    if (newStatus !== 'Sudah') return;

    const confirmLock = confirm('Apakah Anda yakin data lembur ini sudah di-input ke SAP?\nSetelah ditandai "Sudah", status akan terkunci permanen dan tidak dapat diubah lagi.');
    if (!confirmLock) {
        renderSplReportSlide();
        return;
    }

    let list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    const item = list.find(s => s.id === splId);
    if (!item) return;

    if (Array.isArray(item.employees) && item.employees[empIdx]) {
        const emp = item.employees[empIdx];
        emp.sapStatus = 'Sudah';
        emp.sapInputDate = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
        
        // Update item sapStatus
        const allDone = item.employees.every(e => e.sapStatus === 'Sudah');
        item.sapStatus = allDone ? 'Sudah' : 'Sebagian';
        item.sapInputDate = allDone ? (item.sapInputDate || emp.sapInputDate) : null;
    } else {
        item.sapStatus = 'Sudah';
        item.sapInputDate = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    if (typeof saveSplList === 'function') {
        saveSplList(list);
    } else {
        localStorage.setItem('DIGITAL_SPL_DATA', JSON.stringify(list));
    }

    // Sync juga ke Supabase jika terhubung
    if (window.supabaseClient) {
        window.supabaseClient.from('digital_spl').upsert({
            id: item.id,
            spl_no: item.splNo,
            data: item,
            final_status: item.finalStatus,
            updated_at: new Date().toISOString()
        }).then(() => {}).catch(() => {});
    }

    renderSplReportSlide();
};

// ========================================================
// EDIT MANUAL DATA REPORT OVERTIME (TANGGAL, WAKTU, DURASI, URAIAN)
// ========================================================
window.saveSplReportInlineEdit = function(splId, empIdx, field, rawValue) {
    const value = String(rawValue || '').trim();
    let list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    const item = list.find(s => s.id === splId);
    if (!item) return;

    let hasChange = false;

    if (field === 'date') {
        if (item.date !== value) {
            item.date = value;
            hasChange = true;
        }
    } else if (field === 'time') {
        // Format diharapkan: '17:00 - 21:00' atau sejenisnya
        const parts = value.split('-').map(p => p.trim());
        const start = parts[0] || '';
        const end = parts[1] || '';
        if (Array.isArray(item.employees) && item.employees[empIdx]) {
            item.employees[empIdx].startTime = start;
            item.employees[empIdx].endTime = end;
        }
        if (empIdx === 0) {
            item.startTime = start;
            item.endTime = end;
        }
        hasChange = true;
    } else if (field === 'duration') {
        // Ambil angka saja (misal "4 Jam" -> 4)
        const match = value.match(/[\d.]+/);
        const durNum = match ? parseFloat(match[0]) : 0;
        if (Array.isArray(item.employees) && item.employees[empIdx]) {
            item.employees[empIdx].duration = durNum;
        }
        if (empIdx === 0) {
            item.duration = durNum;
        }
        hasChange = true;
    } else if (field === 'reason') {
        if (Array.isArray(item.employees) && item.employees[empIdx]) {
            item.employees[empIdx].reason = value;
        }
        if (empIdx === 0) {
            item.reason = value;
        }
        hasChange = true;
    }

    if (hasChange) {
        if (typeof saveSplList === 'function') {
            saveSplList(list);
        } else {
            localStorage.setItem('DIGITAL_SPL_DATA', JSON.stringify(list));
        }

        if (window.supabaseClient) {
            window.supabaseClient.from('digital_spl').upsert({
                id: item.id,
                spl_no: item.splNo,
                data: item,
                final_status: item.finalStatus,
                updated_at: new Date().toISOString()
            }).then(() => {}).catch(() => {});
        }

        // Render ulang untuk memperbarui total KPI man hours / tampilan
        renderSplReportSlide();
    }
};

// ========================================================
// HAPUS BARIS DATA LEMBUR KARYAWAN PER BARIS
// ========================================================
window.deleteSplReportRow = function(splId, empIdx, empName) {
    const displayName = empName ? `Karyawan "${empName}"` : 'baris lembur ini';
    const confirmDelete = confirm(`Apakah Anda yakin ingin menghapus data ${displayName} dari laporan lembur?\n\nTindakan ini tidak dapat dibatalkan.`);
    if (!confirmDelete) return;

    let list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    const itemIndex = list.findIndex(s => s.id === splId);
    if (itemIndex === -1) return;

    const item = list[itemIndex];
    let shouldDeleteWholeSpl = false;

    if (Array.isArray(item.employees) && item.employees.length > 0) {
        // Hapus 1 karyawan dari daftar employees
        item.employees.splice(empIdx, 1);
        // Jika sudah tidak ada karyawan sama sekali dalam SPL ini, hapus seluruh dokumen SPL
        if (item.employees.length === 0) {
            shouldDeleteWholeSpl = true;
        }
    } else {
        shouldDeleteWholeSpl = true;
    }

    if (shouldDeleteWholeSpl) {
        list.splice(itemIndex, 1);
        // Hapus juga dari Supabase jika ada
        if (window.supabaseClient) {
            window.supabaseClient.from('digital_spl').delete().eq('id', splId).then(() => {}).catch(() => {});
        }
    } else {
        // Perbarui data SPL di Supabase jika masih ada karyawan lain
        if (window.supabaseClient) {
            window.supabaseClient.from('digital_spl').upsert({
                id: item.id,
                spl_no: item.splNo,
                data: item,
                final_status: item.finalStatus,
                updated_at: new Date().toISOString()
            }).then(() => {}).catch(() => {});
        }
    }

    if (typeof saveSplList === 'function') {
        saveSplList(list);
    } else {
        localStorage.setItem('DIGITAL_SPL_DATA', JSON.stringify(list));
    }

    // Refresh render slide Report Overtime dan history
    renderSplReportSlide();
    if (typeof renderSplHistoryList === 'function') renderSplHistoryList();
};

// ========================================================
// LOGIKA TAMBAH KARYAWAN KE DOKUMEN SPL YANG SUDAH ADA
// ========================================================
window.openAddSplEmpModal = function(splId, splNo) {
    const modal = document.getElementById('modal-add-spl-emp');
    const select = document.getElementById('add-spl-select-emp');
    const targetIdInput = document.getElementById('add-spl-target-id');
    const targetNoLabel = document.getElementById('modal-add-spl-target-no');
    const startInput = document.getElementById('add-spl-start-time');
    const endInput = document.getElementById('add-spl-end-time');
    const durInput = document.getElementById('add-spl-duration');
    const reasonInput = document.getElementById('add-spl-reason');

    if (!modal || !select) return;

    let list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    const item = list.find(s => s.id === splId);
    if (!item) return;

    targetIdInput.value = splId;
    if (targetNoLabel) targetNoLabel.textContent = `No. SPL: ${splNo || item.splNo} (${item.area || 'All'})`;

    // Ambil default jam dan alasan dari baris pertama SPL
    const firstEmp = (Array.isArray(item.employees) && item.employees[0]) ? item.employees[0] : null;
    startInput.value = (firstEmp && firstEmp.startTime) ? firstEmp.startTime : (item.startTime || '17:00');
    endInput.value = (firstEmp && firstEmp.endTime) ? firstEmp.endTime : (item.endTime || '21:00');
    durInput.value = (firstEmp && firstEmp.duration) ? firstEmp.duration : (item.duration || 4);
    reasonInput.value = (firstEmp && firstEmp.reason) ? firstEmp.reason : (item.reason || '');

    // Kumpulkan daftar karyawan dari Master Employee sesuai Area SPL
    const masterList = (typeof SPL_MASTER_DATA !== 'undefined' && Array.isArray(SPL_MASTER_DATA)) ? SPL_MASTER_DATA : [];
    
    // Filter master employee berdasarkan area dokumen SPL (atau semua jika tidak spesifik)
    let availableEmployees = masterList;
    if (item.area) {
        const areaFiltered = masterList.filter(m => (m.area || '').toLowerCase().trim() === item.area.toLowerCase().trim());
        if (areaFiltered.length > 0) availableEmployees = areaFiltered;
    }

    // Ambil NIK yang SUDAH ADA di SPL ini agar tidak duplikat
    const existingPersNos = new Set((item.employees || []).map(e => String(e.persNo || '').trim()));

    // Simpan data karyawan untuk pencarian real-time
    window._currentAvailableEmployeesForSpl = availableEmployees.map(m => {
        const pNo = String(m.persNo || '').trim();
        const isAlreadyIn = existingPersNos.has(pNo);
        return {
            persNo: pNo,
            name: m.name || '-',
            isAlreadyIn: isAlreadyIn
        };
    });

    // Reset input search
    const searchInput = document.getElementById('add-spl-search-emp');
    if (searchInput) searchInput.value = '';

    window.filterAddSplEmpOptions('');
    modal.style.display = 'flex';
    if (searchInput) setTimeout(() => searchInput.focus(), 100);
};

window.filterAddSplEmpOptions = function(query) {
    const select = document.getElementById('add-spl-select-emp');
    if (!select) return;

    const list = window._currentAvailableEmployeesForSpl || [];
    const q = (query || '').toLowerCase().trim();

    const filtered = list.filter(m => {
        if (!q) return true;
        return m.name.toLowerCase().includes(q) || m.persNo.toLowerCase().includes(q);
    });

    let html = '<option value="">-- Pilih Karyawan --</option>';
    if (filtered.length === 0) {
        html += '<option value="" disabled style="color: #ef4444;">(Karyawan tidak ditemukan)</option>';
    } else {
        filtered.forEach(m => {
            const disabledAttr = m.isAlreadyIn ? 'disabled style="color: #94a3b8;"' : '';
            const tag = m.isAlreadyIn ? ' (Sudah ada di SPL)' : '';
            html += `<option value="${m.persNo}" data-name="${m.name}" ${disabledAttr}>${m.name} [NIK: ${m.persNo}]${tag}</option>`;
        });
    }

    select.innerHTML = html;
};

window.closeAddSplEmpModal = function() {
    const modal = document.getElementById('modal-add-spl-emp');
    if (modal) modal.style.display = 'none';
};

window.onSelectAddSplEmp = function(persNo) {
    // Bisa digunakan untuk auto-lookup jika perlu
};

window.calculateAddSplDuration = function() {
    const start = document.getElementById('add-spl-start-time')?.value;
    const end = document.getElementById('add-spl-end-time')?.value;
    const durInput = document.getElementById('add-spl-duration');
    if (!start || !end || !durInput) return;

    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);

    let startMins = sh * 60 + sm;
    let endMins = eh * 60 + em;
    if (endMins < startMins) {
        endMins += 24 * 60; // Lewat tengah malam
    }

    let diffHours = (endMins - startMins) / 60;
    if (diffHours < 0) diffHours = 0;
    durInput.value = parseFloat(diffHours.toFixed(1));
};

window.submitAddSplEmp = function(e) {
    e.preventDefault();
    const splId = document.getElementById('add-spl-target-id').value;
    const select = document.getElementById('add-spl-select-emp');
    const persNo = select ? select.value : '';
    const selectedOpt = select ? select.options[select.selectedIndex] : null;
    const empName = selectedOpt ? selectedOpt.getAttribute('data-name') : '';
    const start = document.getElementById('add-spl-start-time').value;
    const end = document.getElementById('add-spl-end-time').value;
    const duration = parseFloat(document.getElementById('add-spl-duration').value) || 0;
    const reason = document.getElementById('add-spl-reason').value.trim();

    if (!splId || !persNo) {
        alert('Mohon pilih karyawan yang ingin ditambahkan!');
        return;
    }

    let list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    const item = list.find(s => s.id === splId);
    if (!item) {
        alert('Dokumen SPL tidak ditemukan!');
        return;
    }

    if (!Array.isArray(item.employees)) {
        item.employees = [];
    }

    // Tambah karyawan baru ke list employees dokumen SPL
    const newEmployeeRecord = {
        persNo: persNo,
        name: empName || 'Karyawan (' + persNo + ')',
        startTime: start,
        endTime: end,
        duration: duration,
        reason: reason,
        sapStatus: '' // Status SAP kosong saat baru ditambahkan
    };

    item.employees.push(newEmployeeRecord);

    // Simpan ke LocalStorage
    if (typeof saveSplList === 'function') {
        saveSplList(list);
    } else {
        localStorage.setItem('DIGITAL_SPL_DATA', JSON.stringify(list));
    }

    // Sinkronisasi ke Supabase jika terhubung
    if (window.supabaseClient) {
        window.supabaseClient.from('digital_spl').upsert({
            id: item.id,
            spl_no: item.splNo,
            data: item,
            final_status: item.finalStatus,
            updated_at: new Date().toISOString()
        }).then(() => {}).catch(() => {});
    }

    closeAddSplEmpModal();
    renderSplReportSlide();
    if (typeof renderSplHistoryList === 'function') renderSplHistoryList();

    alert(`✅ Berhasil menambahkan ${empName || persNo} ke dokumen SPL ${item.splNo}!`);
};

// Inisialisasi Filter Tanggal (Flatpickr Blue Pill Range / Single Date)
function initReportDateFilter() {
    const inputEl = document.getElementById('mr-report-date-filter');
    if (!inputEl || inputEl._flatpickr) return;
    if (typeof flatpickr === 'undefined') return;

    flatpickr(inputEl, {
        mode: 'range',
        dateFormat: 'Y-m-d',
        altInput: true,
        altInputClass: 'blue-pill-date',
        altFormat: 'd M Y',
        locale: 'id',
        onReady: function(selectedDates, dateStr, instance) {
            if (instance.altInput) {
                instance.altInput.placeholder = 'Semua Tanggal';
                instance.altInput.style.minWidth = '175px';
                instance.altInput.style.textAlign = 'center';
            }
            const clearBtn = document.createElement('button');
            clearBtn.type = 'button';
            clearBtn.textContent = 'Reset (Semua Tanggal)';
            clearBtn.style = 'width: 100%; border: none; background: #EF4444; color: white; padding: 10px; cursor: pointer; border-radius: 0 0 12px 12px; font-weight: 700; font-size: 0.85rem; margin-top: 6px; font-family: Inter, sans-serif; transition: background 0.15s;';
            clearBtn.addEventListener('click', function(e) {
                e.preventDefault();
                instance.clear();
                if (instance.altInput) instance.altInput.value = '';
                instance.close();
                renderSplReportSlide();
            });
            if (instance.calendarContainer) {
                instance.calendarContainer.appendChild(clearBtn);
            }
        },
        onChange: function(selectedDates, dateStr, instance) {
            if (selectedDates.length === 2) {
                renderSplReportSlide();
            }
        },
        onClose: function(selectedDates, dateStr, instance) {
            renderSplReportSlide();
        }
    });
}

function populateReportMonthFilter(list) {
    // Deprecated: digantikan oleh Filter Tanggal Blue Pill (Flatpickr)
}

// Export Report SPL to Excel (.xlsx) dengan kolom rapi dan proporsional
function exportSplReportToExcel() {
    if (typeof XLSX === 'undefined') {
        alert('Pustaka XLSX (SheetJS) belum termuat. Mohon tunggu beberapa detik atau muat ulang halaman.');
        return;
    }

    const list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    if (!list || list.length === 0) {
        alert('Tidak ada data SPL untuk diekspor!');
        return;
    }

    const { start: filterStart, end: filterEnd } = getActiveDateFilterRange();
    const filterStatus = document.getElementById('mr-report-status')?.value || 'ALL';
    const filterSap = document.getElementById('mr-report-sap')?.value || 'ALL';
    const searchVal = (document.getElementById('mr-report-search')?.value || '').toLowerCase().trim();

    let filtered = list.filter(item => {
        if (!item) return false;
        if (filterStart && filterEnd) {
            const itemDate = normalizeDateToYmd(item.date);
            if (!itemDate) return false;
            if (itemDate < filterStart || itemDate > filterEnd) return false;
        }
        if (filterStatus !== 'ALL') {
            const rawStatus = (item.finalStatus || '').toLowerCase();
            const statusEn = formatFinalStatusEn(item.finalStatus).toLowerCase();
            if (filterStatus === 'approved' && !rawStatus.includes('setuju') && statusEn !== 'approved') return false;
            if (filterStatus === 'pending' && !rawStatus.includes('menunggu') && !statusEn.startsWith('pending')) return false;
            if (filterStatus === 'rejected' && !rawStatus.includes('tolak') && !statusEn.startsWith('rejected')) return false;
        }
        if (searchVal) {
            const noMatch = item.splNo && item.splNo.toLowerCase().includes(searchVal);
            const areaMatch = item.area && item.area.toLowerCase().includes(searchVal);
            const locationMatch = item.location && item.location.toLowerCase().includes(searchVal);
            const reasonMatch = item.reason && item.reason.toLowerCase().includes(searchVal);
            const creatorMatch = item.kasie && item.kasie.name && item.kasie.name.toLowerCase().includes(searchVal);
            const empMatch = item.employees && item.employees.some(e => 
                (e.name && e.name.toLowerCase().includes(searchVal)) || 
                (e.persNo && String(e.persNo).includes(searchVal)) ||
                (e.reason && e.reason.toLowerCase().includes(searchVal))
            );
            if (!noMatch && !areaMatch && !locationMatch && !reasonMatch && !creatorMatch && !empMatch) return false;
        }
        return true;
    });

    const excelRows = [];
    let lineNo = 1;

    filtered.forEach(item => {
        const emps = (Array.isArray(item.employees) && item.employees.length > 0)
            ? item.employees
            : [{ persNo: '-', name: '-', startTime: item.startTime, endTime: item.endTime, duration: item.duration, reason: item.reason }];

        emps.forEach(e => {
            const statusVal = e.sapStatus || '';
            if (filterSap === 'Sudah' && statusVal !== 'Sudah') return;
            if (filterSap === 'Kosong' && statusVal !== '') return;

            if (searchVal) {
                const docMatches = (item.splNo && item.splNo.toLowerCase().includes(searchVal)) ||
                                   (item.area && item.area.toLowerCase().includes(searchVal)) ||
                                   (item.location && item.location.toLowerCase().includes(searchVal)) ||
                                   (item.kasie && item.kasie.name && item.kasie.name.toLowerCase().includes(searchVal));
                const empMatches = (e.name && e.name.toLowerCase().includes(searchVal)) ||
                                   (e.persNo && String(e.persNo).includes(searchVal)) ||
                                   (e.reason && e.reason.toLowerCase().includes(searchVal));
                if (!docMatches && !empMatches) return;
            }

            const startTime = e.startTime || item.startTime || '-';
            const endTime = e.endTime || item.endTime || '-';
            const empDuration = Number(e.duration) || Number(item.duration) || 0;
            const sapStatusText = statusVal || '-';
            const sapDateText = (statusVal === 'Sudah') ? (e.sapInputDate || item.sapInputDate || '-') : '-';

            excelRows.push({
                'No': lineNo++,
                'No. SPL': item.splNo || '-',
                'Tanggal': item.date || '-',
                'Bagian': item.area || '-',
                'Lokasi': item.location || '-',
                'Inisiator': item.kasie ? item.kasie.name : '-',
                'Karyawan': e.name || '-',
                'Waktu Lembur': `${startTime} - ${endTime}`,
                'Durasi (Jam)': empDuration,
                'Status Akhir': formatFinalStatusEn(item.finalStatus) || '-',
                'Status SAP': sapStatusText,
                'Tanggal Input SAP': sapDateText,
                'Uraian Pekerjaan': e.reason || item.reason || '-'
            });
        });
    });

    if (excelRows.length === 0) {
        alert('Tidak ada data baris SPL yang cocok dengan filter untuk diekspor!');
        return;
    }

    try {
        // Konversi ke worksheet Excel
        const ws = XLSX.utils.json_to_sheet(excelRows);

        // Definisi konfigurasi lebar minimum kolom yang rapi
        const columnConfig = [
            { key: 'No', minWch: 6 },
            { key: 'No. SPL', minWch: 24 },
            { key: 'Tanggal', minWch: 14 },
            { key: 'Bagian', minWch: 18 },
            { key: 'Lokasi', minWch: 18 },
            { key: 'Inisiator', minWch: 24 },
            { key: 'Karyawan', minWch: 26 },
            { key: 'Waktu Lembur', minWch: 16 },
            { key: 'Durasi (Jam)', minWch: 14 },
            { key: 'Status Akhir', minWch: 18 },
            { key: 'Status SAP', minWch: 14 },
            { key: 'Tanggal Input SAP', minWch: 18 },
            { key: 'Uraian Pekerjaan', minWch: 35 }
        ];

        // Hitung lebar otomatis (Auto-fit Widths) berdasarkan isi data dan header
        const colWidths = columnConfig.map(col => {
            let maxLen = col.key.length;
            excelRows.forEach(row => {
                const val = row[col.key];
                const len = (val !== null && val !== undefined) ? String(val).length : 0;
                if (len > maxLen) maxLen = len;
            });
            // Berikan margin 3 karakter agar tulisan rapi dan tidak terpotong
            const width = Math.min(60, Math.max(col.minWch, maxLen + 3));
            return { wch: width };
        });

        ws['!cols'] = colWidths;

        // Buat workbook Excel
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Report SPL");

        // Format nama file sesuai filter tanggal
        let periodStr = '';
        if (filterStart && filterEnd) {
            periodStr = (filterStart === filterEnd) ? `_${filterStart}` : `_${filterStart}_sd_${filterEnd}`;
        } else {
            periodStr = `_${new Date().toISOString().substring(0, 10)}`;
        }

        const fileName = `Report_SPL_Warehouse${periodStr}.xlsx`;
        XLSX.writeFile(wb, fileName);
    } catch (err) {
        console.error("Error exporting SPL to excel:", err);
        alert("Gagal mengekspor file Excel: " + err.message);
    }
}

// Alias untuk kompatibilitas jika ada pemanggilan lama
window.exportSplReportToCsv = exportSplReportToExcel;
window.exportSplReportToExcel = exportSplReportToExcel;

// Print Report Summary
function printMasterReportSummary() {
    window.print();
}

// ========================================================
// FITUR HAPUS DATA SPL BERDASARKAN BULAN
// ========================================================

function openDeleteSplByMonthModal() {
    const modal = document.getElementById('modal-delete-spl-month');
    const select = document.getElementById('select-delete-month');
    const preview = document.getElementById('delete-month-preview');
    if (!modal || !select) return;

    const list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    
    // Kumpulkan seluruh bulan yang ada di list SPL (format YYYY-MM)
    const monthMap = new Map();
    const idMonthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    list.forEach(item => {
        if (!item || !item.date) return;
        const norm = normalizeDateToYmd(item.date);
        if (!norm || norm.length < 7) return;
        const ym = norm.substring(0, 7); // e.g. "2026-10"
        monthMap.set(ym, (monthMap.get(ym) || 0) + 1);
    });

    // Urutkan bulan dari yang terbaru
    const sortedYm = Array.from(monthMap.keys()).sort().reverse();

    if (sortedYm.length === 0) {
        select.innerHTML = '<option value="">(Tidak ada data SPL tersimpan)</option>';
        if (preview) preview.textContent = 'Tidak ada dokumen SPL yang dapat dihapus.';
        document.getElementById('btn-confirm-delete-month').disabled = true;
        document.getElementById('btn-confirm-delete-month').style.opacity = '0.5';
    } else {
        select.innerHTML = sortedYm.map(ym => {
            const [y, m] = ym.split('-');
            const mName = idMonthNames[parseInt(m, 10) - 1] || m;
            const count = monthMap.get(ym);
            return `<option value="${ym}">${mName} ${y} (${count} Dokumen)</option>`;
        }).join('');

        document.getElementById('btn-confirm-delete-month').disabled = false;
        document.getElementById('btn-confirm-delete-month').style.opacity = '1';

        const updatePreview = () => {
            const chosen = select.value;
            const count = monthMap.get(chosen) || 0;
            const [y, m] = chosen.split('-');
            const mName = idMonthNames[parseInt(m, 10) - 1] || m;
            if (preview) {
                preview.innerHTML = `Terdeteksi <strong>${count} dokumen SPL</strong> pada bulan <strong>${mName} ${y}</strong>.`;
            }
        };

        select.onchange = updatePreview;
        updatePreview();
    }

    modal.style.display = 'flex';
}

function closeDeleteSplByMonthModal() {
    const modal = document.getElementById('modal-delete-spl-month');
    if (modal) modal.style.display = 'none';
}

function executeDeleteSplByMonth() {
    const select = document.getElementById('select-delete-month');
    const chosenYm = select ? select.value : '';
    if (!chosenYm) {
        alert('Silakan pilih bulan yang ingin dihapus.');
        return;
    }

    const idMonthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const [y, m] = chosenYm.split('-');
    const mName = idMonthNames[parseInt(m, 10) - 1] || m;

    const list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    const countToDelete = list.filter(item => {
        if (!item || !item.date) return false;
        const norm = normalizeDateToYmd(item.date);
        return norm && norm.startsWith(chosenYm);
    }).length;

    if (countToDelete === 0) {
        alert(`Tidak ditemukan dokumen SPL pada bulan ${mName} ${y}.`);
        closeDeleteSplByMonthModal();
        return;
    }

    const confirmMsg = `APAKAH ANDA YAKIN?\n\nAnda akan menghapus ${countToDelete} dokumen SPL pada bulan ${mName} ${y}.\nTindakan ini permanen dan tidak dapat dibatalkan!`;
    if (!confirm(confirmMsg)) return;

    // Filter sisa dokumen yang BUKAN di bulan terpilih
    const remainingList = list.filter(item => {
        if (!item || !item.date) return true;
        const norm = normalizeDateToYmd(item.date);
        return !norm || !norm.startsWith(chosenYm);
    });

    // Simpan ke storage
    if (typeof saveSplList === 'function') {
        saveSplList(remainingList);
    } else {
        localStorage.setItem('DIGITAL_SPL_DATA', JSON.stringify(remainingList));
    }

    closeDeleteSplByMonthModal();

    // Segarkan tampilan Report SPL dan riwayat Create SPL jika terbuka
    if (typeof renderSplReportSlide === 'function') renderSplReportSlide();
    if (typeof renderSplHistoryList === 'function') renderSplHistoryList();
    if (typeof generateNextSplNumber === 'function') generateNextSplNumber();

    alert(`Berhasil menghapus ${countToDelete} dokumen SPL pada bulan ${mName} ${y}.`);
}

window.openDeleteSplByMonthModal = openDeleteSplByMonthModal;
window.closeDeleteSplByMonthModal = closeDeleteSplByMonthModal;
window.executeDeleteSplByMonth = executeDeleteSplByMonth;

// Inisialisasi event listener dan modal DOM
document.addEventListener('DOMContentLoaded', function() {
    populateMasterEmployeeFilters();
    initReportDateFilter();
});

