import { Category, GalleryItem, MenuItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Western Grill',
  tagline: 'Grill, Gather & Enjoy',
  location: 'Commercial Market, Satellite Town, Rawalpindi',
  locationShort: 'Commercial Market • Rawalpindi',
  phone: '0330 0007697',
  phoneTel: 'tel:+923300007697',
  email: 'westerngrillrwd@gmail.com',
  facebook: 'https://www.facebook.com/westerngrill.rwp/',
  instagram: 'https://www.instagram.com/westerngrill.pk/',
  googleMapsDirections: 'https://www.google.com/maps/search/?api=1&query=Western+Grill+Commercial+Market+Satellite+Town+Rawalpindi',
  openingHours: 'Mon - Sun: 12:00 PM - 1:00 AM',
};

// Single, bright, restaurant-quality hero image (juicy grilled ribeye steak with herb butter & rosemary)
export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=75';

// 11 Main Categories matching user request (compressed thumbnails)
export const CATEGORIES: Category[] = [
  {
    id: 'grill',
    name: 'Grill',
    slug: 'grill',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=200&q=75',
  },
  {
    id: 'steaks',
    name: 'Steaks',
    slug: 'steaks',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=200&q=75',
  },
  {
    id: 'bbq',
    name: 'BBQ',
    slug: 'bbq',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=200&q=75',
  },
  {
    id: 'burgers',
    name: 'Burgers',
    slug: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=75',
  },
  {
    id: 'pasta',
    name: 'Pasta',
    slug: 'pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281640?auto=format&fit=crop&w=200&q=75',
  },
  {
    id: 'pizza',
    name: 'Pizza',
    slug: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=75',
  },
  {
    id: 'chinese',
    name: 'Chinese',
    slug: 'chinese',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=200&q=75',
  },
  {
    id: 'turkish',
    name: 'Turkish',
    slug: 'turkish',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=200&q=75',
  },
  {
    id: 'sides',
    name: 'Sides',
    slug: 'sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=200&q=75',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    slug: 'desserts',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=200&q=75',
  },
  {
    id: 'drinks',
    name: 'Drinks',
    slug: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=200&q=75',
  },
];

// Popular Dishes: Strictly 4 items as requested
export const POPULAR_DISHES: MenuItem[] = [
  {
    id: 'pop-1',
    name: 'Grilled Ribeye Steak',
    category: 'steaks',
    description: 'Juicy prime cut seared to order with garlic butter and rosemary.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=75',
    badge: "Chef's Pick",
  },
  {
    id: 'pop-2',
    name: 'Flame Grilled Chicken',
    category: 'grill',
    description: 'Marinated in fresh herbs and citrus, flame-charred on hot grill.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=75',
    badge: 'Popular',
  },
  {
    id: 'pop-3',
    name: 'Western BBQ Platter',
    category: 'bbq',
    description: 'Assorted seekh kababs, malai boti skewers and grilled chicken chops.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=75',
    badge: 'Signature',
  },
  {
    id: 'pop-4',
    name: 'Gourmet Crunch Burger',
    category: 'burgers',
    description: 'Hand-crafted crispy chicken fillet, cheddar cheese and signature relish.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=75',
    badge: 'Popular',
  },
];

