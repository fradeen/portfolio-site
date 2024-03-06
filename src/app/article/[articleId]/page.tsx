import RenderMarkdown from '@/components/renderMarkdown/renderMarkdown'
import React from 'react'

export async function generateStaticParams() {
    return [{ articleId: '1' }, { articleId: '2' }]
}

export default function Article({ params: articleId }: { params: { articleId: string } }) {
    return (
        <div className='customContainer flex flex-col justify-center'>
            <RenderMarkdown markdown='' />
        </div>
    )
}
