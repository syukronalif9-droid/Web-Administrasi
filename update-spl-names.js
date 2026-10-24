const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'spl-module.js');
let content = fs.readFileSync(targetFile, 'utf8');

content = content
  .replace(/area:\s*"Traffic"/g, 'area: "WH Traffic"')
  .replace(/area:\s*"Gen\. Adm"/g, 'area: "General Administration"')
  .replace(/area:\s*"Inv\. Control"/g, 'area: "Inventory Control"')
  .replace(/area:\s*"Sppt, Lubr & Other M"/g, 'area: "WH Sparepart Central"')
  .replace(/area:\s*"PG1"/g, 'area: "WH Major & PG1"')
  .replace(/area:\s*"PG2"/g, 'area: "WH PG2"')
  .replace(/area:\s*"PG3"/g, 'area: "WH PG3"')
  .replace(/area:\s*"PG4"/g, 'area: "WH PG4"')
  .replace(/area:\s*'Traffic'/g, "area: 'WH Traffic'")
  .replace(/area:\s*'Gen\. Adm'/g, "area: 'General Administration'")
  .replace(/area:\s*'Inv\. Control'/g, "area: 'Inventory Control'")
  .replace(/area:\s*'Sppt, Lubr & Other M'/g, "area: 'WH Sparepart Central'")
  .replace(/area:\s*'PG1'/g, "area: 'WH Major & PG1'")
  .replace(/area:\s*'PG2'/g, "area: 'WH PG2'")
  .replace(/area:\s*'PG3'/g, "area: 'WH PG3'")
  .replace(/area:\s*'PG4'/g, "area: 'WH PG4'")
  .replace(/Kabag Traffic/g, 'Kabag WH Traffic')
  .replace(/Kabag Inv\. Control/g, 'Kabag Inventory Control');

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Update spl-module.js done');
