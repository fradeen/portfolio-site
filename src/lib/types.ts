export type ThemecontextType = {
    theme: string,
    isAuto: boolean,
    setIsAuto: React.Dispatch<React.SetStateAction<boolean>>,
    toggleTheme: () => void,
    resetLocalTheme: () => void
}