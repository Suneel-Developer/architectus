"use client";
import React, { useState } from "react";
import Image from "next/image";

interface CoachRegisterModalProps {
  onClose: () => void;
  onLogin: () => void;
}

const CoachRegisterModal: React.FC<CoachRegisterModalProps> = ({
  onClose,
  onLogin,
}) => {
  const [videoSrc1, setVideoSrc1] = useState(null);
  const [videoSrc2, setVideoSrc2] = useState(null);

  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc1(videoURL);
    }
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc2(videoURL);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5 py-3">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative min-h-full">
        {/* Close Window btn */}
        <Image
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          width={16}
          height={16}
          onClick={onClose}
          loading="lazy"
          className="absolute top-3 right-4 cursor-pointer"
        />

        <form className="flex flex-col gap-y-4 h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">
          {/* Profile Image File  */}
          <div className="my-4 flex justify-center flex-col items-center">
            <div className="relative w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#0F0A1914] cursor-pointer">
              <input
                type="file"
                className="opacity-0 top-8 absolute cursor-pointer"
              />
              <Image
                src="/assets/profile-vector.svg"
                alt="profile-vector"
                width={40}
                height={44}
              />

              <div className="bg-[#3D2278] w-[30px] h-[30px] rounded-full flex justify-center items-center absolute bottom-0 right-0">
                <Image
                  src="/assets/camera.svg"
                  alt="camera icon"
                  width={16}
                  height={14}
                />
              </div>
            </div>
            <h2 className="text-base font-semibold text-[#0F0A19] mt-4">
              Upload your profile
            </h2>
          </div>

          {/* Enter Your Full Name  */}
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA] h-fit"
          />

          {/* Discription textarea  */}
          <textarea
            placeholder="Write a small description about your sport discipline, training method, exercise type, skill level."
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full min-h-[140px] rounded-[10px] bg-[#FAFAFA]"
          />

          {/* Video Uploader 1 */}
          <div className="flex flex-col gap-4">
            {!videoSrc1 && (
              <div className="relative borderUpload py-5 md:py-10">
                <input
                  className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange1}
                />
                <div className="text-center">
                  <img
                    alt="video-camera"
                    loading="lazy"
                    width="42"
                    height="34"
                    decoding="async"
                    className="mx-auto"
                    src="/assets/icons/video-camera.svg"
                  />
                  <h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
                    <span>Drag and drop or </span>
                    <span className="text-[#3D2278] font-semibold">browse</span>
                  </h3>
                </div>
              </div>
            )}

            {videoSrc1 && (
              <div className="flex flex-col gap-y-4">
                <div className="border-[#E7E7E7] flex-1 w-full min-h-[140px] rounded-[10px] bg-[#FAFAFA] overflow-hidden">
                  <div className="max-w-full md:max-w-[240px] w-full mx-auto min-h-full">
                    <video
                      src={videoSrc1}
                      autoPlay
                      controls
                      className="h-full w-full object-cover"
                    ></video>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Title"
                  className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 min-h-[52px] border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA]"
                />
                <textarea
                  placeholder="Enter Description"
                  className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full min-h-[140px] rounded-[10px] bg-[#FAFAFA]"
                />
              </div>
            )}
          </div>

          {/* Video Uploader 2 */}
          <div className="flex flex-col gap-4">
            {!videoSrc2 && (
              <div className="relative borderUpload py-5 md:py-10">
                <input
                  className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange2}
                />
                <div className="text-center">
                  <img
                    alt="video-camera"
                    loading="lazy"
                    width="42"
                    height="34"
                    decoding="async"
                    className="mx-auto"
                    src="/assets/icons/video-camera.svg"
                  />
                  <h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
                    <span>Drag and drop or </span>
                    <span className="text-[#3D2278] font-semibold">browse</span>
                  </h3>
                </div>
              </div>
            )}

            {videoSrc2 && (
              <div className="flex flex-col gap-y-4">
                <div className="border-[#E7E7E7] flex-1 w-full min-h-[140px] rounded-[10px] bg-[#FAFAFA] overflow-hidden">
                  <div className="max-w-full md:max-w-[240px] w-full mx-auto min-h-full">
                    <video
                      src={videoSrc2}
                      autoPlay
                      controls
                      className="h-full w-full object-cover"
                    ></video>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Title"
                  className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 h-[52px] min-h-[52px] border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA]"
                />
                <textarea
                  placeholder="Enter Description"
                  className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full h-[140px] min-h-[140px] rounded-[10px] bg-[#FAFAFA]"
                />
              </div>
            )}
          </div>

          {/* Enter your Language  */}
          <input
            type="text"
            placeholder="Language"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA] h-fit"
          />

          {/* Enter Your Webiste link  */}
          <input
            type="text"
            placeholder="Add your website link"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          {/* Inter Instagram ID  */}
          <input
            type="text"
            placeholder="Instagram"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          {/* Enter Facebook ID  */}
          <input
            type="text"
            placeholder="Facebook"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          {/* Enter YouTube ID  */}
          <input
            type="text"
            placeholder="YouTube"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <button className="bg-[#3D2278] mt-3 text-white rounded-[10px] w-full min-h-12 md:min-h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
            Register
          </button>

          <p className="text-center text-sm text-[#0F0A19B2]">
            Already have an account?&nbsp;
            <span
              onClick={onLogin}
              className="text-sm cursor-pointer font-semibold text-[#3D2278]"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CoachRegisterModal;
