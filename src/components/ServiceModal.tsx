import React from 'react';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function ServiceModal({ isOpen, onClose, title, description, features, image }: ServiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-opacity-90 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#0076BE] mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="space-y-3">
            <h4 className="font-bold text-[#0076BE]">Features & Benefits:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B5E61D] rounded-full"></span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <button
              onClick={onClose}
              className="w-full bg-[#0076BE] text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}