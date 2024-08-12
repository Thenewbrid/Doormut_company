import React from 'react'
import igfill from "../assets/igfill.png";
import infilled from "../assets/infilled.png";
import mail from "../assets/mail.png";
import  xfill from "../assets/xfill.png";
import phone  from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
     <footer className='flex-1 footer h-[60vh] md:h-[46vh] landscape:h-[70vh] xl:h-[68vh]'>
    <footer className="footer-section relative -bottom-20 flex-col md:flex-row xl:flex-row gap-10 md:gap-32 lg:gap-42 xl:gap-60  z-40 h-[55vh] md:h-[41vh] landscape:h-[54vh] xl:h-[56vh]">
   
   <Link to='/' className='z-10 w-40  md:w-48 xl:w-48 -mt-64 md:-mt-28 lg:mt-40 xl:mt-60 landscape:-top-36 absolute md:relative'>
<img src={logo} className="cursor-pointer w-full "/>
   </Link>
    

{/* SOCIAL MEDIA SECTION */}
<div className=" z-10 flex items-center justify-center flex-row gap-14 md:-mt-44 lg:-mt-40  xl:-mt-24 md:gap-24 lg:gap-28 xl:gap-20">
   {/* FOLLOW US */}
   <div className=" flex items-left justify-center flex-col gap-6 md:gap-6 xl:gap-5">
    <h2 className=" text-white font-Quicksand font-semibold text-[16px] md:text-[25px] xl:text-[25px]" >Follow Us</h2>
    <div className='w-24 border-[1px] bg-[#f79e1b] border-[#f79e1b]' />
    <div className="flex items-center justify-center flex-row gap-5 md:gap-8">
    <a href="https://www.instagram.com/doormutng?igsh=bXVvaXVmOTQ0NTM1&utm_source=qr" target="_blank" >  <img src={igfill} className=" cursor-pointer w-[1rem] md:w-[1.95rem] xl:w-[1.5rem]"/> </a>
    <a href="https://web.facebook.com/DoormutAfrica" target="_blank">  <img src={facebook} className=" cursor-pointer w-[0.7rem] md:w-[1.2rem] xl:w-[0.8rem] "/> </a>
    <a href="https://twitter.com/DoormutAfrica" target="_blank">  <img src={xfill} className=" cursor-pointer w-[1rem] md:w-[1.8rem] xl:w-[1.4rem]"/> </a>
      <a href="https://www.linkedin.com/company/doormut-africa/" target="_blank" >  <img src={infilled} className=" cursor-pointer w-[1.3rem] md:w-[2.2rem] xl:w-[1.7rem]"/> </a>
    </div>
    </div>
    {/* CONTACT US */}
    <div className=" flex items-left justify-start flex-col mt-14 md:mt-20 lg:mt-20 xl:mt-16 gap-6 md:gap-6 xl:gap-6 ">
    <h2 className=" text-white font-Quicksand font-semibold text-[16px] md:text-[25px]  xl:text-[25px]">Contact Us</h2>
    <div className='w-24 border-[1px] bg-[#f79e1b] border-[#f79e1b]' />  
     <div className="flex items-left md:items-left justify-start md:justify-start flex-col gap-1 md:gap-6 xl:md:gap-4 ">
      <div className=" cursor-pointer flex items-left justify-center flex-row gap-10 "> <img src={phone} className="w-[1.3rem] md:w-[2.3rem] xl:w-[1.7rem]"/> <h3 className="text-white font-Quicksand font-[600] text-[12px] md:text-[14px] xl:text-[17px]">+234 7083025233</h3></div> 
      <a href="mailto:contact@doormut.com" target="_blank" >  <div className=" cursor-pointer flex items-left justify-center flex-row gap-6 ">  <img src={mail} className="w-[1.3rem] md:w-[2.3rem] xl:w-[1.8rem]"/> <h3 className="text-white font-Quicksand font-[600] text-[12px] md:text-[14px] xl:text-[17px]">info@doormut.com</h3></div> </a>
    </div>
    <div className='bg-white border-[1px]' />
   </div>

   </div>

  
    </footer>
  </footer>
  )
}

export default Footer
