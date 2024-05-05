'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLinks({ onClick, ariaHidden, tabIndex }: { onClick?: React.Dispatch<React.SetStateAction<boolean>>, ariaHidden?: boolean, tabIndex?: number }) {
    const links = [{ title: 'About', src: '/about' }, { title: 'Contact', src: '/contact' }]
    const pathname = usePathname()
    return (
        <>
            {links.map(link => {
                return !pathname.includes(link.src) ? (
                    <Link key={link.title} href={link.src} className='text-3xl hover:font-semibold w-fit h-fit' onClick={() => {
                        if (onClick)
                            onClick(false)
                    }}
                        aria-hidden={ariaHidden}
                        tabIndex={tabIndex}
                    >
                        {link.title}
                    </Link>
                ) : (
                    <div key={link.title} className='text-3xl font-semibold w-fit h-fit' aria-hidden={ariaHidden} tabIndex={tabIndex} >
                        {link.title}
                    </div>
                )
            })}
        </>
    )
}
