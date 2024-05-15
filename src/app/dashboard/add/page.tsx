'use client'
import React, { useState } from 'react'
import RenderMarkdown from '@/components/renderMarkdown'
import { useDebounced, useThrottled } from '@/lib/hooks'
import { User } from '@prisma/client'


export default function AddArticle() {
    const [markdown, setMarkdown] = useState('')
    const [currentInput, setCurrentInput] = useState('')
    useDebounced(() => {
        setMarkdown(currentInput)
    }, [currentInput], 1000)

    let user: User

    const markdown1 = `
    

# Lorem ipsum Adipisicing occaecat qui laboris do consectetur..

~~~js
console.log('hello')
function hello(){
    return 'hello'
}
~~~

::hr{.red}
    
A :i[lovely] language know as :abbr[HTML]{title="HyperText Markup Language"}.


dfkgjaerjlksdivbhgegbhfvf sedmfgnsejlgvse segeghehe ejkghwehgweuogh wejhweughe ergherh  rfhaerheh

::youtube[Video of a cat in a box]{#01ab2cd3efg}

# helllo
:::center{.max-w-screen-sm}

![alt text](/fardeen, "fardeen")

:::

:::center{.custom-class}

:::Carousel

![alt text](/fardeen, "fardeen")

![alt text](/github.svg, "fardeen")

:::

    `
    return (
        <main className='min-w-[1280px] h-screen w-full flex gap-2'>
            <textarea className='flex-1 w-full border-2 p-3'
                onChange={(event) => {
                    setCurrentInput(event.target.value)
                }}
            />
            {/* <div className='flex-1 flex flex-col items-center h-full overflow-y-auto'>
                <h1 className='w-full text-5xl font-semibold'>{`${user ? 'Update' : 'Add'} user info.`}</h1>
                <form data-static-form-name='contact' className='border-2 grow p-3 w-full max-w-screen-md grid grid-cols-2 auto-rows-max gap-3'>
                    <input name='name' type='text' required placeholder='User Name*' value={user?.name} className='border-2 p-2 max-w-xs w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='email' type='text' required placeholder='Domain Name*' value={user?.home} className='border-2 p-2 max-w-xs w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='subject' type='text' required placeholder='Avatar url*' value={user?.avatarSrc} className='border-2 p-2 max-w-xs w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <input name='subject' type='text' required placeholder='Title*' value={user?.title} className='border-2 p-2 max-w-xs w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    <div className='col-span-2 w-full'>
                        <div className='w-full'>
                            {user?.tags.map((tag, index) => (
                                <div key={index} className='w-fit bg-black dark:bg-white text-white dark:text-black font-thin text-xs'>
                                    <span>{tag}</span>
                                    <button className='hover:text-red-500'>X</button>
                                </div>
                            ))}
                        </div>
                        <input name='subject' type='text' required placeholder='Title*' value={user?.title} className='border-2 p-2 max-w-xs w-full rounded-lg focus:border-3 dark:bg-black dark:text-white h-fit' />
                    </div>
                    <textarea name='message' required placeholder='Intro*' value={user?.intro} className='border-2 p-2 col-span-2 w-full rounded-lg focus:border-3 dark:bg-black dark:text-white focus-within:h-screen resize-none' />
                    <textarea name='message' required placeholder='About*' value={user?.about} className='border-2 p-2 col-span-2 w-full rounded-lg focus:border-3 dark:bg-black dark:text-white focus-within:h-screen resize-none' />
                    <button type='submit' className='border-2 p-2 max-w-xs w-full rounded-lg hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white col-span-2 h-fit'>Submit</button>
                </form>
            </div> */}
            <div className='flex-1 border-2 customContainer block prose md:prose-xl dark:prose-invert'>
                <RenderMarkdown markdown={markdown} />
            </div>
        </main>
    )
}
