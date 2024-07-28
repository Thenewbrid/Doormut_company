import React, { useState, useEffect, useRef } from "react";
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiDownArrowCircle,
} from "react-icons/bi";
import { TiEye, TiEyeOutline, TiTick } from "react-icons/ti";
import {
  FaAngleDown,
  FaAngleUp,
  FaEye,
  FaEyeDropper,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import flag from "../../assets/flag.png";
import { GoUpload } from "react-icons/go";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";
import GooglePlcasesApi from "./GooglePlcasesApi";
import axios from "axios";
import DataLoader from "./DataLoader";
import SuccessLoader from "./SuccessLoader";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "../ToastService";
import { country } from "../../data";
import TermsAndConditions from "./Terms&Conditions.jsx";

const Stepper = ({ formArray, setFormNo, formNo, pre }) => {
  const toast = useToast();
  const [query, setQuery] = useState("");
  const [vendorsId, setVendorsId] = useState("");
  const [openTerms, setOpenTerms] = useState(false);

  // FUNCTION FOR CATEGORY MODAL
  const [stores, setStores] = useState([]);
  const [open, setOpen] = useState(false);

  // FUNCTION FOR COUNTRY MODAL
  const [selectedCountry, setSelectedCountry] = useState("");
  const [openCountry, setOpenCountry] = useState(false);

  // HANDLE LOCATION CHANGE
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });

  // FUNCTION FOR STEPPER COMPONENT
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  // const formArray = [1, 2, 3];
  // const [formNo, setFormNo] = useState(formArray[0]);

  // FUNCTIONS FOR INPUTS

  const [error, setError] = useState([]);
  const [errHeader, setErrHeader] = useState("");
  const [errHeader2, setErrHeader2] = useState("");
  const [errHeader3, setErrHeader3] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [certificateOfIncorporation, setCertificateOfIncorporation] =
    useState(null);
  const [taxIdNumber, setTaxIdNumber] = useState(null);
  const [soldProducts, setSoldProducts] = useState(null);


  // FETCHING STORES
  const fetchSTORES = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://doormut.onrender.com/api/v1/stores"
      );
      const data = await response.json();
      if (data) {
        setStores(data);
      }
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchSTORES();
  }, []);

  // USE EFFECT FOR BACKDROP-PRESS

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

  
  // const handleShowhide = () => {
  //   setShowPassword(!showPassword);
  // };

  //  FILE STATE CHANGES
  const onChangeCertificate = (e) => {
    setCertificateOfIncorporation(e.target.files[0]);
  };

  const onChangeTaxId = (e) => {
    setTaxIdNumber(e.target.files[0]);
  };
  const onChangeSoldProducts = (e) => {
    setSoldProducts(e.target.files[0]);
  };

  // GET FILES USING STATE MANAGEMENT
  const [state, setState] = useState({
    country: "",
    email: "",
    // password: "",
    business_Category: "",
    // store_Id: "",
    vendor_Id: "",
    firstName: "",
    lastName: "",
    businessName: "",
    radioInfo: "",
    checkedInfo: "",
    operatingCities: "",
    headOffice: "",
    phoneNumber: "",
    certificateOfIncorporation: "",
    taxIdNumber: "",
    soldProducts: "",
  });
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  // FORM VALIDATION

  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression for basic phone number validation (11 digits)
    const phoneRegex =
      /^(?:(?:(?:\+?234(?:\h1)?|01)\h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  // const isValidPassword = (password) => {
  //   // Regular expressions for password validation
  //   const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
  //   const numberRegex = /[0-9]/;
  //   const upperCaseRegex = /[A-Z]/;
  //   const lowerCaseRegex = /[a-z]/;
  //   return (
  //     password.length >= 8 &&
  //     symbolRegex.test(password) &&
  //     numberRegex.test(password) &&
  //     upperCaseRegex.test(password) &&
  //     lowerCaseRegex.test(password)
  //   );
  // };

  const validateForm1 = () => {
    let newErrors = {};
    if (!selectedCountry?.toLocaleLowerCase()) {
      newErrors.country = "Your country is required";
    }
    if (!state.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(state.email)) {
      newErrors.email = "Please enter in a valid email address";
    }
    // if (!state.password) {
    //   newErrors.password = "Password is required";
    // } else if (!isValidPassword(state.password)) {
    //   newErrors.password =
    //     "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
    // }
    if (!selected?.toLocaleLowerCase()) {
      newErrors.business_Category = "Your business category is required";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validateForm2 = () => {
    let newErrors = {};

    if (!state.firstName) {
      newErrors.firstName = "Your first name is required";
    }
    if (!state.lastName) {
      newErrors.lastName = "Your last name is required";
    }

    if (!state.businessName) {
      newErrors.businessName = "Your business name is required";
    }

    if (!state.operatingCities) {
      newErrors.operatingCities = "Operating cities is required";
    }

    if (!query) {
      newErrors.headOffice = "Head office location is required";
    }

    if (!state.phoneNumber) {
      newErrors.phoneNumber = "Your phone number is required";
    } else if (!isValidPhoneNumber(state.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 11 digits";
    }

    if (!state.radioInfo) {
      newErrors.radioInfo = "Please select 1 from any of the following";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // NEXT PAGE

  const next = async (e) => {
    e.preventDefault();

    const isValid1 = validateForm1();
    if (isValid1) {
      console.log("Form Submitted");
      setFormNo(formNo + 1);
    } else {
      console.log("Form Validation Failed");
      setErrHeader("Please fill all fields correctly");
    }
  };

  // next form 2

  const next2 = async (e) => {
    const isValid2 = validateForm2();
    if (isValid2) {
      console.log("Form Submitted");
      setFormNo(formNo + 1);
    } else {
      console.log("Form Validation Failed");
      setErrHeader2("Please fill all fields correctly");
    }

    if (query) {
      state.headOffice = query;
    }

    if (vendorsId) {
      state.vendor_Id = vendorsId;
    }
  };

  // PREVIOUS PAGE
  // const pre = () => {
  //   setFormNo(formNo - 1);
  // };
  // SUBMIT FUNCTION
  const post = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://doormut.onrender.com/api/v1/vendors/register",
        {
          vendor_id: state.vendor_Id,
          first_name: state.firstName,
          last_name: state.lastName,
          email: state.email,
          country: "Nigeria",
          store_type: state.business_Category,
          //  store_id: state.store_Id,
          phone: state.phoneNumber,
          accountInfo: {
            bankName: "",
            bankCode: "",
            bankAccount: "",
          },
          business_info: {
            business_name: state.businessName,
            business_city: state.operatingCities,
            business_address: state.headOffice,
            incorporation_certificate: state.certificateOfIncorporation.name,
            document_2: state.taxIdNumber.name,
            // document_3: state.soldProducts.name,
          },
        }
      );
      setIsSuccess(true);
    } catch (error) {
      toast.open(<ErrorModal />, 5000);
      toast.close(id);
      setLoading(false);
    }
  };

  const validateForm3 = () => {
    let newErrors = {};

    if (!state.checkedInfo) {
      newErrors.checkedInfo =
        "Please agree to the following terms and conditions in order to complete registration";
    }

    if (!certificateOfIncorporation) {
      newErrors.certificateOfIncorporation =
        "Please provide your Certificate Of Incorporation";
    }

    if (!taxIdNumber) {
      newErrors.taxIdNumber = "Please provide your Tax ID Number";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const finalSubmit = async (e) => {
    e.preventDefault();

    if (certificateOfIncorporation == certificateOfIncorporation) {
      state.certificateOfIncorporation = certificateOfIncorporation;
    }
    if (taxIdNumber == taxIdNumber) {
      state.taxIdNumber = taxIdNumber;
    }
    if (soldProducts == soldProducts) {
      state.soldProducts = soldProducts;
    }
    if (selected.toLocaleLowerCase()) {
      state.business_Category = selected;
    }
     if (selectedCountry.toLocaleLowerCase()) {
       state.country = selectedCountry;
     }
    // if (selectedId.toLocaleLowerCase()) {
    //   state.vendor_Id = selectedId;
    // }
    if (uuidv4) {
      state.vendor_Id = uuidv4();
    }
    if (query) {
      state.headOffice = query;
    }
    //  VALIDATION

    const isValid3 = validateForm3();
    if (isValid3) {
      console.log("Form Submitted", state);
      post();
    } else {
      console.log("Form Validation Failed");
      setErrHeader3("Please provide the compulsery documents ");
    }
  };

  return (
    <div className=" w-[375px] overflow-hidden xl:w-[900px] md:w-[730px] md:-mb-60 p-[2.6rem] md:p-5 xl:p-14 md:-mt-40 xl:-mt-20 bg-transparent  mt-32 flex justify-center items-center">
      {/*LOADING FUNCTIONS */}
      {!loading == true ? <SuccessLoader /> : null}
      {!isSuccess == false ? <SuccessModal /> : null}

      <div className=" bg-white overflow-hidden ">
        {formNo === 2 ? (
          <div className=" flex items-center mb-8 justify-center text-center -mt-2 xl:mt-44 md:mt-44 ">
            <h1 className="text-[#f79e1b] text-[35px] font-semibold">
              Almost Done
            </h1>
          </div>
        ) : null}

        {formNo === 3 ? (
          <div className=" flex items-center mb-8 justify-center text-center -mt-2 xl:mt-44 md:mt-44 ">
            <h1 className="text-[#3bb77e] text-[31px] font-semibold">
              {" "}
              Final Step
            </h1>
          </div>
        ) : null}

        {formNo === 1 ? (
          <div className=" flex items-center mb-10 xl:mb-14 md:mb-14 justify-center text-center -mt-1 xl:mt-40 md:mt-40">
            <h1 className="text-[#3bb77e] text-[20px] xl:text-[25px] md:text-[25px] font-medium">
              {" "}
              Be A <b>Partner</b> With Us Today And <br />{" "}
              <b>Grow Your Business</b>
            </h1>
          </div>
        ) : null}

        {/*   STEPPER  AND STEPPER FUNCTION */}

        <div className="flex justify-center items-center">
          {formArray?.map((v, i) => (
            <>
              <div
                className={`w-[35px] mb-20 my-3 text-white rounded-full ${
                  formNo - 1 === i ||
                  formNo - 1 === i + 1 ||
                  formNo === formArray.length
                    ? "bg-[#3bb77e]"
                    : "bg-slate-300"
                } h-[35px] flex justify-center items-center`}
              >
                {formNo === i + 2 + 1 ||
                formNo === i + 2 ||
                formNo === i - 2 ? (
                  <TiTick size={24} />
                ) : (
                  v
                )}
              </div>
              {i !== formArray.length - 1 && (
                <div
                  className={`w-[105px] xl:w-[305px] md:w-[255px] mb-[4.5rem] h-[5px] ${
                    formNo === i + 2 || formNo === formArray.length
                      ? "bg-[#f79e1b]"
                      : "bg-slate-200"
                  }
                  
                  `}
                ></div>
              )}
            </>
          ))}
        </div>

        {formNo === 1 ? (
          <div className=" flex items-center -mt-9 justify-center text-center mb-7">
            <p className="text-[15px] xl:text-[17px] md:text-[17px] text-gray-700 font-medium">
              {" "}
              Submit your details online and start making more sales than before
            </p>
          </div>
        ) : null}

        {formNo === 1 ? (
          <div className=" flex items-center mt-5 justify-center text-center mb-7">
            <p className="text-[17px] xl:text-[18px] md:text-[18px] text-red-600 font-medium">
              {errHeader}
            </p>
          </div>
        ) : null}

        {formNo === 2 ? (
          <div className="flex items-center justify-center -mt-9 mb-5 flex-col gap-3">
            <h1 className="text-[#3bb77e] text-[23px] font-semibold">
              Personal Details
            </h1>
            <p className="text-gray-600 text-[15px] xl:text-[17px] md:text-[17px] ">
              Please enter your personal details
            </p>
          </div>
        ) : null}

        {formNo === 2 ? (
          <div className=" flex items-center mt-5 justify-center text-center mb-7">
            <p className="text-[17px] xl:text-[18px] md:text-[18px] text-red-600 font-medium">
              {errHeader2}
            </p>
          </div>
        ) : null}

        {formNo === 3 ? (
          <div className="flex items-center justify-center -mt-9 mb-9 flex-col gap-3">
            <h1 className="text-[#3bb77e] text-[23px] font-semibold">
              Business Documents
            </h1>
            <p className="text-gray-600 text-[13px] xl:text-[17px] md:text-[17px] ">
              Please enter the required documents of business
            </p>
          </div>
        ) : null}

        {formNo === 3 ? (
          <div className=" flex items-center -mt-6 justify-center text-center mb-10">
            <p className="text-[14px] xl:text-[17px] md:text-[16px] text-red-600 font-medium">
              {errHeader3}
            </p>
          </div>
        ) : null}

        {/* STEPPER FORM 1 */}

        {formNo === 1 && (
          <div className="space-y-7 max-md:-mb-32  max-xl:-mb-[28rem] xl:p-10 xl:mb-[10rem] lg:mb-[36rem]  overflow-hidden h-[102vh]">
            <div className="relative flex flex-col mb-2">
              <label
                htmlFor="country"
                className="  flex mb-3 text-[17px] xl:text-[18px] md:text-[18px] text-gray-800"
              >
                Country*
              </label>
              {!openCountry ? (
                <FaAngleDown
                  className=" cursor-pointer absolute top-[3.8rem] md:md:top-[3.9rem] xl:top-[3.5rem] right-8"
                  onClick={() => {
                    setOpenCountry(!openCountry);
                  }}
                />
              ) : (
                <FaAngleUp
                  className=" cursor-pointer absolute top-[3.8rem] md:md:top-[3.9rem] xl:top-[3.5rem] right-8"
                  onClick={() => {
                    setOpenCountry(!openCountry);
                  }}
                />
              )}

              <div className="w-100% h-full">
                <div
                  value={state.country}
                  onClick={() => {
                    setOpenCountry(!openCountry);
                  }}
                  className={` cursor-pointer p-2 w-full border border-slate-300  mt-1 outline-none focus:border-[#3bb77e] pl-4 rounded-2xl ${
                    !selectedCountry && "text-gray-400"
                  } `}
                  name="country"
                  id="country"
                >
                  {selectedCountry ? selectedCountry : "Select Country"}
                </div>

                {/* COUNTRY MODAL */}

                <ul
                  className={`scroll flex absolute mb-10 top-[6rem] md:top-[6.5rem] xl:top-[5.5rem] items-center flex-col text-gray-800 justify-center shadow-lg rounded-[10px] p-0 md:p-5
                  w-[100%] h-[70px] xl:w-[100%] xl:h-[90px] bg-white md:w-[100%] md:h-[80px] ${
                    openCountry ? `active` : `inactive`
                  }`}
                >
                  <ul className="scroll w-[280px] h-[60px] md:h-[30px] md:-ml-80 flex items-start flex-col gap-5 md:gap-2 justify-start p-10 overflow-y-scroll overflow-hidden">
                    {country?.map((country) => (
                      <li
                        key={country.name}
                        onClick={() => {
                          if (
                            country?.name?.toLocaleLowerCase() !==
                            selectedCountry.toLocaleLowerCase()
                          ) {
                            setSelectedCountry(country.name);
                            setOpenCountry(!openCountry);
                          }
                        }}
                        className=" cursor-pointer flex gap-8 items-center md:last-of-type:-mb-20 last-of-type:-mb-16 -ml-7 justify-center hover:text-[#f79e1b] flex-row  p-6 -mt-10 md:-mt-10  "
                      >
                        <img src={country.img} />
                        <h1 className=" cursor-pointer font-[600]  text-wrap text-left text-[17px]">
                          {country.name}
                        </h1>
                      </li>
                    ))}
                  </ul>
                </ul>

                {/* END OF COUNTRY MODAL */}
              </div>
              {error.country && (
                <p className="text-red-600 mt-3"> {error.country} </p>
              )}
            </div>

            <div className="flex flex-col mb-2">
              <label
                htmlFor="email"
                className=" flex mb-3 text-[17px] xl:text-[18px] md:text-[18px] text-gray-800"
              >
                <p> Email*</p>
              </label>

              <input
                value={state.email}
                onChange={inputHandle}
                className={`p-2 border border-slate-300 mt-1 outline-none focus:border-[#3bb77e] pl-4 rounded-2xl ${
                  error ? "border-red-600" : "border-slate-300"
                } `}
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                autoComplete="true"
              />
              {error.email && (
                <p className="text-red-600 mt-3"> {error.email} </p>
              )}
            </div>

            <div className="relative flex flex-col mb-2" ref={menuRef}>
              <label
                htmlFor="business_Category"
                className="  flex mb-3 text-[17px] xl:text-[18px] md:text-[18px] text-gray-800"
              >
                Category of Business*
              </label>
              {!open ? (
                <FaAngleDown
                  className=" cursor-pointer absolute top-[3.8rem] md:top-[3.9rem] xl:top-[3.5rem] right-8"
                  onClick={() => {
                    setOpen(!open);
                  }}
                />
              ) : (
                <FaAngleUp
                  className=" cursor-pointer absolute top-[3.8rem] md:top-[3.9rem] xl:top-[3.5rem] right-8"
                  onClick={() => {
                    setOpen(!open);
                  }}
                />
              )}

              <div className="w-100% h-full">
                <div
                  value={state.business_Category}
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className={` cursor-pointer p-2 w-full border border-slate-300  mt-1 outline-none focus:border-[#3bb77e] pl-4 rounded-2xl ${
                    !selected && "text-gray-400"
                  } ${error ? "border-red-600" : "border-slate-300"} `}
                  name="business_Category"
                  id="business_Category"
                >
                  {selected ? selected : "Select Business Category"}
                </div>

                {/* CATEGORY MODAL */}

                <ul
                  className={`scroll flex absolute mb-10 right-1.5 xl:right-9 md:right-14 z-50 top-[6rem] md:top-[8rem] items-center flex-col text-gray-800 justify-center shadow-lg bg-white rounded-[30px] 
                  w-[300px] h-[215px] xl:w-[515px] xl:h-[215px] md:w-[515px] md:h-[215px] ${
                    open ? `active` : `inactive`
                  }`}
                >
                  <div className="flex items-center justify-center gap-16 flex-row">
                    <h1 className=" text-[23px] text-gray-500 font-[550] mb-2 mt-4">
                      Select Category
                    </h1>
                    <span className="text-[22px] text-gray-400 mt-3 bg ">
                      <BiDownArrowCircle />
                    </span>
                  </div>
                  {isLoading ? (
                    <DataLoader />
                  ) : (
                    <ul className="scroll w-[300px] h-[339px] ml-5 xl:-ml-16 md:-ml-20 -space-y-10 mb-6 p-10 overflow-y-scroll overflow-x-hidden">
                      {stores?.map((store) => (
                        <li
                          key={store.name}
                          onClick={() => {
                            if (
                              store?.name?.toLocaleLowerCase() !==
                              selected.toLocaleLowerCase()
                            ) {
                              setSelected(store.name);
                              setOpen(!open);
                            }
                            if (
                              store?._id?.toLocaleLowerCase() !==
                              selectedId.toLocaleLowerCase()
                            ) {
                              setSelectedId(store._id);
                            }
                          }}
                          className=" cursor-pointer flex -ml-7 items-left justify-center hover:text-[#f79e1b] flex-col pl-4 p-6 -mt-16 "
                        >
                          <h1 className=" cursor-pointer font-[600] mb-2 text-wrap text-left text-[17px]">
                            {store.name}
                          </h1>
                        </li>
                      ))}
                    </ul>
                  )}
                </ul>

                {/* END OF CATEGORY MODAL */}
              </div>
              {error.business_Category && (
                <p className="text-red-600 mt-3"> {error.business_Category} </p>
              )}
            </div>
            <div className="mt-4 flex justify-center items-center">
              <button
                disabled={
                  !selectedCountry.toLocaleLowerCase() ||
                  !state.email ||
                  !selected.toLocaleLowerCase()
                    ? true
                    : false
                }
                onClick={next}
                className={`px-3 outline-none disabled:bg-[#69bc95a9] cursor-pointer py-3 mt-20 flex items-center justify-center gap-5 flex-row ml-0  text-lg rounded-full w-[23rem] xl:w-[45rem] md:w-[47rem] text-white bg-[#3bb77e] 
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEPPER FORM 2 */}

        {formNo === 2 && (
          <div className=" mb-16  md:mb-[25rem] xl:mb-[20rem]">
            <div className="flex flex-col mb-7 overflow-hidden">
              <label
                className="text-slate-800 text-[17px] xl:text-[18px] md:text-[18px]"
                htmlFor="firstName"
              >
                First Name*
              </label>
              <input
                value={state.firstName}
                onChange={inputHandle}
                className="p-2 border pl-5 border-slate-400 mt-1 outline-none text-slate-900 focus:border-[#3bb77e] rounded-2xl"
                type="text"
                name="firstName"
                placeholder="First Name"
                id="firstName"
                autoComplete="true"
              />
              {error.firstName && (
                <p className="text-red-600 mt-3"> {error.firstName} </p>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label
                className="text-slate-800 text-[17px] xl:text-[18px] md:text-[18px]"
                htmlFor="lastName"
              >
                Last Name*
              </label>
              <input
                value={state.lastName}
                onChange={inputHandle}
                className="p-2 border pl-5 border-slate-400 mt-1 outline-none text-slate-900 focus:border-[#3bb77e] rounded-2xl"
                type="text"
                name="lastName"
                placeholder="Last Name"
                id="lastName"
                autoComplete="true"
              />
              {error.lastName && (
                <p className="text-red-600 mt-3"> {error.lastName} </p>
              )}
            </div>

            <div className="flex items-center justify-center mt-8 mb-7 flex-col gap-3">
              <h1 className="text-[#3bb77e] text-[23px] font-semibold">
                Business Details
              </h1>
              <p className="text-gray-600 text-[14px] xl:text-[17px] md:text-[17px] ">
                Please enter the details of your business
              </p>
            </div>

            <div className="flex flex-col mb-5">
              <label
                className="text-slate-800 text-[17px] xl:text-[18px] md:text-[18px]"
                htmlFor="businessName"
              >
                Business Name*
              </label>
              <input
                value={state.businessName}
                onChange={inputHandle}
                className="p-2 border pl-5 border-slate-400 mt-1 outline-none text-slate-900 focus:border-[#3bb77e] rounded-2xl"
                type="text"
                name="businessName"
                placeholder="Business Name"
                id="businessName"
                autoComplete="true"
              />
              {error.businessName && (
                <p className="text-red-600 mt-3"> {error.businessName} </p>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label
                className="text-slate-800 text-[17px] xl:text-[18px] md:text-[18px]"
                htmlFor="operatingCities"
              >
                Operating Cities*
              </label>
              <input
                value={state.operatingCities}
                onChange={inputHandle}
                className="p-2 border pl-5 border-slate-400 mt-1 outline-none text-slate-900 focus:border-[#3bb77e] rounded-2xl"
                type="text"
                name="operatingCities"
                placeholder="Operating Cities"
                id="operatingCities"
                autoComplete="true"
              />
              {error.operatingCities && (
                <p className="text-red-600 mt-3"> {error.operatingCities} </p>
              )}
            </div>

            <div className="flex flex-col mb-5">
              <GooglePlcasesApi
                setSelectedLocation={setSelectedLocation}
                query={query}
                setQuery={setQuery}
                vendorId={vendorsId}
                setVendorsId={setVendorsId}
              />
              {error.headOffice && (
                <p className="text-red-600 mt-3"> {error.headOffice} </p>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label
                className="text-slate-800 text-[17px] xl:text-[18px] md:text-[18px]"
                htmlFor="phoneNumber"
              >
                Phone Number*
              </label>
              <div className="flex items-center justify-between flex-row gap-2 xl:gap-5 md:gap-6">
                <div className="p-1 border flex items-center justify-center gap-4 border-slate-400 w-28 xl:w-32 md:w-32 mt-1 outline-none text-slate-900 focus:border-[#3bb77e] rounded-2xl">
                  {" "}
                  <img src={flag} /> <h2>+234</h2>
                </div>
                <input
                  value={state.phoneNumber}
                  onChange={inputHandle}
                  row="10"
                  className="p-2 pl-5 border border-slate-400 w-[15rem] xl:w-[38rem] md:w-[30rem] mt-1 outline-none text-slate-900 focus:border-[#3bb77e] rounded-2xl"
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                />
              </div>
              {error.phoneNumber && (
                <p className="text-red-600 mt-3"> {error.phoneNumber} </p>
              )}
            </div>

            <div className="flex items-left justify-center flex-col gap-5 mt-10">
              <label
                htmlFor="radioInfo"
                className="text-gray-800 ml-2 text-[18px] md:text-[25px] font-medium"
              >
                How did you hear about doormut ?
              </label>
              <div className="flex items-left justify-between gap-4 flex-col ">
                <div className="flex items-left justify-start ml-9 cursor-pointer flex-row gap-4">
                  <input
                    className="w-[1.43rem] h-[1.43rem] md:w-[1.50rem] md:h-[1.50rem]"
                    type="radio"
                    name="radioInfo"
                    value="A friend"
                    onChange={inputHandle}
                    checked={state.radioInfo === "A friend"}
                  />
                  <label
                    htmlFor="A friend"
                    className="text-gray-800 font-medium text-[17px] md:text-[19px] "
                  >
                    A Friend
                  </label>
                </div>
                <div className="flex items-center ml-9 cursor-pointer justify-start flex-row gap-4">
                  <input
                    className="w-[1.43rem] h-[1.43rem] md:w-[1.50rem] md:h-[1.50rem]"
                    type="radio"
                    name="radioInfo"
                    value="Google"
                    onChange={inputHandle}
                    checked={state.radioInfo === "Google"}
                  />
                  <label
                    htmlFor="Google"
                    className="text-gray-800 font-medium text-[17px] md:text-[19px] "
                  >
                    Google
                  </label>
                </div>
                <div className="flex items-center ml-9 cursor-pointer justify-start flex-row gap-4">
                  <input
                    className="w-[1.43rem] h-[1.43rem] md:w-[1.50rem] md:h-[1.50rem]"
                    type="radio"
                    name="radioInfo"
                    value="Facebook"
                    onChange={inputHandle}
                    checked={state.radioInfo === "Facebook"}
                  />
                  <label
                    htmlFor="Facebook"
                    className="text-gray-800 font-medium text-[17px] md:text-[19px] "
                  >
                    Facebook
                  </label>
                </div>
                <div className="flex items-center justify-start ml-9 cursor-pointer flex-row gap-4">
                  <input
                    className="w-[1.43rem] h-[1.43rem] md:w-[1.50rem] md:h-[1.50rem]"
                    type="radio"
                    name="radioInfo"
                    value="Instagram"
                    onChange={inputHandle}
                    checked={state.radioInfo === "Instagram"}
                  />
                  <label
                    htmlFor="Instagram"
                    className="text-gray-800 font-medium text-[17px] md:text-[19px] "
                  >
                    Instagram
                  </label>
                </div>
                <div className="flex items-center justify-start ml-9 cursor-pointer flex-row gap-4">
                  <input
                    className="w-[1.43rem] h-[1.43rem] md:w-[1.50rem] md:h-[1.50rem]"
                    type="radio"
                    name="radioInfo"
                    value="Linked in"
                    onChange={inputHandle}
                    checked={state.radioInfo === "Linked in"}
                  />
                  <label
                    htmlFor="Linked in"
                    className="text-gray-800 font-medium text-[17px] md:text-[19px] "
                  >
                    Linked in
                  </label>
                </div>
              </div>
              {error.radioInfo && (
                <p className="text-red-600 mt-3"> {error.radioInfo} </p>
              )}
            </div>

            <div className="mt-16 mb-20 gap-20 xl:gap-[28rem] md:gap-[26rem] flex justify-center items-center">
              {/* <button
                onClick={pre}
                className="px-3 outline-none cursor-pointer py-2 text-lg flex items-center justify-center gap-2 flex-row rounded-full w-[8rem] text-white bg-[#3bb77e]"
              >
                {" "}
                <BiLeftArrowAlt size={22} />
                Previous
              </button> */}
              <button
                disabled={
                  !state.firstName ||
                  !state.lastName ||
                  !state.businessName ||
                  !state.operatingCities ||
                  !query ||
                  !state.phoneNumber ||
                  !state.radioInfo
                }
                onClick={next2}
                className={`px-4 outline-none cursor-pointer disabled:bg-[#69bc95a9] py-3 text-lg flex items-center justify-center gap-5 flex-row rounded-full w-[23rem] xl:w-[45rem] md:w-[47rem] text-white bg-[#3bb77e]`}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEPPER FORM 3 */}

        {formNo === 3 && (
          <div className="overflow-x-hidden mb-0  md:mb-[16rem] xl:mb-[16rem] flex flex-col gap-6 items-center justify-center">
            {openTerms && <TermsAndConditions closeTerms={setOpenTerms} />}

            <div className="flex flex-col space-y-2 m3-7 mb-2">
              <label className="text-gray-800 text[18px] font-[600] xl:text[18px] md:text[18px]">
                Certificate of incorporation (PDF){" "}
                <span className="text-[18px] ml-2 text-bold text-red-600">
                  *
                </span>
              </label>
              <div className="flex items-center just-center flex-row gap-8 md:gap-14 ">
                <div className="w-[10.5rem] md:w-72 xl:w-64 p-3 items-center justify-center flex relative">
                  <input
                    onChange={onChangeCertificate}
                    accept=".jpg , .pdf"
                    className="p-2 border  w-full relative border-slate-400 mt-1 o z-[2] opacity-0 outline-none focus:border-green-500 rounded-md"
                    type="file"
                    name="certificateOfIncorporation"
                    placeholder="certificateOfIncorporation"
                    id="certificateOfIncorporation"
                  />

                  <div className="flex items-center justify-center flex-col">
                    <button
                      className="absolute top-0 left-0 h-[100%] w-[100%] md:h-[100%] md:w-[90%] z- [1] flex items-center flex-row gap-5 md:gap-10 justify-center bg-[#3bb77e] text-white
              cursor-pointer border-none outline-none rounded-lg shadow-lg text-[17px] "
                    >
                      {" "}
                      <h2 className="font-[700] text-[14px] md:text-[21px]">
                        Upload File{" "}
                      </h2>
                      <GoUpload size={20} />
                    </button>
                    {!certificateOfIncorporation?.name ? (
                      <h1 className=" text-[#3bb77e] text-[13px] md:text-[15px] absolute text-center w-40 mt-[2.5rem] xl:mt-[4rem] md:mt-[4rem] left-[11rem] xl:left-72 md:left-80 right-0">
                        No File Selected
                      </h1>
                    ) : (
                      <h1 className=" text-[#3bb77e] absolute text-center w-52  p-10 xl:p-2 md:p-2 text-[12px] mt-[4rem] xl:mt-[4rem] md:mt-[4rem] left-36 xl:left-72 md:left-80 right-0">
                        <b className="text-gray-800 font-extrabold -ml-1 -pl-1">
                          File :
                        </b>{" "}
                        {certificateOfIncorporation?.name}
                      </h1>
                    )}{" "}
                  </div>
                </div>
                <span className="text-gray-400 text-[13px] md:text-[15px] mr-1 md:-mr-5 -mt-8">
                  JPEG, PDF Format
                </span>
              </div>
              {error.certificateOfIncorporation && (
                <p className="text-red-600 mt-3">
                  {" "}
                  {error.certificateOfIncorporation}{" "}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-3 mb-2">
              <label className="text-gray-800 text[18px] font-[600] xl:text[18px] md:text[18px]">
                Tax identification number{" "}
                <span className="text-[18px] ml-2 text-bold text-red-600">
                  *
                </span>
              </label>
              <div className="flex items-center just-center flex-row gap-8 md:gap-14 ">
                <div className="w-[10.5rem] md:w-72 xl:w-64 p-3 items-center justify-center flex relative">
                  <input
                    onChange={onChangeTaxId}
                    accept=".jpg , .pdf"
                    className="p-2 border w-full relative border-slate-400 mt-1 z-[2] opacity-0 outline-none focus:border-green-500 rounded-md"
                    type="file"
                    name="taxIdNumber"
                    placeholder="taxIdNumber"
                    id="taxIdNumber"
                  />
                  <div className="flex items-center justify-center flex-col">
                    <button
                      className="absolute top-0 left-0 h-[100%] w-[100%] md:h-[100%] md:w-[90%] z- [1] flex items-center flex-row gap-5 md:gap-10 justify-center bg-[#3bb77e] text-white
              cursor-pointer border-none outline-none rounded-lg shadow-lg text-[17px] "
                    >
                      {" "}
                      <h2 className="font-[700] text-[14px] md:text-[21px]">
                        Upload File{" "}
                      </h2>
                      <GoUpload size={20} />
                    </button>
                    {!taxIdNumber?.name ? (
                      <h1 className=" text-[#3bb77e]  text-[13px] md:text-[15px] absolute text-center w-40 mt-[2.5rem] xl:mt-[4rem] md:mt-[4rem] left-[11rem] xl:left-72 md:left-80 right-0">
                        No File Selected
                      </h1>
                    ) : (
                      <h1 className=" text-[#3bb77e] absolute text-center w-52 p-10 xl:p-2 md:p-2 text-[12px] mt-[4rem] xl:mt-[4rem] md:mt-[4rem] left-36 xl:left-72 md:left-80 right-0">
                        <b className="text-gray-800 font-extrabold -ml-1 -pl-1">
                          File :
                        </b>{" "}
                        {taxIdNumber?.name}
                      </h1>
                    )}{" "}
                  </div>
                </div>
                <span className="text-gray-400 text-[13px] md:text-[15px] mr-1 md:-mr-5 -mt-8">
                  JPEG, PDF Format
                </span>
              </div>
              {error.taxIdNumber && (
                <p className="text-red-600 mt-3"> {error.taxIdNumber} </p>
              )}
            </div>
            <div className="flex flex-col space-y-3 mb-4 ">
              <label className="text-gray-800 text[18px] font-[600] xl:text[18px] md:text[18px]">
                List of products you sell (PDF) (Optional)
              </label>
              <div className="flex items-center just-center flex-row gap-8 md:gap-14">
                <div className="w-[10.5rem] md:w-72 xl:w-64 p-3 items-center justify-center flex relative">
                  <input
                    onChange={onChangeSoldProducts}
                    accept=".jpg , .pdf"
                    className="p-2 border w-full relative border-slate-400 mt-1 z-[2] opacity-0 outline-none focus:border-blue-500 rounded-md"
                    type="file"
                    name="soldProducts"
                    placeholder="soldProducts"
                    id="soldProducts"
                  />
                  <div className="flex items-center justify-center flex-col">
                    <button
                      className="absolute top-0 left-0 h-[100%] w-[100%] md:h-[100%] md:w-[90%] z- [1] flex items-center flex-row gap-5 md:gap-10 justify-center bg-[#3bb77e] text-white
              cursor-pointer border-none outline-none rounded-lg shadow-lg text-[17px] "
                    >
                      {" "}
                      <h2 className="font-[700] text-[14px] md:text-[21px]">
                        Upload File{" "}
                      </h2>
                      <GoUpload size={20} />
                    </button>
                    {!soldProducts?.name ? (
                      <h1 className=" text-[#3bb77e] text-[13px] md:text-[15px] absolute text-center w-40 mt-[2.5rem] xl:mt-[4rem] md:mt-[4rem] left-[11rem] xl:left-72 md:left-80 right-0">
                        No File Selected
                      </h1>
                    ) : (
                      <h1 className=" text-[#3bb77e] absolute text-center w-52 p-10 xl:p-2 md:p-2 text-[12px] mt-[4rem] xl:mt-[4rem] md:mt-[4rem] left-36 xl:left-72 md:left-80 right-0">
                        <b className="text-gray-800 font-extrabold -ml-1 -pl-1">
                          File :
                        </b>{" "}
                        {soldProducts?.name}
                      </h1>
                    )}{" "}
                  </div>
                </div>
                <span className="text-gray-400 text-[13px] md:text-[15px] mr-1 md:-mr-5 -mt-8">
                  JPEG, PDF Format
                </span>
              </div>
            </div>

            <div className="flex items-center mt-10">
              <input
                type="checkbox"
                name="checkedInfo"
                value="Accepted"
                onChange={inputHandle}
                checked={state.checkedInfo === "Accepted"}
                className="rounded border-gray-300 shadow-sm  h-8 w-8"
              />
              <label
                htmlFor="checkInfo"
                className="ml-2 block text-sm text-gray-900"
              >
                By checking, you confirm that you have read the terms of the
                "Confirmation Letter",{" "}
                <span
                  onClick={() => {
                    setOpenTerms(true);
                  }}
                  className="text-[#3bb77e]"
                >
                  "Terms and Conditions"
                </span>{" "}
                and
                <span
                  onClick={() => {
                    setOpenTerms(true);
                  }}
                  className="text-[#3bb77e]"
                >
                  "Privacy Policy"
                </span>{" "}
                and agree to them.*
              </label>
            </div>
            {error.checkedInfo && (
              <p className="text-red-600 mt-3"> {error.checkedInfo} </p>
            )}

            <div className="mt-20 mb-20 gap-16 xl:gap-[29rem] md:gap-[25rem] flex justify-center items-center">
              {/* <button
                onClick={pre}
                className="px-3 outline-none cursor-pointer py-2 text-lg flex items-center justify-center gap-2 flex-row rounded-full w-[8rem] text-white bg-[#3bb77e]"
              >
                <BiLeftArrowAlt size={22} />
                Previous
              </button> */}
              <button
                onClick={finalSubmit}
                disabled={
                  !certificateOfIncorporation
                  || !taxIdNumber
                  || !state.checkedInfo
                }
                className="px-4 outline-none cursor-pointer py-3 text-lg flex items-center justify-center gap-5 flex-row rounded-full w-[23rem] xl:w-[45rem] md:w-[47rem] text-white disabled:bg-[#69bc95a9] bg-[#3bb77e]"
              >
                Complete Registration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepper;
