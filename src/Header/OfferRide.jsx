import React, { useState } from 'react';
import './OfferRide.css';

import {
  MapPin, Clock, Users, Car, DollarSign, Fuel,
  User, Luggage, Plus, Minus
} from 'lucide-react';

const OfferRide = () => {
  const [rideData, setRideData] = useState({
    startingPoint: '',
    destination: '',
    haltPoints: [''],
    date: '',
    time: '',
    availableSeats: 1,
    vehicleType: '',
    fuelType: '',
    driverGender: '',
    luggageAllowed: false,
    luggageWeight: 0,
    estimatedPrice: 0
  });

  const vehicleTypes = ['Sedan', 'SUV', 'Hatchback', 'MUV', 'Luxury', 'Mini'];
  const fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'];

  const handleInputChange = (field, value) => {
    setRideData(prev => ({ ...prev, [field]: value }));
    if (['startingPoint', 'destination', 'vehicleType', 'fuelType'].includes(field)) {
      calculateEstimatedPrice();
    }
  };

  const calculateEstimatedPrice = () => {
    let basePrice = 100;
    const vehicleMultiplier = {
      'Hatchback': 1.0, 'Sedan': 1.2, 'SUV': 1.5,
      'MUV': 1.3, 'Luxury': 2.0, 'Mini': 0.8
    };
    const fuelMultiplier = {
      'Petrol': 1.0, 'Diesel': 0.9, 'CNG': 0.7,
      'Electric': 0.5, 'Hybrid': 0.8
    };
    basePrice *= vehicleMultiplier[rideData.vehicleType] || 1.0;
    basePrice *= fuelMultiplier[rideData.fuelType] || 1.0;
    if (rideData.startingPoint && rideData.destination) {
      basePrice += Math.random() * 200;
    }
    setRideData(prev => ({ ...prev, estimatedPrice: Math.round(basePrice) }));
  };

  const addHaltPoint = () => {
    setRideData(prev => ({ ...prev, haltPoints: [...prev.haltPoints, ''] }));
  };

  const removeHaltPoint = (index) => {
    setRideData(prev => ({
      ...prev,
      haltPoints: prev.haltPoints.filter((_, i) => i !== index)
    }));
  };

  const updateHaltPoint = (index, value) => {
    setRideData(prev => ({
      ...prev,
      haltPoints: prev.haltPoints.map((point, i) => i === index ? value : point)
    }));
  };

  const handleSubmit = () => {
    console.log('Ride offer submitted:', rideData);
    alert('Ride offer posted successfully!');
  };

  return (
    <div className="offer-container">
      <h1 className="offer-title">Offer Your Ride</h1>
      <p className="offer-subtitle">Share your journey and help others reach their destination</p>

      <div className="section">
        <h3 className="section-title"><MapPin size={20} /> Route Details</h3>
        <label className="label">Starting Point *</label>
        <input
          type="text"
          className="input"
          value={rideData.startingPoint}
          onChange={(e) => handleInputChange('startingPoint', e.target.value)}
          placeholder="Enter pickup location"
        />

        <label className="label">Destination *</label>
        <input
          type="text"
          className="input"
          value={rideData.destination}
          onChange={(e) => handleInputChange('destination', e.target.value)}
          placeholder="Enter drop-off location"
        />

        <label className="label">Halt Points (Optional)</label>
        {rideData.haltPoints.map((point, index) => (
          <div key={index} className="halt-point-row">
            <input
              type="text"
              className="input"
              value={point}
              onChange={(e) => updateHaltPoint(index, e.target.value)}
              placeholder={`Halt point ${index + 1}`}
            />
            {rideData.haltPoints.length > 1 && (
              <button className="btn-icon" onClick={() => removeHaltPoint(index)}><Minus size={16} /></button>
            )}
          </div>
        ))}
        <button className="btn-add" onClick={addHaltPoint}><Plus size={16} /> Add Halt Point</button>
      </div>

      <div className="section">
        <h3 className="section-title"><Clock size={20} /> Schedule</h3>
        <label className="label">Date *</label>
        <input
          type="date"
          className="input"
          value={rideData.date}
          onChange={(e) => handleInputChange('date', e.target.value)}
        />

        <label className="label">Time *</label>
        <input
          type="time"
          className="input"
          value={rideData.time}
          onChange={(e) => handleInputChange('time', e.target.value)}
        />
      </div>

      <div className="section">
        <h3 className="section-title"><Car size={20} /> Vehicle Details</h3>
        <label className="label">Vehicle Type *</label>
        <select
          className="input"
          value={rideData.vehicleType}
          onChange={(e) => handleInputChange('vehicleType', e.target.value)}
        >
          <option value="">Select vehicle type</option>
          {vehicleTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <label className="label">Fuel Type *</label>
        <select
          className="input"
          value={rideData.fuelType}
          onChange={(e) => handleInputChange('fuelType', e.target.value)}
        >
          <option value="">Select fuel type</option>
          {fuelTypes.map(fuel => (
            <option key={fuel} value={fuel}>{fuel}</option>
          ))}
        </select>

        <label className="label">Available Seats *</label>
        <div className="seat-control">
          <button className="btn-icon" onClick={() => handleInputChange('availableSeats', Math.max(1, rideData.availableSeats - 1))}>
            <Minus size={16} />
          </button>
          <span><Users size={20} /> {rideData.availableSeats}</span>
          <button className="btn-icon" onClick={() => handleInputChange('availableSeats', Math.min(8, rideData.availableSeats + 1))}>
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="section">
        <h3 className="section-title"><User size={20} /> Driver Preferences</h3>
        <label className="label">Driver Gender</label>
        <div className="gender-options">
          {['Male', 'Female', 'Other'].map(gender => (
            <label key={gender}>
              <input
                type="radio"
                name="driverGender"
                value={gender}
                checked={rideData.driverGender === gender}
                onChange={(e) => handleInputChange('driverGender', e.target.value)}
              />
              {gender}
            </label>
          ))}
        </div>

        <label className="label checkbox-label">
          <input
            type="checkbox"
            checked={rideData.luggageAllowed}
            onChange={(e) => handleInputChange('luggageAllowed', e.target.checked)}
          />
          <Luggage size={16} /> Allow Luggage
        </label>

        {rideData.luggageAllowed && (
          <>
            <label className="label">Maximum Luggage Weight (kg)</label>
            <input
              type="number"
              className="input"
              value={rideData.luggageWeight}
              onChange={(e) => handleInputChange('luggageWeight', parseInt(e.target.value) || 0)}
              min="0"
              max="50"
              placeholder="Enter weight in kg"
            />
          </>
        )}
      </div>

      <div className="section">
        <h3 className="section-title"><DollarSign size={20} /> Pricing</h3>
        <p className="estimated-price">AI Estimated Price per Seat: ₹{rideData.estimatedPrice}</p>
        <small className="note">Price is automatically calculated based on route, vehicle type, and fuel efficiency</small>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>Post Ride Offer</button>
    </div>
  );
};

export default OfferRide;
