import prisma from '@/lib/db'
import React from 'react'
import { deleteMediaLink } from '@/lib/actions'
import MediaLinkForm from '@/components/mediaLinkForm'
import { mediaLinkType } from '@/lib/zodSchemas'

// Dynamic segments not included in generateStaticParams will return a 404
export const dynamicParams = false

export async function generateStaticParams() {
    const mediaLinks = await prisma.socialMediaLink.findMany({ select: { id: true } })
    return [...mediaLinks, { id: 'new' }]
}


export default async function UpdateMediaLink(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    let mediaLink = {} as mediaLinkType
    if (params.id !== 'new')
        mediaLink = await prisma.socialMediaLink.findFirstOrThrow({ where: { id: params.id } })
    return (
        <main className='customContainer justify-start flex-col relative'>
            <div className='w-full flex justify-between '>
                <h1>{`${mediaLink.id ? 'Update Media Link' : 'Add Media Link'}`}</h1>
                {mediaLink.id && (
                    <form action={deleteMediaLink.bind(null, mediaLink.id)}>
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
