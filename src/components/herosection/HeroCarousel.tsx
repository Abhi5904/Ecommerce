import { CategoryCarouselDataType, HeroCarouselDataType } from '@/types/carousel';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface HeroCarouselProps {
    carouselData: HeroCarouselDataType | CategoryCarouselDataType
    isVisible: boolean
    setIsVisible: (index: boolean) => void
}

const HeroCarousel = ({ carouselData, isVisible, setIsVisible }: HeroCarouselProps) => {
    const heroData = carouselData as HeroCarouselDataType
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='slide-tab grid-cols-2 container mx-8 md:mx-16'>
            <div className='flex flex-col justify-center items-start gap-y-3'>
                <div className={`flex justify-start items-center gap-4 ${isVisible && 'animate'}`}>
                    <div className='h-0.5 w-10 bg-black'></div>
                    <div className='text-sm font-medium uppercase'>new arrivals</div>
                </div>
                <h1 className={`text-[4.3rem] leading-[4rem] ${isVisible && 'animate'}`}>{heroData.title}</h1>
                <h2 className={`text-[4.3rem] font-bold leading-[4rem] ${isVisible && 'animate'}`}>{heroData.subtitle}</h2>
                <Link href={heroData.btnLink} className={`text-base font-medium relative group ${isVisible && 'animate'}`}>Shop Now
                    <span className='absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-top-left transform scale-x-75 group-hover:scale-x-100 transition-all duration-300'></span>
                </Link>
            </div>
            <div className='flex justify-start items-center relative'>
                <Image
                    src={heroData.image}
                    alt={heroData.title}
                    height={heroData.height}
                    width={heroData.width}
                    className={`object-contain bg-contain h-[calc(100vh-96px)] ${isVisible && 'animate'}`}
                    priority
                />
                <div className='bg-text'>
                    <div className={`relative ${isVisible && 'animate'}`}>{heroData.backgroundText}</div>
                </div>
            </div>
        </div>
    )
}

export default HeroCarousel
