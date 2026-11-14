import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const creditsPath = path.resolve(__dirname, '../src/data/imageCredits.js');

const updates = {
  'credit-food-taipei-beefnoodles': {
    author: 'Masaaki Komori',
    imageUrl: 'https://images.unsplash.com/photo-1519077204685-ed90d0cc05b7?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://images.unsplash.com/photo-1519077204685-ed90d0cc05b7?auto=format&fit=crop&w=900&q=80',
    alt: '大塊燉牛腱肉、濃郁紅燒湯頭與手工麵條'
  },
  'credit-food-bangkok-mangorice': {
    author: 'Unsplash Contributor',
    imageUrl: 'https://images.unsplash.com/photo-1705056508219-0aa0ceb16820?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://images.unsplash.com/photo-1705056508219-0aa0ceb16820?auto=format&fit=crop&w=900&q=80',
    alt: '黑盤上擺放金黃鮮切芒果片與香濃椰漿糯米飯'
  },
  'credit-attr-taichung-gaomei': {
    author: 'Intricate Explorer',
    imageUrl: 'https://images.unsplash.com/photo-1767630867135-5a7693b459bf?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://images.unsplash.com/photo-1767630867135-5a7693b459bf?auto=format&fit=crop&w=900&q=80',
    alt: '高美濕地延伸至潮間帶深處的木棧道與夕陽'
  },
  'credit-attr-taichung-shenji': {
    author: 'Jeffrey Zhang',
    imageUrl: 'https://images.unsplash.com/photo-1779079297902-2e4ba713a936?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://images.unsplash.com/photo-1779079297902-2e4ba713a936?auto=format&fit=crop&w=900&q=80',
    alt: '審計新村老屋綠樹掩映下的戶外文創手作市集'
  },
  'credit-food-taichung-bubbletea': {
    author: 'Unsplash Contributor',
    imageUrl: 'https://images.unsplash.com/photo-1751199956820-ecb919004024?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://images.unsplash.com/photo-1751199956820-ecb919004024?auto=format&fit=crop&w=900&q=80',
    alt: '手中拿著一杯裝滿黑糖珍珠與香醇鮮奶的台灣珍珠奶茶'
  },
  'credit-food-kyoto-yudofu': {
    author: 'Unsplash Contributor',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    alt: '熱騰騰白玉豆腐浸潤於清香昆布高湯的京都湯豆腐料理'
  },
  'credit-food-taipei-luroufan': {
    author: 'tommao wang',
    imageUrl: 'https://images.unsplash.com/photo-1789296719187-829d74cc7711?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://images.unsplash.com/photo-1789296719187-829d74cc7711?auto=format&fit=crop&w=900&q=80',
    alt: '經典台灣滷肉飯碗鋪滿香濃手切滷肉、小黃瓜與醃黃蘿蔔'
  },
  'credit-food-bangkok-tomyum': {
    author: 'Unsplash Contributor',
    imageUrl: 'https://images.unsplash.com/photo-1563372529-b35a5220919f?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://images.unsplash.com/photo-1563372529-b35a5220919f?auto=format&fit=crop&w=900&q=80',
    alt: '以大蝦、檸檬草與辣油熬煮的紅艷濃郁正宗冬蔭功海鮮湯'
  },
  'credit-food-bangkok-roti': {
    author: 'Unsplash Contributor',
    imageUrl: 'https://images.unsplash.com/photo-1575853121613-72ce1dd6979d?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://images.unsplash.com/photo-1575853121613-72ce1dd6979d?auto=format&fit=crop&w=900&q=80',
    alt: '金黃熱煎香脆餅皮裹入新鮮香蕉切片並淋上香甜煉乳的泰式香蕉煎餅'
  },
  'credit-food-taichung-suncake': {
    author: 'Unsplash Contributor',
    imageUrl: 'https://images.unsplash.com/photo-1782029680974-e07c93389f52?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://images.unsplash.com/photo-1782029680974-e07c93389f52?auto=format&fit=crop&w=900&q=80',
    alt: '層層酥皮金黃圓潤包裹香甜麥芽糖的道地傳統太陽餅'
  }
};

let raw = fs.readFileSync(creditsPath, 'utf8');

// Parse imageCredits using regex or eval
import('file:///' + creditsPath.replace(/\\/g, '/')).then(mod => {
  const credits = mod.imageCredits;
  const updated = credits.map(c => {
    if (updates[c.id]) {
      return {
        ...c,
        ...updates[c.id]
      };
    }
    return c;
  });

  const outputJs = `export const imageCredits = ${JSON.stringify(updated, null, 2)};\n\nexport default imageCredits;\n`;
  fs.writeFileSync(creditsPath, outputJs, 'utf8');
  console.log(`Successfully updated ${Object.keys(updates).length} imageCredits entries!`);
});
