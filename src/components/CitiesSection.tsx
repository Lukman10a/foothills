import React, { useState } from "react";
import Image from "next/image";

export default function CitiesSection() {
  const [showAllCities, setShowAllCities] = useState(false);

  // Main featured cities (always visible)
  const cities = [
    {
      name: "London",
      image: "/assets/london.webp",
      alt: "London luxury apartment interior"
    },
    {
      name: "Los Angeles",
      image: "/assets/australia.jpeg", 
      alt: "Los Angeles poolside area"
    },
    {
      name: "Dubai",
      image: "/assets/dubai.jpeg",
      alt: "Dubai luxury pool area"
    },
    {
      name: "New York City", 
      image: "/assets/uk.jpeg",
      alt: "New York City rooftop terrace"
    },
    {
      name: "Montreal",
      image: "/assets/sydney.jpeg",
      alt: "Montreal historic building entrance"
    }
  ];

  // Additional cities (shown when expanded)
  const additionalCities = [
    {
      name: "Riyadh",
      image: "/assets/riyadh.jpeg",
      alt: "Riyadh modern architecture"
    },
    {
      name: "Kuwait",
      image: "/assets/kuwait.jpeg",
      alt: "Kuwait city skyline"
    },
    {
      name: "Bahrain",
      image: "/assets/bahrain.jpeg",
      alt: "Bahrain waterfront"
    },
    {
      name: "UAE",
      image: "/assets/uae.jpeg",
      alt: "UAE modern buildings"
    },
    {
      name: "Qatar",
      image: "/assets/qatar.jpeg",
      alt: "Qatar luxury development"
    },
    {
      name: "Sydney",
      image: "/assets/sydney.jpeg",
      alt: "Sydney harbor view"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 bg-[#fdfaf2]">
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-primary mb-4 sm:mb-6 leading-tight">
            A world of choice
          </h2>
          <p className="font-subtitle text-base sm:text-lg lg:text-xl max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Space just for you, or your entire crew. Choose from apartments and boutique hotels in over 40 cities around the world.
          </p>
        </div>

        {/* Main Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Top Row - London */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-48 sm:h-56 lg:h-64">
              <Image
                src={cities[0].image}
                alt={cities[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h3 className="font-heading text-xl sm:text-2xl font-normal text-white">
                  {cities[0].name}
                </h3>
              </div>
            </div>
          </div>

          {/* Top Row - Los Angeles */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-48 sm:h-56 lg:h-64">
              <Image
                src={cities[1].image}
                alt={cities[1].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h3 className="font-heading text-xl sm:text-2xl font-normal text-white">
                  {cities[1].name}
                </h3>
              </div>
            </div>
          </div>

          {/* Middle Row - Dubai */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-48 sm:h-56 lg:h-64">
              <Image
                src={cities[2].image}
                alt={cities[2].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h3 className="font-heading text-xl sm:text-2xl font-normal text-white">
                  {cities[2].name}
                </h3>
              </div>
            </div>
          </div>

          {/* Featured NYC - spans 2 columns */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl h-64 sm:h-80 lg:h-96">
              <Image
                src={cities[3].image}
                alt={cities[3].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                  {cities[3].name}
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Row - Montreal */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-48 sm:h-56 lg:h-64">
              <Image
                src={cities[4].image}
                alt={cities[4].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h3 className="font-heading text-xl sm:text-2xl font-normal text-white">
                  {cities[4].name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Cities Grid (Expandable) */}
        {showAllCities && (
          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fadeIn">
              {additionalCities.map((city, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-48 sm:h-56 lg:h-64">
                    <Image
                      src={city.image}
                      alt={city.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <h3 className="font-heading text-xl sm:text-2xl font-normal text-white">
                        {city.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View All Cities Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAllCities(!showAllCities)}
            className="inline-flex items-center space-x-2 bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-primary-dark transition-colors duration-200 shadow-lg"
          >
            <span>{showAllCities ? 'Show less cities' : 'View all cities'}</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${showAllCities ? 'rotate-180' : ''}`}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
} 