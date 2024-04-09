import React from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import iconSvg from "@/public/outline/check.svg";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white px-12 ">
      <PrimaryButton
        buttonText="Save"
        onClick={() => {
          console.log("Save Button Clicked");
        }}
        icon={<Image src={iconSvg.src} alt="Icon" width={20} height={20} />}
      ></PrimaryButton>
    </div>
  );
};

export default page;
