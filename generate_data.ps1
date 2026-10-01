function Parse-CustomCSV {
    param(
        [string]$FilePath,
        [int]$HeaderLineIndex # 0-indexed
    )

    if (-not (Test-Path $FilePath)) {
        return "[]"
    }

    $lines = Get-Content $FilePath
    if ($lines.Length -le $HeaderLineIndex) {
        return "[]"
    }

    $headerLine = $lines[$HeaderLineIndex]
    # Remove quotes from header line and split by semicolon
    $headers = $headerLine -replace '"','' -split ';' | ForEach-Object { $_.Trim() }

    $data = @()
    # Process from line after header to end
    for ($i = $HeaderLineIndex + 1; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        
        # Skip empty lines (lines containing only semicolons or whitespace)
        if ([string]::IsNullOrWhiteSpace($line) -or ($line -match '^;*$')) {
            continue
        }

        # Split by semicolon (assumes no semicolon inside fields)
        $fields = $line -split ';'
        $obj = [ordered]@{}
        
        for ($j = 0; $j -lt $headers.Length; $j++) {
            $headerName = $headers[$j]
            if ([string]::IsNullOrWhiteSpace($headerName)) {
                # Skip columns that don't have a valid header name
                continue
            }
            
            $val = ""
            if ($j -lt $fields.Length) {
                $val = $fields[$j].Trim() -replace '^"|"$',''
            }
            $obj[$headerName] = $val
        }
        $data += $obj
    }

    $json = $data | ConvertTo-Json -Depth 10 -Compress
    if ($json -eq $null -or $json -eq "") {
        $json = "[]"
    }
    return $json
}

Write-Host "Parsing framsys..."
$jsonFramsys = Parse-CustomCSV "framsys.csv" 1

Write-Host "Parsing work days..."
$jsonWorkdays = Parse-CustomCSV "work days PKWTT-T.csv" 2

Write-Host "Parsing master..."
$jsonMaster = Parse-CustomCSV "master emplye.csv" 0

Write-Host "Writing data.js..."
$jsContent = "window.offlineData = {`n" +
             "    `"ZMM_LTO`": $jsonFramsys,`n" +
             "    `"mb51`": $jsonWorkdays,`n" +
             "    `"stock`": $jsonMaster`n" +
             "};"

Set-Content -Path "data.js" -Value $jsContent -Encoding UTF8
Write-Host "Done! data.js generated."
