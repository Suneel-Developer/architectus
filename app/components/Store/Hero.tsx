import React from "react";
import SearchBar from "../SearchBar";
import Image from "next/image";
import ProductSlider from "./ProductSlider";

const Hero: React.FC = () => {
  return (
    <section className="px-5">
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-20">
          <h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
            Store
          </h1>

          <p className="text-sm md:text-lg text-[#0F0A19] max-w-[520px] w-full">
            Write a small description about your product or service such as
            product/service type, relevant sports categories, and available
            shipping countries.
          </p>

          <div className="grid grid-cols-2 gap-5 max-w-[420px] w-full mt-2">
            <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
              Advertise
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
            Search for workout&nbsp;
            <span className="font-semibold">
              supplements, vitamins, training equipment, sportswear, events and
              country location.
            </span>
          </p>
        </div>

        <ProductSlider />

        <div className="my-20 grid grid-cols-2 max-w-[600px] w-full mx-auto gap-5 md:gap-10">
          <div className="bg-white shadow-1 py-4 rounded-[18px] flex items-center justify-center cursor-pointer">
            <Image
              src="/assets/ncc-logo.svg"
              alt="ncc-logo"
              width={100}
              height={100}
              loading="lazy"
              className="w-auto h-[90px]"
            />
          </div>

          <div className="bg-white shadow-1 py-4 rounded-[18px] flex items-center justify-center cursor-pointer">
            <Image
              src="/assets/r-company-logo.svg"
              alt="ncc-logo"
              width={100}
              height={100}
              loading="lazy"
              className="w-auto h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
