import React from "react";
function Footer() {
  const curryear = new Date().getFullYear();
  return (
    <footer>
      <h3>Brian Mwirigi Copyright @ {curryear} </h3>
    </footer>
  );
}
export default Footer;
