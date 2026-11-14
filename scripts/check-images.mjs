/**
 * check-images.mjs - GoWonder Travel Guide 圖片連線與可用性全自動檢測工具
 * 依據 AGENTS.md 規範：所有正式上線之圖片網址必須通過 HTTP 200 連線檢驗，杜絕 403/404 與防盜鏈死鏈。
 */

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { imageCredits } from '../src/data/imageCredits.js';
import { destinations } from '../src/data/destinations.js';
import { attractions } from '../src/data/attractions.js';
import { food } from '../src/data/food.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('====================================================');
console.log('  🔍 GoWonder Travel Guide 圖片健康檢測啟動');
console.log('====================================================');

// 收集全站所有圖片資訊
const imageRegistry = new Map();

function register(id, title, url, localPath, sourceModule) {
  if (!url && !localPath) return;
  const key = url || localPath;
  if (!imageRegistry.has(key)) {
    imageRegistry.set(key, {
      id,
      title,
      url,
      localPath,
      modules: [sourceModule]
    });
  } else {
    imageRegistry.get(key).modules.push(sourceModule);
  }
}

// 1. 登記 imageCredits
imageCredits.forEach(c => {
  register(c.id, c.title, c.imageUrl, c.file, 'imageCredits.js');
  if (c.sourceUrl && c.sourceUrl.startsWith('http')) {
    register(`${c.id}-source`, `${c.title} 來源連結`, c.sourceUrl, null, 'imageCredits.js (sourceUrl)');
  }
});

// 2. 登記 destinations
destinations.forEach(d => {
  register(d.id, `${d.name} (${d.englishName}) 城市封面`, d.coverImageUrl, d.coverImage, 'destinations.js');
});

// 3. 登記 attractions
attractions.forEach(a => {
  register(a.id, `${a.name} (${a.englishName}) 景點照`, a.imageUrl, a.image, 'attractions.js');
});

// 4. 登記 food
food.forEach(f => {
  register(f.id, `${f.name} 美食照`, f.imageUrl, f.image, 'food.js');
});

const itemsToCheck = Array.from(imageRegistry.values());
console.log(`總計檢測 ${itemsToCheck.length} 筆獨立圖片資產...\n`);

function checkHttp(targetUrl, timeoutMs = 10000) {
  return new Promise((resolve) => {
    try {
      const parsed = new URL(targetUrl);
      const client = parsed.protocol === 'https:' ? https : http;

      const req = client.get(
        targetUrl,
        {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
          }
        },
        (res) => {
          // 處理 301 / 302 重新導向
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            let nextUrl = res.headers.location;
            if (!nextUrl.startsWith('http')) {
              nextUrl = new URL(nextUrl, targetUrl).toString();
            }
            checkHttp(nextUrl, timeoutMs).then(resolve);
            return;
          }

          resolve({
            statusCode: res.statusCode,
            contentType: res.headers['content-type'] || 'unknown',
            ok: res.statusCode === 200
          });
        }
      );

      req.on('error', (err) => {
        resolve({ error: err.message, ok: false });
      });

      req.setTimeout(timeoutMs, () => {
        req.destroy();
        resolve({ error: '連線逾時 (Timeout)', ok: false });
      });
    } catch (err) {
      resolve({ error: `無效 URL: ${err.message}`, ok: false });
    }
  });
}

function checkLocal(filePath) {
  try {
    const cleanPath = filePath.replace(/^\.\//, '').replace(/^\//, '');
    const full = path.join(rootDir, cleanPath);
    const exists = fs.existsSync(full);
    return {
      status: exists ? 'LOCAL_OK' : 'LOCAL_MISSING',
      ok: exists
    };
  } catch (err) {
    return { error: err.message, ok: false };
  }
}

async function run() {
  let passCount = 0;
  let failCount = 0;
  const failures = [];

  for (const item of itemsToCheck) {
    if (item.url && item.url.startsWith('http')) {
      const res = await checkHttp(item.url);
      if (res.ok) {
        passCount++;
        console.log(`  [PASS] 200 OK  | ${item.id.padEnd(26)} | ${item.title}`);
      } else {
        failCount++;
        const reason = res.statusCode ? `HTTP ${res.statusCode}` : res.error;
        console.error(`  [FAIL] ${reason.padEnd(8)} | ${item.id.padEnd(26)} | ${item.title}`);
        failures.push({ item, reason });
      }
    } else if (item.localPath) {
      const res = checkLocal(item.localPath);
      if (res.ok) {
        passCount++;
        console.log(`  [PASS] LOCAL   | ${item.id.padEnd(26)} | ${item.title}`);
      } else {
        failCount++;
        console.error(`  [FAIL] MISSING | ${item.id.padEnd(26)} | ${item.title}`);
        failures.push({ item, reason: '本地檔案遺失' });
      }
    }
  }

  console.log('\n====================================================');
  console.log(`  檢測報告: 通過 ${passCount} 項 / 失敗 ${failCount} 項 (總計 ${itemsToCheck.length} 項)`);
  console.log('====================================================');

  if (failCount > 0) {
    console.error('\n⚠️ 發現以下圖片存在載入問題：');
    failures.forEach(({ item, reason }, idx) => {
      console.error(`  ${idx + 1}. [${reason}] ID: ${item.id}`);
      console.error(`     名稱: ${item.title}`);
      console.error(`     網址: ${item.url || item.localPath}`);
      console.error(`     引用於: ${item.modules.join(', ')}\n`);
    });
    process.exit(1);
  } else {
    console.log('🎉 恭喜！全站所有圖片皆通過健康測試，符合 AGENTS.md 交付規範！\n');
    process.exit(0);
  }
}

run();
