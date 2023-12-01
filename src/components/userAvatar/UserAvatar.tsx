'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import Avatar from 'react-avatar';
import styles from './userAvatar.module.css'

const UserAvatar = () => {
    let session = useSession();
    //console.log(session)
    return (
        session.status === 'authenticated' ?
            <div className={styles.links}>
                <Avatar
                    name={(session.data.user?.name) ? (session.data.user?.name) : undefined}
                    round={true}
                    size={'40'}
                    color={'#53c28b'}
                    textSizeRatio={1.75}
                />
                <button
                    type='button'
                    onClick={() => signOut()}
                    className={styles.logout}
                >Log Out</button>
            </div> : <button
                type='button'
                onClick={() => signIn()}
                className={styles.logout}
            >Login</button>
    )
}

export default UserAvatar