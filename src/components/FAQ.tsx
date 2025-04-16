import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What equipment do I need to bring?',
    answer: 'For beginners, we provide all necessary equipment including paddles and balls. If you have your own paddle, feel free to bring it. We recommend wearing comfortable athletic clothing and court shoes.',
  },
  {
    question: 'Do you offer private lessons?',
    answer: 'Yes! We offer private lessons for all skill levels. Our certified instructors can help you improve your game whether you\'re just starting or looking to compete at a higher level.',
  },
  {
    question: 'How do I book a corporate event?',
    answer: 'Contact our events team through the booking form or call us directly. We\'ll work with you to create a customized experience for your team, including equipment, instruction, and catering if desired.',
  },
  {
    question: 'What are your membership options?',
    answer: 'We offer flexible membership packages including monthly, quarterly, and annual options. Each membership includes court time, access to clinics, and pro shop discounts.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0076BE] mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-[#0076BE]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#0076BE]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#0076BE]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}