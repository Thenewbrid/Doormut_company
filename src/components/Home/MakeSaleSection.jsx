import React from "react";
import sales from "../../assets/sales.png";
import { Link } from "react-router-dom";
const MakeSaleSection = () => {
  return (
    <div className="flex items-center overflow-hidden justify-center bg-white landscape:gap-44 gap-28 xl:gap-40 md:gap-20 mt-24 xl:mt-14 md:mt-10 flex-col xl:flex-row md:flex-row w-full p-5 xl:p-10 md:p-[1.7rem] max-md:mb-28 xl:mb-36 md:mb-44 lg:mb-44">
      {/* image section */}
      <img
      data-aos="zoom-in"
        src={sales}
        alt="Sales"
        className="w-[16rem] xl:w-[19rem] landscape:w-[19rem] md:w-[20rem] landscape:ml-12"
      />

      {/* text/button section */}
      <div className="flex items-left justify-center p-1 xl:p-2 md:p-2 w-full xl:w-[35rem] md:w-[31rem] -mt-12 xl:-mt-12 md:-mt-2 gap-6 md:gap-10 xl:gap-10 flex-col landscape:ml-12">
        <h1 data-aos="fade-left" className=" font-Poppins text-[30px] xl:text-[60px] md:text-[42px] font-[950] xl:font-[800] md:font-[900]">
          Make more sales
        </h1>
        <p data-aos="fade-left" className=" font-Quicksand text-[14px] xl:text-[20.5px] md:text-[18.5px] font-[400] ">
          Boost your sales on doormut and reach more custumers to up your sales
        </p>
        <Link to="/register">
          {" "}
          <button
           data-aos="zoom-in"
            className="h-[60px] font-Inter w-[230px] md:h-[70px] md:w-[300px] cursor-pointer mt-6 bg-[#f79813]
         text-white text-[17px] md:text-[20px] xl:text-[20px]  border-none outline-none rounded-[50px] "
          >
            REGISTER HERE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MakeSaleSection;
