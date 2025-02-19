var A = Object.defineProperty;
var w = (t) => {
	throw TypeError(t);
};
var B = (t, e, r) =>
	e in t ? A(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r);
var y = (t, e, r) => B(t, typeof e != 'symbol' ? e + '' : e, r),
	D = (t, e, r) => e.has(t) || w('Cannot ' + r);
var L = (t, e, r) => (D(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
	R = (t, e, r) =>
		e.has(t)
			? w('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(t)
				: e.set(t, r);
import './Bg9kRutz.js';
import {
	h as _,
	g as m,
	p as S,
	f as b,
	a as T,
	c as j,
	y as q,
	r as z,
	t as C
} from './BHafZ7-g.js';
import { c as v, a as d, t as E } from './D4wBL3Sd.js';
import { c as F } from './D-TmFHfb.js';
import { p as g, i as G, r as I, s as H } from './CjIAJ7VA.js';
import { a as J } from './Bsldq5z3.js';
import { s as x } from './CiWmPosG.js';
import { a as K } from './eK_4uKAs.js';
import { a as M, u as N, b as P, m as Q } from './iSg1OsVq.js';
const U = 'data-label-root';
var c;
class V {
	constructor(e) {
		y(this, 'opts');
		R(
			this,
			c,
			_(() => ({ id: this.opts.id.current, [U]: '', onmousedown: this.onmousedown }))
		);
		(this.opts = e), (this.onmousedown = this.onmousedown.bind(this)), M(e);
	}
	onmousedown(e) {
		e.detail > 1 && e.preventDefault();
	}
	get props() {
		return m(L(this, c));
	}
}
c = new WeakMap();
function W(t) {
	return new V(t);
}
var X = E('<label><!></label>');
function Y(t, e) {
	S(e, !0);
	let r = g(e, 'id', 19, N),
		a = g(e, 'ref', 15, null),
		n = I(e, ['$$slots', '$$events', '$$legacy', 'children', 'child', 'id', 'ref', 'for']);
	const p = W({
			id: P.with(() => r()),
			ref: P.with(
				() => a(),
				(s) => a(s)
			)
		}),
		i = _(() => Q(n, p.props, { for: e.for }));
	var l = v(),
		u = b(l);
	{
		var h = (s) => {
				var o = v(),
					f = b(o);
				x(
					f,
					() => e.child,
					() => ({ props: m(i) })
				),
					d(s, o);
			},
			O = (s) => {
				var o = X();
				let f;
				var k = j(o);
				x(k, () => e.children ?? q), z(o), C(() => (f = K(o, f, { ...m(i), for: e.for }))), d(s, o);
			};
		G(u, (s) => {
			e.child ? s(h) : s(O, !1);
		});
	}
	d(t, l), T();
}
function le(t, e) {
	S(e, !0);
	let r = g(e, 'ref', 15, null),
		a = I(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var n = v(),
		p = b(n);
	const i = _(() =>
		J(
			'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
			e.class
		)
	);
	F(
		p,
		() => Y,
		(l, u) => {
			u(
				l,
				H(
					{
						get class() {
							return m(i);
						}
					},
					() => a,
					{
						get ref() {
							return r();
						},
						set ref(h) {
							r(h);
						}
					}
				)
			);
		}
	),
		d(t, n),
		T();
}
export { le as L };
