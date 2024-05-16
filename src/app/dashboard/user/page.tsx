import UserUpdateForm from '@/components/userUpdateForm'
import prisma from '@/lib/db'
import React from 'react'

export default async function UpdateUser() {
    const user = await prisma.user.findFirst({})
    return (
        <main className='w-full max-w-screen-2xl mx-auto p-3 grow flex gap-5 items-center flex-col justify-start'>
            <UserUpdateForm user={user} />
        </main>
    )
}
