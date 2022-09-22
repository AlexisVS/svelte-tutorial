import {useEffect, useRef} from "react";
import PokedexAppComponent from './index/+page.svelte';

function pokedexApp() {
    const pokemonAppRef = useRef();

    useEffect(() => {
        const component = new PokedexAppComponent({
            target: pokemonAppRef.current,
        });

        return () => {
            component.$destroy();
        }

    }, [pokemonAppRef]);

    return <div ref={pokemonAppRef}></div>
}

export default pokedexApp;
