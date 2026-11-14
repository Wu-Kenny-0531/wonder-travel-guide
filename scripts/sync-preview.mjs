import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import destinations from '../src/data/destinations.js';
import attractions from '../src/data/attractions.js';
import food from '../src/data/food.js';
import sources from '../src/data/sources.js';
import imageCredits from '../src/data/imageCredits.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const previewPath = path.resolve(__dirname, '../preview.html');

let html = fs.readFileSync(previewPath, 'utf8');

// Replace destinations
const destJson = JSON.stringify(destinations, null, 2);
html = html.replace(/const destinations = \[[\s\S]*?\];\s*const attractions =/, `const destinations = ${destJson};\n    const attractions =`);

// Replace attractions
const attrJson = JSON.stringify(attractions, null, 2);
html = html.replace(/const attractions = \[[\s\S]*?\];\s*const food =/, `const attractions = ${attrJson};\n    const food =`);

// Replace food
const foodJson = JSON.stringify(food, null, 2);
html = html.replace(/const food = \[[\s\S]*?\];\s*const sources =/, `const food = ${foodJson};\n    const sources =`);

// Replace sources
const sourcesJson = JSON.stringify(sources, null, 2);
html = html.replace(/const sources = \[[\s\S]*?\];\s*const imageCredits =/, `const sources = ${sourcesJson};\n    const imageCredits =`);

// Replace imageCredits
const creditsJson = JSON.stringify(imageCredits, null, 2);
html = html.replace(/const imageCredits = \[[\s\S]*?\];\s*\/\/ ================= LocalStorage/, `const imageCredits = ${creditsJson};\n\n    // ================= LocalStorage`);

// Update hero stats in preview.html if needed
html = html.replace(/<span className="stat-number">4\+<\/span><span className="stat-label">精選熱門城市<\/span>/, '<span className="stat-number">5+</span><span className="stat-label">精選熱門城市</span>');
html = html.replace(/<span className="stat-number">16\+<\/span><span className="stat-label">必訪指標景點<\/span>/, '<span className="stat-number">20+</span><span className="stat-label">必訪指標景點</span>');

fs.writeFileSync(previewPath, html, 'utf8');
console.log('Successfully synced data to preview.html!');
console.log(`- Destinations: ${destinations.length}`);
console.log(`- Attractions: ${attractions.length}`);
console.log(`- Food: ${food.length}`);
console.log(`- Sources: ${sources.length}`);
console.log(`- Image Credits: ${imageCredits.length}`);
