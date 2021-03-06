import Head from 'next/head'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from '@chakra-ui/react'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [session, loading] = useSession()

  function renderAuthControls() {
    if (loading)
      return (
        <Button isLoading colorScheme="blue" mt={4}>
          Iniciar sesión
        </Button>
      )
    if (session) {
      return (
        <Button onClick={() => signOut('google')} colorScheme="blue" mt={4}>
          Cerrar sesión
        </Button>
      )
    } else {
      return (
        <Button onClick={() => signIn('google')} colorScheme="blue" mt={4}>
          Iniciar sesión
        </Button>
      )
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NextAuth.js Spike</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/spikes.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NextAuth.js Spike</h1>
        <div>{renderAuthControls()}</div>
        {session && `${session.user.name} (${session.user.email})`}
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
