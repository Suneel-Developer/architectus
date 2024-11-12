import React from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import Footer from "../components/Footer";
import Hero from "../components/Coaches/Hero";
import CoachesList from "../components/Coaches/CoachesList";
import MenuModal from "../components/MenuModal";

const Coaches: React.FC = () => {
  return (
    <>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative">
        <NavTabs />
        <Hero />
        <CoachesList showSingle={true} />
        <div className="flex items-center justify-center gap-2 mx-auto px-5 mb-14">
          <div className="w-[45px] h-[15px] bg-[#3d2278] rounded-[30px] cursor-pointer"></div>
          <div className="w-[15px] h-[15px] bg-[#3d227833] rounded-full cursor-pointer"></div>
          <div className="w-[15px] h-[15px] bg-[#3d227833] rounded-full cursor-pointer"></div>
          <div className="w-[15px] h-[15px] bg-[#3d227833] rounded-full cursor-pointer"></div>
          <div className="w-[15px] h-[15px] bg-[#3d227833] rounded-full cursor-pointer"></div>
        </div>
        <div className="mb-10 md:mb-20">
          <MenuModal />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Coaches;
