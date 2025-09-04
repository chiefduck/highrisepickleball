import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Corporate Event Organizer',
    content: 'High Rise Pickleball hosted our company team building event. The staff was professional and made sure everyone had a great time, regardless of skill level.',
    rating: 5,
  },
  {
    name: 'John D.',
    role: 'Beginner Player',
    content: 'The instructors here are amazing! I went from complete beginner to confident player in just a few weeks. The facility is top-notch.',
    rating: 5,
  },
  {
    name: 'Lisa R.',
    role: 'Tournament Player',
    content: 'Best pickleball venue in Denver! The courts are perfect, and the pro shop has everything you need. Great community of players.',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0076BE] mb-4">What Our Players Say</h2>
          <p className="text-gray-600">Don't just take our word for it - hear from our community!</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg relative">
              <Quote className="w-8 h-8 text-[#B5E61D] absolute -top-4 -left-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-bold text-[#0076BE]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}