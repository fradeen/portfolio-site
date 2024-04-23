import prisma from '@/lib/db'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
    const user = await prisma.user.findFirstOrThrow({})
    return {
        title: `About ${user.name}`,
    }
}

export default function AboutPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}
