import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
function BlogPost() {
    const data = {
        title: 'Title',
        username: 'UserName',
        desc: 'Description',
        img: 'https://images.pexels.com/photos/18928507/pexels-photo-18928507.jpeg?cs=srgb&dl=pexels-jc-terry-18928507.jpg&fm=jpg&_gl=1*1k23gq8*_ga*MTk0MTAzNDU4NS4xNjk5ODcwMjAx*_ga_8JE65Q40S6*MTY5OTg3MDIwMC4xLjEuMTY5OTg3MTY0OS4wLjAuMA..',
        content: 'Content'
    }
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>
                        {data.desc}
                    </p>
                    <div className={styles.author}>
                        <Image
                            src={data.img}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{data.username}</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={data.img}
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {data.content}
                </p>
            </div>
        </div>
    );
}

export default BlogPost