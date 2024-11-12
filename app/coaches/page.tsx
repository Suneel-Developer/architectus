import React from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import Footer from "../components/Footer";
import Hero from "../components/Coaches/Hero";
import MenuModal from "../components/MenuModal";
import CoachesSlider from "../components/Coaches/CoachsSlider";

const Coaches: React.FC = () => {
  return (
    <>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative">
        <NavTabs />
        <Hero />
        <CoachesSlider />
        <div className="mb-10 md:mb-20">
          <MenuModal />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Coaches;
