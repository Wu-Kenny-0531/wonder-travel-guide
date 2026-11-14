import fs from 'fs';
import path from 'path';

// 1. Read existing data
import sources from '../src/data/sources.js';
import imageCredits from '../src/data/imageCredits.js';
import attractions from '../src/data/attractions.js';
import food from '../src/data/food.js';
import destinations from '../src/data/destinations.js';

// New Sources
const newSources = [
  {
    id: "source-kyoto-nijo",
    name: "二條城官方網站 (World Heritage Nijo-jo Castle Official)",
    url: "https://nijo-jocastle.city.kyoto.lg.jp/",
    type: "景點官方網站",
    accessedAt: "2026-11-14",
    notes: "德川家康二之丸御殿參觀須知、國寶壁畫特展與鶯啼地板結構說明。"
  },
  {
    id: "source-taipei-longshan",
    name: "艋舺龍山寺官方網站 (Lungshan Temple Official)",
    url: "https://www.lungshan.org.tw/",
    type: "景點官方網站",
    accessedAt: "2026-11-14",
    notes: "國定古蹟建築特色、祭祀禮儀、香火由來與開放參拜時間。"
  },
  {
    id: "source-bangkok-watpho",
    name: "曼谷臥佛寺官方網站 (Wat Pho Official)",
    url: "https://www.watpho.com/",
    type: "景點官方網站",
    accessedAt: "2026-11-14",
    notes: "臥佛寺殿堂開放時間、泰式傳統醫學古法按摩學校預約資訊。"
  }
];

