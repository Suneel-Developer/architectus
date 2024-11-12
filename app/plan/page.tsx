import React from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import Footer from "../components/Footer";
import Hero from "../components/Plan/Hero";
import MenuModal from "../components/MenuModal";

const Plan: React.FC = () => {
  return (
    <>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative">
        <NavTabs />
        <Hero />
        <div className="mb-10 md:mb-20">
          <MenuModal />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Plan;
