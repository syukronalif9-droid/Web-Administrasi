$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

# Update Card Container Background
$cardPattern = '(?s)<div class="card" style="order: 4; background: #ffffff; border-radius: 24px; box-shadow: 0 10px 30px rgba\(0,0,0,0\.05\); padding: 24px; flex: 1 1 300px; display: flex; flex-direction: column; border: none; font-family: ''Inter'', sans-serif;">'
$cardReplacement = @"
<div class="card" style="order: 4; background-color: #f0f9ff; background-image: radial-gradient(circle at 80% 20%, #bae6fd 0%, transparent 50%), radial-gradient(circle at 20% 80%, #7dd3fc 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 100%); border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); padding: 24px; flex: 1 1 300px; display: flex; flex-direction: column; border: none; font-family: 'Inter', sans-serif; position: relative; overflow: hidden;">
"@
$content = [regex]::Replace($content, $cardPattern, $cardReplacement)

# Update White Pill Background to Glassmorphism
$whitePillPattern = '(?s)<!-- Left Pill \(White\) -->\s*<div style="background: linear-gradient\(to bottom, #ffffff 0%, #f1f5f9 100%\); border-radius: 99px; padding: 10px 40px 10px 12px; display: flex; align-items: center; gap: 16px; flex: 1; box-shadow: inset 0 -4px 6px rgba\(0,0,0,0\.05\), inset 0 4px 6px rgba\(255,255,255,1\), 0 5px 15px rgba\(0,0,0,0\.05\); position: relative; z-index: 1; border: 1px solid rgba\(0,0,0,0\.02\);">'
$whitePillReplacement = @"
<!-- Left Pill (White) -->
                                <div style="background: linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-radius: 99px; padding: 10px 40px 10px 12px; display: flex; align-items: center; gap: 16px; flex: 1; box-shadow: inset 0 -4px 6px rgba(0,0,0,0.05), inset 0 4px 6px rgba(255,255,255,0.8), 0 8px 20px rgba(14,165,233,0.1); position: relative; z-index: 1; border: 1px solid rgba(255,255,255,0.5);">
"@
$content = [regex]::Replace($content, $whitePillPattern, $whitePillReplacement)


[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done"
