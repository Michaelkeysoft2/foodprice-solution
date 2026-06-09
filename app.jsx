const { useState, useEffect } = React;

// --- MULTILINGUAL DICTIONARY ---
const UI_TRANSLATIONS = {
  en: {
    topBarText: "🚀 Save up to 20% on all bulk grain purchases this week! Use code FRESH20.",
    searchPlaceholder: "Search for food, groceries, grains...",
    searchBtn: "SEARCH",
    account: "Account",
    orders: "Orders",
    cart: "Cart",
    categoriesTitle: "Categories",
    heroTag: "Limited Time Offer",
    heroTitle: "Stock up your pantry with fresh goods.",
    heroDesc: "Get the best wholesale and retail prices on grains, oils, and packaged foods directly delivered to your door.",
    heroBtn: "Shop Weekly Deals",
    items: "items",
    addToCartBtn: "Add to Cart",
    noProductsFoundTitle: "No products found",
    noProductsFoundDesc: "Try searching for something else or browse another category.",
    cartTitle: "Your Cart",
    cartEmpty: "Your cart is empty.",
    cartTotal: "Total:",
    proceedCheckout: "Proceed to Checkout",
    checkoutSuccess: "Order placed successfully, {user}! We will contact you soon.",
    welcomeBack: "Welcome Back",
    createAccount: "Create Account",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    password: "Password",
    login: "Login",
    signUp: "Sign Up",
    switchSignUp: "Don't have an account? Sign up",
    switchLogin: "Already have an account? Login",
    footerAbout: "Your number one marketplace for fresh groceries, grains, and daily essentials in Nigeria.",
    footerService: "Customer Service",
    footerContact: "Contact Me",
    footerHelp: "Need help with your order? Reach out to us directly!",
    recipeTitle: "How to Cook / Recipe Ideas",
    nutritionTitle: "Nutrition & Health Benefits",
    closeBtn: "Close",
    toastAdded: "Added {product} to cart!",
    currencySymbol: "₦"
  },
  yo: {
    topBarText: "🚀 Fi to 20% pamọ lori gbogbo rira ounjẹ koro ni ọsẹ yii! Lo koodu FRESH20.",
    searchPlaceholder: "Wá ounjẹ, awọn ounjẹ koro, gbaguda...",
    searchBtn: "WA",
    account: "Akọọlẹ",
    orders: "Awọn aṣẹ",
    cart: "Kẹkẹ",
    categoriesTitle: "Awọn Ẹka",
    heroTag: "Ipese Fun Igba Kuru",
    heroTitle: "Kọ ile ounjẹ rẹ pẹlu awọn ounjẹ titun.",
    heroDesc: "Gba awọn idiyele osunwon ati tita to dara julọ lori awọn ounjẹ koro, epo, ati ounjẹ to wa ninu apoti ti a firanṣẹ si ẹnu-ọna rẹ.",
    heroBtn: "Ra Awọn Ounjẹ Ọsẹ",
    items: "awọn nkan",
    addToCartBtn: "Fi sii Kẹkẹ",
    noProductsFoundTitle: "Ko si ounjẹ ti a rii",
    noProductsFoundDesc: "Gbiyanju lati wa nkan miiran tabi lọ si ẹka miiran.",
    cartTitle: "Kẹkẹ Rẹ",
    cartEmpty: "Kẹkẹ rẹ ti ṣofo.",
    cartTotal: "Apapọ:",
    proceedCheckout: "Tẹsiwaju si Isanwo",
    checkoutSuccess: "Aṣẹ rẹ ti pari ni aṣeyọri, {user}! A o kan si ọ laipẹ.",
    welcomeBack: "Kaabo Pada",
    createAccount: "Ṣẹda Akọọlẹ Titun",
    fullName: "Orukọ Kikun",
    phoneNumber: "Nọmba Tẹlifoonu",
    password: "Ọrọ Aṣiri",
    login: "Wọle",
    signUp: "Forukọsilẹ",
    switchSignUp: "Ko ni akọọlẹ kan? Forukọsilẹ",
    switchLogin: "Ti ni akọọlẹ tẹlẹ? Wọle",
    footerAbout: "Ọjà akọkọ rẹ fun rira awọn ounjẹ titun, awọn ounjẹ koro, ati awọn nkan pataki ojoojumọ ni Nigeria.",
    footerService: "Iṣẹ Onibara",
    footerContact: "Kan si Mi",
    footerHelp: "Ṣe o nilo iranlọwọ pẹlu aṣẹ rẹ? Kan si wa taara!",
    recipeTitle: "Bi A Ṣe N Se / Awọn Ero Ounjẹ",
    nutritionTitle: "Awon Nkan Ounje & Ilera",
    closeBtn: "Pa tì",
    toastAdded: "A ti fi {product} si kẹkẹ!",
    currencySymbol: "₦"
  },
  ig: {
    topBarText: "🚀 Chekwaa ihe ruru 20% na mkpụrụ oge a! Jiri koodu FRESH20.",
    searchPlaceholder: "Chọọ nri, nri mkpụrụ, ji, na gari...",
    searchBtn: "CHỌỌ",
    account: "Akaụntụ",
    orders: "Ihe Ndị E Tinyere",
    cart: "Kata",
    categoriesTitle: "Ụdị Ngwa Ahịa",
    heroTag: "Ohere Maka Oge Dị Mkpirikpi",
    heroTitle: "Mejupụta ebe nchekwa nri gị na nri ọhụrụ.",
    heroDesc: "Nweta ọnụahịa kacha mma maka mkpụrụ nri, mmanụ, na nri a nwakọrọ n’akpa ozugbo n’ọnụ ụzọ gị.",
    heroBtn: "Zụọ Ahịa Maka Ọsẹ A",
    items: "ihe ndị a",
    addToCartBtn: "Tinye na Kata",
    noProductsFoundTitle: "A hụghị ihe ọ bụla",
    noProductsFoundDesc: "Nwaa ịchọ ihe ọzọ ma ọ bụ gaa na ngalaba ọzọ.",
    cartTitle: "Kata Gị",
    cartEmpty: "Kata gị tọgbọrọ chakoo.",
    cartTotal: "Ọnụ Ọgụgụ:",
    proceedCheckout: "Gaa n'Isi Ụgwọ",
    checkoutSuccess: "E tinyere ihe a nke ọma, {user}! Anyị ga-akpọtụrụ gị ngwa ngwa.",
    welcomeBack: "Nnọọ Ọzọ",
    createAccount: "Mepụta Akaụntụ",
    fullName: "Aha Gị Zuru Oke",
    phoneNumber: "Nọmba ekwentị",
    password: "Koodu Nzuzo",
    login: "Banye",
    signUp: "Debanye aha",
    switchSignUp: "Ị nweghị akaụntụ? Debanye aha",
    switchLogin: "Ị nwere akaụntụ mbụ? Banye",
    footerAbout: "Ebe kacha mma maka nri ọhụrụ, mkpụrụ nri, na ihe ndị e ji ebi ndụ kwa ụbọchị na Nigeria.",
    footerService: "Ọrụ Ndị Ahịa",
    footerContact: "Kpọtụrụ M",
    footerHelp: "Ị chọrọ enyemaka maka ihe ị zụrụ? Kpọtụrụ anyị ozugbo!",
    recipeTitle: "Otu E Si Esi / Echiche Nri",
    nutritionTitle: "Nri & Uru Ilera",
    closeBtn: "Mechie",
    toastAdded: "E tinyere {product} na kata gị!",
    currencySymbol: "₦"
  },
  ha: {
    topBarText: "🚀 Ajiye har kashi 20% akan hatsi a wannan makon! Yi amfani da FRESH20.",
    searchPlaceholder: "Nemi abinci, kayan lambu, hatsi...",
    searchBtn: "NEMA",
    account: "Asusunka",
    orders: "Oda",
    cart: "Kekunan Kaya",
    categoriesTitle: "Rukunoni",
    heroTag: "Tayi na Dan Lokaci",
    heroTitle: "Cika kicin dinka da sabbin kayan abinci.",
    heroDesc: "Sami mafi kyawun farashi akan hatsi, mai, da sauran kayan abinci zuwa kofar gidanku.",
    heroBtn: "Siyayya na Wannan Makon",
    items: "kayayyaki",
    addToCartBtn: "Zuba a Rukunin Kaya",
    noProductsFoundTitle: "Ba a sami samfur ba",
    noProductsFoundDesc: "Gwada neman wani abu daban ko duba wani rukunin daban.",
    cartTitle: "Kayan da ka Zaba",
    cartEmpty: "Kekon kayanka babu komai.",
    cartTotal: "Jumla:",
    proceedCheckout: "Ci gaba da Biyan Kudi",
    checkoutSuccess: "An yi nasarar yin odarku, {user}! Zamu tuntube ku nan ba da jimawa ba.",
    welcomeBack: "Sannu da Dawowa",
    createAccount: "Bude Asusu",
    fullName: "Cikakken Suna",
    phoneNumber: "Lambar Waya",
    password: "Kalmar Sirri",
    login: "Shiga",
    signUp: "Yi Rajista",
    switchSignUp: "Ba ka da asusu? Yi Rajista",
    switchLogin: "Kana da asusu riga? Shiga",
    footerAbout: "Wurin kasuwancin ku mafi kyau don sabbin kayan lambu, hatsi, da abubuwan yau da kullun a Najeriya.",
    footerService: "Sabis na Abokan Ciniki",
    footerContact: "Tuntube Mu",
    footerHelp: "Kuna buƙatar taimako game da odarku? Tuntube mu kai tsaye!",
    recipeTitle: "Yadda Ake Dahuwa / Hanyar Abinci",
    nutritionTitle: "Kayan Abinci & Amfanin Lafiya",
    closeBtn: "Rufe",
    toastAdded: "An zuba {product} cikin kekon kaya!",
    currencySymbol: "₦"
  },
  pid: {
    topBarText: "🚀 Save up to 20% on top of all bulk grain purchases this week! Use code FRESH20.",
    searchPlaceholder: "Find food stuff, grocery, grain, yam...",
    searchBtn: "FIND AM",
    account: "Account",
    orders: "My Orders",
    cart: "Cart",
    categoriesTitle: "Categories",
    heroTag: "Limited Time Offer",
    heroTitle: "Stock up your house with beta food stuff.",
    heroDesc: "Get the best wholesale and retail prices on grains, oils, and packaged foods directly delivered to your door step.",
    heroBtn: "Shop Deals",
    items: "items",
    addToCartBtn: "Put inside Cart",
    noProductsFoundTitle: "We no find any food stuff",
    noProductsFoundDesc: "Try search for another thing or look another category.",
    cartTitle: "Your Cart",
    cartEmpty: "Your cart dry, nothing dey inside.",
    cartTotal: "Total:",
    proceedCheckout: "Pay Money",
    checkoutSuccess: "Your order done enter successfully, {user}! We go call you soon-soon.",
    welcomeBack: "Welcome Back",
    createAccount: "Register Account",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    password: "Password",
    login: "Log in",
    signUp: "Register",
    switchSignUp: "You never get account? Register",
    switchLogin: "You already get account? Log in",
    footerAbout: "Your number one market for fresh food stuff, grains, and beta daily things inside Nigeria.",
    footerService: "Customer Care",
    footerContact: "Reach Me",
    footerHelp: "You need help with your order? Call/chat us direct!",
    recipeTitle: "How to Cook am / Recipe Ideas",
    nutritionTitle: "Nutrition & Health Benefits",
    closeBtn: "Close",
    toastAdded: "Added {product} to your cart!",
    currencySymbol: "₦"
  }
};

