import React,{useRef} from "react";
import bg from "../../assets/bg.png";
import bg2 from "../../assets/bg3 .png";
import igfill from "../../assets/igfill.png";
import infilled from "../../assets/infilled.png";
import mail from "../../assets/mail.png";
import  xfill from "../../assets/xfill.png";
import phone  from "../../assets/phone.png";
import facebook from "../../assets/facebook.png";
import logo from "../../assets/logo.png";
import emailjs from "emailjs-com";
import { useToast } from "../constants/UnToastService";
import { BiSolidCheckCircle } from "react-icons/bi";

const RegisterHeader = () => {
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
    <div className=" max-w-[100%] scroll scroll-smooth flex items-center justify-center  h-[1.5rem] xl:h-[14.5rem] md:h-[1.6rem]  -top-[0px] mb-[10rem] xl:mb-[31rem] landscape:mb-[29                                rem] md:mb-[33rem] overflow-hidden">
      <img
        className="w-[100%] z-10 absolute hidden xl:flex md:flex md:-top-[0.0%] object-cover"
        src={bg}
      />
      <img
        className="w-[100%]  backdrop-contrast-125 brightness-95 z-10 absolute flex xl:hidden md:hidden -top-[0.1%] object-cover"
        src={bg2}
      />

      <div className="absolute z-10 flex items-left text-left gap-4 md:gap-5 flex-col left-6 xl:left-36 landscape:left-28 md:left-14 xl:gap-12 top-[3.2rem] xl:top-[10rem] landscape:gap-10 landscape:top-[11rem] md:top-[6.2rem]">
        <img
          src={logo}
          className="w-24 md:w-40 xl:w-48 -top-7 md:-top-16 xl:-top-44 landscape:-top-32 absolute"
        />

        <div className="flex flex-col gap-0 xl:gap-2 md:gap-0">
          <h1 className="text-white font-extrabold font-Quicksand text-[25px] xl:text-[56px] md:text-[46px]">
            Reach more customers
          </h1>
          <p className="text-[13px] font-Quicksand md:text-[25px] text-white text-wrap w-[25rem] md:w-[45rem] xl:w-[35rem]">
            Boost your sales on doormut and reach more customers to up your
            sales
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white z-10 w-[20rem] xl:w-[30rem] md:w-[28rem] h-10 xl:h-12 md:h-12 rounded-[28px] flex items-center justify-between -ml-1 xl:ml-0 md:ml-0"
        >
          <input
            className="w-[9.5rem] xl:w-[14rem] md:w-[16rem] -pl-2 xl:pl-2 md:pl-2 outline-none h-full ml-7 xl:ml-7 md:ml-7 "
            type="email"
            name="email"
            placeholder="Johnchuks@example.com"
          />{" "}
          <button
            type="submit"
            className=" font-Inter outline-none cursor-pointer bg-[#3bb77e] border-none h-full text-white font-semibold text-center w-32 rounded-[28px]"
          >
            Submit
          </button>
        </form>
        {/* SOCIAL MEDIA SECTION */}
        <div className=" flex items-start md:items-center justify-start flex-row gap-7 md:gap-16 xl:gap-32">
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
                  className="w-[1rem] md:w-[1.95rem] xl:w-[2rem]"
                />
              </a>
              <a href="https://web.facebook.com/DoormutAfrica" target="_blank">
                {" "}
                <img
                  src={facebook}
                  className="w-[0.7rem] md:w-[1.2rem] xl:w-[1.3rem]"
                />
              </a>
              <a href="https://twitter.com/DoormutAfrica" target="_blank">
                {" "}
                <img
                  src={xfill}
                  className="w-[1rem] md:w-[1.8rem] xl:w-[2rem]"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/doormut-africa/"
                target="_blank"
              >
                {" "}
                <img
                  src={infilled}
                  className="w-[1.3rem] md:w-[2.2rem] xl:w-[2.4rem]"
                />{" "}
              </a>
            </div>
          </div>
          {/* CONTACT US */}
          <div className=" flex items-left -mt-2 md:mt-0 justify-center flex-col gap-1 md:gap-2 xl:gap-6 ">
            <h2 className=" text-white font-Quicksand font-semibold text-[16px] md:text-[25px]  xl:text-[28px]">
              Contact Us
            </h2>
            <div className="flex items-left md:items-center justify-start md:justify-center xl:justify-center flex-col md:flex-row gap-1 md:gap-6 xl:md:gap-16 ">
              <a href="mailto:contact@doormut.com" target="_blank">
                {" "}
                <div className="flex items-center justify-center flex-row gap-4 ">
                  {" "}
                  <img
                    src={mail}
                    className="w-[1.3rem] md:w-[2.3rem] xl:w-[2.5rem]"
                  />{" "}
                  <h3 className="text-white font-Quicksand font-[600] text-[12px] md:text-[17px] xl:text-[18px]">
                    info@doormut.com
                  </h3>
                </div>{" "}
              </a>
              <div className="flex items-center justify-center flex-row gap-4 ">
                {" "}
                <img
                  src={phone}
                  className="w-[1.3rem] md:w-[2.3rem] xl:w-[2.5rem]"
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

export default RegisterHeader;
