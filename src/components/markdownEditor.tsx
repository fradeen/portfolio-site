import React, { useEffect, useRef, useState } from 'react'
import MarkdownPreview from './markdownPreview'

export default function MarkdownEditor({ initialValue, callback, error, placeholder }: { initialValue: string | undefined, callback: (arg: string) => void, error: string[] | undefined, placeholder: string }) {
    const [markdown, setMarkdown] = useState(initialValue ? initialValue : '')
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
    const markdownAreaRef = useRef<HTMLDivElement | null>(null)
    let isFirstRun = useRef<boolean>(true)
    useEffect(() => {
        if (!isFirstRun.current)
            callback(markdown)
        else
            isFirstRun.current = false
    }, [markdown, callback])
    useEffect(() => {
        if (textAreaRef.current && markdownAreaRef.current) {
            textAreaRef.current.style.height = "auto"
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
            markdownAreaRef.current.style.height = "auto"
            markdownAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
        }
    }, [markdown])
    return (
        <div className='w-full flex flex-col gap-3'>
            <div className='w-full max-h-min flex justify-center items-end gap-3'>
                <textarea rows={1} ref={textAreaRef} value={markdown} placeholder={placeholder}
                    onChange={(event) => {
                        setMarkdown(event.target.value)
                    }} className={`flex-1 border-2 p-2 w-full rounded-lg focus:border-3 dark:bg-black resize-none outline-0 ${error ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />

                <div ref={markdownAreaRef} className={`flex-1 border-2 p-2 w-full rounded-lg overflow-y-auto ${error ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`}>
                    <MarkdownPreview markdown={markdown} />
                </div>
            </div>
            <span className='p-1 text-sm text-red-500'>{error}</span>
        </div>
    )
}
