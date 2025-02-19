<script lang="ts">
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
	let students = $state([]);

	// Function to generate CSV template for download
	function generateCSVTemplate() {
		const headers = [
			//field users
			'email',
			'nik',
			'full_name',
			'birth_place',
			'birth_date',
			'gender',
			'phone_number',
			'address',
			'father_name',
			'mother_name',
			'parent_phone',
			'blood_type',
			'role',
			'position',
			//field student
			'nism',
			'nisn',
			'class',
			'status',
			'entry_year'
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

	export async function exportStudents() {
		try {
			// Ambil data secara paralel dari koleksi terkait
			const [students, users, classes, positions] = await Promise.all([
				pb.collection('students').getFullList(),
				pb.collection('users').getFullList(),
				pb.collection('classes').getFullList(),
				pb.collection('positions').getFullList()
			]);

			// Buat mapping berdasarkan id
			const userMap = Object.fromEntries(users.map((u) => [u.id, u]));
			const classMap = Object.fromEntries(classes.map((c) => [c.id, c]));
			const positionMap = Object.fromEntries(positions.map((p) => [p.id, p]));

			// Definisikan header CSV
			const headers = [
				'email',
				'nik',
				'full_name',
				'birth_place',
				'birth_date',
				'gender',
				'phone_number',
				'address',
				'father_name',
				'mother_name',
				'parent_phone',
				'blood_type',
				'role',
				'position',
				'nism',
				'nisn',
				'class',
				'status',
				'entry_year'
			];

			const rows = students.map((student) => {
				// Dapatkan data user dan kelas terkait
				const user = userMap[student.user_id] || {};
				const classData = classMap[student.class_id] || {};

				// Perbaikan: pastikan mapping posisi dilakukan dengan benar
				// Jika properti user.position_id ada, ambil data posisi dari positionMap
				const position: any = user.position_id ? positionMap[user.position_id] || {} : {};

				// Mapping masing-masing header ke data yang sesuai
				const row = headers.map((header) => {
					switch (header) {
						// Field dari user
						case 'email':
							return user.email || '';
						case 'nik':
							return user.nik || '';
						case 'full_name':
							return user.full_name || '';
						case 'birth_place':
							return user.birth_place || '';
						case 'birth_date':
							return user.birth_date || '';
						case 'gender':
							return user.gender || '';
						case 'phone_number':
							return user.phone_number || '';
						case 'address':
							return user.address || '';
						case 'father_name':
							return user.father_name || '';
						case 'mother_name':
							return user.mother_name || '';
						case 'parent_phone':
							return user.parent_phone || '';
						case 'blood_type':
							return user.blood_type || '';
						case 'role':
							return user.role || '';
						case 'position':
							return position.name || '';
						// Field dari student
						case 'nism':
							return student.nism || '';
						case 'nisn':
							return student.nisn || '';
						case 'class':
							return classData.name || '';
						case 'status':
							return student.status || '';
						case 'entry_year':
							return student.entry_year || '';
						default:
							return '';
					}
				});
				return row.join(',');
			});

			// Buat konten CSV
			const csvContent = [headers.join(','), ...rows].join('\n');
			const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
			const url = URL.createObjectURL(blob);

			// Buat elemen anchor untuk mengunduh file CSV
			const a = document.createElement('a');
			a.href = url;
			a.download = 'data_siswa.csv';
			document.body.appendChild(a);
			a.click();

			// Bersihkan URL dan elemen yang dibuat
			document.body.removeChild(a);
			URL.revokeObjectURL(url);

			console.log('Export berhasil.');
		} catch (error) {
			console.error('Error exporting students:', error);
		}
	}

	// Handle file selection
	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			csvFile = input.files[0];
		}
	}

	export async function importStudents() {
		if (!csvFile) {
			importError = 'Silakan pilih file CSV';
			return;
		}

		importStatus = 'Mengimpor...';
		importError = '';

		try {
			// Baca isi file CSV dan pisahkan baris yang tidak kosong
			const text = await csvFile.text();
			const rows = text.split('\n').filter((row) => row.trim() !== '');
			if (rows.length < 2) {
				importError = 'File CSV tidak memiliki data.';
				importStatus = '';
				return;
			}

			// Baris pertama merupakan header
			const headers = rows[0].split(',').map((h) => h.trim());

			// Ambil mapping untuk posisi dan kelas
			const [positions, classes] = await Promise.all([
				pb.collection('positions').getFullList(),
				pb.collection('classes').getFullList()
			]);

			// Mapping: nama posisi ke id
			const positionMapping: any = {};
			positions.forEach((p) => {
				if (p.name) positionMapping[p.name] = p.id;
			});

			// Mapping: nama kelas ke id
			const classMapping: any = {};
			classes.forEach((c) => {
				if (c.name) classMapping[c.name] = c.id;
			});

			let successCount = 0;
			let errorCount = 0;

			// Proses setiap baris data (mulai dari baris kedua)
			for (let i = 1; i < rows.length; i++) {
				try {
					const values = rows[i].split(',').map((val) => val.trim());
					if (values.length === 0 || values.every((val) => val === '')) continue;

					// Buat objek data berdasarkan header
					const rowData: any = {};
					headers.forEach((header, index) => {
						rowData[header] = values[index] || '';
					});

					// Pisahkan data untuk user dan student
					const userData: any = {
						email: rowData.email,
						nik: rowData.nik,
						full_name: rowData.full_name,
						birth_place: rowData.birth_place,
						birth_date: rowData.birth_date,
						gender: rowData.gender,
						phone_number: rowData.phone_number,
						address: rowData.address,
						father_name: rowData.father_name,
						mother_name: rowData.mother_name,
						parent_phone: rowData.parent_phone,
						blood_type: rowData.blood_type,
						role: rowData.role
						// Field 'position' akan dikonversi ke position_id
					};

					// Jika field position ada, map ke position_id
					if (rowData.position) {
						userData.position_id = positionMapping[rowData.position] || '';
					}

					const studentData: any = {
						nism: rowData.nism,
						nisn: rowData.nisn,
						status: rowData.status,
						entry_year: rowData.entry_year
						// Field 'class' akan dikonversi ke class_id
					};

					// Konversi field class ke class_id jika ada
					if (rowData.class) {
						studentData.class_id = classMapping[rowData.class] || '';
					}

					// Cari user berdasarkan email
					const existingUsers = await pb.collection('users').getList(1, 1, {
						filter: `email = "${userData.email}"`
					});

					if (existingUsers.items.length > 0) {
						// Jika user sudah ada, update data user
						const existingUser = existingUsers.items[0];
						await pb.collection('users').update(existingUser.id, userData);

						// Cari data student berdasarkan user_id
						const existingStudents = await pb.collection('students').getList(1, 1, {
							filter: `user_id = "${existingUser.id}"`
						});

						if (existingStudents.items.length > 0) {
							// Update student jika sudah ada
							await pb.collection('students').update(existingStudents.items[0].id, studentData);
						} else {
							// Jika belum ada, buat data student baru dengan user_id
							await pb.collection('students').create({ ...studentData, user_id: existingUser.id });
						}
					} else {
						// Jika user belum ada, buat user baru
						const newUser = await pb.collection('users').create(userData);
						// Buat data student baru dengan user_id baru
						await pb.collection('students').create({ ...studentData, user_id: newUser.id });
					}

					successCount++;
				} catch (rowError) {
					console.error(`Error processing row ${i}:`, rowError);
					errorCount++;
				}
			}

			importStatus = `Impor selesai: ${successCount} siswa berhasil diimpor/diperbarui, ${errorCount} kesalahan.`;

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
