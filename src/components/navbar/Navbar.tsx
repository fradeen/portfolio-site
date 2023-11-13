import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

const links = [
    {
        id: "1",
        title: "Home",
        url: "/",
    },
    {
        id: "2",
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: "3",
        title: "Blog",
        url: "/blog",
    },
    {
        id: "4",
        title: "About",
        url: "/about",
    },
    {
        id: "5",
        title: "Contact",
        url: "/contact",
    },
    {
        id: "6",
        title: "Dashboard",
        url: "/dashboard",
    },
]
function Navbar() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Portfolio Site</Link>
            <div className={styles.links}>
                <ThemeSwitcher />
                {links.map((link) => (<Link id={link.id} href={link.url} className={styles.link}>{link.title}</Link>))}
                <button type='button' className={styles.logout}>Log Out</button>
            </div>
        </div>
    )
}

export default Navbar