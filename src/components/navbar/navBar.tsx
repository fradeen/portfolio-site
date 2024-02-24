import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from '../themeSwitcher/themeSwitcher'

export default function NavBar() {
    return (
        <div className='flex flex-wrap justify-between mx-2 px-2 w-full'>
            <Link href='/' className='hover:text-green-500 self-center text-2xl font-semibold px-2 w-3/12 flex justify-start'>
                Home
            </Link>
            <div className='w-3/12 px-2 flex justify-end'>
                <ThemeSwitcher />
            </div>
            <div className='hover:text-green-500 border-2 border-gray-500 px-2 my-2 sm:my-0 w-full sm:w-6/12 flex justify-evenly'>
                div 3
                {/*TODO: Add links for navigation */}
            </div>
        </div>
    )
}
