import React from "react";
import Image from "next/image";

interface VideoModalProps {
  onClose: () => void;
  videoSrc: string; // Accept the video source as a prop
}

const VideoModal: React.FC<VideoModalProps> = ({ onClose, videoSrc }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative"
      >
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left mb-4">
          Watch Video
        </h1>

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 md:top-[30px] right-[30px] cursor-pointer"
        >
          <Image
            src="/assets/icons/close-icon.svg"
            alt="close icon"
            width={18}
            height={18}
            loading="lazy"
          />
        </button>

        <div className="w-full h-[300px] md:h-[350px] rounded-3xl overflow-hidden">
          <video
            src={videoSrc} // Use the passed videoSrc
            autoPlay
            loop
            controls
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
