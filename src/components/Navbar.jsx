import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="item">
        <a href="#s">Profile</a>
      </div>
      <div className="item">
        <a href="#s">Messages</a>
      </div>
      <div className="item">
        <a href="#s">News</a>
      </div>
      <div className="item">
        <a href="#s">Music</a>
      </div>
      <div className="item">
        <a href="#s">Setting</a>
      </div>
    </nav>
  );
};

export default Navbar;
