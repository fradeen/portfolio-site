'use client'
import { SocialMediaLink } from '@prisma/client'
import React from 'react'
import Image from 'next/image'
import { cloudinaryUnoptimizedLoader } from '@/lib/imgLoader'
import MediaLinkForm from './mediaLinkForm'

export default function MediaLinksEditor({ socialMediaLinks }: { socialMediaLinks: SocialMediaLink[] }) {
    return (
        <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-gray-500 font-semibold'>Update Social Media Links</h3>
            <div className='flex flex-wrap gap-3'>
                {socialMediaLinks.map(link => {
                    return (
                        <div key={link.id} className='group max-w-max'>
                            <div key={link.id} className={`group-hover:hidden group-focus-within:hidden max-w-xs w-full p-3 rounded-lg border-2 flex gap-2 items-center hover:bg-gradient-to-l hover:from-${link.accentColor}`}>
                                <div className='rounded-full bg-gray-100 size-8 object-contain overflow-hidden' aria-hidden>
                                    <Image src={link.imgSrc} style={{ margin: 0 }} width={32} height={32} alt={link.title} loader={cloudinaryUnoptimizedLoader} aria-hidden />
                                </div>
                                <p className='text-2xl font-light' >{link.message}</p>
                            </div>
                            <MediaLinkForm link={link} />
                        </div>
                    )
                })}
            </div>
            <div tabIndex={0} className='border-2 p-3 w-fit flex flex-col justify-center items-center'>
                <span className='w-full p-1'>Add</span>
                <MediaLinkForm />
            </div>
        </div>
    )
}
