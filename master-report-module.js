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
            <td style="padding: 10px 12px; font-size: 0.8rem; color: #64748b; text-align: center; font-weight: 600;">${idx + 1}</td>
            <td style="padding: 10px 14px;">
                <div style="font-weight: 700; color: #0f172a; font-size: 0.88rem;">${item.name}</div>
                <div style="font-size: 0.76rem; color: #64748b; font-family: monospace;">NIK: ${item.persNo}</div>
            </td>
            <td style="padding: 10px 14px;">
                <span style="display: inline-block; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 6px; font-size: 0.76rem; font-weight: 700;">${item.area}</span>
                <div style="font-size: 0.76rem; color: #475569; margin-top: 3px; font-weight: 500;">${item.location}</div>
            </td>
            <td style="padding: 10px 14px;">
                <div style="font-weight: 600; color: #1e293b; font-size: 0.82rem;">${item.kasieName || '-'}</div>
                <div style="font-size: 0.74rem; color: #64748b;">${item.kasieNo ? 'NIK: ' + item.kasieNo : 'Pembuat SPL'}</div>
            </td>
            <td style="padding: 10px 14px;">
                <div style="font-weight: 600; color: #1e293b; font-size: 0.82rem;">${item.kabagName || '-'}</div>
                <div style="font-size: 0.74rem; color: #64748b;">${item.kabagNo ? 'NIK: ' + item.kabagNo : 'Approver 1'}</div>
            </td>
            <td style="padding: 10px 14px;">
                <div style="font-weight: 600; color: #1e293b; font-size: 0.82rem;">${item.mgrName || 'Wawan Kurniawan'}</div>
                <div style="font-size: 0.74rem; color: #64748b;">${item.mgrNo ? 'NIK: ' + item.mgrNo : 'Approver 2'}</div>
            </td>
        </tr>
    `).join('');
}

// ========================================================
// SLIDE 2: REPORT & REKAPITULASI SPL
// ========================================================

function renderSplReportSlide() {
    const list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    const tbody = document.getElementById('mr-report-tbody');
    const filterMonth = document.getElementById('mr-report-month')?.value || 'ALL';
    const filterStatus = document.getElementById('mr-report-status')?.value || 'ALL';
    const searchVal = (document.getElementById('mr-report-search')?.value || '').toLowerCase().trim();

    // Populate month filter jika belum terisi
    populateReportMonthFilter(list);

    let filtered = list.filter(item => {
        if (!item) return false;
        if (filterMonth !== 'ALL') {
            const itemYm = item.date ? item.date.substring(0, 7) : '';
            if (itemYm !== filterMonth) return false;
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

    // Hitung KPI Statistik
    const totalSpl = filtered.length;
    let totalJam = 0;
    let totalOrang = 0;
    let countApproved = 0;
    let countPending = 0;
    let countRejected = 0;

    filtered.forEach(item => {
        totalJam += Number(item.duration) || 0;
        totalOrang += Array.isArray(item.employees) ? item.employees.length : 0;
        if (item.finalStatus === 'Disetujui') countApproved++;
        else if (item.finalStatus && item.finalStatus.includes('Ditolak')) countRejected++;
        else countPending++;
    });

    // Update KPI Card di Header Slide 2
    document.getElementById('mr-kpi-total-spl').textContent = totalSpl;
    document.getElementById('mr-kpi-total-hours').textContent = `${totalJam.toFixed(1)} Jam`;
    document.getElementById('mr-kpi-total-emp').textContent = `${totalOrang} Orang`;
    document.getElementById('mr-kpi-approved').textContent = countApproved;

    if (!tbody) return;

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 36px 16px; color: #94a3b8; font-size: 0.88rem;">
                    Belum ada rekapan data SPL yang cocok dengan filter.
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = filtered.map((item, idx) => {
        const isApproved = item.finalStatus === 'Disetujui';
        const isRejected = item.finalStatus.includes('Ditolak');
        const badgeBg = isApproved ? '#dcfce7' : (isRejected ? '#fee2e2' : '#fef3c7');
        const badgeColor = isApproved ? '#15803d' : (isRejected ? '#dc2626' : '#b45309');
        const empCount = Array.isArray(item.employees) ? item.employees.length : 0;
        const empNames = Array.isArray(item.employees) ? item.employees.map(e => e.name).join(', ') : '-';

        return `
            <tr style="border-bottom: 1px solid #f1f5f9; transition: background 0.15s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
                <td style="padding: 10px 12px; font-size: 0.8rem; color: #64748b; text-align: center; font-weight: 600;">${idx + 1}</td>
                <td style="padding: 10px 14px;">
                    <div style="font-weight: 700; color: #0f172a; font-size: 0.85rem; font-family: monospace;">${item.splNo}</div>
                    <div style="font-size: 0.76rem; color: #64748b;">${item.date || '-'}</div>
                </td>
                <td style="padding: 10px 14px;">
                    <div style="font-weight: 600; color: #1e293b; font-size: 0.82rem;">${item.area}</div>
                    <div style="font-size: 0.75rem; color: #64748b;">${item.location}</div>
                </td>
                <td style="padding: 10px 14px;">
                    <div style="font-weight: 600; color: #0f172a; font-size: 0.82rem;">${item.kasie ? item.kasie.name : '-'}</div>
                    <div style="font-size: 0.74rem; color: #64748b;">${item.creatorRole || 'Kasie'}</div>
                </td>
                <td style="padding: 10px 14px;">
                    <span style="font-weight: 700; color: #0f172a; font-size: 0.85rem;">${empCount} Orang</span>
                    <div style="font-size: 0.74rem; color: #64748b; max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${empNames}">${empNames}</div>
                </td>
                <td style="padding: 10px 14px; text-align: center;">
                    <div style="font-weight: 700; color: #0f172a; font-size: 0.85rem;">${item.duration} Jam</div>
                    <div style="font-size: 0.74rem; color: #64748b;">${item.startTime} - ${item.endTime}</div>
                </td>
                <td style="padding: 10px 14px; text-align: center;">
                    <span style="display: inline-block; padding: 4px 10px; border-radius: 99px; font-size: 0.74rem; font-weight: 700; background: ${badgeBg}; color: ${badgeColor};">
                        ${item.finalStatus}
                    </span>
                </td>
                <td style="padding: 10px 14px; text-align: center;">
                    <button type="button" onclick="printSplDocument('${item.id}')" style="background: #f1f5f9; border: 1px solid #cbd5e1; color: #1e293b; padding: 5px 10px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer;">
                        Cetak
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function populateReportMonthFilter(list) {
    const monthSelect = document.getElementById('mr-report-month');
    if (!monthSelect || monthSelect.dataset.populated === 'true') return;

    const months = [...new Set(list.map(item => item.date ? item.date.substring(0, 7) : null).filter(Boolean))].sort().reverse();
    
    let html = '<option value="ALL">Semua Periode Bulan</option>';
    months.forEach(ym => {
        const [y, m] = ym.split('-');
        const dateObj = new Date(Number(y), Number(m) - 1, 1);
        const monthName = dateObj.toLocaleString('id-ID', { month: 'long', year: 'numeric' });
        html += `<option value="${ym}">${monthName}</option>`;
    });

    monthSelect.innerHTML = html;
    monthSelect.dataset.populated = 'true';
}

