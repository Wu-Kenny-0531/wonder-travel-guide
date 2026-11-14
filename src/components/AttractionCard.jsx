import React from 'react';
import { useFavorites } from '../hooks/useFavorites';

export function AttractionCard({ attraction }) {
  const { isAttractionFavorite, toggleAttractionFavorite } = useFavorites();
  const isFav = isAttractionFavorite(attraction.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleAttractionFavorite(attraction.id);
  };

  const imageSrc = attraction.imageUrl || attraction.image;

  return (
    <article className="attraction-card">
      <div className="attraction-image-box">
        <img
          src={imageSrc}
          alt={`${attraction.name} ${attraction.englishName}`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%2306B6A4%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%23FFF8ED%22%20font-size%3D%2222%22%20font-family%3D%22sans-serif%22%3EGoWonder%20Attraction%3C%2Ftext%3E%3C%2Fsvg%3E";
          }}
        />

        <span className="attraction-category">
          {attraction.category}
        </span>

        <button
          className={`fav-btn ${isFav ? 'is-active' : ''}`}
          onClick={handleFavoriteClick}
          title={isFav ? "從收藏移除" : "加入我的收藏"}
          aria-label={isFav ? `從收藏移除 ${attraction.name}` : `收藏景點 ${attraction.name}`}
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

      <div className="attraction-body">
        <div className="attraction-title">
          <h4>{attraction.name}</h4>
          {attraction.englishName && <span className="en-sub">{attraction.englishName}</span>}
        </div>

        <p className="attraction-desc">
          {attraction.description}
        </p>

        {attraction.highlights && attraction.highlights.length > 0 && (
          <ul className="attraction-highlights">
            {attraction.highlights.map((item, index) => (
              <li key={index}>
                <span style={{ color: 'var(--color-primary)' }}>✦</span> {item}
              </li>
            ))}
          </ul>
        )}

        <div className="attraction-meta">
          {attraction.openingHours && (
            <div className="meta-item">
              <span>🕒</span>
              <span><strong>營業時間：</strong>{attraction.openingHours}</span>
            </div>
          )}
          {attraction.address && (
            <div className="meta-item">
              <span>📍</span>
              <span><strong>地點地址：</strong>{attraction.address}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default AttractionCard;
