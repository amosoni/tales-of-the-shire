export interface NPC {
  id: string;
  name: string;
  location: string;
  personality: string;
  description: string;
  favoriteGifts: string[];
  quests: string[];
  relationship: string;
}

export const npcs = [
  {
    id: 'bilbo-baggins',
    name: 'Bilbo Baggins',
    location: 'Bag End, Hobbiton',
    personality: 'Adventurous and wise',
    description: 'The famous hobbit who went on an adventure with thirteen dwarves. He loves stories and good food.',
    favoriteGifts: ['Books', 'Tea', 'Pipe-weed'],
    quests: ['The Unexpected Party', 'There and Back Again'],
    relationship: 'Friend'
  },
  {
    id: 'samwise-gamgee',
    name: 'Samwise Gamgee',
    location: 'Number 3, Bagshot Row',
    personality: 'Loyal and practical',
    description: 'Frodo\'s loyal gardener and friend. He has a green thumb and loves growing things.',
    favoriteGifts: ['Seeds', 'Potatoes', 'Honey'],
    quests: ['Gardening Help', 'The Road Goes Ever On'],
    relationship: 'Good Friend'
  },
  {
    id: 'frodo-baggins',
    name: 'Frodo Baggins',
    location: 'Bag End, Hobbiton',
    personality: 'Brave and determined',
    description: 'The Ring-bearer who carried the One Ring to Mount Doom. He seeks peace and quiet now.',
    favoriteGifts: ['Elvish books', 'Starlight', 'Peace'],
    quests: ['The Fellowship', 'The Return of the King'],
    relationship: 'Friend'
  },
  {
    id: 'merry-brandybuck',
    name: 'Merry Brandybuck',
    location: 'Brandy Hall, Buckland',
    personality: 'Cheerful and mischievous',
    description: 'A merry hobbit who loves parties and adventures. He\'s always up for a good time.',
    favoriteGifts: ['Ale', 'Jokes', 'Adventure stories'],
    quests: ['The Conspiracy', 'The Scouring of the Shire'],
    relationship: 'Friend'
  },
  {
    id: 'pippin-took',
    name: 'Pippin Took',
    location: 'Great Smials, Tuckborough',
    personality: 'Curious and brave',
    description: 'The youngest of the four hobbits. He\'s curious about everything and loves to eat.',
    favoriteGifts: ['Food', 'Music', 'Stories'],
    quests: ['The Quest', 'The Tower Guard'],
    relationship: 'Good Friend'
  },
  {
    id: 'rosie-cotton',
    name: 'Rosie Cotton',
    location: 'Cotton Farm, Bywater',
    personality: 'Kind and hardworking',
    description: 'A beautiful hobbit lass who works on her family\'s farm. She\'s kind to everyone.',
    favoriteGifts: ['Flowers', 'Ribbons', 'Sweet treats'],
    quests: ['The Harvest', 'The Wedding'],
    relationship: 'Courting'
  },
  {
    id: 'gandalf',
    name: 'Gandalf the Grey',
    location: 'Various locations',
    personality: 'Wise and mysterious',
    description: 'The wandering wizard who brings adventure and wisdom to the Shire.',
    favoriteGifts: ['Pipe-weed', 'Fireworks', 'Stories'],
    quests: ['The Unexpected Journey', 'The White Council'],
    relationship: 'Respectful'
  },
  {
    id: 'elrond',
    name: 'Elrond',
    location: 'Rivendell',
    personality: 'Ancient and wise',
    description: 'The Lord of Rivendell, keeper of ancient wisdom and lore.',
    favoriteGifts: ['Elvish artifacts', 'Ancient books', 'Starlight'],
    quests: ['The Council of Elrond', 'The Last Homely House'],
    relationship: 'Respectful'
  },
  {
    id: 'galadriel',
    name: 'Galadriel',
    location: 'Lothlórien',
    personality: 'Mysterious and powerful',
    description: 'The Lady of the Golden Wood, bearer of Nenya.',
    favoriteGifts: ['Mirrors', 'Starlight', 'Elvish poetry'],
    quests: ['The Mirror of Galadriel', 'The Gift of Light'],
    relationship: 'Respectful'
  },
  {
    id: 'aragorn',
    name: 'Aragorn',
    location: 'Various locations',
    personality: 'Noble and determined',
    description: 'The heir of Isildur, ranger of the North.',
    favoriteGifts: ['Elvish blades', 'Maps', 'Herbs'],
    quests: ['The Paths of the Dead', 'The Return of the King'],
    relationship: 'Friend'
  },
  {
    id: 'legolas',
    name: 'Legolas',
    location: 'Mirkwood',
    personality: 'Elven grace and skill',
    description: 'Prince of the Woodland Realm, master archer.',
    favoriteGifts: ['Elvish arrows', 'Forest herbs', 'Starlight'],
    quests: ['The Path of the Elves', 'The Battle of Helm\'s Deep'],
    relationship: 'Friend'
  },
  {
    id: 'gimli',
    name: 'Gimli',
    location: 'Lonely Mountain',
    personality: 'Proud and loyal',
    description: 'Son of Glóin, dwarf warrior and craftsman.',
    favoriteGifts: ['Dwarven crafts', 'Precious stones', 'Ale'],
    quests: ['The Mines of Moria', 'The Battle of Helm\'s Deep'],
    relationship: 'Friend'
  },
  // 新增Bywater地区的NPC
  {
    id: 'farmer-cotton',
    name: 'Farmer Cotton',
    location: 'Cotton Farm, Bywater',
    personality: 'Hardworking and generous',
    description: 'Rosie\'s father and the owner of the largest farm in Bywater. He\'s always willing to help neighbors.',
    favoriteGifts: ['Fresh vegetables', 'Good ale', 'Farming tools'],
    quests: ['The Harvest Festival', 'Community Building'],
    relationship: 'Acquaintance'
  },
  {
    id: 'old-gaffer',
    name: 'Old Gaffer Gamgee',
    location: 'Number 3, Bagshot Row',
    personality: 'Wise and traditional',
    description: 'Sam\'s father and a respected elder in Hobbiton. He knows all the old stories and traditions.',
    favoriteGifts: ['Pipe-weed', 'Old books', 'Stories'],
    quests: ['Tales of Old', 'Preserving Traditions'],
    relationship: 'Respectful'
  },
  {
    id: 'butterbur',
    name: 'Barliman Butterbur',
    location: 'The Prancing Pony, Bree',
    personality: 'Friendly and busy',
    description: 'The innkeeper of the Prancing Pony. He\'s always busy but never too busy for a good story.',
    favoriteGifts: ['Good ale', 'News from afar', 'Stories'],
    quests: ['The Prancing Pony', 'News from Bree'],
    relationship: 'Acquaintance'
  },
  {
    id: 'tom-bombadil',
    name: 'Tom Bombadil',
    location: 'Old Forest',
    personality: 'Mysterious and ancient',
    description: 'The oldest being in Middle-earth. He lives in the Old Forest with his wife Goldberry.',
    favoriteGifts: ['Yellow flowers', 'Old songs', 'Starlight'],
    quests: ['The Old Forest', 'The Barrow-downs'],
    relationship: 'Respectful'
  },
  {
    id: 'goldberry',
    name: 'Goldberry',
    location: 'Old Forest',
    personality: 'Beautiful and ethereal',
    description: 'Tom Bombadil\'s wife, the River-daughter. She brings spring and renewal.',
    favoriteGifts: ['Water lilies', 'Silver jewelry', 'Spring flowers'],
    quests: ['The River-daughter', 'Spring Renewal'],
    relationship: 'Respectful'
  },
  {
    id: 'hamfast-gamgee',
    name: 'Hamfast Gamgee',
    location: 'Number 3, Bagshot Row',
    personality: 'Practical and loyal',
    description: 'Sam\'s brother and a skilled gardener. He helps maintain the gardens of Bag End.',
    favoriteGifts: ['Seeds', 'Garden tools', 'Fresh vegetables'],
    quests: ['Garden Maintenance', 'Planting Season'],
    relationship: 'Friend'
  },
  {
    id: 'lobelia-sackville-baggins',
    name: 'Lobelia Sackville-Baggins',
    location: 'Bag End, Hobbiton',
    personality: 'Ambitious and determined',
    description: 'A hobbit who covets Bag End. She\'s not well-liked but has her own charm.',
    favoriteGifts: ['Silver spoons', 'Fine china', 'Gossip'],
    quests: ['The Sackville-Baggins', 'Property Disputes'],
    relationship: 'Acquaintance'
  },
  {
    id: 'farmer-maggot',
    name: 'Farmer Maggot',
    location: 'Bamfurlong Farm',
    personality: 'Fierce and protective',
    description: 'A farmer known for his fierce dogs and his protection of his land and family.',
    favoriteGifts: ['Mushrooms', 'Good food', 'Respect'],
    quests: ['The Mushroom Hunt', 'Protecting the Farm'],
    relationship: 'Acquaintance'
  },
  {
    id: 'gaffer-gamgee',
    name: 'Gaffer Gamgee',
    location: 'Number 3, Bagshot Row',
    personality: 'Traditional and proud',
    description: 'Sam\'s grandfather and a respected elder. He represents the old ways of the Shire.',
    favoriteGifts: ['Pipe-weed', 'Old stories', 'Respect'],
    quests: ['Tales of the Past', 'Preserving the Shire'],
    relationship: 'Respectful'
  },
  {
    id: 'holman-greenhand',
    name: 'Holman Greenhand',
    location: 'Hobbiton',
    personality: 'Skilled and helpful',
    description: 'The gardener of Bag End before Sam. He taught Sam everything about gardening.',
    favoriteGifts: ['Garden tools', 'Seeds', 'Good soil'],
    quests: ['Teaching the Trade', 'Garden Secrets'],
    relationship: 'Friend'
  }
];

export const npcLocations = [
  { id: 'hobbiton', name: 'Hobbiton', description: 'The heart of the Shire' },
  { id: 'buckland', name: 'Buckland', description: 'East of the Brandywine' },
  { id: 'tuckborough', name: 'Tuckborough', description: 'Home of the Tooks' },
  { id: 'bywater', name: 'Bywater', description: 'A peaceful village' },
  { id: 'bree', name: 'Bree', description: 'The Prancing Pony inn' },
  { id: 'old-forest', name: 'Old Forest', description: 'Home of Tom Bombadil' },
  { id: 'bamfurlong', name: 'Bamfurlong Farm', description: 'Farmer Maggot\'s farm' },
];

export const relationshipLevels = [
  { id: 'stranger', name: 'Stranger', color: 'gray' },
  { id: 'acquaintance', name: 'Acquaintance', color: 'blue' },
  { id: 'friend', name: 'Friend', color: 'green' },
  { id: 'good-friend', name: 'Good Friend', color: 'yellow' },
  { id: 'best-friend', name: 'Best Friend', color: 'orange' },
  { id: 'courting', name: 'Courting', color: 'pink' },
]; 