import React from 'react';
import { getOjeMarketStatus } from '../data/markets';

export const OjeMarketDayBanner = ({ onSelectMarket, onOpenCustomList }) => {
  const status = getOjeMarketStatus();

  return (
    <div className={`oje-market-banner ${status.isToday ? 'banner-today' : ''}`}>
      <div className="oje-banner-left">
        <div className="oje-icon-pulse">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="oje-text">
          <div className="oje-badge-title">
            <span className="traditional-tag">Traditional 8-Day Market Cycle</span>
            <strong>{status.isToday ? '🔥 TODAY IS OJE MARKET DAY!' : `⏰ OJE MARKET COUNTDOWN: In ${status.daysLeft} Day${status.daysLeft > 1 ? 's' : ''}`}</strong>
          </div>
          <p className="oje-subtext">
            {status.isToday 
              ? 'Trucks from rural Oyo valleys have arrived with fresh palm oil, black soap, local herbs, and wholesale Ijebu garri at peak wholesale discount.'
              : 'Direct farm arrivals occur every 8 days. Pre-order your gallons of palm oil and bags of garri before stocks sell out.'}
          </p>
        </div>
      </div>

      <div className="oje-banner-actions">
        <button 
          className="oje-action-btn view-btn"
          onClick={() => onSelectMarket('oje')}
        >
          <i className="fa-solid fa-basket-shopping"></i> View Oje Items
        </button>
        <button 
          className="oje-action-btn preorder-btn"
          onClick={onOpenCustomList}
        >
          <i className="fa-solid fa-file-pen"></i> Pre-Order Custom List
        </button>
      </div>
    </div>
  );
};
