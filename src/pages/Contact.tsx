import React from 'react';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold text-[#0076BE] mb-8">Get in Touch</h1>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#0076BE] p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0076BE]">Phone</h3>
                    <p>(303) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#0076BE] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0076BE]">Email</h3>
                    <p>info@pickleballplayhouse.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#0076BE] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0076BE]">Location</h3>
                    <p>123 Downtown Street<br />Denver, CO 80202</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#0076BE] p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0076BE]">Hours</h3>
                    <p>Monday - Friday: 7am - 9pm<br />
                       Saturday: 8am - 8pm<br />
                       Sunday: 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#0076BE] mb-6">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg hover:bg-[#B5E61D] hover:text-[#0076BE] transition-all">
                  <Calendar className="w-5 h-5" />
                  <span>Book a Court</span>
                </button>
                <button className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg hover:bg-[#B5E61D] hover:text-[#0076BE] transition-all">
                  <Calendar className="w-5 h-5" />
                  <span>Private Lesson</span>
                </button>
                <button className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg hover:bg-[#B5E61D] hover:text-[#0076BE] transition-all">
                  <Calendar className="w-5 h-5" />
                  <span>Group Class</span>
                </button>
                <button className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg hover:bg-[#B5E61D] hover:text-[#0076BE] transition-all">
                  <Calendar className="w-5 h-5" />
                  <span>Event Inquiry</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-[#0076BE] mb-8">Send Us a Message</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                  <label className="block text-gray-700 font-medium mb-2">How did you hear about us?</label>
                  <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]">
                    <option value="">Please select...</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend/Family</option>
                    <option value="event">Local Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Preferred Contact Time</label>
                  <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]">
                    <option value="">Please select...</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 8pm)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Inquiry Type *</label>
                  <select
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
                  >
                    <option value="">Please select...</option>
                    <option value="general">General Inquiry</option>
                    <option>Corporate Event</option>
                    <option>Private Party</option>
                    <option>Training Program</option>
                    <option>Pro Shop</option>
                    <option>Membership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0076BE]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0076BE] text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}