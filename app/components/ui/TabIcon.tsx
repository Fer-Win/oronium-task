import Image from 'next/image'
import React from 'react'
import Settings from '@/public/tab/settings.svg'
import Profile from '@/public/tab/profile.svg'


const TabIcon = (src:any) => {
  return (
    <div className="flex justify-center items-center h-10 w-10  bg-white cursor-pointer transition-all duration-200 ease-in-out rounded-lg">
          <div className='bg-white p-1 rounded-full'> 
            <Image src={'../../../public/tab/settings.svg'} alt="Bell icon" width={22} height={22}></Image>
         </div>
    </div>
  )
}

export default TabIcon