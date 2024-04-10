import Image from 'next/image'
import React from 'react'
import HeaderImage from '@/public/profile/displayPreview/Header.png'

const HeaderMockup = () => {
  return (
    <div className='w-5/6   border border-[#29384B26] rounded-xl py-8 gap-4 flex flex-col  justify-around items-center'>
        <div className='text-[#29384BB2] font-semibold'>Header</div>
        <div>
        <Image src={HeaderImage} alt='Header Image' width={340} height={340}/>
        <div>

        </div>
        </div>
    </div>
  )
}

export default HeaderMockup