// import React, { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

// Newsletter Signup Component
// const NewsletterSignup = () => {
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState(false);

//   const validateEmail = (email: string) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email.trim()) {
//       setMessage("Please enter your email address");
//       setIsSuccess(false);
//       return;
//     }

//     if (!validateEmail(email)) {
//       setMessage("Please enter a valid email address");
//       setIsSuccess(false);
//       return;
//     }

//     setIsSubmitting(true);
//     setMessage("");

//     try {
//       // Simulate API call - replace with actual newsletter service
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       console.log("Newsletter signup:", email);
//       setMessage("Thank you for subscribing! Check your email for confirmation.");
//       setIsSuccess(true);
//       setEmail("");
//     } catch (error) {
//       console.error("Newsletter signup error:", error);
//       setMessage("Something went wrong. Please try again later.");
//       setIsSuccess(false);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
//       <div className="flex-1">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email address"
//           className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-200"
//           disabled={isSubmitting}
//         />
//         {message && (
//           <p className={`mt-2 text-sm ${isSuccess ? 'text-white' : 'text-black'}`}>
//             {message}
//           </p>
//         )}
//       </div>
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
//           isSubmitting
//             ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
//             : 'bg-white text-brand-primary hover:bg-gray-100 hover:shadow-lg transform hover:scale-105'
//         }`}
//       >
//         {isSubmitting ? (
//           <div className="flex items-center">
//             <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Subscribing...
//           </div>
//         ) : (
//           'Subscribe'
//         )}
//       </button>
//     </form>
//   );
// };

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
                  <span className="text-brand-primary font-bold text-lg">
                    F
                  </span>
                </div>
                <span className="text-2xl font-light">Foothills</span>
              </div>
              <p className="text-sm opacity-80">MADINAH • BY MARRIOTT BONVOY</p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4 opacity-80">COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                  >
                    Business and Groups
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                  >
                    Real Estate
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                  >
                    Corporate Responsibility
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                  >
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                  >
                    Biometrics Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Section */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold mb-4 opacity-80">SUPPORT</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:opacity-80 transition-opacity duration-200"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Social and Language/Currency Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Social Media */}
              <div>
                <h3 className="text-sm font-semibold mb-4 opacity-80">
                  SOCIAL
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-105 transition-all duration-200 group"
                  >
                    <FaTwitter className="w-5 h-5 group-hover:text-blue-300 transition-colors duration-200" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-105 transition-all duration-200 group"
                  >
                    <FaInstagram className="w-5 h-5 group-hover:text-pink-300 transition-colors duration-200" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-105 transition-all duration-200 group"
                  >
                    <FaFacebookF className="w-5 h-5 group-hover:text-blue-300 transition-colors duration-200" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-105 transition-all duration-200 group"
                  >
                    <FaLinkedinIn className="w-5 h-5 group-hover:text-blue-200 transition-colors duration-200" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 hover:scale-105 transition-all duration-200 group"
                  >
                    <FaYoutube className="w-5 h-5 group-hover:text-red-300 transition-colors duration-200" />
                  </a>
                </div>
              </div>

              {/* Language and Currency */}
              <div className="space-y-6">
                {/* Language Selector */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 opacity-80">
                    LANGUAGE
                  </h3>
                  <div className="relative">
                    <select className="bg-transparent border border-white border-opacity-30 rounded-lg px-4 py-2 pr-8 text-white appearance-none cursor-pointer hover:border-opacity-50 transition-all duration-200">
                      <option value="en-US" className="text-black">
                        English (US)
                      </option>
                      <option value="es" className="text-black">
                        Arabic (Saudi)
                      </option>
                      <option value="es" className="text-black">
                        Español
                      </option>
                      <option value="fr" className="text-black">
                        Français
                      </option>
                    </select>
                  </div>
                </div>

                {/* Currency Selector */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 opacity-80">
                    CURRENCY
                  </h3>
                  <div className="relative">
                    <select className="bg-transparent border border-white border-opacity-30 rounded-lg px-4 py-2 pr-8 text-white appearance-none cursor-pointer hover:border-opacity-50 transition-all duration-200">
                      <option value="USD" className="text-black">
                        USD ($)
                      </option>
                      <option value="EUR" className="text-black">
                        EUR (€)
                      </option>
                      <option value="GBP" className="text-black">
                        GBP (£)
                      </option>
                    </select>
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
              <a
                href="#"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mb-12 sm:mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">Stay in the Know</h2>
            <p className="text-white text-opacity-80 mb-6">
              Get the latest updates on new properties, exclusive deals, and travel inspiration delivered to your inbox.
            </p>
            <NewsletterSignup />
          </div>
        </div> */}
      </div>
    </footer>
  );
}
