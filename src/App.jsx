import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { MARKETS } from './data/markets';
import { UI_TRANSLATIONS } from './data/localizations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarketSelector } from './components/MarketSelector';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartModal } from './components/CartModal';
import { LogisticsModal } from './components/LogisticsModal';
import { LogisticsBanner } from './components/LogisticsBanner';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';

const CATEGORIES = [
  { id: 'all', icon: 'fa-solid fa-border-all', names: { en: 'All Foodstuffs', yo: 'Gbogbo Ojà', ig: 'Ngwa Ahịa Niile', ha: 'Duk Kayayyaki', pid: 'All Foodstuff', fr: 'Tous les produits', es: 'Todos los productos' } },
  { id: 'grains', icon: 'fa-solid fa-bowl-rice', names: { en: 'Grains & Tubers', yo: 'Koro & Gbaguda', ig: 'Mkpụrụ & Ji', ha: 'Hatsi & Doya', pid: 'Grains & Yam', fr: 'Céréales et tubercules', es: 'Granos y tubérculos' } },
  { id: 'oils', icon: 'fa-solid fa-bottle-droplet', names: { en: 'Oils & Spices', yo: 'Epo & Olorun', ig: 'Mmanụ & Ngwa Nri', ha: 'Mmai & Kayan Yaji', pid: 'Oils & Spices', fr: 'Huiles et épices', es: 'Aceites y especias' } },
  { id: 'packaged', icon: 'fa-solid fa-box', names: { en: 'Packaged Foods', yo: 'Ounjẹ Ti A Pọn', ig: 'Nri A Nwakọrọ', ha: 'Kayan Abinci a Akwati', pid: 'Packaged Foods', fr: 'Aliments emballés', es: 'Alimentos envasados' } },
  { id: 'beverages', icon: 'fa-solid fa-mug-hot', names: { en: 'Beverages & Dairy', yo: 'Ounjẹ Olomi & Wara', ig: 'Ihe Ọṅụṅụ & Mmiri Ara', ha: 'Abubuwan Sha & Wara', pid: 'Drinks & Milk', fr: 'Boissons et produits laitiers', es: 'Bebidas y lácteos' } },
  { id: 'meat', icon: 'fa-solid fa-drumstick-bite', names: { en: 'Meat & Poultry', yo: 'Eran & Eiye', ig: 'Anụ & Ọkụkọ', ha: 'Nama & Kaji', pid: 'Meat & Chicken', fr: 'Viande et volaille', es: 'Carne y aves' } },
  { id: 'fresh', icon: 'fa-solid fa-leaf', names: { en: 'Fresh Produce', yo: 'Efo & Eso Titun', ig: 'Nri Ọhụrụ', ha: 'Kayan Lambu', pid: 'Fresh Vegetables', fr: 'Produits frais', es: 'Productos frescos' } }
];

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(amount);
};

