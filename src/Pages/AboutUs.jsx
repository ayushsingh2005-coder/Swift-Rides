import React from 'react';
import './AboutUs.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Swift Ride</h1>
          <p>Helping travelers find the best routes since 2020</p>
        </div>
      </section>
      
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>At RideRoute, we believe that travel should be simple, affordable, and efficient. Our mission is to help travelers find the best transportation options for their journeys, comparing routes across multiple providers to save time and money.</p>
            <p>We aggregate data from hundreds of transportation companies to offer you a comprehensive view of all available options, letting you make informed decisions about your travel plans.</p>
          </div>
          <div className="about-image mission-image"></div>
        </div>
      </section>
      
      <section className="about-section alt-bg">
        <div className="about-container reverse">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>RideRoute was founded in 2020 by a group of travel enthusiasts who were frustrated with the fragmented nature of transportation booking. Each company had its own website, its own schedule, and its own pricing structure, making it time-consuming to find the best option.</p>
            <p>We set out to solve this problem by creating a platform that brings all these options together in one place, making it easy to compare and choose the best route for your journey.</p>
          </div>
          <div className="about-image story-image"></div>
        </div>
      </section>
      
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Ayush Singh</h3>
            <p> Lead Developer</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Daksh Chauhan</h3>
            <p> Lead developer</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Aviral mishra</h3>
            <p>Lead developer</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Michael Brown</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
      
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Transportation Providers</p>
          </div>
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Routes Covered</p>
          </div>
          <div className="stat-item">
            <h3>1M+</h3>
            <p>Happy Travelers</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Countries</p>
          </div>
        </div>
      </section>
      
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-container">
          <div className="value-item">
            <div className="value-icon">🌟</div>
            <h3>Transparency</h3>
            <p>We show all options and fees upfront, no hidden surprises.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We're constantly improving our platform to better serve travelers.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🌍</div>
            <h3>Sustainability</h3>
            <p>We promote eco-friendly travel options and carbon offset programs.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">👥</div>
            <h3>Community</h3>
            <p>We build connections between travelers and local communities.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
