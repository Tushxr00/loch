import Image from 'next/image'
import React from 'react'

const NotificationWallet = () => {
  return (
    <div className='!bg-white   rounded-lg w-[190px] p-[14px]  flex flex-col gap-[14px] justify-between'>
        <div className='flex justify-between'>
            <Image src={'/assets/bar-chart-2.svg'} width={24} height={24} alt={'bar-chat'}/>
            <input type='checkbox' defaultChecked className='rounded w-[14px] h-[14px] p-1'/>
        </div>
        <div className='flex flex-col gap-[14px]'>
        <p className='text-[11.2px] font-medium text-[#19191A] leading-[14px]'>Notify me when any wallets<br/> move more than</p>
        <select className='bg-[#E5E5E680] w-fit text-[9.1px] p-1 leading-3'>
          <option>$1,000.00</option>
          <option>$2,000.00</option>
          <option>$3,000.00</option>
          <option>$4,000.00</option>
        </select>
        </div>
    </div>
  )
}

export default NotificationWallet