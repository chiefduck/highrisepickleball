import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

export default function ProShop() {
  const products = [
    {
      name: 'Pro Series Paddle',
      price: 129.99,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1642101373432-a9cd1ed9e6a4?auto=format&fit=crop&q=80',
      category: 'Paddles',
    },
    {
      name: 'Performance Grip Tape',
      price: 12.99,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1642101373432-a9cd1ed9e6a4?auto=format&fit=crop&q=80',
      category: 'Accessories',
    },
    {
      name: 'Tournament Balls (3-Pack)',
      price: 9.99,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1642101373432-a9cd1ed9e6a4?auto=format&fit=crop&q=80',
      category: 'Equipment',
    },
    {
      name: 'High Rise Logo Shirt',
      price: 24.99,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1642101373432-a9cd1ed9e6a4?auto=format&fit=crop&q=80',
      category: 'Apparel',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-[#0076BE]">Pro Shop</h1>
          <button className="flex items-center gap-2 bg-[#0076BE] text-white px-4 py-2 rounded-full">
            <ShoppingBag className="w-5 h-5" />
            <span>Cart (0)</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {['All', 'Paddles', 'Balls', 'Accessories', 'Apparel'].map((category) => (
            <button
              key={category}
              className="flex-shrink-0 bg-white px-6 py-2 rounded-full font-medium text-[#0076BE] hover:bg-[#B5E61D] hover:text-[#0076BE] transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-[#B5E61D] text-[#0076BE] px-2 py-1 rounded text-sm font-bold">
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#0076BE] mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold">${product.price}</span>
                  <div className="flex items-center">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>
                <button className="w-full bg-[#0076BE] text-white font-bold py-2 rounded-full hover:bg-opacity-90 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#0076BE] mb-6">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-6">
            Visit our pro shop during business hours for personalized recommendations from our experienced staff.
            We'll help you find the perfect equipment for your playing style.
          </p>
          <button className="bg-[#B5E61D] text-[#0076BE] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}