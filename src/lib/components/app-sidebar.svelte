<script lang="ts" module>
	import AudioWaveform from 'lucide-svelte/icons/audio-waveform';
	import BookOpen from 'lucide-svelte/icons/book-open';
	import { Contact, NotebookPen } from 'lucide-svelte';
	import { BookUser } from 'lucide-svelte';
	import { Users } from 'lucide-svelte';

	// This is sample data.
	const data = {
		user: {
			name: 'mtsn2kolut',
			email: 'mtsn.pakue@gmail.com',
			avatar: '/favicon.png'
		},

		navMain: [
			{
				title: 'Kesiswaan',
				url: '#',
				icon: BookUser,
				isActive: false,
				items: [
					{
						title: 'Daftar Siswa',
						url: '/students'
					},
					{
						title: 'Cetak Kartu',
						url: '/id-card/students'
					},
					// {
					// 	title: 'Mutasi',
					// 	url: '#'
					// },
					// {
					// 	title: 'Akademik',
					// 	url: '#'
					// },
					// {
					// 	title: 'Daftar PIP',
					// 	url: '#'
					// }
				]
			},
			{
				title: 'Guru dan Tendik',
				url: '#',
				icon: Contact,
				items: [
					{
						title: 'Daftar Guru',
						url: '/teachers'
					},
					{
						title: 'Daftar Staff',
						url: '/staff'
					},
					{
						title: 'Cetak Kartu',
						url: '/id-card/employee'
					},
					// {
					// 	title: 'Mutasi',
					// 	url: '#'
					// },
					// {
					// 	title: 'Pengajuan GTK',
					// 	url: '#'
					// }
				]
			},
			{
				title: 'Pengaturan Tambahan',
				url: '#',
				icon: BookOpen,
				items: [
					{
						title: 'Rombongan Belajar',
						url: '/classes'
					},
					{
						title: 'Jadwal Kelas',
						url: '/schedules'
					},
					{
						title: 'Tahun Pelajaran',
						url: '/academic-year'
					},
					{
						title: 'Ruangan',
						url: '/rooms'
					},
					{
						title: 'Mata Pelajaran',
						url: '/subjects'
					}
				]
			},
			
			// {
			// 	title: "Settings",
			// 	url: "#",
			// 	icon: Settings2,
			// 	items: [
			// 		{
			// 			title: "General",
			// 			url: "#",
			// 		},
			// 		{
			// 			title: "Team",
			// 			url: "#",
			// 		},
			// 		{
			// 			title: "Billing",
			// 			url: "#",
			// 		},
			// 		{
			// 			title: "Limits",
			// 			url: "#",
			// 		},
			// 	],
			// },
		],
		projects: [
			{
				name: 'Absensi',
				url: '/attendances',
				icon: NotebookPen
			},
			// {
			// 	name: 'Rombongan Belajar',
			// 	url: '/classes',
			// 	icon: Users
			// }
		]
	};
</script>

<script lang="ts">
	import NavMain from '$lib/components/nav-main.svelte';
	import NavProjects from '$lib/components/nav-projects.svelte';
	import NavUser from '$lib/components/nav-user.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root  bind:ref {collapsible} {...restProps}>
	<!-- <Sidebar.Header>
		<img src="/favicon.png" alt="logo" class="h-20 w-20 m-2 self-center" />
		svelte-ignore a11y_distracting_elements
		<marquee class="text-sm self-center">Made by Hasbi Awal</marquee>
	</Sidebar.Header> -->
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<NavProjects projects={data.projects} />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
