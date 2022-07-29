import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
// import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../styles.css";

import { Row,Col,Stack,Container } from "react-bootstrap";
const SenderAddress = (props) => {
  const value = useContext(LabelContext);
  const sender = value.labelInfo.sender;
  const btnDisbaled = sender.name.length > 0;
  return (
    <Container>
      <Form >
        <h3 className="text-center fw-bold "> Welcome! First things first...</h3>
        <h6 className="text-center text-secondary mb-5 ">You can always change them later.</h6>
        <Row className="justify-content-center">
          <Col xs={12} lg={8} md={7} >
          <Form.Group className="mb-3" >
          <Form.Label className="fw-bold fs-6">Full Name</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Steve Jobs "
            onChange={value.setSenderInfo("name")}
            value={sender.name}
          />
        </Form.Group>
          </Col>
          
        </Row>
      <Row className="justify-content-center">
        <Col xs={12} lg={8} md={7}>
        <Form.Group className="mb-3" >
          <Form.Label className="fw-bold fs-6">Display Name</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Steve"
            onChange={value.setSenderInfo("street")}
            value={sender.street}
          />
        </Form.Group>
        </Col>

      </Row>
<Row className="justify-content-center">
  <Col xs={12} lg={8} md={7}>
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
  </Col>
</Row>
       

      </Form>
    </Container>
  );
};
export default SenderAddress;
