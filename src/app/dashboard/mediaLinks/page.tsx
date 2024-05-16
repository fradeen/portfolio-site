import prisma from '@/lib/db'
import React from 'react'
import ContactCard from '@/components/contactCard'
import Link from 'next/link'

export default async function UpdateMediaLinks() {
    const mediaLinks = await prisma.socialMediaLink.findMany({})
    return (
        <main className='customContainer flex-col justify-start gap-20'>
            <h1 className='text-center'>Select Media link to Edit or Add new one.</h1>
            <div className='flex flex-col items-center gap-3'>
                <Link href='/dashboard/mediaLinks/new' className='h-full w-full max-w-screen-md' >
                    <div className={`w-full h-full min-w-80 max-w-screen-md border-2 rounded-lg p-3 flex gap-3 justify-between items-center ring-black hover:ring-2 `}>
                        <h1>Add new media link.</h1>
                    </div>
                </Link>
                {mediaLinks.map(link => (
                    <Link key={link.id} href={`/dashboard/mediaLinks/${link.id}`} className='h-full w-full max-w-screen-md' >
                        <ContactCard mediaLink={link} />
                    </Link>
                ))}
            </div>
        </main>
    )
}

