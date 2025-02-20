<script lang="ts">
	import { writable } from 'svelte/store';
	import './print.css';
	import QRCode from 'qrcode-generator';
	import { pb } from '$lib/pocketbase.svelte';

	// Interface untuk tipe data kartu siswa (ditambah field position)
	interface StudentCard {
		id: string;
		nism: string;
		nisn: string;
		user_id: string;
		name: string;
		class: string;
		address: string;
		dob: string;
		bloodType: string;
		academicYear: string;
		validThru: string;
		position: string;
	}

	// Store untuk menyimpan data kartu siswa
	let cards = writable<StudentCard[]>([]);
	// Variabel untuk menyimpan data kelas dari Pocketbase
	let classesData: any[] = [];

	// Variabel untuk filter kelas (default: 'all' untuk menampilkan semua)
	let selectedClass: string = 'all';

	// Variabel reaktif untuk menyaring kartu berdasarkan kelas yang dipilih
	$: filteredCards = $cards.filter(card => selectedClass === 'all' || card.class === selectedClass);

	// Fungsi generate QR code menggunakan qrcode-generator
	function generateQRCode(data: StudentCard): string {
		try {
			const qrData = `ID:${data.user_id},BERLAKU SAMPAI:${data.validThru}`;
			const typeNumber = 4;
			const errorCorrectionLevel = 'L';
			const qr = QRCode(typeNumber, errorCorrectionLevel);
			qr.addData(qrData);
			qr.make();
			return qr.createSvgTag({ cellSize: 4, margin: 1 });
		} catch (err) {
			console.error('Error generating QR code:', err);
			return '';
		}
	}

	// Fungsi untuk mengambil data dari Pocketbase dan melakukan mapping
	async function generateCards() {
		try {
			// Ambil data secara paralel dari koleksi yang berkaitan
			const [students, users, classes, positions] = await Promise.all([
				pb.collection('students').getFullList(),
				pb.collection('users').getFullList(),
				pb.collection('classes').getFullList(),
				pb.collection('positions').getFullList()
			]);

			// Simpan data kelas ke variabel classesData untuk digunakan pada select
			classesData = classes;

			// Buat mapping untuk memudahkan pencarian berdasarkan id
			const userMap = Object.fromEntries(users.map(u => [u.id, u]));
			const classMap = Object.fromEntries(classes.map(c => [c.id, c]));
			const positionMap = Object.fromEntries(positions.map(p => [p.id, p]));

			const studentCards = students.map(s => {
				// Cari data user dan class berdasarkan id
				const user = userMap[s.user_id] || {};
				const classData = classMap[s.class_id] || {};
				// Ambil data posisi dari user jika ada (user.position_id)
				const position: any = user.position_id ? positionMap[user.position_id] || {} : {};

				// Contoh penghitungan academicYear dan validThru berdasarkan field entry_year
				const academicYear = s.entry_year ? `${s.entry_year}/${Number(s.entry_year) + 1}` : '2024/2025';
				const validThru = s.entry_year ? `31 Juli ${Number(s.entry_year) + 1}` : '31 Juli 2025';

				return {
					id: s.id,
					nism: s.nism || '',
					nisn: s.nisn || '',
					user_id: s.user_id,
					name: user.full_name || '',
					class: classData.name || '',
					address: user.address || '',
					dob: user.birth_date || '',
					bloodType: user.blood_type || '',
					academicYear,
					validThru,
					position: position.name || ''
				};
			});

			cards.set(studentCards);
		} catch (err) {
			console.error('Error fetching cards:', err);
		}
	}

	// Fungsi untuk mencetak ID Card
	function handlePrint() {
		window.print();
	}
</script>

<svelte:head>
	<title>ID Card Generator MTs Negeri 2 Kolaka Utara</title>
</svelte:head>

