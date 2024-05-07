'use client'
import { Project } from '@prisma/client'
import React, { useCallback, useState } from 'react'
import MarkdownEditor from './markdownEditor'
import { addProject } from '@/lib/actions'

export default function ProjectEditor({ project }: { project?: Project }) {
    const [newProject, setNewProject] = useState(project ? project : {} as Project)
    const updateMarkdown = useCallback((markdown: string) => {
        setNewProject(prev => ({ ...prev, markdown: markdown }))
    }, [])
    return (
        <div className='min-h-full flex flex-col gap-3'>
            <form onSubmit={(event) => {
                event.preventDefault()
                addProject(newProject)
            }}>
                <input name='title' value={newProject.title ?? ''} onChange={event => setNewProject(prev => ({ ...prev, title: event.target.value }))} type='text' required placeholder='Title*' className='border-2 p-2 max-w-xs rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                <input name='imgSrc' value={newProject.imgSrc ?? ''} onChange={event => setNewProject(prev => ({ ...prev, imgSrc: event.target.value }))} type='text' required placeholder='Image Source*' className='border-2 p-2 max-w-xs rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                <MarkdownEditor initialValue={project?.markdown} callback={updateMarkdown} />
                <button className='rounded-lg p-2 border-2 w-full hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'>{project ? 'Update' : 'add'}</button>
            </form>
        </div>
    )
}
