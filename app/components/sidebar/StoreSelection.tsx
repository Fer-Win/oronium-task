import React from "react";
import Logo from "@/public/brand/oronium-logo.svg";
import Image from "next/image";
import ArrowIcon from "@/public/outline/icon.svg";
const StoreSelection = () => {
  return (
    <div className=" cursor-pointer flex justify-between bg-[#29384B08]  items-center px-3 py-3 gap-2   rounded-md ">
      <div className="flex items-center">
        <Image src={Logo.src} alt="Oronium Logo" width={40} height={40}></Image>
        <span className="text-base font-semibold">Oronium Store</span>
      </div>
      <div>
        <Image
          src={ArrowIcon.src}
          alt="Selection Icon"
          width={10}
          height={10}
        ></Image>
      </div>
    </div>
  );
};

export default StoreSelection;
