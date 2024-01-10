'use client'
import React, { useState } from 'react'
import { HeroCarouselData } from '@/constant'
import { Navigation, Pagination } from 'swiper/modules';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import HeroCarousel from './HeroCarousel';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Swiper
      modules={[Navigation, Pagination, Virtual]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index) {
          return `<span class="dot swiper-pagination-bullet !rounded-none !bg-transparent !h-auto !w-auto !mx-6">0${index + 1}</span>`;
        },
      }}
      loop={true}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      virtual
    >
      {HeroCarouselData && HeroCarouselData.map((data, idx) => {
        return <SwiperSlide key={idx}>
          <HeroCarousel carouselData={data} isVisible={isVisible} setIsVisible={setIsVisible} />
        </SwiperSlide>
      })}
      <div className="swiper-pagination container mx-16 flex justify-start items-center"></div>
    </Swiper >
  )
}

export default HeroSection