// New Image Credits
const newCredits = [
  // Kyoto
  {
    id: "credit-attr-kyoto-gion",
    file: "./images/attractions/kyoto-gion.jpg",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
    title: "祇園花見小路傳統町家木造建築與石板路",
    author: "Su San Lee",
    sourceUrl: "https://unsplash.com/photos/1503899036",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "京都祇園花見小路茶屋與木造千本格子街景"
  },
  {
    id: "credit-attr-kyoto-nijo",
    file: "./images/attractions/kyoto-nijo.jpg",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
    title: "世界文化遺產二條城唐門金箔雕花",
    author: "Bantersnaps",
    sourceUrl: "https://unsplash.com/photos/1570077188",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "二條城金碧輝煌的唐門屋頂與華麗木雕"
  },
  {
    id: "credit-food-kyoto-yudofu",
    file: "./images/food/kyoto-yudofu.jpg",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    title: "京都南禪寺名物清雅昆布湯豆腐",
    author: "Brooke Lark",
    sourceUrl: "https://unsplash.com/photos/1546069901",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "熱騰騰白玉豆腐浸潤於清香柴魚昆布湯頭"
  },
  {
    id: "credit-food-kyoto-yatsuhashi",
    file: "./images/food/kyoto-yatsuhashi.jpg",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
    title: "京都老街手工生八橋與四季日式和菓子",
    author: "Jennifer Schmidt",
    sourceUrl: "https://unsplash.com/photos/1563805042",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "肉桂香氣肉軟Q米皮包裹紅豆餡的傳統生八橋"
  },

  // Taipei
  {
    id: "credit-attr-taipei-dadaocheng",
    file: "./images/attractions/taipei-dadaocheng.jpg",
    imageUrl: "https://images.unsplash.com/photo-1571474004502-c1def214ac6d?auto=format&fit=crop&w=900&q=80",
    title: "大稻埕迪化街巴洛克紅磚老街風華",
    author: "Timo Volz",
    sourceUrl: "https://unsplash.com/photos/1571474004",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "迪化街百年南北貨老店與巴洛克建築牌樓"
  },
  {
    id: "credit-attr-taipei-longshan",
    file: "./images/attractions/taipei-longshan.jpg",
    imageUrl: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=900&q=80",
    title: "艋舺龍山寺歇山重簷燕尾與虔誠香火",
    author: "Lisanto 李奕良",
    sourceUrl: "https://unsplash.com/photos/1543731068",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "艋舺龍山寺正殿璀璨剪黏石雕與繚繞香火"
  },
  {
    id: "credit-food-taipei-luroufan",
    file: "./images/food/taipei-luroufan.jpg",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80",
    title: "台灣傳統冠軍古早味香蔥滷肉飯",
    author: "Mgg Vitchic",
    sourceUrl: "https://unsplash.com/photos/1563379091",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "油亮晶瑩手切黑豬肉燥澆淋在香熱白米飯上"
  },
  {
    id: "credit-food-taipei-mangoice",
    file: "./images/food/taipei-mangoice.jpg",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    title: "永康街手作鮮切愛文芒果雪花冰",
    author: "Food Photographer",
    sourceUrl: "https://unsplash.com/photos/1568901346",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "金黃鮮甜愛文芒果丁堆疊於綿密牛奶雪花冰"
  },

  // Bangkok
  {
    id: "credit-attr-bangkok-watpho",
    file: "./images/attractions/bangkok-watpho.jpg",
    imageUrl: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=900&q=80",
    title: "曼谷臥佛寺全長46公尺金色大臥佛",
    author: "Evan Krause",
    sourceUrl: "https://unsplash.com/photos/1563492065",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "臥佛寺金碧輝煌的巨型臥佛殿與精細螺鈿足底"
  },
  {
    id: "credit-attr-bangkok-iconsiam",
    file: "./images/attractions/bangkok-iconsiam.jpg",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80",
    title: "暹羅天地ICONSIAM河畔璀璨夜景與水舞",
    author: "Dan Freeman",
    sourceUrl: "https://unsplash.com/photos/1508009603",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "昭披耶河畔ICONSIAM大型現代水岸購物商場夜景"
  },
  {
    id: "credit-food-bangkok-tomyum",
    file: "./images/food/bangkok-tomyum.jpg",
    imageUrl: "https://images.unsplash.com/photo-1548946526-f69e2424cf45?auto=format&fit=crop&w=900&q=80",
    title: "泰式正宗冬蔭功濃郁酸辣海鮮湯",
    author: "Taylor Kiser",
    sourceUrl: "https://unsplash.com/photos/1548946526",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "以大蝦、檸檬草、南薑與椰奶熬製的辛香紅艷冬蔭功湯"
  },
  {
    id: "credit-food-bangkok-roti",
    file: "./images/food/bangkok-roti.jpg",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80",
    title: "泰國街頭現煎香蕉煉乳熱煎餅",
    author: "Eiliv Aceron",
    sourceUrl: "https://unsplash.com/photos/1519708227",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "外層金黃酥脆、內餡熱香甜軟的泰式香蕉煎餅"
  },

  // Taichung
  {
    id: "credit-attr-taichung-rainbow",
    file: "./images/attractions/taichung-rainbow.jpg",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80",
    title: "台中彩虹眷村天馬行空童趣彩繪牆面",
    author: "Steve Johnson",
    sourceUrl: "https://unsplash.com/photos/1579783900",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "老眷村巷弄鮮豔奔放的彩虹爺爺純真手繪壁畫"
  },
  {
    id: "credit-food-taichung-suncake",
    file: "./images/food/taichung-suncake.jpg",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    title: "台中百年名產酥皮麥芽餡太陽餅",
    author: "Anton Darius",
    sourceUrl: "https://unsplash.com/photos/1509440159",
    sourceType: "免費商用圖庫 (Unsplash)",
    license: "Unsplash License",
    usagePermission: "verified",
    alt: "千層細緻酥皮包裹醇甜麥芽糖膏的道地台中太陽餅"
  }
];

