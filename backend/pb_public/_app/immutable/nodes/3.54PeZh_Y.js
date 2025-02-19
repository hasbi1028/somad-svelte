import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import {
	p as D,
	f as K,
	t as q,
	a as F,
	d as H,
	s as o,
	c as r,
	n as l,
	r as s
} from '../chunks/BHafZ7-g.js';
import { s as I } from '../chunks/709vCQOk.js';
import { i as V } from '../chunks/CjIAJ7VA.js';
import { t as i, a as n, b as v } from '../chunks/D4wBL3Sd.js';
import { i as Y } from '../chunks/CBZYCnD7.js';
import { B as m } from '../chunks/Bsldq5z3.js';
import { C as k } from '../chunks/QDtlYqdc.js';
import { p as E } from '../chunks/BMGf2NTm.js';
import { t as G } from '../chunks/B7Pfnr5e.js';
import '../chunks/B4fvhT3s.js';
import { S as J, M as O } from '../chunks/BmsKTWgn.js';
var Q = i('<!> <!> <span class="sr-only">Toggle theme</span>', 1),
	R = i('<a href="/logout"><!></a>'),
	W = i('<a href="/login"><!></a>'),
	X = i(
		'<h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">IPA</h4> <p class="text-gray-700 dark:text-gray-300">Mendalami ilmu pengetahuan alam dengan pendekatan praktis dan eksperimen langsung.</p>',
		1
	),
	Z = i(
		'<h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Matematika</h4> <p class="text-gray-700 dark:text-gray-300">Mengasah kemampuan logika dan pemecahan masalah melalui kurikulum yang menantang.</p>',
		1
	),
	aa = i(
		'<h4 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Bahasa</h4> <p class="text-gray-700 dark:text-gray-300">Meningkatkan kemampuan komunikasi dan penguasaan bahasa melalui pembelajaran interaktif.</p>',
		1
	),
	ta = i(
		`<nav class="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-background px-4 py-2 text-card-foreground shadow-sm"><ul class="flex items-center justify-center space-x-4 w-full"><li><a href="#about" class="hover:underline">Tentang</a></li> <li><a href="#programs" class="hover:underline">Program</a></li> <li><a href="#contact" class="hover:underline">Kontak</a></li></ul> <!> <!></nav> <main><section class="hero bg-gray-100 dark:bg-gray-800 py-32 text-center"><div class="container mx-auto px-4"><h2 class="text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-100">Selamat Datang di MTSN 2 Kolaka Utara</h2> <p class="text-lg mb-8 text-gray-700 dark:text-gray-300">Mewujudkan pendidikan berkualitas dan karakter unggul untuk masa depan.</p> <!></div></section> <section id="about" class="py-16"><div class="container mx-auto px-4"><h3 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Tentang Kami</h3> <p class="text-gray-700 dark:text-gray-300">MTSN 2 Kolaka Utara berkomitmen untuk memberikan pendidikan terbaik dengan menggabungkan
				pembelajaran akademis dan pengembangan karakter.</p></div></section> <section id="programs" class="py-16 bg-gray-100 dark:bg-gray-800"><div class="container mx-auto px-4"><h3 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Program Pendidikan</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!> <!> <!></div></div></section> <section id="contact" class="py-16"><div class="container mx-auto px-4 text-center"><h3 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Hubungi Kami</h3> <p class="text-gray-700 dark:text-gray-300">Untuk informasi lebih lanjut, silahkan hubungi kami melalui email: <a href="mailto:info@mtsn2kolakautara.sch.id" class="text-blue-500 hover:underline">info@mtsn2kolakautara.sch.id</a></p></div></section></main> <footer class="py-6 bg-blue-600 dark:bg-blue-900 text-white"><div class="container mx-auto text-center px-4"><p> </p></div></footer>`,
		1
	);
function xa(T, z) {
	D(z, !1), Y();
	var f = ta(),
		g = K(f),
		h = o(r(g), 2);
	m(h, {
		onclick: G,
		variant: 'outline',
		size: 'sm',
		class: 'mr-2',
		children: (a, e) => {
			var t = Q(),
				d = K(t);
			J(d, {
				class:
					'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
			});
			var u = o(d, 2);
			O(u, {
				class:
					'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
			}),
				l(2),
				n(a, t);
		},
		$$slots: { default: !0 }
	});
	var L = o(h, 2);
	{
		var U = (a) => {
				var e = R(),
					t = r(e);
				m(t, {
					variant: 'outline',
					size: 'sm',
					children: (d, u) => {
						l();
						var x = v('Logout');
						n(d, x);
					},
					$$slots: { default: !0 }
				}),
					s(e),
					n(a, e);
			},
			B = (a) => {
				var e = W(),
					t = r(e);
				m(t, {
					variant: 'outline',
					size: 'sm',
					children: (d, u) => {
						l();
						var x = v('Login');
						n(d, x);
					},
					$$slots: { default: !0 }
				}),
					s(e),
					n(a, e);
			};
		V(L, (a) => {
			E.authStore.isValid ? a(U) : a(B, !1);
		});
	}
	s(g);
	var c = o(g, 2),
		p = r(c),
		b = r(p),
		N = o(r(b), 4);
	m(N, {
		size: 'lg',
		children: (a, e) => {
			l();
			var t = v('Pelajari Lebih Lanjut');
			n(a, t);
		},
		$$slots: { default: !0 }
	}),
		s(b),
		s(p);
	var y = o(p, 4),
		_ = r(y),
		$ = o(r(_), 2),
		w = r($);
	k(w, {
		class: 'p-6 bg-white dark:bg-gray-700 shadow rounded',
		children: (a, e) => {
			var t = X();
			l(2), n(a, t);
		},
		$$slots: { default: !0 }
	});
	var P = o(w, 2);
	k(P, {
		class: 'p-6 bg-white dark:bg-gray-700 shadow rounded',
		children: (a, e) => {
			var t = Z();
			l(2), n(a, t);
		},
		$$slots: { default: !0 }
	});
	var A = o(P, 2);
	k(A, {
		class: 'p-6 bg-white dark:bg-gray-700 shadow rounded',
		children: (a, e) => {
			var t = aa();
			l(2), n(a, t);
		},
		$$slots: { default: !0 }
	}),
		s($),
		s(_),
		s(y),
		l(2),
		s(c);
	var M = o(c, 2),
		j = r(M),
		S = r(j),
		C = r(S);
	s(S),
		s(j),
		s(M),
		q(
			(a) => I(C, `© ${a ?? ''} MTSN 2 Kolaka Utara. All rights reserved.`),
			[() => new Date().getFullYear()],
			H
		),
		n(T, f),
		F();
}
export { xa as component };
