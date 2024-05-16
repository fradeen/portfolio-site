import prisma from '@/lib/db'
import React from 'react'
import { Project } from '@prisma/client'
import ProjectEditor from '@/components/projectEditor'
import { deleteProject } from '@/lib/actions'

// Dynamic segments not included in generateStaticParams will return a 404
export const dynamicParams = false

export async function generateStaticParams() {
    const projectIds = await prisma.project.findMany({ select: { id: true } })
    return [...projectIds, { id: 'new' }]
}


export default async function UpdateProject({ params }: { params: { id: string } }) {
    let project = {} as Project
    if (params.id !== 'new')
        project = await prisma.project.findFirstOrThrow({ where: { id: params.id } })
    const deleteProjectWithId = deleteProject.bind(null, project.id)
    return (
        <main className='w-full max-w-screen-2xl mx-auto p-3 grow flex gap-5 items-center flex-col justify-start'>
            <div className='w-full flex justify-between  my-10'>
                <h1>{`${project.id ? 'Update Project' : 'Add Project'}`}</h1>
                {project.id && (
                    <form action={deleteProjectWithId}>
                        <button className='rounded-lg p-2 border-2 w-full max-w-sm hover:bg-red-600/70 hover:text-white flex justify-center items-center'>
                            Delete
                        </button>
                    </form>
                )}

            </div>
            <ProjectEditor project={project} />
        </main>
    )
}
