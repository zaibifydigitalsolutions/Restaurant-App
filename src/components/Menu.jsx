import React, { useState } from 'react';
import { Plus, Star, Clock, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';

const menuData = {
  categories: [
    { id: 'appetizers', name: 'Appetizers', description: 'Start your meal right' },
    { id: 'mains', name: 'Main Courses', description: 'Hearty and satisfying' },
    { id: 'desserts', name: 'Desserts', description: 'Sweet endings' },
    { id: 'beverages', name: 'Beverages', description: 'Refreshing drinks' },
  ],
  items: [
    {
      id: 1,
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce, parmesan cheese, croutons, caesar dressing',
      price: 8.99,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1550304943-4f24f14ddabb?w=300',
      rating: 4.5,
      prepTime: '10 mins',
      popular: true
    },
    {
      id: 2,
      name: 'Garlic Bread',
      description: 'Toasted bread with garlic butter and herbs',
      price: 4.99,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1571091718766-0aebee5db6ea?w=300',
      rating: 4.3,
      prepTime: '5 mins'
    },
    {
      id: 3,
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with lemon butter sauce, served with vegetables',
      price: 18.99,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1467003909345-32a6520636e8?w=300',
      rating: 4.8,
      prepTime: '20 mins',
      popular: true
    },
    {
      id: 4,
      name: 'Ribeye Steak',
      description: '12oz ribeye steak cooked to perfection, served with mashed potatoes',
      price: 24.99,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1546833998-b8472a2e5b7e?w=300',
      rating: 4.7,
      prepTime: '25 mins'
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      description: 'Decadent chocolate cake with rich frosting',
      price: 6.99,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1578985545062-699283b02919?w=300',
      rating: 4.6,
      prepTime: '5 mins',
      popular: true
    },
    {
      id: 6,
      name: 'Ice Cream Sundae',
      description: 'Vanilla ice cream with chocolate sauce, nuts, and cherry',
      price: 5.99,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300',
      rating: 4.4,
      prepTime: '5 mins'
    },
    {
      id: 7,
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice',
      price: 3.99,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300',
      rating: 4.2,
      prepTime: '2 mins'
    },
    {
      id: 8,
      name: 'Cappuccino',
      description: 'Rich espresso with steamed milk foam',
      price: 4.49,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1572442388796-11651a0466e4?w=300',
      rating: 4.5,
      prepTime: '5 mins'
    }
  ]
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPopularOnly, setShowPopularOnly] = useState(false);
  const { addToCart } = useCart();

  const filteredItems = menuData.items.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const popularMatch = !showPopularOnly || item.popular;
    return categoryMatch && popularMatch;
  });

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="container py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Menu
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our carefully crafted dishes made with the finest ingredients
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-64">
          <div className="card sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Categories</h3>
              <Filter className="w-4 h-4 text-gray-500" />
            </div>
            
            <div className="space-y-2 mb-6">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-purple-100 text-purple-700 font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                All Items
              </button>
              {menuData.categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-100 text-purple-700 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="font-medium">{category.name}</div>
                  <div className="text-xs text-gray-500">{category.description}</div>
                </button>
              ))}
            </div>

            <div className="border-t pt-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPopularOnly}
                  onChange={(e) => setShowPopularOnly(e.target.checked)}
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">Popular items only</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="card group hover:scale-105 transition-transform duration-300">
                <div className="relative mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {item.popular && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-lg font-bold text-purple-600">${item.price}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.prepTime}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full btn btn-primary group-hover:shadow-lg transition-all duration-300"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No items found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
