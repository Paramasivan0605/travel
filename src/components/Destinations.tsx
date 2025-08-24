import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, MapPin, Heart, Eye, Calendar, Users, Sparkles, Camera } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Bangkok',
    region: 'Central Thailand',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 2847,
    price: 'From RM 899',
    originalPrice: 'RM 1,199',
    description: 'Vibrant capital city with golden temples and bustling markets',
    highlights: ['Grand Palace', 'Floating Markets', 'Street Food', 'Shopping'],
    duration: '4 Days',
    bestTime: 'Nov-Feb',
    difficulty: 'Easy',
    category: 'Cultural',
    trending: true
  },
  {
    id: 2,
    name: 'Phuket',
    region: 'Southern Thailand',
    image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 1923,
    price: 'From RM 1,299',
    originalPrice: 'RM 1,599',
    description: 'Tropical paradise with pristine beaches and crystal waters',
    highlights: ['Patong Beach', 'Phi Phi Islands', 'Big Buddha', 'Nightlife'],
    duration: '5 Days',
    bestTime: 'Dec-Mar',
    difficulty: 'Easy',
    category: 'Beach',
    featured: true
  },
  {
    id: 3,
    name: 'Krabi',
    region: 'Southern Thailand',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 3156,
    price: 'From RM 1,199',
    originalPrice: 'RM 1,499',
    description: 'Stunning limestone cliffs and emerald waters',
    highlights: ['Railay Beach', 'Four Islands Tour', 'Rock Climbing', 'Hot Springs'],
    duration: '6 Days',
    bestTime: 'Nov-Apr',
    difficulty: 'Moderate',
    category: 'Adventure',
    popular: true
  },
  {
    id: 4,
    name: 'Chiang Mai',
    region: 'Northern Thailand',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 1674,
    price: 'From RM 799',
    originalPrice: 'RM 999',
    description: 'Cultural heart with ancient temples and mountain views',
    highlights: ['Doi Suthep Temple', 'Night Bazaar', 'Elephant Sanctuary', 'Cooking Classes'],
    duration: '4 Days',
    bestTime: 'Nov-Feb',
    difficulty: 'Easy',
    category: 'Cultural'
  },
  {
    id: 5,
    name: 'Koh Samui',
    region: 'Southern Thailand',
    image: 'https://images.pexels.com/photos/1826406/pexels-photo-1826406.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 2234,
    price: 'From RM 1,399',
    originalPrice: 'RM 1,699',
    description: 'Coconut palm beaches and luxury resorts',
    highlights: ['Chaweng Beach', 'Big Buddha Temple', 'Fisherman\'s Village', 'Spa Treatments'],
    duration: '5 Days',
    bestTime: 'Dec-Apr',
    difficulty: 'Easy',
    category: 'Luxury'
  },
  {
    id: 6,
    name: 'Pattaya',
    region: 'Eastern Thailand',
    image: 'https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 2891,
    price: 'From RM 699',
    originalPrice: 'RM 899',
    description: 'Beach resort city with entertainment and activities',
    highlights: ['Walking Street', 'Coral Island', 'Sanctuary of Truth', 'Water Sports'],
    duration: '3 Days',
    bestTime: 'Nov-Mar',
    difficulty: 'Easy',
    category: 'Entertainment'
  },
    {
    id: 7,
    name: 'Pattaya',
    region: 'Eastern Thailand',
    image: 'https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 2891,
    price: 'From RM 699',
    originalPrice: 'RM 899',
    description: 'Beach resort city with entertainment and activities',
    highlights: ['Walking Street', 'Coral Island', 'Sanctuary'],
    duration: '3 Days',
    bestTime: 'Nov-Mar',
    difficulty: 'Easy',
    category: 'Beach'
  },
   {
    id: 8,
    name: 'Pattaya',
    region: 'Eastern Thailand',
    image: 'https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 2891,
    price: 'From RM 699',
    originalPrice: 'RM 899',
    description: 'Beach resort city with entertainment and activities',
    highlights: ['Walking Street', 'Coral Island', 'Sanctuary'],
    duration: '3 Days',
    bestTime: 'Nov-Mar',
    difficulty: 'Easy',
    category: 'Beach'
  },
   {
    id: 9,
    name: 'Pattaya',
    region: 'Eastern Thailand',
    image: 'https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 2891,
    price: 'From RM 699',
    originalPrice: 'RM 899',
    description: 'Beach resort city with entertainment and activities',
    highlights: ['Walking Street', 'Coral Island', 'Sanctuary'],
    duration: '3 Days',
    bestTime: 'Nov-Mar',
    difficulty: 'Easy',
    category: 'Adventure'
  },
   {
    id: 10,
    name: 'Pattaya',
    region: 'Eastern Thailand',
    image: 'https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 2891,
    price: 'From RM 699',
    originalPrice: 'RM 899',
    description: 'Beach resort city with entertainment and activities',
    highlights: ['Walking Street', 'Coral Island', 'Sanctuary'],
    duration: '3 Days',
    bestTime: 'Nov-Mar',
    difficulty: 'Easy',
    category: 'Luxury'
  },
   {
    id: 11,
    name: 'Pattaya',
    region: 'Eastern Thailand',
    image: 'https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 2891,
    price: 'From RM 699',
    originalPrice: 'RM 899',
    description: 'Beach resort city with entertainment and activities',
    highlights: ['Walking Street', 'Coral Island', 'Sanctuary'],
    duration: '3 Days',
    bestTime: 'Nov-Mar',
    difficulty: 'Easy',
    category: 'Entertainment'
  }

];