const CATEGORIES = [
  { id: 'all', icon: 'fa-solid fa-border-all', names: { en: 'All Products', yo: 'Gbogbo Ojà', ig: 'Ngwa Ahịa Niile', ha: 'Duk Kayayyaki', pid: 'All Market' } },
  { id: 'grains', icon: 'fa-solid fa-bowl-rice', names: { en: 'Grains & Tubers', yo: 'Koro & Gbaguda', ig: 'Mkpụrụ & Ji', ha: 'Hatsi & Doya', pid: 'Grains & Yam' } },
  { id: 'oils', icon: 'fa-solid fa-bottle-droplet', names: { en: 'Oils & Spices', yo: 'Epo & Olorun', ig: 'Mmanụ & Ngwa Nri', ha: 'Mmai & Kayan Yaji', pid: 'Oils & Spices' } },
  { id: 'packaged', icon: 'fa-solid fa-box', names: { en: 'Packaged Foods', yo: 'Ounjẹ Ti A Pọn', ig: 'Nri A Nwakọrọ', ha: 'Kayan Abinci a Akwati', pid: 'Packaged Foods' } },
  { id: 'beverages', icon: 'fa-solid fa-mug-hot', names: { en: 'Beverages & Dairy', yo: 'Ounjẹ Olomi & Wara', ig: 'Ihe Ọṅụṅụ & Mmiri Ara', ha: 'Abubuwan Sha & Wara', pid: 'Drinks & Milk' } },
  { id: 'meat', icon: 'fa-solid fa-drumstick-bite', names: { en: 'Meat & Poultry', yo: 'Eran & Eiye', ig: 'Anụ & Ọkụkọ', ha: 'Nama & Kaji', pid: 'Meat & Chicken' } },
  { id: 'fresh', icon: 'fa-solid fa-leaf', names: { en: 'Fresh Produce', yo: 'Efo & Eso Titun', ig: 'Nri Ọhụrụ', ha: 'Kayan Lambu', pid: 'Fresh Vegetables' } }
];

