import React from "react";

export default function MarriottBonvoySection() {
  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-secondary rounded-2xl sm:rounded-3xl px-6 py-6 sm:px-8 sm:py-6 lg:px-12 lg:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-center sm:text-left">
            {/* Marriott Bonvoy Logo */}
            <div className="flex-shrink-0">
              <div className="text-white">
                <div className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] leading-tight">MARRIOTT</div>
                <div className="font-heading text-lg sm:text-xl font-bold tracking-[0.3em] leading-tight">BONVOY</div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-white">
              <p className="font-subtitle text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-inherit">
                Join Marriott Bonvoy<sup className="text-xs">®</sup> and earn points toward free nights for your stays.
              </p>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-transparent text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium border-2 border-white hover:bg-white hover:text-brand-secondary transition-colors duration-200">
              Join Today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 