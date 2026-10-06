// Masukkan URL dan Anon Key Supabase Anda di sini
const SUPABASE_URL = 'https://rjjuriaxhbmtawgofljt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_qkmIVHOFFNnPMydnb_Q7nw_aJ4jQDXI';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Navigation Logic
const navItems = document.querySelectorAll('.nav-item');
const viewSections = document.querySelectorAll('.view-section');
const topbarTitle = document.querySelector('.topbar h1');
const uploadBtn = document.getElementById('btn-upload');
const sidebarToggleBtn = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

// Sidebar Toggle Logic
if (sidebarToggleBtn && sidebar) {
    sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
}

// Initial Setup

let lateChartInstance = null;

function renderLateChart(labels, data, type = 'Late') {
    const ctxElement = document.getElementById('lateChart');
    if (!ctxElement) return;
    
    const ctx = ctxElement.getContext('2d');

    if (lateChartInstance) {
        lateChartInstance.destroy();
    }

    // Combine and sort data ascending
    let combined = labels.map((l, i) => ({ label: l, val: data[i] }));
    combined.sort((a, b) => a.val - b.val); // Smallest to largest

    const sortedLabels = combined.map(item => item.label);
    const sortedData = combined.map(item => item.val);

    const isOntime = type === 'Ontime';
    const mainColor = isOntime ? '#16a34a' : '#ef4444';
    const gradientTop = isOntime ? 'rgba(22, 163, 74, 0.5)' : 'rgba(239, 68, 68, 0.5)';
    const gradientBottom = isOntime ? 'rgba(22, 163, 74, 0.0)' : 'rgba(239, 68, 68, 0.0)';

    // Create wave gradient dynamically inside Chart.js options

    lateChartInstance = new Chart(ctx, {
        type: 'line',
        plugins: [{
            id: 'alwaysShowLabels',
            afterDraw: function(chart) {
                const ctx = chart.ctx;
                chart.data.datasets.forEach((dataset, i) => {
                    const meta = chart.getDatasetMeta(i);
                    meta.data.forEach((element, index) => {
                        const dataVal = dataset.data[index];
                        ctx.fillStyle = mainColor; 
                        ctx.font = 'bold 12px sans-serif';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillText(dataVal + ' Line', element.x, element.y - 12);
                    });
                });
            }
        }],
        data: {
            labels: sortedLabels,
            datasets: [{
                label: `Total ${type}`,
                data: sortedData,
                borderColor: mainColor,
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, gradientTop);
                    gradient.addColorStop(1, gradientBottom);
                    return gradient;
                },
                borderWidth: 3,
                fill: true,
                tension: 0.5,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: mainColor,
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#ffffff',
                    titleColor: '#64748b',
                    bodyColor: mainColor,
                    padding: 12,
                    titleFont: { size: 13 },
                    bodyFont: { size: 16, weight: 'bold' },
                    displayColors: false,
                    borderColor: '#e2e8f0',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + ' Line';
                        }
                    }
                }
            },
            scales: {
                y: {
                    display: false,
                    beginAtZero: true,
                    suggestedMax: Math.max(...sortedData) * 1.2
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#1e293b', 
                        font: { size: 12, weight: '700' }
                    },
                    border: { display: false }
                }
            }
        }
    });
}

if (uploadBtn) {
    uploadBtn.style.display = 'none'; // Hide initially on Dashboard
    uploadBtn.addEventListener('click', () => {
        const uploadNav = document.querySelector('.nav-item[data-target="upload"]');
        if (uploadNav) uploadNav.click();
    });
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        if (!target) return; // Ignore items without views (like Bantuan, Logout)

        // Update active nav
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Update view
        viewSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === `${target}-view`) {
                section.classList.add('active');
            }
        });

        // Update Title
        if (topbarTitle) {
            topbarTitle.textContent = item.textContent === 'Summary' ? 'Summary Overview' : item.textContent;
        }

        // Toggle Upload and Export Button Visibility
        if (uploadBtn) {
            if (['stock', 'mb51', 'zmmlto'].includes(target)) {
                uploadBtn.style.display = 'flex';
            } else {
                uploadBtn.style.display = 'none';
            }
        }
        
        const exportBtn = document.getElementById('btn-print');
        if (exportBtn) {
            if (target === 'dashboard' || target === 'summary' || target === 'print1') {
                exportBtn.style.display = 'flex';
            } else {
                exportBtn.style.display = 'none';
            }
        }
        
        const btnExportCen5Header = document.getElementById('btn-export-cen5');
        const btnExportCen2Header = document.getElementById('btn-export-cen2');
        if (btnExportCen5Header && btnExportCen2Header) {
            if (target === 'summary') {
                btnExportCen5Header.style.display = 'flex';
                btnExportCen2Header.style.display = 'flex';
            } else {
                btnExportCen5Header.style.display = 'none';
                btnExportCen2Header.style.display = 'none';
            }
        }
        
        const resetSummaryBtn = document.getElementById('btn-reset-summary');
        if (resetSummaryBtn) {
            if (target === 'summary') {
                resetSummaryBtn.style.display = 'flex';
            } else {
                resetSummaryBtn.style.display = 'none';
            }
        }

        // Update dynamic line count visibility and value
        updateTopbarLineCount(target);
    });
});

// Helper to update the topbar line count dynamically
function updateTopbarLineCount(target) {
    const lineCountIndicator = document.getElementById('topbar-line-count');
    const totalLineSpan = document.getElementById('dynamic-total-line');
    const tableBody = document.querySelector(`#${target}-table tbody`);
    
    if (lineCountIndicator && totalLineSpan) {
        if (['dashboard', 'upload', 'countsloc'].includes(target)) {
            lineCountIndicator.style.display = 'none';
        } else {
            lineCountIndicator.style.display = 'flex';
            if (tableBody) {
                let rowCount = tableBody.querySelectorAll('tr').length;
                if (rowCount === 1 && tableBody.textContent.includes('Data Tidak Ditemukan')) {
                    rowCount = 0;
                }
                totalLineSpan.textContent = rowCount;
            } else {
                totalLineSpan.textContent = '0';
            }
        }
    }
}

// Data Fetching and Processing via Supabase
async function fetchData(tableName) {
    try {
        let allData = [];
        let from = 0;
        let step = 1000;
        let hasMore = true;

        while (hasMore) {
            const { data, error } = await supabaseClient
                .from(tableName)
                .select('*')
                .range(from, from + step - 1);
            
            if (error) throw error;
            
            if (data && data.length > 0) {
                allData = allData.concat(data);
                from += step;
                if (data.length < step) {
                    hasMore = false;
                }
            } else {
                hasMore = false;
            }
        }
        
        let processedData = allData;

        // Hapus baris yang benar-benar kosong (hanya berisi null/empty string)
        processedData = processedData.filter(row => {
            return Object.entries(row).some(([key, val]) => {
                if (key === 'id' || key === 'created_at') return false; // Abaikan kolom sistem Supabase
                return val !== null && val !== undefined && String(val).trim() !== '';
            });
        });

        // Khusus tabel mb51, hapus kolom Number Batch dan tambahkan No Batch
        if (tableName === 'work_days') {
            processedData = processedData.map(row => {
                delete row['Number Batch'];
                const material = row['Material'] || '';
                const batch = row['Batch'] || '';
                return {
                    'No Batch': String(material) + String(batch),
                    ...row
                };
            });
        }
        
        return processedData;
    } catch (err) {
        console.error(`Error fetching ${tableName} from Supabase:`, err);
        return [];
    }
}

