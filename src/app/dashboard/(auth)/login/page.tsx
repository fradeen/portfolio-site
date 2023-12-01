'use client'
import React from 'react'
import styles from './page.module.css'
import { signIn, signOut } from 'next-auth/react'

function Login() {
    return (
        <div className={styles.container}>
            <button onClick={async () => signIn('google')} >Login with google</button>
            <button onClick={() => signOut()} >Logout</button>
        </div>
    )
}

export default Login