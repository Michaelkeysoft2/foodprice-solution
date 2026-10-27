import React from 'react';
import { MARKETS } from '../data/markets';

export const ProductCard = ({ product, onAddToCart, activeMarket, onClickCard, language }) => {
  // Determine displayed price based on active market
  let displayPrice = product.price;
  let hasMarketSpecific = false;
  if (activeMarket !== 'all' && product.marketPrices && product.marketPrices[activeMarket]) {
    displayPrice = product.marketPrices[activeMarket];
    hasMarketSpecific = true;
  }

  // Calculate discount if old price exists
  const discount = product.oldPrice ? Math.round(((product.oldPrice - displayPrice) / product.oldPrice) * 100) : null;
  const primaryMarketInfo = MARKETS.find(m => m.id === product.primaryMarket);

  return (
    <div className="product-card" onClick={() => onClickCard(product)}>
      {discount && discount > 0 && (
        <div className="discount-tag">-{discount}%</div>
      )}

      {product.badge && (
        <div className="product-custom-badge">{product.badge}</div>
      )}

      <div className="product-img-wrapper">
        <img 
          src={product.img} 
          alt={product.name} 
          className="product-img" 
          loading="lazy" 
          onError={(e) => {
            // High reliability fallback for food images
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80';
          }}
        />
        <div className="card-quick-view-overlay">
          <span><i className="fa-solid fa-eye"></i> Compare Markets</span>
        </div>
      </div>

      <div className="card-market-meta">
        <span className="card-primary-market" title={`Best sourced at ${primaryMarketInfo?.name || 'Bodija'}`}>
          <i className="fa-solid fa-location-dot" style={{ color: primaryMarketInfo?.accentColor || '#059669' }}></i>
          {primaryMarketInfo?.shortName || 'Bodija Market'}
        </span>
        {product.unit && <span className="card-unit-label">{product.unit}</span>}
      </div>

      <h3 className="product-name" title={product.name}>
        {product.name}
      </h3>

      {/* Mini market indicator */}
      {hasMarketSpecific && (
        <div className="active-market-pill">
          <i className="fa-solid fa-check"></i> {MARKETS.find(m => m.id === activeMarket)?.shortName} Price
        </div>
      )}

      {/* Price Trend Direction Indicator */}
      <div className="card-trend-row">
        {product.oldPrice && product.oldPrice > displayPrice ? (
          <span className="card-trend-badge down" title="Cheaper than last week's surveyed price">
            <i className="fa-solid fa-arrow-trend-down"></i> -₦{(product.oldPrice - displayPrice).toLocaleString()}
          </span>
        ) : (
          <span className="card-trend-badge stable" title="Stable market selling rate">
            <i className="fa-solid fa-check"></i> Stable
          </span>
        )}
        <span className="card-verified-dot" title="Surveyed Today 7:15 AM in Ibadan">
          <span className="dot-green"></span> Today
        </span>
      </div>

      <div className="price-container">
        <div className="current-price">₦{displayPrice.toLocaleString()}</div>
        {product.oldPrice && (
          <div className="old-price">₦{product.oldPrice.toLocaleString()}</div>
        )}
      </div>

      <div className="card-btn-group">
        <button 
          className="add-btn" 
          onClick={(e) => { 
            e.stopPropagation(); 
            onAddToCart({ ...product, price: displayPrice }); 
          }}
          title="Add to delivery basket"
        >
          <i className="fa-solid fa-cart-plus"></i>
          <span>Add to Basket</span>
        </button>
      </div>
    </div>
  );
};
