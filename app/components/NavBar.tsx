import React from "react";
import Image from "next/image";

import Logo from "./ui/Logo";
import PrimaryButton from "./ui/PrimaryButton";

import Preview from "@/public/outline/preview.svg";
import Bell from "@/public/outline/bell.svg";
import ProfilePic from "@/public/profile-pic.jpg";

const NavBar = () => {
  return (
    <div className="px-7 py-5 w-full border-b  border-[#EAEAEA] flex justify-between ">
      <Logo></Logo>
      <div className="flex w-1/2 gap-6 justify-end items-center">
        <PrimaryButton
          onClick={() => {
            console.log("Preview Clicked");
          }}
          icon={
            <Image src={Preview.src} alt="Preview" width={10} height={10} />
          }
          buttonText="Preview Store"
        />
        <div className="flex justify-center items-center h-12 w-12  bg-[#29384B1A] hover:bg-[#1b263342] cursor-pointer transition-all duration-200 ease-in-out rounded-lg">
          <Image src={Bell.src} alt="Bell icon" width={28} height={28}></Image>
        </div>
        <div className="h-12 w-12 bg-red-500 rounded-full bg-cover overflow-hidden">
          <Image
            src={ProfilePic}
            alt="Profile Picutre"
            width={50}
            height={50}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
