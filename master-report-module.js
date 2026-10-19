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
// SLIDE 2: REPORT & REKAPITULASI SPL
// ========================================================

function renderSplReportSlide() {
    const list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    const tbody = document.getElementById('mr-report-tbody');
    const filterMonth = document.getElementById('mr-report-month')?.value || 'ALL';
    const filterStatus = document.getElementById('mr-report-status')?.value || 'ALL';
    const filterSap = document.getElementById('mr-report-sap')?.value || 'ALL';
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

    // Hitung KPI Statistik dan breakdown per line karyawan
    const allLines = [];
    let totalManHours = 0;
    let totalOrang = 0;
    let countApproved = 0;
    let countPending = 0;
    let countRejected = 0;

    filtered.forEach(item => {
        if (item.finalStatus === 'Disetujui') countApproved++;
        else if (item.finalStatus && item.finalStatus.includes('Ditolak')) countRejected++;
        else countPending++;

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

            allLines.push({
                spl: item,
                emp: e,
                empIdx: empIdx,
                totalEmpInSpl: totalEmpInSpl,
                statusVal: statusVal
            });
        });
    });

    // Update KPI Card di Header Slide 2
    document.getElementById('mr-kpi-total-spl').textContent = filtered.length;
    document.getElementById('mr-kpi-total-hours').textContent = `${totalManHours.toFixed(1)} Jam`;
    document.getElementById('mr-kpi-total-emp').textContent = `${totalOrang} Orang`;
    document.getElementById('mr-kpi-approved').textContent = countApproved;

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
                <td style="padding: 12px 16px; text-align: left;">
                    <span style="font-weight: 700; color: #0284c7; font-size: 0.85rem; background: #e0f2fe; padding: 4px 10px; border-radius: 99px; border: 1px solid #bae6fd; white-space: nowrap;">
                        ${duration} Jam
                    </span>
                </td>
                <td style="padding: 12px 16px; max-width: 250px; text-align: left;">
                    <div style="font-size: 0.85rem; color: #000000; font-weight: 500; line-height: 1.4; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${reason}">
                        ${reason}
                    </div>
                </td>
                <td style="padding: 12px 16px; text-align: left;">
                    <span style="display: inline-block; padding: 4px 12px; border-radius: 99px; font-size: 0.78rem; font-weight: 700; background: ${badgeBg}; color: ${badgeColor}; white-space: nowrap;">
                        ${item.finalStatus}
                    </span>
                </td>
                <!-- Kolom Status SAP: Kosong (-) by default, hanya ada pilihan - dan Sudah (warna hijau tajam) -->
                <td style="padding: 10px 16px; text-align: left; white-space: nowrap;">
                    <select onchange="updateSapStatus('${item.id}', ${empIdx}, this.value)" 
                        style="
                            background: ${statusVal === 'Sudah' ? '#16a34a' : '#ffffff'};
                            color: ${statusVal === 'Sudah' ? '#ffffff' : '#000000'};
                            border: 1.5px solid ${statusVal === 'Sudah' ? '#15803d' : '#cbd5e1'};
                            padding: 6px 12px;
                            border-radius: 8px;
                            font-size: 0.8rem;
                            font-weight: 700;
                            cursor: pointer;
                            outline: none;
                            font-family: 'Inter', sans-serif;
                            box-shadow: ${statusVal === 'Sudah' ? '0 2px 6px rgba(22, 163, 74, 0.3)' : '0 1px 2px rgba(0,0,0,0.05)'};
                            transition: all 0.2s;
                        ">
                        <option value="" style="color: #000000; background: #fff;" ${!statusVal ? 'selected' : ''}>-</option>
                        <option value="Sudah" style="color: #15803d; font-weight: 700; background: #fff;" ${statusVal === 'Sudah' ? 'selected' : ''}>Sudah</option>
                    </select>
                    ${statusVal === 'Sudah' && sapDate ? `<div style="font-size: 0.68rem; color: #15803d; margin-top: 3px; font-weight: 700;">${sapDate}</div>` : ''}
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

// Fungsi Update Status SAP Langsung dari Kolom oleh User (Sudah / Belum / Kosong)
window.updateSapStatus = function(splId, empIdx, newStatus) {
    let list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    const item = list.find(s => s.id === splId);
    if (!item) return;

    if (Array.isArray(item.employees) && item.employees[empIdx]) {
        const emp = item.employees[empIdx];
        emp.sapStatus = newStatus;
        emp.sapInputDate = (newStatus === 'Sudah') 
            ? new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) 
            : null;
        
        // Update item sapStatus
        const allDone = item.employees.every(e => e.sapStatus === 'Sudah');
        item.sapStatus = allDone ? 'Sudah' : (item.employees.some(e => e.sapStatus === 'Sudah') ? 'Sebagian' : '');
        item.sapInputDate = allDone ? (item.sapInputDate || emp.sapInputDate) : null;
    } else {
        item.sapStatus = newStatus;
        item.sapInputDate = (newStatus === 'Sudah') 
            ? new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) 
            : null;
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

// Export Report SPL to CSV (Per Line Karyawan dengan Status Input SAP)
function exportSplReportToCsv() {
    const list = (typeof getStoredSplList === 'function') ? getStoredSplList() : [];
    if (!list || list.length === 0) {
        alert('Tidak ada data SPL untuk diekspor!');
        return;
    }

    const filterMonth = document.getElementById('mr-report-month')?.value || 'ALL';
    const filterStatus = document.getElementById('mr-report-status')?.value || 'ALL';
    const filterSap = document.getElementById('mr-report-sap')?.value || 'ALL';
    const searchVal = (document.getElementById('mr-report-search')?.value || '').toLowerCase().trim();

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

    let csvContent = 'No Line,No SPL,Tanggal,Bagian,Lokasi,Pembuat,Overtime,Jam Mulai,Jam Selesai,Durasi (Jam),Uraian Pekerjaan,Status Akhir,Status SAP,Tanggal Input SAP\n';

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

            const sapStatusText = statusVal || '-';
            const sapDateText = (statusVal === 'Sudah') ? (e.sapInputDate || item.sapInputDate || '') : '';

            const row = [
                lineNo++,
                `"${item.splNo || ''}"`,
                `"${item.date || ''}"`,
                `"${item.area || ''}"`,
                `"${item.location || ''}"`,
                `"${item.kasie ? item.kasie.name : ''}"`,
                `"${e.name || ''}"`,
                `"${e.startTime || item.startTime || ''}"`,
                `"${e.endTime || item.endTime || ''}"`,
                e.duration || item.duration || 0,
                `"${(e.reason || item.reason || '').replace(/"/g, '""')}"`,
                `"${item.finalStatus || ''}"`,
                `"${sapStatusText}"`,
                `"${sapDateText}"`
            ];
            csvContent += row.join(',') + '\n';
        });
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Laporan_Line_SPL_Warehouse_${new Date().toISOString().substring(0, 10)}.csv`;
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
