const HeroSearch = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Location */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d4747] focus:border-transparent outline-none text-gray-900"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
          </div>

          {/* Check-in */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-in
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d4747] focus:border-transparent outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check-out
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d4747] focus:border-transparent outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Guests
            </label>
            <div className="relative">
              <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d4747] focus:border-transparent outline-none text-gray-900 appearance-none">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
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
          <button className="w-full bg-[#0d4747] text-white py-3 sm:py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#0a3a3a] transition-colors duration-200 shadow-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
