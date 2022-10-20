import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb clone application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl">God abeg o!!!</h1>
    </div>
  )
}

export default Home
