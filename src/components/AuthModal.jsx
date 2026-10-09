import React, { useState } from 'react';
import { UI_TRANSLATIONS } from '../data/localizations';

export const AuthModal = ({ isOpen, onClose, onLogin, language }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', phone: '', password: '' });
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem('foodprice_user') || 'null');
      if (savedUser && savedUser.phone === formData.phone) {
        onLogin(savedUser);
        onClose();
      } else {
        // Log user in with entered phone for convenience
        const userObj = { name: savedUser?.name || 'Customer', phone: formData.phone };
        localStorage.setItem('foodprice_user', JSON.stringify(userObj));
        onLogin(userObj);
        onClose();
      }
    } else {
      localStorage.setItem('foodprice_user', JSON.stringify(formData));
      onLogin(formData);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        <h2 className="modal-title">
          <i className="fa-regular fa-user" style={{ color: 'var(--primary-color)' }}></i>
          {isLogin ? t.welcomeBack : t.createAccount}
        </h2>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label className="form-label">{t.fullName}</label>
              <input 
                type="text" 
                required 
                className="form-input" 
                placeholder="e.g. Adebayo Michael" 
                value={formData.name} 
                onChange={e => setFormData({ ...formData, name: e.target.value })} 
              />
            </div>
          )}
          <div className="form-group">
            <label className="form-label">{t.phoneNumber}</label>
            <input 
              type="tel" 
              required 
              className="form-input" 
              placeholder="08012345678" 
              value={formData.phone} 
              onChange={e => setFormData({ ...formData, phone: e.target.value })} 
            />
          </div>
          <div className="form-group">
            <label className="form-label">{t.password}</label>
            <input 
              type="password" 
              required 
              className="form-input" 
              placeholder="••••••••" 
              value={formData.password} 
              onChange={e => setFormData({ ...formData, password: e.target.value })} 
            />
          </div>
          
          <button type="submit" className="primary-btn">{isLogin ? t.login : t.signUp}</button>
        </form>
        
        <div className="toggle-auth">
          <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? t.switchSignUp : t.switchLogin}</span>
        </div>
      </div>
    </div>
  );
};
