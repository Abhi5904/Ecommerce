import { Category } from '@/components/Category'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection.tsx'
import { Navbar } from '@/components/Navabr'
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
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
