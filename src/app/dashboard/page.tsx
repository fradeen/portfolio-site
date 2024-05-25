import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
    return (
        <main className='customContainer flex-col justify-start'>
            <h1 className='w-full'>Dashboard</h1>
            <section className='flex grow justify-center items-center gap-3 text-center prose-a:no-underline'>
                <Link href='/dashboard/user' title='update user' className='border-2 size-96 hover:ring-2 ring-black rounded-lg flex justify-center items-center'>
                    <h2 >
                        Update User
                    </h2>
                </Link>
                <Link href='/dashboard/mediaLinks' title='add/update socila media links' className='border-2 size-96 hover:ring-2 ring-black rounded-lg flex justify-center items-center'>
                    <h2 >
                        Add/Update Social Media Links
                    </h2>
                </Link>
                <Link href='/dashboard/projects' title='add/update projects' className='border-2 size-96 hover:ring-2 ring-black rounded-lg flex justify-center items-center'>
                    <h2 >
                        Add/Update Projects
                    </h2>
                </Link>
            </section>
        </main>
    )
}