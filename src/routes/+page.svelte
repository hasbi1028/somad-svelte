<script>
	// Import komponen yang dibutuhkan dari shadcn-svelte
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card } from '$lib/components/ui/card/index.js';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { pb } from '$lib/pocketbase.svelte';

	import { toggleMode } from 'mode-watcher';
</script>

<nav
	class="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-background px-4 py-2 text-card-foreground shadow-sm"
>
	<ul class="flex items-center justify-center space-x-4 w-full">
		<li><a href="#about" class="hover:underline">Tentang</a></li>
		<li><a href="#programs" class="hover:underline">Program</a></li>
		<li><a href="#contact" class="hover:underline">Kontak</a></li>
	</ul>
	<Button onclick={toggleMode} variant="outline" size="sm" class="mr-2">
		<Sun
			class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
		/>
		<Moon
			class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		/>
		<span class="sr-only">Toggle theme</span>
	</Button>
	{#if pb.authStore.isValid}
		<a href="/logout">
			<Button variant="outline" size="sm">Logout</Button>
		</a>
	{:else}
		<a href="/login">
			<Button variant="outline" size="sm">Login</Button>
		</a>
	{/if}
</nav>

<!-- Main Content -->
<main>
	<!-- Hero Section -->
	<section class="hero bg-gray-100 dark:bg-gray-800 py-32 text-center">
		<div class="container mx-auto px-4">
			<h2 class="text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-100">
				Selamat Datang di MTSN 2 Kolaka Utara
			</h2>
			<p class="text-lg mb-8 text-gray-700 dark:text-gray-300">
				Mewujudkan pendidikan berkualitas dan karakter unggul untuk masa depan.
			</p>
			<Button size="lg">Pelajari Lebih Lanjut</Button>
		</div>
	</section>

	<!-- Tentang Kami -->
	<section id="about" class="py-16">
		<div class="container mx-auto px-4">
			<h3 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Tentang Kami</h3>
			<p class="text-gray-700 dark:text-gray-300">
				MTSN 2 Kolaka Utara berkomitmen untuk memberikan pendidikan terbaik dengan menggabungkan
				pembelajaran akademis dan pengembangan karakter.
			</p>
		</div>
	</section>

	<!-- Program Pendidikan -->
	<section id="programs" class="py-16 bg-gray-100 dark:bg-gray-800">
		<div class="container mx-auto px-4">
			<h3 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
				Program Pendidikan
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<Card class="p-6 bg-white dark:bg-gray-700 shadow rounded">
					<h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">IPA</h4>
					<p class="text-gray-700 dark:text-gray-300">
						Mendalami ilmu pengetahuan alam dengan pendekatan praktis dan eksperimen langsung.
					</p>
				</Card>
				<Card class="p-6 bg-white dark:bg-gray-700 shadow rounded">
					<h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Matematika</h4>
					<p class="text-gray-700 dark:text-gray-300">
						Mengasah kemampuan logika dan pemecahan masalah melalui kurikulum yang menantang.
					</p>
				</Card>
				<Card class="p-6 bg-white dark:bg-gray-700 shadow rounded">
					<h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Bahasa</h4>
					<p class="text-gray-700 dark:text-gray-300">
						Meningkatkan kemampuan komunikasi dan penguasaan bahasa melalui pembelajaran interaktif.
					</p>
				</Card>
			</div>
		</div>
	</section>

	<!-- Kontak -->
	<section id="contact" class="py-16">
		<div class="container mx-auto px-4 text-center">
			<h3 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Hubungi Kami</h3>
			<p class="text-gray-700 dark:text-gray-300">
				Untuk informasi lebih lanjut, silahkan hubungi kami melalui email:
				<a href="mailto:info@mtsn2kolakautara.sch.id" class="text-blue-500 hover:underline">
					info@mtsn2kolakautara.sch.id
				</a>
			</p>
		</div>
	</section>
</main>

<!-- Footer -->
<footer class="py-6 bg-blue-600 dark:bg-blue-900 text-white">
	<div class="container mx-auto text-center px-4">
		<p>&copy; {new Date().getFullYear()} MTSN 2 Kolaka Utara. All rights reserved.</p>
	</div>
</footer>
