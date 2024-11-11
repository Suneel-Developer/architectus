"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import SupplierPlan from "./SupplierPlan";
import Reviews from "../Reviews";

const products = [
  {
    id: 1,
    image: "/assets/product-1.jfif",
    name: "Beta-Alanine",
    brand: "Kaged Muscle",
    originalPrice: "€19,90",
    discountedPrice: "€9,95",
  },
  {
    id: 2,
    image: "/assets/product-2.jfif",
    name: "Foods Vitamin D3",
    brand: "Smartys",
    originalPrice: "€19,90",
    discountedPrice: "€9,95",
  },
  {
    id: 3,
    image: "/assets/product-3.jfif",
    name: "Dumbbells",
    brand: "Bowflex",
    originalPrice: "€19,90",
    discountedPrice: "€9,95",
  },
  {
    id: 4,
    image: "/assets/product-4.jfif",
    name: "Running Shorts",
    brand: "Nike",
    originalPrice: "€19,90",
    discountedPrice: "€9,95",
  },
  {
    id: 4,
    image: "/assets/product-2.jfif",
    name: "Foods Vitamin D3",
    brand: "Smartys",
    originalPrice: "€19,90",
    discountedPrice: "€9,95",
  },
];

const ProductSlider: React.FC = () => {
  const [isOpenSupplierPlanModal, setIsOpenSupplierPlanModal] =
    useState<Boolean>(false);
  const [isVisibleReviews, setIsVisibleReviews] = useState<Boolean>(false);

  const handleOpenSupplierPlanModal = () => {
    setIsOpenSupplierPlanModal(true);
  };

  const handleCloseSupplierPlanModal = () => {
    setIsOpenSupplierPlanModal(false);
  };

  const handleShowReviews = () => {
    setIsVisibleReviews(!isVisibleReviews);
  };

  return (
    <div className="mb-12">
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
            slidesPerView: 4,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Loop through the products array and render each product as a SwiperSlide */}
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white productbox rounded-[14px] overflow-hidden mb-14 md:mb-20">
              <div className="h-[160px] w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="py-4 px-5 bg-white">
                <h2 className="text-[#0F0A19] font-semibold text-xl mb-4">
                  {product.name}
                </h2>

                <div className="flex flex-col gap-4 mb-5">
                  <div className="flex justify-between gap-2">
                    <p className="text-[#0F0A19] text-sm">Brand:</p>
                    <p className="text-sm font-semibold text-[#0F0A19]">
                      {product.brand}
                    </p>
                  </div>
                  <div className="flex justify-between gap-2">
                    <p className="text-[#0F0A19] text-sm">Price:</p>
                    <p className="text-sm text-[#FF3A5E] line-through font-medium">
                      {product.originalPrice}
                    </p>
                  </div>
                  <div className="flex justify-between gap-2">
                    <p className="text-[#0F0A19] text-sm">Discounted Price:</p>
                    <p className="text-sm font-bold text-[#3D2278]">
                      {product.discountedPrice}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleOpenSupplierPlanModal}
                    className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
                  >
                    Buy Now
                  </button>
                  <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isVisibleReviews && (
        <div className="px-4 my-16">
          <Reviews />
        </div>
      )}

      {isOpenSupplierPlanModal && (
        <SupplierPlan onClose={handleCloseSupplierPlanModal} />
      )}
    </div>
  );
};

export default ProductSlider;
