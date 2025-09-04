import React, { useState } from 'react';
import { Calendar, Users, Gift, Briefcase, Trophy, ShoppingBag, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import ServiceModal from '../components/ServiceModal';

function ServiceCard({ icon, title, description, onClick }: { icon: React.ReactNode; title: string; description: string; onClick: () => void }) {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-[#0076BE] transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="text-[#0076BE] mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#0076BE]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const serviceDetails = {
  corporate: {
    title: "Corporate Events",
    description: "Transform your next corporate event into an engaging team-building experience with our professional pickleball programs.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
    features: [
      "Customized tournament formats for all skill levels",
      "Professional instruction and equipment provided",
      "Flexible scheduling options",
      "Catering packages available",
      "Team building activities and challenges",
      "Post-event networking opportunities"
    ]
  },
  parties: {
    title: "Private Parties",
    description: "Create unforgettable memories with a unique pickleball party experience perfect for any celebration.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
    features: [
      "Birthday celebrations",
      "Family reunions",
      "Bachelor/Bachelorette parties",
      "Corporate team events",
      "Custom event packages",
      "Food and beverage options"
    ]
  },
  // Add other service details here
};

export default function Home() {
  const [selectedService, setSelectedService] = useState<keyof typeof serviceDetails | null>(null);

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[700px] object-cover"
            src="https://images.unsplash.com/photo-1642101373432-a9cd1ed9e6a4?auto=format&fit=crop&q=80"
            alt="Pickleball court"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0076BE]/95 to-[#0076BE]/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8">
          <img src="dist/pbplogo.png" alt="Pickleball Play House" className="w-48 md:w-64 mb-8" />
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your Pickleball Experience
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl">
            Join Denver's premier pickleball destination for corporate events, private training, and unforgettable celebrations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact"
              className="bg-[#B5E61D] text-[#0076BE] font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-90 hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
            >
              Schedule a Session <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/events"
              className="border-2 border-white text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-[#0076BE] hover:scale-105 transition-all shadow-lg"
            >
              View Calendar
            </Link>
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
            onClick={() => setSelectedService('corporate')}
          />
          <ServiceCard
            icon={<Gift className="w-8 h-8" />}
            title="Private Parties"
            description="Birthday celebrations, family gatherings, and special occasions."
            onClick={() => setSelectedService('parties')}
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
      
      {selectedService && (
        <ServiceModal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          {...serviceDetails[selectedService]}
        />
      )}

      {/* Calendar Section */}
      <div id="events" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0076BE]">Upcoming Events</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-center text-gray-600 mb-4">Calendar integration coming soon!</p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeJHBw2irlOJK4W1Dqo14wHuyIJ5FDF--3Vtdkdvt_xIh9Z1g/viewform?embedded=true" width="640" height="2884" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <Link
              to="/events"
              className="mx-auto block bg-[#0076BE] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all text-center"
            >
              View All Events
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Contact Section */}
      <div id="contact" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#0076BE]">Start Your Pickleball Journey</h2>
            <p className="text-gray-600 mb-8">
              Ready to elevate your game? Fill out the form and our team will contact you within 24 hours to discuss your pickleball goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#0076BE]" />
                <div>
                  <p className="font-medium">(303) 555-0123</p>
                  <p className="text-sm text-gray-500">Mon-Fri 7am-9pm</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#0076BE]" />
                <div>
                  <p className="font-medium">info@pickleballplayhouse.com</p>
                  <p className="text-sm text-gray-500">24/7 Email Support</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[#0076BE]" />
                <div>
                  <p className="font-medium">123 Downtown Street</p>
                  <p className="text-sm text-gray-500">Denver, CO 80202</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">I'm Interested In *</label>
                <select
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
                >
                  <option value="">Please select...</option>
                  <option>Private Lessons</option>
                  <option>Group Classes</option>
                  <option>Corporate Events</option>
                  <option>Private Parties</option>
                  <option>Membership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
                  placeholder="Tell us about your pickleball experience and goals..."
                ></textarea>
              </div>
              <div className="text-sm text-gray-500">* Required fields</div>
              <button className="w-full bg-[#0076BE] text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}