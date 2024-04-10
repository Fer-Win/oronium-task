import React from 'react'

interface TabProps{
    tabText : string,
    icon : React.ReactNode
    onClick : ()=>void
}

const Tab:React.FC<TabProps> = ({tabText,icon,onClick}) => {
  return (
    <div className=' cursor-pointer flex justify-start items-center px-4 py-4 gap-4  border border-[#F8E7E9] rounded-md '>
    {icon}
    <div className='text-[#292D32B2] font-semibold'>{tabText}</div>
    </div>
  )
}

export default Tab