import React from 'react';
import { UI_TRANSLATIONS } from '../data/localizations';

export const Footer = ({ language, onOpenLogistics, onSelectMarket }) => {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand-col">
          <div className="footer-logo">
            <div className="logo-badge-fp small">FP</div>
            <span style={{ fontSize: '20px', fontWeight: '800' }}>FoodPrice</span>
          </div>
          <p>{t.footerAbout}</p>
          <div className="footer-badges">
            <span><i className="fa-solid fa-location-dot"></i> Ibadan, Oyo State</span>
            <span><i className="fa-solid fa-clock"></i> 7:00 AM - 6:30 PM Daily</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>{t.footerService}</h3>
          <ul className="footer-links-list">
            <li><button onClick={() => onSelectMarket('bodija')}><i className="fa-solid fa-chevron-right"></i> Bodija Market (Grains & Yam)</button></li>
            <li><button onClick={() => onSelectMarket('ojoo')}><i className="fa-solid fa-chevron-right"></i> Ojoo Transit (Peppers, Tomatoes & Onions)</button></li>
            <li><button onClick={() => onSelectMarket('sango')}><i className="fa-solid fa-chevron-right"></i> Sango Market (UI / Poly Area Retail)</button></li>
            <li><button onClick={() => onSelectMarket('oje')}><i className="fa-solid fa-chevron-right"></i> Oje Traditional (Palm Oil & Herbs)</button></li>
            <li><button onClick={() => onSelectMarket('dugbe')}><i className="fa-solid fa-chevron-right"></i> Dugbe & Aleshinloye (Packaged Goods)</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Doorstep Errand & Dispatch</h3>
          <p>
            Too busy to visit Bodija, Ojoo or Oje market yourself? Book an expert shopper to purchase fresh, haggle prices and deliver right to your gate in Ibadan.
          </p>
          <button 
            className="footer-logistics-btn" 
            onClick={onOpenLogistics}
          >
            <i className="fa-solid fa-motorcycle"></i> Book Errand Shopper & Courier
          </button>
        </div>

        <div className="footer-section contact-col">
          <h3>{t.footerContact}</h3>
          <p>{t.footerHelp}</p>
          <div className="contact-links">
            <a 
              href="https://wa.me/2348039579410?text=Hello%20FoodPrice%20(FP)%20team,%20I%20want%20to%20send%20a%20shopper%20to%20the%20market." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn btn-whatsapp"
            >
              <i className="fa-brands fa-whatsapp"></i> WhatsApp Shopper (08039579410)
            </a>
            <a href="mailto:olayiwolamichael217@gmail.com" className="contact-btn btn-email">
              <i className="fa-solid fa-envelope"></i> olayiwolamichael217@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div>© {new Date().getFullYear()} FoodPrice (FP). Live Ibadan Foodstuff Prices & Doorstep Errand Logistics.</div>
        <div className="footer-sub-note">Bodija • Ojoo • Sango • Oje • Dugbe • UI • Ring Road</div>
      </div>
    </footer>
  );
};
