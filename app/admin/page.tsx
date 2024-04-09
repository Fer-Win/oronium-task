import React from 'react'

import PrimaryButton from '../components/ui/PrimaryButton'
import iconSvg from '@/public/outline/check.svg'

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <PrimaryButton buttonText='Save' onClick={()=>{console.log('Save Button Clicked')}} icon={<img src={iconSvg.src} alt="Icon" />}  ></PrimaryButton>
    </div>
  )
}

export default page