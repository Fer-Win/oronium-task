import Image from "next/image";
import React from "react";
import Mobile from "@/public/solid/mobile.svg";
import Desktop from "@/public/outline/desktop.svg";

const ViewNavigation = () => {
  return (
    <div className="border border-[#29384B26] p-2 flex justify-center items-center rounded-xl ">
      <div className="flex justify-center gap-2">
        <div className="flex justify-center items-center h-12 w-12  bg-[#29384B1A] hover:bg-[#1b263342] cursor-pointer transition-all duration-200 ease-in-out rounded-lg">
          <Image
            src={Mobile.src}
            alt="Bell icon"
            width={18}
            height={18}
          ></Image>
        </div>
        <div className="flex justify-center items-center h-12 w-12  cursor-pointer transition-all duration-200 ease-in-out rounded-lg">
          <Image
            src={Desktop.src}
            alt="Bell icon"
            width={18}
            height={18}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ViewNavigation;
