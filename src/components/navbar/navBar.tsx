'use client'
import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from '../themeSwitcher/themeSwitcher'
import { usePathname } from 'next/navigation'

const navigationLinks = [
    {
        id: 1,
        href: '/portfolio',
        title: 'Portfolio'
    },
    {
        id: 2,
        href: '/contact',
        title: 'Contact'
    },
    {
        id: 3,
        href: '/blog',
        title: 'Blog'
    },
    {
        id: 4,
        href: '/about',
        title: 'About Me'
    },

]

export default function NavBar() {
    const pathname = usePathname()
    return (
        <div className='flex flex-wrap justify-between mx-2 px-2 w-full'>
            <Link href='/' className='hover:text-green-500 self-center text-3xl font-semibold px-2 w-3/12 flex justify-start'>
                Home
            </Link>
            <div className='w-3/12 px-2 flex justify-end'>
                <ThemeSwitcher />
            </div>
            <div className=' px-2 my-2 sm:my-0 w-full sm:w-6/12 flex justify-between sm:justify-evenly items-center text-lg'>
                {navigationLinks.map(navLink => {
                    if (pathname === navLink.href)
                        return (
                            <span className='text-green-500' key={navLink.id}>{navLink.title}</span>
                        )
                    else
                        return (
                            <Link className='hover:text-green-500 hover:text-xl' href={navLink.href} key={navLink.id}>{navLink.title}</Link>
                        )
                })}
            </div>
        </div>
    )
}
