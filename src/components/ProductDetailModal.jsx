import React, { useState } from 'react';
import { MARKETS } from '../data/markets';
import { UI_TRANSLATIONS } from '../data/localizations';

export const ProductDetailModal = ({ isOpen, onClose, product, onAddToCart, activeMarket, onOpenLogistics, language, formatCurrency }) => {
  const [qty, setQty] = useState(1);
  if (!isOpen || !product) return null;

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  
  // Calculate price for selected market or baseline
  let effectivePrice = product.price;
  if (activeMarket !== 'all' && product.marketPrices && product.marketPrices[activeMarket]) {
    effectivePrice = product.marketPrices[activeMarket];
  }

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      onAddToCart({ ...product, price: effectivePrice });
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large product-detail-popup" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>

        <div className="product-detail-layout">
          <div className="detail-img-col">
            <div className="detail-img-wrapper">
              <img src={product.img} alt={product.name} className="detail-img" />
              {product.badge && <span className="detail-floating-badge">{product.badge}</span>}
            </div>

            {/* Quick Market Comparison Table */}
            {product.marketPrices && (
              <div className="market-compare-card">
                <div className="compare-card-title">
                  <i className="fa-solid fa-scale-balanced" style={{ color: 'var(--primary-color)' }}></i>
                  Surveyed Ibadan Market Rates Today:
                </div>
                <div className="market-rate-grid">
                  {Object.entries(product.marketPrices).map(([mKey, mPrice]) => {
                    const mInfo = MARKETS.find(m => m.id === mKey);
                    const isSelected = activeMarket === mKey;
                    const isBest = Math.min(...Object.values(product.marketPrices)) === mPrice;
                    return (
                      <div key={mKey} className={`market-rate-item ${isSelected ? 'active' : ''} ${isBest ? 'best-rate' : ''}`}>
                        <div className="rate-market-name">
                          {mInfo?.shortName || mKey}
                          {isBest && <span className="best-tag">Lowest</span>}
                        </div>
                        <div className="rate-price">₦{mPrice.toLocaleString()}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="detail-info-col">
            <div className="detail-category-tag">
              <i className="fa-solid fa-tag"></i> {product.category.toUpperCase()} • {product.unit || 'Standard Unit'}
            </div>

            <h2 className="detail-product-title">{product.name}</h2>

            <div className="detail-price-status-row">
              <div className="detail-price-group">
                <span className="detail-current-price">₦{effectivePrice.toLocaleString()}</span>
                {product.oldPrice && (
                  <span className="detail-old-price">₦{product.oldPrice.toLocaleString()}</span>
                )}
              </div>
              <div className="detail-verified-tag">
                <i className="fa-solid fa-circle-check"></i> Verified Today
              </div>
            </div>

            <p className="detail-desc">
              Directly surveyed from certified food stalls in Ibadan. Fresh, clean, stone-free, and carefully inspected before dispatch.
            </p>

            {/* Doorstep logistics prompt */}
            <div className="detail-logistics-callout">
              <div className="callout-icon">
                <i className="fa-solid fa-motorcycle"></i>
              </div>
              <div className="callout-text">
                <strong>Don't want to go to the market yourself?</strong>
                <p>Our errand shopper will buy this for you fresh and deliver to your doorstep in Ibadan.</p>
              </div>
            </div>

            <div className="detail-actions-row">
              <div className="qty-control">
                <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="qty-val">{qty}</span>
                <button className="qty-btn" onClick={() => setQty(qty + 1)}>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>

              <button className="primary-btn detail-add-cart-btn" onClick={handleAdd}>
                <i className="fa-solid fa-cart-plus"></i>
                Add {qty} to Basket (₦{(effectivePrice * qty).toLocaleString()})
              </button>
            </div>

            <div className="detail-footer-guarantee">
              <span><i className="fa-solid fa-shield-halved"></i> 100% Quality Inspected</span>
              <span><i className="fa-solid fa-truck-fast"></i> Fast Ibadan Dispatch</span>
              <span><i className="fa-solid fa-scale-unbalanced-flip"></i> Accurate Weighing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
