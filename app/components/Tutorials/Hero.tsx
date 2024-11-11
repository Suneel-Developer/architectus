"use client";
import React, { useState } from "react";
import SearchBar from "../SearchBar";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import VideoModal from "./VideoModal";
import CreateVisualisationModal from "../Visualization/CreateVisualisationModal";
import VerificationLoadingModal from "../Visualization/VerificationLoadingModal";

const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);

  const handleOpenVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
  };

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
        <div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-20">
          <h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
            Video&nbsp;
            <span className="relative">
              <span className="text-[#3D2278]">Tutorials</span>
              <img
                src="/assets/linetuts.webp"
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
              coach, sport discipline, training method, exercise type, skill level, full body, or focus on a specific muscle group.
              </span>
            </p>
          </div>

          <button
            onClick={handleCreateClick}
            className="bg-[#3D2278] text-white rounded-[10px] h-12 md:h-[52px] text-center px-3 max-w-[150px] w-full text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="shadow-1 bg-white rounded-[20px] overflow-hidden mb-12">
            <div className="relative">
              <img
                src="/assets/video-thumbnail.jfif"
                alt=""
                className="w-full object-cover h-[280px]"
              />
            </div>

            <div className="p-5 md:p-7">
              <h2 className="text-[#0F1017] text-lg tracking-[2%] font-semibold mb-3">
                Exercise Tutorial - Squat
              </h2>

              <p className="text-[#858585] text-sm md:text-base font-medium mb-5">
                To perform a squat, start by standing with your feet slightly
                wider than shoulder-width apart. Cross your arms in front of
                you, resting your hands on your shoulders.
              </p>

              <div
                className="flex items-center gap-[14px] cursor-pointer"
                onClick={handleOpenVideoModal}
              >
                <button className="border-2 border-[#3D2278] w-10 h-10 rounded-full flex justify-center items-center">
                  <FaPlay className="text-[#3D2278] text-base" />
                </button>

                <h3 className="font-medium text-sm md:text-base">
                  Watch Video
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="border-2 border-[#3D2278] rounded-[10px] w-[200px] mx-auto h-11 text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white">
            Share
          </button>
        </div>

        {isVideoModalOpen && <VideoModal onClose={handleCloseVideoModal} />}

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
