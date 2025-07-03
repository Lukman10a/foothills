import React, { useState } from "react";

const HeroSearch = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  
  // Validation states
  const [errors, setErrors] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
    dateRange: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cities data matching Sonder
  const cities = [
    "Los Angeles", "Dubai", "Montreal", "New York City", "Amsterdam", 
    "London", "Austin", "Barcelona", "Boston", "Chicago", "Denver", 
    "Miami", "Paris", "Rome", "Toronto", "Vancouver"
  ];

  // Validation function
  const validateForm = () => {
    const newErrors = {
      city: "",
      checkIn: "",
      checkOut: "",
      dateRange: ""
    };

    // City validation
    if (!selectedCity.trim()) {
      newErrors.city = "Please select a destination";
    }

    // Check-in validation
    if (!checkIn) {
      newErrors.checkIn = "Please select a check-in date";
    } else {
      const checkInDate = new Date(checkIn);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (checkInDate < today) {
        newErrors.checkIn = "Check-in date cannot be in the past";
      }
    }

    // Check-out validation
    if (!checkOut) {
      newErrors.checkOut = "Please select a check-out date";
    }

    // Date range validation
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      
      if (checkOutDate <= checkInDate) {
        newErrors.dateRange = "Check-out date must be after check-in date";
      }
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  };

  const handleSearch = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Search:", { selectedCity, checkIn, checkOut, guests });
      
      // Route to booking engine with parameters
      const searchParams = new URLSearchParams({
        city: selectedCity,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests.toString()
      });
      
      // Redirect to booking engine subdomain
      window.location.href = `https://https://foothills-booking-engine.vercel.app/search?${searchParams.toString()}`;
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear error when user starts typing/selecting
  const handleCityChange = (value: string) => {
    setSelectedCity(value);
    if (errors.city) {
      setErrors(prev => ({ ...prev, city: "" }));
    }
  };

  const handleCheckInChange = (value: string) => {
    setCheckIn(value);
    if (errors.checkIn || errors.dateRange) {
      setErrors(prev => ({ ...prev, checkIn: "", dateRange: "" }));
    }
  };

  const handleCheckOutChange = (value: string) => {
    setCheckOut(value);
    if (errors.checkOut || errors.dateRange) {
      setErrors(prev => ({ ...prev, checkOut: "", dateRange: "" }));
    }
  };

  return (
    <div className="relative z-20 -mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
          {/* Error banner for date range */}
          {errors.dateRange && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-red-700 text-sm font-medium">{errors.dateRange}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Location */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0d4747] focus:border-transparent outline-none text-gray-900 bg-white appearance-none ${
                    errors.city ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                >
                  <option value="">Where are you going?</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              {errors.city && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.city}
                </p>
              )}
            </div>

            {/* Check-in */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-in
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => handleCheckInChange(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0d4747] focus:border-transparent outline-none text-gray-900 ${
                    errors.checkIn ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                />
              </div>
              {errors.checkIn && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.checkIn}
                </p>
              )}
            </div>

            {/* Check-out */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-out
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => handleCheckOutChange(e.target.value)}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0d4747] focus:border-transparent outline-none text-gray-900 ${
                    errors.checkOut ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                />
              </div>
              {errors.checkOut && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.checkOut}
                </p>
              )}
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Guests
              </label>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d4747] focus:border-transparent outline-none text-gray-900 appearance-none bg-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6">
            <button
              onClick={handleSearch}
              disabled={isSubmitting}
              className={`w-full py-3 sm:py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg ${
                isSubmitting
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-[#0d4747] text-white hover:bg-[#0a3a3a] hover:shadow-xl transform hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </div>
              ) : (
                'Search'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
