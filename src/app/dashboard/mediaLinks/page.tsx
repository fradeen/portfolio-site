import MediaLinksEditor from '@/components/mediaLinksEditor'
import prisma from '@/lib/db'
import React from 'react'

export default async function UpdateMediaLinks() {
    const mediaLinks = await prisma.socialMediaLink.findMany({})
    return (
        <main className='w-full mx-auto p-3 grow flex gap-5 flex-col items-center'>
            <div className='min-w-[1280px] grow max-h-screen w-fit border-2 overflow-y-auto'>
                <MediaLinksEditor socialMediaLinks={mediaLinks} />
            </div>
        </main>
    )
}

