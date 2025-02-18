import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import {
	O as Z,
	_ as pt,
	aP as _t,
	aQ as $t,
	as as ht,
	z as xt,
	aR as gt,
	aS as yt,
	aT as wt,
	aC as bt,
	M as kt,
	x as G,
	aI as tt,
	aJ as at,
	aK as At,
	f as z,
	p as Ct,
	u as Q,
	a as Et,
	s as S,
	v as b,
	r as F,
	n as O,
	c as M,
	q as j,
	t as Pt
} from '../chunks/DQMf8gWK.js';
import { e as lt, a as p, t as q, b as L } from '../chunks/BGOrq1ZG.js';
import { c as Tt, s as It } from '../chunks/CPLw4cna.js';
import { l as Nt, s as St, i as Ft } from '../chunks/DjKtoK8y.js';
import { e as Ot } from '../chunks/Ds4ehkC6.js';
import { c as R } from '../chunks/D7_cnrTr.js';
import { w as Lt, e as Rt } from '../chunks/BTRVP7y_.js';
import { p as J } from '../chunks/BJa4LW-r.js';
import { B as zt } from '../chunks/DWr6XhLj.js';
import { C as Mt } from '../chunks/CTqa1KBK.js';
import { C as qt, a as Bt, b as Kt, c as Ut } from '../chunks/tqNMKigX.js';
import { I as rt } from '../chunks/CdbIut2i.js';
import { L as et } from '../chunks/JEuZ2Ig_.js';
import { A as jt, a as Dt } from '../chunks/6MYnAD0u.js';
import { p as Wt } from '../chunks/OWF93kYu.js';
import { g as Gt } from '../chunks/q3O7Mc_4.js';
import { s as Jt } from '../chunks/jIU1MAPh.js';
import { I as Qt } from '../chunks/DcIEMM9l.js';
const Ht = () => performance.now(),
	P = { tick: (a) => requestAnimationFrame(a), now: () => Ht(), tasks: new Set() };
