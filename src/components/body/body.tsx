'use client'
import { Inter } from "next/font/google";
import React from 'react'
import NavBar from '../navbar/navBar'
import { useThemeContext } from "@/contexts/themeContext";
const inter = Inter({ subsets: ["latin"] });
export default function Body({ children }: { children: React.ReactNode }) {
    const { theme } = useThemeContext()
    return (
        <body className={`${inter.className} ${theme === 'dark' ? 'dark' : ' '} bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-all duration-500 flex justify-center`} >
            <div className='flex flex-col items-center w-screen max-w-screen-xl self-center h-screen p-5 min-w-96'>
                <NavBar />
                {children}
            </div>
        </body>
    )
}
