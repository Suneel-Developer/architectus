"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ShareModal from "./Visualization/ShareModal";
import UserLoginModal from "./UserForm/UserLoginModal";
import UserRegisterModal from "./UserForm/UserRegisterModal";
import UserForgotPasswordModal from "./UserForm/UserForgotPasswordModal";
import SupportModal from "./SupportModal";
import CreateVisualisationModal from "./Visualization/CreateVisualisationModal";
import VerificationLoadingModal from "./Visualization/VerificationLoadingModal";

const MenuModal = () => {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isUserLoginModalOpen, setIsUserLoginModalOpen] =
    useState<boolean>(false);
  const [isUserRegisterModalOpen, setIsUserRegisterModalOpen] =
    useState<boolean>(false);
  const [isUserForgotPasswordModalOpen, setIsUserForgotPasswordModalOpen] =
    useState<boolean>(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState<boolean>(false);
  const router = useRouter();

  // Open Menu Modal
  const handleOpenMenuModal = () => {
    setIsOpenMenuModal(!isOpenMenuModal);
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

  //  Open Share Modal
  const handleShareModal = () => {
    setIsShareModalOpen(true);
  };

  //  Close Share Modal
  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  //  Open UserLogin Modal
  const handleUserLoginModal = () => {
    setIsUserRegisterModalOpen(false);
    setIsUserLoginModalOpen(true);
  };

  //  Close UserLogin Modal
  const handleCloseUserLoginModal = () => {
    setIsUserLoginModalOpen(false);
  };

  //  Open UserRegister Modal
  const handleUserRegisterModal = () => {
    setIsUserLoginModalOpen(false);
    setIsUserRegisterModalOpen(true);
  };

  //  Close UserRegister Modal
  const handleCloseUserRegisterModal = () => {
    setIsUserRegisterModalOpen(false);
  };

  //  Open ForgotPassword Modal
  const handleUserForgotPasswordModal = () => {
    setIsUserRegisterModalOpen(false);
    setIsUserLoginModalOpen(false);
    setIsUserForgotPasswordModalOpen(true);
  };

  //  Close ForgotPassword Modal
  const handleCloseUserForgotPasswordModal = () => {
    setIsUserForgotPasswordModalOpen(false);
  };

  //  Open Support Modal
  const handleSupportModal = () => {
    setIsSupportModalOpen(true);
  };

  //  Close Support Modal
  const handleCloseSupportModal = () => {
    setIsSupportModalOpen(false);
  };

  useEffect(() => {
    if (isOpenMenuModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpenMenuModal]);

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={handleOpenMenuModal}
          className="bg-[#3D2278] text-white rounded-full w-[50px] h-[50px] flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
        >
          <svg
            width="21"
            height="26"
            viewBox="0 0 21 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.07422 11.5173L5.88001 6.6596L11.2239 6.05469C11.9753 6.37355 12.3511 6.53298 12.3511 6.53298C13.903 10.0388 14.6789 11.7917 14.6789 11.7917L18.9995 9.60906"
              stroke="#ffffff"
              stroke-width="2.27753"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 24.001L6.37023 19.4304L8.37757 13.2207L10.3544 13.616L15.2417 17.6227L9.5641 21.2614"
              stroke="#ffffff"
              stroke-width="2.58811"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.4653 6.46484L9.28516 13.7392"
              stroke="#ffffff"
              stroke-width="4.65859"
            />
            <path
              d="M14.6631 2.1797C14.6631 3.07475 13.895 3.84177 12.8951 3.84177C11.8952 3.84177 11.127 3.07475 11.127 2.1797C11.127 1.28464 11.8952 0.517622 12.8951 0.517622C13.895 0.517622 14.6631 1.28464 14.6631 2.1797Z"
              fill="#ffffff"
              stroke="#ffffff"
              stroke-width="1.03524"
            />
          </svg>
        </button>
      </div>

      {/* Menu Windows  */}
      {isOpenMenuModal && (
        <div className="fixed inset-0 z-50 flex justify-end pl-5">
          <div
            onClick={handleOpenMenuModal}
            className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
          ></div>

          <div className="bg-white rounded-l-xl px-3 md:px-5 py-5 w-full h-screen max-w-[300px] relative">
            <Image
              src="/assets/icons/close-icon.svg"
              alt="close-icon"
              width={18}
              height={18}
              loading="lazy"
              onClick={handleOpenMenuModal}
              className="absolute top-5 md:top-5 right-5 cursor-pointer"
            />

            <div className="flex flex-col items-center gap-2 mt-14">
              <button
                onClick={handleCreateClick}
                className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
              >
                Create
              </button>

              <button
                onClick={handleShareModal}
                className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
              >
                Share
              </button>

              <button className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white">
                Posts
              </button>

              <button
                onClick={() => router.push("/favorites")}
                className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
              >
                Reviews
              </button>

              <button
                onClick={() => router.push("/favorites")}
                className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
              >
                Favorites
              </button>

              <button className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white">
                Calls
              </button>

              <button className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white">
                Messages
              </button>

              <button className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white">
                Settings
              </button>

              <button
                onClick={handleSupportModal}
                className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
              >
                Support
              </button>

              <button
                onClick={handleUserLoginModal}
                className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
              >
                Login
              </button>

              <button
                onClick={handleUserRegisterModal}
                className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
              >
                Register
              </button>

              <button className="bg-red-700 rounded-[10px] h-11 w-full text-center px-3 text-white text-sm md:text-base font-medium transition-colors duration-300 hover:bg-opacity-80">
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Window Windows  */}
      {isModalOpen && (
        <CreateVisualisationModal
          onClose={handleCloseCreateVisualisationModal}
          onCreate={handleVerificationCreateClick}
        />
      )}

      {/* Create Verification Windows  */}
      {isVerificationModalOpen && (
        <VerificationLoadingModal onClose={handleCloseVerificationModal} />
      )}

      {/* Share Modal */}
      {isShareModalOpen && <ShareModal onClose={handleCloseShareModal} />}

      {/* User Login Windows Modal  */}
      {isUserLoginModalOpen && (
        <UserLoginModal
          onClose={handleCloseUserLoginModal}
          onSignup={handleUserRegisterModal}
          onForgotPassword={handleUserForgotPasswordModal}
        />
      )}

      {/* User Register Windows Modal  */}
      {isUserRegisterModalOpen && (
        <UserRegisterModal
          onClose={handleCloseUserRegisterModal}
          onLogin={handleUserLoginModal}
        />
      )}

      {/* User Forgot Password Windos Modal  */}
      {isUserForgotPasswordModalOpen && (
        <UserForgotPasswordModal onClose={handleCloseUserForgotPasswordModal} />
      )}

      {/* Support Windows Modal  */}
      {isSupportModalOpen && <SupportModal onClose={handleCloseSupportModal} />}
    </div>
  );
};

export default MenuModal;
