import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Property {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  distance: string;
  description: string;
  images: string[];
  isNew?: boolean;
  brand: string;
  category: string;
  price: number;
}

// Enhanced property data with multiple images
const allProperties: Property[] = [
  {
    id: '1',
    name: 'Park House Hotel Museum Quarter, Sonder',
    rating: 2.5,
    reviewCount: 12,
    distance: '1.2 mi from destination',
    description: 'Stylish rooms and suites. Walk to PC Hooftstraat, Rijksmuseum, the city center, and more.',
    images: ['/assets/hotel1.jpeg', '/assets/hotel2.jpeg', '/assets/hotel3.jpeg', '/assets/hero1.webp'],
    isNew: true,
    brand: 'Sonder',
    category: 'Hotel',
    price: 189
  },
  {
    id: '2',
    name: 'The Middelland Hotel, Sonder',
    rating: 2.7,
    reviewCount: 3,
    distance: '36.6 mi from destination',
    description: 'Boutique rooms with self check-in near many cafes. Check out Museum Rotterdam, one kilometer away.',
    images: ['/assets/room1.jpeg', '/assets/room2.jpeg', '/assets/room3.jpeg', '/assets/london.webp'],
    isNew: true,
    brand: 'Sonder',
    category: 'Room',
    price: 156
  },
  {
    id: '3',
    name: 'Foothills Madinah Resort, Sonder',
    rating: 4.2,
    reviewCount: 28,
    distance: '0.8 mi from destination',
    description: 'Premium accommodations near the Prophet&apos;s Mosque. Experience spiritual comfort with modern amenities.',
    images: ['/assets/madinah1.jpg', '/assets/madinah2.jpg', '/assets/hotel1.jpeg', '/assets/room4.jpeg'],
    isNew: false,
    brand: 'Sonder',
    category: 'Resort',
    price: 245
  },
  {
    id: '4',
    name: 'Executive Suite Amsterdam Central',
    rating: 4.1,
    reviewCount: 45,
    distance: '0.5 mi from destination',
    description: 'Luxury executive suites with panoramic city views. Perfect for business travelers and extended stays.',
    images: ['/assets/room2.jpeg', '/assets/room3.jpeg', '/assets/room4.jpeg', '/assets/hotel2.jpeg'],
    isNew: false,
    brand: 'Sonder',
    category: 'Suite',
    price: 298
  },
  {
    id: '5',
    name: 'Amsterdam Boutique Rooms',
    rating: 3.8,
    reviewCount: 67,
    distance: '2.1 mi from destination',
    description: 'Cozy boutique rooms in the heart of Amsterdam. Walking distance to major attractions and dining.',
    images: ['/assets/room1.jpeg', '/assets/room4.jpeg', '/assets/hotel3.jpeg', '/assets/hero2.webp'],
    isNew: true,
    brand: 'Sonder',
    category: 'Room',
    price: 134
  },
  {
    id: '6',
    name: 'Grand Amsterdam Hotel & Spa',
    rating: 4.5,
    reviewCount: 89,
    distance: '1.8 mi from destination',
    description: 'Luxury hotel with full-service spa, rooftop dining, and premium amenities in prime location.',
    images: ['/assets/hotel2.jpeg', '/assets/hotel1.jpeg', '/assets/room2.jpeg', '/assets/hero3.webp'],
    isNew: false,
    brand: 'Sonder',
    category: 'Hotel',
    price: 367
  }
];

const categories = ['All', 'Hotel', 'Room', 'Suite', 'Resort'];

