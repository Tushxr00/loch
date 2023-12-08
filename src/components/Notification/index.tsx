'use client'
import React, { use, useEffect, useState } from 'react'
import NotificationEmail from './Sub-Notifications/NotificationEmail'
import NotificationWallet from './Sub-Notifications/NotificationWallet'
import NotificationDays from './Sub-Notifications/NotificationDays'
import Image from 'next/image'
import Slider from 'react-slick'

const Notification = () => {
  const [initialized,setInitialized] = useState(false)
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay:true,
    autoplaySpeed:500,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    accessibility:false,
    arrows: false,
    draggable: false,
    
  };
  useEffect(()=>{
    setInitialized(true)
  },[])
  return (
    // <section className='flex w-[120%] gap-14'>
    //   <div className='text-white flex flex-col gap-4 w-[320px]'>
    //     <Image src={'/assets/Bell-whtie.svg'} width={34} height={34} alt={'bell'}/>
    //     <h2 className='text-3xl leading-9 font-medium text-[#F2F2F2]'>Get notified when a highly correlated whale makes a move</h2>
    //     <p className='text-base leading-5 font-medium text-[#F2F2F2] text-opacity-70'>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
    //   </div>
    //   <div className='flex-1 relative flex items-center '>
    //     <div className='absolute flex h-fit gap-4 '>
    //         <NotificationEmail/>
    //         <NotificationWallet/>
    //         <NotificationDays/>
    //     </div>
    //   </div>
    // </section>
    <section className="flex">
      <div className="text-white flex flex-col gap-4 min-w-[320px] w-[320px] ">
        <Image
          src={"/assets/Bell-whtie.svg"}
          width={34}
          height={34}
          alt={"bell"}
        />
        <h2 className="text-3xl leading-9 font-medium text-[#F2F2F2]">
          Get notified when a highly correlated whale makes a move
        </h2>
        <p className="text-base leading-5 font-medium text-[#F2F2F2] text-opacity-70">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>

        <div className=" w-full" style={{
          display:initialized?'block':'none'
        }}>
          <Slider {...settings} >
            <div className='mx-4'>
            <NotificationEmail />
            </div>
            <div className='mx-4'>
            <NotificationDays />
            </div>
            <div className='mx-4'>
            <NotificationWallet />
            </div>
          </Slider>
        </div>

    </section>
  );
}

export default Notification