import {useEffect, useRef} from "react";
import PokedexAppComponent from './page.svelte';

function pokedexAppIndex() {
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

export default pokedexAppIndex;
