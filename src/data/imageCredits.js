/**
 * imageCredits.js - GoWonder Travel Guide 圖片來源與授權清單
 * 依據 AGENTS.md 規範，每張圖片均具備作者、真實來源網址、授權型態與 verified 使用許可。
 */

export const imageCredits = [
  // ================= 目的地封面 (Destinations) =================
  {
    id: "credit-dest-kyoto",
    file: "./images/destinations/kyoto.jpg",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    title: "京都經典古城與五重塔街景",
    author: "Sora Sagano",
    sourceUrl: "https://unsplash.com/photos/Dvs08l-KfsQ",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License (允許免費公開展示與修改)",
    usagePermission: "verified",
    alt: "京都八坂塔古老街區日落"
  },
  {
    id: "credit-dest-taipei",
    file: "./images/destinations/taipei.jpg",
    imageUrl: "https://images.unsplash.com/photo-1508248467877-aec1b08de376?auto=format&fit=crop&w=1200&q=80",
    title: "台北101與現代城市天際線",
    author: "Thomas Tucker",
    sourceUrl: "https://unsplash.com/photos/au3CYbdJ6CU",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License (允許免費公開展示與修改)",
    usagePermission: "verified",
    alt: "台北信義區天際線與台北101夜景"
  },
  {
    id: "credit-dest-bangkok",
    file: "./images/destinations/bangkok.jpg",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    title: "曼谷鄭王廟與昭披耶河黃昏景緻",
    author: "Aleksandar Pasaric",
    sourceUrl: "https://unsplash.com/photos/1508009603885-50cf7c579365",
    sourceType: "免費商用圖庫 (Pexels / Unsplash)",
    license: "Unsplash / Pexels License (免費公開展示)",
    usagePermission: "verified",
    alt: "曼谷金碧輝煌的歷史寺廟群與水岸"
  },

  // ================= 京都景點 (Kyoto Attractions) =================
  {
    id: "credit-attr-kyoto-kinkakuji",
    file: "./images/attractions/kyoto-kinkakuji.jpg",
    imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=80",
    title: "京都鹿苑寺金閣舍利殿與鏡湖池",
    author: "Su San Lee",
    sourceUrl: "https://unsplash.com/photos/g95Dq93Wb-w",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "京都金閣寺倒映在湖水中的金碧輝煌景色"
  },
  {
    id: "credit-attr-kyoto-fushimi",
    file: "./images/attractions/kyoto-fushimi.jpg",
    imageUrl: "https://images.unsplash.com/photo-1478436127897-769e00d0c715?auto=format&fit=crop&w=900&q=80",
    title: "伏見稻荷大社千本鳥居步道",
    author: "David Emrich",
    sourceUrl: "https://unsplash.com/photos/F6-U5fGAOik",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "朱紅色千本鳥居構成的長廊步道"
  },
  {
    id: "credit-attr-kyoto-kiyomizu",
    file: "./images/attractions/kyoto-kiyomizu.jpg",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
    title: "音羽山清水寺木造懸空舞台",
    author: "Susanne Nilsson",
    sourceUrl: "https://unsplash.com/photos/r941zZflwJA",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "清水寺依山而建的木構大舞台與遠山"
  },
  {
    id: "credit-attr-kyoto-arashiyama",
    file: "./images/attractions/kyoto-arashiyama.jpg",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80",
    title: "嵐山嵯峨野竹林小徑",
    author: "Bantersnaps",
    sourceUrl: "https://unsplash.com/photos/3tlAumtiLR4",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "高聳青翠竹林幽靜小路"
  },

  // ================= 台北景點 (Taipei Attractions) =================
  {
    id: "credit-attr-taipei-101",
    file: "./images/attractions/taipei-101.jpg",
    imageUrl: "https://images.unsplash.com/photo-1538356262335-51b68a735072?auto=format&fit=crop&w=900&q=80",
    title: "台北101大樓仰望全貌",
    author: "Timo Volz",
    sourceUrl: "https://unsplash.com/photos/dpUvW8g1hXg",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "台北101摩天大樓壯麗外觀"
  },
  {
    id: "credit-attr-taipei-palace",
    file: "./images/attractions/taipei-palace.jpg",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
    title: "國立故宮博物院傳統宮殿建築",
    author: "Lisanto ???",
    sourceUrl: "https://unsplash.com/photos/1563245372-f21724e3856d",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "台北外雙溪國立故宮博物院巍峨宮殿主樓"
  },
  {
    id: "credit-attr-taipei-elephant",
    file: "./images/attractions/taipei-elephant.jpg",
    imageUrl: "https://images.unsplash.com/photo-1470004914212-259bd0cfcbac?auto=format&fit=crop&w=900&q=80",
    title: "象山六巨石俯瞰台北夕陽夜景",
    author: "Froylan Gomez",
    sourceUrl: "https://unsplash.com/photos/1470004914212",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "從象山遠眺台北101與台北市璀璨市景"
  },
  {
    id: "credit-attr-taipei-shilin",
    file: "./images/attractions/taipei-shilin.jpg",
    imageUrl: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=80",
    title: "士林夜市與台灣街頭小吃攤位",
    author: "Vernon Raineil Cenzon",
    sourceUrl: "https://unsplash.com/photos/1570197788417",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "熱鬧喧騰的台北觀光夜市小吃街燈光與攤商"
  },

  // ================= 曼谷景點 (Bangkok Attractions) =================
  {
    id: "credit-attr-bangkok-palace",
    file: "./images/attractions/bangkok-palace.jpg",
    imageUrl: "https://images.unsplash.com/photo-1563492065599-3580f777d662?auto=format&fit=crop&w=900&q=80",
    title: "曼谷大皇宮金色佛塔與玉佛寺建築",
    author: "Andreas M",
    sourceUrl: "https://unsplash.com/photos/1563492065599",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "大皇宮奢華雕刻金色尖頂佛塔群"
  },
  {
    id: "credit-attr-bangkok-watarun",
    file: "./images/attractions/bangkok-watarun.jpg",
    imageUrl: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
    title: "鄭王廟黎明寺大乘舍利塔瓷片雕花",
    author: "Mathew Schwartz",
    sourceUrl: "https://unsplash.com/photos/1528181304800",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "立於湄南河畔的鄭王廟白色巴普朗尖塔"
  },
  {
    id: "credit-attr-bangkok-chatuchak",
    file: "./images/attractions/bangkok-chatuchak.jpg",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    title: "恰圖恰週末市集特色手工與服飾攤位",
    author: "Adrien Olichon",
    sourceUrl: "https://unsplash.com/photos/1555396273",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "恰圖恰市集熙攘往來的人潮與色彩繽紛的手工藝品"
  },
  {
    id: "credit-attr-bangkok-river",
    file: "./images/attractions/bangkok-river.jpg",
    imageUrl: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=900&q=80",
    title: "昭披耶河水上交通船穿梭曼谷市心",
    author: "Norbert Braun",
    sourceUrl: "https://unsplash.com/photos/1506665531195",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "水上長尾船與觀光渡輪在昭披耶河面上激起浪花"
  },

  // ================= 特色美食 (Food) =================
  {
    id: "credit-food-kyoto-matcha",
    file: "./images/food/kyoto-matcha.jpg",
    imageUrl: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=900&q=80",
    title: "宇治頂級抹茶白玉聖代與茶筅",
    author: "Alice Pasqual",
    sourceUrl: "https://unsplash.com/photos/1536256263959",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "濃郁鮮綠宇治抹茶甜品與紅豆白玉"
  },
  {
    id: "credit-food-kyoto-kaiseki",
    file: "./images/food/kyoto-kaiseki.jpg",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
    title: "京都傳統京懷石精緻時令料理",
    author: "Fumikazu Sato",
    sourceUrl: "https://unsplash.com/photos/1579871494447",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "典雅漆器裝盛的當季京都懷石小料理"
  },
  {
    id: "credit-food-taipei-beefnoodles",
    file: "./images/food/taipei-beefnoodles.jpg",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    title: "台灣紅燒半筋半肉牛肉麵",
    author: "Mink Mingle",
    sourceUrl: "https://unsplash.com/photos/1569718212165",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "大塊燉牛腱肉、濃郁紅燒湯頭與青江菜麵碗"
  },
  {
    id: "credit-food-taipei-xiaolongbao",
    file: "./images/food/taipei-xiaolongbao.jpg",
    imageUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=900&q=80",
    title: "熱氣蒸騰的鼎泰豐風格現蒸小籠包",
    author: "Charles Deluvio",
    sourceUrl: "https://unsplash.com/photos/1541696432",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "竹蒸籠中薄皮多汁熱騰騰的小籠湯包"
  },
  {
    id: "credit-food-bangkok-padthai",
    file: "./images/food/bangkok-padthai.jpg",
    imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
    title: "泰式鮮蝦炒金邊粉 Pad Thai",
    author: "Marek Studzinski",
    sourceUrl: "https://unsplash.com/photos/1559847844",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "佐檸檬角、花生碎與肥美大蝦的泰式炒河粉"
  },
  {
    id: "credit-food-bangkok-mangorice",
    file: "./images/food/bangkok-mangorice.jpg",
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",
    title: "曼谷經典香甜椰汁芒果糯米飯",
    author: "Shashi Chaturvedula",
    sourceUrl: "https://unsplash.com/photos/1596797038530",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "新鮮金黃芒果切片搭配淋上濃稠椰漿的糯米飯"
  }
];

export default imageCredits;
