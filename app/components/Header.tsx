import React from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";

const Header: React.FC = () => {
  return (
    <header className="px-5 lg:px-20 navbar h-20 flex items-center justify-between bg-white sticky top-0 w-full z-50">
      <div className="z-50 w-full">
        <nav className="flex items-center justify-between max-w-[1400px] w-full mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <div className="logobg w-10 h-10 rounded-[10px] flex items-center justify-center">
              <Image
                src="/assets/logo-man.svg"
                alt="Logo"
                width={17}
                height={24}
                loading="lazy"
                // className="w-auto h-11 md:h-[64px]"
              />
            </div>

            <h2 className="text-base font-bold text-[#3D2278] uppercase">
              Workout <span className="text-[#0F0A1980]">Creator</span>
            </h2>
          </Link>

          <div className="flex items-center gap-5">
            <LanguageDropdown />

            <Link
              href="/aboutus"
              className="bg-[#3D2278] items-center justify-center rounded-xl hidden md:flex w-10 h-10"
            >
              <Image
                src="/assets/icons/contact-us-icon.svg"
                alt="contact-us-icon"
                width={100}
                height={100}
                loading="lazy"
                className="h-6"
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
