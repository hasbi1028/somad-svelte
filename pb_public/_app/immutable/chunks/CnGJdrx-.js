var D = Object.defineProperty;
var R = (r) => {
	throw TypeError(r);
};
var E = (r, t, e) =>
	t in r ? D(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (r[t] = e);
var x = (r, t, e) => E(r, typeof t != 'symbol' ? t + '' : t, e),
	H = (r, t, e) => t.has(r) || R('Cannot ' + e);
var A = (r, t, e) => (H(r, t, 'read from private field'), e ? e.call(r) : t.get(r)),
	O = (r, t, e) =>
		t.has(r)
			? R('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(r)
				: t.set(r, e);
import './Bg9kRutz.js';
import {
	w as S,
	v as m,
	p as T,
	f as b,
	a as y,
	c as j,
	x as q,
	r as C,
	t as F
} from './DQMf8gWK.js';
import { e as w, a as p, t as G } from './BGOrq1ZG.js';
import { c as J } from './D7_cnrTr.js';
import { p as i, i as K, r as z, s as L } from './DjKtoK8y.js';
import { a as M } from './DWr6XhLj.js';
import { s as P } from './D3E8oDJG.js';
import { s as N } from './DvbRtjlS.js';
import { a as Q, u as U, b as f, m as V } from './B7uXBihW.js';
import { g as W, a as X, b as Y } from './B8S9RRQw.js';
const Z = 'data-separator-root';
var u;
class $ {
	constructor(t) {
		x(this, 'opts');
		O(
			this,
			u,
			S(() => ({
				id: this.opts.id.current,
				role: this.opts.decorative.current ? 'none' : 'separator',
				'aria-orientation': Y(this.opts.orientation.current),
				'aria-hidden': X(this.opts.decorative.current),
				'data-orientation': W(this.opts.orientation.current),
				[Z]: ''
			}))
		);
		(this.opts = t), Q(t);
	}
	get props() {
		return m(A(this, u));
	}
}
u = new WeakMap();
function tt(r) {
	return new $(r);
}
var rt = G('<div><!></div>');
function et(r, t) {
	T(t, !0);
	let e = i(t, 'id', 19, U),
		s = i(t, 'ref', 15, null),
		h = i(t, 'decorative', 3, !1),
		n = i(t, 'orientation', 3, 'horizontal'),
		v = z(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'id',
			'ref',
			'child',
			'children',
			'decorative',
			'orientation'
		]);
	const g = tt({
			ref: f.with(
				() => s(),
				(a) => s(a)
			),
			id: f.with(() => e()),
			decorative: f.with(() => h()),
			orientation: f.with(() => n())
		}),
		c = S(() => V(v, g.props));
	var d = w(),
		_ = b(d);
	{
		var k = (a) => {
				var o = w(),
					l = b(o);
				P(
					l,
					() => t.child,
					() => ({ props: m(c) })
				),
					p(a, o);
			},
			I = (a) => {
				var o = rt();
				let l;
				var B = j(o);
				P(B, () => t.children ?? q), C(o), F(() => (l = N(o, l, { ...m(c) }))), p(a, o);
			};
		K(_, (a) => {
			t.child ? a(k) : a(I, !1);
		});
	}
	p(r, d), y();
}
function ut(r, t) {
	T(t, !0);
	let e = i(t, 'ref', 15, null),
		s = i(t, 'orientation', 3, 'horizontal'),
		h = z(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'orientation']);
	var n = w(),
		v = b(n);
	const g = S(() =>
		M('bg-border shrink-0', s() === 'horizontal' ? 'h-[1px] w-full' : 'min-h-full w-[1px]', t.class)
	);
	J(
		v,
		() => et,
		(c, d) => {
			d(
				c,
				L(
					{
						get class() {
							return m(g);
						},
						get orientation() {
							return s();
						}
					},
					() => h,
					{
						get ref() {
							return e();
						},
						set ref(_) {
							e(_);
						}
					}
				)
			);
		}
	),
		p(r, n),
		y();
}
export { ut as S };
