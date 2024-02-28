import React from 'react'
import PreViewArticle from '@/components/previewArticle/preViewArticle'

export async function generateStaticParams() {
    return [{ categoryId: '1' }, { categoryId: '1' }]
}

const projects = [1, 2, 3]
export default function page({ params: { categoryId } }: { params: { categoryId: string } }) {
    return (

        <div className='grow min-h-fit w-full self-center border-2 p-2 flex flex-col border-gray-500 justify-center'>
            {projects.map(project => {
                return (
                    <PreViewArticle key={project} />
                )
            })}
        </div>

    )
}
