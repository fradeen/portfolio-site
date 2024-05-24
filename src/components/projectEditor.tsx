'use client'
import React, { } from 'react'
import MarkdownEditor from './markdownEditor'
import TagsEditor from './tagsEditor'
import { z } from 'zod'
import { projectSchema, projectType } from '@/lib/zodSchemas'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addProject, updateProject } from '@/lib/actions'

export default function ProjectEditor({ project }: { project: projectType }) {
    const {
        register,
        handleSubmit,
        control,
        setError,
        formState: { errors, isValid, isSubmitting },
    } = useForm<projectType>({
        resolver: zodResolver(projectSchema), mode: 'onChange', defaultValues: project
    })
    async function onSubmit(data: projectType) {
        let error: z.inferFlattenedErrors<typeof projectSchema>
        data.id ?
            error = await updateProject(data) : error = await addProject(data)
        if (error?.fieldErrors)
            for (let [key, value] of Object.entries(error.fieldErrors)) {
                setError(key as keyof projectType, { type: 'server', message: value.toString() ?? '' }, { shouldFocus: true })
            }
    }

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
            <button disabled={!isValid || isSubmitting ? true : false} className={`border-2 p-2 max-w-sm w-full rounded-lg  h-fit ${!isValid ? 'text-white bg-red-300' : ''} ${isSubmitting ? 'bg-slate-500' : 'hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'}`}>{project.id ? 'Update' : 'add'}</button>
        </form>
    )
}
