
import React, { useState, useEffect, useContext } from "react";
import { LabelContext } from "../labelDataContext";
import TextField from "@mui/material/TextField";


import { Button, Container,Stack } from "react-bootstrap";

import InputAdornment from "@mui/material/InputAdornment";
import "../styles.css";
import ok from '../ok-48.png'
import { upper } from "../common/normalijation";

const Confirmation = () => {
  const value = useContext(LabelContext);
  const [shippingCoast, setshippingCoast] = useState(0);

 
  return (
    <>
      <Container>
        <img src={ok} alt="Ok" className="rounded mx-auto d-block mt-4" />
        <div>
          <h3 className="text-center mt-4 ">
            Congratulations, {upper(value.labelInfo.sender.name)}!
          </h3>
          <h6 className="text-center text-secondary mb-4 ">
            You have completed onboarding, you can start using the Eden!
          </h6>
        </div>
        <Stack>
          <Button
            style={{ background: "#6b40d8 ", color: "white" }}
            varient="primary"
            type="submit"
            onClick={() => alert("You have successfully onboarded!")}
          >
            Launch Eden
          </Button>
        </Stack>
      </Container>
    </>
  );
};
export default Confirmation;
