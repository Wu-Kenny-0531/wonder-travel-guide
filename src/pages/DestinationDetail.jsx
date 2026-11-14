import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import AttractionCard from '../components/AttractionCard';
import FoodCard from '../components/FoodCard';
import { useFavorites } from '../hooks/useFavorites';
import destinations from '../data/destinations';
import attractions from '../data/attractions';
import food from '../data/food';
import sources from '../data/sources';

export function DestinationDetail() {
  const { id } = useParams();
  const { isDestinationFavorite, toggleDestinationFavorite } = useFavorites();
  const [activeAttractionCategory, setActiveAttractionCategory] = useState('all');

  // 尋找當前城市資料
  const destination = useMemo(() => {
    return destinations.find((d) => d.id === id);
  }, [id]);

  // 若找不到該城市，呈現友善提示
  if (!destination) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div className="empty-state">
          <div className="empty-icon" style={{ backgroundColor: 'var(--color-primary-light)' }}>
            ⚠️
          </div>
          <h2>找不到此目的地的詳細旅遊資訊</h2>
          <p>您尋找的城市代碼「{id}」不存在或尚未建置。</p>
          <Link to="/explore" className="btn btn-primary">
            返回目的地探索清單
          </Link>
        </div>
      </div>
    );
  }

  const isFav = isDestinationFavorite(destination.id);

  // 關聯景點資料
  const destinationAttractions = useMemo(() => {
    return attractions.filter((item) =>
      item.destinationId === destination.id || (destination.attractionIds && destination.attractionIds.includes(item.id))
    );
  }, [destination]);

  // 動態取得景點所有分類
  const attractionCategories = useMemo(() => {
    const cats = new Set(destinationAttractions.map((a) => a.category).filter(Boolean));
    return Array.from(cats);
  }, [destinationAttractions]);

  // 根據分類篩選景點
  const filteredAttractions = useMemo(() => {
    if (activeAttractionCategory === 'all') return destinationAttractions;
    return destinationAttractions.filter((a) => a.category === activeAttractionCategory);
  }, [destinationAttractions, activeAttractionCategory]);

  // 關聯特色美食資料
  const destinationFood = useMemo(() => {
    return food.filter((item) =>
      item.destinationId === destination.id || (destination.foodIds && destination.foodIds.includes(item.id))
    );
  }, [destination]);

  // 關聯文字資料來源
  const destinationSources = useMemo(() => {
    if (!destination.sourceIds) return [];
    return sources.filter((s) => destination.sourceIds.includes(s.id));
  }, [destination]);

  const coverUrl = destination.coverImageUrl || destination.coverImage;

  return (
    <div className="destination-detail-page">
      {/* 城市大圖頂部視覺 (Hero) */}
      <section className="detail-hero">
        <img
          src={coverUrl}
          alt={`${destination.name} ${destination.englishName} 城市主視覺`}
          className="detail-hero-bg"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="detail-hero-overlay" />

        <div className="container detail-hero-content">
          <Link to="/explore" className="detail-back-link">
            ← 返回城市列表
          </Link>

          <div className="detail-header-row">
            <div className="detail-title-group">
              <span className="badge badge-secondary" style={{ marginBottom: '10px' }}>
                📍 {destination.country} • {destination.countryCode}
              </span>
              <h1>{destination.name}</h1>
              <span className="en-title">{destination.englishName}</span>
              {destination.slogan && (
                <p className="detail-slogan">{destination.slogan}</p>
              )}
            </div>

            {/* 收藏按鈕 */}
            <div>
              <button
                className={`btn ${isFav ? 'btn-secondary' : 'btn-primary'}`}
                onClick={() => toggleDestinationFavorite(destination.id)}
                style={{ padding: '12px 24px', fontSize: '1rem' }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={isFav ? "#E53E3E" : "none"}
                  stroke={isFav ? "#E53E3E" : "currentColor"}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {isFav ? '已收藏此城市' : '收藏此城市'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 快速資訊列 */}
      <div className="container">
        <div className="detail-quick-stats">
          <div className="quick-stat-box">
            <div className="quick-stat-icon orange">🏛️</div>
            <div className="quick-stat-info">
              <h5>精選景點</h5>
              <p>{destinationAttractions.length} 處必訪名勝</p>
            </div>
          </div>

          <div className="quick-stat-box">
            <div className="quick-stat-icon teal">🍜</div>
            <div className="quick-stat-info">
              <h5>在地美食</h5>
              <p>{destinationFood.length} 款經典風味</p>
            </div>
          </div>

          <div className="quick-stat-box">
            <div className="quick-stat-icon blue">📅</div>
            <div className="quick-stat-info">
              <h5>推薦行程</h5>
              <p>{destination.itinerary ? `${destination.itinerary.length} 日精選建議` : '經典自由行'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '80px' }}>
        {/* 城市簡介與自由行小叮嚀 */}
        <section className="detail-section">
          <h2 className="detail-section-title">
            <span className="section-icon">🏙️</span>
            關於 {destination.name}
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text-body)', marginBottom: '28px' }}>
            {destination.description}
          </p>

          {/* 旅遊實用小叮嚀 */}
          {destination.travelTips && (
            <div className="travel-tips-card">
              <h4 style={{ color: 'var(--color-text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                💡 自由行行前實用指南
              </h4>

              {destination.travelTips.bestSeason && (
                <div className="tip-block">
                  <div className="tip-block-title">🌸 最佳旅行時節</div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', margin: 0 }}>
                    {destination.travelTips.bestSeason}
                  </p>
                </div>
              )}

              {destination.travelTips.transitAdvice && (
                <div className="tip-block">
                  <div className="tip-block-title">🚇 當地交通建議</div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', margin: 0 }}>
                    {destination.travelTips.transitAdvice}
                  </p>
                </div>
              )}

              {destination.travelTips.localEtiquette && (
                <div className="tip-block">
                  <div className="tip-block-title">⛩️ 在地禮儀與參拜規範</div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', margin: 0 }}>
                    {destination.travelTips.localEtiquette}
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 推薦景點區塊 */}
        <section className="detail-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <h2 className="detail-section-title" style={{ margin: 0 }}>
              <span className="section-icon">🏯</span>
              推薦必訪景點 ({destinationAttractions.length})
            </h2>

            {/* 景點分類篩選 */}
            {attractionCategories.length > 0 && (
              <div className="filter-pills">
                <button
                  className={`filter-pill ${activeAttractionCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveAttractionCategory('all')}
                >
                  全部分類
                </button>
                {attractionCategories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-pill ${activeAttractionCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveAttractionCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="attraction-grid">
            {filteredAttractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </section>

        {/* 當地美食區塊 */}
        <section className="detail-section">
          <h2 className="detail-section-title">
            <span className="section-icon">🍲</span>
            當地特色美食推薦 ({destinationFood.length})
          </h2>

          <div className="food-grid">
            {destinationFood.map((foodItem) => (
              <FoodCard key={foodItem.id} foodItem={foodItem} />
            ))}
          </div>
        </section>

        {/* 推薦行程安排 (Itinerary) */}
        {destination.itinerary && destination.itinerary.length > 0 && (
          <section className="detail-section">
            <h2 className="detail-section-title">
              <span className="section-icon">🗺️</span>
              {destination.name} 經典三日遊行程靈感
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
              由專業旅人參考景點鄰近動線安排之實用行程，您可根據個人偏好自由彈性增減步調。
            </p>

            <div className="itinerary-list">
              {destination.itinerary.map((plan) => (
                <div key={plan.day} className="itinerary-card">
                  <span className="itinerary-day-badge">Day {plan.day}</span>
                  <h3 className="itinerary-title">{plan.title}</h3>
                  <ul className="itinerary-activities">
                    {plan.activities.map((act, i) => (
                      <li key={i}>{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 相關資料來源與圖片授權檢閱 */}
        <section className="detail-section" style={{ borderBottom: 'none' }}>
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
            <h4 style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🔍</span> 本頁資訊來源與圖片版權備註
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
              GoWonder Travel Guide 遵守嚴謹資訊透明原則。本頁文字內容取材自以下官方機關，圖片皆具備正式公開展示授權：
            </p>

            <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '16px' }}>
              {destinationSources.map((source) => (
                <li key={source.id} style={{ fontSize: '0.88rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="badge badge-verified" style={{ fontSize: '0.7rem' }}>{source.type}</span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}
                  >
                    {source.name} ↗
                  </a>
                </li>
              ))}
            </ul>

            <Link to="/sources-credits" style={{ fontSize: '0.88rem', color: 'var(--color-teal)', fontWeight: 700 }}>
              查看全站所有資料來源與高解析圖片作者授權清單 →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DestinationDetail;
