'use client'
import RenderMarkdown from '@/components/renderMarkdown/renderMarkdown'
import { ErrorBoundary } from "react-error-boundary";
import React, { useState } from 'react'
import { addArticle } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function UpdateInfo() {
    const [markdown, setMarkdown] = useState('')
    const searchParams = useSearchParams()
    return (
        <form id='form1' action={addArticle} className='grow flex flex-col justify-around gap-y-2 min-w-[1280px]'>
            <div className='flex flex-row p-5 rounded-lg ring-2 ring-gray-500 gap-x-3 items-center justify-stretch'>
                <div className='w-1/2 flex flex-col gap-y-3 justify-start px-3'>
                    <div className='w-full flex'>
                        <div className='w-1/4'>
                            <label htmlFor='title' className=' text-2xl font-semibold text-center '>Title</label>
                        </div>
                        <input id='title' name='title' form='form1' className=' px-2 rounded-lg ring-2 ring-gray-500 self-center dark:bg-default-dark' type='text' />
                    </div>
                    <div className='w-full flex'>
                        <div className='w-1/4'>
                            <label htmlFor='imgURL' className=' text-2xl font-semibold text-center '>Image URL</label>
                        </div>
                        <input id='imgURL' name='imgURL' className=' px-2 rounded-lg ring-2 ring-gray-500 self-center dark:bg-default-dark' type='text' />
                    </div>
                    <div className='w-full flex'>
                        <div className='w-1/4'>
                            <label htmlFor='intro' className='text-2xl font-semibold text-center '>Intro</label>
                        </div>
                        <div className='w-3/4 flex flex-col justify-around'>
                            <textarea id='intro' name='intro' rows={5} className='w-full resize-none dark:bg-default-dark max-w-sm px-2 rounded-lg ring-2 ring-gray-500 self-center' />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 gap-y-3 flex flex-col px-3'>
                    <div className='w-full flex'>
                        <div className='w-1/4'>
                            <label htmlFor='brief' className='text-2xl font-semibold text-center '>Brief</label>
                        </div>
                        <div className='w-3/4 flex flex-col justify-around'>
                            <textarea id='brief' name='brief' rows={5} className='w-full resize-none dark:bg-default-dark max-w-sm px-2 rounded-lg ring-2 ring-gray-500 self-center' />
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-around'>
                        <button className=' w-fit p-1 rounded-lg self-center text-2xl font-semibold text-center ring-2 ring-gray-500 hover:shadow-md hover:shadow-inherit' type='submit'>Add</button>
                    </div>
                </div>
            </div>
            <div className='grow flex flex-row p-5 rounded-lg ring-2 ring-gray-500 gap-x-3 items-center '>
                <div className='w-1/2 '>
                    <textarea id='markdown' rows={20} className='p-1 w-full min-h-full dark:bg-default-dark rounded-lg ring-2 ring-gray-500 self-center resize-none' name='markdown' value={markdown} onChange={(event) => {
                        setMarkdown(event.target.value)
                    }} />
                </div>
                <div className='w-1/2 grow max-h-full flex flex-col justify-start'>
                    <div className='resize overflow-auto ring-2 ring-gray-500'>
                        <ErrorBoundary fallback={<h1>error</h1>}>
                            <RenderMarkdown markdown={markdown} />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
            <input type='hidden' name='type' value={searchParams.get('type')?.toString()} />
            <input type='hidden' name='categoryId' value={searchParams.get('categoryId')?.toString()} />
        </form>
    )
}
