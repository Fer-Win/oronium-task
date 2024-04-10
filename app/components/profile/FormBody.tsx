"use client";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import Upload from "@/public/outline/upload.svg";
import Check from "@/public/outline/check.svg";
import PrimaryButton from "../ui/PrimaryButton";
import SocialLinks from "./ui/SocialLinks";
import X from "@/public/social/x.svg";
import Facebook from "@/public/social/facebook.svg";
import Instagram from "@/public/social/insta.svg";
import FooterTextContext from "@/app/context/profile/FooterTextContext";
import { useImage } from "../../context/profile/ImageContext";

const FormBody = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [footerText, setFooterText] = useState("");
  const [storeName, setStoreName] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { changeFooterText } = useContext(FooterTextContext);
  const { changeStoreName } = useContext(FooterTextContext);
  const { setImage } = useImage();

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      const image = reader.result as string;
      setSelectedImage(image);
      setImage(image);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = () => {
    changeFooterText(footerText);
    changeStoreName(storeName);
  };
  return (
    <div className="px-8 py-6 h-full w-1/2 flex flex-col justify-start gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-[#29384B] text-xl font-bold">Header</div>
        <div className="flex flex-col gap-2 justify-start">
          <div className="text-[#29384BCC] text-lg font-semibold">
            Store Logo
          </div>

          <div className="w-full rounded-lg border-dashed border-2 border-[#29384B66] flex justify-center items-center h-24  cursor-pointer">
            <input
              type="file"
              name="store logo"
              id="store-logo"
              accept="image/*"
              ref={fileInputRef}
              className=" absolute opacity-0"
              onChange={handleImageChange}
            />
            <Image
              src={Upload.src}
              alt="Bell icon"
              width={18}
              height={18}
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[#29384B] text-xl font-bold">Footer</div>
        <div className="flex flex-col gap-2 justify-start">
          <div className="text-[#29384BCC] text-lg font-semibold">
            Footer Text
          </div>
          <input
            type="text"
            name="Footer Text"
            id="footer-text"
            className="outline-none text-base text-[#29384BB2] font-medium border border-[#E8E8E8] rounded-lg py-3 px-5"
            value={footerText}
            onChange={(e) => {
              setFooterText(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2 justify-start">
          <div className="text-[#29384BCC] text-lg font-semibold">
            Social Media
          </div>
          <div className="w-full flex  gap-2 flex-col">
            <SocialLinks
              icon={
                <Image
                  src={Instagram.src}
                  alt="Instagram"
                  width={30}
                  height={30}
                ></Image>
              }
            />
            <SocialLinks
              icon={
                <Image
                  src={Facebook.src}
                  alt="Facebook"
                  width={30}
                  height={30}
                ></Image>
              }
            />
            <SocialLinks
              icon={<Image src={X.src} alt="X" width={30} height={30}></Image>}
            />
          </div>
          <span className="text-[#29384B66] font-medium ">
            Resolution (32x32px)
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-start">
          <div className="text-[#29384BCC] text-lg font-semibold">
            Store Name
          </div>
          <input
            type="text"
            name="Store Name"
            id="store-name"
            className="outline-none text-sm text-[#29384BB2] font-medium border border-[#E8E8E8] rounded-lg py-4 px-5"
            value={storeName}
            onChange={(e) => {
              setStoreName(e.target.value);
            }}
          />
        </div>
        <div className="w-1/6 mt-3" onClick={handleSaveClick}>
          <PrimaryButton
            buttonText={"Save"}
            icon={
              <Image src={Check.src} height={20} width={20} alt="Check Mark" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FormBody;
