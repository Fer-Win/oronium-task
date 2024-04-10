"use client";
import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (event: any) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    console.log("Selected color:", newColor);
  };

  return (
    <div>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
