<script lang="ts">
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import Upload from 'lucide-svelte/icons/upload';
	import Download from 'lucide-svelte/icons/download';

	// Reactive state using $state rune
	let importDialogOpen = $state(false);
	let exportDialogOpen = $state(false);
	let csvFile: File | null = $state(null);
	let importStatus = $state('');
	let importError = $state('');

	// Function to generate CSV template for download
	function generateCSVTemplate() {
		const headers = [
			'id',
			'nama_lengkap',
			'email',
			'tempat_lahir',
			'tanggal_lahir',
			'jenis_kelamin',
			'nisn',
			'nomor_telepon',
			'alamat',
			'kelas'
		];
		const csvContent = headers.join(',') + '\n';
		const blob = new Blob([csvContent], { type: 'text/csv' });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = 'template_siswa.csv';
		document.body.appendChild(a);
		a.click();

		URL.revokeObjectURL(url);
		document.body.removeChild(a);
		exportDialogOpen = false;
	}

	// Function to export users to CSV
	async function exportStudents() {
		try {
			const students = await pb.collection('students').getFullList({
				expand: 'user_id, class_id'
			});
			console.log(students);
			const headers = [
				'id',
				'nama_lengkap',
				'email',
				'tempat_lahir',
				'tanggal_lahir',
				'jenis_kelamin',
				'nisn',
				'nomor_telepon',
				'alamat',
				'kelas'
			];

			const rows = students.map((student) =>
				headers.map((header) => student[header] || '').join(',')
			);
			const csvContent = [headers.join(','), ...rows].join('\n');
			const blob = new Blob([csvContent], { type: 'text/csv' });
			const url = URL.createObjectURL(blob);

			const a = document.createElement('a');
			a.href = url;
			a.download = 'data_siswa.csv';
			document.body.appendChild(a);
			a.click();

			URL.revokeObjectURL(url);
			document.body.removeChild(a);
			exportDialogOpen = false;
		} catch (err) {
			console.error('Error exporting students:', err);
		}
	}

	// Handle file selection
	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			csvFile = input.files[0];
		}
	}

	async function fetchUsers() {}

	async function importStudents() {
		if (!csvFile) {
			importError = 'Silakan pilih file CSV';
			return;
		}

		importStatus = 'Mengimpor...';
		importError = '';

		try {
			const text = await csvFile.text();
			const rows = text.split('\n');
			const headers = rows[0].split(',');

			let successCount = 0;
			let errorCount = 0;

			for (let i = 1; i < rows.length; i++) {
				if (!rows[i].trim()) continue;

				const values = rows[i].split(',');
				const studentData: any = {};

				headers.forEach((header, index) => {
					if (values[index]) {
						studentData[header.trim()] = values[index].trim();
					}
				});

				try {
					const existingStudents = await pb.collection('students').getList(1, 1, {
						filter: `id = "${studentData.id}"`
					});

					if (existingStudents.items.length > 0) {
						delete studentData.id;

						await pb.collection('students').update(existingStudents.items[0].id, studentData);
					} else {
						await pb.collection('students').create(studentData);
					}
					successCount++;
				} catch (err) {
					console.error(`Error processing row ${i}:`, err);
					errorCount++;
				}
			}

			importStatus = `Impor selesai: ${successCount} siswa berhasil diimpor/diperbarui, ${errorCount} kesalahan`;

			if (errorCount === 0) {
				setTimeout(() => {
					importDialogOpen = false;
					importStatus = '';
					csvFile = null;
				}, 3000);
			}
		} catch (err) {
			console.error('Error parsing CSV:', err);
			importError = 'Terjadi kesalahan saat memproses file CSV. Pastikan formatnya benar.';
			importStatus = '';
		}
	}
</script>

<Button size="sm" variant="outline" class="h-7 gap-1" onclick={() => (importDialogOpen = true)}>
	<Upload class="size-3.5" />
	<span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Impor</span>
</Button>
<Button size="sm" variant="outline" class="h-7 gap-1" onclick={() => (exportDialogOpen = true)}>
	<Download class="size-3.5" />
	<span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Ekspor</span>
</Button>

<!-- Dialog Impor -->
<Dialog.Root bind:open={importDialogOpen}>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Impor Data Siswa</Dialog.Title>
			<Dialog.Description>
				Unggah file CSV dengan data siswa untuk mengimpor atau memperbarui data.
			</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<div class="flex flex-col gap-4">
				<Input type="file" accept=".csv" onchange={handleFileChange} aria-label="Unggah file CSV" />
				<Button variant="outline" onclick={generateCSVTemplate}>Unduh Template CSV</Button>
			</div>

			{#if importStatus}
				<Alert.Root>
					<Alert.Title>Status Impor</Alert.Title>
					<Alert.Description>{importStatus}</Alert.Description>
				</Alert.Root>
			{/if}

			{#if importError}
				<Alert.Root variant="destructive">
					<Alert.Title>Kesalahan</Alert.Title>
					<Alert.Description>{importError}</Alert.Description>
				</Alert.Root>
			{/if}
		</div>
		<Dialog.Footer>
			<Button variant="outline" onclick={() => (importDialogOpen = false)}>Batal</Button>
			<Button onclick={importStudents} disabled={!csvFile}>Impor</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

<!-- Dialog Ekspor -->
<Dialog.Root bind:open={exportDialogOpen}>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Ekspor Data Siswa</Dialog.Title>
			<Dialog.Description>Unduh data siswa dalam format CSV.</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<Button variant="outline" onclick={exportStudents}>Ekspor Data Siswa</Button>
		</div>
		<Dialog.Footer>
			<Button variant="outline" onclick={() => (exportDialogOpen = false)}>Tutup</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
