'use client'
import React, { useRef } from 'react'
import { addCategory } from '@/lib/actions'
export default function AddCategory() {

    const formRef = useRef<HTMLFormElement>(null)

    function onFormSubmit(formData: FormData) {
        try { addCategory(formData) }
        catch (e) { }
        finally { formRef.current?.reset() }
    }
    return (
        <form ref={formRef} action={onFormSubmit} className='hidden group-hover:flex flex-col gap-y-3'>
            <label>Category Name</label>
            <input name='title' type='text' className='px-2 w-full rounded-lg ring-2 ring-gray-500 self-center dark:bg-default-dark' />
            <label>Image URL</label>
            <input name='imgURL' type='text' className='px-2 w-full rounded-lg ring-2 ring-gray-500 self-center dark:bg-default-dark ' />
            <button className='bg-green-500 text-white w-fit p-1 rounded-lg mb-5 self-center'>Add</button>
        </form>
    )
}
