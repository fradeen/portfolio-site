"use client"
import { User } from '@prisma/client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import MarkdownEditor from './markdownEditor'
import TagsEditor from './tagsEditor'
import { updateUserInfo } from '@/lib/actions'
import { z } from 'zod'
import { userSchema } from '@/lib/zodSchemas'

export default function UserUpdateForm({ user }: { user?: (User | null) }) {
    const [updatedUser, setUpdatedUser] = useState(user ? user : {} as User)
    const [errors, setErrors] = useState<z.inferFlattenedErrors<typeof userSchema>>()
    let isFirstRun = useRef<boolean>(true)
    async function onSubmit() {
        setErrors(userSchema.safeParse(updatedUser).error?.flatten())
        if (errors)
            return
        setErrors(await updateUserInfo(updatedUser))
    }
    useEffect(() => {
        if (!isFirstRun.current)
            setErrors(userSchema.safeParse(updatedUser).error?.flatten())
        else
            isFirstRun.current = false
    }, [updatedUser])
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
        <div className='flex flex-col gap-20'>
            <h1 className='text-center'>{`${user ? 'Update' : 'Add'} user info.`}</h1>
            <form action={onSubmit} className='flex flex-col gap-3 w-full'>
                <div className='flex gap-3 flex-wrap items-start'>
                    <div className='flex flex-col max-w-sm'>
                        <input name='name' type='text' placeholder='User Name*' value={updatedUser.name ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, name: event.target.value })) }} className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.name ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                        <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.name}</span>
                    </div>
                    <div className='flex flex-col max-w-sm'>
                        <input name='home' type='text' placeholder='Domain Name*' value={updatedUser.home ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, home: event.target.value })) }} className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.home ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                        <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.home}</span>
                    </div>
                    <div className='flex flex-col max-w-sm'>
                        <input name='avatarSrc' type='text' placeholder='Avatar url*' value={updatedUser.avatarSrc ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, avatarSrc: event.target.value })) }} className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.avatarSrc ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                        <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.avatarSrc}</span>
                    </div>
                    <div className='flex flex-col max-w-sm'>
                        <input name='title' type='text' placeholder='Title*' value={updatedUser.title ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, title: event.target.value })) }} className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.title ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                        <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.title}</span>
                    </div>
                </div>
                <TagsEditor tags={updatedUser.tags} onAdd={addTag} onDelete={spliceTag} />
                <MarkdownEditor initialValue={updatedUser.intro} error={errors?.fieldErrors.intro} placeholder='Intro' callback={updateIntro} />
                <MarkdownEditor initialValue={updatedUser.about} error={errors?.fieldErrors.about} placeholder='About' callback={uppdateAbout} />
                <button type='submit' disabled={errors ? true : false} className={`border-2 p-2 max-w-sm w-full rounded-lg  h-fit ${errors ? 'text-white bg-red-300' : 'hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'}`}>Submit</button>
            </form>
        </div>
    )
}
