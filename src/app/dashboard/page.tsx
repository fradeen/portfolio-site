import UserUpdateForm from '@/components/userUpdateForm'
import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'

const updateCategories = ['User info', 'Social Media Links']
export default async function Dashboard() {
    const user = await prisma.user.findFirst({})
    const socialMediaLinks = await prisma.socialMediaLink.findMany({})
    return (
        <main className='w-full mx-auto p-3 grow flex gap-5 flex-col items-center'>
            <h1 className='w-full max-w-screen-xl text-5xl font-semibold'>Dashboard</h1>
            <div className='border-2'>
                {user ? (
                    <div className='flex gap-3'>
                        {updateCategories.map((category, index) => {
                            return (
                                <Link key={index} href='' className={`group max-w-xs min-w-sm p-3 rounded-lg border-2 flex gap-2 items-center`}>
                                    <p className='text-2xl font-light group-hover:font-normal' >{category}</p>
                                </Link>
                            )
                        })}
                    </div>
                ) : (
                    <>
                        <h2 className='mt-3 w-full text-3xl font-light'>No User found, pls add user info.</h2>
                        <Link href='' className={`group max-w-xs p-3 rounded-lg border-2 flex gap-2 items-center`}>
                            <p className='text-2xl font-light group-hover:font-normal' >Add user info.</p>
                        </Link>
                    </>
                )}
            </div>
            <div className='min-w-[1280px] grow max-h-screen w-fit border-2 overflow-y-auto'>
                <UserUpdateForm user={user} />
                {/* <div className='flex-1 flex flex-col items-center h-full overflow-y-auto gap-3'>
                </div> */}
            </div>
        </main>
    )
}