import { SocialMediaLink } from '@prisma/client'
import React from 'react'
import Image from 'next/image'
export default function ContactCard({ mediaLink }: { mediaLink: SocialMediaLink }) {
    return (
        <div className={`w-full h-full min-w-80 max-w-screen-md border-2 rounded-lg p-3 flex gap-3 justify-between items-center ring-black hover:ring-2 hover:bg-gradient-to-l hover:from-${mediaLink.accentColor}`} aria-labelledby={`${mediaLink.id}`}>
            <div className='size-20 aspect-square rounded-full bg-gray-200 flex justify-center items-center'>
                <Image src={mediaLink.imgSrc} style={{ margin: 0 }} alt={mediaLink.title} width={48} height={48} />
            </div>
            <div className='grow p-2'>
                <h2 id={`${mediaLink.id}-title`}>{mediaLink.title}</h2>
                <section className='font-light'>{mediaLink.message}</section>
            </div>
        </div>
    )
}
