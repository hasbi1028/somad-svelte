import './Bg9kRutz.js';
import { p as x, f as u, a as w, v, w as P, c as S, x as k, r as I, t as j } from './DQMf8gWK.js';
import { e as _, a as n, t as q } from './BGOrq1ZG.js';
import { c as z } from './D7_cnrTr.js';
import { p as g, i as A, r as y, s as B } from './DjKtoK8y.js';
import { a as C } from './DWr6XhLj.js';
import { s as h } from './D3E8oDJG.js';
import { s as E } from './DvbRtjlS.js';
import { u as F, b, m as G } from './B7uXBihW.js';
import { u as H } from './KMVKlTlO.js';
var J = q('<div><!></div>');
function K(f, e) {
	x(e, !0);
	let a = g(e, 'ref', 15, null),
		p = g(e, 'id', 19, F),
		s = y(e, ['$$slots', '$$events', '$$legacy', 'ref', 'id', 'child', 'children']);
	const l = H({
			id: b.with(() => p()),
			ref: b.with(
				() => a(),
				(r) => a(r)
			)
		}),
		o = P(() => G(s, l.props));
	var i = _(),
		d = u(i);
	{
		var c = (r) => {
				var t = _(),
					m = u(t);
				h(
					m,
					() => e.child,
					() => ({ props: v(o) })
				),
					n(r, t);
			},
			D = (r) => {
				var t = J();
				let m;
				var M = S(t);
				h(M, () => e.children ?? k), I(t), j(() => (m = E(t, m, { ...v(o) }))), n(r, t);
			};
		A(d, (r) => {
			e.child ? r(c) : r(D, !1);
		});
	}
	n(f, i), w();
}
function Y(f, e) {
	x(e, !0);
	let a = g(e, 'ref', 15, null),
		p = y(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var s = _(),
		l = u(s);
	const o = P(() => C('bg-muted -mx-1 my-1 h-px', e.class));
	z(
		l,
		() => K,
		(i, d) => {
			d(
				i,
				B(
					{
						get class() {
							return v(o);
						}
					},
					() => p,
					{
						get ref() {
							return a();
						},
						set ref(c) {
							a(c);
						}
					}
				)
			);
		}
	),
		n(f, s),
		w();
}
export { Y as D };