function renderTable(tableId, data) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    if (!data || data.length === 0) {
        let existingThead = '';
        const theadEl = table.querySelector('thead');
        if (theadEl) {
            existingThead = theadEl.outerHTML;
            const thCount = theadEl.querySelectorAll('th').length || 1;
            table.innerHTML = existingThead + `<tbody><tr><td colspan="${thCount}" style="text-align: center; padding: 20px; font-weight: 500; color: #888;">Data Tidak Ditemukan / Kosong</td></tr></tbody>`;
        } else {
            table.innerHTML = '<thead><tr><th>Informasi</th></tr></thead><tbody><tr><td style="text-align: center; padding: 20px; font-weight: 500; color: #888;">Data Tidak Ditemukan / Kosong</td></tr></tbody>';
        }
        return;
    }

    const headers = Object.keys(data[0]);
    
    // Header
    const thead = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>`;
    
    // Body (menampilkan seluruh data)
    const displayData = data;
    const tbody = `<tbody>${displayData.map(row => {
        const isGrandTotal = Object.values(row).includes('Grand Total');
        const trStyle = isGrandTotal ? ' style="font-weight: 700; color: #000000;"' : '';
        
        return `<tr${trStyle}>${headers.map(h => {
            let className = '';
            if (h === 'Long Text' || h === 'Material Description') {
                className = 'class="long-text"';
            }
            
            let cellValue = row[h] !== undefined && row[h] !== null ? row[h] : '';
            
            if (h === 'Status') {
                const val = String(cellValue).trim().toLowerCase();
                if (val === 'late') {
                    cellValue = `<span style="background-color: #FEE2E2; color: #DC2626; padding: 4px 12px; border-radius: 12px; font-weight: 600; display: inline-block;">${cellValue}</span>`;
                } else if (val === 'ontime') {
                    cellValue = `<span style="background-color: #DCFCE7; color: #16A34A; padding: 4px 12px; border-radius: 12px; font-weight: 600; display: inline-block;">${cellValue}</span>`;
                }
            }

            const dateColumns = ['Tanggal', 'Posting Date', 'Document Date', 'Doc. Date', 'PR Date', 'Date of Last GR', 'Date', 'Delivery Date'];
            if (dateColumns.includes(h) && cellValue) {
                let parsedDate = null;
                let isExcelSerial = false;
                if (typeof cellValue === 'number') {
                    parsedDate = new Date(Date.UTC(1899, 11, 30) + Math.round(cellValue * 86400000));
                    isExcelSerial = true;
                } else if (typeof cellValue === 'string' && !isNaN(Date.parse(cellValue))) {
                    parsedDate = new Date(cellValue);
                }
                
                if (parsedDate && !isNaN(parsedDate)) {
                    const dd = String(isExcelSerial ? parsedDate.getUTCDate() : parsedDate.getDate()).padStart(2, '0');
                    const mm = String(isExcelSerial ? (parsedDate.getUTCMonth() + 1) : (parsedDate.getMonth() + 1)).padStart(2, '0');
                    const yyyy = isExcelSerial ? parsedDate.getUTCFullYear() : parsedDate.getFullYear();
                    cellValue = `${dd}/${mm}/${yyyy}`;
                }
            }

            // Format Currency/Value columns
            if (h === 'Value Unrestricted' || h === 'Amount in LC') {
                const num = parseFloat(cellValue);
                if (!isNaN(num)) {
                    cellValue = num.toLocaleString('id-ID'); // Format as Indonesian number
                }
            }
            
            return `<td ${className}>${cellValue}</td>`;
        }).join('')}</tr>`;
    }).join('')}</tbody>`;

    table.innerHTML = thead + tbody;
    applyDynamicFreeze(tableId);
}

function applyDynamicFreeze(tableId) {
    if (tableId !== 'summary-table') return;
    const table = document.getElementById(tableId);
    if (!table) return;
    
    if (!document.getElementById('freeze-col-style')) {
        const style = document.createElement('style');
        style.id = 'freeze-col-style';
        style.innerHTML = `
            .frozen-col { position: sticky !important; z-index: 2; }
            #summary-table thead th.frozen-col { z-index: 4 !important; background-color: #F1F5F9 !important; border-bottom: 2px solid #CBD5E1; }
            #summary-table tbody tr td.frozen-col { background-color: #ffffff; border-bottom: 1px solid #E2E8F0; }
            #summary-table tbody tr:nth-child(even) td.frozen-col { background-color: #F8FAFC; }
            #summary-table tbody tr:hover td.frozen-col { background-color: #FEF08A !important; }
        `;
        document.head.appendChild(style);
    }
    
    const freezeCount = 3;
    const ths = Array.from(table.querySelectorAll('thead th'));
    if (ths.length < freezeCount) return;

    const interval = setInterval(() => {
        if (ths[0].offsetWidth > 0) {
            clearInterval(interval);
            let currentLeft = 0;
            let leftOffsets = [];
            
            for (let i = 0; i < freezeCount; i++) {
                ths[i].classList.add('frozen-col');
                ths[i].style.left = currentLeft + 'px';
                leftOffsets.push(currentLeft);
                currentLeft += ths[i].offsetWidth;
            }

            const tbodyTrs = table.querySelectorAll('tbody tr');
            tbodyTrs.forEach(tr => {
                const tds = tr.querySelectorAll('td');
                for (let i = 0; i < freezeCount && i < tds.length; i++) {
                    tds[i].classList.add('frozen-col');
                    tds[i].style.left = leftOffsets[i] + 'px';
                }
            });
        }
    }, 100);
}


let globalStockData = [];
let globalMb51Data = [];
let globalZmmLtoData = [];
let globalZmmLtoProcessed = [];
let globalSummaryUploadData = [];
let globalSummaryData = [];
let globalUnfilteredSummaryData = [];
let globalPrint1Data = [];

// Main Initialization
async function init() {
    // Fetch all data
    globalStockData = await fetchData('master_employee');
    globalMb51Data = await fetchData('work_days');
    globalZmmLtoData = await fetchData('framsys');
    globalSummaryUploadData = await fetchData('summary_upload');

    // Helper for syncing dates
    function syncDates(dateStr, sourceId) {
        const ids = ['aging-date', 'print-aging-date', 'countsloc-aging-date', 'db-aging-date'];
        ids.forEach(id => {
            if (id !== sourceId) {
                const el = document.getElementById(id);
                if (el && el._flatpickr) {
                    el._flatpickr.setDate(dateStr, false);
                }
            }
        });
        renderSummary();
    }

    // Setup Date Input
    const dateInput = document.getElementById('aging-date');
    if (dateInput) {
        flatpickr(dateInput, {
            dateFormat: "Y-m-d",
            altInput: true,
            altFormat: "d M Y", // 12 Sep 2026
            defaultDate: new Date(),
            locale: "id",
            onReady: function(selectedDates, dateStr, instance) {
                const clearBtn = document.createElement("button");
                clearBtn.textContent = "Clear Filter";
                clearBtn.style = "width: 100%; border: none; background: #EF4444; color: white; padding: 8px; cursor: pointer; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; font-weight: bold; margin-top: 4px;";
                clearBtn.addEventListener("click", function(e) {
                    e.preventDefault();
                    instance.clear();
                    instance.close();
                });
                if (instance.calendarContainer) {
                    instance.calendarContainer.appendChild(clearBtn);
                }
            },
            onChange: function(selectedDates, dateStr, instance) {
                syncDates(dateStr, 'aging-date');
            }
        });
    }

    const dbDateInput = document.getElementById('db-aging-date');
    if (dbDateInput) {
        flatpickr(dbDateInput, {
            dateFormat: "Y-m-d",
            altInput: true,
            altFormat: "d M Y",
            defaultDate: new Date(),
            locale: "id",
            onReady: function(selectedDates, dateStr, instance) {
                const clearBtn = document.createElement("button");
                clearBtn.textContent = "Clear Filter";
                clearBtn.style = "width: 100%; border: none; background: #EF4444; color: white; padding: 8px; cursor: pointer; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; font-weight: bold; margin-top: 4px;";
                clearBtn.addEventListener("click", function(e) {
                    e.preventDefault();
                    instance.clear();
                    instance.close();
                });
                if (instance.calendarContainer) {
                    instance.calendarContainer.appendChild(clearBtn);
                }
            },
            onChange: function(selectedDates, dateStr, instance) {
                syncDates(dateStr, 'db-aging-date');
            }
        });
    }

    const printDateInput = document.getElementById('print-aging-date');
    if (printDateInput) {
        flatpickr(printDateInput, {
            dateFormat: "Y-m-d",
            altInput: true,
            altFormat: "d M Y", // 12 Sep 2026
            defaultDate: new Date(),
            locale: "id",
            onReady: function(selectedDates, dateStr, instance) {
                const clearBtn = document.createElement("button");
                clearBtn.textContent = "Clear Filter";
                clearBtn.style = "width: 100%; border: none; background: #EF4444; color: white; padding: 8px; cursor: pointer; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; font-weight: bold; margin-top: 4px;";
                clearBtn.addEventListener("click", function(e) {
                    e.preventDefault();
                    instance.clear();
                    instance.close();
                });
                if (instance.calendarContainer) {
                    instance.calendarContainer.appendChild(clearBtn);
                }
            },
            onChange: function(selectedDates, dateStr, instance) {
                syncDates(dateStr, 'print-aging-date');
            }
        });
    }

    const countslocDateInput = document.getElementById('countsloc-aging-date');
    if (countslocDateInput) {
        flatpickr(countslocDateInput, {
            dateFormat: "Y-m-d",
            altInput: true,
            altFormat: "d M Y", // 12 Sep 2026
            defaultDate: new Date(),
            locale: "id",
            onReady: function(selectedDates, dateStr, instance) {
                const clearBtn = document.createElement("button");
                clearBtn.textContent = "Clear Filter";
                clearBtn.style = "width: 100%; border: none; background: #EF4444; color: white; padding: 8px; cursor: pointer; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; font-weight: bold; margin-top: 4px;";
                clearBtn.addEventListener("click", function(e) {
                    e.preventDefault();
                    instance.clear();
                    instance.close();
                });
                if (instance.calendarContainer) {
                    instance.calendarContainer.appendChild(clearBtn);
                }
            },
            onChange: function(selectedDates, dateStr, instance) {
                syncDates(dateStr, 'countsloc-aging-date');
            }
        });
    }

    const fillFilter = document.getElementById('summary-fill-filter');
    
    function setupRangePicker(id, renderCallback) {
        const el = document.getElementById(id);
        if (el) {
            flatpickr(el, {
                mode: "range",
                dateFormat: "Y-m-d",
                altInput: true,
                altFormat: "d M Y",
                locale: "id",
                onReady: function(selectedDates, dateStr, instance) {
                    const clearBtn = document.createElement("button");
                    clearBtn.textContent = "Clear Filter";
                    clearBtn.style = "width: 100%; border: none; background: #EF4444; color: white; padding: 8px; cursor: pointer; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; font-weight: bold; margin-top: 4px;";
                    clearBtn.addEventListener("click", function(e) {
                        e.preventDefault();
                        instance.clear();
                        instance.close();
                    });
                    if (instance.calendarContainer) {
                    instance.calendarContainer.appendChild(clearBtn);
                }
                },
                onChange: function(selectedDates) {
                    if (selectedDates.length === 2 || selectedDates.length === 0) {
                        renderCallback();
                    }
                }
            });
        }
    }

    setupRangePicker('mb51-date-range', renderMb51);
    
    const monthFilter = document.getElementById('summary-month-filter');
    if (monthFilter) {
        monthFilter.addEventListener('change', () => {
            renderSummary();
        });
    }

    if (fillFilter) {
        fillFilter.addEventListener('change', () => {
            renderSummary();
        });
    }

    const slocFilter = document.getElementById('summary-sloc-filter');
    if (slocFilter) {
        slocFilter.addEventListener('change', () => {
            renderSummary();
        });
    }

    const statusFilter = document.getElementById('summary-status-filter');
    if (statusFilter) {
        statusFilter.addEventListener('change', () => {
            renderSummary();
        });
    }

    const printFilter = document.getElementById('print1-fill-filter');
    if (printFilter) {
        printFilter.addEventListener('change', () => {
            renderSummary();
        });
    }

    const printSlocFilter = document.getElementById('print1-sloc-filter');
    if (printSlocFilter) {
        printSlocFilter.addEventListener('change', () => {
            renderSummary();
        });
    }

    const summarySearch = document.getElementById('summary-search');
    if (summarySearch) {
        summarySearch.addEventListener('input', () => {
            renderSummary();
        });
    }

    const printSearch = document.getElementById('print1-search');
    if (printSearch) {
        printSearch.addEventListener('input', () => {
            renderSummary();
        });
    }

    const stockSearch = document.getElementById('stock-search');
    if (stockSearch) {
        stockSearch.addEventListener('input', () => {
            renderStock();
        });
    }

    const mb51Search = document.getElementById('mb51-search');
    if (mb51Search) {
        mb51Search.addEventListener('input', () => {
            renderMb51();
        });
    }

    const zmmltoSearch = document.getElementById('zmmlto-search');
    if (zmmltoSearch) {
        zmmltoSearch.addEventListener('input', () => {
            renderZmmLto();
        });
    }

    const btnCopyMaterial = document.getElementById('btn-copy-material');
    if (btnCopyMaterial) {
        btnCopyMaterial.addEventListener('click', async () => {
            if (!globalSummaryData || globalSummaryData.length === 0) {
                alert('Tidak ada data material untuk dicopy!');
                return;
            }
            
            // Ambil hanya list material
            const materialList = globalSummaryData.map(row => row['Material'] || '').filter(m => m !== '').join('\n');
            
            try {
                await navigator.clipboard.writeText(materialList);
                const originalText = btnCopyMaterial.innerHTML;
                btnCopyMaterial.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg> Copied!`;
                btnCopyMaterial.style.background = '#16A34A';
                
                setTimeout(() => {
                    btnCopyMaterial.innerHTML = originalText;
                    btnCopyMaterial.style.background = '#3B82F6';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy materials: ', err);
                alert('Gagal menyalin text. Browser Anda mungkin tidak mendukung fitur ini.');
            }
        });
    }

    const btnCopyPo = document.getElementById('btn-copy-po');
    if (btnCopyPo) {
        btnCopyPo.addEventListener('click', async () => {
            if (!globalSummaryData || globalSummaryData.length === 0) {
                alert('Tidak ada data PO untuk dicopy!');
                return;
            }
            
            // Ambil hanya list PO yang tidak kosong
            const poList = globalSummaryData.map(row => row['PO'] || '').filter(p => p !== '').join('\n');
            
            if (!poList) {
                alert('Semua baris yang sedang tampil tidak memiliki PO.');
                return;
            }
            
            try {
                await navigator.clipboard.writeText(poList);
                const originalText = btnCopyPo.innerHTML;
                btnCopyPo.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg> Copied!`;
                btnCopyPo.style.background = '#16A34A';
                
                setTimeout(() => {
                    btnCopyPo.innerHTML = originalText;
                    btnCopyPo.style.background = '#3B82F6';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy PO: ', err);
                alert('Gagal menyalin text. Browser Anda mungkin tidak mendukung fitur ini.');
            }
        });
    }

    const autoSizeExcelColumns = (ws, data) => {
        if (!data || data.length === 0) return;
        const colWidths = [];
        const keys = Object.keys(data[0]);
        keys.forEach((key, i) => {
            colWidths[i] = { wch: key.toString().length + 2 };
        });
        data.forEach(row => {
            keys.forEach((key, i) => {
                const val = row[key];
                const valLen = val !== null && val !== undefined ? val.toString().length : 0;
                if (valLen + 2 > colWidths[i].wch) {
                    colWidths[i].wch = Math.min(valLen + 2, 50); // cap max width at 50 to avoid overly wide columns
                }
            });
        });
        ws['!cols'] = colWidths;
    };

    const btnExportCen5 = document.getElementById('btn-export-cen5');
    if (btnExportCen5) {
        btnExportCen5.addEventListener('click', () => {
            if (!globalSummaryData || globalSummaryData.length === 0) {
                alert('Tidak ada data untuk dieksport!');
                return;
            }
            const filteredData = globalSummaryData.filter(row => String(row['S Loc.'] || '').trim().toUpperCase() === 'CEN5' || String(row['Sloc'] || '').trim().toUpperCase() === 'CEN5');
            if (filteredData.length === 0) {
                alert('Tidak ada data CEN5 untuk dieksport!');
                return;
            }
            const ws = XLSX.utils.json_to_sheet(filteredData);
            autoSizeExcelColumns(ws, filteredData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Data CEN5");
            XLSX.writeFile(wb, "Export_CEN5.xlsx");
        });
    }

    const btnExportCen2 = document.getElementById('btn-export-cen2');
    if (btnExportCen2) {
        btnExportCen2.addEventListener('click', () => {
            if (!globalSummaryData || globalSummaryData.length === 0) {
                alert('Tidak ada data untuk dieksport!');
                return;
            }
            const filteredData = globalSummaryData.filter(row => String(row['S Loc.'] || '').trim().toUpperCase() === 'CEN2' || String(row['Sloc'] || '').trim().toUpperCase() === 'CEN2');
            if (filteredData.length === 0) {
                alert('Tidak ada data CEN2 untuk dieksport!');
                return;
            }
            const exportedData = filteredData.map(row => {
                const newRow = { ...row };
                delete newRow['Sloc'];
                delete newRow['S Loc.'];
                delete newRow['Note'];
                return newRow;
            });
            const ws = XLSX.utils.json_to_sheet(exportedData);
            autoSizeExcelColumns(ws, exportedData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Data CEN2");
            XLSX.writeFile(wb, "Export_CEN2.xlsx");
        });
    }

    processAndRenderAll();
}

// Fungsi utama untuk memproses dan merender semua data
function processAndRenderAll() {
    // Proses rumus untuk data ZMM_LTO
    globalZmmLtoProcessed = globalZmmLtoData.map(row => {
        const colD = String(row['PR Material Number'] || '').trim();
        // Kembalikan nolnya secara otomatis dengan padStart(10, '0') hanya jika tidak kosong
        const rawE = String(row['Requestioner'] || '').trim();
        const colE = rawE ? rawE.padStart(10, '0') : ''; 
        const colF = String(row['PO Number'] || '').trim();
        return {
            ...row,
            'Requestioner': colE, // Timpa nilai aslinya
            'Kosong1': (colD + colE + colF).toUpperCase(), // Rumus =D2&E2&F2 
            'Kosong2': (colD + colE).toUpperCase(),        // Rumus =D2&E2
            'Kosong3': (colD + colF).toUpperCase()         // Rumus =D2&F2
        };
    });

    // Update Stock Title with line count (deprecated if removed from HTML, keeping for safety)
    const stockTitle = document.getElementById('stock-title');
    if (stockTitle) {
        stockTitle.textContent = `Data Stock (${globalStockData.length})`;
    }

    // Update MB51 Total Line Card
    const mb51TotalLineEl = document.getElementById('mb51-total-line');
    if (mb51TotalLineEl) {
        mb51TotalLineEl.textContent = globalMb51Data.length;
    }

    // Render Tables
    renderSummary();
    renderStock();
    renderMb51();
    renderZmmLto();

    // Update topbar line count untuk tab yang sedang aktif
    const activeNav = document.querySelector('.nav-item.active');
    if (activeNav) {
        updateTopbarLineCount(activeNav.getAttribute('data-target'));
    }
}

function getRowDate(row, specificKey = null) {
    let rawDate = null;
    if (specificKey) {
        if (row[specificKey] !== undefined && row[specificKey] !== null && row[specificKey] !== '') {
            rawDate = row[specificKey];
        }
    } else {
        const possibleDateKeys = ['Tanggal', 'Posting Date', 'Document Date', 'Doc. Date', 'PR Date', 'Date of Last GR', 'Date', 'Delivery Date'];
        for (let key of possibleDateKeys) {
            if (row[key] !== undefined && row[key] !== null && row[key] !== '') {
                rawDate = row[key];
                break;
            }
        }
    }
    if (!rawDate) return null;
    
    let parsedDate = null;
    if (typeof rawDate === 'number') {
        parsedDate = new Date((rawDate - (25567 + 2)) * 86400 * 1000);
    } else {
        parsedDate = new Date(rawDate);
    }
    if (isNaN(parsedDate)) return null;
    parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
}

function filterDataByDateRange(data, dateRangeId, specificKey = null) {
    const el = document.getElementById(dateRangeId);
    if (!el || !el.value) return data;
    
    const parts = el.value.split(' to ');
    if (parts.length !== 2) return data;
    
    const start = new Date(parts[0]);
    start.setHours(0, 0, 0, 0);
    const end = new Date(parts[1]);
    end.setHours(23, 59, 59, 999);
    
    return data.filter(row => {
        const d = getRowDate(row, specificKey);
        if (!d) return true;
        return d >= start && d <= end;
    });
}

function renderStock() {
    let stockDataToRender = [...globalStockData];
    
    const stockSearch = document.getElementById('stock-search');
    const searchQuery = stockSearch ? stockSearch.value.trim().toLowerCase() : '';

    if (searchQuery) {
        stockDataToRender = stockDataToRender.filter(row => {
            return Object.values(row).some(val => 
                String(val).toLowerCase().includes(searchQuery)
            );
        });
    }

    renderTable('stock-table', stockDataToRender);

    const stockTotalLineSpan = document.getElementById('stock-dynamic-total-line');
    if (stockTotalLineSpan) {
        stockTotalLineSpan.textContent = stockDataToRender.length;
    }
}

function renderMb51() {
    let mb51DataToRender = [...globalMb51Data];
    mb51DataToRender = filterDataByDateRange(mb51DataToRender, 'mb51-date-range', 'Posting Date');
    
    const mb51Search = document.getElementById('mb51-search');
    const searchQuery = mb51Search ? mb51Search.value.trim().toLowerCase() : '';

    if (searchQuery) {
        mb51DataToRender = mb51DataToRender.filter(row => {
            return Object.values(row).some(val => 
                String(val).toLowerCase().includes(searchQuery)
            );
        });
    }

    const displayMb51Data = mb51DataToRender.map(row => {
        return {
            'Material': row['Material'] || '',
            'Batch': row['Batch'] || '',
            'Purchase Order': row['Purchase Order'] || '',
            'Posting Date': row['Posting Date'] || '',
            'Document Date': row['Document Date'] || ''
        };
    });

    renderTable('mb51-table', displayMb51Data);

    const mb51TotalLineSpan = document.getElementById('mb51-dynamic-total-line');
    if (mb51TotalLineSpan) {
        mb51TotalLineSpan.textContent = mb51DataToRender.length;
    }
}

function renderZmmLto() {
    let zmmltoDataToRender = [...globalZmmLtoProcessed];
    
    const zmmltoSearch = document.getElementById('zmmlto-search');
    const searchQuery = zmmltoSearch ? zmmltoSearch.value.trim().toLowerCase() : '';

    if (searchQuery) {
        zmmltoDataToRender = zmmltoDataToRender.filter(row => {
            return Object.values(row).some(val => 
                String(val).toLowerCase().includes(searchQuery)
            );
        });
    }

    const displayZmmLtoData = zmmltoDataToRender.map(row => {
        const { 'Kosong1': k1, 'Kosong2': k2, 'Kosong3': k3, ...rest } = row;
        return rest;
    });

    renderTable('zmmlto-table', displayZmmLtoData);

    const zmmltoTotalLineSpan = document.getElementById('zmmlto-dynamic-total-line');
    if (zmmltoTotalLineSpan) {
        zmmltoTotalLineSpan.textContent = zmmltoDataToRender.length;
    }
}

// Logic Upload File Excel LOKAL & SUPABASE
document.addEventListener('DOMContentLoaded', () => {
    const btnProcess = document.getElementById('btn-process-upload');
    const btnReset = document.getElementById('btn-reset-data');

    async function uploadToSupabase(tableName, data) {
        if (!data || data.length === 0) return;

        // DEBUG: Tampilkan data yang sudah diparsing
        const debugRow = data[0];
        const debugKeys = Object.keys(debugRow);
        const debugInfo = debugKeys.map(k => `${k}: "${debugRow[k]}"`).join('\n');
        console.log(`[DEBUG] Tabel: ${tableName}\nJumlah baris: ${data.length}\nKolom: ${debugKeys.join(', ')}\n\nBaris pertama:\n${debugInfo}`);

        // 1. Hapus semua data lama sebelum insert data baru
        {
            let filterColumn = tableName === 'ZMM_LTO' ? 'PR Material Number' : 'Material';
            try {
                const { error: delError } = await supabaseClient.from(tableName).delete().or(`${filterColumn}.is.null,${filterColumn}.neq.DUMMY_NEVER_MATCH`);
                if (delError) console.warn('Gagal menghapus data lama:', delError);
            } catch (err) {
                console.warn('Gagal menghapus data lama:', err);
            }
        }

        // 2. Langsung insert semua data secara chunk (tanpa test row)
        // Kita biarkan error muncul secara jelas
        const chunkSize = 500;
        for (let i = 0; i < data.length; i += chunkSize) {
            const chunk = data.slice(i, i + chunkSize);
            const { data: resData, error } = await supabaseClient.from(tableName).insert(chunk).select();
            if (error) {
                // Tampilkan error detail
                const errDetail = `UPLOAD ERROR!\n\nTabel: ${tableName}\nChunk: ${Math.floor(i/chunkSize)+1}\nError code: ${error.code}\nError message: ${error.message}\nError hint: ${error.hint || '-'}\nError details: ${error.details || '-'}\n\nKolom yang dikirim: ${Object.keys(chunk[0]).join(', ')}`;
                console.error(errDetail);
                alert(errDetail);
                throw new Error(error.message);
            } else {
                console.log(`[DEBUG] Chunk ${Math.floor(i/chunkSize)+1} berhasil. Response baris pertama:`, resData ? resData[0] : 'no data returned');
            }
        }

        console.log(`[Upload] Berhasil upload ${data.length} baris ke ${tableName}`);
    }

    let targetTableNameForDelete = '';
    let targetDisplayTableName = '';

    window.loadAvailableDates = async function(tableName, dateColumnName, infoElement, originalText) {
        infoElement.innerHTML = originalText + '<br><span style="color:#94A3B8; font-style:italic;">Memuat tanggal tersedia...</span>';
        try {
            const { data, error } = await supabaseClient
                .from(tableName)
                .select(dateColumnName)
                .order(dateColumnName, { ascending: false })
                .limit(2000);
                
            if (error) throw error;
            
            const uniqueDates = [...new Set(data.map(row => {
                const val = row[dateColumnName];
                if (!val) return null;
                const d = new Date(val);
                if (isNaN(d.getTime())) return null;
                const dd = String(d.getDate()).padStart(2, '0');
                const mm = String(d.getMonth() + 1).padStart(2, '0');
                const yyyy = d.getFullYear();
                return `${dd}.${mm}.${yyyy}`;
            }).filter(Boolean))];
            
            if (uniqueDates.length > 0) {
                infoElement.innerHTML = originalText + `<br><div style="margin-top:8px; margin-bottom:4px; font-weight:600; color:#64748B;">Tanggal yang tersedia di database:</div><div style="display:flex; flex-wrap:wrap; gap:6px;">` + 
                    uniqueDates.map(d => `<span style="background:#F1F5F9; padding:2px 8px; border-radius:4px; font-size:0.75rem; color:#475569; border: 1px solid #E2E8F0;">${d}</span>`).join('') + 
                    `</div>`;
            } else {
                infoElement.innerHTML = originalText;
            }
        } catch (err) {
            console.error("Gagal memuat tanggal:", err);
            infoElement.innerHTML = originalText + `<br><span style="color:#EF4444; font-size:0.75rem;">Gagal memuat daftar tanggal: ${err.message || 'Error tidak diketahui'}</span>`;
        }
    };

    const resetBtns = document.querySelectorAll('.reset-db-btn');
    if (resetBtns) {
        resetBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tableName = btn.getAttribute('data-table');
                let displayTableName = tableName;
                
                if (tableName === 'all') {
                    displayTableName = 'Semua Data (Stock, MB51, LTO, Summary)';
                    targetTableNameForDelete = tableName;
                    targetDisplayTableName = displayTableName;
                    document.getElementById('modal-hapus-title').textContent = displayTableName;
                    
                    const dateColInfo = document.getElementById('hapus-date-col-info');
                    const dateLabel = document.getElementById('hapus-opt-date-label');
                    
                    dateLabel.style.display = 'none';
                    dateColInfo.textContent = '* Akan menghapus seluruh data dari ke-4 tabel secara permanen.';
                    document.querySelector('input[name="hapus-mode"][value="all"]').checked = true;
                    
                    toggleHapusDateRange();
                    document.getElementById('modal-hapus').style.display = 'flex';
                    return;
                }
                
                if (tableName === 'summary_upload') displayTableName = 'Summary';

                targetTableNameForDelete = tableName;
                targetDisplayTableName = displayTableName;

                document.getElementById('modal-hapus-title').textContent = displayTableName;
                
                const dateColInfo = document.getElementById('hapus-date-col-info');
                const dateLabel = document.getElementById('hapus-opt-date-label');
                
                let originalText = '';
                
                if (tableName === 'mb51') {
                    dateLabel.style.display = 'flex';
                    originalText = '* Akan dihapus berdasarkan kolom Posting Date';
                    dateColInfo.textContent = originalText;
                    document.querySelector('input[name="hapus-mode"][value="all"]').checked = true;
                    loadAvailableDates(tableName, 'Posting Date', dateColInfo, originalText);
                } else if (tableName === 'summary_upload') {
                    dateLabel.style.display = 'flex';
                    originalText = '* Akan dihapus berdasarkan kolom Tanggal';
                    dateColInfo.textContent = originalText;
                    document.querySelector('input[name="hapus-mode"][value="all"]').checked = true;
                    loadAvailableDates(tableName, 'Tanggal', dateColInfo, originalText);
                } else {
                    // stock hapus semua saja
                    dateLabel.style.display = 'none';
                    dateColInfo.textContent = '';
                    document.querySelector('input[name="hapus-mode"][value="all"]').checked = true;
                }
                
                toggleHapusDateRange();
                document.getElementById('modal-hapus').style.display = 'flex';
            });
        });
    }

    if (typeof flatpickr !== 'undefined') {
        flatpickr('#hapus-date-from', { altInput: true, altFormat: 'd.m.Y', dateFormat: 'Y-m-d' });
        flatpickr('#hapus-date-to', { altInput: true, altFormat: 'd.m.Y', dateFormat: 'Y-m-d' });
    }

    window.toggleHapusDateRange = function() {
        const mode = document.querySelector('input[name="hapus-mode"]:checked').value;
        const dateRangeDiv = document.getElementById('hapus-date-range');
        if (mode === 'date') {
            dateRangeDiv.style.display = 'block';
        } else {
            dateRangeDiv.style.display = 'none';
        }
    };

    window.eksekusiHapusData = async function() {
        const mode = document.querySelector('input[name="hapus-mode"]:checked').value;
        const tableName = targetTableNameForDelete;
        const displayTableName = targetDisplayTableName;
        
        const btnConfirm = document.getElementById('btn-hapus-confirm');
        const originalText = btnConfirm.textContent;
        btnConfirm.textContent = 'Menghapus...';
        btnConfirm.disabled = true;

        if (tableName === 'all') {
            try {
                const tables = ['master_employee', 'work_days', 'framsys', 'summary_upload'];
                for (let tbl of tables) {
                    await supabaseClient.from(tbl).delete().neq('id', -1);
                }
                alert(`Data ${displayTableName} berhasil dihapus.`);
                document.getElementById('modal-hapus').style.display = 'none';
                init();
            } catch (err) {
                alert(`Gagal menghapus data ${displayTableName}: ` + (err.message || JSON.stringify(err)));
            } finally {
                btnConfirm.textContent = originalText;
                btnConfirm.disabled = false;
            }
            return;
        }

        let actualTable = tableName;
        if (tableName === 'stock') actualTable = 'master_employee';
        if (tableName === 'mb51') actualTable = 'work_days';
        if (tableName === 'ZMM_LTO') actualTable = 'framsys';

        let query = supabaseClient.from(actualTable).delete();
        
        if (mode === 'date') {
            const dateFrom = document.getElementById('hapus-date-from').value;
            const dateTo = document.getElementById('hapus-date-to').value;
            
            if (!dateFrom || !dateTo) {
                alert('Silakan pilih rentang tanggal (Dari & Sampai).');
                return;
            }
            
            let dateColumn = '';
            if (tableName === 'mb51') {
                dateColumn = 'Posting Date';
                query = query.gte(dateColumn, dateFrom).lte(dateColumn, dateTo);
            } else if (tableName === 'summary_upload') {
                dateColumn = 'Tanggal';
                query = query.gte(dateColumn, dateFrom).lte(dateColumn, dateTo);
            }
        } else {
            // Hapus semua data
            query = query.neq('id', -1);
        }
        
        try {
            const { error: delError } = await query;
            if (delError) throw delError;
            
            alert(`Data ${displayTableName} berhasil dihapus.`);
            document.getElementById('modal-hapus').style.display = 'none';
            init(); // refresh UI
        } catch (err) {
            alert(`Gagal menghapus data ${displayTableName}: ` + (err.message || JSON.stringify(err)));
        } finally {
            btnConfirm.textContent = originalText;
            btnConfirm.disabled = false;
        }
    };

    if (btnProcess) {
        btnProcess.addEventListener('click', async () => {
            btnProcess.textContent = 'Memproses...';
            btnProcess.disabled = true;

            const fileStock = document.getElementById('upload-stock').files[0];
            const fileMb51 = document.getElementById('upload-mb51').files[0];
            const fileZmmlto = document.getElementById('upload-zmmlto').files[0];
            try {
                // Parse Excel to JSON asynchronously
                const parseExcel = (file, options = {}) => new Promise((resolve, reject) => {
                    if (!file) return resolve(null);
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        setTimeout(() => {
                            try {
                                const data = new Uint8Array(e.target.result);
                                
                                // Deteksi apakah ini file MHTML SAP atau Excel asli
                                let headerCheck = "";
                                for(let i=0; i<Math.min(100, data.length); i++) {
                                    headerCheck += String.fromCharCode(data[i]);
                                }
                                
                                let workbook;
                                if (headerCheck.includes("MIME-Version: 1.0") || headerCheck.includes("<html") || headerCheck.includes("xmlns:o=")) {
                                    // Ini adalah file ekspor SAP (HTML/MHTML)
                                    const fullText = new TextDecoder("utf-8").decode(data);
                                    // Cari posisi di mana kode HTML/Tabel mulai (buang header MIME)
                                    const htmlIndex = fullText.search(/<html/i);
                                    const tableIndex = fullText.search(/<table/i);
                                    let startIndex = -1;
                                    
                                    if (htmlIndex !== -1 && tableIndex !== -1) {
                                        startIndex = Math.min(htmlIndex, tableIndex);
                                    } else if (htmlIndex !== -1) {
                                        startIndex = htmlIndex;
                                    } else if (tableIndex !== -1) {
                                        startIndex = tableIndex;
                                    }
                                    
                                    if (startIndex !== -1) {
                                        const cleanHtml = fullText.substring(startIndex);
                                        workbook = XLSX.read(cleanHtml, { type: 'string' });
                                    } else {
                                        workbook = XLSX.read(fullText, { type: 'string' });
                                    }
                                } else {
                                    // Ini adalah file Excel asli (.xlsx / .xls)
                                    workbook = XLSX.read(data, { type: 'array' });
                                }
                                
                                const firstSheetName = workbook.SheetNames[0];
                                const worksheet = workbook.Sheets[firstSheetName];
                                
                                // Auto-detect header row for SAP exports
                                let headerRowIndex = 0;
                                const range = XLSX.utils.decode_range(worksheet['!ref']);
                                for (let R = range.s.r; R <= Math.min(range.s.r + 20, range.e.r); ++R) {
                                    for (let C = range.s.c; C <= range.e.c; ++C) {
                                        const cellAddress = {c:C, r:R};
                                        const cellRef = XLSX.utils.encode_cell(cellAddress);
                                        const cell = worksheet[cellRef];
                                        if (cell && cell.v && String(cell.v).trim().toLowerCase() === 'material') {
                                            headerRowIndex = R;
                                            break;
                                        }
                                    }
                                    if (headerRowIndex > 0) break;
                                }
                                
                                const jsonOptions = { defval: "" };
                                if (options.range !== undefined) {
                                    jsonOptions.range = options.range;
                                } else if (headerRowIndex > 0) {
                                    jsonOptions.range = headerRowIndex;
                                }
                                
                                const rawJson = XLSX.utils.sheet_to_json(worksheet, jsonOptions);
                                
                                let finalColumns = [];
                                if (options.allowedColumns) {
                                    finalColumns = options.allowedColumns;
                                } else {
                                    const keySet = new Set();
                                    rawJson.forEach(r => Object.keys(r).forEach(k => {
                                        if (k && !k.startsWith('__EMPTY') && k.trim() !== '') {
                                            // Bersihkan nama kolom dari spasi berlebih
                                            keySet.add(k.trim());
                                        }
                                    }));
                                    finalColumns = Array.from(keySet);
                                }

                                const json = rawJson.map(row => {
                                    const cleanRow = {};
                                    // Paksakan semua object memiliki susunan key yang SAMA PERSIS.
                                    for (const key of finalColumns) {
                                        // Cari nilai dengan case-insensitive / trim
                                        let val = null;
                                        for (const rKey in row) {
                                            if (rKey.trim().toLowerCase() === key.toLowerCase()) {
                                                val = row[rKey];
                                                break;
                                            }
                                        }
                                        if (val === undefined || val === "") val = null;

                                        // Fix date columns: convert Excel serial number or DD/MM/YYYY to YYYY-MM-DD
                                        if (val !== null && (key.toLowerCase().includes('date'))) {
                                            if (typeof val === 'number') {
                                                // Excel serial date -> JS Date -> ISO string
                                                const d = new Date((val - 25569) * 86400 * 1000);
                                                if (!isNaN(d.getTime())) {
                                                    val = d.toISOString().split('T')[0];
                                                }
                                            } else if (typeof val === 'string' && val.includes('/')) {
                                                const parts = val.split('/');
                                                if (parts.length === 3) {
                                                    const day = parts[0].padStart(2, '0');
                                                    const month = parts[1].padStart(2, '0');
                                                    const year = parts[2].length === 2 ? '20' + parts[2] : parts[2];
                                                    val = `${year}-${month}-${day}`;
                                                }
                                            }
                                        }

                                        cleanRow[key] = val;
                                    }
                                    return cleanRow;
                                });
                                
                                resolve(json);
                            } catch (err) {
                                reject(err);
                            }
                        }, 100);
                    };
                    reader.onerror = (error) => reject(error);
                    reader.readAsArrayBuffer(file);
                });

                // Proses file SECARA BERGANTIAN (sequential) agar RAM tidak penuh dan browser tidak crash
                const newStock = await parseExcel(fileStock);
                const newMb51 = await parseExcel(fileMb51);
                const newZmmlto = await parseExcel(fileZmmlto);

                // Filter kolom ZMM_LTO: hanya kirim kolom yang ada di schema Supabase
                // Tabel ZMM_LTO di Supabase hanya punya 7 kolom ini
                const filteredZmmlto = newZmmlto ? newZmmlto.map(row => {
                    // Ambil 4 kolom dasar dari Excel
                    const prMatNum = String(row['PR Material Number'] || '').trim();
                    const rawReq   = String(row['Requestioner'] || '').trim();
                    const requestioner = rawReq ? rawReq.padStart(10, '0') : '';
                    const poNumber = String(row['PO Number'] || '').trim();
                    const storageLoc = String(row['Storage Location'] || '').trim() || null;

                    // Hitung Kosong1/2/3 sama seperti rumus di processData()
                    const kosong1 = (prMatNum + requestioner + poNumber).toUpperCase() || null;
                    const kosong2 = (prMatNum + requestioner).toUpperCase() || null;
                    const kosong3 = (prMatNum + poNumber).toUpperCase() || null;

                    return {
                        'Kosong1':            kosong1,
                        'Kosong2':            kosong2,
                        'Kosong3':            kosong3,
                        'PR Material Number': prMatNum || null,
                        'Requestioner':       requestioner || null,
                        'PO Number':          poNumber || null,
                        'Storage Location':   storageLoc,
                    };
                }) : null;

                // Upload to database if files were provided
                // Dengan strategi "Replace All", data lama akan dihapus otomatis sebelum data baru dimasukkan.
                if (newStock) await uploadToSupabase('stock', newStock);
                if (newMb51) await uploadToSupabase('mb51', newMb51);
                if (filteredZmmlto) await uploadToSupabase('ZMM_LTO', filteredZmmlto);

                // Tarik ulang data dari database agar sinkron
                await init();

                // Bersihkan form upload (hilangkan menu batal dan kotak biru)
                const cancelBtns = document.querySelectorAll('.cancel-upload-btn');
                cancelBtns.forEach(btn => btn.click());

                // Pindah otomatis ke halaman Summary
                const summaryNav = document.querySelector('.nav-item[data-target="summary"]');
                if (summaryNav) summaryNav.click();
                
                alert('Data berhasil di-upload ke database dan dihitung!');
            } catch (err) {
                console.error('Error parsing/uploading files:', err);
                alert(`Terjadi kesalahan saat memproses/upload file Excel:\n\n${err.message || JSON.stringify(err)}\n\nPastikan format tabel di Supabase sudah sesuai dengan isi file Excel.`);
            } finally {
                btnProcess.textContent = 'Proses & Hitung Otomatis';
                btnProcess.disabled = false;
            }
        });
    }
});

function renderSummary() {
    const dateInput = document.getElementById('db-aging-date') || document.getElementById('aging-date');
    const targetDateStr = dateInput ? dateInput.value : '';
    const targetDate = targetDateStr ? new Date(targetDateStr) : new Date();

    let ontimeCount = 0;
    let lateCount = 0;

    const cleanKey = (val) => String(val).replace(/[^a-zA-Z0-9]/g, '').replace(/^0+/, '').toLowerCase();

    const monthFilterEl = document.getElementById('summary-month-filter');
    
    // Populate dropdown with unique months from work_days
    if (monthFilterEl && monthFilterEl.options.length <= 1 && globalMb51Data.length > 0) {
        const uniqueMonths = [...new Set(globalMb51Data.map(row => String(row['Month'] || '').trim()).filter(m => m))];
        uniqueMonths.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m;
            opt.textContent = m;
            monthFilterEl.appendChild(opt);
        });
        
        // Default to the first month if it's currently 'all'
        if (uniqueMonths.length > 0) {
            monthFilterEl.value = uniqueMonths[0];
        }
    }
    
    const selectedMonth = monthFilterEl ? monthFilterEl.value : 'all';

    let filteredMb51Data = globalMb51Data;
    if (selectedMonth !== 'all') {
        filteredMb51Data = globalMb51Data.filter(row => String(row['Month'] || '').trim() === selectedMonth);
    }

    // Map filtered work_days to Summary (Worksheet) columns
    let summaryData = filteredMb51Data.map((mb51Row, index) => {
        const empId = String(mb51Row['Index'] || mb51Row['Pers.No.'] || '').trim();
        
        let workContract = mb51Row['Work Contract'] || mb51Row['Bagian'] || '';
        let whArea = mb51Row['Area'] || mb51Row['WH Area'] || '';

        // VLOOKUP Work Contract & Area dari master_employee (globalStockData)
        if (empId) {
            const masterMatch = globalStockData.find(mRow => {
                const mId = String(mRow['Index'] || mRow['Pers.No.'] || '').replace(/^0+/, '').trim();
                const eId = empId.replace(/^0+/, '').trim();
                return mId === eId && mId !== '';
            });
            if (masterMatch) {
                // Sesuai rumus Excel: 
                // Jika header Excel-nya sudah "Work Contract" (kolom ke-4) atau "Bagian"
                workContract = masterMatch['Work Contract'] || masterMatch['Bagian'] || workContract;
                
                // WH Area = VLOOKUP(..., 6) kolom ke-6 adalah "WH Area" atau "Area" atau "Double Check"
                whArea = masterMatch['WH Area'] || masterMatch['Area'] || masterMatch['Double Check'] || whArea;
            }
        }
        
        // DEBUGGING VISUAL: Jika whArea masih kosong, tampilkan status pencarian
        if (!whArea || whArea.trim() === '') {
            if (empId) {
                const masterMatchCheck = globalStockData.find(mRow => {
                    const mId = String(mRow['Index'] || mRow['Pers.No.'] || '').replace(/^0+/, '').trim();
                    const eId = empId.replace(/^0+/, '').trim();
                    return mId === eId && mId !== '';
                });
                
                if (!masterMatchCheck) {
                    // Coba ambil 2 ID pertama dari database untuk dilihat formatnya
                    let sampleDB = '';
                    if (globalStockData.length > 0) {
                        const id1 = String(globalStockData[0]['Index'] || globalStockData[0]['Pers.No.'] || '');
                        const id2 = globalStockData.length > 1 ? String(globalStockData[1]['Index'] || globalStockData[1]['Pers.No.'] || '') : '';
                        sampleDB = ` (DB has: ${globalStockData.length} rows, ex: ${id1}, ${id2})`;
                    } else {
                        sampleDB = ' (DB is EMPTY!)';
                    }
                    whArea = 'Not Found in DB' + sampleDB;
                } else {
                    whArea = masterMatchCheck['Area'] ? 'Area is: ' + masterMatchCheck['Area'] : 'Area is empty in DB';
                }
            }
        }
        
        // MENGHITUNG ATTENDANCE (Berdasarkan rumus SUMIFS)
        let attendance = 0;
        if (empId) {
            globalZmmLtoProcessed.forEach(fRow => {
                const kitTk = String(fRow['KIT TK'] || '').trim();
                if (kitTk === empId) {
                    // Match month from Date Shift (e.g. 11/12/2025)
                    // But since we just want to SUMIFS we check if it falls in selectedMonth
                    const dateShift = String(fRow['Date Shift'] || '').trim();
                    let matchMonth = true;
                    
                    if (selectedMonth !== 'all' && dateShift) {
                        // dateShift format DD/MM/YYYY or YYYY-MM-DD
                        let fDate = new Date(dateShift.includes('/') ? dateShift.split('/').reverse().join('-') : dateShift);
                        if (!isNaN(fDate.getTime())) {
                            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
                            const mStr = `${months[fDate.getMonth()]}-${String(fDate.getFullYear()).slice(2)}`;
                            // Cek jika bulan cocok (misal: "Mei-26")
                            if (mStr.toLowerCase() !== selectedMonth.toLowerCase()) {
                                matchMonth = false; // tidak cocok dengan filter bulan
                            }
                        }
                    }

                    if (matchMonth) {
                        let durasiStr = String(fRow['Durasi (Jam)'] || fRow['O'] || '0').replace(',', '.');
                        let durasi = parseFloat(durasiStr);
                        if (!isNaN(durasi)) {
                            attendance += durasi;
                        }
                    }
                }
            });
        }

        const workingDays = Number(mb51Row['Hari Kerja']) || 0;
        let discipline = '';
        if (workingDays > 0) {
            // Hitung persentase kedisiplinan
            const discVal = (attendance / workingDays) * 100;
            discipline = discVal.toFixed(1) + '%';
        }

        // Format angka desimal Attendance kembali menggunakan koma untuk tampilan Indonesia
        let attendanceFormatted = attendance.toString().replace('.', ',');

        return {
            'Work Contract': workContract,
            'WH Area': whArea,
            'Employee ID': empId,
            'Employee Name': mb51Row['Nama'] || mb51Row['Full Name'] || '',
            'Working Days': workingDays || '',
            'Attendance': attendanceFormatted || '0',
            'Discipline (%)': discipline
        };
    });

    globalUnfilteredSummaryData = [...summaryData];

    const fillFilter = document.getElementById('summary-fill-filter');
    const filterValue = fillFilter ? fillFilter.value : 'all';

    if (filterValue !== 'all') {
        summaryData = summaryData.filter(row => {
            const isPOEmpty = (row['PO'] === undefined || row['PO'] === null || String(row['PO']).trim() === '');
            if (filterValue === 'po_filled') return !isPOEmpty;
            if (filterValue === 'po_empty') return isPOEmpty;
            return true;
        });
    }

    const slocFilter = document.getElementById('summary-sloc-filter');
    const slocFilterValue = slocFilter ? slocFilter.value : 'all';

    if (slocFilterValue !== 'all') {
        summaryData = summaryData.filter(row => {
            const isSlocEmpty = (row['S Loc.'] === undefined || row['S Loc.'] === null || String(row['S Loc.']).trim() === '');
            if (slocFilterValue === 'sloc_filled') return !isSlocEmpty;
            if (slocFilterValue === 'sloc_empty') return isSlocEmpty;
            return true;
        });
    }

    const statusFilter = document.getElementById('summary-status-filter');
    const statusFilterValue = statusFilter ? statusFilter.value : 'all';

    if (statusFilterValue !== 'all') {
        summaryData = summaryData.filter(row => {
            return String(row['Status']).trim().toLowerCase() === statusFilterValue.toLowerCase();
        });
    }

    const summarySearch = document.getElementById('summary-search');
    const searchQuery = summarySearch ? summarySearch.value.trim().toLowerCase() : '';

    if (searchQuery) {
        summaryData = summaryData.filter(row => {
            return Object.values(row).some(val => 
                String(val).toLowerCase().includes(searchQuery)
            );
        });
    }
    // Urutkan berdasarkan Aging (Hari) dari terbesar ke terkecil
    summaryData.sort((a, b) => {
        const agingA = Number(a['Aging (Hari)']) || 0;
        const agingB = Number(b['Aging (Hari)']) || 0;
        return agingB - agingA;
    });

    globalSummaryData = summaryData;

    updateDbTotalUnrestricted();

    // Recalculate ontimeCount and lateCount based on FILTERED data
    let filteredOntimeCount = 0;
    let filteredLateCount = 0;

    summaryData.forEach(row => {
        const stat = String(row['Status']).trim().toLowerCase();
        if (stat === 'late') {
            filteredLateCount++;
        } else if (stat === 'ontime') {
            filteredOntimeCount++;
        }
    });

    // Update Stats UI
    const totalCount = filteredOntimeCount + filteredLateCount;
    const statOntimeLine = document.getElementById('stat-ontime-line');
    const statLateLine = document.getElementById('stat-late-line');
    const statTotalLine = document.getElementById('stat-total-line');
    const statOntimePct = document.getElementById('stat-ontime-pct');
    const statLatePct = document.getElementById('stat-late-pct');
    const statTotalPct = document.getElementById('stat-total-pct');

    const dbStatOntimeLine = document.getElementById('db-stat-ontime-line');
    const dbStatLateLine = document.getElementById('db-stat-late-line');
    const dbStatTotalLine = document.getElementById('db-stat-total-line');
    const dbStatOntimePct = document.getElementById('db-stat-ontime-pct');
    const dbStatLatePct = document.getElementById('db-stat-late-pct');
    const dbStatTotalPct = document.getElementById('db-stat-total-pct');

    const updateStatsForElements = (ontimeLine, lateLine, totalLine, ontimePct, latePct, totalPct) => {
        if (ontimeLine) {
            ontimeLine.textContent = filteredOntimeCount;
            lateLine.textContent = filteredLateCount;
            totalLine.innerHTML = `<strong>${totalCount}</strong>`;
            
            ontimePct.textContent = totalCount ? Math.round((filteredOntimeCount/totalCount)*100) + '%' : '0%';
            latePct.textContent = totalCount ? Math.round((filteredLateCount/totalCount)*100) + '%' : '0%';
            totalPct.innerHTML = `<strong>100%</strong>`;
        }
    };

    updateStatsForElements(statOntimeLine, statLateLine, statTotalLine, statOntimePct, statLatePct, statTotalPct);
    updateStatsForElements(dbStatOntimeLine, dbStatLateLine, dbStatTotalLine, dbStatOntimePct, dbStatLatePct, dbStatTotalPct);

    const displaySummaryData = summaryData.map(row => {
        const { 'No. Batch': noBatch, ...rest } = row;
        return rest;
    });

    renderTable('summary-table', displaySummaryData);

    const summaryTotalLineSpan = document.getElementById('dynamic-total-line');
    if (summaryTotalLineSpan) {
        summaryTotalLineSpan.textContent = displaySummaryData.length;
    }

    // Map to Print 1 format
    let print1Data = summaryData.map(row => {
        const mat = String(row['Material'] || '').trim();
        const bat = String(row['Batch'] || '').trim(); 
        const po = String(row['PO'] || '').trim();
        
        // Key untuk tampilan dan pencarian
        const lookupKey = (mat + bat + po).toUpperCase();
        const keyKosong2 = (mat + bat).toUpperCase();
        const keyKosong3 = (mat + po).toUpperCase();
        
        // Rumus VLOOKUP untuk S Loc.
        const zmmMatch = globalZmmLtoProcessed.find(zRow => zRow['Kosong1'] === lookupKey);
        const sLocResult = zmmMatch ? (zmmMatch['Storage Location'] || '') : '';

        return {
            'No': row['No'],
            ' ': lookupKey, // Rumus =E6&I6&M6 (Material + Batch + PO)
            '  ': keyKosong2, // Rumus =E6&I6 (Material + Batch)
            '   ': keyKosong3, // Rumus =E6&M6 (Material + PO)
            'Material': row['Material'],
            'Long Text': row['Long Text'],
            'Plant': row['Plan'],
            'Sloc': row['Sloc'],
            'Batch': row['Batch'],
            'Bun': row['Bun'],
            'Qty': row['Qty'],
            'Currency': row['Currency'],
            'PO': row['PO'],
            'Tanggal': row['Tanggal'],
            'Aging (Hari)': row['Aging (Hari)'],
            'Status': row['Status'],
            'S Loc.': sLocResult, 
            'Note': ''
        };
    });

    const printFilter = document.getElementById('print1-fill-filter');
    const printFilterValue = printFilter ? printFilter.value : 'all';

    if (printFilterValue !== 'all') {
        print1Data = print1Data.filter(row => {
            const isPOEmpty = (row['PO'] === undefined || row['PO'] === null || String(row['PO']).trim() === '');
            
            if (printFilterValue === 'po_filled') return !isPOEmpty;
            if (printFilterValue === 'po_empty') return isPOEmpty;
            
            return true;
        });
    }

    const printSlocFilter = document.getElementById('print1-sloc-filter');
    if (printSlocFilter) {
        const printSlocFilterValue = printSlocFilter.value;
        if (printSlocFilterValue !== 'all') {
            print1Data = print1Data.filter(row => {
                const isSlocEmpty = (row['S Loc.'] === undefined || row['S Loc.'] === null || String(row['S Loc.']).trim() === '');
                
                if (printSlocFilterValue === 'sloc_filled') return !isSlocEmpty;
                if (printSlocFilterValue === 'sloc_empty') return isSlocEmpty;
                
                return true;
            });
        }
    }

    const printSearch = document.getElementById('print1-search');
    const printSearchQuery = printSearch ? printSearch.value.trim().toLowerCase() : '';

    if (printSearchQuery) {
        print1Data = print1Data.filter(row => {
            return Object.values(row).some(val => 
                String(val).toLowerCase().includes(printSearchQuery)
            );
        });
    }

    print1Data = print1Data.map((row, index) => {
        row['No'] = index + 1;
        return row;
    });

    globalPrint1Data = print1Data;

    renderTable('print1-table', print1Data);
    
    const print1TotalLineSpan = document.getElementById('print1-dynamic-total-line');
    if (print1TotalLineSpan) {
        print1TotalLineSpan.textContent = print1Data.length;
    }

    // === Generate Count Of S Loc ===
    const sLocSet = new Set();
    const pivotData = {
        grandTotal: { rowTotal: 0, sLocTotals: {} },
        plants: {}
    };
    const sLocTotals = {
        'Late': {},
        'Ontime': {}
    };

    globalUnfilteredSummaryData.forEach(row => {
        let plantStr = String(row['Plan'] || '').trim();
        let statusStr = String(row['Status'] || '').trim();
        let sLocStr = String(row['S Loc.'] || '').trim();
        let sLoc = sLocStr || '(Blank S Loc)';
        
        if (!plantStr || !statusStr || !sLocStr) {
            return; // Skip blank plant, blank status, and blank S Loc
        }
        
        let plant = plantStr;
        let status = statusStr;

        sLocSet.add(sLoc);

        if (!pivotData.plants[plant]) {
            pivotData.plants[plant] = { 
                rowTotal: 0, 
                sLocTotals: {}, 
                statuses: {
                    'Ontime': { rowTotal: 0, sLocTotals: {} },
                    'Late': { rowTotal: 0, sLocTotals: {} }
                } 
            };
        }
        if (!pivotData.plants[plant].statuses[status]) {
            pivotData.plants[plant].statuses[status] = { rowTotal: 0, sLocTotals: {} };
        }

        pivotData.grandTotal.rowTotal++;
        pivotData.grandTotal.sLocTotals[sLoc] = (pivotData.grandTotal.sLocTotals[sLoc] || 0) + 1;

        pivotData.plants[plant].rowTotal++;
        pivotData.plants[plant].sLocTotals[sLoc] = (pivotData.plants[plant].sLocTotals[sLoc] || 0) + 1;

        pivotData.plants[plant].statuses[status].rowTotal++;
        pivotData.plants[plant].statuses[status].sLocTotals[sLoc] = (pivotData.plants[plant].statuses[status].sLocTotals[sLoc] || 0) + 1;

        sLocTotals[status][sLoc] = (sLocTotals[status][sLoc] || 0) + 1;
    });

    const sLocs = Array.from(sLocSet).sort();
    const countSLocTableData = [];
    
    const createRow = (label, totalsObj, rowTotal) => {
        const rowObj = { 'Count of Status': label };
        Array.from(sLocSet).sort().forEach(sLoc => {
            rowObj[sLoc] = totalsObj[sLoc] || 0;
        });
        rowObj['Grand Total'] = rowTotal || 0;
        return rowObj;
    };

    if (print1Data.length > 0) {
        countSLocTableData.push(createRow('Ontime', sLocTotals['Ontime'], ontimeCount));
        countSLocTableData.push(createRow('Late', sLocTotals['Late'], lateCount));
        countSLocTableData.push(createRow('Grand Total', Object.fromEntries(
            Array.from(sLocSet).map(loc => [loc, (sLocTotals['Late'][loc] || 0) + (sLocTotals['Ontime'][loc] || 0)])
        ), totalCount));

        renderTable('countsloc-table', countSLocTableData);

        // Render Chart (Late/Ontime)
        const chartLabels = Array.from(sLocSet).sort();
        
        const activeChartTab = document.querySelector('.chart-tab.active');
        const filterVal = activeChartTab ? activeChartTab.getAttribute('data-type') : 'Late';
        
        const chartTitleElement = document.getElementById('late-chart-title');
        if (chartTitleElement) {
            chartTitleElement.textContent = `Monitoring Status Aging (${filterVal}) per S Loc`;
        }

        const chartData = chartLabels.map(loc => sLocTotals[filterVal][loc] || 0);
        renderLateChart(chartLabels, chartData, filterVal);
    } else {
        renderTable('countsloc-table', []);
        
        const activeChartTab = document.querySelector('.chart-tab.active');
        const filterVal = activeChartTab ? activeChartTab.getAttribute('data-type') : 'Late';
        
        const chartTitleElement = document.getElementById('late-chart-title');
        if (chartTitleElement) {
            chartTitleElement.textContent = `Monitoring Status Aging (${filterVal}) per S Loc`;
        }
        
        renderLateChart([], [], filterVal);
    }

    // Update Data Stock Card
    const emptyPoCount = globalUnfilteredSummaryData.filter(row => {
        return row['PO'] === undefined || row['PO'] === null || String(row['PO']).trim() === '';
    }).length;

    const emptySlocCount = globalUnfilteredSummaryData.filter(row => {
        return row['S Loc.'] === undefined || row['S Loc.'] === null || String(row['S Loc.']).trim() === '';
    }).length;

    const poElement = document.getElementById('db-datastock-po');
    const slocElement = document.getElementById('db-datastock-sloc');
    const totalStockElement = document.getElementById('db-datastock-total');
    
    if (poElement) poElement.textContent = emptyPoCount;
    if (slocElement) slocElement.textContent = emptySlocCount;
    if (totalStockElement) totalStockElement.textContent = globalStockData.length;

    const activeNav = document.querySelector('.nav-item.active');
    if (activeNav) {
        updateTopbarLineCount(activeNav.getAttribute('data-target'));
    }
}

function updateDbTotalUnrestricted() {
    const dbFilter = document.getElementById('db-unrestricted-sloc-filter');
    if (!dbFilter) return;

    // Populate dropdown if empty (only on first run or data change)
    if (dbFilter.options.length <= 1 && globalUnfilteredSummaryData.length > 0) {
        const sLocs = new Set();
        globalUnfilteredSummaryData.forEach(row => {
            const isPOEmpty = (row['PO'] === undefined || row['PO'] === null || String(row['PO']).trim() === '');
            if (!isPOEmpty && row['S Loc.']) {
                sLocs.add(String(row['S Loc.']).trim());
            }
        });
        
        let optionsHtml = '<option value="all">Semua Lokasi</option>';
        Array.from(sLocs).sort().forEach(loc => {
            optionsHtml += `<option value="${loc}">${loc}</option>`;
        });
        dbFilter.innerHTML = optionsHtml;
    }

    const selectedLoc = dbFilter.value;
    
    let totalUnrestrictedVal = 0;
    globalUnfilteredSummaryData.forEach(row => {
        const isPOEmpty = (row['PO'] === undefined || row['PO'] === null || String(row['PO']).trim() === '');
        if (!isPOEmpty) {
            if (selectedLoc === 'all' || String(row['S Loc.']).trim() === selectedLoc) {
                let val = row['Value Unrestricted'];
                if (val) {
                    val = String(val).replace(/,/g, '');
                    totalUnrestrictedVal += Number(val) || 0;
                }
            }
        }
    });

    const dbTotalUnrestricted = document.getElementById('db-total-unrestricted');
    if (dbTotalUnrestricted) {
        dbTotalUnrestricted.textContent = Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            notation: 'compact',
            maximumFractionDigits: 1
        }).format(totalUnrestrictedVal);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dbFilter = document.getElementById('db-unrestricted-sloc-filter');
    if (dbFilter) {
        dbFilter.addEventListener('change', updateDbTotalUnrestricted);
    }

    const chartTabs = document.querySelectorAll('.chart-tab');
    chartTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const type = e.target.getAttribute('data-type');
            
            // Reset all tabs styling
            chartTabs.forEach(t => {
                t.classList.remove('active');
                t.style.color = '#94a3b8';
                t.style.borderBottom = 'none';
            });
            
            // Set active tab styling
            e.target.classList.add('active');
            e.target.style.color = '#1e293b';
            e.target.style.borderBottom = `2px solid ${type === 'Ontime' ? '#16a34a' : '#ef4444'}`;
            
            // Re-render to update the chart
            renderSummary();
        });
    });
});

// Start
init();

function handleExportExcel() {
    const activeNav = document.querySelector('.nav-item.active');
    if (!activeNav) return;
    const target = activeNav.getAttribute('data-target');
    if (target === 'print1') {
        exportPrint1ToExcel();
    } else if (target === 'summary' || target === 'dashboard') {
        exportSummaryToExcel();
    }
}

function handlePrintExcelStyle() {
    let dataToPrint = [];
    const activeNav = document.querySelector('.nav-item.active');
    const target = activeNav ? activeNav.getAttribute('data-target') : 'summary';

    if (target === 'print1') {
        dataToPrint = globalPrint1Data;
    } else {
        dataToPrint = globalSummaryData;
    }

    if (!dataToPrint || dataToPrint.length === 0) {
        alert("Tidak ada data untuk diprint!");
        return;
    }
    
    let printContainer = document.getElementById('print-only-container');
    if (!printContainer) {
        printContainer = document.createElement('div');
        printContainer.id = 'print-only-container';
        document.body.appendChild(printContainer);
    }
    
    const columnsToExclude = ["No. Batch", "Bin", "Department", "Value Unrestricted", "Line", "Currency"];
    
    const allKeys = Object.keys(dataToPrint[0]);
    let headersToPrint = allKeys.filter(k => !columnsToExclude.includes(k));
    
    let html = '<div style="padding: 10px;">';
    
    // Generate date and time
    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    
    html += `<div style="display: flex; justify-content: space-between; font-family: Arial, sans-serif; font-size: 9px; margin-bottom: 5px; color: black; font-weight: bold;">
        <span>Tanggal: ${dateStr} - Jam: ${timeStr} WIB</span>
        <span>CEN5 Aging Monitoring System</span>
    </div>`;
    
    html += '<table class="print-table" border="1" cellspacing="0" cellpadding="4" style="width: 100%; border-collapse: collapse; border: 1px solid black; text-align: center; font-family: Arial, sans-serif; font-size: 8px; table-layout: auto; margin-top: 10px;">';
    html += '<thead><tr>';
    headersToPrint.forEach((h, index) => {
        let colWidth = '';
        let displayHeader = h;

        if (h === 'No') {
            colWidth = 'width: 25px;';
        } else if (h === 'Long Text') {
            colWidth = 'width: 200px; max-width: 200px;';
        } else if (h === 'Material') {
            colWidth = 'white-space: nowrap;';
        } else if (h === 'Currency') {
            colWidth = 'width: 40px; max-width: 40px;';
            displayHeader = 'Curr<br>ency';
        } else if (h === 'Aging (Hari)') {
            colWidth = 'width: 45px; max-width: 45px;';
            displayHeader = 'Aging<br>(Hari)';
        } else if (h === 'Plan') {
            displayHeader = 'Plant';
        } else if (h === 'Qty' || h === 'Bun' || h === 'Sloc' || h === 'Batch') {
            colWidth = 'width: 45px; max-width: 45px; overflow: hidden;';
        } else if (h === 'PO' || h === 'Tanggal') {
            colWidth = 'width: 55px; max-width: 55px; word-break: break-word;';
        }

        html += `<th style="padding: 4px 3px; background-color: #D3E1F1 !important; font-weight: bold; color: black; font-size: 9px; text-align: center; vertical-align: middle; border: 1px solid black !important; line-height: 1.2; ${colWidth}">${displayHeader}</th>`;
    });
    html += '</tr></thead><tbody>';
    
    dataToPrint.forEach((row, i) => {
        const bgColor = (i % 2 === 0) ? '#E9F0F8 !important' : 'white !important';
        html += `<tr style="background-color: ${bgColor};">`;
        headersToPrint.forEach(h => {
            let val = row[h];
            if (val === undefined || val === null) val = '';
            
            if (h === 'Tanggal' && val) {
                const parts = String(val).split(' ');
                if (parts.length === 3) {
                    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
                    const mIndex = months.indexOf(parts[1]);
                    if (mIndex !== -1) {
                        const dd = parts[0].padStart(2, '0');
                        const mm = String(mIndex + 1).padStart(2, '0');
                        val = `${dd}/${mm}/${parts[2]}`;
                    }
                }
            }
            
            let styleTd = 'padding: 4px 3px; border: 1px solid black !important; color: black; font-size: 8px; white-space: normal; word-wrap: break-word; text-align: center; vertical-align: middle; line-height: 1.2;';
            if (h === 'Long Text') {
                styleTd += ' width: 150px; max-width: 150px; text-align: center;';
            } else if (h === 'Material') {
                styleTd += ' white-space: nowrap;';
            }
            
            html += `<td style="${styleTd}">${val}</td>`;
        });
        html += '</tr>';
    });
    
    html += '</tbody></table></div>';
    printContainer.innerHTML = html;
    
    let style = document.getElementById('print-style-excel');
    if (!style) {
        style = document.createElement('style');
        style.id = 'print-style-excel';
        style.textContent = `
            #print-only-container { display: none; }
            @media print {
                body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; margin: 0; padding: 0; }
                .dashboard-container, .topbar, .sidebar { display: none !important; }
                #print-only-container { display: block !important; position: absolute; left: 0; top: 0; width: 100%; background: white; z-index: 9999; padding: 10mm; box-sizing: border-box; }
                #print-only-container table, #print-only-container th, #print-only-container td { 
                    border: 1px solid black !important; 
                    border-collapse: collapse !important;
                }
                #print-only-container table { width: 100% !important; max-width: 100% !important; }
                @page { size: landscape; margin: 0; }
            }
        `;
        document.head.appendChild(style);
    } else {
        style.textContent = `
            #print-only-container { display: none; }
            @media print {
                body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; margin: 0; padding: 0; }
                .dashboard-container, .topbar, .sidebar { display: none !important; }
                #print-only-container { display: block !important; position: absolute; left: 0; top: 0; width: 100%; background: white; z-index: 9999; padding: 10mm; box-sizing: border-box; }
                #print-only-container table, #print-only-container th, #print-only-container td { 
                    border: 1px solid black !important; 
                    border-collapse: collapse !important;
                }
                #print-only-container table { width: 100% !important; max-width: 100% !important; }
                @page { size: landscape; margin: 0; }
            }
        `;
    }
    
    setTimeout(() => {
        window.print();
    }, 200);
}

function exportSummaryToExcel() {
    if (!globalSummaryData || globalSummaryData.length === 0) {
        alert("Tidak ada data untuk diexport!");
        return;
    }

    try {
        const columnsToExclude = ["No. Batch", "Bin", "Department", "Value Unrestricted", "Line", "Plan"];
        const exportData = globalSummaryData.map(row => {
            const cleanRow = {};
            for (const [key, value] of Object.entries(row)) {
                if (!columnsToExclude.includes(key)) {
                    cleanRow[key] = value;
                }
            }
            return cleanRow;
        });

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Summary_Data");
        
        const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Data_Summary.xlsx';
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
        
    } catch (error) {
        console.error("Export error:", error);
        alert("Terjadi kesalahan saat mengekspor ke Excel: " + error.message);
    }
}

// Export Print 1 to Excel
function exportPrint1ToExcel() {
    if (!globalPrint1Data || globalPrint1Data.length === 0) {
        alert("Tidak ada data untuk diexport!");
        return;
    }

    try {
        const exportData = globalPrint1Data.map(row => {
            const cleanRow = {};
            for (const [key, value] of Object.entries(row)) {
                if (key.trim() !== '') {
                    cleanRow[key] = value;
                }
            }
            return cleanRow;
        });

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Print_Data");
        
        // Use Blob method to prevent UI blocking/hanging on some Windows browsers
        const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Data_Print.xlsx';
        document.body.appendChild(a);
        a.click();
        
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
        
    } catch (error) {
        console.error("Export error:", error);
        alert("Terjadi kesalahan saat mengekspor ke Excel: " + error.message);
    }
}

// Crosshair highlight logic untuk kolom dan baris
const crosshairStyle = document.createElement('style');
crosshairStyle.id = 'crosshair-style';
document.head.appendChild(crosshairStyle);

document.addEventListener('mouseover', (e) => {
    const td = e.target.closest('td');
    if (td) {
        const table = td.closest('table');
        if (table) {
            const tableSelector = table.id ? `#${table.id}` : 'table';
            const index = td.cellIndex + 1;
            
            crosshairStyle.textContent = `
                ${tableSelector} tbody td:nth-child(${index}) { 
                    background-color: rgba(253, 224, 71, 0.4) !important; /* Yellow vertical */
                }
                ${tableSelector} tbody tr:hover td:nth-child(${index}) {
                    background-color: rgba(253, 224, 71, 0.8) !important; /* Darker yellow intersection */
                }
            `;
        }
    } else if (!e.target.closest('table')) {
        // Clear if not in table
        crosshairStyle.textContent = '';
    }
});

