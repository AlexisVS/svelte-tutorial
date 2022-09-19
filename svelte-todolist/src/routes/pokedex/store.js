import {writable} from "svelte/store";

async function getPokedex() {
    return await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then(response => response.json())
        .then(response => response.results);
}

function createPokedex() {
    const pokedex = writable(getPokedex())


    const store = (pokemon) => pokedex.update(pokedex => {
        return pokedex = [...pokedex, pokemon]
    })

    const updatePokemon = (pokemon) => pokedex.update(pokedex => {
        return pokedex = pokedex.forEach(pokemonInPokedex => {
            if (pokemonInPokedex.id === pokemon.id) {
                return pokemon
            } else {
                return pokemonInPokedex
            }
        })
    })

    const deletePokemon = (pokemon) => pokedex.update(pokedex => {
        return pokedex = pokedex.filter(pokemonInPokedex => pokemonInPokedex.id !== pokemon.id)
    })

    return {
        ...pokedex,
        store,
        updatePokemon,
        deletePokemon
    }
}

export const pokedex = createPokedex();
