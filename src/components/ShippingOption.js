import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
import { Container, Form, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";

import Button from "react-bootstrap/Button";
// import { Button } from "bootstrap";
import Card from "react-bootstrap/Card";

import "../styles.css";

const GetShippingOption = (props) => {
  const val = useContext(LabelContext);
  
  // const btnDisbaled = shipping.length > 0;

  return (
    <Container>
    <Form >
      <h3 > How are you planning to use Eden? </h3>
      <h6>
        We'll streamline your setup experience accordingly.
      </h6>
      <Container className="d-flex p-2 bd-highlight">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Button
        onClick={() => val.nextPage()}
        style={{ color: "white", width: "100%", background: "#6b40d8 " }}
      >
        Create Workspace
      </Button>
    </Form>
    </Container>
  );
};
export default GetShippingOption;
