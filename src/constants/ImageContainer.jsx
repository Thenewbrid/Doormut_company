import React from 'react'
import step1 from "../assets/img/step1.jpg";
import step2 from "../assets/img/step2.jpg";
import step3 from "../assets/img/step3.jpg";

function ImageContainer({formArray , formNo }) {
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className=" block items-center justify-center h-[230px] xl:h-[300px] md:h-[280px] w-[360px] xl:w-[680px] md:w-[590px] "
      >
        <div className=" overflow-hidden relative h-full w-full rounded-[20px] shadow-md items-center justify-center mb-40 xl:mb-[15rem] md:mb-[18rem]">
 <div className='load w-full h-full'>
          {formNo === 1 ? (
            <img
              src={step1}
              className=" object-cover h-full w-[100%] rounded-[20px] "
            />
          ) : null}
          {formNo === 2 ? (
            <img
              src={step2}
              className=" object-cover h-full w-[100%] rounded-[20px] "
            />
          ) : null}
          {formNo === 3 ? (
            <img
              src={step3}
              className=" object-cover h-full w-[100%] rounded-[20px] "
            />
          ) : null}

          </div>
        </div>
      </div>
    </>
  );
}

export default ImageContainer
