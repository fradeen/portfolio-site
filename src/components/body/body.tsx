'use client'
import { Inter } from "next/font/google";
import React from 'react'
import NavBar from '../navbar/navBar'
import { useThemeContext } from "@/contexts/themeContext";
const inter = Inter({ subsets: ["latin"] });
export default function Body({ children }: { children: React.ReactNode }) {
    const { theme } = useThemeContext()
    return (
        <body className={`${inter.className} ${theme === 'dark' ? 'dark' : ' '} bg-white text-gray-900 dark:bg-default-dark dark:text-white transition-all duration-500 flex flex-col min-h-screen`} >
            <div className='grow flex flex-col items-center self-center w-screen p-5 min-h-fit border-2 border-gray-500 shadow-gray-500 dark:shadow-gray-300'>
                <NavBar />
                {children}
            </div>
        </body>
    )
}
