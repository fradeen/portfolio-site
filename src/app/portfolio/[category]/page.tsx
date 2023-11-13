import React from 'react'
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';
function Category({ params }: { params: { category: string } }) {
    console.log(params.category);
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Title</h1>
                    <p className={styles.desc}>Description</p>
                    <Button text='See More' url='#' />
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img}
                        fill={true}
                        src={"https://images.pexels.com/photos/18457182/pexels-photo-18457182.jpeg?cs=srgb&dl=pexels-mehmet-turgut-kirkgoz-18457182.jpg&fm=jpg&w=3456&h=5184&_gl=1*3tvpur*_ga*MTk0MTAzNDU4NS4xNjk5ODcwMjAx*_ga_8JE65Q40S6*MTY5OTg3MDIwMC4xLjEuMTY5OTg3MDIxMC4wLjAuMA.."}
                        alt='' />
                </div>
            </div>
        </div>
    )
}

export default Category