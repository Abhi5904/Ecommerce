"use client"
import { subNavbarData } from '@/constant'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { useState } from 'react'
const ProductsTab = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleProductsMouseOver = () => {
        setIsOpen(true)
    }
    const handleProductsMouseOut = () => {
        setIsOpen(false)
    }
    return (
        <>
            <div
                className='cursor-pointer'
                onMouseOver={handleProductsMouseOver}
                onMouseOut={handleProductsMouseOut}
            >
                <p className={`transition duration-300 text-base ${isOpen && ' text-primary '}`}>
                    Shop
                </p>
            </div>
            <Transition
                show={isOpen}
                enter='transition-opacity duration-75'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity duration-150'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                onMouseOver={handleProductsMouseOver}
                onMouseOut={handleProductsMouseOut}
                className='absolute top-3 pt-3 w-[400px]'
            >
                <div className=" bg-white grid grid-cols-3 gap-3 text-base p-5">
                    {subNavbarData.map((list) => {
                        return <div key={list.id}>
                            <Link href={list.link}> {list.label}</Link>
                        </div>
                    })}
                </div>
            </Transition>
        </>
    )
}
export default ProductsTab
