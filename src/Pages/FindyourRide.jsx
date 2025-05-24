import React, { useState } from 'react';
import './FindyourRide.css';

const FindYourRide = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  
  // Mock data for transportation options
  const transportOptions = [
    {
      id: 1,
      type: 'Bus',
      company: 'Express Lines',
      departure: '08:00 AM',
      arrival: '12:30 PM',
      duration: '4h 30m',
      price: 35,
      features: ['WiFi', 'Power Outlets', 'Restroom']
    },
    {
      id: 2,
      type: 'Train',
      company: 'Amtrak',
      departure: '09:15 AM',
      arrival: '01:00 PM',
      duration: '3h 45m',
      price: 65,
      features: ['WiFi', 'Dining Car', 'Extra Legroom']
    },
    {
      id: 3,
      type: 'Plane',
      company: 'Sky Airlines',
      departure: '10:30 AM',
      arrival: '11:45 AM',
      duration: '1h 15m',
      price: 120,
      features: ['In-flight Entertainment', 'Meal Service']
    },
    {
      id: 4,
      type: 'Bus',
      company: 'Budget Travel',
      departure: '11:00 AM',
      arrival: '04:15 PM',
      duration: '5h 15m',
      price: 28,
      features: ['WiFi']
    },
  ];
  
  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would fetch data from an API
    console.log("Searching for routes:", {fromLocation, toLocation, date, passengers});
  };
  
  const getTransportIcon = (type) => {
    switch(type) {
      case 'Bus': return '🚌';
      case 'Train': return '🚆';
      case 'Plane': return '✈️';
      default: return '🚗';
    }
  };
  
  return (
    <div className="find-ride-page">
      <section className="search-section">
        <div className="search-container">
          <h2>Find Your Ride</h2>
          <form className="search-form" onSubmit={handleSearch}>
            <div className="form-row">
              <div className="form-group">
                <label>From</label>
                <input 
                  type="text" 
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  placeholder="Enter departure city" 
                  required
                />
              </div>
              
              <div className="form-group">
                <label>To</label>
                <input 
                  type="text" 
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  placeholder="Enter destination city" 
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Passengers</label>
                <select 
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button type="submit" className="search-btn">Search Routes</button>
          </form>
        </div>
      </section>
      
      <section className="results-section">
        <div className="filter-bar">
          <h3>Filter Options:</h3>
          <div className="filters">
            <div className="filter-group">
              <label>Transport Type</label>
              <div className="checkbox-group">
                <label><input type="checkbox" defaultChecked /> Bus</label>
                <label><input type="checkbox" defaultChecked /> Train</label>
                <label><input type="checkbox" defaultChecked /> Plane</label>
              </div>
            </div>
            
            <div className="filter-group">
              <label>Time</label>
              <select defaultValue="any">
                <option value="any">Any Time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Price Range</label>
              <select defaultValue="any">
                <option value="any">Any Price</option>
                <option value="budget">Budget (Under $40)</option>
                <option value="moderate">Moderate ($40-$80)</option>
                <option value="premium">Premium (Over $80)</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="results-container">
          <h3>Available Routes:</h3>
          <div className="sort-options">
            <span>Sort by:</span>
            <button className="sort-btn active">Price</button>
            <button className="sort-btn">Duration</button>
            <button className="sort-btn">Departure</button>
          </div>
          
          <div className="transportation-options">
            {transportOptions.map(option => (
              <div key={option.id} className="transport-card">
                <div className="transport-header">
                  <div className="transport-type">
                    <span className="transport-icon">{getTransportIcon(option.type)}</span>
                    <div>
                      <h4>{option.type}</h4>
                      <p>{option.company}</p>
                    </div>
                  </div>
                  <div className="transport-price">
                    <p>${option.price}</p>
                  </div>
                </div>
                
                <div className="transport-details">
                  <div className="time-details">
                    <div className="departure">
                      <p className="time">{option.departure}</p>
                      <p className="location">{fromLocation || 'New York'}</p>
                    </div>
                    
                    <div className="duration">
                      <p>{option.duration}</p>
                      <div className="duration-line"></div>
                    </div>
                    
                    <div className="arrival">
                      <p className="time">{option.arrival}</p>
                      <p className="location">{toLocation || 'Boston'}</p>
                    </div>
                  </div>
                  
                  <div className="transport-features">
                    {option.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
                
                <div className="transport-footer">
                  <button className="details-btn">View Details</button>
                  <button className="book-btn">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindYourRide;