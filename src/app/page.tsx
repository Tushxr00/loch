"use client"
import LandingPage from '@/features/LandingPage'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:1000,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    accessibility:false,
    arrows: false,
  };
  return (
    <>
      <LandingPage/>
      {/* <div>
      <Slider {...settings} className='w-[30rem]'>
      <div className='h-10 !w-10 bg-red-200 mx-6' />
      <div className='h-10 !w-10 bg-blue-200 mx-6' />
      <div className='h-10 !w-10 bg-yellow-200 mx-6' />
      </Slider>
      </div> */}
    </>
  )
}
