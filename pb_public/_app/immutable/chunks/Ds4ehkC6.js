import {
	B as ee,
	b as ae,
	E as P,
	l as H,
	h as C,
	m as re,
	e as ne,
	v as U,
	d as ie,
	C as fe,
	D as X,
	F as M,
	i as R,
	G as le,
	I as Q,
	g as W,
	J as se,
	K as b,
	L as Z,
	M as ue,
	O as F,
	P as k,
	Q as G,
	R as L,
	S as te,
	T as J,
	U as ve,
	V as de,
	W as _e,
	X as oe,
	Y as ce,
	o as he,
	Z as Ee,
	j as pe
} from './DQMf8gWK.js';
function xe(l, e) {
	return e;
}
function Te(l, e, a, u) {
	for (var v = [], _ = e.length, t = 0; t < _; t++) _e(e[t].e, v, !0);
	var o = _ > 0 && v.length === 0 && a !== null;
	if (o) {
		var T = a.parentNode;
		oe(T), T.append(a), u.clear(), x(l, e[0].prev, e[_ - 1].next);
	}
	ce(v, () => {
		for (var h = 0; h < _; h++) {
			var d = e[h];
			o || (u.delete(d.k), x(l, d.prev, d.next)), he(d.e, !o);
		}
	});
}
function Ce(l, e, a, u, v, _ = null) {
	var t = l,
		o = { flags: e, items: new Map(), first: null },
		T = (e & P) !== 0;
	if (T) {
		var h = l;
		t = C ? H(re(h)) : h.appendChild(ee());
	}
	C && ne();
	var d = null,
		w = !1,
		i = ie(() => {
			var s = a();
			return ve(s) ? s : s == null ? [] : Z(s);
		});
	ae(() => {
		var s = U(i),
			r = s.length;
		if (w && r === 0) return;
		w = r === 0;
		let I = !1;
		if (C) {
			var E = t.data === fe;
			E !== (r === 0) && ((t = X()), H(t), M(!1), (I = !0));
		}
		if (C) {
			for (var p = null, A, c = 0; c < r; c++) {
				if (R.nodeType === 8 && R.data === le) {
					(t = R), (I = !0), M(!1);
					break;
				}
				var n = s[c],
					f = u(n, c);
				(A = z(R, o, p, null, n, f, c, v, e, a)), o.items.set(f, A), (p = A);
			}
			r > 0 && H(X());
		}
		C || Ae(s, o, t, v, e, u, a),
			_ !== null &&
				(r === 0
					? d
						? Q(d)
						: (d = W(() => _(t)))
					: d !== null &&
						se(d, () => {
							d = null;
						})),
			I && M(!0),
			U(i);
	}),
		C && (t = R);
}
function Ae(l, e, a, u, v, _, t) {
	var y, V, Y, q;
	var o = (v & de) !== 0,
		T = (v & (k | L)) !== 0,
		h = l.length,
		d = e.items,
		w = e.first,
		i = w,
		s,
		r = null,
		I,
		E = [],
		p = [],
		A,
		c,
		n,
		f;
	if (o)
		for (f = 0; f < h; f += 1)
			(A = l[f]),
				(c = _(A, f)),
				(n = d.get(c)),
				n !== void 0 && ((y = n.a) == null || y.measure(), (I ?? (I = new Set())).add(n));
	for (f = 0; f < h; f += 1) {
		if (((A = l[f]), (c = _(A, f)), (n = d.get(c)), n === void 0)) {
			var $ = i ? i.e.nodes_start : a;
			(r = z($, e, r, r === null ? e.first : r.next, A, c, f, u, v, t)),
				d.set(c, r),
				(E = []),
				(p = []),
				(i = r.next);
			continue;
		}
		if (
			(T && Ie(n, A, f, v),
			n.e.f & b &&
				(Q(n.e), o && ((V = n.a) == null || V.unfix(), (I ?? (I = new Set())).delete(n))),
			n !== i)
		) {
			if (s !== void 0 && s.has(n)) {
				if (E.length < p.length) {
					var S = p[0],
						m;
					r = S.prev;
					var O = E[0],
						g = E[E.length - 1];
					for (m = 0; m < E.length; m += 1) K(E[m], S, a);
					for (m = 0; m < p.length; m += 1) s.delete(p[m]);
					x(e, O.prev, g.next),
						x(e, r, O),
						x(e, g, S),
						(i = S),
						(r = g),
						(f -= 1),
						(E = []),
						(p = []);
				} else
					s.delete(n),
						K(n, i, a),
						x(e, n.prev, n.next),
						x(e, n, r === null ? e.first : r.next),
						x(e, r, n),
						(r = n);
				continue;
			}
			for (E = [], p = []; i !== null && i.k !== c; )
				i.e.f & b || (s ?? (s = new Set())).add(i), p.push(i), (i = i.next);
			if (i === null) continue;
			n = i;
		}
		E.push(n), (r = n), (i = n.next);
	}
	if (i !== null || s !== void 0) {
		for (var N = s === void 0 ? [] : Z(s); i !== null; ) i.e.f & b || N.push(i), (i = i.next);
		var D = N.length;
		if (D > 0) {
			var j = v & P && h === 0 ? a : null;
			if (o) {
				for (f = 0; f < D; f += 1) (Y = N[f].a) == null || Y.measure();
				for (f = 0; f < D; f += 1) (q = N[f].a) == null || q.fix();
			}
			Te(e, N, j, d);
		}
	}
	o &&
		ue(() => {
			var B;
			if (I !== void 0) for (n of I) (B = n.a) == null || B.apply();
		}),
		(F.first = e.first && e.first.e),
		(F.last = r && r.e);
}
function Ie(l, e, a, u) {
	u & k && G(l.v, e), u & L ? G(l.i, a) : (l.i = a);
}
function z(l, e, a, u, v, _, t, o, T, h) {
	var d = (T & k) !== 0,
		w = (T & Ee) === 0,
		i = d ? (w ? te(v) : J(v)) : v,
		s = T & L ? J(t) : t,
		r = { i: s, v: i, k: _, a: null, e: null, prev: a, next: u };
	try {
		return (
			(r.e = W(() => o(l, i, s, h), C)),
			(r.e.prev = a && a.e),
			(r.e.next = u && u.e),
			a === null ? (e.first = r) : ((a.next = r), (a.e.next = r.e)),
			u !== null && ((u.prev = r), (u.e.prev = r.e)),
			r
		);
	} finally {
	}
}
function K(l, e, a) {
	for (
		var u = l.next ? l.next.e.nodes_start : a, v = e ? e.e.nodes_start : a, _ = l.e.nodes_start;
		_ !== u;

	) {
		var t = pe(_);
		v.before(_), (_ = t);
	}
}
function x(l, e, a) {
	e === null ? (l.first = a) : ((e.next = a), (e.e.next = a && a.e)),
		a !== null && ((a.prev = e), (a.e.prev = e && e.e));
}
export { Ce as e, xe as i };
