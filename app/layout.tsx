import type { Metadata } from "next";
import { Inter,Urbanist } from "next/font/google";
import "./globals.css";
import { ColourProvider } from "./context/ColourContext";
import { FooterProvider } from "./context/profile/FooterTextContext";
import { ImageProvider } from "./context/profile/ImageContext";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oronium Store",
  description: "Product by Oronium Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={urbanist.className}>
      {/* <NavBar/> */}
      <ImageProvider>
      <ColourProvider>
      <FooterProvider>
        {children}
      </FooterProvider>
        
      </ColourProvider>
      </ImageProvider>
        
        </body>
    
    </html>
  );
}
