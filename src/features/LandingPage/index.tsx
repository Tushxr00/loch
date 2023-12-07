import AppInfo from '@/components/AppInfo'
import Notification from '@/components/Notification'
import SignUp from '@/components/SignUp'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import React from 'react'

const LandingPage = () => {
  return (

    <div className='flex h-full items-stretch  top-[100px] background-gradient'>
      <div className='hidden lg:w-[55%] z-10 p-14 h-full lg:flex flex-col gap-[72px] items-stretch' >
      <Notification/>
      <AppInfo/>
      <Testimonials/>
      </div>
      <div className='w-full lg:w-[45%] h-full z-10 fixed bg-white top-0 right-0 sign-up-section'><SignUp/></div>
    </div>

  )
}

export default LandingPage