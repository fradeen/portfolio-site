'use client'
import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string) {
    const [value, setValue] = useState<T>(() => {

        if (typeof window !== 'undefined' && localStorage.getItem(key))
            return JSON.parse(localStorage.getItem(key)!)
        return null
    })

    useEffect(() => {
        if (value)
            localStorage.setItem(key, JSON.stringify(value))
        else
            localStorage.removeItem(key)
    }, [value, key])

    return [value, setValue] as [T, typeof setValue]
}