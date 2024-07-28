import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import ig from "../assets/ig.png";
import { Link } from "react-router-dom";
import igfill from "../assets/igfill.png";
import infilled from "../assets/infilled.png";
import xfill from "../assets/xfill.png";
import facebook from "../assets/facebook.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import emailjs from "emailjs-com";
import { useToast } from "./UnToastService";
import { BiSolidCheckCircle } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toast = useToast();
  // email registration

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_niebbrc",
        "template_hxzsoi8",
        form.current,
        "eQXRbKY4nPtScPlL-"
      )
      .then(
        (result) => {
          console.log(result.text);
         toast.open(
           <div className="flex gap-2 bg-gray-100 text-white p-5 rounded-xl shadow-xl">
             <BiSolidCheckCircle color="#3bb77e" size={24} />
             <div className="text-[15.5px] font-Quicksand text-[#3bb77e]">
               Your Subscribtion was successfull
             </div>
           </div>,
           3000
         );
          toast.close(id);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div
        className="section overflow-hidden z-10 fixed top-[-1.1px]"
        ref={menuRef}
      >
        {/* logo section */}

        <div className="flex items-center justify-center -mt-4 flex-col gap-2 xl:-gap-8">
          <Link
            to="/"
            className="z-10 mb-2 w-40 xl:w-48 md:w-48 -ml-28 xl:-ml-40 md:-ml-44 "
          >
            {" "}
            <img
              src={logo}
              className="z-10 w-40 xl:w-40 md:w-48 -ml-5 md:ml-0 "
            />
          </Link>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white z-10 w-[20rem] xl:w-[23rem] md:w-[24rem] h-12 md:h-12 xl:h-10 rounded-[28px] flex items-center justify-between -ml-9 xl:ml-0 md:ml-0"
          >
            <input
              className="w-[10rem] xl:w-[14rem] md:w-[14rem] -pl-2 xl:pl-2 md:pl-2 outline-none h-full ml-5 xl:ml-7 md:ml-7 "
              type="email"
              name="email"
              placeholder="Johnchuks@example.com"
            />{" "}
            <button
              type="submit"
              className=" outline-none font-Inter cursor-pointer bg-[#3bb77e] border-none h-full text-white font-semibold text-[13px] md:text-[18px] text-center w-32 rounded-[28px]"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact button */}

        <button
          onClick={() => {
            setOpen(!open);
          }}
          className=" font-Poppins cursor-pointer z-10 text-white hidden md:flex items-center justify-center border-none bg-[#3bb77e] rounded-[28px] w-[7.3rem]  xl:w-40 md:w-48 mt-8 xl:mt-10 md:mt-10 gap-2 xl:gap-4 md:gap-4 h-10 md:h-14 xl:h-10 -mr-7 xl:mr-0 md:mr-0"
        >
          <h2 className=" text-[12px] md:text-[18px]">Contact Us</h2>{" "}
          <FaAngleDown />
        </button>

        <button
          onClick={() => {
            setOpen(!open);
          }}
          className=" font-Poppins cursor-pointer z-10 text-white flex md:hidden items-center justify-center border-none bg-[#3bb77e] rounded-[28px] w-[3.5rem]  xl:w-40 md:w-40 mt-8 xl:mt-10 md:mt-10 gap-2 xl:gap-4 md:gap-4 h-[3.5rem] -mr-7 xl:mr-0 md:mr-0"
        >
          <FaAngleDown />
        </button>

        {/* ContactModal  */}

        <div
          className={`flex fixed right-3 xl:right-9 md:right-9 top-[9rem] xl:top-[7rem]  items-center flex-col text-white justify-center shadow-lg bg-[#3bb77e] rounded-[30px] w-[230px] h-[250px] md:w-[265px] md:h-[310px] ${
            open ? `active` : `inactive`
          }`}
        >
          <div className="-ml-2 space-y-5 p2">
            <div className="-ml-3 md:-ml-5 flex flex-col items-start justify-start space-y-3 md:space-y-3.5">
              <h1 className="font-bold font-Quicksand -ml-1 text-[19px] md:text-[20px]">
                Follow Us
              </h1>
              <div className="flex items-center justify-start flex-row gap-7">
                <a
                  href="https://www.instagram.com/doormutng?igsh=bXVvaXVmOTQ0NTM1&utm_source=qr"
                  target="_blank"
                >
                  {" "}
                  <img
                    src={igfill}
                    className=" cursor-pointer w-[22px] md:w-[25px]"
                  />{" "}
                </a>
                <a
                  href="https://web.facebook.com/DoormutAfrica"
                  target="_blank"
                >
                  {" "}
                  <img
                    src={facebook}
                    className=" cursor-pointer w-[12px] md:w-[14px]"
                  />{" "}
                </a>
                <a href="https://twitter.com/DoormutAfrica" target="_blank">
                  {" "}
                  <img
                    src={xfill}
                    className=" cursor-pointer w-[22px] md:w-[25px]"
                  />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/company/doormut-africa/"
                  target="_blank"
                >
                  <img
                    src={infilled}
                    className=" cursor-pointer w-[23px] md:w-[26px]"
                  />
                </a>
              </div>
              <h2 className=" cursor-pointer font-medium font-Quicksand text-[16px] md:text-[18px]">
                Doormutng
              </h2>
            </div>
            <div className=" -ml-3 md:-ml-5 flex flex-col items-start justify-start space-y-2 md:space-y-3.5">
              <h1 className="font-bold font-Quicksand -ml-1 text-[18px] md:text-[20px]">
                Contact Us
              </h1>
              <a href="mailto:contact@doormut.com" target="_blank">
                {" "}
                <li className=" font-Quicksand list-none cursor-pointer text-[14px] md:text-[16px] flex items-center gap-4 justify-center">
                  <img src={mail} className="w-[28px]" />
                  info@doormut.com
                </li>{" "}
              </a>
              <li className=" font-Quicksand list-none cursor-pointer text-[14px] md:text-[16px] flex items-center gap-4 justify-center">
                <img src={phone} className="w-[28px]" />
                +234 7083025233
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
