import RenderMarkdown from '@/components/renderMarkdown'
import prisma from '@/lib/db'
import Image from 'next/image'
import React from 'react'

export default async function About() {
    const user = await prisma.user.findFirstOrThrow({})
    return (
        <main className='customContainer'>
            <article className='grow flex flex-col md:block gap-5' aria-label='about me'>
                <div className='mx-auto relative md:float-start max-w-xs w-2/5 aspect-square rounded-full overflow-hidden prose-img:m-0'>
                    <Image src={user.avatarSrc} alt='Author Image' width={500} height={500} className='mx-auto' />
                </div>
                <h1 className='mx-auto text-center md:text-start'>{user.name}</h1>
                <section className='max-w-none text-justify'>
                    <RenderMarkdown markdown={user.about} />
                </section>
            </article>
        </main>
    )
}
