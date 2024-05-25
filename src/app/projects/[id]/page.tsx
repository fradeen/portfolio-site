import prisma from '@/lib/db'
import React from 'react'
import Image from 'next/image'
import RenderMarkdown from '@/components/renderMarkdown'
import imgUrlGenerator from '@/lib/imgUrlGenerator'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const project = await prisma.project.findFirstOrThrow({ where: { id: params.id } })
    return {
        title: project.title,
        keywords: project.tags,
        openGraph: {
            title: project.title,
            description: project.markdown.split(' ')[0],
            images: [
                {
                    url: imgUrlGenerator({ src: project.imgSrc, width: 720 })
                }
            ],
            tags: project.tags
        },
        twitter: {
            title: project.title,
            description: project.markdown.split(' ')[0],
            images: [
                {
                    url: imgUrlGenerator({ src: project.imgSrc, width: 720 })
                }
            ],
        },
    }
}

export async function generateStaticParams() {
    const projectIds = await prisma.project.findMany({ select: { id: true } })
    return projectIds
}


export default async function Project({ params }: { params: { id: string } }) {
    const project = await prisma.project.findFirstOrThrow({ where: { id: params.id } })
    return (
        <main className='customContainer justify-start'>
            <article className='grow flex flex-col gap-10' aria-label='about me'>
                <div className='self-center relative max-w-screen-lg w-5/6 aspect-video overflow-hidden prose-img:m-0'>
                    <Image src={project.imgSrc} alt='Title image' fill className='object-cover' />
                </div>
                <h1>{project.title}</h1>
                <section className='text-justify'>
                    <RenderMarkdown markdown={project.markdown} />
                </section>
            </article>
        </main>
    )
}
