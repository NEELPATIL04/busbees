import React from 'react';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-white flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Premium
            <span className="block text-black">
              Transportation
            </span>
            <span className="block text-4xl md:text-5xl mt-2">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-black mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the future of transportation with BusBees. Safe, reliable, and premium bus services 
            for commercial and educational needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToServices}
              className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              Get Quote
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border-2 border-black hover:bg-black transition-all duration-300 group">
              <Shield className="h-12 w-12 text-black group-hover:text-white mx-auto mb-4 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-black group-hover:text-white mb-2 transition-all duration-300">Verified Drivers</h3>
              <p className="text-black group-hover:text-white transition-all duration-300">All our drivers are thoroughly verified and professionally trained</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-black hover:bg-black transition-all duration-300 group">
              <Clock className="h-12 w-12 text-black group-hover:text-white mx-auto mb-4 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-black group-hover:text-white mb-2 transition-all duration-300">Shortest Routes</h3>
              <p className="text-black group-hover:text-white transition-all duration-300">Optimized routes ensuring minimum travel time</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-black hover:bg-black transition-all duration-300 group">
              <Star className="h-12 w-12 text-black group-hover:text-white mx-auto mb-4 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-black group-hover:text-white mb-2 transition-all duration-300">Premium Quality</h3>
              <p className="text-black group-hover:text-white transition-all duration-300">Clean, comfortable, and well-maintained vehicles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;