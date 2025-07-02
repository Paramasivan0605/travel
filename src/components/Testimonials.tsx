import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Lim',
    location: 'Kuala Lumpur, Malaysia',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Apple Vacations made our Thailand honeymoon absolutely magical! The Phuket package was perfectly planned - from the stunning beachfront resort to the incredible Phi Phi Islands tour. Every detail was taken care of.',
    trip: 'Phuket Island Paradise Package',
    tripImage: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Ahmad Rahman',
    location: 'Johor Bahru, Malaysia',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'The Bangkok & Pattaya Explorer package exceeded our expectations! The Grand Palace tour was breathtaking, and the floating market experience was authentic. Our guide was incredibly knowledgeable about Thai culture.',
    trip: 'Bangkok & Pattaya Explorer',
    tripImage: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Michelle Tan',
    location: 'Penang, Malaysia',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'The Northern Thailand Cultural tour was life-changing! Visiting the elephant sanctuary and hill tribe villages gave us such deep insights into Thai culture. The Doi Suthep temple at sunset was unforgettable.',
    trip: 'Northern Thailand Cultural',
    tripImage: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    name: 'David Wong',
    location: 'Ipoh, Malaysia',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Amazing Krabi experience! The limestone cliffs and emerald waters were exactly like the photos. The Four Islands tour was spectacular, and our hotel had the perfect beachfront location.',
    trip: 'Krabi Adventure Package',
    tripImage: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    name: 'Priya Sharma',
    location: 'Selangor, Malaysia',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Koh Samui was paradise! The coconut palm beaches, luxury spa treatments, and the Big Buddha temple visit made this trip perfect. Apple Vacations\' attention to detail was impressive.',
    trip: 'Koh Samui Luxury Escape',
    tripImage: 'https://images.pexels.com/photos/1826406/pexels-photo-1826406.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    name: 'Robert Lee',
    location: 'Melaka, Malaysia',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'First time to Thailand and it was incredible! The variety of experiences - from street food tours in Bangkok to snorkeling in crystal clear waters - made this trip unforgettable. Highly recommend!',
    trip: 'Thailand Discovery Tour',
    tripImage: 'https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-50 to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-sky-200/30 to-transparent rounded-full -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-200/30 to-transparent rounded-full translate-y-48 translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Thailand Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from Malaysian travelers who discovered the magic of Thailand with Apple Vacations. Their stories inspire our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 relative group"
            >
              <Quote className="h-8 w-8 text-sky-500 mb-4" />
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Trip Image */}
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img
                  src={testimonial.tripImage}
                  alt={testimonial.trip}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  {testimonial.trip}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin className="h-3 w-3" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">25,000+</div>
              <div className="text-gray-600">Happy Thailand Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">99%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">0+</div>
              <div className="text-gray-600">Years of Thailand Expertise</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Own Thailand Story?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have experienced the magic of Thailand with Apple Vacations. 
            Your adventure awaits!
          </p>
          <button className="bg-gradient-to-r from-sky-500 to-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all">
            Start Planning Your Thailand Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;