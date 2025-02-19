import '../chunks/Bg9kRutz.js';
import {
	p as H,
	a as J,
	e as m,
	b as w,
	g as s,
	s as o,
	f as N,
	c as t,
	n as p,
	r
} from '../chunks/BHafZ7-g.js';
import { t as O, e as Q, a as n, c as R, b as u } from '../chunks/D4wBL3Sd.js';
import { i as T } from '../chunks/CjIAJ7VA.js';
import { s as j } from '../chunks/eK_4uKAs.js';
import { p as B } from '../chunks/BMat-oFk.js';
import { B as V } from '../chunks/Bsldq5z3.js';
import { I as q } from '../chunks/C5wd2lyJ.js';
import { L as D } from '../chunks/CDypPdYK.js';
import { p as X } from '../chunks/BRbqKDqJ.js';
import { g as Y } from '../chunks/1dHx3Gtq.js';
import '../chunks/69_IOA4Y.js';
import { t as y } from '../chunks/BZRW7dRF.js';
var Z = O(
	'<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]"><div class="flex items-center justify-center py-12"><div class="mx-auto grid w-[350px] gap-6"><div class="grid gap-2 text-center"><h1 class="text-3xl font-bold">Login</h1> <p class="text-muted-foreground text-balance">Masukkan email Anda di bawah ini untuk masuk ke akun Anda</p></div> <form class="grid gap-4"><div class="grid gap-2"><!> <!></div> <div class="grid gap-2"><div class="flex items-center"><!> <a href="https://wa.me/6281245133233" class="ml-auto inline-block text-sm underline" target="_blank" rel="noopener noreferrer">Lupa kata sandi Anda?</a></div> <!></div> <!></form> <div class="mt-4 text-center text-sm">Belum punya akun? <a href="https://wa.me/6281245133233" class="underline" target="_blank" rel="noopener noreferrer">Silahkan hubungi Admin</a></div></div></div> <div class="bg-muted hidden lg:block"><img src="/image-login.png" alt="placeholder" class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"></div></div>'
);
function va(I, K) {
	H(K, !0);
	let v = w(''),
		c = w(''),
		d = w(!1);
	async function $() {
		var a;
		m(d, !0);
		try {
			const e = await X.collection('users').authWithPassword(s(v), s(c));
			y.success('Login berhasil'), e && Y('/dashboard');
		} catch (e) {
			e.status === 400
				? y.error(((a = e.data) == null ? void 0 : a.message) || 'Email atau kata sandi salah', {
						description: 'Periksa kembali data login Anda.'
					})
				: y.error('Error terjadi: ' + e);
		} finally {
			m(d, !1);
		}
	}
	function A(a) {
		a.key === 'Enter' && !s(d) && $();
	}
	var f = Z(),
		g = t(f),
		L = t(g),
		h = o(t(L), 2),
		b = t(h),
		P = t(b);
	D(P, {
		for: 'email',
		children: (a, e) => {
			p();
			var i = u('Alamat Email');
			n(a, i);
		},
		$$slots: { default: !0 }
	});
	var M = o(P, 2);
	q(M, {
		id: 'email',
		type: 'email',
		placeholder: 'test@example.com',
		onkeydown: A,
		required: !0,
		get value() {
			return s(v);
		},
		set value(a) {
			m(v, B(a));
		}
	}),
		r(b);
	var x = o(b, 2),
		k = t(x),
		U = t(k);
	D(U, {
		for: 'password',
		children: (a, e) => {
			p();
			var i = u('Kata Sandi');
			n(a, i);
		},
		$$slots: { default: !0 }
	}),
		p(2),
		r(k);
	var W = o(k, 2);
	q(W, {
		id: 'password',
		type: 'password',
		onkeydown: A,
		required: !0,
		get value() {
			return s(c);
		},
		set value(a) {
			m(c, B(a));
		}
	}),
		r(x);
	var z = o(x, 2);
	V(z, {
		type: 'submit',
		class: 'w-full',
		get disabled() {
			return s(d);
		},
		children: (a, e) => {
			var i = R(),
				C = N(i);
			{
				var F = (l) => {
						var _ = u('Sedang memproses...');
						n(l, _);
					},
					G = (l) => {
						var _ = u('Masuk');
						n(l, _);
					};
				T(C, (l) => {
					s(d) ? l(F) : l(G, !1);
				});
			}
			n(a, i);
		},
		$$slots: { default: !0 }
	}),
		r(h),
		p(2),
		r(L),
		r(g);
	var E = o(g, 2),
		S = t(E);
	j(S, 'width', 1920),
		j(S, 'height', 1080),
		r(E),
		r(f),
		Q('submit', h, (a) => {
			a.preventDefault(), $();
		}),
		n(I, f),
		J();
}
export { va as component };
