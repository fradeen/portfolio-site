import { Project } from '@prisma/client'
import React from 'react'
import Image from 'next/image'
import RenderMarkdown from './renderMarkdown'

export default function ProjectPreview({ project }: { project: Project }) {
    return (
        <div className='min-w-80 max-w-screen-lg h-40 md:h-60 border-2 rounded-lg flex gap-3 justify-between '>
            <div className='basis-1/4 h-full relative rounded-lg '>
                <Image src={project.imgSrc} alt='' className='aspect-video object-cover rounded-tl-lg rounded-bl-lg' fill />
            </div>
            <div className='basis-3/4 p-2 prose dark:prose-invert md:prose-xl lg:prose-2xl'>
                <h1 style={{ margin: 0 }}>{project.title}</h1>
                <div className='line-clamp-3'>
                    <RenderMarkdown markdown={project.markdown} />
                </div>
            </div>
        </div>
    )
}
