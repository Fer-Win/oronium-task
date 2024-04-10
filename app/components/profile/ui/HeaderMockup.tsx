'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import HeaderImage from '@/public/profile/displayPreview/Header.png'
import LikeButton from '@/public/profile/displayPreview/likeheart.svg'
import Cart from '@/public/profile/displayPreview/cart.svg'
import OroniumLogo from "@/public/brand/oronium-logo.svg";
import ColourContext from '@/app/context/ColourContext'
import FooterTextContext from '@/app/context/profile/FooterTextContext'
import { useImage } from "../../../context/profile/ImageContext";
const HeaderMockup = () => {
  const {currentColour} = useContext(ColourContext)
  const {currentStoreName}  = useContext(FooterTextContext)
  const { image } = useImage();

  return (
    <div className='w-5/6   border border-[#29384B26] rounded-xl py-8 gap-4 flex flex-col  justify-around items-center'>
        <div className='text-[#29384BB2] font-semibold'>Header</div>
        <div className='relative'>
        <Image src={HeaderImage} alt='Header Image' width={340} height={340}/>


        <div className=' flex absolute justify-between w-5/6 bottom-20  left-7'>
          <div className='flex justify-center items-center gap-2'>
          <Image  src={image ? image : OroniumLogo} alt="Oronium Logo" width={30} height={30}/>
          <span className="text-sm font-semibold">{currentStoreName}</span>
          </div>
          <div className='flex gap-3 justify-center items-center'>
            <Image alt='Heart' src={LikeButton} width={20} height={20}/>
            <div className='relative'>
              <div style={{backgroundColor : currentColour}}  className=' absolute -top-1 -right-1  rounded-full text-white text-[8px] h-4 w-4 flex justify-center items-center'>5</div>
            <Image alt='Heart' src={Cart} width={20} height={20}/>
            </div>
          </div>
        </div>
       
        </div>
    </div>
  )
}

export default HeaderMockup