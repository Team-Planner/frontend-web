import React from "react";
import Typography from "../Typography/Typography";
import "./Navbar.scss"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div>LOGO</div>
        <Typography>
          test
        </Typography>
      </div>
    </nav>
  );
}

export default Navbar;