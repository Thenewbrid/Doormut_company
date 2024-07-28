import React from "react";
import MakeSaleSection from "../components/Home/MakeSaleSection";
import SubscribeCard from "../constants/SubscribeCard";
import HomeHeader from "../components/Home/HomeHeader";
import Navbar from "../constants/Navbar";

const HomePage = () => {
  return (
    <div className="scroll flex-1  overflow-y-scroll overflow-x-hidden flex flex-col gap-10 items-center justify-center' ">
      <Navbar />
      
      <HomeHeader />

      <MakeSaleSection />

      <SubscribeCard />
    </div>
  );
};

export default HomePage;
