import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import {
	p as Z,
	ag as aa,
	ah as sa,
	s,
	f as ea,
	g as t,
	ai as I,
	a as ia,
	e as G,
	c as i,
	r as e,
	n as y,
	t as ta
} from '../chunks/BHafZ7-g.js';
import { s as v } from '../chunks/709vCQOk.js';
import { e as la, i as va } from '../chunks/CNlA5Cx2.js';
import { h as ra } from '../chunks/Bjx_aVGJ.js';
import { t as B, e as L, a as j } from '../chunks/D4wBL3Sd.js';
import { r as da } from '../chunks/eK_4uKAs.js';
import { b as ca } from '../chunks/DOrg4k1C.js';
import { i as na } from '../chunks/CBZYCnD7.js';
import { Q as oa } from '../chunks/aI2ZlL8u.js';
var ha = B(
		'<div class="card-pair svelte-wxs4ch"><div class="id-card id-card-front svelte-wxs4ch"><div class="header svelte-wxs4ch"><div class="school-logo svelte-wxs4ch"><img src="/api/placeholder/70/70" alt="Logo MTs" class="svelte-wxs4ch"></div> <div class="school-name svelte-wxs4ch">MTs NEGERI 2 KOLAKA UTARA</div> <div class="school-address svelte-wxs4ch">Jl. Poros Sulawesi, Desa Lapolu, Kec. Batu Putih, Kab. Kolaka Utara, Sulawesi Tenggara</div></div> <div class="card-body svelte-wxs4ch"><div class="photo-container svelte-wxs4ch"><img src="/api/placeholder/125/150" alt="Foto Staff" class="svelte-wxs4ch"></div> <div class="position-title svelte-wxs4ch"> </div> <div class="student-info svelte-wxs4ch"><div class="info-row svelte-wxs4ch"><div class="nip-label svelte-wxs4ch">NIP:</div> <div class="info-value svelte-wxs4ch"> </div></div> <div class="info-row svelte-wxs4ch"><div class="info-label svelte-wxs4ch">Nama:</div> <div class="info-value svelte-wxs4ch"> </div></div> <div class="info-row svelte-wxs4ch"><div class="info-label svelte-wxs4ch">Alamat:</div> <div class="info-value svelte-wxs4ch"> </div></div> <div class="info-row svelte-wxs4ch"><div class="info-label svelte-wxs4ch">Golongan Darah:</div> <div class="info-value svelte-wxs4ch"> </div></div></div> <div class="valid-period svelte-wxs4ch"> </div></div> <div class="watermark svelte-wxs4ch">MTs NEGERI 2 KOLAKA UTARA</div></div> <div class="id-card id-card-back svelte-wxs4ch"><div class="back-header svelte-wxs4ch"><div class="back-title svelte-wxs4ch">KARTU IDENTITAS STAFF</div> <div class="back-subtitle svelte-wxs4ch">MTs NEGERI 2 KOLAKA UTARA</div></div> <div class="rules-container svelte-wxs4ch"><div class="rules-title svelte-wxs4ch">KETENTUAN PEMEGANG KARTU</div> <ol class="rules-list svelte-wxs4ch"><li class="svelte-wxs4ch">Kartu identitas ini adalah milik MTs Negeri 2 Kolaka Utara.</li> <li class="svelte-wxs4ch">Pemegang kartu wajib menjaga nama baik madrasah.</li> <li class="svelte-wxs4ch">Kartu wajib digunakan selama bertugas di madrasah.</li> <li class="svelte-wxs4ch">Dilarang meminjamkan kartu kepada orang lain.</li> <li class="svelte-wxs4ch">Segera laporkan kehilangan kartu ke bagian administrasi.</li> <li class="svelte-wxs4ch">Kartu harus dikembalikan jika tidak lagi bertugas.</li></ol></div> <div class="qr-container svelte-wxs4ch"><div class="qr-title svelte-wxs4ch">Scan untuk verifikasi identitas</div> <div class="qr-code svelte-wxs4ch"><!></div></div> <div class="signature-container svelte-wxs4ch"><div class="signature-line svelte-wxs4ch"></div> <div class="signature-name svelte-wxs4ch">Drs. H. Abdul Karim, M.Pd</div> <div class="signature-title svelte-wxs4ch">Kepala Madrasah</div></div> <div class="watermark svelte-wxs4ch">MTs NEGERI 2 KOLAKA UTARA</div></div></div>'
	),
	ma = B(
		'<h1 class="svelte-wxs4ch">ID Card Generator Staff MTs Negeri 2 Kolaka Utara</h1> <div class="controls svelte-wxs4ch"><label for="num-cards">Jumlah Kartu:</label> <input type="number" id="num-cards" min="1" max="10" class="svelte-wxs4ch"> <button class="svelte-wxs4ch">Buat Kartu</button> <button class="svelte-wxs4ch">Cetak Kartu</button></div> <div class="card-container svelte-wxs4ch"></div>',
		1
	);
