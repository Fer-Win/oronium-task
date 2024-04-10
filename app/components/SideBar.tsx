import React from 'react'
import Tab from './ui/Tab'
import Home from '@/public/tab/home.svg'
import Image from 'next/image'

const SideBar = () => {
  return (
    <div className='px-6 py-4 w-1/6 h-full border-r flex flex-col  border-[#EAEAEA] '> 
        <div className='flex flex-col gap-2'>
        <Tab tabText='Home' icon={<Image src={Home.src} width={20} height={20} alt='Home Icon'/>}></Tab>
          <Tab tabText='Home' icon={<Image src={Home.src} width={20} height={20} alt='Home Icon'/>}></Tab>
          <Tab tabText='Home' icon={<Image src={Home.src} width={20} height={20} alt='Home Icon'/>}></Tab>
          <Tab tabText='Home' icon={<Image src={Home.src} width={20} height={20} alt='Home Icon'/>}></Tab>

        </div>
        <div>

        </div>
    </div>
  )
}

export default SideBar