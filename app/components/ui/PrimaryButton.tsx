import React, { ReactNode } from 'react'

interface PrimaryButtonProps{
    buttonText : string,
    icon : React.ReactNode,
    onClick : () => void
}

const PrimaryButton :  React.FC<PrimaryButtonProps> = ({buttonText,icon,onClick}) => {
  return (
    <div className='bg-[#C63E4A] rounded-lg flex gap-[2px] text-base px-[16px] py-[16px] hover:bg-[#de525e] cursor-pointer'>
        {icon}
        {buttonText}
    </div>
  )
}

export default PrimaryButton