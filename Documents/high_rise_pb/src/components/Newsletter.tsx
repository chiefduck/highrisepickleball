import React from 'react';
import { Mail } from 'lucide-react';
import LoadingButton from './LoadingButton';

export default function Newsletter() {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // GHL integration will go here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="bg-[#0076BE] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="w-12 h-12 text-[#B5E61D] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest events, tournaments, and special offers.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#B5E61D]"
                required
              />
              <LoadingButton
                type="submit"
                isLoading={isLoading}
                className="bg-[#B5E61D] text-[#0076BE] font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}