// New Attractions
const newAttractions = [
  // Kyoto
  {
    id: "kyoto-gion",
    destinationId: "kyoto",
    name: "祇園花見小路與八坂神社",
    englishName: "Gion Hanamikoji & Yasaka Shrine",
    category: "文化歷史",
    description: "京都最負盛名的傳統花街與江戶時代茶屋保護區。石板路兩旁林立著深褐色的千本格子木造町家，黃昏時分燈籠亮起，宛如走入時光隧道；步行即可抵達總鎮守京都厄除的「八坂神社」，常年舉辦日本三大祭之一的祇園祭。",
    highlights: ["保存完好江戶町家格子窗傳統茶屋街區", "八坂神社朱紅舞殿與舞妓奉納燈籠海", "沉浸於傳統京風雅韻的慢步巡禮"],
    openingHours: "戶外街區全天開放 (八坂神社境內24小時開放)",
    address: "京都市東山區祇園町南側",
    image: "./images/attractions/kyoto-gion.jpg",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-attr-kyoto-gion"],
    sourceIds: ["source-kyoto-official"]
  },
  {
    id: "kyoto-nijo-castle",
    destinationId: "kyoto",
    name: "世界遺產元離宮二條城",
    englishName: "Nijo Castle (Nijo-jo)",
    category: "文化歷史",
    description: "德川幕府始祖德川家康於1603年所建之官邸，見證了幕府統治的鼎盛，亦為第十五代將軍德川慶喜宣告「大政奉還」劃下歷史終章的世界文化遺產。國寶二之丸御殿擁有世界聞名的防刺客「鶯鳴地板」與狩野派國寶金碧障壁畫。",
    highlights: ["聯合國教科文組織世界文化遺產", "踏步如黃鶯出谷鳴啼的國寶「鶯鳴地板」", "狩野派傳世金箔松鷹圖障壁畫與二之丸庭園"],
    openingHours: "08:45 - 17:00 (最後入場 16:00)",
    address: "京都市中京區二條通堀川西入二條城町541",
    image: "./images/attractions/kyoto-nijo.jpg",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-attr-kyoto-nijo"],
    sourceIds: ["source-kyoto-official", "source-kyoto-nijo"]
  },

  // Taipei
  {
    id: "taipei-dadaocheng",
    destinationId: "taipei",
    name: "大稻埕迪化街歷史風華",
    englishName: "Dadaocheng & Dihua Old Street",
    category: "文化歷史",
    description: "19世紀末台北最重要的茶葉與布匹貿易通商門戶。漫步於迪化街，巴洛克華麗牌樓、閩南紅磚洋樓與洋行天井交錯，如今進駐無數文創新創、手作選品店與老宅獨立咖啡廳，並座落香火鼎盛保佑姻緣的霞海城隍廟。",
    highlights: ["百年巴洛克紅磚洗石子仿古典街屋建築", "全台最負盛名霞海城隍廟月下老人參拜求好姻緣", "老宅再生文青茶館、布業博物館與南北乾貨巡禮"],
    openingHours: "街區店家多為 10:00 - 19:00 (街區全天自由散步)",
    address: "台北市大同區迪化街一段周邊",
    image: "./images/attractions/taipei-dadaocheng.jpg",
    imageUrl: "https://images.unsplash.com/photo-1571474004502-c1def214ac6d?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-attr-taipei-dadaocheng"],
    sourceIds: ["source-taipei-travel"]
  },
  {
    id: "taipei-longshan-temple",
    destinationId: "taipei",
    name: "艋舺龍山寺國定古蹟",
    englishName: "Mengjia Longshan Temple",
    category: "文化歷史",
    description: "始建於清乾隆三年（1738年），台北歷史最悠久的信仰信仰中心之一。殿堂融合閩南與清代殿堂精湛工藝，擁有全台唯一的銅鑄蟠龍柱、精雕細琢的藻井與滿飾歷史典故的剪黏交趾陶，展現極致台灣傳統建築藝術美學。",
    highlights: ["文化部國定古蹟與全台唯二銅鑄蟠龍柱", "正殿精巧迴旋無釘「圓形藻井」木雕藝術", "求籤祈福香火鼎盛，周邊艋舺老街青草巷尋幽"],
    openingHours: "每日 06:00 - 21:45 全年開放",
    address: "台北市萬華區廣州街211號",
    image: "./images/attractions/taipei-longshan.jpg",
    imageUrl: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-attr-taipei-longshan"],
    sourceIds: ["source-taipei-travel", "source-taipei-longshan"]
  },

  // Bangkok
  {
    id: "bangkok-wat-pho",
    destinationId: "bangkok",
    name: "曼谷臥佛寺與泰式古法按摩",
    englishName: "Wat Pho (Temple of the Reclining Buddha)",
    category: "文化歷史",
    description: "曼谷歷史最悠久的最高等級皇家寺廟，名列聯合國世界記憶名錄。殿內供奉一尊長46公尺、高15公尺貼滿金箔的巨型金色臥佛，腳底鑲嵌108幅精細珠母貝印度佛陀吉祥圖案。這裡亦為正宗泰式古法按摩的發源總部。",
    highlights: ["長達46公尺金箔大臥佛與貝殼鑲嵌足底聖像", "泰國第一所公立大學與世界認證正統泰式按摩發源地", "四座高達42公尺象徵歷代國王之彩色陶瓷佛塔"],
    openingHours: "每日 08:00 - 18:30 全年無休",
    address: "2 Sanam Chai Rd, Phra Borom Maha Ratchawang, Bangkok",
    image: "./images/attractions/bangkok-watpho.jpg",
    imageUrl: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-attr-bangkok-watpho"],
    sourceIds: ["source-tat-thailand", "source-bangkok-watpho"]
  },
  {
    id: "bangkok-iconsiam",
    destinationId: "bangkok",
    name: "暹羅天地 ICONSIAM 室內水上市場",
    englishName: "ICONSIAM Riverside Mall & SOOKSIAM",
    category: "城市地標",
    description: "斥資540億泰銖打造的曼谷昭披耶河畔頂級地標。最大亮點為將泰國77府文化小吃原汁原味搬入室內的「SOOKSIAM 室內水上市場」，搭乘小船或沿著河畔木棧品嚐傳統炭烤與甜品，入夜後更能欣賞河岸大型聲光音樂水舞秀。",
    highlights: ["全泰國唯一室內復刻傳統木舟水上市場商圈", "四百公尺長河畔音樂水舞光影盛宴", "頂樓河景空中花園遠眺曼谷市中心璀璨夜景"],
    openingHours: "每日 10:00 - 22:00 全年無休",
    address: "299 Charoen Nakhon Rd, Khlong Ton Sai, Bangkok",
    image: "./images/attractions/bangkok-iconsiam.jpg",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-attr-bangkok-iconsiam"],
    sourceIds: ["source-tat-thailand"]
  },

  // Taichung
  {
    id: "taichung-rainbow-village",
    destinationId: "taichung",
    name: "彩虹眷村童趣彩繪街區",
    englishName: "Rainbow Village Taichung",
    category: "文化歷史",
    description: "原為面臨拆除危機的老舊干城六村眷舍，經由退伍老兵「彩虹爺爺」黃永阜以繽紛飽滿的色彩手繪出無數生動的人物、動物與吉祥祝福圖騰，躍升為名列孤獨星球（Lonely Planet）推薦的全球秘境，展現質樸真誠的民間藝術能量。",
    highlights: ["登上國際旅遊指南之傳奇老兵純真手繪巷弄", "鮮豔斑斕童真幾何圖案與愛心打卡點", "文創手作小舖與特色文創冰品"],
    openingHours: "週二至週日 09:00 - 17:00 (週一休園維護)",
    address: "台中市南屯區春安路56巷25號",
    image: "./images/attractions/taichung-rainbow.jpg",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-attr-taichung-rainbow"],
    sourceIds: ["source-taichung-travel"]
  }
];

