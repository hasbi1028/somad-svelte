<script lang="ts">
	
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import Button from '$lib/components/ui/button/button.svelte';
	import { toggleMode } from "mode-watcher";
	import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
</script>

<header
			class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
		>
			<div class="flex items-center gap-2 px-4">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<Button
        onclick={toggleMode}
        variant="outline"
        size="sm"
        class="mr-2"
      >
        <Sun
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
				<Separator orientation="vertical" class="mr-2 h-4" />
				<div class="bg-muted/50 min-h-[100vh] flex-1 rounded-lg md:min-h-min ">
					<div class="px-4 py-1 text-sm">Selamat datang Admin. Selamat datang di halaman admin. Anda dapat mengatur berbagai halaman yang ada di dalam website ini.
					</div>
		
				</div>

			</div>
		</header>

<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
	<div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
		<h1 class="text-4xl font-bold p-4">Selamat datang Admin</h1>
		<p class="text-lg p-4">
			Selamat datang di halaman admin. Anda dapat mengatur berbagai halaman yang ada di dalam website ini.
		</p>
		<img src="/favicon.png" alt="Admin" class="w-full max-w-md mx-auto mt-4" />
		
		
	</div>
</div>