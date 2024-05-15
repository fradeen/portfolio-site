import RenderMarkdown from '@/components/renderMarkdown'
import prisma from '@/lib/db'
import { cloudinaryUnoptimizedLoader } from '@/lib/imgLoader'
import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'

export default async function About() {
    const user = await prisma.user.findFirstOrThrow({})
    const socialMediaLinks = await prisma.socialMediaLink.findMany({})
    return (
        <main className='customContainer'>
            <article className='grow flex flex-col md:block gap-5' aria-label='about me'>
                <div className='mx-auto relative md:float-start max-w-xs w-2/5 aspect-square rounded-full overflow-hidden'>
                    <Image src={user.avatarSrc} alt='Author Image' width={500} height={500} className='mx-auto' />
                </div>
                <h1 className='mx-auto'>{user.name}</h1>
                <section className='max-w-none'>
                    <RenderMarkdown markdown={user.about} />
                </section>
                <section className=' flex flex-col sm:flex-row gap-3 justify-center items-center' aria-label='contact links'>
                    <span>Hi I&apos;m available on | </span>
                    <div className='flex gap-3'>
                        {socialMediaLinks.map(link => {
                            return (
                                <Link key={link.id} href={link.url} target='_blank' className='size-11 p-2 rounded-full overflow-hidden hover:shadow-inherit hover:shadow-md bg-gray-100'>
                                    <Image src={link.imgSrc} alt={link.title} width={32} height={32} loader={cloudinaryUnoptimizedLoader} />
                                </Link>
                            )
                        })}
                    </div>
                </section>
            </article>
        </main>
    )
}
