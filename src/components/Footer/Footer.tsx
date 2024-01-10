import { footerCompanyData, footerHelpData, footerOpeningTimeData, footerShopData } from '@/constant';
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { FooterTab } from '@/components/Footer';

const Footer = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='mx-16'>
          <div className='flex justify-center'>
            <div className='w-full'>
              <div className='text-center font-semibold text-2xl mb-5'>Sign up now & get 10% off</div>
              <p className='text-[#727272] text-center mb-6'>Be the first to get the latest news about trends, promotions, and much more!</p>
              <div className="flex justify-center items-center">
                <form className="flex justify-center gap-5 max-w-screen-md flex-1">
                  <input type="text" placeholder='Your email address' className='leading-3 focus:outline-none  border-[1px] border-[#e4e4e4] p-4 bg-white text-black w-full' />
                  <input type="submit" value="Join" className='text-white bg-black border-transparent py-1 px-12 text-center font-bold' />
                </form>
              </div>
            </div>
          </div>
          <div className='py-16'>
            <div className="flex gap-x-10 flex-wrap gap-y-10">
              <div className='flex flex-col space-y-5'>
                <Image
                  src={'/assets/images/logo.png'}
                  alt='uomo logo'
                  height={100}
                  width={100}
                  className='object-contain bg-contain'
                />
                <div>1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</div>
                <div>sale@uomo.com</div>
                <div>+1 246-345-0695</div>
                <div className='flex justify-between items-center'>
                  <FaFacebookF strokeWidth={0.5} size={'20px'} className='text-slate-500 hover:text-slate-950 cursor-pointer' />
                  <FaInstagram strokeWidth={0.5} size={'20px'} className='text-slate-500 hover:text-slate-950 cursor-pointer' />
                  <FaTwitter strokeWidth={0.5} size={'20px'} className='text-slate-500 hover:text-slate-950 cursor-pointer' />
                  <FaYoutube strokeWidth={0.5} size={'20px'} className='text-slate-500 hover:text-slate-950 cursor-pointer' />
                  <FaPinterest strokeWidth={0.5} size={'20px'} className='text-slate-500 hover:text-slate-950 cursor-pointer' />
                </div>
              </div>
              <div className='flex-1 px-4'>
                <FooterTab data={footerCompanyData} name={'COMPANY'} />
              </div>

              <div className='flex-1 px-4'>
                <FooterTab data={footerShopData} name={'SHOP'} />
              </div>
              <div className='flex-1 px-4'>
                <FooterTab data={footerHelpData} name={'HELP'} />
              </div>
              <div className='flex-1 px-4'>
                <FooterTab data={footerOpeningTimeData} name={'OPENING TIME'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
