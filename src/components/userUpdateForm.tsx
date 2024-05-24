"use client"
import { User } from '@prisma/client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import MarkdownEditor from './markdownEditor'
import TagsEditor from './tagsEditor'
import { updateUserInfo } from '@/lib/actions'
import { z } from 'zod'
import { userSchema, userType } from '@/lib/zodSchemas'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function UserUpdateForm({ user }: { user: User }) {
    const {
        register,
        handleSubmit,
        control,
        setError,
        formState: { errors, isValid, isSubmitting },
    } = useForm<userType>({
        resolver: zodResolver(userSchema), mode: 'onChange', defaultValues: user
    })
    async function onSubmit(data: userType) {
        let error = await updateUserInfo(data)
        if (error?.fieldErrors)
            for (let [key, value] of Object.entries(error.fieldErrors)) {
                setError(key as keyof userType, { type: 'server', message: value.toString() ?? '' }, { shouldFocus: true })
            }
    }

    return (
        <div className='flex flex-col gap-20'>
            <h1 className='text-center'>{`${user ? 'Update' : 'Add'} user info.`}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full'>
                <div className='flex gap-3 flex-wrap items-start'>
                    <div className='flex flex-col max-w-sm'>
                        <input {...register('name')} placeholder='User Name*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.name ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                        <span className='p-1 text-sm text-red-500'>{errors?.name?.message}</span>
                    </div>
                    <div className='flex flex-col max-w-sm'>
                        <input {...register('home')} placeholder='Domain Name*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.home ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                        <span className='p-1 text-sm text-red-500'>{errors?.home?.message}</span>
                    </div>
                    <div className='flex flex-col max-w-sm'>
                        <input {...register('avatarSrc')} placeholder='Avatar url*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.avatarSrc ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                        <span className='p-1 text-sm text-red-500'>{errors?.avatarSrc?.message}</span>
                    </div>
                    <div className='flex flex-col max-w-sm'>
                        <input {...register('title')} placeholder='Title*' className={`border-2 p-2 max-w-sm w-full rounded-lg dark:bg-black dark:text-white h-fit outline-0 ${errors?.title ? 'ring-red-500 ring-2' : 'ring-black dark:ring-white focus:ring-2'}`} />
                        <span className='p-1 text-sm text-red-500'>{errors?.title?.message}</span>
                    </div>
                </div>
                <Controller
                    control={control}
                    name="tags"
                    defaultValue={user.tags ?? []}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TagsEditor value={value ?? []} onChange={onChange} onBlur={onBlur} />
                    )}
                />
                <Controller
                    control={control}
                    name="intro"
                    defaultValue={user.intro ?? ''}
                    render={({ field: { onChange, onBlur, value, } }) => (
                        <MarkdownEditor placeholder='markdown' error={errors?.intro?.message} value={value ?? []} onChange={onChange} onBlur={onBlur} />
                    )}
                />
                <Controller
                    control={control}
                    name="about"
                    defaultValue={user.about ?? ''}
                    render={({ field: { onChange, onBlur, value, } }) => (
                        <MarkdownEditor placeholder='markdown' error={errors?.about?.message} value={value ?? []} onChange={onChange} onBlur={onBlur} />
                    )}
                />
                <button disabled={!isValid || isSubmitting ? true : false} className={`border-2 p-2 max-w-sm w-full rounded-lg  h-fit ${!isValid ? 'text-white bg-red-300' : ''} ${isSubmitting ? 'bg-slate-300' : 'hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'}`}>{user.id ? 'Update' : 'add'}</button>
            </form>
        </div>
    )
}
