import React from 'react';

export function SearchBar({
  searchTerm,
  onSearchChange,
  selectedCountry,
  onCountryChange,
  availableCountries = [],
  selectedTag,
  onTagChange,
  availableTags = []
}) {
  return (
    <div className="search-filter-card">
      {/* 搜尋關鍵字輸入框 */}
      <div className="search-input-wrapper">
        <svg
          className="search-icon"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          type="text"
          className="search-input"
          placeholder="搜尋城市名稱（例：京都、Taipei、曼谷）..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="搜尋目的地城市"
        />

        {searchTerm && (
          <button
            className="search-clear-btn"
            onClick={() => onSearchChange('')}
            title="清除搜尋內容"
            aria-label="清除搜尋內容"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* 國家與主題篩選 Pill 群組 */}
      <div className="filter-groups">
        {/* 依國家篩選 */}
        <div className="filter-row">
          <span className="filter-label">國家地區:</span>
          <div className="filter-pills">
            <button
              className={`filter-pill ${selectedCountry === 'all' ? 'active' : ''}`}
              onClick={() => onCountryChange('all')}
            >
              全部地區
            </button>
            {availableCountries.map((country) => (
              <button
                key={country}
                className={`filter-pill ${selectedCountry === country ? 'active' : ''}`}
                onClick={() => onCountryChange(country)}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        {/* 依特色標籤篩選 (若有提供) */}
        {availableTags.length > 0 && (
          <div className="filter-row">
            <span className="filter-label">熱門體驗:</span>
            <div className="filter-pills">
              <button
                className={`filter-pill ${selectedTag === 'all' ? 'active' : ''}`}
                onClick={() => onTagChange('all')}
              >
                全部特色
              </button>
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  className={`filter-pill ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => onTagChange(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
