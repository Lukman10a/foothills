import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#fdfaf2] border-b border-gray-200 px-6 py-3 flex items-center justify-between"> 
        {/* Logo  */}
       <Image src="/assets/foothills_logo.png" alt="Foothills" width={100} height={100} className="w-70 h-10 bg-black" />
      {/* Right: Menu */}
      <div className="flex items-center space-x-6 text-[#0d4747] font-medium text-sm">
        <span className="hidden sm:inline">USD ($)</span>
        <span className="hidden sm:flex items-center space-x-1">
          {/* Flag SVG Placeholder */}
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <span>English</span>
        </span>
        <span className="hidden md:inline cursor-pointer hover:underline">Find my stays</span>
        <span className="hidden md:inline cursor-pointer hover:underline">Log in</span>
        {/* Hamburger menu icon */}
        <button className="ml-2 p-1 rounded hover:bg-[#f3ede2] focus:outline-none">
          <svg width="24" height="24" fill="none" stroke="#0d4747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
} 