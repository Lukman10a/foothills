import React from "react";

export default function AppFeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Check in online",
      description: "Skip the front desk and check in from anywhere"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zm0 14V6h10v12H7z"/>
          <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      ),
      title: "Access your mobile key",
      description: "Your phone is your key - no plastic cards needed"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v6l4-6h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      title: "Chat with us 24/7",
      description: "Get help anytime with our digital concierge"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ),
      title: "Choose your checkout time",
      description: "Flexible checkout that works with your schedule"
    }
  ];

  const awards = [
    {
      name: "TripAdvisor",
      logo: (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-2">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <span className="text-xs text-gray-600 text-center">TripAdvisor</span>
        </div>
      )
    },
    {
      name: "Google",
      logo: (
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">Google</div>
          <div className="flex mb-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-600">Customer Reviews</span>
        </div>
      )
    },
    {
      name: "Rolling Stone",
      logo: (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold text-xs">RS</span>
          </div>
          <span className="text-xs text-gray-600 text-center">Rolling Stone Travel and<br/>Wellness Awards 2024</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 bg-[#f5f3f0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-primary mb-4 sm:mb-6 leading-tight">
              Everything you need<br />
              is just a tap away
            </h2>
            <p className="font-subtitle text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed">
              Customize your stay or connect with our digital concierge. The Foothills app puts you in control.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-brand-primary mb-1">
                      {feature.title}
                    </h3>
                    {feature.description && (
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-16">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 sm:w-72 lg:w-80 h-[500px] sm:h-[580px] lg:h-[640px] bg-black rounded-[2.5rem] lg:rounded-[3rem] p-1.5 lg:p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-sm">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-6 h-3 border border-black rounded-sm">
                          <div className="w-4 h-full bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="px-6 py-4">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-1">Foothills Madinah | Room #103B</h3>
                        <p className="text-gray-600 text-sm">Al-Madinah Al-Munawwarah</p>
                        <p className="text-gray-600 text-sm">Nov 7-9 | 2 nights | 2 guests</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-sm">Get help now</span>
                          <span className="text-sm text-gray-500">24/7 support chat</span>
                        </div>
                        
                        <div className="bg-green-100 rounded-lg p-3">
                          <p className="text-green-800 text-sm font-medium">Arriving soon? There&apos;s still time to log in or check in now.</p>
                        </div>
                        
                        <div className="space-y-3">
                          <button className="w-full bg-brand-primary text-white py-3 rounded-lg text-sm font-medium">
                            Check in
                          </button>
                          
                          <div className="flex justify-between text-sm">
                            <span>Sector #002</span>
                            <span>2857.9KM</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span>Building</span>
                            <span>107.938#</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="border-t border-gray-300 pt-12 mt-16">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
            {awards.map((award, index) => (
              <div key={index} className="flex justify-center">
                {award.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 