
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">

      {/* Logo and Text wrapped in Link to homepage */}
      <div className="sec1">
        <Link to="/" className="logo-link">
          <span style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faCarSide} style={{ color: "#00adb8", fontSize: "1.5rem" }} />
            &nbsp;SWIFT<p style={{ color: "#00adb8", marginLeft: "4px" ,fontSize:"1.2rem"}}>Ride</p>
          </span>
        </Link>
      </div>

      <div className="sec2">
        <input
          type="text"
          placeholder="Search rider... offer ride"
          className="search-input"
        />
        &nbsp;
        <a href="#">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#00adb8", fontSize: "1.2rem" }}
          />
        </a>
      </div>

      <div className="sec3">
        <Link to="/offer-ride">Offer a Ride</Link>&nbsp;
        <Link to="/find-rides">Find Rides</Link>&nbsp;
        <Link to="/about">About</Link>&nbsp;
        <Link to="/login">Log in</Link>&nbsp;
        <button>
          <Link to="/SignUp">Sign Up</Link>
        </button>
      </div>

    </header>
  );
}

export default Header;
