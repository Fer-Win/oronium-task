import Image from 'next/image'
import React from 'react'
import FooterImage from '@/public/profile/displayPreview/Footer.png'

const HeaderMockup = () => {
  return (
    <div className='w-5/6   border border-[#29384B26] rounded-xl py-8 gap-4 flex flex-col  justify-around items-center'>
        <div className='text-[#29384BB2] font-semibold'>Footer</div>
        <div>
        <Image src={FooterImage} alt='Header Image' width={300} height={300}/>
        </div>
    </div>
  )
}

export default HeaderMockup