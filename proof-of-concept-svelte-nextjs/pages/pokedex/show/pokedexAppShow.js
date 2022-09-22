import {useEffect, useRef} from "react";
import PokedexShowPage from './page.svelte';
import {useRouter} from "next/router";

function pokedexAppShow() {
    const pokemonAppShowRef = useRef();
    const router = useRouter();
    const routeParamId = router.query.id;

    useEffect(() => {
        const component = new PokedexShowPage({
            target: pokemonAppShowRef.current,
        });
        component.$set({id: routeParamId})

        return () => {
            component.$destroy();
        }

    }, [pokemonAppShowRef]);

    return <div ref={pokemonAppShowRef}></div>
}

export default pokedexAppShow();
