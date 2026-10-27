import React, { useState } from 'react';
import { BANK_DETAILS } from '../data/markets';

export const PriceAlertModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedMarkets, setSelectedMarkets] = useState(['bodija', 'ojoo', 'oje']);
  const [joined, setJoined] = useState(false);

  if (!isOpen) return null;

  const toggleMarket = (marketId) => {
    setSelectedMarkets(prev => 
      prev.includes(marketId) ? prev.filter(m => m !== marketId) : [...prev, marketId]
    );
  };

  const handleSubscribeWhatsApp = (e) => {
    e.preventDefault();
    const marketNames = selectedMarkets.join(', ').toUpperCase();

    const message = `*FOODPRICE (FP) - DAILY PRICE BROADCAST SIGNUP*%0A%0A` +
      `*Name:* ${name || 'Shopper'}%0A` +
      `*WhatsApp Phone:* ${phone || 'This WhatsApp number'}%0A` +
      `*Target Markets for Alerts:* ${marketNames}%0A%0A` +
      `Please add me to the morning 7:30 AM broadcast list for verified foodstuff prices in Ibadan.`;

    window.open(`https://wa.me/${BANK_DETAILS.whatsappSupport}?text=${message}`, '_blank');
    setJoined(true);
    setTimeout(() => {
      setJoined(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>

        <div className="modal-header-badge">
          <span className="logistics-badge" style={{ background: '#ecfdf5', color: '#059669', borderColor: '#10b981' }}>
            <i className="fa-brands fa-whatsapp"></i> Morning Price Broadcast Club
          </span>
        </div>

        <h2 className="modal-title" style={{ marginTop: '8px' }}>
          <i className="fa-solid fa-bell" style={{ color: '#059669' }}></i>
          Get Daily Ibadan Food Prices on WhatsApp
        </h2>

        <p style={{ color: 'var(--text-medium)', fontSize: '13.5px', marginBottom: '18px' }}>
          Don't get overcharged at the market. Every morning between <strong>7:30 AM & 8:00 AM</strong>, our on-the-ground agents send verified prices of Rice, Beans, Garri, Yam, Peppers & Palm Oil straight to your phone.
        </p>

        {joined ? (
          <div style={{ textAlign: 'center', padding: '30px 10px', color: '#059669' }}>
            <i className="fa-solid fa-circle-check" style={{ fontSize: '48px', marginBottom: '12px' }}></i>
            <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Welcome to the Broadcast Club!</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-medium)' }}>
              Opening WhatsApp to confirm your number. You will receive tomorrow morning's price bulletin.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribeWhatsApp}>
            <div className="form-group">
              <label className="form-label">
                <i className="fa-solid fa-user" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                Your Name:
              </label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Mrs. Adeola"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <i className="fa-brands fa-whatsapp" style={{ color: '#25d366', marginRight: '6px' }}></i>
                WhatsApp Phone Number:
              </label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="e.g. 08012345678"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ marginBottom: '8px' }}>
                <i className="fa-solid fa-store" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                Select Markets You Want Updates From:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  { id: 'bodija', name: 'Bodija (Grains & Yam)' },
                  { id: 'ojoo', name: 'Ojoo (Peppers & Onions)' },
                  { id: 'oje', name: 'Oje (Palm Oil & Herbs)' },
                  { id: 'sango', name: 'Sango (Retail Staples)' },
                  { id: 'dugbe', name: 'Dugbe (Packaged Goods)' }
                ].map(m => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => toggleMarket(m.id)}
                    style={{
                      background: selectedMarkets.includes(m.id) ? 'var(--primary-color)' : 'var(--bg-main)',
                      color: selectedMarkets.includes(m.id) ? 'white' : 'var(--text-dark)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '20px',
                      padding: '5px 12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {selectedMarkets.includes(m.id) ? '✓ ' : '+ '} {m.name}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--bg-main)', padding: '10px 14px', borderRadius: '10px', fontSize: '12px', color: 'var(--text-medium)', marginBottom: '16px' }}>
              <i className="fa-solid fa-shield-halved" style={{ color: '#10b981', marginRight: '6px' }}></i>
              100% Free. No spam. You can unsubscribe anytime by replying "STOP".
            </div>

            <button type="submit" className="primary-btn checkout-whatsapp-btn">
              <i className="fa-brands fa-whatsapp"></i> Join WhatsApp Price Broadcast (Free)
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
