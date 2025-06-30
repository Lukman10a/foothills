import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HeroSearch from "../components/ui/heroSearch";
import CitiesSection from "../components/CitiesSection";
import AppFeaturesSection from "../components/AppFeaturesSection";
import MarriottBonvoySection from "../components/MarriottBonvoySection";
import TestimonialsSection from "../components/TestimonialsSection";
import StoriesSection from "../components/StoriesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Foothills - Premium Hospitality & Accommodation in Madinah | Book Your Stay</title>
        <meta name="title" content="Foothills - Premium Hospitality & Accommodation in Madinah | Book Your Stay" />
        <meta name="description" content="Experience luxury hospitality in Madinah with Foothills. Book premium accommodations, hotels, and suites near the Prophet's Mosque. Exclusive rates and world-class service." />
        <meta name="keywords" content="Madinah hotels, luxury accommodation, Prophet's Mosque, pilgrimage stay, premium hospitality, Saudi Arabia hotels, Islamic travel, Umrah accommodation" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Foothills Hospitality" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://foothills.com/" />
        <meta property="og:title" content="Foothills - Premium Hospitality & Accommodation in Madinah" />
        <meta property="og:description" content="Experience luxury hospitality in Madinah with Foothills. Book premium accommodations, hotels, and suites near the Prophet's Mosque." />
        <meta property="og:image" content="https://foothills.com/assets/madinah1.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Foothills" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://foothills.com/" />
        <meta property="twitter:title" content="Foothills - Premium Hospitality & Accommodation in Madinah" />
        <meta property="twitter:description" content="Experience luxury hospitality in Madinah with Foothills. Book premium accommodations, hotels, and suites near the Prophet's Mosque." />
        <meta property="twitter:image" content="https://foothills.com/assets/madinah1.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://foothills.com/" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2596be" />
        <meta name="msapplication-TileColor" content="#2596be" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Foothills",
              "description": "Premium hospitality and accommodation services in Madinah",
              "url": "https://foothills.com",
              "logo": "https://foothills.com/assets/foothills_logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-617-300-0956",
                "contactType": "customer service"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Al-Madinah Al-Munawwarah",
                "addressCountry": "SA"
              },
              "sameAs": [
                "https://twitter.com/foothills",
                "https://instagram.com/foothills",
                "https://facebook.com/foothills"
              ]
            })
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Foothills",
              "url": "https://foothills.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://foothills.com/search?city={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Structured Data - Lodging Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Foothills Madinah",
              "description": "Premium hospitality and accommodation in Madinah",
              "url": "https://foothills.com",
              "telephone": "+1-617-300-0956",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Al-Madinah Al-Munawwarah",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "24.4539",
                "longitude": "39.6034"
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "WiFi",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Air conditioning",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Room service",
                  "value": true
                }
              ],
              "starRating": {
                "@type": "Rating",
                "ratingValue": "5"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <HeroSearch />
        <CitiesSection />
        <AppFeaturesSection />
        <MarriottBonvoySection />
        <TestimonialsSection />
        <StoriesSection />
        <Footer />
      </div>
    </>
  );
} 