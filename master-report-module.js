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

        // Render data for both slides
        renderMasterEmployeeSlide();
        renderSplReportSlide();
        populateMasterEmployeeFilters();
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
            const matchKabag = item.kabagName && item.kabagName.toLowerCase().includes(searchVal);
            const matchMgr = item.mgrName && item.mgrName.toLowerCase().includes(searchVal);
            if (!matchName && !matchPersNo && !matchKasie && !matchKabag && !matchMgr) return false;
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
            <td style="padding: 10px 14px;">
                <div style="font-weight: 700; color: #000000; font-size: 0.88rem;">${item.name}</div>
                <div style="font-size: 0.76rem; color: #64748b; font-family: monospace;">NIK: ${item.persNo}</div>
            </td>
            <td style="padding: 10px 14px;">
                <span style="display: inline-block; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 6px; font-size: 0.76rem; font-weight: 700;">${item.area}</span>
                <div style="font-size: 0.76rem; color: #000000; margin-top: 3px; font-weight: 500;">${item.location}</div>
            </td>
            <td style="padding: 10px 14px;">
                <div style="font-weight: 600; color: #000000; font-size: 0.82rem;">${item.kasieName || '-'}</div>
                <div style="font-size: 0.74rem; color: #64748b;">${item.kasieNo ? 'NIK: ' + item.kasieNo : 'Pembuat SPL'}</div>
            </td>
            <td style="padding: 10px 14px;">
                <div style="font-weight: 600; color: #000000; font-size: 0.82rem;">${item.kabagName || '-'}</div>
                <div style="font-size: 0.74rem; color: #64748b;">${item.kabagNo ? 'NIK: ' + item.kabagNo : 'Approver 1'}</div>
            </td>
            <td style="padding: 10px 14px;">
                <div style="font-weight: 600; color: #000000; font-size: 0.82rem;">${item.mgrName || 'Wawan Kurniawan'}</div>
                <div style="font-size: 0.74rem; color: #64748b;">${item.mgrNo ? 'NIK: ' + item.mgrNo : 'Approver 2'}</div>
            </td>
        </tr>
    `).join('');
}

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

function renderSplReportSlide() {
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
            if (filterStatus === 'approved' && item.finalStatus !== 'Disetujui') return false;
            if (filterStatus === 'pending' && !item.finalStatus.includes('Menunggu')) return false;
            if (filterStatus === 'rejected' && !item.finalStatus.includes('Ditolak')) return false;
        }
        if (searchVal) {
            const noMatch = item.splNo && item.splNo.toLowerCase().includes(searchVal);
            const areaMatch = item.area && item.area.toLowerCase().includes(searchVal);
            const reasonMatch = item.reason && item.reason.toLowerCase().includes(searchVal);
            const creatorMatch = item.kasie && item.kasie.name && item.kasie.name.toLowerCase().includes(searchVal);
            const empMatch = item.employees && item.employees.some(e => e.name && e.name.toLowerCase().includes(searchVal));
            if (!noMatch && !areaMatch && !reasonMatch && !creatorMatch && !empMatch) return false;
        }
        return true;
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
                const docMatches = (item.splNo && item.splNo.toLowerCase().includes(searchVal)) ||
                                   (item.area && item.area.toLowerCase().includes(searchVal)) ||
                                   (item.location && item.location.toLowerCase().includes(searchVal)) ||
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
        if (splItem.finalStatus === 'Disetujui') {
            countApproved++;
        }
    });

    // Update KPI Card di Header Slide 2 sesuai hasil filter aktif
    document.getElementById('mr-kpi-total-spl').textContent = matchingSplMap.size;
    document.getElementById('mr-kpi-approved').textContent = countApproved;
    document.getElementById('mr-kpi-total-hours').textContent = `${totalManHours.toFixed(1)} Jam`;
    document.getElementById('mr-kpi-total-emp').textContent = `${totalOrang} Orang`;

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

    tbody.innerHTML = allLines.map((lineObj, idx) => {
        const item = lineObj.spl;
        const e = lineObj.emp;
        const empIdx = lineObj.empIdx;
        const totalEmpInSpl = lineObj.totalEmpInSpl;
        const statusVal = lineObj.statusVal || '';
        const sapDate = e.sapInputDate || item.sapInputDate || '';

        const isApproved = item.finalStatus === 'Disetujui';
        const isRejected = item.finalStatus.includes('Ditolak');
        const badgeBg = isApproved ? '#dcfce7' : (isRejected ? '#fee2e2' : '#fef3c7');
        const badgeColor = isApproved ? '#15803d' : (isRejected ? '#dc2626' : '#b45309');

        const startTime = e.startTime || item.startTime || '-';
        const endTime = e.endTime || item.endTime || '-';
        const duration = e.duration || item.duration || 0;
        const reason = e.reason || item.reason || '-';

        const isFirstLineOfSpl = empIdx === 0;
        const borderTopStyle = (idx > 0 && isFirstLineOfSpl) ? 'border-top: 2px solid #cbd5e1;' : 'border-bottom: 1px solid #f1f5f9;';
        const lineBadge = totalEmpInSpl > 1 
            ? `<span style="font-size: 0.7rem; color: #2563eb; background: #eff6ff; padding: 2px 7px; border-radius: 6px; border: 1px solid #bfdbfe; margin-left: 6px; font-weight: 700; white-space: nowrap;">Line ${empIdx + 1}/${totalEmpInSpl}</span>` 
            : '';

        return `
            <tr style="${borderTopStyle} transition: background 0.15s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
                <td style="padding: 12px 16px; font-size: 0.85rem; color: #000000; text-align: left; font-weight: 600;">${idx + 1}</td>
                <td style="padding: 12px 16px; white-space: nowrap; text-align: left;">
                    <div style="display: flex; align-items: center; gap: 4px;">
                        <span style="font-weight: 700; color: #000000; font-size: 0.88rem; font-family: monospace;">${item.splNo}</span>
                        ${lineBadge}
                    </div>
                </td>
                <td style="padding: 12px 16px; white-space: nowrap; text-align: left;">
                    <span style="font-weight: 600; color: #000000; font-size: 0.85rem;">${item.date || '-'}</span>
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
                <td style="padding: 12px 16px; text-align: left; white-space: nowrap;">
                    <div style="font-weight: 600; color: #000000; font-size: 0.85rem;">${startTime} - ${endTime}</div>
                </td>
                <td style="padding: 12px 16px; text-align: left; white-space: nowrap;">
                    <span style="font-weight: 600; color: #000000; font-size: 0.85rem;">
                        ${duration} Jam
                    </span>
                </td>
                <td style="padding: 12px 16px; max-width: 250px; text-align: left;">
                    <div style="font-size: 0.85rem; color: #000000; font-weight: 500; line-height: 1.4; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${reason}">
                        ${reason}
                    </div>
                </td>
                <td style="padding: 12px 16px; text-align: left; white-space: nowrap;">
                    <span style="font-weight: 600; color: #000000; font-size: 0.85rem;">
                        ${item.finalStatus}
                    </span>
                </td>
                <!-- Kolom Status SAP: Jika Sudah maka terkunci permanen, jika belum maka select (-) dan Sudah -->
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
                    ` : `
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
                    `}
                </td>
                <td style="padding: 12px 16px; text-align: left;">
                    <button type="button" onclick="printSplDocument('${item.id}')" style="background: #f1f5f9; border: 1px solid #cbd5e1; color: #1e293b; padding: 6px 14px; border-radius: 8px; font-size: 0.78rem; font-weight: 600; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 5px;" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                        <span>Print</span>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Fungsi Update Status SAP Langsung dari Kolom oleh User (Sudah / Kosong)
window.updateSapStatus = function(splId, empIdx, newStatus) {
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
            if (filterStatus === 'approved' && item.finalStatus !== 'Disetujui') return false;
            if (filterStatus === 'pending' && !item.finalStatus.includes('Menunggu')) return false;
            if (filterStatus === 'rejected' && !item.finalStatus.includes('Ditolak')) return false;
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
                'Pembuat SPL': item.kasie ? item.kasie.name : '-',
                'Overtime (Karyawan)': e.name || '-',
                'Waktu Lembur': `${startTime} - ${endTime}`,
                'Durasi (Jam)': empDuration,
                'Uraian Pekerjaan': e.reason || item.reason || '-',
                'Status Akhir': item.finalStatus || '-',
                'Status SAP': sapStatusText,
                'Tanggal Input SAP': sapDateText
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
            { key: 'Pembuat SPL', minWch: 24 },
            { key: 'Overtime (Karyawan)', minWch: 26 },
            { key: 'Waktu Lembur', minWch: 16 },
            { key: 'Durasi (Jam)', minWch: 14 },
            { key: 'Uraian Pekerjaan', minWch: 35 },
            { key: 'Status Akhir', minWch: 18 },
            { key: 'Status SAP', minWch: 14 },
            { key: 'Tanggal Input SAP', minWch: 18 }
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

// Inisialisasi event listener dan modal DOM
document.addEventListener('DOMContentLoaded', function() {
    populateMasterEmployeeFilters();
    initReportDateFilter();
});
