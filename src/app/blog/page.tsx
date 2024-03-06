import React from 'react'
import PreViewArticle from '@/components/previewArticle/preViewArticle'

export async function generateStaticParams() {
    return [{ categoryId: '1' }, { categoryId: '1' }]
}

const projects = [1, 2, 3]
export default function page({ params: { categoryId } }: { params: { categoryId: string } }) {
    return (

        <div className='customContainer flex flex-col justify-center'>
            {projects.map(project => {
                return (
                    <PreViewArticle key={project} />
                )
            })}
        </div>

    )
}
