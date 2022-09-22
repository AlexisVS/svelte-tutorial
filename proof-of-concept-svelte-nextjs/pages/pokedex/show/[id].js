import Head from "next/head";
import PokedexAppShow from "./pokedexAppShow.js";

export default function Pokedex() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Welcome to svelteJS and nextJS proof of concept"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <PokedexAppShow/>
            </main>
        </div>

    );
}
