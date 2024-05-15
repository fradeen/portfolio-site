'use client'
import { addMediaLink, updateMediaLink } from '@/lib/actions'
import { SocialMediaLink } from '@prisma/client'
import React, { useState } from 'react'

export default function MediaLinkForm({ link }: { link: SocialMediaLink }) {
    const [newLink, setNewLink] = useState(link)
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            link.id ? updateMediaLink({ ...newLink, id: link.id }) : addMediaLink(newLink)
        }} className='flex flex-wrap gap-3'>
            <input name='title' value={newLink.title ?? ''} onChange={event => setNewLink(prev => ({ ...prev, title: event.target.value }))} type='text' required placeholder='Title*' className='border-2 p-2 max-w-sm rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
            <input name='url' value={newLink.url ?? ''} onChange={event => setNewLink(prev => ({ ...prev, url: event.target.value }))} type='text' required placeholder='URL*' className='border-2 p-2 max-w-sm rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
            <input name='imgSrc' value={newLink.imgSrc ?? ''} onChange={event => setNewLink(prev => ({ ...prev, imgSrc: event.target.value }))} type='text' required placeholder='Image Source*' className='border-2 p-2 max-w-sm rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
            <input name='accentColor' value={newLink.accentColor ?? ''} onChange={event => setNewLink(prev => ({ ...prev, accentColor: event.target.value }))} type='text' required placeholder='Accent Color*' className='border-2 p-2 max-w-sm rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
            <input name='message' value={newLink.message ?? ''} onChange={event => setNewLink(prev => ({ ...prev, message: event.target.value }))} type='text' required placeholder='Message*' className='border-2 p-2 max-w-sm rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
            <button className='rounded-lg max-w-sm p-2 border-2 w-full hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'>{link.id ? 'Update' : 'add'}</button>
        </form>
    )
}
