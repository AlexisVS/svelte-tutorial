import styles from "../../styles/Home.module.css";
import Head from "next/head";
import PokedexApp from "./pokedexApp.js";

export default function Pokedex() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Welcome to svelteJS and nextJS proof of concept"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <PokedexApp/>
            </main>
        </div>

    );
}
