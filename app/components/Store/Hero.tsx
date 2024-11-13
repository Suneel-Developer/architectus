"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductSlider from "./ProductSlider";
// import SupplierLoginModal from "./SupplierLoginModal";
// import SupplierRegisterModal from "./SupplierRegisterModal";
// import ForgotPasswordModal from "./ForgotPasswordModal";
// import UploadStoreModal from "./UploadStoreModal";
import CreateVisualisationModal from "../Visualization/CreateVisualisationModal";
import VerificationLoadingModal from "../Visualization/VerificationLoadingModal";
import ShareModal from "../Visualization/ShareModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  // const [isSupplierLoginModalOpen, setIsSupplierLoginModalOpen] =
  //   useState<boolean>(false);
  // const [isSupplierRegisterModalOpen, setIsSupplierRegisterModalOpen] =
  //   useState<boolean>(false);
  // const [
  //   isSupplierForgotPasswordModalOpen,
  //   setIsSupplierForgotPasswordModalOpen,
  // ] = useState<boolean>(false);
  // const [isUploadStoreModalOpen, setIsUploadStoreModalOpen] =
  //   useState<boolean>(false);

  // //   Supplier Login Modal
  // const handleSupplierLoginModalClick = () => {
  //   setIsSupplierRegisterModalOpen(false);
  //   setIsSupplierLoginModalOpen(true);
  // };

  // //  Close Supplier Login Modal
  // const handleCloseSupplierLoginModal = () => {
  //   setIsSupplierLoginModalOpen(false);
  // };

  // //  Open Supplier Register Modal
  // const handleSupplierRegisterModal = () => {
  //   setIsSupplierLoginModalOpen(false);
  //   setIsSupplierRegisterModalOpen(true);
  // };

  // //  Close Supplier Register Modal
  // const handleCloseSupplierRegisterModal = () => {
  //   setIsSupplierRegisterModalOpen(false);
  // };

  // //  Open Supplier Forgot password Modal
  // const handleSupplierForgotPasswordModal = () => {
  //   setIsSupplierLoginModalOpen(false);
  //   setIsSupplierRegisterModalOpen(false);
  //   setIsSupplierForgotPasswordModalOpen(true);
  // };

  // //  Close Supplier Forgot password  Modal
  // const handleCloseSupplierForgotPasswordModal = () => {
  //   setIsSupplierForgotPasswordModalOpen(false);
  // };

  // //  Open Upload Store Modal
  // const handleUploadStoreModal = () => {
  //   setIsUploadStoreModalOpen(true);
  // };

  // //  Close Upload Store  Modal
  // const handleCloseUploadStoreModal = () => {
  //   setIsUploadStoreModalOpen(false);
  // };

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

    //  Open Share Modal
    const handleShareModal = () => {
      setIsShareModalOpen(true);
    };
  
    //  Close Share Modal
    const handleCloseShareModal = () => {
      setIsShareModalOpen(false);
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
                supplements, vitamins, training equipment, sportswear, events
                and country location.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-2 max-w-[300px] w-full gap-3">
            <button
              onClick={handleCreateClick}
              className="bg-[#3D2278] text-white rounded-[10px]  h-12 text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
            >
              Search
            </button>

            <button
              onClick={handleShareModal}
              className="border-2 border-[#3D2278] rounded-[10px] h-12 text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
            >
              Share
            </button>
          </div>
        </div>

        <ProductSlider />

        {/* {isSupplierLoginModalOpen && (
          <SupplierLoginModal
            onClose={handleCloseSupplierLoginModal}
            onSignup={handleSupplierRegisterModal}
            onForgotPassword={handleSupplierForgotPasswordModal}
          />
        )}

        {isSupplierRegisterModalOpen && (
          <SupplierRegisterModal
            onClose={handleCloseSupplierRegisterModal}
            onLogin={handleSupplierLoginModalClick}
          />
        )}

        {isSupplierForgotPasswordModalOpen && (
          <ForgotPasswordModal
            onClose={handleCloseSupplierForgotPasswordModal}
          />
        )}

        {isUploadStoreModalOpen && (
          <UploadStoreModal onClose={handleCloseUploadStoreModal} />
        )} */}

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

         {/* Share Modal */}
         {isShareModalOpen && <ShareModal onClose={handleCloseShareModal} />}
      </div>
    </section>
  );
};

export default Hero;
