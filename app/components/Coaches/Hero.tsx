"use client";
import React, { useState } from "react";
import CreateVisualisationModal from "../Visualization/CreateVisualisationModal";
import VerificationLoadingModal from "../Visualization/VerificationLoadingModal";
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
    <section className="px-5">
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-20">
          <h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
            Coaches&nbsp;
            <span className="relative">
              <span className="text-[#3D2278]">List</span>
              <img
                src="/assets/linewrk.webp"
                alt="linewrk"
                className="absolute left-0 top-[45px] md:top-[65px] lg:top-[76px]"
              />
            </span>
          </h1>

          <div className="mb-7 md:mb-10 flex items-center gap-3">
            <Image
              src="/assets/icons/suggestion.svg"
              alt="suggestion"
              width={20}
              height={20}
              loading="lazy"
            />

            <p className="text-xs md:text-sm text-[#0F0A19]/60 max-w-[34rem] flex-1">
              Search for workout&nbsp;
              <span className="font-semibold">
              coach, sport discipline, training method, exercise type, skill level.
              </span>
            </p>
          </div>

          <button
            onClick={handleCreateClick}
            className="bg-[#3D2278] text-white rounded-[10px] w-full max-w-[150px] h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Search
          </button>
        </div>

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
