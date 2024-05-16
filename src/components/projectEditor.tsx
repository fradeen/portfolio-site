'use client'
import { Project } from '@prisma/client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import MarkdownEditor from './markdownEditor'
import { addProject, updateProject } from '@/lib/actions'
import TagsEditor from './tagsEditor'
import { z } from 'zod'
import { projectSchema } from '@/lib/zodSchemas'

export default function ProjectEditor({ project }: { project: Project }) {
    const [updatedProject, setUpdatedProject] = useState(project)
    const [errors, setErrors] = useState<z.inferFlattenedErrors<typeof projectSchema>>()
    let isFirstRun = useRef<boolean>(true)
    useEffect(() => {
        if (!isFirstRun.current)
            setErrors(projectSchema.safeParse(updatedProject).error?.flatten())
        else
            isFirstRun.current = false
    }, [updatedProject])

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
        <form action={async () => {
            setErrors(projectSchema.safeParse(updatedProject).error?.flatten())
            if (errors)
                return
            project.id ? updateProject({ ...updatedProject, id: project.id }) : setErrors(await addProject(updatedProject))
        }} className='flex flex-col gap-3 w-full'>
            <div className='flex gap-3'>
                <div className='flex flex-col max-w-sm'>
                    <input name='title' value={updatedProject.title ?? ''} onChange={event => setUpdatedProject(prev => ({ ...prev, title: event.target.value }))} type='text' placeholder='Title*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.title ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                    <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.title}</span>
                </div>
                <div className='flex flex-col max-w-sm'>
                    <input name='imgSrc' value={updatedProject.imgSrc ?? ''} onChange={event => setUpdatedProject(prev => ({ ...prev, imgSrc: event.target.value }))} type='text' placeholder='Image Source*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.fieldErrors.imgSrc ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                    <span className='p-1 text-sm text-red-500'>{errors?.fieldErrors.imgSrc}</span>
                </div>
            </div>
            <TagsEditor tags={updatedProject.tags ?? []} onAdd={addTag} onDelete={spliceTag} />
            <MarkdownEditor placeholder='markdown' error={errors?.fieldErrors.markdown} initialValue={updatedProject.markdown ?? ''} callback={updateMarkdown} />
            <button type='submit' disabled={errors ? true : false} className={`border-2 p-2 max-w-sm w-full rounded-lg  h-fit ${errors ? 'text-white bg-red-300' : 'hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'}`}>{updatedProject.id ? 'Update' : 'add'}</button>
        </form>
    )
}
