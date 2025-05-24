import React from 'react';
import './DriversList.css';

const DriversList = ({ drivers, bookingData, onDriverSelect, onBack }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">⭐</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">⭐</span>);
    }
    
    return stars;
  };

  return (
    <div className="drivers-list-container">
      <div className="drivers-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Search
        </button>
        <div className="header-content">
          <h2>Available Drivers</h2>
          <p>Found {drivers.length} drivers matching your criteria</p>
        </div>
      </div>

      <div className="search-summary">
        <div className="route-info">
          <div className="route-item">
            <span className="route-label">From:</span>
            <span className="route-value">{bookingData.from}</span>
          </div>
          <div className="route-item">
            <span className="route-label">To:</span>
            <span className="route-value">{bookingData.to}</span>
          </div>
        </div>
        <div className="booking-filters">
          <span className="filter-tag">👥 {bookingData.passengers} passengers</span>
          <span className="filter-tag">🚗 {bookingData.vehicleType}</span>
          {bookingData.luggage === 'yes' && (
            <span className="filter-tag">🧳 {bookingData.luggageQuantity} bags</span>
          )}
        </div>
      </div>

      <div className="drivers-grid">
        {drivers.length === 0 ? (
          <div className="no-drivers">
            <div className="no-drivers-icon">😔</div>
            <h3>No drivers available</h3>
            <p>Try adjusting your search criteria or check back later.</p>
            <button className="retry-btn" onClick={onBack}>
              Modify Search
            </button>
          </div>
        ) : (
          drivers.map((driver) => (
            <div key={driver.id} className="driver-card">
              <div className="driver-header">
                <div className="driver-avatar">
                  <div className="avatar-placeholder">
                    {driver.name.charAt(0)}
                  </div>
                  <div className="online-indicator"></div>
                </div>
                <div className="driver-info">
                  <h3>{driver.name}</h3>
                  <div className="rating">
                    {renderStars(driver.rating)}
                    <span className="rating-value">{driver.rating}</span>
                  </div>
                </div>
                <div className="price-badge">
                  <span className="price">${driver.price}</span>
                  <span className="price-label">Total</span>
                </div>
              </div>

              <div className="vehicle-info">
                <div className="vehicle-details">
                  <div className="vehicle-icon">
                    {driver.vehicleType === 'sedan' && '🚗'}
                    {driver.vehicleType === 'suv' && '🚙'}
                    {driver.vehicleType === 'luxury' && '🚘'}
                    {driver.vehicleType === 'van' && '🚐'}
                  </div>
                  <div className="vehicle-text">
                    <h4>{driver.carModel}</h4>
                    <p>{driver.seats} seats available</p>
                  </div>
                </div>
                <div className="location-info">
                  <div className="location">
                    <span className="location-icon">📍</span>
                    <span>{driver.location}</span>
                  </div>
                  <div className="arrival">
                    <span className="time-icon">⏱️</span>
                    <span>Picks up in {driver.arrivalTime}</span>
                  </div>
                </div>
              </div>

              <div className="driver-features">
                <div className="feature-tags">
                  <span className="feature-tag verified">✅ Verified</span>
                  <span className="feature-tag rated">⭐ Top Rated</span>
                  {driver.rating >= 4.8 && (
                    <span className="feature-tag premium">👑 Premium</span>
                  )}
                </div>
              </div>

              <div className="booking-actions">
                <button 
                  className="book-btn"
                  onClick={() => onDriverSelect(driver)}
                >
                  Book This Ride
                </button>
                <button className="message-btn">
                  💬 Message
                </button>
              </div>

              <div className="driver-stats">
                <div className="stat">
                  <span className="stat-value">500+</span>
                  <span className="stat-label">Trips</span>
                </div>
                <div className="stat">
                  <span className="stat-value">99%</span>
                  <span className="stat-label">On Time</span>
                </div>
                <div className="stat">
                  <span className="stat-value">2 yrs</span>
                  <span className="stat-label">Experience</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {drivers.length > 0 && (
        <div className="drivers-footer">
          <div className="safety-info">
            <h4>🛡️ Safety First</h4>
            <p>All drivers are background checked and vehicles are regularly inspected</p>
          </div>
          <div className="support-info">
            <h4>📞 24/7 Support</h4>
            <p>Get help anytime during your journey</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriversList;