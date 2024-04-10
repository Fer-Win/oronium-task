import React from 'react'
import ViewNavigation from './ui/ViewNavigation'
import HeaderMockup from './ui/HeaderMockup'
import FooterMockup from './ui/FooterMockup'

const DisplayPreview = () => {
  return (
    <div className='px-8 py-6 h-full w-1/2 '>
        <div className='display-preview bg-white border flex rounded-2xl py-5 border-[#29384B0D] shadow-xl flex-col justify-between items-center h-full w-full '>
           <ViewNavigation/>
            <HeaderMockup/>
            <FooterMockup/>
            <div></div>
        </div>
    </div>
  )
}

export default DisplayPreview