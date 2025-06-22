import { ArrowRight, Shield, Clock, Star } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-12">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>
      
      {/* Bus Images as Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="/backgroundimage.jpeg" 
          alt="Corporate Bus Fleet" 
          fill
          className="object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center bg-white text-black px-4 py-2 rounded-full font-semibold mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Corporate & Educational Transport in Pune
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Corporate
              <span className="block text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                & Student
              </span>
              <span className="block text-2xl md:text-3xl mt-1 text-gray-300">Transport</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl leading-relaxed">
              Professional transportation solutions for corporate employees and safe, reliable school transport 
              for students across Pune. BusBees ensures comfort and punctuality throughout the city every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={scrollToServices}
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg"
              >
                <span>View Services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Shield className="w-4 h-4" />
                <span>Get Quote</span>
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 max-w-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-white">200+</div>
                <div className="text-xs text-gray-400">Companies in Pune</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-400">Schools in Pune</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">99%</div>
                <div className="text-xs text-gray-400">Safety Record</div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Bus Images */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Bus Image - Executive/Corporate Transport */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-blue-400/20 h-48">
                <Image 
                  src="/main.jpeg" 
                  alt="Executive Corporate Bus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-semibold">Executive Transport</h3>
                  <p className="text-xs text-gray-300">Luxury buses for corporate employees</p>
                </div>
              </div>

              {/* Secondary Image - Student Transport */}
              <div className="mt-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-blue-400/10 h-32">
                  <Image 
                    src="/school-bus.jpg" 
                    alt="School Bus for Student Transport"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-sm font-medium">Student Transport</p>
                    <p className="text-xs text-gray-300">Safe school bus service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Shield className="w-6 h-6 text-white" />
            </div>
            
            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-80 animate-pulse"></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group">
            <Shield className="h-8 w-8 text-white group-hover:text-black mx-auto mb-3 transition-colors duration-300" />
            <h3 className="text-lg font-semibold text-white group-hover:text-black mb-2 text-center transition-colors duration-300">Safe & Secure</h3>
            <p className="text-sm text-gray-300 group-hover:text-gray-700 text-center transition-colors duration-300">GPS tracking, verified drivers, and comprehensive safety protocols for students and employees across Pune</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group">
            <Clock className="h-8 w-8 text-white group-hover:text-black mx-auto mb-3 transition-colors duration-300" />
            <h3 className="text-lg font-semibold text-white group-hover:text-black mb-2 text-center transition-colors duration-300">Punctual Service</h3>
            <p className="text-sm text-gray-300 group-hover:text-gray-700 text-center transition-colors duration-300">Reliable pickup and drop-off schedules designed for corporate and school timetables throughout Pune</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group">
            <Star className="h-8 w-8 text-white group-hover:text-black mx-auto mb-3 transition-colors duration-300" />
            <h3 className="text-lg font-semibold text-white group-hover:text-black mb-2 text-center transition-colors duration-300">Professional Fleet</h3>
            <p className="text-sm text-gray-300 group-hover:text-gray-700 text-center transition-colors duration-300">Modern, air-conditioned buses with comfortable seating and regular maintenance serving Pune city</p>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-gray-300 rounded-full opacity-60 animate-bounce"></div>
    </section>
  );
};

export default Hero;