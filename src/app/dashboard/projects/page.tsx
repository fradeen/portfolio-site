import ProjectPreview from '@/components/projectPreview'
import { deleteProject } from '@/lib/actions'
import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'
export default async function AddProject() {
    const projects = await prisma.project.findMany({})
    return (
        <main className='customContainer flex-col justify-start'>
            <h1>Select Project to Edit or Add new one.</h1>
            <div className='flex flex-col gap-3 items-center prose-headings:m-0'>
                <div className='w-full prose-a:no-underline prose-a:hover:underline'>
                    <Link href='/dashboard/projects/new' className='w-full border-2 rounded-lg flex gap-3 justify-around items-center p-2 ring-black hover:ring-2'>
                        <h1> + Add project.</h1>
                    </Link>
                </div>
                {projects && projects.length > 0 ?
                    projects.map(project => (
                        <div key={project.id} className='prose-a:no-underline prose-a:hover:underline'>
                            <Link href={`/dashboard/projects/${project.id}`} aria-labelledby={`${project.id}-title`} className='w-full min-w-80 max-w-screen-lg '
                            >
                                <ProjectPreview project={project} />
                            </Link>

                        </div>
                    ))
                    : (
                        <section>
                            <h1>No projects found.</h1>
                        </section>
                    )}
            </div>
        </main>
    )
}
