import React from 'react';
import './index.css';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column brand">
          <div className="logo" style={{marginLeft:"30px"}}>
            <FaCar className="logo-icon"/>
            <span>Swift <span className="highlight">Ride</span></span>
          </div>
          <p>Connecting drivers with empty seats <br />to people traveling the same way</p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">FindYourRide</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><Link to="/helpcenter">Help Center</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/termsconditions">Terms & Conditions</Link></li>
            <li><Link to="/pripoli">Privacy Policy</Link></li>
            <li><Link to="/cookiepoli">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SwiftRide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
