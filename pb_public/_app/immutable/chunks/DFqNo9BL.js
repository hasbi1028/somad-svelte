var wt = Object.defineProperty;
var ct = (e) => {
	throw TypeError(e);
};
var yt = (e, t, s) =>
	t in e ? wt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s);
var y = (e, t, s) => yt(e, typeof t != 'symbol' ? t + '' : t, s),
	ht = (e, t, s) => t.has(e) || ct('Cannot ' + s);
var i = (e, t, s) => (ht(e, t, 'read from private field'), s ? s.call(e) : t.get(e)),
	T = (e, t, s) =>
		t.has(e)
			? ct('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, s);
var L = (e, t, s) => (ht(e, t, 'access private method'), s);
import './Bg9kRutz.js';
import {
	u as gt,
	v as r,
	q as at,
	w as c,
	a3 as It,
	p as A,
	f as I,
	a as P,
	c as U,
	x as W,
	r as X,
	t as Y
} from './DQMf8gWK.js';
import { e as x, a as g, t as Z } from './BGOrq1ZG.js';
import { c as nt } from './D7_cnrTr.js';
import { p as u, i as $, r as D, s as lt } from './DjKtoK8y.js';
import { a as dt } from './DWr6XhLj.js';
import { s as S } from './D3E8oDJG.js';
import { s as tt } from './DvbRtjlS.js';
import { a as et, w as bt, b as h, u as st, m as rt } from './B7uXBihW.js';
import { p as ft } from './BJa4LW-r.js';
import {
	C as xt,
	s as vt,
	g as ut,
	t as Ct,
	e as mt,
	b as St,
	c as kt,
	E as Rt,
	v as At,
	w as Pt,
	n as Dt
} from './B8S9RRQw.js';
import { f as Bt } from './KMVKlTlO.js';
const Et = 'data-tabs-root',
	Mt = 'data-tabs-list',
	pt = 'data-tabs-trigger',
	Gt = 'data-tabs-content';
var O, j;
class Ot {
	constructor(t) {
		y(this, 'opts');
		y(this, 'rovingFocusGroup');
		T(this, O, gt(ft([])));
		y(this, 'valueToTriggerId', new vt());
		y(this, 'valueToContentId', new vt());
		T(
			this,
			j,
			c(() => ({
				id: this.opts.id.current,
				'data-orientation': ut(this.opts.orientation.current),
				[Et]: ''
			}))
		);
		(this.opts = t),
			et(t),
			(this.rovingFocusGroup = Bt({
				candidateAttr: pt,
				rootNodeId: this.opts.id,
				loop: this.opts.loop,
				orientation: this.opts.orientation
			}));
	}
	get triggerIds() {
		return r(i(this, O));
	}
	set triggerIds(t) {
		at(i(this, O), ft(t));
	}
	registerTrigger(t, s) {
		return (
			this.triggerIds.push(t),
			this.valueToTriggerId.set(s, t),
			() => {
				(this.triggerIds = this.triggerIds.filter((o) => o !== t)), this.valueToTriggerId.delete(s);
			}
		);
	}
	registerContent(t, s) {
		return (
			this.valueToContentId.set(s, t),
			() => {
				this.valueToContentId.delete(s);
			}
		);
	}
	setValue(t) {
		this.opts.value.current = t;
	}
	get props() {
		return r(i(this, j));
	}
}
(O = new WeakMap()), (j = new WeakMap());
var q, z;
class Vt {
	constructor(t, s) {
		y(this, 'opts');
		y(this, 'root');
		T(
			this,
			q,
			c(() => this.root.opts.disabled.current)
		);
		T(
			this,
			z,
			c(() => ({
				id: this.opts.id.current,
				role: 'tablist',
				'aria-orientation': St(this.root.opts.orientation.current),
				'data-orientation': ut(this.root.opts.orientation.current),
				[Mt]: '',
				'data-disabled': mt(r(i(this, q)))
			}))
		);
		(this.opts = t), (this.root = s), et(t);
	}
	get props() {
		return r(i(this, z));
	}
}
(q = new WeakMap()), (z = new WeakMap());
var E, C, M, H, G, N, K;
class Ft {
	constructor(t, s) {
		T(this, G);
		y(this, 'opts');
		y(this, 'root');
		T(
			this,
			E,
			c(() => this.root.opts.value.current === this.opts.value.current)
		);
		T(
			this,
			C,
			c(() => this.opts.disabled.current || this.root.opts.disabled.current)
		);
		T(this, M, gt(0));
		T(
			this,
			H,
			c(() => this.root.valueToContentId.get(this.opts.value.current))
		);
		T(
			this,
			K,
			c(() => ({
				id: this.opts.id.current,
				role: 'tab',
				'data-state': Tt(r(i(this, E))),
				'data-value': this.opts.value.current,
				'data-orientation': ut(this.root.opts.orientation.current),
				'data-disabled': mt(r(i(this, C))),
				'aria-selected': Pt(r(i(this, E))),
				'aria-controls': r(i(this, H)),
				[pt]: '',
				disabled: At(r(i(this, C))),
				tabindex: r(i(this, M)),
				onclick: this.onclick,
				onfocus: this.onfocus,
				onkeydown: this.onkeydown
			}))
		);
		(this.opts = t),
			(this.root = s),
			et(t),
			bt([() => this.opts.id.current, () => this.opts.value.current], ([o, a]) =>
				this.root.registerTrigger(o, a)
			),
			It(() => {
				this.root.triggerIds.length,
					r(i(this, E)) || !this.root.opts.value.current ? at(i(this, M), 0) : at(i(this, M), -1);
			}),
			(this.onfocus = this.onfocus.bind(this)),
			(this.onclick = this.onclick.bind(this)),
			(this.onkeydown = this.onkeydown.bind(this));
	}
	onfocus(t) {
		this.root.opts.activationMode.current !== 'automatic' ||
			r(i(this, C)) ||
			L(this, G, N).call(this);
	}
	onclick(t) {
		r(i(this, C)) || L(this, G, N).call(this);
	}
	onkeydown(t) {
		if (!r(i(this, C))) {
			if (t.key === kt || t.key === Rt) {
				t.preventDefault(), L(this, G, N).call(this);
				return;
			}
			this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, t);
		}
	}
	get props() {
		return r(i(this, K));
	}
}
(E = new WeakMap()),
	(C = new WeakMap()),
	(M = new WeakMap()),
	(H = new WeakMap()),
	(G = new WeakSet()),
	(N = function () {
		this.root.opts.value.current !== this.opts.value.current &&
			this.root.setValue(this.opts.value.current);
	}),
	(K = new WeakMap());
