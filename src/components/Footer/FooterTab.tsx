import { FooterDataType } from '@/types/footer'
import Link from 'next/link'
import React from 'react'

type FooterTabProps = {
    data:FooterDataType[],
    name:string
}

const FooterTab = ({ data, name }: FooterTabProps) => {
    return (
        <>
            <div className='font-semibold text-lg mb-8'>{name}</div>
            <div className="flex flex-col space-y-5">
                {data && data.map((item:FooterDataType, index:number) => {
                    return (<Link href={item.link || '#'} className="relative group" key={index}> {item.name}
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-top-left transform scale-x-0 group-hover:scale-x-[0.3] transition-all duration-300"></span>
                    </Link>)
                })}
            </div>
        </>
    )
}

export default FooterTab
