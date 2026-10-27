// Markets and locations data for FoodPrice (FP)
export const MARKETS = [
  {
    id: 'all',
    name: 'All Ibadan Markets',
    shortName: 'All Markets',
    city: 'Ibadan',
    description: 'Average market rates across Bodija, Oje, Sango, Ojoo & Dugbe',
    priceMultiplier: 1.0,
    tag: 'Live Average',
    icon: 'fa-solid fa-layer-group',
    accentColor: '#059669'
  },
  {
    id: 'bodija',
    name: 'Bodija International Market',
    shortName: 'Bodija',
    city: 'Ibadan',
    description: 'Renowned for wholesale grains, beans, yams, cow meat & dry fish',
    priceMultiplier: 0.96, // Best prices for grains & bulk foodstuff
    tag: 'Cheapest for Grains & Yam',
    icon: 'fa-solid fa-wheat-awn',
    accentColor: '#10b981'
  },
  {
    id: 'ojoo',
    name: 'Ojoo Food & Transit Market',
    shortName: 'Ojoo',
    city: 'Ibadan',
    description: 'Direct Northern haulage arrivals for cattle, onions, peppers & tubers',
    priceMultiplier: 0.98,
    tag: 'Best for Peppers & Onions',
    icon: 'fa-solid fa-truck-ramp-box',
    accentColor: '#f59e0b'
  },
  {
    id: 'sango',
    name: 'Sango Market & Environs',
    shortName: 'Sango',
    city: 'Ibadan',
    description: 'Popular everyday market close to UI & Poly, great for retail foodstuffs',
    priceMultiplier: 1.02,
    tag: 'Fast Local Pickups',
    icon: 'fa-solid fa-shop',
    accentColor: '#3b82f6'
  },
  {
    id: 'oje',
    name: 'Oje Traditional Market',
    shortName: 'Oje',
    city: 'Ibadan',
    description: 'Famous historic market for authentic local spices, palm oil & herbs',
    priceMultiplier: 0.95,
    tag: 'Cheapest for Palm Oil & Spices',
    icon: 'fa-solid fa-seedling',
    accentColor: '#ec4899'
  },
  {
    id: 'dugbe',
    name: 'Dugbe / Aleshinloye Market',
    shortName: 'Dugbe',
    city: 'Ibadan',
    description: 'Central business hub market for packaged provisions, dairy & beverages',
    priceMultiplier: 1.04,
    tag: 'Best for Packaged Goods',
    icon: 'fa-solid fa-store',
    accentColor: '#8b5cf6'
  }
];

// Delivery drop-off locations with estimated courier fees & time
export const DELIVERY_ZONES = [
  { id: 'ui-sango', name: 'UI / Agbowo / Sango / Samonda', fee: 1200, estTime: '30 - 45 mins' },
  { id: 'bodija-estate', name: 'Bodija / Old Bodija / Housing Estate', fee: 1500, estTime: '35 - 50 mins' },
  { id: 'ojoo-moniya', name: 'Ojoo / Moniya / Akinyele Axis', fee: 1800, estTime: '45 - 60 mins' },
  { id: 'dugbe-ringroad', name: 'Dugbe / Mokola / Ring Road / Challenge', fee: 2000, estTime: '45 - 65 mins' },
  { id: 'iwo-road', name: 'Iwo Road / Agodi Gate / Bashorun / Akobo', fee: 2200, estTime: '50 - 75 mins' },
  { id: 'oluyole-apata', name: 'Oluyole Estate / Apata / Eleyele', fee: 2500, estTime: '60 - 80 mins' },
  { id: 'lagelu-alakia', name: 'Alakia / Airport / Iyana Church', fee: 2800, estTime: '60 - 90 mins' },
  { id: 'custom-pickup', name: 'Express Special Courier (Anywhere in Oyo State)', fee: 3500, estTime: 'Same Day Priority' }
];

// Market Shopper service tiers
export const SHOPPER_SERVICES = [
  {
    id: 'standard',
    name: 'Standard Market Errand',
    fee: 1500,
    desc: 'Our trained market representative inspects, hand-picks & haggles the best quality foodstuffs for you.'
  },
  {
    id: 'bulk-wholesale',
    name: 'Bulk / Bag Sharing Errand',
    fee: 2500,
    desc: 'Specialized bulk grain, whole bag or quarter-bag division & heavy packaging handling.'
  }
];

// Direct Bank Transfer Details for verified customer payments
export const BANK_DETAILS = {
  bankName: 'Moniepoint MFB / OPay',
  accountNumber: '8039579410',
  accountName: 'FoodPrice Market Logistics',
  whatsappSupport: '2348039579410',
  phoneDisplay: '0803 957 9410'
};

// Real Customer Reviews from Ibadan Residents
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mrs. Funke Adeyemi',
    location: 'Bodija Housing Estate',
    market: 'Bodija Market',
    quote: 'Saved me at least 3 hours of dust and Saturday traffic in Bodija. The errand shopper picked stone-free beans and very sweet Abuja yam. Delivery was right at my gate!',
    rating: 5,
    tag: 'Working Mom'
  },
  {
    id: 2,
    name: 'Dr. Tunde Oladipo',
    location: 'UI Senior Staff Quarters',
    market: 'Ojoo & Bodija',
    quote: 'We shared a 50kg bag of rice among three colleagues. FoodPrice split and bagged it cleanly. We saved over ₦15,000 each compared to buying paint buckets in our local shop.',
    rating: 5,
    tag: 'Bag Sharing Club'
  },
  {
    id: 3,
    name: 'Khadijat Balogun',
    location: 'Ring Road / Challenge',
    market: 'Oje Traditional Market',
    quote: 'I ordered pure red palm oil and authentic dry catfish from Oje Market. You cannot get that quality in modern supermarkets. The rider arrived in less than 50 minutes.',
    rating: 5,
    tag: 'Verified Buyer'
  },
  {
    id: 4,
    name: 'Engr. Segun Alabi',
    location: 'Akobo / General Gas',
    market: 'Bodija Market',
    quote: 'Checking the price of foodstuffs before planning our family monthly budget has become a routine for my wife and me. Transparent and trustworthy.',
    rating: 5,
    tag: 'Regular Shopper'
  }
];

// Function to compute next Oje traditional market day (8-day Yoruba market cycle)
export const getOjeMarketStatus = () => {
  // Reference anchor: January 4, 2026 was an Oje market day
  const anchorDate = new Date('2026-01-04T00:00:00');
  const today = new Date();
  const diffTime = today.getTime() - anchorDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const cycleDay = ((diffDays % 8) + 8) % 8;
  const daysUntilNext = cycleDay === 0 ? 0 : 8 - cycleDay;

  return {
    isToday: daysUntilNext === 0,
    daysLeft: daysUntilNext,
    cycleNotice: daysUntilNext === 0 
      ? 'TODAY is Oje Market Day! Direct farm produce arriving from Oyo rural valleys.' 
      : `Next Oje Market Day in ${daysUntilNext} day${daysUntilNext > 1 ? 's' : ''}. Pre-order farm-fresh palm oil, iru & garri now!`
  };
};
