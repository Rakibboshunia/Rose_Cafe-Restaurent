import React, { useState } from 'react';
import { Search, Plus, Star } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 'bc',
    name: 'Black Coffee',
    category: 'Coffee & Tea',
    price: 3.50,
    image: '/Cafe Menu/bc.jpg',
    description: 'Rich espresso shot diluted with hot water, offering a smooth and full-bodied traditional flavor.',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'gt',
    name: 'Green Tea',
    category: 'Coffee & Tea',
    price: 3.00,
    image: '/Cafe Menu/gt.jpg',
    description: 'Fresh organic jasmine green tea leaves brewed to aromatic perfection with antioxidant benefits.',
    rating: 4.6,
    reviews: 85
  },
  {
    id: 'b',
    name: 'Gourmet Burger',
    category: 'Food',
    price: 8.50,
    image: '/Cafe Menu/B.jpg',
    description: 'Grilled premium beef patty with cheddar cheese, crisp lettuce, tomato, onions, and signature house sauce.',
    rating: 4.9,
    reviews: 242
  },
  {
    id: 'p',
    name: 'Margherita Pizza',
    category: 'Food',
    price: 12.00,
    image: '/Cafe Menu/p.jpg',
    description: 'Fresh hand-stretched dough topped with organic marinara sauce, mozzarella cheese, and fresh basil leaves.',
    rating: 4.7,
    reviews: 186
  },
  {
    id: 'hd',
    name: 'Classic Hot Dog',
    category: 'Food',
    price: 5.50,
    image: '/Cafe Menu/hd.jpg',
    description: 'Premium grilled chicken sausage in a toasted bun, drizzled with mustard, ketchup, and pickle relish.',
    rating: 4.5,
    reviews: 94
  },
  {
    id: 'ff',
    name: 'French Fries',
    category: 'Food',
    price: 4.00,
    image: '/Cafe Menu/ff.jpg',
    description: 'Crispy golden potato fries tossed in sea salt, fresh garlic oil, and rosemary herbs.',
    rating: 4.6,
    reviews: 153
  },
  {
    id: 'ck',
    name: 'Crispy Fried Chicken',
    category: 'Food',
    price: 9.00,
    image: '/Cafe Menu/ck.jpg',
    description: 'Deep-fried golden, crispy, spiced chicken wings served with hot honey and garlic mayo sauce.',
    rating: 4.8,
    reviews: 218
  },
  {
    id: 'sd',
    name: 'Special Soft Drinks',
    category: 'Drinks',
    price: 2.50,
    image: '/Cafe Menu/sd.jpg',
    description: 'Your choice of chilled sodas, craft lemonade, or iced berry infusions served with fresh lime.',
    rating: 4.4,
    reviews: 72
  }
];

const CATEGORIES = ['All', 'Coffee & Tea', 'Food', 'Drinks'];

export default function Menu({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu">
      <div className="section-header">
        <span className="section-subtitle">Exquisite Taste</span>
        <h2 className="section-title text-gradient">Explore Cafe Menu</h2>
      </div>

      <div className="menu-controls">
        <div className="menu-search">
          <Search className="menu-search-icon" size={20} />
          <input
            type="text"
            placeholder="Search our menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="menu-filters">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="glass-card menu-card">
            <div className="menu-img-container">
              <img src={item.image} alt={item.name} />
              <span className="menu-tag">{item.category}</span>
            </div>

            <div className="menu-details">
              <div className="menu-item-header">
                <h3 className="menu-item-title">{item.name}</h3>
                <span className="menu-item-price">${item.price.toFixed(2)}</span>
              </div>
              <p className="menu-item-desc">{item.description}</p>
              
              <div className="menu-item-footer">
                <div className="menu-rating">
                  <Star size={16} fill="currentColor" />
                  <span>{item.rating} ({item.reviews})</span>
                </div>
                <button 
                  className="add-cart-btn" 
                  onClick={() => onAddToCart(item)}
                  aria-label={`Add ${item.name} to Cart`}
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-muted)' }}>
          No menu items match your search.
        </div>
      )}
    </section>
  );
}
