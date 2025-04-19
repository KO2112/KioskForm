'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const OurProductsSection = () => {
  const products = [
    {
      id: 'small-kiosk',
      title: 'Small Modular Kiosk',
      dimensions: '143×143 cm',
      description: 'Brand new, strong and durable booth perfect for tickets, security, or coffee units.',
      image: '/kiosk2.jpg', // Replace with your actual image path
      specs: 'Dimensions: 1.43m × 1.43m × 2.10m (H), Weight: 350 kg approx.'
    },
    {
      id: 'large-kiosk',
      title: 'Large Modular Kiosk',
      dimensions: '218×143 cm',
      description: 'Spacious durable kiosk for gatehouses, offices, or catering units.',
      image: '/kiosk.jpg', // Replace with your actual image path
      specs: 'Dimensions: 2.18m × 1.43m × 2.10m (H), Weight: 400 kg approx.'
    }
  ];

  return (
    <section id="our-products" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Kiosk Products
        </h3>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              {/* Product Image */}
              <div 
                className="h-96 sm:h-128 w-full relative bg-blue-100"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{product.dimensions}</p>
                <p className="text-gray-700 mb-3">{product.description}</p>
                <p className="text-sm text-gray-600 mb-4">{product.specs}</p>
                
                <Link 
                  href={`/products/${product.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Call to Action */}
        <div className="mt-8 text-center">
          <Link 
            href="/ContactUs"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Request Quote
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;