<script>
    export let id;

    const getPokemon = async () => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        let data = await response.json();
        if (response.ok) {
            return pokemon = data;
        }
        return false
    }

    let pokemon = getPokemon();

    const randomColor = () => {
        const number = () => Math.floor(Math.random() * 255);

        const red = number();
        const green = number();
        const blue = number();

        return `rgb(${red}, ${green}, ${blue})`;
    }

    console.log(randomColor())
    setTimeout(() => {
        console.log(pokemon)
    }, 3000);

</script>

{#await pokemon}
    <strong>Wait ...</strong>
{:then pokemon}
    <section class="pokemon">
        <div class="pokemon__image">
            <img alt={'Pokemon: ' + pokemon.forms[0].name}
                 src={pokemon.sprites.other['official-artwork'].front_default}>
        </div>
        <div class="pokemon__details">
            <h1 class="pokemon__details__name">{pokemon.forms[0].name}</h1>
            <div class="pokemon__details__type">
                <h2 class="pokemon__details__type__title">Types:</h2>
                <div class="pokemon__details__type__item">
                    {#each pokemon.types as item (item.type.name)}
                        <span style="background-color: {randomColor()}">{item.type.name}</span>
                    {/each}
                </div>
            </div>
        </div>
        <div class="pokemon__details__base-stats">
            {#each pokemon.stats as item (item.stat.name)}
                <div class="pokemon__details__base-stats__item">
                    <span class="pokemon__details__base-stats__item__label">{item.stat.name}: </span>
                    <span class="pokemon__details__base-stats__item__value">{item.base_stat}</span>
                </div>
            {/each}
        </div>
    </section>
{/await}

<style>
    :root {
        --color-pokedex-pokemon-window: rgba(255, 255, 255, 0.7);
        --color-pokedex-pokemon-border-radius: 25px;
    }

    section > div {
        background-color: var(--color-pokedex-pokemon-window);
        border-radius: var(--color-pokedex-pokemon-border-radius);
    }

    .pokemon {
        margin-left: 15px;
        margin-right: 15px;
        display: grid;
        grid-auto-rows: auto;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 100px;
        margin-bottom: 100px;
    }

    .pokemon__image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pokemon__image > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .pokemon__details {
        padding: 0 20px 0 20px;
        box-sizing: border-box;
    }

    .pokemon__details__name {
        font-size: 3em;
        text-transform: capitalize;
        margin-bottom: 0;
    }

    .pokemon__details__type {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
    }

    .pokemon__details__type__title {
        font-size: 2em;
        font-weight: 600;
        color: var(--color-pokedex-text);
    }

    .pokemon__details__type__item {
        display: inline-flex;
    }

    .pokemon__details__type {
        display: inline-flex;

    }

    .pokemon__details__type__item > span {
        margin: 0 10px;
        text-shadow: 0 0 3px black;
        border-radius: 3px;
        padding: 8px 20px;
        color: white;
        vertical-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        text-transform: capitalize;
    }

    .pokemon__details__base-stats {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 10px 0;
    }

    .pokemon__details__base-stats__item {
        padding: 10px 20px;
        border-radius: 99999px;
        background-color: white;
        margin: 5px 5px;
        font-size: 0.9em;
        font-weight: 600;
        color: var(--color-pokedex-text);
    }

    .pokemon__details__base-stats__item__label {
        text-transform: uppercase;
    }

    .pokemon__details__base-stats__item__value {
        font-weight: 800;
    }

    @media screen and (min-width: 750px) {
        .pokemon {
            grid-template-columns: 1fr 1fr;
            margin-bottom: 0;
            margin-top: 0;
        }

        .pokemon__details__type {
            margin-top: 50px;
        }

        .pokemon__details__base-stats {
            grid-column: 1 / 3;
        }
    }
</style>
