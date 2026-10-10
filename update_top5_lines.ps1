$lines = Get-Content "d:\Web Administrasi\dashboard.html"
$newLines = @()

for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($i -ge 1597 -and $i -le 1600) {
        if ($i -eq 1597) {
            $newLines += "                        container.insertAdjacentHTML('beforeend', html);"
            $newLines += "                    });"
            $newLines += "                }"
            $newLines += "                "
            $newLines += "                // Update UI Buttons"
            $newLines += "                const title = document.getElementById('top5-title');"
            $newLines += "                const btnHigh = document.getElementById('btn-top5-highest');"
            $newLines += "                const btnLow = document.getElementById('btn-top5-lowest');"
            $newLines += "                if (title) title.innerText = sortOrder === 'highest' ? 'Top 5 Highest Discipline' : 'Top 5 Lowest Discipline';"
            $newLines += "                "
            $newLines += "                if (btnHigh && btnLow) {"
            $newLines += "                    if (sortOrder === 'highest') {"
            $newLines += "                        btnHigh.style.background = '#3b82f6';"
            $newLines += "                        btnHigh.style.color = '#ffffff';"
            $newLines += "                        btnLow.style.background = 'transparent';"
            $newLines += "                        btnLow.style.color = '#a1a1aa';"
            $newLines += "                    } else {"
            $newLines += "                        btnLow.style.background = '#e11d48';"
            $newLines += "                        btnLow.style.color = '#ffffff';"
            $newLines += "                        btnHigh.style.background = 'transparent';"
            $newLines += "                        btnHigh.style.color = '#a1a1aa';"
            $newLines += "                    }"
            $newLines += "                }"
            $newLines += "            };"
            $newLines += "            "
            $newLines += "            // Initial render"
            $newLines += "            window.renderTop5List('highest');"
            $newLines += "        }"
        }
        continue
    }
    $newLines += $lines[$i]
}

[System.IO.File]::WriteAllLines("d:\Web Administrasi\dashboard.html", $newLines)
Write-Host "Done"