const ToastContainer = ({ toasts }) => {
  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className="toast" style={toast.fading ? { animation: 'fadeOutRight 0.3s forwards' } : {}}>
          <i className="fa-solid fa-circle-check"></i>
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [language, setLanguage] = useState(localStorage.getItem('foodprice_lang') || 'en');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMarket, setActiveMarket] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [cartItems, setCartItems] = useState([]);
  const [toasts, setToasts] = useState([]);
  
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLogisticsOpen, setIsLogisticsOpen] = useState(false);
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync theme
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync language selection
  useEffect(() => {
    localStorage.setItem('foodprice_lang', language);
  }, [language]);

  // Load user
  useEffect(() => {
    const savedUser = localStorage.getItem('foodprice_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleToggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Filter products by category, market, and search
  const displayedProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (p.badge && p.badge.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
    const toastMsg = (t.toastAdded || "Added {product} to cart!").replace('{product}', product.name);

    const newToast = { id: Date.now(), message: toastMsg };
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.map(t => t.id === newToast.id ? { ...t, fading: true } : t));
      setTimeout(() => setToasts(prev => prev.filter(t => t.id !== newToast.id)), 300);
    }, 3000);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const currentMarketObj = MARKETS.find(m => m.id === activeMarket) || MARKETS[0];

  return (
    <div className="app-container">
      {/* Top Banner */}
      <div className="top-bar">
        <i className="fa-solid fa-bolt" style={{ color: '#facc15', marginRight: '6px' }}></i>
        {t.topBarText}
      </div>

      {/* Main Navigation Header */}
      <Header 
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        user={user}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLogistics={() => setIsLogisticsOpen(true)}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Market Selector Bar */}
      <MarketSelector 
        activeMarket={activeMarket}
        setActiveMarket={setActiveMarket}
        language={language}
      />

      <div className="main-layout">
        {/* Categories Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-title">
            <i className="fa-solid fa-list" style={{ marginRight: '6px', color: 'var(--primary-color)' }}></i>
            {t.categoriesTitle}
          </div>
          <ul className="category-list">
            {CATEGORIES.map(cat => (
              <li 
                key={cat.id} 
                className={`category-item ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <i className={cat.icon}></i>
                <span>{cat.names[language] || cat.names.en}</span>
              </li>
            ))}
          </ul>

          {/* Quick Errand Callout on Sidebar */}
          <div className="sidebar-logistics-card">
            <div className="logistics-mini-icon">
              <i className="fa-solid fa-person-walking-luggage"></i>
            </div>
            <h4>Too busy to visit {currentMarketObj.shortName}?</h4>
            <p>Our errand shopper will buy fresh and dispatch to your doorstep.</p>
            <button 
              className="sidebar-errand-btn"
              onClick={() => setIsLogisticsOpen(true)}
            >
              <i className="fa-solid fa-motorcycle"></i> Book Errand Shopper
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <main className="content-area">
          {activeCategory === 'all' && !searchQuery && (
            <Hero 
              language={language} 
              onOpenLogistics={() => setIsLogisticsOpen(true)}
              onScrollToProducts={scrollToProducts}
            />
          )}

          {/* Market Status Strip */}
          <div className="market-status-strip">
            <div className="status-left">
              <span className="market-indicator-badge" style={{ backgroundColor: currentMarketObj.accentColor }}>
                <i className={currentMarketObj.icon}></i> {currentMarketObj.name}
              </span>
              <span className="market-status-note">
                {currentMarketObj.description} • <strong>{currentMarketObj.tag}</strong>
              </span>
            </div>
            <div className="status-right">
              <button className="market-rates-btn" onClick={() => setIsLogisticsOpen(true)}>
                <i className="fa-solid fa-truck-fast"></i> Calculate Logistics
              </button>
            </div>
          </div>

          <div id="products-section" className="section-title">
            <div>
              {searchQuery ? `Search Results for "${searchQuery}"` : (CATEGORIES.find(c => c.id === activeCategory)?.names[language] || 'All Foodstuffs')}
              <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-light)', marginLeft: '10px' }}>
                ({displayedProducts.length} {t.items})
              </span>
            </div>
          </div>

          {displayedProducts.length === 0 ? (
            <div className="no-products-box">
              <i className="fa-solid fa-basket-shopping"></i>
              <h2>{t.noProductsFoundTitle}</h2>
              <p>{t.noProductsFoundDesc}</p>
            </div>
          ) : (
            <div className="product-grid">
              {displayedProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  activeMarket={activeMarket}
                  onAddToCart={handleAddToCart}
                  onClickCard={setSelectedProduct}
                  language={language}
                />
              ))}
            </div>
          )}

          {/* Doorstep Logistics Full Banner */}
          <LogisticsBanner 
            onOpenLogistics={() => setIsLogisticsOpen(true)}
            language={language}
          />
        </main>
      </div>

      {/* Floating Doorstep Logistics Quick Button */}
      <button 
        className="floating-logistics-action-btn"
        onClick={() => setIsLogisticsOpen(true)}
        title="Book market errand or calculate delivery"
      >
        <span className="pulse-indicator"></span>
        <i className="fa-solid fa-motorcycle"></i>
        <span>Doorstep Logistics</span>
      </button>

      {/* Footer */}
      <Footer 
        language={language}
        onOpenLogistics={() => setIsLogisticsOpen(true)}
        onSelectMarket={(marketId) => {
          setActiveMarket(marketId);
          scrollToProducts();
        }}
      />

      {/* Modals */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={setUser} 
        language={language} 
      />

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onOpenLogistics={() => {
          setIsCartOpen(false);
          setIsLogisticsOpen(true);
        }}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        language={language} 
      />

      <ProductDetailModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
        activeMarket={activeMarket}
        onAddToCart={handleAddToCart}
        onOpenLogistics={() => {
          setSelectedProduct(null);
          setIsLogisticsOpen(true);
        }}
        language={language}
        formatCurrency={formatCurrency}
      />

      <LogisticsModal 
        isOpen={isLogisticsOpen}
        onClose={() => setIsLogisticsOpen(false)}
        cartTotal={cartTotal}
        language={language}
      />

      <ToastContainer toasts={toasts} />
    </div>
  );
}
