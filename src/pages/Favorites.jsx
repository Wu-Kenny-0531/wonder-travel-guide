import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import AttractionCard from '../components/AttractionCard';
import { useFavorites } from '../hooks/useFavorites';
import destinations from '../data/destinations';
import attractions from '../data/attractions';

export function Favorites() {
  const { favorites, totalCount, clearAllFavorites } = useFavorites();
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'destinations' | 'attractions'

  // 取出已收藏的目的地完整物件清單
  const favoritedDestinations = useMemo(() => {
    return destinations.filter((d) => favorites.destinations.includes(d.id));
  }, [favorites.destinations]);

  // 取出已收藏的景點完整物件清單
  const favoritedAttractions = useMemo(() => {
    return attractions.filter((a) => favorites.attractions.includes(a.id));
  }, [favorites.attractions]);

  const handleClearAll = () => {
    if (window.confirm('確定要清空所有已收藏的城市與景點嗎？')) {
      clearAllFavorites();
    }
  };

  return (
    <div className="favorites-page">
      {/* 收藏頁頂部橫幅 */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: '10px' }}>
            MY TRAVEL WISHLIST
          </span>
          <h1 className="page-banner-title">我的旅行收藏庫</h1>
          <p className="page-banner-subtitle">
            您標記喜愛的城市與私房名勝皆妥善保存在瀏覽器中。隨時回來檢閱，輕鬆組織專屬於您的自由行計畫！
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: '80px' }}>
        {totalCount > 0 ? (
          <>
            {/* 分頁過濾標籤列與清空按鈕 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <div className="favorites-tabs" style={{ margin: 0, border: 'none', padding: 0 }}>
                <button
                  className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  全部收藏 ({totalCount})
                </button>
                <button
                  className={`tab-btn ${activeTab === 'destinations' ? 'active' : ''}`}
                  onClick={() => setActiveTab('destinations')}
                >
                  收藏城市 ({favoritedDestinations.length})
                </button>
                <button
                  className={`tab-btn ${activeTab === 'attractions' ? 'active' : ''}`}
                  onClick={() => setActiveTab('attractions')}
                >
                  收藏景點 ({favoritedAttractions.length})
                </button>
              </div>

              <button
                onClick={handleClearAll}
                className="btn btn-secondary btn-sm"
                style={{ color: '#E53E3E' }}
              >
                🗑️ 清空全部收藏
              </button>
            </div>

            {/* 收藏城市區塊 */}
            {(activeTab === 'all' || activeTab === 'destinations') && favoritedDestinations.length > 0 && (
              <section style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>📍 已收藏的目的地 ({favoritedDestinations.length})</h3>
                </div>
                <div className="destination-grid">
                  {favoritedDestinations.map((dest) => (
                    <DestinationCard key={dest.id} destination={dest} />
                  ))}
                </div>
              </section>
            )}

            {/* 收藏景點區塊 */}
            {(activeTab === 'all' || activeTab === 'attractions') && favoritedAttractions.length > 0 && (
              <section style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>🏛️ 已收藏的精彩名勝 ({favoritedAttractions.length})</h3>
                </div>
                <div className="attraction-grid">
                  {favoritedAttractions.map((attr) => (
                    <AttractionCard key={attr.id} attraction={attr} />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          /* 沒有任何收藏時的友善空白狀態引導 */
          <div className="empty-state">
            <div className="empty-icon">
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3>目前尚未有任何收藏</h3>
            <p>
              在探索城市或景點卡片時，點擊愛心圖示即可將喜愛的地點保存至此，重新整理或重開網頁也不會遺失！
            </p>
            <Link to="/explore" className="btn btn-primary" style={{ padding: '12px 28px' }}>
              立即去探索城市與景點 ➜
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