function ft() {
	const a = P.now();
	P.tasks.forEach((t) => {
		t.c(a) || (P.tasks.delete(t), t.f());
	}),
		P.tasks.size !== 0 && P.tick(ft);
}
function Vt(a) {
	let t;
	return (
		P.tasks.size === 0 && P.tick(ft),
		{
			promise: new Promise((r) => {
				P.tasks.add((t = { c: a, f: r }));
			}),
			abort() {
				P.tasks.delete(t);
			}
		}
	);
}
function H(a, t) {
	Lt(() => {
		a.dispatchEvent(new CustomEvent(t));
	});
}
function Xt(a) {
	if (a === 'float') return 'cssFloat';
	if (a === 'offset') return 'cssOffset';
	if (a.startsWith('--')) return a;
	const t = a.split('-');
	return t.length === 1
		? t[0]
		: t[0] +
				t
					.slice(1)
					.map((r) => r[0].toUpperCase() + r.slice(1))
					.join('');
}
function st(a) {
	const t = {},
		r = a.split(';');
	for (const i of r) {
		const [o, c] = i.split(':');
		if (!o || c === void 0) break;
		const f = Xt(o.trim());
		t[f] = c.trim();
	}
	return t;
}
const Yt = (a) => a;
function it(a, t, r, i) {
	var o = (a & yt) !== 0,
		c = (a & wt) !== 0,
		f = o && c,
		_ = (a & gt) !== 0,
		C = f ? 'both' : o ? 'in' : 'out',
		$,
		v = t.inert,
		T = t.style.overflow,
		e,
		s;
	function n() {
		var d = At,
			g = Z;
		tt(null), at(null);
		try {
			return $ ?? ($ = r()(t, (i == null ? void 0 : i()) ?? {}, { direction: C }));
		} finally {
			tt(d), at(g);
		}
	}
	var l = {
			is_global: _,
			in() {
				var d;
				if (((t.inert = v), !o)) {
					s == null || s.abort(), (d = s == null ? void 0 : s.reset) == null || d.call(s);
					return;
				}
				c || e == null || e.abort(),
					H(t, 'introstart'),
					(e = X(t, n(), s, 1, () => {
						H(t, 'introend'), e == null || e.abort(), (e = $ = void 0), (t.style.overflow = T);
					}));
			},
			out(d) {
				if (!c) {
					d == null || d(), ($ = void 0);
					return;
				}
				(t.inert = !0),
					H(t, 'outrostart'),
					(s = X(t, n(), e, 0, () => {
						H(t, 'outroend'), d == null || d();
					}));
			},
			stop: () => {
				e == null || e.abort(), s == null || s.abort();
			}
		},
		u = Z;
	if (((u.transitions ?? (u.transitions = [])).push(l), o && Tt)) {
		var h = _;
		if (!h) {
			for (var m = u.parent; m && m.f & pt; ) for (; (m = m.parent) && !(m.f & _t); );
			h = !m || (m.f & $t) !== 0;
		}
		h &&
			ht(() => {
				xt(() => l.in());
			});
	}
}
function X(a, t, r, i, o) {
	var c = i === 1;
	if (bt(t)) {
		var f,
			_ = !1;
		return (
			kt(() => {
				if (!_) {
					var u = t({ direction: c ? 'in' : 'out' });
					f = X(a, u, r, i, o);
				}
			}),
			{
				abort: () => {
					(_ = !0), f == null || f.abort();
				},
				deactivate: () => f.deactivate(),
				reset: () => f.reset(),
				t: () => f.t()
			}
		);
	}
	if ((r == null || r.deactivate(), !(t != null && t.duration)))
		return o(), { abort: G, deactivate: G, reset: G, t: () => i };
	const { delay: C = 0, css: $, tick: v, easing: T = Yt } = t;
	var e = [];
	if (c && r === void 0 && (v && v(0, 1), $)) {
		var s = st($(0, 1));
		e.push(s, s);
	}
	var n = () => 1 - i,
		l = a.animate(e, { duration: C });
	return (
		(l.onfinish = () => {
			var u = (r == null ? void 0 : r.t()) ?? 1 - i;
			r == null || r.abort();
			var h = i - u,
				m = t.duration * Math.abs(h),
				d = [];
			if (m > 0) {
				var g = !1;
				if ($)
					for (var E = Math.ceil(m / 16.666666666666668), I = 0; I <= E; I += 1) {
						var k = u + h * T(I / E),
							y = st($(k, 1 - k));
						d.push(y), g || (g = y.overflow === 'hidden');
					}
				g && (a.style.overflow = 'hidden'),
					(n = () => {
						var x = l.currentTime;
						return u + h * T(x / m);
					}),
					v &&
						Vt(() => {
							if (l.playState !== 'running') return !1;
							var x = n();
							return v(x, 1 - x), !0;
						});
			}
			(l = a.animate(d, { duration: m, fill: 'forwards' })),
				(l.onfinish = () => {
					(n = () => i), v == null || v(i, 1 - i), o();
				});
		}),
		{
			abort: () => {
				l && (l.cancel(), (l.effect = null), (l.onfinish = G));
			},
			deactivate: () => {
				o = G;
			},
			reset: () => {
				i === 0 && (v == null || v(1, 0));
			},
			t: () => n()
		}
	);
}
function Zt(a, t) {
	const r = Nt(t, ['children', '$$slots', '$$events', '$$legacy']);
	Qt(
		a,
		St({ name: 'circle-alert' }, () => r, {
			iconNode: [
				['circle', { cx: '12', cy: '12', r: '10' }],
				['line', { x1: '12', x2: '12', y1: '8', y2: '12' }],
				['line', { x1: '12', x2: '12.01', y1: '16', y2: '16' }]
			],
			children: (o, c) => {
				var f = lt(),
					_ = z(f);
				Jt(_, t, 'default', {}, null), p(o, f);
			},
			$$slots: { default: !0 }
		})
	);
}
function ta(a) {
	const t = a - 1;
	return t * t * t + 1;
}
function ot(a) {
	const t = typeof a == 'string' && a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || 'px'] : [a, 'px'];
}
function nt(
	a,
	{ delay: t = 0, duration: r = 400, easing: i = ta, x: o = 0, y: c = 0, opacity: f = 0 } = {}
) {
	const _ = getComputedStyle(a),
		C = +_.opacity,
		$ = _.transform === 'none' ? '' : _.transform,
		v = C * (1 - f),
		[T, e] = ot(o),
		[s, n] = ot(c);
	return {
		delay: t,
		duration: r,
		easing: i,
		css: (l, u) => `
			transform: ${$} translate(${(1 - l) * T}${e}, ${(1 - l) * s}${n});
			opacity: ${C - v * u}`
	};
}
function aa(a) {
	return --a * a * ((1.70158 + 1) * a + 1.70158) + 1;
}
var ra = q('<!> <div class="alert-content"><!></div>', 1),
	ea = q('<div class="alert-item flex-1 pointer-events-auto w-full"><!></div>'),
	sa = q('<!> <!>', 1),
	ia = q(
		'<form class="grid gap-4"><div class="grid gap-2"><!> <!></div> <div class="grid gap-2"><div class="flex items-center"><!> <a href="https://wa.me/6281245133233" class="ml-auto inline-block text-sm underline" target="_blank" rel="noopener noreferrer">Lupa kata sandi Anda?</a></div> <!></div> <!></form> <div class="mt-4 text-center text-sm">Belum punya akun? <a href="https://wa.me/6281245133233" class="underline" target="_blank" rel="noopener noreferrer">Silahkan hubungi Admin</a></div>',
		1
	),
	oa = q('<!> <!>', 1),
	na = q(
		'<div class="alerts-container flex-1 fixed right-4 top-4 z-50 flex flex-col gap-2 min-w-[320px] max-w-[420px]" role="alert" aria-live="polite"></div> <!>',
		1
	);
