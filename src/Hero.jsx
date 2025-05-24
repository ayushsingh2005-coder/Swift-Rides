import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faCarSide, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-section-flex">
        <div className="hs1">
          <h1 style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: "3rem" }}>
            Share Ride,&nbsp;
          </h1>
          <h1
            style={{
              color: "#00adb8",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: "3rem",
            }}
          >
            Save Money
          </h1>
        </div>

        <div className="hs2">
          <p>
            Connect with drivers and passengers headed your way. Affordable,<br />
            convenient, and eco-friendly travel.
          </p>
        </div>

        {/* Repositioned buttons below description */}
        <div className="hero-buttons">
          <button>
           <Link to="/find-Rides">Find a ride</Link>
          </button>
          <button>
            <Link to="/offer-ride">Offer a ride</Link>
          </button>
        </div>

        <div className="hs4">
          <div className="hs4-flex">
            <p>
              <FontAwesomeIcon icon={faRoute} /> &nbsp; 1,000+ routes across the country
            </p>
            <p>
              <FontAwesomeIcon icon={faCarSide} /> &nbsp; 10,000+ monthly active drivers
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> &nbsp;&nbsp;&nbsp;Rides to over 500 destinations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
