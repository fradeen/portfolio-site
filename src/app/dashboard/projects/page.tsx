import ProjectPreview from '@/components/projectPreview'
import { deleteProject } from '@/lib/actions'
import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'
export default async function AddProject() {
    const projects = await prisma.project.findMany({})
    return (
        <main className='customContainer flex-col justify-start'>
            <h1 className='w-full text-6xl my-20'>Select Project to Edit or Add new one.</h1>
            <Link href='/dashboard/projects/new' className='flex justify-center items-center w-full min-w-80 max-w-screen-md border-2 rounded-lg prose dark:prose-invert md:prose-xl lg:prose-2xl ring-black hover:ring-2 p-2'>
                <h1 className='w-fit'> + Add project.</h1>
            </Link>
            {projects && projects.length > 0 ?
                projects.map(project => (
                    <Link href={`/dashboard/projects/${project.id}`} key={project.id} aria-labelledby={`${project.id}-title`}
                    >
                        <ProjectPreview project={project} />
                    </Link>
                ))
                : (
                    <section className='prose dark:prose-invert md:prose-xl lg:prose-2xl'>
                        <h1>No projects found.</h1>
                    </section>
                )}
        </main>
    )
}
