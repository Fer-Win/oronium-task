'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ImageContextType {
  image: string | null;
  setImage: (image: string | null) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImage = () => {
  const context = useContext(ImageContext);
 
  return context as ImageContextType; 
};

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
