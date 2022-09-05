import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import ClickableTile from '@components/ClickableTile'
import styles from '@styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <Header title="Projects" />

        <div className={styles.grid}>
          <ClickableTile title="TeaEngine" link="/projects/teaengine" text="A game engine wrote in Nelua and C"></ClickableTile>
          <ClickableTile title="TeaFS" link="/projects/teafs" text="A C library to manipulate the filesystem"></ClickableTile>
          <ClickableTile title="Teamviewer ARM Installer" link="/projects/teamviewer" text="A quick way to install Teamviewer on ARM, used in Pi Apps"></ClickableTile>
          <ClickableTile title="Bread" link="/projects/bread" text="A program so you can finally type `sudo make bread`. It will show a text-based image of bread"></ClickableTile>
          <ClickableTile title="Proto Pong" link="/projects/pong" text="A little C++ game"></ClickableTile>
          <ClickableTile title="UI Manager" link="/projects/ui" text="A way to make UI easily in Nelua using Raylib"></ClickableTile>
          <ClickableTile title="Event Manager" link="/project/event" text="A way to handle events in Nelua"></ClickableTile>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
