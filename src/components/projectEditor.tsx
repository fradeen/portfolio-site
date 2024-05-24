'use client'
import { Project } from '@prisma/client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import MarkdownEditor from './markdownEditor'
import { addProject, updateProject } from '@/lib/actions'
import TagsEditor from './tagsEditor'
import { z } from 'zod'
import { projectSchema, projectType } from '@/lib/zodSchemas'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function ProjectEditor({ project }: { project: projectType }) {
    const {
        register,
        handleSubmit,
        control,
        setError,
        formState: { errors, isValid },
    } = useForm<projectType>({
        resolver: zodResolver(projectSchema), mode: 'onChange', defaultValues: project
    })
    async function onSubmit(data: projectType) {
        console.log('submitted')
        // let error: z.inferFlattenedErrors<typeof socialMediaLinkSchema>
        // data.id ?
        //     error = await updateMediaLink(data) : error = await addMediaLink(data)
        // if (error?.fieldErrors)
        //     for (let [key, value] of Object.entries(error.fieldErrors)) {
        //         setError(key as keyof mediaLinkType, { type: 'server', message: value.toString() ?? '' }, { shouldFocus: true })
        //     }
        console.log(data, errors)
    }


    // const updateMarkdown = useCallback((markdown: string) => {
    //     setUpdatedProject(prev => ({ ...prev, markdown: markdown }))
    // }, [])
    // const spliceTag = useCallback((index: number) => {
    //     setUpdatedProject(prev => ({ ...prev, tags: [...prev.tags.toSpliced(index, 1)] }))
    // }, [])
    // const addTag = useCallback((tag: string) => {
    //     setUpdatedProject(prev => ({ ...prev, tags: prev.tags ? [...prev.tags, tag] : [tag] }))
    // }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grow flex flex-col gap-3 w-full'>
            <div className='flex gap-3'>
                <div className='flex flex-col max-w-sm'>
                    <input {...register('title')} placeholder='Title*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.title ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                    <span className='p-1 text-sm text-red-500'>{errors.title?.message}</span>
                </div>
                <div className='flex flex-col max-w-sm'>
                    <input {...register('imgSrc')} placeholder='Image Source*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.imgSrc ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                    <span className='p-1 text-sm text-red-500'>{errors.imgSrc?.message}</span>
                </div>
            </div>
            <Controller
                control={control}
                name="tags"
                defaultValue={project.tags ?? []}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TagsEditor value={value ?? []} onChange={onChange} onBlur={onBlur} />
                )}
            />
            <Controller
                control={control}
                name="markdown"
                defaultValue={project.markdown ?? ''}
                render={({ field: { onChange, onBlur, value, } }) => (
                    <MarkdownEditor placeholder='markdown' error={errors?.markdown?.message} value={value ?? []} onChange={onChange} onBlur={onBlur} />
                )}
            />
            <button disabled={!isValid ? true : false} className={`border-2 p-2 max-w-sm w-full rounded-lg  h-fit ${!isValid ? 'text-white bg-red-300' : 'hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'}`}>{project.id ? 'Update' : 'add'}</button>
        </form>
    )
}
