'use client'
import { Inter } from "next/font/google";
import React from 'react'
import NavBar from '../navbar/navBar'
import { useThemeContext } from "@/contexts/themeContext";
const inter = Inter({ subsets: ["latin"] });
export default function Body({ children }: { children: React.ReactNode }) {
    const { theme } = useThemeContext()
    return (
        <body className={`${inter.className} ${theme === 'dark' ? 'dark' : ' '} bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-all duration-500 flex min-h-screen`} >
            <div className='flex flex-col items-center w-screen max-w-screen-xl p-5 min-w-96 min-h-fit border-2 border-gray-500'>
                <NavBar />
                {children}
            </div>
        </body>
    )
}
