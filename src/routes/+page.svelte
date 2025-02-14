<script>
    import { getPbUser, logout } from '$lib/pocketbase.svelte';

    $inspect(getPbUser());
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<style>
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
</style>

<button onclick={() => logout()}>Logout dong</button>
