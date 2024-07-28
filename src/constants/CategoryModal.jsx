import React from "react";
import { BiDownArrowCircle } from "react-icons/bi";

const CategoryModal = () => {
  return (
    <div className="flex absolute right-3 xl:right-96 md:right-9 top-[55rem] items-center flex-col text-gray-800 justify-center shadow-lg bg-white rounded-[30px] w-[315px] h-[211px]">
      <div className="flex items-center justify-center gap-16 flex-row">
        <h1 className=" text-[25px] text-gray-500 font-[550] mb-2 mt-4 ">
          Select Category
        </h1>
        <span className="text-[22px] text-gray-400 mt-3 bg ">
          <BiDownArrowCircle />
        </span>
      </div>
      <div className="scroll w-[320px] h-[339px] -ml-2 -space-y-10 mb-6 p-10 overflow-y-scroll overflow-x-hidden">
        <div className=" flex -ml-7 items-left justify-center flex-col pl-4 p-6 -mt-16 ">
          <h1 className="font-[600] text-wrap text-left text-[19px]">
            Supermarket
          </h1>
          <p className=" w-[19rem] text-wrap text-[14.5px] text-left">
            Sell all kinds of products from house hold utensils
          </p>
        </div>

        <div className=" flex -ml-7 items-left justify-center flex-col pl-4 p-6 -mt-16 ">
          <h1 className="font-[600] text-wrap text-left text-[19px]">
            Butchery
          </h1>
          <p className=" w-[19rem] text-wrap text-[14.5px] text-left">
            Sales of beef,fish,chicken,lamb,sausage, turkey,hot-dogs etc.
          </p>
        </div>

        <div className=" flex -ml-7 items-left justify-center flex-col pl-4 p-6 -mt-16">
          <h1 className="font-[600] text-wrap text-left text-[19px]">
            Fruits & Vegetables
          </h1>
          <p className=" w-[19rem] text-wrap text-[14.5px] text-left">
            Sales of fruits and vegetables
          </p>
        </div>

        <div className=" flex -ml-7 items-left justify-center flex-col pl-4 p-6 -mt-16 ">
          <h1 className="font-[600] text-wrap text-left text-[19px]">
            Drinks & Liqour
          </h1>
          <p className=" w-[19rem] text-wrap text-[14.5px] text-left">
            Soda drinks,liqour,wine,whisky etc.
          </p>
        </div>

        <div className="  flex -ml-7 items-left justify-center flex-col pl-4 p-6 -mt-16 ">
          <h1 className="font-[600] text-wrap text-left text-[19px]">Pastry</h1>
          <p className=" w-[19rem] text-wrap text-[14.5px] text-left">
            Sales of bread and pastries
          </p>
        </div>

        <div className=" flex -ml-7 items-left justify-center flex-col pl-4 p-6 -mt-16">
          <h1 className="font-[600] text-wrap text-left text-[19px]">
            Cosmetics
          </h1>
          <p className="w-[19rem] text-wrap text-[14.5px] text-left">
            Sales of personal and beauty products
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
