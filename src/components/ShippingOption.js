import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../styles.css";

const GetShippingOption = (props) => {
  const val = useContext(LabelContext);
  const [shipping, setshipping] = React.useState("");
  const setId = (event) => {
    event.preventDefault();
    setshipping(event.target.value);
  };
  const btnDisbaled = shipping.length > 0;

  return (
    <form  style={{ width: "100%", textAlign: "center" }}>
       <h1 style={{}}> How are you planning to use Eden?</h1>
        <h4 style={{ color: "gray" }}>We'll streamline your setup experience accordingly.</h4>
      <RadioGroup
        aria-label="weight"
        name="weight"
        value={shipping}
        className="form"
        onChange={setId}
      >
        <FormControlLabel
          control={<Radio />}
          label="Ground"
          value="1"
          onChange={val.handleChange("shippingOption")}
        />
        <FormControlLabel
          control={<Radio />}
          label="Priority"
          value="2"
          onChange={val.handleChange("shippingOption")}
        />
      </RadioGroup>
      <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="text  button group"
            style={{ marginTop: 15, width: "50%" }}
          >
            <Button
              disabled={!btnDisbaled}
              onClick={() => val.nextPage()}
              style={{ color: "white", width: "100%", background:'#6b40d8 '   }}
            >
              Create Workspace
            </Button>
          </ButtonGroup>
    </form>
  );
};
export default GetShippingOption;
