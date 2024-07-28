import React from "react";
import ImageContainer from "./ImageContainer";
import QuestionBox from "./QuestionBox";

const RegisterBottom = ({formArray , formNo }) => {

  return (
    <div className=" flex flex-col gap-24 md:gap-28 items-center justify-center mb-24 xl:mb-[8.5rem] lg:mb-[7rem] md:mb-[4rem]">
      <ImageContainer formArray={formArray} formNo={formNo} />
      <QuestionBox />
    </div>
  );
};

export default RegisterBottom;
