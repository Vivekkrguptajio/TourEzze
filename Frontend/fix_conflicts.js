
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const searchDir = path.join(__dirname, 'src');

function resolveConflicts(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Relaxed regex to match conflict blocks more reliably
    // Matches <<<<<<< HEAD ... ======= ... >>>>>>> [anything until end of line]
    const conflictRegex = /<<<<<<< HEAD\s*[\r\n]+([\s\S]*?)=======\s*[\r\n]+[\s\S]*?>>>>>>>.*$/gm;

    let matchFound = false;
    content = content.replace(conflictRegex, (match, headContent) => {
        matchFound = true;
        return headContent;
    });

    if (matchFound) {
        fs.writeFileSync(filePath, content, 'utf8');
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

console.log('Starting conflict resolution...');
traverseDir(searchDir);
console.log('Conflict resolution complete.');
