import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import { f as d, s as r, c as F, n as o, r as Y } from '../chunks/BHafZ7-g.js';
import { t as i, b as _, a as e } from '../chunks/D4wBL3Sd.js';
import { e as j, B as q, a as h, b as y, c as z, d as C } from '../chunks/gqCKvLmc.js';
import { S as E } from '../chunks/QDzNhrkw.js';
import { a as G, S as H } from '../chunks/BJuW09PL.js';
import '../chunks/CZSIPx2q.js';
import { S as I } from '../chunks/BBGdLrs8.js';
import '../chunks/DvUo5-ap.js';
import { A as J } from '../chunks/B-lyQUdO.js';
var K = i('<!> <!> <!>', 1),
	L = i(
		'<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4"><!> <!> <!></header> <div class="flex flex-1 flex-col gap-4 p-4"><div class="grid auto-rows-min gap-4 md:grid-cols-3"><div class="bg-muted/50 aspect-video rounded-xl"></div> <div class="bg-muted/50 aspect-video rounded-xl"></div> <div class="bg-muted/50 aspect-video rounded-xl"></div></div> <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div></div>',
		1
	),
	M = i('<!> <!>', 1);
function dr(b) {
	G(b, {
		children: (g, N) => {
			var l = M(),
				n = d(l);
			J(n, {});
			var x = r(n, 2);
			H(x, {
				children: (B, O) => {
					var m = L(),
						c = d(m),
						p = F(c);
					I(p, { class: '-ml-1' });
					var v = r(p, 2);
					E(v, { orientation: 'vertical', class: 'mr-2 h-4' });
					var P = r(v, 2);
					j(P, {
						children: (S, Q) => {
							q(S, {
								children: (k, R) => {
									var u = K(),
										$ = d(u);
									h($, {
										class: 'hidden md:block',
										children: (a, w) => {
											y(a, {
												href: '#',
												children: (s, D) => {
													o();
													var t = _('Building Your Application');
													e(s, t);
												},
												$$slots: { default: !0 }
											});
										},
										$$slots: { default: !0 }
									});
									var f = r($, 2);
									z(f, { class: 'hidden md:block' });
									var A = r(f, 2);
									h(A, {
										children: (a, w) => {
											C(a, {
												children: (s, D) => {
													o();
													var t = _('Data Fetching');
													e(s, t);
												},
												$$slots: { default: !0 }
											});
										},
										$$slots: { default: !0 }
									}),
										e(k, u);
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					}),
						Y(c),
						o(2),
						e(B, m);
				},
				$$slots: { default: !0 }
			}),
				e(g, l);
		},
		$$slots: { default: !0 }
	});
}
export { dr as component };
