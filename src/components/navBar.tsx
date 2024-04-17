import Link from 'next/link'
import React, { useState } from 'react'
import HamburgerMenu from './hamburgerMenu'
import NavLinks from './navLinks'
import Image from 'next/image'

export default function NavBar({ home }: { home: string }) {
    return (
        <nav className='w-full max-w-screen-xl mx-auto p-3 sticky top-0 z-10 bg-white/80 dark:bg-black/80 flex gap-5 justify-between items-center'>
            <div className='flex gap-3'>
                <HamburgerMenu />
                <Link href='/' className='text-4xl font-semibold'>
                    {home}
                </Link>
            </div>
            <div className='hidden sm:flex gap-3 justify-around'>
                <NavLinks />
            </div>
        </nav>
    )
}
