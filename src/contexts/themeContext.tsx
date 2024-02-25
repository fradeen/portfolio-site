'use client'
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ThemecontextType } from "@/types/themeContextTypes";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemecontextType>({
    theme: 'dark',
    isAuto: false,
    toggleTheme: () => {
        throw new Error('method not defined')
    },
    setIsAuto: () => {
        throw new Error('method not defined')
    },
    resetLocalTheme: () => {
        throw new Error('method not defined')
    },
})

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [localtheme, setLocalTheme] = useLocalStorage<string | null>('theme')
    const [systemTheme, setSystemTheme] = useState('dark')
    const [isAuto, setIsAuto] = useState(true)
    const [isClient, setIsClient] = useState(false)
    function toggleTheme() {
        if (!isAuto)
            setLocalTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
        else
            setLocalTheme(systemTheme === 'dark' ? 'light' : 'dark')
        setIsAuto(false)
    }
    function resetLocalTheme() {
        setLocalTheme(null)
        setIsAuto(true)
    }
    const restoreThemePrefrences = useCallback(() => {
        if (localtheme)
            setIsAuto(false)
    }, [localtheme])
    useEffect(() => {
        restoreThemePrefrences()
        setIsClient(true)
        // Add listener to update styles
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            setSystemTheme(e.matches ? 'dark' : 'light')
        });

        // Setup dark/light mode for the first time
        setSystemTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

        // Remove listener
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
            });
        }
    }, [restoreThemePrefrences])
    return (
        <ThemeContext.Provider value={{ theme: `${isClient ? isAuto ? systemTheme : localtheme : systemTheme}`, isAuto: isAuto, setIsAuto: setIsAuto, toggleTheme: toggleTheme, resetLocalTheme: resetLocalTheme }}>
            {children}
        </ThemeContext.Provider>
    )


}

export function useThemeContext() {
    const themecontext = useContext(ThemeContext)
    return themecontext
}