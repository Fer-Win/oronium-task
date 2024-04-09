import React from "react";
import Image from "next/image";

import Logo from "./ui/Logo";
import PrimaryButton from "./ui/PrimaryButton";


import Preview from "@/public/outline/preview.svg";
import Bell from '@/public/outline/bell.svg'
import ProfilePic from '@/public/profile-pic.jpg'


const NavBar = () => {
  return (
    <div className="w-screen border-b  border-[#EAEAEA] flex justify-between bg-red-500">
      <Logo></Logo>
     <div className="flex w-2/3 gap-5 justify-center items-center">
     <PrimaryButton
        onClick={() => {
          console.log("Preview Clicked");
        }}
        icon={<Image src={Preview.src} alt="Preview" width={10} height={10} />}
        buttonText="Preview Store"
      />
    <div className="flex justify-center items-center h-12 w-12  bg-[#29384B1A] bg-opacity-10 rounded-lg">
        <Image src={Bell.src} alt="Bell icon" width={28} height={28} ></Image>
    </div>
      <div className="h-12 w-12 bg-red-500 rounded-full bg-cover overflow-hidden">
            <Image src={ProfilePic} alt="Profile Picutre" width={50} height={50}></Image>
      </div>
     </div>
    </div>
  );
};

export default NavBar;