function Ta(C, O) {
	Z(O, !1);
	const x = [
			{ name: 'Drs. H. Abdul Karim, M.Pd', position: 'Kepala Madrasah', nip: '196507151990031002' },
			{ name: 'Hj. Nurhayati, S.Pd', position: 'Wakil Kepala Madrasah', nip: '197603222005012004' },
			{ name: 'Ahmad Fauzi, S.Pd', position: 'Wali Kelas IX.A', nip: '198505172010011008' },
			{ name: 'Siti Aminah, S.Pd', position: 'Guru BK', nip: '198909122015012006' },
			{ name: 'Muhammad Rizki, S.E', position: 'Staff Tata Usaha', nip: '199203152018011005' }
		],
		f = ['Desa Sulawi', 'Desa Ponggiha', 'Desa Lapolu', 'Desa Tojabi'];
	let r = I(3),
		g = I([]);
	function q(l) {
		const a = oa(4, 'L');
		return a.addData(l), a.make(), a.createSvgTag({ cellSize: 4, margin: 1 });
	}
	function F(l) {
		const a = x[l % x.length];
		return {
			id: a.nip,
			name: a.name,
			position: a.position,
			address: f[Math.floor(Math.random() * f.length)],
			bloodType: ['A', 'B', 'AB', 'O'][Math.floor(Math.random() * 4)],
			validThru: '31 Desember 2025'
		};
	}
	function _() {
		G(
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
			_();
		}
	),
		sa(),
		na();
	var b = ma(),
		d = s(ea(b), 2),
		c = s(i(d), 2);
	da(c);
	var A = s(c, 2),
		z = s(A, 2);
	e(d);
	var k = s(d, 2);
	la(
		k,
		5,
		() => t(g),
		va,
		(l, a) => {
			var n = ha(),
				o = i(n),
				K = s(i(o), 2),
				h = s(i(K), 2),
				H = i(h, !0);
			e(h);
			var m = s(h, 2),
				u = i(m),
				T = s(i(u), 2),
				J = i(T, !0);
			e(T), e(u);
			var w = s(u, 2),
				M = s(i(w), 2),
				Q = i(M, !0);
			e(M), e(w);
			var p = s(w, 2),
				S = s(i(p), 2),
				W = i(S, !0);
			e(S), e(p);
			var N = s(p, 2),
				D = s(i(N), 2),
				X = i(D, !0);
			e(D), e(N), e(m);
			var E = s(m, 2),
				V = i(E);
			e(E), e(K), y(2), e(o);
			var R = s(o, 2),
				P = s(i(R), 4),
				U = s(i(P), 2),
				Y = i(U);
			ra(Y, () => q(`NIP:${t(a).id},NAMA:${t(a).name},JABATAN:${t(a).position}`)),
				e(U),
				e(P),
				y(4),
				e(R),
				e(n),
				ta(() => {
					v(H, t(a).position),
						v(J, t(a).id),
						v(Q, t(a).name),
						v(W, t(a).address),
						v(X, t(a).bloodType),
						v(V, `Berlaku s/d ${t(a).validThru ?? ''}`);
				}),
				j(l, n);
		}
	),
		e(k),
		ca(
			c,
			() => t(r),
			(l) => G(r, l)
		),
		L('click', A, _),
		L('click', z, $),
		j(C, b),
		ia();
}
export { Ta as component };
