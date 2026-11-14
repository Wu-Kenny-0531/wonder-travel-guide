import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import AttractionCard from '../components/AttractionCard';
import FoodCard from '../components/FoodCard';
import destinations from '../data/destinations';
import attractions from '../data/attractions';
import food from '../data/food';

export function Home() {
  // 選取各城市的代表景點進行首頁焦點展示
  const spotlightAttractions = attractions.slice(0, 3);
  // 選取代表美食進行焦點展示
  const spotlightFood = food.slice(0, 3);

  return (
    <div className="home-page">
      {/* 主視覺 Hero 區域 */}
      <Hero />

      {/* 核心特色三大承諾 */}
      <section style={{ padding: '48px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '28px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '2rem', padding: '12px', borderRadius: '16px', backgroundColor: 'var(--color-primary-light)' }}>
                📖
              </div>
              <div>
                <h4 style={{ marginBottom: '6px' }}>100% 官方資料查證</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  嚴格引用政府觀光局與寺廟景點官方公告，開放時間、交通指南真實精確不捏造。
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '2rem', padding: '12px', borderRadius: '16px', backgroundColor: 'var(--color-teal-light)' }}>
                🗺️
              </div>
              <div>
                <h4 style={{ marginBottom: '6px' }}>自由行精選行程推薦</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  針對初訪與深度旅人精心規劃三日遊經典散步動線，省去熬夜爬文排行程的煩惱。
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '2rem', padding: '12px', borderRadius: '16px', backgroundColor: 'var(--color-secondary-light)' }}>
                ⭐
              </div>
              <div>
                <h4 style={{ marginBottom: '6px' }}>一鍵收藏與離線保存</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  採用 LocalStorage 本地儲存技術，喜歡的城市與私房景點隨手收藏，跨頁隨時檢閱。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 熱門推薦目的地 */}
      <section style={{ padding: '64px 0 72px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">POPULAR DESTINATIONS</span>
            <h2>熱門精選城市</h2>
            <p>
              精心挑選亞洲最具特色之自由行勝地，沉浸於古都文化、繁華都會與南洋風情。
            </p>
          </div>

          <div className="destination-grid">
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/explore" className="btn btn-primary" style={{ padding: '12px 32px', fontSize: '1.05rem' }}>
              探索全部目的地與特色篩選
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 熱門必訪景點焦點 */}
      <section style={{ padding: '64px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">TOP ATTRACTIONS</span>
            <h2>不可錯過的標誌性名勝</h2>
            <p>
              親身走進世界文化遺產與壯麗自然風光，隨時點擊愛心收藏進您的旅行口袋名單。
            </p>
          </div>

          <div className="attraction-grid">
            {spotlightAttractions.map((attr) => (
              <AttractionCard key={attr.id} attraction={attr} />
            ))}
          </div>
        </div>
      </section>

      {/* 在地風味美食精選 */}
      <section style={{ padding: '64px 0 72px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">LOCAL TASTE</span>
            <h2>旅途中的味蕾盛宴</h2>
            <p>
              舌尖上的文化巡禮，品嚐每一座城市最道地、最具代表性的美味靈魂。
            </p>
          </div>

          <div className="food-grid">
            {spotlightFood.map((item) => (
              <FoodCard key={item.id} foodItem={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 號召行動 (CTA Banner) */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, var(--color-primary) 0%, #FF8A65 100%)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '14px' }}>
            準備好開啟下一趟驚奇之旅了嗎？
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.15rem', maxWidth: '640px', margin: '0 auto 28px' }}>
            點擊進入探索頁面，依照國家與主題自由搜尋，打造專屬於您的自由行回憶！
          </p>
          <Link to="/explore" className="btn" style={{ backgroundColor: '#FFFFFF', color: 'var(--color-primary)', fontWeight: 800, padding: '12px 34px', fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
            立即開始探索城市 ➜
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
