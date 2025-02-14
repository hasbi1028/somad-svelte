<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase.svelte';
	// import { ModeWatcher } from "mode-watcher";
// 	import Sun from "lucide-svelte/icons/sun";
//   import Moon from "lucide-svelte/icons/moon";
 
//   import { resetMode, setMode } from "mode-watcher";
//   import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
//   import { buttonVariants } from "$lib/components/ui/button/index.js";


	let { children } = $props();

	if (!pb.authStore.isValid) {
		// goto('/login');
	}
</script>

<!-- <ModeWatcher /> -->
<!-- <nav class="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-background px-4 py-2 text-card-foreground shadow-sm">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger
		  class={buttonVariants({ variant: "outline", size: "icon" })}
		>
		  <Sun
			class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
		  />
		  <Moon
			class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		  />
		  <span class="sr-only">Toggle theme</span>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="start">
		  <DropdownMenu.Item onclick={() => setMode("light")}>Light</DropdownMenu.Item>
		  <DropdownMenu.Item onclick={() => setMode("dark")}>Dark</DropdownMenu.Item>
		  <DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
		</DropdownMenu.Content>
	  </DropdownMenu.Root>
	</nav> -->
{@render children()}
