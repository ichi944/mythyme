<script>
    export let data
</script>

<h1>Home</h1>
<p>This is Home page.</p>

<h2>Todos</h2>

<form method="POST" action="?/create">
    <label>
        add a todo.
        <input
            name="description"
            autocomplete="off"
            required
        />
    </label>
</form>

<ul>
    {#each data.todos as todo (todo.id)}
    <li>
        <form method="POST" action="?/delete">
            <input type="hidden" name="id" value={todo.id}>
            <span>{todo.description}</span>
            <button aria-label="Mark as complete">done</button>
        </form>
    </li>
    {/each}
</ul>
