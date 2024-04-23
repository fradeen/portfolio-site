import prisma from '@/lib/db'
import { cloudinaryUnoptimizedLoader } from '@/lib/imgLoader'
import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'

export default async function About() {
    const user = await prisma.user.findFirstOrThrow({
        include: {
            SocialMediaLink: true
        }
    })
    const pragraphs = user.about.split(/\r?\n/)
    return (
        <main className='customContainer'>
            <article className='grow flex flex-col md:block gap-5' aria-label='about me'>
                <div className='mx-auto relative md:float-start max-w-xs w-2/5 aspect-square rounded-full overflow-hidden'>
                    <Image src={user.avatarSrc} alt='Author Image' width={500} height={500} className='mx-auto' />
                </div>
                <h1 className='mx-auto text-5xl font-semibold md:mb-5'>{user.name}</h1>
                {pragraphs.map((paragraph, index) => {
                    return (
                        <p key={index} className='text-2xl font-light'>{paragraph}</p>
                    )
                })}
                <section className=' flex flex-col sm:flex-row gap-3 justify-center items-center' aria-label='contact links'>
                    <span className='text-2xl font-light'>Hi I&apos;m available on | </span>
                    <div className='flex gap-3'>
                        {user.SocialMediaLink.map(link => {
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
