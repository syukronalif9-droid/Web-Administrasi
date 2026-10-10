$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

# Update JS Variables for a better Light Theme
$jsPattern = '(?s)const bg = isActive \? ''#739eb7'' : ''#ffffff'';.*?const strokeColor = isActive \? ''rgba\(255,255,255,0\.2\)'' : ''#e2e8f0'';'
$jsReplacement = @"
const bg = isActive ? 'linear-gradient(135deg, #3b82f6, #2563eb)' : '#f8fafc';
                        const textPrimary = isActive ? '#ffffff' : '#1e293b';
                        const textSecondary = isActive ? 'rgba(255,255,255,0.8)' : '#64748b';
                        const badgeBg = isActive ? 'rgba(255,255,255,0.2)' : '#e2e8f0';
                        const badgeText = isActive ? '#ffffff' : '#475569';
                        const strokeColor = isActive ? 'transparent' : '#e2e8f0';
                        const shadow = isActive ? '0 10px 15px -3px rgba(59, 130, 246, 0.3)' : 'none';
                        const avatarBg = isActive ? 'rgba(255,255,255,0.2)' : '#e2e8f0';
                        const avatarColor = isActive ? '#ffffff' : '#94a3b8';
"@
$content = [regex]::Replace($content, $jsPattern, $jsReplacement)

# Add shadow to the item container and update avatar background
$itemContainerPattern = '(?s)<div style="background: \$\{bg\}; border-radius: 99px; padding: 10px 20px; display: flex; align-items: center; justify-content: space-between; border: 1px solid \$\{strokeColor\}; transition: all 0\.2s; cursor: default;">'
$itemContainerReplacement = '<div style="background: ${bg}; border-radius: 99px; padding: 10px 20px; display: flex; align-items: center; justify-content: space-between; border: 1px solid ${strokeColor}; box-shadow: ${shadow}; transition: all 0.2s; cursor: default;">'
$content = [regex]::Replace($content, $itemContainerPattern, $itemContainerReplacement)

$avatarDivPattern = '(?s)<!-- Avatar Placeholder -->\s*<div style="width: 40px; height: 40px; border-radius: 50%; background: .*?; display: flex; align-items: center; justify-content: center; font-weight: 700; color: \$\{textPrimary\}; font-size: 1\.1rem; flex-shrink: 0;">\s*<svg'
$avatarDivReplacement = @"
<!-- Avatar Placeholder -->
                                    <div style="width: 40px; height: 40px; border-radius: 50%; background: `${avatarBg}; display: flex; align-items: center; justify-content: center; font-weight: 700; color: `${avatarColor}; font-size: 1.1rem; flex-shrink: 0;">
                                        <svg
"@
$content = [regex]::Replace($content, $avatarDivPattern, $avatarDivReplacement)


[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done"
