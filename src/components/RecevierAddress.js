import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";


import { Button, Stack, Form, InputGroup,Row, Col } from "react-bootstrap";

const RecevierAddress = (props) => {
  const value = useContext(LabelContext);
  const recevier = value.labelInfo.recevier;
  const btnDisbaled =
    recevier.name.length > 0  ;
    
  return (
    <Form>
      <h3 className="text-center fw-bold"> Let's Setup a home for all your work</h3>
      <h6 className="text-center mb-5 text-secondary ">
        You can always create another workspace later
      </h6>
      <Row className="justify-content-center">
          <Col xs={12} lg={8} md={7} >

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className="fw-bold">Workspace Name</Form.Label>
        <Form.Control
          type="Text"
          placeholder={(value.labelInfo.sender.name)}
          required
          onChange={value.setRecevierInfo("name")}
          value={recevier.name}
        />
      </Form.Group>
          </Col>
          </Row>
          <Row className="justify-content-center">
          <Col xs={12} lg={8} md={7} >
      <Form.Label htmlFor="basic-url" className="fw-bold">
        Workspace URL
        <Form.Text className="text-muted">(optional)</Form.Text>
      </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">www.eden.com/</InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          onChange={value.setRecevierInfo("street")}
          value={recevier.street}
        />
      </InputGroup>
      </Col>
      </Row>
      <Row className="justify-content-center">
          <Col xs={12} lg={8} md={7} >
      <Stack>
        <Button
          className="p-2"
          disabled={!btnDisbaled}
          varient="primary"
          onClick={() => value.nextPage()}
          style={{ color: "white", background: "#6b40d8 " }}
        >
          Create Workspace
        </Button>
      </Stack>
      </Col>
      </Row>

    </Form>
  );
};
export default RecevierAddress;
