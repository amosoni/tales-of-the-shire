import Link from 'next/link';
import SEOMeta from '@/components/common/seo-meta';
import { BookOpen, Users, Palette, Search, TrendingUp, Star } from 'lucide-react';

// Sample data
const featuredRecipes = [
  {
    id: '1',
    title: 'Hobbit Breakfast Pie',
    description: 'A classic Hobbit breakfast featuring fresh vegetables and rich cheese, perfect for starting a beautiful day.',
    category: 'breakfast',
    difficulty: 'easy',
    ingredients: 3,
    steps: 3,
  },
  {
    id: '2',
    title: 'Shire Honey Cake',
    description: 'Made with honey special to the Shire region, sweet and delicious, one of the Hobbits\' favorite desserts.',
    category: 'dessert',
    difficulty: 'medium',
    ingredients: 3,
    steps: 3,
  },
  {
    id: '3',
    title: 'Elven Bread',
    description: 'Legendary Elven bread, nutritious and rich, essential food for long journeys.',
    category: 'lunch',
    difficulty: 'hard',
    ingredients: 3,
    steps: 3,
  },
];

const features = [
  {
    icon: BookOpen,
    title: 'Complete Recipe Library',
    description: 'All in-game recipes with detailed crafting steps and effect descriptions',
  },
  {
    icon: Users,
    title: 'NPC Guide',
    description: 'Detailed NPC information including preferred gifts and dialogue choices',
  },
  {
    icon: Palette,
    title: 'Decoration Inspiration',
    description: 'Hobbit hole decoration designs to make your home more warm and beautiful',
  },
  {
    icon: Star,
    title: 'Quest Guide',
    description: 'Complete quest walkthroughs to help you unlock all game content',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracker',
    description: 'Track your game progress and view achievements and statistics',
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Quickly find the guide information you need with multiple filter options',
  },
];

        const stats = [
          { label: 'Recipes', value: '25', icon: BookOpen },
          { label: 'NPC Characters', value: '22', icon: Users },
          { label: 'Decoration Designs', value: '10', icon: Palette },
          { label: 'Quests', value: '12', icon: Star },
        ];

export default function HomePage() {
  return (
    <>
      <SEOMeta
        title="Welcome to the Shire - Your Complete Hobbit Life Guide"
        description="Begin your journey in The Lord of the Rings: Tales of the Shire. Discover authentic hobbit recipes, meet beloved characters, and create the perfect hobbit hole. Your complete companion for Middle-earth life."
        keywords="Tales of the Shire, Lord of the Rings, hobbit recipes, Shire characters, hobbit hole decoration, Middle-earth guide"
        url="/"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-16">
          <h1 className="hero-title">Welcome Home, Hobbit!</h1>
          <p className="hero-subtitle">Live the cosy life in the wonderfully serene landscape of the Shire</p>
          <p className="hero-description">
            Discover, decorate, and share in this idyllic corner of Middle-earth. Join friendly Hobbits and familiar faces awaiting your arrival in Tales of the Shire: A The Lord of the Rings™ Game.
          </p>
          
          <div className="cta-buttons">
            <Link href="/recipes" className="btn btn-primary" title="Explore authentic hobbit recipes and cooking guides">
              Explore Recipes
            </Link>
            <Link href="/npcs" className="btn btn-outline" title="Meet beloved characters from the Shire">
              Meet the Characters
            </Link>
            <Link href="/decorations" className="btn btn-outline" title="Create the perfect hobbit hole decoration">
              Decorate Your Home
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container mx-auto px-4 py-16">
          <h2 className="features-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Welcome Home, Hobbit</h3>
              <p>Play as a Hobbit, directly out of J.R.R Tolkien&apos;s beloved books! Personalise your appearance and decorate your own Hobbit home with grid-free placement.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Food Is Love</h3>
              <p>No Hobbit&apos;s day is complete without food. Fish, garden, and forage to stock up the pantry. Show off your culinary chops with recipes for mealtimes.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Explore Bywater</h3>
              <p>Explore the outdoors to discover secret glades and lost treasures of the Shire. Meet iconic characters and familiar Hobbit families.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container mx-auto px-4">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">🍃</div>
              <div className="stat-value">25</div>
              <div className="stat-label">Recipes</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">👥</div>
              <div className="stat-value">22</div>
              <div className="stat-label">Characters</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">🏡</div>
              <div className="stat-value">10</div>
              <div className="stat-label">Decorations</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-value">12</div>
              <div className="stat-label">Quests</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container mx-auto px-4">
          <h2 className="cta-title">Unwind in the place where what matters most are all the little things</h2>
          <p className="cta-description">
            Help bring the community together to achieve village status in Bywater. Experience delight in Tales of the Shire: A The Lord of the Rings™ Game.
          </p>
          <div className="cta-buttons">
            <Link href="/recipes" className="btn btn-white" title="Start your hobbit cooking journey">
              Start Cooking
            </Link>
            <Link href="/npcs" className="btn btn-outline" title="Discover characters from Middle-earth">
              Meet Characters
            </Link>
            <Link href="/decorations" className="btn btn-outline">
              Decorate Home
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
