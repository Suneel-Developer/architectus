"use client";
import React, { useState } from "react";
import CreateVisualisationModal from "./CreateVisualisationModal";
import VerificationLoadingModal from "./VerificationLoadingModal";
import MenuModal from "../MenuModal";
import Image from "next/image";

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
          <div className="mb-7 md:mb-10 flex items-center gap-3">
            <Image
              src="/assets/icons/suggestion.svg"
              alt="suggestion"
              width={20}
              height={20}
              loading="lazy"
            />

            <p className="text-sm md:text-base text-[#0F0A19] max-w-[34rem] flex-1">
              Envision your new body with precision! Specify which parts you
              want to improve, shape, and size.
            </p>
          </div>

          <button className="bg-[#3D2278] text-white rounded-[10px] w-[156px] md:w-[200px] h-11 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
            Body Scan
          </button>
        </div>

        {/* Big Body Image  */}
        <div className="bg-[url('/assets/body-banner.jfif')] h-[280px] md:h-[500px] w-full rounded-2xl md:rounded-[20px] bg-cover bg-center mb-5 md:mb-12"></div>

        <div className="grid grid-cols-2 gap-3 max-w-[300px] w-full mx-auto mb-10">
          <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
            Save
          </button>

          <button
            onClick={handleCreateClick}
            className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
          >
            Create
          </button>
        </div>

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
