import React, { useContext } from "react";
import "./styles.css";
import image from "./image.png";
import Stepper from "react-stepper-horizontal";
import { Container, Row,Col } from "react-bootstrap";
import SenderAddress from "./components/SenderAddress";
import RecevierAddress from "./components/RecevierAddress";
import Confirmation from "./components/Confirmation";
import ShippingOption from "./components/Option";

// import Printonly from "./components/PrintOnly";
import { LabelContext } from "./labelDataContext";
import Box from "@mui/material/Box";

const App = (props) => {
  const value = useContext(LabelContext);
  return (
    <>
      <Container>
        <Row xs="auto" className="justify-content-center mt-5">
          <Col xs={6} md={3} lg={3}>
            <img src={image} alt={"dfd"} className=" mx-auto d-block" />
          </Col>
        </Row>
        <Row xs="auto" className="justify-content-center mt-5">
          <Col xs={6} md={5} lg={4}>
            {value.page !== 4 && (
              <Stepper
                steps={value.steps}
                activeStep={value.page}
                activeColor={"#6b40d8"}
                completeColor={"#6b40d8"}
              />
            )}
          </Col>
        </Row>
        <Row  className="justify-content-center mt-5">
          <Col xs={12} lg={6} md={8}  className="">
            {value.page === 0 && <SenderAddress />}
            {value.page === 1 && <RecevierAddress />}
            {value.page === 2 && <ShippingOption />}
            {value.page === 3 && <Confirmation />}
            {/* {value.page === 4 && <Printonly />} */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default App;
