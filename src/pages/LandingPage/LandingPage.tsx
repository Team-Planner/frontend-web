import React from "react";
import Button from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";

const LandingPage: React.FC = () => {
  return (
    <React.Fragment>
      <h1 style={{marginTop: "64px"}}>
        LANDING PAGE CONTENT
      </h1>
      <div style={{margin: "100px", display: "flex", gap: "10px"}}>
        <Button onClick={() => console.log("CLICKED")} loading type="outlined">
          <Typography>BUTTON</Typography>
        </Button>
        <Button onClick={() => console.log("CLICKED")} type="outlined">
          <Typography>BUTTON</Typography>
        </Button>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;