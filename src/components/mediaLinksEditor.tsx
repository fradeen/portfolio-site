import { SocialMediaLink } from '@prisma/client'
import React from 'react'
import Image from 'next/image'
import { cloudinaryUnoptimizedLoader } from '@/lib/imgLoader'

export default function MediaLinksEditor({ socialMediaLinks }: { socialMediaLinks: SocialMediaLink[] }) {
    return (
        <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-gray-500 font-semibold'>Update Social Media Links</h3>
            <div className='flex flex-wrap gap-3'>
                {socialMediaLinks.map(link => {
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
                        <button type='button' className='rounded-lg p-2 border-2 w-full hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white' onClick={() => { }}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
