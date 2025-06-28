import React from "react";

export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#fdfaf2] border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between"> 
        {/* Logo  */}
       <div className="flex items-center">
         <div className="w-8 h-8 bg-[#0d4747] rounded-full flex items-center justify-center mr-2">
           <span className="text-white font-bold text-sm">F</span>
         </div>
         <div className="flex flex-col">
           <span className="text-lg sm:text-xl font-light text-[#0d4747]">Foothills</span>
           <span className="text-xs text-[#0d4747] opacity-70 hidden sm:block">BY MARRIOTT BONVOY</span>
         </div>
       </div>
      {/* Right: Menu */}
      <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 text-[#0d4747] font-medium text-sm">
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
        <button className="p-2 rounded hover:bg-[#f3ede2] focus:outline-none transition-colors duration-200">
          <svg width="20" height="20" fill="none" stroke="#0d4747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="sm:w-6 sm:h-6">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
} 