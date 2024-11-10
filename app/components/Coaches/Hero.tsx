import React from "react";
import SearchBar from "../SearchBar";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="px-5">
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-20">
          <h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
            Coaches&nbsp;
            <span className="relative">
              <span className="text-[#3D2278]">List</span>
              <img
                src="/assets/linewrk.webp"
                alt="linewrk"
                className="absolute left-0 top-[45px] md:top-[65px] lg:top-[76px]"
              />
            </span>
          </h1>

          <p className="text-sm md:text-lg text-[#0F0A19] max-w-[520px] w-full">
            Now that you have the vision and the plan, on this page you'll find
            the list of Coaches needed to start your journey without excuses.
          </p>

          <div className="grid grid-cols-2 gap-5 max-w-[420px] w-full mt-2">
            <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
              I'm a Coach
            </button>
            <button className="border-[1.5px] border-[#3D2278] text-[#3D2278] rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-all duration-300 hover:bg-[#3D2278] hover:text-white">
              Login
            </button>
          </div>
        </div>

        <SearchBar />

        <div className="mb-7 md:mb-12 flex items-center gap-3">
          <Image
            src="/assets/icons/suggestion.svg"
            alt="suggestion"
            width={20}
            height={20}
            loading="lazy"
          />

          <p className="text-xs md:text-sm text-[#0F0A19]/60 max-w-[34rem] flex-1">
            Search for&nbsp;
            <span className="font-semibold">
              coach, sport discipline, training method, exercise type, skill
              level.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
