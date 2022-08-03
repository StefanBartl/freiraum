import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>WKD || APLHA FREI:raum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>FREI:raum</h1>
          <p>Das Netzwerk der Freundschaft & Solidarität.</p>
        </header>
      </main>

    </div>
  )
}

export default Home
