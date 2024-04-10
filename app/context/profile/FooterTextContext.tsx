"use client";
import React, { createContext, useState } from "react";

interface ColourContextType {
  currentFooterText: string;
  currentStoreName: string;
  changeFooterText: (newText: string) => void;
  changeStoreName: (newStoreName: string) => void;
}

const FooterTextContext = createContext<ColourContextType>({
  currentFooterText: "#C63E4A",
  currentStoreName: "",
  changeFooterText: () => {},
  changeStoreName: () => {},
});

export const FooterProvider = ({ children }: { children: any }) => {
  const [currentFooterText, setCurrentFooterText] =
    useState("Live your Fashion");
  const [currentStoreName, setCurrentStoreName] = useState("Oronium Stores");
  const changeFooterText = (newText: string) => {
    setCurrentFooterText(newText);
  };
  const changeStoreName = (newStoreName: string) => {
    setCurrentStoreName(newStoreName);
  };

  return (
    <FooterTextContext.Provider
      value={{
        currentFooterText,
        currentStoreName,
        changeStoreName,
        changeFooterText,
      }}
    >
      {children}
    </FooterTextContext.Provider>
  );
};

export default FooterTextContext;
