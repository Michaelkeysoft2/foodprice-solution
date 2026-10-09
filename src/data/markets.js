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
