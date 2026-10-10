$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

# Update HTML of Top 10 to Top 5
$htmlPattern = '(?s)<!-- Top 10 Users List Card -->.*?<div class="card" style="order: 5; background: #27272a; border-radius: 24px; box-shadow: 0 10px 30px rgba\(0,0,0,0.2\); padding: 24px; flex: 1 1 100%; display: flex; flex-direction: column; border: none; font-family: ''Inter'', sans-serif;">.*?<h3 style="color: #e4e4e7; font-size: 1.1rem; margin: 0 0 20px 0; font-weight: 500;">Top 10 Highest Discipline</h3>.*?<div id="top10-list-container" style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: repeat\(5, auto\); grid-auto-flow: column; gap: 12px; width: 100%;">.*?<div style="color: #a1a1aa; font-size: 0.9rem; padding: 12px; grid-column: span 2;">Loading data...</div>.*?</div>.*?</div>'

$htmlReplacement = @"
<!-- Top 5 Users List Card -->
                        <div class="card" style="order: 3; background: #27272a; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); padding: 24px; flex: 1 1 300px; display: flex; flex-direction: column; border: none; font-family: 'Inter', sans-serif;">
                            <h3 style="color: #e4e4e7; font-size: 1.1rem; margin: 0 0 20px 0; font-weight: 500;">Top 5 Highest Discipline</h3>
                            <div id="top5-list-container" style="display: grid; grid-template-columns: 1fr; grid-template-rows: repeat(5, auto); grid-auto-flow: row; gap: 12px; width: 100%;">
                                <div style="color: #a1a1aa; font-size: 0.9rem; padding: 12px;">Loading data...</div>
                            </div>
                        </div>
"@
$content = [regex]::Replace($content, $htmlPattern, $htmlReplacement)


# Update JS logic from 10 to 5
$jsPattern = '(?s)users\.sort\(\(a, b\) => b\.disc - a\.disc\);.*?const top10 = users\.slice\(0, 10\);.*?const container = document\.getElementById\(''top10-list-container''\);.*?if \(container && top10\.length > 0\) \{.*?container\.innerHTML = '''';.*?top10\.forEach\(\(u, index\) => \{'

$jsReplacement = @"
users.sort((a, b) => b.disc - a.disc);
                const top5 = users.slice(0, 5);
                
                const container = document.getElementById('top5-list-container');
                if (container && top5.length > 0) {
                    container.innerHTML = '';
                    top5.forEach((u, index) => {
"@
$content = [regex]::Replace($content, $jsPattern, $jsReplacement)


# Attendance card order from 4 to 5
$attendancePattern = '(?s)<!-- Bar Chart Card \(Attendance Overview\) -->.*?<div class="card" style="order: 4; background: #f8fafc; border-radius: 24px; box-shadow: 0 10px 30px rgba\(0,0,0,0\.1\); padding: 20px; flex: 1 1 100%; display: flex; flex-direction: column;">'

$attendanceReplacement = @"
<!-- Bar Chart Card (Attendance Overview) -->
                        <div class="card" style="order: 5; background: #f8fafc; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 20px; flex: 1 1 100%; display: flex; flex-direction: column;">
"@
$content = [regex]::Replace($content, $attendancePattern, $attendanceReplacement)


[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done Top 5"
