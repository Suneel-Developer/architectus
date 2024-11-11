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
        <MenuModal />
        <CoachesList />
      </main>
      <Footer />
    </>
  );
};

export default Coaches;
