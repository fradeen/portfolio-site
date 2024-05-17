import prisma from '@/lib/db'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
    const user = await prisma.user.findFirstOrThrow({})
    return {
        title: `${user.name}'s Projects`,
        keywords: user.tags,
        openGraph: {
            title: `${user.name}'s Projects`,
        },
        twitter: {
            title: `${user.name}'s Projects`,
        },
    }
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}
