'use client'
import { Project } from '@prisma/client'
import React, { useCallback, useEffect, useState } from 'react'
import MarkdownEditor from './markdownEditor'
import { addProject, updateProject } from '@/lib/actions'
import TagsEditor from './tagsEditor'

export default function ProjectEditor({ project }: { project: Project }) {
    const [updatedProject, setUpdatedProject] = useState(project)
    const updateMarkdown = useCallback((markdown: string) => {
        setUpdatedProject(prev => ({ ...prev, markdown: markdown }))
    }, [])
    const spliceTag = useCallback((index: number) => {
        setUpdatedProject(prev => ({ ...prev, tags: [...prev.tags.toSpliced(index, 1)] }))
    }, [])
    const addTag = useCallback((tag: string) => {
        setUpdatedProject(prev => ({ ...prev, tags: prev.tags ? [...prev.tags, tag] : [tag] }))
    }, [])

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (updatedProject.id)
                updateProject(updatedProject)
            else
                addProject(updatedProject)
        }} className='flex flex-col gap-3 w-full'>
            <div className='flex gap-3'>
                <input name='title' value={updatedProject.title ?? ''} onChange={event => setUpdatedProject(prev => ({ ...prev, title: event.target.value }))} type='text' required placeholder='Title*' className='border-2 p-2 max-w-screen-sm w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                <input name='imgSrc' value={updatedProject.imgSrc ?? ''} onChange={event => setUpdatedProject(prev => ({ ...prev, imgSrc: event.target.value }))} type='text' required placeholder='Image Source*' className='border-2 p-2 max-w-screen-sm w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
            </div>
            <TagsEditor tags={updatedProject.tags ?? []} onAdd={addTag} onDelete={spliceTag} />
            <MarkdownEditor initialValue={updatedProject.markdown ?? ''} callback={updateMarkdown} />
            <button className='rounded-lg p-2 border-2 w-full max-w-sm hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'>{updatedProject.id ? 'Update' : 'add'}</button>
        </form>
    )
}
