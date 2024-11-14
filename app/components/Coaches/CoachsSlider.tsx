"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineTextsms } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import ShareModal from "../Visualization/ShareModal";
import Reviews from "../Reviews";

const displayedCoaches = [
  {
    id: 0,
    name: "John Doe",
    image: "/assets/coaches-1.png",
    specialties: ["Cross Fit", "Boxing"],
    profileLink: "/profile/john-doe",
    coachvideo: "/assets/video-1.mp4",
    videoThumbnail: "/assets/video-thumbnail.jfif",
    videotitle: "Exercise Tutorial - Squat",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
  {
    id: 1,
    name: "Esthera Jackson",
    image: "/assets/coaches-2.png",
    specialties: ["Circuit", "Cross Fit", "Boxing"],
    profileLink: "/profile/esthera-jackson",
    coachvideo: "/assets/video-2.mp4",
    videoThumbnail: "/assets/thubnail-2.jpg",
    videotitle: "Best 7 ABS Exercises For SIX PACK",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
  {
    id: 2,
    name: "Alexa Liras",
    image: "/assets/coaches-3.png",
    specialties: ["Strength", "Boxing"],
    profileLink: "/profile/alexa-liras",
    coachvideo: "/assets/video-3.mp4",
    videoThumbnail: "/assets/thumbnail-3.jpg",
    videotitle: "Exercise Tutorial - Squat",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
  {
    id: 3,
    name: "Laurent Michael",
    image: "/assets/coaches-4.png",
    specialties: ["Strength", "Boxing"],
    profileLink: "/profile/laurent-michael",
    coachvideo: "/assets/video-3.mp4",
    videoThumbnail: "/assets/thumbnail-3.jpg",
    videotitle: "Best 7 ABS Exercises For SIX PACK",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
];

const CoachesSlider: React.FC = () => {
  const [isShareModalVisible, setIsShareModalVisible] =
    useState<Boolean>(false);
  const [isVisibleReviews, setIsVisibleReviews] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);


  const handleOpenShareModal = () => {
    setIsShareModalVisible(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalVisible(false);
  };

  const handleShowReviews = () => {
    setIsVisibleReviews(!isVisibleReviews);
  };

  
  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="px-5 pb-10 md:pb-20">
      <div className="max-w-[1180px] w-full mx-auto">
        <div>
          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {displayedCoaches.map((coach, index) => (
              <SwiperSlide key={index}>
                <div className="shadow-2 bg-white rounded-2xl md:rounded-[20px] overflow-hidden  mb-14 md:mb-20">
                  {/* Button */}
                  <button className="flex w-full gap-4 flex-col py-5 px-4 md:px-[30px] text-left faq">
                    <div className="flex items-center w-full justify-between">
                      {/* Coach Profile & name  */}
                      <div className="flex items-center gap-4">
                        <Image
                          src={coach.image}
                          alt={coach.name}
                          width={100}
                          height={100}
                          loading="lazy"
                          className="w-11 md:w-14 h-11 md:h-14 rounded-full object-cover"
                        />
                        <h2 className="text-[#0F1017] text-sm md:text-xl font-semibold">
                          {coach.name}
                        </h2>
                      </div>

                      {/* Share btn  */}
                      <Image
                        src="/assets/icons/share-icon.svg"
                        alt="share-icon"
                        width={44}
                        height={44}
                        onClick={handleOpenShareModal}
                        loading="lazy"
                      />
                    </div>
                  </button>

                  {/* Details section */}
                  <div className="mt-6 pb-7 px-4 md:px-8">
                    <div className="flex flex-col gap-6">
                      {/* Video With title  */}
                      <div className="mb-2">
                      <div className="max-w-[400px] w-full rounded-lg overflow-hidden h-[200px] md:h-[250px]">
                      {isPlaying ? (
                        <video
                          ref={videoRef}
                          src={coach.coachvideo}
                          loop
                          autoPlay
                          muted
                          controls
                          className="w-full h-full object-cover"
                          onPause={handlePause}
                        ></video>
                      ) : (
                        <div className="relative w-full h-full">
                          <img
                            src={coach.videoThumbnail}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={handlePlay}
                            className="bg-[#3D2278] text-white text-base flex items-center justify-center transition-opacity duration-300 hover:opacity-90 w-12 h-12 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto"
                          >
                            <FaPlay />
                          </button>
                        </div>
                      )}
                    </div>

                        <h2 className="text-[#0F1017] text-lg font-medium mt-5">
                          {coach.videotitle}
                        </h2>
                      </div>

                      <p className="text-sm md:text-base text-[#0F1017]">
                        {coach.disc}
                      </p>

                      <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
                        <h3 className="text-lg font-semibold">
                          Training Types:
                        </h3>

                        <div className="flex flex-wrap gap-3 items-center">
                          {coach.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[10px] px-5 py-1"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
                        <h3 className="text-lg font-semibold">Language:</h3>

                        <div className="flex gap-3 items-center">
                          <span className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[30px] px-4 py-[10px] flex items-center gap-2">
                            <Image
                              src={coach.countryflag}
                              alt={coach.language}
                              width={30}
                              height={20}
                              loading="lazy"
                              className="3px"
                            />
                            {coach.language}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
                        <h3 className="text-lg font-semibold">Social Media:</h3>

                        <div className="flex gap-4 items-center">
                          <Link
                            href="#"
                            className="shadow-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#3D2278]"
                          >
                            <Image
                              src="/assets/icons/globe.svg"
                              alt="globe"
                              width={20}
                              height={20}
                              loading="lazy"
                            />
                          </Link>

                          <Link
                            href="#"
                            className="shadow-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#3D2278]"
                          >
                            <Image
                              src="/assets/icons/instagram.svg"
                              alt="instagram"
                              width={20}
                              height={20}
                              loading="lazy"
                            />
                          </Link>

                          <Link
                            href="#"
                            className="shadow-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#3D2278]"
                          >
                            <Image
                              src="/assets/icons/youtube.svg"
                              alt="youtube"
                              width={20}
                              height={14}
                              loading="lazy"
                            />
                          </Link>
                          <Link
                            href="#"
                            className="shadow-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#3D2278]"
                          >
                            <MdOutlineTextsms className="opacity-80" />
                          </Link>

                          <Link
                            href="#"
                            className="shadow-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#3D2278]"
                          >
                            <IoCallOutline className="opacity-80" />
                          </Link>
                        </div>
                      </div>

                      <div
                        className={`grid grid-cols-2 mx-auto gap-3 max-w-[300px] w-full ${
                          isVisibleReviews ? "mb-10" : "mb-0"
                        }`}
                      >
                        <button className="bg-[#3D2278] text-white rounded-[10px] h-11 w-full text-center px-3 text-sm md:text-base font-medium transition-opacity duration-300 hover:opacity-90">
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

                    {isVisibleReviews && <Reviews />}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {isShareModalVisible && <ShareModal onClose={handleCloseShareModal} />}
      </div>
    </section>
  );
};

export default CoachesSlider;
