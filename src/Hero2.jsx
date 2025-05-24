import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMapMarkerAlt, faCar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Herosection() {
  const navigate = useNavigate();

  return (
    <div className="Next-journey">
      <div className="Nj1">
        <h3 className="Nj-heading">Ready for your next journey?</h3>
        <p className="Nj-paragraph">Join our community of drivers and passengers today.</p>

        <div className="Nj-logos-container">
          <div className="Nj-logo1 interactive-card" onClick={() => navigate('/community')}>
            <FontAwesomeIcon icon={faUsers} className="Nj-icon" />
            <h4>Join Community</h4>
            <p>Connect with verified riders</p>
          </div>

          <div className="Nj-logo1 interactive-card" onClick={() => navigate('/rides')}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="Nj-icon" />
            <h4>Find Perfect Rides</h4>
            <p>Search routes that match yours</p>
          </div>

          <div className="Nj-logo1 interactive-card" onClick={() => navigate('/save-money')}>
            <FontAwesomeIcon icon={faCar} className="Nj-icon" />
            <h4>Save Money</h4>
            <p>Share costs with fellow travelers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
