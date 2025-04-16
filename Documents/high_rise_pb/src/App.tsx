import React from 'react';
import { Calendar, Users, Gift, Briefcase, Trophy, ShoppingBag, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#0076BE] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="High Rise Pickleball" className="h-12" />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#services" className="hover:text-[#B5E61D] transition-colors">Services</a>
                <a href="#events" className="hover:text-[#B5E61D] transition-colors">Events</a>
                <a href="#training" className="hover:text-[#B5E61D] transition-colors">Training</a>
                <a href="#pro-shop" className="hover:text-[#B5E61D] transition-colors">Pro Shop</a>
                <a href="#contact" className="hover:text-[#B5E61D] transition-colors">Contact</a>
                <button className="bg-[#B5E61D] text-[#0076BE] font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1642101373432-a9cd1ed9e6a4?auto=format&fit=crop&q=80"
            alt="Pickleball court"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0076BE]/90 to-[#0076BE]/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Elevate Your Pickleball Experience
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Join Denver's premier pickleball destination for corporate events, private training, and unforgettable celebrations.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#B5E61D] text-[#0076BE] font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all flex items-center gap-2">
              Schedule a Session <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-[#0076BE] transition-all">
              View Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0076BE]">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Briefcase className="w-8 h-8" />}
            title="Corporate Events"
            description="Team building and corporate tournaments designed for companies of all sizes."
          />
          <ServiceCard
            icon={<Gift className="w-8 h-8" />}
            title="Private Parties"
            description="Birthday celebrations, family gatherings, and special occasions."
          />
          <ServiceCard
            icon={<Trophy className="w-8 h-8" />}
            title="Private Training"
            description="One-on-one instruction with certified pickleball professionals."
          />
          <ServiceCard
            icon={<Users className="w-8 h-8" />}
            title="Group Lessons"
            description="Learn the fundamentals in a fun, social environment."
          />
          <ServiceCard
            icon={<Calendar className="w-8 h-8" />}
            title="Regular Events"
            description="Weekly mixers, tournaments, and social gatherings."
          />
          <ServiceCard
            icon={<ShoppingBag className="w-8 h-8" />}
            title="Pro Shop"
            description="Premium equipment, apparel, and accessories."
          />
        </div>
      </div>

      {/* Calendar Section */}
      <div id="events" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0076BE]">Upcoming Events</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-center text-gray-600 mb-4">Calendar integration coming soon!</p>
            <button className="mx-auto block bg-[#0076BE] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
              View All Events
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#0076BE]">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our services or want to book an event? Contact us today!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#0076BE]" />
                <span>(303) 555-0123</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#0076BE]" />
                <span>info@highrisepickleball.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[#0076BE]" />
                <span>123 Downtown Street, Denver, CO 80202</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
              ></textarea>
              <button className="w-full bg-[#0076BE] text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0076BE] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/logo.png" alt="High Rise Pickleball" className="h-12 mb-4" />
              <p className="text-white/80">
                Denver's premier destination for pickleball enthusiasts of all skill levels.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-[#B5E61D] transition-colors">Services</a></li>
                <li><a href="#events" className="hover:text-[#B5E61D] transition-colors">Events</a></li>
                <li><a href="#training" className="hover:text-[#B5E61D] transition-colors">Training</a></li>
                <li><a href="#pro-shop" className="hover:text-[#B5E61D] transition-colors">Pro Shop</a></li>
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

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-[#0076BE] transition-all">
      <div className="text-[#0076BE] mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#0076BE]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;