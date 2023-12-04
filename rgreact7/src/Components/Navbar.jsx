import React from "react";
import logo from "./logo.svg";
function Navbar() {
  const curryear = new Date().getFullYear();
  return (
    <nav>
      <div class="topnav">
      <img src={logo} className="App-logo" alt="logo" />
      <a href="#about">About</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a class="active" href="#home">Home</a>
      </div>
    </nav>
  );
}
export default Navbar;

