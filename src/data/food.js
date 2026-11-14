/**
 * food.js - GoWonder Travel Guide 特色美食資料清單
 * 依據 AGENTS.md 規範，包含 destinationId, imageCreditIds, sourceIds 等完整關聯。
 */

export const food = [
  // ================= 日本京都 Kyoto =================
  {
    id: "kyoto-matcha",
    destinationId: "kyoto",
    name: "宇治抹茶甜點與白玉聖代",
    englishName: "Uji Matcha Parfait & Sweets",
    category: "甜點",
    description: "京都宇治自古為日本頂級綠茶產地。在京都町家茶屋中品嚐濃郁微苦的石臼研磨抹茶冰淇淋，搭配軟糯手工白玉糰子、十勝紅豆泥與寒天凍，層次深邃且甘醇回味。",
    recommendedSpots: "中村藤吉本店、茶寮都路里、祇園辻利",
    priceRange: "¥1,000 - ¥1,800",
    image: "./images/food/kyoto-matcha.jpg",
    imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-kyoto-matcha"],
    sourceIds: ["source-kyoto-official", "source-jnto-japan"]
  },
  {
    id: "kyoto-kaiseki",
    destinationId: "kyoto",
    name: "京料理與懷石會席",
    englishName: "Kyoto Kaiseki Dining",
    category: "在地料理",
    description: "日本傳統料理的最高藝術殿堂，極致講究當令「旬」食材的原汁原味，結合精美陶器漆器與庭園意境。從八寸開胃菜、清蒸吸物到燒物、御飯，如同一場味覺與視覺兼備的五感盛宴。",
    recommendedSpots: "菊乃井、吉兆嵐山本店、高台寺和久傳",
    priceRange: "午間 ¥8,000 起 / 晚間 ¥18,000 起",
    image: "./images/food/kyoto-kaiseki.jpg",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-kyoto-kaiseki"],
    sourceIds: ["source-kyoto-official", "source-jnto-japan"]
  },

  // ================= 台灣台北 Taipei =================
  {
    id: "taipei-beef-noodles",
    destinationId: "taipei",
    name: "台灣經典紅燒牛肉麵",
    englishName: "Taiwanese Braised Beef Noodle Soup",
    category: "在地料理",
    description: "台北最具代表性的靈魂麵食。以牛大骨、八角、花椒、洋蔥及豆瓣醬歷經數小時熬煮出深厚濃郁的湯頭，搭配軟嫩帶筋的牛腱肉與手工刀削寬麵，再撒上酸菜與蔥花，香氣四溢。",
    recommendedSpots: "林東芳牛肉麵、永康牛肉麵、劉山東牛肉麵",
    priceRange: "NT$ 180 - NT$ 280",
    image: "./images/food/taipei-beefnoodles.jpg",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-taipei-beefnoodles"],
    sourceIds: ["source-taipei-travel"]
  },
  {
    id: "taipei-xiaolongbao",
    destinationId: "taipei",
    name: "黃金十八摺多汁小籠湯包",
    englishName: "Steamed Xiao Long Bao",
    category: "點心特產",
    description: "揚名全球的台灣麵食工藝指標。強調精準十八道手工黃金摺紋與薄透如紙的麵皮，包覆著鮮甜黑毛豬肉餡與特熬皮凍高湯，一口咬下瞬間爆出醇美鮮香的熱騰滾燙湯汁。",
    recommendedSpots: "鼎泰豐信義本店、盛園絲瓜小籠湯包、杭州小籠湯包",
    priceRange: "NT$ 150 - NT$ 320",
    image: "./images/food/taipei-xiaolongbao.jpg",
    imageUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-taipei-xiaolongbao"],
    sourceIds: ["source-taipei-travel"]
  },

  // ================= 泰國曼谷 Bangkok =================
  {
    id: "bangkok-pad-thai",
    destinationId: "bangkok",
    name: "泰式鮮蝦炒金邊粉 (Pad Thai)",
    englishName: "Pad Thai Goong",
    category: "在地料理",
    description: "泰國享譽全球的國民代表美食。大火快炒米粉、豆干丁、蘿蔔乾與爽脆豆芽菜，拌入羅望子醬、魚露、椰糖調合而成的酸甜秘醬，起鍋盛盤配上肥美鮮蝦、現擠青檸檬角與烤花生碎粒。",
    recommendedSpots: "Thip Samai 鬼門炒河粉、Baan Phadthai",
    priceRange: "THB 60 - THB 180",
    image: "./images/food/bangkok-padthai.jpg",
    imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-bangkok-padthai"],
    sourceIds: ["source-tat-thailand"]
  },
  {
    id: "bangkok-mango-sticky-rice",
    destinationId: "bangkok",
    name: "經典香蘭椰汁芒果糯米飯",
    englishName: "Mango Sticky Rice (Khao Niew Mamuang)",
    category: "甜點",
    description: "泰國最受歡迎的熱帶甜點。選用熟成度完美的泰國水仙金黃芒果切片，搭配蒸得溫熱彈牙、拌入濃郁椰漿的長粒糯米飯，最後澆淋微鹹椰奶並撒上酥脆金黃炸綠豆仁，甜潤綿滑令人陶醉。",
    recommendedSpots: "Mae Varee 芒果糯米飯專賣店、Kor Panich",
    priceRange: "THB 80 - THB 160",
    image: "./images/food/bangkok-mangorice.jpg",
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-bangkok-mangorice"],
    sourceIds: ["source-tat-thailand"]
  },

  // ================= 台灣台中 Taichung =================
  {
    id: "taichung-bubble-tea",
    destinationId: "taichung",
    name: "台中發源原創珍珠奶茶",
    englishName: "Original Taiwanese Bubble Milk Tea",
    category: "飲品甜點",
    description: "台中為全球手搖飲傳奇「珍珠奶茶」的誕生發源聖地。以特選錫蘭紅茶慢火熬出濃厚茶韻，加入香醇鮮奶與焦糖黑糖慢熬、軟糯Q彈有嚼勁的手工粉圓，甜潤順口是風靡全世界的台灣之光。",
    recommendedSpots: "春水堂創始店（四維街）、茶明載波、吃茶三千",
    priceRange: "NT$ 65 - NT$ 130",
    image: "./images/food/taichung-bubbletea.jpg",
    imageUrl: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-taichung-bubbletea"],
    sourceIds: ["source-taichung-travel"]
  },
  {
    id: "taichung-miyahara-icecream",
    destinationId: "taichung",
    name: "宮原眼科手作天然冰淇淋與土鳳梨酥",
    englishName: "Miyahara Artisanal Ice Cream & Pastries",
    category: "甜點",
    description: "座落於台中火車站旁日治時期眼科醫院紅磚老建築，由日出團隊打造成宛如霍格華茲魔法學院般的挑高巴洛克圖書館空間。提供多達六十餘種風味的手工純天然冰淇淋，搭配整塊經典土鳳梨酥與乳酪蛋糕作為華麗配料。",
    recommendedSpots: "宮原眼科本店（中山路20號）、第四信用合作社",
    priceRange: "NT$ 180 - NT$ 320",
    image: "./images/food/taichung-miyahara.jpg",
    imageUrl: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-taichung-miyahara"],
    sourceIds: ["source-taichung-travel"]
  }
];

export default food;