const categories = ['All', 'Cultural', 'Beach', 'Adventure', 'Luxury', 'Entertainment'];

const Destinations = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedDestinations, setLikedDestinations] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('destinations');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const filteredDestinations = activeFilter === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  const toggleLike = (id) => {
    const newLiked = new Set(likedDestinations);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedDestinations(newLiked);
  };

  const getBadge = (destination) => {
    if (destination.trending) return { text: 'Trending', color: 'bg-gradient-to-r from-pink-500 to-rose-500', icon: '🔥' };
    if (destination.featured) return { text: 'Featured', color: 'bg-gradient-to-r from-purple-500 to-indigo-500', icon: '⭐' };
    if (destination.popular) return { text: 'Popular', color: 'bg-gradient-to-r from-emerald-500 to-teal-500', icon: '👑' };
    return null;
  };

  return (
    <section id="destinations" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-20">🏝️</div>
      <div className="absolute top-40 right-20 text-3xl animate-float-delayed opacity-20">🏛️</div>
      <div className="absolute bottom-32 left-1/4 text-5xl animate-bounce-slow opacity-20">🌺</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-white/20">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Handpicked Destinations
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6 leading-tight">
            Discover Thailand's
            <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Hidden Gems
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience breathtaking destinations curated by local experts. From ancient temples to pristine beaches, 
            every journey tells a story worth remembering.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-xl border ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-white/10 text-slate-700 dark:text-slate-300 border-white/20 hover:bg-white/20 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
       {/* Destinations Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredDestinations.map((destination, index) => {
    const badge = getBadge(destination);
    const isLiked = likedDestinations.has(destination.id);

    return (
      <div
        key={destination.id}
        className={`group relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setHoveredCard(destination.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-80">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Badge */}
          {badge && (
            <div className={`absolute top-4 left-4 ${badge.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 shadow-lg animate-pulse`}>
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          )}

          {/* Like Button */}
          <button
            onClick={() => toggleLike(destination.id)}
            className={`absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-md border border-white/30 transition-all duration-300 flex items-center justify-center ${
              isLiked 
                ? 'bg-red-500 text-white scale-110' 
                : 'bg-white/10 text-white hover:bg-white/20 hover:scale-110'
            }`}
          >
            <Heart className={`w-5 h-5 transition-all ${isLiked ? 'fill-current' : ''}`} />
          </button>

          {/* Rating & Views */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white font-medium">{destination.rating}</span>
            </div>
            <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
              <Eye className="w-4 h-4 text-white" />
              <span className="text-white text-sm">{destination.reviews}</span>
            </div>
          </div>

          {/* Region */}
          <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{destination.region}</span>
          </div>
        </div>

        {/* ✅ Only show name when All filter */}
        {activeFilter === "All" ? (
          <div className="p-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center">
              {destination.name}
            </h3>
          </div>
        ) : (
          /* Show full details for other categories */
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {destination.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {destination.description}
                </p>
              </div>
            </div>

            {/* Trip Details */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100/50 dark:border-blue-800/30">
              <div className="text-center">
                <Calendar className="w-5 h-5 mx-auto text-blue-500 mb-1" />
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">{destination.duration}</div>
              </div>
              <div className="text-center">
                <Users className="w-5 h-5 mx-auto text-green-500 mb-1" />
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">{destination.difficulty}</div>
              </div>
              <div className="text-center">
                <Camera className="w-5 h-5 mx-auto text-orange-500 mb-1" />
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">{destination.bestTime}</div>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-6">
              {destination.highlights.slice(0, 3).map((highlight, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200/50 dark:border-blue-700/50"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {destination.price}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 line-through">
                  {destination.originalPrice}
                </span>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500 dark:text-slate-400">per person</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group/btn shadow-lg hover:shadow-xl hover:shadow-blue-500/25 ${
              hoveredCard === destination.id ? 'scale-105' : ''
            }`}>
              <span>Explore {destination.name}</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Hover Overlay Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`}></div>
      </div>
    );
  })}
</div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Destinations;