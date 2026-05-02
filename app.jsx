const { useState, useEffect } = React;

// --- MASSIVE MOCK DATABASE ---
const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'fa-solid fa-border-all' },
  { id: 'grains', name: 'Grains & Tubers', icon: 'fa-solid fa-bowl-rice' },
  { id: 'oils', name: 'Oils & Spices', icon: 'fa-solid fa-bottle-droplet' },
  { id: 'packaged', name: 'Packaged Foods', icon: 'fa-solid fa-box' },
  { id: 'beverages', name: 'Beverages & Dairy', icon: 'fa-solid fa-mug-hot' },
  { id: 'meat', name: 'Meat & Poultry', icon: 'fa-solid fa-drumstick-bite' },
  { id: 'fresh', name: 'Fresh Produce', icon: 'fa-solid fa-leaf' }
];

const PRODUCTS = [
  // --- GRAINS & TUBERS ---
  { id: 1, category: 'grains', name: 'Premium Parboiled Rice - 50kg Bag', price: 85000, oldPrice: 95000, img: 'assets/rice.png' },
  { id: 2, category: 'grains', name: 'Oloyin Honey Beans - 1 Paint Bucket', price: 8500, oldPrice: 9000, img: 'assets/rice.png' },
  { id: 3, category: 'grains', name: 'Ijebu Garri - 1 Paint Bucket', price: 4500, oldPrice: 5000, img: 'https://picsum.photos/300/300?random=1' },
  { id: 4, category: 'grains', name: 'Abuja Yam - Large Tuber (Set of 5)', price: 12000, oldPrice: null, img: 'https://picsum.photos/300/300?random=2' },
  { id: 5, category: 'grains', name: 'Golden Penny Semovita - 2kg', price: 5200, oldPrice: 6000, img: 'https://picsum.photos/300/300?random=3' },
  { id: 6, category: 'grains', name: 'Mama Gold Flour - 50kg', price: 60000, oldPrice: 62000, img: 'https://picsum.photos/300/300?random=4' },
  { id: 7, category: 'grains', name: 'Ofada Rice - 5kg', price: 15000, oldPrice: 18000, img: 'https://picsum.photos/300/300?random=5' },
  { id: 8, category: 'grains', name: 'White Beans (Iron Beans) - 1 Paint', price: 7500, oldPrice: 8000, img: 'https://picsum.photos/300/300?random=6' },
  { id: 9, category: 'grains', name: 'Poundo Yam Flour - 5kg', price: 18500, oldPrice: 20000, img: 'https://picsum.photos/300/300?random=7' },
  { id: 10, category: 'grains', name: 'Yellow Garri (Edo) - 1 Paint', price: 5000, oldPrice: 5500, img: 'https://picsum.photos/300/300?random=8' },
  { id: 11, category: 'grains', name: 'Basmati Rice (Royal) - 5kg', price: 22000, oldPrice: 25000, img: 'https://picsum.photos/300/300?random=9' },
  { id: 12, category: 'grains', name: 'Unripe Plantain - Bunch', price: 4500, oldPrice: null, img: 'https://picsum.photos/300/300?random=10' },
  { id: 13, category: 'grains', name: 'Sweet Potatoes - Small Basket', price: 3500, oldPrice: null, img: 'https://picsum.photos/300/300?random=11' },
  { id: 14, category: 'grains', name: 'Irish Potatoes - Small Basket', price: 8000, oldPrice: 9000, img: 'https://picsum.photos/300/300?random=12' },
  { id: 15, category: 'grains', name: 'Wheat Flour - 1kg', price: 1500, oldPrice: null, img: 'https://picsum.photos/300/300?random=13' },
  { id: 16, category: 'grains', name: 'Elubo (Yam Flour) - 1 Paint', price: 6500, oldPrice: 7000, img: 'https://picsum.photos/300/300?random=14' },
  { id: 17, category: 'grains', name: 'Guinea Corn - 1 Paint', price: 4000, oldPrice: null, img: 'https://picsum.photos/300/300?random=15' },
  { id: 18, category: 'grains', name: 'Millet - 1 Paint', price: 3500, oldPrice: null, img: 'https://picsum.photos/300/300?random=16' },
  
  // --- OILS & SPICES ---
  { id: 19, category: 'oils', name: 'Kings Pure Vegetable Oil - 5 Liters', price: 18500, oldPrice: 20000, img: 'assets/palmoil.png' },
  { id: 20, category: 'oils', name: 'Red Palm Oil - 5 Liters', price: 15000, oldPrice: 16500, img: 'assets/palmoil.png' },
  { id: 21, category: 'oils', name: 'Knorr Chicken Cubes - Pack of 50', price: 2500, oldPrice: null, img: 'https://picsum.photos/300/300?random=17' },
  { id: 22, category: 'oils', name: 'Dangote Refined Salt - 1kg', price: 500, oldPrice: null, img: 'https://picsum.photos/300/300?random=18' },
  { id: 23, category: 'oils', name: 'Gino Tomato Paste Sachet - Roll', price: 6000, oldPrice: 6500, img: 'https://picsum.photos/300/300?random=19' },
  { id: 24, category: 'oils', name: 'Maggi Star Cubes - Pack of 100', price: 2200, oldPrice: 2500, img: 'https://picsum.photos/300/300?random=20' },
  { id: 25, category: 'oils', name: 'Grand Soya Oil - 2.75 Liters', price: 12000, oldPrice: 13500, img: 'https://picsum.photos/300/300?random=21' },
  { id: 26, category: 'oils', name: 'Power Oil - 1.4 Liters (Box of 6)', price: 21000, oldPrice: 24000, img: 'https://picsum.photos/300/300?random=22' },
  { id: 27, category: 'oils', name: 'Ground Crayfish - 1 Custard Paint', price: 18000, oldPrice: 20000, img: 'https://picsum.photos/300/300?random=23' },
  { id: 28, category: 'oils', name: 'Ducros Curry Powder - 25g (Pack of 12)', price: 3600, oldPrice: null, img: 'https://picsum.photos/300/300?random=24' },
  { id: 29, category: 'oils', name: 'Ducros Thyme Leaves - 25g', price: 350, oldPrice: null, img: 'https://picsum.photos/300/300?random=25' },
  { id: 30, category: 'oils', name: 'Gino Peppe & Onion Paste - Roll', price: 6500, oldPrice: 7000, img: 'https://picsum.photos/300/300?random=26' },
  { id: 31, category: 'oils', name: 'Dried Cameroon Pepper - 1 Derica', price: 3000, oldPrice: null, img: 'https://picsum.photos/300/300?random=27' },
  { id: 32, category: 'oils', name: 'Onga Stew Seasoning - Roll', price: 1500, oldPrice: null, img: 'https://picsum.photos/300/300?random=28' },
  { id: 33, category: 'oils', name: 'Bama Mayonnaise - 946ml (Large)', price: 8500, oldPrice: 9500, img: 'https://picsum.photos/300/300?random=29' },
  { id: 34, category: 'oils', name: 'Heinz Tomato Ketchup - 300g', price: 2800, oldPrice: 3200, img: 'https://picsum.photos/300/300?random=30' },
  { id: 35, category: 'oils', name: 'Derica Tomato Paste - Tin (Pack of 6)', price: 7200, oldPrice: 8000, img: 'https://picsum.photos/300/300?random=31' },
  { id: 36, category: 'oils', name: 'Mr Chef Salt - 500g (Pack of 10)', price: 3000, oldPrice: null, img: 'https://picsum.photos/300/300?random=32' },
  
  // --- PACKAGED FOODS ---
  { id: 37, category: 'packaged', name: 'Indomie Onion Chicken - 1 Carton', price: 14000, oldPrice: 15500, img: 'assets/noodles.png' },
  { id: 38, category: 'packaged', name: 'Golden Penny Spaghetti - 1 Carton', price: 18000, oldPrice: 20000, img: 'assets/noodles.png' },
  { id: 39, category: 'packaged', name: 'Honeywell Macaroni - 500g', price: 900, oldPrice: null, img: 'https://picsum.photos/300/300?random=33' },
  { id: 40, category: 'packaged', name: 'Kelloggs Corn Flakes - 1kg', price: 8500, oldPrice: 9200, img: 'https://picsum.photos/300/300?random=34' },
  { id: 41, category: 'packaged', name: 'Quaker Oats - 500g Tin', price: 3200, oldPrice: 3500, img: 'https://picsum.photos/300/300?random=35' },
  { id: 42, category: 'packaged', name: 'Indomie Superpack - 1 Carton', price: 16500, oldPrice: 18000, img: 'assets/noodles.png' },
  { id: 43, category: 'packaged', name: 'Minimie Chinchin - Box of 50', price: 4500, oldPrice: 5000, img: 'https://picsum.photos/300/300?random=36' },
  { id: 44, category: 'packaged', name: 'Golden Morn - 900g Family Pack', price: 4800, oldPrice: 5500, img: 'https://picsum.photos/300/300?random=37' },
  { id: 45, category: 'packaged', name: 'Nasco Cornflakes - 500g', price: 2500, oldPrice: 2800, img: 'https://picsum.photos/300/300?random=38' },
  { id: 46, category: 'packaged', name: 'Crown Premium Pasta - 1 Carton', price: 17500, oldPrice: 19000, img: 'https://picsum.photos/300/300?random=39' },
  { id: 47, category: 'packaged', name: 'Gala Sausage Roll - 1 Carton', price: 9000, oldPrice: 10500, img: 'https://picsum.photos/300/300?random=40' },
  { id: 48, category: 'packaged', name: 'McVities Digestive Biscuits - Roll', price: 1200, oldPrice: null, img: 'https://picsum.photos/300/300?random=41' },
  { id: 49, category: 'packaged', name: 'Checkers Custard (Vanilla) - 2kg', price: 4500, oldPrice: 5000, img: 'https://picsum.photos/300/300?random=42' },
  { id: 50, category: 'packaged', name: 'LadyB Custard (Banana) - 2kg', price: 4200, oldPrice: 4800, img: 'https://picsum.photos/300/300?random=43' },
  { id: 51, category: 'packaged', name: 'Pringles Original - Large Tube', price: 3500, oldPrice: 4000, img: 'https://picsum.photos/300/300?random=44' },
  { id: 52, category: 'packaged', name: 'Exeter Corned Beef - Tin', price: 3800, oldPrice: 4200, img: 'https://picsum.photos/300/300?random=45' },
  { id: 53, category: 'packaged', name: 'Geisha Mackerel in Tomato Sauce', price: 1500, oldPrice: null, img: 'https://picsum.photos/300/300?random=46' },
  { id: 54, category: 'packaged', name: 'Sardine (Titus brand) - Tin', price: 1200, oldPrice: null, img: 'https://picsum.photos/300/300?random=47' },
  { id: 55, category: 'packaged', name: 'Bakers Choice Baking Powder - Tin', price: 800, oldPrice: null, img: 'https://picsum.photos/300/300?random=48' },
  
  // --- BEVERAGES & DAIRY ---
  { id: 56, category: 'beverages', name: 'Peak Evaporated Milk - Tin (Pack of 6)', price: 4800, oldPrice: 5500, img: 'https://picsum.photos/300/300?random=49' },
  { id: 57, category: 'beverages', name: 'Milo Energy Drink - 500g Refill', price: 4500, oldPrice: 5200, img: 'https://picsum.photos/300/300?random=50' },
  { id: 58, category: 'beverages', name: 'Nescafe Classic Coffee - 50g', price: 2800, oldPrice: null, img: 'https://picsum.photos/300/300?random=51' },
  { id: 59, category: 'beverages', name: 'Lipton Yellow Label Tea - 100 Bags', price: 3500, oldPrice: null, img: 'https://picsum.photos/300/300?random=52' },
  { id: 60, category: 'beverages', name: 'Dangote Refined Sugar - 1kg', price: 3200, oldPrice: null, img: 'https://picsum.photos/300/300?random=53' },
  { id: 61, category: 'beverages', name: 'Coca-Cola Can - Pack of 12', price: 6000, oldPrice: 7200, img: 'https://picsum.photos/300/300?random=54' },
  { id: 62, category: 'beverages', name: 'Bournvita Refill - 500g', price: 4200, oldPrice: 4800, img: 'https://picsum.photos/300/300?random=55' },
  { id: 63, category: 'beverages', name: 'Dano Full Cream Milk - 900g', price: 7500, oldPrice: 8200, img: 'https://picsum.photos/300/300?random=56' },
  { id: 64, category: 'beverages', name: 'Three Crowns Milk - 380g Tin', price: 1800, oldPrice: null, img: 'https://picsum.photos/300/300?random=57' },
  { id: 65, category: 'beverages', name: 'Maltina - Pack of 12 Cans', price: 7200, oldPrice: 8000, img: 'https://picsum.photos/300/300?random=58' },
  { id: 66, category: 'beverages', name: 'Chivita 100% Orange Juice - 1L', price: 2500, oldPrice: 2800, img: 'https://picsum.photos/300/300?random=59' },
  { id: 67, category: 'beverages', name: 'Ribena Blackcurrant Drink - 1L', price: 3500, oldPrice: 4000, img: 'https://picsum.photos/300/300?random=60' },
  { id: 68, category: 'beverages', name: 'Lucozade Boost - 1L', price: 2800, oldPrice: 3200, img: 'https://picsum.photos/300/300?random=61' },
  { id: 69, category: 'beverages', name: 'Aquafina Bottled Water - Pack of 12', price: 2400, oldPrice: null, img: 'https://picsum.photos/300/300?random=62' },
  { id: 70, category: 'beverages', name: 'Eva Water - 75cl (Pack of 12)', price: 3000, oldPrice: 3500, img: 'https://picsum.photos/300/300?random=63' },
  { id: 71, category: 'beverages', name: 'Five Alive Berry Blast - 1L', price: 2200, oldPrice: null, img: 'https://picsum.photos/300/300?random=64' },
  { id: 72, category: 'beverages', name: 'St. Louis Sugar - Box', price: 1500, oldPrice: null, img: 'https://picsum.photos/300/300?random=65' },
  { id: 73, category: 'beverages', name: 'Cowbell Milk Sachet - Roll of 50', price: 4500, oldPrice: 5000, img: 'https://picsum.photos/300/300?random=66' },
  
  // --- MEAT, POULTRY & SEAFOOD ---
  { id: 74, category: 'meat', name: 'Frozen Whole Chicken (Orobo) - 1 Carton', price: 45000, oldPrice: 50000, img: 'https://picsum.photos/300/300?random=67' },
  { id: 75, category: 'meat', name: 'Fresh Beef Cuts - 1kg', price: 6500, oldPrice: null, img: 'https://picsum.photos/300/300?random=68' },
  { id: 76, category: 'meat', name: 'Titus Fish (Mackerel) - 1 Carton', price: 55000, oldPrice: 62000, img: 'https://picsum.photos/300/300?random=69' },
  { id: 77, category: 'meat', name: 'Snail (Large) - Set of 10', price: 25000, oldPrice: 28000, img: 'https://picsum.photos/300/300?random=70' },
  { id: 78, category: 'meat', name: 'Turkey Wings - 1 Carton', price: 60000, oldPrice: 65000, img: 'https://picsum.photos/300/300?random=71' },
  { id: 79, category: 'meat', name: 'Croaker Fish - 1 Carton', price: 65000, oldPrice: 70000, img: 'https://picsum.photos/300/300?random=72' },
  { id: 80, category: 'meat', name: 'Goat Meat (Chevon) - 1kg', price: 8500, oldPrice: 9500, img: 'https://picsum.photos/300/300?random=73' },
  { id: 81, category: 'meat', name: 'Cow Tripe (Shaki) - 1kg', price: 5500, oldPrice: null, img: 'https://picsum.photos/300/300?random=74' },
  { id: 82, category: 'meat', name: 'Cow Skin (Ponmo) - Large Pack', price: 4000, oldPrice: 4500, img: 'https://picsum.photos/300/300?random=75' },
  { id: 83, category: 'meat', name: 'Stockfish (Okporoko) - 1 Body', price: 15000, oldPrice: 18000, img: 'https://picsum.photos/300/300?random=76' },
  { id: 84, category: 'meat', name: 'Dry Catfish - Pack of 5', price: 12000, oldPrice: 14000, img: 'https://picsum.photos/300/300?random=77' },
  { id: 85, category: 'meat', name: 'Bonga Fish (Smoked) - Basket', price: 8000, oldPrice: null, img: 'https://picsum.photos/300/300?random=78' },
  { id: 86, category: 'meat', name: 'Live Broiler Chicken (Huge)', price: 15000, oldPrice: 18000, img: 'https://picsum.photos/300/300?random=79' },
  { id: 87, category: 'meat', name: 'Live Catfish - 1kg', price: 4000, oldPrice: 4500, img: 'https://picsum.photos/300/300?random=80' },
  
  // --- FRESH PRODUCE & VEGETABLES ---
  { id: 88, category: 'fresh', name: 'Fresh Tomatoes - 1 Basket', price: 45000, oldPrice: 50000, img: 'https://picsum.photos/300/300?random=81' },
  { id: 89, category: 'fresh', name: 'Tatashe (Bell Pepper) - 1 Basket', price: 35000, oldPrice: 40000, img: 'https://picsum.photos/300/300?random=82' },
  { id: 90, category: 'fresh', name: 'Rodo (Habanero Pepper) - Paint Bucket', price: 12000, oldPrice: 15000, img: 'https://picsum.photos/300/300?random=83' },
  { id: 91, category: 'fresh', name: 'Onions (Sokoto) - 1 Bag', price: 85000, oldPrice: 95000, img: 'https://picsum.photos/300/300?random=84' },
  { id: 92, category: 'fresh', name: 'Ugwu Leaves (Fluted Pumpkin) - Bunch', price: 1500, oldPrice: null, img: 'https://picsum.photos/300/300?random=85' },
  { id: 93, category: 'fresh', name: 'Ewedu Leaves - Bunch', price: 800, oldPrice: null, img: 'https://picsum.photos/300/300?random=86' },
  { id: 94, category: 'fresh', name: 'Waterleaf - Bunch', price: 1000, oldPrice: null, img: 'https://picsum.photos/300/300?random=87' },
  { id: 95, category: 'fresh', name: 'Bitterleaf (Washed) - 1 Pack', price: 1200, oldPrice: null, img: 'https://picsum.photos/300/300?random=88' },
  { id: 96, category: 'fresh', name: 'Fresh Garlic - 1kg', price: 6000, oldPrice: 7000, img: 'https://picsum.photos/300/300?random=89' },
  { id: 97, category: 'fresh', name: 'Fresh Ginger - 1kg', price: 5000, oldPrice: 5500, img: 'https://picsum.photos/300/300?random=90' },
  { id: 98, category: 'fresh', name: 'Apples (Imported) - Carton', price: 35000, oldPrice: 40000, img: 'https://picsum.photos/300/300?random=91' },
  { id: 99, category: 'fresh', name: 'Pineapple - Large', price: 2500, oldPrice: 3000, img: 'https://picsum.photos/300/300?random=92' },
  { id: 100, category: 'fresh', name: 'Watermelon - Extra Large', price: 4000, oldPrice: 4500, img: 'https://picsum.photos/300/300?random=93' },
  { id: 101, category: 'fresh', name: 'Bananas - Large Bunch', price: 3500, oldPrice: null, img: 'https://picsum.photos/300/300?random=94' },
  { id: 102, category: 'fresh', name: 'Oranges - 1 Sack', price: 18000, oldPrice: 20000, img: 'https://picsum.photos/300/300?random=95' },
  { id: 103, category: 'fresh', name: 'Carrots - 1kg', price: 2000, oldPrice: null, img: 'https://picsum.photos/300/300?random=96' },
  { id: 104, category: 'fresh', name: 'Cabbage - Large Head', price: 2500, oldPrice: null, img: 'https://picsum.photos/300/300?random=97' }
];

