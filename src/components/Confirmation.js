
import React, { useState, useEffect, useContext } from "react";
import { LabelContext } from "../labelDataContext";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import InputAdornment from "@mui/material/InputAdornment";
import "../styles.css";
import ok from '../ok-48.png'
import { upper } from "../common/normalijation";

const Confirmation = () => {
  const value = useContext(LabelContext);
  const [shippingCoast, setshippingCoast] = useState(0);

  useEffect(() => {
    const weight = value.labelInfo.weight;
    const shippingOption = value.labelInfo.shippingOption;

    const shippingRate = 0.4,
      shippingCost = weight * shippingRate * (shippingOption === "1" ? 1 : 1.5);

    const shippingTotal = shippingCost.toFixed(2);
    setshippingCoast(shippingTotal);
  }, [value.labelInfo.shippingOption, value.labelInfo.weight]);
  console.log(shippingCoast, "shippingCoast");
  console.log(value, "value");
  return (
    < >
    <div  style={{ width: "100%", textAlign: "center" , marginTop:50}}>

  

  

      {/* <h6> Sender Details</h6> */}
<img src={ok} alt="Ok"  />
      <div style={{marginTop:25}}>
        <p
          style={{ margin: 8, width: "93%" , fontWeight:'bold', fontSize:30}}
          
        
        >
          Congratulations, {upper(value.labelInfo.sender.name)}!
        </p>
        <p style={{color:'gray'}}>
          You have completed onboarding, you can start using the Eden!
        </p>
        
      </div>
      <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="text  button group"
            style={{ marginTop: 15, width: "50%" }}
          >
            <Button
              // disabled={!btnDisbaled}
              onClick={() => value.nextPage()}
              style={{ color: "white", width: "100%", background:'#6b40d8 '   }}
            >
            Launch Eden
            </Button>
          </ButtonGroup>
          </div>
          
    </>
  );
};
export default Confirmation;
