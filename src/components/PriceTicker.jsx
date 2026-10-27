import React, { useState } from 'react';

export const PriceTicker = ({ onOpenAlerts, onOpenReportPrice, onSharePriceSheet }) => {
  const [isPaused, setIsPaused] = useState(false);

  const updates = [
    { text: 'Bodija: 50kg Parboiled Rice stable @ ₦118,000', trend: 'stable', icon: 'fa-solid fa-wheat-awn' },
    { text: 'Ojoo: Fresh Rodo & Tomatoes down -6% (₦24,000 / big basket)', trend: 'down', icon: 'fa-solid fa-pepper-hot' },
    { text: 'Oje: 25L Pure Palm Oil @ ₦42,000 (Direct farm arrivals)', trend: 'down', icon: 'fa-solid fa-bottle-droplet' },
    { text: 'Bodija: Oloyin Honey Beans down ₦2,000 (₦17,500/paint)', trend: 'down', icon: 'fa-solid fa-bowl-rice' },
    { text: 'Sango: White Ijebu Garri selling @ ₦5,800/paint bucket', trend: 'stable', icon: 'fa-solid fa-leaf' },
    { text: 'Ojoo: Abuja New Yam (5 large tubers) @ ₦33,500', trend: 'down', icon: 'fa-solid fa-carrot' },
    { text: 'Dugbe: 25L Vegetable Oil up +3% @ ₦54,000', trend: 'up', icon: 'fa-solid fa-oil-well' }
  ];

  return (
    <div className="price-ticker-strip">
      <div className="ticker-label-badge">
        <span className="live-radar-dot"></span>
        <span className="ticker-badge-text">LIVE MARKET BAROMETER</span>
        <span className="survey-time-tag">Surveyed 7:15 AM</span>
      </div>

      <div 
        className="ticker-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`ticker-track ${isPaused ? 'paused' : ''}`}>
          {updates.concat(updates).map((item, idx) => (
            <div key={idx} className={`ticker-item trend-${item.trend}`}>
              <i className={item.icon}></i>
              <span>{item.text}</span>
              {item.trend === 'down' && <span className="trend-arrow down">▼ -Save</span>}
              {item.trend === 'up' && <span className="trend-arrow up">▲ High</span>}
              {item.trend === 'stable' && <span className="trend-arrow stable">● Stable</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="ticker-actions">
        <button 
          className="ticker-action-btn alert-btn"
          onClick={onOpenAlerts}
          title="Receive morning food prices on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
          <span>Get Daily Alerts</span>
        </button>

        <button 
          className="ticker-action-btn share-btn"
          onClick={onSharePriceSheet}
          title="Share or copy today's staple market prices"
        >
          <i className="fa-solid fa-share-nodes"></i>
          <span>Share Prices</span>
        </button>

        <button 
          className="ticker-action-btn report-btn"
          onClick={onOpenReportPrice}
          title="Report today's price you paid at the market"
        >
          <i className="fa-solid fa-plus-minus"></i>
          <span>Report Price</span>
        </button>
      </div>
    </div>
  );
};
