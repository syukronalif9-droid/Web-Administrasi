const fs = require('fs');
const Papa = require('papaparse');

function parseCSV(filePath) {
    if (!fs.existsSync(filePath)) {
        console.warn('File not found:', filePath);
        return [];
    }
    const content = fs.readFileSync(filePath, 'utf8');
    const result = Papa.parse(content, { header: true, skipEmptyLines: true });
    return result.data;
}

console.log("Membaca file CSV...");
const dataZmmlto = parseCSV('framsys.csv');
const dataMb51 = parseCSV('work days PKWTT-T.csv');
const dataStock = parseCSV('master emplye.csv');

console.log("Menulis ke data.js...");
const output = `window.offlineData = {
    "ZMM_LTO": ${JSON.stringify(dataZmmlto)},
    "mb51": ${JSON.stringify(dataMb51)},
    "stock": ${JSON.stringify(dataStock)}
};`;

fs.writeFileSync('data.js', output, 'utf8');
console.log('Berhasil! data.js telah dibuat dengan data dari CSV Anda.');
