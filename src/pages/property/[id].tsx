import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
  fullDescription: string;
  amenities: string[];
  address: string;
  checkInTime: string;
  checkOutTime: string;
  policies: string[];
  reviews: Review[];
}

interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

// Extended property data for detail pages
const propertyData: { [key: string]: Property } = {
  '1': {
    id: '1',
    name: 'Park House Hotel Museum Quarter, Sonder',
    rating: 2.5,
    reviewCount: 12,
    distance: '1.2 mi from destination',
    description: 'Stylish rooms and suites. Walk to PC Hooftstraat, Rijksmuseum, the city center, and more.',
    fullDescription: 'Experience the perfect blend of comfort and culture at Park House Hotel. Located in Amsterdam\'s prestigious Museum Quarter, this boutique property offers sophisticated accommodations just steps from world-renowned museums and upscale shopping. Each thoughtfully designed room features modern amenities, premium bedding, and contemporary Dutch design elements. The hotel\'s prime location provides easy access to the Rijksmuseum, Van Gogh Museum, and the luxury shopping district of PC Hooftstraat.',
    images: ['/assets/hotel1.jpeg', '/assets/hotel2.jpeg', '/assets/hotel3.jpeg', '/assets/hero1.webp', '/assets/room1.jpeg', '/assets/room2.jpeg'],
    isNew: true,
    brand: 'Sonder',
    category: 'Hotel',
    price: 189,
    amenities: [
      'Free WiFi',
      'Air Conditioning',
      'Smart TV',
      '24/7 Digital Check-in',
      'Kitchen Facilities',
      'Workspace',
      'Laundry Facilities',
      'Fitness Center',
      'Concierge Service',
      'Pet Friendly',
      'Parking Available',
      'Business Center'
    ],
    address: 'Museum Quarter, Amsterdam, Netherlands',
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
    policies: [
      'No smoking policy',
      'Pets allowed with additional fee',
      'Minimum age for check-in: 18',
      'Credit card required for incidentals',
      'Cancellation policy: 24 hours before arrival'
    ],
    reviews: [
      {
        id: '1',
        userName: 'Sarah M.',
        rating: 5,
        date: '2024-12-15',
        comment: 'Absolutely loved my stay! The location is perfect for exploring Amsterdam\'s museums. The room was modern, clean, and had everything I needed. The digital check-in process was seamless.'
      },
      {
        id: '2',
        userName: 'Michael R.',
        rating: 4,
        date: '2024-12-10',
        comment: 'Great hotel in an excellent location. Walking distance to major attractions. The room was spacious and well-designed. Only minor issue was the WiFi speed, but overall a fantastic experience.'
      },
      {
        id: '3',
        userName: 'Emma L.',
        rating: 5,
        date: '2024-12-05',
        comment: 'Perfect for a cultural trip to Amsterdam. The hotel is literally surrounded by museums and great restaurants. Staff was helpful and the amenities exceeded expectations.'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'The Middelland Hotel, Sonder',
    rating: 2.7,
    reviewCount: 3,
    distance: '36.6 mi from destination',
    description: 'Boutique rooms with self check-in near many cafes. Check out Museum Rotterdam, one kilometer away.',
    fullDescription: 'Discover Rotterdam\'s vibrant culture at The Middelland Hotel, a contemporary boutique property in the heart of the city\'s creative district. This modern hotel combines industrial design with comfort, offering guests a unique urban experience. Located near trendy cafes, art galleries, and the iconic Museum Rotterdam, it\'s the perfect base for exploring the city\'s innovative architecture and dynamic cultural scene.',
    images: ['/assets/room1.jpeg', '/assets/room2.jpeg', '/assets/room3.jpeg', '/assets/london.webp', '/assets/hotel1.jpeg', '/assets/room4.jpeg'],
    isNew: true,
    brand: 'Sonder',
    category: 'Room',
    price: 156,
    amenities: [
      'Free WiFi',
      'Air Conditioning',
      'Smart TV',
      'Self Check-in',
      'Kitchenette',
      'Work Desk',
      'Coffee Machine',
      'City Views',
      'Bicycle Rental',
      'Luggage Storage'
    ],
    address: 'Middelland District, Rotterdam, Netherlands',
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
    policies: [
      'No smoking policy',
      'No pets allowed',
      'Minimum age for check-in: 18',
      'Credit card required for security deposit',
      'Free cancellation up to 48 hours before arrival'
    ],
    reviews: [
      {
        id: '1',
        userName: 'David K.',
        rating: 4,
        date: '2024-12-12',
        comment: 'Modern and stylish room in a great location. The self check-in was convenient and the area has lots of interesting cafes and shops nearby.'
      },
      {
        id: '2',
        userName: 'Lisa P.',
        rating: 3,
        date: '2024-12-08',
        comment: 'Decent stay overall. The room was clean and the location was good for exploring Rotterdam. Some minor maintenance issues but nothing major.'
      }
    ]
  },
  // Add more properties as needed...
};

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  });
  const [showBookingWidget, setShowBookingWidget] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (id && typeof id === 'string') {
      const propertyDetails = propertyData[id];
      if (propertyDetails) {
        setProperty(propertyDetails);
      } else {
        // Property not found, redirect to search
        router.push('/search');
      }
    }
  }, [id, router]);

  const nextImage = () => {
    if (property) {
      setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    }
  };

  const prevImage = () => {
    if (property) {
      setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    }
  };

  const handleBookNow = () => {
    setShowBookingWidget(true);
  };

  const handleBookingSubmit = () => {
    // Route to booking page with property and date details
    const bookingParams = new URLSearchParams({
      propertyId: property?.id || '',
      checkIn: selectedDate.checkIn,
      checkOut: selectedDate.checkOut,
      guests: selectedDate.guests.toString(),
      price: property?.price.toString() || ''
    });
    router.push(`/booking?${bookingParams.toString()}`);
  };

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading property details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{property.name} - Book Your Stay | Foothills</title>
        <meta name="description" content={`${property.description} Starting from $${property.price}/night. Book now for the best rates.`} />
        <meta name="keywords" content={`${property.name}, ${property.category}, ${property.address}, hotel booking, accommodation`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${property.name} - Book Your Stay | Foothills`} />
        <meta property="og:description" content={`${property.description} Starting from $${property.price}/night.`} />
        <meta property="og:image" content={`https://foothills.com${property.images[0]}`} />
        <meta property="og:url" content={`https://foothills.com/property/${property.id}`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": property.name,
              "description": property.fullDescription,
              "image": property.images.map(img => `https://foothills.com${img}`),
              "address": {
                "@type": "PostalAddress",
                "streetAddress": property.address
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": property.rating,
                "reviewCount": property.reviewCount
              },
              "priceRange": `$${property.price}`,
              "amenityFeature": property.amenities.map(amenity => ({
                "@type": "LocationFeatureSpecification",
                "name": amenity
              }))
            })
          }}
        />
      </Head>

      <Navbar />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-brand-primary hover:underline">Home</Link>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link href="/search" className="text-brand-primary hover:underline">Search Results</Link>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">{property.name}</span>
            </nav>
          </div>
        </div>

        {/* Property Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {property.isNew && (
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                    NEW
                  </span>
                )}
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                  {property.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
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
              </div>
              
              <p className="text-gray-600 mb-4">{property.address}</p>
            </div>

            {/* Price and Book Button */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-gray-900">${property.price}</div>
                  <div className="text-gray-600">per night</div>
                </div>
                
                <button
                  onClick={handleBookNow}
                  className="w-full bg-brand-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors duration-200"
                >
                  Book Now
                </button>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  Free cancellation • No booking fees
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={property.images[currentImageIndex]}
              alt={property.name}
              fill
              className="object-cover"
            />
            
            {/* Navigation Arrows */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200 shadow-lg"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200 shadow-lg"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {property.images.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-4 grid grid-cols-6 gap-2">
            {property.images.slice(0, 6).map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentImageIndex ? 'border-brand-primary' : 'border-transparent'
                }`}
              >
                <Image
                  src={image}
                  alt={`${property.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'amenities', label: 'Amenities' },
                { id: 'policies', label: 'Policies' },
                { id: 'reviews', label: 'Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-brand-primary text-brand-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="pb-12">
            {activeTab === 'overview' && (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{property.fullDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Check-in/Check-out</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-in:</span>
                        <span className="font-medium">{property.checkInTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-out:</span>
                        <span className="font-medium">{property.checkOutTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Info</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Type:</span>
                        <span className="font-medium">{property.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Brand:</span>
                        <span className="font-medium">{property.brand}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'amenities' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-900">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'policies' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Policies & Important Information</h2>
                <div className="space-y-4">
                  {property.policies.map((policy, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-900">{policy}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Reviews</h2>
                <div className="space-y-6">
                  {property.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {review.userName.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{review.userName}</h4>
                            <p className="text-sm text-gray-600">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Booking Widget Modal */}
        {showBookingWidget && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Book Your Stay</h3>
                <button
                  onClick={() => setShowBookingWidget(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                  <input
                    type="date"
                    value={selectedDate.checkIn}
                    onChange={(e) => setSelectedDate(prev => ({ ...prev, checkIn: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                  <input
                    type="date"
                    value={selectedDate.checkOut}
                    onChange={(e) => setSelectedDate(prev => ({ ...prev, checkOut: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    min={selectedDate.checkIn || new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <select
                    value={selectedDate.guests}
                    onChange={(e) => setSelectedDate(prev => ({ ...prev, guests: Number(e.target.value) }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total: ${property.price}/night</span>
                  </div>
                  
                  <button
                    onClick={handleBookingSubmit}
                    disabled={!selectedDate.checkIn || !selectedDate.checkOut}
                    className="w-full bg-brand-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Continue to Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
} 