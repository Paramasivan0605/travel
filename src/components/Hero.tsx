import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Star, Play, Pause } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "We Are the Leading",
      subtitle: "Destination Management Company In",
      location: "Thailand",
      description: "Stunning Beaches",
      content: "Experience pristine white sand beaches and crystal-clear turquoise waters that make Thailand a tropical paradise."
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Explore Ancient",
      subtitle: "Temples & Sacred Sites In",
      location: "Thailand",
      description: "Sacred Temples",
      content: "Discover magnificent Buddhist temples and ancient architecture that showcase Thailand's rich spiritual heritage."
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Adventure Awaits",
      subtitle: "Island Hopping Experience In",
      location: "Thailand",
      description: "Island Adventures",
      content: "Navigate through emerald waters aboard traditional longtail boats to discover hidden lagoons and secluded islands."
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Vibrant Culture",
      subtitle: "Street Markets & Local Life In",
      location: "Thailand",
      description: "Cultural Immersion",
      content: "Immerse yourself in bustling night markets, authentic street food, and the warm hospitality of Thai people."
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Luxury Escapes",
      subtitle: "Premium Resorts & Spas In",
      location: "Thailand",
      description: "Tropical Paradise",
      content: "Indulge in world-class resorts, rejuvenating spa treatments, and unparalleled luxury amidst tropical beauty."
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('next');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('prev');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setSlideDirection(index > currentSlide ? 'next' : 'prev');
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Advanced Transitions */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide 
              ? 'opacity-100 z-10' 
              : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.description}
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              index === currentSlide 
                ? slideDirection === 'next' 
                  ? 'scale-110 animate-zoom-in' 
                  : 'scale-110 animate-zoom-in-reverse'
                : 'scale-100'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-60'
          }`}></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 group hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-orange-400 transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 group hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-orange-400 transition-colors" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content with Slide Animations */}
          <div className={`text-left space-y-6 transition-all duration-700 transform ${
            slideDirection === 'next' 
              ? 'animate-slide-in-left' 
              : 'animate-slide-in-right'
          }`}>
            <div className="space-y-2">
              <h2 className={`text-2xl md:text-3xl font-light text-white/90 transition-all duration-500 delay-100 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                {currentSlideData.title}
              </h2>
              <h3 className={`text-xl md:text-2xl font-light text-white/80 transition-all duration-500 delay-200 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                {currentSlideData.subtitle}
              </h3>
            </div>
            
            <h1 className={`text-6xl md:text-8xl font-bold text-white leading-none transition-all duration-700 delay-300 ${
              isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
            }`}>
              <span className="block bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent italic transform -skew-x-12 hover:scale-105 transition-transform duration-300">
                {currentSlideData.location}
              </span>
            </h1>

            <button className={`bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-none font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-orange-500/25 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`} style={{ transitionDelay: '400ms' }}>
              Know More →
            </button>
          </div>

          {/* Right Content - Floating Description with Advanced Animations */}
          <div className="lg:flex lg:justify-end">
            <div className={`bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl max-w-md hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-3xl ${
              slideDirection === 'next' 
                ? 'animate-slide-in-right' 
                : 'animate-slide-in-left'
            }`}>
              <div className={`flex items-center space-x-2 mb-4 transition-all duration-500 delay-100 ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 text-orange-400 fill-current transition-all duration-300`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              
              <h3 className={`text-2xl font-bold text-white mb-3 transition-all duration-500 delay-200 ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}>
                {currentSlideData.description}
              </h3>
              
              <p className={`text-white/90 leading-relaxed mb-6 transition-all duration-500 delay-300 ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}>
                {currentSlideData.content}
              </p>
              
              <div className={`flex items-center space-x-4 text-sm text-white/80 transition-all duration-500 delay-400 ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}>
                <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Thailand</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>Year Round</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                  <Users className="w-4 h-4" />
                  <span>All Ages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators with Progress */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white ml-0.5" />
            )}
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 group ${
                  index === currentSlide
                    ? 'bg-orange-500 w-12 h-3'
                    : 'bg-white/40 hover:bg-white/60 w-3 h-3 hover:scale-125'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentSlide && isPlaying && (
                  <div 
                    className="absolute top-0 left-0 h-full bg-orange-300 rounded-full animate-progress"
                    style={{ animationDuration: '5000ms' }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-sky-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-white/80 text-sm font-medium bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden xl:block animate-float-delayed">
        <div className="w-20 h-20 bg-gradient-to-br from-sky-400/20 to-orange-400/20 rounded-full backdrop-blur-xl border border-white/10"></div>
      </div>
      <div className="absolute bottom-32 right-16 hidden xl:block animate-float">
        <div className="w-32 h-16 bg-gradient-to-br from-orange-400/20 to-sky-400/20 rounded-2xl backdrop-blur-xl border border-white/10"></div>
      </div>

      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1.1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(0.5deg); }
          100% { transform: scale(1.1) rotate(0deg); }
        }
        
        @keyframes zoom-in {
          from { transform: scale(1) rotate(0deg); }
          to { transform: scale(1.1) rotate(0.5deg); }
        }
        
        @keyframes zoom-in-reverse {
          from { transform: scale(1) rotate(0.5deg); }
          to { transform: scale(1.1) rotate(-0.5deg); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(251, 146, 60, 0.5); }
          50% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.8), 0 0 30px rgba(251, 146, 60, 0.6); }
        }
        
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }
        
        .animate-zoom-in {
          animation: zoom-in 1s ease-out forwards;
        }
        
        .animate-zoom-in-reverse {
          animation: zoom-in-reverse 1s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.7s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.7s ease-out;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }
        
        .animate-progress {
          animation: progress linear forwards;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Hero;