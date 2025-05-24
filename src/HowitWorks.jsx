import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUser, faCommentDots, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Works(){

    return(<>
             <div className="how-it-works">
      <h2 className="hiw-heading">How SwiftRide works</h2>
      <p className="hiw-subheading">Sharing rides has never been easier. Follow these simple steps to get started.</p>

      <div className="hiw-steps">
        <div className="hiw-step">
          <div className="hiw-icon">
            <FontAwesomeIcon icon={faCar} />
          </div>
          <h4>Request a ride</h4>
          <p>Enter your pickup location, destination, and travel date to find available rides that match your travel plans.</p>
        </div>

        <div className="hiw-step">
          <div className="hiw-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <h4>Choose your ride</h4>
          <p>Browse the list of drivers going your way. Check their profiles, ratings, and ride details before booking.</p>
        </div>

        <div className="hiw-step">
          <div className="hiw-icon">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <h4>Travel together</h4>
          <p>Chat with your driver before the trip, meet at the agreed location, and enjoy your journey while sharing the costs.</p>
        </div>
      </div>

      <div className="hiw-safe">
        <div className="hiw-icon hiw-safe-icon">
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
        <h4>Reliable and safe</h4>
        <p>Every driver and passenger is verified. Browse profiles, ratings, and reviews to make informed decisions about who you travel with.</p>
      </div>
    </div>
    
    </>);
}
export default Works