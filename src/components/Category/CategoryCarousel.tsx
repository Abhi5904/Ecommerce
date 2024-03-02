import {
  CategoryCarouselDataType,
  HeroCarouselDataType,
} from "@/types/carousel";
import Image from "next/image";
import React from "react";

interface CategoryCarouselDataProps {
  carouselData: HeroCarouselDataType | CategoryCarouselDataType;
}

const CategoryCarousel = ({ carouselData }: CategoryCarouselDataProps) => {
  const categoryData = carouselData as CategoryCarouselDataType;
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <div className="pt-14">
        <Image src={categoryData.image} alt={categoryData.alt} width={100} height={100}/>
      </div>
      <p className="text-[#222222] font-medium leading-[1.5em] max-w-14 text-center">
        {categoryData.title}
      </p>
    </div>
  );
};

export default CategoryCarousel;
