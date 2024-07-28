import React, { useEffect, useRef, useState } from "react";

let autoComplete;

const loadScript = (url, callback,) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const SearchLocationInput = ({ setSelectedLocation,query,setQuery,vendorsId,setVendorsId}) => {
  const autoCompleteRef = useRef(null);
  {{loc: {query : query}}}


  const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      {
        // types: ["(cities)"], 
        // componentRestrictions: { country: "IN" },
      }
    );

    autoComplete.addListener("place_changed", () => {
      handlePlaceSelect(updateQuery);
    });
  };

  const handlePlaceSelect = async (updateQuery) => {
    const addressObject = await autoComplete.getPlace();
    const query = addressObject.formatted_address;
 updateQuery(query);


    const latLng = {
      lat: addressObject?.geometry?.location?.lat(),
      lng: addressObject?.geometry?.location?.lng(),
    };

    // console.log({ latLng });
    setSelectedLocation(latLng);
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ5ao9Sth-cTbttowJP4DEU33CEQ6N7ds&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
     <div className="flex flex-col ">
    <label
      className="text-slate-800 text-[17px] xl:text-[18px] md:text-[18px]"
      htmlFor="headOffice"
    >
      Head Office Address*
    </label>
    <input
     ref={autoCompleteRef}
       value={query}
      onChange={(event) => setQuery(event.target.value)}
      className="p-2  border pl-5 border-slate-400 mt-1 outline-none text-slate-900 focus:border-[#3bb77e] rounded-2xl"
      type="text"
      name="headOffice"
      placeholder="Head Office" 
      id="headOffice"
      autoComplete="true"
    /> 
   </div> 
   
  );
};

export default SearchLocationInput;
