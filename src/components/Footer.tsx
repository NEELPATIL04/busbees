import React from 'react';
import { Bus, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Bus className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">BusBees</span>
            </div>
            <p className="text-white mb-6 max-w-md leading-relaxed">
              Your trusted partner in premium transportation services. We provide safe, reliable, 
              and comfortable bus services for commercial and educational needs with over 29 years of experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white hover:text-black hover:bg-white px-2 py-1 rounded transition-all duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:text-black hover:bg-white px-2 py-1 rounded transition-all duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-white hover:text-black hover:bg-white px-2 py-1 rounded transition-all duration-200"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('stats')}
                  className="text-white hover:text-black hover:bg-white px-2 py-1 rounded transition-all duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-black hover:bg-white px-2 py-1 rounded transition-all duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white">+91 98765 43210</p>
                  <p className="text-white">+91 87654 32109</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white">info@busbees.com</p>
                  <p className="text-white">support@busbees.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <p className="text-white">
                  123 Transport Street,<br />
                  Business District,<br />
                  City - 123456
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} BusBees. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white hover:text-black hover:bg-white px-2 py-1 rounded transition-all duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-black hover:bg-white px-2 py-1 rounded transition-all duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white hover:text-black hover:bg-white px-2 py-1 rounded transition-all duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;