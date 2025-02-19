import './Bg9kRutz.js';
import {
	p as x,
	f as u,
	a as y,
	g as v,
	h as P,
	c as S,
	y as k,
	r as I,
	t as j
} from './BHafZ7-g.js';
import { c as _, a as n, t as q } from './D4wBL3Sd.js';
import { c as z } from './D-TmFHfb.js';
import { p as g, i as A, r as w, s as B } from './CjIAJ7VA.js';
import { a as C } from './Bsldq5z3.js';
import { s as h } from './CiWmPosG.js';
import { a as E } from './eK_4uKAs.js';
import { u as F, b, m as G } from './iSg1OsVq.js';
import { u as H } from './BOSOt6G1.js';
var J = q('<div><!></div>');
function K(f, e) {
	x(e, !0);
	let a = g(e, 'ref', 15, null),
		p = g(e, 'id', 19, F),
		s = w(e, ['$$slots', '$$events', '$$legacy', 'ref', 'id', 'child', 'children']);
	const l = H({
			id: b.with(() => p()),
			ref: b.with(
				() => a(),
				(r) => a(r)
			)
		}),
		o = P(() => G(s, l.props));
	var i = _(),
		c = u(i);
	{
		var d = (r) => {
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
		A(c, (r) => {
			e.child ? r(d) : r(D, !1);
		});
	}
	n(f, i), y();
}
function Y(f, e) {
	x(e, !0);
	let a = g(e, 'ref', 15, null),
		p = w(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var s = _(),
		l = u(s);
	const o = P(() => C('bg-muted -mx-1 my-1 h-px', e.class));
	z(
		l,
		() => K,
		(i, c) => {
			c(
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
						set ref(d) {
							a(d);
						}
					}
				)
			);
		}
	),
		n(f, s),
		y();
}
export { Y as D };
