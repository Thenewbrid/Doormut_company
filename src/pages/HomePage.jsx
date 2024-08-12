import React from "react";
import MakeSaleSection from "../components/Home/MakeSaleSection";
import SubscribeCard from "../constants/SubscribeCard";
import HomeHeader from "../components/Home/HomeHeader";
import Navbar from "../constants/Navbar";
import Footer from "../constants/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="scroll overflow-y-scroll absolute w-full top-0 overflow-x-clip  flex flex-col gap-10 items-center justify-center' ">
        <HomeHeader />

        <MakeSaleSection />

        <SubscribeCard />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
