"use client"
import { testimonials } from '@/constant/testimonials'
import Image from 'next/image'
import React, { useRef } from 'react'
import Slider from 'react-slick';

const Testimonials = () => {
  let sliderRef = useRef<any>();
  const onSlideClick=()=>{
    if(sliderRef?.current){
      // ts-ignore
      sliderRef.current.slickNext()
    }
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay:true,
    // autoplaySpeed:1000,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility:false,
    arrows: false,
    touchThreshold:1000
  };
  return (
    <>
    <section className=' flex flex-col text-2xl font-medium leading-7 xl:mt-8 '>
      <h2 className='text-right mb-5 text-[#F2F2F2]'>Testimonials</h2>
      <hr className=' mb-10 text-[#E5E5E680] opacity-50' />
      <div className='flex gap-4 xl:gap-10 items-end -ml-[20px] xl:ml-0'>
        <Image src={'/assets/Vector.svg'} height={60} width={60} alt='logo'/>
        <div className='w-full max-h-[130px]'>
          <Slider {...settings} className='max-h-[130px]' ref={sliderRef}>
          {[...testimonials].map(data=>(
            <div key={data.name} className='px-2'>
            <div onClick={onSlideClick} className='min-w-[353px] p-5  bg-white rounded-xl testimonial-card-shadow font-normal text-base leading-[120%]'>
            <h4 className='flex mb-5 text text-[#19191A] items-end'>{data.name} <span className='text-[13px] text-[#96979A] block ml-1'> {data.org}</span></h4> 
            <div className='min-h-[60px] text-[#1D2129] text-sm'>{data.comment.split('|').map((item)=>(
              <p key={item} className='xl:whitespace-nowrap'>{item}</p>
            ))}
            </div>
          </div>
             </div>
          ))}
          </Slider>
        </div>
      </div>
    </section>
    </>

  )
}

export default Testimonials