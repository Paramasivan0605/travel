import { Star, ArrowRight, MapPin } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Bangkok',
    region: 'Central Thailand',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 2847,
    price: 'From RM 899',
    description: 'Vibrant capital city with golden temples and bustling markets',
    highlights: ['Grand Palace', 'Floating Markets', 'Street Food', 'Shopping']
  },
  {
    id: 2,
    name: 'Phuket',
    region: 'Southern Thailand',
    image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 1923,
    price: 'From RM 1,299',
    description: 'Tropical paradise with pristine beaches and crystal waters',
    highlights: ['Patong Beach', 'Phi Phi Islands', 'Big Buddha', 'Nightlife']
  },
  {
    id: 3,
    name: 'Krabi',
    region: 'Southern Thailand',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 3156,
    price: 'From RM 1,199',
    description: 'Stunning limestone cliffs and emerald waters',
    highlights: ['Railay Beach', 'Four Islands Tour', 'Rock Climbing', 'Hot Springs']
  },
  {
    id: 4,
    name: 'Chiang Mai',
    region: 'Northern Thailand',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 1674,
    price: 'From RM 799',
    description: 'Cultural heart with ancient temples and mountain views',
    highlights: ['Doi Suthep Temple', 'Night Bazaar', 'Elephant Sanctuary', 'Cooking Classes']
  },
  {
    id: 5,
    name: 'Koh Samui',
    region: 'Southern Thailand',
    image: 'https://images.pexels.com/photos/1826406/pexels-photo-1826406.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 2234,
    price: 'From RM 1,399',
    description: 'Coconut palm beaches and luxury resorts',
    highlights: ['Chaweng Beach', 'Big Buddha Temple', 'Fisherman\'s Village', 'Spa Treatments']
  },
  {
    id: 6,
    name: 'Pattaya',
    region: 'Eastern Thailand',
    image: 'https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 2891,
    price: 'From RM 699',
    description: 'Beach resort city with entertainment and activities',
    highlights: ['Walking Street', 'Coral Island', 'Sanctuary of Truth', 'Water Sports']
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Thai pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Thailand's Best Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From bustling cities to pristine islands, discover the diverse beauty and rich culture that makes Thailand truly special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-1 mb-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{destination.region}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 3).map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-sky-50 text-sky-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{destination.reviews} reviews</span>
                  <span className="text-lg font-bold text-sky-600">{destination.price}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-sky-500 to-orange-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2 group">
                  <span>Explore {destination.name}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>     
      </div>
    </section>
  );
};

export default Destinations;