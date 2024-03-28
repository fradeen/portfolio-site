import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default async function ContactCard({ href, favicon, title, description }: { href: string, favicon: string, title: string, description: string }) {
    return (
        <Link href={href} target='_blank' className={`w-full max-w-sm h-fit rounded-lg overflow-hidden flex gap-x-3 p-2 border-2 border-gray-500 self-center`}>
            <div className='relative aspect-square min-h-14'>
                <Image src={favicon} fill alt={title} className='invert dark:invert-0' />
            </div>
            <div>
                <div className='font-semibold text-2xl'>{title}</div>
                <div>{description}</div>
            </div>
        </Link>
    )
}
