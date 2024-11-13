"use client";
import React, { useState } from "react";
import CreateVisualisationModal from "../Visualization/CreateVisualisationModal";
import VerificationLoadingModal from "../Visualization/VerificationLoadingModal";
import Image from "next/image";
import CoachLoginModal from "./CoachLoginModal";
import CoachRegisterModal from "./CoachRegisterModal";
import CoachForgotPasswordModal from "./CoachForgotPasswordModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);
  const [isCoachLoginModalOpen, setIsCoachLoginModalOpen] =
    useState<boolean>(false);
  const [isCoachRegisterModalOpen, setIsCoachRegisterModalOpen] =
    useState<boolean>(false);
  const [isCoachForgotPasswordModalOpen, setIsCoachForgotPasswordModalOpen] =
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

  //   Coach Login Modal
  const handleCoachLoginModalClick = () => {
    setIsCoachRegisterModalOpen(false);
    setIsCoachLoginModalOpen(true);
  };

  //  Close Coach Login Modal
  const handleCloseCoachLoginModal = () => {
    setIsCoachLoginModalOpen(false);
  };

  //  Open Coach Register Modal
  const handleCoachRegisterModal = () => {
    setIsCoachLoginModalOpen(false);
    setIsCoachRegisterModalOpen(true);
  };

  //  Close Coach Register Modal
  const handleCloseCoachRegisterModal = () => {
    setIsCoachRegisterModalOpen(false);
  };

  //  Open Coach Forgot password Modal
  const handleCoachForgotPasswordModal = () => {
    setIsCoachLoginModalOpen(false);
    setIsCoachRegisterModalOpen(false);
    setIsCoachForgotPasswordModalOpen(true);
  };

  //  Close Coach Forgot password  Modal
  const handleCloseCoachForgotPasswordModal = () => {
    setIsCoachForgotPasswordModalOpen(false);
  };

  return (
    <section className="px-5">
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
                level.
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

        {/* Create Window Windows  */}
        {isModalOpen && (
          <CreateVisualisationModal
            onClose={handleCloseCreateVisualisationModal}
            onCreate={handleVerificationCreateClick}
          />
        )}
        {/* Virification Windows  */}
        {isVerificationModalOpen && (
          <VerificationLoadingModal onClose={handleCloseVerificationModal} />
        )}

        {/* Coach Login Windows Render  */}
        {isCoachLoginModalOpen && (
          <CoachLoginModal
            onClose={handleCloseCoachLoginModal}
            onSignup={handleCoachRegisterModal}
            onForgotPassword={handleCoachForgotPasswordModal}
          />
        )}

        {/* Coach Register Windows Render  */}
        {isCoachRegisterModalOpen && (
          <CoachRegisterModal
            onClose={handleCloseCoachRegisterModal}
            onLogin={handleCoachLoginModalClick}
          />
        )}

        {/* Coach Forgot passowr Windows Render  */}
        {isCoachForgotPasswordModalOpen && (
          <CoachForgotPasswordModal
            onClose={handleCloseCoachForgotPasswordModal}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
