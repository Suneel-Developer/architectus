import Image from "next/image";
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="relative mb-5">
      <input
        type="text"
        placeholder="Search type"
        className="rounded-[10px] placeholder:text-[#0F0A19]/60 border py-3 pl-12 border-black/10 w-full md:max-w-[570px]"
      />

      <Image
        src="/assets/icons/search-icon.svg"
        alt="search-icon"
        width={20}
        height={20}
        loading="lazy"
        className="absolute top-4 left-4 w-5 h-5"
      />
    </div>
  );
};

export default SearchBar;
