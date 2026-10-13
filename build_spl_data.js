const fs = require('fs');
const path = require('path');

const csvContent = fs.readFileSync(path.join(__dirname, 'Master Employee1.csv'), 'utf8');
const lines = csvContent.split(/\r?\n/);

let currentArea = '';
let currentLoc = '';
let currentKasieNo = '';
let currentKasieName = '';
let currentKabagNo = '';
let currentKabagName = '';
let currentMgrNo = '';
let currentMgrName = '';

const employees = [];

// Skip first 4 header rows
for (let i = 4; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const parts = line.split(';').map(p => p.trim());
    
    // r[0]: Area, r[1]: Lokasi, r[2]: PersNo, r[3]: FullName, r[4]: KasieNo, r[5]: KasieName, r[6]: KabagNo, r[7]: KabagName, r[8]: MgrNo, r[9]: MgrName
    if (parts[0]) currentArea = parts[0];
    if (parts[1]) currentLoc = parts[1];
    if (parts[4]) currentKasieNo = parts[4];
    if (parts[5]) currentKasieName = parts[5];
    if (parts[6]) currentKabagNo = parts[6];
    if (parts[7]) currentKabagName = parts[7];
    if (parts[8]) currentMgrNo = parts[8];
    if (parts[9]) currentMgrName = parts[9];

    const empNo = parts[2] || '';
    const empName = parts[3] || '';

    if (empNo || empName) {
        employees.push({
            area: currentArea,
            location: currentLoc,
            persNo: empNo,
            name: empName,
            kasieNo: currentKasieNo,
            kasieName: currentKasieName,
            kabagNo: currentKabagNo,
            kabagName: currentKabagName,
            mgrNo: currentMgrNo,
            mgrName: currentMgrName
        });
    }
}

console.log(`Parsed ${employees.length} employees`);
fs.writeFileSync(path.join(__dirname, 'spl_employees.json'), JSON.stringify(employees, null, 2));
