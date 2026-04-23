const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walk(dirPath, callback);
        } else if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css')) {
            callback(dirPath);
        }
    });
}

const map = {
    '0f172a': '1F3C64', // bg darker slate
    '1e293b': '1F3C64', // bg slate
    '111827': '1F3C64', // pure dark
    '000000': '1F3C64',
    'f8fafc': 'E7F7F8', // slate 50
    'ffffff': 'E7F7F8', // white
    'e2e8f0': 'E7F7F8', // slate 200
    '94a3b8': 'E7F7F8', // slate 400
    '38bdf8': '0BAFB4', // cyan brand
    '818cf8': '0BAFB4', // indigo
    'f472b6': '0BAFB4', // pink
    'fb923c': '0BAFB4', // orange
    'a78bfa': '0BAFB4', // purple
    'cbd5e1': 'E7F7F8',
    '64748b': 'E7F7F8', // slate 500
    'e0e0e0': 'E7F7F8',
    '2a4b7c': '1F3C64'
};

const allowed = ['1f3c64', 'e7f7f8', '0bafb4'];

['components', 'app', '.'].forEach(sub => {
    let dir = path.join(__dirname, sub);
    if (sub === '.') {
        // Just process specific files for root
        ['tailwind.config.ts'].forEach(f => {
            let p = path.join(dir, f);
            if (fs.existsSync(p)) processFile(p);
        })
    } else {
        walk(dir, processFile);
    }
});

function processFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content.replace(/#([0-9a-fA-F]{6})/g, (match, p1) => {
        let lower = p1.toLowerCase();
        if (allowed.includes(lower)) return match;
        if (map[lower]) return '#' + map[lower];
        // guess based on brightness for unmapped
        let r = parseInt(lower.substring(0, 2), 16);
        let g = parseInt(lower.substring(2, 4), 16);
        let b = parseInt(lower.substring(4, 6), 16);
        let brightness = (r * 299 + g * 587 + b * 114) / 1000;
        if (brightness < 120) return '#1F3C64'; // treat as bg
        return '#0BAFB4'; // treat as accent
    });
    // Also replace RGBA matching white or black to our transparent counterparts if needed...
    // Actually rgba(15, 23, 42 -> rgba(31, 60, 100)
    newContent = newContent.replace(/rgba\(15, 23, 42/g, 'rgba(31, 60, 100');
    newContent = newContent.replace(/rgba\(255, 255, 255/g, 'rgba(231, 247, 248');

    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        console.log('Fixed colors in: ' + file);
    }
}
