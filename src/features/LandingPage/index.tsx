import NotificationDays from '@/components/Notification/Sub-Notifications/NotificationDays'
import NotificationEmail from '@/components/Notification/Sub-Notifications/NotificationEmail'
import NotificationWallet from '@/components/Notification/Sub-Notifications/NotificationWallet'
import SignUp from '@/components/SignUp'
import Image from 'next/image'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex bg-black'>
      <div className='min-w-[55%] z-0 relative flex ' >

        <NotificationEmail/>
        <NotificationWallet/>
        <NotificationDays/>
      </div>
      <div className='w-[45%] h-screen z-10 absolute bg-green-50 right-0 sign-up-section'><SignUp/></div>
    </div>
  )
}

export default LandingPage