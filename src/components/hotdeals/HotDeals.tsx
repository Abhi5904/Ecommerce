"use client";
import { TimeLeft } from "@/types/timeLeft";
import { calculateTimeLeft } from "@/utils/calculateTimeLeft";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HotDealsData } from "@/constant/hotDeals";
import Card from "../cards/Card";

const HotDeals = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval, idx) => {
    if (!timeLeft[interval as keyof TimeLeft]) {
      return null;
    }
    return (
      <div key={interval} className="flex flex-col items-center relative">
        <p className="text-lg">{timeLeft[interval as keyof TimeLeft]}</p>{" "}
        <span
          className={`absolute -right-2 ${
            idx === 3 && "hidden"
          } ml-3 text-black`}
        >
          :
        </span>
        <p className="uppercase text-[#767676] text-sm">
          {interval as keyof TimeLeft}{" "}
        </p>
      </div>
    );
  });
  return (
    <div className="px-16 pt-16">
      <h2 className="text-4xl text-[#222222] text-center mt-7 mb-6 font-medium ">
        Hot Deals
      </h2>
      <div className="grid grid-cols-4">
        <div className="flex flex-col justify-center items-start py-4">
          <h3 className="text-[#222222] font-medium lead0ing-[1.2] text-2xl mb-2">
            Summer Sale
          </h3>
          <h2 className="text-[#222222] font-bold text-2xl mb-2">
            Up to 60% Off
          </h2>
          <div className="mb-4 flex items-center gap-4">{timerComponents}</div>
          <Link
            href={"/"}
            className="font-medium relative group uppercase mt-4"
          >
            view all
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-top-left transform scale-x-75 group-hover:scale-x-100 transition-all duration-300"></span>
          </Link>
        </div>
        <div className="col-span-3">
          <div className="w-full">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              scrollbar={{ draggable: true }}
              autoplay
              loop
              modules={[Autoplay]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024:{
                  slidesPerView: 3,
                },
                1536:{
                  slidesPerView: 4,
                }
              }}
            >
              {HotDealsData &&
                HotDealsData.map((data, idx) => (
                  <SwiperSlide key={idx}>
                    <Card data={data} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
