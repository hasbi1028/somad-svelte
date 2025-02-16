<script lang="ts">
  import { writable } from 'svelte/store';
  import './print.css';
  import QRCode from 'qrcode-generator';

  // Interface untuk tipe data kartu siswa
  interface StudentCard {
    id: string;
    nisn: string;
    name: string;
    class: string;
    address: string;
    dob: string;
    bloodType: string;
    academicYear: string;
    validThru: string;
  }

  // Mock data
  const mockData = {
    firstNames: ["Ahmad", "Muhammad", "Siti", "Fatimah", "Nur", "Aisyah", "Rizky", "Fitri", "Ali", "Zahra"],
    lastNames: ["Hidayat", "Syaputra", "Rahmawati", "Pratiwi", "Hasanah", "Ramadhan", "Arif", "Fadillah", "Saputra", "Permata"],
    classes: ["VII A", "VII B", "VIII A", "VIII B", "IX A", "IX B"],
    addresses: ["Desa Sulawi", "Desa Ponggiha", "Desa Samaturu", "Desa Tojabi", "Desa Korobomba", "Desa Lapolu"]
  };

  // State
  let numCards = writable(5);
  let cards = writable<StudentCard[]>([]);

  // Generate random student data
  function generateRandomData(index: number): StudentCard {
    const firstName = mockData.firstNames[Math.floor(Math.random() * mockData.firstNames.length)];
    const lastName = mockData.lastNames[Math.floor(Math.random() * mockData.lastNames.length)];
    const fullName = `${firstName} ${lastName}`;
    const studentClass = mockData.classes[Math.floor(Math.random() * mockData.classes.length)];
    const address = mockData.addresses[Math.floor(Math.random() * mockData.addresses.length)];

    const currentYear = new Date().getFullYear().toString().substr(-2);
    // Pastikan format ID selalu 4 digit
    const idNumber = currentYear + (1000 + index).toString().substr(-4);
    const nisn = "00" + (Math.floor(Math.random() * 90000000) + 10000000).toString();
    const dob = `${10 + Math.floor(Math.random() * 20)}-${1 + Math.floor(Math.random() * 12)}-${2007 + Math.floor(Math.random() * 6)}`;

    return {
      id: idNumber,
      nisn,
      name: fullName,
      class: studentClass,
      address,
      dob,
      bloodType: ["A", "B", "AB", "O"][Math.floor(Math.random() * 4)],
      academicYear: "2024/2025",
      validThru: "31 Juli 2025"
    };
  }

  // Generate QR code menggunakan qrcode-generator
  function generateQRCode(data: StudentCard): string {
    const qrData = `ID:${data.id},NISN:${data.nisn},NAMA:${data.name},KELAS:${data.class}`;
    const typeNumber = 4;
    const errorCorrectionLevel = "L";
    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData(qrData);
    qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 1 });
  }

  // Generate cards
  function generateCards() {
    const newCards = Array.from({ length: $numCards }, (_, i) => generateRandomData(i));
    cards.set(newCards);
  }

  function handlePrint() {
    window.print();
  }
</script>

<svelte:head>
  <title>ID Card Generator MTs Negeri 2 Kolaka Utara</title>
  <!-- Jika menggunakan qrcode-generator via npm, tidak perlu menyertakan script CDN -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"></script> -->
</svelte:head>

<main>
  <h1>ID Card Generator MTs Negeri 2 Kolaka Utara</h1>

  <div class="controls">
    <label for="num-cards">Jumlah Kartu:</label>
    <input type="number" id="num-cards" bind:value={$numCards} min="1" max="30" />
    <button on:click={generateCards}>Buat Kartu</button>
    <button on:click={handlePrint}>Cetak Kartu</button>
  </div>

  <div class="card-container">
    {#each $cards as card (card.id)}
      <div class="card-pair">
        <!-- Front Card -->
        <div class="id-card id-card-front rounded-lg">
          <div class="header">
            <div class="school-logo">
              <img src="/favicon.png" alt="Logo MTs">
            </div>
            <div class="school-name">MTs NEGERI 2 KOLAKA UTARA</div>
            <div class="school-address">
              Jl. Poros Sulawesi, Desa Lapolu, Kec. Batu Putih, Kab. Kolaka Utara, Sulawesi Tenggara
            </div>
          </div>
          
          <div class="card-body">
            <div class="photo-container">
              <img src="https://placehold.co/120x150" alt="Foto Siswa">
            </div>
            
            <div class="student-info">
              <div class="info-row">
                <div class="info-label">NIS:</div>
                <div class="info-value">{card.id}</div>
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
                <div class="info-value">{card.dob}</div>
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
              Tahun Pelajaran {card.academicYear} - Berlaku s/d {card.validThru}
            </div>
          </div>
          
          <div class="watermark">MTs NEGERI 2 KOLAKA UTARA</div>
        </div>

        <!-- Back Card -->
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
            <div class="signature-name">Drs. H. Abdul Karim, M.Pd</div>
            <div class="signature-title">Kepala Madrasah</div>
          </div>
          
          <div class="watermark">MTs NEGERI 2 KOLAKA UTARA</div>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
  /* Gabungkan style duplikat untuk body dan h1 */
  :global(body) {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f8f0;
  }

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

  input[type="number"] {
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
