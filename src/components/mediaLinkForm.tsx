'use client'
import { addMediaLink, updateMediaLink } from '@/lib/actions'
import { socialMediaLinkSchema } from '@/lib/zodSchemas'
import { SocialMediaLink } from '@prisma/client'
import React, { useEffect, useRef, useState } from 'react'
import { z } from 'zod'

export default function MediaLinkForm({ link }: { link: SocialMediaLink }) {
    const [newLink, setNewLink] = useState(link)
    const [errors, setErrors] = useState<z.inferFlattenedErrors<typeof socialMediaLinkSchema>>()
    let isFirstRun = useRef<boolean>(true)
    useEffect(() => {
        if (!isFirstRun.current)
            setErrors(socialMediaLinkSchema.safeParse(newLink).error?.flatten())
        else
            isFirstRun.current = false
    }, [newLink])
    return (
        <form action={() => {
            setErrors(socialMediaLinkSchema.safeParse(newLink).error?.flatten())
            if (errors)
                return
            link.id ? updateMediaLink({ ...newLink, id: link.id }) : addMediaLink(newLink)
        }} className='flex flex-wrap gap-3'>
            <div className='flex flex-col max-w-sm'>
                <input name='title' type='text' placeholder='Title*' value={newLink.title ?? ''} onChange={(event) => { setNewLink(prev => ({ ...prev, title: event.target.value })) }} className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.title ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.title}</span>
            </div>
            <div className='flex flex-col max-w-sm'>
                <input name='url' value={newLink.url ?? ''} onChange={event => setNewLink(prev => ({ ...prev, url: event.target.value }))} type='text' placeholder='URL*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.title ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.url}</span>
            </div>
            <div className='flex flex-col max-w-sm'>
                <input name='imgSrc' value={newLink.imgSrc ?? ''} onChange={event => setNewLink(prev => ({ ...prev, imgSrc: event.target.value }))} type='text' placeholder='Image Source*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.title ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.imgSrc}</span>
            </div>
            <div className='flex flex-col max-w-sm'>
                <input name='accentColor' value={newLink.accentColor ?? ''} onChange={event => setNewLink(prev => ({ ...prev, accentColor: event.target.value }))} type='text' placeholder='Accent Color*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.title ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.accentColor}</span>
            </div>
            <div className='flex flex-col max-w-sm'>
                <input name='message' value={newLink.message ?? ''} onChange={event => setNewLink(prev => ({ ...prev, message: event.target.value }))} type='text' placeholder='Message*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.title ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.message}</span>
            </div>
            <button type='submit' disabled={errors ? true : false} className={`border-2 p-2 max-w-sm w-full rounded-lg  h-fit ${errors ? 'text-white bg-red-300' : 'hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'}`}>{link.id ? 'Update' : 'Add'}</button>
        </form>
    )
}
