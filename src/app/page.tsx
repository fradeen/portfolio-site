import Image from 'next/image';
import styles from './page.module.css'
import HeroImage from 'public/hero.png';
import Button from '@/components/button/Button';
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Portfolio Site tag.
        </h1>
        <p className={styles.desc}>
          Protfolio site dexcription
        </p>
        <Button url="/portfolio" text="See Works" />
      </div>
      <div className={styles.item}>
        <Image src={HeroImage} alt="hero image" className={styles.img} />
      </div>
    </div>
  )
}

export default Home
