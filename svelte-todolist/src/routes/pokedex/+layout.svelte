<section class="pokedex">
    <div class="pokedex__screen">
        <slot/>
    </div>
</section>

<style>
    :root {
        --color-pokedex-bg: #e84848;
        --color-pokedex-screen-border: #e7e7e7;
        --color-pokedex-buttons-primary: #23b1c8;
        --color-pokedex-buttons-secondary: #fded6c;
        --color-pokedex-buttons-tertiary: #CC0000;
        --color-pokedex-text: #4d4d4d;
    }

    .pokedex {
        min-height: 100vh;
        min-width: 100vw;
        background-color: var(--color-pokedex-bg);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pokedex__screen {
        position: relative;
        min-width: 210px;
        width: 60vw;
        column-gap: 30px;
        row-gap: 40px;
        height: 60vh;
        overflow: scroll;
    }
</style>
