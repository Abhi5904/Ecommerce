import Category from "@/components/category/Category";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/herosection/HeroSection";
import HotDeals from "@/components/hotdeals/HotDeals";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="hero-background">
        <div className="container mx-auto">
          <Navbar />
          <HeroSection />
          <div className="bg-white rounded-xl">
            <div className="container mx-auto">
              <Category />
              <HotDeals />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
