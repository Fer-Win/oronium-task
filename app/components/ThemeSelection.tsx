import React from 'react'

const ThemeSelection = () => {
    return (
       <div className='flex flex-col justify-start text-[#29384B] gap-2'>
        <div className='text-base font-semibold'>Theme</div>
        <div className=' cursor-pointer flex justify-between bg-[#29384B08]  items-center px-4 py-4 gap-2  border border-[#29384B12] rounded-md '>
            
            <div className='text-sm'>Primary Colour</div>
            <div className='h-3 w-3 bg-[#C63E4A] rounded-full'></div>
        </div>
       </div>
      )
}

export default ThemeSelection