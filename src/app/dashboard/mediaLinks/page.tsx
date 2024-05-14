import prisma from '@/lib/db'
import React from 'react'
import ContactCard from '@/components/contactCard'
import Link from 'next/link'

export default async function UpdateMediaLinks() {
    const mediaLinks = await prisma.socialMediaLink.findMany({})
    return (
        <main className='w-full max-w-screen-xl mx-auto p-3 grow flex gap-5 items-center flex-col justify-start prose dark:prose-invert md:prose-xl lg:prose-2xl'>
            <h1>Select Media link to Edit or Add new one.</h1>
            <Link href='/dashboard/mediaLinks/new' className='h-full w-full max-w-screen-md' >
                <div className={`w-full h-full min-w-80 max-w-screen-md border-2 rounded-lg p-3 flex gap-3 justify-between items-center ring-black hover:ring-2 `}>
                    <h1 style={{ margin: 0 }}>Add new media link.</h1>
                </div>
            </Link>
            {mediaLinks.map(link => (
                <Link key={link.id} href={`/dashboard/mediaLinks/${link.id}`} className='h-full w-full max-w-screen-md' >
                    <ContactCard mediaLink={link} />
                </Link>
            ))}
        </main>
    )
}

