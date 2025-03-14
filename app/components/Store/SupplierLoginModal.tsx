"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoEyeOffOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { useTranslation } from "react-i18next";

interface DownloadModalProps {
  onClose: () => void;
  onSignup: () => void;
  onForgotPassword: () => void;
}

const SupplierLoginModal: React.FC<DownloadModalProps> = ({
  onClose,
  onSignup,
  onForgotPassword,
}) => {
  const { t } = useTranslation();
  const [isPasswordVisible, setIsPasswordVisible] = useState<Boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left">
          {t("store.loginmodal.supplierlogin")}
        </h1>

        {/* Close Window btn */}
        <Image
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          width={18}
          height={18}
          onClick={onClose}
          loading="lazy"
          className="absolute top-5 md:top-[30px] right-[30px] cursor-pointer"
        />

        <p className="mt-4 text-[#6D6D6D] text-left text-sm">
          {t("store.loginmodal.disc")}
        </p>

        <form className="gap-5 flex flex-col mt-8 gap-y-5">
          <input
            type="email"
            placeholder={t("supportmodal.enteryouremail")}
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA]"
          />

          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder={t("coaches.coachemodals.enteryourpassword")}
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 my-auto top-0 bottom-0"
            >
              {isPasswordVisible ? (
                <LuEye className="text-[#0F0A1966] text-3xl" />
              ) : (
                <IoEyeOffOutline className="text-[#0F0A1966] text-3xl" />
              )}
            </button>
          </div>

          <button
            onClick={onForgotPassword}
            className="bg-transparent border-none outline-none text-sm font-semibold text-[#3D2278] text-left"
          >
            {t("coaches.coachemodals.forgotpassword")}
          </button>

          <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
            {t("btns.login")}
          </button>

          <p className="text-center text-sm text-[#0F0A19B2]">
            {t("coaches.coachemodals.donthaveaccount")}&nbsp;
            <span
              onClick={onSignup}
              className="text-sm cursor-pointer font-semibold text-[#3D2278]"
            >
              {t("btns.signup")}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SupplierLoginModal;
