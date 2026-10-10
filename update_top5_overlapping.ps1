$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

$pattern = '(?s)const isActive = index === 0;.*?const html = `.*?</div>\s*</div>\s*`;'

$replacement = @"
const html = ``
                            <div style="display: flex; align-items: center; width: 100%; position: relative;">
                                
                                <!-- Left Pill (White) -->
                                <div style="background: #ffffff; border-radius: 99px; padding: 10px 40px 10px 12px; display: flex; align-items: center; gap: 16px; flex: 1; box-shadow: 0 4px 15px rgba(0,0,0,0.03); position: relative; z-index: 1; border: 1px solid rgba(0,0,0,0.02);">
                                    
                                    <!-- Avatar -->
                                    <div style="width: 42px; height: 42px; border-radius: 50%; border: 2.5px solid #1ea2db; background: transparent; flex-shrink: 0; display: flex; align-items: center; justify-content: center; box-sizing: border-box;">
                                        <div style="width: 32px; height: 32px; border-radius: 50%; background: #4a78c9; display: flex; align-items: center; justify-content: center; color: #ffffff; box-sizing: border-box;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <!-- Info -->
                                    <div style="display: flex; flex-direction: column;">
                                        <span style="color: #1e293b; font-weight: 700; font-size: 0.95rem; line-height: 1.2;">`${u.name}</span>
                                        <span style="color: #64748b; font-size: 0.8rem; margin-top: 2px;">Rank #`${index + 1}</span>
                                    </div>
                                </div>
                                
                                <!-- Right Pill (Blue) -->
                                <div style="background: linear-gradient(135deg, #1ea2db, #0974b9); border-radius: 99px; padding: 8px 24px 8px 8px; display: flex; align-items: center; gap: 12px; color: white; position: relative; z-index: 2; margin-left: -40px; box-shadow: -4px 0 15px rgba(0,0,0,0.1);">
                                    
                                    <!-- Map Pin Icon in White Circle -->
                                    <div style="width: 32px; height: 32px; border-radius: 50%; background: #ffffff; color: #1ea2db; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                        </svg>
                                    </div>
                                    
                                    <!-- Badge & Score -->
                                    <div style="display: flex; align-items: center; gap: 12px; font-weight: 600; font-size: 0.9rem;">
                                        <span>`${u.bagian || 'Good'}</span>
                                        <span style="color: rgba(255,255,255,0.4);">|</span>
                                        <span style="font-size: 0.95rem;">`${(u.disc).toLocaleString('id-ID', {minimumFractionDigits: 1, maximumFractionDigits: 1})}%</span>
                                    </div>
                                </div>
                            </div>
                        ``;
"@

$content = [regex]::Replace($content, $pattern, $replacement)

[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done"
