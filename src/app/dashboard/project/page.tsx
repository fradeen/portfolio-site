import ProjectEditor from '@/components/projectEditor'
import React from 'react'

export default function AddProject() {
    return (
        <main className='w-full mx-auto p-3 grow flex gap-5 flex-col items-center'>
            <div className='min-w-[1280px] grow max-h-screen w-fit border-2 overflow-y-auto'>
                <ProjectEditor />
            </div>
        </main>
    )
}
