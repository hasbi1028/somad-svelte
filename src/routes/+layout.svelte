<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase.svelte';
	import { ModeWatcher } from "mode-watcher";
	


	let { children } = $props();

	if (!pb.authStore.isValid) {
		// goto('/login');
	}
</script>

<ModeWatcher />

{@render children()}
