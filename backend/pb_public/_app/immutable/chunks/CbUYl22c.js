import './Bg9kRutz.js';
import {
	p as m,
	f as H,
	a as g,
	g as M,
	h as S,
	c as _,
	y as b,
	r as x,
	t as y
} from './BHafZ7-g.js';
import { c as G, a as d, t as P } from './D4wBL3Sd.js';
import { c as z } from './D-TmFHfb.js';
import { p as c, i as A, r as h, s as B, b as k } from './CjIAJ7VA.js';
import { a as p } from './Bsldq5z3.js';
import { s as u } from './CiWmPosG.js';
import { a as C } from './eK_4uKAs.js';
import { u as E, b as I, m as F } from './iSg1OsVq.js';
import { d as J } from './BOSOt6G1.js';
var K = P('<div><!></div>');
function L(i, e) {
	m(e, !0);
	let s = c(e, 'ref', 15, null),
		n = c(e, 'id', 19, E),
		t = h(e, ['$$slots', '$$events', '$$legacy', 'children', 'child', 'ref', 'id']);
	const r = J({
			id: I.with(() => n()),
			ref: I.with(
				() => s(),
				(o) => s(o)
			)
		}),
		l = S(() => F(t, r.props));
	var a = G(),
		f = H(a);
	{
		var D = (o) => {
				var v = G(),
					w = H(v);
				u(
					w,
					() => e.child,
					() => ({ props: M(l) })
				),
					d(o, v);
			},
			j = (o) => {
				var v = K();
				let w;
				var q = _(v);
				u(q, () => e.children ?? b), x(v), y(() => (w = C(v, w, { ...M(l) }))), d(o, v);
			};
		A(f, (o) => {
			e.child ? o(D) : o(j, !1);
		});
	}
	d(i, a), g();
}
function re(i, e) {
	m(e, !0);
	let s = c(e, 'ref', 15, null),
		n = h(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'inset']);
	var t = G(),
		r = H(t);
	const l = S(() => p('px-2 py-1.5 text-sm font-semibold', e.inset && 'pl-8', e.class));
	z(
		r,
		() => L,
		(a, f) => {
			f(
				a,
				B(
					{
						get class() {
							return M(l);
						}
					},
					() => n,
					{
						get ref() {
							return s();
						},
						set ref(D) {
							s(D);
						}
					}
				)
			);
		}
	),
		d(i, t),
		g();
}
var N = P('<div><!></div>');
function ae(i, e) {
	m(e, !0);
	let s = c(e, 'ref', 15, null),
		n = h(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var t = N();
	let r;
	var l = _(t);
	u(l, () => e.children ?? b),
		x(t),
		k(
			t,
			(a) => s(a),
			() => s()
		),
		y((a) => (r = C(t, r, { class: a, ...n })), [() => p('p-6', e.class)]),
		d(i, t),
		g();
}
var O = P('<p><!></p>');
function se(i, e) {
	m(e, !0);
	let s = c(e, 'ref', 15, null),
		n = h(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var t = O();
	let r;
	var l = _(t);
	u(l, () => e.children ?? b),
		x(t),
		k(
			t,
			(a) => s(a),
			() => s()
		),
		y(
			(a) => (r = C(t, r, { class: a, ...n })),
			[() => p('text-muted-foreground text-sm', e.class)]
		),
		d(i, t),
		g();
}
var Q = P('<div><!></div>');
function le(i, e) {
	m(e, !0);
	let s = c(e, 'ref', 15, null),
		n = h(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var t = Q();
	let r;
	var l = _(t);
	u(l, () => e.children ?? b),
		x(t),
		k(
			t,
			(a) => s(a),
			() => s()
		),
		y(
			(a) => (r = C(t, r, { class: a, ...n })),
			[() => p('flex flex-col space-y-1.5 p-6 pb-0', e.class)]
		),
		d(i, t),
		g();
}
var R = P('<div><!></div>');
function ie(i, e) {
	m(e, !0);
	let s = c(e, 'ref', 15, null),
		n = c(e, 'level', 3, 3),
		t = h(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'level', 'children']);
	var r = R();
	let l;
	var a = _(r);
	u(a, () => e.children ?? b),
		x(r),
		k(
			r,
			(f) => s(f),
			() => s()
		),
		y(
			(f) => (l = C(r, l, { role: 'heading', 'aria-level': n(), class: f, ...t })),
			[() => p('text-2xl font-semibold leading-none tracking-tight', e.class)]
		),
		d(i, r),
		g();
}
export { le as C, re as D, ie as a, se as b, ae as c };
