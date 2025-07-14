import React, { useState } from 'react';
import { Award, Users, MapPin, Heart, Plane, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: '25,000+', label: 'Thailand Travelers' },
  { icon: MapPin, value: '50+', label: 'Thai Destinations' },
  { icon: Award, value: '25+', label: 'Years Experience' },
  { icon: Heart, value: '99%', label: 'Customer Satisfaction' }
];

const features = [
  {
    icon: Plane,
    title: 'Thailand Specialists',
    description: 'Our team has extensive knowledge of Thailand\'s culture, destinations, and hidden gems.'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Licensed tour operator with comprehensive insurance and 24/7 support throughout Thailand.'
  },
  {
    icon: Heart,
    title: 'Local Connections',
    description: 'Strong partnerships with local Thai communities and authentic cultural experiences.'
  }
];

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "",
  },
  {
    src: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "",
  },
  {
    src: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "",
  },
  {
    src: "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "",
  },
  {
    src: "https://images.pexels.com/photos/1826406/pexels-photo-1826406.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "",
  },
  {
    src: "https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "",
  },
  {
    src: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "",
  },
  {
    src: "https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=300",
    alt: "",
  },
];

const About = () => {
const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Thai pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Thailand
              <span className="block text-sky-600">Adventure Specialists</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over 25 years, SSS Vacations has been Malaysia's leading Thailand travel specialist. 
              We've helped thousands of travelers discover the magic of the Land of Smiles, from the 
              bustling streets of Bangkok to the pristine beaches of the southern islands.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our deep understanding of Thai culture, combined with strong local partnerships, 
              ensures that every journey we craft offers authentic experiences and unforgettable memories. 
              Whether you're seeking adventure, relaxation, or cultural immersion, we'll design the perfect Thai experience for you.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-sky-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Thai temple"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Thai beach"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Thai boat"
                className="rounded-2xl shadow-lg w-full h-48 object-cover -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Thai sunset"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600">4.9/5</div>
                <div className="text-sm text-gray-600">Thailand Trips</div>
                <div className="flex justify-center mt-2 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-sky-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Thailand Gallery Section */}
        {/* <div className="mt-20 px-4 md:px-10">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Experience the Beauty of Thailand
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                // alt={img.alt}
                onClick={() => setSelectedImage(img)}
                className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-xl"
              />
            ))}
          </div>
        </div> */}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage.src.replace("w=300", "w=1000")}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
            <p className="mt-2 text-center text-gray-700">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
