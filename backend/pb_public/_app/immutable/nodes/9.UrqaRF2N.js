import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import {
	p as Z,
	ag as aa,
	ah as sa,
	s,
	f as ia,
	g as t,
	ai as P,
	a as ea,
	e as U,
	c as e,
	r as i,
	n as I,
	t as ta
} from '../chunks/BHafZ7-g.js';
import { s as v } from '../chunks/709vCQOk.js';
import { e as la, i as va } from '../chunks/CNlA5Cx2.js';
import { h as ra } from '../chunks/Bjx_aVGJ.js';
import { t as B, e as G, a as L } from '../chunks/D4wBL3Sd.js';
import { r as da } from '../chunks/eK_4uKAs.js';
import { b as ca } from '../chunks/DOrg4k1C.js';
import { i as na } from '../chunks/CBZYCnD7.js';
import { Q as oa } from '../chunks/aI2ZlL8u.js';
var ma = B(
		'<div class="card-pair svelte-1icjysx"><div class="id-card id-card-front svelte-1icjysx"><div class="header svelte-1icjysx"><div class="school-logo svelte-1icjysx"><img src="/api/placeholder/70/70" alt="Logo MTs" class="svelte-1icjysx"></div> <div class="school-name svelte-1icjysx">MTs NEGERI 2 KOLAKA UTARA</div> <div class="school-address svelte-1icjysx">Jl. Poros Sulawesi, Desa Lapolu, Kec. Batu Putih, Kab. Kolaka Utara, Sulawesi Tenggara</div></div> <div class="card-body svelte-1icjysx"><div class="photo-container svelte-1icjysx"><img src="/api/placeholder/125/150" alt="Foto Staff" class="svelte-1icjysx"></div> <div class="position-title svelte-1icjysx"> </div> <div class="student-info svelte-1icjysx"><div class="info-row svelte-1icjysx"><div class="nip-label svelte-1icjysx">NIP:</div> <div class="info-value svelte-1icjysx"> </div></div> <div class="info-row svelte-1icjysx"><div class="info-label svelte-1icjysx">Nama:</div> <div class="info-value svelte-1icjysx"> </div></div> <div class="info-row svelte-1icjysx"><div class="info-label svelte-1icjysx">Alamat:</div> <div class="info-value svelte-1icjysx"> </div></div> <div class="info-row svelte-1icjysx"><div class="info-label svelte-1icjysx">Golongan Darah:</div> <div class="info-value svelte-1icjysx"> </div></div></div> <div class="valid-period svelte-1icjysx"> </div></div> <div class="watermark svelte-1icjysx">MTs NEGERI 2 KOLAKA UTARA</div></div> <div class="id-card id-card-back svelte-1icjysx"><div class="back-header svelte-1icjysx"><div class="back-title svelte-1icjysx">KARTU IDENTITAS STAFF</div> <div class="back-subtitle svelte-1icjysx">MTs NEGERI 2 KOLAKA UTARA</div></div> <div class="rules-container svelte-1icjysx"><div class="rules-title svelte-1icjysx">KETENTUAN PEMEGANG KARTU</div> <ol class="rules-list svelte-1icjysx"><li class="svelte-1icjysx">Kartu identitas ini adalah milik MTs Negeri 2 Kolaka Utara.</li> <li class="svelte-1icjysx">Pemegang kartu wajib menjaga nama baik madrasah.</li> <li class="svelte-1icjysx">Kartu wajib digunakan selama bertugas di madrasah.</li> <li class="svelte-1icjysx">Dilarang meminjamkan kartu kepada orang lain.</li> <li class="svelte-1icjysx">Segera laporkan kehilangan kartu ke bagian administrasi.</li> <li class="svelte-1icjysx">Kartu harus dikembalikan jika tidak lagi bertugas.</li></ol></div> <div class="qr-container svelte-1icjysx"><div class="qr-title svelte-1icjysx">Scan untuk verifikasi identitas</div> <div class="qr-code svelte-1icjysx"><!></div></div> <div class="signature-container svelte-1icjysx"><div class="signature-line svelte-1icjysx"></div> <div class="signature-name svelte-1icjysx">Drs. H. Abdul Karim, M.Pd</div> <div class="signature-title svelte-1icjysx">Kepala Madrasah</div></div> <div class="watermark svelte-1icjysx">MTs NEGERI 2 KOLAKA UTARA</div></div></div>'
	),
	ua = B(
		'<h1 class="svelte-1icjysx">ID Card Generator Staff MTs Negeri 2 Kolaka Utara</h1> <div class="controls svelte-1icjysx"><label for="num-cards">Jumlah Kartu:</label> <input type="number" id="num-cards" min="1" max="10" class="svelte-1icjysx"> <button class="svelte-1icjysx">Buat Kartu</button> <button class="svelte-1icjysx">Cetak Kartu</button></div> <div class="card-container svelte-1icjysx"></div>',
		1
	);
