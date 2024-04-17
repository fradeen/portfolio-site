'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLinks({ onClick }: { onClick?: React.Dispatch<React.SetStateAction<boolean>> }) {
    const links = [{ title: 'About', src: '/about' }, { title: 'Contact', src: '/contact' }]
    const pathname = usePathname()
    return (
        <>
            {links.map(link => {
                return !pathname.includes(link.src) ? (
                    <Link key={link.title} href={link.src} className='text-3xl hover:font-semibold w-fit h-fit' onClick={() => {
                        if (onClick)
                            onClick(false)
                    }}>
                        {link.title}
                    </Link>
                ) : (
                    <div key={link.title} className='text-3xl font-semibold w-fit h-fit' >
                        {link.title}
                    </div>
                )
            })}
        </>
    )
}
