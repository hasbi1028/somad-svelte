import './Bg9kRutz.js';
import {
	t as m,
	c as h,
	x as b,
	r as g,
	p as P,
	a as k,
	f as j,
	v as A,
	w as G
} from './DQMf8gWK.js';
import { t as _, a as d, e as q } from './BGOrq1ZG.js';
import { s as v } from './D3E8oDJG.js';
import { s as x } from './DvbRtjlS.js';
import { p as u, b as B, r as y, i as D } from './DjKtoK8y.js';
import { a as w } from './DWr6XhLj.js';
import { C as H } from './Duhau3sb.js';
var I = _('<nav><!></nav>');
function X(i, e) {
	let r = u(e, 'ref', 15),
		c = y(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var a = I();
	let t;
	var l = h(a);
	v(l, () => e.children ?? b),
		g(a),
		B(
			a,
			(s) => r(s),
			() => r()
		),
		m(() => (t = x(a, t, { class: e.class, 'aria-label': 'breadcrumb', ...c }))),
		d(i, a);
}
var J = _('<li><!></li>');
function Y(i, e) {
	P(e, !0);
	let r = u(e, 'ref', 15, null),
		c = y(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var a = J();
	let t;
	var l = h(a);
	v(l, () => e.children ?? b),
		g(a),
		B(
			a,
			(s) => r(s),
			() => r()
		),
		m(
			(s) => (t = x(a, t, { class: s, ...c })),
			[() => w('inline-flex items-center gap-1.5', e.class)]
		),
		d(i, a),
		k();
}
var K = _('<li><!></li>');
function Z(i, e) {
	P(e, !0);
	let r = u(e, 'ref', 15, null),
		c = y(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var a = K();
	let t;
	var l = h(a);
	{
		var s = (n) => {
				var f = q(),
					o = j(f);
				v(o, () => e.children ?? b), d(n, f);
			},
			z = (n) => {
				H(n, {});
			};
		D(l, (n) => {
			e.children ? n(s) : n(z, !1);
		});
	}
	g(a),
		B(
			a,
			(n) => r(n),
			() => r()
		),
		m(
			(n) => (t = x(a, t, { role: 'presentation', 'aria-hidden': 'true', class: n, ...c })),
			[() => w('[&>svg]:size-3.5', e.class)]
		),
		d(i, a),
		k();
}
var L = _('<a><!></a>');
function p(i, e) {
	P(e, !0);
	let r = u(e, 'ref', 15, null),
		c = u(e, 'href', 3, void 0),
		a = y(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'href', 'child', 'children']);
	const t = G(() => ({
		class: w('hover:text-foreground transition-colors', e.class),
		href: c(),
		...a
	}));
	var l = q(),
		s = j(l);
	{
		var z = (f) => {
				var o = q(),
					C = j(o);
				v(
					C,
					() => e.child,
					() => ({ props: A(t) })
				),
					d(f, o);
			},
			n = (f) => {
				var o = L();
				let C;
				var E = h(o);
				v(E, () => e.children ?? b),
					g(o),
					B(
						o,
						(F) => r(F),
						() => r()
					),
					m(() => (C = x(o, C, { ...A(t) }))),
					d(f, o);
			};
		D(s, (f) => {
			e.child ? f(z) : f(n, !1);
		});
	}
	d(i, l), k();
}
var M = _('<ol><!></ol>');
function $(i, e) {
	P(e, !0);
	let r = u(e, 'ref', 15, null),
		c = y(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var a = M();
	let t;
	var l = h(a);
	v(l, () => e.children ?? b),
		g(a),
		B(
			a,
			(s) => r(s),
			() => r()
		),
		m(
			(s) => (t = x(a, t, { class: s, ...c })),
			[
				() =>
					w(
						'text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5',
						e.class
					)
			]
		),
		d(i, a),
		k();
}
var N = _('<span><!></span>');
function ee(i, e) {
	P(e, !0);
	let r = u(e, 'ref', 15, null),
		c = y(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var a = N();
	let t;
	var l = h(a);
	v(l, () => e.children ?? b),
		g(a),
		B(
			a,
			(s) => r(s),
			() => r()
		),
		m(
			(s) =>
				(t = x(a, t, {
					role: 'link',
					'aria-disabled': 'true',
					'aria-current': 'page',
					class: s,
					...c
				})),
			[() => w('text-foreground font-normal', e.class)]
		),
		d(i, a),
		k();
}
export { X as B, $ as a, Y as b, p as c, Z as d, ee as e };
