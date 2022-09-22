import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Welcome to svelteJS and nextJS proof of concept"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.home}>
                <h1>
                    Welcome to svelteJS and nextJS proof of concept
                </h1>
                <nav className={styles.home__nav}>
                    <a href="/pokedex">Pokedex</a>
                </nav>
            </main>
        </div>
    )
}
