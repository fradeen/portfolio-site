"use client"
import { User } from '@prisma/client'
import React, { useCallback, useState } from 'react'
import MarkdownEditor from './markdownEditor'
import TagsEditor from './tagsEditor'
import { updateUserInfo } from '@/lib/actions'

export default function UserUpdateForm({ user }: { user?: (User | null) }) {
    const [updatedUser, setUpdatedUser] = useState(user ? user : {} as User)
    function onSubmit(formData: FormData) {
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
        <div className='min-h-full flex flex-col gap-3'>
            <h1 className='w-full text-5xl font-semibold'>{`${user ? 'Update' : 'Add'} user info.`}</h1>
            <form data-static-form-name='user-update-form' action={onSubmit} className='border-2 grow p-3 w-full max-w-screen-xl flex flex-col gap-3'>
                <div className='flex gap-3 items-center flex-wrap '>
                    <input name='name' type='text' required placeholder='User Name*' value={updatedUser.name ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, name: event.target.value })) }} className='border-2 p-2 max-w-xs w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='email' type='text' required placeholder='Domain Name*' value={updatedUser.home ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, home: event.target.value })) }} className='border-2 p-2 max-w-xs w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='subject' type='text' required placeholder='Avatar url*' value={updatedUser.avatarSrc ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, avatarSrc: event.target.value })) }} className='border-2 p-2 max-w-xs w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='title' type='text' required placeholder='Title*' value={updatedUser.title ?? ''} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, title: event.target.value })) }} className='border-2 p-2 max-w-xs w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                </div>
                <TagsEditor tags={updatedUser.tags} onAdd={addTag} onDelete={spliceTag} />
                {/* <MediaLinksEditor socialMediaLinks={updatedUser.SocialMediaLink} /> */}
                <MarkdownEditor initialValue={updatedUser.intro} callback={updateIntro} />
                <MarkdownEditor initialValue={updatedUser.about} callback={uppdateAbout} />
                <button type='submit' className='border-2 p-2 max-w-xs w-full rounded-lg hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white col-span-2 h-fit'>Submit</button>
                {/* <div className='col-span-2 w-full flex flex-col gap-3'>
                <div className='w-full flex flex-wrap'>
                    {updatedUser.tags.map((tag, index) => (
                        <div key={index} className='w-fit group flex gap-1 rounded-full p-2 m-1 bg-black dark:bg-white text-white dark:text-black text-xs'>
                            <span className=''>{tag} </span>
                            <button type='button' onClick={() => spliceTag(index)} className='size-4 p-1 rounded-full bg-red-500 flex justify-center items-center'>X</button>
                            </div>
                    ))}
                </div>
                <div className='max-w-sm border-2 rounded-lg focus-within:ring-2 focus-within:border-0 focus-within:ring-black focus-within:dark:ring-white ring-black px-3 flex justify-center items-center gap-2'>
                <input name='newtag' type='text' placeholder='Tags' value={newTag} onChange={(event) => setNewTag(event.target.value)}
                        className='outline-0 ring-0 border-0 p-2 rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit grow' />
                        <button type='button' onClick={addTag} className='rounded-full px-2 bg-black dark:bg-white text-white dark:text-black' >Add</button>
                        </div>
                    </div> */}
                {/* <div className='flex flex-col gap-3'>
                <h3 className='text-2xl text-gray-500 font-semibold'>Update Social Media Links</h3>
                <div className='flex flex-wrap gap-3'>
                {updatedUser.SocialMediaLink.map(link => {
                    return (
                        <div key={link.id} className={`group max-w-xs p-3 rounded-lg border-2 flex gap-2 items-center hover:bg-gradient-to-l hover:from-${link.accentColor}`}>
                        <div className='w-fit h-fit p-1 rounded-full bg-gray-100' aria-hidden>
                                    <Image src={link.imgSrc} width={32} height={32} alt={link.title} loader={cloudinaryUnoptimizedLoader} aria-hidden />
                                    </div>
                                <p className='text-2xl font-light group-hover:font-normal' >{link.message}</p>
                                </div>
                            )
                    })}
                    <div tabIndex={0} className='group border-2 p-3 w-fit max-w-screen-sm flex flex-col justify-center items-center'>
                    <span className='w-full p-1'>Add</span>
                    <div className='group-focus-within:grid grid grid-cols-3 auto-rows-auto'>
                    <input name='title' type='text' required placeholder='Title*' className='border-2 p-2 max-w-xs rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='url' type='text' required placeholder='URL*' className='border-2 p-2 max-w-xs rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='imgSrc' type='text' required placeholder='Image Source*' className='border-2 p-2 max-w-xs rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                            <input name='accentColor' type='text' required placeholder='Accent Color*' className='border-2 p-2 max-w-xs rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                            <input name='message' type='text' required placeholder='Message*' className='border-2 p-2 max-w-xs rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                            <button type='button' className='rounded-lg p-2 border-2 w-full max-w-xs mx-auto' onClick={() => { }}>Add</button>
                        </div>
                        </div>
                        </div>
                    </div> */}
                {/* <div className='w-full max-h-min flex justify-center items-end gap-3'>
                <textarea name='intro' rows={1} ref={textAreaRef} required placeholder='Intro*' value={updatedUser.intro}
                    onChange={(event) => {
                        setUpdatedUser(prev => ({ ...prev, intro: event.target.value }))
                    }} className='flex-1 border-2 p-2 w-full rounded-lg focus:border-3 dark:bg-black dark:text-white  resize-none' />
                    {updatedUser.intro ? (
                        <div className='flex-1 border-2 p-2 w-full rounded-lg prose md:prose-xl dark:prose-invert overflow-y-auto'>
                        <RenderMarkdown markdown={updatedUser.intro} />
                        </div>
                    ) : null}
                </div> */}
                {/* <textarea name='about' required placeholder='About*' value={updatedUser.about} onChange={(event) => { setUpdatedUser(prev => ({ ...prev, about: event.target.value })) }} className='border-2 p-2 col-span-2 w-full rounded-lg focus:border-3 dark:bg-black dark:text-white focus-within:h-screen resize-none' /> */}
            </form>
        </div>
    )
}
