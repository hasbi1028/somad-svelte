var A = Object.defineProperty;
var w = (t) => {
	throw TypeError(t);
};
var B = (t, e, s) =>
	e in t ? A(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[e] = s);
var x = (t, e, s) => B(t, typeof e != 'symbol' ? e + '' : e, s),
	D = (t, e, s) => e.has(t) || w('Cannot ' + s);
var L = (t, e, s) => (D(t, e, 'read from private field'), s ? s.call(t) : e.get(t)),
	R = (t, e, s) =>
		e.has(t)
			? w('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(t)
				: e.set(t, s);
import './Bg9kRutz.js';
import {
	w as _,
	v as m,
	p as S,
	f as b,
	a as T,
	c as j,
	x as q,
	r as z,
	t as C
} from './DQMf8gWK.js';
import { e as v, a as d, t as E } from './BGOrq1ZG.js';
import { c as F } from './D7_cnrTr.js';
import { p as g, i as G, r as I, s as H } from './DjKtoK8y.js';
import { a as J } from './DWr6XhLj.js';
import { s as y } from './D3E8oDJG.js';
import { s as K } from './DvbRtjlS.js';
import { a as M, u as N, b as P, m as Q } from './B7uXBihW.js';
const U = 'data-label-root';
var c;
class V {
	constructor(e) {
		x(this, 'opts');
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
	let s = g(e, 'id', 19, N),
		a = g(e, 'ref', 15, null),
		n = I(e, ['$$slots', '$$events', '$$legacy', 'children', 'child', 'id', 'ref', 'for']);
	const p = W({
			id: P.with(() => s()),
			ref: P.with(
				() => a(),
				(r) => a(r)
			)
		}),
		i = _(() => Q(n, p.props, { for: e.for }));
	var l = v(),
		u = b(l);
	{
		var h = (r) => {
				var o = v(),
					f = b(o);
				y(
					f,
					() => e.child,
					() => ({ props: m(i) })
				),
					d(r, o);
			},
			O = (r) => {
				var o = X();
				let f;
				var k = j(o);
				y(k, () => e.children ?? q), z(o), C(() => (f = K(o, f, { ...m(i), for: e.for }))), d(r, o);
			};
		G(u, (r) => {
			e.child ? r(h) : r(O, !1);
		});
	}
	d(t, l), T();
}
function le(t, e) {
	S(e, !0);
	let s = g(e, 'ref', 15, null),
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
							return s();
						},
						set ref(h) {
							s(h);
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
