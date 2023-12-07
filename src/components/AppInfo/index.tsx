import Image from 'next/image'
import React from 'react'

const AppInfo = () => {
  return (
    <section className='flex items-start gap-8 mt-[60px]'>
      <div className='relative w-1/2'>    
      <div className='absolute top-0 left-0 w-1/2'>
      <div className='relative w-[450px] aspect-square -left-[60px] -top-[100px]'>
      <Image src={'/assets/Cohorts-1.svg'} 	fill={true} alt='app-info-image'/>
      </div>
      </div>    
      </div>
      <div className='w-1/2 flex gap-4 flex-col justify-end items-end ml-2'>
        <Image src={'/assets/Eye.svg'} width={34} height={34} alt='eye-icon'/>
        <h2 className='text-3xl leading-9 font-medium text-[#F2F2F2] text-right'>Watch what the whales are doing</h2>
        <p className='text-base leading-5 font-medium text-[#F2F2F2] text-opacity-70 text-right'> All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
      </div>
    </section>
  )
}

export default AppInfo