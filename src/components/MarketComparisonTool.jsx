import React, { useState } from 'react';
import { MARKETS } from '../data/markets';
import { PRODUCTS } from '../data/products';

export const MarketComparisonTool = ({ onOpenLogistics, onAddToCart }) => {
  const [selectedProductA, setSelectedProductA] = useState(1); // Rice 50kg
  const [selectedProductB, setSelectedProductB] = useState(4); // Abuja Yam
  const [selectedProductC, setSelectedProductC] = useState(88); // Fresh Tomatoes

  const prodA = PRODUCTS.find(p => p.id === Number(selectedProductA)) || PRODUCTS[0];
  const prodB = PRODUCTS.find(p => p.id === Number(selectedProductB)) || PRODUCTS[3];
  const prodC = PRODUCTS.find(p => p.id === Number(selectedProductC)) || PRODUCTS[20];

  const marketList = MARKETS.filter(m => m.id !== 'all');

  // Calculate market basket cost for these 3 sample items across each market
  const calculateMarketBasket = (marketId) => {
    const priceA = prodA.marketPrices?.[marketId] || prodA.price;
    const priceB = prodB.marketPrices?.[marketId] || prodB.price;
    const priceC = prodC.marketPrices?.[marketId] || prodC.price;
    return priceA + priceB + priceC;
  };

  const marketTotals = marketList.map(m => ({
    ...m,
    total: calculateMarketBasket(m.id)
  }));

  const lowestTotalMarket = [...marketTotals].sort((a, b) => a.total - b.total)[0];
  const highestTotalMarket = [...marketTotals].sort((a, b) => b.total - a.total)[0];
  const potentialSavings = highestTotalMarket.total - lowestTotalMarket.total;

  return (
    <section className="market-tool-section">
      <div className="market-tool-header">
        <div className="tool-title-badge">
          <i className="fa-solid fa-calculator"></i> Smart Price Comparison Engine
        </div>
        <h2>Compare Your Market Basket Across Ibadan</h2>
        <p>
          Pick any 3 items you plan to buy. See which market gives you the best deal before stepping outside.
        </p>
      </div>

      <div className="basket-selector-row">
        <div className="basket-select-item">
          <label><i className="fa-solid fa-1"></i> Item 1:</label>
          <select value={selectedProductA} onChange={e => setSelectedProductA(e.target.value)}>
            {PRODUCTS.slice(0, 30).map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div className="basket-select-item">
          <label><i className="fa-solid fa-2"></i> Item 2:</label>
          <select value={selectedProductB} onChange={e => setSelectedProductB(e.target.value)}>
            {PRODUCTS.slice(0, 30).map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div className="basket-select-item">
          <label><i className="fa-solid fa-3"></i> Item 3:</label>
          <select value={selectedProductC} onChange={e => setSelectedProductC(e.target.value)}>
            {PRODUCTS.slice(30, 80).map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Market Basket Result Cards */}
      <div className="market-basket-cards">
        {marketTotals.map(m => {
          const isCheapest = m.id === lowestTotalMarket.id;
          return (
            <div key={m.id} className={`basket-card ${isCheapest ? 'winner' : ''}`}>
              {isCheapest && <span className="winner-tag"><i className="fa-solid fa-trophy"></i> Best Price</span>}
              <div className="basket-card-title">
                <i className={m.icon} style={{ color: m.accentColor }}></i>
                <strong>{m.shortName} Market</strong>
              </div>
              <div className="basket-card-price">
                ₦{m.total.toLocaleString()}
              </div>
              <p className="basket-card-note">{m.tag}</p>
            </div>
          );
        })}
      </div>

      {/* Savings Summary Callout */}
      {potentialSavings > 0 && (
        <div className="market-savings-alert">
          <div className="savings-icon">
            <i className="fa-solid fa-piggy-bank"></i>
          </div>
          <div className="savings-info">
            <h4>
              You save up to <strong>₦{potentialSavings.toLocaleString()}</strong> by buying at {lowestTotalMarket.name}!
            </h4>
            <p>
              Can't make it to {lowestTotalMarket.shortName}? Let our verified errand shoppers purchase and bring it directly to your home.
            </p>
          </div>
          <button className="primary-btn savings-btn" onClick={onOpenLogistics}>
            <i className="fa-solid fa-motorcycle"></i> Send Shopper to {lowestTotalMarket.shortName}
          </button>
        </div>
      )}
    </section>
  );
};
