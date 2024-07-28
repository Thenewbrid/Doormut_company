import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function QuestionBox() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
  return (
    <div className="flex flex-col gap-14 max-xl:p-28 -mt-6 md:-mt-24 xl:-mt-5  max-md:p-6">
      <div data-aos="fade-right" className="flex flex-col gap-2 max-md:ml-2">
        <h1 className="font-semibold font-Quicksand text-[20px] md:text-[25px]">
          Frequently Asked Questions
        </h1>
        <p className="font-medium font-Quicksand text-[12px] md:text-[18px]">
          You have some questions to ask and you may just find th answers here
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="relative border-none xl:w-[40rem]">
          <li
            onClick={() => {
              setOpen1(!open1);
            }}
            data-aos="fade-up"
            className="font-semibold cursor-pointer font-Quicksand text-[14.5px] md:text-[20px] flex items-center justify-between flex-row bg-slate-100 p-10 h-12 w-full"
          >
            <p className=" md:-ml-4 -ml-5 ">
              How does grocery delivery work on Doormut ?
            </p>{" "}
            {!open1 ? (
              <FaAngleDown
                className="cursor-pointer"
                onClick={() => {
                  setOpen1(!open1);
                }}
              />
            ) : (
              <FaAngleUp
                className="cursor-pointer"
                onClick={() => {
                  setOpen1(!open1);
                }}
              />
            )}
          </li>
          {open1 && (
            <div className="relative transition-ease ease-in shadow-md top-[0.5rem] p-5 w-full bg-gray-100">
              <p>
                Grocery delivery allows customers to browse your shop on the
                Doormut app. Customers can add items to their cart,place
                orders,and pay through the Doormut App. You'll then prepare the
                order,and a courier will deliver it to the cutomer .
              </p>
            </div>
          )}
        </div>
        <div className="relative border-none xl:w-[40rem]">
          <li
            onClick={() => {
              setOpen2(!open2);
            }}
            data-aos="fade-up"
            className="font-semibold cursor-pointer font-Quicksand text-[14.5px] md:text-[20px] flex items-center justify-between flex-row  bg-slate-100 p-10 h-12 w-full"
          >
            <p className=" md:-ml-4 -ml-5 ">How do i manage Inventory ?</p>{" "}
            {!open2 ? (
              <FaAngleDown
                className="cursor-pointer"
                onClick={() => {
                  setOpen2(!open2);
                }}
              />
            ) : (
              <FaAngleUp
                className="cursor-pointer"
                onClick={() => {
                  setOpen2(!open2);
                }}
              />
            )}
          </li>
          {open2 && (
            <div className="relative transition-ease ease-in shadow-md top-[0.5rem] p-5 w-full bg-gray-100">
              <p>
                As a business, you have the ability to manage available
                inventory through the Manager Portal. Simply mark items as out
                of stock as you run out of them, and you won't recieve any
                orders from that item.
              </p>
            </div>
          )}
        </div>
        <div className="relative border-none xl:w-[40rem]">
          <li
            onClick={() => {
              setOpen3(!open3);
            }}
            data-aos="fade-up"
            className="font-semibold cursor-pointer font-Quicksand text-[14px] md:text-[20px] flex items-center justify-between flex-row bg-slate-100 p-10 h-12 w-full"
          >
            <p className=" md:-ml-4 -ml-5 ">
              How do i sign up as a vendor on Doormut Vendors ?
            </p>
            {!open3 ? (
              <FaAngleDown
                className="cursor-pointer"
                onClick={() => {
                  setOpen3(!open3);
                }}
              />
            ) : (
              <FaAngleUp
                className="cursor-pointer"
                onClick={() => {
                  setOpen3(!open3);
                }}
              />
            )}
          </li>
          {open3 && (
            <div className="relative transition-ease ease-in shadow-md top-[0.5rem] p-5 w-full bg-gray-100">
              <p>
                To sign up as a vendor on Doormut Vendors, simply vist our
                website and click on th "Sign Up"/"Register" button. You will be
                guided through the registration process, where you'll need to
                provide some basic information about your business and products.
                Once your account is approved, you can start listing your
                products and selling on your platform.
              </p>
            </div>
          )}
        </div>
        <div className="relative border-none xl:w-[40rem]">
          <li
            onClick={() => {
              setOpen4(!open4);
            }}
            data-aos="fade-up"
            className="font-semibold cursor-pointer font-Quicksand text-[14.5px] md:text-[20px] flex items-center justify-between flex-row  bg-slate-100 p-10 h-12 w-full"
          >
            <p className=" md:-ml-4 -ml-5 ">
              {" "}
              What are the requirements to become a vendor on Doormut Vendors ?
            </p>{" "}
            {!open4 ? (
              <FaAngleDown
                className="cursor-pointer"
                onClick={() => {
                  setOpen4(!open4);
                }}
              />
            ) : (
              <FaAngleUp
                className="cursor-pointer"
                onClick={() => {
                  setOpen4(!open4);
                }}
              />
            )}
          </li>
          {open4 && (
            <div className="relative transition-ease ease-in shadow-md top-[0.5rem] p-5 w-full bg-gray-100">
              <p>
                We welcome vendors of all sizes and types, from individual
                artisans to established business. To become a vendor, you'll
                need to provide accurate and complete information during the
                registion process. Additionally,you must comply with our Terms
                and Conditions and adhere to our Policies and Guidelines
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <FaAngleUp/> */
}
