import React, { useContext } from "react";
import "./styles.css";
import image from "./logo.png";
import Stepper from "react-stepper-horizontal";
import SenderAddress from "./components/SenderAddress";
import RecevierAddress from "./components/RecevierAddress";
import Confirmation from "./components/Confirmation";
import ShippingOption from "./components/ShippingOption";
// import Printonly from "./components/PrintOnly";
import { LabelContext } from "./labelDataContext";

const App = (props) => {
  const value = useContext(LabelContext);
  return (
    <>
      <div
        style={{
          display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection:'column',width:'100%', background:''
        }}
      ><div>

        <img style={{}} src={image} alt={"dfd"} />
      </div>

        {value.page !== 4 && (
        <div style={{width:'25%', height:'30%'}}>


          <Stepper steps={value.steps} activeStep={value.page} activeColor={'#6b40d8'}  completeColor={'#6b40d8'}/>
        </div>
        )}
        <div style={{width:'50%'}}>

        {value.page === 0 && <SenderAddress />}
        {value.page === 1 && <RecevierAddress />}
        {value.page === 2 && <ShippingOption />}
        {value.page === 3 && <Confirmation />}
        {/* {value.page === 4 && <Printonly />} */}
        </div>
      </div>
    </>
  );
};
export default App;