// --- HELPER FUNCTIONS ---
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(amount);
};

const calculateDiscount = (price, oldPrice) => {
  if (!oldPrice) return null;
  const discount = Math.round(((oldPrice - price) / oldPrice) * 100);
  return `-${discount}%`;
};

// --- COMPONENTS ---

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fa-solid fa-store"></i>
        FreshCart
      </a>

      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" className="search-input" placeholder="Search for food, groceries, grains..." />
        <button className="search-btn">SEARCH</button>
      </div>

      <div className="header-actions">
        <div className="action-item">
          <i className="fa-regular fa-user"></i>
          <span>Account</span>
        </div>
        <div className="action-item">
          <i className="fa-solid fa-list-check"></i>
          <span>Orders</span>
        </div>
        <div className="action-item">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Cart</span>
          {cartCount > 0 && <span className="cart-badge bump">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
};

const Sidebar = ({ activeCategory, setActiveCategory }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Categories</div>
      <ul className="category-list">
        {CATEGORIES.map(cat => (
          <li 
            key={cat.id} 
            className={`category-item ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <i className={cat.icon}></i>
            {cat.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const Hero = () => {
  return (
    <div className="hero-carousel">
      <div className="hero-content">
        <div className="hero-tag">Limited Time Offer</div>
        <h1 className="hero-title">Stock up your pantry with fresh goods.</h1>
        <p className="hero-desc">Get the best wholesale and retail prices on grains, oils, and packaged foods directly delivered to your door.</p>
        <button className="hero-btn">Shop Weekly Deals</button>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  const discount = calculateDiscount(product.price, product.oldPrice);
  const catName = CATEGORIES.find(c => c.id === product.category)?.name || 'Grocery';

  return (
    <div className="product-card">
      {discount && <div className="discount-tag">{discount}</div>}
      
      <div className="product-img-wrapper">
        <img src={product.img} alt={product.name} className="product-img" />
      </div>
      
      <div className="product-category">{catName}</div>
      <h3 className="product-name">{product.name}</h3>
      
      <div className="price-container">
        <div className="current-price">{formatCurrency(product.price)}</div>
        {product.oldPrice && <div className="old-price">{formatCurrency(product.oldPrice)}</div>}
      </div>
      
      <button className="add-btn" onClick={() => onAddToCart(product)}>
        <i className="fa-solid fa-cart-plus"></i>
        Add to Cart
      </button>
    </div>
  );
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

// --- MAIN APP COMPONENT ---
const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);
  const [toasts, setToasts] = useState([]);

  // Filter products based on active sidebar category
  const displayedProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    
    // Add toast
    const newToast = { id: Date.now(), message: `Added ${product.name} to cart!` };
    setToasts(prev => [...prev, newToast]);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.map(t => t.id === newToast.id ? { ...t, fading: true } : t));
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== newToast.id));
      }, 300);
    }, 3000);
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        🚀 Save up to 20% on all bulk grain purchases this week! Use code FRESH20.
      </div>
      
      <Header cartCount={cartCount} />
      
      <div className="main-layout">
        <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        <main className="content-area">
          {activeCategory === 'all' && <Hero />}
          
          <div className="section-title">
            {CATEGORIES.find(c => c.id === activeCategory)?.name || 'Products'}
            <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-light)' }}>
              {displayedProducts.length} items
            </span>
          </div>
          
          <div className="product-grid">
            {displayedProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
              />
            ))}
          </div>
        </main>
      </div>
      
      <ToastContainer toasts={toasts} />
    </div>
  );
};

// Render the App to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
