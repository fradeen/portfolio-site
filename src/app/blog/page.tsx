import React from 'react'
import PreViewArticle from '@/components/previewArticle/preViewArticle'
import prisma from '@/lib/db'

export default async function Blog() {
    const blogs = await prisma.article.findMany({
        where: {
            type: 'blog'
        },
        include: {
            Category: false
        }
    })
    return (

        <div className='customContainer flex flex-col justify-center'>
            {blogs.map(blog => {
                return (
                    <PreViewArticle key={blog.id} article={blog} />
                )
            })}
        </div>

    )
}