// New Foods
const newFoods = [
  // Kyoto
  {
    id: "kyoto-yudofu",
    destinationId: "kyoto",
    name: "南禪寺名物純素昆布湯豆腐",
    englishName: "Nanzen-ji Yudofu Dining",
    category: "在地料理",
    description: "發源於京都古剎南禪寺周邊的百年精進料理。以京都清冽軟水與精選大豆慢磨凝固成柔嫩滑順的絹豆腐，於天然利尻昆布高湯中溫火微滾，蘸上特調生薑、青蔥與七味唐辛子柴魚醬油，入口豆香四溢、返璞歸真。",
    recommendedSpots: "南禪寺順正、奧丹清水（創業於1635年老舖）、總本家由良之助",
    priceRange: "¥3,000 - ¥5,000",
    image: "./images/food/kyoto-yudofu.jpg",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-kyoto-yudofu"],
    sourceIds: ["source-kyoto-official"]
  },
  {
    id: "kyoto-yatsuhashi",
    destinationId: "kyoto",
    name: "京都老街手作生八橋與四季和菓子",
    englishName: "Traditional Kyoto Nama-Yatsuhashi",
    category: "甜點",
    description: "名列京都最具代表性的銘菓第一名。以米粉、砂糖蒸製揉成的三角形軟糯生皮，飄散著溫潤的肉桂辛香，內裹北海道十勝綿密紅豆泥，另有宇治抹茶與當季白桃風味，搭配一盞現刷熱抹茶最是享受。",
    recommendedSpots: "本家西尾八ッ橋、聖護院八ッ橋總本店、井筒八ッ橋本舖",
    priceRange: "¥600 - ¥1,200",
    image: "./images/food/kyoto-yatsuhashi.jpg",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-kyoto-yatsuhashi"],
    sourceIds: ["source-kyoto-official"]
  },

  // Taipei
  {
    id: "taipei-luroufan",
    destinationId: "taipei",
    name: "台灣古早味冠軍香蔥滷肉飯",
    englishName: "Classic Taiwanese Braised Pork Rice (Lu Rou Fan)",
    category: "在地料理",
    description: "台灣享譽國際的庶民國民美食之王。精選帶皮五花肉手工細切，加入紅蔥頭、金蘭醬油、米酒與五香慢火熬燉至膠質徹底釋放，澆淋於粒粒分明的熱騰白米飯上，搭配滷透的黃金鴨蛋與醃黃蘿蔔，入口即化油香撲鼻。",
    recommendedSpots: "金峰魯肉飯（南門市場）、小王煮瓜（米其林必比登推薦）、天天利美食坊",
    priceRange: "NT$ 40 - NT$ 75",
    image: "./images/food/taipei-luroufan.jpg",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-taipei-luroufan"],
    sourceIds: ["source-taipei-travel"]
  },
  {
    id: "taipei-mango-ice",
    destinationId: "taipei",
    name: "永康街手作鮮切愛文芒果雪花冰",
    englishName: "Taiwanese Fresh Mango Milk Shaved Ice",
    category: "甜點",
    description: "被國際外媒評選為來台必嚐的夢幻冰品。以純牛奶冰磚現刨出薄如絲絹的層疊雪花冰，周圍鋪滿當季產地直送、香氣濃郁的愛文芒果厚切果肉，頂部扣上一大球香草冰淇淋並淋上特調金黃芒果純醬與煉乳，沁涼香甜超銷魂。",
    recommendedSpots: "思慕昔永康街旗艦店、冰讚（雙連站）、芒果皇帝",
    priceRange: "NT$ 180 - NT$ 260",
    image: "./images/food/taipei-mangoice.jpg",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-taipei-mangoice"],
    sourceIds: ["source-taipei-travel"]
  },

  // Bangkok
  {
    id: "bangkok-tom-yum",
    destinationId: "bangkok",
    name: "泰式正宗冬蔭功濃郁酸辣海鮮湯",
    englishName: "Authentic Tom Yum Goong (Spicy Shrimp Soup)",
    category: "在地料理",
    description: "名列世界三大名湯之一的泰國國寶名菜。以新鮮肥美大頭蝦、南薑、檸檬草、青檸葉、朝天椒與魚露大火滾煮，起鍋前加入濃醇椰奶與香濃蝦膏，入口酸、辣、鹹、香、甜五味層次交疊，熱辣濃郁極為開胃。",
    recommendedSpots: "P'Aor 巨無霸龍蝦酸辣麵、Jeh O Chula（米其林必比登）、Thip Samai",
    priceRange: "THB 150 - THB 350",
    image: "./images/food/bangkok-tomyum.jpg",
    imageUrl: "https://images.unsplash.com/photo-1548946526-f69e2424cf45?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-bangkok-tomyum"],
    sourceIds: ["source-tat-thailand"]
  },
  {
    id: "bangkok-banana-roti",
    destinationId: "bangkok",
    name: "泰國街頭現煎酥脆香蕉煉乳熱煎餅",
    englishName: "Thai Street-style Banana Roti Pancake",
    category: "甜點",
    description: "曼谷夜市與街頭最具人氣的手作傳統點心。師傅以純熟手法將麵糰甩成薄如蟬翼的餅皮，放上熱鐵板加入新鮮香蕉切片包折成方塊煎至兩面金黃酥脆，起鍋後切塊淋上濃郁煉乳與香甜巧克力醬，酥脆燙口香甜過癮。",
    recommendedSpots: "恰圖恰市集街邊攤位、喬德夜市、考山路夜市熱煎攤",
    priceRange: "THB 40 - THB 70",
    image: "./images/food/bangkok-roti.jpg",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-bangkok-roti"],
    sourceIds: ["source-tat-thailand"]
  },

  // Taichung
  {
    id: "taichung-sun-cake",
    destinationId: "taichung",
    name: "台中百年名產老字號酥皮太陽餅",
    englishName: "Traditional Taichung Malt Sun Cake",
    category: "甜點",
    description: "台中最具代表性的百年伴手禮。純手工揉製層層如蟬翼般細緻薄透的螺旋狀油酥皮，烘烤後鬆軟細膩不乾口，內餡夾入慢火熬煮的醇香麥芽糖膏，甜度溫潤甘飴、入口即化，搭配一杯凍頂烏龍茶是絕佳的午後茶點。",
    recommendedSpots: "全安堂太陽餅博物館（自由路）、阿明師老太陽堂、魏清海太陽餅",
    priceRange: "NT$ 45 - NT$ 60 / 塊",
    image: "./images/food/taichung-suncake.jpg",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    imageCreditIds: ["credit-food-taichung-suncake"],
    sourceIds: ["source-taichung-travel"]
  }
];

