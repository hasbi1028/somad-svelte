import {
	i as G,
	j as R,
	k as M,
	E as Z,
	Y as z,
	Z as F,
	v as $,
	_ as N,
	a0 as q,
	l as Y,
	C as g,
	U as H,
	m as J,
	ap as V,
	B as Q,
	A,
	a3 as W,
	S as O,
	J as m,
	aq as X,
	ar as k,
	h as y,
	d as ee,
	as as U,
	at as re,
	g as v,
	e as se,
	R as ne,
	G as ie,
	au as ae,
	av as C,
	aw as ue,
	ax as te,
	ay as B,
	az as b,
	aA as fe
} from './BHafZ7-g.js';
import { p as le } from './BMat-oFk.js';
import { c as ce } from './ByDptKy-.js';
import { l as oe } from './DIeogL5L.js';
function xe(e, r, n = !1) {
	R && M();
	var s = e,
		i = null,
		a = null,
		l = H,
		x = n ? Z : 0,
		o = !1;
	const c = (f, t = !0) => {
			(o = !0), S(t, f);
		},
		S = (f, t) => {
			if (l === (l = f)) return;
			let p = !1;
			if (R) {
				const h = s.data === z;
				!!l === h && ((s = F()), $(s), N(!1), (p = !0));
			}
			l
				? (i ? q(i) : t && (i = Y(() => t(s))),
					a &&
						g(a, () => {
							a = null;
						}))
				: (a ? q(a) : t && (a = Y(() => t(s))),
					i &&
						g(i, () => {
							i = null;
						})),
				p && N(!0);
		};
	G(() => {
		(o = !1), r(c), o || S(null, null);
	}, x),
		R && (s = J);
}
function K(e, r) {
	return e === r || (e == null ? void 0 : e[O]) === r;
}
function we(e = {}, r, n, s) {
	return (
		V(() => {
			var i, a;
			return (
				Q(() => {
					(i = a),
						(a = []),
						A(() => {
							e !== n(...a) && (r(e, ...a), i && K(n(...i), e) && r(null, ...i));
						});
				}),
				() => {
					W(() => {
						a && K(n(...a), e) && r(null, ...a);
					});
				}
			);
		}),
		e
	);
}
const pe = {
	get(e, r) {
		if (!e.exclude.includes(r)) return e.props[r];
	},
	set(e, r) {
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		if (!e.exclude.includes(r) && r in e.props)
			return { enumerable: !0, configurable: !0, value: e.props[r] };
	},
	has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
	}
};
function Ee(e, r, n) {
	return new Proxy({ props: e, exclude: r }, pe);
}
const de = {
	get(e, r) {
		if (!e.exclude.includes(r)) return v(e.version), r in e.special ? e.special[r]() : e.props[r];
	},
	set(e, r, n) {
		return (
			r in e.special ||
				(e.special[r] = ve(
					{
						get [r]() {
							return e.props[r];
						}
					},
					r,
					U
				)),
			e.special[r](n),
			B(e.version),
			!0
		);
	},
	getOwnPropertyDescriptor(e, r) {
		if (!e.exclude.includes(r) && r in e.props)
			return { enumerable: !0, configurable: !0, value: e.props[r] };
	},
	deleteProperty(e, r) {
		return e.exclude.includes(r) || (e.exclude.push(r), B(e.version)), !0;
	},
	has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
	}
};
function Ie(e, r) {
	return new Proxy({ props: e, exclude: r, special: {}, version: ie(0) }, de);
}
const _e = {
	get(e, r) {
		let n = e.props.length;
		for (; n--; ) {
			let s = e.props[n];
			if ((b(s) && (s = s()), typeof s == 'object' && s !== null && r in s)) return s[r];
		}
	},
	set(e, r, n) {
		let s = e.props.length;
		for (; s--; ) {
			let i = e.props[s];
			b(i) && (i = i());
			const a = m(i, r);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		let n = e.props.length;
		for (; n--; ) {
			let s = e.props[n];
			if ((b(s) && (s = s()), typeof s == 'object' && s !== null && r in s)) {
				const i = m(s, r);
				return i && !i.configurable && (i.configurable = !0), i;
			}
		}
	},
	has(e, r) {
		if (r === O || r === C) return !1;
		for (let n of e.props) if ((b(n) && (n = n()), n != null && r in n)) return !0;
		return !1;
	},
	ownKeys(e) {
		const r = [];
		for (let n of e.props) {
			b(n) && (n = n());
			for (const s in n) r.includes(s) || r.push(s);
		}
		return r;
	}
};
function Re(...e) {
	return new Proxy({ props: e }, _e);
}
function ve(e, r, n, s) {
	var L;
	var i = (n & te) !== 0,
		a = !oe || (n & ue) !== 0,
		l = (n & ae) !== 0,
		x = (n & fe) !== 0,
		o = !1,
		c;
	l ? ([c, o] = ce(() => e[r])) : (c = e[r]);
	var S = O in e || C in e,
		f =
			(l && (((L = m(e, r)) == null ? void 0 : L.set) ?? (S && r in e && ((u) => (e[r] = u))))) ||
			void 0,
		t = s,
		p = !0,
		h = !1,
		T = () => ((h = !0), p && ((p = !1), x ? (t = A(s)) : (t = s)), t);
	c === void 0 && s !== void 0 && (f && a && X(), (c = T()), f && f(c));
	var d;
	if (a)
		d = () => {
			var u = e[r];
			return u === void 0 ? T() : ((p = !0), (h = !1), u);
		};
	else {
		var D = (i ? y : ee)(() => e[r]);
		(D.f |= k),
			(d = () => {
				var u = v(D);
				return u !== void 0 && (t = void 0), u === void 0 ? t : u;
			});
	}
	if (!(n & U)) return d;
	if (f) {
		var j = e.$$legacy;
		return function (u, _) {
			return arguments.length > 0 ? ((!a || !_ || j || o) && f(_ ? d() : u), u) : d();
		};
	}
	var w = !1,
		E = ne(c),
		P = y(() => {
			var u = d(),
				_ = v(E);
			return w ? ((w = !1), _) : (E.v = u);
		});
	return (
		i || (P.equals = re),
		function (u, _) {
			if (arguments.length > 0) {
				const I = _ ? v(P) : a && l ? le(u) : u;
				return P.equals(I) || ((w = !0), se(E, I), h && t !== void 0 && (t = I), A(() => v(P))), u;
			}
			return v(P);
		}
	);
}
export { we as b, xe as i, Ie as l, ve as p, Ee as r, Re as s };
