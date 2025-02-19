var Dt = Object.defineProperty;
var lt = (w) => {
	throw TypeError(w);
};
var Ot = (w, u, D) =>
	u in w ? Dt(w, u, { enumerable: !0, configurable: !0, writable: !0, value: D }) : (w[u] = D);
var dt = (w, u, D) => Ot(w, typeof u != 'symbol' ? u + '' : u, D),
	jt = (w, u, D) => u.has(w) || lt('Cannot ' + D);
var nt = (w, u, D) => (jt(w, u, 'read from private field'), D ? D.call(w) : u.get(w)),
	it = (w, u, D) =>
		u.has(w)
			? lt('Cannot add the same private member more than once')
			: u instanceof WeakSet
				? u.add(w)
				: u.set(w, D);
import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import {
	f as c,
	h as Ze,
	g as He,
	p as wt,
	a as zt,
	c as z,
	y as At,
	r as k,
	t as ve,
	s as t,
	n as r
} from '../chunks/BHafZ7-g.js';
import { c as we, a as e, t as o, b as l } from '../chunks/D4wBL3Sd.js';
import { a as _e, s as Qe } from '../chunks/eK_4uKAs.js';
import { l as et, s as $e, p as he, i as Rt, r as kt } from '../chunks/CjIAJ7VA.js';
import { B as ue } from '../chunks/FIXHeqsx.js';
import { e as Bt, B as It, a as Ve, b as ct, c as ut, d as Ft } from '../chunks/gqCKvLmc.js';
import { a as Mt, B as oe } from '../chunks/Bsldq5z3.js';
import { C as De } from '../chunks/QDtlYqdc.js';
import { D as vt, C as Oe, a as je, b as Ae, c as Me } from '../chunks/CbUYl22c.js';
import { C as Ne } from '../chunks/vYS07VBd.js';
import { R as We, T as Ye, D as qe, G as $t, a as ge } from '../chunks/BOSOt6G1.js';
import { I as Nt } from '../chunks/C5wd2lyJ.js';
import { P as Lt, a as Et, b as ft } from '../chunks/3ME8iwst.js';
import { c as Ht } from '../chunks/D-TmFHfb.js';
import { s as mt } from '../chunks/CiWmPosG.js';
import { a as Jt, u as Ut, b as Re, m as Gt } from '../chunks/iSg1OsVq.js';
import { S as Le } from '../chunks/QDzNhrkw.js';
import { R as Vt, T as Wt } from '../chunks/BvN8JEzU.js';
import { T as Yt, a as qt, b as ie, c as Be, d as Xt, e as g } from '../chunks/CYrfLlo4.js';
import { R as Kt, T as Qt, a as Xe, b as Zt } from '../chunks/CaFChx9j.js';
import { P as pt, R as Pe, T as be, a as ye } from '../chunks/WCo3IhKC.js';
import { P as _t } from '../chunks/Db07kPmK.js';
import { S as er } from '../chunks/B0otktkl.js';
import { S as tr } from '../chunks/DvUo5-ap.js';
import { H as ht } from '../chunks/Cblokx3N.js';
import { S as xt, P as gt, C as Pt } from '../chunks/A5zQAGlp.js';
import { U as bt } from '../chunks/BS_YBG0Y.js';
import { P as rr } from '../chunks/DVMtRMN1.js';
import { D as Ee } from '../chunks/BX2CG_nZ.js';
import { s as tt } from '../chunks/BtEvizs7.js';
import { I as rt } from '../chunks/DtoOq0pI.js';
import { C as sr } from '../chunks/-KWb4uHi.js';
import { C as ar } from '../chunks/B4xPSlFl.js';
import { C as or } from '../chunks/CoAsnqVS.js';
import { S as lr } from '../chunks/Bw9OX24f.js';
import { D as Ke, L as dr, F as nr } from '../chunks/CT8puWLb.js';
function ir(w, u) {
	const D = et(u, ['children', '$$slots', '$$events', '$$legacy']);
	rt(
		w,
		$e({ name: 'copy' }, () => D, {
			iconNode: [
				['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2' }],
				['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' }]
			],
			children: (q, le) => {
				var G = we(),
					Q = c(G);
				tt(Q, u, 'default', {}, null), e(q, G);
			},
			$$slots: { default: !0 }
		})
	);
}
function cr(w, u) {
	const D = et(u, ['children', '$$slots', '$$events', '$$legacy']);
	rt(
		w,
		$e({ name: 'ellipsis-vertical' }, () => D, {
			iconNode: [
				['circle', { cx: '12', cy: '12', r: '1' }],
				['circle', { cx: '12', cy: '5', r: '1' }],
				['circle', { cx: '12', cy: '19', r: '1' }]
			],
			children: (q, le) => {
				var G = we(),
					Q = c(G);
				tt(Q, u, 'default', {}, null), e(q, G);
			},
			$$slots: { default: !0 }
		})
	);
}
function ur(w, u) {
	const D = et(u, ['children', '$$slots', '$$events', '$$legacy']);
	rt(
		w,
		$e({ name: 'truck' }, () => D, {
			iconNode: [
				['path', { d: 'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2' }],
				['path', { d: 'M15 18H9' }],
				[
					'path',
					{ d: 'M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14' }
				],
				['circle', { cx: '17', cy: '18', r: '2' }],
				['circle', { cx: '7', cy: '18', r: '2' }]
			],
			children: (q, le) => {
				var G = we(),
					Q = c(G);
				tt(Q, u, 'default', {}, null), e(q, G);
			},
			$$slots: { default: !0 }
		})
	);
}
const vr = 'data-progress-root';
var Je;
class $r {
	constructor(u) {
		dt(this, 'opts');
		it(
			this,
			Je,
			Ze(() => ({
				role: 'progressbar',
				value: this.opts.value.current,
				'aria-valuemin': this.opts.min.current,
				'aria-valuemax': this.opts.max.current,
				'aria-valuenow': this.opts.value.current === null ? void 0 : this.opts.value.current,
				'data-value': this.opts.value.current === null ? void 0 : this.opts.value.current,
				'data-state': fr(this.opts.value.current, this.opts.max.current),
				'data-max': this.opts.max.current,
				'data-min': this.opts.min.current,
				'data-indeterminate': this.opts.value.current === null ? '' : void 0,
				[vr]: ''
			}))
		);
		(this.opts = u), Jt(u);
	}
	get props() {
		return He(nt(this, Je));
	}
}
Je = new WeakMap();
function fr(w, u) {
	return w === null ? 'indeterminate' : w === u ? 'loaded' : 'loading';
}
function mr(w) {
	return new $r(w);
}
var pr = o('<div><!></div>');
function _r(w, u) {
	wt(u, !0);
	let D = he(u, 'value', 3, 0),
		ee = he(u, 'max', 3, 100),
		q = he(u, 'min', 3, 0),
		le = he(u, 'id', 19, Ut),
		G = he(u, 'ref', 15, null),
		Q = kt(u, [
			'$$slots',
			'$$events',
			'$$legacy',
			'child',
			'children',
			'value',
			'max',
			'min',
			'id',
			'ref'
		]);
	const ze = mr({
			value: Re.with(() => D()),
			max: Re.with(() => ee()),
			min: Re.with(() => q()),
			id: Re.with(() => le()),
			ref: Re.with(
				() => G(),
				(te) => G(te)
			)
		}),
		fe = Ze(() => Gt(Q, ze.props));
	var ae = we(),
		ke = c(ae);
	{
		var me = (te) => {
				var de = we(),
					xe = c(de);
				mt(
					xe,
					() => u.child,
					() => ({ props: He(fe) })
				),
					e(te, de);
			},
			Se = (te) => {
				var de = pr();
				let xe;
				var Ie = z(de);
				mt(Ie, () => u.children ?? At),
					k(de),
					ve(() => (xe = _e(de, xe, { ...He(fe) }))),
					e(te, de);
			};
		Rt(ke, (te) => {
			u.child ? te(me) : te(Se, !1);
		});
	}
	e(w, ae), zt();
}
var hr = o('<div class="bg-primary h-full w-full flex-1 transition-all"></div>');
function yt(w, u) {
	wt(u, !0);
	let D = he(u, 'ref', 15, null),
		ee = he(u, 'max', 3, 100),
		q = kt(u, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'max', 'value']);
	var le = we(),
		G = c(le);
	const Q = Ze(() => Mt('bg-secondary relative h-4 w-full overflow-hidden rounded-full', u.class));
	Ht(
		G,
		() => _r,
		(ze, fe) => {
			fe(
				ze,
				$e(
					{
						get class() {
							return He(Q);
						},
						get value() {
							return u.value;
						},
						get max() {
							return ee();
						}
					},
					() => q,
					{
						get ref() {
							return D();
						},
						set ref(ae) {
							D(ae);
						},
						children: (ae, ke) => {
							var me = hr();
							ve(() =>
								Qe(
									me,
									'style',
									`transform: translateX(-${100 - (100 * (u.value ?? 0)) / (ee() ?? 1)}%)`
								)
							),
								e(ae, me);
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		e(w, le),
		zt();
}
var xr = o('<a><!> <span class="sr-only">Dashboard</span></a>'),
	gr = o('<!> <!>', 1),
	Pr = o('<a><!> <span class="sr-only">Orders</span></a>'),
	br = o('<!> <!>', 1),
	yr = o('<a><!> <span class="sr-only">Products</span></a>'),
	wr = o('<!> <!>', 1),
	zr = o('<a><!> <span class="sr-only">Customers</span></a>'),
	kr = o('<!> <!>', 1),
	Sr = o('<a><!> <span class="sr-only">Analytics</span></a>'),
	Tr = o('<!> <!>', 1),
	Cr = o('<!> <!> <!> <!> <!>', 1),
	Dr = o('<a><!> <span class="sr-only">Settings</span></a>'),
	Or = o('<!> <!>', 1),
	jr = o('<!> <span class="sr-only">Toggle Menu</span>', 1),
	Ar = o(
		'<nav class="grid gap-6 text-lg font-medium"><a href="##" class="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"><!> <span class="sr-only">Acme Inc</span></a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Dashboard</a> <a href="##" class="text-foreground flex items-center gap-4 px-2.5"><!> Orders</a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Products</a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Customers</a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Settings</a></nav>'
	),
	Rr = o('<!> <!>', 1),
	Br = o('<!> <!> <!> <!> <!>', 1),
	Ir = o(
		'<img src="/images/placeholder-user.jpg" alt="Avatar" class="size-9 overflow-hidden rounded-full">'
	),
	Fr = o('<!> <!> <!> <!> <!> <!>', 1),
	Mr = o('<!> <!>', 1),
	Nr = o('<!> <!>', 1),
	Lr = o('<!> <!>', 1),
	Er = o('<!> <!>', 1),
	Hr = o('<div class="text-muted-foreground text-xs">+25% from last week</div>'),
	Jr = o('<!> <!> <!>', 1),
	Ur = o('<!> <!>', 1),
	Gr = o('<div class="text-muted-foreground text-xs">+10% from last month</div>'),
	Vr = o('<!> <!> <!>', 1),
	Wr = o('<!> <!> <!>', 1),
	Yr = o('<!> <span class="sr-only sm:not-sr-only">Filter</span>', 1),
	qr = o('<!> <!> <!> <!> <!>', 1),
	Xr = o('<!> <!>', 1),
	Kr = o('<!> <span class="sr-only sm:not-sr-only">Export</span>', 1),
	Qr = o('<!> <!>', 1),
	Zr = o('<!> <!> <!> <!> <!>', 1),
	es = o(
		'<div class="font-medium">Liam Johnson</div> <div class="text-muted-foreground hidden text-sm md:inline">liam@example.com</div>',
		1
	),
	ts = o('<!> <!> <!> <!> <!>', 1),
	rs = o(
		'<div class="font-medium">Olivia Smith</div> <div class="text-muted-foreground hidden text-sm md:inline">olivia@example.com</div>',
		1
	),
	ss = o('<!> <!> <!> <!> <!>', 1),
	as = o(
		'<div class="font-medium">Liam Johnson</div> <div class="text-muted-foreground hidden text-sm md:inline">liam@example.com</div>',
		1
	),
	os = o('<!> <!> <!> <!> <!>', 1),
	ls = o(
		'<div class="font-medium">Noah Williams</div> <div class="text-muted-foreground hidden text-sm md:inline">noah@example.com</div>',
		1
	),
	ds = o('<!> <!> <!> <!> <!>', 1),
	ns = o(
		'<div class="font-medium">Emma Brown</div> <div class="text-muted-foreground hidden text-sm md:inline">emma@example.com</div>',
		1
	),
	is = o('<!> <!> <!> <!> <!>', 1),
	cs = o(
		'<div class="font-medium">Liam Johnson</div> <div class="text-muted-foreground hidden text-sm md:inline">liam@example.com</div>',
		1
	),
	us = o('<!> <!> <!> <!> <!>', 1),
	vs = o(
		'<div class="font-medium">Olivia Smith</div> <div class="text-muted-foreground hidden text-sm md:inline">olivia@example.com</div>',
		1
	),
	$s = o('<!> <!> <!> <!> <!>', 1),
	fs = o(
		'<div class="font-medium">Emma Brown</div> <div class="text-muted-foreground hidden text-sm md:inline">emma@example.com</div>',
		1
	),
	ms = o('<!> <!> <!> <!> <!>', 1),
	ps = o('<!> <!> <!> <!> <!> <!> <!> <!>', 1),
	_s = o('<!> <!>', 1),
	hs = o('<!> <!>', 1),
	xs = o(
		'<div class="flex items-center"><!> <div class="ml-auto flex items-center gap-2"><!> <!></div></div> <!>',
		1
	),
	gs = o('<!> <span class="sr-only">Copy Order ID</span>', 1),
	Ps = o('Order Oe31b70H <!>', 1),
	bs = o('<!> <span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">Track Order</span>', 1),
	ys = o('<!> <span class="sr-only">More</span>', 1),
	ws = o('<!> <!> <!> <!>', 1),
	zs = o('<!> <!>', 1),
	ks = o(
		'<div class="grid gap-0.5"><!> <!></div> <div class="ml-auto flex items-center gap-1"><!> <!></div>',
		1
	),
	Ss = o(
		'<div class="grid gap-3"><div class="font-semibold">Order Details</div> <ul class="grid gap-3"><li class="flex items-center justify-between"><span class="text-muted-foreground">Glimmer Lamps x <span>2</span></span> <span>$250.00</span></li> <li class="flex items-center justify-between"><span class="text-muted-foreground">Aqua Filters x <span>1</span></span> <span>$49.00</span></li></ul> <!> <ul class="grid gap-3"><li class="flex items-center justify-between"><span class="text-muted-foreground">Subtotal</span> <span>$299.00</span></li> <li class="flex items-center justify-between"><span class="text-muted-foreground">Shipping</span> <span>$5.00</span></li> <li class="flex items-center justify-between"><span class="text-muted-foreground">Tax</span> <span>$25.00</span></li> <li class="flex items-center justify-between font-semibold"><span class="text-muted-foreground">Total</span> <span>$329.00</span></li></ul></div> <!> <div class="grid grid-cols-2 gap-4"><div class="grid gap-3"><div class="font-semibold">Shipping Information</div> <address class="text-muted-foreground grid gap-0.5 not-italic"><span>Liam Johnson</span> <span>1234 Main St.</span> <span>Anytown, CA 12345</span></address></div> <div class="grid auto-rows-max gap-3"><div class="font-semibold">Billing Information</div> <div class="text-muted-foreground">Same as shipping address</div></div></div> <!> <div class="grid gap-3"><div class="font-semibold">Customer Information</div> <dl class="grid gap-3"><div class="flex items-center justify-between"><dt class="text-muted-foreground">Customer</dt> <dd>Liam Johnson</dd></div> <div class="flex items-center justify-between"><dt class="text-muted-foreground">Email</dt> <dd><a href="mailto:">liam@acme.com</a></dd></div> <div class="flex items-center justify-between"><dt class="text-muted-foreground">Phone</dt> <dd><a href="tel:">+1 234 567 890</a></dd></div></dl></div> <!> <div class="grid gap-3"><div class="font-semibold">Payment Information</div> <dl class="grid gap-3"><div class="flex items-center justify-between"><dt class="text-muted-foreground flex items-center gap-1"><!> Visa</dt> <dd>**** **** **** 4532</dd></div></dl></div>',
		1
	),
	Ts = o('<!> <span class="sr-only">Previous Order</span>', 1),
	Cs = o('<!> <span class="sr-only">Next Order</span>', 1),
	Ds = o('<!> <!>', 1),
	Os = o(
		'<div class="text-muted-foreground text-xs">Updated <time dateTime="2023-11-23">November 23, 2023</time></div> <!>',
		1
	),
	js = o('<!> <!> <!>', 1),
	As = o(
		'<div class="bg-muted/40 flex min-h-screen w-full flex-col"><aside class="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex"><nav class="flex flex-col items-center gap-4 px-2 sm:py-4"><a href="##" class="bg-primary text-primary-foreground group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base"><!> <span class="sr-only">Acme Inc</span></a> <!></nav> <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4"><!></nav></aside> <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14"><header class="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"><!> <!> <div class="relative ml-auto flex-1 md:grow-0"><!> <!></div> <!></header> <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"><div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2"><div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"><!> <!> <!></div> <!></div> <div><!></div></main></div></div>'
	);
function xa(w) {
	var u = As(),
		D = z(u),
		ee = z(D),
		q = z(ee),
		le = z(q);
	_t(le, { class: 'size-4 transition-all group-hover:scale-110' }), r(2), k(q);
	var G = t(q, 2);
	pt(G, {
		children: (L, ne) => {
			var S = Cr(),
				O = c(S);
			Pe(O, {
				children: (m, f) => {
					var $ = gr(),
						d = c($);
					be(d, {
						child: (h, n) => {
							let x = () => (n == null ? void 0 : n().props);
							var i = xr();
							let _;
							var C = z(i);
							ht(C, { class: 'size-5' }),
								r(2),
								k(i),
								ve(
									() =>
										(_ = _e(i, _, {
											href: '##',
											class:
												'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8',
											...x()
										}))
								),
								e(h, i);
						},
						$$slots: { child: !0 }
					});
					var v = t(d, 2);
					ye(v, {
						side: 'right',
						children: (p, h) => {
							r();
							var n = l('Dashboard');
							e(p, n);
						},
						$$slots: { default: !0 }
					}),
						e(m, $);
				},
				$$slots: { default: !0 }
			});
			var j = t(O, 2);
			Pe(j, {
				children: (m, f) => {
					var $ = br(),
						d = c($);
					be(d, {
						child: (h, n) => {
							let x = () => (n == null ? void 0 : n().props);
							var i = Pr();
							let _;
							var C = z(i);
							xt(C, { class: 'size-5' }),
								r(2),
								k(i),
								ve(
									() =>
										(_ = _e(i, _, {
											href: '##',
											class:
												'bg-accent text-accent-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8',
											...x()
										}))
								),
								e(h, i);
						},
						$$slots: { child: !0 }
					});
					var v = t(d, 2);
					ye(v, {
						side: 'right',
						children: (p, h) => {
							r();
							var n = l('Orders');
							e(p, n);
						},
						$$slots: { default: !0 }
					}),
						e(m, $);
				},
				$$slots: { default: !0 }
			});
			var T = t(j, 2);
			Pe(T, {
				children: (m, f) => {
					var $ = wr(),
						d = c($);
					be(d, {
						child: (h, n) => {
							let x = () => (n == null ? void 0 : n().props);
							var i = yr();
							let _;
							var C = z(i);
							gt(C, { class: 'size-5' }),
								r(2),
								k(i),
								ve(
									() =>
										(_ = _e(i, _, {
											href: '##',
											class:
												'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8',
											...x()
										}))
								),
								e(h, i);
						},
						$$slots: { child: !0 }
					});
					var v = t(d, 2);
					ye(v, {
						side: 'right',
						children: (p, h) => {
							r();
							var n = l('Products');
							e(p, n);
						},
						$$slots: { default: !0 }
					}),
						e(m, $);
				},
				$$slots: { default: !0 }
			});
			var y = t(T, 2);
			Pe(y, {
				children: (m, f) => {
					var $ = kr(),
						d = c($);
					be(d, {
						child: (h, n) => {
							let x = () => (n == null ? void 0 : n().props);
							var i = zr();
							let _;
							var C = z(i);
							bt(C, { class: 'size-5' }),
								r(2),
								k(i),
								ve(
									() =>
										(_ = _e(i, _, {
											href: '##',
											class:
												'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8',
											...x()
										}))
								),
								e(h, i);
						},
						$$slots: { child: !0 }
					});
					var v = t(d, 2);
					ye(v, {
						side: 'right',
						children: (p, h) => {
							r();
							var n = l('Customers');
							e(p, n);
						},
						$$slots: { default: !0 }
					}),
						e(m, $);
				},
				$$slots: { default: !0 }
			});
			var b = t(y, 2);
			Pe(b, {
				children: (m, f) => {
					var $ = Tr(),
						d = c($);
					be(d, {
						child: (h, n) => {
							let x = () => (n == null ? void 0 : n().props);
							var i = Sr();
							let _;
							var C = z(i);
							Pt(C, { class: 'size-5' }),
								r(2),
								k(i),
								ve(
									() =>
										(_ = _e(i, _, {
											href: '##',
											class:
												'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8',
											...x()
										}))
								),
								e(h, i);
						},
						$$slots: { child: !0 }
					});
					var v = t(d, 2);
					ye(v, {
						side: 'right',
						children: (p, h) => {
							r();
							var n = l('Analytics');
							e(p, n);
						},
						$$slots: { default: !0 }
					}),
						e(m, $);
				},
				$$slots: { default: !0 }
			}),
				e(L, S);
		},
		$$slots: { default: !0 }
	}),
		k(ee);
	var Q = t(ee, 2),
		ze = z(Q);
	pt(ze, {
		children: (L, ne) => {
			Pe(L, {
				children: (S, O) => {
					var j = Or(),
						T = c(j);
					be(T, {
						child: (m, f) => {
							let $ = () => (f == null ? void 0 : f().props);
							var d = Dr();
							let v;
							var p = z(d);
							lr(p, { class: 'size-5' }),
								r(2),
								k(d),
								ve(
									() =>
										(v = _e(d, v, {
											href: '##',
											class:
												'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8',
											...$()
										}))
								),
								e(m, d);
						},
						$$slots: { child: !0 }
					});
					var y = t(T, 2);
					ye(y, {
						side: 'right',
						children: (b, m) => {
							r();
							var f = l('Settings');
							e(b, f);
						},
						$$slots: { default: !0 }
					}),
						e(S, j);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}),
		k(Q),
		k(D);
	var fe = t(D, 2),
		ae = z(fe),
		ke = z(ae);
	Vt(ke, {
		children: (L, ne) => {
			var S = Rr(),
				O = c(S);
			Wt(O, {
				child: (y, b) => {
					oe(
						y,
						$e(() => (b == null ? void 0 : b().props), {
							variant: 'outline',
							size: 'icon',
							class: 'sm:hidden',
							children: (f, $) => {
								var d = jr(),
									v = c(d);
								rr(v, { class: 'size-5' }), r(2), e(f, d);
							},
							$$slots: { default: !0 }
						})
					);
				},
				$$slots: { child: !0 }
			});
			var j = t(O, 2);
			tr(j, {
				side: 'left',
				class: 'sm:max-w-xs',
				children: (T, y) => {
					var b = Ar(),
						m = z(b),
						f = z(m);
					_t(f, { class: 'size-5 transition-all group-hover:scale-110' }), r(2), k(m);
					var $ = t(m, 2),
						d = z($);
					ht(d, { class: 'size-5' }), r(), k($);
					var v = t($, 2),
						p = z(v);
					xt(p, { class: 'size-5' }), r(), k(v);
					var h = t(v, 2),
						n = z(h);
					gt(n, { class: 'size-5' }), r(), k(h);
					var x = t(h, 2),
						i = z(x);
					bt(i, { class: 'size-5' }), r(), k(x);
					var _ = t(x, 2),
						C = z(_);
					Pt(C, { class: 'size-5' }), r(), k(_), k(b), e(T, b);
				},
				$$slots: { default: !0 }
			}),
				e(L, S);
		},
		$$slots: { default: !0 }
	});
	var me = t(ke, 2);
	Bt(me, {
		class: 'hidden md:flex',
		children: (L, ne) => {
			It(L, {
				children: (S, O) => {
					var j = Br(),
						T = c(j);
					Ve(T, {
						children: ($, d) => {
							ct($, {
								href: '##',
								children: (v, p) => {
									r();
									var h = l('Dashboard');
									e(v, h);
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					});
					var y = t(T, 2);
					ut(y, {});
					var b = t(y, 2);
					Ve(b, {
						children: ($, d) => {
							ct($, {
								href: '##',
								children: (v, p) => {
									r();
									var h = l('Orders');
									e(v, h);
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					});
					var m = t(b, 2);
					ut(m, {});
					var f = t(m, 2);
					Ve(f, {
						children: ($, d) => {
							Ft($, {
								children: (v, p) => {
									r();
									var h = l('Recent Orders');
									e(v, h);
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					}),
						e(S, j);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	});
	var Se = t(me, 2),
		te = z(Se);
	er(te, { class: 'text-muted-foreground absolute left-2.5 top-2.5 size-4' });
	var de = t(te, 2);
	Nt(de, {
		type: 'search',
		placeholder: 'Search...',
		class: 'bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[320px]'
	}),
		k(Se);
	var xe = t(Se, 2);
	We(xe, {
		children: (L, ne) => {
			var S = Mr(),
				O = c(S);
			Ye(O, {
				child: (y, b) => {
					oe(
						y,
						$e(() => (b == null ? void 0 : b().props), {
							size: 'icon',
							variant: 'outline',
							class: 'overflow-hidden rounded-full',
							children: (f, $) => {
								var d = Ir();
								Qe(d, 'width', 36), Qe(d, 'height', 36), e(f, d);
							},
							$$slots: { default: !0 }
						})
					);
				},
				$$slots: { child: !0 }
			});
			var j = t(O, 2);
			qe(j, {
				align: 'end',
				children: (T, y) => {
					$t(T, {
						children: (b, m) => {
							var f = Fr(),
								$ = c(f);
							vt($, {
								children: (x, i) => {
									r();
									var _ = l('My Account');
									e(x, _);
								},
								$$slots: { default: !0 }
							});
							var d = t($, 2);
							Ee(d, {});
							var v = t(d, 2);
							ge(v, {
								children: (x, i) => {
									r();
									var _ = l('Settings');
									e(x, _);
								},
								$$slots: { default: !0 }
							});
							var p = t(v, 2);
							ge(p, {
								children: (x, i) => {
									r();
									var _ = l('Support');
									e(x, _);
								},
								$$slots: { default: !0 }
							});
							var h = t(p, 2);
							Ee(h, {});
							var n = t(h, 2);
							ge(n, {
								children: (x, i) => {
									r();
									var _ = l('Logout');
									e(x, _);
								},
								$$slots: { default: !0 }
							}),
								e(b, f);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			}),
				e(L, S);
		},
		$$slots: { default: !0 }
	}),
		k(ae);
	var Ie = t(ae, 2),
		Ue = z(Ie),
		Ge = z(Ue),
		st = z(Ge);
	De(st, {
		class: 'sm:col-span-2',
		'data-x-chunk-name': 'dashboard-05-chunk-0',
		'data-x-chunk-description':
			'A card for an orders dashboard with a description and a button to create a new order.',
		children: (L, ne) => {
			var S = Lr(),
				O = c(S);
			Oe(O, {
				class: 'pb-3',
				children: (T, y) => {
					var b = Nr(),
						m = c(b);
					je(m, {
						children: ($, d) => {
							r();
							var v = l('Your Orders');
							e($, v);
						},
						$$slots: { default: !0 }
					});
					var f = t(m, 2);
					Ae(f, {
						class: 'max-w-lg text-balance leading-relaxed',
						children: ($, d) => {
							r();
							var v =
								l(`Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful
								Analysis.`);
							e($, v);
						},
						$$slots: { default: !0 }
					}),
						e(T, b);
				},
				$$slots: { default: !0 }
			});
			var j = t(O, 2);
			Ne(j, {
				children: (T, y) => {
					oe(T, {
						children: (b, m) => {
							r();
							var f = l('Create New Order');
							e(b, f);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			}),
				e(L, S);
		},
		$$slots: { default: !0 }
	});
	var at = t(st, 2);
	De(at, {
		'data-x-chunk-name': 'dashboard-05-chunk-1',
		'data-x-chunk-description':
			"A stats card showing this week's total sales in USD, the percentage difference from last week, and a progress bar.",
		children: (L, ne) => {
			var S = Jr(),
				O = c(S);
			Oe(O, {
				class: 'pb-2',
				children: (y, b) => {
					var m = Er(),
						f = c(m);
					Ae(f, {
						children: (d, v) => {
							r();
							var p = l('This Week');
							e(d, p);
						},
						$$slots: { default: !0 }
					});
					var $ = t(f, 2);
					je($, {
						class: 'text-4xl',
						children: (d, v) => {
							r();
							var p = l('$1329');
							e(d, p);
						},
						$$slots: { default: !0 }
					}),
						e(y, m);
				},
				$$slots: { default: !0 }
			});
			var j = t(O, 2);
			Me(j, {
				children: (y, b) => {
					var m = Hr();
					e(y, m);
				},
				$$slots: { default: !0 }
			});
			var T = t(j, 2);
			Ne(T, {
				children: (y, b) => {
					yt(y, { value: 25, 'aria-label': '25% increase' });
				},
				$$slots: { default: !0 }
			}),
				e(L, S);
		},
		$$slots: { default: !0 }
	});
	var St = t(at, 2);
	De(St, {
		'data-x-chunk-name': 'dashboard-05-chunk-2',
		'data-x-chunk-description':
			"A stats card showing this month's total sales in USD, the percentage difference from last month, and a progress bar.",
		children: (L, ne) => {
			var S = Vr(),
				O = c(S);
			Oe(O, {
				class: 'pb-2',
				children: (y, b) => {
					var m = Ur(),
						f = c(m);
					Ae(f, {
						children: (d, v) => {
							r();
							var p = l('This Month');
							e(d, p);
						},
						$$slots: { default: !0 }
					});
					var $ = t(f, 2);
					je($, {
						class: 'text-3xl',
						children: (d, v) => {
							r();
							var p = l('$5,329');
							e(d, p);
						},
						$$slots: { default: !0 }
					}),
						e(y, m);
				},
				$$slots: { default: !0 }
			});
			var j = t(O, 2);
			Me(j, {
				children: (y, b) => {
					var m = Gr();
					e(y, m);
				},
				$$slots: { default: !0 }
			});
			var T = t(j, 2);
			Ne(T, {
				children: (y, b) => {
					yt(y, { value: 12, 'aria-label': '12% increase' });
				},
				$$slots: { default: !0 }
			}),
				e(L, S);
		},
		$$slots: { default: !0 }
	}),
		k(Ge);
	var Tt = t(Ge, 2);
	Kt(Tt, {
		value: 'week',
		children: (L, ne) => {
			var S = xs(),
				O = c(S),
				j = z(O);
			Qt(j, {
				children: (f, $) => {
					var d = Wr(),
						v = c(d);
					Xe(v, {
						value: 'week',
						children: (n, x) => {
							r();
							var i = l('Week');
							e(n, i);
						},
						$$slots: { default: !0 }
					});
					var p = t(v, 2);
					Xe(p, {
						value: 'month',
						children: (n, x) => {
							r();
							var i = l('Month');
							e(n, i);
						},
						$$slots: { default: !0 }
					});
					var h = t(p, 2);
					Xe(h, {
						value: 'year',
						children: (n, x) => {
							r();
							var i = l('Year');
							e(n, i);
						},
						$$slots: { default: !0 }
					}),
						e(f, d);
				},
				$$slots: { default: !0 }
			});
			var T = t(j, 2),
				y = z(T);
			We(y, {
				children: (f, $) => {
					var d = Xr(),
						v = c(d);
					Ye(v, {
						child: (n, x) => {
							oe(
								n,
								$e(() => (x == null ? void 0 : x().props), {
									size: 'sm',
									variant: 'outline',
									class: 'h-7 gap-1 text-sm',
									children: (_, C) => {
										var J = Yr(),
											A = c(J);
										dr(A, { class: 'size-3.5' }), r(2), e(_, J);
									},
									$$slots: { default: !0 }
								})
							);
						},
						$$slots: { child: !0 }
					});
					var p = t(v, 2);
					qe(p, {
						align: 'end',
						children: (h, n) => {
							$t(h, {
								children: (x, i) => {
									var _ = qr(),
										C = c(_);
									vt(C, {
										children: (Y, Z) => {
											r();
											var U = l('Filter by');
											e(Y, U);
										},
										$$slots: { default: !0 }
									});
									var J = t(C, 2);
									Ee(J, {});
									var A = t(J, 2);
									Ke(A, {
										checked: !0,
										children: (Y, Z) => {
											r();
											var U = l('Fulfilled');
											e(Y, U);
										},
										$$slots: { default: !0 }
									});
									var E = t(A, 2);
									Ke(E, {
										children: (Y, Z) => {
											r();
											var U = l('Declined');
											e(Y, U);
										},
										$$slots: { default: !0 }
									});
									var X = t(E, 2);
									Ke(X, {
										children: (Y, Z) => {
											r();
											var U = l('Refunded');
											e(Y, U);
										},
										$$slots: { default: !0 }
									}),
										e(x, _);
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					}),
						e(f, d);
				},
				$$slots: { default: !0 }
			});
			var b = t(y, 2);
			oe(b, {
				size: 'sm',
				variant: 'outline',
				class: 'h-7 gap-1 text-sm',
				children: (f, $) => {
					var d = Kr(),
						v = c(d);
					nr(v, { class: 'size-3.5' }), r(2), e(f, d);
				},
				$$slots: { default: !0 }
			}),
				k(T),
				k(O);
			var m = t(O, 2);
			Zt(m, {
				value: 'week',
				children: (f, $) => {
					De(f, {
						'data-x-chunk-name': 'dashboard-05-chunk-3',
						'data-x-chunk-description':
							'A table of recent orders showing the following columns: Customer, Type, Status, Date, and Amount.',
						children: (d, v) => {
							var p = hs(),
								h = c(p);
							Oe(h, {
								class: 'px-7',
								children: (x, i) => {
									var _ = Qr(),
										C = c(_);
									je(C, {
										children: (A, E) => {
											r();
											var X = l('Orders');
											e(A, X);
										},
										$$slots: { default: !0 }
									});
									var J = t(C, 2);
									Ae(J, {
										children: (A, E) => {
											r();
											var X = l('Recent orders from your store.');
											e(A, X);
										},
										$$slots: { default: !0 }
									}),
										e(x, _);
								},
								$$slots: { default: !0 }
							});
							var n = t(h, 2);
							Me(n, {
								children: (x, i) => {
									Yt(x, {
										children: (_, C) => {
											var J = _s(),
												A = c(J);
											qt(A, {
												children: (X, Y) => {
													ie(X, {
														children: (Z, U) => {
															var K = Zr(),
																ce = c(K);
															Be(ce, {
																children: (se, N) => {
																	r();
																	var H = l('Customer');
																	e(se, H);
																},
																$$slots: { default: !0 }
															});
															var re = t(ce, 2);
															Be(re, {
																class: 'hidden sm:table-cell',
																children: (se, N) => {
																	r();
																	var H = l('Type');
																	e(se, H);
																},
																$$slots: { default: !0 }
															});
															var Te = t(re, 2);
															Be(Te, {
																class: 'hidden sm:table-cell',
																children: (se, N) => {
																	r();
																	var H = l('Status');
																	e(se, H);
																},
																$$slots: { default: !0 }
															});
															var Ce = t(Te, 2);
															Be(Ce, {
																class: 'hidden md:table-cell',
																children: (se, N) => {
																	r();
																	var H = l('Date');
																	e(se, H);
																},
																$$slots: { default: !0 }
															});
															var Fe = t(Ce, 2);
															Be(Fe, {
																class: 'text-right',
																children: (se, N) => {
																	r();
																	var H = l('Amount');
																	e(se, H);
																},
																$$slots: { default: !0 }
															}),
																e(Z, K);
														},
														$$slots: { default: !0 }
													});
												},
												$$slots: { default: !0 }
											});
											var E = t(A, 2);
											Xt(E, {
												children: (X, Y) => {
													var Z = ps(),
														U = c(Z);
													ie(U, {
														class: 'bg-accent',
														children: (N, H) => {
															var R = ts(),
																B = c(R);
															g(B, {
																children: (s, P) => {
																	var a = es();
																	r(2), e(s, a);
																},
																$$slots: { default: !0 }
															});
															var I = t(B, 2);
															g(I, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('Sale');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var F = t(I, 2);
															g(F, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	ue(s, {
																		class: 'text-xs',
																		variant: 'secondary',
																		children: (a, pe) => {
																			r();
																			var W = l('Fulfilled');
																			e(a, W);
																		},
																		$$slots: { default: !0 }
																	});
																},
																$$slots: { default: !0 }
															});
															var M = t(F, 2);
															g(M, {
																class: 'hidden md:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('2023-06-23');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var V = t(M, 2);
															g(V, {
																class: 'text-right',
																children: (s, P) => {
																	r();
																	var a = l('$250.00');
																	e(s, a);
																},
																$$slots: { default: !0 }
															}),
																e(N, R);
														},
														$$slots: { default: !0 }
													});
													var K = t(U, 2);
													ie(K, {
														children: (N, H) => {
															var R = ss(),
																B = c(R);
															g(B, {
																children: (s, P) => {
																	var a = rs();
																	r(2), e(s, a);
																},
																$$slots: { default: !0 }
															});
															var I = t(B, 2);
															g(I, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('Refund');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var F = t(I, 2);
															g(F, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	ue(s, {
																		class: 'text-xs',
																		variant: 'outline',
																		children: (a, pe) => {
																			r();
																			var W = l('Declined');
																			e(a, W);
																		},
																		$$slots: { default: !0 }
																	});
																},
																$$slots: { default: !0 }
															});
															var M = t(F, 2);
															g(M, {
																class: 'hidden md:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('2023-06-24');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var V = t(M, 2);
															g(V, {
																class: 'text-right',
																children: (s, P) => {
																	r();
																	var a = l('$150.00');
																	e(s, a);
																},
																$$slots: { default: !0 }
															}),
																e(N, R);
														},
														$$slots: { default: !0 }
													});
													var ce = t(K, 2);
													ie(ce, {
														children: (N, H) => {
															var R = os(),
																B = c(R);
															g(B, {
																children: (s, P) => {
																	var a = as();
																	r(2), e(s, a);
																},
																$$slots: { default: !0 }
															});
															var I = t(B, 2);
															g(I, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('Sale');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var F = t(I, 2);
															g(F, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	ue(s, {
																		class: 'text-xs',
																		variant: 'secondary',
																		children: (a, pe) => {
																			r();
																			var W = l('Fulfilled');
																			e(a, W);
																		},
																		$$slots: { default: !0 }
																	});
																},
																$$slots: { default: !0 }
															});
															var M = t(F, 2);
															g(M, {
																class: 'hidden md:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('2023-06-23');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var V = t(M, 2);
															g(V, {
																class: 'text-right',
																children: (s, P) => {
																	r();
																	var a = l('$250.00');
																	e(s, a);
																},
																$$slots: { default: !0 }
															}),
																e(N, R);
														},
														$$slots: { default: !0 }
													});
													var re = t(ce, 2);
													ie(re, {
														children: (N, H) => {
															var R = ds(),
																B = c(R);
															g(B, {
																children: (s, P) => {
																	var a = ls();
																	r(2), e(s, a);
																},
																$$slots: { default: !0 }
															});
															var I = t(B, 2);
															g(I, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('Subscription');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var F = t(I, 2);
															g(F, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	ue(s, {
																		class: 'text-xs',
																		variant: 'secondary',
																		children: (a, pe) => {
																			r();
																			var W = l('Fulfilled');
																			e(a, W);
																		},
																		$$slots: { default: !0 }
																	});
																},
																$$slots: { default: !0 }
															});
															var M = t(F, 2);
															g(M, {
																class: 'hidden md:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('2023-06-25');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var V = t(M, 2);
															g(V, {
																class: 'text-right',
																children: (s, P) => {
																	r();
																	var a = l('$350.00');
																	e(s, a);
																},
																$$slots: { default: !0 }
															}),
																e(N, R);
														},
														$$slots: { default: !0 }
													});
													var Te = t(re, 2);
													ie(Te, {
														children: (N, H) => {
															var R = is(),
																B = c(R);
															g(B, {
																children: (s, P) => {
																	var a = ns();
																	r(2), e(s, a);
																},
																$$slots: { default: !0 }
															});
															var I = t(B, 2);
															g(I, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('Subscription');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var F = t(I, 2);
															g(F, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	ue(s, {
																		class: 'text-xs',
																		variant: 'secondary',
																		children: (a, pe) => {
																			r();
																			var W = l('Fulfilled');
																			e(a, W);
																		},
																		$$slots: { default: !0 }
																	});
																},
																$$slots: { default: !0 }
															});
															var M = t(F, 2);
															g(M, {
																class: 'hidden md:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('2023-06-26');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var V = t(M, 2);
															g(V, {
																class: 'text-right',
																children: (s, P) => {
																	r();
																	var a = l('$450.00');
																	e(s, a);
																},
																$$slots: { default: !0 }
															}),
																e(N, R);
														},
														$$slots: { default: !0 }
													});
													var Ce = t(Te, 2);
													ie(Ce, {
														children: (N, H) => {
															var R = us(),
																B = c(R);
															g(B, {
																children: (s, P) => {
																	var a = cs();
																	r(2), e(s, a);
																},
																$$slots: { default: !0 }
															});
															var I = t(B, 2);
															g(I, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('Sale');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var F = t(I, 2);
															g(F, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	ue(s, {
																		class: 'text-xs',
																		variant: 'secondary',
																		children: (a, pe) => {
																			r();
																			var W = l('Fulfilled');
																			e(a, W);
																		},
																		$$slots: { default: !0 }
																	});
																},
																$$slots: { default: !0 }
															});
															var M = t(F, 2);
															g(M, {
																class: 'hidden md:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('2023-06-23');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var V = t(M, 2);
															g(V, {
																class: 'text-right',
																children: (s, P) => {
																	r();
																	var a = l('$250.00');
																	e(s, a);
																},
																$$slots: { default: !0 }
															}),
																e(N, R);
														},
														$$slots: { default: !0 }
													});
													var Fe = t(Ce, 2);
													ie(Fe, {
														children: (N, H) => {
															var R = $s(),
																B = c(R);
															g(B, {
																children: (s, P) => {
																	var a = vs();
																	r(2), e(s, a);
																},
																$$slots: { default: !0 }
															});
															var I = t(B, 2);
															g(I, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('Refund');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var F = t(I, 2);
															g(F, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	ue(s, {
																		class: 'text-xs',
																		variant: 'outline',
																		children: (a, pe) => {
																			r();
																			var W = l('Declined');
																			e(a, W);
																		},
																		$$slots: { default: !0 }
																	});
																},
																$$slots: { default: !0 }
															});
															var M = t(F, 2);
															g(M, {
																class: 'hidden md:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('2023-06-24');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var V = t(M, 2);
															g(V, {
																class: 'text-right',
																children: (s, P) => {
																	r();
																	var a = l('$150.00');
																	e(s, a);
																},
																$$slots: { default: !0 }
															}),
																e(N, R);
														},
														$$slots: { default: !0 }
													});
													var se = t(Fe, 2);
													ie(se, {
														children: (N, H) => {
															var R = ms(),
																B = c(R);
															g(B, {
																children: (s, P) => {
																	var a = fs();
																	r(2), e(s, a);
																},
																$$slots: { default: !0 }
															});
															var I = t(B, 2);
															g(I, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('Sale');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var F = t(I, 2);
															g(F, {
																class: 'hidden sm:table-cell',
																children: (s, P) => {
																	ue(s, {
																		class: 'text-xs',
																		variant: 'secondary',
																		children: (a, pe) => {
																			r();
																			var W = l('Fulfilled');
																			e(a, W);
																		},
																		$$slots: { default: !0 }
																	});
																},
																$$slots: { default: !0 }
															});
															var M = t(F, 2);
															g(M, {
																class: 'hidden md:table-cell',
																children: (s, P) => {
																	r();
																	var a = l('2023-06-26');
																	e(s, a);
																},
																$$slots: { default: !0 }
															});
															var V = t(M, 2);
															g(V, {
																class: 'text-right',
																children: (s, P) => {
																	r();
																	var a = l('$450.00');
																	e(s, a);
																},
																$$slots: { default: !0 }
															}),
																e(N, R);
														},
														$$slots: { default: !0 }
													}),
														e(X, Z);
												},
												$$slots: { default: !0 }
											}),
												e(_, J);
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							}),
								e(d, p);
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { default: !0 }
			}),
				e(L, S);
		},
		$$slots: { default: !0 }
	}),
		k(Ue);
	var ot = t(Ue, 2),
		Ct = z(ot);
	De(Ct, {
		class: 'overflow-hidden',
		'data-x-chunk-name': 'dashboard-05-chunk-4',
		'data-x-chunk-description':
			'An order details card with order details, shipping information, customer information and payment information.',
		children: (L, ne) => {
			var S = js(),
				O = c(S);
			Oe(O, {
				class: 'bg-muted/50 flex flex-row items-start',
				children: (y, b) => {
					var m = ks(),
						f = c(m),
						$ = z(f);
					je($, {
						class: 'group flex items-center gap-2 text-lg',
						children: (n, x) => {
							r();
							var i = Ps(),
								_ = t(c(i));
							oe(_, {
								size: 'icon',
								variant: 'outline',
								class: 'size-6 opacity-0 transition-opacity group-hover:opacity-100',
								children: (C, J) => {
									var A = gs(),
										E = c(A);
									ir(E, { class: 'size-3' }), r(2), e(C, A);
								},
								$$slots: { default: !0 }
							}),
								e(n, i);
						},
						$$slots: { default: !0 }
					});
					var d = t($, 2);
					Ae(d, {
						children: (n, x) => {
							r();
							var i = l('Date: November 23, 2023');
							e(n, i);
						},
						$$slots: { default: !0 }
					}),
						k(f);
					var v = t(f, 2),
						p = z(v);
					oe(p, {
						size: 'sm',
						variant: 'outline',
						class: 'h-8 gap-1',
						children: (n, x) => {
							var i = bs(),
								_ = c(i);
							ur(_, { class: 'size-3.5' }), r(2), e(n, i);
						},
						$$slots: { default: !0 }
					});
					var h = t(p, 2);
					We(h, {
						children: (n, x) => {
							var i = zs(),
								_ = c(i);
							Ye(_, {
								child: (A, E) => {
									oe(
										A,
										$e(() => (E == null ? void 0 : E().props), {
											size: 'icon',
											variant: 'outline',
											class: 'size-8',
											children: (Y, Z) => {
												var U = ys(),
													K = c(U);
												cr(K, { class: 'size-3.5' }), r(2), e(Y, U);
											},
											$$slots: { default: !0 }
										})
									);
								},
								$$slots: { child: !0 }
							});
							var C = t(_, 2);
							qe(C, {
								align: 'end',
								children: (J, A) => {
									var E = ws(),
										X = c(E);
									ge(X, {
										children: (K, ce) => {
											r();
											var re = l('Edit');
											e(K, re);
										},
										$$slots: { default: !0 }
									});
									var Y = t(X, 2);
									ge(Y, {
										children: (K, ce) => {
											r();
											var re = l('Export');
											e(K, re);
										},
										$$slots: { default: !0 }
									});
									var Z = t(Y, 2);
									Ee(Z, {});
									var U = t(Z, 2);
									ge(U, {
										children: (K, ce) => {
											r();
											var re = l('Trash');
											e(K, re);
										},
										$$slots: { default: !0 }
									}),
										e(J, E);
								},
								$$slots: { default: !0 }
							}),
								e(n, i);
						},
						$$slots: { default: !0 }
					}),
						k(v),
						e(y, m);
				},
				$$slots: { default: !0 }
			});
			var j = t(O, 2);
			Me(j, {
				class: 'p-6 text-sm',
				children: (y, b) => {
					var m = Ss(),
						f = c(m),
						$ = t(z(f), 4);
					Le($, { class: 'my-2' }), r(2), k(f);
					var d = t(f, 2);
					Le(d, { class: 'my-4' });
					var v = t(d, 4);
					Le(v, { class: 'my-4' });
					var p = t(v, 4);
					Le(p, { class: 'my-4' });
					var h = t(p, 2),
						n = t(z(h), 2),
						x = z(n),
						i = z(x),
						_ = z(i);
					sr(_, { class: 'size-4' }), r(), k(i), r(2), k(x), k(n), k(h), e(y, m);
				},
				$$slots: { default: !0 }
			});
			var T = t(j, 2);
			Ne(T, {
				class: 'bg-muted/50 flex flex-row items-center border-t px-6 py-3',
				children: (y, b) => {
					var m = Os(),
						f = t(c(m), 2);
					Lt(f, {
						count: 10,
						class: 'ml-auto mr-0 w-auto',
						children: ($, d) => {
							Et($, {
								children: (v, p) => {
									var h = Ds(),
										n = c(h);
									ft(n, {
										children: (i, _) => {
											oe(i, {
												size: 'icon',
												variant: 'outline',
												class: 'size-6',
												children: (C, J) => {
													var A = Ts(),
														E = c(A);
													ar(E, { class: 'size-3.5' }), r(2), e(C, A);
												},
												$$slots: { default: !0 }
											});
										},
										$$slots: { default: !0 }
									});
									var x = t(n, 2);
									ft(x, {
										children: (i, _) => {
											oe(i, {
												size: 'icon',
												variant: 'outline',
												class: 'size-6',
												children: (C, J) => {
													var A = Cs(),
														E = c(A);
													or(E, { class: 'size-3.5' }), r(2), e(C, A);
												},
												$$slots: { default: !0 }
											});
										},
										$$slots: { default: !0 }
									}),
										e(v, h);
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					}),
						e(y, m);
				},
				$$slots: { default: !0 }
			}),
				e(L, S);
		},
		$$slots: { default: !0 }
	}),
		k(ot),
		k(Ie),
		k(fe),
		k(u),
		e(w, u);
}
export { xa as component };
