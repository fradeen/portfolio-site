import { Project } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import ProjectPreview from './projectPreview'

export default function ProjectsDropdown({ projects, callback }: { projects: Project[], callback: (id: string) => void }) {
    const [selectedId, setSelectedId] = useState('select')
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        callback(selectedId)
    }, [selectedId, callback])
    return (
        <div className='relative flex flex-col gap-2'>

            <button id='select' className={`min-w-80 max-w-screen-lg h-40 md:h-60 border-2 rounded-lg prose dark:prose-invert md:prose-xl lg:prose-2xl ${selectedId === 'select' ? 'flex' : 'hidden'} gap-3 justify-center items-center ring-black focus:ring-2`}>
                <h1>Select Project</h1>
            </button>
            <button id='new' onClick={event => {
                if (event.currentTarget.id === selectedId)
                    return
                setSelectedId(event.currentTarget.id)
                setOpen(false)
            }} className={`min-w-80 max-w-screen-lg h-40 md:h-60 border-2 rounded-lg prose dark:prose-invert md:prose-xl lg:prose-2xl ${selectedId === 'new' || isOpen ? 'flex' : 'hidden'} ${selectedId === 'new' && 'ring-black ring-2'} gap-3 justify-center items-center`}>
                <h1>Add new project</h1>
            </button>
            {projects.map(project => (
                <button key={project.id} id={project.id} onClick={event => {
                    if (event.currentTarget.id === selectedId)
                        return
                    setSelectedId(event.currentTarget.id)
                    setOpen(false)
                }} className={`${selectedId === project.id || isOpen ? 'block' : 'hidden'} ${selectedId === project.id && 'ring-black ring-2'} rounded-xl`}>
                    <ProjectPreview project={project} />
                </button>
            ))}
            <button onClick={() => setOpen(prev => !prev)} className='absolute border-2 rounded-lg size-20 right-0 m-2 bg-black/70 text-white'>
                open
            </button>
        </div>
    )
}