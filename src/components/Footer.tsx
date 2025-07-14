import React from 'react';
import { Plane, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/Logo.png'; 


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Thai pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-sky-500 to-orange-500 p-2 rounded-lg">
                <img src={logo} alt="Logo" className="h-6 w-6 object-contain" />
              </div>
              <span className="text-xl font-bold">Apple Vacations</span>
            </div>
            <p className="text-gray-400 mb-6">
              Malaysia's leading Thailand travel specialist for over 25 years. 
              Creating unforgettable Thai experiences with authentic local connections.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Thailand Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thailand Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bangkok Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Phuket Holidays</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Krabi Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chiang Mai Trips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Koh Samui Getaways</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pattaya Vacations</a></li>
            </ul>
          </div>

          {/* Travel Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thailand Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Thailand Visa Assistance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Flight Bookings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hotel Reservations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tour Guides</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Our Thailand Experts</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+60 3-2161 2800</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>thailand@applevacations.my</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <div>Kuala Lumpur, Malaysia</div>
                  <div className="text-sm">Thailand Travel Specialists</div>
                </div>
              </li>
              <li className="text-sm">
                <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                <div>Sat: 9:00 AM - 1:00 PM</div>
                <div>Malaysia Time (GMT+8)</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Thailand Travel Gallery */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-6 text-center">Experience Thailand with Apple Vacations</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            <img
              src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Thai temple"
              className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Thai beach"
              className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Thai boat"
              className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Thai sunset"
              className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/1826406/pexels-photo-1826406.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Thai island"
              className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/442539/pexels-photo-442539.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Thai city"
              className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Thai culture"
              className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Thai nature"
              className="w-full h-16 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; 2025 Apple Vacations. All rights reserved. | 
                <a href="#" className="hover:text-white transition-colors"> Privacy Policy</a> | 
                <a href="#" className="hover:text-white transition-colors"> Terms of Service</a>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                Licensed Thailand Tour Operator | MATTA Member | 
                <span className="text-sky-400">Your Trusted Thailand Travel Partner</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;