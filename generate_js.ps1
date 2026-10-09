$csv = Get-Content -Path "worksheet .csv" -Raw
$encoded = ConvertTo-Json $csv
Set-Content -Path "worksheetData.js" -Value ("const worksheetCsvData = " + $encoded + ";")
