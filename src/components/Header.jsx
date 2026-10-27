import React from 'react';
import { UI_TRANSLATIONS } from '../data/localizations';

export const Header = ({ 
  cartCount, 
  onOpenCart, 
  onOpenAuth, 
  onOpenLogistics, 
  onOpenCustomList,
  user, 
  searchQuery, 
  setSearchQuery, 
  language, 
  setLanguage, 
  theme, 
  onToggleTheme 
}) => {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  return (
    <header className="header">
      <a href="#" className="logo">
        <div className="logo-badge-fp">FP</div>
        <div className="logo-text-group">
          <span className="logo-brand">FoodPrice</span>
          <span className="logo-tagline">Ibadan Market & Logistics</span>
        </div>
      </a>

      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input 
          type="text" 
          className="search-input" 
          placeholder={t.searchPlaceholder} 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn">{t.searchBtn}</button>
      </div>

      <div className="header-actions">
        {/* Custom Grocery List Pill */}
        <button 
          onClick={onOpenCustomList} 
          className="header-custom-list-pill" 
          title="Type or paste your written market grocery list"
        >
          <i className="fa-solid fa-clipboard-list"></i>
          <span>Custom List</span>
        </button>

        {/* Logistics Errand Button */}
        <button 
          onClick={onOpenLogistics} 
          className="header-logistics-pill" 
          title="Book market errand or doorstep delivery in Ibadan"
        >
          <i className="fa-solid fa-motorcycle"></i>
          <span>Doorstep Logistics</span>
        </button>

        {/* Language Selector */}
        <div className="lang-selector-container">
          <i className="fa-solid fa-globe" style={{ color: 'var(--primary-color)' }}></i>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="lang-select">
            <option value="en">EN</option>
            <option value="yo">YOR</option>
            <option value="ig">IGB</option>
            <option value="ha">HAU</option>
            <option value="pid">PID</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
        </div>

        {/* Theme Toggle */}
        <button onClick={onToggleTheme} className="theme-toggle-btn" title="Toggle Dark/Light Mode">
          <i className={theme === 'dark' ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
        </button>

        {/* User Account */}
        <div className="action-item" onClick={onOpenAuth}>
          <i className="fa-regular fa-user"></i>
          <span>{user ? user.name : t.account}</span>
        </div>

        {/* Cart / Basket */}
        <div className="action-item cart-action-item" onClick={onOpenCart}>
          <i className="fa-solid fa-basket-shopping"></i>
          <span>{t.cart}</span>
          {cartCount > 0 && <span className="cart-badge bump">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
};
