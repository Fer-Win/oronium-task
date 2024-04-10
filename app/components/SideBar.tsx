import React from 'react'
import Tab from './ui/Tab'
import Home from '@/public/tab/home.svg'
import Store from '@/public/tab/store.svg'
import Profile from '@/public/tab/profile.svg'
import Settings from '@/public/tab/settings.svg'
import Image from 'next/image'
import ThemeSelection from './ThemeSelection'
import StoreSelection from './StoreSelection'

const SideBar = () => {

  const handleTabClick =(tabText:string)=>{
    console.log(tabText)
  }
  return (
    <div className='px-6 py-4 w-1/6 h-full  border-r flex flex-col justify-between   border-[#EAEAEA] '> 
        <div className='flex flex-col gap-2'>
          <Tab tabText='Home' icon={<Image src={Home.src} width={20} height={20} alt='Home Icon'/>} onClick={()=>{handleTabClick('Home')}}></Tab>
          <Tab tabText='Store' icon={<Image src={Store.src} width={20} height={20} alt='Home Icon'/>} onClick={()=>{handleTabClick('Store')}}></Tab>
          <Tab tabText='Profile' icon={<Image src={Profile.src} width={20} height={20} color='red' alt='Home Icon'/>} onClick={()=>{handleTabClick('Profile')}}></Tab>
          <Tab tabText='Settings' icon={<Image src={Settings.src} width={20} height={20} alt='Home Icon'/>} onClick={()=>{handleTabClick('Settings')}}></Tab>
          
        </div>
                                                                                                                                                    <ThemeSelection />                                                    
        <div>
        <StoreSelection/>
        </div>
    </div>
  )
}

export default SideBar