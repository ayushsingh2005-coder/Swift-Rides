import React, { useState } from 'react';
import './FindRideSection.css';

const FindRideSection = ({ bookingData, onBookingUpdate, estimatedFare, onFindRides }) => {
  const [showMap, setShowMap] = useState(false);

  const handleInputChange = (field, value) => {
    onBookingUpdate({ [field]: value });
  };

  const vehicleTypes = [
    { id: 'sedan', name: 'Sedan', icon: '🚗', capacity: '1-4 passengers' },
    { id: 'suv', name: 'SUV', icon: '🚙', capacity: '1-6 passengers' },
    { id: 'luxury', name: 'Luxury', icon: '🚘', capacity: '1-4 passengers' },
    { id: 'van', name: 'Van', icon: '🚐', capacity: '1-8 passengers' }
  ];

  return (
    <div className="find-ride-section">
      <div className="section-header">
        <h2>Book Your Ride</h2>
        <p>Find the perfect ride for your journey</p>
      </div>

      <div className="booking-content">
        <div className="booking-form">
          <div className="form-section">
            <h3>🗺️ Route Details</h3>
            <div className="route-inputs">
              <div className="form-group">
                <label htmlFor="from">📍 From</label>
                <input
                  type="text"
                  id="from"
                  value={bookingData.from}
                  onChange={(e) => handleInputChange('from', e.target.value)}
                  placeholder="Enter pickup location"
                />
              </div>
              <div className="form-group">
                <label htmlFor="to">🎯 To</label>
                <input
                  type="text"
                  id="to"
                  value={bookingData.to}
                  onChange={(e) => handleInputChange('to', e.target.value)}
                  placeholder="Enter destination"
                />
              </div>
              <button 
                className="map-btn"
                onClick={() => setShowMap(!showMap)}
              >
                {showMap ? 'Hide Map' : 'Show Map'} 🗺️
              </button>
            </div>
          </div>

          {showMap && (
            <div className="map-section">
              <div className="map-placeholder">
                <div className="map-content">
                  <h4>Interactive Route Map</h4>
                  <div className="route-visualization">
                    <div className="location-marker start">📍 Start</div>
                    <div className="route-line"></div>
                    <div className="location-marker end">🎯 End</div>
                  </div>
                  <p>Click on map to set pickup and destination points</p>
                </div>
              </div>
            </div>
          )}

          <div className="form-section">
            <h3>👥 Passengers & Luggage</h3>
            <div className="passenger-luggage">
              <div className="form-group">
                <label htmlFor="passengers">Number of Passengers</label>
                <select
                  id="passengers"
                  value={bookingData.passengers}
                  onChange={(e) => handleInputChange('passengers', parseInt(e.target.value))}
                >
                  <option value={1}>1 Passenger</option>
                  <option value={2}>2 Passengers</option>
                  <option value={3}>3 Passengers</option>
                  <option value={4}>4 Passengers</option>
                  <option value={5}>5 Passengers</option>
                  <option value={6}>6 Passengers</option>
                  <option value={7}>7 Passengers</option>
                  <option value={8}>8 Passengers</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Luggage Required?</label>
                <div className="luggage-options">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="luggage"
                      value="no"
                      checked={bookingData.luggage === 'no'}
                      onChange={(e) => handleInputChange('luggage', e.target.value)}
                    />
                    <span>No</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="luggage"
                      value="yes"
                      checked={bookingData.luggage === 'yes'}
                      onChange={(e) => handleInputChange('luggage', e.target.value)}
                    />
                    <span>Yes</span>
                  </label>
                </div>
                
                {bookingData.luggage === 'yes' && (
                  <div className="luggage-quantity">
                    <label htmlFor="luggageQuantity">Number of Bags</label>
                    <select
                      id="luggageQuantity"
                      value={bookingData.luggageQuantity}
                      onChange={(e) => handleInputChange('luggageQuantity', parseInt(e.target.value))}
                    >
                      <option value={1}>1 Bag</option>
                      <option value={2}>2 Bags</option>
                      <option value={3}>3 Bags</option>
                      <option value={4}>4 Bags</option>
                      <option value={5}>5+ Bags</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>🚗 Vehicle Type</h3>
            <div className="vehicle-types">
              {vehicleTypes.map((vehicle) => (
                <label key={vehicle.id} className="vehicle-option">
                  <input
                    type="radio"
                    name="vehicleType"
                    value={vehicle.id}
                    checked={bookingData.vehicleType === vehicle.id}
                    onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                  />
                  <div className="vehicle-card">
                    <div className="vehicle-icon">{vehicle.icon}</div>
                    <div className="vehicle-info">
                      <h4>{vehicle.name}</h4>
                      <p>{vehicle.capacity}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>👤 Customer Details</h3>
            <div className="customer-details">
              <div className="form-group">
                <label htmlFor="customerName">Full Name</label>
                <input
                  type="text"
                  id="customerName"
                  value={bookingData.customerName}
                  onChange={(e) => handleInputChange('customerName', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerPhone">Phone Number</label>
                <input
                  type="tel"
                  id="customerPhone"
                  value={bookingData.customerPhone}
                  onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerEmail">Email Address</label>
                <input
                  type="email"
                  id="customerEmail"
                  value={bookingData.customerEmail}
                  onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="booking-summary">
          <div className="fare-estimation">
            <h3>💰 Fare Estimation</h3>
            <div className="fare-details">
              <div className="fare-item">
                <span>Base Fare</span>
                <span>$2.50</span>
              </div>
              <div className="fare-item">
                <span>Distance</span>
                <span>$15.20</span>
              </div>
              <div className="fare-item">
                <span>Vehicle Type</span>
                <span>+$5.00</span>
              </div>
              {bookingData.luggage === 'yes' && (
                <div className="fare-item">
                  <span>Luggage ({bookingData.luggageQuantity} bags)</span>
                  <span>+${bookingData.luggageQuantity * 5}</span>
                </div>
              )}
              <div className="fare-total">
                <span>Estimated Total</span>
                <span>${estimatedFare}</span>
              </div>
            </div>
          </div>

          <div className="booking-features">
            <h4>✨ Features</h4>
            <ul>
              <li>🔒 Safe & Secure rides</li>
              <li>⭐ Verified drivers</li>
              <li>📱 Real-time tracking</li>
              <li>💳 Multiple payment options</li>
              <li>🆘 24/7 support</li>
            </ul>
          </div>

          <button 
            className="find-rides-btn"
            onClick={onFindRides}
            disabled={!bookingData.from || !bookingData.to || !bookingData.customerName}
          >
            Find Available Rides 🔍
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindRideSection;