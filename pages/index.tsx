import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from './components/footer';
import Header from './components/header';
import Rooms from "./components/Rooms";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airbnb-Dhrey</title>
        <meta name="description" content="Airbnb clone application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Rooms />
      <Footer />
    </div>
  )
}

export default Home
