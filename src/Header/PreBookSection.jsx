import React from 'react';
import './PreBookSection.css';

const PreBookSection = ({ bookingData, onBookingUpdate }) => {
  const handleInputChange = (field, value) => {
    onBookingUpdate({ [field]: value });
  };

  const benefits = [
    {
      icon: '📅',
      title: 'Schedule in Advance',
      description: 'Choose your exact pickup time up to 90 days in advance.'
    },
    {
      icon: '⏰',
      title: 'Extra Wait Time',
      description: 'Extra wait time included to meet your ride.'
    },
    {
      icon: '🚫',
      title: 'Free Cancellation',
      description: 'Cancel at no charge up to 60 minutes in advance.'
    }
  ];

  return (
    <div className="prebook-container">
      <div className="prebook-main">
        <div className="prebook-content">
          <h1>Get your ride right with SWIFT Reserve</h1>
          <p>Plan ahead and ensure your perfect ride</p>
          
          <div className="prebook-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="prebook-date">📅 Date</label>
                <input
                  type="date"
                  id="prebook-date"
                  value={bookingData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="prebook-time">🕐 Time</label>
                <select
                  id="prebook-time"
                  value={bookingData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                >
                  <option value="">Select Time</option>
                  <option value="06:00">06:00 AM</option>
                  <option value="07:00">07:00 AM</option>
                  <option value="08:00">08:00 AM</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                  <option value="19:00">07:00 PM</option>
                  <option value="20:00">08:00 PM</option>
                  <option value="21:00">09:00 PM</option>
                  <option value="22:00">10:00 PM</option>
                </select>
              </div>
            </div>
            
            <button className="next-btn">
              Schedule Your Ride
            </button>
          </div>
        </div>
        
        <div className="prebook-visual">
          <div className="watch-illustration">
            <div className="calendar-bg">
              <div className="calendar-page">
                <div className="calendar-header">MAY</div>
                <div className="calendar-dates">
                  <span>24</span>
                  <span>25</span>
                  <span>26</span>
                  <span>27</span>
                </div>
              </div>
              <div className="watch">
                <div className="watch-face">
                  <div className="watch-hands">
                    <div className="hour-hand"></div>
                    <div className="minute-hand"></div>
                  </div>
                  <div className="watch-center"></div>
                </div>
                <div className="watch-strap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="benefits-section">
        <h3>Benefits</h3>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-text">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="terms-link">See terms</a>
      </div>
    </div>
  );
};

export default PreBookSection;