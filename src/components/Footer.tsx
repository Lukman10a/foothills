import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0d4747] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo and Company Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              {/* Foothills Logo */}
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#0d4747] font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-light">Foothills</span>
              </div>
              <p className="text-sm opacity-80">BY MARRIOTT BONVOY</p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4 opacity-80">COMPANY</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">About Us</a></li>
                <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">News</a></li>
                <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">Careers</a></li>
                <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">Press</a></li>
                <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">Business and Groups</a></li>
                <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">Real Estate</a></li>
                <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">Corporate Responsibility</a></li>
                <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">Investor Relations</a></li>
                <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">Modern Slavery Act</a></li>
                <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">Biometrics Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Support Section */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold mb-4 opacity-80">SUPPORT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:opacity-80 transition-opacity duration-200">Help Center</a></li>
            </ul>
          </div>

          {/* Social and Language/Currency Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Social Media */}
              <div>
                <h3 className="text-sm font-semibold mb-4 opacity-80">SOCIAL</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Language and Currency */}
              <div className="space-y-6">
                {/* Language Selector */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 opacity-80">LANGUAGE</h3>
                  <div className="relative">
                    <select className="bg-transparent border border-white border-opacity-30 rounded-lg px-4 py-2 pr-8 text-white appearance-none cursor-pointer hover:border-opacity-50 transition-all duration-200">
                      <option value="en-US" className="text-black">English (US)</option>
                      <option value="es" className="text-black">Español</option>
                      <option value="fr" className="text-black">Français</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Currency Selector */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 opacity-80">CURRENCY</h3>
                  <div className="relative">
                    <select className="bg-transparent border border-white border-opacity-30 rounded-lg px-4 py-2 pr-8 text-white appearance-none cursor-pointer hover:border-opacity-50 transition-all duration-200">
                      <option value="USD" className="text-black">USD ($)</option>
                      <option value="EUR" className="text-black">EUR (€)</option>
                      <option value="GBP" className="text-black">GBP (£)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm opacity-80">
              © 2025 Foothills Holdings Inc. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <span className="opacity-80">+1 617-300-0956</span>
              <a href="#" className="hover:opacity-80 transition-opacity duration-200">Terms of Service</a>
              <a href="#" className="hover:opacity-80 transition-opacity duration-200">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 