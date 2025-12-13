
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const searchDir = path.join(__dirname, 'src');

function resolveConflicts(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    const newLines = [];
    let keeping = true;
    let modified = false;

    for (const line of lines) {
        if (line.trim().startsWith('<<<<<<< HEAD')) {
            // Start of HEAD block. We keep HEAD content, so just remove the marker.
            // keeping should already be true, but let's ensure it.
            keeping = true;
            modified = true;
        } else if (line.trim().startsWith('=======')) {
            // Start of incoming block (to discard).
            keeping = false;
            modified = true;
        } else if (line.trim().startsWith('>>>>>>>')) {
            // End of incoming block. Resume keeping.
            keeping = true;
            modified = true;
        } else {
            if (keeping) {
                newLines.push(line);
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
        console.log(`Resolved conflicts in: ${filePath}`);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            traverseDir(fullPath);
        } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css'))) {
            resolveConflicts(fullPath);
        }
    }
}

console.log('Starting stream-based conflict resolution...');
traverseDir(searchDir);
console.log('Conflict resolution complete.');
