import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Thai temple"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <img
          src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Thai boat"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plan Your Thailand Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to explore the Land of Smiles? Our Thailand specialists are here to help you create the perfect Thai experience. Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-r from-sky-500 to-orange-500 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Our Thailand Experts</h3>
                  <p className="text-gray-600">+60 3-2161 2800</p>
                  <p className="text-sm text-gray-500">Toll-free from Malaysia</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-r from-sky-500 to-orange-500 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">thailand@applevacations.my</p>
                  <p className="text-sm text-gray-500">Quick response within 2 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-r from-sky-500 to-orange-500 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Our Office</h3>
                  <p className="text-gray-600">Kuala Lumpur, Malaysia</p>
                  <p className="text-sm text-gray-500">Thailand travel consultations</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-r from-sky-500 to-orange-500 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Operating Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                  <p className="text-sm text-gray-500">Malaysia Time (GMT+8)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-500 to-orange-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="h-6 w-6" />
                <h3 className="font-semibold">WhatsApp Support</h3>
              </div>
              <p className="mb-4">Get instant answers about Thailand packages</p>
              <button className="bg-white text-sky-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Chat with Us
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Thailand Quote</h3>
                <p className="text-gray-600">Tell us about your dream Thailand vacation and we'll create a personalized itinerary just for you.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                      placeholder="+60 12-345 6789"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Thailand Destination
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors">
                      <option value="">Select destination</option>
                      <option value="bangkok">Bangkok</option>
                      <option value="phuket">Phuket</option>
                      <option value="krabi">Krabi</option>
                      <option value="chiang-mai">Chiang Mai</option>
                      <option value="koh-samui">Koh Samui</option>
                      <option value="pattaya">Pattaya</option>
                      <option value="multiple">Multiple destinations</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Duration
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors">
                      <option value="">Select duration</option>
                      <option value="3-4">3-4 days</option>
                      <option value="5-6">5-6 days</option>
                      <option value="7-10">7-10 days</option>
                      <option value="10+">More than 10 days</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors">
                      <option value="">Select travelers</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3-4">3-4 people</option>
                      <option value="5+">5+ people</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range (RM per person)
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors">
                      <option value="">Select budget</option>
                      <option value="500-1000">RM 500 - 1,000</option>
                      <option value="1000-2000">RM 1,000 - 2,000</option>
                      <option value="2000-3000">RM 2,000 - 3,000</option>
                      <option value="3000+">RM 3,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your Thailand dream vacation
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors resize-none"
                    placeholder="What experiences are you looking for in Thailand? Beaches, temples, culture, adventure, food tours, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-orange-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Get My Thailand Quote</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We'll respond within 2 hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Thailand Travel Tips */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Thailand Travel Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Thai temple"
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-semibold text-gray-900 mb-2">Best Time to Visit</h4>
              <p className="text-sm text-gray-600">November to March for cool, dry weather perfect for sightseeing and beaches.</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Thai currency"
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-semibold text-gray-900 mb-2">Currency</h4>
              <p className="text-sm text-gray-600">Thai Baht (THB). Credit cards widely accepted. ATMs available everywhere.</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Thai visa"
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-semibold text-gray-900 mb-2">Visa Requirements</h4>
              <p className="text-sm text-gray-600">Malaysians get 30-day visa-free entry. Just bring your passport!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;