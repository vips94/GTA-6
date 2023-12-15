import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import NavBar from '@/components/nav-bar';
import HomePage from '@/components/pages/home';
import Media from '@/components/pages/media';
import Characters from '@/components/pages/characters';
import About from '@/components/pages/about';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <NavBar/>
        <HomePage/>
        <Media/>
        <Characters/>
        <About/>
      </main>
    </>
  )
}
