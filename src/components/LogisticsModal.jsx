import React, { useState } from 'react';
import { MARKETS, DELIVERY_ZONES, SHOPPER_SERVICES } from '../data/markets';
import { UI_TRANSLATIONS } from '../data/localizations';

export const LogisticsModal = ({ isOpen, onClose, cartTotal, language }) => {
  const [selectedZone, setSelectedZone] = useState(DELIVERY_ZONES[0].id);
  const [selectedShopper, setSelectedShopper] = useState(SHOPPER_SERVICES[0].id);
  const [marketOrigin, setMarketOrigin] = useState('bodija');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const currentZone = DELIVERY_ZONES.find(z => z.id === selectedZone) || DELIVERY_ZONES[0];
  const currentShopper = SHOPPER_SERVICES.find(s => s.id === selectedShopper) || SHOPPER_SERVICES[0];
  const currentMarket = MARKETS.find(m => m.id === marketOrigin) || MARKETS[1];

  const deliveryFee = currentZone.fee;
  const shopperFee = currentShopper.fee;
  const totalLogistics = deliveryFee + shopperFee;
  const grandTotal = cartTotal + totalLogistics;

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const message = `*FOODPRICE (FP) - MARKET ERRAND & DELIVERY ORDER*%0A%0A` +
      `*Customer Name:* ${customerName || 'Customer'}%0A` +
      `*Phone/WhatsApp:* ${customerPhone || 'Not specified'}%0A` +
      `*Preferred Market:* ${currentMarket.name}%0A` +
      `*Delivery Area:* ${currentZone.name}%0A` +
      `*Exact Delivery Address:* ${address || 'To be specified'}%0A` +
      `*Estimated Delivery Time:* ${currentZone.estTime}%0A` +
      `*Shopper Tier:* ${currentShopper.name} (₦${shopperFee.toLocaleString()})%0A` +
      `*Delivery Courier Fee:* ₦${deliveryFee.toLocaleString()}%0A` +
      `*Items in Basket Value:* ₦${cartTotal.toLocaleString()}%0A` +
      `*Estimated Grand Total:* ₦${grandTotal.toLocaleString()}%0A%0A` +
      `*Special Market Instructions / Grocery Notes:* ${notes || 'Fresh and best quality haggling requested.'}%0A%0A` +
      `Please confirm rider availability and shopper assignment.`;

    window.open(`https://wa.me/2348039579410?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        
        <div className="modal-header-badge">
          <span className="logistics-badge">
            <i className="fa-solid fa-motorcycle"></i> Doorstep Logistics & Errand Shopper
          </span>
        </div>

        <h2 className="modal-title" style={{ marginTop: '8px' }}>
          <i className="fa-solid fa-truck-fast" style={{ color: 'var(--primary-color)' }}></i>
          {t.calculateLogistics}
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '14px', marginBottom: '20px' }}>
          {t.logisticsSub}. We inspect the foodstuffs, haggle for the best market rates, package securely, and dispatch straight to your location.
        </p>

        <form onSubmit={handleWhatsAppBooking} className="logistics-grid-form">
          <div className="logistics-col">
            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-store" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                Select Purchase Market:
              </label>
              <select 
                className="form-input" 
                value={marketOrigin} 
                onChange={e => setMarketOrigin(e.target.value)}
              >
                {MARKETS.filter(m => m.id !== 'all').map(m => (
                  <option key={m.id} value={m.id}>
                    {m.name} — ({m.tag})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-location-dot" style={{ color: '#ef4444', marginRight: '6px' }}></i>
                {t.selectDestination}
              </label>
              <select 
                className="form-input" 
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

            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-person-walking-luggage" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                {t.selectShopperTier}
              </label>
              <select 
                className="form-input" 
                value={selectedShopper} 
                onChange={e => setSelectedShopper(e.target.value)}
              >
                {SHOPPER_SERVICES.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} — ₦{s.fee.toLocaleString()}
                  </option>
                ))}
              </select>
              <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>
                {currentShopper.desc}
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">Your Exact Delivery Address:</label>
              <input 
                type="text" 
                required 
                className="form-input" 
                placeholder="e.g. 14, Awolowo Avenue, Old Bodija, Ibadan" 
                value={address} 
                onChange={e => setAddress(e.target.value)} 
              />
            </div>
          </div>

          <div className="logistics-col">
            <div className="form-group">
              <label className="form-label">Full Name:</label>
              <input 
                type="text" 
                required 
                className="form-input" 
                placeholder="e.g. Mrs. Adebayo" 
                value={customerName} 
                onChange={e => setCustomerName(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">WhatsApp or Phone Number:</label>
              <input 
                type="tel" 
                required 
                className="form-input" 
                placeholder="08012345678" 
                value={customerPhone} 
                onChange={e => setCustomerPhone(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Special Market Notes (e.g. ripe/unripe, dry fish type):</label>
              <textarea 
                className="form-input" 
                style={{ height: '70px', resize: 'none' }}
                placeholder="e.g. Please check that the plantain is completely unripe and the yam is dry Abuja tuber."
                value={notes} 
                onChange={e => setNotes(e.target.value)}
              ></textarea>
            </div>

            {/* Price breakdown card */}
            <div className="logistics-summary-card">
              <div className="summary-row">
                <span>Selected Destination:</span>
                <span className="summary-bold">{currentZone.name}</span>
              </div>
              <div className="summary-row">
                <span>Est. Delivery Time:</span>
                <span className="summary-highlight"><i className="fa-regular fa-clock"></i> {currentZone.estTime}</span>
              </div>
              <div className="summary-row">
                <span>Market Shopper Errand:</span>
                <span>₦{shopperFee.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Dispatch Rider / Courier:</span>
                <span>₦{deliveryFee.toLocaleString()}</span>
              </div>
              {cartTotal > 0 && (
                <div className="summary-row">
                  <span>Selected Foodstuffs Value:</span>
                  <span>₦{cartTotal.toLocaleString()}</span>
                </div>
              )}
              <div className="summary-row grand-total-row">
                <span>{cartTotal > 0 ? t.grandTotal : t.deliveryTotal}</span>
                <span className="grand-total-val">₦{(cartTotal > 0 ? grandTotal : totalLogistics).toLocaleString()}</span>
              </div>
            </div>

            <button type="submit" className="primary-btn logistics-submit-btn">
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i>
              Book Market Shopper & Dispatch via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
