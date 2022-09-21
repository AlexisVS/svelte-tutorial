<svelte:head>
    <meta name="description" content="A pokeapi pokedex"/>
    <title>Pokedex</title>
</svelte:head>

<script>
    import {pokedexStore} from "./store.js";
    import pokedexLayout from '../+layout.svelte';
    import Card from "./Card.svelte";

    console.log($pokedexStore)
</script>

<pokedexLayout>
    <div class="pokedex__screen__container">
        {#each $pokedexStore as pokemon, index (pokemon.name)}
            <Card name={pokemon.name} imageUri={`/images/pokemon/sprites/sprites/pokemon/${index + 1}.png`}
                  uri={pokemon.url}>
                <svelte:fragment></svelte:fragment>
            </Card>
        {/each}
    </div>
</pokedexLayout>

<style>
    .pokedex__screen__container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        padding-right: 20px;
    }

    @media screen and (min-width: 550px) {
        .pokedex__screen__container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 850px) {
        .pokedex__screen__container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (min-width: 1024px) {
        .pokedex__screen__container {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media screen and (min-width: 1200px) {
        .pokedex__screen__container {
            grid-template-columns: repeat(5, 1fr);
        }
    }

    @media screen and (min-width: 1500px) {
        .pokedex__screen__container {
            grid-template-columns: repeat(6, 1fr);
        }
    }

    @media screen and (min-width: 1960px) {
        .pokedex__screen__container {
            grid-template-columns: repeat(7, 1fr);
        }
    }

    @media screen and (min-width: 2700px) {
        .pokedex__screen__container {
            grid-template-columns: repeat(8, 1fr);
        }
    }

    @media screen and (min-width: 3100px) {
        .pokedex__screen__container {
            grid-template-columns: repeat(9, 1fr);
        }
    }

</style>

