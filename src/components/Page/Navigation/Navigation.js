import React from "react";
import { useNavigate } from "react-router";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Navigation = () => {
  let navigate = useNavigate();

  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
    >
      <Button onClick={() => navigate("/tony")}>Tony's Wiki</Button>
      <Button onClick={() => navigate("/chole")}>Chole's Wiki</Button>
    </ButtonGroup>
  );
};

export default Navigation;
