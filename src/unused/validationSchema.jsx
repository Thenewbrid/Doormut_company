// import * as yup from "yup";

// const passwordRules = /^(?=.*[a-z])(?=.*[A-Z]){5,}$/;
// // min 6 characters , 1 uppercase letter, 1 lowercase letter,1 numeric character

// const emailRules =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//  export const basicSchema = yup.object().shape({
//  email: yup.string().matches(emailRules,{message: "Please enter a valid email"}).required("Email is equired"),

//  password: yup.string().min(5,"Password must be more than 6 characters").required("Password is required"),

//  businessCategory: yup.string().required("Business category is required"),

//  firstName: yup.string().required("First name is required"),

//  lastName: yup.string().required("Last name is required"),

// businessName: yup.string().required("Business name is required"),

// operatingCities: yup.string().required("Operating cities is required"),

// headOffice: yup.string().required("Head office is required"),

// phoneNumber: yup.number().positive().integer().required("Phone Number is required"),
// })

 <div className=" shadow-2xl"></div> 
    
// //     try {
// //   

// //    const response = await axios.post("https://doormut.onrender.com/api/v1/vendors/register", {
// //   vendor_id: state.vendor_Id,
// //   first_name: state.firstName,
// //    last_name: state.lastName,
// //    email: state.email,
// //    password: state.password,
// //    store_type: state.business_Category,
// //   //  store_id: state.store_Id,
// //    phone: state.phoneNumber,
// //    account_info: {
// //     bankName: "",
// //     bankCode: "",
// //     bankAccount: "",
// //    },
// //    business_info:{
// //    business_name: state.businessName,
// //    business_city: state.operatingCities,
// //    business_adress: state.headOffice,
// //    incorporation_certificate: certificateOfIncorporation.name,
// //    document_2: taxIdNumber.name,
// //    // document_3: soldProducts.name,
// //    },

// //    });
   
// //   setIsSuccess(false);

// //  } catch (error) {  
// // toast.open(<ErrorModal />, 5000);
// //  toast.close(id);
// //   }
// // 


//             {
//               /* <div className="flex flex-col mb-2">
//               <label
//                 htmlFor="password"
//                 className="  flex mb-3 text-[17px] xl:text-[18px] md:text-[18px] text-gray-800"
//               >
//                 <p>Password* </p>
//               </label>
//               <input
//                 value={state.password}
//                 onChange={inputHandle}
//                 className={`p-2 border border-slate-300 mt-1 outline-none focus:border-[#3bb77e] pl-4 rounded-2xl ${
//                   error ? "border-red-600" : "border-slate-300"
//                 } `}
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 id="password"
//                 autoComplete="true"
//               />

//               {showPassword ? (
//                 <FaRegEye
//                   size={20}
//                   onClick={handleShowhide}
//                   className=" cursor-pointer transform translate-x-[255px] translate-y-[-27px] md:translate-x-[560px] md:translate-y-[-30px] xl:translate-x-[630px] xl:translate-y-[-30px]"
//                 />
//               ) : (
//                 <FaRegEyeSlash
//                   size={20}
//                   onClick={handleShowhide}
//                   className=" cursor-pointer transform translate-x-[255px] translate-y-[-27px] md:translate-x-[560px] md:translate-y-[-30px] xl:translate-x-[630px] xl:translate-y-[-30px]"
//                 />
//               )}
//               {error.password && (
//                 <p className="text-red-600 -mt-2"> {error.password} </p>
//               )}
//             </div> */
// }
            


//   <div className="fade relative flex items-center justify-center w-full ">
//     <div className="fade1 absolute w-full ">
//       <img
//         src={supe}
//         className=" w-full object-cover h-60 rounded-tl-2xl rounded-tr-2xl"
//       />
//       <div className=" absolute bottom-5 space-y-1 left-8">
//         <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
//           Supermarkets
//         </h1>
//         <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[18rem] md:max-w-[22rem] -mt-1 font-medium text-[#fff]">
//           Sell varieties of different groceries and house hold products on
//           doormut
//         </p>
//       </div>
//     </div>

//     <div className="fade2 absolute  w-full ">
//       <img
//         src={wine}
//         className=" w-full object-cover h-60 rounded-tl-2xl rounded-tr-2xl"
//       />
//       <div className="absolute bottom-5 space-y-1 left-8">
//         <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
//           Drinks Store
//         </h1>
//         <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[18rem] md:max-w-[22rem] -mt-1 font-medium text-[#fff]">
//           Sell both alcoholic and non alcoholic drinks on doormut
//         </p>
//       </div>
//     </div>

//     <div className="fade3 absolute w-full ">
//       <img
//         src={cus}
//         className=" w-full object-cover h-60 rounded-tl-2xl rounded-tr-2xl"
//       />
//       <div className=" absolute bottom-5 space-y-1 left-8">
//         <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
//           Beauty Products
//         </h1>
//         <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[18rem] md:max-w-[22rem] -mt-1 font-medium text-[#fff]">
//           Sell your range of skin care, make up and other beuty products.
//         </p>
//       </div>
//     </div>

//     <div className="fade4 absolute w-full ">
//       <img
//         src={meat}
//         className=" w-full object-cover h-60 rounded-tl-2xl rounded-tr-2xl"
//       />
//       <div className=" absolute bottom-5 space-y-1 left-8">
//         <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
//           Butchery
//         </h1>
//         <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[19rem] md:max-w-[23rem] -mt-1 font-medium text-[#fff]">
//           Put your butchery store on the map and gain mor profits selling beef,
//           lahm, chicken, fish, frozen foods etc.
//         </p>
//       </div>
//     </div>

//     <div className="fade5 absolute w-full ">
//       <img
//         src={fruit}
//         className=" w-full object-cover h-60 rounded-tl-2xl rounded-tr-2xl"
//       />
//       <div className=" absolute bottom-5 space-y-1 left-8">
//         <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
//           Fruits and Vegetables
//         </h1>
//         <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[19rem] md:max-w-[23rem] -mt-1 font-medium text-[#fff]">
//           Put your vegetables and fruits store business on doormut and reach
//           more customers
//         </p>
//       </div>
//     </div>

//     <div className="fade6 absolute w-full ">
//       <img
//         src={bread}
//         className=" w-full object-cover h-60 rounded-tl-2xl rounded-tr-2xl"
//       />
//       <div className=" absolute bottom-5 space-y-1 left-8">
//         <h1 className=" font-Quicksand text-[1.2rem] font-semibold text-[#3bb77e]">
//           Bakery
//         </h1>
//         <p className=" font-Quicksand text-[0.85rem] max-md:max-w-[19rem] md:max-w-[23rem] -mt-1 font-medium text-[#fff]">
//           Sell all varieties of pasteries on doormut, grow your business and
//           reach more customers
//         </p>
//       </div>
//     </div>
//   </div>;

   