import React from 'react';
import { UI_TRANSLATIONS } from '../data/localizations';

export const Hero = ({ language, onOpenLogistics, onOpenCustomList, onScrollToProducts }) => {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  return (
    <div className="hero-carousel">
      <div className="hero-content">
        <div className="hero-tag">
          <i className="fa-solid fa-satellite-dish"></i> {t.heroTag}
        </div>
        <h1 className="hero-title">{t.heroTitle}</h1>
        <p className="hero-desc">{t.heroDesc}</p>

        <div className="hero-badges-row">
          <span className="hero-mini-badge"><i className="fa-solid fa-check"></i> Bodija</span>
          <span className="hero-mini-badge"><i className="fa-solid fa-check"></i> Ojoo</span>
          <span className="hero-mini-badge"><i className="fa-solid fa-check"></i> Sango</span>
          <span className="hero-mini-badge"><i className="fa-solid fa-check"></i> Oje</span>
          <span className="hero-mini-badge"><i className="fa-solid fa-check"></i> Dugbe</span>
        </div>

        <div className="hero-actions-group">
          <button className="hero-btn" onClick={onScrollToProducts}>
            <i className="fa-solid fa-magnifying-glass-chart"></i>
            {t.heroBtn}
          </button>
          <button className="hero-btn secondary" onClick={onOpenLogistics}>
            <i className="fa-solid fa-motorcycle"></i>
            {t.heroLogisticsBtn}
          </button>
          <button className="hero-btn tertiary" onClick={onOpenCustomList}>
            <i className="fa-solid fa-clipboard-list"></i>
            Send Custom List
          </button>
        </div>
      </div>
    </div>
  );
};
