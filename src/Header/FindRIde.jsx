import React, { useState, useEffect } from 'react';
import './FindRide.css';
import PreBookSection from './PreBookSection';
import FindRideSection from './FindRideSection';
import DriversList from './DriversList';
// import BookingConfirmation from './BookingConfirmation';

const FindRide = () => {
  const [activeView, setActiveView] = useState('home');
  const [bookingData, setBookingData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    passengers: 1,
    luggage: 'no',
    luggageQuantity: 0,
    vehicleType: 'sedan',
    customerName: '',
    customerPhone: '',
    customerEmail: ''
  });
  const [estimatedFare, setEstimatedFare] = useState(0);
  const [availableDrivers, setAvailableDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);

  // Mock drivers data
  const mockDrivers = [
    {
      id: 1,
      name: 'Michael Johnson',
      rating: 4.9,
      seats: 4,
      vehicleType: 'sedan',
      carModel: 'Toyota Camry',
      price: 45,
      location: 'Downtown',
      arrivalTime: '5 mins'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      rating: 4.7,
      seats: 4,
      vehicleType: 'sedan',
      carModel: 'Honda Accord',
      price: 42,
      location: 'City Center',
      arrivalTime: '8 mins'
    },
    {
      id: 3,
      name: 'David Brown',
      rating: 4.8,
      seats: 6,
      vehicleType: 'suv',
      carModel: 'Toyota RAV4',
      price: 55,
      location: 'North Side',
      arrivalTime: '12 mins'
    },
    {
      id: 4,
      name: 'Emma Davis',
      rating: 4.9,
      seats: 4,
      vehicleType: 'sedan',
      carModel: 'Nissan Altima',
      price: 40,
      location: 'South District',
      arrivalTime: '6 mins'
    }
  ];

  // AI Fare Estimation
  const calculateFare = (data) => {
    const baseRate = 2.5;
    const distanceRate = 1.2; // per km
    const timeMultiplier = data.time ? 1.1 : 1.0;
    const vehicleMultiplier = {
      'sedan': 1.0,
      'suv': 1.3,
      'luxury': 1.8,
      'van': 1.4
    };
    const luggageRate = data.luggage === 'yes' ? data.luggageQuantity * 5 : 0;
    
    // Mock distance calculation based on from/to
    const estimatedDistance = Math.random() * 50 + 10; // 10-60 km
    
    const fare = (baseRate + (estimatedDistance * distanceRate)) * 
                 vehicleMultiplier[data.vehicleType] * 
                 timeMultiplier + luggageRate;
    
    return Math.round(fare * 100) / 100;
  };

  const handleBookingUpdate = (newData) => {
    const updatedData = { ...bookingData, ...newData };
    setBookingData(updatedData);
    
    if (updatedData.from && updatedData.to) {
      const fare = calculateFare(updatedData);
      setEstimatedFare(fare);
    }
  };

  const handleFindRides = () => {
    if (!bookingData.from || !bookingData.to) {
      alert('Please enter pickup and destination locations');
      return;
    }
    
    // Filter drivers based on criteria
    const filtered = mockDrivers.filter(driver => 
      driver.vehicleType === bookingData.vehicleType &&
      driver.seats >= bookingData.passengers
    );
    
    setAvailableDrivers(filtered);
    setActiveView('drivers');
  };

  const handleDriverSelect = (driver) => {
    setSelectedDriver(driver);
    setActiveView('confirmation');
  };

  const handleBackToHome = () => {
    setActiveView('home');
    setAvailableDrivers([]);
    setSelectedDriver(null);
  };

  const handleNewBooking = () => {
    setActiveView('home');
    setBookingData({
      from: '',
      to: '',
      date: '',
      time: '',
      passengers: 1,
      luggage: 'no',
      luggageQuantity: 0,
      vehicleType: 'sedan',
      customerName: '',
      customerPhone: '',
      customerEmail: ''
    });
    setEstimatedFare(0);
    setAvailableDrivers([]);
    setSelectedDriver(null);
  };

  return (
    <div className="ride-booking-app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <div className="car-icon">🚗</div>
            <span>SWIFT Ride</span>
          </div>
          <nav className="nav-buttons">
            <button className="nav-btn secondary">Find Rides</button>
            <button className="nav-btn secondary">Offer a Ride</button>
            <button className="nav-btn secondary">About</button>
            <button className="nav-btn secondary">Log in</button>
            <button className="nav-btn primary">Sign Up</button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {activeView === 'home' && (
          <>
            <div className="top-section">
              <PreBookSection 
                bookingData={bookingData}
                onBookingUpdate={handleBookingUpdate}
              />
            </div>
            
            <FindRideSection
              bookingData={bookingData}
              onBookingUpdate={handleBookingUpdate}
              estimatedFare={estimatedFare}
              onFindRides={handleFindRides}
            />
          </>
        )}

        {activeView === 'drivers' && (
          <DriversList
            drivers={availableDrivers}
            bookingData={bookingData}
            onDriverSelect={handleDriverSelect}
            onBack={handleBackToHome}
          />
        )}

        {activeView === 'confirmation' && (
          <BookingConfirmation
            driver={selectedDriver}
            bookingData={bookingData}
            onNewBooking={handleNewBooking}
          />
        )}
      </main>
    </div>
  );
};

export default FindRide;