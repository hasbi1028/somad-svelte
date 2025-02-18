import './Bg9kRutz.js';
import { u as P } from './B8S9RRQw.js';
import { b as T } from './KMVKlTlO.js';
import { p as R, f, a as k, v as n, w as y, c as B, x as I, r as S, t as j } from './DQMf8gWK.js';
import { e as p, a as s, t as q } from './BGOrq1ZG.js';
import { p as o, i as z, r as A } from './DjKtoK8y.js';
import { s as c } from './D3E8oDJG.js';
import { s as C } from './DvbRtjlS.js';
import { u as E, b as i, m as F } from './B7uXBihW.js';
var G = q('<button><!></button>');
function H(g, t) {
	R(t, !0);
	let b = o(t, 'id', 19, E),
		l = o(t, 'ref', 15, null),
		u = o(t, 'disabled', 3, !1),
		v = A(t, ['$$slots', '$$events', '$$legacy', 'id', 'ref', 'children', 'child', 'disabled']);
	const h = P({
			id: i.with(() => b()),
			ref: i.with(
				() => l(),
				(e) => l(e)
			),
			disabled: i.with(() => !!u())
		}),
		d = y(() => F(v, h.props));
	var m = p(),
		_ = f(m);
	{
		var w = (e) => {
				var a = p(),
					r = f(a);
				c(
					r,
					() => t.child,
					() => ({ props: n(d) })
				),
					s(e, a);
			},
			x = (e) => {
				var a = G();
				let r;
				var D = B(a);
				c(D, () => t.children ?? I), S(a), j(() => (r = C(a, r, { ...n(d) }))), s(e, a);
			};
		z(_, (e) => {
			t.child ? e(w) : e(x, !1);
		});
	}
	s(g, m), k();
}
const W = T,
	X = H;
export { W as R, X as T };
