import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const creditsPath = path.resolve(__dirname, '../src/data/imageCredits.js');

import(pathToFileURL(creditsPath).href).then(mod => {
  const credits = mod.imageCredits;
  let fixedCount = 0;

  const updatedCredits = credits.map(c => {
    let sourceUrl = c.sourceUrl;
    // If sourceUrl is broken unsplash.com/photos/ with pure digits or invalid path
    if (sourceUrl.includes('unsplash.com/photos/')) {
      sourceUrl = c.imageUrl || c.file;
      fixedCount++;
    }
    return {
      ...c,
      sourceUrl
    };
  });

  const outputJs = `export const imageCredits = ${JSON.stringify(updatedCredits, null, 2)};\n\nexport default imageCredits;\n`;
  fs.writeFileSync(creditsPath, outputJs, 'utf8');
  console.log(`Successfully fixed ${fixedCount} imageCredits sourceUrls!`);
});
