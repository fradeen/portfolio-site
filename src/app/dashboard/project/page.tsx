import ProjectEditor from '@/components/projectEditor'
import prisma from '@/lib/db'
import React from 'react'

export default async function AddProject() {
    const projects = await prisma.project.findMany({})
    return (
        <main className='w-full mx-auto p-3 grow flex gap-5 flex-col items-center'>
            <div className='min-w-[1280px] grow max-h-screen w-fit border-2 overflow-y-auto flex gap-1 p-2'>
                <ProjectEditor projects={projects} />
            </div>
        </main>
    )
}
