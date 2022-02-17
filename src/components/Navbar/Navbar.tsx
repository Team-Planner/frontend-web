import React from "react";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
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
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
        <Spinner size="xxl" />
        <Button onClick={() => console.log("CLICKED")}>
          <Typography>BUTTON</Typography>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;