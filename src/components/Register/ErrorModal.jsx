import React, { useEffect } from "react";
import error from "../../assets/error.gif";

const ErrorModal = () => {
 
  return (
    <div  className="h-[100vh] self-center fixed z-50  top-0 bottom-0 w-[100%] bg-[#0000003f] flex items-center justify-center">
      <div data-aos="zoom-in" className="flex flex-col gap-1 md:gap-2 items-center justify-center py-9 md:py-10 w-[22.35rem] md:w-[26rem] bg-white rounded-2xl">
        <img
          src={error}
          alt="check-icon"
          className="h-[7rem] w-[7rem] md:h-[7.5rem] md:w-[7.5rem] mb-2 -mt-2"
        />
        <h1 className=" font-Quicksand text-[1.2rem] md:text-[1.6rem] font-semibold text-[#3bb77e]">
         Sorr an Error occurred
        </h1>
        <h1 className=" font-Quicksand text-[1.2rem] md:text-[1.6rem] -mt-1 font-semibold text-[#3bb77e]">
         While submiting Your detarls
        </h1>
        <p className=" font-Quicksand w-[20rem] md:w-[26rem] text-center p-6 text-[14px] md:text-[16px] font-medium">
         Please try again after 5 minutes or check your Internet connection
        </p>
      </div>
    </div>
  );
};

export default ErrorModal;
