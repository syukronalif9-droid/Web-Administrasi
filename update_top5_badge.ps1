$ErrorActionPreference = "Stop"

$filePath = "d:\Web Administrasi\dashboard.html"
$content = [System.IO.File]::ReadAllText($filePath)

# Update parsing logic to include bagian
$parsePattern = '(?s)const name = cols\[4\] \? cols\[4\]\.trim\(\) : '''';.*?let discStr = cols\[43\] \? cols\[43\]\.trim\(\) : '''';.*?if \(name && discStr && discStr !== ''-''\) \{.*?let discVal = parseFloat\(discStr\.replace\('','', ''\.''\)\);.*?if \(!isNaN\(discVal\)\) \{.*?users\.push\(\{ name: name, disc: discVal \}\);.*?\}'
$parseReplacement = @"
const name = cols[4] ? cols[4].trim() : '';
                        const bagian = cols[2] ? cols[2].trim() : '';
                        let discStr = cols[43] ? cols[43].trim() : '';
                        if (name && discStr && discStr !== '-') {
                            // Convert discStr to number, e.g. "92,4" -> 92.4
                            let discVal = parseFloat(discStr.replace(',', '.'));
                            if (!isNaN(discVal)) {
                                users.push({ name: name, bagian: bagian, disc: discVal });
                            }
"@
$content = [regex]::Replace($content, $parsePattern, $parseReplacement)


# Update HTML rendering to use bagian
$renderPattern = '(?s)<div style="background: \$\{badgeBg\}; color: \$\{badgeText\}; padding: 6px 16px; border-radius: 99px; font-size: 0\.75rem; font-weight: 600; min-width: 80px; text-align: center;">.*?\$\{u\.disc === 100 \? ''Perfect'' : ''Good''\}.*?</div>'
$renderReplacement = @"
<div style="background: `${badgeBg}; color: `${badgeText}; padding: 6px 16px; border-radius: 99px; font-size: 0.75rem; font-weight: 600; min-width: 80px; text-align: center;">
                                        `${u.bagian || (u.disc === 100 ? 'Perfect' : 'Good')}
                                    </div>
"@
$content = [regex]::Replace($content, $renderPattern, $renderReplacement)


[System.IO.File]::WriteAllText($filePath, $content)
Write-Host "Done"