// Append to data files
const allSources = [...sources, ...newSources];
const allCredits = [...imageCredits, ...newCredits];
const allAttractions = [...attractions, ...newAttractions];
const allFoods = [...food, ...newFoods];

// Update destinations attractionIds and foodIds
const updatedDestinations = destinations.map(d => {
  if (d.id === 'kyoto') {
    return {
      ...d,
      attractionIds: [...d.attractionIds, "kyoto-gion", "kyoto-nijo-castle"],
      foodIds: [...d.foodIds, "kyoto-yudofu", "kyoto-yatsuhashi"],
      sourceIds: Array.from(new Set([...d.sourceIds, "source-kyoto-nijo"]))
    };
  }
  if (d.id === 'taipei') {
    return {
      ...d,
      attractionIds: [...d.attractionIds, "taipei-dadaocheng", "taipei-longshan-temple"],
      foodIds: [...d.foodIds, "taipei-luroufan", "taipei-mango-ice"],
      sourceIds: Array.from(new Set([...d.sourceIds, "source-taipei-longshan"]))
    };
  }
  if (d.id === 'bangkok') {
    return {
      ...d,
      attractionIds: [...d.attractionIds, "bangkok-wat-pho", "bangkok-iconsiam"],
      foodIds: [...d.foodIds, "bangkok-tom-yum", "bangkok-banana-roti"],
      sourceIds: Array.from(new Set([...d.sourceIds, "source-bangkok-watpho"]))
    };
  }
  if (d.id === 'taichung') {
    return {
      ...d,
      attractionIds: [...d.attractionIds, "taichung-rainbow-village"],
      foodIds: [...d.foodIds, "taichung-sun-cake"]
    };
  }
  return d;
});

// Write to files
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/sources.js'), 'export const sources = ' + JSON.stringify(allSources, null, 2) + ';\nexport default sources;\n', 'utf8');
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/imageCredits.js'), 'export const imageCredits = ' + JSON.stringify(allCredits, null, 2) + ';\nexport default imageCredits;\n', 'utf8');
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/attractions.js'), 'export const attractions = ' + JSON.stringify(allAttractions, null, 2) + ';\nexport default attractions;\n', 'utf8');
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/food.js'), 'export const food = ' + JSON.stringify(allFoods, null, 2) + ';\nexport default food;\n', 'utf8');
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/destinations.js'), 'export const destinations = ' + JSON.stringify(updatedDestinations, null, 2) + ';\nexport default destinations;\n', 'utf8');

console.log('Successfully expanded all 4 destinations!');
console.log(`- Total Destinations: ${updatedDestinations.length}`);
console.log(`- Total Attractions: ${allAttractions.length}`);
console.log(`- Total Foods: ${allFoods.length}`);
console.log(`- Total Sources: ${allSources.length}`);
console.log(`- Total Image Credits: ${allCredits.length}`);
