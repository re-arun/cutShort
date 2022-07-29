
import React, {   useContext } from "react";
import { LabelContext } from "../labelDataContext";



import { Button, Container,Stack, Row, Col } from "react-bootstrap";

import "../styles.css";
import ok from '../ok-48.png'
import { upper } from "../common/normalijation";

const Confirmation = () => {
  const value = useContext(LabelContext);
 

 
  return (
    <>
      <Container>
        <img src={ok} alt="Ok" className="rounded mx-auto d-block mt-4" />
        <div>
          <h3 className="text-center mt-4 font-weight-bold ">
            Congratulations, {upper(value.labelInfo.sender.name)}!
          </h3>
          <h6 className="text-center text-secondary mb-4  fs-6   ">
            You have completed onboarding, you can start using the Eden!
          </h6>
        </div>
        <Row className="justify-content-center">
          <Col xs={12} lg={8} md={7} >
        <Stack>
          <Button
            style={{ background: "#6b40d8 ", color: "white" }}
            varient="primary"
            type="submit"
            onClick={() => alert("You have successfully onboarded!")}
          >
            Launch Eden
          </Button>
        </Stack>
        </Col>
        </Row>
      </Container>
    </>
  );
};
export default Confirmation;
