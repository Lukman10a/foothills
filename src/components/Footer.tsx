import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo and Company Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              {/* Foothills Logo */}
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-primary font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-light">Foothills</span>
              </div>
              <p className="text-sm opacity-80">MADINAH • BY MARRIOTT BONVOY</p>
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
                  <a href="#" className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-105 transition-all duration-200 group">
                    <FaTwitter className="w-5 h-5 group-hover:text-blue-300 transition-colors duration-200" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-105 transition-all duration-200 group">
                    <FaInstagram className="w-5 h-5 group-hover:text-pink-300 transition-colors duration-200" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-105 transition-all duration-200 group">
                    <FaFacebookF className="w-5 h-5 group-hover:text-blue-300 transition-colors duration-200" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-105 transition-all duration-200 group">
                    <FaLinkedinIn className="w-5 h-5 group-hover:text-blue-200 transition-colors duration-200" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-105 transition-all duration-200 group">
                    <FaYoutube className="w-5 h-5 group-hover:text-red-300 transition-colors duration-200" />
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
                      <option value="es" className="text-black">Arabic (Saudi)</option>
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