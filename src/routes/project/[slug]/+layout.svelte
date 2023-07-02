<script>
    export let data
</script>

<div class="layout">
    <main>
        <slot />
    </main>
</div>

<aside>
    <h2>More projects</h2>
    <ul>
        {#each data.projects as { name, slug }}
            <li><a href="/project/{slug}">{name}</a></li>
        {/each}
    </ul>
</aside>

<style>
    @media (min-width: 640px) {
        .layout {
            display: grid;
            gap: 2em;
            grid-template-columns: 1fr 16em;
        }
    }
</style>
