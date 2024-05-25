import UserUpdateForm from '@/components/userUpdateForm'
import prisma from '@/lib/db'
import { User } from '@prisma/client'
import React from 'react'

export default async function UpdateUser() {
    const user = await prisma.user.findFirst({})
    return (
        <main className='max-w-screen-2xl mx-auto p-3 grow'>
            <UserUpdateForm user={user ?? {} as User} />
        </main>
    )
}
