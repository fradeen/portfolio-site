import prisma from '@/lib/db'
import React from 'react'
import { Project, SocialMediaLink } from '@prisma/client'
import ProjectEditor from '@/components/projectEditor'
import { deleteMediaLink, deleteProject } from '@/lib/actions'
import MediaLinkForm from '@/components/mediaLinkForm'

// Dynamic segments not included in generateStaticParams will return a 404
export const dynamicParams = false

export async function generateStaticParams() {
    const mediaLinks = await prisma.socialMediaLink.findMany({ select: { id: true } })
    return [...mediaLinks, { id: 'new' }]
}


export default async function UpdateProject({ params }: { params: { id: string } }) {
    let mediaLink = {} as SocialMediaLink
    if (params.id !== 'new')
        mediaLink = await prisma.socialMediaLink.findFirstOrThrow({ where: { id: params.id } })
    return (
        <main className='customContainer justify-start flex-col prose dark:prose-invert md:prose-xl lg:prose-2xl'>
            <div className='w-full flex justify-between  my-10'>
                <h1 style={{ margin: 0 }}>{`${mediaLink.id ? 'Update Media Link' : 'Add Media Link'}`}</h1>
                {mediaLink.id && (
                    <form action={async () => {
                        'use server'
                        deleteMediaLink(mediaLink.id)
                    }
                    }>
                        <button className='rounded-lg p-2 border-2 w-full max-w-sm hover:bg-red-600/70 hover:text-white flex justify-center items-center'>
                            Delete
                        </button>
                    </form>
                )}

            </div>
            <MediaLinkForm link={mediaLink} />
        </main>
    )
}
