"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import VideoModal from "./VideoModal";
import CreateVisualisationModal from "../Visualization/CreateVisualisationModal";
import VerificationLoadingModal from "../Visualization/VerificationLoadingModal";
import Reviews from "../Reviews";

const tutorialsdata = [
  {
    id: 1,
    thumbnail: "/assets/video-thumbnail.jfif",
    video: "/assets/video-1.mp4",
    name: "Exercise Tutorial - Squat",
    disc: "To perform a squat, start by standing with your feet slightly wider than shoulder-width apart. Cross your arms in front of you, resting your hands on your shoulders.",
  },
  {
    id: 2,
    thumbnail: "/assets/thubnail-2.jpg",
    video: "/assets/video-2.mp4",
    name: "Best 7 ABS Exercises For SIX PACK ",
    disc: "Achieving six-pack abs is a common fitness goal for many people. However, it requires a combination of a healthy diet and regular exercise, specifically targeted to the abs",
  },
  {
    id: 3,
    thumbnail: "/assets/thumbnail-3.jpg",
    video: "/assets/video-3.mp4",
    name: "Best Workout Routine For Losing Weight",
    disc: "The perfect exercise routine involves the right mix of cardiovascular and strength training. Heather Milton, a senior exercise physiologist at  NYU Langone Health, discusses how to get in shape with the right balance.",
  },

  {
    id: 2,
    thumbnail: "/assets/thubnail-2.jpg",
    video: "/assets/video-2.mp4",
    name: "Best 7 ABS Exercises For SIX PACK ",
    disc: "Achieving six-pack abs is a common fitness goal for many people. However, it requires a combination of a healthy diet and regular exercise, specifically targeted to the abs",
  },
];

const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);
  const [isVisibleReviews, setIsVisibleReviews] = useState<Boolean>(false);

  const handleOpenVideoModal = (videoSrc: string) => {
    setCurrentVideoSrc(videoSrc);
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoSrc("");
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

        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            10: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper h-full"
        >
          {tutorialsdata.map((tutorial) => (
            <SwiperSlide>
              <div className="shadow-1 bg-white rounded-[20px] overflow-hidden w-full mb-14 md:mb-20">
                <div className="relative w-full h-[210px]">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.name}
                    className="w-full object-cover h-full"
                  />

                  <button
                    onClick={() => handleOpenVideoModal(tutorial.video)}
                    className="bg-[#3D2278] text-white text-base flex items-center justify-center transition-opacity duration-300 hover:opacity-90 w-12 h-12 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto"
                  >
                    <FaPlay />
                  </button>
                </div>

                <div className="p-5 md:p-7 flex flex-col justify-between h-auto w-full">
                  <div>
                    <h2 className="text-[#0F1017] text-lg tracking-[2%] font-semibold mb-3">
                      {tutorial.name}
                    </h2>

                    <p className="text-[#858585] text-xs md:text-sm mb-5">
                      {tutorial.disc}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-12 text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
                      Save
                    </button>

                    <button
                      onClick={handleShowReviews}
                      className="border-2 border-[#3D2278] rounded-[10px] h-12 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
                    >
                      Reviews (4)
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {isVisibleReviews && (
          <div className="px-4 my-16">
            <Reviews />
          </div>
        )}

        {isVideoModalOpen && (
          <VideoModal
            onClose={handleCloseVideoModal}
            videoSrc={currentVideoSrc}
          />
        )}

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
