<script lang="ts">
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import CirclePlus from 'lucide-svelte/icons/circle-plus';
	import Search from 'lucide-svelte/icons/search';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import { MediaQuery } from 'svelte/reactivity';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { goto } from '$app/navigation';

	// Media query untuk menentukan tampilan desktop/mobile
	const isDesktop = new MediaQuery('(min-width: 768px)');

	// Nilai perPage dan siblingCount berdasarkan ukuran layar
	const perPage = $derived(isDesktop.current ? 5 : 8);
	const siblingCount = $derived(isDesktop.current ? 1 : 0);

	let paginatedAttendance: any[] = $state([]);
	let searchTerm = $state('');
	let currentPage = $state(1);
	let count = $state(0);
	// Variabel untuk status filter: "all", "active", "graduated", atau "dropped"
	let selectedTab = $state('all');

	// Setiap kali selectedTab berubah, reset currentPage ke 1
	$effect(() => {
		if (selectedTab) {
			currentPage = 1;
		}
	});

	// Fungsi fetchAttendancelogs dengan kombinasi filter berdasarkan searchTerm dan selectedTab
	async function fetchAttendancelogs() {
		try {
			const filterParts: string[] = [];
			// Filter berdasarkan nama (dari relasi user_id.full_name)
			if (searchTerm.trim()) {
				filterParts.push(`user_id.full_name ~ "${searchTerm}"`);
			}
			// Jika tab bukan "all", tambahkan filter status
			if (selectedTab !== 'all') {
				filterParts.push(`status = "${selectedTab}"`);
			}
			const filterQuery = filterParts.join(' && ');

			// Ambil data sesuai halaman dan jumlah perPage menggunakan getList
			const result = await pb.collection('attendance_log').getList(currentPage, perPage, {
				filter: filterQuery,
				expand: 'user_id'
			});
			paginatedAttendance = result.items;
			count = result.totalItems;
            console.log(result);
		} catch (err) {
			console.error('Error fetching attendancelogs:', err);
		}
	}

	// Panggil fetchAttendancelogs saat komponen di-mount
	onMount(() => {
		fetchAttendancelogs();
		$inspect(paginatedAttendance);
	});

	// Reactive statement: setiap perubahan searchTerm, currentPage, atau selectedTab panggil fetchAttendancelogs
	$effect(() => {
		// dependency
		searchTerm;
		currentPage;
		selectedTab;
		fetchAttendancelogs();
        
	});
</script>

<!-- Header -->
<header class="flex flex-col md:flex-row h-auto md:h-16 gap-4 md:gap-2 px-4 py-2">
	<div class="flex items-center justify-between w-full md:w-auto">
		<div class="flex items-center gap-3">
			<Sidebar.Trigger class="-ml-1" />
			
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
							<a href="/attendancelogs">Data Kehadiran</a>
						</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
            <div class="relative ml-auto flex flex-1 items-center justify-end">
			<Input
				bind:value={searchTerm}
				type="search"
				placeholder="Cari Siswa"
				class="bg-background w-full rounded-lg pr-8 md:w-[200px] lg:w-[320px]"
			/>
			<Search class="text-muted-foreground absolute right-2.5 top-2.5 size-4" />
		</div>
		</div>
		
	</div>
</header>

<div class="flex flex-1 flex-col gap-4 p-10 pt-0">
	<main class="grid flex-1 items-start">
		<!-- Tabs dengan binding ke selectedTab -->
		<Tabs.Root bind:value={selectedTab}>
			<div class="flex items-center">
				
			</div>

			<Tabs.Content value="all">
				<Card.Root>
					<Card.Header>
						<Card.Title>Data Kehardiran</Card.Title>
						<Card.Description>Data Kehardiran Para Pengguna.</Card.Description>
					</Card.Header>
					<!-- Container responsif untuk tabel yang overflow secara horizontal -->
					<div class="overflow-x-auto">
						<Card.Content>
							<Table.Root>
								<Table.Header>
									<Table.Row>
										<Table.Head>Nama Lengkap</Table.Head>
                                        <Table.Head class="hidden md:table-cell">Tipe Catatan Kehardiran</Table.Head>
										<Table.Head class="hidden md:table-cell">Waktu Catatan Kehardiran</Table.Head>
										<Table.Head class="hidden lg:table-cell">Lokasi Catatan</Table.Head>
										<Table.Head>Actions</Table.Head>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									{#each paginatedAttendance as attendancelog}
										<Table.Row>
											<Table.Cell>{attendancelog.expand.user_id.full_name}</Table.Cell>
											<Table.Cell class="hidden lg:table-cell">
												{(attendancelog.event_type)}
											</Table.Cell>
											<Table.Cell class="hidden lg:table-cell">
												{attendancelog.event_time}
											</Table.Cell>
                                            <Table.Cell class="hidden lg:table-cell">
												{attendancelog.device_location}
											</Table.Cell>
                                            
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
															<DropdownMenu.Item onclick={() => goto(`/attendancelogs/${attendancelog.id}`)}>Edit</DropdownMenu.Item>
															<DropdownMenu.Item onclick={() => alert("Anda tidak diperbolehkan menghapus data siswa!")}>Delete</DropdownMenu.Item>
														</DropdownMenu.Group>
													</DropdownMenu.Content>
												</DropdownMenu.Root>
											</Table.Cell>
										</Table.Row>
									{/each}
								</Table.Body>
							</Table.Root>
						</Card.Content>
					</div>
					<Card.Footer>
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
