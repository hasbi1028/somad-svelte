import './Bg9kRutz.js';
import { a as T } from './DvUo5-ap.js';
import { D as x } from './CPQLfOzG.js';
import { p as y, f, a as R, g as n, h as k, c as B, y as I, r as S, t as j } from './BHafZ7-g.js';
import { c as p, a as s, t as q } from './D4wBL3Sd.js';
import { p as o, i as z, r as A } from './CjIAJ7VA.js';
import { s as c } from './CiWmPosG.js';
import { a as C } from './eK_4uKAs.js';
import { u as E, b as i, m as F } from './iSg1OsVq.js';
var G = q('<button><!></button>');
function H(g, t) {
	y(t, !0);
	let b = o(t, 'id', 19, E),
		l = o(t, 'ref', 15, null),
		h = o(t, 'disabled', 3, !1),
		u = A(t, ['$$slots', '$$events', '$$legacy', 'id', 'ref', 'children', 'child', 'disabled']);
	const v = T({
			id: i.with(() => b()),
			ref: i.with(
				() => l(),
				(a) => l(a)
			),
			disabled: i.with(() => !!h())
		}),
		d = k(() => F(u, v.props));
	var m = p(),
		_ = f(m);
	{
		var D = (a) => {
				var e = p(),
					r = f(e);
				c(
					r,
					() => t.child,
					() => ({ props: n(d) })
				),
					s(a, e);
			},
			w = (a) => {
				var e = G();
				let r;
				var P = B(e);
				c(P, () => t.children ?? I), S(e), j(() => (r = C(e, r, { ...n(d) }))), s(a, e);
			};
		z(_, (a) => {
			t.child ? a(D) : a(w, !1);
		});
	}
	s(g, m), R();
}
const W = x,
	X = H;
export { W as R, X as T };
