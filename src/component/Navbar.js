import React from "react";
import reactLogo from "../images/logo-react.png";

function Navbar() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="left-side">
          <img src={reactLogo} alt="react-logo" />
          <h2 className="title">ReactFacts</h2>
        </div>
        <div className="right-side">
          <h3 className="right-text">react course - project 1</h3>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
