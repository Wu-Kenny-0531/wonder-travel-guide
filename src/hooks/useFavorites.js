import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'gowonder_favorites_v1';

const getInitialFavorites = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        destinations: Array.isArray(parsed.destinations) ? parsed.destinations : [],
        attractions: Array.isArray(parsed.attractions) ? parsed.attractions : []
      };
    }
  } catch (err) {
    console.error('無法讀取收藏資料:', err);
  }
  return { destinations: [], attractions: [] };
};

export function useFavorites() {
  const [favorites, setFavorites] = useState(getInitialFavorites);

  // 當 localStorage 改變（同視窗自訂事件或跨視窗 storage 事件）時同步更新
  useEffect(() => {
    const handleSync = () => {
      setFavorites(getInitialFavorites());
    };

    window.addEventListener('storage', handleSync);
    window.addEventListener('gowonder_favorites_updated', handleSync);

    return () => {
      window.removeEventListener('storage', handleSync);
      window.removeEventListener('gowonder_favorites_updated', handleSync);
    };
  }, []);

  const saveFavorites = useCallback((newFavorites) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
      // 發送自訂事件讓同頁面其他使用此 hook 的元件同步響應
      window.dispatchEvent(new Event('gowonder_favorites_updated'));
    } catch (err) {
      console.error('儲存收藏資料失敗:', err);
    }
  }, []);

  const isDestinationFavorite = useCallback(
    (id) => favorites.destinations.includes(id),
    [favorites.destinations]
  );

  const isAttractionFavorite = useCallback(
    (id) => favorites.attractions.includes(id),
    [favorites.attractions]
  );

  const toggleDestinationFavorite = useCallback(
    (id) => {
      setFavorites((prev) => {
        const exists = prev.destinations.includes(id);
        const updated = {
          ...prev,
          destinations: exists
            ? prev.destinations.filter((item) => item !== id)
            : [...prev.destinations, id]
        };
        saveFavorites(updated);
        return updated;
      });
    },
    [saveFavorites]
  );

  const toggleAttractionFavorite = useCallback(
    (id) => {
      setFavorites((prev) => {
        const exists = prev.attractions.includes(id);
        const updated = {
          ...prev,
          attractions: exists
            ? prev.attractions.filter((item) => item !== id)
            : [...prev.attractions, id]
        };
        saveFavorites(updated);
        return updated;
      });
    },
    [saveFavorites]
  );

  const removeFavorite = useCallback(
    (id, type) => {
      setFavorites((prev) => {
        let updated;
        if (type === 'destination') {
          updated = {
            ...prev,
            destinations: prev.destinations.filter((item) => item !== id)
          };
        } else if (type === 'attraction') {
          updated = {
            ...prev,
            attractions: prev.attractions.filter((item) => item !== id)
          };
        } else {
          updated = {
            destinations: prev.destinations.filter((item) => item !== id),
            attractions: prev.attractions.filter((item) => item !== id)
          };
        }
        saveFavorites(updated);
        return updated;
      });
    },
    [saveFavorites]
  );

  const clearAllFavorites = useCallback(() => {
    const empty = { destinations: [], attractions: [] };
    saveFavorites(empty);
  }, [saveFavorites]);

  const totalCount = favorites.destinations.length + favorites.attractions.length;

  return {
    favorites,
    totalCount,
    isDestinationFavorite,
    isAttractionFavorite,
    toggleDestinationFavorite,
    toggleAttractionFavorite,
    removeFavorite,
    clearAllFavorites
  };
}

export default useFavorites;
