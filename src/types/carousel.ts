import { StaticImageData } from 'next/image';
export type HeroCarouselDataType = {
    title: string,
    subtitle: string,
    btnLink: string,
    image: StaticImageData,
    backgroundText: string,
    height: number,
    width: number
}
export type CategoryCarouselDataType = {
    title: string,
    image: StaticImageData,
    alt: string,
    navigateLink: string,
}