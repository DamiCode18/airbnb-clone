import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Rooms from "./components/Rooms";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb clone application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl">Airbnb Clone</h1>
      <Rooms />
    </div>
  )
}

export default Home
