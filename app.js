// Mock data for Food Stuffs
const products = [
    {
        id: 1,
        name: "Mama Gold Premium Parboiled Rice - 50kg Bag",
        price: 85000,
        oldPrice: 95000,
        image: "assets/rice.png",
        discount: "-11%"
    },
    {
        id: 2,
        name: "Kings Pure Vegetable Oil - 5 Liters",
        price: 18500,
        oldPrice: 20000,
        image: "assets/palmoil.png",
        discount: "-8%"
    },
    {
        id: 3,
        name: "Indomie Onion Chicken Noodles - 1 Carton (40 Packs)",
        price: 14000,
        oldPrice: 15500,
        image: "assets/noodles.png",
        discount: "-10%"
    },
    {
        id: 4,
        name: "Oloyin Honey Beans - 1 Paint Bucket",
        price: 8500,
        oldPrice: 9000,
        image: "assets/rice.png", // Reused for testing
        discount: "-6%"
    },
    {
        id: 5,
        name: "Gino Tomato Paste (Sachet) - Roll of 50",
        price: 6000,
        oldPrice: null,
        image: "assets/noodles.png", // Reused for testing
        discount: null
    },
    {
        id: 6,
        name: "Ijebu Garri - 1 Paint Bucket",
        price: 4500,
        oldPrice: 5000,
        image: "assets/rice.png", // Reused for testing
        discount: "-10%"
    },
    {
        id: 7,
        name: "Peak Evaporated Milk - Tin (Pack of 6)",
        price: 4800,
        oldPrice: 5500,
        image: "assets/palmoil.png", // Reused for testing
        discount: "-13%"
    },
    {
        id: 8,
        name: "Dangote Refined Sugar - 1kg",
        price: 3200,
        oldPrice: null,
        image: "assets/rice.png", // Reused for testing
        discount: null
    },
    {
        id: 9,
        name: "Milo Energy Drink - 500g Refill",
        price: 4500,
        oldPrice: 5200,
        image: "assets/noodles.png", // Reused for testing
        discount: "-13%"
    },
    {
        id: 10,
        name: "Golden Penny Semovita - 2kg",
        price: 5200,
        oldPrice: 6000,
        image: "assets/rice.png", // Reused for testing
        discount: "-13%"
    }
];

// Format currency to NGN
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0
    }).format(amount);
};

// Render Products
const renderProducts = () => {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        // Create product card
        const card = document.createElement('div');
        card.className = 'product-card';

        // Add discount badge if exists
        let discountHtml = '';
        if (product.discount) {
            discountHtml = `<div class="discount-badge">${product.discount}</div>`;
        }

        // Add old price if exists
        let oldPriceHtml = '';
        if (product.oldPrice) {
            oldPriceHtml = `<div class="product-old-price">${formatCurrency(product.oldPrice)}</div>`;
        } else {
            // Spacer to keep heights consistent
            oldPriceHtml = `<div class="product-old-price" style="visibility: hidden;">N/A</div>`;
        }

        card.innerHTML = `
            ${discountHtml}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">${formatCurrency(product.price)}</div>
            ${oldPriceHtml}
            <button class="add-to-cart">ADD TO CART</button>
        `;

        // Add To Cart Event
        const addToCartBtn = card.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            addToCart(product);
        });

        grid.appendChild(card);
    });
};

// Cart Logic
let cartCount = 0;
const addToCart = (product) => {
    cartCount++;
    const badge = document.getElementById('cart-badge');
    badge.textContent = cartCount;
    
    // Animate badge
    badge.classList.add('pop');
    setTimeout(() => badge.classList.remove('pop'), 200);

    showToast(`🛒 Added ${product.name} to cart!`);
};

// Toast Notification
const showToast = (message) => {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// Dark Mode Toggle
const initTheme = () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    });
};

// Carousel Logic
const initCarousel = () => {
    const track = document.getElementById('carousel-track');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideCount = dots.length;

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentSlide * 33.333}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateCarousel();
    }, 5000);
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initTheme();
    initCarousel();
});
