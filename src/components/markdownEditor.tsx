import React, { useEffect, useRef, useState } from 'react'
import RenderMarkdown from './renderMarkdown'
import { useDebounced } from '@/lib/hooks'

export default function MarkdownEditor({ initialValue, callback }: { initialValue: string | undefined, callback: (arg: string) => void }) {
    const [markdown, setMarkdown] = useState(initialValue ? initialValue : '')
    const [debouncedMarkdown, setDebouncedMarkdown] = useState(initialValue ? initialValue : '')
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
    const markdownAreaRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        callback(markdown)
    }, [markdown, callback])
    useEffect(() => {
        if (initialValue) {
            setMarkdown(initialValue)
            setDebouncedMarkdown(initialValue)
        }
    }, [initialValue])
    useDebounced(() => { setDebouncedMarkdown(markdown) }, [markdown])
    useEffect(() => {
        if (textAreaRef.current && markdownAreaRef.current) {
            textAreaRef.current.style.height = "auto"
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
            markdownAreaRef.current.style.height = "auto"
            markdownAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
        }
    }, [markdown])
    return (
        <div className='w-full max-h-min flex justify-center items-end gap-3'>
            <textarea name='intro' rows={1} ref={textAreaRef} required placeholder='Intro*' value={markdown}
                onChange={(event) => {
                    setMarkdown(event.target.value)
                }} className='flex-1 border-2 p-2 w-full rounded-lg focus:border-3 prose md:prose-xl dark:prose-invert dark:bg-black resize-none' />
            {debouncedMarkdown ? (
                <div ref={markdownAreaRef} className='flex-1 border-2 p-2 w-full rounded-lg prose md:prose-xl dark:prose-invert overflow-y-auto'>
                    <RenderMarkdown markdown={debouncedMarkdown} />
                </div>
            ) : null}
        </div>
    )
}
