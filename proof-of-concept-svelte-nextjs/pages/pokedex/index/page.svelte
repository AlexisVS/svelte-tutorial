<svelte:head>
    <meta name="description" content="A pokeapi pokedex"/>
    <title>Pokedex</title>
</svelte:head>

<script>
    import {pokedexStore} from "./store.js";
    import PokedexLayout from '../layout.svelte';
    import Card from "./Card.svelte";

    console.log($pokedexStore)
</script>

<PokedexLayout>
    <h1 class="pokedex__title">Pokedex <span>Pokemon</span></h1>
    <section class="pokedex__screen">
        <div class="pokedex__screen__container">
            {#each $pokedexStore as pokemon, index (pokemon.name)}
                <Card name={pokemon.name} imageUri={`/images/pokemon/sprites/sprites/pokemon/${index + 1}.png`}
                      uri={pokemon.url}>
                    <svelte:fragment></svelte:fragment>
                </Card>
            {/each}
        </div>
    </section>
</PokedexLayout>

<style>
    .pokedex__title {
        -webkit-text-stroke: 0.07em #365eaa;
        font-size: min(10vw, 6em);
        color: #ffcc00;
        font-weight: 800;
        text-transform: uppercase;
        text-align: center;
    }

    .pokedex__screen {
        position: relative;
        min-width: 210px;
        width: 60vw;
        column-gap: 30px;
        row-gap: 40px;
        height: 60vh;
        overflow: scroll;
        display: flex;
        flex-direction: column;
    }

    .pokedex__screen__container {
        display: grid;
        gap: 15px;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        padding-right: 20px;
        padding-top: 20px;
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

