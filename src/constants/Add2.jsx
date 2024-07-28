import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Add2({pre}) {
  return (
    <>
      <div>
        <div className=" px-3 md:px-0 xl:px-0 block items-center relative justify-center h-[170px] xl:h-[300px] md:h-[220px] w-[360px] xl:w-[680px] md:w-[590px] xl:mb-10 md:mb-32 mb-10">
          {" "}
          <Link to="/">
            <button className="px-5 max-md:ml-8 mb-8 outline-none cursor-pointer py-3 text-lg flex items-center justify-center flex-row rounded-full w-[10rem] text-white bg-[#3bb77e]">
              {" "}
              Back Home
            </button>
          </Link>
          <div className="flex flex-col xl:p-10 h-full w-full overflow-hidden rounded-[20px] bg-[#f79e1b] shadow-md items-center justify-center mb-40 xl:mb-[15rem] md:mb-[18rem]">
            <div class="bg-[#f9ac40] rounded-full h-full xl:p-[10rem] -ml-80 md:-ml-[35rem]  md:w-[45rem] w-[30rem] "></div>
            <div className=" absolute text-white font-Quicksand font-semibold text-[26px] md:text-[35px] md:w-[35rem] w-[24rem] text-center">
              {" "}
              Make more customers on Doormut
            </div>
          </div>
          <button
            onClick={pre}
            className="px-5 -mt-32 md:-mt-64 xl:-mt-52  max-md:ml-8 md:ml-5 xl:ml-1 outline-none cursor-pointer py-3 text-lg flex items-center justify-center gap-2 flex-row rounded-full w-[10rem] text-white bg-[#3bb77e]"
          >
            {" "}
            <BiLeftArrowAlt size={22} />
            Previous
          </button>
        </div>
      </div>
    </>
  );
}

export default Add2;
