import React, { useState } from 'react';
import sources from '../data/sources';
import imageCredits from '../data/imageCredits';

export function SourcesCredits() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'sources' | 'credits'
  const [filterSourceType, setFilterSourceType] = useState('all');

  const filteredSources = filterSourceType === 'all'
    ? sources
    : sources.filter(s => s.type === filterSourceType);

  return (
    <div className="sources-credits-page">
      {/* 頁面頂部橫幅 */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-teal" style={{ marginBottom: '10px' }}>
            TRANSPARENCY & COMPLIANCE
          </span>
          <h1 className="page-banner-title">資料來源與圖片授權聲明</h1>
          <p className="page-banner-subtitle">
            GoWonder Travel Guide 堅持「嚴謹求證、尊重原創、授權公開」。本頁完整揭露全站景點文字資料之官方依據，以及所有攝影作品之原創作者與商用授權許可狀態。
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: '80px' }}>
        {/* 導覽分頁切換 */}
        <div className="favorites-tabs" style={{ marginBottom: '32px' }}>
          <button
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            全部查證項目 ({sources.length + imageCredits.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'sources' ? 'active' : ''}`}
            onClick={() => setActiveTab('sources')}
          >
            📖 文字資料來源 ({sources.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'credits' ? 'active' : ''}`}
            onClick={() => setActiveTab('credits')}
          >
            📷 圖片版權與授權 ({imageCredits.length})
          </button>
        </div>

        {/* 1. 文字資料來源區塊 */}
        {(activeTab === 'all' || activeTab === 'sources') && (
          <section style={{ marginBottom: '60px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📖</span> 官方與權威文字資料來源
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', margin: 0 }}>
                  遵循官方旅遊局、景點官網與交通機構優先原則，嚴禁自行虛構景點、地址或營業時間。
                </p>
              </div>

              {/* 來源型態過濾 */}
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>資料類型:</span>
                <select
                  value={filterSourceType}
                  onChange={(e) => setFilterSourceType(e.target.value)}
                  style={{ padding: '6px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}
                >
                  <option value="all">全體類型</option>
                  <option value="官方旅遊網站">官方旅遊網站</option>
                  <option value="政府觀光機關">政府觀光機關</option>
                  <option value="景點官方網站">景點官方網站</option>
                  <option value="官方交通網站">官方交通網站</option>
                </select>
              </div>
            </div>

            <div className="credits-table-wrapper">
              <table className="credits-table">
                <thead>
                  <tr>
                    <th style={{ width: '30%' }}>資料或文章名稱</th>
                    <th style={{ width: '22%' }}>資料來源網站 / 機關</th>
                    <th style={{ width: '18%' }}>資料類型</th>
                    <th style={{ width: '15%' }}>查閱日期</th>
                    <th style={{ width: '15%' }}>原始網址</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSources.map((source) => (
                    <tr key={source.id}>
                      <td>
                        <strong>{source.name}</strong>
                        {source.notes && (
                          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                            {source.notes}
                          </div>
                        )}
                      </td>
                      <td>
                        <span style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                          {source.name.split('(')[0]}
                        </span>
                      </td>
                      <td>
                        <span className="badge badge-teal">{source.type}</span>
                      </td>
                      <td>
                        <code>{source.accessedAt}</code>
                      </td>
                      <td>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm"
                          style={{ padding: '4px 10px', fontSize: '0.8rem' }}
                        >
                          官方連結 ↗
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 2. 圖片來源與授權區塊 */}
        {(activeTab === 'all' || activeTab === 'credits') && (
          <section>
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>📷</span> 圖片來源與授權許可清單
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', margin: 0 }}>
                所有圖片均確認具備合法公開展示授權（包含 Unsplash License 與公開商用條款），並完整標示攝影作者與原始來源。
              </p>
            </div>

            <div className="credits-table-wrapper">
              <table className="credits-table">
                <thead>
                  <tr>
                    <th style={{ width: '80px' }}>預覽</th>
                    <th style={{ width: '25%' }}>圖片名稱 / 拍攝對象</th>
                    <th style={{ width: '18%' }}>攝影作者</th>
                    <th style={{ width: '18%' }}>來源網站與圖庫</th>
                    <th style={{ width: '18%' }}>授權類型</th>
                    <th style={{ width: '12%' }}>使用許可狀態</th>
                    <th style={{ width: '10%' }}>原始連結</th>
                  </tr>
                </thead>
                <tbody>
                  {imageCredits.map((credit) => (
                    <tr key={credit.id}>
                      <td>
                        <img
                          src={credit.imageUrl || credit.file}
                          alt={credit.alt || credit.title}
                          className="credit-thumb"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2280%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23FFD166%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%2323272F%22%20font-size%3D%2212%22%20font-family%3D%22sans-serif%22%3EPhoto%3C%2Ftext%3E%3C%2Fsvg%3E";
                          }}
                        />
                      </td>
                      <td>
                        <strong>{credit.title}</strong>
                        <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                          ID: {credit.id}
                        </div>
                      </td>
                      <td>
                        <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                          {credit.author}
                        </span>
                      </td>
                      <td>{credit.sourceType}</td>
                      <td>
                        <span style={{ fontSize: '0.85rem' }}>{credit.license}</span>
                      </td>
                      <td>
                        <span className="badge badge-verified">
                          ✓ {credit.usagePermission}
                        </span>
                      </td>
                      <td>
                        <a
                          href={credit.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'underline' }}
                        >
                          查看來源 ↗
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 授權規範說明卡 */}
        <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '28px', marginTop: '40px' }}>
          <h4 style={{ color: 'var(--color-text-main)', marginBottom: '10px' }}>
            ⚖️ GoWonder 圖片版權承諾守則
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: '1.7', margin: 0 }}>
            依據 AGENTS.md 規範：<strong>圖片可以在網路上公開瀏覽，不代表可以任意下載或公開使用。</strong><br />
            本專案嚴格限制僅使用經確認為 <code>verified</code> 許可之素材，禁止使用未授權之網路爬取圖片。若您為原創著作權人對特定圖片使用有任何疑問或授權更新需求，請隨時與本專案團隊聯繫。
          </p>
        </div>
      </div>
    </div>
  );
}

export default SourcesCredits;
