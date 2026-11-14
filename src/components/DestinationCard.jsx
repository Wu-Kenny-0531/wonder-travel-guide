import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';

export function DestinationCard({ destination }) {
  const { isDestinationFavorite, toggleDestinationFavorite } = useFavorites();
  const isFav = isDestinationFavorite(destination.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDestinationFavorite(destination.id);
  };

  const imageSrc = destination.coverImageUrl || destination.coverImage;

  return (
    <article className="destination-card">
      {/* 封面圖片與右上角收藏按鈕 */}
      <div className="card-image-box">
        <img
          src={imageSrc}
          alt={`${destination.name} ${destination.englishName} 城市風景照`}
          loading="lazy"
          onError={(e) => {
            // 圖片錯誤時降級為漸層色彩佔位
            e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23FFD166%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%2323272F%22%20font-size%3D%2224%22%20font-family%3D%22sans-serif%22%3EGoWonder%20Travel%3C%2Ftext%3E%3C%2Fsvg%3E";
          }}
        />

        <span className="card-badge-country">
          📍 {destination.country} • {destination.countryCode}
        </span>

        <button
          className={`fav-btn ${isFav ? 'is-active' : ''}`}
          onClick={handleFavoriteClick}
          title={isFav ? "取消收藏" : "加入收藏"}
          aria-label={isFav ? `取消收藏 ${destination.name}` : `收藏 ${destination.name}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isFav ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* 內文資訊 */}
      <div className="card-content">
        <div className="card-header-title">
          <h3>{destination.name}</h3>
          <span className="card-en-name">{destination.englishName}</span>
        </div>

        <p className="card-description">
          {destination.description}
        </p>

        {destination.tags && destination.tags.length > 0 && (
          <div className="card-tags">
            {destination.tags.map((tag, idx) => (
              <span key={idx} className="tag-pill">#{tag}</span>
            ))}
          </div>
        )}

        <div className="card-footer">
          <span className="card-stats-text">
            🏛️ {destination.attractionIds ? destination.attractionIds.length : 0} 景點 • 🍜 {destination.foodIds ? destination.foodIds.length : 0} 美食
          </span>

          <Link to={`/destination/${destination.id}`} className="btn btn-outline btn-sm">
            深入探索
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
