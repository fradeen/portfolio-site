import RenderMarkdown from '@/components/renderMarkdown/renderMarkdown'
import React from 'react'
import prisma from '@/lib/db'

export async function generateStaticParams() {
    const articles = await prisma.article.findMany({
        select: {
            id: true
        }
    })
    return articles.map(article => { return { articleId: article.id } })
}

export default async function Article({ params: { articleId } }: { params: { articleId: string } }) {
    const article = await prisma.article.findUniqueOrThrow({
        where: {
            id: articleId
        },
        select: {
            description: true
        }
    })
    return (
        <div className='customContainer flex flex-col justify-center'>
            <RenderMarkdown markdown={article.description} />
        </div>
    )
}
