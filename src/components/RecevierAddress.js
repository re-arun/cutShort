import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
// import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const RecevierAddress = (props) => {
  const value = useContext(LabelContext);
  const recevier = value.labelInfo.recevier;
  const btnDisbaled =
    recevier.name.length > 0  ;
    
  return (
    <form  style={{ width: "100%", textAlign: "center", background:'green' }}>
       <h1 style={{}}> Let's Setup a home for all your work</h1>
        <h4 style={{ color: "gray" }}>You can always create  another workspace later</h4>
        <p style={{ width: "64%" }}>Workspace Name</p>
      <input
      type={'text'}
        placeholder={(value.labelInfo.sender.name)}
        style={{
            width: "50%",
            height: 40,
            borderRadius: 5,
            borderColor: "#e3dfde",
            borderWidth: 0.4,
            paddingLeft:15
          }}
        fullWidth
        margin="normal"
        required
        onChange={value.setRecevierInfo("name")}
        value={recevier.name}
      />
        <p
          style={{
          justifyContent:'flex-start'
          }}
        >
          Workspace URL <span style={{color:'gray'}}>(optional)</span>
        </p>
      <input
      placeholder="Example"
        type={'url'}
        style={{
            width: "50%",
            height: 40,
            borderRadius: 5,
            borderColor: "#e3dfde",
            borderWidth: 0.4,
            paddingLeft:15,
          }}
        fullWidth
        margin="normal"
        required
        onChange={value.setRecevierInfo("street")}
        value={recevier.street}
      />
   
      <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="text  button group"
            style={{ marginTop: 15, width: "50%" }}
          >
            <Button
              disabled={!btnDisbaled}
              onClick={() => value.nextPage()}
              style={{ color: "white", width: "100%", background:'#6b40d8 '   }}
            >
              Create Workspace
            </Button>
          </ButtonGroup>
    </form>
  );
};
export default RecevierAddress;
