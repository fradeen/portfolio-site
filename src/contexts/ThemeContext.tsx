'use client';

import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: (): void => {
        throw new Error("Function not implemented.")
    }
});
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    let [theme, setTheme] = useState('dark')
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            <div className={`theme ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}