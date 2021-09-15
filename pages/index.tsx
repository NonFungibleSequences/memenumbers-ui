import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Memeonacci App</title>
                <meta name="description" content="eth" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {
                        "You don't have to be a mathematician to have a feel for numbers."
                    }
                </h1>
                <p className={styles.description}>- John Forbes Nash, Jr.</p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://www.discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Discord
                </a>
                <a
                    href="https://www.github.com/NonFungibleSequences"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </footer>
        </div>
    )
}

export default Home
