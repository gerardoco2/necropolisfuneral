'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';




function HeroSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "steps"
  };

  
  return (
    <>
       <Slider {...settings} className='mt-30'>
            <div className="relative mx-auto  w-auto ">
            <video className="" autoPlay loop playsInline muted >
                <source src="/videos/video2.mp4" type="video/mp4" />
              </video> 
            </div>
            <div className='mx-auto h-screen'>
              
              <h3>2</h3>
            </div>
          </Slider>
    </>
  )
}

export default HeroSlider