<!-- <script>
	import qrcode from 'qrcode-generator';

	const staffData = [
		{
			name: 'Drs. H. Abdul Karim, M.Pd',
			position: 'Kepala Madrasah',
			nip: '196507151990031002'
		},
		{
			name: 'Hj. Nurhayati, S.Pd',
			position: 'Wakil Kepala Madrasah',
			nip: '197603222005012004'
		},
		{
			name: 'Ahmad Fauzi, S.Pd',
			position: 'Wali Kelas IX.A',
			nip: '198505172010011008'
		},
		{
			name: 'Siti Aminah, S.Pd',
			position: 'Guru BK',
			nip: '198909122015012006'
		},
		{
			name: 'Muhammad Rizki, S.E',
			position: 'Staff Tata Usaha',
			nip: '199203152018011005'
		}
	];

	const addresses = ['Desa Sulawi', 'Desa Ponggiha', 'Desa Lapolu', 'Desa Tojabi'];

	let numCards = 3;
	let cards = [];

	function createQR(text) {
		const qr = qrcode(4, 'L');
		qr.addData(text);
		qr.make();
		return qr.createSvgTag({ cellSize: 4, margin: 1 });
	}

	function generateRandomData(index) {
		const staff = staffData[index % staffData.length];
		return {
			id: staff.nip,
			name: staff.name,
			position: staff.position,
			address: addresses[Math.floor(Math.random() * addresses.length)],
			bloodType: ['A', 'B', 'AB', 'O'][Math.floor(Math.random() * 4)],
			validThru: '31 Desember 2025'
		};
	}

	function generateCards() {
		cards = Array(numCards)
			.fill()
			.map((_, i) => generateRandomData(i));
	}

	function printCards() {
		window.print();
	}

	$: {
		generateCards();
	}
</script>

<h1>ID Card Generator Staff MTs Negeri 2 Kolaka Utara</h1>

<div class="controls">
	<label for="num-cards">Jumlah Kartu:</label>
	<input type="number" id="num-cards" bind:value={numCards} min="1" max="10" />
	<button on:click={generateCards}>Buat Kartu</button>
	<button on:click={printCards}>Cetak Kartu</button>
</div>

<div class="card-container">
	{#each cards as card, i (i)}
		<div class="card-pair">
			<div class="id-card id-card-front">
				<div class="header">
					<div class="school-logo">
						<img src="/api/placeholder/70/70" alt="Logo MTs" />
					</div>
					<div class="school-name">MTs NEGERI 2 KOLAKA UTARA</div>
					<div class="school-address">
						Jl. Poros Sulawesi, Desa Lapolu, Kec. Batu Putih, Kab. Kolaka Utara, Sulawesi Tenggara
					</div>
				</div>

				<div class="card-body">
					<div class="photo-container">
						<img src="/api/placeholder/125/150" alt="Foto Staff" />
					</div>

					<div class="position-title">{card.position}</div>

					<div class="student-info">
						<div class="info-row">
							<div class="nip-label">NIP:</div>
							<div class="info-value">{card.id}</div>
						</div>
						<div class="info-row">
							<div class="info-label">Nama:</div>
							<div class="info-value">{card.name}</div>
						</div>
						<div class="info-row">
							<div class="info-label">Alamat:</div>
							<div class="info-value">{card.address}</div>
						</div>
						<div class="info-row">
							<div class="info-label">Golongan Darah:</div>
							<div class="info-value">{card.bloodType}</div>
						</div>
					</div>

					<div class="valid-period">
						Berlaku s/d {card.validThru}
					</div>
				</div>

				<div class="watermark">MTs NEGERI 2 KOLAKA UTARA</div>
			</div>

			<div class="id-card id-card-back">
				<div class="back-header">
					<div class="back-title">KARTU IDENTITAS STAFF</div>
					<div class="back-subtitle">MTs NEGERI 2 KOLAKA UTARA</div>
				</div>

				<div class="rules-container">
					<div class="rules-title">KETENTUAN PEMEGANG KARTU</div>
					<ol class="rules-list">
						<li>Kartu identitas ini adalah milik MTs Negeri 2 Kolaka Utara.</li>
						<li>Pemegang kartu wajib menjaga nama baik madrasah.</li>
						<li>Kartu wajib digunakan selama bertugas di madrasah.</li>
						<li>Dilarang meminjamkan kartu kepada orang lain.</li>
						<li>Segera laporkan kehilangan kartu ke bagian administrasi.</li>
						<li>Kartu harus dikembalikan jika tidak lagi bertugas.</li>
					</ol>
				</div>

				<div class="qr-container">
					<div class="qr-title">Scan untuk verifikasi identitas</div>
					<div class="qr-code">
						{@html createQR(`NIP:${card.id},NAMA:${card.name},JABATAN:${card.position}`)}
					</div>
				</div>

				<div class="signature-container">
					<div class="signature-line"></div>
					<div class="signature-name">Drs. H. Abdul Karim, M.Pd</div>
					<div class="signature-title">Kepala Madrasah</div>
				</div>

				<div class="watermark">MTs NEGERI 2 KOLAKA UTARA</div>
			</div>
		</div>
	{/each}
</div>

<style>
	/* :global(body) {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
		background-color: #f0f8f0;
	} */

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
	}

	button {
		padding: 10px 20px;
		background-color: #0a5c36;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-right: 10px;
		font-weight: 500;
		transition: background-color 0.3s;
	}

	button:hover {
		background-color: #083e25;
	}

	input[type='number'] {
		padding: 8px 12px;
		width: 70px;
		border: 1px solid #ccc;
		border-radius: 4px;
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
		background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
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
		border: 2px solid #1a237e;
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

	.position-title {
		font-size: 18px;
		font-weight: bold;
		color: #1a237e;
		text-align: center;
		margin: 10px 0;
		text-transform: uppercase;
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

	.info-label,
	.nip-label {
		font-weight: 600;
		width: 100px;
		color: #1a237e;
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
		color: #1a237e;
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
		color: #1a237e;
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

	@media print {
		/* :global(body) {
			width: 100%;
			max-width: none;
			margin: 0;
			padding: 0;
			background-color: white;
		} */

		.controls,
		h1 {
			display: none;
		}

		.card-container {
			display: block;
			page-break-inside: avoid;
		}

		.card-pair {
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 20px;
			page-break-inside: avoid;
			page-break-after: always;
			margin-bottom: 0;
			padding: 20px 0;
		}

		.id-card {
			break-inside: avoid;
			page-break-inside: avoid;
			box-shadow: none;
			width: 400px;
			height: 700px;
		}

		.id-card-front,
		.id-card-back {
			border: 1px solid #000 !important;
		}

		.header {
			background: #1a237e !important;
			-webkit-print-color-adjust: exact !important;
			print-color-adjust: exact !important;
		}

		.photo-container {
			border: 2px solid #000 !important;
		}

		:global(*) {
			-webkit-print-color-adjust: exact !important;
			print-color-adjust: exact !important;
		}
	}
</style> -->

<script>
	import IdcardEmployeePrint from '$lib/components/idcard-employee-print.svelte';
</script>

<IdcardEmployeePrint />
