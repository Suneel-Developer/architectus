import React from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import Footer from "../components/Footer";
import Hero from "../components/Store/Hero";
import Reviews from "../components/Reviews";

const Store: React.FC = () => {
  return (
    <>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative">
        <NavTabs />
        <Hero />

        <div className="px-4 mb-20">
          <Reviews />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Store;
