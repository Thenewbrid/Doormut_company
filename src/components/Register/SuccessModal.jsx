import React from "react";
import check from "../../assets/check-icon.png";
import supe from "../../assets/img/super.jpg"; 
import wine from "../../assets/img/wine.jpg";
import cus from "../../assets/img/cosmetics.jpg";
import meat from "../../assets/img/meat.jpg";
import bread from "../../assets/img/bread.jpg";
import fruit from "../../assets/img/fruits.jpg";
import { Link } from "react-router-dom";
const SuccessModal = () => {
  return (
    <div className="h-[100vh] self-center fixed z-50  top-0 bottom-0 w-[100%] bg-[#0000003f] flex items-center justify-center">
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-center w-[26rem] xl:w-[36rem] md:w-[38rem] bg-white rounded-2xl"
      >
        <div className="fade flex items-center justify-center relative w-full ">
         
          <div className="fade1 absolute bottom-5 space-y-1 left-8">
            <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
              Supermarkets
            </h1>
            <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[18rem] md:max-w-[22rem] -mt-1 font-medium text-[#fff]">
              Sell varieties of different groceries and house hold products on
              doormut
            </p>
          </div>
          <div className="fade2 absolute bottom-5 space-y-1 left-8">
            <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
              Drinks Store
            </h1>
            <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[18rem] md:max-w-[22rem] -mt-1 font-medium text-[#fff]">
              Sell both alcoholic and non alcoholic drinks on doormut
            </p>
          </div>
          <div className="fade3 absolute bottom-5 space-y-1 left-8">
            <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
              Beauty Products
            </h1>
            <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[18rem] md:max-w-[22rem] -mt-1 font-medium text-[#fff]">
              Sell your range of skin care, make up and other beuty products.
            </p>
          </div>

          <div className="fade4 absolute bottom-5 space-y-1 left-8">
            <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
              Butchery
            </h1>
            <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[19rem] md:max-w-[23rem] -mt-1 font-medium text-[#fff]">
              Put your butchery store on the map and gain mor profits selling
              beef, lahm, chicken, fish, frozen foods etc.
            </p>
          </div>
          <div className="fade5 absolute bottom-5 space-y-1 left-8">
            <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
              Fruits and Vegetables
            </h1>
            <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[19rem] md:max-w-[23rem] -mt-1 font-medium text-[#fff]">
              Put your vegetables and fruits store business on doormut and reach
              more customers
            </p>
          </div>
          <div className="fade6 absolute bottom-5 space-y-1 left-8">
            <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
              Bakery
            </h1>
            <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[19rem] md:max-w-[23rem] -mt-1 font-medium text-[#fff]">
              Sell all varieties of pasteries on doormut, grow your business and
              reach more customers
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-12 max-md:gap-7 max-md:mt-5 md:mt-7 max-md:mb-5 md:mb-7 flex-row">
          <img src={check} className="w-[4.5rem]" />
          <div className=" flex flex-col md:gap-2 max-md:gap-1.5">
            <h1 className=" font-Quicksand md:text-[1.4rem] max-md:text-[0.95rem] -mt-1 font-semibold text-[#3bb77e]">
              Your subscribtion was successful
            </h1>
            <p className=" font-Quicksand md:text-[16px] max-md:text-[12px] font-medium">
              We will get back to you shortly
            </p>
          </div>
        </div>

        <Link to="/">
          <button className="mb-8 font-Quicksand outline-none cursor-pointer mt-5 bg-[#3bb77e] md:w-[27rem] max-md:w-[21rem] h-10 rounded-[10px] text-white">
            Back HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessModal;
