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
            <article className='grow flex flex-col md:block gap-5'>
                <div className='mx-auto relative md:float-start max-w-xs w-2/5 aspect-square rounded-full overflow-hidden'>
                    <Image src={user.avatarSrc} alt='Author Image' fill className='mx-auto' />
                </div>
                <h1 className='mx-auto text-5xl font-semibold md:mb-5'>{user.name}</h1>
                {pragraphs.map((paragraph, index) => {
                    return (
                        <p key={index} className='text-2xl font-light'>{paragraph}</p>
                    )
                })}
                <div className='px-3 flex gap-3 mt-3 justify-center'>
                    <span className='text-2xl font-light'>Hi I&apos;m available on | </span>
                    {user.SocialMediaLink.map(link => {
                        return (
                            <Link key={link.id} href={link.url} target='_blank' className='relative w-9 aspect-square rounded-full overflow-hidden hover:shadow-inherit hover:shadow-md bg-white'>
                                <Image src={link.imgSrc} alt='' fill className='object-cover' loader={cloudinaryUnoptimizedLoader} />
                            </Link>
                        )
                    })}
                </div>
            </article>
        </main>
    )
}
