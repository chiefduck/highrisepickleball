import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function Events() {
  // This would typically come from an API or CMS
  const events = [
    {
      id: '1',
      date: '2024-03-25',
      title: 'Beginner\'s Workshop',
      time: '10:00 AM - 12:00 PM',
      description: 'Learn the basics of pickleball in a fun, supportive environment.',
      spots: 8,
      category: 'workshop'
    },
    {
      date: '2024-03-27',
      title: 'Wednesday Night Mixed Doubles',
      time: '6:00 PM - 9:00 PM',
      description: 'Weekly mixed doubles round-robin tournament.',
      spots: 16,
    },
    {
      date: '2024-03-30',
      title: 'Weekend Warriors Tournament',
      time: '9:00 AM - 5:00 PM',
      description: 'Competitive tournament for intermediate and advanced players.',
      spots: 32,
    },
    {
      date: '2024-04-01',
      title: 'Youth Spring Break Camp',
      time: '9:00 AM - 12:00 PM',
      description: 'Five-day camp for kids ages 8-14.',
      spots: 12,
    },
  ];


  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'tournament', name: 'Tournaments' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'social', name: 'Social Events' },
    { id: 'league', name: 'Leagues' }
  ];

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0076BE] mb-4">Upcoming Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for exciting tournaments, workshops, and social events. Register early to secure your spot!
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#0076BE] text-white'
                    : 'bg-white text-[#0076BE] hover:bg-[#B5E61D]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {filteredEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="md:flex items-center justify-between">
                <div className="md:flex items-center gap-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-[#0076BE] rounded-lg flex flex-col items-center justify-center text-white">
                      <Calendar className="w-8 h-8 mb-1" />
                      <div className="text-sm font-semibold">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0076BE] mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <div className="text-sm text-gray-500">
                      <span className="mr-4">🕒 {event.time}</span>
                      <span>👥 {event.spots} spots available</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="bg-[#B5E61D] text-[#0076BE] font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#0076BE] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
            View Full Calendar
          </button>
        </div>
      </div>
    </div>
  );
}