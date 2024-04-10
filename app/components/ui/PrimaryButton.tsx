import React, { ReactNode } from 'react'

interface PrimaryButtonProps{
    buttonText : string,
    icon : React.ReactNode,
    onClick : () => void
}

const PrimaryButton :  React.FC<PrimaryButtonProps> = ({buttonText,icon,onClick}) => {
  return (
    <div className='bg-[#C63E4A] text-white rounded-lg flex gap-2 font-medium  text-base px-[14px] py-[14px] hover:bg-[#de525e] cursor-pointer'>
        {icon}
        <div>{buttonText}</div>
    </div>
  )
}

export default PrimaryButton