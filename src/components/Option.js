import React, { useContext } from "react";
import { LabelContext } from "../labelDataContext";
import { Container, Form, Row, Col } from "react-bootstrap";

import user from '../user-4-24.png';
import users from '../conference-call-24.png'
import Button from "react-bootstrap/Button";
// import { Button } from "bootstrap";
import Card from "react-bootstrap/Card";

import "../styles.css";

const GetShippingOption = (props) => {
  const val = useContext(LabelContext);
  
  // const btnDisbaled = shipping.length > 0;

  return (
    <Container >
      <Form>
        <h3 className="text-center fw-bold"> How are you planning to use Eden? </h3>
        <h6 className="text-center text-secondary mb-5">
          We'll streamline your setup experience accordingly.
        </h6>
        <Container className="justify-content-center mb-3">
        <Row className="justify-content-center">
          <Col xs={12} lg={9} md={8} >
          <Row >
            <Col>
              <Card style={{borderColor:'#6b40d8'}}>
                <Card.Body>
                <Card.Img variant="top" src={user} style={{width:'15%'}} className="my-3" />
                  <Card.Title className=" text-left">For Myself</Card.Title>
                  <Card.Text>
                   Write better. Think more clearly. Stay organised
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card   >
                <Card.Body >
                <Card.Img variant="top" src={users} style={{width:'15%'}} className="my-3"    />
                  <Card.Title className="text-start">With my Team</Card.Title>
                  <Card.Text>
                   Wikis, docs,tasks & projects, all in one place
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </Col>
          </Row>
          

        </Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={9} md={8} >
        <Button 
          className="outline "
          onClick={() => val.nextPage()}
          style={{ color: "white", width: "100%", background: "#6b40d8 " }}
        >
          Create Workspace
        </Button>
        </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default GetShippingOption;
