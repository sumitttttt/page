import react from "react";
import "../App.css";
import brandLogo from "../images/brand_logo.png";

function Navigation() {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src={brandLogo} alt="brand_logo"></img>
        </div>

        <ul>
          <li href="#"> MENU</li>
          <li href="#"> LOCATION</li>
          <li href="#"> ABOUT</li>
          <li href="#"> CONTACT</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navigation;
