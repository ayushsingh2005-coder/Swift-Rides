import React from 'react';
import './index.css';
import { FaMapMarkerAlt, FaUserFriends, FaStar } from 'react-icons/fa';

const routes = [
  {
    date: 'Apr 30, 2025',
    price: '$45',
    from: 'San Francisco',
    to: 'Los Angeles',
    driver: 'Michael',
    rating: 4.9,
    seats: 3
  },
  {
    date: 'May 2, 2025',
    price: '$35',
    from: 'New York',
    to: 'Boston',
    driver: 'Sarah',
    rating: 4.7,
    seats: 2
  },
  {
    date: 'May 5, 2025',
    price: '$25',
    from: 'Chicago',
    to: 'Milwaukee',
    driver: 'David',
    rating: 4.8,
    seats: 4
  }
];

const PopularRoutes = () => {
  return (
    <section className="popular-routes-section">
      <div className="popular-header">
        <div>
          <h2>Popular Routes</h2>
          <p>Discover some of our most popular ride-sharing routes</p>
        </div>
        <button className="view-all-btn">View all rides</button>
      </div>

      <div className="routes-container">
        {routes.map((route, index) => (
          <div key={index} className="route-card">
            <div className="route-card-top">
              <span>{route.date}</span>
              <span className="price">{route.price}</span>
            </div>
            <div className="route-locations">
              <p><FaMapMarkerAlt className="icon-red" /> {route.from}</p>
              <div className="vertical-line"></div>
              <p><FaMapMarkerAlt className="icon-blue" /> {route.to}</p>
            </div>
            <div className="driver-details">
              <div className="avatar"></div>
              <div className="driver-info">
                <p>{route.driver}</p>
                <span><FaStar className="star-icon" /> {route.rating}</span>
              </div>
              <div className="seats-info">
                <FaUserFriends /> {route.seats} seats
              </div>
            </div>
            <button className="book-btn">Book this ride</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRoutes;
