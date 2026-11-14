import { destinations } from '../src/data/destinations.js';
import { attractions } from '../src/data/attractions.js';
import { food } from '../src/data/food.js';

console.log('=== DESTINATIONS (5) ===');
destinations.forEach(d => {
  console.log(`[DEST] ${d.id} | ${d.name} (${d.englishName}) | URL: ${d.coverImageUrl}`);
});

console.log('\n=== ATTRACTIONS (29) ===');
attractions.forEach(a => {
  console.log(`[ATTR] ${a.id} | ${a.name} (${a.englishName}) | URL: ${a.imageUrl}`);
});

console.log('\n=== FOOD (19) ===');
food.forEach(f => {
  console.log(`[FOOD] ${f.id} | ${f.name} (${f.englishName}) | URL: ${f.imageUrl}`);
});
