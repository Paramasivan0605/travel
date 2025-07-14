import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Beautiful Thailand beach with crystal clear water"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Floating Images */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="Thai temple"
          className="w-32 h-32 rounded-2xl shadow-2xl object-cover animate-pulse"
        />
      </div>
      <div className="absolute bottom-32 right-16 hidden lg:block">
        <img
          src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="Thai longtail boat"
          className="w-40 h-28 rounded-2xl shadow-2xl object-cover animate-bounce"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Amazing
          <span className="block bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
            Thailand
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Experience the Land of Smiles with our exclusive Thailand vacation packages. From pristine beaches to ancient temples, create memories that last forever.
        </p>

        {/* Search Bar */}
        {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
              <MapPin className="h-5 w-5 text-white" />
              <select className="bg-transparent text-black outline-none flex-1">
                <option value="">Select Destination</option>
                <option value="bangkok">Bangkok</option>
                <option value="phuket">Phuket</option>
                <option value="krabi">Krabi</option>
                <option value="chiang-mai">Chiang Mai</option>
                <option value="koh-samui">Koh Samui</option>
                <option value="pattaya">Pattaya</option>
              </select>
            </div>
            <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
              <Calendar className="h-5 w-5 text-white" />
              <input
                type="date"
                className="bg-transparent text-black outline-none flex-1"
              />
            </div>
            <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
              <Users className="h-5 w-5 text-white" />
              <select className="bg-transparent text-black outline-none flex-1">
                <option value="">Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>
            <button className="bg-gradient-to-r from-sky-500 to-orange-500 text-black p-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </div> */}

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">0+</div>
            <div className="text-white/80 text-sm">Thailand Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">0+</div>
            <div className="text-white/80 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">0K+</div>
            <div className="text-white/80 text-sm">Happy Travelers</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;