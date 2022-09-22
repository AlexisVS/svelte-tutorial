<div class="pokedex">
    <slot/>
</div>

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
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


</style>
