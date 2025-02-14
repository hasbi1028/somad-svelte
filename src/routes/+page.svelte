<script>
    import { getPbUser, logout } from '$lib/pocketbase.svelte';
    import Button from '$lib/components/ui/button/button.svelte';

    $inspect(getPbUser());
</script>

<h1>Welcome to SvelteKit</h1>
<h1>Welcome to SvelteKit</h1>
<h1>Welcome to SvelteKit</h1>
<h1>Welcome to SvelteKit</h1>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


<Button onclick={() => logout()}>Logout dong</Button>
