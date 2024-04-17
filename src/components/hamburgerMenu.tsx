'use client'
import React, { useState } from 'react'
import NavLinks from './navLinks'

export default function HamburgerMenu() {
    const [isSideBarOpen, setSidebar] = useState(false)
    return (
        <>
            <button
                className={`z-20 ${isSideBarOpen ? '' : 'sm:hidden'} flex flex-col h-12 w-12 border-2 border-black dark:border-white rounded justify-center items-center`}
                onClick={() => setSidebar(prev => !prev)}
            >
                <div
                    className={`genericHamburgerLine ${isSideBarOpen
                        ? "rotate-45 translate-y-3"
                        : ""
                        } opacity-100`}
                />
                <div
                    className={`genericHamburgerLine ${isSideBarOpen ? "opacity-0" : "opacity-100"
                        }`}
                />
                <div
                    className={`genericHamburgerLine ${isSideBarOpen
                        ? "-rotate-45 -translate-y-3"
                        : ""
                        } opacity-100`}
                />
            </button>
            <section role='nav-overlay' data-open={isSideBarOpen ? 'true' : 'false'} className={`no-doc-scroll absolute inset-y-0 left-0 w-full h-screen overscroll-none ${isSideBarOpen ? 'flex' : 'hidden'}`}  >
                <div className='bg-white/80 dark:bg-black/80 min-w-fit overscroll-none pt-40 px-3 flex flex-col justify-start gap-7'>
                    <NavLinks onClick={setSidebar} />
                </div>
                <div className='bg-transparent grow' onClick={() => setSidebar(false)} ></div>
            </section >
        </>
    )
}
