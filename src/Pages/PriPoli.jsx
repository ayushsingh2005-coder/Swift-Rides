import React from 'react';
import './PriPoli.css';

const PrivacyPolicy = () => {
  const lastUpdated = "May 15, 2023";
  
  return (
    <div className="legal-page privacy-policy">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1>Privacy Policy</h1>
          <p>Last Updated: {lastUpdated}</p>
        </div>
      </section>
      
      <section className="legal-content">
        <div className="legal-container">
          <div className="legal-section">
            <h2>1. Introduction</h2>
            <p>Welcome to RideRoute's Privacy Policy. At RideRoute, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, process, and share your information when you use our website, mobile apps, and services.</p>
            <p>Please read this Privacy Policy carefully to understand our policies and practices regarding your information and how we will treat it.</p>
          </div>
          
          <div className="legal-section">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide to Us</h3>
            <p>We collect information you provide directly to us when you:</p>
            <ul>
              <li>Create or modify your account</li>
              <li>Search for routes</li>
              <li>Make a booking</li>
              <li>Contact customer support</li>
              <li>Complete a survey or participate in promotions</li>
            </ul>
            
            <h3>2.2 Information We Collect Automatically</h3>
            <p>When you use our platform, we automatically collect:</p>
            <ul>
              <li>Device information (including device type, operating system, and browser)</li>
              <li>Log information (including access times, pages viewed, and IP address)</li>
              <li>Location information (if you enable location services)</li>
              <li>Cookie data (as described in our Cookie Policy)</li>
            </ul>
          </div>
          
          <div className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your bookings and send confirmation details</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize your experience and provide tailored content</li>
              <li>Communicate with you about products, services, offers, and promotions</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
          
          <div className="legal-section">
            <h2>4. Sharing of Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Transportation Providers:</strong> To complete your booking and provide the requested services.</li>
              <li><strong>Service Providers:</strong> Who perform services on our behalf, including payment processing, data analysis, email delivery, and hosting services.</li>
              <li><strong>Business Partners:</strong> With your consent, we may share information with business partners to offer you certain products, services, or promotions.</li>
              <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities.</li>
            </ul>
          </div>
          
          <div className="legal-section">
            <h2>5. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Restrict or object to processing of your personal data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>
          </div>
          
          <div className="legal-section">
            <h2>6. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
          </div>
          
          <div className="legal-section">
            <h2>7. Data Retention</h2>
            <p>We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
          </div>
          
          <div className="legal-section">
            <h2>8. International Data Transfers</h2>
            <p>Your information may be transferred to — and maintained on — computers located outside your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.</p>
          </div>
          
          <div className="legal-section">
            <h2>9. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.</p>
          </div>
          
          <div className="legal-section">
            <h2>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: privacy@rideroute.com</p>
            <p>Address: 123 Transport Avenue, New York, NY 10001</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
