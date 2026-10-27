import React, { useState } from 'react';
import { MARKETS, DELIVERY_ZONES, SHOPPER_SERVICES, BANK_DETAILS } from '../data/markets';
import { UI_TRANSLATIONS } from '../data/localizations';

export const CartModal = ({ isOpen, onClose, cartItems, onOpenLogistics, language, onUpdateQuantity, onRemoveItem }) => {
  const [selectedZone, setSelectedZone] = useState(DELIVERY_ZONES[0].id);
  const [selectedShopper, setSelectedShopper] = useState(SHOPPER_SERVICES[0].id);
  const [includeLogistics, setIncludeLogistics] = useState(true);
  const [copiedBank, setCopiedBank] = useState(false);

  if (!isOpen) return null;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const itemsTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const currentZone = DELIVERY_ZONES.find(z => z.id === selectedZone) || DELIVERY_ZONES[0];
  const currentShopper = SHOPPER_SERVICES.find(s => s.id === selectedShopper) || SHOPPER_SERVICES[0];

  const deliveryFee = includeLogistics ? currentZone.fee : 0;
  const shopperFee = includeLogistics ? currentShopper.fee : 0;
  const logisticsTotal = deliveryFee + shopperFee;
  const grandTotal = itemsTotal + logisticsTotal;

  const handleCheckoutWhatsApp = () => {
    let itemsText = cartItems.map((item, idx) => 
      `${idx + 1}. ${item.name} - Qty: ${item.quantity} (₦${(item.price * item.quantity).toLocaleString()})`
    ).join('%0A');

    const msg = `*FOODPRICE (FP) - MARKET BASKET ORDER*%0A%0A` +
      `*Items List:*%0A${itemsText}%0A%0A` +
      `*Foodstuff Total:* ₦${itemsTotal.toLocaleString()}%0A` +
      (includeLogistics ? 
        `*Doorstep Errand & Logistics Included:*%0A` +
        `- Destination: ${currentZone.name} (₦${deliveryFee.toLocaleString()})%0A` +
        `- Shopper Service: ${currentShopper.name} (₦${shopperFee.toLocaleString()})%0A` +
        `- Logistics Total: ₦${logisticsTotal.toLocaleString()}%0A` +
        `*Grand Total:* ₦${grandTotal.toLocaleString()}%0A%0A` +
        `Please confirm my shopper assignment and delivery rider.` : 
        `*Self-Pickup or In-Market Inquiry only.*`);

    window.open(`https://wa.me/2348039579410?text=${msg}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        <h2 className="modal-title">
          <i className="fa-solid fa-basket-shopping" style={{ color: 'var(--primary-color)' }}></i> 
          {t.cartTitle}
        </h2>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--text-medium)' }}>
            <i className="fa-solid fa-cart-arrow-down" style={{ fontSize: '48px', color: 'var(--text-light)', marginBottom: '16px' }}></i>
            <p style={{ fontSize: '16px', fontWeight: '500' }}>{t.cartEmpty}</p>
            <p style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '8px' }}>
              Check live prices across Bodija, Ojoo, Sango and Oje and add fresh foodstuffs to your basket.
            </p>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-market-tag">
                      <i className="fa-solid fa-store" style={{ color: 'var(--primary-color)' }}></i> Best source: {item.primaryMarket ? item.primaryMarket.toUpperCase() : 'BODIJA'}
                    </div>
                    <div className="cart-qty-row">
                      <div className="qty-control small">
                        <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <span className="cart-item-unit-price">@ ₦{item.price.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="cart-item-price-actions">
                    <div className="cart-item-price">₦{(item.price * item.quantity).toLocaleString()}</div>
                    <button className="remove-item-btn" onClick={() => onRemoveItem(item.id)} title="Remove item">
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Logistics Option Box inside Cart */}
            <div className="cart-logistics-card">
              <div className="logistics-toggle-header">
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    checked={includeLogistics} 
                    onChange={e => setIncludeLogistics(e.target.checked)} 
                  />
                  <span className="checkmark"></span>
                  <strong>Deliver to My Doorstep via FP Market Logistics</strong>
                </label>
                <span className="logistics-hint-tag">Bodija • Ojoo • Sango • Oje</span>
              </div>

              {includeLogistics && (
                <div className="cart-logistics-options">
                  <div className="form-group" style={{ marginBottom: '8px' }}>
                    <label className="form-label" style={{ fontSize: '12px' }}>
                      <i className="fa-solid fa-location-dot" style={{ color: '#ef4444' }}></i> Delivery Area in Ibadan:
                    </label>
                    <select 
                      className="form-input" 
                      style={{ padding: '8px 12px', fontSize: '13px' }}
                      value={selectedZone} 
                      onChange={e => setSelectedZone(e.target.value)}
                    >
                      {DELIVERY_ZONES.map(z => (
                        <option key={z.id} value={z.id}>
                          {z.name} — ₦{z.fee.toLocaleString()} ({z.estTime})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '0' }}>
                    <label className="form-label" style={{ fontSize: '12px' }}>
                      <i className="fa-solid fa-person-walking-luggage" style={{ color: 'var(--primary-color)' }}></i> Errand Shopper Handling:
                    </label>
                    <select 
                      className="form-input" 
                      style={{ padding: '8px 12px', fontSize: '13px' }}
                      value={selectedShopper} 
                      onChange={e => setSelectedShopper(e.target.value)}
                    >
                      {SHOPPER_SERVICES.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.name} — ₦{s.fee.toLocaleString()}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Total Breakdown */}
            <div className="cart-summary-block">
              <div className="summary-row">
                <span>{t.cartTotal}</span>
                <span>₦{itemsTotal.toLocaleString()}</span>
              </div>
              {includeLogistics && (
                <>
                  <div className="summary-row">
                    <span>Market Shopper Errand:</span>
                    <span>₦{shopperFee.toLocaleString()}</span>
                  </div>
                  <div className="summary-row">
                    <span>Dispatch Delivery ({currentZone.estTime}):</span>
                    <span>₦{deliveryFee.toLocaleString()}</span>
                  </div>
                </>
              )}
              <div className="summary-row grand-total-row">
                <span>Total Amount:</span>
                <span className="grand-total-val">₦{grandTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Direct Bank Transfer Option */}
            <div className="bank-transfer-box">
              <div className="bank-transfer-header">
                <i className="fa-solid fa-building-columns"></i>
                <div>
                  <strong>Direct Bank Transfer Option</strong>
                  <span>Pay directly or on WhatsApp verification</span>
                </div>
              </div>
              <div className="bank-details-row">
                <div className="bank-field">
                  <span className="bank-field-label">Bank:</span>
                  <strong>{BANK_DETAILS.bankName}</strong>
                </div>
                <div className="bank-field">
                  <span className="bank-field-label">Account No:</span>
                  <div className="account-copy-badge">
                    <code>{BANK_DETAILS.accountNumber}</code>
                    <button 
                      type="button" 
                      className="copy-btn" 
                      onClick={handleCopyAccount}
                      title="Copy account number"
                    >
                      <i className={copiedBank ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                      {copiedBank ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
                <div className="bank-field">
                  <span className="bank-field-label">Name:</span>
                  <span>{BANK_DETAILS.accountName}</span>
                </div>
              </div>
            </div>

            <div className="cart-modal-actions">
              <button className="primary-btn checkout-whatsapp-btn" onClick={handleCheckoutWhatsApp}>
                <i className="fa-brands fa-whatsapp"></i> {t.proceedCheckout}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
