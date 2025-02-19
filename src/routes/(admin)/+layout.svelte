<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase.svelte';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	let { children } = $props();

	if (!pb.authStore.isValid) {
		goto('/login');
	}
</script>

<Sidebar.Provider >
	<AppSidebar class="print:hidden" />
	<Sidebar.Inset >
		{@render children()}
	</Sidebar.Inset>
</Sidebar.Provider>

