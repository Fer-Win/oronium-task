"use client";
import React, { createContext, useState } from "react";

interface ColourContextType {
  currentText: string;
  changeText: (newColour: string) => void; 
}

const FooterTextContext = createContext<ColourContextType>({
    currentText: '#C63E4A',
    changeText: () => {}
})

export const FooterProvider = ({ children }: {children:any}) => {
  const [currentText, setCurrentText] = useState('Live your Fashion');

  const changeText = (newText: string) => {
    setCurrentText(newText);
  };

  return (
    <FooterTextContext.Provider value={{currentText, changeText}  }>
      {children}
    </FooterTextContext.Provider>
  );
};

export default FooterTextContext;
