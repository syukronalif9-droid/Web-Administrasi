$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

# Update Card Container Background to Sleek Black
$cardPattern = '(?s)<div class="card" style="order: 4; background-color: #f0f9ff; background-image: radial-gradient\(circle at 80% 20%, #bae6fd 0%, transparent 50%\), radial-gradient\(circle at 20% 80%, #7dd3fc 0%, transparent 60%\), radial-gradient\(circle at 50% 50%, rgba\(255,255,255,0\.8\) 0%, transparent 100%\); border-radius: 24px; box-shadow: 0 10px 30px rgba\(0,0,0,0\.05\); padding: 24px; flex: 1 1 300px; display: flex; flex-direction: column; border: none; font-family: ''Inter'', sans-serif; position: relative; overflow: hidden;">'
$cardReplacement = @"
<div class="card" style="order: 4; background-color: #121212; background-image: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 60%); border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); padding: 24px; flex: 1 1 300px; display: flex; flex-direction: column; border: 1px solid rgba(255,255,255,0.05); font-family: 'Inter', sans-serif; position: relative; overflow: hidden;">
"@
$content = [regex]::Replace($content, $cardPattern, $cardReplacement)

# Update Title Color to White
$titlePattern = '<h3 style="color: #18181b; font-size: 1\.1rem; margin: 0 0 20px 0; font-weight: 600;">Top 5 Highest Discipline</h3>'
$titleReplacement = '<h3 style="color: #ffffff; font-size: 1.1rem; margin: 0 0 20px 0; font-weight: 600;">Top 5 Highest Discipline</h3>'
$content = [regex]::Replace($content, $titlePattern, $titleReplacement)

# Update White Pill shadow (remove blue shadow, use black shadow)
$whitePillPattern = '(?s)0 8px 20px rgba\(14,165,233,0\.1\)'
$whitePillReplacement = '0 8px 20px rgba(0,0,0,0.3)'
$content = [regex]::Replace($content, $whitePillPattern, $whitePillReplacement)

# Adjust White Pill Opacity to be brighter
$pillGradientPattern = 'rgba\(255,255,255,0\.9\) 0%, rgba\(255,255,255,0\.4\) 100%'
$pillGradientReplacement = 'rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 100%'
$content = [regex]::Replace($content, $pillGradientPattern, $pillGradientReplacement)


[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done"
