import ProjectPreview from '@/components/projectPreview'
import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'

export default async function Projects() {
    const projects = await prisma.project.findMany({})
    return (
        <main className='customContainer flex-col justify-start items-center'>
            <h1 className='w-full'>My Projects</h1>
            <section aria-label='Project Links' className='flex flex-col gap-3 items-center justify-center grow'>
                {projects && projects.length > 0 ?
                    projects.map(project => (
                        <div key={project.id} className='prose-a:no-underline prose-a:hover:underline'>
                            <Link href={`/projects/${project.id}`} aria-labelledby={`${project.id}-title`}>
                                <ProjectPreview project={project} />
                            </Link>
                        </div>
                    ))
                    : (
                        <section>
                            <h1>No projects found.</h1>
                        </section>
                    )}
            </section>
        </main>
    )
}
