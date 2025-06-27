import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CitiesSection from "../components/CitiesSection";
import AppFeaturesSection from "../components/AppFeaturesSection";
import MarriottBonvoySection from "../components/MarriottBonvoySection";
import TestimonialsSection from "../components/TestimonialsSection";
import StoriesSection from "../components/StoriesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CitiesSection />
      <AppFeaturesSection />
      <MarriottBonvoySection />
      <TestimonialsSection />
      <StoriesSection />
      <Footer />
    </div>
  );
} 