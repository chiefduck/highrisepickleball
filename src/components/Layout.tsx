import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#0076BE] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <span className="text-xl font-bold text-white hover:text-[#B5E61D] transition-colors">High Rise Pickleball</span>
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link to="/services" className="hover:text-[#B5E61D] transition-colors">Services</Link>
                <Link to="/events" className="hover:text-[#B5E61D] transition-colors">Events</Link>
                <Link to="/training" className="hover:text-[#B5E61D] transition-colors">Training</Link>
                <Link to="/pro-shop" className="hover:text-[#B5E61D] transition-colors">Pro Shop</Link>
                <Link to="/contact" className="hover:text-[#B5E61D] transition-colors">Contact</Link>
                <Link
                  to="/contact"
                  className="bg-[#B5E61D] text-[#0076BE] font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/services" className="text-white hover:text-[#B5E61D] transition-colors">Services</Link>
                <Link to="/events" className="text-white hover:text-[#B5E61D] transition-colors">Events</Link>
                <Link to="/training" className="text-white hover:text-[#B5E61D] transition-colors">Training</Link>
                <Link to="/pro-shop" className="text-white hover:text-[#B5E61D] transition-colors">Pro Shop</Link>
                <Link to="/contact" className="text-white hover:text-[#B5E61D] transition-colors">Contact</Link>
                <Link
                  to="/contact"
                  className="bg-[#B5E61D] text-[#0076BE] font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all inline-block text-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Outlet />

      {/* Footer */}
      <footer className="bg-[#0076BE] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link to="/">
                <img src="/logo.png" alt="High Rise Pickleball" className="h-16 mb-6" />
              </Link>
              <p className="text-white/80">
                Denver's premier destination for pickleball enthusiasts of all skill levels.
              </p>
              <div className="mt-6">
                <SocialLinks />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="hover:text-[#B5E61D] transition-colors">Services</Link></li>
                <li><Link to="/events" className="hover:text-[#B5E61D] transition-colors">Events</Link></li>
                <li><Link to="/training" className="hover:text-[#B5E61D] transition-colors">Training</Link></li>
                <li><Link to="/pro-shop" className="hover:text-[#B5E61D] transition-colors">Pro Shop</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Friday: 7am - 9pm</li>
                <li>Saturday: 8am - 8pm</li>
                <li>Sunday: 9am - 6pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; 2024 High Rise Pickleball Event Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}