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
	h as w,
	g as m,
	p as y,
	f as b,
	a as T,
	c as j,
	y as q,
	r as C,
	t as F
} from './BHafZ7-g.js';
import { c as S, a as p, t as G } from './D4wBL3Sd.js';
import { c as J } from './D-TmFHfb.js';
import { p as i, i as K, r as z, s as L } from './CjIAJ7VA.js';
import { a as M } from './Bsldq5z3.js';
import { s as P } from './CiWmPosG.js';
import { a as N } from './eK_4uKAs.js';
import { a as Q, u as U, b as f, m as V } from './iSg1OsVq.js';
import { g as W, b as X, c as Y } from './DvUo5-ap.js';
const Z = 'data-separator-root';
var h;
class $ {
	constructor(t) {
		x(this, 'opts');
		O(
			this,
			h,
			w(() => ({
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
		return m(A(this, h));
	}
}
h = new WeakMap();
function tt(r) {
	return new $(r);
}
var rt = G('<div><!></div>');
function et(r, t) {
	y(t, !0);
	let e = i(t, 'id', 19, U),
		s = i(t, 'ref', 15, null),
		u = i(t, 'decorative', 3, !1),
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
			decorative: f.with(() => u()),
			orientation: f.with(() => n())
		}),
		c = w(() => V(v, g.props));
	var d = S(),
		_ = b(d);
	{
		var k = (a) => {
				var o = S(),
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
	p(r, d), T();
}
function ht(r, t) {
	y(t, !0);
	let e = i(t, 'ref', 15, null),
		s = i(t, 'orientation', 3, 'horizontal'),
		u = z(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'orientation']);
	var n = S(),
		v = b(n);
	const g = w(() =>
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
					() => u,
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
		T();
}
export { ht as S };
