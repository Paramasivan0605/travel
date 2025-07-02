import React from 'react';
import { Check, Clock, Users, Star, Camera, Utensils } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: 'Bangkok & Pattaya Explorer',
    duration: '5 Days, 4 Nights',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    galleryImages: [
      'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=300'
    ],
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    maxGuests: 4,
    features: [
      'Grand Palace & Wat Pho Temple tours',
      'Floating market experience',
      'Pattaya beach resort stay',
      'Coral Island day trip',
      'Traditional Thai massage',
      'Airport transfers included'
    ],
    meals: 'Breakfast + 2 Dinners',
    popular: true
  },
  {
    id: 2,
    name: 'Phuket Island Paradise',
    duration: '6 Days, 5 Nights',
    image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800',
    galleryImages: [
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1826406/pexels-photo-1826406.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=300'
    ],
    price: 2199,
    originalPrice: 2499,
    rating: 4.9,
    maxGuests: 6,
    features: [
      'Phi Phi Islands speedboat tour',
      'James Bond Island excursion',
      'Beachfront resort accommodation',
      'Patong Beach nightlife tour',
      'Thai cooking class',
      'Snorkeling equipment included'
    ],
    meals: 'All Breakfasts + 3 Dinners',
    popular: false
  },
  {
    id: 3,
    name: 'Northern Thailand Cultural',
    duration: '7 Days, 6 Nights',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    galleryImages: [
      'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=300',
      'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=300'
    ],
    price: 1899,
    originalPrice: 2199,
    rating: 4.7,
    maxGuests: 8,
    features: [
      'Doi Suthep Temple visit',
      'Elephant sanctuary experience',
      'Hill tribe village tour',
      'Chiang Mai night bazaar',
      'Traditional Lanna dinner show',
      'Professional local guide'
    ],
    meals: 'All Breakfasts + 4 Dinners',
    popular: false
  }
];

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-sky-100 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-100 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thailand Vacation Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted packages that showcase the best of Thailand. From cultural experiences to beach relaxation, find your perfect Thai adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-sky-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-sky-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Image Gallery Preview */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {pkg.galleryImages.slice(0, 3).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-12 h-12 rounded-lg object-cover border-2 border-white/50"
                    />
                  ))}
                  <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center text-white text-xs font-medium">
                    <Camera className="h-4 w-4" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium">{pkg.duration}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Up to {pkg.maxGuests}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Utensils className="h-4 w-4" />
                    <span>{pkg.meals}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-sky-600">RM {pkg.price}</span>
                    <span className="text-lg text-gray-400 line-through">RM {pkg.originalPrice}</span>
                  </div>
                  <span className="text-sm text-gray-500">per person (twin sharing)</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-sky-500 to-orange-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all">
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="mt-20 bg-gradient-to-r from-sky-500 to-orange-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Special Thailand Offers</h3>
              <p className="text-white/90 mb-6">
                Book your Thailand vacation now and enjoy exclusive benefits including free upgrades, 
                complimentary meals, and special cultural experiences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>Free room upgrade (subject to availability)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>Complimentary Thai cooking class</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>Traditional Thai massage session</span>
                </li>
              </ul>
              <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View All Offers
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Thai temple"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Thai beach"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Thai food"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/1826406/pexels-photo-1826406.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Thai culture"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;