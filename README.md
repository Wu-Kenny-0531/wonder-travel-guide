# GoWonder Travel Guide 🌟
> **Explore More. Travel Better.** — 活潑、明亮、繽紛的現代自由行旅遊指南網站。

![Brand Colors](https://img.shields.io/badge/Theme-Orange_%23FF7043_%7C_Teal_%2306B6A4_%7C_Cream_%23FFF8ED-FF7043)
![Tech Stack](https://img.shields.io/badge/Stack-React_18_%7C_Vite_%7C_HashRouter-4C78E8)
![Status](https://img.shields.io/badge/Verified-100%25_Official_Sources-06B6A4)
![License](https://img.shields.io/badge/License-MIT-FFD166)

---

## 📌 專案簡介

**GoWonder Travel Guide** 是一個專為自由行與自助旅行愛好者設計的旅遊指南網站。以活潑繽紛的旅遊雜誌風格，呈現精選城市特色景點、在地道地美食、自由行建議與簡易推薦行程。

全站具備：
1. **即時探索與多維度篩選**：支援城市名稱即時關鍵字搜尋（中英文不拘）、依國家與熱門體驗標籤篩選。
2. **共用動態詳細頁面架構**：以統一規格模板動態加載目的地資料，新增城市不需重新編寫或修改程式架構。
3. **無縫本機收藏庫**：採用 `LocalStorage` 保存喜歡的城市與私房景點，重新整理或關閉視窗不遺失，支援即時統計徽章與清空管理。
4. **透明嚴謹的來源與授權揭露**：100% 引用官方旅遊局或景點官網真實資訊，每張照片均載明原創作者、商用許可與真實來源。
5. **響應式全裝置支援**：完美適配桌面、平板與手機螢幕，手機版嚴格防止水平溢位。

---

## 🎨 品牌配色與視覺規範

網站採用活潑、明亮、溫暖的旅遊雜誌調性，統一遵循品牌色票：

| 用途 | 顏色名稱 | 色碼 | 說明 |
|---|---|---|---|
| 主要品牌色 | 亮橘色 (Primary) | `#FF7043` | 用於主要行動按鈕、標誌與重要互動元素 |
| 輔助提示色 | 溫暖黃 (Secondary) | `#FFD166` | 用於小面積重點裝飾、評分與提示標章 |
| 輔助清新色 | 青綠色 (Teal) | `#06B6A4` | 用於景點分類、自然風景與特色標籤 |
| 輔助都會色 | 湛藍色 (Blue) | `#4C78E8` | 用於交通提示、城市地標與輔助資訊 |
| 背景基調色 | 奶油白 (Background) | `#FFF8ED` | 主要頁面背景色，營造舒適柔和的閱讀體驗 |

---

## 📁 檔案與資料夾結構

專案嚴格遵循 `AGENTS.md` 規範架構：

```text
gowonder-travel-guide/
├── AGENTS.md                  # 專案唯一核心開發與 AI 擴充規範文件
├── README.md                  # 專案說明與操作指引
├── package.json               # 專案相依套件與指令設定
├── vite.config.js             # Vite 建置配置（base: './' 無縫相容 GitHub Pages）
├── index.html                 # 應用程式入口與字體設定
├── public/
│   └── images/                # 本地圖片儲存目錄（各目錄均具備離線備援素材）
│       ├── destinations/      # 城市封面圖片
│       ├── attractions/       # 景點照片
│       ├── food/              # 特色美食照片
│       └── local/             # 本地活動與其他素材
├── src/
│   ├── main.jsx               # React 根節點掛載
│   ├── App.jsx                # HashRouter 路由設定與全域佈局
│   ├── components/            # 共用可複用 UI 元件
│   │   ├── Navbar.jsx         # 導覽列（含愛心即時收藏徽章、手機漢堡選單）
│   │   ├── Footer.jsx         # 頁尾（品牌標語、快速導覽、免責聲明）
│   │   ├── Hero.jsx           # 旅遊雜誌主視覺（號召行動、亮點數據）
│   │   ├── DestinationCard.jsx# 目的地卡片（封面、標籤、收藏愛心）
│   │   ├── AttractionCard.jsx # 景點卡片（分類徽章、亮點、開放時間、收藏按鈕）
│   │   ├── FoodCard.jsx       # 美食卡片（品嚐處、價格區間、分類標籤）
│   │   └── SearchBar.jsx      # 即時搜尋輸入框與國家/標籤篩選 Pills
│   ├── pages/                 # 五大核心頁面
│   │   ├── Home.jsx           # 首頁（Hero、熱門城市、焦點景點、美食）
│   │   ├── Explore.jsx        # 探索頁（即時搜尋、國家與分類篩選、空白提示）
│   │   ├── DestinationDetail.jsx # 目的地詳細頁（共用模板、三日行程、交通小叮嚀）
│   │   ├── Favorites.jsx      # 我的收藏頁（分頁標籤、LocalStorage 保存、清空功能）
│   │   └── SourcesCredits.jsx # 資料來源與圖片授權檢閱頁（透明化表格展示）
│   ├── data/                  # 旅遊資料模組（嚴格與畫面程式碼抽離）
│   │   ├── destinations.js    # 城市基本資訊、簡介、交通指南與推薦行程
│   │   ├── attractions.js     # 景點資料、類別、營業時間、關聯 ID
│   │   ├── food.js            # 在地代表料理、推薦店家、價格帶
│   │   ├── sources.js         # 文字資料引用之官方網站與查閱日期
│   │   └── imageCredits.js    # 圖片作者、原出處、授權類型與 verified 狀態
│   ├── hooks/
│   │   └── useFavorites.js    # 跨分頁響應之 LocalStorage 收藏自訂 Hook
│   └── styles/
│       ├── global.css         # CSS 變數、字體重設、排版、按鈕與響應式容器
│       └── components.css     # 各 UI 元件、卡片樣式、動畫與手機版微調
└── .github/
    └── workflows/
        └── deploy.yml         # GitHub Actions 自動化建置與 GitHub Pages 部署流程
```

---

## 🚀 快速開始 (Local Development)

### 1. 安裝相依套件

在專案目錄下執行：

```bash
npm install
```

### 2. 啟動本機開發伺服器

```bash
npm run dev
```

啟動後於瀏覽器開啟終端機顯示之網址（通常為 `http://localhost:5173/`）。

### 3. 正式建置 (Production Build)

```bash
npm run build
```

建置完成之靜態檔案將輸出至 `dist/` 資料夾。

### 4. 預覽正式建置結果

```bash
npm run preview
```

---

## 🗺️ 初始內建目的地資料

首版依據 `AGENTS.md` 規範建立三大精選自由行熱門城市：

1. **日本京都 (Kyoto, JP)**
   - 景點：金閣寺（鹿苑寺）、伏見稻荷大社（千本鳥居）、音羽山清水寺、嵐山竹林小徑。
   - 美食：宇治抹茶甜點與白玉聖代、京料理與懷石會席。
   - 官方來源：京都市觀光協會官方網站、日本國家旅遊局 (JNTO)。

2. **台灣台北 (Taipei, TW)**
   - 景點：台北101觀景台、國立故宮博物院、象山親山步道、士林夜市。
   - 美食：台灣經典紅燒牛肉麵、黃金十八摺多汁小籠湯包。
   - 官方來源：台北旅遊網（臺北市觀傳局）、台北捷運公司。

3. **泰國曼谷 (Bangkok, TH)**
   - 景點：曼谷大皇宮與玉佛寺、鄭王廟（黎明寺）、恰圖恰週末市集、昭披耶河水上交通船體驗。
   - 美食：泰式鮮蝦炒金邊粉 (Pad Thai)、經典香蘭椰汁芒果糯米飯。
   - 官方來源：泰國觀光局 (TAT)、泰國王室宮務處。

---

## ➕ 如何新增城市或景點（擴充規範）

**本專案嚴格落實「資料與畫面完全分離」原則**，新增任何城市、景點或美食時，**不需更動任何 JSX 頁面**，請依照以下步驟依序編輯 `src/data/` 中的檔案：

1. **`src/data/sources.js`**：加入官方旅遊網站或政府觀光局之可靠來源。
2. **`src/data/imageCredits.js`**：加入經確認具有合法公開商用使用權的圖片資訊（`usagePermission: "verified"`）。
3. **`src/data/attractions.js`**：新增景點，設定唯一的 `id`、正確的 `destinationId`，以及對應的 `imageCreditIds` 與 `sourceIds`。
4. **`src/data/food.js`**：新增美食，填寫推薦品嚐店家與價格區間。
5. **`src/data/destinations.js`**：新增城市資料，填入 `attractionIds`、`foodIds` 與三日遊規劃。

儲存後，首頁、探索頁（包括即時搜尋與國家過濾 Pills）、詳細頁面與收藏系統皆會**自動動態加載並生效**！

---

## 🌐 部署至 GitHub Pages

專案已內建 `.github/workflows/deploy.yml` 自動部署設定檔：

1. 將本專案 Push 至 GitHub 儲存庫（建議倉庫名稱為 `gowonder-travel-guide` 或個人自訂名稱）。
2. 在 GitHub 儲存庫的 **Settings > Pages** 中，將 **Source** 設定為 **GitHub Actions**。
3. 未來只要將程式碼 Push 到 `main` 分支，GitHub Actions 便會自動執行依賴安裝、正式建置，並發布至 GitHub Pages！

---

## 📜 授權協議

本專案採 [MIT License](LICENSE) 授權開放。旅遊介紹之引用文字與攝影作品版權歸屬於各原著作權單位與攝影作者，詳見網站內之「資料來源與圖片授權 (Sources & Image Credits)」頁面。
