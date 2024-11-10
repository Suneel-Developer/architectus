"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShareModal from "../Visualization/ShareModal";
import Reviews from "../Reviews";

const coachesData = [
  {
    id: 1,
    name: "John Doe",
    image: "/assets/coaches-1.png",
    specialties: ["Cross Fit", "Boxing"],
    profileLink: "/profile/john-doe",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },

  {
    id: 2,
    name: "Esthera Jackson",
    image: "/assets/coaches-2.png",
    specialties: ["Circuit", "Cross Fit", "Boxing"],
    profileLink: "/profile/john-doe",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },

  {
    id: 3,
    name: "Alexa Liras",
    image: "/assets/coaches-3.png",
    specialties: ["Strength", "Boxing"],
    profileLink: "/profile/john-doe",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },

  {
    id: 4,
    name: "Laurent Michael",
    image: "/assets/coaches-4.png",
    specialties: ["Strength", "Strength", "Boxing"],
    profileLink: "/profile/john-doe",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
];

const CoachesList: React.FC = () => {
  const [visibleCoachId, setVisibleCoachId] = useState<number | null>(null);
  const [isShareModalVisible, setIsShareModalVisible] = useState<number | null>(
    null
  );

  const handleToggleDetails = (id: number) => {
    setVisibleCoachId(visibleCoachId === id ? null : id);
  };

  const handleOpenShareModal = (id: number) => {
    setIsShareModalVisible(id);
  };

  const handleCloseShareModal = () => {
    setIsShareModalVisible(null);
  };

  return (
    <section className="px-5 pb-10 md:pb-20">
      <div className="max-w-[1180px] w-full mx-auto flex flex-col gap-6">
        {coachesData.map((coach) => (
          <div
            key={coach.id}
            className="shadow-2 bg-white rounded-2xl md:rounded-[20px] overflow-hidden"
          >
            {/* Button */}
            <button
              className={`flex w-full gap-4 flex-col py-5 px-4 md:px-[30px] text-left ${
                visibleCoachId === coach.id ? "faq" : "bg-white"
              }`}
              onClick={() => handleToggleDetails(coach.id)}
            >
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

                <div className="ml-6 flex h-7 items-center">
                  <div className="flex gap-7 items-center">
                    {/* Specilty itmes show when details div close */}
                    <div
                      className={`gap-3 items-center ${
                        visibleCoachId === coach.id
                          ? "hidden"
                          : "hidden md:flex"
                      }`}
                    >
                      {coach.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[10px] px-5 py-1"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 md:gap-7">
                      <Image
                        src="/assets/icons/share-icon.svg"
                        alt="share-icon"
                        width={44}
                        height={44}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenShareModal(coach.id);
                        }}
                        loading="lazy"
                      />

                      {/* Plus & Minus Icon  */}
                      <Image
                        src={
                          visibleCoachId === coach.id
                            ? "/assets/icons/minus.svg"
                            : "/assets/icons/plus.svg"
                        }
                        alt="icon"
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Specilty Show on mobile & hide one desktop */}
              <div
                className={`gap-3 items-center flex-wrap ${
                  visibleCoachId === coach.id ? "hidden" : "flex md:hidden"
                }`}
              >
                {coach.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[10px] px-5 py-1"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </button>

            {/* Details section */}
            {visibleCoachId === coach.id && (
              <div className="mt-6 pb-7 px-4 md:px-8">
                <div className="flex flex-col pb-7 mb-7 gap-6 border-b-[#0F0A19]/20 border-b">
                  <p className="text-sm md:text-base text-[#0F1017]">
                    {coach.disc}
                  </p>

                  <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
                    <h3 className="text-lg font-semibold">Training Types:</h3>

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
                          src="/assets/icons/tiktok.svg"
                          alt="tiktok"
                          width={16}
                          height={18}
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
                    </div>
                  </div>
                </div>

                <Reviews />
              </div>
            )}
          </div>
        ))}

        {isShareModalVisible && <ShareModal onClose={handleCloseShareModal} />}
      </div>
    </section>
  );
};

export default CoachesList;
