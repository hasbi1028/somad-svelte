<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { pb } from "$lib/pocketbase.svelte"; // pastikan konfigurasi Pocketbase sudah sesuai

	// State untuk scanner, hasil scan, dan pesan error
	let scanner: any = null;
	let qrResult = "";
	let errorMessage = "";
	let scanning = false;
	let eventType: string = "check_in"; // default event type

	// Variabel untuk menyimpan QR code terakhir yang diproses
	let lastScannedCode = "";

	/**
	 * Fungsi yang dipanggil ketika QR Code berhasil discan.
	 * Menerima teks hasil scan, kemudian mem-parsing dan membuat attendance log.
	 */
	function onScanSuccess(decodedText: string, decodedResult: any) {
		// Jika QR code sama dengan sebelumnya, jangan proses lagi
		if (decodedText === lastScannedCode) {
			errorMessage = "QR code yang sama tidak dapat digunakan berurutan. Silakan scan QR code yang berbeda.";
			console.warn("Duplicate QR code detected:", decodedText);
			return;
		}

		lastScannedCode = decodedText; // update QR code terakhir
		qrResult = decodedText;
		errorMessage = "";
		console.log("QR Code discan:", decodedText);

		// Parsing data QR Code dengan asumsi format: "NISM:xxx,NISN:xxx,NAMA:xxx,KELAS:xxx"
		let studentData: Record<string, string> = {};
		try {
			decodedText.split(",").forEach(part => {
				const [key, value] = part.split(":");
				if (key && value) {
					studentData[key.trim()] = value.trim();
				}
			});
			// Buat attendance log menggunakan data yang diparsing
			createAttendanceLog(studentData);
		} catch (err) {
			console.error("Error saat parsing QR Code:", err);
			errorMessage = "Error dalam memproses data QR Code.";
		}
	}

	/**
	 * Membuat log attendance di Pocketbase.
	 * Anda dapat menyesuaikan payload sesuai kebutuhan, misalnya menambahkan field user_id jika diperlukan.
	 */
	async function createAttendanceLog(studentData: Record<string, string>) {
		try {
			// Mendapatkan posisi secara asinkron dan mengemasnya ke dalam payload
			const position = await new Promise<{ latitude: number | null; longitude: number | null }>((resolve) => {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(
						(position) => {
							resolve({
								latitude: position.coords.latitude,
								longitude: position.coords.longitude
							});
						},
						(err) => {
							console.error("Gagal mendapatkan posisi:", err);
							resolve({ latitude: null, longitude: null });
						}
					);
				} else {
					resolve({ latitude: null, longitude: null });
				}
			});

			const payload = {
				user_id: studentData.ID,
				event_type: eventType,
				event_time: new Date().toISOString(),
				device_info: navigator.userAgent,
				device_location: 'gerbang',
				latitude: position.latitude,
				longitude: position.longitude,
				ip_address: await (await fetch("https://api.ipify.org?format=text")).text()
			};

			console.log("Payload:", payload);
			console.log("Student Data:", studentData);

			const record = await pb.collection("attendance_log").create(payload);
			console.log("Attendance log berhasil dibuat:", record);
			alert("Absensi berhasil dicatat!");
		} catch (err) {
			console.error("Gagal mencatat attendance:", err);
			errorMessage = "Gagal mencatat absensi.";
		}
	}

	/**
	 * Inisialisasi scanner menggunakan library html5-qrcode.
	 * Konfigurasi scanner (fps dan qrbox) dapat disesuaikan agar sesuai dengan kondisi nyata.
	 */
	async function initializeScanner() {
		try {
			const { Html5QrcodeScanner } = await import("html5-qrcode");
			const config = {
				fps: 10,
				qrbox: { width: 250, height: 250 }
			};
			scanner = new Html5QrcodeScanner("qr-reader", config, false);
			scanner.render(onScanSuccess, (err: any) => {
				console.error("Error pada scanner:", err);
				errorMessage = "Terjadi error pada scanner: " + err;
			});
			scanning = true;
		} catch (err) {
			console.error("Gagal inisialisasi scanner:", err);
			errorMessage = "Gagal memulai scanner.";
		}
	}

	/**
	 * Fungsi untuk merestart scanner (misalnya jika hasil scan sudah diterima dan ingin scan ulang).
	 */
	function restartScanner() {
		if (scanner) {
			scanner.clear().then(() => {
				scanner.render(onScanSuccess, (err: any) => {
					console.error("Error pada scanner:", err);
					errorMessage = "Terjadi error pada scanner: " + err;
				});
			}).catch((err: any) => {
				console.error("Gagal merestart scanner:", err);
				errorMessage = "Gagal merestart scanner.";
			});
		}
	}

	// Inisialisasi scanner ketika komponen dipasang
	onMount(() => {
		initializeScanner();
	});

	// Bersihkan scanner ketika komponen dihancurkan
	onDestroy(() => {
		if (scanner) {
			scanner.clear().catch((err: any) => {
				console.error("Error saat membersihkan scanner:", err);
			});
		}
	});
</script>

<svelte:head>
	<title>Attendance Scanner - Best Practice</title>
</svelte:head>

<main>
	<h1>Attendance QR Code Scanner</h1>
	
	<!-- Pilih event type untuk absensi -->
	<div>
		<label for="eventType">Pilih Jenis Event:</label>
		<select id="eventType" bind:value={eventType}>
			<option value="check_in">Check In</option>
			<option value="check_out">Check Out</option>
			<option value="break_out">Break Out</option>
			<option value="break_in">Break In</option>
			<option value="duty_start">Duty Start</option>
			<option value="duty_end">Duty End</option>
		</select>
	</div>

	<!-- Area untuk scanner -->
	<div id="qr-reader" style="width: 300px; margin: 20px auto;"></div>

	{#if qrResult}
		<div>
			<h2>Hasil Scan:</h2>
			<p>{qrResult}</p>
			<button on:click={restartScanner}>Scan Ulang</button>
		</div>
	{/if}

	{#if errorMessage}
		<p style="color: red;">{errorMessage}</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 20px;
	}
	
	select, button {
		margin: 10px;
		padding: 5px;
	}
	
	#qr-reader {
		margin: 20px auto;
	}
</style>
