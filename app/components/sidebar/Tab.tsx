import React from 'react'

interface TabProps{
    tabText : string,
    icon : React.ReactNode
    onClick : ()=>void
    isSelected  : boolean
}

const Tab:React.FC<TabProps> = ({tabText,icon,onClick,isSelected}) => {
  return (
    <div className={` cursor-pointer flex justify-start items-center px-4 py-4 gap-4  ${isSelected ? 'border bg-[#FCF3F4]':''} border-[#F8E7E9] hover:bg-[#FCF3F4] rounded-md `} >
    {icon}
    <div className={`${isSelected? 'text-[#C63E4A]':'text-[#292D32B2]'}  font-bold`}>{tabText}</div>
    </div>
  )
}

export default Tab