import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true} alt="" className={styles.img} />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Example header</h1>
                    <h2 className={styles.imgDesc}>example description</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}> Example Title</h1>
                    <p className={styles.desc}>Example description</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}> Example Title</h1>
                    <p className={styles.desc}>Example description</p>
                    <Button url="/contact" text="contact" />
                </div>
            </div>
        </div>
    )
}

export default About