import { testimonials } from '@/constant/testimonials'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className=' flex flex-col text-2xl font-medium leading-7 mt-14 '>
      <h2 className='text-right mb-5 text-[#F2F2F2]'>Testimonials</h2>
      <hr className=' mb-10 text-[#E5E5E680] opacity-50' />
      <div className='flex gap-10 items-end'>
        <Image src={'/assets/Vector.svg'} height={60} width={60} alt='logo'/>
        <div className='h-[136px] w-10 relative'>
        <div className='flex w-screen gap-5 absolute'>
          {testimonials.map(data=>(
          <div key={data.name} className='h-[136px] p-5  bg-white rounded-xl testimonial-card-shadow font-normal text-base leading-[120%]'>
            <h4 className='flex mb-5 text text-[#19191A]'>{data.name} <span className='text-[13px] text-[#96979A]'> {data.org}</span></h4> 
            <div className='min-h-[60px] text-[#1D2129]'>{data.comment.split('|').map((item)=>(
              <p key={item}>{item}</p>
            ))}</div>
          </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials