import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColomabiaNews",
  description: "Desarrollado por Santiago y juan David",
};

interface RootLayoutProps {
  children:React.ReactNode
}



export default function RootLayout({children}: RootLayoutProps){
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className= 'min-h-screen flex flex-col items-center justify-center'>{children}</main>
      </body>
    </html>
  );
}
