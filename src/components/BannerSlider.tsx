'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Slide content data
  const slides = [
    {
      title: "Modular Portable Buildings",
      subtitle: "Custom Solutions For Your Business",
      description: "Premium quality kiosks and modular buildings designed for versatility and durability",
      image: "/kiosk5.jpg",
      buttonText: "Explore Products",
      buttonLink: "/kiosks"
    },
    {
      title: "Interactive Kiosk Solutions",
      subtitle: "Engage Your Customers",
      description: "Touchscreen technology to enhance customer experience and streamline operations",
      image: "/kiosk4.jpg",
      buttonText: "View Solutions",
      buttonLink: "/kiosks"
    },
    {
      title: "Customizable Designs",
      subtitle: "Built To Your Specifications",
      description: "Tailored modular buildings to meet your exact requirements and brand identity",
      image: "/kiosk3.jpg",
      buttonText: "Request Quote",
      buttonLink: "/ContactUs"
    }
  ];
  
  const totalSlides = slides.length;

  // Use useCallback to memoize the changeSlide function
  const changeSlide = useCallback((newIndex: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    
    
    
    // Reset the animation flag
    setTimeout(() => {
      setIsAnimating(false);
      
    }, 500);
  }, [isAnimating]);

  // Use a separate useEffect for automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentSlide + 1) % totalSlides;
      
      changeSlide(nextIndex);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentSlide, totalSlides, changeSlide]);

  const goToSlide = (index: number) => {
    
    changeSlide(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    
    changeSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    
    changeSlide(prevIndex);
  };

  // Get current slide data with safety check
  const currentSlideData = slides[currentSlide] || slides[0];

 
  

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Static H1 tag for SEO */}
      <h1 className="sr-only">Modular Portable Kiosk</h1>
      
      {/* All slides in DOM, but only one visible */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50"></div>
          </div>
        </div>
      ))}
      
      {/* Content - separate from background slides for reliable rendering */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-20">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-white mb-2 tracking-tight transition-opacity duration-500">
            {currentSlideData.title}
          </h2>
          <p className="text-2xl font-semibold text-blue-300 mb-4 transition-opacity duration-500">
            {currentSlideData.subtitle}
          </p>
          <p className="text-xl text-white/90 mb-8 max-w-lg transition-opacity duration-500">
            {currentSlideData.description}
          </p>
          <div className="flex space-x-4 transition-opacity duration-500">
            <a 
              href={currentSlideData.buttonLink}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center"
            >
              {currentSlideData.buttonText}
              <ChevronRight className="w-5 h-5 ml-1" />
            </a>
            <a 
              href="/ContactUs"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center z-30">
        <button 
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-r-md transition-colors focus:outline-none"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-30">
        <button 
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-l-md transition-colors focus:outline-none"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators - with clear visual indicator */}
      <div className="absolute bottom-10 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-500 w-20' : 'bg-white/50 w-12'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;