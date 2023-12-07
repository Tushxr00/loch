'use client'
import Image from 'next/image'
import React from 'react'


const NotificationEmail = () => {
  return (
    <div className='notification-card rounded-lg w-[190px] p-[14px] h-[170px] flex flex-col gap-[14px] '>
        <div className='flex justify-between'>
            <Image src={'/assets/bell.svg'} width={28} height={28} alt={'bell'}/>
            <button className='text-[9.1px] font-semibold h-fit'>
                Save
            </button>
        </div>
        <p className='text-sm font-medium text-[#19191A] leading-4'>We’ll be sending<br/>notifications to you<br/> here</p>
        <input
        name="email"
        type="email"
        className="border border-[#D4D4D4] p-2 rounded-md text-xs font-medium"/>
    </div>
  )
}

export default NotificationEmail