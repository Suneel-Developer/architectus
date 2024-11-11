"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModifyModal from "../Visualization/ModifyModal";
import ModifyProjectModal from "../Visualization/ModifyProjectModal";
import ModifyVerificatioModal from "../Visualization/ModifyVerificatioModal";
import DownloadModal from "../Visualization/DownloadModal";
import CreateVisualisationModal from "../Visualization/CreateVisualisationModal";
import VerificationLoadingModal from "../Visualization/VerificationLoadingModal";
import MenuModal from "../MenuModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState<boolean>(false);
  const [isModifyProjectModalOpen, setIsModifyProjectModalOpen] =
    useState<boolean>(false);
  const [isModifyVerificatioModalOpen, setIsModifyVerificatioModalOpen] =
    useState<boolean>(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] =
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

  //   Modify Modal
  const handleModifyModalClick = () => {
    setIsModifyModalOpen(true);
  };

  //  Close Modify Modal
  const handleCloseModifyModal = () => {
    setIsModifyModalOpen(false);
  };

  //  Open Modify Project Modal
  const handleModifyProjectModal = () => {
    setIsModifyModalOpen(false);
    setIsModifyProjectModalOpen(true);
  };

  //  Close ModifyProject Modal
  const handleCloseModifyProjectModal = () => {
    setIsModifyProjectModalOpen(false);
  };

  //  Open ModifyVerification Modal
  const handleModifyVerificationModal = () => {
    setIsModifyModalOpen(false);
    setIsModifyProjectModalOpen(false);
    setIsModifyVerificatioModalOpen(true);
  };

  //  Close ModifyVerification Modal
  const handleCloseModifyVerificationModal = () => {
    setIsModifyVerificatioModalOpen(false);
  };

  //  Open Download Modal
  const handleDownloadModal = () => {
    setIsDownloadModalOpen(true);
  };

  //  Close Download Modal
  const handleCloseDownloadModal = () => {
    setIsDownloadModalOpen(false);
  };

  return (
    <section className="px-5 pb-10 md:pb-20">
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-20">
          <h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
            Your&nbsp;
            <span className="relative">
              <span className="text-[#3D2278]">Plan</span>
              <img
                src="/assets/linewrk.webp"
                alt="linewrk"
                className="absolute left-0 top-[45px] md:top-[65px] lg:top-[76px]"
              />
            </span>
          </h1>

          <p className="text-sm md:text-lg text-[#0F0A19] max-w-[600px] w-full">
            It&apos;s time to create your workout plan. Be as specific as
            possible — consider your sport discipline, training method, exercise
            type, skill level, full-body workouts, or focus on specific muscle
            groups.
          </p>

          <button
            onClick={handleCreateClick}
            className="bg-[#3D2278] text-white rounded-[10px] w-[156px] md:w-[200px] h-11 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Create
          </button>
        </div>

        <div className="bg-white rounded-2xl md:rounded-[20px] overflow-hidden shadow-1 w-full mb-12">
          <div className="relative bg-[#0F0A19]">
            <Image
              src="/assets/workout-plan.svg"
              alt="workout plan"
              width={100}
              height={100}
              loading="lazy"
              className="w-full md:h-[500px] h-full"
            />
          </div>
          <div className="py-6 text-center px-2">
            <h3 className="text-xl md:text-3xl font-medium text-[#0F0A19]">
              90 Days Workout Plan
            </h3>
          </div>
        </div>

        <MenuModal />

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
