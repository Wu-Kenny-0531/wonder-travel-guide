import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import DestinationCard from '../components/DestinationCard';
import destinations from '../data/destinations';

export function Explore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  // 動態取得所有可用國家列表（自動適應未來新增城市）
  const availableCountries = useMemo(() => {
    const set = new Set(destinations.map((d) => d.country));
    return Array.from(set);
  }, []);

  // 動態取得所有可用標籤列表
  const availableTags = useMemo(() => {
    const set = new Set();
    destinations.forEach((d) => {
      if (Array.isArray(d.tags)) {
        d.tags.forEach((tag) => set.add(tag));
      }
    });
    return Array.from(set);
  }, []);

  // 即時且不區分英文大小寫的多條件過濾搜尋
  const filteredDestinations = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return destinations.filter((dest) => {
      // 關鍵字比對：中文名、英文名、國家或介紹
      const matchKeyword = !term ||
        dest.name.toLowerCase().includes(term) ||
        dest.englishName.toLowerCase().includes(term) ||
        dest.country.toLowerCase().includes(term) ||
        (dest.description && dest.description.toLowerCase().includes(term));

      // 國家篩選比對
      const matchCountry = selectedCountry === 'all' || dest.country === selectedCountry;

      // 標籤篩選比對
      const matchTag = selectedTag === 'all' || (Array.isArray(dest.tags) && dest.tags.includes(selectedTag));

      return matchKeyword && matchCountry && matchTag;
    });
  }, [searchTerm, selectedCountry, selectedTag]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCountry('all');
    setSelectedTag('all');
  };

  return (
    <div className="explore-page">
      {/* 探索頁頂部橫幅 */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: '10px' }}>
            DESTINATION DIRECTORY
          </span>
          <h1 className="page-banner-title">探索所有旅遊目的地</h1>
          <p className="page-banner-subtitle">
            搜尋熱門城市、依國家與體驗風格精準篩選。每座城市皆配有詳細景點、美食推薦與實用行程！
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: '80px' }}>
        {/* 搜尋與篩選器 */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
          availableCountries={availableCountries}
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
          availableTags={availableTags}
        />

        {/* 搜尋結果狀態提示列 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-text-body)' }}>
            找到 <strong style={{ color: 'var(--color-primary)' }}>{filteredDestinations.length}</strong> 座符合條件的精彩城市
            {(selectedCountry !== 'all' || selectedTag !== 'all' || searchTerm) && (
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginLeft: '8px' }}>
                (已套用篩選條件)
              </span>
            )}
          </p>

          {(selectedCountry !== 'all' || selectedTag !== 'all' || searchTerm) && (
            <button
              onClick={handleResetFilters}
              className="btn btn-secondary btn-sm"
            >
              🔄 重設所有篩選
            </button>
          )}
        </div>

        {/* 目的地卡片列表 */}
        {filteredDestinations.length > 0 ? (
          <div className="destination-grid">
            {filteredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        ) : (
          /* 沒有符合結果時的友善提示 */
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h3>找不到符合「{searchTerm}」的目的地</h3>
            <p>
              請嘗試檢查是否有錯字，或清除部分國家與標籤條件重新尋找。
            </p>
            <button onClick={handleResetFilters} className="btn btn-primary">
              清除條件並檢視全部城市
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
