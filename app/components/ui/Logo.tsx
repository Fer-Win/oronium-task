import React from "react";
import OroniumLogo from "@/public/brand/oronium-logo.svg";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={OroniumLogo.src}
        alt="Oronium Logo"
        width={50}
        height={50}
      ></Image>
      <span className="text-lg font-semibold">Oronium E-Commerce Store</span>
    </div>
  );
};

export default Logo;
