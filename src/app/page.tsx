import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title:
    "Necropolis Funeral",
  description: "Un Mundo En Servicios Funerarios",
};

export default function Home() {
  return (
    <>
      {/* <DefaultLayout>
        <ECommerce />
      </DefaultLayout> */}
        <MainHeader />
      <main>
        {/* <HeroSlider/> */}
        <Hero/>
        <Brands />
        <Feature />
        <About />
      {/* <Testimonial /> */}

      <Blog />

      </main>
      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
}
