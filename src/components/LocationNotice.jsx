import React, { useState } from 'react';
import { DELIVERY_ZONES } from '../data/markets';

export const LocationNotice = ({ onOpenLogistics }) => {
  const [selectedArea, setSelectedArea] = useState('UI / Agbowo / Sango / Samonda');

  return (
    <div className="location-notice-bar">
      <div className="location-notice-content">
        <div className="location-pin-group">
          <i className="fa-solid fa-location-crosshairs"></i>
          <span>Delivering from <strong>Bodija, Ojoo, Sango & Oje</strong> to:</span>
          <select 
            className="location-inline-select"
            value={selectedArea}
            onChange={e => setSelectedArea(e.target.value)}
          >
            {DELIVERY_ZONES.map(z => (
              <option key={z.id} value={z.name}>{z.name}</option>
            ))}
          </select>
        </div>
        <div className="location-action-right">
          <span className="location-time-tag"><i className="fa-regular fa-clock"></i> 30-50 min Express Delivery</span>
          <button className="location-order-link" onClick={onOpenLogistics}>
            Book Errand <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
