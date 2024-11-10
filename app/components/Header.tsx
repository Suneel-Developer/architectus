import React from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";

const Header: React.FC = () => {
  return (
    <header className="px-5 lg:px-20 navbar py-2 bg-white sticky top-0 w-full z-50">
      <div className="z-50">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              loading="lazy"
              className="w-auto h-11 md:h-[64px]"
            />
          </Link>

          <div className="flex items-center gap-5">
            <LanguageDropdown />

            <Link
              href="/aboutus"
              className="bg-[#3D2278] items-center justify-center rounded-xl flex w-10 h-10"
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
