import { imageCredits } from './src/data/imageCredits.js';

let updatedCount = 0;
const newCredits = imageCredits.map(c => {
  let sourceUrl = c.sourceUrl;
  // If sourceUrl is broken unsplash.com/photos/<digits> or invalid
  if (sourceUrl.includes('unsplash.com/photos/')) {
    // Replace with direct Unsplash high-res image link
    sourceUrl = c.imageUrl;
    updatedCount++;
  }
  return { ...c, sourceUrl };
});

console.log(`Updated ${updatedCount} sourceUrls to valid imageUrl`);
