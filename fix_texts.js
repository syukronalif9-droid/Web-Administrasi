const fs = require('fs');
const content = fs.readFileSync('dashboard.html', 'utf8');

const lines = content.split('\n');
const pattern = /<text x="(\d+)" y="(\d+)" fill="([^"]+)" font-size="8" font-weight="bold" text-anchor="middle">([\d\.]+)<\/text>/;

for (let i = 360; i < Math.min(426, lines.length); i++) {
    lines[i] = lines[i].replace(pattern, (match, x, y, fill, val) => {
        const newY = parseInt(y) + 4;
        return `<text x="${x}" y="${newY}" fill="${fill}" font-size="8" font-weight="bold" text-anchor="start" transform="rotate(-90 ${x} ${newY})">${val}</text>`;
    });
}

fs.writeFileSync('dashboard.html', lines.join('\n'), 'utf8');
console.log("Done");
