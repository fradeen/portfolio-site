import { Project } from '@prisma/client'
import React from 'react'
import Image from 'next/image'
import RenderMarkdown from './renderMarkdown'

export default function ProjectPreview({ project }: { project: Project }) {
    return (
        <div className='min-w-80 max-w-screen-lg p-2 border-2 rounded-lg flex flex-col md:flex-row gap-3 justify-between ring-black hover:ring-2 text-start'>
            <div className='w-full aspect-video md:basis-2/5 relative overflow-hidden rounded-lg prose-img:m-0' aria-hidden>
                <Image src={project.imgSrc} alt={project.title} fill className='object-cover' />
            </div>
            <div className='md:basis-3/5 flex flex-col gap-3'>
                <h1 id={`${project.id}-title`}>{project.title}</h1>
                <section title='Creation date' className='font-light'>Created At: {project.createdAt.toDateString()}</section>
                <div className='line-clamp-2 [&>p]:m-0 text-justify'>
                    <RenderMarkdown markdown={project.markdown.split('  \n')[0]} />
                </div>
            </div>
        </div>
    )
}
