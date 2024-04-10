import React, { useContext, useState } from "react";
import ColourContext from "@/app/context/ColourContext";
import ColorPicker from "../profile/ui/ColorPicker";

const ThemeSelection = () => {
  const { changeColour } = useContext(ColourContext);
  const { currentColour } = useContext(ColourContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColour, setSelectedColour] = useState("");

  const handleColorChange = (e: any) => {
    setSelectedColour(e.target.value);
    console.log("Selection is ", e.target.value);
    changeColour(e.target.value);
  };

  return (
    <div
      className="flex flex-col justify-start text-[#29384B] gap-2"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="text-base font-semibold">Theme</div>
      <div className=" cursor-pointer flex justify-between bg-[#29384B08]  items-center px-4 py-4 gap-2  border border-[#29384B12] rounded-md ">
        <div className="text-sm">Primary Colour</div>
        <div className="opacity-0 cursor-pointer ">
          <input
            type="color"
            value={selectedColour}
            onChange={handleColorChange}
          />
        </div>
        <div
          style={{ backgroundColor: currentColour }}
          className=" h-3 w-3 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default ThemeSelection;
