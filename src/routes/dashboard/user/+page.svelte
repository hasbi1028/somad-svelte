<script lang="ts">
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { toggleMode } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import File from 'lucide-svelte/icons/file';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import House from 'lucide-svelte/icons/house';
	import ChartLine from 'lucide-svelte/icons/chart-line';
	import ListFilter from 'lucide-svelte/icons/list-filter';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import Package from 'lucide-svelte/icons/package';
	import Package2 from 'lucide-svelte/icons/package-2';
	import PanelLeft from 'lucide-svelte/icons/panel-left';
	import CirclePlus from 'lucide-svelte/icons/circle-plus';
	import Search from 'lucide-svelte/icons/search';
	import Settings from 'lucide-svelte/icons/settings';
	import ShoppingCart from 'lucide-svelte/icons/shopping-cart';
	import UsersRound from 'lucide-svelte/icons/users-round';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import { MediaQuery } from 'svelte/reactivity';

	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import ImportExportUser from '$lib/components/import-export-user.svelte';

	// Media query untuk menentukan tampilan desktop/mobile
	const isDesktop = new MediaQuery('(min-width: 768px)');

	// Nilai perPage dan siblingCount berdasarkan ukuran layar
	const perPage = $derived(isDesktop.current ? 5 : 8);
	// Sibling count digunakan untuk mengatur jumlah pagination yang ditampilkan pada pagination root
	// Nilai 1 berarti menampilkan 1 pagination sebelum dan sesudah pagination yang aktif
	// Nilai 0 berarti tidak menampilkan pagination sebelum dan sesudah pagination yang aktif
	const siblingCount = $derived(isDesktop.current ? 1 : 0);

	// Deklarasi state menggunakan $state (Svelte 5)
	let allUsers: any[] = $state([]);
	let users: any[] = $state([]);
	let paginatedUsers: any[] = $state([]);
	let searchTerm = $state('');
	let currentPage = $state(1);
	let count = $state(0);

	// Fungsi untuk mengambil data user sesuai dengan searchTerm
	async function fetchUsers() {
		try {
			// 1. Get all filtered users
			const result = await pb.collection('users').getFullList({
				filter: searchTerm.trim() ? `full_name ~ "${searchTerm}"` : ''
			});

			// 2. Store the full filtered list
			allUsers = result.filter((user) => user);

			count = allUsers.length;

			// 3. Calculate pagination
			const start = (currentPage - 1) * perPage;
			paginatedUsers = allUsers.slice(start, start + perPage);
		} catch (err) {
			console.error('Error fetching users:', err);
		}
	}

	// Panggil fetchUsers saat komponen dimount
	onMount(() => {
		fetchUsers();
		$inspect(allUsers, 'allUsers');
	});

	// Panggil fetchUsers ketika searchTerm atau currentPage berubah
	$effect(() => {
		fetchUsers();
	});

	$effect(() => {
		fetchUsers();
		console.log('Current page changed:', currentPage);
		$inspect(paginatedUsers, 'paginatedUsers');
	});
</script>

<!-- Header -->
<header class="flex h-16 shrink-0 items-center gap-2 px-4 py-2">
	<div class="flex items-center gap-3">
		<Sidebar.Trigger class="-ml-1" />
		<Separator orientation="vertical" class="mr-2 h-4" />
		<Button onclick={toggleMode} variant="outline" size="sm" class="mr-2">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
		<Separator orientation="vertical" class="mr-2 h-4" />
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item class="hidden md:block">
					<Breadcrumb.Link href="#">Menu Tambahan</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator class="hidden md:block" />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/dashboard">
						<span class="hover:underline">Dashboard</span>
					</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>
						<a href="/dashboard/user">Data User</a>
					</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>
	<div class="relative ml-auto flex flex-1 items-center justify-end">
		<Input
			bind:value={searchTerm}
			type="search"
			placeholder="Cari User"
			class="bg-background w-full rounded-lg pr-8 md:w-[200px] lg:w-[320px]"
		/>
		<Search class="text-muted-foreground absolute right-2.5 top-2.5 size-4" />
	</div>
</header>