// Drag and Drop Logic untuk File Upload
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", (e) => {
        // Mencegah double click event jika yang di-klik adalah inputnya sendiri
        if (e.target !== inputElement) {
            inputElement.click();
        }
    });

    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
    });
});

function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    // Sembunyikan prompt text jika ada
    let promptElement = dropZoneElement.querySelector(".drop-zone__prompt");
    if (promptElement) {
        promptElement.style.display = "none";
    }

    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;
    thumbnailElement.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
            <span style="font-size: 1.5rem; display: block; margin-bottom: 8px;">📄</span> 
            <span>File Terpilih: <br> <strong>${file.name}</strong></span>
            <button class="cancel-upload-btn" style="margin-top: 10px; background: #ef4444; color: white; border: none; padding: 6px 16px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; z-index: 10;">Batal</button>
        </div>
    `;

    const cancelBtn = thumbnailElement.querySelector('.cancel-upload-btn');
    cancelBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Mencegah memicu klik pada drop zone
        
        const inputElement = dropZoneElement.querySelector('.drop-zone__input');
        if (inputElement) {
            inputElement.value = ''; // Reset input file
        }
        
        thumbnailElement.remove(); // Hapus thumbnail
        
        if (promptElement) {
            promptElement.style.display = "block"; // Tampilkan prompt kembali
        }
    });
}
