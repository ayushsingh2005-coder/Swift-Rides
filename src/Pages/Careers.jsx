import React from 'react';
import './Careers.css';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data',
      location: 'San Francisco, CA',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Customer Support Specialist',
      department: 'Customer Experience',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Chicago, IL',
      type: 'Full-time'
    },
    {
      id: 6,
      title: 'Operations Analyst',
      department: 'Operations',
      location: 'Remote',
      type: 'Contract'
    },
  ];

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1>Join Our Team</h1>
          <p>Build the future of transportation with us</p>
          <a href="#open-positions" className="view-positions-btn">View Open Positions</a>
        </div>
      </section>

      <section className="careers-mission">
        <div className="careers-container">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>At RideRoute, we're revolutionizing how people travel by connecting them with the most efficient, comfortable, and affordable transportation options.</p>
              <p>Our platform helps millions of travelers compare and book the perfect ride, while supporting sustainability through smart transportation choices.</p>
            </div>
            <div className="mission-image">
              <img src="https://via.placeholder.com/600x400" alt="Team collaborating" />
            </div>
          </div>
        </div>
      </section>

      <section className="careers-values">
        <div className="careers-container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, constantly raising the bar for ourselves and our industry.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Sustainability</h3>
              <p>We're committed to promoting sustainable transportation choices that reduce environmental impact.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We believe the best solutions come from diverse teams working together with shared purpose.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We embrace creativity and bold thinking to solve complex transportation challenges.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-benefits">
        <div className="careers-container">
          <h2>Benefits & Perks</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Health & Wellness</h3>
              <ul>
                <li>Comprehensive health insurance</li>
                <li>Dental and vision coverage</li>
                <li>Mental health resources</li>
                <li>Wellness stipend</li>
              </ul>
            </div>
            <div className="benefit-item">
              <h3>Work-Life Balance</h3>
              <ul>
                <li>Flexible working hours</li>
                <li>Remote work options</li>
                <li>Unlimited PTO</li>
                <li>Paid parental leave</li>
              </ul>
            </div>
            <div className="benefit-item">
              <h3>Professional Growth</h3>
              <ul>
                <li>Learning & development budget</li>
                <li>Conference attendance</li>
                <li>Mentorship programs</li>
                <li>Career advancement paths</li>
              </ul>
            </div>
            <div className="benefit-item">
              <h3>Team Building</h3>
              <ul>
                <li>Regular team retreats</li>
                <li>Social events</li>
                <li>Employee recognition programs</li>
                <li>Community volunteer opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="open-positions" className="careers-positions">
        <div className="careers-container">
          <h2>Open Positions</h2>
          <div className="positions-filter">
            <select defaultValue="all">
              <option value="all">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="data">Data</option>
              <option value="customer">Customer Experience</option>
              <option value="marketing">Marketing</option>
              <option value="operations">Operations</option>
            </select>
            <select defaultValue="all">
              <option value="all">All Locations</option>
              <option value="remote">Remote</option>
              <option value="new-york">New York, NY</option>
              <option value="san-francisco">San Francisco, CA</option>
              <option value="chicago">Chicago, IL</option>
            </select>
          </div>
          
          <div className="positions-list">
            {openPositions.map(position => (
              <div className="position-card" key={position.id}>
                <div className="position-content">
                  <h3>{position.title}</h3>
                  <div className="position-details">
                    <span>{position.department}</span>
                    <span>{position.location}</span>
                    <span>{position.type}</span>
                  </div>
                  <p className="position-description">
                    We're looking for talented individuals to join our growing team and help shape the future of transportation solutions.
                  </p>
                </div>
                <div className="position-action">
                  <a href={`/careers/${position.id}`} className="apply-btn">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-cta">
        <div className="careers-container">
          <h2>Don't see a position that fits?</h2>
          <p>We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.</p>
          <a href="/contact" className="contact-btn">Get In Touch</a>
        </div>
      </section>
    </div>
  );
};

export default Careers;