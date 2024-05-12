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
                <h1 className='mx-auto text-5xl font-semibold md:mb-5'>{user.name}</h1>
                <section className='prose md:prose-xl lg:prose-2xl dark:prose-invert' style={{ maxWidth: '100%' }}>
                    <RenderMarkdown markdown={user.about} />
                </section>
                <section className=' flex flex-col sm:flex-row gap-3 justify-center items-center' aria-label='contact links'>
                    <span className='text-2xl font-light'>Hi I&apos;m available on | </span>
                    <div className='flex gap-3'>
                        {socialMediaLinks.map(link => {
                            return (
                                <Link key={link.id} href={link.url} target='_blank' className='w-9 h-9 aspect-square p-1 rounded-full overflow-hidden hover:shadow-inherit hover:shadow-md bg-gray-100' aria-label={link.title}>
                                    <Image src={link.imgSrc} alt={link.title} width={32} height={32} loader={cloudinaryUnoptimizedLoader} aria-hidden />
                                </Link>
                            )
                        })}
                    </div>
                </section>
            </article>
        </main>
    )
}
