'use client'
import { useThemeContext } from '@/contexts/themeContext'
import React from 'react'
export default function ThemeSwitcher() {
    const { theme, toggleTheme, isAuto, setIsAuto, resetLocalTheme } = useThemeContext()
    return (
        <div className='flex min-w-24 min-h-8'>
            <div className='grid grid-cols-2 grid-rows-1 px-1 border-2 border-gray-500 rounded-full w-14 h-8 cursor-pointer'
                onClick={() => {
                    toggleTheme()
                }}
            >
                <div className='col-start-1 row-start-1 self-center h-6 w-4'>☀️</div>
                <div className='col-start-2 row-start-1 self-center h-6 w-4'>🌙</div>
                <div className={`col-start-${theme === 'dark' ? 2 : 1} row-start-1 self-center bg-green-500 rounded-full h-5 w-5`}></div>
            </div>
            <div className={`flex justify-center border-2 space-around border-gray-500 rounded-full w-8 h-8 cursor-${isAuto ? 'auto' : 'pointer'} font-semibold`}
                onClick={() => {
                    if (isAuto)
                        return
                    setIsAuto(true)
                    resetLocalTheme()
                }}
            >{isAuto ? 'A' : 'M'}</div>
        </div>
    )
}
