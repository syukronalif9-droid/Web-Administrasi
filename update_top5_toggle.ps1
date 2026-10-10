$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

# Update HTML Header of the Top 5 card
$headerPattern = '<h3 style="color: #ffffff; font-size: 1\.1rem; margin: 0 0 20px 0; font-weight: 600;">Top 5 Highest Discipline</h3>'
$headerReplacement = @"
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                                <h3 id="top5-title" style="color: #ffffff; font-size: 1.1rem; margin: 0; font-weight: 600;">Top 5 Highest Discipline</h3>
                                <div style="display: flex; gap: 8px; background: rgba(255,255,255,0.1); padding: 4px; border-radius: 8px;">
                                    <button id="btn-top5-highest" onclick="window.renderTop5List('highest')" style="padding: 6px 12px; border: none; background: #3b82f6; border-radius: 6px; font-weight: 600; color: #ffffff; cursor: pointer; transition: all 0.2s; font-size: 0.8rem;">Terbaik</button>
                                    <button id="btn-top5-lowest" onclick="window.renderTop5List('lowest')" style="padding: 6px 12px; border: none; background: transparent; border-radius: 6px; font-weight: 600; color: #a1a1aa; cursor: pointer; transition: all 0.2s; font-size: 0.8rem;">Terendah</button>
                                </div>
                            </div>
"@
$content = [regex]::Replace($content, $headerPattern, $headerReplacement)

# Update JavaScript to support toggle
$jsPattern = '(?s)// Sort by discipline descending.*?users\.sort\(\(a, b\) => b\.disc - a\.disc\);.*?const top5 = users\.slice\(0, 5\);.*?const container = document\.getElementById\(''top5-list-container''\);.*?if \(container && top5\.length > 0\) \{.*?container\.innerHTML = '''';.*?top5\.forEach\(\(u, index\) => \{.*?const html = ``(.*?)``;.*?container\.innerHTML \+= html;.*?\}\);.*?\}'

$jsReplacement = @"
                window.parsedUsersData = users;
                
                window.renderTop5List = function(sortOrder = 'highest') {
                    const sortedUsers = [...window.parsedUsersData].sort((a, b) => sortOrder === 'highest' ? b.disc - a.disc : a.disc - b.disc);
                    const top5 = sortedUsers.slice(0, 5);
                    
                    const container = document.getElementById('top5-list-container');
                    if (container && top5.length > 0) {
                        container.innerHTML = '';
                        top5.forEach((u, index) => {
                            const isActive = index === 0;
                            const html = ``$1``;
                            container.innerHTML += html;
                        });
                    }
                    
                    // Update UI
                    const title = document.getElementById('top5-title');
                    const btnHigh = document.getElementById('btn-top5-highest');
                    const btnLow = document.getElementById('btn-top5-lowest');
                    if (title) title.innerText = sortOrder === 'highest' ? 'Top 5 Highest Discipline' : 'Top 5 Lowest Discipline';
                    
                    if (btnHigh && btnLow) {
                        if (sortOrder === 'highest') {
                            btnHigh.style.background = '#3b82f6';
                            btnHigh.style.color = '#ffffff';
                            btnLow.style.background = 'transparent';
                            btnLow.style.color = '#a1a1aa';
                        } else {
                            btnLow.style.background = '#f43f5e';
                            btnLow.style.color = '#ffffff';
                            btnHigh.style.background = 'transparent';
                            btnHigh.style.color = '#a1a1aa';
                        }
                    }
                };
                
                // Initial render
                window.renderTop5List('highest');
"@
$content = [regex]::Replace($content, $jsPattern, $jsReplacement)


[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done"
