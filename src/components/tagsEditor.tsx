import React, { useState } from 'react'

export default function TagsEditor({ tags, onDelete, onAdd }: { tags: string[] | undefined, onDelete: (index: number) => void, onAdd: (tag: string) => void }) {
    const [newTag, setNewTag] = useState<string>('')
    function addTag() {
        if (!newTag || !newTag.trim())
            return
        onAdd(newTag)
        setNewTag('')
    }
    return (
        <div className='col-span-2 w-full flex flex-col gap-3'>
            <div className='w-full flex flex-wrap'>
                {tags?.map((tag, index) => (
                    <div key={index} className='w-fit group flex gap-1 rounded-full p-2 m-1 bg-black dark:bg-white text-white dark:text-black text-xs'>
                        <span className=''>{tag} </span>
                        <button type='button' onClick={() => onDelete(index)} className='size-4 p-1 rounded-full bg-red-500 flex justify-center items-center'>X</button>
                    </div>
                ))}
            </div>
            <div className='max-w-sm border-2 rounded-lg focus-within:ring-2 focus-within:border-0 focus-within:ring-black focus-within:dark:ring-white ring-black px-3 flex justify-center items-center gap-2'>
                <input name='newtag' type='text' placeholder='Tags' value={newTag} onChange={(event) => setNewTag(event.target.value)}
                    className='outline-0 ring-0 border-0 p-2 rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit grow' />
                <button type='button' onClick={addTag} className='rounded-full px-2 bg-black dark:bg-white text-white dark:text-black' >Add</button>
            </div>
        </div>
    )
}
