import React, { ReactNode } from 'react'

interface PrimaryButtonProps{
    buttonText : string,
    icon : React.ReactNode,
    onClick : () => void
}

const PrimaryButton :  React.FC<PrimaryButtonProps> = ({buttonText,icon,onClick}) => {
  return (
    <div className='bg-[#C63E4A]  flex gap-[2px] px-[8px] py-[3px]'>
        {icon}
        {buttonText}
    </div>
  )
}

export default PrimaryButton