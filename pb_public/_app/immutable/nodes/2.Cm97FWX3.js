var Rt = Object.defineProperty;
var mt = (r) => {
	throw TypeError(r);
};
var Ot = (r, e, t) =>
	e in r ? Rt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t);
var ze = (r, e, t) => Ot(r, typeof e != 'symbol' ? e + '' : e, t),
	gt = (r, e, t) => e.has(r) || mt('Cannot ' + t);
var C = (r, e, t) => (gt(r, e, 'read from private field'), t ? t.call(r) : e.get(r)),
	F = (r, e, t) =>
		e.has(r)
			? mt('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(r)
				: e.set(r, t),
	bt = (r, e, t, o) => (gt(r, e, 'write to private field'), o ? o.call(r, t) : e.set(r, t), t);
import '../chunks/Bg9kRutz.js';
import {
	f as l,
	u as qe,
	v,
	q as Ue,
	w as I,
	a2 as Bt,
	p as K,
	a as V,
	c as k,
	x as le,
	r as N,
	t as D,
	d as Lt,
	n as oe,
	s as y
} from '../chunks/DQMf8gWK.js';
import { e as u, a, t as $, b as He } from '../chunks/BGOrq1ZG.js';
import { s as R } from '../chunks/D3E8oDJG.js';
import { c } from '../chunks/D7_cnrTr.js';
import { g as wt } from '../chunks/q3O7Mc_4.js';
import { p as Ct } from '../chunks/OWF93kYu.js';
import { l as ke, s as W, p as S, i as Ce, r as X, b as Ne } from '../chunks/DjKtoK8y.js';
import { s as xe } from '../chunks/CPLw4cna.js';
import { e as rt } from '../chunks/Ds4ehkC6.js';
import { s as Q } from '../chunks/DvbRtjlS.js';
import { a as st, w as Et, u as ot, b as ne, m as nt } from '../chunks/B7uXBihW.js';
import { p as Fe } from '../chunks/BJa4LW-r.js';
import {
	C as Ht,
	e as lt,
	O as it,
	c as jt,
	E as Gt,
	Q as qt,
	R as Ut,
	n as Ft,
	a4 as It
} from '../chunks/B8S9RRQw.js';
import { a as Le } from '../chunks/DWr6XhLj.js';
import { u as dt, S as Ie } from '../chunks/BVZZpjpa.js';
import {
	e as ct,
	f as ut,
	a as Kt,
	b as Vt,
	c as Qt,
	d as Zt,
	g as Jt,
	S as Wt
} from '../chunks/CaYsd_ZG.js';
import { H as Xt } from '../chunks/v68N3jfw.js';
import { C as Yt } from '../chunks/Duhau3sb.js';
import { A as $t, a as xt, b as Pt } from '../chunks/CCzMut0I.js';
import { R as ea, T as ta, D as aa, G as ra, a as tt } from '../chunks/KMVKlTlO.js';
import { D as yt } from '../chunks/4vG4j1h8.js';
import '../chunks/69_IOA4Y.js';
import { s as Se } from '../chunks/jIU1MAPh.js';
import { I as Me } from '../chunks/DcIEMM9l.js';
import { B as sa } from '../chunks/BKrlgekf.js';
import { U as oa } from '../chunks/gWeWD_my.js';
function na(r, e) {
	const t = ke(e, ['children', '$$slots', '$$events', '$$legacy']);
	Me(
		r,
		W({ name: 'book-open' }, () => t, {
			iconNode: [
				['path', { d: 'M12 7v14' }],
				[
					'path',
					{
						d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'
					}
				]
			],
			children: (s, i) => {
				var n = u(),
					d = l(n);
				Se(d, e, 'default', {}, null), a(s, n);
			},
			$$slots: { default: !0 }
		})
	);
}
function la(r, e) {
	const t = ke(e, ['children', '$$slots', '$$events', '$$legacy']);
	Me(
		r,
		W({ name: 'badge-check' }, () => t, {
			iconNode: [
				[
					'path',
					{
						d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'
					}
				],
				['path', { d: 'm9 12 2 2 4-4' }]
			],
			children: (s, i) => {
				var n = u(),
					d = l(n);
				Se(d, e, 'default', {}, null), a(s, n);
			},
			$$slots: { default: !0 }
		})
	);
}
function ia(r, e) {
	const t = ke(e, ['children', '$$slots', '$$events', '$$legacy']);
	Me(
		r,
		W({ name: 'book-user' }, () => t, {
			iconNode: [
				['path', { d: 'M15 13a3 3 0 1 0-6 0' }],
				[
					'path',
					{
						d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20'
					}
				],
				['circle', { cx: '12', cy: '8', r: '2' }]
			],
			children: (s, i) => {
				var n = u(),
					d = l(n);
				Se(d, e, 'default', {}, null), a(s, n);
			},
			$$slots: { default: !0 }
		})
	);
}
function da(r, e) {
	const t = ke(e, ['children', '$$slots', '$$events', '$$legacy']);
	Me(
		r,
		W({ name: 'chevrons-up-down' }, () => t, {
			iconNode: [
				['path', { d: 'm7 15 5 5 5-5' }],
				['path', { d: 'm7 9 5-5 5 5' }]
			],
			children: (s, i) => {
				var n = u(),
					d = l(n);
				Se(d, e, 'default', {}, null), a(s, n);
			},
			$$slots: { default: !0 }
		})
	);
}
function ca(r, e) {
	const t = ke(e, ['children', '$$slots', '$$events', '$$legacy']);
	Me(
		r,
		W({ name: 'contact' }, () => t, {
			iconNode: [
				['path', { d: 'M16 2v2' }],
				['path', { d: 'M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2' }],
				['path', { d: 'M8 2v2' }],
				['circle', { cx: '12', cy: '11', r: '3' }],
				['rect', { x: '3', y: '4', width: '18', height: '18', rx: '2' }]
			],
			children: (s, i) => {
				var n = u(),
					d = l(n);
				Se(d, e, 'default', {}, null), a(s, n);
			},
			$$slots: { default: !0 }
		})
	);
}
function ua(r, e) {
	const t = ke(e, ['children', '$$slots', '$$events', '$$legacy']);
	Me(
		r,
		W({ name: 'log-out' }, () => t, {
			iconNode: [
				['path', { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' }],
				['polyline', { points: '16 17 21 12 16 7' }],
				['line', { x1: '21', x2: '9', y1: '12', y2: '12' }]
			],
			children: (s, i) => {
				var n = u(),
					d = l(n);
				Se(d, e, 'default', {}, null), a(s, n);
			},
			$$slots: { default: !0 }
		})
	);
}
function va(r, e) {
	const t = ke(e, ['children', '$$slots', '$$events', '$$legacy']);
	Me(
		r,
		W({ name: 'notebook-pen' }, () => t, {
			iconNode: [
				['path', { d: 'M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4' }],
				['path', { d: 'M2 6h4' }],
				['path', { d: 'M2 10h4' }],
				['path', { d: 'M2 14h4' }],
				['path', { d: 'M2 18h4' }],
				[
					'path',
					{
						d: 'M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z'
					}
				]
			],
			children: (s, i) => {
				var n = u(),
					d = l(n);
				Se(d, e, 'default', {}, null), a(s, n);
			},
			$$slots: { default: !0 }
		})
	);
}
const fa = 'data-collapsible-root',
	ha = 'data-collapsible-content',
	pa = 'data-collapsible-trigger';
var je, Ke;
class _a {
	constructor(e) {
		ze(this, 'opts');
		F(this, je, qe(null));
		F(
			this,
			Ke,
			I(() => ({
				id: this.opts.id.current,
				'data-state': it(this.opts.open.current),
				'data-disabled': lt(this.opts.disabled.current),
				[fa]: ''
			}))
		);
		(this.opts = e), (this.toggleOpen = this.toggleOpen.bind(this)), st(e);
	}
	get contentNode() {
		return v(C(this, je));
	}
	set contentNode(e) {
		Ue(C(this, je), Fe(e));
	}
	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}
	get props() {
		return v(C(this, Ke));
	}
}
(je = new WeakMap()), (Ke = new WeakMap());
var De, Re, Oe, Be, Ve, Qe, Ze;
class ma {
	constructor(e, t) {
		ze(this, 'opts');
		ze(this, 'root');
		F(this, De);
		F(this, Re, qe(!1));
		F(this, Oe, qe(0));
		F(this, Be, qe(0));
		F(
			this,
			Ve,
			I(() => this.opts.forceMount.current || this.root.opts.open.current)
		);
		F(
			this,
			Qe,
			I(() => ({ open: this.root.opts.open.current }))
		);
		F(
			this,
			Ze,
			I(() => ({
				id: this.opts.id.current,
				style: {
					'--bits-collapsible-content-height': v(C(this, Be)) ? `${v(C(this, Be))}px` : void 0,
					'--bits-collapsible-content-width': v(C(this, Oe)) ? `${v(C(this, Oe))}px` : void 0
				},
				'data-state': it(this.root.opts.open.current),
				'data-disabled': lt(this.root.opts.disabled.current),
				[ha]: ''
			}))
		);
		(this.opts = e),
			(this.root = t),
			(C(this, Re).v = Fe(t.opts.open.current)),
			st({
				...e,
				deps: () => this.present,
				onRefChange: (o) => {
					this.root.contentNode = o;
				}
			}),
			Bt(() => {
				const o = requestAnimationFrame(() => {
					Ue(C(this, Re), !1);
				});
				return () => {
					cancelAnimationFrame(o);
				};
			}),
			Et([() => this.opts.ref.current, () => this.present], ([o]) => {
				o &&
					Ut(() => {
						if (!this.opts.ref.current) return;
						bt(
							this,
							De,
							C(this, De) || {
								transitionDuration: o.style.transitionDuration,
								animationName: o.style.animationName
							}
						),
							(o.style.transitionDuration = '0s'),
							(o.style.animationName = 'none');
						const s = o.getBoundingClientRect();
						if ((Ue(C(this, Be), Fe(s.height)), Ue(C(this, Oe), Fe(s.width)), !v(C(this, Re)))) {
							const { animationName: i, transitionDuration: n } = C(this, De);
							(o.style.transitionDuration = n), (o.style.animationName = i);
						}
					});
			});
	}
	get present() {
		return v(C(this, Ve));
	}
	get snippetProps() {
		return v(C(this, Qe));
	}
	get props() {
		return v(C(this, Ze));
	}
}
(De = new WeakMap()),
	(Re = new WeakMap()),
	(Oe = new WeakMap()),
	(Be = new WeakMap()),
	(Ve = new WeakMap()),
	(Qe = new WeakMap()),
	(Ze = new WeakMap());
var we, Je;
class ga {
	constructor(e, t) {
		ze(this, 'opts');
		ze(this, 'root');
		F(
			this,
			we,
			I(() => this.opts.disabled.current || this.root.opts.disabled.current)
		);
		F(
			this,
			Je,
			I(() => {
				var e;
				return {
					id: this.opts.id.current,
					type: 'button',
					disabled: v(C(this, we)),
					'aria-controls': (e = this.root.contentNode) == null ? void 0 : e.id,
					'aria-expanded': qt(this.root.opts.open.current),
					'data-state': it(this.root.opts.open.current),
					'data-disabled': lt(v(C(this, we))),
					[pa]: '',
					onclick: this.onclick,
					onkeydown: this.onkeydown
				};
			})
		);
		(this.opts = e),
			(this.root = t),
			(this.onclick = this.onclick.bind(this)),
			(this.onkeydown = this.onkeydown.bind(this)),
			st(e);
	}
	onclick(e) {
		if (!v(C(this, we))) {
			if (e.button !== 0) return e.preventDefault();
			this.root.toggleOpen();
		}
	}
	onkeydown(e) {
		v(C(this, we)) ||
			((e.key === jt || e.key === Gt) && (e.preventDefault(), this.root.toggleOpen()));
	}
	get props() {
		return v(C(this, Je));
	}
}
(we = new WeakMap()), (Je = new WeakMap());
const vt = new Ht('Collapsible.Root');
function ba(r) {
	return vt.set(new _a(r));
}
function $a(r) {
	return new ga(r, vt.get());
}
function xa(r) {
	return new ma(r, vt.get());
}
var Pa = $('<div><!></div>');
function ya(r, e) {
	K(e, !0);
	let t = S(e, 'id', 19, ot),
		o = S(e, 'ref', 15, null),
		s = S(e, 'open', 15, !1),
		i = S(e, 'disabled', 3, !1),
		n = S(e, 'onOpenChange', 3, Ft),
		d = X(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'children',
			'child',
			'id',
			'ref',
			'open',
			'disabled',
			'onOpenChange'
		]);
	const w = ba({
			open: ne.with(
				() => s(),
				(m) => {
					s(m), n()(m);
				}
			),
			disabled: ne.with(() => i()),
			id: ne.with(() => t()),
			ref: ne.with(
				() => o(),
				(m) => o(m)
			)
		}),
		f = I(() => nt(d, w.props));
	var g = u(),
		_ = l(g);
	{
		var h = (m) => {
				var x = u(),
					p = l(x);
				R(
					p,
					() => e.child,
					() => ({ props: v(f) })
				),
					a(m, x);
			},
			b = (m) => {
				var x = Pa();
				let p;
				var P = k(x);
				R(P, () => e.children ?? le), N(x), D(() => (p = Q(x, p, { ...v(f) }))), a(m, x);
			};
		Ce(_, (m) => {
			e.child ? m(h) : m(b, !1);
		});
	}
	a(r, g), V();
}
var wa = $('<div><!></div>');
function Ca(r, e) {
	K(e, !0);
	let t = S(e, 'ref', 15, null),
		o = S(e, 'forceMount', 3, !1),
		s = S(e, 'id', 19, ot),
		i = X(e, ['$$slots', '$$events', '$$legacy', 'child', 'ref', 'forceMount', 'children', 'id']);
	const n = xa({
		id: ne.with(() => s()),
		forceMount: ne.with(() => o()),
		ref: ne.with(
			() => t(),
			(d) => t(d)
		)
	});
	It(r, {
		forceMount: !0,
		get present() {
			return n.present;
		},
		get id() {
			return s();
		},
		presence: (w, f) => {
			let g = () => (f == null ? void 0 : f().present);
			var _ = u();
			const h = I(() => nt(i, n.props, { hidden: o() ? void 0 : !g().current }));
			var b = l(_);
			{
				var m = (p) => {
						var P = u(),
							M = l(P),
							A = Lt(() => ({ ...n.snippetProps, props: v(h) }));
						R(
							M,
							() => e.child,
							() => v(A)
						),
							a(p, P);
					},
					x = (p) => {
						var P = wa();
						let M;
						var A = k(P);
						R(A, () => e.children ?? le), N(P), D(() => (M = Q(P, M, { ...v(h) }))), a(p, P);
					};
				Ce(b, (p) => {
					e.child ? p(m) : p(x, !1);
				});
			}
			a(w, _);
		},
		$$slots: { presence: !0 }
	}),
		V();
}
var ka = $('<button><!></button>');
function Na(r, e) {
	K(e, !0);
	let t = S(e, 'ref', 15, null),
		o = S(e, 'id', 19, ot),
		s = S(e, 'disabled', 3, !1),
		i = X(e, ['$$slots', '$$events', '$$legacy', 'children', 'child', 'ref', 'id', 'disabled']);
	const n = $a({
			id: ne.with(() => o()),
			ref: ne.with(
				() => t(),
				(h) => t(h)
			),
			disabled: ne.with(() => s())
		}),
		d = I(() => nt(i, n.props));
	var w = u(),
		f = l(w);
	{
		var g = (h) => {
				var b = u(),
					m = l(b);
				R(
					m,
					() => e.child,
					() => ({ props: v(d) })
				),
					a(h, b);
			},
			_ = (h) => {
				var b = ka();
				let m;
				var x = k(b);
				R(x, () => e.children ?? le), N(b), D(() => (m = Q(b, m, { ...v(d) }))), a(h, b);
			};
		Ce(f, (h) => {
			e.child ? h(g) : h(_, !1);
		});
	}
	a(r, w), V();
}
const Sa = ya,
	Ma = Na,
	Aa = Ca;
var Ta = $('<div><!></div>');
function kt(r, e) {
	K(e, !0);
	let t = S(e, 'ref', 15, null),
		o = X(e, ['$$slots', '$$events', '$$legacy', 'ref', 'children', 'child', 'class']);
	const s = I(() => ({
		class: Le(
			'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
			'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
			e.class
		),
		'data-sidebar': 'group-label',
		...o
	}));
	var i = u(),
		n = l(i);
	{
		var d = (f) => {
				var g = u(),
					_ = l(g);
				R(
					_,
					() => e.child,
					() => ({ props: v(s) })
				),
					a(f, g);
			},
			w = (f) => {
				var g = Ta();
				let _;
				var h = k(g);
				R(h, () => e.children ?? le),
					N(g),
					Ne(
						g,
						(b) => t(b),
						() => t()
					),
					D(() => (_ = Q(g, _, { ...v(s) }))),
					a(f, g);
			};
		Ce(n, (f) => {
			e.child ? f(d) : f(w, !1);
		});
	}
	a(r, i), V();
}
var za = $('<div><!></div>');
function Nt(r, e) {
	K(e, !0);
	let t = S(e, 'ref', 15, null),
		o = X(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var s = za();
	let i;
	var n = k(s);
	R(n, () => e.children ?? le),
		N(s),
		Ne(
			s,
			(d) => t(d),
			() => t()
		),
		D(
			(d) => (i = Q(s, i, { 'data-sidebar': 'group', class: d, ...o })),
			[() => Le('relative flex w-full min-w-0 flex-col p-2', e.class)]
		),
		a(r, s),
		V();
}
var Da = $('<a><!></a>');
function Ra(r, e) {
	K(e, !0);
	let t = S(e, 'ref', 15, null),
		o = S(e, 'size', 3, 'md'),
		s = X(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'ref',
			'children',
			'child',
			'class',
			'size',
			'isActive'
		]);
	const i = I(() => ({
		class: Le(
			'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
			'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
			o() === 'sm' && 'text-xs',
			o() === 'md' && 'text-sm',
			'group-data-[collapsible=icon]:hidden',
			e.class
		),
		'data-sidebar': 'menu-sub-button',
		'data-size': o(),
		'data-active': e.isActive,
		...s
	}));
	var n = u(),
		d = l(n);
	{
		var w = (g) => {
				var _ = u(),
					h = l(_);
				R(
					h,
					() => e.child,
					() => ({ props: v(i) })
				),
					a(g, _);
			},
			f = (g) => {
				var _ = Da();
				let h;
				var b = k(_);
				R(b, () => e.children ?? le),
					N(_),
					Ne(
						_,
						(m) => t(m),
						() => t()
					),
					D(() => (h = Q(_, h, { ...v(i) }))),
					a(g, _);
			};
		Ce(d, (g) => {
			e.child ? g(w) : g(f, !1);
		});
	}
	a(r, n), V();
}
var Oa = $('<li><!></li>');
function Ba(r, e) {
	let t = S(e, 'ref', 15, null),
		o = X(e, ['$$slots', '$$events', '$$legacy', 'ref', 'children']);
	var s = Oa();
	let i;
	var n = k(s);
	R(n, () => e.children ?? le),
		N(s),
		Ne(
			s,
			(d) => t(d),
			() => t()
		),
		D(() => (i = Q(s, i, { 'data-sidebar': 'menu-sub-item', ...o }))),
		a(r, s);
}
var La = $('<ul><!></ul>');
function Ea(r, e) {
	K(e, !0);
	let t = S(e, 'ref', 15, null),
		o = X(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var s = La();
	let i;
	var n = k(s);
	R(n, () => e.children ?? le),
		N(s),
		Ne(
			s,
			(d) => t(d),
			() => t()
		),
		D(
			(d) => (i = Q(s, i, { 'data-sidebar': 'menu-sub', class: d, ...o })),
			[
				() =>
					Le(
						'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
						'group-data-[collapsible=icon]:hidden',
						e.class
					)
			]
		),
		a(r, s),
		V();
}
var Ha = $('<button><!></button>');
function ja(r, e) {
	K(e, !0);
	let t = S(e, 'ref', 15, null),
		o = X(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	const s = dt();
	var i = Ha(),
		n = () => s.toggle();
	let d;
	var w = k(i);
	R(w, () => e.children ?? le),
		N(i),
		Ne(
			i,
			(f) => t(f),
			() => t()
		),
		D(
			(f) =>
				(d = Q(i, d, {
					'data-sidebar': 'rail',
					'aria-label': 'Toggle Sidebar',
					tabIndex: -1,
					onclick: n,
					title: 'Toggle Sidebar',
					class: f,
					...o
				})),
			[
				() =>
					Le(
						'hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
						'[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
						'[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
						'group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full',
						'[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
						'[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
						e.class
					)
			]
		),
		a(r, i),
		V();
}
var Ga = $('<a href="/dashboard" class="flex items-center"><!> Dashboard</a>'),
	qa = $('<!> <span> </span> <!>', 1),
	Ua = $('<a><span> </span></a>'),
	Fa = $('<!> <!>', 1),
	Ia = $('<!> <!> <!>', 1);
function Ka(r, e) {
	var t = u(),
		o = l(t);
	c(
		o,
		() => Nt,
		(s, i) => {
			i(s, {
				children: (n, d) => {
					var w = Ia(),
						f = l(w);
					c(
						f,
						() => kt,
						(h, b) => {
							b(h, {
								children: (m, x) => {
									oe();
									var p = He('Menu Utama');
									a(m, p);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var g = y(f, 2);
					c(
						g,
						() => Ie,
						(h, b) => {
							b(h, {
								children: (m, x) => {
									var p = Ga(),
										P = k(p);
									Xt(P, { class: 'mr-2 h-4 w-4' }), oe(), N(p), a(m, p);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var _ = y(g, 2);
					c(
						_,
						() => ct,
						(h, b) => {
							b(h, {
								children: (m, x) => {
									var p = u(),
										P = l(p);
									rt(
										P,
										17,
										() => e.items,
										(M) => M.title,
										(M, A) => {
											var Y = u(),
												ie = l(Y);
											c(
												ie,
												() => Sa,
												(pe, Ee) => {
													Ee(pe, {
														get open() {
															return v(A).isActive;
														},
														class: 'group/collapsible',
														child: (_e, de) => {
															let Ae = () => (de == null ? void 0 : de().props);
															var Pe = u(),
																ce = l(Pe);
															c(
																ce,
																() => ut,
																(me, Z) => {
																	Z(
																		me,
																		W(Ae, {
																			children: (ge, ee) => {
																				var ue = Fa(),
																					z = l(ue);
																				c(
																					z,
																					() => Ma,
																					(L, J) => {
																						J(L, {
																							child: (E, G) => {
																								let H = () => (G == null ? void 0 : G().props);
																								var U = u(),
																									j = l(U);
																								c(
																									j,
																									() => Ie,
																									(te, q) => {
																										q(
																											te,
																											W(H, {
																												tooltipContent: (be) => {
																													oe();
																													var ve = He();
																													D(() => xe(ve, v(A).title)), a(be, ve);
																												},
																												children: (be, ve) => {
																													var fe = qa(),
																														re = l(fe);
																													{
																														var he = ($e) => {
																															var Te = u(),
																																Xe = l(Te);
																															c(
																																Xe,
																																() => v(A).icon,
																																(Ye, ft) => {
																																	ft(Ye, {});
																																}
																															),
																																a($e, Te);
																														};
																														Ce(re, ($e) => {
																															v(A).icon && $e(he);
																														});
																													}
																													var B = y(re, 2),
																														se = k(B, !0);
																													N(B);
																													var ye = y(B, 2);
																													Yt(ye, {
																														class:
																															'ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90'
																													}),
																														D(() => xe(se, v(A).title)),
																														a(be, fe);
																												},
																												$$slots: { tooltipContent: !0, default: !0 }
																											})
																										);
																									}
																								),
																									a(E, U);
																							},
																							$$slots: { child: !0 }
																						});
																					}
																				);
																				var O = y(z, 2);
																				c(
																					O,
																					() => Aa,
																					(L, J) => {
																						J(L, {
																							children: (T, E) => {
																								var G = u(),
																									H = l(G);
																								{
																									var U = (j) => {
																										var te = u(),
																											q = l(te);
																										c(
																											q,
																											() => Ea,
																											(ae, be) => {
																												be(ae, {
																													children: (ve, fe) => {
																														var re = u(),
																															he = l(re);
																														rt(
																															he,
																															17,
																															() => v(A).items,
																															(B) => B.title,
																															(B, se) => {
																																var ye = u(),
																																	$e = l(ye);
																																c(
																																	$e,
																																	() => Ba,
																																	(Te, Xe) => {
																																		Xe(Te, {
																																			children: (Ye, ft) => {
																																				var ht = u(),
																																					St = l(ht);
																																				c(
																																					St,
																																					() => Ra,
																																					(Mt, At) => {
																																						At(Mt, {
																																							child: (Tt, et) => {
																																								let zt = () =>
																																									et == null
																																										? void 0
																																										: et().props;
																																								var Ge = Ua();
																																								let pt;
																																								var _t = k(Ge),
																																									Dt = k(_t, !0);
																																								N(_t),
																																									N(Ge),
																																									D(() => {
																																										(pt = Q(
																																											Ge,
																																											pt,
																																											{
																																												href: v(se)
																																													.url,
																																												...zt()
																																											}
																																										)),
																																											xe(
																																												Dt,
																																												v(se).title
																																											);
																																									}),
																																									a(Tt, Ge);
																																							},
																																							$$slots: { child: !0 }
																																						});
																																					}
																																				),
																																					a(Ye, ht);
																																			},
																																			$$slots: { default: !0 }
																																		});
																																	}
																																),
																																	a(B, ye);
																															}
																														),
																															a(ve, re);
																													},
																													$$slots: { default: !0 }
																												});
																											}
																										),
																											a(j, te);
																									};
																									Ce(H, (j) => {
																										v(A).items && j(U);
																									});
																								}
																								a(T, G);
																							},
																							$$slots: { default: !0 }
																						});
																					}
																				),
																					a(ge, ue);
																			},
																			$$slots: { default: !0 }
																		})
																	);
																}
															),
																a(_e, Pe);
														},
														$$slots: { child: !0 }
													});
												}
											),
												a(M, Y);
										}
									),
										a(m, p);
								},
								$$slots: { default: !0 }
							});
						}
					),
						a(n, w);
				},
				$$slots: { default: !0 }
			});
		}
	),
		a(r, t);
}
var Va = $('<div><!></div>');
function Qa(r, e) {
	K(e, !0);
	let t = S(e, 'ref', 15, null),
		o = X(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'inset', 'children']);
	var s = Va();
	let i;
	var n = k(s);
	R(n, () => e.children ?? le),
		N(s),
		Ne(
			s,
			(d) => t(d),
			() => t()
		),
		D(
			(d) => (i = Q(s, i, { class: d, ...o })),
			[() => Le('px-2 py-1.5 text-sm font-semibold', e.inset && 'pl-8', e.class)]
		),
		a(r, s),
		V();
}
var Za = $('<a><!> <span> </span></a>'),
	Ja = $('<!> <!>', 1);
function Wa(r, e) {
	K(e, !0), dt();
	var t = u(),
		o = l(t);
	c(
		o,
		() => Nt,
		(s, i) => {
			i(s, {
				class: 'group-data-[collapsible=icon]:hidden',
				children: (n, d) => {
					var w = Ja(),
						f = l(w);
					c(
						f,
						() => kt,
						(_, h) => {
							h(_, {
								children: (b, m) => {
									oe();
									var x = He('Menu Tambahan');
									a(b, x);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var g = y(f, 2);
					c(
						g,
						() => ct,
						(_, h) => {
							h(_, {
								children: (b, m) => {
									var x = u(),
										p = l(x);
									rt(
										p,
										17,
										() => e.projects,
										(P) => P.name,
										(P, M) => {
											var A = u(),
												Y = l(A);
											c(
												Y,
												() => ut,
												(ie, pe) => {
													pe(ie, {
														children: (Ee, We) => {
															var _e = u(),
																de = l(_e);
															c(
																de,
																() => Ie,
																(Ae, Pe) => {
																	Pe(Ae, {
																		child: (me, Z) => {
																			let ge = () => (Z == null ? void 0 : Z().props);
																			var ee = Za();
																			let ue;
																			var z = k(ee);
																			c(
																				z,
																				() => v(M).icon,
																				(J, T) => {
																					T(J, {});
																				}
																			);
																			var O = y(z, 2),
																				L = k(O, !0);
																			N(O),
																				N(ee),
																				D(() => {
																					(ue = Q(ee, ue, { href: v(M).url, ...ge() })),
																						xe(L, v(M).name);
																				}),
																				a(me, ee);
																		},
																		$$slots: { child: !0 }
																	});
																}
															),
																a(Ee, _e);
														},
														$$slots: { default: !0 }
													});
												}
											),
												a(P, A);
										}
									),
										a(b, x);
								},
								$$slots: { default: !0 }
							});
						}
					),
						a(n, w);
				},
				$$slots: { default: !0 }
			});
		}
	),
		a(r, t),
		V();
}
var Xa = $('<!> <!>', 1),
	Ya = $(
		'<!> <div class="grid flex-1 text-left text-sm leading-tight"><span class="truncate font-semibold"> </span> <span class="truncate text-xs"> </span></div> <!>',
		1
	),
	er = $('<!> <!>', 1),
	tr = $(
		'<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"><!> <div class="grid flex-1 text-left text-sm leading-tight"><span class="truncate font-semibold"> </span> <span class="truncate text-xs"> </span></div></div>'
	),
	ar = $('<!> Account', 1),
	rr = $('<!> Notifications', 1),
	sr = $('<!> <!>', 1),
	or = $('<!> Log out', 1),
	nr = $('<!> <!> <!> <!> <!>', 1),
	lr = $('<!> <!>', 1);
function ir(r, e) {
	K(e, !0);
	const t = dt();
	var o = u(),
		s = l(o);
	c(
		s,
		() => ct,
		(i, n) => {
			n(i, {
				children: (d, w) => {
					var f = u(),
						g = l(f);
					c(
						g,
						() => ut,
						(_, h) => {
							h(_, {
								children: (b, m) => {
									var x = u(),
										p = l(x);
									c(
										p,
										() => ea,
										(P, M) => {
											M(P, {
												children: (A, Y) => {
													var ie = lr(),
														pe = l(ie);
													c(
														pe,
														() => ta,
														(_e, de) => {
															de(_e, {
																child: (Pe, ce) => {
																	let me = () => (ce == null ? void 0 : ce().props);
																	var Z = u(),
																		ge = l(Z);
																	c(
																		ge,
																		() => Ie,
																		(ee, ue) => {
																			ue(
																				ee,
																				W(
																					{
																						size: 'lg',
																						class:
																							'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
																					},
																					me,
																					{
																						children: (z, O) => {
																							var L = Ya(),
																								J = l(L);
																							c(
																								J,
																								() => $t,
																								(te, q) => {
																									q(te, {
																										class: 'h-8 w-8 rounded-lg',
																										children: (ae, be) => {
																											var ve = Xa(),
																												fe = l(ve);
																											c(
																												fe,
																												() => xt,
																												(he, B) => {
																													B(he, {
																														get src() {
																															return e.user.avatar;
																														},
																														get alt() {
																															return e.user.name;
																														}
																													});
																												}
																											);
																											var re = y(fe, 2);
																											c(
																												re,
																												() => Pt,
																												(he, B) => {
																													B(he, {
																														class: 'rounded-lg',
																														children: (se, ye) => {
																															oe();
																															var $e = He('CN');
																															a(se, $e);
																														},
																														$$slots: { default: !0 }
																													});
																												}
																											),
																												a(ae, ve);
																										},
																										$$slots: { default: !0 }
																									});
																								}
																							);
																							var T = y(J, 2),
																								E = k(T),
																								G = k(E, !0);
																							N(E);
																							var H = y(E, 2),
																								U = k(H, !0);
																							N(H), N(T);
																							var j = y(T, 2);
																							da(j, { class: 'ml-auto size-4' }),
																								D(() => {
																									xe(G, e.user.name), xe(U, e.user.email);
																								}),
																								a(z, L);
																						},
																						$$slots: { default: !0 }
																					}
																				)
																			);
																		}
																	),
																		a(Pe, Z);
																},
																$$slots: { child: !0 }
															});
														}
													);
													var Ee = y(pe, 2);
													const We = I(() => (t.isMobile ? 'bottom' : 'right'));
													c(
														Ee,
														() => aa,
														(_e, de) => {
															de(_e, {
																class: 'w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-lg',
																get side() {
																	return v(We);
																},
																align: 'end',
																sideOffset: 4,
																children: (Ae, Pe) => {
																	var ce = nr(),
																		me = l(ce);
																	c(
																		me,
																		() => Qa,
																		(z, O) => {
																			O(z, {
																				class: 'p-0 font-normal',
																				children: (L, J) => {
																					var T = tr(),
																						E = k(T);
																					c(
																						E,
																						() => $t,
																						(q, ae) => {
																							ae(q, {
																								class: 'h-8 w-8 rounded-lg',
																								children: (be, ve) => {
																									var fe = er(),
																										re = l(fe);
																									c(
																										re,
																										() => xt,
																										(B, se) => {
																											se(B, {
																												get src() {
																													return e.user.avatar;
																												},
																												get alt() {
																													return e.user.name;
																												}
																											});
																										}
																									);
																									var he = y(re, 2);
																									c(
																										he,
																										() => Pt,
																										(B, se) => {
																											se(B, {
																												class: 'rounded-lg',
																												children: (ye, $e) => {
																													oe();
																													var Te = He('CN');
																													a(ye, Te);
																												},
																												$$slots: { default: !0 }
																											});
																										}
																									),
																										a(be, fe);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var G = y(E, 2),
																						H = k(G),
																						U = k(H, !0);
																					N(H);
																					var j = y(H, 2),
																						te = k(j, !0);
																					N(j),
																						N(G),
																						N(T),
																						D(() => {
																							xe(U, e.user.name), xe(te, e.user.email);
																						}),
																						a(L, T);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	);
																	var Z = y(me, 2);
																	c(
																		Z,
																		() => yt,
																		(z, O) => {
																			O(z, {});
																		}
																	);
																	var ge = y(Z, 2);
																	c(
																		ge,
																		() => ra,
																		(z, O) => {
																			O(z, {
																				children: (L, J) => {
																					var T = sr(),
																						E = l(T);
																					c(
																						E,
																						() => tt,
																						(H, U) => {
																							U(H, {
																								children: (j, te) => {
																									var q = ar(),
																										ae = l(q);
																									la(ae, {}), oe(), a(j, q);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var G = y(E, 2);
																					c(
																						G,
																						() => tt,
																						(H, U) => {
																							U(H, {
																								children: (j, te) => {
																									var q = rr(),
																										ae = l(q);
																									sa(ae, {}), oe(), a(j, q);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					),
																						a(L, T);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	);
																	var ee = y(ge, 2);
																	c(
																		ee,
																		() => yt,
																		(z, O) => {
																			O(z, {});
																		}
																	);
																	var ue = y(ee, 2);
																	c(
																		ue,
																		() => tt,
																		(z, O) => {
																			O(z, {
																				onclick: () => {
																					Ct.authStore.clear(), wt('/login');
																				},
																				children: (L, J) => {
																					var T = or(),
																						E = l(T);
																					ua(E, {}), oe(), a(L, T);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		a(Ae, ce);
																},
																$$slots: { default: !0 }
															});
														}
													),
														a(A, ie);
												},
												$$slots: { default: !0 }
											});
										}
									),
										a(b, x);
								},
								$$slots: { default: !0 }
							});
						}
					),
						a(d, f);
				},
				$$slots: { default: !0 }
			});
		}
	),
		a(r, o),
		V();
}
const at = {
	user: { name: 'mtsn2kolut', email: 'mtsn.pakue@gmail.com', avatar: '/favicon.png' },
	navMain: [
		{
			title: 'Kesiswaan',
			url: '#',
			icon: ia,
			isActive: !1,
			items: [
				{ title: 'Daftar Siswa', url: '/dashboard/student' },
				{ title: 'Mutasi', url: '#' },
				{ title: 'Akademik', url: '#' },
				{ title: 'Daftar PIP', url: '#' }
			]
		},
		{
			title: 'Guru dan Tendik',
			url: '#',
			icon: ca,
			items: [
				{ title: 'Daftar GTK', url: '#' },
				{ title: 'Mutasi', url: '#' },
				{ title: 'Pengajuan GTK', url: '#' }
			]
		},
		{
			title: 'Akademik',
			url: '#',
			icon: na,
			items: [
				{ title: 'Rombongan Belajar', url: '#' },
				{ title: 'Rapor Online', url: '#' }
			]
		}
	],
	projects: [
		{ name: 'Absensi', url: '/dashboard/attendances', icon: va },
		{ name: 'Data User', url: '/dashboard/user', icon: oa }
	]
};
var dr = $(
		'<img src="/favicon.png" alt="logo" class="h-20 w-20 m-2 self-center "> <marquee class="text-sm self-center">Made by Hasbi Awal</marquee>',
		1
	),
	cr = $('<!> <!>', 1),
	ur = $('<!> <!> <!> <!>', 1);
function vr(r, e) {
	let t = S(e, 'ref', 15, null),
		o = S(e, 'collapsible', 3, 'icon'),
		s = X(e, ['$$slots', '$$events', '$$legacy', 'ref', 'collapsible']);
	var i = u(),
		n = l(i);
	c(
		n,
		() => Kt,
		(d, w) => {
			w(
				d,
				W(
					{
						get collapsible() {
							return o();
						}
					},
					() => s,
					{
						get ref() {
							return t();
						},
						set ref(f) {
							t(f);
						},
						children: (f, g) => {
							var _ = ur(),
								h = l(_);
							c(
								h,
								() => Vt,
								(p, P) => {
									P(p, {
										children: (M, A) => {
											var Y = dr();
											oe(2), a(M, Y);
										},
										$$slots: { default: !0 }
									});
								}
							);
							var b = y(h, 2);
							c(
								b,
								() => Qt,
								(p, P) => {
									P(p, {
										children: (M, A) => {
											var Y = cr(),
												ie = l(Y);
											Ka(ie, {
												get items() {
													return at.navMain;
												}
											});
											var pe = y(ie, 2);
											Wa(pe, {
												get projects() {
													return at.projects;
												}
											}),
												a(M, Y);
										},
										$$slots: { default: !0 }
									});
								}
							);
							var m = y(b, 2);
							c(
								m,
								() => Zt,
								(p, P) => {
									P(p, {
										children: (M, A) => {
											ir(M, {
												get user() {
													return at.user;
												}
											});
										},
										$$slots: { default: !0 }
									});
								}
							);
							var x = y(m, 2);
							c(
								x,
								() => ja,
								(p, P) => {
									P(p, {});
								}
							),
								a(f, _);
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		a(r, i);
}
var fr = $('<!> <!>', 1);
function Ur(r, e) {
	K(e, !0), Ct.authStore.isValid || wt('/login');
	var t = u(),
		o = l(t);
	c(
		o,
		() => Wt,
		(s, i) => {
			i(s, {
				children: (n, d) => {
					var w = fr(),
						f = l(w);
					vr(f, {});
					var g = y(f, 2);
					c(
						g,
						() => Jt,
						(_, h) => {
							h(_, {
								children: (b, m) => {
									var x = u(),
										p = l(x);
									R(p, () => e.children), a(b, x);
								},
								$$slots: { default: !0 }
							});
						}
					),
						a(n, w);
				},
				$$slots: { default: !0 }
			});
		}
	),
		a(r, t),
		V();
}
export { Ur as component };
