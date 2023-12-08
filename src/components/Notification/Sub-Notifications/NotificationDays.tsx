import Image from 'next/image'
import React from 'react'

const NotificationDays = () => {
  return (
      <div className='!bg-white   rounded-lg w-[190px] p-[14px] h-[170px]  flex flex-col gap-[14px] justify-between'>
          <div className='flex justify-between'>
              <Image src={'/assets/clock.svg'} width={28} height={28} alt={'bar-chat'}/>
              <input type='checkbox' defaultChecked className='rounded w-[14px] h-[14px] p-1'/>
          </div>
          <div className='flex flex-col gap-2'>
          <p className='text-[11.2px] font-medium text-[#19191A] leading-[14px]'>Notify me when any <br/> wallet dormant for</p>
          <select className='bg-[#E5E5E680] w-fit text-[9.1px] p-1 leading-3'>
            <option> {`> 30 days`}</option>
            <option>{`30 days`}</option>
            <option>{`60 days`}</option>
            <option>{`90 days`}</option>
          </select>
          <p className='text-[11.2px] font-medium text-[#19191A] leading-[14px]'>becomes active</p>
          </div>
      </div>
  )
}

export default NotificationDays