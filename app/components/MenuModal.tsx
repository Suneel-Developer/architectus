"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import { useRouter, usePathname } from "next/navigation";
import ModifyModal from "./Visualization/ModifyModal";
import ModifyProjectModal from "./Visualization/ModifyProjectModal";
import ModifyVerificatioModal from "./Visualization/ModifyVerificatioModal";
import ShareModal from "./Visualization/ShareModal";
import UserLoginModal from "./UserForm/UserLoginModal";
import UserRegisterModal from "./UserForm/UserRegisterModal";
import UserForgotPasswordModal from "./UserForm/UserForgotPasswordModal";

const MenuModal = () => {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState<Boolean>(false);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState<boolean>(false);
  const [isModifyProjectModalOpen, setIsModifyProjectModalOpen] =
    useState<boolean>(false);
  const [isModifyVerificatioModalOpen, setIsModifyVerificatioModalOpen] =
    useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isUserLoginModalOpen, setIsUserLoginModalOpen] =
    useState<boolean>(false);
  const [isUserRegisterModalOpen, setIsUserRegisterModalOpen] =
    useState<boolean>(false);
  const [isUserForgotPasswordModalOpen, setIsUserForgotPasswordModalOpen] =
    useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleOpenMenuModal = () => {
    setIsOpenMenuModal(!isOpenMenuModal);
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

  useEffect(() => {
    if (isOpenMenuModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up to ensure the class is removed when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpenMenuModal]);

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={handleOpenMenuModal}
          className="bg-[#3D2278] text-white rounded-full w-12 h-12 text-lg flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
        >
          <RxDashboard />
        </button>
      </div>
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
              {isHomePage && (
                <button className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white">
                  Body Scan
                </button>
              )}
              <button
                onClick={handleModifyModalClick}
                className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
              >
                Modify
              </button>

              <button
                onClick={handleShareModal}
                className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
              >
                Share
              </button>

              <button  onClick={() => router.push("/favorites")} className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white">
                Favorites
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

              <button
                onClick={() => router.push("/aboutus")}
                className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      )}
      {/* 1. Modify Modal 2. ModifyProjectModal 3. ModifyVerificatioModal ======== Windows Modals */}
      {isModifyModalOpen && (
        <ModifyModal
          onClose={handleCloseModifyModal}
          onCreate={handleModifyProjectModal}
        />
      )}
      {isModifyProjectModalOpen && (
        <ModifyProjectModal
          onClose={handleCloseModifyProjectModal}
          onCreate={handleModifyVerificationModal}
        />
      )}
      {isModifyVerificatioModalOpen && (
        <ModifyVerificatioModal onClose={handleCloseModifyVerificationModal} />
      )}

      {/* Share Modal */}
      {isShareModalOpen && <ShareModal onClose={handleCloseShareModal} />}

      {isUserLoginModalOpen && (
        <UserLoginModal
          onClose={handleCloseUserLoginModal}
          onSignup={handleUserRegisterModal}
          onForgotPassword={handleUserForgotPasswordModal}
        />
      )}

      {isUserRegisterModalOpen && (
        <UserRegisterModal
          onClose={handleCloseUserRegisterModal}
          onLogin={handleUserLoginModal}
        />
      )}

      {isUserForgotPasswordModalOpen && (
        <UserForgotPasswordModal onClose={handleCloseUserForgotPasswordModal} />
      )}
    </div>
  );
};

export default MenuModal;
