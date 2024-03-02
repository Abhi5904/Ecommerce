"use client";
import React from "react";
import { CategoryCarouselData } from "@/constant/carousel";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryCarousel from "@/components/category/CategoryCarousel";
const Category = () => {
  return (
    <>
      <div className="flex flex-col justify-centr pt-16 px-4">
        <div className="text-center capitalize text-4xl font-medium">
          you might like
        </div>
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            slidesPerView={8}
            scrollbar={{ draggable: true }}
            loop
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {CategoryCarouselData &&
              CategoryCarouselData.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <CategoryCarousel carouselData={data} key={idx} />
                </SwiperSlide>
              ))}
            <div className="swiper-button-prev bg-white rounded-full !w-10 !h-10 after:!text-base after:!text-gray-400"></div>
            <div className="swiper-button-next bg-white rounded-full !w-10 !h-10 after:!text-base after:!text-gray-400"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Category;
