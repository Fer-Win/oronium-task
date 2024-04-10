'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import FooterImage from '@/public/profile/displayPreview/Footer.png'
import Instagram from '@/public/social/insta.svg'
import X from '@/public/social/x.svg'
import Facebook from '@/public/social/facebook.svg'
import FooterTextContext from '@/app/context/profile/FooterTextContext'


const HeaderMockup = () => {
  const {currentText} =useContext(FooterTextContext)
  return (
    <div className='w-5/6   border border-[#29384B26] rounded-xl py-8 gap-4 flex flex-col  justify-around items-center'>
        <div className='text-[#29384BB2] font-semibold'>Footer</div>
        <div className='relative'>
            <Image src={FooterImage} alt='Header Image' width={340} height={340} className=''/>
            <div className='text-[#29384B33] text-3xl absolute font-bold bottom-20 w-3/5 left-12'>{currentText}</div>
            <div className='absolute flex gap-3 bottom-11 left-12 opacity-35'>
                    <Image src={Instagram} alt='Instagram' width={20} height={20}/>
                    <Image src={X} alt='X' width={20} height={20}/>
                    <Image src={Facebook} alt='Facebook' width={20} height={20}/>
             </div>
        </div>
    </div>
  )
}

export default HeaderMockup