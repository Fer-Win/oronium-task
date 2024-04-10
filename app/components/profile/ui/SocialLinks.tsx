import React from 'react'
import Instagram from '@/public/social/insta.svg'
import Down from '@/public/outline/chevron-down.svg'

import Image from 'next/image'

interface SocialLinksProps{
    icon : React.ReactNode,
}

const SocialLinks:React.FC<SocialLinksProps> = ({icon}) => {
  return (
    <div className='flex w-full gap-3'>
        <div className='flex px-3 py-2 gap-2  rounded-lg bg border border-[#E8E8E8]'>
        {icon}
        <Image src={Down} alt='Down' width={10} height={10}/>
        </div>

             <input
            type="text"
            name="Store Name"
            id="store-name"
            className="outline-none text-base text-[#29384BB2] font-medium border border-[#E8E8E8] rounded-lg w-full py-2 px-5"
            placeholder='Social Media Link'
          />
    </div>
  )
}

export default SocialLinks