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
                    <div key={index} className='w-fit flex gap-2 rounded-full p-2 m-1 bg-black dark:bg-white text-white dark:text-black text-sm'>
                        <span className=''>{tag}</span>
                        <button type='button' onClick={() => onDelete(index)} className='size-5 p-1 rounded-full bg-red-500 flex justify-center items-center'>X</button>
                    </div>
                ))}
            </div>
            <div className='max-w-screen-sm flex justify-center items-center ring-2 ring-black dark:ring-white rounded-lg'>
                <input name='newtag' type='text' placeholder='add new tag' value={newTag} onChange={(event) => setNewTag(event.target.value)}
                    className='p-2 rounded-tl-lg rounded-bl-lg border-black border-2 dark:bg-black dark:text-white grow outline-0' />
                <button type='button' onClick={addTag} className='h-full rounded-tr-lg rounded-br-lg p-2 border-black border-2 bg-black dark:bg-white text-white dark:text-black' >Add</button>
            </div>
        </div>
    )
}
