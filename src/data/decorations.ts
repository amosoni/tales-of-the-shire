export interface Decoration {
  id: string;
  name: string;
  category: 'furniture' | 'wall' | 'floor' | 'garden' | 'lighting' | 'kitchen';
  description: string;
  materials: Material[];
  unlockCondition?: string;
  location: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'special';
  effects: string[];
  author: string;
  imageUrl?: string;
}

export interface Material {
  name: string;
  quantity: number;
  location: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'special';
}

export const decorations: Decoration[] = [
  {
    id: 'hobbit-armchair',
    name: 'Hobbit Armchair',
    category: 'furniture',
    description: 'A comfortable armchair perfect for reading by the fire in your hobbit hole.',
    materials: [
      { name: 'Wood', quantity: 5, location: 'Forest', rarity: 'common' },
      { name: 'Fabric', quantity: 2, location: 'Market', rarity: 'common' },
      { name: 'Cushion', quantity: 1, location: 'Crafting', rarity: 'common' },
    ],
    unlockCondition: 'Learn from Bilbo in Bywater',
    location: 'Living Room',
    rarity: 'common',
    effects: ['+10 Comfort', '+5 Reading'],
    author: 'Bilbo Baggins'
  },
  {
    id: 'round-window',
    name: 'Round Window',
    category: 'wall',
    description: 'A traditional round window that lets in natural light and fresh air.',
    materials: [
      { name: 'Glass', quantity: 1, location: 'Market', rarity: 'common' },
      { name: 'Wood Frame', quantity: 3, location: 'Forest', rarity: 'common' },
    ],
    unlockCondition: 'Complete basic construction',
    location: 'Any Wall',
    rarity: 'common',
    effects: ['+15 Light', '+5 Fresh Air'],
    author: 'Samwise Gamgee'
  },
  {
    id: 'stone-hearth',
    name: 'Stone Hearth',
    category: 'furniture',
    description: 'A warm stone hearth for cooking and heating your hobbit hole.',
    materials: [
      { name: 'Stone', quantity: 8, location: 'Quarry', rarity: 'common' },
      { name: 'Mortar', quantity: 2, location: 'Market', rarity: 'common' },
      { name: 'Iron Grate', quantity: 1, location: 'Blacksmith', rarity: 'uncommon' },
    ],
    unlockCondition: 'Learn from Old Gaffer',
    location: 'Kitchen',
    rarity: 'uncommon',
    effects: ['+20 Warmth', '+15 Cooking'],
    author: 'Old Gaffer Gamgee'
  },
  {
    id: 'garden-bench',
    name: 'Garden Bench',
    category: 'garden',
    description: 'A peaceful bench for enjoying the garden and watching the sunset.',
    materials: [
      { name: 'Wood', quantity: 6, location: 'Forest', rarity: 'common' },
      { name: 'Iron Nails', quantity: 4, location: 'Blacksmith', rarity: 'common' },
    ],
    unlockCondition: 'Complete garden quest',
    location: 'Garden',
    rarity: 'common',
    effects: ['+10 Relaxation', '+5 Garden View'],
    author: 'Samwise Gamgee'
  },
  {
    id: 'elven-lamp',
    name: 'Elven Lamp',
    category: 'lighting',
    description: 'A beautiful lamp with elven craftsmanship that provides soft, magical light.',
    materials: [
      { name: 'Elven Crystal', quantity: 1, location: 'Rivendell', rarity: 'rare' },
      { name: 'Silver Wire', quantity: 2, location: 'Market', rarity: 'uncommon' },
      { name: 'Glass Shade', quantity: 1, location: 'Market', rarity: 'common' },
    ],
    unlockCondition: 'Complete Elven Quest',
    location: 'Any Room',
    rarity: 'rare',
    effects: ['+25 Light', '+15 Magic', '+10 Beauty'],
    author: 'Galadriel'
  },
  {
    id: 'dwarven-table',
    name: 'Dwarven Table',
    category: 'furniture',
    description: 'A sturdy table crafted with dwarven skill, perfect for meals and gatherings.',
    materials: [
      { name: 'Dwarven Steel', quantity: 3, location: 'Lonely Mountain', rarity: 'rare' },
      { name: 'Oak Wood', quantity: 4, location: 'Forest', rarity: 'common' },
      { name: 'Iron Brackets', quantity: 2, location: 'Blacksmith', rarity: 'common' },
    ],
    unlockCondition: 'Complete Dwarven Quest',
    location: 'Dining Room',
    rarity: 'rare',
    effects: ['+20 Durability', '+15 Gathering'],
    author: 'Gimli'
  },
  {
    id: 'herb-garden',
    name: 'Herb Garden',
    category: 'garden',
    description: 'A small garden for growing herbs and medicinal plants.',
    materials: [
      { name: 'Soil', quantity: 10, location: 'Garden', rarity: 'common' },
      { name: 'Herb Seeds', quantity: 5, location: 'Market', rarity: 'common' },
      { name: 'Watering Can', quantity: 1, location: 'Market', rarity: 'common' },
    ],
    unlockCondition: 'Learn from Samwise',
    location: 'Garden',
    rarity: 'common',
    effects: ['+15 Health', '+10 Cooking'],
    author: 'Samwise Gamgee'
  },
  {
    id: 'fireplace-mantel',
    name: 'Fireplace Mantel',
    category: 'wall',
    description: 'A decorative mantel above the fireplace for displaying treasures and memories.',
    materials: [
      { name: 'Carved Wood', quantity: 4, location: 'Crafting', rarity: 'uncommon' },
      { name: 'Stone Slab', quantity: 1, location: 'Quarry', rarity: 'common' },
    ],
    unlockCondition: 'Complete advanced construction',
    location: 'Living Room',
    rarity: 'uncommon',
    effects: ['+15 Display', '+10 Memories'],
    author: 'Bilbo Baggins'
  },
  {
    id: 'kitchen-shelf',
    name: 'Kitchen Shelf',
    category: 'kitchen',
    description: 'A practical shelf for storing kitchen supplies and ingredients.',
    materials: [
      { name: 'Wood', quantity: 3, location: 'Forest', rarity: 'common' },
      { name: 'Iron Brackets', quantity: 2, location: 'Blacksmith', rarity: 'common' },
    ],
    unlockCondition: 'Learn basic carpentry',
    location: 'Kitchen',
    rarity: 'common',
    effects: ['+10 Storage', '+5 Organization'],
    author: 'Samwise Gamgee'
  },
  {
    id: 'starlight-chandelier',
    name: 'Starlight Chandelier',
    category: 'lighting',
    description: 'A magical chandelier that captures the light of the stars.',
    materials: [
      { name: 'Starlight Crystal', quantity: 3, location: 'Lothlórien', rarity: 'special' },
      { name: 'Silver Chain', quantity: 2, location: 'Market', rarity: 'uncommon' },
      { name: 'Elven Glass', quantity: 5, location: 'Rivendell', rarity: 'rare' },
    ],
    unlockCondition: 'Complete Galadriel Quest',
    location: 'Main Hall',
    rarity: 'special',
    effects: ['+30 Light', '+20 Magic', '+15 Beauty'],
    author: 'Galadriel'
  }
];

export const decorationCategories = [
  { id: 'furniture', name: 'Furniture', icon: '🪑', description: 'Chairs, tables, and other furniture' },
  { id: 'wall', name: 'Wall Decorations', icon: '🖼️', description: 'Windows, paintings, and wall items' },
  { id: 'floor', name: 'Floor Coverings', icon: '毯', description: 'Rugs, carpets, and floor tiles' },
  { id: 'garden', name: 'Garden Items', icon: '🌿', description: 'Plants, benches, and garden decorations' },
  { id: 'lighting', name: 'Lighting', icon: '💡', description: 'Lamps, candles, and light fixtures' },
  { id: 'kitchen', name: 'Kitchen Items', icon: '🍳', description: 'Kitchen furniture and appliances' },
];

export const rarityLevels = [
  { id: 'common', name: 'Common', color: 'green', description: 'Easy to find and craft' },
  { id: 'uncommon', name: 'Uncommon', color: 'blue', description: 'Requires some effort to obtain' },
  { id: 'rare', name: 'Rare', color: 'purple', description: 'Difficult to find and craft' },
  { id: 'special', name: 'Special', color: 'gold', description: 'Unique items with special requirements' },
]; 