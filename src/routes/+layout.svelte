<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase.svelte';
	let { children } = $props();

	if (!pb.authStore.isValid) {
		goto('/login');
	}
</script>

{@render children()}
