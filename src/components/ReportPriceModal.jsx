import React, { useState } from 'react';
import { MARKETS, BANK_DETAILS } from '../data/markets';

export const ReportPriceModal = ({ isOpen, onClose }) => {
  const [productName, setProductName] = useState('');
  const [market, setMarket] = useState('bodija');
  const [pricePaid, setPricePaid] = useState('');
  const [unit, setUnit] = useState('1 Paint Bucket');
  const [notes, setNotes] = useState('');
  const [reported, setReported] = useState(false);

  if (!isOpen) return null;

  const currentMarket = MARKETS.find(m => m.id === market) || MARKETS[1];

  const handleSubmitReport = (e) => {
    e.preventDefault();

    const msg = `*FOODPRICE (FP) - COMMUNITY PRICE REPORT*%0A%0A` +
      `*Item:* ${productName}%0A` +
      `*Quantity / Unit:* ${unit}%0A` +
      `*Price Paid:* ₦${Number(pricePaid).toLocaleString()}%0A` +
      `*Market Purchased From:* ${currentMarket.name}%0A` +
      (notes ? `*Stall / Quality Note:* ${notes}%0A%0A` : '%0A') +
      `Reporting from my shopping trip today for FoodPrice data verification.`;

    window.open(`https://wa.me/${BANK_DETAILS.whatsappSupport}?text=${msg}`, '_blank');
    setReported(true);
    setTimeout(() => {
      setReported(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>

        <div className="modal-header-badge">
          <span className="logistics-badge" style={{ background: '#fef3c7', color: '#b45309', borderColor: '#f59e0b' }}>
            <i className="fa-solid fa-bullhorn"></i> Community Market Intelligence
          </span>
        </div>

        <h2 className="modal-title" style={{ marginTop: '8px' }}>
          <i className="fa-solid fa-pen-nib" style={{ color: 'var(--primary-color)' }}></i>
          Report Today's Stall Price
        </h2>

        <p style={{ color: 'var(--text-medium)', fontSize: '13.5px', marginBottom: '18px' }}>
          Did you shop in Bodija, Ojoo, Sango, Oje or Dugbe today? Report the price you paid to help keep Ibadan food prices accurate and transparent.
        </p>

        {reported ? (
          <div style={{ textAlign: 'center', padding: '30px 10px', color: '#059669' }}>
            <i className="fa-solid fa-circle-check" style={{ fontSize: '48px', marginBottom: '12px' }}></i>
            <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Thank You for Reporting!</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-medium)' }}>
              Our data desk will verify with our stall agents and update today's live rate.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitReport}>
            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-carrot" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                Foodstuff Item Name:
              </label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. White Ijebu Garri, Titus Fish, Sweet Potatoes"
                value={productName}
                onChange={e => setProductName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-store" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                Market You Bought From:
              </label>
              <select className="form-input" value={market} onChange={e => setMarket(e.target.value)}>
                {MARKETS.filter(m => m.id !== 'all').map(m => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-weight-scale" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                Measure / Unit:
              </label>
              <select className="form-input" value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="1 Paint Bucket">1 Paint Bucket (4 Liters)</option>
                <option value="1 Mudu / Derica">1 Mudu / Derica (Congo)</option>
                <option value="50kg Bag">50kg Bag</option>
                <option value="25kg Half Bag">25kg Half Bag</option>
                <option value="100kg Full Scribe Bag">100kg Full Scribe Bag</option>
                <option value="5 Large Tubers">5 Large Tubers (Yam)</option>
                <option value="1 Big Basket (Pepper/Tomato)">1 Big Basket (Pepper/Tomato)</option>
                <option value="25L Jerrycan (Oil)">25L Jerrycan (Oil)</option>
                <option value="Single Piece / Kilo">Single Piece / Kilo</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-naira-sign" style={{ color: '#10b981', marginRight: '6px' }}></i>
                Exact Price You Paid (₦):
              </label>
              <input 
                type="number" 
                className="form-input" 
                placeholder="e.g. 6000"
                value={pricePaid}
                onChange={e => setPricePaid(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-comment-dots" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                Quality Note / Stall Location (Optional):
              </label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Middle gate, very dry, sweet without stone"
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </div>

            <button type="submit" className="primary-btn checkout-whatsapp-btn">
              <i className="fa-solid fa-paper-plane"></i> Submit Price Report to Data Desk
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