<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
	<main class="grid flex-1 items-start">
		<Tabs.Root value="all">
			<div class="flex items-center">
				<Tabs.List>
					<Tabs.Trigger value="all">All</Tabs.Trigger>
					<Tabs.Trigger value="student">Student</Tabs.Trigger>
					<Tabs.Trigger value="teacher">Teacher</Tabs.Trigger>
					<Tabs.Trigger value="staff">Staff</Tabs.Trigger>
				</Tabs.List>
				<div class="ml-auto flex items-center gap-2">
					<ImportExportUser />

					<Button size="sm" class="h-7 gap-1">
						<CirclePlus class="size-3.5" />
						<span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Add User</span>
					</Button>
				</div>
			</div>
			<Tabs.Content value="all">
				<Card.Root>
					<Card.Header>
						<Card.Title>Data User</Card.Title>
						<Card.Description>Kelola pengguna Anda dan lihat informasi mereka.</Card.Description>
					</Card.Header>
					<Card.Content>
						<Table.Root>
							<Table.Header>
								<Table.Row>
									<Table.Head class="hidden sm:table-cell">Photo</Table.Head>
									<Table.Head class="hidden md:table-cell">NIK</Table.Head>
									<Table.Head>Nama Lengkap</Table.Head>
									<Table.Head>Email</Table.Head>
									<Table.Head class="hidden md:table-cell">Tempat Lahir</Table.Head>
									<Table.Head class="hidden md:table-cell">Tanggal Lahir</Table.Head>
									<Table.Head class="hidden md:table-cell">Jenis Kelamin</Table.Head>
									<Table.Head class="hidden md:table-cell">No. HP</Table.Head>
									<Table.Head  class="hidden md:table-cell">Alamat</Table.Head>
									<Table.Head class="hidden md:table-cell">Role</Table.Head>
									<Table.Head>Actions</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each paginatedUsers as user}
									<Table.Row>
										<Table.Cell class="hidden sm:table-cell">
											<img
												alt="User"
												class="aspect-square rounded-md object-cover"
												height="64"
												src={user.avatar
													? pb.files.getURL(user, user.avatar)
													: 'https://placehold.co/40'}
												width="64"
											/>
										</Table.Cell>
										<Table.Cell class="font-medium">{user.nik}</Table.Cell>
										<Table.Cell>{user.full_name}</Table.Cell>
										<Table.Cell>{user.email}</Table.Cell>
										<Table.Cell class="hidden md:table-cell">{user.birth_place}</Table.Cell>
										<Table.Cell class="hidden md:table-cell">
											{new Date(user.birth_date).toLocaleString('id-ID', {
												day: 'numeric',
												month: 'long',		
												year: 'numeric'
											})}
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell">{user.gender}</Table.Cell>
										<Table.Cell class="hidden md:table-cell">{user.phone_number}</Table.Cell>
										<Table.Cell class="hidden md:table-cell">{user.address}</Table.Cell>
										<Table.Cell class="hidden md:table-cell">{user.role}</Table.Cell>
										<Table.Cell>
											<DropdownMenu.Root>
												<DropdownMenu.Trigger>
													{#snippet child({ props })}
														<Button {...props} aria-haspopup="true" size="icon" variant="ghost">
															<Ellipsis class="size-4" />
															<span class="sr-only">Toggle menu</span>
														</Button>
													{/snippet}
												</DropdownMenu.Trigger>
												<DropdownMenu.Content align="end">
													<DropdownMenu.Group>
														<DropdownMenu.GroupHeading>Actions</DropdownMenu.GroupHeading>
														<DropdownMenu.Item>Edit</DropdownMenu.Item>
														<DropdownMenu.Item>Delete</DropdownMenu.Item>
													</DropdownMenu.Group>
												</DropdownMenu.Content>
											</DropdownMenu.Root>
										</Table.Cell>
									</Table.Row>
								{/each}
							</Table.Body>
						</Table.Root>
					</Card.Content>
					<Card.Footer>
						<!-- Bind currentPage ke Pagination.Root agar state selalu sinkron -->
						<Pagination.Root {count} {perPage} {siblingCount} bind:page={currentPage}>
							{#snippet children({ pages, currentPage })}
								<Pagination.Content>
									<Pagination.Item>
										<Pagination.PrevButton>
											<ChevronLeft class="size-4" />
											<span class="hidden sm:block">Previous</span>
										</Pagination.PrevButton>
									</Pagination.Item>
									{#each pages as page (page.key)}
										{#if page.type === 'ellipsis'}
											<Pagination.Item>
												<Pagination.Ellipsis />
											</Pagination.Item>
										{:else}
											<Pagination.Item>
												<Pagination.Link {page} isActive={currentPage === page.value}>
													{page.value}
												</Pagination.Link>
											</Pagination.Item>
										{/if}
									{/each}
									<Pagination.Item>
										<Pagination.NextButton>
											<span class="hidden sm:block">Next</span>
											<ChevronRight class="size-4" />
										</Pagination.NextButton>
									</Pagination.Item>
								</Pagination.Content>
							{/snippet}
						</Pagination.Root>
					</Card.Footer>
				</Card.Root>
			</Tabs.Content>
		</Tabs.Root>
	</main>
</div>
