import React from "react";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import "./Navbar.scss"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* <div>LOGO</div>
        <Typography>
          test
        </Typography> */}
        <Button onClick={() => console.log("CLICKED")} loading>
          <Typography>BUTTON</Typography>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;