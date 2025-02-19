import {
	W as N,
	i as O,
	ak as I,
	j as _,
	al as b,
	o as T,
	_ as u,
	v as p,
	m as f,
	w as k,
	am as R,
	H as E,
	k as Y,
	$,
	q as j,
	an as F,
	a9 as M,
	a2 as S,
	ao as V,
	l as W,
	p as q,
	Q as K,
	K as P,
	a as Q
} from './BHafZ7-g.js';
import { g as z, r as H, h as v, i as B, d as G } from './D4wBL3Sd.js';
let n;
function J() {
	n = void 0;
}
function x(a) {
	let e = null,
		t = _;
	var o;
	if (_) {
		for (
			e = f, n === void 0 && (n = k(document.head));
			n !== null && (n.nodeType !== 8 || n.data !== b);

		)
			n = T(n);
		n === null ? u(!1) : (n = p(T(n)));
	}
	_ || (o = document.head.appendChild(N()));
	try {
		O(() => a(o), I);
	} finally {
		t && (u(!0), (n = f), p(e));
	}
}
function ee(a, e) {
	var t = e == null ? '' : typeof e == 'object' ? e + '' : e;
	t !== (a.__t ?? (a.__t = a.nodeValue)) && ((a.__t = t), (a.nodeValue = t + ''));
}
function U(a, e) {
	return C(a, e);
}
function ae(a, e) {
	R(), (e.intro = e.intro ?? !1);
	const t = e.target,
		o = _,
		y = f;
	try {
		for (var r = k(t); r && (r.nodeType !== 8 || r.data !== b); ) r = T(r);
		if (!r) throw E;
		u(!0), p(r), Y();
		const h = C(a, { ...e, anchor: r });
		if (f === null || f.nodeType !== 8 || f.data !== $) throw (j(), E);
		return u(!1), h;
	} catch (h) {
		if (h === E) return e.recover === !1 && F(), R(), M(t), u(!1), U(a, e);
		throw h;
	} finally {
		u(o), p(y), J();
	}
}
const l = new Map();
function C(a, { target: e, anchor: t, props: o = {}, events: y, context: r, intro: h = !0 }) {
	R();
	var g = new Set(),
		m = (i) => {
			for (var s = 0; s < i.length; s++) {
				var d = i[s];
				if (!g.has(d)) {
					g.add(d);
					var c = B(d);
					e.addEventListener(d, v, { passive: c });
					var D = l.get(d);
					D === void 0
						? (document.addEventListener(d, v, { passive: c }), l.set(d, 1))
						: l.set(d, D + 1);
				}
			}
		};
	m(S(z)), H.add(m);
	var w = void 0,
		L = V(() => {
			var i = t ?? e.appendChild(N());
			return (
				W(() => {
					if (r) {
						q({});
						var s = K;
						s.c = r;
					}
					y && (o.$$events = y),
						_ && G(i, null),
						(w = a(i, o) || {}),
						_ && (P.nodes_end = f),
						r && Q();
				}),
				() => {
					var c;
					for (var s of g) {
						e.removeEventListener(s, v);
						var d = l.get(s);
						--d === 0 ? (document.removeEventListener(s, v), l.delete(s)) : l.set(s, d);
					}
					H.delete(m), i !== t && ((c = i.parentNode) == null || c.removeChild(i));
				}
			);
		});
	return A.set(w, L), w;
}
let A = new WeakMap();
function te(a, e) {
	const t = A.get(a);
	return t ? (A.delete(a), t(e)) : Promise.resolve();
}
export { ae as a, x as h, U as m, ee as s, te as u };
