import { auth } from '@/utilities/auth/auth'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

const AuthProvider = async ({ children }: { children: ReactNode }) => {
    let session = await auth()
    return (
        <SessionProvider session={session}>{children}</SessionProvider>
    )
}

export default AuthProvider