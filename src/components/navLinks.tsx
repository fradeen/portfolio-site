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
                return !pathname.endsWith(link.src) ? (
                    <Link key={link.title} href={link.src} className='w-fit h-fit' onClick={() => {
                        if (onClick)
                            onClick(false)
                    }}
                        aria-hidden={ariaHidden}
                        tabIndex={tabIndex}
                    >
                        <h3>
                            {link.title}
                        </h3>
                    </Link>
                ) : (
                    <h3 key={link.title} className='w-fit h-fit text-gray-400' aria-hidden={ariaHidden} tabIndex={tabIndex} >
                        {link.title}
                    </h3>
                )
            })}
        </>
    )
}
