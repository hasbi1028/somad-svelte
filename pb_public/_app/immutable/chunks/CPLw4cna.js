import {
	B as L,
	b as j,
	aj as F,
	h,
	ak as N,
	j as T,
	F as _,
	l as v,
	i as l,
	m as O,
	al as R,
	H as E,
	e as I,
	G as Y,
	k as M,
	am as S,
	X as V,
	L as $,
	an as B,
	g as G,
	p as P,
	a1 as W,
	O as X,
	a as q
} from './DQMf8gWK.js';
import { a as z, r as H, h as p, i as J } from './BTRVP7y_.js';
import { c as K } from './BGOrq1ZG.js';
let n;
function Q() {
	n = void 0;
}
function ae(a) {
	let e = null,
		t = h;
	var o;
	if (h) {
		for (
			e = l, n === void 0 && (n = O(document.head));
			n !== null && (n.nodeType !== 8 || n.data !== N);

		)
			n = T(n);
		n === null ? _(!1) : (n = v(T(n)));
	}
	h || (o = document.head.appendChild(L()));
	try {
		j(() => a(o), F);
	} finally {
		t && (_(!0), (n = l), v(e));
	}
}
let b = !0;
function te(a) {
	b = a;
}
function re(a, e) {
	var t = e == null ? '' : typeof e == 'object' ? e + '' : e;
	t !== (a.__t ?? (a.__t = a.nodeValue)) && ((a.__t = t), (a.nodeValue = t + ''));
}
function U(a, e) {
	return k(a, e);
}
function ne(a, e) {
	R(), (e.intro = e.intro ?? !1);
	const t = e.target,
		o = h,
		y = l;
	try {
		for (var r = O(t); r && (r.nodeType !== 8 || r.data !== N); ) r = T(r);
		if (!r) throw E;
		_(!0), v(r), I();
		const f = k(a, { ...e, anchor: r });
		if (l === null || l.nodeType !== 8 || l.data !== Y) throw (M(), E);
		return _(!1), f;
	} catch (f) {
		if (f === E) return e.recover === !1 && S(), R(), V(t), _(!1), U(a, e);
		throw f;
	} finally {
		_(o), v(y), Q();
	}
}
const u = new Map();
function k(a, { target: e, anchor: t, props: o = {}, events: y, context: r, intro: f = !0 }) {
	R();
	var m = new Set(),
		g = (i) => {
			for (var s = 0; s < i.length; s++) {
				var d = i[s];
				if (!m.has(d)) {
					m.add(d);
					var c = J(d);
					e.addEventListener(d, p, { passive: c });
					var D = u.get(d);
					D === void 0
						? (document.addEventListener(d, p, { passive: c }), u.set(d, 1))
						: u.set(d, D + 1);
				}
			}
		};
	g($(z)), H.add(g);
	var w = void 0,
		C = B(() => {
			var i = t ?? e.appendChild(L());
			return (
				G(() => {
					if (r) {
						P({});
						var s = W;
						s.c = r;
					}
					y && (o.$$events = y),
						h && K(i, null),
						(b = f),
						(w = a(i, o) || {}),
						(b = !0),
						h && (X.nodes_end = l),
						r && q();
				}),
				() => {
					var c;
					for (var s of m) {
						e.removeEventListener(s, p);
						var d = u.get(s);
						--d === 0 ? (document.removeEventListener(s, p), u.delete(s)) : u.set(s, d);
					}
					H.delete(g), i !== t && ((c = i.parentNode) == null || c.removeChild(i));
				}
			);
		});
	return A.set(w, C), w;
}
let A = new WeakMap();
function se(a, e) {
	const t = A.get(a);
	return t ? (A.delete(a), t(e)) : Promise.resolve();
}
export { te as a, ne as b, b as c, ae as h, U as m, re as s, se as u };
