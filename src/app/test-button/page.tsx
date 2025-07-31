import Link from 'next/link';

export default function TestButtonPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Button Test Page</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Test Recipe Card</h2>
        <p className="text-gray-600 mb-4">This is a test recipe description.</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            4 ingredients • 7 steps
          </div>
          <Link 
            href="/recipes/hobbit-breakfast-pie"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium shadow-md hover:shadow-lg no-underline"
            style={{display: 'inline-block', backgroundColor: '#22c55e', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none'}}
          >
            View Recipe →
          </Link>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Simple Button Test</h2>
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
          Test Button
        </button>
      </div>
    </div>
  );
} 