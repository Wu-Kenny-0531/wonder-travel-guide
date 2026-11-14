/**
 * destinations.js - GoWonder Travel Guide 目的地資料清單
 * 依據 AGENTS.md 規範，每個目的地必須包含 id, name, englishName, country, countryCode,
 * description, coverImage, attractionIds, foodIds, sourceIds 等完整關聯。
 */

export const destinations = [
  {
    id: "kyoto",
    name: "京都",
    englishName: "Kyoto",
    country: "日本",
    countryCode: "JP",
    slogan: "漫步千年底蘊古都，細品禪意庭園與和風四季之美",
    description: "京都作為日本過去逾千年的古都，擁有超過兩千座歷史神社與佛寺，其中十七處被聯合國教科文組織列為世界文化遺產。漫步於花見小路古町家木造建築間、穿梭伏見稻荷千本鳥居長廊，或是於嵐山清幽竹林聆聽風吟，四季分明的春櫻、秋楓與冬雪，無時無刻不散發著寧靜深厚的文化魅力。",
    coverImage: "./images/destinations/kyoto.jpg",
    coverImageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    tags: ["世界遺產", "寺社庭園", "和服體驗", "抹茶甜點", "古町家街區"],
    travelTips: {
      bestSeason: "3月下旬至4月中旬（櫻花季）、11月中旬至12月上旬（楓紅季）氣候最為怡人景色極佳。",
      transitAdvice: "京都市內主要以京都市營巴士、地下鐵與京阪/阪急電鐵為主，建議使用 IC 卡（如 ICOCA / Suica）或巴士一日券乘車。",
      localEtiquette: "在祇園與宮川町等歷史保護街區拍攝藝妓或舞妓時請保持距離切勿阻攔，私家小巷禁止進入攝影；參拜神社洗手滌心請遵守手水舍禮儀。"
    },
    itinerary: [
      {
        day: 1,
        title: "經典世界遺產巡禮：伏見與東山名剎",
        activities: [
          "上午：清晨前往「伏見稻荷大社」，穿梭千本鳥居感受晨曦與朱紅長廊的靜謐之美。",
          "下午：漫步「音羽山清水寺」，登上懸空清水舞台俯瞰京都市景，體驗音羽瀑布甘泉祈福。",
          "傍晚：散步二年坂、三年坂古風石板路，在八坂神社前體驗熱鬧祇園黃昏街景。"
        ]
      },
      {
        day: 2,
        title: "北山禪風與西郊嵐山自然風光",
        activities: [
          "上午：搭乘巴士造訪「金閣寺（鹿苑寺）」，欣賞金色舍利殿倒映於鏡湖池中的絕景。",
          "下午：搭乘嵐電抵達嵐山，漫步「嵐山竹林小徑」與天龍寺曹源池庭園。",
          "傍晚：漫步渡月橋畔欣賞桂川水光，品嚐宇治抹茶聖代與日式和菓子茶點。"
        ]
      },
      {
        day: 3,
        title: "鴨川慢活與深度京町家美食探索",
        activities: [
          "上午：沿著哲學之道或鴨川三角洲悠閒散步，探訪隱密的文青咖啡館與老舖雜貨。",
          "下午：錦市場探索在地漬物、生麩甜品與抹茶冰淇淋，感受「京都廚房」的熱絡生氣。",
          "晚間：預約一頓正統「京懷石料理」或鴨川納涼床晚餐，為古都旅程畫下完美句點。"
        ]
      }
    ],
    attractionIds: [
      "kyoto-kinkakuji",
      "kyoto-fushimi-inari",
      "kyoto-kiyomizu-dera",
      "kyoto-arashiyama-bamboo"
    ],
    foodIds: [
      "kyoto-matcha",
      "kyoto-kaiseki"
    ],
    sourceIds: [
      "source-kyoto-official",
      "source-jnto-japan",
      "source-kyoto-kinkakuji",
      "source-kyoto-fushimi"
    ]
  },
  {
    id: "taipei",
    name: "台北",
    englishName: "Taipei",
    country: "台灣",
    countryCode: "TW",
    slogan: "摩登都會與傳統人情交會，從世界地標到巷弄夜市的美味探索",
    description: "台北是一座充滿生機且兼具國際都會與傳統在地底蘊的迷人城市。便捷的台北捷運網絡串聯起高聳入雲的台北101、珍藏中華千年藝術至寶的國立故宮博物院，以及群山環抱的象山步道；入夜後，各大觀光夜市散發誘人香氣，從牛肉麵、小籠包到珍珠奶茶，展現熱情溫暖的人情味與美食王國魅力。",
    coverImage: "./images/destinations/taipei.jpg",
    coverImageUrl: "https://images.unsplash.com/photo-1508248467877-aec1b08de376?auto=format&fit=crop&w=1200&q=80",
    tags: ["城市地標", "故宮國寶", "夜市小吃", "自然步道", "便捷捷運"],
    travelTips: {
      bestSeason: "10月至隔年4月氣候涼爽宜人，秋高氣爽非常適合戶外步道健行與城市街道漫步。",
      transitAdvice: "台北捷運（MRT）極其準時且覆蓋密集，配合 YouBike 共享單車與公車，使用悠遊卡（EasyCard）即可暢行無阻。",
      localEtiquette: "搭乘台北捷運時「黃線區內禁止飲食、嚼食口香糖」；手扶梯雖已宣導兩側皆可站立，尖峰時段多數民眾仍自發靠右站立。"
    },
    itinerary: [
      {
        day: 1,
        title: "信義天際線與象山百萬夜景之旅",
        activities: [
          "上午：搭乘捷運紅線抵達「台北101觀景台」，俯瞰全台北市區天際線並參觀金色阻尼球。",
          "下午：在信義區商圈與四四南村眷村文創園區漫步，體驗現代時尚與眷村老時光的對比。",
          "傍晚：步行前往「象山親山步道」，登上六巨石眺望台北101日落黃昏與璀璨璀璨百萬夜景。"
        ]
      },
      {
        day: 2,
        title: "國寶人文殿堂與熱鬧士林夜市美食",
        activities: [
          "上午：前往外雙溪參觀「國立故宮博物院」，細賞翠玉白菜、肉形石與毛公鼎等國寶精品。",
          "下午：返回士林官邸花園漫步，或前往大稻埕迪化街感受百年中藥南北貨與文青老宅茶館。",
          "晚間：造訪國際知名的「士林夜市」，大啖生煎包、豪大大雞排、士林大香腸與木瓜牛奶。"
        ]
      },
      {
        day: 3,
        title: "人文永康街小吃與文青松菸散策",
        activities: [
          "上午：前往永康商圈品嚐剛出爐皮薄多汁的經典小籠湯包與芒果雪花冰。",
          "下午：逛逛松山文創園區（松菸）或華山1914文創園區，體驗台灣在地設計品牌與展覽。",
          "傍晚：晚餐享用一碗濃郁熱氣騰騰的紅燒牛肉麵，為台北美食之旅劃下完美句點。"
        ]
      }
    ],
    attractionIds: [
      "taipei-101",
      "taipei-palace-museum",
      "taipei-elephant-mountain",
      "taipei-shilin-night-market"
    ],
    foodIds: [
      "taipei-beef-noodles",
      "taipei-xiaolongbao"
    ],
    sourceIds: [
      "source-taipei-travel",
      "source-npm-taiwan",
      "source-taipei-metro"
    ]
  },
  {
    id: "bangkok",
    name: "曼谷",
    englishName: "Bangkok",
    country: "泰國",
    countryCode: "TH",
    slogan: "金碧輝煌的暹羅佛寺、湄南河日落與活力澎湃的市集饗宴",
    description: "曼谷是一座充滿對比與活力的熱情南洋大都會。沿著昭披耶河畔，矗立著氣勢恢宏的曼谷大皇宮、玉佛寺與鄭王廟黎明塔，彩色陶瓷在豔陽下熠熠生輝；走入市區，穿梭於全球規模最大的恰圖恰週末市集與摩登購物商城，處處飄香的泰式炒河粉、冬陰功與甜美芒果糯米飯，讓人深深沉醉於泰式微笑的熱情魅力中。",
    coverImage: "./images/destinations/bangkok.jpg",
    coverImageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    tags: ["暹羅佛寺", "水上交通船", "週末市集", "南洋美食", "夜生活"],
    travelTips: {
      bestSeason: "11月至隔年2月為涼季，降雨少且氣溫較為舒適，是拜訪曼谷的最佳黃金旅遊期。",
      transitAdvice: "避開曼谷道路巔峰大塞車，請善用 BTS 輕軌、MRT 地鐵及昭披耶河水上公共渡輪（橘旗船），省時又經濟實惠。",
      localEtiquette: "進入大皇宮與寺廟參拜時務必穿著過膝長褲或長裙，肩部不得裸露（不可穿無袖、短褲、破洞褲或拖鞋）；尊重泰國王室與僧侶。"
    },
    itinerary: [
      {
        day: 1,
        title: "暹羅王室威嚴與湄南河經典水岸佛塔",
        activities: [
          "上午：參觀金碧輝煌的「曼谷大皇宮」與「玉佛寺」，欣賞精雕細琢的泰國國寶玉佛與史詩壁畫。",
          "下午：搭乘渡輪前往對岸「鄭王廟（Wat Arun）」，近距離欣賞鑲嵌細緻彩色陶瓷的巴普朗尖塔。",
          "傍晚：搭乘「昭披耶河水上交通船」前往 ICONSIAM 水岸購物商城，在露天露台欣賞湄南河日落與噴泉秀。"
        ]
      },
      {
        day: 2,
        title: "恰圖恰市集尋寶與道地泰式街頭小吃",
        activities: [
          "上午：搭乘 BTS 至 Mo Chit 站，探訪擁有一萬五千攤的「恰圖恰週末市集」，挖掘文創手工藝與香氛。",
          "中午：在市集內享用現炒熱騰騰的「泰式鮮蝦炒金邊粉 (Pad Thai)」配清涼香水椰子水。",
          "傍晚：返回市中心暹羅商圈（Siam Paragon / CentralWorld）享受正宗泰式精油按摩舒緩雙腿。"
        ]
      },
      {
        day: 3,
        title: "水上市場風情與夜市熱情滋味",
        activities: [
          "上午：體驗丹能莎朵或安帕瓦水上市場，看著載滿熱帶水果與熱湯麵的小木舟在水巷穿梭。",
          "下午：品嚐香甜濃郁的「經典香蘭椰汁芒果糯米飯」，口感香甜糯潤。",
          "晚間：造訪喬德夜市（Jodd Fairs）或河畔夜市（Asiatique），感受泰國摩登不夜城的澎湃熱情。"
        ]
      }
    ],
    attractionIds: [
      "bangkok-grand-palace",
      "bangkok-wat-arun",
      "bangkok-chatuchak-market",
      "bangkok-chao-phraya-river"
    ],
    foodIds: [
      "bangkok-pad-thai",
      "bangkok-mango-sticky-rice"
    ],
    sourceIds: [
      "source-tat-thailand",
      "source-bangkok-grand-palace",
      "source-bangkok-bts"
    ]
  }
];

export default destinations;