var V, J, Q;
class Lt {
	constructor(t, s) {
		y(this, 'opts');
		y(this, 'root');
		T(
			this,
			V,
			c(() => this.root.opts.value.current === this.opts.value.current)
		);
		T(
			this,
			J,
			c(() => this.root.valueToTriggerId.get(this.opts.value.current))
		);
		T(
			this,
			Q,
			c(() => ({
				id: this.opts.id.current,
				role: 'tabpanel',
				hidden: Ct(!r(i(this, V))),
				tabindex: 0,
				'data-value': this.opts.value.current,
				'data-state': Tt(r(i(this, V))),
				'aria-labelledby': r(i(this, J)),
				[Gt]: ''
			}))
		);
		(this.opts = t),
			(this.root = s),
			et(t),
			bt([() => this.opts.id.current, () => this.opts.value.current], ([o, a]) =>
				this.root.registerContent(o, a)
			);
	}
	get props() {
		return r(i(this, Q));
	}
}
(V = new WeakMap()), (J = new WeakMap()), (Q = new WeakMap());
const it = new xt('Tabs.Root');
function Nt(e) {
	return it.set(new Ot(e));
}
function jt(e) {
	return new Ft(e, it.get());
}
function qt(e) {
	return new Vt(e, it.get());
}
function zt(e) {
	return new Lt(e, it.get());
}
function Tt(e) {
	return e ? 'active' : 'inactive';
}
var Ht = Z('<div><!></div>');
function Kt(e, t) {
	A(t, !0);
	let s = u(t, 'id', 19, st),
		o = u(t, 'ref', 15, null),
		a = u(t, 'value', 15, ''),
		b = u(t, 'onValueChange', 3, Dt),
		f = u(t, 'orientation', 3, 'horizontal'),
		v = u(t, 'loop', 3, !0),
		m = u(t, 'activationMode', 3, 'automatic'),
		p = u(t, 'disabled', 3, !1),
		k = D(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'id',
			'ref',
			'value',
			'onValueChange',
			'orientation',
			'loop',
			'activationMode',
			'disabled',
			'children',
			'child'
		]);
	const n = Nt({
			id: h.with(() => s()),
			value: h.with(
				() => a(),
				(w) => {
					a(w), b()(w);
				}
			),
			orientation: h.with(() => f()),
			loop: h.with(() => v()),
			activationMode: h.with(() => m()),
			disabled: h.with(() => p()),
			ref: h.with(
				() => o(),
				(w) => o(w)
			)
		}),
		d = c(() => rt(k, n.props));
	var l = x(),
		_ = I(l);
	{
		var B = (w) => {
				var R = x(),
					F = I(R);
				S(
					F,
					() => t.child,
					() => ({ props: r(d) })
				),
					g(w, R);
			},
			ot = (w) => {
				var R = Ht();
				let F;
				var _t = U(R);
				S(_t, () => t.children ?? W), X(R), Y(() => (F = tt(R, F, { ...r(d) }))), g(w, R);
			};
		$(_, (w) => {
			t.child ? w(B) : w(ot, !1);
		});
	}
	g(e, l), P();
}
var Jt = Z('<div><!></div>');
function Qt(e, t) {
	A(t, !0);
	let s = u(t, 'id', 19, st),
		o = u(t, 'ref', 15, null),
		a = D(t, ['$$slots', '$$events', '$$legacy', 'children', 'child', 'id', 'ref', 'value']);
	const b = zt({
			value: h.with(() => t.value),
			id: h.with(() => s()),
			ref: h.with(
				() => o(),
				(n) => o(n)
			)
		}),
		f = c(() => rt(a, b.props));
	var v = x(),
		m = I(v);
	{
		var p = (n) => {
				var d = x(),
					l = I(d);
				S(
					l,
					() => t.child,
					() => ({ props: r(f) })
				),
					g(n, d);
			},
			k = (n) => {
				var d = Jt();
				let l;
				var _ = U(d);
				S(_, () => t.children ?? W), X(d), Y(() => (l = tt(d, l, { ...r(f) }))), g(n, d);
			};
		$(m, (n) => {
			t.child ? n(p) : n(k, !1);
		});
	}
	g(e, v), P();
}
var Ut = Z('<div><!></div>');
function Wt(e, t) {
	A(t, !0);
	let s = u(t, 'id', 19, st),
		o = u(t, 'ref', 15, null),
		a = D(t, ['$$slots', '$$events', '$$legacy', 'child', 'children', 'id', 'ref']);
	const b = qt({
			id: h.with(() => s()),
			ref: h.with(
				() => o(),
				(n) => o(n)
			)
		}),
		f = c(() => rt(a, b.props));
	var v = x(),
		m = I(v);
	{
		var p = (n) => {
				var d = x(),
					l = I(d);
				S(
					l,
					() => t.child,
					() => ({ props: r(f) })
				),
					g(n, d);
			},
			k = (n) => {
				var d = Ut();
				let l;
				var _ = U(d);
				S(_, () => t.children ?? W), X(d), Y(() => (l = tt(d, l, { ...r(f) }))), g(n, d);
			};
		$(m, (n) => {
			t.child ? n(p) : n(k, !1);
		});
	}
	g(e, v), P();
}
var Xt = Z('<button><!></button>');
function Yt(e, t) {
	A(t, !0);
	let s = u(t, 'disabled', 3, !1),
		o = u(t, 'id', 19, st),
		a = u(t, 'type', 3, 'button'),
		b = u(t, 'ref', 15, null),
		f = D(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'child',
			'children',
			'disabled',
			'id',
			'type',
			'value',
			'ref'
		]);
	const v = jt({
			id: h.with(() => o()),
			disabled: h.with(() => s() ?? !1),
			value: h.with(() => t.value),
			ref: h.with(
				() => b(),
				(l) => b(l)
			)
		}),
		m = c(() => rt(f, v.props, { type: a() }));
	var p = x(),
		k = I(p);
	{
		var n = (l) => {
				var _ = x(),
					B = I(_);
				S(
					B,
					() => t.child,
					() => ({ props: r(m) })
				),
					g(l, _);
			},
			d = (l) => {
				var _ = Xt();
				let B;
				var ot = U(_);
				S(ot, () => t.children ?? W), X(_), Y(() => (B = tt(_, B, { ...r(m) }))), g(l, _);
			};
		$(k, (l) => {
			t.child ? l(n) : l(d, !1);
		});
	}
	g(e, p), P();
}
function ce(e, t) {
	A(t, !0);
	let s = u(t, 'ref', 15, null),
		o = D(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var a = x(),
		b = I(a);
	const f = c(() =>
		dt(
			'ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
			t.class
		)
	);
	nt(
		b,
		() => Qt,
		(v, m) => {
			m(
				v,
				lt(
					{
						get class() {
							return r(f);
						}
					},
					() => o,
					{
						get ref() {
							return s();
						},
						set ref(p) {
							s(p);
						}
					}
				)
			);
		}
	),
		g(e, a),
		P();
}
function he(e, t) {
	A(t, !0);
	let s = u(t, 'ref', 15, null),
		o = D(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var a = x(),
		b = I(a);
	const f = c(() =>
		dt(
			'bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1',
			t.class
		)
	);
	nt(
		b,
		() => Wt,
		(v, m) => {
			m(
				v,
				lt(
					{
						get class() {
							return r(f);
						}
					},
					() => o,
					{
						get ref() {
							return s();
						},
						set ref(p) {
							s(p);
						}
					}
				)
			);
		}
	),
		g(e, a),
		P();
}
function fe(e, t) {
	A(t, !0);
	let s = u(t, 'ref', 15, null),
		o = D(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var a = x(),
		b = I(a);
	const f = c(() =>
		dt(
			'ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm',
			t.class
		)
	);
	nt(
		b,
		() => Yt,
		(v, m) => {
			m(
				v,
				lt(
					{
						get class() {
							return r(f);
						}
					},
					() => o,
					{
						get ref() {
							return s();
						},
						set ref(p) {
							s(p);
						}
					}
				)
			);
		}
	),
		g(e, a),
		P();
}
const ve = Kt;
export { ve as R, he as T, fe as a, ce as b };