// Export Report SPL to CSV
function exportSplReportToCsv() {
    const list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    if (!list || list.length === 0) {
        alert('Tidak ada data SPL untuk diekspor!');
        return;
    }

    let csvContent = 'No,No SPL,Tanggal,Bagian,Lokasi,Pembuat,Jml Karyawan,Daftar Karyawan,Mulai,Selesai,Durasi (Jam),Alasan,Status Akhir\n';

    list.forEach((item, idx) => {
        const empCount = Array.isArray(item.employees) ? item.employees.length : 0;
        const empList = Array.isArray(item.employees) ? item.employees.map(e => {
            const timeStr = (e.startTime && e.endTime) ? ` [${e.startTime}-${e.endTime}]` : '';
            return `${e.name} (${e.persNo})${timeStr}`;
        }).join('; ') : '';
        const reasonClean = (item.reason || '').replace(/"/g, '""');

        const row = [
            idx + 1,
            `"${item.splNo || ''}"`,
            `"${item.date || ''}"`,
            `"${item.area || ''}"`,
            `"${item.location || ''}"`,
            `"${item.kasie ? item.kasie.name : ''}"`,
            empCount,
            `"${empList}"`,
            `"${item.startTime || ''}"`,
            `"${item.endTime || ''}"`,
            item.duration || 0,
            `"${reasonClean}"`,
            `"${item.finalStatus || ''}"`
        ];
        csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Laporan_SPL_Warehouse_${new Date().toISOString().substring(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Print Report Summary
function printMasterReportSummary() {
    window.print();
}

// Inisialisasi event listener dan modal DOM
document.addEventListener('DOMContentLoaded', function() {
    populateMasterEmployeeFilters();
});
