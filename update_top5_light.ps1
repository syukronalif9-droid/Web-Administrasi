$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

# 1. Update Card HTML
$cardPattern = '(?s)<div class="card" style="order: 4; background: #27272a; border-radius: 24px; box-shadow: 0 10px 30px rgba\(0,0,0,0\.2\);(.*?)"Top 5 Highest Discipline"</h3>'
$cardReplacement = @"
<div class="card" style="order: 4; background: #ffffff; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);$1"Top 5 Highest Discipline"</h3>
"@
$content = [regex]::Replace($content, $cardPattern, $cardReplacement)

# Also fix the inner title color
$titlePattern = '(?s)<h3 style="color: #e4e4e7; font-size: 1\.1rem; margin: 0 0 20px 0; font-weight: 500;">Top 5 Highest Discipline</h3>'
$titleReplacement = '<h3 style="color: #18181b; font-size: 1.1rem; margin: 0 0 20px 0; font-weight: 600;">Top 5 Highest Discipline</h3>'
$content = [regex]::Replace($content, $titlePattern, $titleReplacement)


# 2. Update JS Variables for Light Theme
$jsPattern = '(?s)const isActive = index === 0; // Highlight the top 1.*?const strokeColor = isActive \? ''rgba\(255,255,255,0\.2\)'' : ''rgba\(255,255,255,0\.05\)'';'
$jsReplacement = @"
const isActive = index === 0; // Highlight the top 1
                        const bg = isActive ? '#739eb7' : '#ffffff';
                        const textPrimary = isActive ? '#ffffff' : '#18181b';
                        const textSecondary = isActive ? 'rgba(255,255,255,0.8)' : '#71717a';
                        const badgeBg = isActive ? '#ffffff' : '#f1f5f9';
                        const badgeText = isActive ? '#18181b' : '#64748b';
                        const strokeColor = isActive ? 'rgba(255,255,255,0.2)' : '#e2e8f0';
"@
$content = [regex]::Replace($content, $jsPattern, $jsReplacement)

# 3. Update Avatar background in JS for non-active items
$avatarBgPattern = 'background: \$\{isActive \? ''rgba\(255,255,255,0\.2\)'' : ''rgba\(255,255,255,0\.1\)''\}'
$avatarBgReplacement = 'background: ${isActive ? ''rgba(255,255,255,0.2)'' : ''#f1f5f9''}'
$content = [regex]::Replace($content, $avatarBgPattern, $avatarBgReplacement)


[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done"
