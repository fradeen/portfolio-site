import prisma from '@/lib/db'
import React from 'react'
import ContactCard from '@/components/contactCard'
import Link from 'next/link'

export default async function UpdateMediaLinks() {
    const mediaLinks = await prisma.socialMediaLink.findMany({})
    return (
        <main className='customContainer flex-col justify-start'>
            <h1>Select Media link to Edit or Add new one.</h1>
            <div className='flex flex-col items-center gap-3'>
                <div className='prose-a:no-underline prose-a:hover:underline'>
                    <Link href='/dashboard/mediaLinks/new' className='h-full w-full max-w-screen-md' >
                        <div className={`w-full min-w-80 max-w-screen-md border-2 rounded-lg p-5 flex gap-3 justify-between items-center ring-black hover:ring-2 prose-headings:m-0`}>
                            <h1>Add new media link.</h1>
                        </div>
                    </Link>
                </div>
                {mediaLinks.map(link => (
                    <div className='prose-a:no-underline prose-a:hover:underline w-full h-full min-w-80 max-w-screen-lg' key={link.id}>
                        <Link href={`/dashboard/mediaLinks/${link.id}`} >
                            <ContactCard mediaLink={link} />
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}

