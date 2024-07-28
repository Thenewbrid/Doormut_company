import React, { useState } from 'react'
// import RegisterHeader from '../components/Register/RegisterHeader'
import Stepper from '../components/Register/Stepper'
// import SubscribeCard from '../constants/SubscribeCard'
import Add2 from "../constants/Add2";
import RegisterBottom from '../constants/RegisterBottom'
import Add from '../constants/Add';
import Add3 from '../constants/Add3';
// import SuccessModal from '../components/Register/SuccessModal';


const RegisterPage = () => {
    const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  
   const pre = () => {
     setFormNo(formNo - 1);
   };
  
  return (
    <div className="scroll flex-1  overflow-y-scroll overflow-x-hidden flex flex-col gap-10 items-center justify-center">
      {formNo === 1 ? (
        <div>
          <Add />
        </div>
      ) : null}
      {formNo === 2 ? (
        <div>
          <Add2 pre={pre} />
        </div>
      ) : null}
      {formNo === 3 ? (
        <div>
          <Add3 pre={pre} />
        </div>
      ) : null}
      {/* <RegisterHeader /> */}

      <Stepper
        pre={pre}
        formArray={formArray}
        formNo={formNo}
        setFormNo={setFormNo}
      />

      {/* <SubscribeCard />   */}
      <RegisterBottom formArray={formArray} formNo={formNo} />
    </div>
  );
}

export default RegisterPage
