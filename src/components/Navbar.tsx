import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
   <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#fdfaf2] border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between"> 
        {/* Logo  */}
               <div className="flex items-center">
          <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center mr-2">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-normal text-brand-primary">Foothills</span>
            <span className="font-subtitle text-xs opacity-70 hidden sm:block">BY MARRIOTT BONVOY</span>
          </div>
        </div>
      {/* Right: Menu */}
      <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 text-brand-primary font-medium text-sm">
        <span className="hidden lg:inline">USD ($)</span>
        <span className="hidden lg:flex items-center space-x-1">
          {/* Flag SVG Placeholder */}
          <svg width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <rect width="18" height="12" rx="2" fill="#fff"/>
            <rect y="4" width="18" height="4" fill="#B22234"/>
            <rect width="18" height="2" fill="#B22234"/>
            <rect y="10" width="18" height="2" fill="#B22234"/>
            <rect width="7" height="7" fill="#3C3B6E"/>
            <g fill="#fff">
              <circle cx="1" cy="1" r="0.5"/>
              <circle cx="3" cy="1" r="0.5"/>
              <circle cx="5" cy="1" r="0.5"/>
              <circle cx="1" cy="3" r="0.5"/>
              <circle cx="3" cy="3" r="0.5"/>
              <circle cx="5" cy="5" r="0.5"/>
              <circle cx="1" cy="5" r="0.5"/>
              <circle cx="3" cy="5" r="0.5"/>
              <circle cx="5" cy="5" r="0.5"/>
            </g>
          </svg>
          <span className="text-sm">English</span>
        </span>
        <span className="hidden md:inline cursor-pointer hover:underline text-sm lg:text-base">Find my stays</span>
        <span className="hidden md:inline cursor-pointer hover:underline text-sm lg:text-base">Log in</span>
        {/* Hamburger menu icon */}
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded hover:bg-[#f3ede2] focus:outline-none transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="sm:w-6 sm:h-6">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div 
        className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={closeMobileMenu}
      />
    )}

    {/* Mobile Menu */}
    <div className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-[#fdfaf2] z-50 transform transition-transform duration-300 ease-in-out ${
      isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      {/* Menu Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center mr-2">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-normal text-brand-primary">Foothills</span>
            <span className="font-subtitle text-xs opacity-70">MADINAH • BY MARRIOTT BONVOY</span>
          </div>
        </div>
        <button 
          onClick={closeMobileMenu}
          className="p-2 rounded hover:bg-[#f3ede2] focus:outline-none transition-colors duration-200"
          aria-label="Close mobile menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="text-brand-primary">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Menu Content */}
      <div className="p-4 space-y-6">
        {/* Language and Currency */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-primary mb-2">Language</label>
            <div className="flex items-center space-x-2 p-3 border border-brand-secondary border-opacity-30 rounded-lg">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <rect width="18" height="12" rx="2" fill="#fff"/>
                <rect y="4" width="18" height="4" fill="#B22234"/>
                <rect width="18" height="2" fill="#B22234"/>
                <rect y="10" width="18" height="2" fill="#B22234"/>
                <rect width="7" height="7" fill="#3C3B6E"/>
                <g fill="#fff">
                  <circle cx="1" cy="1" r="0.5"/>
                  <circle cx="3" cy="1" r="0.5"/>
                  <circle cx="5" cy="1" r="0.5"/>
                  <circle cx="1" cy="3" r="0.5"/>
                  <circle cx="3" cy="3" r="0.5"/>
                  <circle cx="5" cy="5" r="0.5"/>
                  <circle cx="1" cy="5" r="0.5"/>
                  <circle cx="3" cy="5" r="0.5"/>
                  <circle cx="5" cy="5" r="0.5"/>
                </g>
              </svg>
              <span className="text-brand-primary">English (US)</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-primary mb-2">Currency</label>
            <div className="p-3 border border-brand-secondary border-opacity-30 rounded-lg">
              <span className="text-brand-primary">USD ($)</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <button 
            onClick={closeMobileMenu}
            className="w-full text-left py-3 px-4 text-brand-primary hover:bg-brand-secondary hover:bg-opacity-10 rounded-lg transition-colors duration-200 font-medium"
          >
            Find my stays
          </button>
          <button 
            onClick={closeMobileMenu}
            className="w-full text-left py-3 px-4 text-brand-primary hover:bg-brand-secondary hover:bg-opacity-10 rounded-lg transition-colors duration-200 font-medium"
          >
            Log in
          </button>
        </div>

        {/* Additional Links */}
        <div className="pt-4 border-t border-gray-200 space-y-3">
          <button 
            onClick={closeMobileMenu}
            className="w-full text-left py-2 text-brand-secondary opacity-80 hover:opacity-100 transition-opacity duration-200"
          >
            About Us
          </button>
          <button 
            onClick={closeMobileMenu}
            className="w-full text-left py-2 text-brand-secondary opacity-80 hover:opacity-100 transition-opacity duration-200"
          >
            Help Center
          </button>
          <button 
            onClick={closeMobileMenu}
            className="w-full text-left py-2 text-brand-secondary opacity-80 hover:opacity-100 transition-opacity duration-200"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
    </>
  );
} 