var W = Object.defineProperty;
var H = (e) => {
	throw TypeError(e);
};
var X = (e, t, r) =>
	t in e ? W(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var S = (e, t, r) => X(e, typeof t != 'symbol' ? t + '' : t, r),
	Y = (e, t, r) => t.has(e) || H('Cannot ' + r);
var k = (e, t, r) => (Y(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
	x = (e, t, r) =>
		t.has(e)
			? H('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, r);
import './Bg9kRutz.js';
import {
	h as w,
	g as v,
	ac as Z,
	A as $,
	p as b,
	f as p,
	a as P,
	c as J,
	y as N,
	r as Q,
	t as L
} from './BHafZ7-g.js';
import { c as y, a as h, t as F, w as tt } from './D4wBL3Sd.js';
import { c as V } from './D-TmFHfb.js';
import { p as d, i as B, r as T, s as j } from './CjIAJ7VA.js';
import { a as q } from './Bsldq5z3.js';
import { s as I } from './CiWmPosG.js';
import { a as z } from './eK_4uKAs.js';
import { a as E, u as G, b as A, m as K } from './iSg1OsVq.js';
import { C as et } from './DvUo5-ap.js';
const rt = 'data-avatar-root',
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
				[rt]: '',
				'data-status': this.opts.loadingStatus.current
			}))
		);
		(this.opts = t), (this.loadImage = this.loadImage.bind(this)), E(t);
	}
	loadImage(t, r, o) {
		let n;
		const i = new Image();
		return (
			(i.src = t),
			r !== void 0 && (i.crossOrigin = r),
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
		return v(k(this, O));
	}
}
O = new WeakMap();
var C;
class it {
	constructor(t, r) {
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
			(this.root = r),
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
		return v(k(this, C));
	}
}
C = new WeakMap();
var M;
class nt {
	constructor(t, r) {
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
		(this.opts = t), (this.root = r), E(t);
	}
	get props() {
		return v(k(this, M));
	}
}
M = new WeakMap();
const D = new et('Avatar.Root');
function lt(e) {
	return D.set(new ot(e));
}
function ct(e) {
	return new it(e, D.get());
}
function dt(e) {
	return new nt(e, D.get());
}
var ut = F('<div><!></div>');
function ft(e, t) {
	b(t, !0);
	let r = d(t, 'delayMs', 3, 0),
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
			delayMs: A.with(() => r()),
			loadingStatus: A.with(
				() => o(),
				(a) => {
					var s;
					o() !== a && (o(a), (s = t.onLoadingStatusChange) == null || s.call(t, a));
				}
			),
			id: A.with(() => n()),
			ref: A.with(
				() => i(),
				(a) => i(a)
			)
		}),
		l = w(() => K(u, f.props));
	var c = y(),
		R = p(c);
	{
		var g = (a) => {
				var s = y(),
					_ = p(s);
				I(
					_,
					() => t.child,
					() => ({ props: v(l) })
				),
					h(a, s);
			},
			m = (a) => {
				var s = ut();
				let _;
				var U = J(s);
				I(U, () => t.children ?? N), Q(s), L(() => (_ = z(s, _, { ...v(l) }))), h(a, s);
			};
		B(R, (a) => {
			t.child ? a(g) : a(m, !1);
		});
	}
	h(e, c), P();
}
var gt = F('<img>');
function ht(e, t) {
	b(t, !0);
	let r = d(t, 'id', 19, G),
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
			src: A.with(() => t.src),
			id: A.with(() => r()),
			ref: A.with(
				() => o(),
				(a) => o(a)
			),
			crossOrigin: A.with(() => n()),
			referrerPolicy: A.with(() => i())
		}),
		l = w(() => K(u, f.props));
	var c = y(),
		R = p(c);
	{
		var g = (a) => {
				var s = y(),
					_ = p(s);
				I(
					_,
					() => t.child,
					() => ({ props: v(l) })
				),
					h(a, s);
			},
			m = (a) => {
				var s = gt();
				let _;
				L(() => (_ = z(s, _, { ...v(l), src: t.src }))), tt(s), h(a, s);
			};
		B(R, (a) => {
			t.child ? a(g) : a(m, !1);
		});
	}
	h(e, c), P();
}
var vt = F('<span><!></span>');
function mt(e, t) {
	b(t, !0);
	let r = d(t, 'id', 19, G),
		o = d(t, 'ref', 15, null),
		n = T(t, ['$$slots', '$$events', '$$legacy', 'children', 'child', 'id', 'ref']);
	const i = dt({
			id: A.with(() => r()),
			ref: A.with(
				() => o(),
				(g) => o(g)
			)
		}),
		u = w(() => K(n, i.props));
	var f = y(),
		l = p(f);
	{
		var c = (g) => {
				var m = y(),
					a = p(m);
				I(
					a,
					() => t.child,
					() => ({ props: v(u) })
				),
					h(g, m);
			},
			R = (g) => {
				var m = vt();
				let a;
				var s = J(m);
				I(s, () => t.children ?? N), Q(m), L(() => (a = z(m, a, { ...v(u) }))), h(g, m);
			};
		B(l, (g) => {
			t.child ? g(c) : g(R, !1);
		});
	}
	h(e, f), P();
}
function kt(e, t) {
	b(t, !0);
	let r = d(t, 'ref', 15, null),
		o = T(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var n = y(),
		i = p(n);
	const u = w(() => q('relative flex size-10 shrink-0 overflow-hidden rounded-full', t.class));
	V(
		i,
		() => ft,
		(f, l) => {
			l(
				f,
				j(
					{
						get class() {
							return v(u);
						}
					},
					() => o,
					{
						get ref() {
							return r();
						},
						set ref(c) {
							r(c);
						}
					}
				)
			);
		}
	),
		h(e, n),
		P();
}
function xt(e, t) {
	b(t, !0);
	let r = d(t, 'ref', 15, null),
		o = T(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var n = y(),
		i = p(n);
	const u = w(() => q('aspect-square h-full w-full', t.class));
	V(
		i,
		() => ht,
		(f, l) => {
			l(
				f,
				j(
					{
						get class() {
							return v(u);
						}
					},
					() => o,
					{
						get ref() {
							return r();
						},
						set ref(c) {
							r(c);
						}
					}
				)
			);
		}
	),
		h(e, n),
		P();
}
function Ot(e, t) {
	b(t, !0);
	let r = d(t, 'ref', 15, null),
		o = T(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var n = y(),
		i = p(n);
	const u = w(() =>
		q('bg-muted flex h-full w-full items-center justify-center rounded-full', t.class)
	);
	V(
		i,
		() => mt,
		(f, l) => {
			l(
				f,
				j(
					{
						get class() {
							return v(u);
						}
					},
					() => o,
					{
						get ref() {
							return r();
						},
						set ref(c) {
							r(c);
						}
					}
				)
			);
		}
	),
		h(e, n),
		P();
}
export { kt as A, xt as a, Ot as b };
