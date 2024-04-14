import Link from 'next/link'
import React from 'react'

export default function NavBar({ home }: { home: string }) {
    return (
        <nav className='w-full max-w-screen-xl mx-auto p-3 sticky top-0 z-10 bg-white/80 dark:bg-black/80 flex gap-5 justify-between items-center'>
            <Link href='/' className='text-4xl font-semibold'>
                {home}
            </Link>
        </nav>
    )
}
