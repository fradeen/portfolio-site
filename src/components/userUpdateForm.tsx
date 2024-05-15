"use client"
import { User } from '@prisma/client'
import React, { useCallback, useState } from 'react'
import MarkdownEditor from './markdownEditor'
import TagsEditor from './tagsEditor'
import { updateUserInfo } from '@/lib/actions'

export default function UserUpdateForm({ user }: { user?: (User | null) }) {
    const [updatedUser, setUpdatedUser] = useState(user ? user : {} as User)
    function onSubmit() {
        updateUserInfo(updatedUser)
    }
    const spliceTag = useCallback((index: number) => {
        setUpdatedUser(prev => ({ ...prev, tags: [...prev.tags.toSpliced(index, 1)] }))
    }, [])
    const addTag = useCallback((tag: string) => {
        setUpdatedUser(prev => ({ ...prev, tags: prev.tags ? [...prev.tags, tag] : [tag] }))
    }, [])
    const updateIntro = useCallback((intro: string) => {
        setUpdatedUser(prev => ({ ...prev, intro: intro }))
    }, [])
    const uppdateAbout = useCallback((about: string) => {
        setUpdatedUser(prev => ({ ...prev, about: about }))
    }, [])

    return (
        <div className='flex flex-col gap-3'>
            <h1>{`${user ? 'Update' : 'Add'} user info.`}</h1>
            <form action={onSubmit} className='flex flex-col gap-3 w-full'>
                <div className='flex gap-3 items-center flex-wrap '>
                    <input name='name' type='text' required placeholder='User Name*' value={updatedUser.name ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, name: event.target.value })) }} className='border-2 p-2 max-w-sm w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='email' type='text' required placeholder='Domain Name*' value={updatedUser.home ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, home: event.target.value })) }} className='border-2 p-2 max-w-sm w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='subject' type='text' required placeholder='Avatar url*' value={updatedUser.avatarSrc ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, avatarSrc: event.target.value })) }} className='border-2 p-2 max-w-sm w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='title' type='text' required placeholder='Title*' value={updatedUser.title ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, title: event.target.value })) }} className='border-2 p-2 max-w-sm w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                </div>
                <TagsEditor tags={updatedUser.tags} onAdd={addTag} onDelete={spliceTag} />
                <MarkdownEditor initialValue={updatedUser.intro} callback={updateIntro} />
                <MarkdownEditor initialValue={updatedUser.about} callback={uppdateAbout} />
                <button type='submit' className='border-2 p-2 max-w-sm w-full rounded-lg hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white h-fit'>Submit</button>
            </form>
        </div>
    )
}
