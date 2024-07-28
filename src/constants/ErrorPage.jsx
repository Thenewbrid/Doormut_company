import React from 'react'
import error from "../assets/error.svg"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className="scroll gap-10 md:gap-14 flex-col h-[80vh] w-[100%] flex items-center justify-center">
      <div className=" mt-40 flex items-center  justify-center  w-[18rem] h-[18rem] md:w-[30rem] md:h-[30rem] xl:w-[19rem] xl:h-[19rem]">
        {" "}
        <img src={error} className="w-full h-full " />
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        {" "}
        <h2 className="text-[#f79e1b] font-Quicksand font-[600] text-[18px] md:text-[25px]">
          Opps... Page not found
        </h2>
        <p className="text-gray-700 text-[11px] md:text-[15px]">
          The page you are looking for does not exsit
        </p>
      </div>
      <Link
        to="/"
        className=" w-48 md:w-52 flex items-center xl:mb-10 justify-center p-3 h-14 rounded-full text-white bg-[#3bb77e]"
      >
        Go To Home
      </Link>
    </div>
  );
}

export default ErrorPage
