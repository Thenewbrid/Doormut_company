import React from "react";
import check from "../../assets/check-icon.png";
import { Link } from "react-router-dom";
const SuccessModal = () => {
  return (
    <div className="h-[100vh] self-center fixed z-50  top-0 bottom-0 w-[100%] bg-[#0000003f] flex items-center justify-center">
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-center py-12 w-[22.5rem] xl:w-[36rem] md:w-[36rem] bg-white rounded-2xl"
      >
        <img
          src={check}
          alt="check-icon"
          className="h-[7rem] w-[7rem] mb-2 -mt-2"
        />
        <h1 className=" font-Quicksand text-[1.6rem] font-semibold text-[#3bb77e]">
          Your submission
        </h1>
        <h1 className=" font-Quicksand text-[1.6rem] -mt-1 font-semibold text-[#3bb77e]">
          was successful.
        </h1>
        <p className=" font-Quicksand text-[16px] font-medium">
          We will get back to you shortly .
        </p>
        <Link to="/">
          <button className=" font-Quicksand outline-none cursor-pointer mt-5 bg-[#3bb77e] w-40 h-10   rounded-[30px] text-white">
            Back HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessModal;
