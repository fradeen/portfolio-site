import ProjectPreview from '@/components/projectPreview'
import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'

export default async function Projects() {
    const projects = await prisma.project.findMany({})
    return (
        <main className='customContainer flex-col justify-start'>
            <h1 className='w-full text-7xl my-20'>My Projects</h1>
            {projects && projects.length > 0 ?
                projects.map(project => (
                    <Link key={project.id} href={`/projects/${project.id}`}>
                        <ProjectPreview project={project} />
                    </Link>
                ))
                : (
                    <div className='prose dark:prose-invert'>
                        <h1>No projects found.</h1>
                    </div>
                )}
        </main>
    )
}
