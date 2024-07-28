import React,{useRef} from "react";
import emailjs from "emailjs-com";
import { useToast } from "./UnToastService";
import { BiSolidCheckCircle } from "react-icons/bi";

const SubscribeCard = () => {
  const form = useRef()

    const toast = useToast();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_niebbrc', 'template_hxzsoi8', form.current, 'eQXRbKY4nPtScPlL-')
      .then((result) => {
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
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  
  return (
  <>
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      className=" px-3 md:px-0 xl:px-0 block items-center justify-center h-[230px] xl:h-[300px] md:h-[280px] max-md:w-[360px] xl:w-[680px] md:w-[590px] max-md:mb-32 xl:mb-[12rem] lg:mb-[12rem] md:mb-[15rem]"
    >
      {" "}
      
      <div className="flex flex-col xl:p-10 h-full w-full rounded-[20px] bg-[#3bb77e] shadow-md items-center justify-center mb-40 xl:mb-[15rem] md:mb-[18rem]">
        <h2 className=" font-Poppins text-white text-[1.1rem] xl:text-[1.1rem] md:text-[1.1rem] -mt-3 mb-2">
          Be the first to know
        </h2>
        <h2 className=" font-Poppins text-white text-[0.9rem] xl:text-[1.5rem] md:text-[1.35rem] mb-3">
          Never miss our latest updates and promos
        </h2>
        <h1 className=" font-Poppins text-white text-[1.4rem] xl:text-[2rem] md:text-[1.8rem] mb-5 font-bold">
          Subscribe To Our Newsletter
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white w-[20rem] xl:w-[23rem] md:w-[23rem] h-[3rem] rounded-[28px] flex items-center justify-between"
        >
          {" "}
          <input
            className="w-[12rem] xl:w-[14rem] md:w-[14rem] -pl-2 xl:pl-2 md:pl-2 outline-none h-full ml-7 "
            placeholder="Johnchuks@example.com"
          />{" "}
          <button
            type="submit"
            className=" font-Inter outline-none cursor-pointer bg-[#f79e1b] text-[10px] border-none h-full text-white font-semibold text-center w-32 rounded-[28px]"
          >
            Subscribe
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default SubscribeCard;
