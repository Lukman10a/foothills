import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface BookingDetails {
  propertyId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  price: number;
}

interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

interface PropertyData {
  id: string;
  name: string;
  images: string[];
  address: string;
  category: string;
  amenities: string[];
}

// Mock property data for booking
const propertyData: { [key: string]: PropertyData } = {
  '1': {
    id: '1',
    name: 'Park House Hotel Museum Quarter, Sonder',
    images: ['/assets/hotel1.jpeg'],
    address: 'Museum Quarter, Amsterdam, Netherlands',
    category: 'Hotel',
    amenities: ['Free WiFi', 'Air Conditioning', 'Kitchen Facilities', 'Workspace']
  },
  '2': {
    id: '2',
    name: 'The Middelland Hotel, Sonder',
    images: ['/assets/room1.jpeg'],
    address: 'Middelland District, Rotterdam, Netherlands',
    category: 'Room',
    amenities: ['Free WiFi', 'Air Conditioning', 'Kitchenette', 'Work Desk']
  }
};

export default function BookingPage() {
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [property, setProperty] = useState<PropertyData | null>(null);
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    // Parse URL parameters
    const { propertyId, checkIn, checkOut, guests, price } = router.query;
    
    if (propertyId && checkIn && checkOut && guests && price) {
      const details: BookingDetails = {
        propertyId: propertyId as string,
        checkIn: checkIn as string,
        checkOut: checkOut as string,
        guests: parseInt(guests as string),
        price: parseFloat(price as string)
      };
      setBookingDetails(details);
      
      // Get property details
      const propertyDetails = propertyData[propertyId as string];
      if (propertyDetails) {
        setProperty(propertyDetails);
      }
    }
  }, [router.query]);

  const calculateNights = () => {
    if (!bookingDetails) return 0;
    const checkIn = new Date(bookingDetails.checkIn);
    const checkOut = new Date(bookingDetails.checkOut);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const calculateTotal = () => {
    if (!bookingDetails) return 0;
    const nights = calculateNights();
    const subtotal = bookingDetails.price * nights;
    const taxes = subtotal * 0.12; // 12% tax
    const serviceFee = 25;
    return subtotal + taxes + serviceFee;
  };

  const handleGuestInfoChange = (field: keyof GuestInfo, value: string) => {
    setGuestInfo(prev => ({ ...prev, [field]: value }));
  };

  const validateGuestInfo = () => {
    return guestInfo.firstName && guestInfo.lastName && guestInfo.email && guestInfo.phone;
  };

  const handleBookingSubmit = async () => {
    setIsProcessing(true);
    
    // Simulate booking process
    setTimeout(() => {
      const newBookingId = 'FH' + Math.random().toString(36).substr(2, 9).toUpperCase();
      setBookingId(newBookingId);
      setBookingConfirmed(true);
      setIsProcessing(false);
    }, 3000);
  };

  if (!bookingDetails || !property) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading booking details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (bookingConfirmed) {
    return (
      <>
        <Head>
          <title>Booking Confirmed - Foothills</title>
        </Head>
        <Navbar />
        
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
              <p className="text-gray-600 mb-6">
                Your reservation has been successfully confirmed. You&apos;ll receive a confirmation email shortly.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Booking Details</h3>
                    <p className="text-sm text-gray-600">Booking ID: <span className="font-medium">{bookingId}</span></p>
                    <p className="text-sm text-gray-600">Property: <span className="font-medium">{property.name}</span></p>
                    <p className="text-sm text-gray-600">Check-in: <span className="font-medium">{new Date(bookingDetails.checkIn).toLocaleDateString()}</span></p>
                    <p className="text-sm text-gray-600">Check-out: <span className="font-medium">{new Date(bookingDetails.checkOut).toLocaleDateString()}</span></p>
                    <p className="text-sm text-gray-600">Guests: <span className="font-medium">{bookingDetails.guests}</span></p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Guest Information</h3>
                    <p className="text-sm text-gray-600">Name: <span className="font-medium">{guestInfo.firstName} {guestInfo.lastName}</span></p>
                    <p className="text-sm text-gray-600">Email: <span className="font-medium">{guestInfo.email}</span></p>
                    <p className="text-sm text-gray-600">Phone: <span className="font-medium">{guestInfo.phone}</span></p>
                    <p className="text-sm text-gray-600">Total Paid: <span className="font-medium">${calculateTotal().toFixed(2)}</span></p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors">
                  Back to Home
                </Link>
                <Link href="/search" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Search More Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </>
    );
  }

  const nights = calculateNights();
  const subtotal = bookingDetails.price * nights;
  const taxes = subtotal * 0.12;
  const serviceFee = 25;
  const total = calculateTotal();

  return (
    <>
      <Head>
        <title>Complete Your Booking - {property.name} | Foothills</title>
        <meta name="description" content={`Complete your booking for ${property.name}. Secure checkout with instant confirmation.`} />
      </Head>

      <Navbar />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      value={guestInfo.firstName}
                      onChange={(e) => handleGuestInfoChange('firstName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={guestInfo.lastName}
                      onChange={(e) => handleGuestInfoChange('lastName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={guestInfo.email}
                      onChange={(e) => handleGuestInfoChange('email', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={guestInfo.phone}
                      onChange={(e) => handleGuestInfoChange('phone', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                  <textarea
                    value={guestInfo.specialRequests}
                    onChange={(e) => handleGuestInfoChange('specialRequests', e.target.value)}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Any special requests or requirements..."
                  />
                </div>
                
                <div className="mt-8">
                  <button
                    onClick={handleBookingSubmit}
                    disabled={!validateGuestInfo() || isProcessing}
                    className="w-full bg-brand-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      `Complete Booking - $${total.toFixed(2)}`
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
                
                <div className="flex items-start space-x-4 mb-6">
                  <Image
                    src={property.images[0]}
                    alt={property.name}
                    width={80}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{property.name}</h4>
                    <p className="text-gray-600 text-xs">{property.address}</p>
                    <p className="text-gray-600 text-xs">{property.category}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-medium">{new Date(bookingDetails.checkIn).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Check-out:</span>
                    <span className="font-medium">{new Date(bookingDetails.checkOut).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Guests:</span>
                    <span className="font-medium">{bookingDetails.guests}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Nights:</span>
                    <span className="font-medium">{nights}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">${bookingDetails.price} × {nights} nights</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Taxes</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">What&apos;s included:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {property.amenities.slice(0, 4).map((amenity: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
} 