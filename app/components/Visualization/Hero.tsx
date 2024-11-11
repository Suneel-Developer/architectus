"use client";
import React, { useState } from "react";
import CreateVisualisationModal from "./CreateVisualisationModal";
import VerificationLoadingModal from "./VerificationLoadingModal";
import MenuModal from "../MenuModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);

  // Open Create modal
  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  //   Close Create modal
  const handleCloseCreateVisualisationModal = () => {
    setIsModalOpen(false);
  };

  //   Open VisualisationVerification Modal
  const handleVerificationCreateClick = () => {
    setIsModalOpen(false);
    setIsVerificationModalOpen(true);
  };

  //  Close VisualisationVerification Modal
  const handleCloseVerificationModal = () => {
    setIsVerificationModalOpen(false);
    setIsModalOpen(false);
  };



  return (
    <section className="px-5 pb-10 md:pb-20">
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="mb-14 md:mb-20">
          <h2 className="text-[#0F0A19] font-bold text-[40px] md:text-[64px] tracking-[2%] md:tracking-[0] mb-5 md:mb-[30px]">
            Visualization
          </h2>

          <p className="max-w-[550px] w-full text-[#0F0A19] text-sm md:text-lg mb-7 md:mb-10">
            Envision your new body with precision! Specify which parts you want
            to improve, shape, and size.
          </p>

          <button
            className="bg-[#3D2278] text-white rounded-[10px] w-[156px] md:w-[200px] h-11 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
            onClick={handleCreateClick}
          >
            Create
          </button>
        </div>

        {/* Big Body Image  */}
        <div className="bg-[url('/assets/body-banner.jfif')] h-[280px] md:h-[500px] w-full rounded-2xl md:rounded-[20px] bg-cover bg-center mb-5 md:mb-12"></div>

        <MenuModal />

        {/* Windows Modals Imports  */}

        {/* Create Window Modals  */}
        {isModalOpen && (
          <CreateVisualisationModal
            onClose={handleCloseCreateVisualisationModal}
            onCreate={handleVerificationCreateClick}
          />
        )}
        {isVerificationModalOpen && (
          <VerificationLoadingModal onClose={handleCloseVerificationModal} />
        )}
      </div>
    </section>
  );
};

export default Hero;
