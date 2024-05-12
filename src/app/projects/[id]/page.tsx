import prisma from '@/lib/db'
import React from 'react'
import Image from 'next/image'
import RenderMarkdown from '@/components/renderMarkdown'

// Dynamic segments not included in generateStaticParams will return a 404
export const dynamicParams = false

export async function generateStaticParams() {
    const projectIds = await prisma.project.findMany({ select: { id: true } })
    return projectIds
}


export default async function Project({ params }: { params: { id: string } }) {
    const project = await prisma.project.findFirstOrThrow({ where: { id: params.id } })
    return (
        <main className='customContainer justify-start'>
            <article className='grow flex flex-col md:block gap-5' aria-label='about me'>
                <div className='mx-auto relative w-5/6 aspect-video overflow-hidden'>
                    <Image src={project.imgSrc} alt='Author Image' width={1920} height={1080} className='mx-auto' />
                </div>
                <h1 className='mx-auto text-5xl font-semibold md:mb-5'>{project.title}</h1>
                <section className='prose md:prose-xl lg:prose-2xl dark:prose-invert' style={{ maxWidth: '100%' }}>
                    <RenderMarkdown markdown={project.markdown} />
                </section>
            </article>
        </main>
    )
}
