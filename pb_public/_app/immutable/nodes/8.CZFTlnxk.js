import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import {
	p as Z,
	ag as aa,
	ah as ea,
	s as e,
	f as sa,
	v as t,
	ai as U,
	a as ia,
	q as I,
	c as i,
	r as s,
	n as G,
	t as ta
} from '../chunks/DQMf8gWK.js';
import { s as v } from '../chunks/CPLw4cna.js';
import { e as la, i as va } from '../chunks/Ds4ehkC6.js';
import { h as na } from '../chunks/BpBSPw76.js';
import { t as j, a as y } from '../chunks/BGOrq1ZG.js';
import { r as ra } from '../chunks/DvbRtjlS.js';
import { e as L } from '../chunks/BTRVP7y_.js';
import { b as da } from '../chunks/BTx9E6zY.js';
import { i as oa } from '../chunks/fNOI7Wql.js';
import { Q as ua } from '../chunks/aI2ZlL8u.js';
var za = j(
		'<div class="card-pair svelte-zeuznb"><div class="id-card id-card-front svelte-zeuznb"><div class="header svelte-zeuznb"><div class="school-logo svelte-zeuznb"><img src="/api/placeholder/70/70" alt="Logo MTs" class="svelte-zeuznb"></div> <div class="school-name svelte-zeuznb">MTs NEGERI 2 KOLAKA UTARA</div> <div class="school-address svelte-zeuznb">Jl. Poros Sulawesi, Desa Lapolu, Kec. Batu Putih, Kab. Kolaka Utara, Sulawesi Tenggara</div></div> <div class="card-body svelte-zeuznb"><div class="photo-container svelte-zeuznb"><img src="/api/placeholder/125/150" alt="Foto Staff" class="svelte-zeuznb"></div> <div class="position-title svelte-zeuznb"> </div> <div class="student-info svelte-zeuznb"><div class="info-row svelte-zeuznb"><div class="nip-label svelte-zeuznb">NIP:</div> <div class="info-value svelte-zeuznb"> </div></div> <div class="info-row svelte-zeuznb"><div class="info-label svelte-zeuznb">Nama:</div> <div class="info-value svelte-zeuznb"> </div></div> <div class="info-row svelte-zeuznb"><div class="info-label svelte-zeuznb">Alamat:</div> <div class="info-value svelte-zeuznb"> </div></div> <div class="info-row svelte-zeuznb"><div class="info-label svelte-zeuznb">Golongan Darah:</div> <div class="info-value svelte-zeuznb"> </div></div></div> <div class="valid-period svelte-zeuznb"> </div></div> <div class="watermark svelte-zeuznb">MTs NEGERI 2 KOLAKA UTARA</div></div> <div class="id-card id-card-back svelte-zeuznb"><div class="back-header svelte-zeuznb"><div class="back-title svelte-zeuznb">KARTU IDENTITAS STAFF</div> <div class="back-subtitle svelte-zeuznb">MTs NEGERI 2 KOLAKA UTARA</div></div> <div class="rules-container svelte-zeuznb"><div class="rules-title svelte-zeuznb">KETENTUAN PEMEGANG KARTU</div> <ol class="rules-list svelte-zeuznb"><li class="svelte-zeuznb">Kartu identitas ini adalah milik MTs Negeri 2 Kolaka Utara.</li> <li class="svelte-zeuznb">Pemegang kartu wajib menjaga nama baik madrasah.</li> <li class="svelte-zeuznb">Kartu wajib digunakan selama bertugas di madrasah.</li> <li class="svelte-zeuznb">Dilarang meminjamkan kartu kepada orang lain.</li> <li class="svelte-zeuznb">Segera laporkan kehilangan kartu ke bagian administrasi.</li> <li class="svelte-zeuznb">Kartu harus dikembalikan jika tidak lagi bertugas.</li></ol></div> <div class="qr-container svelte-zeuznb"><div class="qr-title svelte-zeuznb">Scan untuk verifikasi identitas</div> <div class="qr-code svelte-zeuznb"><!></div></div> <div class="signature-container svelte-zeuznb"><div class="signature-line svelte-zeuznb"></div> <div class="signature-name svelte-zeuznb">Drs. H. Abdul Karim, M.Pd</div> <div class="signature-title svelte-zeuznb">Kepala Madrasah</div></div> <div class="watermark svelte-zeuznb">MTs NEGERI 2 KOLAKA UTARA</div></div></div>'
	),
	ca = j(
		'<h1 class="svelte-zeuznb">ID Card Generator Staff MTs Negeri 2 Kolaka Utara</h1> <div class="controls svelte-zeuznb"><label for="num-cards">Jumlah Kartu:</label> <input type="number" id="num-cards" min="1" max="10" class="svelte-zeuznb"> <button class="svelte-zeuznb">Buat Kartu</button> <button class="svelte-zeuznb">Cetak Kartu</button></div> <div class="card-container svelte-zeuznb"></div>',
		1
	);
