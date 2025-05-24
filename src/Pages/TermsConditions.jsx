import React from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
  const lastUpdated = "May 15, 2023";
  
  return (
    <div className="legal-page terms-conditions">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1>Terms and Conditions</h1>
          <p>Last Updated: {lastUpdated}</p>
        </div>
      </section>
      
      <section className="legal-content">
        <div className="legal-container">
          <div className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>Welcome to RideRoute. By accessing or using our website, mobile applications, or any services provided by RideRoute (collectively, the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Service.</p>
          </div>
          
          <div className="legal-section">
            <h2>2. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will always post the most current version on our website. By continuing to use the Service after changes become effective, you agree to the revised Terms.</p>
          </div>
          
          <div className="legal-section">
            <h2>3. Using Our Service</h2>
            <h3>3.1 Eligibility</h3>
            <p>You must be at least 18 years old or the age of legal majority in your jurisdiction to use our Service. By using our Service, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and to abide by all the terms and conditions set forth herein.</p>
            
            <h3>3.2 Account Registration</h3>
            <p>To use certain features of our Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
            
            <h3>3.3 Account Security</h3>
            <p>You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
          </div>
          
          <div className="legal-section">
            <h2>4. Bookings and Payments</h2>
            <h3>4.1 Booking Process</h3>
            <p>RideRoute helps you find and compare transportation options. When you select and book a transportation option, your booking is with the transportation provider, not with RideRoute. We act as an intermediary between you and the transportation provider.</p>
            
            <h3>4.2 Payments</h3>
            <p>All payments are processed through secure payment gateways. By making a booking, you authorize us to charge the applicable fees to your selected payment method.</p>
            
            <h3>4.3 Refunds and Cancellations</h3>
            <p>Refund and cancellation policies vary by transportation provider. Please review the specific policies before making a booking. RideRoute is not responsible for issuing refunds for services provided by transportation providers.</p>
          </div>
          
          <div className="legal-section">
            <h2>5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any illegal purpose or in violation of any laws</li>
              <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
              <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Use data mining, robots, or similar data gathering and extraction methods</li>
              <li>Post or transmit any content that is unlawful, fraudulent, threatening, abusive, defamatory, obscene, or otherwise objectionable</li>
            </ul>
          </div>
          
          <div className="legal-section">
            <h2>6. Intellectual Property</h2>
            <p>The Service and all content, features, and functionality, including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof, are owned by RideRoute, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          </div>
          
          <div className="legal-section">
            <h2>7. Disclaimers</h2>
            <p>THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. RIDEROUTE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            <p>RIDEROUTE MAKES NO WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS.</p>
          </div>
          
          <div className="legal-section">
            <h2>8. Limitation of Liability</h2>
            <p>IN NO EVENT SHALL RIDEROUTE, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
          </div>
          
          <div className="legal-section">
            <h2>9. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless RideRoute, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.</p>
          </div>
          
          <div className="legal-section">
            <h2>10. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without giving effect to any principles of conflicts of law.</p>
          </div>
          
          <div className="legal-section">
            <h2>11. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>Email: legal@rideroute.com</p>
            <p>Address: 123 Transport Avenue, New York, NY 10001</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
