import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
        </div>
      </section>
      
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions about our service? Need help with a booking? Our team is here to help!</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h3>Email Us</h3>
                  <p>support@rideroute.com</p>
                  <p>business@rideroute.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-details">
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon - Fri, 9am - 5pm EST</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <h3>Visit Us</h3>
                  <p>123 Transport Avenue</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            {submitted ? (
              <div className="success-message">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-overlay">
              <p>Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;