<main>
	<h1>ID Card Generator MTs Negeri 2 Kolaka Utara</h1>

	<div class="controls">
		<!-- Tombol untuk mengambil data dari Pocketbase dan melakukan mapping -->
		<button on:click={generateCards}>Ambil Semua Kartu</button>
		<!-- Select untuk memilih kelas berdasarkan data kelas dari Pocketbase -->
		<label for="classSelect">Pilih Kelas: </label>
		<select id="classSelect" bind:value={selectedClass}>
			<option value="all">Semua</option>
			{#each classesData as kelas}
				<option value={kelas.name}>{kelas.name}</option>
			{/each}
		</select>
		<!-- Tombol untuk mencetak kartu berdasarkan filter kelas -->
		<button on:click={handlePrint}>Cetak Kartu</button>
	</div>

	<div class="card-container">
		{#each filteredCards as card (card.id)}
			<div class="card-pair">
				<!-- Kartu Sisi Depan -->
				<div class="id-card id-card-front rounded-lg">
					<div class="header">
						<div class="school-logo">
							<img src="/favicon.png" alt="Logo MTs" />
						</div>
						<div class="school-name">MTs NEGERI 2 KOLAKA UTARA</div>
						<div class="school-address">
							Jl. Lalume No. 42, Kel. Olo - Oloho, Kec. Pakue, Kab. Kolaka Utara, Sulawesi Tenggara
						</div>
					</div>

					<div class="card-body">
						<div class="photo-container">
							<img src="https://placehold.co/120x150" alt="Foto Siswa" />
						</div>

						<div class="student-info">
							<div class="info-row">
								<div class="info-label">NISM:</div>
								<div class="info-value">{card.nism}</div>
							</div>
							<div class="info-row">
								<div class="info-label">NISN:</div>
								<div class="info-value">{card.nisn}</div>
							</div>
							<div class="info-row">
								<div class="info-label">Nama:</div>
								<div class="info-value">{card.name}</div>
							</div>
							<div class="info-row">
								<div class="info-label">Kelas:</div>
								<div class="info-value">{card.class}</div>
							</div>
							<div class="info-row">
								<div class="info-label">TTL:</div>
								<div class="info-value">
									{new Date(card.dob).toLocaleString('id-ID', {
										day: 'numeric',
										month: 'long',
										year: 'numeric'
									})}
								</div>
							</div>
							<div class="info-row">
								<div class="info-label">Alamat:</div>
								<div class="info-value">{card.address}</div>
							</div>
							<div class="info-row">
								<div class="info-label">Gol.Darah:</div>
								<div class="info-value">{card.bloodType}</div>
							</div>
							<div class="info-row">
								<div class="info-label">Posisi:</div>
								<div class="info-value">{card.position}</div>
							</div>
						</div>

						<div class="valid-period">
							Tahun Pelajaran {card.academicYear} - Berlaku s/d {card.validThru}
						</div>
					</div>

					<div class="watermark">MTs NEGERI 2 KOLAKA UTARA</div>
				</div>

				<!-- Kartu Sisi Belakang -->
				<div class="id-card id-card-back">
					<div class="back-header">
						<div class="back-title">KARTU PELAJAR</div>
						<div class="back-subtitle">MTs NEGERI 2 KOLAKA UTARA</div>
					</div>

					<div class="rules-container">
						<div class="rules-title">TATA TERTIB SISWA</div>
						<ol class="rules-list">
							<li>Siswa wajib menjaga nama baik madrasah.</li>
							<li>Siswa wajib memakai seragam sesuai ketentuan.</li>
							<li>Siswa wajib hadir tepat waktu.</li>
							<li>Dilarang membawa HP ke madrasah.</li>
							<li>Dilarang merokok dan membawa benda tajam.</li>
							<li>Siswa wajib menjaga kebersihan lingkungan.</li>
							<li>Kartu ini wajib dibawa setiap hari.</li>
							<li>Jika kartu hilang, segera laporkan ke TU.</li>
						</ol>
					</div>

					<div class="qr-container">
						<div class="qr-title">Scan untuk verifikasi identitas</div>
						<div class="qr-code">
							{@html generateQRCode(card)}
						</div>
					</div>

					<div class="signature-container">
						<div class="signature-line"></div>
						<div class="signature-name">Anwar, S.Pd, M.Pd</div>
						<div class="signature-title">Kepala Madrasah</div>
					</div>

					<div class="watermark">MTs NEGERI 2 KOLAKA UTARA</div>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	h1 {
		color: #0a5c36;
		text-align: center;
		margin-bottom: 30px;
	}

	.controls {
		background-color: white;
		padding: 15px;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		margin-bottom: 30px;
		text-align: center;
	}

	button {
		padding: 10px 20px;
		background-color: #0a5c36;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin: 0 10px 10px 0;
		font-weight: 500;
		transition: background-color 0.3s;
	}

	button:hover {
		background-color: #083e25;
	}

	select {
		padding: 8px;
		border-radius: 4px;
		border: 1px solid #ccc;
		font-size: 14px;
	}

	.card-container {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		justify-content: center;
	}

	.card-pair {
		display: flex;
		flex-direction: column;
		gap: 30px;
		margin-bottom: 50px;
	}

	.id-card {
		width: 400px;
		height: 700px;
		position: relative;
		border-radius: 12px;
		overflow: auto;
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
		box-sizing: border-box;
	}

	.id-card-front {
		background: #fff;
		display: flex;
		flex-direction: column;
		border: 1px solid #ddd;
	}

	.header {
		background: linear-gradient(135deg, #0a5c36 0%, #2e8b57 100%);
		color: white;
		padding: 15px 20px;
		text-align: center;
	}

	.school-logo {
		width: 80px;
		height: 80px;
		background-color: white;
		border-radius: 50%;
		padding: 5px;
		margin: 0 auto 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.school-logo img {
		width: 70px;
		height: 70px;
		object-fit: contain;
	}

	.school-name {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 5px;
	}

	.school-address {
		font-size: 12px;
		opacity: 0.9;
	}

	.card-body {
		padding: 20px;
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.photo-container {
		width: 125px;
		height: 150px;
		border: 2px solid #0a5c36;
		margin: 0 auto;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f5f5f5;
	}

	.photo-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.student-info {
		margin-top: 20px;
		flex: 1;
	}

	.info-row {
		display: flex;
		margin-bottom: 8px;
		font-size: 14px;
	}

	.info-label {
		font-weight: 600;
		width: 100px;
		color: #0a5c36;
	}

	.info-value {
		flex: 1;
	}

	.valid-period {
		text-align: center;
		font-size: 12px;
		color: #666;
		margin-top: 15px;
		font-style: italic;
	}

	.id-card-back {
		background: linear-gradient(135deg, #f5f7fa 0%, #e4f5e9 100%);
		padding: 20px;
		display: flex;
		flex-direction: column;
		border: 1px solid #ddd;
	}

	.back-header {
		text-align: center;
		margin-bottom: 20px;
	}

	.back-title {
		font-size: 18px;
		font-weight: bold;
		color: #0a5c36;
		margin-bottom: 5px;
	}

	.back-subtitle {
		font-size: 14px;
		color: #555;
	}

	.rules-container {
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 15px;
		background-color: white;
		margin-bottom: 20px;
		flex: 1;
	}

	.rules-title {
		text-align: center;
		font-weight: bold;
		margin-bottom: 10px;
		color: #0a5c36;
	}

	.rules-list {
		font-size: 12px;
		padding-left: 25px;
	}

	.rules-list li {
		margin-bottom: 6px;
	}

	.qr-container {
		text-align: center;
		margin-bottom: 15px;
	}

	.qr-title {
		font-size: 12px;
		margin-bottom: 5px;
		color: #555;
	}

	.qr-code {
		width: 120px;
		height: 120px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.signature-container {
		text-align: center;
	}

	.signature-line {
		width: 150px;
		height: 1px;
		background-color: #000;
		margin: 40px auto 5px;
	}

	.signature-name {
		font-weight: bold;
		font-size: 12px;
	}

	.signature-title {
		font-size: 11px;
		color: #555;
	}

	.watermark {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
		font-size: 36px;
		color: rgba(0, 0, 0, 0.04);
		pointer-events: none;
		white-space: nowrap;
	}
</style>
