import React from 'react'
import MarkdownPreview from './markdownPreview'
import { Noop } from 'react-hook-form'

export default function MarkdownEditor({ value, onChange, onBlur, error, placeholder }: { value: string, onChange: (...event: any[]) => void, onBlur: Noop, error: string | undefined, placeholder: string }) {

    return (
        <div className=' grow w-full flex flex-col gap-3'>
            <div className='w-full grow flex justify-center items-end gap-3 border-2'>
                <textarea onBlur={onBlur} value={value} placeholder={placeholder}
                    onChange={(event) => {
                        onChange(event.target.value)
                    }} className={`flex-1 border-2 p-2 w-full grow h-full rounded-lg overflow-y-auto focus:border-3 dark:bg-black resize-none outline-0  ${error ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />

                <div className={`flex-1 border-2 p-2 w-full rounded-lg overflow-y-auto ${error ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`}>
                    <MarkdownPreview markdown={value} />
                </div>
            </div>
            <span className='p-1 text-sm text-red-500'>{error}</span>
        </div>
    )
}
