import Link from 'next/link'
import React from 'react'
import HamburgerMenu from './hamburgerMenu'
import NavLinks from './navLinks'
import Image from 'next/image'

export default function NavBar({ home }: { home: string }) {
    return (
        <nav className='w-full max-w-screen-xl mx-auto p-3 sticky top-0 z-10 bg-white/80 dark:bg-black/80 flex gap-5 justify-between items-center mb-10 prose-img:m-0 prose-a:no-underline prose-headings:m-0'>
            <div className='flex gap-3'>
                <HamburgerMenu />
                <Link href='/' className='hidden sm:flex w-fit items-center gap-3'>
                    <Image src='/logo.svg' width={30} height={40} alt='logo' unoptimized className='hidden sm:block dark:invert' />
                    <h1>
                        {home}
                    </h1>
                </Link>
                <Link href='/' className='text-4xl font-semibold sm:hidden w-12 h-12 dark:invert flex items-center justify-center'>
                    <Image src='/logo.svg' width={30} height={40} alt='logo' unoptimized />
                </Link>
            </div>
            <div className='hidden sm:flex gap-3 justify-around items-center'>
                <NavLinks />
            </div>
        </nav>
    )
}
