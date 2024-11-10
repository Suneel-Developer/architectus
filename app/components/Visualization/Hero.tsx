"use client";
import React, { useState } from "react";
import CreateVisualisationModal from "./CreateVisualisationModal";
import VerificationLoadingModal from "./VerificationLoadingModal";
import ModifyModal from "./ModifyModal";
import ModifyProjectModal from "./ModifyProjectModal";
import ModifyVerificatioModal from "./ModifyVerificatioModal";
import DownloadModal from "./DownloadModal";
import ShareModal from "./ShareModal";

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
    const [isShareModalOpen, setIsShareModalOpen] =
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

    //  Open Share Modal
    const handleShareModal = () => {
      setIsShareModalOpen(true);
    };
  
    //  Close Share Modal
    const handleCloseShareModal = () => {
      setIsShareModalOpen(false);
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

        {/* Btns  */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-[940px] w-full mx-auto">
          <button className="border-2 border-[#3D2278] rounded-[10px] h-11 text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white">
            Body Scan
          </button>

          <button
            onClick={handleModifyModalClick}
            className="border-2 border-[#3D2278] rounded-[10px] h-11 text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
          >
            Modify
          </button>

          <button
            onClick={handleDownloadModal}
            className="border-2 border-[#3D2278] rounded-[10px] h-11 text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
          >
            Download
          </button>

          <button onClick={handleShareModal} className="border-2 border-[#3D2278] rounded-[10px] h-11 text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white">
            Share
          </button>
        </div>

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
          <ModifyVerificatioModal
            onClose={handleCloseModifyVerificationModal}
          />
        )}

        {/* DOWNLOAD MODAL WINDOW  */}
        {isDownloadModalOpen && (
          <DownloadModal onClose={handleCloseDownloadModal} />
        )}

        {/* Share MODAL WINDOW  */}
        {isShareModalOpen && (
          <ShareModal onClose={handleCloseShareModal} />
        )}
      </div>
    </section>
  );
};

export default Hero;
