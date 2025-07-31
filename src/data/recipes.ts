export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'snack' | 'drink';
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: Ingredient[];
  steps: string[];
  cookingTime: string;
  servings: number;
  author: string;
  unlockCondition?: string;
  effects: string[];
  imageUrl?: string;
}

export interface Ingredient {
  name: string;
  quantity: string;
  location?: string;
  rarity?: 'common' | 'uncommon' | 'rare' | 'seasonal' | 'special';
}

export const recipes: Recipe[] = [
  {
    id: 'hobbit-breakfast-pie',
    title: 'Hobbit Breakfast Pie',
    description: 'A hearty pie filled with eggs, bacon, and vegetables, perfect for a hobbit breakfast in Bywater.',
    category: 'breakfast',
    difficulty: 'medium',
    ingredients: [
      { name: 'Flour', quantity: '2 cups', location: 'Mill', rarity: 'common' },
      { name: 'Eggs', quantity: '4', location: 'Chicken Coop', rarity: 'common' },
      { name: 'Bacon', quantity: '1/2 lb', location: 'Butcher Shop', rarity: 'common' },
      { name: 'Onions', quantity: '2', location: 'Garden', rarity: 'common' },
    ],
    steps: [
      'Preheat oven to 375°F',
      'Mix flour and eggs to make pastry',
      'Cook bacon and onions',
      'Fill pie with ingredients',
      'Bake for 30 minutes'
    ],
    cookingTime: '45 min',
    servings: 6,
    author: 'Bilbo Baggins',
    unlockCondition: 'Learn from Bilbo in Bywater',
    effects: ['+25 Energy', '+15 Happiness']
  },
  {
    id: 'second-breakfast-special',
    title: 'Second Breakfast Special',
    description: 'A light meal perfect for second breakfast, featuring fresh bread and preserves from the Shire.',
    category: 'breakfast',
    difficulty: 'easy',
    ingredients: [
      { name: 'Fresh Bread', quantity: '1 loaf', location: 'Bakery', rarity: 'common' },
      { name: 'Strawberry Jam', quantity: '1/2 cup', location: 'Pantry', rarity: 'common' },
      { name: 'Butter', quantity: '2 tbsp', location: 'Dairy Farm', rarity: 'common' },
      { name: 'Honey', quantity: '1 tbsp', location: 'Bee Farm', rarity: 'uncommon' },
    ],
    steps: [
      'Toast fresh bread',
      'Spread with butter',
      'Add strawberry jam',
      'Drizzle with honey',
      'Serve warm'
    ],
    cookingTime: '10 min',
    servings: 4,
    author: 'Samwise Gamgee',
    unlockCondition: 'Complete morning chores in Bywater',
    effects: ['+15 Energy', '+10 Comfort']
  },
  {
    id: 'shire-honey-cake',
    title: 'Shire Honey Cake',
    description: 'A sweet cake made with the finest Shire honey, perfect for celebrations in Bywater.',
    category: 'dessert',
    difficulty: 'medium',
    ingredients: [
      { name: 'Flour', quantity: '2 cups', location: 'Mill', rarity: 'common' },
      { name: 'Honey', quantity: '1 cup', location: 'Bee Farm', rarity: 'uncommon' },
      { name: 'Eggs', quantity: '3', location: 'Chicken Coop', rarity: 'common' },
      { name: 'Butter', quantity: '1/2 cup', location: 'Dairy Farm', rarity: 'common' },
    ],
    steps: [
      'Preheat oven to 350°F',
      'Mix flour and honey',
      'Add eggs and butter',
      'Bake for 25 minutes',
      'Cool and serve'
    ],
    cookingTime: '35 min',
    servings: 8,
    author: 'Rosie Cotton',
    unlockCondition: 'Attend Shire Festival in Bywater',
    effects: ['+20 Sweetness', '+15 Happiness']
  },
  {
    id: 'elven-bread-lembas',
    title: 'Elven Bread (Lembas)',
    description: 'Magical bread that sustains travelers on long journeys through Middle-earth.',
    category: 'lunch',
    difficulty: 'hard',
    ingredients: [
      { name: 'Elven Flour', quantity: '3 cups', location: 'Elven Mill', rarity: 'rare' },
      { name: 'Starlight Water', quantity: '1 cup', location: 'Starlight Spring', rarity: 'rare' },
      { name: 'Moonlight Essence', quantity: '1 drop', location: 'Moonlight Garden', rarity: 'special' },
    ],
    steps: [
      'Mix elven flour with starlight water',
      'Add moonlight essence',
      'Knead for 60 minutes',
      'Bake under moonlight',
      'Wrap in mallorn leaves'
    ],
    cookingTime: '2 hours',
    servings: 12,
    author: 'Galadriel',
    unlockCondition: 'Complete Elven Quest in Bywater',
    effects: ['+50 Energy', '+30 Endurance', 'Sustains for days']
  },
  {
    id: 'mushroom-stew',
    title: 'Mushroom Stew',
    description: 'A hearty stew made with wild mushrooms from the Shire forests around Bywater.',
    category: 'dinner',
    difficulty: 'easy',
    ingredients: [
      { name: 'Wild Mushrooms', quantity: '2 cups', location: 'Forest', rarity: 'common' },
      { name: 'Onions', quantity: '2', location: 'Garden', rarity: 'common' },
      { name: 'Carrots', quantity: '3', location: 'Garden', rarity: 'common' },
      { name: 'Beef Broth', quantity: '4 cups', location: 'Butcher Shop', rarity: 'common' },
    ],
    steps: [
      'Chop mushrooms and vegetables',
      'Sauté onions',
      'Add mushrooms and carrots',
      'Pour in beef broth',
      'Simmer for 30 minutes'
    ],
    cookingTime: '45 min',
    servings: 6,
    author: 'Frodo Baggins',
    unlockCondition: 'Forage in forest near Bywater',
    effects: ['+25 Comfort', '+15 Health']
  },
  {
    id: 'apple-crumble',
    title: 'Apple Crumble',
    description: 'A warm dessert with sweet apples and crunchy topping.',
    category: 'dessert',
    difficulty: 'easy',
    ingredients: [
      { name: 'Apples', quantity: '6', location: 'Orchard', rarity: 'common' },
      { name: 'Flour', quantity: '1 cup', location: 'Mill', rarity: 'common' },
      { name: 'Butter', quantity: '1/2 cup', location: 'Dairy Farm', rarity: 'common' },
      { name: 'Sugar', quantity: '1/2 cup', location: 'Market', rarity: 'common' },
    ],
    steps: [
      'Preheat oven to 375°F',
      'Slice and arrange apples',
      'Mix flour, butter, and sugar',
      'Sprinkle crumble over apples',
      'Bake for 30 minutes'
    ],
    cookingTime: '40 min',
    servings: 6,
    author: 'Merry Brandybuck',
    unlockCondition: 'Harvest apples',
    effects: ['+20 Sweetness', '+15 Comfort']
  },
  {
    id: 'beef-ale-pie',
    title: 'Beef and Ale Pie',
    description: 'A traditional pie filled with tender beef and rich ale gravy.',
    category: 'dinner',
    difficulty: 'medium',
    ingredients: [
      { name: 'Beef', quantity: '1 lb', location: 'Butcher Shop', rarity: 'common' },
      { name: 'Ale', quantity: '1 cup', location: 'Prancing Pony', rarity: 'common' },
      { name: 'Onions', quantity: '2', location: 'Garden', rarity: 'common' },
      { name: 'Flour', quantity: '1 cup', location: 'Mill', rarity: 'common' },
    ],
    steps: [
      'Brown beef with onions',
      'Add ale and simmer',
      'Make pastry dough',
      'Fill pie with beef mixture',
      'Bake for 40 minutes'
    ],
    cookingTime: '1 hour',
    servings: 8,
    author: 'Barliman Butterbur',
    unlockCondition: 'Visit Bree',
    effects: ['+30 Comfort', '+20 Energy']
  },
  {
    id: 'herb-tea',
    title: 'Shire Herb Tea',
    description: 'A soothing tea made with herbs from the Shire gardens.',
    category: 'drink',
    difficulty: 'easy',
    ingredients: [
      { name: 'Fresh Herbs', quantity: '1 cup', location: 'Garden', rarity: 'common' },
      { name: 'Hot Water', quantity: '4 cups', location: 'Well', rarity: 'common' },
      { name: 'Honey', quantity: '1 tbsp', location: 'Bee Farm', rarity: 'uncommon' },
    ],
    steps: [
      'Boil water',
      'Add fresh herbs',
      'Steep for 5 minutes',
      'Add honey',
      'Serve hot'
    ],
    cookingTime: '10 min',
    servings: 4,
    author: 'Samwise Gamgee',
    unlockCondition: 'Grow herbs',
    effects: ['+15 Health', '+10 Relaxation']
  },
  {
    id: 'seed-cake',
    title: 'Seed Cake',
    description: 'A traditional hobbit cake made with various seeds and nuts.',
    category: 'dessert',
    difficulty: 'medium',
    ingredients: [
      { name: 'Flour', quantity: '2 cups', location: 'Mill', rarity: 'common' },
      { name: 'Mixed Seeds', quantity: '1/2 cup', location: 'Market', rarity: 'common' },
      { name: 'Honey', quantity: '1/2 cup', location: 'Bee Farm', rarity: 'uncommon' },
      { name: 'Eggs', quantity: '2', location: 'Chicken Coop', rarity: 'common' },
    ],
    steps: [
      'Preheat oven to 350°F',
      'Mix flour and seeds',
      'Add honey and eggs',
      'Bake for 25 minutes',
      'Cool and slice'
    ],
    cookingTime: '35 min',
    servings: 8,
    author: 'Bilbo Baggins',
    unlockCondition: 'Learn traditional recipes',
    effects: ['+20 Energy', '+15 Tradition']
  },
  {
    id: 'fish-and-chips',
    title: 'Fish and Chips',
    description: 'Crispy fried fish with golden chips, a favorite in the Shire.',
    category: 'dinner',
    difficulty: 'medium',
    ingredients: [
      { name: 'Fresh Fish', quantity: '1 lb', location: 'River', rarity: 'common' },
      { name: 'Potatoes', quantity: '4', location: 'Garden', rarity: 'common' },
      { name: 'Flour', quantity: '1 cup', location: 'Mill', rarity: 'common' },
      { name: 'Oil', quantity: '2 cups', location: 'Market', rarity: 'common' },
    ],
    steps: [
      'Cut potatoes into chips',
      'Fry chips until golden',
      'Coat fish in flour',
      'Fry fish until crispy',
      'Serve with salt'
    ],
    cookingTime: '30 min',
    servings: 4,
    author: 'Gaffer Gamgee',
    unlockCondition: 'Catch fish',
    effects: ['+25 Energy', '+20 Satisfaction']
  },
  {
    id: 'dwarven-meat-stew',
    title: 'Dwarven Meat Stew',
    description: 'A hearty stew with chunks of meat and root vegetables, cooked slowly in a dwarven cauldron.',
    category: 'dinner',
    difficulty: 'hard',
    ingredients: [
      { name: 'Dwarven Meat', quantity: '2 lbs', location: 'Dwarven Mines', rarity: 'rare' },
      { name: 'Root Vegetables', quantity: '3 cups', location: 'Underground Garden', rarity: 'uncommon' },
      { name: 'Dwarven Ale', quantity: '2 cups', location: 'Dwarven Brewery', rarity: 'rare' },
      { name: 'Mountain Herbs', quantity: '1/2 cup', location: 'Mountain Slopes', rarity: 'uncommon' },
    ],
    steps: [
      'Brown dwarven meat',
      'Add root vegetables',
      'Pour in dwarven ale',
      'Add mountain herbs',
      'Simmer for 3 hours'
    ],
    cookingTime: '3.5 hours',
    servings: 8,
    author: 'Thorin Oakenshield',
    unlockCondition: 'Complete Dwarven Quest',
    effects: ['+40 Strength', '+30 Endurance']
  },
  {
    id: 'elvish-fruit-salad',
    title: 'Elvish Fruit Salad',
    description: 'A delicate salad made with exotic fruits from elvish gardens.',
    category: 'dessert',
    difficulty: 'easy',
    ingredients: [
      { name: 'Elvish Fruits', quantity: '3 cups', location: 'Elvish Garden', rarity: 'rare' },
      { name: 'Starlight Syrup', quantity: '2 tbsp', location: 'Starlight Spring', rarity: 'special' },
      { name: 'Moonlight Essence', quantity: '1 drop', location: 'Moonlight Garden', rarity: 'special' },
    ],
    steps: [
      'Wash elvish fruits',
      'Cut into bite-sized pieces',
      'Drizzle with starlight syrup',
      'Add moonlight essence',
      'Serve chilled'
    ],
    cookingTime: '15 min',
    servings: 6,
    author: 'Arwen',
    unlockCondition: 'Attend an elvish celebration',
    effects: ['+30 Sweetness', '+20 Elegance', 'Elvish delicacy']
  },
  {
    id: 'spring-festival-cake',
    title: 'Spring Festival Cake',
    description: 'A colorful cake decorated with fresh spring flowers.',
    category: 'dessert',
    difficulty: 'hard',
    ingredients: [
      { name: 'Spring Flowers', quantity: '1 cup', location: 'Spring Garden', rarity: 'seasonal' },
      { name: 'Flour', quantity: '2 cups', location: 'Mill', rarity: 'common' },
      { name: 'Fresh Eggs', quantity: '3', location: 'Chicken Coop', rarity: 'common' },
    ],
    steps: [
      'Preheat oven to 350°F',
      'Mix flour and eggs',
      'Decorate with spring flowers',
      'Bake for 30 minutes',
      'Cool and serve'
    ],
    cookingTime: '45 min',
    servings: 8,
    author: 'Galadriel',
    unlockCondition: 'Attend Spring Festival',
    effects: ['+30 Happiness', '+20 Spring Spirit']
  },
  {
    id: 'autumn-harvest-stew',
    title: 'Autumn Harvest Stew',
    description: 'A hearty stew made with autumn vegetables and fruits.',
    category: 'dinner',
    difficulty: 'medium',
    ingredients: [
      { name: 'Autumn Vegetables', quantity: '4 cups', location: 'Harvest Garden', rarity: 'seasonal' },
      { name: 'Autumn Fruits', quantity: '2 cups', location: 'Orchard', rarity: 'seasonal' },
      { name: 'Beef Broth', quantity: '6 cups', location: 'Butcher Shop', rarity: 'common' },
    ],
    steps: [
      'Chop autumn vegetables',
      'Add to beef broth',
      'Simmer for 1 hour',
      'Add autumn fruits',
      'Serve hot'
    ],
    cookingTime: '1.5 hours',
    servings: 8,
    author: 'Samwise Gamgee',
    unlockCondition: 'Complete Harvest Festival',
    effects: ['+35 Comfort', '+25 Autumn Joy']
  },
  {
    id: 'winter-warm-punch',
    title: 'Winter Warm Punch',
    description: 'A warming drink perfect for cold winter nights.',
    category: 'drink',
    difficulty: 'easy',
    ingredients: [
      { name: 'Winter Spices', quantity: '2 tbsp', location: 'Winter Market', rarity: 'seasonal' },
      { name: 'Hot Water', quantity: '4 cups', location: 'Well', rarity: 'common' },
      { name: 'Honey', quantity: '1/2 cup', location: 'Bee Farm', rarity: 'uncommon' },
    ],
    steps: [
      'Boil water with spices',
      'Add honey',
      'Steep for 10 minutes',
      'Serve hot',
      'Perfect for winter'
    ],
    cookingTime: '15 min',
    servings: 6,
    author: 'Bilbo Baggins',
    unlockCondition: 'Winter Festival',
    effects: ['+25 Warmth', '+20 Comfort']
  },
  {
    id: 'community-feast-platter',
    title: 'Community Feast Platter',
    description: 'A grand feast for the entire community.',
    category: 'dinner',
    difficulty: 'hard',
    ingredients: [
      { name: 'Community Meat', quantity: '5 lbs', location: 'Community Butcher', rarity: 'special' },
      { name: 'Community Vegetables', quantity: '8 cups', location: 'Community Garden', rarity: 'special' },
      { name: 'Community Bread', quantity: '5 loaves', location: 'Community Bakery', rarity: 'special' },
    ],
    steps: [
      'Prepare all community ingredients',
      'Cook meat and vegetables',
      'Arrange on grand platter',
      'Serve to community',
      'Share with everyone'
    ],
    cookingTime: '4 hours',
    servings: 20,
    author: 'Community',
    unlockCondition: 'Host Community Event',
    effects: ['+50 Community', '+40 Happiness']
  },
  {
    id: 'ranger-trail-mix',
    title: 'Ranger Trail Mix',
    description: 'A hearty mix perfect for long journeys.',
    category: 'snack',
    difficulty: 'easy',
    ingredients: [
      { name: 'Wild Nuts', quantity: '2 cups', location: 'Forest Floor', rarity: 'common' },
      { name: 'Dried Berries', quantity: '1 cup', location: 'Wild Bushes', rarity: 'common' },
      { name: 'Preserved Meat', quantity: '1 lb', location: 'Ranger Camp', rarity: 'uncommon' },
    ],
    steps: [
      'Gather wild nuts',
      'Collect dried berries',
      'Cut preserved meat',
      'Mix all ingredients',
      'Store for journey'
    ],
    cookingTime: '20 min',
    servings: 8,
    author: 'Aragorn',
    unlockCondition: 'Join Rangers',
    effects: ['+25 Energy', '+15 Endurance']
  },
  {
    id: 'dwarven-gold-bread',
    title: 'Dwarven Gold Bread',
    description: 'A bread made with precious dwarven gold flour.',
    category: 'lunch',
    difficulty: 'hard',
    ingredients: [
      { name: 'Gold Flour', quantity: '3 cups', location: 'Dwarven Mines', rarity: 'special' },
      { name: 'Mountain Water', quantity: '2 cups', location: 'Mountain Springs', rarity: 'uncommon' },
      { name: 'Gold Salt', quantity: '1 tbsp', location: 'Dwarven Mines', rarity: 'special' },
    ],
    steps: [
      'Mix gold flour with water',
      'Add gold salt',
      'Knead for 60 minutes',
      'Bake at maximum heat',
      'Cool for 48 hours'
    ],
    cookingTime: '50 hours',
    servings: 4,
    author: 'Thorin Oakenshield',
    unlockCondition: 'Complete Gold Quest',
    effects: ['+100 Energy', '+50 Wealth']
  },
  {
    id: 'elvish-starlight-tea',
    title: 'Elvish Starlight Tea',
    description: 'A tea brewed under starlight with rare ingredients.',
    category: 'drink',
    difficulty: 'hard',
    ingredients: [
      { name: 'Starlight Essence', quantity: '1 drop', location: 'Starlight Garden', rarity: 'special' },
      { name: 'Moonlight Water', quantity: '4 cups', location: 'Moonlight Spring', rarity: 'special' },
      { name: 'Starlight Herbs', quantity: '1 cup', location: 'Starlight Garden', rarity: 'special' },
    ],
    steps: [
      'Collect starlight essence',
      'Boil moonlight water',
      'Add starlight herbs',
      'Steep under stars',
      'Serve in starlight cups'
    ],
    cookingTime: '30 min',
    servings: 2,
    author: 'Galadriel',
    unlockCondition: 'Starlight Quest',
    effects: ['+50 Wisdom', '+40 Clarity']
  },
  {
    id: 'hobbit-birthday-cake',
    title: 'Hobbit Birthday Cake',
    description: 'A special cake for hobbit birthdays.',
    category: 'dessert',
    difficulty: 'medium',
    ingredients: [
      { name: 'Birthday Flour', quantity: '2 cups', location: 'Birthday Mill', rarity: 'special' },
      { name: 'Birthday Sugar', quantity: '1 cup', location: 'Birthday Market', rarity: 'special' },
      { name: 'Birthday Eggs', quantity: '3', location: 'Birthday Coop', rarity: 'special' },
    ],
    steps: [
      'Mix birthday ingredients',
      'Bake in birthday pan',
      'Decorate with candles',
      'Sing birthday song',
      'Share with friends'
    ],
    cookingTime: '60 min',
    servings: 10,
    author: 'Birthday Hobbit',
    unlockCondition: 'Hobbit Birthday',
    effects: ['+40 Happiness', '+30 Celebration']
  },
  {
    id: 'wizard-fire-whisky',
    title: 'Wizard Fire Whisky',
    description: 'A powerful drink that burns like dragon fire.',
    category: 'drink',
    difficulty: 'hard',
    ingredients: [
      { name: 'Dragon Fire', quantity: '1 drop', location: 'Dragon Cave', rarity: 'special' },
      { name: 'Wizard Water', quantity: '2 cups', location: 'Wizard Spring', rarity: 'special' },
      { name: 'Fire Herbs', quantity: '1 tbsp', location: 'Fire Garden', rarity: 'special' },
    ],
    steps: [
      'Collect dragon fire',
      'Mix with wizard water',
      'Add fire herbs',
      'Brew for 7 days',
      'Serve with caution'
    ],
    cookingTime: '7 days',
    servings: 1,
    author: 'Gandalf',
    unlockCondition: 'Wizard Quest',
    effects: ['+100 Power', '+50 Fire Resistance']
  },
  {
    id: 'ent-draught',
    title: 'Ent Draught',
    description: 'A drink that makes you grow tall like an Ent.',
    category: 'drink',
    difficulty: 'hard',
    ingredients: [
      { name: 'Ent Sap', quantity: '1 cup', location: 'Fangorn Forest', rarity: 'special' },
      { name: 'Tree Water', quantity: '3 cups', location: 'Ancient Trees', rarity: 'special' },
      { name: 'Growth Herbs', quantity: '2 tbsp', location: 'Ent Garden', rarity: 'special' },
    ],
    steps: [
      'Collect ent sap',
      'Mix with tree water',
      'Add growth herbs',
      'Let ferment for 30 days',
      'Drink slowly'
    ],
    cookingTime: '30 days',
    servings: 1,
    author: 'Treebeard',
    unlockCondition: 'Ent Quest',
    effects: ['+200 Height', '+100 Growth']
  },
  {
    id: 'orc-gruel',
    title: 'Orc Gruel',
    description: 'A thick, hearty gruel favored by orcs.',
    category: 'dinner',
    difficulty: 'easy',
    ingredients: [
      { name: 'Orc Meat', quantity: '2 lbs', location: 'Orc Camp', rarity: 'uncommon' },
      { name: 'Orc Grains', quantity: '3 cups', location: 'Orc Mill', rarity: 'uncommon' },
      { name: 'Orc Water', quantity: '4 cups', location: 'Orc Well', rarity: 'uncommon' },
    ],
    steps: [
      'Boil orc water',
      'Add orc grains',
      'Add orc meat',
      'Stir until thick',
      'Serve hot'
    ],
    cookingTime: '2 hours',
    servings: 6,
    author: 'Orc Chef',
    unlockCondition: 'Orc Alliance',
    effects: ['+30 Strength', '+20 Orc Power']
  },
  {
    id: 'troll-stew',
    title: 'Troll Stew',
    description: 'A massive stew that could feed a troll.',
    category: 'dinner',
    difficulty: 'hard',
    ingredients: [
      { name: 'Troll Meat', quantity: '10 lbs', location: 'Troll Cave', rarity: 'rare' },
      { name: 'Troll Vegetables', quantity: '15 cups', location: 'Troll Garden', rarity: 'rare' },
      { name: 'Troll Broth', quantity: '20 cups', location: 'Troll Cauldron', rarity: 'rare' },
    ],
    steps: [
      'Build massive fire',
      'Fill troll cauldron',
      'Add all ingredients',
      'Cook for 12 hours',
      'Serve to trolls'
    ],
    cookingTime: '12 hours',
    servings: 50,
    author: 'Troll Chef',
    unlockCondition: 'Troll Quest',
    effects: ['+100 Strength', '+50 Size']
  },
  {
    id: 'final-masterpiece',
    title: 'Final Masterpiece',
    description: 'The ultimate recipe that combines all the best elements.',
    category: 'dinner',
    difficulty: 'hard',
    ingredients: [
      { name: 'Master Meat', quantity: '3 lbs', location: 'Master Butcher', rarity: 'special' },
      { name: 'Master Vegetables', quantity: '5 cups', location: 'Master Garden', rarity: 'special' },
      { name: 'Master Spices', quantity: '1 cup', location: 'Master Market', rarity: 'special' },
    ],
    steps: [
      'Prepare master ingredients',
      'Cook with master technique',
      'Season with master spices',
      'Present with master flair',
      'Serve to master guests'
    ],
    cookingTime: '5 hours',
    servings: 12,
    author: 'Master Chef',
    unlockCondition: 'Complete All Quests',
    effects: ['+100 Mastery', '+50 Perfection']
  }
];

export const recipeCategories = [
  { id: 'breakfast', name: 'Breakfast', icon: '🌅' },
  { id: 'lunch', name: 'Lunch', icon: '🌞' },
  { id: 'dinner', name: 'Dinner', icon: '🌙' },
  { id: 'dessert', name: 'Dessert', icon: '🍰' },
  { id: 'snack', name: 'Snack', icon: '🥨' },
  { id: 'drink', name: 'Drink', icon: '☕' },
];

export const difficultyLevels = [
  { id: 'easy', name: 'Easy', color: 'green' },
  { id: 'medium', name: 'Medium', color: 'yellow' },
  { id: 'hard', name: 'Hard', color: 'red' },
]; 