import React from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import Footer from "../components/Footer";
import Hero from "../components/Store/Hero";

const Store: React.FC = () => {

  return (
    <>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative pb-10 md:pb-20">
        <NavTabs />
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Store;
