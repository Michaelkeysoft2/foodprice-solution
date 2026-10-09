import React, { useState } from 'react';

const FAQS = [
  {
    q: "How does FoodPrice (FP) get verified market prices?",
    a: "Our local market data agents visit Bodija, Ojoo, Sango, Oje, and Dugbe markets every morning. We survey grain wholesalers, yam dealers, cattle and meat stalls, and fresh produce trucks to record true selling prices, not bloated supermarket markups."
  },
  {
    q: "How does the Doorstep Errand Logistics work?",
    a: "If you want foodstuffs from Bodija or Ojoo but don't want to travel, our trained market shoppers act as your personal hands. They inspect the foodstuffs, haggle for the best prices, package them securely, and hand them over to our dispatch riders for doorstep delivery anywhere in Ibadan."
  },
  {
    q: "How much is the market errand and delivery fee?",
    a: "Our errand shopper fee starts at just ₦1,500 for standard hand-picked foodstuffs (or ₦2,500 for heavy whole bags/quarter sharing). Courier delivery fee depends on your zone (from ₦1,200 for UI/Sango/Samonda up to ₦2,800 for Alakia/Airport)."
  },
  {
    q: "Can I order half a bag of rice or share a bag of beans with others?",
    a: "Yes! Simply choose our 'Bulk / Bag Sharing Errand' option or mention it in your WhatsApp order. Our shoppers will facilitate clean, weighed division and package your exact portion."
  },
  {
    q: "How do I pay for my food and delivery?",
    a: "Once your order is confirmed on WhatsApp, you can pay via secure Nigerian bank transfer directly to the logistics desk or on delivery verification."
  }
];

export const MarketFaq = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-header">
        <span className="faq-badge"><i className="fa-regular fa-circle-question"></i> Help & FAQs</span>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about checking market prices and our Ibadan delivery service.</p>
      </div>

      <div className="faq-accordion">
        {FAQS.map((faq, index) => {
          const isOpen = openIdx === index;
          return (
            <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpenIdx(isOpen ? -1 : index)}>
                <span>{faq.q}</span>
                <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
