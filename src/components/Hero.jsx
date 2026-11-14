import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* 左側文案資訊 */}
          <div className="hero-content">
            <div className="hero-badge">
              <span>✈️</span>
              <span>2026 自由行全新旅遊指南</span>
            </div>

            <h1 className="hero-title">
              發現城市精彩，<br />
              <span className="highlight">出發，遇見不一樣的風景！</span>
            </h1>

            <p className="hero-description">
              <strong>GoWonder Travel Guide</strong> 結合活潑明亮的旅遊雜誌風格與嚴謹查證的官方資訊。無論是古都京都的禪風古寺、台北夜市的熱騰鑊氣、曼谷湄南河畔的金碧佛塔，還是台中歌劇院與文創眷村的慢活藝術，帶你輕鬆收藏專屬的旅行地圖。
            </p>

            <div className="hero-actions">
              <Link to="/explore" className="btn btn-primary">
                開始探索目的地
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/favorites" className="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                我的收藏庫
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">精選熱門城市</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">16+</span>
                <span className="stat-label">必訪指標景點</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">官方嚴謹查證</span>
              </div>
            </div>
          </div>

          {/* 右側視覺焦點圖 */}
          <div className="hero-visual">
            <div className="hero-card-stack">
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80"
                alt="日本京都古街八坂塔日落景色"
                loading="eager"
              />
              <div className="hero-card-overlay">
                <span className="badge badge-secondary" style={{ marginBottom: '8px' }}>
                  本季推薦 • 日本京都
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem' }}>
                  穿梭於千本鳥居與嵐山竹林的東洋詩篇
                </h3>
              </div>
            </div>

            <div className="hero-floating-pill">
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-teal)' }} />
              <span>隨點即藏 • 離線隨身好幫手</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
