import React from 'react';
import { Send, Gift, Bell, MapPin } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 to-orange-600 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <img
          src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Thailand background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=150"
          alt="Thai temple"
          className="w-20 h-20 rounded-full shadow-lg animate-bounce"
        />
      </div>
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <img
          src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=150"
          alt="Thai boat"
          className="w-24 h-16 rounded-lg shadow-lg animate-pulse"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Stay Connected with Thailand
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Subscribe to our Thailand newsletter and get exclusive deals, insider travel tips, 
          and the latest updates on amazing Thai destinations delivered to your inbox.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Gift className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Exclusive Thailand Deals</h3>
            <p className="text-white/80 text-sm">Get first access to special Thailand package discounts and flash sales</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <MapPin className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Insider Travel Tips</h3>
            <p className="text-white/80 text-sm">Discover hidden gems and local secrets from our Thailand experts</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Bell className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Latest Updates</h3>
            <p className="text-white/80 text-sm">Stay informed about new Thailand destinations and travel requirements</p>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email for Thailand updates"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-white/25"
              />
              <button className="bg-white text-sky-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap">
                <Send className="h-5 w-5" />
                <span>Subscribe</span>
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join 15,000+ Thailand travel enthusiasts. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-white">15,000+</div>
            <div className="text-white/80 text-sm">Newsletter Subscribers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-white/80 text-sm">Thailand Destinations</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Weekly</div>
            <div className="text-white/80 text-sm">Travel Tips</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Exclusive</div>
            <div className="text-white/80 text-sm">Member Deals</div>
          </div>
        </div>

        {/* Sample Newsletter Content */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">What You'll Get in Our Newsletter:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <ul className="space-y-2 text-white/90 text-sm">
              <li>• Monthly Thailand destination spotlights</li>
              <li>• Seasonal travel recommendations</li>
              <li>• Thai festival and event calendars</li>
              <li>• Budget travel tips for Thailand</li>
            </ul>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>• Exclusive package previews</li>
              <li>• Local food and culture guides</li>
              <li>• Photography tips for Thailand</li>
              <li>• Travel safety updates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;