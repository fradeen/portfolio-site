import React, { useState } from 'react'
import RenderMarkdown from './renderMarkdown'
import { useDebounced } from '@/lib/hooks'

export default function MarkdownPreview({ markdown }: { markdown: string }) {
    const [debouncedMarkdown, setDebouncedMarkdown] = useState(markdown ? markdown : '')
    useDebounced(() => { setDebouncedMarkdown(markdown) }, [markdown], 2000)
    return (
        <>
            <RenderMarkdown markdown={debouncedMarkdown ?? ' '} />
        </>
    )
}