import RenderMarkdown from '@/components/renderMarkdown/renderMarkdown'
import React from 'react'

export async function generateStaticParams() {
    return [{ articleId: '1' }, { articleId: '2' }]
}

export default function Article({ params: articleId }: { params: { articleId: string } }) {
    return (
        <div className='grow min-h-fit w-full self-center border-2 p-2 flex flex-col border-gray-500 justify-center'>
            <RenderMarkdown />
        </div>
    )
}
