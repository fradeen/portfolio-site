import prisma from '@/lib/db'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
    const project = await prisma.project.findFirstOrThrow({})
    return {
        title: project.title,
        keywords: project.tags
    }
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}
