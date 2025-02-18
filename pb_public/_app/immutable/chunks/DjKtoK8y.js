import {
	b as z,
	h as E,
	e as F,
	_ as j,
	C as G,
	D as Z,
	l as $,
	F as N,
	I as q,
	g,
	J as y,
	ab as H,
	i as J,
	as as V,
	A as Q,
	z as R,
	M as W,
	a7 as m,
	ac as T,
	at as X,
	au as k,
	w as B,
	d as ee,
	av as Y,
	aw as re,
	v,
	q as se,
	S as ne,
	T as ie,
	ax as ae,
	ay as M,
	az as ue,
	aA as te,
	aB as C,
	aC as b,
	aD as fe
} from './DQMf8gWK.js';
import { p as le } from './BJa4LW-r.js';
import { c as ce } from './BNBOt3lZ.js';
import { l as oe } from './DIeogL5L.js';
function we(e, r, n = !1) {
	E && F();
	var s = e,
		i = null,
		a = null,
		l = H,
		w = n ? j : 0,
		o = !1;
	const c = (f, t = !0) => {
			(o = !0), S(t, f);
		},
		S = (f, t) => {
			if (l === (l = f)) return;
			let p = !1;
			if (E) {
				const h = s.data === G;
				!!l === h && ((s = Z()), $(s), N(!1), (p = !0));
			}
			l
				? (i ? q(i) : t && (i = g(() => t(s))),
					a &&
						y(a, () => {
							a = null;
						}))
				: (a ? q(a) : t && (a = g(() => t(s))),
					i &&
						y(i, () => {
							i = null;
						})),
				p && N(!0);
		};
	z(() => {
		(o = !1), r(c), o || S(null, null);
	}, w),
		E && (s = J);
}
function K(e, r) {
	return e === r || (e == null ? void 0 : e[m]) === r;
}
function xe(e = {}, r, n, s) {
	return (
		V(() => {
			var i, a;
			return (
				Q(() => {
					(i = a),
						(a = []),
						R(() => {
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
function Ie(e, r, n) {
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
					Y
				)),
			e.special[r](n),
			C(e.version),
			!0
		);
	},
	getOwnPropertyDescriptor(e, r) {
		if (!e.exclude.includes(r) && r in e.props)
			return { enumerable: !0, configurable: !0, value: e.props[r] };
	},
	deleteProperty(e, r) {
		return e.exclude.includes(r) || (e.exclude.push(r), C(e.version)), !0;
	},
	has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
	}
};
function Ae(e, r) {
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
			const a = T(i, r);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		let n = e.props.length;
		for (; n--; ) {
			let s = e.props[n];
			if ((b(s) && (s = s()), typeof s == 'object' && s !== null && r in s)) {
				const i = T(s, r);
				return i && !i.configurable && (i.configurable = !0), i;
			}
		}
	},
	has(e, r) {
		if (r === m || r === M) return !1;
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
function Ee(...e) {
	return new Proxy({ props: e }, _e);
}
function ve(e, r, n, s) {
	var L;
	var i = (n & te) !== 0,
		a = !oe || (n & ue) !== 0,
		l = (n & ae) !== 0,
		w = (n & fe) !== 0,
		o = !1,
		c;
	l ? ([c, o] = ce(() => e[r])) : (c = e[r]);
	var S = m in e || M in e,
		f =
			(l && (((L = T(e, r)) == null ? void 0 : L.set) ?? (S && r in e && ((u) => (e[r] = u))))) ||
			void 0,
		t = s,
		p = !0,
		h = !1,
		D = () => ((h = !0), p && ((p = !1), w ? (t = R(s)) : (t = s)), t);
	c === void 0 && s !== void 0 && (f && a && X(), (c = D()), f && f(c));
	var d;
	if (a)
		d = () => {
			var u = e[r];
			return u === void 0 ? D() : ((p = !0), (h = !1), u);
		};
	else {
		var O = (i ? B : ee)(() => e[r]);
		(O.f |= k),
			(d = () => {
				var u = v(O);
				return u !== void 0 && (t = void 0), u === void 0 ? t : u;
			});
	}
	if (!(n & Y)) return d;
	if (f) {
		var U = e.$$legacy;
		return function (u, _) {
			return arguments.length > 0 ? ((!a || !_ || U || o) && f(_ ? d() : u), u) : d();
		};
	}
	var x = !1,
		I = ne(c),
		P = B(() => {
			var u = d(),
				_ = v(I);
			return x ? ((x = !1), _) : (I.v = u);
		});
	return (
		i || (P.equals = re),
		function (u, _) {
			if (arguments.length > 0) {
				const A = _ ? v(P) : a && l ? le(u) : u;
				return P.equals(A) || ((x = !0), se(I, A), h && t !== void 0 && (t = A), R(() => v(P))), u;
			}
			return v(P);
		}
	);
}
export { xe as b, we as i, Ae as l, ve as p, Ie as r, Ee as s };
