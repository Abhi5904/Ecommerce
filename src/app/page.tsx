import { Category } from '@/components/category'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/herosection'
import { HotDeals } from '@/components/hotdeals'
import { Navbar } from '@/components/navbar'
// import SliderBg from '../../public/assets/images/slider_bg.jpg'

export default function Home() {
  return (
    <>
      <div className="hero-background">
        <div className='container mx-auto'>
          <Navbar />
          <HeroSection />
          <div className='bg-white rounded-xl'>
            <div className="container mx-auto">
              <Category />
              <HotDeals/>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
