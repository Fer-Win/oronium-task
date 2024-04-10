import React from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import iconSvg from "@/public/outline/check.svg";
import Image from "next/image";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const page = () => {
  return (
    <div className="flex w-full h-screen pr-7 flex-col gap-0">
      <NavBar/>
        <SideBar/>
    </div>
  );
};

export default page;
