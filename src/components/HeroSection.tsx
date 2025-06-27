import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images array
  const backgroundImages = [
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/hero1.webp')",
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/hero2.webp')",
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/hero3.webp')"
  ];

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images Carousel */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: image
          }}
        ></div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 lg:p-16">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-light text-[#0d4747] leading-tight mb-6">
            A better way<br />
            to stay
          </h1>
          <p className="text-lg lg:text-xl text-[#0d4747] max-w-lg leading-relaxed opacity-90 mx-auto">
            A choice of stays in the cities you love, powered by an app that puts you in control. Now part of Marriott Bonvoy.
          </p>
        </div>

        {/* Location Info */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-[#0d4747] bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="font-medium">Foothills One Platt</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-700">New York City</span>
          </div>
        </div>      
      </div>
    </div>
  );
} 