function Sa(B, C) {
	Z(C, !1);
	const f = [
			{ name: 'Drs. H. Abdul Karim, M.Pd', position: 'Kepala Madrasah', nip: '196507151990031002' },
			{ name: 'Hj. Nurhayati, S.Pd', position: 'Wakil Kepala Madrasah', nip: '197603222005012004' },
			{ name: 'Ahmad Fauzi, S.Pd', position: 'Wali Kelas IX.A', nip: '198505172010011008' },
			{ name: 'Siti Aminah, S.Pd', position: 'Guru BK', nip: '198909122015012006' },
			{ name: 'Muhammad Rizki, S.E', position: 'Staff Tata Usaha', nip: '199203152018011005' }
		],
		h = ['Desa Sulawi', 'Desa Ponggiha', 'Desa Lapolu', 'Desa Tojabi'];
	let n = U(3),
		g = U([]);
	function q(l) {
		const a = ua(4, 'L');
		return a.addData(l), a.make(), a.createSvgTag({ cellSize: 4, margin: 1 });
	}
	function O(l) {
		const a = f[l % f.length];
		return {
			id: a.nip,
			name: a.name,
			position: a.position,
			address: h[Math.floor(Math.random() * h.length)],
			bloodType: ['A', 'B', 'AB', 'O'][Math.floor(Math.random() * 4)],
			validThru: '31 Desember 2025'
		};
	}
	function _() {
		I(
			g,
			Array(t(n))
				.fill()
				.map((l, a) => O(a))
		);
	}
	function F() {
		window.print();
	}
	aa(
		() => {},
		() => {
			_();
		}
	),
		ea(),
		oa();
	var A = ca(),
		r = e(sa(A), 2),
		d = e(i(r), 2);
	ra(d);
	var k = e(d, 2),
		$ = e(k, 2);
	s(r);
	var K = e(r, 2);
	la(
		K,
		5,
		() => t(g),
		va,
		(l, a) => {
			var o = za(),
				u = i(o),
				T = e(i(u), 2),
				z = e(i(T), 2),
				H = i(z, !0);
			s(z);
			var c = e(z, 2),
				b = i(c),
				M = e(i(b), 2),
				J = i(M, !0);
			s(M), s(b);
			var m = e(b, 2),
				S = e(i(m), 2),
				Q = i(S, !0);
			s(S), s(m);
			var p = e(m, 2),
				N = e(i(p), 2),
				W = i(N, !0);
			s(N), s(p);
			var D = e(p, 2),
				E = e(i(D), 2),
				X = i(E, !0);
			s(E), s(D), s(c);
			var R = e(c, 2),
				V = i(R);
			s(R), s(T), G(2), s(u);
			var w = e(u, 2),
				P = e(i(w), 4),
				x = e(i(P), 2),
				Y = i(x);
			na(Y, () => q(`NIP:${t(a).id},NAMA:${t(a).name},JABATAN:${t(a).position}`)),
				s(x),
				s(P),
				G(4),
				s(w),
				s(o),
				ta(() => {
					v(H, t(a).position),
						v(J, t(a).id),
						v(Q, t(a).name),
						v(W, t(a).address),
						v(X, t(a).bloodType),
						v(V, `Berlaku s/d ${t(a).validThru ?? ''}`);
				}),
				y(l, o);
		}
	),
		s(K),
		da(
			d,
			() => t(n),
			(l) => I(n, l)
		),
		L('click', k, _),
		L('click', $, F),
		y(B, A),
		ia();
}
export { Sa as component };
