import {useEffect, useRef} from "react";
import PokedexShowPage from './page.svelte';

function pokedexAppShow() {
    const pokemonAppShowRef = useRef();

    useEffect(() => {
        const component = new PokedexShowPage({
            target: pokemonAppShowRef.current,
        });

        return () => {
            component.$destroy();
        }

    }, [pokemonAppShowRef]);

    return <div ref={pokemonAppShowRef}></div>
}

export default pokedexAppShow;
