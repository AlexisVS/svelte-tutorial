<script>
    export let name, imageUri, uri
</script>

    <a href={'/pokedex/' + uri.slice(0, uri.length - 1).split('/').slice(-1)} class="card">
        <img src="{imageUri}" alt="Pokemon {name}" class="card__image">
        <span class="card__title">{name}</span>
    </a>

<style>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        background-color: rgba(255,255,255, 0.6);
        border-radius: 5px;
        padding-bottom: 15px;
    }

    .card__image {
        object-fit: contain;
    }

    .card__title {
        text-align: center;
        color: var(--color-pokedex-text);
        font-weight: 600;
    }

    a:hover {
        text-decoration: none;
        color: var(--color-pokedex-text);
    }
</style>
