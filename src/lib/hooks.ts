import { useEffect, useRef } from "react";

export function useDebounced(callBack: () => void, dependencies: any[]) {
    let debounceTimeout = useRef<NodeJS.Timeout | null>(null)
    useEffect(() => {
        if (debounceTimeout.current)
            clearTimeout(debounceTimeout.current)
        debounceTimeout.current = setTimeout(() => {
            callBack()
        }, 5000)

        return () => {
            if (debounceTimeout.current)
                clearTimeout(debounceTimeout.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [callBack, ...dependencies])
}