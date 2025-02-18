var W = Object.defineProperty;
var H = (r) => {
	throw TypeError(r);
};
var X = (r, t, e) =>
	t in r ? W(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (r[t] = e);
var S = (r, t, e) => X(r, typeof t != 'symbol' ? t + '' : t, e),
	Y = (r, t, e) => t.has(r) || H('Cannot ' + e);
var k = (r, t, e) => (Y(r, t, 'read from private field'), e ? e.call(r) : t.get(r)),
	x = (r, t, e) =>
		t.has(r)
			? H('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(r)
				: t.set(r, e);
import './Bg9kRutz.js';
import {
	w,
	v as m,
	a2 as Z,
	z as $,
	p as b,
	f as _,
	a as P,
	c as J,
	x as N,
	r as Q,
	t as L
} from './DQMf8gWK.js';
import { e as y, a as h, t as F } from './BGOrq1ZG.js';
import { c as V } from './D7_cnrTr.js';
import { p as d, i as z, r as T, s as B } from './DjKtoK8y.js';
import { a as j } from './DWr6XhLj.js';
import { s as I } from './D3E8oDJG.js';
import { s as q } from './DvbRtjlS.js';
import { a as E, u as G, b as p, m as K } from './B7uXBihW.js';
import { m as tt } from './BTRVP7y_.js';
import { C as rt } from './B8S9RRQw.js';
const et = 'data-avatar-root',
	at = 'data-avatar-image',
	st = 'data-avatar-fallback';
var O;
class ot {
	constructor(t) {
		S(this, 'opts');
		x(
			this,
			O,
			w(() => ({
				id: this.opts.id.current,
				[et]: '',
				'data-status': this.opts.loadingStatus.current
			}))
		);
		(this.opts = t), (this.loadImage = this.loadImage.bind(this)), E(t);
	}
	loadImage(t, e, o) {
		let n;
		const i = new Image();
		return (
			(i.src = t),
			e !== void 0 && (i.crossOrigin = e),
			o && (i.referrerPolicy = o),
			(this.opts.loadingStatus.current = 'loading'),
			(i.onload = () => {
				n = window.setTimeout(() => {
					this.opts.loadingStatus.current = 'loaded';
				}, this.opts.delayMs.current);
			}),
			(i.onerror = () => {
				this.opts.loadingStatus.current = 'error';
			}),
			() => {
				window.clearTimeout(n);
			}
		);
	}
	get props() {
		return m(k(this, O));
	}
}
O = new WeakMap();
var C;
class it {
	constructor(t, e) {
		S(this, 'opts');
		S(this, 'root');
		x(
			this,
			C,
			w(() => ({
				id: this.opts.id.current,
				style: { display: this.root.opts.loadingStatus.current === 'loaded' ? 'block' : 'none' },
				'data-status': this.root.opts.loadingStatus.current,
				[at]: '',
				src: this.opts.src.current,
				crossorigin: this.opts.crossOrigin.current,
				referrerpolicy: this.opts.referrerPolicy.current
			}))
		);
		(this.opts = t),
			(this.root = e),
			E(t),
			Z(() => {
				if (!this.opts.src.current) {
					this.root.opts.loadingStatus.current = 'error';
					return;
				}
				this.opts.crossOrigin.current,
					$(() =>
						this.root.loadImage(
							this.opts.src.current ?? '',
							this.opts.crossOrigin.current,
							this.opts.referrerPolicy.current
						)
					);
			});
	}
	get props() {
		return m(k(this, C));
	}
}
C = new WeakMap();
var M;
class nt {
	constructor(t, e) {
		S(this, 'opts');
		S(this, 'root');
		x(
			this,
			M,
			w(() => ({
				style: { display: this.root.opts.loadingStatus.current === 'loaded' ? 'none' : void 0 },
				'data-status': this.root.opts.loadingStatus.current,
				[st]: ''
			}))
		);
		(this.opts = t), (this.root = e), E(t);
	}
	get props() {
		return m(k(this, M));
	}
}
M = new WeakMap();
const D = new rt('Avatar.Root');
function lt(r) {
	return D.set(new ot(r));
}
function ct(r) {
	return new it(r, D.get());
}
function dt(r) {
	return new nt(r, D.get());
}
var ut = F('<div><!></div>');
function ft(r, t) {
	b(t, !0);
	let e = d(t, 'delayMs', 3, 0),
		o = d(t, 'loadingStatus', 15, 'loading'),
		n = d(t, 'id', 19, G),
		i = d(t, 'ref', 15, null),
		u = T(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'delayMs',
			'loadingStatus',
			'onLoadingStatusChange',
			'child',
			'children',
			'id',
			'ref'
		]);
	const f = lt({
			delayMs: p.with(() => e()),
			loadingStatus: p.with(
				() => o(),
				(a) => {
					var s;
					o() !== a && (o(a), (s = t.onLoadingStatusChange) == null || s.call(t, a));
				}
			),
			id: p.with(() => n()),
			ref: p.with(
				() => i(),
				(a) => i(a)
			)
		}),
		l = w(() => K(u, f.props));
	var c = y(),
		R = _(c);
	{
		var g = (a) => {
				var s = y(),
					A = _(s);
				I(
					A,
					() => t.child,
					() => ({ props: m(l) })
				),
					h(a, s);
			},
			v = (a) => {
				var s = ut();
				let A;
				var U = J(s);
				I(U, () => t.children ?? N), Q(s), L(() => (A = q(s, A, { ...m(l) }))), h(a, s);
			};
		z(R, (a) => {
			t.child ? a(g) : a(v, !1);
		});
	}
	h(r, c), P();
}
var gt = F('<img>');
function ht(r, t) {
	b(t, !0);
	let e = d(t, 'id', 19, G),
		o = d(t, 'ref', 15, null),
		n = d(t, 'crossorigin', 3, void 0),
		i = d(t, 'referrerpolicy', 3, void 0),
		u = T(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'src',
			'child',
			'id',
			'ref',
			'crossorigin',
			'referrerpolicy'
		]);
	const f = ct({
			src: p.with(() => t.src),
			id: p.with(() => e()),
			ref: p.with(
				() => o(),
				(a) => o(a)
			),
			crossOrigin: p.with(() => n()),
			referrerPolicy: p.with(() => i())
		}),
		l = w(() => K(u, f.props));
	var c = y(),
		R = _(c);
	{
		var g = (a) => {
				var s = y(),
					A = _(s);
				I(
					A,
					() => t.child,
					() => ({ props: m(l) })
				),
					h(a, s);
			},
			v = (a) => {
				var s = gt();
				let A;
				L(() => (A = q(s, A, { ...m(l), src: t.src }))), tt(s), h(a, s);
			};
		z(R, (a) => {
			t.child ? a(g) : a(v, !1);
		});
	}
	h(r, c), P();
}
var mt = F('<span><!></span>');
function vt(r, t) {
	b(t, !0);
	let e = d(t, 'id', 19, G),
		o = d(t, 'ref', 15, null),
		n = T(t, ['$$slots', '$$events', '$$legacy', 'children', 'child', 'id', 'ref']);
	const i = dt({
			id: p.with(() => e()),
			ref: p.with(
				() => o(),
				(g) => o(g)
			)
		}),
		u = w(() => K(n, i.props));
	var f = y(),
		l = _(f);
	{
		var c = (g) => {
				var v = y(),
					a = _(v);
				I(
					a,
					() => t.child,
					() => ({ props: m(u) })
				),
					h(g, v);
			},
			R = (g) => {
				var v = mt();
				let a;
				var s = J(v);
				I(s, () => t.children ?? N), Q(v), L(() => (a = q(v, a, { ...m(u) }))), h(g, v);
			};
		z(l, (g) => {
			t.child ? g(c) : g(R, !1);
		});
	}
	h(r, f), P();
}
function xt(r, t) {
	b(t, !0);
	let e = d(t, 'ref', 15, null),
		o = T(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var n = y(),
		i = _(n);
	const u = w(() => j('relative flex size-10 shrink-0 overflow-hidden rounded-full', t.class));
	V(
		i,
		() => ft,
		(f, l) => {
			l(
				f,
				B(
					{
						get class() {
							return m(u);
						}
					},
					() => o,
					{
						get ref() {
							return e();
						},
						set ref(c) {
							e(c);
						}
					}
				)
			);
		}
	),
		h(r, n),
		P();
}
function Ot(r, t) {
	b(t, !0);
	let e = d(t, 'ref', 15, null),
		o = T(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var n = y(),
		i = _(n);
	const u = w(() => j('aspect-square h-full w-full', t.class));
	V(
		i,
		() => ht,
		(f, l) => {
			l(
				f,
				B(
					{
						get class() {
							return m(u);
						}
					},
					() => o,
					{
						get ref() {
							return e();
						},
						set ref(c) {
							e(c);
						}
					}
				)
			);
		}
	),
		h(r, n),
		P();
}
function Ct(r, t) {
	b(t, !0);
	let e = d(t, 'ref', 15, null),
		o = T(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var n = y(),
		i = _(n);
	const u = w(() =>
		j('bg-muted flex h-full w-full items-center justify-center rounded-full', t.class)
	);
	V(
		i,
		() => vt,
		(f, l) => {
			l(
				f,
				B(
					{
						get class() {
							return m(u);
						}
					},
					() => o,
					{
						get ref() {
							return e();
						},
						set ref(c) {
							e(c);
						}
					}
				)
			);
		}
	),
		h(r, n),
		P();
}
export { xt as A, Ot as a, Ct as b };
