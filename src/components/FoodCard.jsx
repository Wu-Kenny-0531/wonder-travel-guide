import React from 'react';

export function FoodCard({ foodItem }) {
  const imageSrc = foodItem.imageUrl || foodItem.image;

  return (
    <article className="food-card">
      <div className="food-image-box">
        <img
          src={imageSrc}
          alt={foodItem.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23FFD166%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%2323272F%22%20font-size%3D%2222%22%20font-family%3D%22sans-serif%22%3EGoWonder%20Food%3C%2Ftext%3E%3C%2Fsvg%3E";
          }}
        />
        {foodItem.priceRange && (
          <span className="food-price-badge">
            💰 {foodItem.priceRange}
          </span>
        )}
      </div>

      <div className="food-body">
        <div className="food-header">
          <div>
            <h4 className="food-name">{foodItem.name}</h4>
            {foodItem.englishName && (
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {foodItem.englishName}
              </span>
            )}
          </div>
          <span className="food-category">{foodItem.category}</span>
        </div>

        <p className="food-desc">
          {foodItem.description}
        </p>

        {foodItem.recommendedSpots && (
          <div className="food-spots">
            <strong>推薦品嚐處：</strong> {foodItem.recommendedSpots}
          </div>
        )}
      </div>
    </article>
  );
}

export default FoodCard;
