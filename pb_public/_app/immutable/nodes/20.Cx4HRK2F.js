import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import { f as d, s as t, n as B, c as U, r as k } from '../chunks/DQMf8gWK.js';
import { t as e, a as r } from '../chunks/BGOrq1ZG.js';
import { s as q } from '../chunks/DjKtoK8y.js';
import {
	S as z,
	a as E,
	b as F,
	c as G,
	d as H,
	e as I,
	f as J,
	g as K
} from '../chunks/CaYsd_ZG.js';
import { S as L } from '../chunks/BVZZpjpa.js';
import { S as M } from '../chunks/BcC5ZLLz.js';
import { R as N, T as O, D as Q, a as u } from '../chunks/KMVKlTlO.js';
import { C as V } from '../chunks/C5OltRP6.js';
var W = e('Username <!>', 1),
	X = e('<span>Account</span>'),
	Y = e('<span>Billing</span>'),
	Z = e('<span>Sign out</span>'),
	rr = e('<!> <!> <!>', 1),
	er = e('<!> <!>', 1),
	or = e('<!> <!> <!>', 1),
	tr = e('<header class="flex h-12 items-center justify-between px-4"><!></header>'),
	ar = e('<!> <!>', 1);
function Sr(P) {
	z(P, {
		children: (w, sr) => {
			var c = ar(),
				m = d(c);
			E(m, {
				children: (_, D) => {
					var a = or(),
						l = d(a);
					F(l, {});
					var f = t(l, 2);
					G(f, {});
					var C = t(f, 2);
					H(C, {
						children: (R, nr) => {
							I(R, {
								children: (T, dr) => {
									J(T, {
										children: (j, lr) => {
											N(j, {
												children: (y, ir) => {
													var v = er(),
														h = d(v);
													O(h, {
														child: (S, s) => {
															L(
																S,
																q(() => (s == null ? void 0 : s().props), {
																	class:
																		'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground',
																	children: (i, g) => {
																		B();
																		var o = W(),
																			p = t(d(o));
																		V(p, { class: 'ml-auto' }), r(i, o);
																	},
																	$$slots: { default: !0 }
																})
															);
														},
														$$slots: { child: !0 }
													});
													var A = t(h, 2);
													Q(A, {
														side: 'top',
														class: 'w-[--bits-dropdown-menu-anchor-width]',
														children: (b, S) => {
															var s = rr(),
																$ = d(s);
															u($, {
																children: (o, p) => {
																	var n = X();
																	r(o, n);
																},
																$$slots: { default: !0 }
															});
															var i = t($, 2);
															u(i, {
																children: (o, p) => {
																	var n = Y();
																	r(o, n);
																},
																$$slots: { default: !0 }
															});
															var g = t(i, 2);
															u(g, {
																children: (o, p) => {
																	var n = Z();
																	r(o, n);
																},
																$$slots: { default: !0 }
															}),
																r(b, s);
														},
														$$slots: { default: !0 }
													}),
														r(y, v);
												},
												$$slots: { default: !0 }
											});
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					}),
						r(_, a);
				},
				$$slots: { default: !0 }
			});
			var x = t(m, 2);
			K(x, {
				children: (_, D) => {
					var a = tr(),
						l = U(a);
					M(l, {}), k(a), r(_, a);
				},
				$$slots: { default: !0 }
			}),
				r(w, c);
		},
		$$slots: { default: !0 }
	});
}
export { Sr as component };
