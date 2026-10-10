$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

# Update White Pill
$whitePillPattern = '(?s)<!-- Left Pill \(White\) -->\s*<div style="background: #ffffff; border-radius: 99px; padding: 10px 40px 10px 12px; display: flex; align-items: center; gap: 16px; flex: 1; box-shadow: 0 4px 15px rgba\(0,0,0,0\.03\); position: relative; z-index: 1; border: 1px solid rgba\(0,0,0,0\.02\);">'
$whitePillReplacement = @"
<!-- Left Pill (White) -->
                                <div style="background: linear-gradient(to bottom, #ffffff 0%, #f1f5f9 100%); border-radius: 99px; padding: 10px 40px 10px 12px; display: flex; align-items: center; gap: 16px; flex: 1; box-shadow: inset 0 -4px 6px rgba(0,0,0,0.05), inset 0 4px 6px rgba(255,255,255,1), 0 5px 15px rgba(0,0,0,0.05); position: relative; z-index: 1; border: 1px solid rgba(0,0,0,0.02);">
"@
$content = [regex]::Replace($content, $whitePillPattern, $whitePillReplacement)


# Update Blue Pill
$bluePillPattern = '(?s)<!-- Right Pill \(Blue\) -->\s*<div style="background: linear-gradient\(135deg, #1ea2db, #0974b9\); border-radius: 99px; padding: 8px 24px 8px 8px; display: flex; align-items: center; gap: 12px; color: white; position: relative; z-index: 2; margin-left: -40px; box-shadow: -4px 0 15px rgba\(0,0,0,0\.1\);">'
$bluePillReplacement = @"
<!-- Right Pill (Blue) -->
                                <div style="background: linear-gradient(to bottom, #38bdf8 0%, #0284c7 100%); border-radius: 99px; padding: 8px 24px 8px 8px; display: flex; align-items: center; gap: 12px; color: white; position: relative; z-index: 2; margin-left: -40px; box-shadow: inset 0 -4px 6px rgba(0,0,0,0.15), inset 0 4px 6px rgba(255,255,255,0.25), -5px 5px 15px rgba(0,0,0,0.1);">
"@
$content = [regex]::Replace($content, $bluePillPattern, $bluePillReplacement)

[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done"