export default function SearchResults() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    city: 'Amsterdam, Netherlands',
    checkIn: 'June 2025',
    checkOut: '',
    guests: 1
  });
  const [properties, setProperties] = useState<Property[]>(allProperties);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Distance');
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});
  const [showMapView, setShowMapView] = useState(false);

  useEffect(() => {
    // Parse URL parameters when component mounts
    const { city, checkIn, checkOut, guests } = router.query;
    if (city || checkIn || checkOut || guests) {
      setSearchParams({
        city: (city as string) || 'Amsterdam, Netherlands',
        checkIn: (checkIn as string) || 'June 2025',
        checkOut: (checkOut as string) || '',
        guests: parseInt(guests as string) || 1
      });
    }
  }, [router.query]);

  useEffect(() => {
    // Filter properties by category
    const filteredProperties = selectedCategory === 'All' 
      ? [...allProperties] 
      : allProperties.filter(property => property.category === selectedCategory);

    // Apply sorting
    switch (sortBy) {
      case 'Price: Low to High':
        filteredProperties.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filteredProperties.sort((a, b) => b.price - a.price);
        break;
      case 'Rating':
        filteredProperties.sort((a, b) => b.rating - a.rating);
        break;
      case 'Distance':
      default:
        // Keep original order for distance
        break;
    }

    setProperties(filteredProperties);
  }, [selectedCategory, sortBy]);

  const handleUpdateSearch = () => {
    console.log('Update search clicked', searchParams);
    // You can implement search logic here
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
  };

  const nextImage = (propertyId: string, imageCount: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) + 1) % imageCount
    }));
  };

  const prevImage = (propertyId: string, imageCount: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) - 1 + imageCount) % imageCount
    }));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200 sticky top-16 sm:top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    DESTINATION
                  </div>
                  <input
                    type="text"
                    value={searchParams.city}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, city: e.target.value }))}
                    className="text-lg font-semibold text-gray-900 bg-transparent border-none outline-none w-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    DATES (1 NIGHT)
                  </div>
                  <input
                    type="text"
                    value={searchParams.checkIn}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, checkIn: e.target.value }))}
                    className="text-lg font-semibold text-gray-900 bg-transparent border-none outline-none w-full"
                  />
                </div>
              </div>
              <button 
                onClick={handleUpdateSearch}
                className="bg-white border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
              >
                Update Search
              </button>
            </div>
            
            {/* Secondary Options */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <span className="text-sm text-gray-600 mr-2">ROOMS & GUESTS</span>
                  <select className="text-gray-900 font-medium bg-transparent border-none outline-none">
                    <option>1 Room, 1 Guest</option>
                    <option>1 Room, 2 Guests</option>
                    <option>2 Rooms, 2 Guests</option>
                  </select>
                </div>
                <div>
                  <span className="text-sm text-gray-600 mr-2">SPECIAL RATES</span>
                  <select className="text-gray-900 font-medium bg-transparent border-none outline-none">
                    <option>Lowest Regular Rate</option>
                    <option>Government Rate</option>
                    <option>Senior Rate</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="usePoints" className="mr-2" />
                <label htmlFor="usePoints" className="text-gray-900 font-medium">
                  Use Points/Awards
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {!showMapView ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Filters */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="space-y-4">
                  {/* Category Filters */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Property Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => handleCategoryFilter(category)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedCategory === category
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Other Filters */}
                  <div className="flex flex-wrap gap-2">
                    <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      Amenities
                    </button>
                    <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      Brands
                    </button>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Pet Friendly (1)
                    </button>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h1 className="text-xl font-semibold text-gray-900">
                    1 - {properties.length} of {properties.length} Results
                  </h1>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">Sort by:</span>
                    <select 
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="text-gray-900 font-medium bg-transparent border-none outline-none"
                    >
                      <option>Distance</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating</option>
                    </select>
                  </div>
                </div>

                {/* Property Cards */}
                <div className="space-y-6">
                  {properties.map((property) => {
                    const currentIndex = currentImageIndex[property.id] || 0;
                    return (
                      <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 relative">
                            <Image 
                              src={property.images[currentIndex]} 
                              alt={property.name} 
                              width={400} 
                              height={256} 
                              className="w-full h-64 object-cover" 
                            />
                            {property.isNew && (
                              <div className="absolute top-4 left-4 bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                                NEW
                              </div>
                            )}
                            
                            {/* Navigation Arrows */}
                            {property.images.length > 1 && (
                              <>
                                <button
                                  onClick={() => prevImage(property.id, property.images.length)}
                                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                                >
                                  <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => nextImage(property.id, property.images.length)}
                                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                                >
                                  <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                              </>
                            )}
                            
                            {/* Image Dots */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                              {property.images.map((_, index) => (
                                <div
                                  key={index}
                                  className={`w-2 h-2 rounded-full ${
                                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                                  }`}
                                />
                              ))}
                            </div>
                            
                            {/* Sonder Logo */}
                            <div className="absolute bottom-4 left-4 text-white">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center mr-2">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <span className="text-sm font-medium">{property.brand}</span>
                              </div>
                            </div>
                          </div>
                          <div className="md:w-2/3 p-6 flex flex-col justify-between">
                            <div>
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 sm:mb-0">
                                  {property.name}
                                </h3>
                                <div className="flex flex-col items-start sm:items-end">
                                  <div className="text-2xl font-bold text-gray-900 mb-1">
                                    ${property.price}
                                  </div>
                                  <Link href={`/property/${property.id}`}>
                                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
                                      View Rates
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              <div className="flex items-center mb-3">
                                <div className="flex items-center mr-4">
                                  <span className="text-yellow-400 mr-1">★</span>
                                  <span className="font-medium text-gray-900">{property.rating}</span>
                                  <span className="text-gray-600 ml-1">({property.reviewCount} reviews)</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-sm">{property.distance}</span>
                                </div>
                                <div className="ml-4 px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700">
                                  {property.category}
                                </div>
                              </div>
                              <p className="text-gray-700 mb-4">
                                {property.description}
                              </p>
                              <Link href={`/property/${property.id}`} className="text-gray-900 font-medium hover:underline flex items-center">
                                View Details
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[calc(100vh-12rem)] flex flex-col">
            {/* Top Filters Bar */}
            <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryFilter(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                    Amenities
                  </button>
                  <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                    Brands
                  </button>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Pet Friendly (1)
                  </button>
                </div>
              </div>
            </div>

            {/* Map View Content */}
            <div className="flex-1 flex">
              {/* Left Panel - Property List */}
              <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
                {/* Results Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {properties.length} Properties
                    </h2>
                    <select 
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="text-sm text-gray-900 font-medium bg-transparent border border-gray-200 rounded-lg px-3 py-1 outline-none"
                    >
                      <option>Distance</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating</option>
                    </select>
                  </div>
                  <p className="text-sm text-gray-600">Amsterdam, Netherlands</p>
                </div>

                {/* Scrollable Property Cards */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-4">
                    {properties.map((property) => {
                      const currentIndex = currentImageIndex[property.id] || 0;
                      return (
                        <Link key={property.id} href={`/property/${property.id}`} className="block">
                          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                            <div className="relative">
                              <Image 
                                src={property.images[currentIndex]} 
                                alt={property.name} 
                                width={300} 
                                height={200} 
                                className="w-full h-48 object-cover" 
                              />
                              {property.isNew && (
                                <div className="absolute top-3 left-3 bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                                  NEW
                                </div>
                              )}
                              <div className="absolute top-3 right-3 text-white">
                                <div className="bg-black bg-opacity-60 px-2 py-1 rounded text-sm font-medium">
                                  ${property.price}
                                </div>
                              </div>
                              
                              {/* Navigation Arrows */}
                              {property.images.length > 1 && (
                                <>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      prevImage(property.id, property.images.length);
                                    }}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 transition-all duration-200"
                                  >
                                    <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      nextImage(property.id, property.images.length);
                                    }}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 transition-all duration-200"
                                  >
                                    <svg className="w-3 h-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </>
                              )}
                              
                              {/* Image Dots */}
                              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                                {property.images.map((_, index) => (
                                  <div
                                    key={index}
                                    className={`w-1.5 h-1.5 rounded-full ${
                                      index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            
                            <div className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                                  {property.name}
                                </h3>
                              </div>
                              <div className="flex items-center mb-2">
                                <div className="flex items-center mr-3">
                                  <span className="text-yellow-400 mr-1 text-xs">★</span>
                                  <span className="font-medium text-gray-900 text-xs">{property.rating}</span>
                                  <span className="text-gray-600 text-xs ml-1">({property.reviewCount})</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-xs">{property.distance}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                                {property.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700">
                                  {property.category}
                                </span>
                                <span className="text-gray-900 text-xs font-medium hover:underline">
                                  View Details
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Panel - Large Map */}
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                  {/* Map Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-24 h-24 mx-auto text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map View</h3>
                      <p className="text-gray-500 text-sm mb-4">Full map integration coming soon</p>
                      <div className="bg-white rounded-lg p-4 inline-block shadow-sm">
                        <p className="text-xs text-gray-600">This will show a real interactive map with:</p>
                        <ul className="text-xs text-gray-500 mt-2 space-y-1">
                          <li>• Property locations and prices</li>
                          <li>• Zoom and pan functionality</li>
                          <li>• Clickable property markers</li>
                          <li>• Real-time search area updates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Property Markers */}
                  <div className="absolute inset-0">
                    {properties.map((property, index) => {
                      const positions = [
                        { top: '25%', left: '30%' },
                        { top: '45%', left: '55%' },
                        { top: '65%', left: '25%' },
                        { top: '35%', left: '70%' },
                        { top: '55%', left: '40%' },
                        { top: '75%', left: '60%' }
                      ];
                      const position = positions[index % positions.length];
                      
                      return (
                        <Link 
                          key={property.id}
                          href={`/property/${property.id}`}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2"
                          style={{ top: position.top, left: position.left }}
                        >
                          <div className="bg-white rounded-lg shadow-xl border border-gray-200 px-3 py-2 cursor-pointer hover:shadow-2xl transition-all duration-200 hover:scale-105">
                            <div className="text-sm font-bold text-gray-900">${property.price}</div>
                            <div className="text-xs text-gray-600">{property.category}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <button className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                  <button className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fixed Map Button - List View */}
        {!showMapView && (
          <button 
            onClick={() => setShowMapView(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center bg-gray-900 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
            </svg>
            Map
          </button>
        )}

        {/* Fixed List Button - Map View */}
        {showMapView && (
          <button 
            onClick={() => setShowMapView(false)}
            className="fixed bottom-6 right-6 z-50 flex items-center bg-gray-900 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            List
          </button>
        )}
      </div>
      <Footer />
    </>
  );
} 