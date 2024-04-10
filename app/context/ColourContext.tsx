"use client";
import React, { createContext, useState } from "react";

interface ColourContextType {
  currentColour: string;
  changeColour: (newColour: string) => void;
}

const ColourContext = createContext<ColourContextType>({
  currentColour: "#C63E4A",
  changeColour: () => {},
});

export const ColourProvider = ({ children }: { children: any }) => {
  const [currentColour, setCurrentColour] = useState("#C63E4A");

  const changeColour = (newColour: string) => {
    setCurrentColour(newColour);
  };

  return (
    <ColourContext.Provider value={{ currentColour, changeColour }}>
      {children}
    </ColourContext.Provider>
  );
};

export default ColourContext;