// --- HANDCRAFTED PRODUCT LOCALIZATIONS ---
const PRODUCT_TRANSLATIONS = {
  1: {
    names: {
      en: 'Premium Parboiled Rice - 50kg Bag',
      yo: 'Iresi Aladun (Premium) - Apo 50kg',
      ig: 'Osikapa Parboiled Kacha Mma - Akpa 50kg',
      ha: 'Shinkafa Parboiled Mai Kyau - Buhu 50kg',
      pid: 'Beta Parboiled Rice - 50kg Bag'
    },
    desc: {
      en: 'Top quality long-grain parboiled rice. Stone-free, clean, and swells significantly when cooked. Perfect for family meals, party Jollof, and restaurant use.',
      yo: 'Iresi gigun didara to ga. Koni okuta kankan, o mo, o si ma n gbe dada ti a ba se. O dara fun ounjẹ ẹbi, Jọlọfu ayẹyẹ, ati ti ile ounjẹ.',
      ig: 'Osikapa kacha mma. Ọ nweghị nkume, dị ọcha, ma na-aza nke ọma mgbe esi ya. Zuru oke maka nri ezinụlọ na mmemme.',
      ha: 'Shinkafa mai kyau da tsayi. Babu duwatsu, mai tsafta, kuma tana ƙaruwa sosai idan an dafa ta. Cikakke ga abincin dangi da na biki.',
      pid: 'High quality long grain rice wey clean well-well. No stone, e dey swell when you cook am. Beta food for Jollof and family chopping.'
    },
    recipe: {
      en: 'Classic Jollof Rice: Fry blended tomatoes, onions, and pepper in vegetable oil. Add meat stock, seasonings, and parboiled rice. Cook on low heat.',
      yo: 'Iresi Jollof: Dín tomati, alubosa ati ata ti a lo ninu epo. Fi omi eran, awon nkan olorun ati iresi si. Se lori ina kekere.',
      ig: 'Osikapa Jollof: Ghee tomato, yabasị na ose n’ime mmanụ. Tinye mmiri anụ, ngwa nri na osikapa. Sie n’obere ọkụ.',
      ha: 'Shinkafa Jollof: Suya tumatur, albasa da tattasai a mmanụ. Ƙara ruwan nama da shinkafa. Dafa da wuta kaɗan.',
      pid: 'Jollof Rice: Fry your blend tomato, onion, and pepper inside oil. Add meat water, seasoning, and rice. Cover make e cook soft.'
    },
    nutrition: ['Carbohydrates', 'Low Fat', 'Energy Boost']
  },
  2: {
    names: {
      en: 'Oloyin Honey Beans - 1 Paint Bucket',
      yo: 'Ewa Oloyin Didun - Garawa Kan',
      ig: 'Agwa Ọbụbọ (Oloyin) - Otu Ihe Nlele',
      ha: 'Wake Mai Zaki (Oloyin) - Bokiti Guda Daya',
      pid: 'Sweet Honey Beans - 1 Paint Bucket'
    },
    desc: {
      en: 'Naturally sweet and fast-cooking honey beans (Oloyin). Sourced from top farmers, clean, and nutritious. Great for Akara, Moin-Moin, or plain beans with plantain.',
      yo: 'Ẹwa oloyin ti o dun ti o si n jin ni kiakia. Ti a gba lati ọdọ awọn agbe to dara julọ, o mọ, o si kun fun ounjẹ. O dara fun Àkàrà, Mọin-Mọin.',
      ig: 'Agwa ọbụbọ na-atọ ụtọ ma na-esi ọsọ ọsọ. A nwetara ya n’aka ndị ọrụ ugbo kacha mma, dị ọcha ma na-edozi ahụ.',
      ha: 'Wake mai zaƙi kuma mai saurin dahuwa (Oloyin). An samo shi daga ƙwararrun manoma. Yana da kyau ga Akara, Moin-Moin.',
      pid: 'Naturally sweet Honey Beans wey dey cook fast-fast. E clean well, no stones. Best for Akara, Moin-Moin, or make you cook and chop am.'
    },
    recipe: {
      en: 'Ewa Agoyin: Boil beans with onions until extremely soft, then mash. Prepare the Agoyin sauce by frying blended dried chili pepper and onions in palm oil.',
      yo: 'Ẹwa Agoyin: Se ẹwa pẹlu alubosa titi yoo fi rọ gidi, lẹhinna lò ó. Ṣetan ọbẹ Agoyin nipa dídín ata gbigbẹ ati alubosa ninu epo pupa.',
      ig: 'Ewa Agoyin: Sie agwa na yabasị ruo mgbe ọ dị nro, wee gwakọta ya. Kwadebe ofe Agoyin site na ghee ose na yabasị n’ime mmanụ.',
      ha: 'Wake Agoyin: Tafasa wake da albasa har sai sun yi laushi sosai. A soya busasshen barkono da albasa a man ja har sai sun yi duhu.',
      pid: 'Ewa Agoyin style: Cook beans with onion make e soft well-well, then mash am. Fry blended dry pepper and onion inside plenty palm oil.'
    },
    nutrition: ['High Protein', 'Rich in Iron', 'Dietary Fiber']
  },
  3: {
    names: {
      en: 'Ijebu Garri - 1 Paint Bucket',
      yo: 'Gari Ijebu Titun - Garawa Kan',
      ig: 'Garri Ijebu - Otu Ihe Nlele',
      ha: 'Garin cassava (Ijebu Garri) - Bokiti Daya',
      pid: 'Sour Ijebu Garri - 1 Paint Bucket'
    },
    desc: {
      en: 'Crispy, sour, and perfectly dry white Ijebu Garri. Famous for its unique tangy taste. Excellent for drinking with ice, groundnuts, and fried fish, or making smooth Eba.',
      yo: 'Gari Ijebu ti o kán, ti o rọ, ti o si gbẹ daradara. O gbajumọ fun itọwo didan alailẹgbẹ rẹ. O dara pupọ fun mimu pẹlu yinyin ati ẹpa.',
      ig: 'Garri Ijebu dị nkọ, na-atọ ụtọ, ma kpọọ nkụ nke ọma. Ama ama maka ụtọ pụrụ iche ya. Ọ dị mma maka ịṅụ mmiri, ahụekere.',
      ha: 'Garin cassava (Ijebu Garri) mai ƙirin da zaƙi kaɗan. Ya shahara saboda dandanonsa na musamman. Yana da kyau ga sha da ruwan sanyi.',
      pid: 'Crispy and sour white Ijebu Garri wey dry well. E get that special tangy slap wey everybody like. Best for soaking inside cold water with sugar.'
    },
    recipe: {
      en: 'Soaked Garri: Pour Garri in a bowl, add cold water, wash floaters. Add fresh cold water, sugar, milk, and roasted groundnuts. Enjoy with fried fish.',
      yo: 'Fun Mimu: Da Gari sinu abọ, fi omi tutu si, fo ẹgbin kuro. Fi omi tutu, suga, wara, ati ẹpa si. Gbadun rẹ pẹlu eja dindin.',
      ig: 'Maka Ịṅụ: Wunye Garri n’ime efere, tinye mmiri oyi. Tinye mmiri oyi ọhụrụ, shuga, mmiri ara, na ahụekere. Jiri azụ ghere eghe jee ya.',
      ha: 'Don Sha: Zuba Garri a kwano, ƙara ruwan sanyi. Ƙara ruwan sanyi, sukari, madara, da gasasshiyar gyada. A ci da kifi.',
      pid: 'For Drinking: Put your Garri inside bowl, throw water inside and wash. Add fresh cold water, sugar, milk, and groundnut. Chop with fried fish.'
    },
    nutrition: ['Instant Energy', 'Gluten Free', 'High Carbs']
  },
  4: {
    names: {
      en: 'Abuja Yam - Large Tuber (Set of 5)',
      yo: 'Isu Abuja Tobi - Apo Isu 5',
      ig: 'Ji Abuja (Set of 5) - Nnukwu Ji',
      ha: 'Doyan Abuja - Guda Biyar (Set of 5)',
      pid: 'Big Abuja Yam - Set of 5 Tubers'
    },
    desc: {
      en: 'Dry, sweet, and floury large Abuja yams. Sourced directly from Abuja/Benue markets. Yields perfect texture when pounded, boiled, or fried.',
      yo: 'Isu Abuja ti o gbẹ, ti o dun, ti o si ni kankan. Ti a gba taara lo lati ọja Abuja tabi Benue. O n fun ni itọwo ati ara to dara julọ ti a ba gun.',
      ig: 'Ji Abuja na-atọ ụtọ ma na-akpọ nkụ nke ọma. A nwetara ya ozugbo site n’ahịa Abuja/Benue. Ọ na-enye ọdịdị zuru oke mgbe e gweriri ya.',
      ha: 'Doyan Abuja mai daɗi da laushi. An samo shi kai tsaye daga kasuwannin Abuja/Benue. Yana da kyau ga dahuwa, suya, ko tuwo.',
      pid: 'Beta dry and sweet Abuja Yam wey get plenty starch. E dey soft and floury. Best to cook pounded yam, boil chop with egg sauce.'
    },
    recipe: {
      en: 'Pounded Yam: Peel yam, cut into cubes, wash, and boil until very soft. Pound in a mortar until stretchy, smooth, and lump-free. Serve with Egusi soup.',
      yo: 'Iyan: Bọ isu, ge si wẹwẹ, fọ, ki o se titi yoo fi rọ daradara. Fi sinu odó ki o gun titi yoo fi di rirọ ti kò ni ni koro kankan. Je pẹlu ọbẹ Ẹgúsí.',
      ig: 'Ji Ịkụ: Fuo akpụkpọ ji, bee ya, sachaa ya, sie ya ruo mgbe ọ dị nro. Tinyere ya n’ime mortar wee kụọ ya ruo mgbe ọ dị nro. Jiri ofe Egusi jee ya.',
      ha: 'Sakwara Doya: Fya doya, yanka ta, wanke ta, sannan a tafasa ta har sai ta yi laushi sosai. Daka ta a turmi har sai ta yi laushi. A ci da miyar Egusi.',
      pid: 'Pounded Yam: Peel the yam, cut am small, wash and boil make e soft well. Put inside mortar, pound am till e draw and smooth. Serve am with hot Egusi soup.'
    },
    nutrition: ['Complex Carbs', 'Potassium Rich', 'Healthy Fibers']
  },
  7: {
    names: {
      en: 'Ofada Rice - 5kg Bag',
      yo: 'Iresi Ofada Ile - Apo 5kg',
      ig: 'Osikapa Ofada (Local) - Akpa 5kg',
      ha: 'Shinkafar Ofada (Ta Gida) - Buhu 5kg',
      pid: 'Local Ofada Rice - 5kg Bag'
    },
    desc: {
      en: 'Nutritious, unpolished, aromatic local Nigerian Ofada rice. Famous for its authentic flavor and high nutrient content. Extremely rich in fiber and vitamins.',
      yo: 'Iresi Ofada ti ibilẹ ti o ni oorun aladun ti ko ni didan. Gbajumọ fun adun gidi rẹ ati iye ounjẹ to ga. O kun fun okun ati awọn vitamin.',
      ig: 'Osikapa Ofada na-edozi ahụ, nke na-enweghị nchacha, na nke na-esi ísì ụtọ. Ọ bụ nke a ma ama maka ụtọ ya na nnukwu nri ọ na-enye.',
      ha: 'Shinkafar Ofada ta gida mai ƙamshi da gina jiki. Ta shahara saboda dandano na gida da kuma yawan sinadaran gina jiki.',
      pid: 'Authentic local unpolished brown and white Ofada rice. E get that local sweet smell and plenty nutrients. Very high inside fiber.'
    },
    recipe: {
      en: 'Ofada Stew (Ayamase): Bleach palm oil in a closed pot. Fry blended green bell peppers, locust beans (iru), onions, and assorted meat. Serve over boiled Ofada rice.',
      yo: 'Ọbẹ Ayamase (Ofada): Gba epo pupa ninu ikoko titi yoo fi fun. Dín ata alawọ ewe, iru, alubosa, ati oniruru eran. Je pẹlu iresi Ofada gbigbona.',
      ig: 'Ofe Ofada (Ayamase): Bleach mmanụ nri n’ime ite. Ghee ose ndụ, iru, yabasị, na ụdị anụ dị iche iche. Jiri osikapa Ofada e siri esi jee ya.',
      ha: 'Miyar Ofada (Ayamase): Tafasa man ja a rufe har sai ya yi haske. Suya tattasai kore, iru, albasa, da nama. A ci da dahuwar shinkafar Ofada.',
      pid: 'Ayamase Stew: Bleach palm oil first. Fry blended green pepper, onion, locust beans (iru), and plenty cut meat (beef, shaki, ponmo). Serve on top Ofada rice.'
    },
    nutrition: ['High Fiber', 'B Vitamins', 'Essential Minerals']
  },
  10: {
    names: {
      en: 'Yellow Garri (Edo) - 1 Paint Bucket',
      yo: 'Gari Pupa (Edo) - Garawa Kan',
      ig: 'Garri Ozerem (Yellow Edo) - Otu Ihe Nlele',
      ha: 'Garin cassava mai rawaya (Yellow Garri) - Bokiti Daya',
      pid: 'Yellow Garri (Edo) - 1 Paint Bucket'
    },
    desc: {
      en: 'Vibrant yellow cassava grains processed with high-quality red palm oil. Has a slightly milder, less sour taste than white Garri, and makes excellent fluffy Eba.',
      yo: 'Gari pupa to ni awọ didan ti a fi epo pupa didara se. O ni itọwo to rọ diẹ ti ko kán to ti gari funfun, o si n ṣe Ẹbà ti o dara julọ.',
      ig: 'Garri Edo na-acha ozerem nke a na-eji mmanụ nri kacha mma emepụta. Ọ na-atọ ụtọ nke ọma ma dị mma maka ịme Ẹbà na-atọ ụtọ.',
      ha: 'Garin cassava mai rawaya wanda aka sarrafa shi da man ja mai inganci. Yana da ɗan zaƙi kaɗan fiye da farin Garri, kuma yana yin Eba mai kyau.',
      pid: 'Fresh yellow cassava grains fried with clean palm oil. E get sweet smell, not too sour, and e dey make the best soft, fluffy Eba swallow.'
    },
    recipe: {
      en: 'Eba swallow: Boil water, turn off heat. Gradually sprinkle yellow Garri into the hot water until it absorbs the water. Cover for 2 minutes, then stir and knead using a wooden spatula.',
      yo: 'Ẹbà: Se omi ki o jin, pa ina. Da gari pupa si rọra titi yoo fi gba omi naa. Bo fun iṣẹju meji, lẹhinna ro o pẹlu igbako titi yoo fi rọ.',
      ig: 'Ẹbà: Sie mmiri, gbanyụọ ọkụ. Wụsa Garri na-acha ozerem n’ime mmiri ọkụ ruo mgbe ọ nọrọ mmiri ahụ. Mechie ya ruo nkeji abụọ, wee kpalie ya ruo mgbe ọ dị nro.',
      ha: 'Tuwon Garri: Tafasa ruwa, kashe wuta. Zuba garin Garri rawaya a ruwan zafi a hankali har sai ya hade. Rufe na tsawon minti biyu, sannan a gauraya shi.',
      pid: 'Make Eba swallow: Boil your water hot, off the gas. Put the yellow Garri inside the water step by step till e block. Cover am for 2 mins, then roll am well.'
    },
    nutrition: ['Fast Calories', 'Carbohydrates', 'Vitamin A']
  },
  20: {
    names: {
      en: 'Red Palm Oil - 5 Liters',
      yo: 'Epo Pupa Titun - Lita 5',
      ig: 'Mmanụ Nri (Palm Oil) - Lita 5',
      ha: 'Man Ja (Palm Oil) - Lita 5',
      pid: 'Fresh Red Palm Oil - 5 Liters'
    },
    desc: {
      en: 'Unrefined, zero-cholesterol, thick and red palm oil. Sourced directly from local mills. Retains natural flavor and nutrients, perfect for soups, stews, and traditional Nigerian cooking.',
      yo: 'Epo pupa didara ti ko ni cholesterol, ti o nipọn ti o si pupa yòò. Ti a gba taara lati ọdọ awọn oluṣe epo agbegbe. O n pa oorun ati ounjẹ rẹ mọ.',
      ig: 'Mmanụ nri na-acha uhie uhie, nke na-enweghị cholesterol, ma sie ike. Zuru oke maka ofe, stews, na isi nri ọdịnala Naijiria.',
      ha: 'Man ja mai kauri da ja sosai wanda ba shi da cholesterol. Yana da kyau ga miya, stews, da abincin gargajiya na Najeriya.',
      pid: 'Clean thick red Palm Oil from local mill, zero cholesterol. E clean well, no water inside, e good for Egusi soup, stews, and all your local Naija food.'
    },
    recipe: {
      en: 'Native Soup Base: Heat palm oil on low heat (do not bleach), add chopped onions and locust beans (iru). Fry briefly before adding blended pepper and washed vegetables.',
      yo: 'Ọbẹ Ibilẹ: Gbona epo pupa lori ina kekere (maṣe gba a), fi alubosa ati iru si. Din-in fun igba kukuru ki o to fi ata, omi, ati efo si.',
      ig: 'Ofere Ọdịnala: Kpoo mmanụ nri n’obere ọkụ, tinye yabasị na iru. Ghee ya tupu ị tinye ose, mmiri, akwụkwọ nri, na azụ kpọrọ nkụ.',
      ha: 'Miyar Gida: Zafi man ja a wuta kaɗan, ƙara albasa da iru. Soya kaɗan kafin a zuba barkono, ruwa, kayan lambu, da busasshen kifi.',
      pid: 'Native Stew: Heat the palm oil small (no bleach am). Add chopped onion and iru. Fry am small before you throw your fresh pepper and vegetable inside.'
    },
    nutrition: ['Vitamin E Rich', 'Antioxidants', 'Cholesterol Free']
  },
  77: {
    names: {
      en: 'Snail (Large) - Set of 10',
      yo: 'Igbin Nla - Eyo 10',
      ig: 'Ejula (Large) - Set of 10',
      ha: 'Dodannin Kadi (Large Snails) - Guda Goma',
      pid: 'Big Giant Snails - Set of 10'
    },
    desc: {
      en: 'Giant African land snails, carefully cleaned and prepared. Low in fat, extremely high in protein and iron. A premium delicacy in Nigerian cuisine.',
      yo: 'Igbin nla ti ilẹ Afirika, ti a fọ ti a si sọ di mimọ daradara. Ko ni ọra pupọ, o si kun fun protein ati iron. Ounje pataki ti o niye lori ni orilẹ-ede wa.',
      ig: 'Nnukwu ejula ala Africa, ndị a sachara nke ọma. Ha nwere abụba dị ala, ma nwee protein na iron nke ukwuu. Nri kacha mma na nri Naijiria.',
      ha: 'Manyan dodannin kadi na kasar Afirka, wadanda aka tsaftace su sosai. Ba su da kitse, suna da wadata da furotin da ƙarfe. Babban abinci mai daɗi a Najeriya.',
      pid: 'Giant African land snails, washed clean with alum make the slime pull out. High inside protein, zero fat. Big obstacles for premium soups.'
    },
    recipe: {
      en: 'Peppered Snails: Wash snails thoroughly with alum and lime juice to remove slime. Boil with spices. Fry chopped onions, tomatoes, and hot pepper, toss in snails and simmer.',
      yo: 'Igbin Alata: Fọ igbin daradara pẹlu kan-un ati omi osan wẹwẹ. Se pẹlu awọn nkan olorun. Din alubosa, tomati, ati ata rodo, fi igbin si ki o se papọ.',
      ig: 'Ejula Ose: Sachaa ejula nke ọma site na iji alum na mmiri lemon. Sie ya na ngwa nri. Ghee yabasị, tomato na ose, tinye ejula e siri esi, wee kpalie ya.',
      ha: 'Peppered Snails: Wanke dodannin kadi sosai da alum da ruwan tsami don cire yauƙi. Tafasa da kayan yaji. Soya albasa da tumatur da barkono, zuba dodannin kadi.',
      pid: 'Peppered Snail: Wash snails well with alum make slime clear. Boil with seasoning. Fry onion, tomato, and pepper, throw the snail inside, fry together.'
    },
    nutrition: ['Lean Protein', 'Iron Rich', 'Zero Trans Fat']
  },
  82: {
    names: {
      en: 'Cow Skin (Ponmo) - Large Pack',
      yo: 'Kanda (Pọnmọ) - Apo Tobi',
      ig: 'Akpụkpọ Ehi (Ponmo) - Nnukwu Akpa',
      ha: 'Fatar shanu (Ponmo) - Babban Kunshin',
      pid: 'Clean Ponmo (Cow Skin) - Large Pack'
      ig: 'Akpụkpọ ehi (Ponmo) dị ọcha, nke a haziri nke ọma. Enweghị ihe nchekwa kemikali. Ọ na-enye ọdịdị bara ọgaranya ma na-amị ofe na stews nke ọma.',
      ha: 'Fatar shanu (Ponmo) mai tsafta da aka sarrafa ta sosai. Ba ta da sinadarai masu kiyaye abinci. Tana da kyau ga miya da stews.',
      pid: 'Well cleaned and processed soft brown Ponmo. No chemicals, purely organic. Absorbs stew well, soft to chew, best addition to any soup.'
    },
    recipe: {
      en: 'Fried Ponmo Sauce: Cut Ponmo into small pieces. Boil with onion and salt. Fry blended pepper, onion, and palm oil, then stir in the cooked Ponmo. Cook until sauce coats it.',
      yo: 'Pọnmọ Alata: Ge pọnmọ si wẹwẹ. Se pẹlu alubosa ati iyọ. Din ata, alubosa ati epo pupa ti a lo, lẹhinna fi pọnmọ si. Se titi ti ọbẹ yoo fi kán mọ ọn.',
      ig: 'Fried Ponmo Sauce: Bee Ponmo n’obere iberibe. Sie ya na yabasị na nnu. Ghee ose, yabasị na mmanụ nri, wee tinye Ponmo e siri esi. Sie ruo mgbe ofe ahụ kpuchiri ya.',
      ha: 'Fried Ponmo Sauce: Yanka Ponmo kanana. Tafasa da albasa da gishiri. Soya barkono, albasa da man ja, sannan a zuba dahuwar Ponmo. A dahu har sai miyar ta hade.',
      pid: 'Ponmo Sauce: Cut the Ponmo. Boil am with onion and salt. Fry blended red pepper, onion inside palm oil, drop the Ponmo, cook make the sauce gum body.'
    },
    nutrition: ['Collagen Rich', 'Low Fat', 'Low Calorie']
  }
};