function la(a, t) {
	Ct(t, !0);
	let r = Q(''),
		i = Q(''),
		o = Q(J([])),
		c = Q(!1);
	function f(e, s = 'error') {
		const n = Date.now();
		j(o, J([{ id: n, message: e, type: s }, ...b(o)].slice(0, 3))),
			setTimeout(() => {
				j(o, J(b(o).filter((l) => l.id !== n)));
			}, 5e3);
	}
	async function _() {
		var e;
		j(c, !0);
		try {
			(await Wt.collection('users').authWithPassword(b(r), b(i))) && Gt('/dashboard');
		} catch (s) {
			s.status === 400
				? f(((e = s.data) == null ? void 0 : e.message) || 'Email atau kata sandi salah')
				: f('Error terjadi: ' + s);
		} finally {
			j(c, !1);
		}
	}
	function C(e) {
		e.key === 'Enter' && !b(c) && _();
	}
	var $ = na(),
		v = z($);
	Ot(
		v,
		21,
		() => b(o),
		(e) => e.id,
		(e, s) => {
			var n = ea(),
				l = M(n);
			R(
				l,
				() => Dt,
				(u, h) => {
					h(u, {
						variant: 'destructive',
						class: 'items-start',
						children: (m, d) => {
							var g = ra(),
								E = z(g);
							Zt(E, { class: 'size-4 mt-[2px]' });
							var I = S(E, 2),
								k = M(I);
							R(
								k,
								() => jt,
								(y, x) => {
									x(y, {
										children: (N, B) => {
											O();
											var A = L();
											Pt(() => It(A, b(s).message)), p(N, A);
										},
										$$slots: { default: !0 }
									});
								}
							),
								F(I),
								p(m, g);
						},
						$$slots: { default: !0 }
					});
				}
			),
				F(n),
				it(
					1,
					n,
					() => nt,
					() => ({ x: 20, duration: 300, easing: aa })
				),
				it(
					2,
					n,
					() => nt,
					() => ({ x: 20, duration: 200 })
				),
				p(e, n);
		}
	),
		F(v);
	var T = S(v, 2);
	R(
		T,
		() => Mt,
		(e, s) => {
			s(e, {
				class: 'mx-auto max-w-sm',
				children: (n, l) => {
					var u = oa(),
						h = z(u);
					R(
						h,
						() => qt,
						(d, g) => {
							g(d, {
								children: (E, I) => {
									var k = sa(),
										y = z(k);
									R(
										y,
										() => Bt,
										(N, B) => {
											B(N, {
												class: 'text-2xl',
												children: (A, D) => {
													O();
													var W = L('Masuk');
													p(A, W);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var x = S(y, 2);
									R(
										x,
										() => Kt,
										(N, B) => {
											B(N, {
												children: (A, D) => {
													O();
													var W = L('Masukkan email Anda di bawah ini untuk masuk ke akun Anda');
													p(A, W);
												},
												$$slots: { default: !0 }
											});
										}
									),
										p(E, k);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var m = S(h, 2);
					R(
						m,
						() => Ut,
						(d, g) => {
							g(d, {
								children: (E, I) => {
									var k = ia(),
										y = z(k),
										x = M(y),
										N = M(x);
									et(N, {
										for: 'email',
										children: (w, Y) => {
											O();
											var K = L('Alamat Email');
											p(w, K);
										},
										$$slots: { default: !0 }
									});
									var B = S(N, 2);
									rt(B, {
										id: 'email',
										type: 'email',
										placeholder: 'test@example.com',
										onkeydown: C,
										required: !0,
										get value() {
											return b(r);
										},
										set value(w) {
											j(r, J(w));
										}
									}),
										F(x);
									var A = S(x, 2),
										D = M(A),
										W = M(D);
									et(W, {
										for: 'password',
										children: (w, Y) => {
											O();
											var K = L('Kata Sandi');
											p(w, K);
										},
										$$slots: { default: !0 }
									}),
										O(2),
										F(D);
									var dt = S(D, 2);
									rt(dt, {
										id: 'password',
										type: 'password',
										onkeydown: C,
										required: !0,
										get value() {
											return b(i);
										},
										set value(w) {
											j(i, J(w));
										}
									}),
										F(A);
									var ct = S(A, 2);
									zt(ct, {
										type: 'submit',
										class: 'w-full',
										get disabled() {
											return b(c);
										},
										children: (w, Y) => {
											var K = lt(),
												vt = z(K);
											{
												var ut = (U) => {
														var V = L('Sedang memproses...');
														p(U, V);
													},
													mt = (U) => {
														var V = L('Masuk');
														p(U, V);
													};
												Ft(vt, (U) => {
													b(c) ? U(ut) : U(mt, !1);
												});
											}
											p(w, K);
										},
										$$slots: { default: !0 }
									}),
										F(y),
										O(2),
										Rt('submit', y, (w) => {
											w.preventDefault(), _();
										}),
										p(E, k);
								},
								$$slots: { default: !0 }
							});
						}
					),
						p(n, u);
				},
				$$slots: { default: !0 }
			});
		}
	),
		p(a, $),
		Et();
}
var fa = q('<div class="flex h-screen w-full items-center justify-center px-4"><!></div>');
function Ia(a) {
	var t = fa(),
		r = M(t);
	la(r, {}), F(t), p(a, t);
}
export { Ia as component };
