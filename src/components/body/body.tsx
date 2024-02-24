'use client'
import { Inter } from "next/font/google";
import React from 'react'
import NavBar from '../navbar/navBar'
import { useThemeContext } from "@/contexts/themeContext";
const inter = Inter({ subsets: ["latin"] });
export default function Body({ children }: { children: React.ReactNode }) {
    const { theme } = useThemeContext()
    return (
        <body className={`${inter.className} ${theme === 'dark' ? 'dark' : ' '} flex flex-col items-center justify-between justify-items-stretch w-screen h-screen p-5 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-color duration-500 min-w-96`} >
            <NavBar />
            {children}
        </body>
    )
}
