import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
// import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import "../styles.css";
import Stack from "react-bootstrap/Stack";
const SenderAddress = (props) => {
  const value = useContext(LabelContext);
  const sender = value.labelInfo.sender;
  const btnDisbaled = sender.name.length > 0;
  return (
    <Container>
      <Form >
        <h3 className="text-center "> Welcome! First things first...</h3>
        <h6 className="text-center text-secondary mb-5">You can always change them later.</h6>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Steve Jobs "
            onChange={value.setSenderInfo("name")}
            value={sender.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Steve"
            onChange={value.setSenderInfo("street")}
            value={sender.street}
          />
        </Form.Group>
<Stack  >

        <Button
        className="p-2"
          style={{ background: "#6b40d8 ", color: "white"  }}
          varient="primary"
          type="submit"
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          >
          Submit
        </Button>
          </Stack>
      </Form>
    </Container>
  );
};
export default SenderAddress;
