import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* 品牌資訊區塊 */}
          <div className="footer-brand">
            <h4>Go<span>Wonder</span> Travel Guide</h4>
            <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '8px' }}>
              Explore More. Travel Better.
            </p>
            <p>
              致力於提供兼具活力美感、嚴謹資料查證與透明授權的自由行旅遊指南。為每一位熱愛探索世界的旅人，帶來真實、精彩的在地探索靈感。
            </p>
          </div>

          {/* 快速探索目的地 */}
          <div className="footer-col">
            <h5>精選目的地</h5>
            <ul className="footer-links">
              <li><Link to="/destination/kyoto">日本京都 Kyoto</Link></li>
              <li><Link to="/destination/taipei">台灣台北 Taipei</Link></li>
              <li><Link to="/destination/bangkok">泰國曼谷 Bangkok</Link></li>
              <li><Link to="/explore" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>瀏覽所有城市 →</Link></li>
            </ul>
          </div>

          {/* 網站功能連結 */}
          <div className="footer-col">
            <h5>網站導覽</h5>
            <ul className="footer-links">
              <li><Link to="/">首頁指南</Link></li>
              <li><Link to="/explore">城市探索與篩選</Link></li>
              <li><Link to="/favorites">我的旅行收藏庫</Link></li>
              <li><Link to="/sources-credits">資料來源與圖片授權</Link></li>
            </ul>
          </div>

          {/* 開發與規範聲明 */}
          <div className="footer-col">
            <h5>透明度與規範</h5>
            <ul className="footer-links">
              <li><Link to="/sources-credits">官方來源查證</Link></li>
              <li><Link to="/sources-credits">商用授權許可 (Verified)</Link></li>
              <li><span style={{ fontSize: '0.85rem', color: '#A0AEC0' }}>嚴格遵循 AGENTS.md 開發規範</span></li>
            </ul>
          </div>
        </div>

        {/* 底部版權聲明 */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GoWonder Travel Guide. All rights reserved.</p>
          <p>
            Designed with <span style={{ color: 'var(--color-primary)' }}>♥</span> for independent travelers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