const PRODUCTS = [
  // --- GRAINS & TUBERS ---
  { id: 1, category: 'grains', name: 'Premium Parboiled Rice - 50kg Bag', price: 120000, oldPrice: 135000, img: 'assets/rice.png' },
  { id: 2, category: 'grains', name: 'Oloyin Honey Beans - 1 Paint Bucket', price: 18000, oldPrice: 20000, img: 'assets/beans.png' },
  { id: 3, category: 'grains', name: 'Ijebu Garri - 1 Paint Bucket', price: 6000, oldPrice: 7000, img: 'assets/garri.png' },
  { id: 4, category: 'grains', name: 'Abuja Yam - Large Tuber (Set of 5)', price: 35000, oldPrice: 40000, img: 'assets/yam.png' },
  { id: 5, category: 'grains', name: 'Golden Penny Semovita - 2kg', price: 8500, oldPrice: 10000, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80' },
  { id: 6, category: 'grains', name: 'Mama Gold Flour - 50kg', price: 88000, oldPrice: 95000, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80' },
  { id: 7, category: 'grains', name: 'Ofada Rice - 5kg', price: 25000, oldPrice: 28000, img: 'assets/ofada_rice.png' },
  { id: 8, category: 'grains', name: 'White Beans (Iron Beans) - 1 Paint', price: 16000, oldPrice: 18000, img: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400&q=80' },
  { id: 9, category: 'grains', name: 'Poundo Yam Flour - 5kg', price: 32000, oldPrice: 36000, img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80' },
  { id: 10, category: 'grains', name: 'Yellow Garri (Edo) - 1 Paint', price: 6500, oldPrice: 7500, img: 'assets/yellow_garri.png' },
  { id: 11, category: 'grains', name: 'Basmati Rice (Royal) - 5kg', price: 38000, oldPrice: 42000, img: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9b8f6?w=400&q=80' },
  { id: 12, category: 'grains', name: 'Unripe Plantain - Bunch', price: 8000, oldPrice: 10000, img: 'https://images.unsplash.com/photo-1566393028639-d108a42c46a7?w=400&q=80' },
  { id: 13, category: 'grains', name: 'Sweet Potatoes - Small Basket', price: 9000, oldPrice: null, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80' },
  { id: 14, category: 'grains', name: 'Irish Potatoes - Small Basket', price: 15000, oldPrice: 18000, img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80' },
  { id: 15, category: 'grains', name: 'Wheat Flour - 1kg', price: 3200, oldPrice: null, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80' },
  { id: 16, category: 'grains', name: 'Elubo (Yam Flour) - 1 Paint', price: 14000, oldPrice: 16000, img: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=400&q=80' },
  { id: 17, category: 'grains', name: 'Guinea Corn (Sorghum) - 1 Paint', price: 7000, oldPrice: null, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80' },
  { id: 18, category: 'grains', name: 'Millet - 1 Paint', price: 6500, oldPrice: null, img: 'https://images.unsplash.com/photo-1612187621752-3e5f42a0ff56?w=400&q=80' },

  // --- OILS & SPICES ---
  { id: 19, category: 'oils', name: 'Kings Pure Vegetable Oil - 5 Liters', price: 28000, oldPrice: 32000, img: 'assets/vegoil.png' },
  { id: 20, category: 'oils', name: 'Red Palm Oil - 5 Liters', price: 18000, oldPrice: 22000, img: 'assets/palmoil.png' },
  { id: 21, category: 'oils', name: 'Knorr Chicken Cubes - Pack of 50', price: 5500, oldPrice: 6500, img: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80' },
  { id: 22, category: 'oils', name: 'Dangote Refined Salt - 1kg', price: 2000, oldPrice: null, img: 'https://images.unsplash.com/photo-1626359556859-99e3381fa8b5?w=400&q=80' },
  { id: 23, category: 'oils', name: 'Gino Tomato Paste Sachet - Roll', price: 10000, oldPrice: 12000, img: 'https://images.unsplash.com/photo-1612966809155-b61c9cebc40c?w=400&q=80' },
  { id: 24, category: 'oils', name: 'Maggi Star Cubes - Pack of 100', price: 5000, oldPrice: 6000, img: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80' },
  { id: 25, category: 'oils', name: 'Grand Soya Oil - 2.75 Liters', price: 19000, oldPrice: 22000, img: 'assets/vegoil.png' },
  { id: 26, category: 'oils', name: 'Power Oil - 1.4 Liters (Box of 6)', price: 36000, oldPrice: 40000, img: 'assets/vegoil.png' },
  { id: 27, category: 'oils', name: 'Ground Crayfish - 1 Custard Paint', price: 38000, oldPrice: 45000, img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80' },
  { id: 28, category: 'oils', name: 'Ducros Curry Powder - 25g (Pack of 12)', price: 6500, oldPrice: null, img: 'https://images.unsplash.com/photo-1599909533731-1a55048c44bc?w=400&q=80' },
  { id: 29, category: 'oils', name: 'Ducros Thyme Leaves - 25g', price: 1200, oldPrice: null, img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=80' },
  { id: 30, category: 'oils', name: 'Gino Pepper & Onion Paste - Roll', price: 11000, oldPrice: 13000, img: 'https://images.unsplash.com/photo-1612966809155-b61c9cebc40c?w=400&q=80' },
  { id: 31, category: 'oils', name: 'Dried Cameroon Pepper - 1 Derica', price: 8000, oldPrice: null, img: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&q=80' },
  { id: 32, category: 'oils', name: 'Onga Stew Seasoning - Roll', price: 4000, oldPrice: null, img: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80' },
  { id: 33, category: 'oils', name: 'Bama Mayonnaise - 946ml (Large)', price: 18000, oldPrice: 20000, img: 'https://images.unsplash.com/photo-1571945192257-6edd68acf6e3?w=400&q=80' },
  { id: 34, category: 'oils', name: 'Heinz Tomato Ketchup - 300g', price: 6500, oldPrice: 7500, img: 'https://images.unsplash.com/photo-1612966809155-b61c9cebc40c?w=400&q=80' },
  { id: 35, category: 'oils', name: 'Derica Tomato Paste - Tin (Pack of 6)', price: 13000, oldPrice: 15000, img: 'https://images.unsplash.com/photo-1612966809155-b61c9cebc40c?w=400&q=80' },
  { id: 36, category: 'oils', name: 'Mr Chef Salt - 500g (Pack of 10)', price: 8000, oldPrice: null, img: 'https://images.unsplash.com/photo-1626359556859-99e3381fa8b5?w=400&q=80' },

  // --- PACKAGED FOODS ---
  { id: 37, category: 'packaged', name: 'Indomie Onion Chicken - 1 Carton', price: 28000, oldPrice: 32000, img: 'assets/noodles.png' },
  { id: 38, category: 'packaged', name: 'Golden Penny Spaghetti - 1 Carton', price: 34000, oldPrice: 38000, img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80' },
  { id: 39, category: 'packaged', name: 'Honeywell Macaroni - 500g', price: 3000, oldPrice: null, img: 'https://images.unsplash.com/photo-1608797178974-15b35a61d121?w=400&q=80' },
  { id: 40, category: 'packaged', name: 'Kelloggs Corn Flakes - 1kg', price: 16000, oldPrice: 18500, img: 'https://images.unsplash.com/photo-1619718994927-5d9945c6f4e2?w=400&q=80' },
  { id: 41, category: 'packaged', name: 'Quaker Oats - 500g Tin', price: 8500, oldPrice: 10000, img: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&q=80' },
  { id: 42, category: 'packaged', name: 'Indomie Superpack - 1 Carton', price: 32000, oldPrice: 36000, img: 'assets/noodles.png' },
  { id: 43, category: 'packaged', name: 'Minimie Chinchin - Box of 50', price: 10000, oldPrice: 12000, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80' },
  { id: 44, category: 'packaged', name: 'Golden Morn - 900g Family Pack', price: 11000, oldPrice: 13000, img: 'https://images.unsplash.com/photo-1619718994927-5d9945c6f4e2?w=400&q=80' },
  { id: 45, category: 'packaged', name: 'Nasco Cornflakes - 500g', price: 6500, oldPrice: 7500, img: 'https://images.unsplash.com/photo-1619718994927-5d9945c6f4e2?w=400&q=80' },
  { id: 46, category: 'packaged', name: 'Crown Premium Pasta - 1 Carton', price: 34000, oldPrice: 38000, img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80' },
  { id: 47, category: 'packaged', name: 'Gala Sausage Roll - 1 Carton', price: 20000, oldPrice: 23000, img: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?w=400&q=80' },
  { id: 48, category: 'packaged', name: 'McVities Digestive Biscuits - Roll', price: 5000, oldPrice: null, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80' },
  { id: 49, category: 'packaged', name: 'Checkers Custard (Vanilla) - 2kg', price: 10000, oldPrice: 12000, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80' },
  { id: 50, category: 'packaged', name: 'LadyB Custard (Banana) - 2kg', price: 9500, oldPrice: 11000, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80' },
  { id: 51, category: 'packaged', name: 'Pringles Original - Large Tube', price: 8500, oldPrice: 10000, img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80' },
  { id: 52, category: 'packaged', name: 'Exeter Corned Beef - Tin', price: 9500, oldPrice: 11000, img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80' },
  { id: 53, category: 'packaged', name: 'Geisha Mackerel in Tomato Sauce', price: 4000, oldPrice: null, img: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&q=80' },
  { id: 54, category: 'packaged', name: 'Sardine (Titus brand) - Tin', price: 3500, oldPrice: null, img: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&q=80' },
  { id: 55, category: 'packaged', name: 'Bakers Choice Baking Powder - Tin', price: 2800, oldPrice: null, img: 'https://images.unsplash.com/photo-1590337574323-a7b2f92ab5ce?w=400&q=80' },

  // --- BEVERAGES & DAIRY ---
  { id: 56, category: 'beverages', name: 'Peak Evaporated Milk - Tin (Pack of 6)', price: 14000, oldPrice: 16000, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80' },
  { id: 57, category: 'beverages', name: 'Milo Energy Drink - 500g Refill', price: 11000, oldPrice: 13000, img: 'https://images.unsplash.com/photo-1569397289773-bb8b8db0bcda?w=400&q=80' },
  { id: 58, category: 'beverages', name: 'Nescafe Classic Coffee - 50g', price: 9000, oldPrice: null, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80' },
  { id: 59, category: 'beverages', name: 'Lipton Yellow Label Tea - 100 Bags', price: 8000, oldPrice: null, img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&q=80' },
  { id: 60, category: 'beverages', name: 'Dangote Refined Sugar - 1kg', price: 8000, oldPrice: null, img: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=400&q=80' },
  { id: 61, category: 'beverages', name: 'Coca-Cola Can - Pack of 12', price: 16000, oldPrice: 19000, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80' },
  { id: 62, category: 'beverages', name: 'Bournvita Refill - 500g', price: 10000, oldPrice: 12000, img: 'https://images.unsplash.com/photo-1569397289773-bb8b8db0bcda?w=400&q=80' },
  { id: 63, category: 'beverages', name: 'Dano Full Cream Milk - 900g', price: 17000, oldPrice: 19500, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80' },
  { id: 64, category: 'beverages', name: 'Three Crowns Milk - 380g Tin', price: 5500, oldPrice: null, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80' },
  { id: 65, category: 'beverages', name: 'Maltina - Pack of 12 Cans', price: 18000, oldPrice: 21000, img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&q=80' },
  { id: 66, category: 'beverages', name: 'Chivita 100% Orange Juice - 1L', price: 6500, oldPrice: 7500, img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80' },
  { id: 67, category: 'beverages', name: 'Ribena Blackcurrant Drink - 1L', price: 7500, oldPrice: 9000, img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80' },
  { id: 68, category: 'beverages', name: 'Lucozade Boost - 1L', price: 7000, oldPrice: 8000, img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&q=80' },
  { id: 69, category: 'beverages', name: 'Aquafina Bottled Water - Pack of 12', price: 6000, oldPrice: null, img: 'https://images.unsplash.com/photo-1608889174633-56ad67d6d13b?w=400&q=80' },
  { id: 70, category: 'beverages', name: 'Eva Water - 75cl (Pack of 12)', price: 7000, oldPrice: 8000, img: 'https://images.unsplash.com/photo-1608889174633-56ad67d6d13b?w=400&q=80' },
  { id: 71, category: 'beverages', name: 'Five Alive Berry Blast - 1L', price: 6000, oldPrice: null, img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80' },
  { id: 72, category: 'beverages', name: 'St. Louis Sugar - Box (1kg)', price: 8000, oldPrice: null, img: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=400&q=80' },
  { id: 73, category: 'beverages', name: 'Cowbell Milk Sachet - Roll of 50', price: 12000, oldPrice: 14000, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80' },

  // --- MEAT, POULTRY & SEAFOOD ---
  { id: 74, category: 'meat', name: 'Frozen Whole Chicken (Orobo) - 1 Carton', price: 90000, oldPrice: 100000, img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80' },
  { id: 75, category: 'meat', name: 'Fresh Beef Cuts - 1kg', price: 15000, oldPrice: null, img: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3e2f?w=400&q=80' },
  { id: 76, category: 'meat', name: 'Titus Fish (Mackerel) - 1 Carton', price: 110000, oldPrice: 125000, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80' },
  { id: 77, category: 'meat', name: 'Snail (Large) - Set of 10', price: 50000, oldPrice: 58000, img: 'assets/snail.png' },
  { id: 78, category: 'meat', name: 'Turkey Wings - 1 Carton', price: 105000, oldPrice: 120000, img: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400&q=80' },
  { id: 79, category: 'meat', name: 'Croaker Fish - 1 Carton', price: 120000, oldPrice: 135000, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80' },
  { id: 80, category: 'meat', name: 'Goat Meat (Chevon) - 1kg', price: 18000, oldPrice: 21000, img: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3e2f?w=400&q=80' },
  { id: 81, category: 'meat', name: 'Cow Tripe (Shaki) - 1kg', price: 12000, oldPrice: null, img: 'assets/shaki.png' },
  { id: 82, category: 'meat', name: 'Cow Skin (Ponmo) - Large Pack', price: 10000, oldPrice: 12000, img: 'assets/ponmo.png' },
  { id: 83, category: 'meat', name: 'Stockfish (Okporoko) - 1 Body', price: 30000, oldPrice: 35000, img: 'https://images.unsplash.com/photo-1475518112798-86ae31822ad9?w=400&q=80' },
  { id: 84, category: 'meat', name: 'Dry Catfish - Pack of 5', price: 28000, oldPrice: 32000, img: 'assets/dry_catfish.png' },
  { id: 85, category: 'meat', name: 'Bonga Fish (Smoked) - Basket', price: 20000, oldPrice: null, img: 'assets/dry_catfish.png' },
  { id: 86, category: 'meat', name: 'Live Broiler Chicken (Huge)', price: 32000, oldPrice: 38000, img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&q=80' },
  { id: 87, category: 'meat', name: 'Live Catfish - 1kg', price: 10000, oldPrice: 12000, img: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&q=80' },

  // --- FRESH PRODUCE & VEGETABLES ---
  { id: 104, category: 'fresh', name: 'Cabbage - Large Head', price: 3500, oldPrice: null, img: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=400&q=80' }
];

// --- HELPER DYNAMIC TRANSLATION SYSTEM ---
const getLocalizedProduct = (product, lang) => {
  const custom = PRODUCT_TRANSLATIONS[product.id];
  if (custom) {
    return {
      name: custom.names[lang] || product.name,
      desc: custom.desc[lang] || "Fresh, clean, and high-quality food product sourced from local Nigerian markets. Perfect for everyday culinary preparation.",
      recipe: custom.recipe[lang] || "Wash thoroughly. Prepare by boiling, stewing, or frying based on your recipe. Add salt, pepper, onions, and local spices to bring out the rich traditional flavor.",
      nutrition: custom.nutrition || ["Energy Source", "Minerals", "Organic"]
    };
  }
  
  // Fallback Translator replacing English keywords with localized versions
  let name = product.name;
  let desc = "Premium quality foodstuff sourced from the best local markets in Nigeria. Fresh, healthy, and highly nutritious.";
  let recipe = "Wash thoroughly before preparation. Add your favorite seasonings, onions, and pepper, then cook to desired tenderness.";
  let nutrition = ["Minerals", "Healthy", "Carbohydrates"];
  
  const keywords = {
    "Rice": { yo: "Iresi", ig: "Osikapa", ha: "Shinkafa", pid: "Rice" },
    "Beans": { yo: "Ewa", ig: "Agwa", ha: "Wake", pid: "Beans" },
    "Garri": { yo: "Gari", ig: "Garri", ha: "Gari", pid: "Garri" },
    "Yam": { yo: "Isu", ig: "Ji", ha: "Doya", pid: "Yam" },
    "Oil": { yo: "Epo", ig: "Mmanụ", ha: "Mai", pid: "Oil" },
    "Tomato": { yo: "Tomati", ig: "Tomato", ha: "Tumatur", pid: "Tomato" },
    "Pepper": { yo: "Ata", ig: "Ose", ha: "Tattasai", pid: "Pepper" },
    "Onion": { yo: "Alubosa", ig: "Yabasị", ha: "Albasa", pid: "Onion" },
    "Chicken": { yo: "Eran Eiye", ig: "Anụ Ọkụkọ", ha: "Nama Kaza", pid: "Chicken" },
    "Beef": { yo: "Eran Malu", ig: "Anụ Ehi", ha: "Nama Saniya", pid: "Beef" },
    "Fish": { yo: "Eja", ig: "Azụ", ha: "Kifi", pid: "Fish" },
    "Water": { yo: "Omi", ig: "Mmiri", ha: "Ruwa", pid: "Water" },
    "Sugar": { yo: "Suga", ig: "Suga", ha: "Suga", pid: "Sugar" },
    "Milk": { yo: "Wara", ig: "Mmiri Ara", ha: "Wara", pid: "Milk" },
    "Potato": { yo: "Kukunduku", ig: "Nduku", ha: "Dankali", pid: "Potato" },
    "Plantain": { yo: "Ogede Agbagba", ig: "Abereka", ha: "Ayaba", pid: "Plantain" }
  };
  
  if (lang !== 'en') {
    Object.keys(keywords).forEach(kw => {
      const regex = new RegExp(kw, "gi");
      if (name.includes(kw) || name.toLowerCase().includes(kw.toLowerCase())) {
        name = name.replace(regex, keywords[kw][lang]);
      }
    });
  }
  
  return { name, desc, recipe, nutrition };
};

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

const Header = ({ cartCount, onOpenCart, onOpenAuth, user, searchQuery, setSearchQuery, language, setLanguage, theme, onToggleTheme }) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fa-solid fa-store"></i>
        FoodPrice
      </a>

      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input 
          type="text" 
          className="search-input" 
          placeholder={t.searchPlaceholder} 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn">{t.searchBtn}</button>
      </div>

      <div className="header-actions">
        {/* Language Selector */}
        <div className="lang-selector-container">
          <i className="fa-solid fa-globe" style={{color: 'var(--primary-color)'}}></i>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="lang-select">
            <option value="en">EN</option>
            <option value="yo">YOR</option>
            <option value="ig">IGB</option>
            <option value="ha">HAU</option>
            <option value="pid">PID</option>
          </select>
        </div>

        {/* Theme Toggle Switch */}
        <button onClick={onToggleTheme} className="theme-toggle-btn" title="Toggle Theme">
          <i className={theme === 'dark' ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
        </button>

        <div className="action-item" onClick={onOpenAuth}>
          <i className="fa-regular fa-user"></i>
          <span>{user ? user.name : t.account}</span>
        </div>
        <div className="action-item">
          <i className="fa-solid fa-list-check"></i>
          <span>{t.orders}</span>
        </div>
        <div className="action-item" onClick={onOpenCart}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{t.cart}</span>
          {cartCount > 0 && <span className="cart-badge bump">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
};

const Sidebar = ({ activeCategory, setActiveCategory, language }) => {
  const t = UI_TRANSLATIONS[language];
  return (
    <aside className="sidebar">
      <div className="sidebar-title">{t.categoriesTitle}</div>
      <ul className="category-list">
        {CATEGORIES.map(cat => (
          <li 
            key={cat.id} 
            className={`category-item ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <i className={cat.icon}></i>
            {cat.names[language]}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const Hero = ({ language }) => {
  const t = UI_TRANSLATIONS[language];
  return (
    <div className="hero-carousel">
      <div className="hero-content">
        <div className="hero-tag">{t.heroTag}</div>
        <h1 className="hero-title">{t.heroTitle}</h1>
        <p className="hero-desc">{t.heroDesc}</p>
        <button className="hero-btn">{t.heroBtn}</button>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onAddToCart, language, onClickCard }) => {
  const discount = calculateDiscount(product.price, product.oldPrice);
  const catName = CATEGORIES.find(c => c.id === product.category)?.names[language] || 'Grocery';
  const { name } = getLocalizedProduct(product, language);
  const t = UI_TRANSLATIONS[language];

  return (
    <div className="product-card" onClick={() => onClickCard(product)}>
      {discount && <div className="discount-tag">{discount}</div>}
      
      <div className="product-img-wrapper">
        <img src={product.img} alt={name} className="product-img" />
      </div>
      
      <div className="product-category">{catName}</div>
      <h3 className="product-name">{name}</h3>
      
      <div className="price-container">
        <div className="current-price">{formatCurrency(product.price)}</div>
        {product.oldPrice && <div className="old-price">{formatCurrency(product.oldPrice)}</div>}
      </div>
      
      <button className="add-btn" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
        <i className="fa-solid fa-cart-plus"></i>
        {t.addToCartBtn}
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

// --- NEW COMPONENT: PRODUCT DETAIL MODAL ---
const ProductDetailModal = ({ isOpen, onClose, product, onAddToCart, language }) => {
  const [qty, setQty] = useState(1);
  if (!isOpen || !product) return null;

  const t = UI_TRANSLATIONS[language];
  const { name, desc, recipe, nutrition } = getLocalizedProduct(product, language);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      onAddToCart(product);
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        <h2 className="modal-title"><i className="fa-solid fa-circle-info" style={{color: 'var(--primary-color)'}}></i> {name}</h2>
        
        <div className="product-detail-layout">
          <div className="detail-img-wrapper">
            <img src={product.img} alt={name} className="detail-img" />
          </div>
          
          <div className="detail-info">
            <p className="detail-desc">{desc}</p>
            
            <div className="detail-section-title">{t.recipeTitle}</div>
            <div className="recipe-box">{recipe}</div>
            
            <div className="detail-section-title">{t.nutritionTitle}</div>
            <div className="nutrition-tags">
              {nutrition.map((nut, index) => (
                <span key={index} className="nutrition-tag">{nut}</span>
              ))}
            </div>
            
            <div className="detail-actions">
              <div className="price-container" style={{ marginBottom: 0 }}>
                <div className="current-price" style={{ fontSize: '24px' }}>{formatCurrency(product.price)}</div>
              </div>
              
              <div className="qty-control">
                <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}><i className="fa-solid fa-minus"></i></button>
                <span className="qty-val">{qty}</span>
                <button className="qty-btn" onClick={() => setQty(qty + 1)}><i className="fa-solid fa-plus"></i></button>
              </div>
              
              <button className="primary-btn" style={{ flex: 1, padding: '10px' }} onClick={handleAddToCart}>
                <i className="fa-solid fa-cart-plus"></i> {t.addToCartBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthModal = ({ isOpen, onClose, onLogin, language }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', phone: '', password: '' });
  const t = UI_TRANSLATIONS[language];

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem('foodprice_user'));
      if (savedUser && savedUser.phone === formData.phone && savedUser.password === formData.password) {
        onLogin(savedUser);
        onClose();
      } else {
        alert("Invalid phone number or password. Try creating an account.");
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
        <h2 className="modal-title">{isLogin ? t.welcomeBack : t.createAccount}</h2>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label className="form-label">{t.fullName}</label>
              <input type="text" required className="form-input" placeholder="John Doe" 
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
          )}
          <div className="form-group">
            <label className="form-label">{t.phoneNumber}</label>
            <input type="tel" required className="form-input" placeholder="08012345678" 
              value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
          </div>
          <div className="form-group">
            <label className="form-label">{t.password}</label>
            <input type="password" required className="form-input" placeholder="••••••••" 
              value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
          </div>
          
          <button type="submit" className="primary-btn">{isLogin ? t.login : t.signUp}</button>
        </form>
        
        <div className="toggle-auth">
          {isLogin ? `${t.needAccount} ` : `${t.haveAccount} `}
          <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? t.signUp : t.login}</span>
        </div>
      </div>
    </div>
  );
};

const CartModal = ({ isOpen, onClose, cartItems, onCheckout, language }) => {
  const t = UI_TRANSLATIONS[language];
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        <h2 className="modal-title"><i className="fa-solid fa-cart-shopping"></i> {t.yourCart}</h2>
        
        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-medium)' }}>{t.cartEmpty}</p>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map(item => {
                const { name } = getLocalizedProduct(item, language);
                return (
                  <div key={item.id} className="cart-item">
                    <img src={item.img} alt={name} className="cart-item-img" />
                    <div className="cart-item-details">
                      <div className="cart-item-name">{name}</div>
                      <div className="cart-item-quantity">Qty: {item.quantity}</div>
                    </div>
                    <div className="cart-item-price">{formatCurrency(item.price * item.quantity)}</div>
                  </div>
                );
              })}
            </div>
            <div className="cart-total">
              <span>{t.cartTotal}</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <button className="primary-btn" onClick={onCheckout}>{t.proceedCheckout}</button>
          </>
        )}
      </div>
    </div>
  );
};

const Footer = ({ language }) => {
  const t = UI_TRANSLATIONS[language];
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><i className="fa-solid fa-store" style={{color: 'var(--primary-color)'}}></i> FoodPrice</h3>
          <p>{t.footerAbout}</p>
        </div>
        
        <div className="footer-section">
          <h3>{t.footerService}</h3>
          <p>{t.footerHelp}</p>
        </div>
        
        <div className="footer-section">
          <h3>{t.footerContact}</h3>
          <div className="contact-links">
            <a href="https://wa.me/2348039579410" target="_blank" rel="noopener noreferrer" className="contact-btn btn-whatsapp">
              <i className="fa-brands fa-whatsapp"></i> Chat (08039579410)
            </a>
            <a href="mailto:olayiwolamichael217@gmail.com" className="contact-btn btn-email">
              <i className="fa-solid fa-envelope"></i> olayiwolamichael217@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---
const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('foodprice_lang') || 'en');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [toasts, setToasts] = useState([]);
  
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
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

  // Load user from local storage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('foodprice_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleToggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Filter products based on active category AND search query
  const displayedProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    
    // We should search against both localized name AND original English name
    const { name: localizedName } = getLocalizedProduct(p, language);
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          localizedName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    const { name } = getLocalizedProduct(product, language);
    const t = UI_TRANSLATIONS[language];
    const toastMsg = t.toastAdded.replace('{product}', name);

    // Add toast
    const newToast = { id: Date.now(), message: toastMsg };
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.map(t => t.id === newToast.id ? { ...t, fading: true } : t));
      setTimeout(() => setToasts(prev => prev.filter(t => t.id !== newToast.id)), 300);
    }, 3000);
  };

  const handleCheckout = () => {
    const t = UI_TRANSLATIONS[language];
    if (!user) {
      setIsCartOpen(false);
      setIsAuthOpen(true);
      return;
    }
    // Simulate successful order
    setCartItems([]);
    setIsCartOpen(false);
    
    const successMsg = t.checkoutSuccess.replace('{user}', user.name);
    const newToast = { id: Date.now(), message: successMsg };
    setToasts(prev => [...prev, newToast]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== newToast.id)), 4000);
  };

  const t = UI_TRANSLATIONS[language];

  return (
    <div className="app-container">
      <div className="top-bar">
        {t.topBarText}
      </div>
      
      <Header 
        cartCount={cartCount} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        user={user}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
      
      <div className="main-layout">
        <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} language={language} />
        
        <main className="content-area">
          {activeCategory === 'all' && !searchQuery && <Hero language={language} />}
          
          <div className="section-title">
            {searchQuery ? `Search Results for "${searchQuery}"` : (CATEGORIES.find(c => c.id === activeCategory)?.names[language] || 'Products')}
            <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-light)' }}>
              {displayedProducts.length} {t.items}
            </span>
          </div>
          
          {displayedProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-medium)' }}>
              <i className="fa-solid fa-basket-shopping" style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.5 }}></i>
              <h2>{t.noProductsFoundTitle}</h2>
              <p>{t.noProductsFoundDesc}</p>
            </div>
          ) : (
            <div className="product-grid">
              {displayedProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart} 
                  language={language}
                  onClickCard={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </main>
      </div>
      
      <Footer language={language} />
      
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLogin={setUser} language={language} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} onCheckout={handleCheckout} language={language} />
      <ProductDetailModal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} product={selectedProduct} onAddToCart={handleAddToCart} language={language} />
      
      <ToastContainer toasts={toasts} />
    </div>
  );
};

// Render the App to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
