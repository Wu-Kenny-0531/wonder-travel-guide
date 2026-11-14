import { attractions } from '../src/data/attractions.js';
import { food } from '../src/data/food.js';
import { imageCredits } from '../src/data/imageCredits.js';

console.log('Arashiyama attr:', attractions.find(x => x.id === 'kyoto-arashiyama-bamboo')?.imageUrl);
console.log('Longshan attr:', attractions.find(x => x.id === 'taipei-longshan-temple')?.imageUrl);
console.log('Yatsuhashi food:', food.find(x => x.id === 'kyoto-yatsuhashi')?.imageUrl);
console.log('Mango ice food:', food.find(x => x.id === 'taipei-mango-ice')?.imageUrl);

console.log('\n--- ALL ATTRACTIONS ---');
for (const a of attractions) {
  console.log(`ATTR: [${a.id}] ${a.name} -> ${a.imageUrl}`);
}
console.log('\n--- ALL FOOD ---');
for (const f of food) {
  console.log(`FOOD: [${f.id}] ${f.name} -> ${f.imageUrl}`);
}
