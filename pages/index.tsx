import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} bg-primary `} >

      <header className={`${styles.header} `} >
          <h1 className=''>FREI:raum</h1>
          <p className=''>Das Netzwerk der Freundschaft & Solidarität.</p>
      </header>

      <main className={`${styles.main} row`}>

        <div className={styles.md1}>
          <h2>Abatz 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas explicabo vero alias atque labore, unde optio iusto, commodi, mollitia culpa facere distinctio dolorem non.</p>
        </div>

        <div className={styles.mainDiv2}>
          <h2 className={styles.mdh2}>Absatz 2</h2>
          <p className={styles.mdp2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit, aliquid hic laboriosam eum quibusdam laborum asperiores ullam repudiandae porro fugiat possimus aspernatur harum. Ipsa nam saepe odit sequi expedita.</p>
        </div>

      </main>


    </div>
  )
}

export default Home
