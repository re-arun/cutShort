import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
// import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../styles.css";

const SenderAddress = (props) => {
  const value = useContext(LabelContext);
  const sender = value.labelInfo.sender;
  const btnDisbaled = sender.name.length > 0;
  return (
    <div>
      <form style={{ width: "100%", textAlign: "center" }}>
        <h1 style={{fontFamily:'Inter' }}> Welcome! First things first...</h1>
        <h4 style={{ color: "gray" }}>You can always change them later.</h4>

        {/* <TextField
        label="Steve Jobs"
        style={{ margin: 8, width: "93%" }}
        fullWidth
        margin="normal"
        required
        onChange={value.setSenderInfo("name")}
        value={sender.name}
      /> */}
        <p style={{ width: "57%" }}>Full Name</p>
        <input
        type={'text'}
          placeholder="Steve Jobs"
          style={{
            width: "50%",
            height: 40,
            borderRadius: 5,
            borderColor: "#e3dfde",
            borderWidth: 0.4,
            paddingLeft:15,
          }}
          
          // margin="normal"
          required
          onChange={value.setSenderInfo("name")}
          value={sender.name}
        />
        <p
          style={{
            width: "60%",
          }}
        >
          Display Name
        </p>
        <input
        type={'text'}
          placeholder="Steve"
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
          onChange={value.setSenderInfo("street")}
          value={sender.street}
        />

        <div>
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
        </div>
      </form>
    </div>
  );
};
export default SenderAddress;
