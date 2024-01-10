import { NavbarDataType, currencyType, languageType } from "@/types/navbar"

export const navbarData:NavbarDataType[] = [
    {
        id: 1,
        link: '/',
        label: 'Home'
    },
    {
        id: 2,
        link: '/',
        label: 'Shop'
    },
    {
        id: 3,
        link: '/about',
        label: 'About'
    },
    {
        id: 4,
        link: '/contact',
        label: 'Contact'
    }
]
export const subNavbarData:NavbarDataType[] = [
    {
        id: 1,
        link: '/shop/dresses',
        label: 'Dresses'
    },
    {
        id: 2,
        link: '/shop/shorts',
        label: 'Shorts'
    },
    {
        id: 3,
        link: '/shop/jackets',
        label: 'Jackets'
    },
    {
        id: 4,
        link: '/shop/t-shirts',
        label: 'T-Shirts & Tops'
    },
    {
        id: 5,
        link: '/shop/jeans',
        label: 'Jeans'
    },
    {
        id: 6,
        link: '/shop/trousers',
        label: 'Trousers'
    },
]

export const language:languageType[] = [
    { name: 'United Kingdom | English' },
    { name: 'United States | English' },
    { name: 'German' },
    { name: 'French' },
    { name: 'Swedish' },
]

export const currency:currencyType[] = [
    {name:'$ USD'},
    {name:'£ GBP'},
    {name:'€ EURO'}
]
