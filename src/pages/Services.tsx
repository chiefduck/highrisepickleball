import React from 'react';
import { Briefcase, Gift, Trophy, Users } from 'lucide-react';

export default function Services() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0076BE] mb-8">Our Services</h1>
        
        {/* Corporate Events */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
                  alt="Corporate event"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <Briefcase className="h-6 w-6 text-[#0076BE]" />
                  <h2 className="ml-3 text-2xl font-bold text-[#0076BE]">Corporate Events</h2>
                </div>
                <p className="mt-4 text-gray-600">
                  Transform your next corporate event into an engaging team-building experience. Our corporate packages include:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Customized tournament formats</li>
                  <li>• Professional instruction</li>
                  <li>• Catering options available</li>
                  <li>• Equipment provided</li>
                  <li>• Flexible scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Private Parties */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
                  alt="Private party"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <Gift className="h-6 w-6 text-[#0076BE]" />
                  <h2 className="ml-3 text-2xl font-bold text-[#0076BE]">Private Parties</h2>
                </div>
                <p className="mt-4 text-gray-600">
                  Celebrate your special occasion with a unique pickleball party. Perfect for:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Birthday parties</li>
                  <li>• Family reunions</li>
                  <li>• Bachelor/Bachelorette parties</li>
                  <li>• Social gatherings</li>
                  <li>• Custom event packages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&q=80"
                  alt="Training session"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <Trophy className="h-6 w-6 text-[#0076BE]" />
                  <h2 className="ml-3 text-2xl font-bold text-[#0076BE]">Training Programs</h2>
                </div>
                <p className="mt-4 text-gray-600">
                  Elevate your game with our comprehensive training programs:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Private lessons</li>
                  <li>• Group clinics</li>
                  <li>• Beginner workshops</li>
                  <li>• Advanced strategy sessions</li>
                  <li>• Video analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Group Activities */}
        <div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
                  alt="Group activity"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-[#0076BE]" />
                  <h2 className="ml-3 text-2xl font-bold text-[#0076BE]">Group Activities</h2>
                </div>
                <p className="mt-4 text-gray-600">
                  Join our vibrant pickleball community through various group activities:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Weekly mixers</li>
                  <li>• Round-robin tournaments</li>
                  <li>• Skill-level matches</li>
                  <li>• Social leagues</li>
                  <li>• Community events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}