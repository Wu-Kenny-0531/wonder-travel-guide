/**
 * sources.js - GoWonder Travel Guide 文字資料來源清單
 * 依據 AGENTS.md 規範，所有資料必須提供清晰可追溯的官方與權威來源。
 */

export const sources = [
  // 日本京都 Kyoto 來源
  {
    id: "source-kyoto-official",
    name: "京都市觀光協會官方網站 (Kyoto City Tourism Association - KYOTO CITY OFFICIAL TRAVEL GUIDE)",
    url: "https://kyoto.travel/tw/",
    type: "官方旅遊網站",
    accessedAt: "2026-11-14",
    notes: "提供京都市官方認證之景點開放時間、交通方式及四季旅遊指引。"
  },
  {
    id: "source-jnto-japan",
    name: "日本國家旅遊局 (JNTO) 日本觀光局官方網站",
    url: "https://www.japan.travel/zh-tw/",
    type: "政府觀光機關",
    accessedAt: "2026-11-14",
    notes: "日本文化遺產、神社寺院禮儀與關西鐵路交通資訊。"
  },
  {
    id: "source-kyoto-kinkakuji",
    name: "臨濟宗相國寺派 鹿苑寺（金閣寺）官方網站",
    url: "https://www.shokoku-ji.jp/kinkakuji/",
    type: "景點官方網站",
    accessedAt: "2026-11-14",
    notes: "金閣寺歷史背景、舍利殿建築特色與拜觀時間。"
  },
  {
    id: "source-kyoto-fushimi",
    name: "伏見稻荷大社官方網站 (Fushimi Inari Taisha)",
    url: "http://inari.jp/",
    type: "景點官方網站",
    accessedAt: "2026-11-14",
    notes: "千本鳥居參拜規範與全天候開放參拜指南。"
  },

  // 台灣台北 Taipei 來源
  {
    id: "source-taipei-travel",
    name: "台北旅遊網 (Taipei Travel) - 臺北市政府觀光傳播局",
    url: "https://www.travel.taipei/zh-tw",
    type: "官方旅遊網站",
    accessedAt: "2026-11-14",
    notes: "台北101、夜市商圈、象山步道交通與台北市特色美食指引。"
  },
  {
    id: "source-npm-taiwan",
    name: "國立故宮博物院官方網站 (National Palace Museum)",
    url: "https://www.npm.gov.tw/",
    type: "景點官方網站",
    accessedAt: "2026-11-14",
    notes: "常設展覽資訊、文物典藏說明與參觀須知。"
  },
  {
    id: "source-taipei-metro",
    name: "台北大眾捷運股份有限公司 (Taipei Metro)",
    url: "https://www.metro.taipei/",
    type: "官方交通網站",
    accessedAt: "2026-11-14",
    notes: "台北捷運系統路線圖、悠遊卡乘車優惠與景點接駁建議。"
  },

  // 泰國曼谷 Bangkok 來源
  {
    id: "source-tat-thailand",
    name: "泰國觀光局官方網站 (Tourism Authority of Thailand - TAT)",
    url: "https://www.wisithailand.com/",
    type: "政府觀光機關",
    accessedAt: "2026-11-14",
    notes: "曼谷市區旅遊政策、文化禮儀、美食介紹與旅遊安全提示。"
  },
  {
    id: "source-bangkok-grand-palace",
    name: "泰國王室宮務處 曼谷大皇宮參觀指引 (The Grand Palace Bangkok - Bureau of the Royal Household)",
    url: "https://www.royalgrandpalace.th/en/home",
    type: "景點官方網站",
    accessedAt: "2026-11-14",
    notes: "大皇宮與玉佛寺服裝規定、門票售票規範及開放日期。"
  },
  {
    id: "source-bangkok-bts",
    name: "曼谷大眾運輸系統 (BTS Skytrain Official)",
    url: "https://www.bts.co.th/eng/",
    type: "官方交通網站",
    accessedAt: "2026-11-14",
    notes: "BTS 輕軌系統路線、悠遊兔卡票價及恰圖恰週末市集站點說明。"
  },

  // 台灣台中 Taichung 來源
  {
    id: "source-taichung-travel",
    name: "大玩台中 臺中觀光旅遊網 (Taichung Tourism - 臺中市政府觀光旅遊局)",
    url: "https://travel.taichung.gov.tw/",
    type: "官方旅遊網站",
    accessedAt: "2026-11-14",
    notes: "臺中市政府官方旅遊景點、審計新村文創聚落與逢甲夜市旅遊指引。"
  },
  {
    id: "source-taichung-theater",
    name: "臺中國家歌劇院官方網站 (National Taichung Theater)",
    url: "https://www.npac-ntt.org/",
    type: "景點官方網站",
    accessedAt: "2026-11-14",
    notes: "伊東豊雄曲牆美學建築、開館時間與參觀預約導覽指南。"
  },
  {
    id: "source-taichung-gaomei",
    name: "高美野生動物保護區生態網 (Gaomei Wetland - 臺中市政府農業局)",
    url: "https://www.gaomei.com.tw/",
    type: "政府觀光機關",
    accessedAt: "2026-11-14",
    notes: "高美濕地潮汐時間表、木棧道開放時間與生態保育規範。"
  },

  // 美國紐約 New York 來源
  {
    id: "source-nyc-tourism",
    name: "NYC Tourism + Conventions 紐約市官方觀光局",
    url: "https://www.nyctourism.com/",
    type: "官方旅遊網站",
    accessedAt: "2026-11-14",
    notes: "紐約市五大行政區官方景點、當季展演活動、百老匯與地鐵交通導引。"
  },
  {
    id: "source-nps-statue",
    name: "美國國家公園管理局 自由女神像國家紀念區 (National Park Service - Statue of Liberty)",
    url: "https://www.nps.gov/stli/",
    type: "政府觀光機關",
    accessedAt: "2026-11-14",
    notes: "自由女神像參觀規定、愛麗絲島移民博物館渡輪營運與登冠安檢規定。"
  },
  {
    id: "source-centralpark-nyc",
    name: "中央公園保護協會官方網站 (Central Park Conservancy)",
    url: "https://www.centralparknyc.org/",
    type: "景點官方網站",
    accessedAt: "2026-11-14",
    notes: "中央公園綿延步道地圖、綿羊草原開放季節與各季特色導覽指南。"
  }
];

export default sources;
