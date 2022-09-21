import {writable} from "svelte/store";

const getPokedex = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
    const data = await response.json();
    let pokedex = data.results
    return createPokedex(pokedex);
}

const createPokedex = (data) => {
    const {subscribe, set, update} = writable(data);

    return {
        subscribe,
        store: (pokemon) => set(pokemon),
        update: (pokemon) => update(pokedex => pokedex.forEach(pokemonInPokedex => {
                if (pokemonInPokedex.id === pokemon.id) {
                    return pokemon;
                }
            })
        ),
        delete: (pokemonId) => update(pokedex => pokedex.filter(pokemon => pokemon.id !== pokemonId))
    }
}

export const pokedexStore = await getPokedex();
