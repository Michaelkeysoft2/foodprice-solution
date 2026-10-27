import React, { useState } from 'react';
import { MARKETS, DELIVERY_ZONES, SHOPPER_SERVICES, BANK_DETAILS } from '../data/markets';

export const CustomGroceryListModal = ({ isOpen, onClose, language }) => {
  const [listText, setListText] = useState('');
  const [marketOrigin, setMarketOrigin] = useState('bodija');
  const [selectedZone, setSelectedZone] = useState(DELIVERY_ZONES[0].id);
  const [selectedShopper, setSelectedShopper] = useState(SHOPPER_SERVICES[0].id);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [budgetLimit, setBudgetLimit] = useState('');

  if (!isOpen) return null;

  const currentZone = DELIVERY_ZONES.find(z => z.id === selectedZone) || DELIVERY_ZONES[0];
  const currentShopper = SHOPPER_SERVICES.find(s => s.id === selectedShopper) || SHOPPER_SERVICES[0];
  const currentMarket = MARKETS.find(m => m.id === marketOrigin) || MARKETS[1];
  const logisticsTotal = currentZone.fee + currentShopper.fee;

  const sampleItems = [
    '2 mudu of stone-free Oloyin beans',
    '3 large Abuja yams (sweet for boiling)',
    'Fresh tomatoes & rodo of ₦3,000 from Ojoo',
    '1 bottle of pure unadulterated red palm oil from Oje',
    'Half bag (25kg) of foreign parboiled rice'
  ];

  const handleInsertSample = (item) => {
    setListText(prev => prev ? `${prev}\n• ${item}` : `• ${item}`);
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    if (!listText.trim()) {
      alert('Please enter or paste at least one item on your shopping list.');
      return;
    }

    const message = `*FOODPRICE (FP) - CUSTOM MARKET SHOPPING LIST*%0A%0A` +
      `*Customer Name:* ${customerName || 'Customer'}%0A` +
      `*Phone Number:* ${customerPhone || 'Not specified'}%0A` +
      `*Preferred Market:* ${currentMarket.name}%0A` +
      `*Delivery Area in Ibadan:* ${currentZone.name}%0A` +
      `*Address:* ${deliveryAddress || 'To be shared on chat'}%0A` +
      (budgetLimit ? `*Estimated Budget Limit:* ₦${Number(budgetLimit).toLocaleString()}%0A` : '') +
      `*Shopper Fee:* ₦${currentShopper.fee.toLocaleString()} (${currentShopper.name})%0A` +
      `*Dispatch Courier:* ₦${currentZone.fee.toLocaleString()} (${currentZone.estTime})%0A` +
      `*Total Service & Delivery Fee:* ₦${logisticsTotal.toLocaleString()}%0A%0A` +
      `*--- MY GROCERY LIST ---*%0A` +
      encodeURIComponent(listText) + `%0A%0A` +
      `Please assign a market shopper to inspect, haggle, and confirm the item costs before purchase.`;

    window.open(`https://wa.me/${BANK_DETAILS.whatsappSupport}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>

        <div className="modal-header-badge">
          <span className="logistics-badge">
            <i className="fa-solid fa-clipboard-list"></i> Personalized Market Errand
          </span>
        </div>

        <h2 className="modal-title" style={{ marginTop: '6px' }}>
          <i className="fa-solid fa-pen-to-square" style={{ color: 'var(--primary-color)' }}></i>
          Send Us Your Custom Shopping List
        </h2>
        <p style={{ color: 'var(--text-medium)', fontSize: '13.5px', marginBottom: '18px' }}>
          Have a written market list? Paste or type any foodstuffs you need from <strong>Bodija, Ojoo, Sango, Oje, or Dugbe</strong>. Our expert market shopper will buy fresh, haggle prices, and deliver straight to your doorstep.
        </p>

        <form onSubmit={handleSendWhatsApp}>
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label className="form-label" style={{ marginBottom: 0 }}>
                <i className="fa-solid fa-basket-shopping" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                Items to Buy (Foodstuffs, Quantities, Spices, Meat, etc.):
              </label>
              <span style={{ fontSize: '11px', color: 'var(--text-light)' }}>One item per line</span>
            </div>

            <textarea
              className="form-input"
              rows={5}
              placeholder="Example:&#10;• 5kg of semovita&#10;• 4 paint buckets of white garri&#10;• ₦2,000 fresh rodo & tatashe&#10;• 3 pieces of smoked catfish&#10;• 1 carton of Indomie noodles"
              value={listText}
              onChange={e => setListText(e.target.value)}
              style={{ fontFamily: 'inherit', resize: 'vertical' }}
              required
            />

            {/* Quick helper tags */}
            <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
              <span style={{ fontSize: '11.5px', color: 'var(--text-medium)', fontWeight: 600 }}>Quick Add:</span>
              {sampleItems.slice(0, 3).map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleInsertSample(item)}
                  style={{
                    background: 'var(--bg-main)',
                    border: '1px dashed var(--primary-color)',
                    borderRadius: '14px',
                    padding: '3px 9px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    color: 'var(--text-dark)'
                  }}
                >
                  + {item}
                </button>
              ))}
            </div>
          </div>

          <div className="logistics-grid-form" style={{ marginTop: '16px' }}>
            <div className="logistics-col">
              <div className="form-group">
                <label className="form-label">
                  <i className="fa-solid fa-store" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                  Where Should We Buy From?
                </label>
                <select 
                  className="form-input"
                  value={marketOrigin}
                  onChange={e => setMarketOrigin(e.target.value)}
                >
                  {MARKETS.filter(m => m.id !== 'all').map(m => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.tag})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <i className="fa-solid fa-location-dot" style={{ color: '#ef4444', marginRight: '6px' }}></i>
                  Delivery Zone in Ibadan:
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
                  <i className="fa-solid fa-naira-sign" style={{ color: '#10b981', marginRight: '6px' }}></i>
                  Estimated Food Budget Limit (Optional):
                </label>
                <input 
                  type="number" 
                  className="form-input" 
                  placeholder="e.g. 35000"
                  value={budgetLimit}
                  onChange={e => setBudgetLimit(e.target.value)}
                />
              </div>
            </div>

            <div className="logistics-col">
              <div className="form-group">
                <label className="form-label">
                  <i className="fa-solid fa-user" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                  Your Name:
                </label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Mr. Kolawole"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <i className="fa-solid fa-phone" style={{ color: 'var(--primary-color)', marginRight: '6px' }}></i>
                  WhatsApp / Phone Number:
                </label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="e.g. 08012345678"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <i className="fa-solid fa-map-pin" style={{ color: '#ef4444', marginRight: '6px' }}></i>
                  Exact Street Address / Landmark:
                </label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Near UI 2nd Gate, Agbowo"
                  value={deliveryAddress}
                  onChange={e => setDeliveryAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Pricing summary card */}
          <div className="cart-summary-block" style={{ marginTop: '14px', marginBottom: '16px' }}>
            <div className="summary-row">
              <span>Market Shopper Fee ({currentShopper.name}):</span>
              <span>₦{currentShopper.fee.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Doorstep Dispatch Rider ({currentZone.estTime}):</span>
              <span>₦{currentZone.fee.toLocaleString()}</span>
            </div>
            <div className="summary-row grand-total-row">
              <span>Total Service & Delivery Charge:</span>
              <span className="grand-total-val">₦{logisticsTotal.toLocaleString()}</span>
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-light)', marginTop: '4px' }}>
              *Foodstuffs are purchased at the exact stall price with receipt/photo verification sent to your WhatsApp.
            </div>
          </div>

          <button type="submit" className="primary-btn checkout-whatsapp-btn">
            <i className="fa-brands fa-whatsapp"></i> Send Shopping List to WhatsApp Shopper
          </button>
        </form>
      </div>
    </div>
  );
};
