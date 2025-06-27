import React, { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "The room is like a little apartment that feels like home. It has everything you need for a few days of stay.",
      author: "Jodi",
      location: "Ottawa",
      bgColor: "bg-[#1e5a5a]",
      textColor: "text-white"
    },
    {
      id: 2,
      quote: "Clean. Well furnished. All digital service with immediate response. I stay with Foothills all over the world and it's always twice the value for half the price.",
      author: "Ron",
      location: "Denver",
      bgColor: "bg-gradient-to-br from-green-600 to-green-400",
      textColor: "text-white"
    },
    {
      id: 3,
      quote: "Everything works like magic and the staff is super helpful to make your stay seamless.",
      author: "Sarah",
      location: "New York",
      bgColor: "bg-[#f4e6d1]",
      textColor: "text-gray-800"
    },
    {
      id: 4,
      quote: "Exceptional location and stunning design. The app made check-in effortless and the amenities exceeded all expectations.",
      author: "Marcus",
      location: "Los Angeles",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-400",
      textColor: "text-white"
    },
    {
      id: 5,
      quote: "Perfect for business travel. Fast WiFi, comfortable workspace, and the 24/7 support team is incredibly responsive.",
      author: "Elena",
      location: "Chicago",
      bgColor: "bg-gradient-to-br from-purple-600 to-purple-400",
      textColor: "text-white"
    },
    {
      id: 6,
      quote: "Beautiful interiors and thoughtful touches throughout. Felt like staying in a luxury hotel but with the comfort of home.",
      author: "David",
      location: "Miami",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-400",
      textColor: "text-white"
    },
    {
      id: 7,
      quote: "Outstanding value and prime location. The digital concierge helped with everything from restaurant recommendations to transportation.",
      author: "Lisa",
      location: "Seattle",
      bgColor: "bg-[#2c5f5f]",
      textColor: "text-white"
    },
    {
      id: 8,
      quote: "Spotless accommodations with modern amenities. The mobile key feature is genius and made our stay completely hassle-free.",
      author: "Ahmed",
      location: "Toronto",
      bgColor: "bg-gradient-to-br from-teal-600 to-cyan-400",
      textColor: "text-white"
    }
  ];

  // Auto-advance carousel with smoother timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Increased to 6 seconds for better reading experience

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-[#0d4747] mb-6 leading-tight">
            Every stay has a story
          </h2>
          <p className="text-lg lg:text-xl text-[#0d4747] opacity-90 leading-relaxed max-w-2xl">
            But don&apos;t just take our word for it — see what our guests have to say.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300 -ml-6"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600 hover:text-[#0d4747] transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300 -mr-6"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600 hover:text-[#0d4747] transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(calc(-${currentSlide * 80}% + 10%))`,
                paddingLeft: '10%',
                paddingRight: '10%'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-[80%] flex-shrink-0 mx-[2%] ${testimonial.bgColor} ${testimonial.textColor} p-8 lg:p-12 min-h-[350px] flex flex-col justify-center transition-all duration-700 ease-out`}
                  style={{
                    borderRadius: '0 0 60px 0',
                    opacity: index === currentSlide ? 1 : 0.6,
                    transform: index === currentSlide ? 'scale(1)' : 'scale(0.92)',
                    filter: index === currentSlide ? 'brightness(1)' : 'brightness(0.8)'
                  }}
                >
                  <div className="max-w-3xl mx-auto text-left">
                    {/* Quote */}
                    <blockquote className="text-xl lg:text-2xl font-light leading-relaxed mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    
                    {/* Author */}
                    <div className="text-base lg:text-lg">
                      <div className="font-semibold mb-1">{testimonial.author}</div>
                      <div className="opacity-80">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide 
                    ? 'w-4 h-4 bg-[#0d4747]' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 