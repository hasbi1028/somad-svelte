import '../chunks/Bg9kRutz.js';
import { p as $, f as r, a as b, s as S } from '../chunks/BHafZ7-g.js';
import { c as p, a as o, t as A } from '../chunks/D4wBL3Sd.js';
import { s as P } from '../chunks/CiWmPosG.js';
import { c as m } from '../chunks/D-TmFHfb.js';
import { g as x } from '../chunks/COMMVcWV.js';
import { p as y } from '../chunks/BMGf2NTm.js';
import { A as V } from '../chunks/B-lyQUdO.js';
import { S as j, a as k } from '../chunks/BJuW09PL.js';
import '../chunks/CZSIPx2q.js';
import '../chunks/Bsldq5z3.js';
import '../chunks/DvUo5-ap.js';
var q = A('<!> <!>', 1);
function N(n, t) {
	$(t, !0), y.authStore.isValid || x('/login');
	var a = p(),
		f = r(a);
	m(
		f,
		() => k,
		(d, l) => {
			l(d, {
				children: (_, w) => {
					var s = q(),
						i = r(s);
					V(i, {});
					var c = S(i, 2);
					m(
						c,
						() => j,
						(u, v) => {
							v(u, {
								children: (g, z) => {
									var e = p(),
										h = r(e);
									P(h, () => t.children), o(g, e);
								},
								$$slots: { default: !0 }
							});
						}
					),
						o(_, s);
				},
				$$slots: { default: !0 }
			});
		}
	),
		o(n, a),
		b();
}
export { N as component };
