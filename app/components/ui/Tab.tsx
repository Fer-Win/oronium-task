import React from 'react'

interface TabProps{
    tabText : string,
    icon : React.ReactNode
}

const Tab:React.FC<TabProps> = ({tabText,icon}) => {
  return (
    <div className='flex justify-start px-4 py-3 gap-4 border border-[#F8E7E9] rounded-md '>
    {icon}
    <div className='text-[#292D32B2] font-semibold'>{tabText}</div>
    </div>
  )
}

export default Tab