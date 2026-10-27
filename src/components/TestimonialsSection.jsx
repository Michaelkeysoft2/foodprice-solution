import React from 'react';
import { TESTIMONIALS } from '../data/markets';

export const TestimonialsSection = ({ onOpenCustomList }) => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-badge">
          <i className="fa-solid fa-star"></i> Real Ibadan Shopper Reviews
        </span>
        <h2>Trusted by Busy Families, Students & Professionals</h2>
        <p>See why thousands across Ibadan use FoodPrice to monitor food budgets and skip market stress.</p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map(t => (
          <div key={t.id} className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(t.rating)].map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
              <span className="testimonial-tag">{t.tag}</span>
            </div>

            <p className="testimonial-quote">"{t.quote}"</p>

            <div className="testimonial-author">
              <div className="author-avatar">
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="author-info">
                <h4>{t.name}</h4>
                <span><i className="fa-solid fa-location-dot"></i> {t.location} • Bought from {t.market}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-bottom-cta">
        <div className="cta-left">
          <i className="fa-solid fa-hand-holding-heart"></i>
          <div>
            <strong>Ready to save time, transport fare and energy?</strong>
            <p>Our market shoppers are on standby across Bodija, Ojoo, Sango, Oje & Dugbe.</p>
          </div>
        </div>
        <button className="primary-btn" onClick={onOpenCustomList}>
          <i className="fa-solid fa-clipboard-list"></i> Send Your Grocery List Now
        </button>
      </div>
    </section>
  );
};