function Ka(C, O) {
	Z(O, !1);
	const j = [
			{ name: 'Drs. H. Abdul Karim, M.Pd', position: 'Kepala Madrasah', nip: '196507151990031002' },
			{ name: 'Hj. Nurhayati, S.Pd', position: 'Wakil Kepala Madrasah', nip: '197603222005012004' },
			{ name: 'Ahmad Fauzi, S.Pd', position: 'Wali Kelas IX.A', nip: '198505172010011008' },
			{ name: 'Siti Aminah, S.Pd', position: 'Guru BK', nip: '198909122015012006' },
			{ name: 'Muhammad Rizki, S.E', position: 'Staff Tata Usaha', nip: '199203152018011005' }
		],
		f = ['Desa Sulawi', 'Desa Ponggiha', 'Desa Lapolu', 'Desa Tojabi'];
	let r = P(3),
		g = P([]);
	function q(l) {
		const a = oa(4, 'L');
		return a.addData(l), a.make(), a.createSvgTag({ cellSize: 4, margin: 1 });
	}
	function F(l) {
		const a = j[l % j.length];
		return {
			id: a.nip,
			name: a.name,
			position: a.position,
			address: f[Math.floor(Math.random() * f.length)],
			bloodType: ['A', 'B', 'AB', 'O'][Math.floor(Math.random() * 4)],
			validThru: '31 Desember 2025'
		};
	}
	function h() {
		U(
			g,
			Array(t(r))
				.fill()
				.map((l, a) => F(a))
		);
	}
	function $() {
		window.print();
	}
	aa(
		() => {},
		() => {
			h();
		}
	),
		sa(),
		na();
	var _ = ua(),
		d = s(ia(_), 2),
		c = s(e(d), 2);
	da(c);
	var b = s(c, 2),
		z = s(b, 2);
	i(d);
	var A = s(d, 2);
	la(
		A,
		5,
		() => t(g),
		va,
		(l, a) => {
			var n = ma(),
				o = e(n),
				k = s(e(o), 2),
				m = s(e(k), 2),
				H = e(m, !0);
			i(m);
			var u = s(m, 2),
				p = e(u),
				K = s(e(p), 2),
				J = e(K, !0);
			i(K), i(p);
			var x = s(p, 2),
				T = s(e(x), 2),
				Q = e(T, !0);
			i(T), i(x);
			var y = s(x, 2),
				M = s(e(y), 2),
				W = e(M, !0);
			i(M), i(y);
			var S = s(y, 2),
				N = s(e(S), 2),
				X = e(N, !0);
			i(N), i(S), i(u);
			var D = s(u, 2),
				V = e(D);
			i(D), i(k), I(2), i(o);
			var E = s(o, 2),
				R = s(e(E), 4),
				w = s(e(R), 2),
				Y = e(w);
			ra(Y, () => q(`NIP:${t(a).id},NAMA:${t(a).name},JABATAN:${t(a).position}`)),
				i(w),
				i(R),
				I(4),
				i(E),
				i(n),
				ta(() => {
					v(H, t(a).position),
						v(J, t(a).id),
						v(Q, t(a).name),
						v(W, t(a).address),
						v(X, t(a).bloodType),
						v(V, `Berlaku s/d ${t(a).validThru ?? ''}`);
				}),
				L(l, n);
		}
	),
		i(A),
		ca(
			c,
			() => t(r),
			(l) => U(r, l)
		),
		G('click', b, h),
		G('click', z, $),
		L(C, _),
		ea();
}
export { Ka as component };