// Concise Menu (2 signature items per category = 22 items total)
export const FULL_MENU: MenuItem[] = [
  // GRILL
  {
    id: 'm-grill-1',
    name: 'Flame Grilled Half Chicken',
    category: 'grill',
    description: 'Char-grilled with spicy herb glaze, served with potato wedges.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=400&q=75',
    badge: 'Popular',
  },
  {
    id: 'm-grill-2',
    name: 'Western Mixed Grill Combo',
    category: 'grill',
    description: 'Selection of grilled chops, tender skewers and roasted vegetables.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=75',
    badge: "Chef's Pick",
  },

  // STEAKS
  {
    id: 'm-steak-1',
    name: 'T-Bone Steak',
    category: 'steaks',
    description: 'Classic prime steak cooked to temperature with mashed potatoes.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=75',
    badge: 'Signature',
  },
  {
    id: 'm-steak-2',
    name: 'Mushroom Herb Chicken Steak',
    category: 'steaks',
    description: 'Tender chicken steak smothered in velvety wild mushroom reduction.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=400&q=75',
  },

  // BBQ
  {
    id: 'm-bbq-1',
    name: 'Chicken Malai Boti',
    category: 'bbq',
    description: 'Melt-in-mouth chicken chunks marinated in cream, mild green chilies.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=400&q=75',
    badge: 'Popular',
  },
  {
    id: 'm-bbq-2',
    name: 'Beef Seekh Kabab',
    category: 'bbq',
    description: 'Spiced minced beef roasted over natural charcoal embers.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=75',
  },

  // BURGERS
  {
    id: 'm-burger-1',
    name: 'Western Supreme Beef Burger',
    category: 'burgers',
    description: 'Smoky grilled beef patty with caramelized onions and melted cheddar.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=75',
    badge: 'Popular',
  },
  {
    id: 'm-burger-2',
    name: 'Crunchy Zinger Deluxe',
    category: 'burgers',
    description: 'Crispy golden fried breast fillet with lettuce and house sauce.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=75',
  },

  // PASTA
  {
    id: 'm-pasta-1',
    name: 'Fettuccine Alfredo',
    category: 'pasta',
    description: 'Creamy parmesan sauce with garlic butter and sliced grilled chicken.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281640?auto=format&fit=crop&w=400&q=75',
    badge: "Chef's Pick",
  },
  {
    id: 'm-pasta-2',
    name: 'Penne Arrabiata',
    category: 'pasta',
    description: 'Tossed in spicy plum tomato sauce with fresh basil and chili flakes.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=75',
  },

  // PIZZA
  {
    id: 'm-pizza-1',
    name: 'Western Special Pizza',
    category: 'pizza',
    description: 'Thin crust loaded with grilled chicken, pepperoni, peppers and cheese.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=75',
    badge: 'Signature',
  },
  {
    id: 'm-pizza-2',
    name: 'Chicken Fajita Feast',
    category: 'pizza',
    description: 'Spicy fajita chicken strips, sweet peppers, onion and rich mozzarella.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=75',
  },

  // CHINESE
  {
    id: 'm-chinese-1',
    name: 'Chicken Manchurian with Rice',
    category: 'chinese',
    description: 'Tangy red chili ginger gravy with wok-tossed egg fried rice.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=75',
    badge: 'Popular',
  },
  {
    id: 'm-chinese-2',
    name: 'Kung Pao Chicken',
    category: 'chinese',
    description: 'Spiced chicken stir-fry with roasted peanuts and bell peppers.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=75',
  },

  // TURKISH
  {
    id: 'm-turkish-1',
    name: 'Turkish Adana Kebab',
    category: 'turkish',
    description: 'Minced lamb and beef skewer spiced with roasted red peppers on flatbread.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=400&q=75',
    badge: 'Signature',
  },
  {
    id: 'm-turkish-2',
    name: 'Turkish Meat Pide',
    category: 'turkish',
    description: 'Oven-baked boat flatbread with seasoned minced beef and herbs.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=75',
  },

  // SIDES
  {
    id: 'm-sides-1',
    name: 'Seasoned French Fries',
    category: 'sides',
    description: 'Hot crisp golden potato fries with seasoning salt.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=75',
  },
  {
    id: 'm-sides-2',
    name: 'Fresh Garden Salad',
    category: 'sides',
    description: 'Seasonal crunchy greens, cucumbers and light olive dressing.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=75',
  },

  // DESSERTS
  {
    id: 'm-dessert-1',
    name: 'Sizzling Brownie & Ice Cream',
    category: 'desserts',
    description: 'Warm fudge brownie served on a hot skillet with vanilla scoop.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=75',
    badge: 'Popular',
  },
  {
    id: 'm-dessert-2',
    name: 'Gulab Jamun with Pistachios',
    category: 'desserts',
    description: 'Warm milk dumplings in fragrant cardamom saffron syrup.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=75',
  },

  // DRINKS
  {
    id: 'm-drink-1',
    name: 'Fresh Mint Margarita',
    category: 'drinks',
    description: 'Chilled blend of fresh garden mint, lime, and crushed ice.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=75',
    badge: 'Popular',
  },
  {
    id: 'm-drink-2',
    name: 'Chilled Soft Drink / Water',
    category: 'drinks',
    description: 'Choice of chilled beverage or bottled mineral water.',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=75',
  },
];

// Compact Gallery: Exactly 6 images, compressed sizes
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Restaurant Ambience',
    category: 'Dining Area',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=75',
  },
  {
    id: 'gal-2',
    title: 'Flame Grill Kitchen',
    category: 'Live Cooking',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=75',
  },
  {
    id: 'gal-3',
    title: 'Grilled Steaks',
    category: 'Specialties',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=75',
  },
  {
    id: 'gal-4',
    title: 'Family Seating',
    category: 'Atmosphere',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=500&q=75',
  },
  {
    id: 'gal-5',
    title: 'Buffet Setup',
    category: 'Spreads',
    image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=500&q=75',
  },
  {
    id: 'gal-6',
    title: 'Desserts & Sizzlers',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=75',
  },
];
