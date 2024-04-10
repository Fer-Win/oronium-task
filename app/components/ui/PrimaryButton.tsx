'use client'
import React, { ReactNode, useContext } from 'react'
import ColourContext from "../../context/ColourContext";
interface PrimaryButtonProps{
    buttonText : string,
    icon : React.ReactNode,
    // onClick : () => void
}

const PrimaryButton :  React.FC<PrimaryButtonProps> = ({buttonText,icon}) => {
  const {currentColour } = useContext(ColourContext);
  console.log('Current colour is primary button :',currentColour)
  return (
    <div style={{backgroundColor: currentColour}} className={` text-white rounded-lg flex gap-2 font-medium  text-base px-[14px] py-[14px] hover:bg-[#de525e] cursor-pointer`}>
        {icon}
        <div>{buttonText}</div>
    </div>
  )
}

export default PrimaryButton