import React from 'react';
import { MARKETS } from '../data/markets';

export const MarketSelector = ({ activeMarket, setActiveMarket, language }) => {
  return (
    <div className="market-selector-container">
      <div className="market-selector-header">
        <div className="market-title-group">
          <span className="live-pulse-dot"></span>
          <span className="market-header-label">
            <i className="fa-solid fa-scale-balanced" style={{ marginRight: '6px', color: 'var(--primary-color)' }}></i>
            Live Ibadan Market Comparison:
          </span>
        </div>
        <span className="market-header-sub">
          Click any market to see live surveyed prices in Bodija, Ojoo, Sango, Oje & Dugbe
        </span>
      </div>

      <div className="market-tabs">
        {MARKETS.map(market => {
          const isActive = activeMarket === market.id;
          return (
            <button
              key={market.id}
              onClick={() => setActiveMarket(market.id)}
              className={`market-tab-btn ${isActive ? 'active' : ''}`}
              title={market.description}
            >
              <i className={market.icon} style={{ color: isActive ? 'white' : market.accentColor }}></i>
              <div className="market-tab-info">
                <span className="market-tab-name">{market.shortName}</span>
                <span className="market-tab-tag">{market.tag}</span>
              </div>
              {isActive && <span className="market-active-badge">Active</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
