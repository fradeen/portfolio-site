'use client'
import { Project } from '@prisma/client'
import React, { useCallback, useEffect, useState } from 'react'
import MarkdownEditor from './markdownEditor'
import { addProject, updateProject } from '@/lib/actions'
import ProjectsDropdown from './projectsDropdown'
import TagsEditor from './tagsEditor'

export default function ProjectEditor({ projects }: { projects: Project[] }) {
    const [newProject, setNewProject] = useState({} as Project)
    const [selectedId, setSelectedId] = useState('select')
    const updateMarkdown = useCallback((markdown: string) => {
        setNewProject(prev => ({ ...prev, markdown: markdown }))
    }, [])
    const updateSelectedId = useCallback((id: string) => {
        setSelectedId(id)
    }, [])
    useEffect(() => {
        setNewProject(
            projects.filter(Project => Project.id === selectedId)[0] ?? {} as Project
        )
    }, [selectedId, projects])

    const spliceTag = useCallback((index: number) => {
        setNewProject(prev => ({ ...prev, tags: [...prev.tags.toSpliced(index, 1)] }))
    }, [])
    const addTag = useCallback((tag: string) => {
        setNewProject(prev => ({ ...prev, tags: prev.tags ? [...prev.tags, tag] : [tag] }))
    }, [])

    return (
        <div className='min-h-full flex flex-col gap-5 items-center w-full'>
            <div className='w-full max-w-screen-lg'>
                <ProjectsDropdown projects={projects} callback={updateSelectedId} />
            </div>
            {selectedId !== 'select' ? (<form onSubmit={(event) => {
                event.preventDefault()
                if (newProject.id)
                    updateProject(newProject)
                else
                    addProject(newProject)
            }} className='flex flex-col gap-3'>
                <input name='title' value={newProject.title ?? ''} onChange={event => setNewProject(prev => ({ ...prev, title: event.target.value }))} type='text' required placeholder='Title*' className='border-2 p-2 max-w-xs rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                <input name='imgSrc' value={newProject.imgSrc ?? ''} onChange={event => setNewProject(prev => ({ ...prev, imgSrc: event.target.value }))} type='text' required placeholder='Image Source*' className='border-2 p-2 max-w-xs rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                <TagsEditor tags={newProject.tags ?? []} onAdd={addTag} onDelete={spliceTag} />
                <MarkdownEditor initialValue={newProject.markdown ?? ''} callback={updateMarkdown} />
                <button className='rounded-lg p-2 border-2 w-full hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'>{projects ? 'Update' : 'add'}</button>
            </form>) : null}
        </div>
    )
}
