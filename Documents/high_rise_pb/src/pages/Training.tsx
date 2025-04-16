import React from 'react';
import { Trophy, Users, Target, Zap } from 'lucide-react';

export default function Training() {
  const trainers = [
    {
      name: 'Sarah Johnson',
      title: 'Head Coach',
      specialties: ['Tournament Strategy', 'Advanced Techniques'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    {
      name: 'Mike Chen',
      title: 'Senior Instructor',
      specialties: ['Beginner Fundamentals', 'Youth Development'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0076BE] mb-12">Training Programs</h1>

        {/* Training Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Trophy className="w-8 h-8 text-[#0076BE]" />
              <h2 className="text-2xl font-bold text-[#0076BE] ml-4">Private Lessons</h2>
            </div>
            <p className="text-gray-600 mb-6">
              One-on-one instruction tailored to your skill level and goals. Perfect for rapid improvement and personalized attention.
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-center">
                <Target className="w-5 h-5 text-[#B5E61D] mr-3" />
                Personalized skill assessment
              </li>
              <li className="flex items-center">
                <Target className="w-5 h-5 text-[#B5E61D] mr-3" />
                Video analysis
              </li>
              <li className="flex items-center">
                <Target className="w-5 h-5 text-[#B5E61D] mr-3" />
                Customized training plan
              </li>
            </ul>
            <button className="w-full bg-[#0076BE] text-white font-bold py-3 rounded-full hover:bg-opacity-90 transition-all">
              Book Private Lesson
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-[#0076BE]" />
              <h2 className="text-2xl font-bold text-[#0076BE] ml-4">Group Clinics</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Learn and improve in a social setting with players at your skill level. Great for developing game strategy and match play.
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-[#B5E61D] mr-3" />
                Skill-based grouping
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-[#B5E61D] mr-3" />
                Strategy workshops
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-[#B5E61D] mr-3" />
                Drills and game play
              </li>
            </ul>
            <button className="w-full bg-[#0076BE] text-white font-bold py-3 rounded-full hover:bg-opacity-90 transition-all">
              Join Group Clinic
            </button>
          </div>
        </div>

        {/* Meet Our Trainers */}
        <h2 className="text-3xl font-bold text-[#0076BE] mb-8">Meet Our Trainers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={trainer.image}
                    alt={trainer.name}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#0076BE]">{trainer.name}</h3>
                  <p className="text-gray-600 font-medium mb-4">{trainer.title}</p>
                  <h4 className="text-sm font-bold text-gray-500 mb-2">Specialties:</h4>
                  <ul className="space-y-1">
                    {trainer.specialties.map((specialty, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">• {specialty}</li>
                    ))}
                  </ul>
                  <button className="mt-6 bg-[#B5E61D] text-[#0076BE] font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
                    Book with {trainer.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}