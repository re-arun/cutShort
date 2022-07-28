import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";


import { Button, Stack, Form, InputGroup } from "react-bootstrap";

const RecevierAddress = (props) => {
  const value = useContext(LabelContext);
  const recevier = value.labelInfo.recevier;
  const btnDisbaled =
    recevier.name.length > 0  ;
    
  return (
    <Form>
      <h3 className="text-center"> Let's Setup a home for all your work</h3>
      <h6 className="text-center mb-5 text-secondary ">
        You can always create another workspace later
      </h6>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Workspace Name</Form.Label>
        <Form.Control
          type="Text"
          placeholder={(value.labelInfo.sender.name)}
          required
          onChange={value.setRecevierInfo("name")}
          value={recevier.name}
        />
      </Form.Group>

      <Form.Label htmlFor="basic-url">
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
    </Form>
  );
};
export default RecevierAddress;
