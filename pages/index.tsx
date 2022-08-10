import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Wall from '../components/Wall';

const Home: NextPage = () => {
  return (
    <>
      <main className={`${styles.main} `} >
        <LeftSidebar />
        <Wall />
        <RightSidebar />
      </main>
    </>

  )
}

export default Home
