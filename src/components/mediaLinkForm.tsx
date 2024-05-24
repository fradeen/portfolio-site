'use client'
import { mediaLinkType, socialMediaLinkSchema } from '@/lib/zodSchemas'
import React, { } from 'react'
import { z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addMediaLink, updateMediaLink } from '@/lib/actions'

export default function MediaLinkForm({ link }: { link: mediaLinkType }) {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm<mediaLinkType>({
        resolver: zodResolver(socialMediaLinkSchema), mode: 'onChange', defaultValues: link
    })
    async function onSubmit(data: mediaLinkType) {
        let error: z.inferFlattenedErrors<typeof socialMediaLinkSchema>
        data.id ?
            error = await updateMediaLink(data) : error = await addMediaLink(data)
        if (error?.fieldErrors)
            for (let [key, value] of Object.entries(error.fieldErrors)) {
                setError(key as keyof mediaLinkType, { type: 'server', message: value.toString() ?? '' }, { shouldFocus: true })
            }
    }
    return (<>
        {errors.root ? (<span>Server Error</span>) : null}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap gap-3'>
            <div className='flex flex-col max-w-sm'>
                <input {...register('title')} placeholder='Title*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.title ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                <span className='p-1 text-sm text-red-500'>{errors?.title?.message}</span>
            </div>
            <div className='flex flex-col max-w-sm'>
                <input {...register('url')} placeholder='URL*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.url ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                <span className='p-1 text-sm text-red-500'>{errors?.url?.message}</span>
            </div>
            <div className='flex flex-col max-w-sm'>
                <input {...register('imgSrc')} placeholder='Image Source*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.imgSrc ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                <span className='p-1 text-sm text-red-500'>{errors?.imgSrc?.message}</span>
            </div>
            <div className='flex flex-col max-w-sm'>
                <input {...register('accentColor')} placeholder='Accent Color*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.accentColor ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                <span className='p-1 text-sm text-red-500'>{errors?.accentColor?.message}</span>
            </div>
            <div className='flex flex-col max-w-sm'>
                <input {...register('message')} placeholder='Message*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.message ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                <span className='p-1 text-sm text-red-500'>{errors?.message?.message}</span>
            </div>
            <button type='submit' disabled={!isValid} className={`border-2 p-2 max-w-sm w-full rounded-lg  h-fit ${!isValid ? 'text-white bg-red-300' : 'hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'}`}>{link.id ? 'Update' : 'Add'}</button>
        </form>
    </>
    )
}
