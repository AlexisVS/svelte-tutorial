<svelte:head>
    <meta name="description" content="A pokeapi pokedex"/>
    <title>Pokedex</title>
</svelte:head>

<script>
    import {pokedex} from "./store.js";

    console.log($pokedex)
</script>

{#each $pokedex as {pokemon} (pokemon.name)}
    <div>
        {pokemon.name}
    </div>
{/each}
