import UserUpdateForm from '@/components/userUpdateForm'
import prisma from '@/lib/db'
import React from 'react'

export default async function UpdateUser() {
    const user = await prisma.user.findFirst({})
    return (
        <main className='w-full mx-auto p-3 grow flex gap-5 flex-col items-center'>
            <div className='min-w-[1280px] grow max-h-screen w-fit border-2 overflow-y-auto'>
                <UserUpdateForm user={user} />
                {/* <div className='flex-1 flex flex-col items-center h-full overflow-y-auto gap-3'>
                </div> */}
            </div>
        </main>
    )
}
