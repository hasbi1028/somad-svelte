var Oe = Object.defineProperty;
var ge = (t) => {
	throw TypeError(t);
};
var Me = (t, e, r) =>
	e in t ? Oe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r);
var F = (t, e, r) => Me(t, typeof e != 'symbol' ? e + '' : e, r),
	_e = (t, e, r) => e.has(t) || ge('Cannot ' + r);
var j = (t, e, r) => (_e(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
	O = (t, e, r) =>
		e.has(t)
			? ge('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(t)
				: e.set(t, r);
var ie = (t, e, r) => (_e(t, e, 'access private method'), r);
import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import {
	U as Ee,
	ae as je,
	a8 as Be,
	w as z,
	v as S,
	p as he,
	f as $,
	a as fe,
	t as qe,
	s as i,
	d as Ge,
	c as g,
	x as Ve,
	r as _,
	n as v
} from '../chunks/DQMf8gWK.js';
import { e as pe, a as o, t as x, b as M } from '../chunks/BGOrq1ZG.js';
import { i as me, p as R, r as ze, s as ce } from '../chunks/DjKtoK8y.js';
import { a as xe, B as Q } from '../chunks/DWr6XhLj.js';
import { C as be } from '../chunks/CTqa1KBK.js';
import { C as ke, a as ye, b as we, c as Ce } from '../chunks/tqNMKigX.js';
import { C as Pe } from '../chunks/C7FUM4tv.js';
import { c as Je } from '../chunks/D7_cnrTr.js';
import { s as $e } from '../chunks/D3E8oDJG.js';
import { r as Ue, s as Ae } from '../chunks/DvbRtjlS.js';
import {
	a as He,
	w as Se,
	s as Ke,
	c as Le,
	u as Xe,
	b as B,
	m as Fe
} from '../chunks/B7uXBihW.js';
import {
	C as Te,
	E as Qe,
	c as We,
	e as Ye,
	f as Ze,
	h as et,
	S as tt
} from '../chunks/B8S9RRQw.js';
import { i as rt } from '../chunks/fNOI7Wql.js';
import { V as st } from '../chunks/gNrIG8ns.js';
import { M as ot } from '../chunks/BJVriFMU.js';
import { C as at } from '../chunks/YG4ye7e7.js';
import { R as nt, T as it, D as dt, G as lt, a as de } from '../chunks/KMVKlTlO.js';
import { I as le } from '../chunks/CdbIut2i.js';
import { R as ct, T as ut } from '../chunks/B30UQf1T.js';
import { P as De } from '../chunks/Bd-3lPh9.js';
import { S as ht, D as ft } from '../chunks/PBI3cEsC.js';
import { M as pt, C as mt } from '../chunks/DA6IYlWS.js';
import { D as Re } from '../chunks/4vG4j1h8.js';
const vt = [];
function gt(t, e = !1) {
	return W(t, new Map(), '', vt);
}
function W(t, e, r, a, c = null) {
	if (typeof t == 'object' && t !== null) {
		var w = e.get(t);
		if (w !== void 0) return w;
		if (t instanceof Map) return new Map(t);
		if (t instanceof Set) return new Set(t);
		if (Ee(t)) {
			var d = Array(t.length);
			e.set(t, d), c !== null && e.set(c, d);
			for (var k = 0; k < t.length; k += 1) {
				var A = t[k];
				k in t && (d[k] = W(A, e, r, a));
			}
			return d;
		}
		if (je(t) === Be) {
			(d = {}), e.set(t, d), c !== null && e.set(c, d);
			for (var y in t) d[y] = W(t[y], e, r, a);
			return d;
		}
		if (t instanceof Date) return structuredClone(t);
		if (typeof t.toJSON == 'function') return W(t.toJSON(), e, r, a, t);
	}
	if (t instanceof EventTarget) return t;
	try {
		return structuredClone(t);
	} catch {
		return t;
	}
}
const _t = 'data-checkbox-root';
var Y, Z, ee, L, ue, te, re;
class xt {
	constructor(e, r = null) {
		O(this, L);
		F(this, 'opts');
		F(this, 'group');
		O(
			this,
			Y,
			z(() =>
				this.group && this.group.opts.name.current
					? this.group.opts.name.current
					: this.opts.name.current
			)
		);
		O(
			this,
			Z,
			z(() => (this.group && this.group.opts.required.current ? !0 : this.opts.required.current))
		);
		O(
			this,
			ee,
			z(() => (this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current))
		);
		O(
			this,
			te,
			z(() => ({
				checked: this.opts.checked.current,
				indeterminate: this.opts.indeterminate.current
			}))
		);
		O(
			this,
			re,
			z(() => ({
				id: this.opts.id.current,
				role: 'checkbox',
				type: this.opts.type.current,
				disabled: this.trueDisabled,
				'aria-checked': et(this.opts.checked.current, this.opts.indeterminate.current),
				'aria-required': Ze(this.trueRequired),
				'data-disabled': Ye(this.trueDisabled),
				'data-state': kt(this.opts.checked.current, this.opts.indeterminate.current),
				[_t]: '',
				onclick: this.onclick,
				onkeydown: this.onkeydown
			}))
		);
		(this.opts = e),
			(this.group = r),
			(this.onkeydown = this.onkeydown.bind(this)),
			(this.onclick = this.onclick.bind(this)),
			He(e),
			Se(
				[
					() => {
						var a;
						return gt((a = this.group) == null ? void 0 : a.opts.value.current);
					},
					() => this.opts.value.current
				],
				([a, c]) => {
					!a || !c || (this.opts.checked.current = a.includes(c));
				}
			),
			Se(
				() => this.opts.checked.current,
				(a) => {
					var c, w;
					this.group &&
						(a
							? (c = this.group) == null || c.addValue(this.opts.value.current)
							: (w = this.group) == null || w.removeValue(this.opts.value.current));
				}
			);
	}
	get trueName() {
		return S(j(this, Y));
	}
	get trueRequired() {
		return S(j(this, Z));
	}
	get trueDisabled() {
		return S(j(this, ee));
	}
	onkeydown(e) {
		this.opts.disabled.current ||
			(e.key === Qe && e.preventDefault(),
			e.key === We && (e.preventDefault(), ie(this, L, ue).call(this)));
	}
	onclick(e) {
		this.opts.disabled.current || ie(this, L, ue).call(this);
	}
	get snippetProps() {
		return S(j(this, te));
	}
	get props() {
		return S(j(this, re));
	}
}
(Y = new WeakMap()),
	(Z = new WeakMap()),
	(ee = new WeakMap()),
	(L = new WeakSet()),
	(ue = function () {
		this.opts.indeterminate.current
			? ((this.opts.indeterminate.current = !1), (this.opts.checked.current = !0))
			: (this.opts.checked.current = !this.opts.checked.current);
	}),
	(te = new WeakMap()),
	(re = new WeakMap());
var se, oe, ae;
class bt {
	constructor(e) {
		F(this, 'root');
		O(
			this,
			se,
			z(() =>
				this.root.group
					? !!(
							this.root.opts.value.current !== void 0 &&
							this.root.group.opts.value.current.includes(this.root.opts.value.current)
						)
					: this.root.opts.checked.current
			)
		);
		O(
			this,
			oe,
			z(() => !!this.root.trueName)
		);
		O(
			this,
			ae,
			z(() => ({
				type: 'checkbox',
				checked: this.root.opts.checked.current === !0,
				disabled: this.root.trueDisabled,
				required: this.root.trueRequired,
				name: this.root.trueName,
				value: this.root.opts.value.current,
				'aria-hidden': 'true',
				style: Ke(Le)
			}))
		);
		this.root = e;
	}
	get trueChecked() {
		return S(j(this, se));
	}
	get shouldRender() {
		return S(j(this, oe));
	}
	get props() {
		return S(j(this, ae));
	}
}
(se = new WeakMap()), (oe = new WeakMap()), (ae = new WeakMap());
function kt(t, e) {
	return e ? 'indeterminate' : t ? 'checked' : 'unchecked';
}
const yt = new Te('Checkbox.Group'),
	Ie = new Te('Checkbox.Root');
function wt(t) {
	return Ie.set(new xt(t, yt.getOr(null)));
}
function Ct() {
	return new bt(Ie.get());
}
var Pt = x('<input>');
function $t(t, e) {
	he(e, !1);
	const r = Ct();
	rt();
	var a = pe(),
		c = $(a);
	{
		var w = (d) => {
			st(d, {
				'aria-hidden': 'true',
				children: (k, A) => {
					var y = Pt();
					Ue(y);
					let T;
					qe(
						() =>
							(T = Ae(y, T, { ...r.props, type: 'checkbox', style: 'display: none !important;' }))
					),
						o(k, y);
				},
				$$slots: { default: !0 }
			});
		};
		me(c, (d) => {
			r.shouldRender && d(w);
		});
	}
	o(t, a), fe();
}
var St = x('<button><!></button>'),
	Dt = x('<!> <!>', 1);
function Rt(t, e) {
	he(e, !0);
	let r = R(e, 'checked', 15, !1),
		a = R(e, 'ref', 15, null),
		c = R(e, 'disabled', 3, !1),
		w = R(e, 'required', 3, !1),
		d = R(e, 'name', 3, void 0),
		k = R(e, 'value', 3, 'on'),
		A = R(e, 'id', 19, Xe),
		y = R(e, 'indeterminate', 15, !1),
		T = R(e, 'type', 3, 'button'),
		X = ze(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'checked',
			'ref',
			'onCheckedChange',
			'children',
			'disabled',
			'required',
			'name',
			'value',
			'id',
			'indeterminate',
			'onIndeterminateChange',
			'child',
			'type'
		]);
	const C = wt({
			checked: B.with(
				() => r(),
				(u) => {
					var s;
					r(u), (s = e.onCheckedChange) == null || s.call(e, u);
				}
			),
			disabled: B.with(() => c() ?? !1),
			required: B.with(() => w()),
			name: B.with(() => d()),
			value: B.with(() => k()),
			id: B.with(() => A()),
			ref: B.with(
				() => a(),
				(u) => a(u)
			),
			indeterminate: B.with(
				() => y(),
				(u) => {
					var s;
					y(u), (s = e.onIndeterminateChange) == null || s.call(e, u);
				}
			),
			type: B.with(() => T())
		}),
		D = z(() => Fe({ ...X }, C.props));
	var V = Dt(),
		J = $(V);
	{
		var G = (u) => {
				var s = pe(),
					f = $(s),
					P = Ge(() => ({ props: S(D), ...C.snippetProps }));
				$e(
					f,
					() => e.child,
					() => S(P)
				),
					o(u, s);
			},
			K = (u) => {
				var s = St();
				let f;
				var P = g(s);
				$e(
					P,
					() => e.children ?? Ve,
					() => C.snippetProps
				),
					_(s),
					qe(() => (f = Ae(s, f, { ...S(D) }))),
					o(u, s);
			};
		me(J, (u) => {
			e.child ? u(G) : u(K, !1);
		});
	}
	var q = i(J, 2);
	$t(q, {}), o(t, V), fe();
}
var qt = x('<div class="flex size-4 items-center justify-center text-current"><!></div>');
function zt(t, e) {
	he(e, !0);
	let r = R(e, 'ref', 15, null),
		a = R(e, 'checked', 15, !1),
		c = R(e, 'indeterminate', 15, !1),
		w = ze(e, ['$$slots', '$$events', '$$legacy', 'ref', 'checked', 'indeterminate', 'class']);
	var d = pe(),
		k = $(d);
	const A = z(() =>
		xe(
			'border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer box-content size-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
			e.class
		)
	);
	Je(
		k,
		() => Rt,
		(y, T) => {
			T(
				y,
				ce(
					{
						get class() {
							return S(A);
						}
					},
					() => w,
					{
						get ref() {
							return r();
						},
						set ref(C) {
							r(C);
						},
						get checked() {
							return a();
						},
						set checked(C) {
							a(C);
						},
						get indeterminate() {
							return c();
						},
						set indeterminate(C) {
							c(C);
						},
						children: (C, D) => {
							let V = () => (D == null ? void 0 : D().checked),
								J = () => (D == null ? void 0 : D().indeterminate);
							var G = qt(),
								K = g(G);
							{
								var q = (s) => {
										ot(s, { class: 'size-3.5' });
									},
									u = (s) => {
										const f = z(() => xe('size-3.5', !V() && 'text-transparent'));
										at(s, {
											get class() {
												return S(f);
											}
										});
									};
								me(K, (s) => {
									J() ? s(q) : s(u, !1);
								});
							}
							_(G), o(C, G);
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		o(t, d),
		fe();
}
var At = x('<!> <span class="sr-only">Toggle navigation menu</span>', 1),
	Tt = x(
		'<nav class="grid gap-6 text-lg font-medium"><a href="##" class="flex items-center gap-2 text-lg font-semibold"><!> <span class="sr-only">Acme Inc</span></a> <a href="##" class="text-muted-foreground hover:text-foreground">Dashboard</a> <a href="##" class="text-muted-foreground hover:text-foreground">Orders</a> <a href="##" class="text-muted-foreground hover:text-foreground">Products</a> <a href="##" class="text-muted-foreground hover:text-foreground">Customers</a> <a href="##" class="hover:text-foreground">Settings</a></nav>'
	),
	It = x('<!> <!>', 1),
	Nt = x('<!> <span class="sr-only">Toggle user menu</span>', 1),
	Ot = x('<!> <!> <!> <!> <!> <!>', 1),
	Mt = x('<!> <!>', 1),
	Et = x('<!> <!>', 1),
	jt = x('<form><!></form>'),
	Bt = x('<!> <!> <!>', 1),
	Gt = x('<!> <!>', 1),
	Vt = x(
		'<form class="flex flex-col gap-4"><!> <div class="flex items-center space-x-2"><!> <label for="include" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Allow administrators to change the directory.</label></div></form>'
	),
	Jt = x('<!> <!> <!>', 1),
	Ut = x(
		'<div class="flex min-h-screen w-full flex-col"><header class="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6"><nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"><a href="##" class="flex items-center gap-2 text-lg font-semibold md:text-base"><!> <span class="sr-only">Acme Inc</span></a> <a href="##" class="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a> <a href="##" class="text-muted-foreground hover:text-foreground transition-colors">Orders</a> <a href="##" class="text-muted-foreground hover:text-foreground transition-colors">Products</a> <a href="##" class="text-muted-foreground hover:text-foreground transition-colors">Customers</a> <a href="##" class="text-foreground hover:text-foreground transition-colors">Settings</a></nav> <!> <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"><form class="ml-auto flex-1 sm:flex-initial"><div class="relative"><!> <!></div></form> <!></div></header> <main class="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10"><div class="mx-auto grid w-full max-w-6xl gap-2"><h1 class="text-3xl font-semibold">Settings</h1></div> <div class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"><nav class="text-muted-foreground grid gap-4 text-sm" data-x-chunk-name="dashboard-04-chunk-0" data-x-chunk-description="A sidebar navigation with links to general, security, integrations, support, organizations, and advanced settings." data-x-chunk-container="chunk-container after:right-0"><a href="##" class="text-primary font-semibold">General</a> <a href="##">Security</a> <a href="##">Integrations</a> <a href="##">Support</a> <a href="##">Organizations</a> <a href="##">Advanced</a></nav> <div class="grid gap-6"><!> <!></div></div></main></div>'
	);
function gr(t) {
	var e = Ut(),
		r = g(e),
		a = g(r),
		c = g(a),
		w = g(c);
	De(w, { class: 'size-6' }), v(2), _(c), v(10), _(a);
	var d = i(a, 2);
	ct(d, {
		children: (q, u) => {
			var s = It(),
				f = $(s);
			ut(f, {
				child: (m, h) => {
					Q(
						m,
						ce(() => (h == null ? void 0 : h().props), {
							variant: 'outline',
							size: 'icon',
							class: 'shrink-0 md:hidden',
							children: (l, b) => {
								var p = At(),
									I = $(p);
								pt(I, { class: 'size-5' }), v(2), o(l, p);
							},
							$$slots: { default: !0 }
						})
					);
				},
				$$slots: { child: !0 }
			});
			var P = i(f, 2);
			tt(P, {
				side: 'left',
				children: (E, m) => {
					var h = Tt(),
						n = g(h),
						l = g(n);
					De(l, { class: 'size-6' }), v(2), _(n), v(10), _(h), o(E, h);
				},
				$$slots: { default: !0 }
			}),
				o(q, s);
		},
		$$slots: { default: !0 }
	});
	var k = i(d, 2),
		A = g(k),
		y = g(A),
		T = g(y);
	ht(T, { class: 'text-muted-foreground absolute left-2.5 top-2.5 size-4' });
	var X = i(T, 2);
	le(X, {
		type: 'search',
		placeholder: 'Search products...',
		class: 'pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
	}),
		_(y),
		_(A);
	var C = i(A, 2);
	nt(C, {
		children: (q, u) => {
			var s = Mt(),
				f = $(s);
			it(f, {
				child: (m, h) => {
					Q(
						m,
						ce(() => (h == null ? void 0 : h().props), {
							variant: 'secondary',
							size: 'icon',
							class: 'rounded-full',
							children: (l, b) => {
								var p = Nt(),
									I = $(p);
								mt(I, { class: 'size-5' }), v(2), o(l, p);
							},
							$$slots: { default: !0 }
						})
					);
				},
				$$slots: { child: !0 }
			});
			var P = i(f, 2);
			dt(P, {
				align: 'end',
				children: (E, m) => {
					lt(E, {
						children: (h, n) => {
							var l = Ot(),
								b = $(l);
							ft(b, {
								children: (U, ne) => {
									v();
									var H = M('My Account');
									o(U, H);
								},
								$$slots: { default: !0 }
							});
							var p = i(b, 2);
							Re(p, {});
							var I = i(p, 2);
							de(I, {
								children: (U, ne) => {
									v();
									var H = M('Settings');
									o(U, H);
								},
								$$slots: { default: !0 }
							});
							var N = i(I, 2);
							de(N, {
								children: (U, ne) => {
									v();
									var H = M('Support');
									o(U, H);
								},
								$$slots: { default: !0 }
							});
							var ve = i(N, 2);
							Re(ve, {});
							var Ne = i(ve, 2);
							de(Ne, {
								children: (U, ne) => {
									v();
									var H = M('Logout');
									o(U, H);
								},
								$$slots: { default: !0 }
							}),
								o(h, l);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			}),
				o(q, s);
		},
		$$slots: { default: !0 }
	}),
		_(k),
		_(r);
	var D = i(r, 2),
		V = i(g(D), 2),
		J = i(g(V), 2),
		G = g(J);
	be(G, {
		'data-x-chunk-name': 'dashboard-04-chunk-1',
		'data-x-chunk-description': 'A form to update the store name.',
		children: (q, u) => {
			var s = Bt(),
				f = $(s);
			ke(f, {
				children: (m, h) => {
					var n = Et(),
						l = $(n);
					ye(l, {
						children: (p, I) => {
							v();
							var N = M('Store Name');
							o(p, N);
						},
						$$slots: { default: !0 }
					});
					var b = i(l, 2);
					we(b, {
						children: (p, I) => {
							v();
							var N = M('Used to identify your store in the marketplace.');
							o(p, N);
						},
						$$slots: { default: !0 }
					}),
						o(m, n);
				},
				$$slots: { default: !0 }
			});
			var P = i(f, 2);
			Ce(P, {
				children: (m, h) => {
					var n = jt(),
						l = g(n);
					le(l, { placeholder: 'Store Name' }), _(n), o(m, n);
				},
				$$slots: { default: !0 }
			});
			var E = i(P, 2);
			Pe(E, {
				class: 'border-t px-6 py-4',
				children: (m, h) => {
					Q(m, {
						children: (n, l) => {
							v();
							var b = M('Save');
							o(n, b);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			}),
				o(q, s);
		},
		$$slots: { default: !0 }
	});
	var K = i(G, 2);
	be(K, {
		'data-x-chunk-name': 'dashboard-04-chunk-2',
		'data-x-chunk-description':
			'A form to update the plugins directory with a checkbox to allow administrators to change the directory.',
		children: (q, u) => {
			var s = Jt(),
				f = $(s);
			ke(f, {
				children: (m, h) => {
					var n = Gt(),
						l = $(n);
					ye(l, {
						children: (p, I) => {
							v();
							var N = M('Plugins Directory');
							o(p, N);
						},
						$$slots: { default: !0 }
					});
					var b = i(l, 2);
					we(b, {
						children: (p, I) => {
							v();
							var N = M('The directory within your project, in which your plugins are located.');
							o(p, N);
						},
						$$slots: { default: !0 }
					}),
						o(m, n);
				},
				$$slots: { default: !0 }
			});
			var P = i(f, 2);
			Ce(P, {
				children: (m, h) => {
					var n = Vt(),
						l = g(n);
					le(l, { placeholder: 'Project Name', value: '/content/plugins' });
					var b = i(l, 2),
						p = g(b);
					zt(p, { id: 'include', checked: !0 }), v(2), _(b), _(n), o(m, n);
				},
				$$slots: { default: !0 }
			});
			var E = i(P, 2);
			Pe(E, {
				class: 'border-t px-6 py-4',
				children: (m, h) => {
					Q(m, {
						children: (n, l) => {
							v();
							var b = M('Save');
							o(n, b);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			}),
				o(q, s);
		},
		$$slots: { default: !0 }
	}),
		_(J),
		_(V),
		_(D),
		_(e),
		o(t, e);
}
export { gr as component };
