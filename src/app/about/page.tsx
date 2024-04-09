import React from 'react'
import Link from 'next/link'
import prisma from '@/lib/db'
import RenderMarkdown from '@/components/renderMarkdown/renderMarkdown'

export default async function About() {
    const userInfo = await prisma.user.findFirstOrThrow()
    return (
        <div className='customContainer'>
            <div className='mb-5'>
                <RenderMarkdown markdown={userInfo.about} />
            </div>
            <div className='w-full flex justify-around'>
                <Link href={{ pathname: '/about/update', query: { id: userInfo.id } }} className='text-green-500 w-fit p-1 rounded-lg mb-5 self-center ring-1 ring-green-500'>Edit Info</Link>
                <Link href='/portfolio' className='bg-green-500 text-white w-fit p-1 rounded-lg mb-5 self-center'>See My Works</Link>
            </div>
        </div>
    )
}
