"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import VideoModal from "./VideoModal";
import CreateVisualisationModal from "../Visualization/CreateVisualisationModal";
import VerificationLoadingModal from "../Visualization/VerificationLoadingModal";
import MenuModal from "../MenuModal";
import Reviews from "../Reviews";

const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);
  const [isVisibleReviews, setIsVisibleReviews] = useState<Boolean>(false);

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

  const handleShowReviews = () => {
    setIsVisibleReviews(!isVisibleReviews);
  };

  return (
    <section className="px-5 pb-10 md:pb-20">
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-20">

          <div className="flex items-center gap-3">
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
                coach, sport discipline, training method, exercise type, skill
                level, full body, or focus on a specific muscle group.
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

              <button
                onClick={handleOpenVideoModal}
                className="bg-[#3D2278] text-white text-base flex items-center justify-center transition-opacity duration-300 hover:opacity-90 w-12 h-12 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto"
              >
                <FaPlay />
              </button>
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

              <div className="flex flex-col gap-2">
                <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
                  Save
                </button>

                <button
                  onClick={handleShowReviews}
                  className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
                >
                  Reviews (4)
                </button>
              </div>
            </div>
          </div>
        </div>

        {isVisibleReviews && (
          <div className="px-4 my-16">
            <Reviews />
          </div>
        )}

        <div className="flex items-center justify-center gap-2 mx-auto px-5 mb-14">
          <div className="w-[45px] h-[15px] bg-[#3d2278] rounded-[30px] cursor-pointer"></div>
          <div className="w-[15px] h-[15px] bg-[#3d227833] rounded-full cursor-pointer"></div>
          <div className="w-[15px] h-[15px] bg-[#3d227833] rounded-full cursor-pointer"></div>
          <div className="w-[15px] h-[15px] bg-[#3d227833] rounded-full cursor-pointer"></div>
          <div className="w-[15px] h-[15px] bg-[#3d227833] rounded-full cursor-pointer"></div>
        </div>

        <MenuModal />

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
