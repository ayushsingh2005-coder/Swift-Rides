
import React from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
  return (
    <div className="help-center-page">
      <section className="help-hero">
        <div className="help-hero-content">
          <h1>Help Center</h1>
          <p>Find answers to your questions and get the support you need</p>
        </div>
      </section>
      
      <section className="help-content">
        <div className="help-container">
          <div className="help-search">
            <h2>How can we help you today?</h2>
            <div className="search-box">
              <input type="text" placeholder="Search for help topics..." />
              <button >Search</button>
            </div>
          </div>
          
          <div className="help-categories">
            <h2>Browse by Category</h2>
            <div className="category-grid">
              <div className="category-card">
                <div className="category-icon">🎫</div>
                <h3>Booking Issues</h3>
                <p>Help with making and managing your ride bookings</p>
                <a href="#booking" className="category-link">Learn more</a>
              </div>
              <div className="category-card">
                <div className="category-icon">💳</div>
                <h3>Payment & Refunds</h3>
                <p>Information about payments, refunds and billing</p>
                <a href="#payment" className="category-link">Learn more</a>
              </div>
              <div className="category-card">
                <div className="category-icon">📱</div>
                <h3>Using Our App</h3>
                <p>Tips and tricks for using the RideRoute app</p>
                <a href="#app" className="category-link">Learn more</a>
              </div>
              <div className="category-card">
                <div className="category-icon">🗺️</div>
                <h3>Routes & Schedules</h3>
                <p>Questions about available routes and schedules</p>
                <a href="#routes" className="category-link">Learn more</a>
              </div>
              <div className="category-card">
                <div className="category-icon">👤</div>
                <h3>Account Help</h3>
                <p>Manage your RideRoute account settings</p>
                <a href="#account" className="category-link">Learn more</a>
              </div>
              <div className="category-card">
                <div className="category-icon">🔒</div>
                <h3>Privacy & Security</h3>
                <p>Information about data protection and security</p>
                <a href="#privacy" className="category-link">Learn more</a>
              </div>
            </div>
          </div>
          
          <div className="help-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-question">How do I book a ride?</div>
                <div className="faq-answer">
                  <p>To book a ride, simply go to the "Find Your Ride" page, enter your departure and destination locations along with your preferred date of travel, and select from the available options that best suit your needs.</p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-question">Can I cancel my booking?</div>
                <div className="faq-answer">
                  <p>Yes, you can cancel your booking through your account dashboard. Please note that cancellation policies vary by transportation provider, and refund eligibility depends on when you cancel relative to your departure time.</p>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-question">How do I contact customer support?</div>
                <div className="faq-answer">
                  <p>You can reach our customer support team through the Contact page, by email at support@rideroute.com, or by phone at (555) 123-4567. Our team is available 24/7 to assist you.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="help-contact">
            <h2>Still Need Help?</h2>
            <p>Our support team is ready to assist you with any questions or concerns.</p>
            <div className="contact-options">
              <div className="contact-option">
                <div className="contact-icon">✉️</div>
                <h3>Email Us</h3>
                <p>support@rideroute.com</p>
              </div>
              <div className="contact-option">
                <div className="contact-icon">📞</div>
                <h3>Call Us</h3>
                <p>(555) 123-4567</p>
              </div>
              <div className="contact-option">
                <div className="contact-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Available 24/7</p>
                <button className="chat-btn">Start Chat</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;