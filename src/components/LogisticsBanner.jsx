import React from 'react';
import { UI_TRANSLATIONS } from '../data/localizations';

export const LogisticsBanner = ({ onOpenLogistics, language }) => {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  return (
    <section className="logistics-spotlight-banner">
      <div className="logistics-spotlight-content">
        <div className="logistics-spotlight-left">
          <div className="logistics-spotlight-tag">
            <i className="fa-solid fa-truck-ramp-box"></i> FP Doorstep Errand Logistics
          </div>
          <h2 className="logistics-spotlight-title">
            Can't make it to Bodija, Ojoo, Oje or Sango market today?
          </h2>
          <p className="logistics-spotlight-desc">
            Skip the intense sun, muddy stalls, and transport hassle. Our certified market shoppers inspect the best foodstuffs, negotiate authentic market prices, package them hygienically, and deliver straight to your door anywhere in Ibadan.
          </p>

          <div className="logistics-perks">
            <div className="perk-item">
              <i className="fa-solid fa-shield-check"></i>
              <span>Zero overcharging — Real market rates</span>
            </div>
            <div className="perk-item">
              <i className="fa-solid fa-hand-holding-dollar"></i>
              <span>Clear shopper errand fee from ₦1,500</span>
            </div>
            <div className="perk-item">
              <i className="fa-solid fa-bolt"></i>
              <span>Fast bike & courier dispatch in 30-60 mins</span>
            </div>
          </div>

          <div className="logistics-cta-group">
            <button className="primary-btn logistics-cta-btn" onClick={onOpenLogistics}>
              <i className="fa-solid fa-calculator"></i>
              Calculate Logistics & Book Shopper
            </button>
            <a 
              href="https://wa.me/2348039579410?text=Hello%20FoodPrice%20(FP)%20team,%20I%20would%20like%20to%20inquire%20about%20a%20market%20errand%20and%20foodstuff%20delivery%20in%20Ibadan." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-quick-btn"
            >
              <i className="fa-brands fa-whatsapp"></i> Chat Dispatcher
            </a>
          </div>
        </div>

        <div className="logistics-spotlight-right">
          <div className="market-coverage-box">
            <div className="coverage-header">
              <i className="fa-solid fa-map-location-dot"></i>
              <span>Ibadan Market Hubs Active Now</span>
            </div>
            <div className="coverage-list">
              <div className="coverage-item">
                <span className="dot green"></span>
                <strong>Bodija International Market</strong>
                <em>Grains, Yam & Meat</em>
              </div>
              <div className="coverage-item">
                <span className="dot orange"></span>
                <strong>Ojoo Transit Market</strong>
                <em>Tomatoes, Onions & Peppers</em>
              </div>
              <div className="coverage-item">
                <span className="dot pink"></span>
                <strong>Oje Traditional Market</strong>
                <em>Palm Oil, Spices & Herbs</em>
              </div>
              <div className="coverage-item">
                <span className="dot blue"></span>
                <strong>Sango Central Market</strong>
                <em>Retail foodstuff, UI & Poly Axis</em>
              </div>
              <div className="coverage-item">
                <span className="dot purple"></span>
                <strong>Dugbe / Aleshinloye Market</strong>
                <em>Packaged goods & Beverages</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
