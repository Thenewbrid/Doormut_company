import React,{useRef} from "react";
import homebg from "../../assets/homebg .png";
import homebg2 from "../../assets/homebg2.png";
import bg from "../../assets/bg.png";
import bg2 from "../../assets/bg3 .png";
import igfill from "../../assets/igfill.png";
import infilled from "../../assets/infilled.png";
import mail from "../../assets/mail.png";
import  xfill from "../../assets/xfill.png";
import phone  from "../../assets/phone.png";
import facebook from "../../assets/facebook.png";
import logo from "../../assets/logo.png";
import Typewriter from "typewriter-effect";
import emailjs from "emailjs-com";
import { useToast } from "../../constants/UnToastService";
import { BiSolidCheckCircle } from "react-icons/bi";

const HomeHeader = () => {
  // email registration
  const form = useRef();
  
    const toast = useToast();

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

  return (
    <div className=" scroll  w-full flex items-center justify-center  max-md:h-[1.5rem] xl:h-[14.5rem] md:h-[1.6rem]  max-md:-top-[1rem] max-md:mb-[13rem] xl:mb-[30rem] lg:mb-[37rem] md:mb-[33rem] overflow-hidden">
      <img
        className="w-[100%] contrast-100 backdrop-contrast-150 z-10 absolute hidden xl:flex md:flex md:-top-[0.0%] object-cover"
        src={bg}
      />
      <img
        className="w-[100%] contrast-100 backdrop-contrast-150 contrast-70 z-10 absolute flex xl:hidden md:hidden -top-[0.1%] object-cover"
        src={bg2}
      />

      <div className="absolute z-10 flex items-left text-left gap-4 md:gap-5 flex-col left-6 xl:left-36 lg:left-28 md:left-14 xl:gap-8 top-[5rem] xl:top-[15rem] lg:gap-10 lg:top-[13rem] md:top-[10rem]">
        <img
          src={logo}
          className="w-24 md:w-40 xl:w-48 -top-10 md:-top-20 xl:-top-40 lg:-top-36 absolute"
        />

        {/* <h1 className="text-white font-extrabold font-Quicksand text-[25px] xl:text-[56px] md:text-[46px]">
        We Are Coming Soon
      </h1> */}
        <div className="relative mb-9 mt-2 md:mb-20 lg:mb-12 xl:mb-16 w-[90%] md:w-full">
          <div className="flex absolute -ml-1 w-[140%] md:w-full">
            <Typewriter
              options={{
                strings: [
                  '<span class="text-white font-extrabold font-Quicksand text-[21px] xl:text-[56px] md:text-[40px]">We Are Coming Soon</span>',
                  '<span class="text-[#f79e1b] font-extrabold font-Quicksand text-[21px] xl:text-[52px] md:text-[40px]">Online shopping experience...</span>',
                  '<span class="text-[#f79e1b] font-extrabold font-Quicksand text-[21px] xl:text-[52px] md:text-[40px]">For Groceries...</span>',
                  '<span class="text-[#f79e1b] font-extrabold font-Quicksand text-[21px] xl:text-[52px] md:text-[40px]">Personal care products,etc.</span>',
                  '<span class="text-[#3bb77e] font-extrabold font-Quicksand text-[21px] xl:text-[52px] md:text-[40px]">Sell fast on doormut</span>',
                  '<span class="text-[#3bb77e] font-extrabold font-Quicksand text-[21px] xl:text-[52px] md:text-[40px]">Earn as dispatch</span>',
                  '<span class="text-[#3bb77e] font-extrabold font-Quicksand text-[21px] xl:text-[52px] md:text-[40px]">Partener with us</span>',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 70,
                cursorClassName: "active",
                delay: 50,
              }}
            />
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white z-10 w-[18rem] xl:w-[30rem] md:w-[28rem] h-[2.7rem] xl:h-12 md:h-12 rounded-[28px] flex items-center justify-between -ml-1 xl:ml-0 md:ml-0"
        >
          <input
            className="w-[9.5rem] xl:w-[14rem] md:w-[16rem] -pl-2 xl:pl-2 md:pl-2 outline-none h-full ml-7 xl:ml-7 md:ml-7 "
            placeholder="Johnchuks@example.com"
            type="email"
            name="email"
          />{" "}
          <button
            type="submit"
            className=" font-Inter outline-none cursor-pointer bg-[#3bb77e] border-none h-full text-white font-semibold text-center w-32 rounded-[28px]"
          >
            Submit
          </button>
        </form>
        {/* SOCIAL MEDIA SECTION */}
        <div className=" flex items-center justify-center flex-row gap-7 md:gap-16 xl:gap-32">
          {/* FOLLOW US */}
          <div className=" flex items-left justify-center flex-col gap-2 md:gap-4 xl:gap-6">
            <h2 className=" text-white font-Quicksand font-semibold text-[16px] md:text-[25px] xl:text-[28px]">
              Follow Us
            </h2>
            <div className="flex items-center justify-center flex-row gap-5 md:gap-8">
              <a
                href="https://www.instagram.com/doormutng?igsh=bXVvaXVmOTQ0NTM1&utm_source=qr"
                target="_blank"
              >
                {" "}
                <img
                  src={igfill}
                  className=" cursor-pointer w-[1rem] md:w-[1.95rem] xl:w-[1.95rem]"
                />
              </a>
              <a href="https://web.facebook.com/DoormutAfrica" target="_blank">
                {" "}
                <img
                  src={facebook}
                  className=" cursor-pointer w-[0.7rem] md:w-[1.2rem] xl:w-[1.1rem] "
                />
              </a>
              <a href="https://twitter.com/DoormutAfrica" target="_blank">
                {" "}
                <img
                  src={xfill}
                  className=" cursor-pointer w-[1rem] md:w-[1.8rem] xl:w-[1.8rem]"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/doormut-africa/"
                target="_blank"
              >
                {" "}
                <img
                  src={infilled}
                  className=" cursor-pointer w-[1.3rem] md:w-[2.2rem] xl:w-[2.2rem]"
                />
              </a>
            </div>
          </div>
          {/* CONTACT US */}
          <div className=" flex items-left justify-center flex-col gap-1 md:gap-2 xl:gap-6 ">
            <h2 className=" text-white font-Quicksand font-semibold text-[16px] md:text-[25px]  xl:text-[28px]">
              Contact Us
            </h2>
            <div className="flex max-md:items-left md:items-center max-md:justify-start md:justify-center xl:justify-center flex-col md:flex-row gap-1 md:gap-6 xl:md:gap-16 ">
              <a href="mailto:contact@doormut.com" target="_blank">
                {" "}
                <div className=" cursor-pointer flex items-left justify-left flex-row gap-4 ">
                  {" "}
                  <img
                    src={mail}
                    className="w-[1.3rem] md:w-[2.3rem] xl:w-[2.3rem]"
                  />{" "}
                  <h3 className="text-white font-Quicksand font-[600] text-[12px] md:text-[17px] xl:text-[18px]">
                    info@doormut.com
                  </h3>
                </div>{" "}
              </a>
              <div className=" cursor-pointer flex items-left justify-left flex-row gap-4 ">
                {" "}
                <img
                  src={phone}
                  className="w-[1.3rem] md:w-[2.3rem] xl:w-[2.3rem]"
                />{" "}
                <h3 className="text-white font-Quicksand font-[600] text-[12px] md:text-[17px] xl:text-[18px]">
                  +234 7083025233
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
