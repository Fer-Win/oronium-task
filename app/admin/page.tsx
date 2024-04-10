import React from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import iconSvg from "@/public/outline/check.svg";
import Image from "next/image";
import SideBar from "../components/SideBar";

const page = () => {
  return (
    <div className="flex w-full h-full pr-7 bg-green-500 ">
        <SideBar/>
    </div>
  );
};

export default page;
