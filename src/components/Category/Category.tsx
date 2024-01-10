'use client'
import React from 'react'
import { CategoryCarouselData } from '@/constant/carousel'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CategoryCarousel } from '.';
const Category = () => {
  return (
    <>
      <div className='flex flex-col justify-centr gap-y-8 py-16 px-4'>
        <div className="text-center capitalize text-4xl font-medium">you might like</div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ dynamicBullets: true, clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>5</SwiperSlide>
          {/* {CategoryCarouselData && CategoryCarouselData.map((data, idx) => (
            <SwiperSlide key={idx}>
              <CategoryCarousel carouselData={data} key={idx} />
            </SwiperSlide>
          ))} */}
          <div className="swiper-button-next bg-white rounded-full !w-10 !h-10 after:!text-base after:!text-gray-400"></div>
          <div className="swiper-button-prev bg-white rounded-full !w-10 !h-10 after:!text-base after:!text-gray-400"></div>
        </Swiper >
      </div>
    </>
  )
}

export default Category
