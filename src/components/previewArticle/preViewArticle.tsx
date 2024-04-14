import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@prisma/client'
import cloudinaryLoader from '@/lib/loader'

export default function PreViewArticle({ article }: { article: Article }) {
    return (
        <Link href={`/article/${article.id}`} className='group min-w-78 w-full my-2 md:border-2 rounded-lg md:p-2 grid grid-cols-1 grid-rows-1 md:flex group-md:even:flex-row-reverse md:odd:flex-row-reverse md:self-center md:justify-between border-gray-500 hover:shadow-lg hover:shadow-inherit'>
            <div className='max-h-96 md:max-h-80 col-start-1 row-start-1 md:ml-1 aspect-video md:aspect-[4/3] rounded-lg overflow-hidden'>
                <Image
                    src='/sample'
                    width={1920}
                    height={1080}
                    loader={cloudinaryLoader}
                    alt="hero image"
                    className='w-full h-full '
                />
            </div>
            <div className='col-start-1 row-start-1 md:p-0 flex flex-col justify-end md:justify-start'>
                <div className='md:bg-inherit w-full p-2 md:p-0 bg-gray-500/50'>
                    <h1 className='text-3xl font-semibold'>{article.title}</h1>
                    <p className='text-2xl'>{article.intro}</p>
                    <span className='font-light hidden sm:block'>{article.brief}</span>
                    <span className='font-light group-hover:font-bold'> Know more...</span>
                </div>
            </div>

        </Link>
    )
}
