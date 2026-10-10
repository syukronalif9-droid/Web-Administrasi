$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

$avatarPattern = '(?s)const avatarBg = ''#3b82f6'';.*?const avatarColor = ''#ffffff'';.*?<!-- Avatar Placeholder -->.*?<div style="width: 42px; height: 42px; border-radius: 50%; background: #1ea2db; padding: 2\.5px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; box-sizing: border-box;">.*?<div style="width: 100%; height: 100%; border-radius: 50%; background: #4a78c9; border: 2px solid #ffffff; display: flex; align-items: center; justify-content: center; color: #ffffff; box-sizing: border-box;">.*?<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">.*?<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>.*?</svg>.*?</div>.*?</div>'

$avatarReplacement = @"
const ringColor = isActive ? '#ffffff' : '#1ea2db';
                        const innerCircleBg = isActive ? '#ffffff' : '#4a78c9';
                        const iconFill = isActive ? '#3b82f6' : '#ffffff';
                        
                        const html = ``
                            <div style="background: `${bg}; border-radius: 99px; padding: 10px 20px; display: flex; align-items: center; justify-content: space-between; border: 1px solid `${strokeColor}; box-shadow: `${shadow}; transition: all 0.2s; cursor: default;">
                                
                                <div style="display: flex; align-items: center; gap: 16px; flex: 1;">
                                    <!-- Avatar Placeholder -->
                                    <div style="width: 42px; height: 42px; border-radius: 50%; border: 2.5px solid `${ringColor}; background: transparent; flex-shrink: 0; display: flex; align-items: center; justify-content: center; box-sizing: border-box;">
                                        <div style="width: 32px; height: 32px; border-radius: 50%; background: `${innerCircleBg}; display: flex; align-items: center; justify-content: center; color: `${iconFill}; box-sizing: border-box;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                            </svg>
                                        </div>
                                    </div>
"@

$content = [regex]::Replace($content, $avatarPattern, $avatarReplacement)

[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done"
