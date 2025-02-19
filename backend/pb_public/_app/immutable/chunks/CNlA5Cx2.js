import {
	W as ee,
	i as ae,
	X as $,
	v as b,
	j as C,
	w as re,
	k as ne,
	g as B,
	d as ie,
	Y as fe,
	Z as G,
	_ as k,
	m as R,
	$ as le,
	a0 as z,
	l as F,
	C as se,
	a1 as D,
	a2 as J,
	a3 as ue,
	K,
	a4 as M,
	a5 as U,
	a6 as O,
	R as te,
	G as W,
	O as ve,
	a7 as de,
	a8 as _e,
	a9 as oe,
	aa as ce,
	x as he,
	ab as Ee,
	o as pe
} from './BHafZ7-g.js';
function me(l, e) {
	return e;
}
function Ae(l, e, a, u) {
	for (var v = [], _ = e.length, t = 0; t < _; t++) _e(e[t].e, v, !0);
	var o = _ > 0 && v.length === 0 && a !== null;
	if (o) {
		var A = a.parentNode;
		oe(A), A.append(a), u.clear(), m(l, e[0].prev, e[_ - 1].next);
	}
	ce(v, () => {
		for (var h = 0; h < _; h++) {
			var d = e[h];
			o || (u.delete(d.k), m(l, d.prev, d.next)), he(d.e, !o);
		}
	});
}
function Ce(l, e, a, u, v, _ = null) {
	var t = l,
		o = { flags: e, items: new Map(), first: null },
		A = (e & $) !== 0;
	if (A) {
		var h = l;
		t = C ? b(re(h)) : h.appendChild(ee());
	}
	C && ne();
	var d = null,
		w = !1,
		i = ie(() => {
			var s = a();
			return ve(s) ? s : s == null ? [] : J(s);
		});
	ae(() => {
		var s = B(i),
			r = s.length;
		if (w && r === 0) return;
		w = r === 0;
		let x = !1;
		if (C) {
			var E = t.data === fe;
			E !== (r === 0) && ((t = G()), b(t), k(!1), (x = !0));
		}
		if (C) {
			for (var p = null, T, c = 0; c < r; c++) {
				if (R.nodeType === 8 && R.data === le) {
					(t = R), (x = !0), k(!1);
					break;
				}
				var n = s[c],
					f = u(n, c);
				(T = P(R, o, p, null, n, f, c, v, e, a)), o.items.set(f, T), (p = T);
			}
			r > 0 && b(G());
		}
		C || Te(s, o, t, v, e, u, a),
			_ !== null &&
				(r === 0
					? d
						? z(d)
						: (d = F(() => _(t)))
					: d !== null &&
						se(d, () => {
							d = null;
						})),
			x && k(!0),
			B(i);
	}),
		C && (t = R);
}
function Te(l, e, a, u, v, _, t) {
	var L, Y, q, V;
	var o = (v & de) !== 0,
		A = (v & (M | O)) !== 0,
		h = l.length,
		d = e.items,
		w = e.first,
		i = w,
		s,
		r = null,
		x,
		E = [],
		p = [],
		T,
		c,
		n,
		f;
	if (o)
		for (f = 0; f < h; f += 1)
			(T = l[f]),
				(c = _(T, f)),
				(n = d.get(c)),
				n !== void 0 && ((L = n.a) == null || L.measure(), (x ?? (x = new Set())).add(n));
	for (f = 0; f < h; f += 1) {
		if (((T = l[f]), (c = _(T, f)), (n = d.get(c)), n === void 0)) {
			var Q = i ? i.e.nodes_start : a;
			(r = P(Q, e, r, r === null ? e.first : r.next, T, c, f, u, v, t)),
				d.set(c, r),
				(E = []),
				(p = []),
				(i = r.next);
			continue;
		}
		if (
			(A && xe(n, T, f, v),
			n.e.f & D &&
				(z(n.e), o && ((Y = n.a) == null || Y.unfix(), (x ?? (x = new Set())).delete(n))),
			n !== i)
		) {
			if (s !== void 0 && s.has(n)) {
				if (E.length < p.length) {
					var g = p[0],
						I;
					r = g.prev;
					var y = E[0],
						H = E[E.length - 1];
					for (I = 0; I < E.length; I += 1) Z(E[I], g, a);
					for (I = 0; I < p.length; I += 1) s.delete(p[I]);
					m(e, y.prev, H.next),
						m(e, r, y),
						m(e, H, g),
						(i = g),
						(r = H),
						(f -= 1),
						(E = []),
						(p = []);
				} else
					s.delete(n),
						Z(n, i, a),
						m(e, n.prev, n.next),
						m(e, n, r === null ? e.first : r.next),
						m(e, r, n),
						(r = n);
				continue;
			}
			for (E = [], p = []; i !== null && i.k !== c; )
				i.e.f & D || (s ?? (s = new Set())).add(i), p.push(i), (i = i.next);
			if (i === null) continue;
			n = i;
		}
		E.push(n), (r = n), (i = n.next);
	}
	if (i !== null || s !== void 0) {
		for (var N = s === void 0 ? [] : J(s); i !== null; ) i.e.f & D || N.push(i), (i = i.next);
		var S = N.length;
		if (S > 0) {
			var j = v & $ && h === 0 ? a : null;
			if (o) {
				for (f = 0; f < S; f += 1) (q = N[f].a) == null || q.measure();
				for (f = 0; f < S; f += 1) (V = N[f].a) == null || V.fix();
			}
			Ae(e, N, j, d);
		}
	}
	o &&
		ue(() => {
			var X;
			if (x !== void 0) for (n of x) (X = n.a) == null || X.apply();
		}),
		(K.first = e.first && e.first.e),
		(K.last = r && r.e);
}
function xe(l, e, a, u) {
	u & M && U(l.v, e), u & O ? U(l.i, a) : (l.i = a);
}
function P(l, e, a, u, v, _, t, o, A, h) {
	var d = (A & M) !== 0,
		w = (A & Ee) === 0,
		i = d ? (w ? te(v) : W(v)) : v,
		s = A & O ? W(t) : t,
		r = { i: s, v: i, k: _, a: null, e: null, prev: a, next: u };
	try {
		return (
			(r.e = F(() => o(l, i, s, h), C)),
			(r.e.prev = a && a.e),
			(r.e.next = u && u.e),
			a === null ? (e.first = r) : ((a.next = r), (a.e.next = r.e)),
			u !== null && ((u.prev = r), (u.e.prev = r.e)),
			r
		);
	} finally {
	}
}
function Z(l, e, a) {
	for (
		var u = l.next ? l.next.e.nodes_start : a, v = e ? e.e.nodes_start : a, _ = l.e.nodes_start;
		_ !== u;

	) {
		var t = pe(_);
		v.before(_), (_ = t);
	}
}
function m(l, e, a) {
	e === null ? (l.first = a) : ((e.next = a), (e.e.next = a && a.e)),
		a !== null && ((a.prev = e), (a.e.prev = e && e.e));
}
export { Ce as e, me as i };
