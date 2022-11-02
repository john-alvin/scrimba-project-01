import React from "react";
import groupLogo from "../images/Group.png";
import vectorLogo from "../images/Vector.png";

function Main() {
  return (
    <main>
      <h1 className="main-title">Fun facts aboout React</h1>
      <ul className="list-items">
        <li>was first released in 2013 </li>
        <li>was originally created by jordan walke </li>
        <li>has well over 100k stars on github </li>
        <li>is maintained by facebook </li>
        <li>powers thousands of enterprise apps, including mobile apps </li>
      </ul>

      <div className="logo">
        <img src={groupLogo} alt="react-big" className="react-big" />
        <div className="small-logo">
          <img src={vectorLogo} alt="vector" />
        </div>
      </div>
    </main>
  );
}

export default Main;
