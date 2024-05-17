import prisma from '@/lib/db'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
    const user = await prisma.user.findFirstOrThrow({})
    return {
        title: `${user.name}'s Contact info`,
        openGraph: {
            title: `${user.name}'s Contact info`,
        },
        twitter: {
            title: `${user.name}'s Contact info`,
        }
    }
}

export default function ContactPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}
