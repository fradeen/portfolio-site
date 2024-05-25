import prisma from '@/lib/db'
import { cloudinaryUnoptimizedLoader } from '@/lib/imgLoader'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default async function Footer() {
    const socialMediaLinks = await prisma.socialMediaLink.findMany({})
    return (
        <footer className='w-full max-w-screen-xl mx-auto p-3 flex flex-col sm:flex-row justify-center items-center mt-10 gap-5 prose-img:m-0 prose-a:no-underline prose-headings:m-0' aria-label='contact links'>
            <span className='text-start'>Hi I&apos;m available on | </span>
            <div className='flex gap-3'>
                {socialMediaLinks.map(link => {
                    return (
                        <Link key={link.id} href={link.url} target='_blank' className='size-11 p-2 rounded-full overflow-hidden hover:shadow-inherit hover:shadow-md bg-gray-100'>
                            <Image src={link.imgSrc} alt={link.title} width={32} height={32} loader={cloudinaryUnoptimizedLoader} />
                        </Link>
                    )
                })}
            </div>
        </footer>
    )
}
