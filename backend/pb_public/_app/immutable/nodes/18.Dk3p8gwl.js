import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import {
	f as d,
	p as Q,
	c as m,
	y as R,
	r as $,
	t as z,
	a as T,
	n as U,
	s as S,
	g
} from '../chunks/BHafZ7-g.js';
import { s as V } from '../chunks/709vCQOk.js';
import { e as W } from '../chunks/CNlA5Cx2.js';
import { c as x, a, t as c, b as X } from '../chunks/D4wBL3Sd.js';
import { a as A } from '../chunks/eK_4uKAs.js';
import {
	a as Y,
	b as Z,
	c as tt,
	d as et,
	e as rt,
	f as st,
	S as at,
	g as ot
} from '../chunks/BJuW09PL.js';
import { s as lt } from '../chunks/CiWmPosG.js';
import { l as C, s as j, p as nt, b as it, r as dt } from '../chunks/CjIAJ7VA.js';
import { a as ct } from '../chunks/Bsldq5z3.js';
import { S as pt } from '../chunks/CZSIPx2q.js';
import { S as ut } from '../chunks/BBGdLrs8.js';
import { H as mt } from '../chunks/Cblokx3N.js';
import { s as k } from '../chunks/BtEvizs7.js';
import { I as q } from '../chunks/DtoOq0pI.js';
import { S as $t } from '../chunks/B0otktkl.js';
import { S as ft } from '../chunks/Bw9OX24f.js';
function _t(l, t) {
	const o = C(t, ['children', '$$slots', '$$events', '$$legacy']);
	q(
		l,
		j({ name: 'calendar' }, () => o, {
			iconNode: [
				['path', { d: 'M8 2v4' }],
				['path', { d: 'M16 2v4' }],
				['rect', { width: '18', height: '18', x: '3', y: '4', rx: '2' }],
				['path', { d: 'M3 10h18' }]
			],
			children: (e, n) => {
				var s = x(),
					r = d(s);
				k(r, t, 'default', {}, null), a(e, s);
			},
			$$slots: { default: !0 }
		})
	);
}
function ht(l, t) {
	const o = C(t, ['children', '$$slots', '$$events', '$$legacy']);
	q(
		l,
		j({ name: 'inbox' }, () => o, {
			iconNode: [
				['polyline', { points: '22 12 16 12 14 15 10 15 8 12 2 12' }],
				[
					'path',
					{
						d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z'
					}
				]
			],
			children: (e, n) => {
				var s = x(),
					r = d(s);
				k(r, t, 'default', {}, null), a(e, s);
			},
			$$slots: { default: !0 }
		})
	);
}
var vt = c('<div><!></div>');
function bt(l, t) {
	Q(t, !0);
	let o = nt(t, 'ref', 15, null),
		p = dt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var e = vt();
	let n;
	var s = m(e);
	lt(s, () => t.children ?? R),
		$(e),
		it(
			e,
			(r) => o(r),
			() => o()
		),
		z(
			(r) => (n = A(e, n, { 'data-sidebar': 'group-content', class: r, ...p })),
			[() => ct('w-full text-sm', t.class)]
		),
		a(l, e),
		T();
}
var St = c('<a><!> <span> </span></a>'),
	gt = c('<!> <!>', 1),
	xt = c('<header class="flex h-12 items-center justify-between px-4"><!></header>'),
	Pt = c('<!> <!>', 1);
function Rt(l) {
	const t = [
		{ title: 'Home', url: '#', icon: mt },
		{ title: 'Inbox', url: '#', icon: ht },
		{ title: 'Calendar', url: '#', icon: _t },
		{ title: 'Search', url: '#', icon: $t },
		{ title: 'Settings', url: '#', icon: ft }
	];
	Y(l, {
		children: (o, p) => {
			var e = Pt(),
				n = d(e);
			Z(n, {
				children: (r, B) => {
					tt(r, {
						children: (i, P) => {
							et(i, {
								children: (D, yt) => {
									var y = gt(),
										H = d(y);
									rt(H, {
										children: (f, F) => {
											U();
											var _ = X('Application');
											a(f, _);
										},
										$$slots: { default: !0 }
									});
									var E = S(H, 2);
									bt(E, {
										children: (f, F) => {
											st(f, {
												children: (_, Ht) => {
													var I = x(),
														G = d(I);
													W(
														G,
														1,
														() => t,
														(h) => h.title,
														(h, v) => {
															ot(h, {
																children: (J, It) => {
																	pt(J, {
																		child: (K, b) => {
																			let L = () => (b == null ? void 0 : b().props);
																			var u = St();
																			let M;
																			var N = m(u);
																			g(v).icon(N, {});
																			var w = S(N, 2),
																				O = m(w, !0);
																			$(w),
																				$(u),
																				z(() => {
																					(M = A(u, M, { href: g(v).url, ...L() })),
																						V(O, g(v).title);
																				}),
																				a(K, u);
																		},
																		$$slots: { child: !0 }
																	});
																},
																$$slots: { default: !0 }
															});
														}
													),
														a(_, I);
												},
												$$slots: { default: !0 }
											});
										},
										$$slots: { default: !0 }
									}),
										a(D, y);
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			});
			var s = S(n, 2);
			at(s, {
				children: (r, B) => {
					var i = xt(),
						P = m(i);
					ut(P, {}), $(i), a(r, i);
				},
				$$slots: { default: !0 }
			}),
				a(o, e);
		},
		$$slots: { default: !0 }
	});
}
export { Rt as component };
