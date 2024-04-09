import React from 'react'
import PreViewArticle from '@/components/previewArticle/preViewArticle'
import prisma from '@/lib/db'
import Link from 'next/link'

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
            <div className='self-center my-2'>
                <Link href={{ pathname: '/article/add', query: { type: 'blog' } }} className='bg-green-500 text-white text-2xl hover:font-semibold w-fit p-1 rounded-lg mb-5 self-center'>Add Blog</Link>
            </div>
        </div>

    )
}
