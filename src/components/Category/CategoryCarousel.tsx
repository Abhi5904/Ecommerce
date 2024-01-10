import { CategoryCarouselDataType, HeroCarouselDataType } from '@/types/carousel'
import Image from 'next/image'
import React from 'react'

interface CategoryCarouselDataProps {
    carouselData: HeroCarouselDataType | CategoryCarouselDataType
}

const CategoryCarousel = ({ carouselData }: CategoryCarouselDataProps) => {
    const categoryData = carouselData as CategoryCarouselDataType
    return (
        <div className='flex flex-col justify-center items-center gap-y-4'>
            <div>
                <Image
                    src={categoryData.image}
                    alt={categoryData.alt}
                />
            </div>
            <div>{categoryData.title}</div>
        </div>
    )
}

export default CategoryCarousel
