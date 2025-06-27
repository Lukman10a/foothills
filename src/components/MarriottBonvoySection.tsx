import React from "react";

export default function MarriottBonvoySection() {
  return (
    <section className="py-8 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#e8e4dc] rounded-3xl px-8 py-6 lg:px-12 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex items-center space-x-8">
            {/* Marriott Bonvoy Logo */}
            <div className="flex-shrink-0">
              <div className="text-[#2c2c2c]">
                <div className="text-sm font-bold tracking-[0.2em] leading-tight">MARRIOTT</div>
                <div className="text-xl font-bold tracking-[0.3em] leading-tight">BONVOY</div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="text-[#2c2c2c]">
              <p className="text-lg lg:text-xl font-normal leading-relaxed">
                Join Marriott Bonvoy<sup className="text-xs">®</sup> and earn points toward free nights for your stays.
              </p>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <button className="bg-transparent text-[#2c2c2c] px-8 py-3 rounded-full text-lg font-medium border-2 border-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white transition-colors duration-200">
              Join Today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 