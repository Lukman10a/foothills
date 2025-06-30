// import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbarSearch, setShowNavbarSearch] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  // Cities data
  const cities = [
    "Los Angeles", "Dubai", "Montreal", "New York City", "Amsterdam", 
    "London", "Austin", "Barcelona", "Boston", "Chicago", "Denver", 
    "Miami", "Paris", "Rome", "Toronto", "Vancouver"
  ];

  // Validation states for navbar search
  const [navbarErrors, setNavbarErrors] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
    dateRange: ""
  });
  const [isNavbarSubmitting, setIsNavbarSubmitting] = useState(false);

  // Scroll detection to show/hide navbar search
  useEffect(() => {
    const handleScroll = () => {
      // Don't show navbar search on the search page
      if (router.pathname === '/search') {
        setShowNavbarSearch(false);
        return;
      }
      
      // Show navbar search when scrolled past the hero section (approximately 800px)
      const scrollPosition = window.scrollY;
      const shouldShow = scrollPosition > 800;
      setShowNavbarSearch(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Also check on route change
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]);

  // Navbar search validation
  const validateNavbarSearch = () => {
    const newErrors = {
      city: "",
      checkIn: "",
      checkOut: "",
      dateRange: ""
    };

    if (!selectedCity.trim()) {
      newErrors.city = "Please select a city";
    }

    if (!checkIn) {
      newErrors.checkIn = "Please select check-in date";
    } else {
      const checkInDate = new Date(checkIn);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (checkInDate < today) {
        newErrors.checkIn = "Check-in cannot be in the past";
      }
    }

    if (!checkOut) {
      newErrors.checkOut = "Please select check-out date";
    }

    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      
      if (checkOutDate <= checkInDate) {
        newErrors.dateRange = "Check-out must be after check-in";
      }
    }

    setNavbarErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  };

  const handleNavbarSearch = async () => {
    if (!validateNavbarSearch()) {
      return;
    }

    setIsNavbarSubmitting(true);
    
    try {
      console.log("Navbar Search:", { selectedCity, checkIn, checkOut, guests });
      // Route to search page with parameters
      const searchParams = new URLSearchParams({
        city: selectedCity,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests.toString()
      });
      window.location.href = `/search?${searchParams.toString()}`;
    } catch (error) {
      console.error("Navbar search error:", error);
    } finally {
      setIsNavbarSubmitting(false);
    }
  };

  // Clear navbar errors when user makes changes
  const handleNavbarCityChange = (value: string) => {
    setSelectedCity(value);
    if (navbarErrors.city) {
      setNavbarErrors(prev => ({ ...prev, city: "" }));
    }
  };

  const handleNavbarCheckInChange = (value: string) => {
    setCheckIn(value);
    if (navbarErrors.checkIn || navbarErrors.dateRange) {
      setNavbarErrors(prev => ({ ...prev, checkIn: "", dateRange: "" }));
    }
  };

  const handleNavbarCheckOutChange = (value: string) => {
    setCheckOut(value);
    if (navbarErrors.checkOut || navbarErrors.dateRange) {
      setNavbarErrors(prev => ({ ...prev, checkOut: "", dateRange: "" }));
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfaf2] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left: Logo */}
            <Link href="/">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white sm:w-6 sm:h-6"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl font-normal text-brand-primary">
                  Foothills
                </span>
                <span className="font-subtitle text-xs opacity-70 hidden sm:block">
                  BY AKMAL 
                </span>
              </div>
            </div>
            </Link>
            {/* <Image src="public/assets/logo.png" alt="Foothills" width={100} height={100} className="w-10 h-10 bg-brand-primary"/> */}
            
            {/* Center: Sticky Search Form (appears on scroll) */}
            {showNavbarSearch && (
              <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
                <div className="flex items-center bg-white rounded-full border border-gray-200 shadow-sm w-full">
                  <div className="flex-1 px-4 py-2">
                    <select
                      value={selectedCity}
                      onChange={(e) => handleNavbarCityChange(e.target.value)}
                      className="w-full bg-transparent text-sm outline-none appearance-none text-gray-700"
                    >
                      <option value="">Select a city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="border-l border-gray-200 px-4 py-2">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => handleNavbarCheckInChange(e.target.value)}
                      className="w-20 bg-transparent text-sm outline-none text-gray-700"
                      placeholder="Check-in"
                    />
                  </div>
                  <div className="border-l border-gray-200 px-4 py-2">
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => handleNavbarCheckOutChange(e.target.value)}
                      className="w-20 bg-transparent text-sm outline-none text-gray-700"
                      placeholder="Check-out"
                    />
                  </div>
                  <div className="border-l border-gray-200 px-4 py-2">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-16 bg-transparent text-sm outline-none appearance-none text-gray-700"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={handleNavbarSearch}
                    disabled={isNavbarSubmitting}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 mr-1 ${
                      isNavbarSubmitting
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        : 'bg-brand-primary text-white hover:bg-brand-primary-dark'
                    }`}
                  >
                    {isNavbarSubmitting ? 'Searching...' : 'Search'}
                  </button>
                </div>
              </div>
            )}

            {/* Right: Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 text-brand-primary font-medium text-sm">
              <span className="hidden lg:inline">USD ($)</span>
              <span className="hidden lg:flex items-center space-x-1">
                {/* Flag SVG Placeholder */}
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <rect width="18" height="12" rx="2" fill="#fff" />
                  <rect y="4" width="18" height="4" fill="#B22234" />
                  <rect width="18" height="2" fill="#B22234" />
                  <rect y="10" width="18" height="2" fill="#B22234" />
                  <rect width="7" height="7" fill="#3C3B6E" />
                  <g fill="#fff">
                    <circle cx="1" cy="1" r="0.5" />
                    <circle cx="3" cy="1" r="0.5" />
                    <circle cx="5" cy="1" r="0.5" />
                    <circle cx="1" cy="3" r="0.5" />
                    <circle cx="3" cy="3" r="0.5" />
                    <circle cx="5" cy="5" r="0.5" />
                    <circle cx="1" cy="5" r="0.5" />
                    <circle cx="3" cy="5" r="0.5" />
                    <circle cx="5" cy="5" r="0.5" />
                  </g>
                </svg>
                <span className="text-sm">English</span>
              </span>
              <span className="hidden md:inline cursor-pointer hover:underline text-sm lg:text-base">
                Find my stays
              </span>
              <span className="hidden md:inline cursor-pointer hover:underline text-sm lg:text-base">
                Log in
              </span>
              {/* Hamburger Menu Button - Mobile Only */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  className="sm:w-6 sm:h-6"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar (shows when navbar search is active) */}
        {showNavbarSearch && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3">
            <div className="flex items-center space-x-2">
              <select
                value={selectedCity}
                onChange={(e) => handleNavbarCityChange(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none"
              >
                <option value="">City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => handleNavbarCheckInChange(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none"
              />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => handleNavbarCheckOutChange(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none"
              />
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={handleNavbarSearch}
                disabled={isNavbarSubmitting}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isNavbarSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-brand-primary text-white hover:bg-brand-primary-dark'
                }`}
              >
                {isNavbarSubmitting ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-normal text-brand-primary">
                  Foothills
                </span>
                <span className="font-subtitle text-xs opacity-70">
                  MADINAH • BY MARRIOTT BONVOY
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                className="text-brand-primary"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="p-4 space-y-6">
            {/* Navigation Links */}
            <div className="space-y-4">
              <a
                href="#"
                className="block text-lg font-medium text-brand-primary hover:text-brand-primary-dark transition-colors duration-200"
              >
                Find my stays
              </a>
              <a
                href="#"
                className="block text-lg font-medium text-brand-primary hover:text-brand-primary-dark transition-colors duration-200"
              >
                Log in
              </a>
            </div>

            {/* Settings */}
            <div className="border-t border-gray-200 pt-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brand-primary mb-2">
                    Language
                  </label>
                  <div className="flex items-center space-x-2 p-3 border border-brand-secondary border-opacity-30 rounded-lg">
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <rect width="18" height="12" rx="2" fill="#fff" />
                      <rect y="4" width="18" height="4" fill="#B22234" />
                      <rect width="18" height="2" fill="#B22234" />
                      <rect y="10" width="18" height="2" fill="#B22234" />
                      <rect width="7" height="7" fill="#3C3B6E" />
                      <g fill="#fff">
                        <circle cx="1" cy="1" r="0.5" />
                        <circle cx="3" cy="1" r="0.5" />
                        <circle cx="5" cy="1" r="0.5" />
                        <circle cx="1" cy="3" r="0.5" />
                        <circle cx="3" cy="3" r="0.5" />
                        <circle cx="5" cy="5" r="0.5" />
                        <circle cx="1" cy="5" r="0.5" />
                        <circle cx="3" cy="5" r="0.5" />
                        <circle cx="5" cy="5" r="0.5" />
                      </g>
                    </svg>
                    <span className="text-brand-primary">English (US)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-primary mb-2">
                    Currency
                  </label>
                  <div className="p-3 border border-brand-secondary border-opacity-30 rounded-lg">
                    <span className="text-brand-primary">USD ($)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
}
