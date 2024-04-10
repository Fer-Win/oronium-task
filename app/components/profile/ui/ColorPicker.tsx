'use client'
import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#000000"); // Initial color

  // Function to handle color change
  const handleColorChange = (event:any) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    console.log("Selected color:", newColor); // Log the selected color
  };

  return (
    <div>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
