import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1642101373432-a9cd1ed9e6a4?auto=format&fit=crop&q=80',
    alt: 'Indoor pickleball courts',
    title: 'State-of-the-art Courts'
  },
  {
    url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
    alt: 'Training session',
    title: 'Professional Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
    alt: 'Pro shop',
    title: 'Fully Stocked Pro Shop'
  },
  {
    url: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&q=80',
    alt: 'Event space',
    title: 'Event Space'
  }
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0076BE] mb-8">Our Facility</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer group"
              onClick={() => {
                setCurrentImage(index);
                setIsModalOpen(true);
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg" />
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={previousImage}
              className="absolute left-4 text-white p-2"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 text-white p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="max-w-4xl mx-auto px-4">
              <img
                src={images[currentImage].url}
                alt={images[currentImage].alt}
                className="max-h-[80vh] w-auto"
              />
              <p className="text-white text-center mt-4 text-xl">
                {images[currentImage].title}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}