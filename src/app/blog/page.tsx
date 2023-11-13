import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";


function Blog() {
    let item = {
        id: 'abc',
        img: 'https://images.pexels.com/photos/18954748/pexels-photo-18954748.jpeg?cs=srgb&dl=pexels-qiang-lai-18954748.jpg&fm=jpg&w=8394&h=5596&_gl=1*1owk8jj*_ga*MTk0MTAzNDU4NS4xNjk5ODcwMjAx*_ga_8JE65Q40S6*MTY5OTg3MDIwMC4xLjEuMTY5OTg3MTA1Ny4wLjAuMA..',
        title: 'Title',
        desc: 'description'
    }
    return (
        <div className={styles.mainContainer}>
            <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
                <div className={styles.imageContainer}>
                    <Image
                        src={item.img}
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.desc}>{item.desc}</p>
                </div>
            </Link>

        </div>
    );
};

export default Blog;