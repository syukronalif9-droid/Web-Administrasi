$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

$overviewPattern = '(?s)<!-- Legend -->\s*<div style="display: flex; justify-content: center;.*?<!-- SVG Chart -->\s*<div style="flex-grow: 1; position: relative; width: 100%; min-height: 220px;">\s*<svg viewBox="-60 0 620 260".*?</svg>\s*</div>'
$overviewReplacement = '<div id="attendance-overview-chart" style="width: 100%; height: 320px;"></div>'
$content = [regex]::Replace($content, $overviewPattern, $overviewReplacement)

$bagianPattern = '(?s)<!-- Legend -->\s*<div style="display: flex; justify-content: center;.*?<!-- SVG Chart -->\s*<div style="flex-grow: 1; position: relative; width: 100%; min-height: 220px;">\s*<svg viewBox="-40 0 660 260".*?</svg>\s*</div>'
$bagianReplacement = '<div id="attendance-bagian-chart" style="width: 100%; height: 320px;"></div>'
$content = [regex]::Replace($content, $bagianPattern, $bagianReplacement)

$scriptStr = @"
<script>
document.addEventListener("DOMContentLoaded", function() {
    // 1. Chart Overview
    var domOverview = document.getElementById("attendance-overview-chart");
    if(domOverview) {
        var chartOverview = echarts.init(domOverview);
        
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
        var workingOverview = [6418, 6013, 5042, 6654, 6478, 6397, 6935, 6535, null, null, null, null];
        var attendanceOverview = [5478, 5146, 4298, 5788, 6038, 6142, 6791, 6419, null, null, null, null];
        
        var optionOverview = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' },
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                borderColor: 'rgba(255,255,255,0.1)',
                textStyle: { color: '#f1f5f9', fontFamily: 'Inter, sans-serif' }
            },
            legend: {
                data: ['Working Days', 'Attendance'],
                bottom: 0,
                textStyle: { color: '#52525b', fontWeight: '600', fontFamily: 'Inter, sans-serif' },
                icon: 'circle'
            },
            grid: { left: '3%', right: '4%', bottom: '15%', top: '10%', containLabel: true },
            xAxis: {
                type: 'category',
                data: months,
                axisLine: { lineStyle: { color: '#e2e8f0' } },
                axisTick: { show: false },
                axisLabel: { color: '#94a3b8', fontWeight: '600', fontFamily: 'Inter, sans-serif' }
            },
            yAxis: {
                type: 'value',
                axisLine: { show: false },
                axisTick: { show: false },
                splitLine: { lineStyle: { color: '#f1f5f9', type: 'dashed' } },
                axisLabel: { color: '#94a3b8', fontWeight: '600', fontFamily: 'Inter, sans-serif' }
            },
            series: [
                {
                    name: 'Working Days',
                    type: 'bar',
                    barGap: '10%',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#94a3b8' },
                            { offset: 1, color: '#cbd5e1' }
                        ]),
                        borderRadius: [4, 4, 0, 0]
                    },
                    data: workingOverview
                },
                {
                    name: 'Attendance',
                    type: 'bar',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#f97316' },
                            { offset: 1, color: '#fdba74' }
                        ]),
                        borderRadius: [4, 4, 0, 0]
                    },
                    data: attendanceOverview
                }
            ]
        };
        chartOverview.setOption(optionOverview);
    }
    
    // 2. Chart Bagian
    var domBagian = document.getElementById("attendance-bagian-chart");
    if(domBagian) {
        var chartBagian = echarts.init(domBagian);
        
        var labelsBagian = ['Gen. Adm', 'Inv. Control', 'Sppt, Lubr', 'Traffic', 'PG1', 'PG2', 'PG3', 'PG4'];
        var workingBagian = [1632, 2297, 2995, 7432, 9802, 7344, 10342, 8450];
        var attendanceBagian = [1608, 1713, 2754, 7379, 9291, 5827, 9094, 8269];
        
        var optionBagian = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' },
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                borderColor: 'rgba(255,255,255,0.1)',
                textStyle: { color: '#f1f5f9', fontFamily: 'Inter, sans-serif' }
            },
            legend: {
                data: ['Working Days', 'Attendance'],
                bottom: 0,
                textStyle: { color: '#52525b', fontWeight: '600', fontFamily: 'Inter, sans-serif' },
                icon: 'circle'
            },
            grid: { left: '3%', right: '4%', bottom: '15%', top: '10%', containLabel: true },
            xAxis: {
                type: 'category',
                data: labelsBagian,
                axisLine: { lineStyle: { color: '#e2e8f0' } },
                axisTick: { show: false },
                axisLabel: { color: '#94a3b8', fontWeight: '600', fontFamily: 'Inter, sans-serif', interval: 0, fontSize: 10 }
            },
            yAxis: {
                type: 'value',
                axisLine: { show: false },
                axisTick: { show: false },
                splitLine: { lineStyle: { color: '#f1f5f9', type: 'dashed' } },
                axisLabel: { color: '#94a3b8', fontWeight: '600', fontFamily: 'Inter, sans-serif' }
            },
            series: [
                {
                    name: 'Working Days',
                    type: 'bar',
                    barGap: '10%',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#eab308' },
                            { offset: 1, color: '#fde047' }
                        ]),
                        borderRadius: [4, 4, 0, 0]
                    },
                    data: workingBagian
                },
                {
                    name: 'Attendance',
                    type: 'bar',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#0ea5e9' },
                            { offset: 1, color: '#7dd3fc' }
                        ]),
                        borderRadius: [4, 4, 0, 0]
                    },
                    data: attendanceBagian
                }
            ]
        };
        chartBagian.setOption(optionBagian);
    }
    
    // Auto-resize
    window.addEventListener("resize", function() {
        if(typeof chartOverview !== "undefined") chartOverview.resize();
        if(typeof chartBagian !== "undefined") chartBagian.resize();
    });
    
    // Observer for tabs (display: none -> block)
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(m) {
            if (m.target.style && m.target.style.display !== 'none') {
                setTimeout(function() { 
                    if(typeof chartOverview !== "undefined") chartOverview.resize();
                    if(typeof chartBagian !== "undefined") chartBagian.resize();
                }, 100);
            }
        });
    });
    
    var divOverview = document.getElementById("chart-content-overview");
    var divBagian = document.getElementById("chart-content-bagian");
    if (divOverview) observer.observe(divOverview, { attributes: true, attributeFilter: ['style'] });
    if (divBagian) observer.observe(divBagian, { attributes: true, attributeFilter: ['style'] });
});
</script>
"@

$scriptPattern = '(?s)</div>\s*</div>\s*<script>\s*function toggleAttendanceChart'
$scriptReplacement = $scriptStr + "`n" + '<script>' + "`n                            function toggleAttendanceChart"
$content = [regex]::Replace($content, $scriptPattern, $scriptReplacement)

[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Replaced successfully using PowerShell."
