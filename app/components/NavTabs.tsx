"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavTabs = () => {
  const pathname = usePathname();

  const getTabClassName = (path: string) => {
    return `tab-btn py-3 px-10 text-center w-[140px] md:w-[150px] rounded-[30px] text-base font-medium border-2 ${
      pathname === path
        ? "border-[#3D2278] text-[#3D2278]"
        : "border-transparent"
    }`;
  };

  return (
    <section className="max-w-[1180px] w-full pb-10 md:pb-20 mx-auto flex gap-5 pt-[30px] md:pt-[50px] overflow-x-scroll lg:overflow-x-visible tabs-scrollbar relative">
      <Link href="/" className={`ml-5 lg:ml-0 ${getTabClassName("/")}`}>
        Body
      </Link>

      <Link href="/plan" className={getTabClassName("/plan")}>
        Sports
      </Link>

      <Link href="/coaches" className={getTabClassName("/coaches")}>
        Coaches
      </Link>

      <Link href="/tutorials" className={getTabClassName("/tutorials")}>
        Tutorials
      </Link>

      <Link href="/store" className={`mr-5 lg:mr-0 ${getTabClassName("/store")}`}>
        Store
      </Link>
    </section>
  );
};

export default NavTabs;
