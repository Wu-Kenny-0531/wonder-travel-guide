import { destinations } from '../src/data/destinations.js';
import { attractions } from '../src/data/attractions.js';
import { food } from '../src/data/food.js';

function search(term) {
  const t = term.trim().toLowerCase();
  return destinations.filter(d => {
    const matchAttr = t && Array.isArray(d.attractionIds) && attractions.some(a =>
      d.attractionIds.includes(a.id) && (
        a.name.toLowerCase().includes(t) ||
        a.englishName.toLowerCase().includes(t) ||
        (a.category && a.category.toLowerCase().includes(t)) ||
        (a.description && a.description.toLowerCase().includes(t))
      )
    );
    const matchFood = t && Array.isArray(d.foodIds) && food.some(f =>
      d.foodIds.includes(f.id) && (
        f.name.toLowerCase().includes(t) ||
        (f.category && f.category.toLowerCase().includes(t)) ||
        (f.description && f.description.toLowerCase().includes(t))
      )
    );
    return !t || d.name.toLowerCase().includes(t) || d.englishName.toLowerCase().includes(t) || d.country.toLowerCase().includes(t) || (d.description && d.description.toLowerCase().includes(t)) || matchAttr || matchFood;
  }).map(d => d.name);
}

const tests = ['龍山寺', '滷肉飯', '自由女神', '太陽餅', '大皇宮', '冬蔭功', '金閣寺', '牛肉麵', 'Taipei'];
tests.forEach(testQuery => {
  console.log(`搜尋 [${testQuery}] -> 找到城市:`, search(testQuery));
});
