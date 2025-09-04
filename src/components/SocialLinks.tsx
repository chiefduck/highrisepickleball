import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#B5E61D] transition-colors"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#B5E61D] transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#B5E61D] transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </a>
    </div>
  );
}