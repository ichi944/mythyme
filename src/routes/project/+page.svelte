<script>
    export let data
</script>

<h1>projects</h1>

<ul>
    {#each data.projects as { name, slug }}
        <li><a href="/project/{slug}">{name}</a></li>
    {/each}
</ul>
