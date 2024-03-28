import React from 'react'
import PreViewArticle from '@/components/previewArticle/preViewArticle'
import prisma from '@/lib/db'
import Link from 'next/link'
export async function generateStaticParams() {
    const categories = await prisma.category.findMany({
        select: {
            id: true
        }
    })
    return categories.map(category => { return { categoryId: category.id } })
}

export default async function page({ params: { categoryId } }: { params: { categoryId: string } }) {
    const category = await prisma.category.findUniqueOrThrow({
        where: {
            id: categoryId
        },
        include: {
            articles: true
        }
    })
    return (
        <div className='customContainer flex flex-col justify-center'>
            <div className='min-h-fit w-full border-2 border-gray-500 p-2 text-4xl font-semibold'>
                Category: {category.title}
            </div>
            <div className=' min-h-fit w-full border-2 p-2 flex flex-col border-gray-500 '>
                {category.articles.map(article => {
                    return (
                        <PreViewArticle article={article} key={article.id} />
                    )
                })}
                <div className='self-center my-2'>
                    <Link href={{ pathname: '/article/add', query: { categoryId: category.id, type: 'project' } }} className='bg-green-500 text-white text-2xl hover:font-semibold w-fit p-1 rounded-lg mb-5 self-center'>Add Project</Link>
                </div>
            </div>
        </div>
    )
}
