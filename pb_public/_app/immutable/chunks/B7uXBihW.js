var k = (t) => {
	throw TypeError(t);
};
var D = (t, e, r) => e.has(t) || k('Cannot ' + r);
var j = (t, e, r) => (D(t, e, 'read from private field'), r ? r.call(t) : e.get(t)),
	P = (t, e, r) =>
		e.has(t)
			? k('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(t)
				: e.set(t, r),
	W = (t, e, r, n) => (D(t, e, 'write to private field'), n ? n.call(t, r) : e.set(t, r), r);
import {
	q as Z,
	aW as ut,
	v as L,
	T as ct,
	A as at,
	z as J,
	aM as ft,
	u as lt,
	w as pt,
	a2 as dt,
	a3 as Q
} from './DQMf8gWK.js';
import { p as N } from './BJa4LW-r.js';
import { c as C } from './DvbRtjlS.js';
import { g as ht } from './CqkleIqs.js';
import { o as q } from './BTRVP7y_.js';
function bt(t) {
	Z(t, t.v + 1);
}
function mt(t) {
	let e = 0,
		r = ct(0),
		n;
	return () => {
		ut() &&
			(L(r),
			at(
				() => (
					e === 0 && (n = J(() => t(() => bt(r)))),
					(e += 1),
					() => {
						ft().then(() => {
							(e -= 1), e === 0 && (n == null || n(), (n = void 0));
						});
					}
				)
			));
	};
}
function yt(t) {
	return typeof t == 'function';
}
function Et(t) {
	return t !== null && typeof t == 'object';
}
const vt = ['string', 'number', 'bigint', 'boolean'];
function R(t) {
	return t == null || vt.includes(typeof t)
		? !0
		: Array.isArray(t)
			? t.every((e) => R(e))
			: typeof t == 'object'
				? Object.getPrototypeOf(t) === Object.prototype
				: !1;
}
const I = Symbol('box'),
	M = Symbol('is-writable');
function gt(t) {
	return Et(t) && I in t;
}
function wt(t) {
	return h.isBox(t) && M in t;
}
function h(t) {
	let e = lt(N(t));
	return {
		[I]: !0,
		[M]: !0,
		get current() {
			return L(e);
		},
		set current(r) {
			Z(e, N(r));
		}
	};
}
function St(t, e) {
	const r = pt(t);
	return e
		? {
				[I]: !0,
				[M]: !0,
				get current() {
					return L(r);
				},
				set current(n) {
					e(n);
				}
			}
		: {
				[I]: !0,
				get current() {
					return t();
				}
			};
}
function _t(t) {
	return h.isBox(t) ? t : yt(t) ? h.with(t) : h(t);
}
function xt(t) {
	return Object.entries(t).reduce(
		(e, [r, n]) =>
			h.isBox(n)
				? (h.isWritableBox(n)
						? Object.defineProperty(e, r, {
								get() {
									return n.current;
								},
								set(i) {
									n.current = i;
								}
							})
						: Object.defineProperty(e, r, {
								get() {
									return n.current;
								}
							}),
					e)
				: Object.assign(e, { [r]: n }),
		{}
	);
}
function It(t) {
	return h.isWritableBox(t)
		? {
				[I]: !0,
				get current() {
					return t.current;
				}
			}
		: t;
}
h.from = _t;
h.with = St;
h.flatten = xt;
h.readonly = It;
h.isBox = gt;
h.isWritableBox = wt;
function At(...t) {
	return function (e) {
		var r;
		for (const n of t)
			if (n) {
				if (e.defaultPrevented) return;
				typeof n == 'function' ? n.call(this, e) : (r = n.current) == null || r.call(this, e);
			}
	};
}
var g = {},
	B,
	Y;
function Tt() {
	if (Y) return B;
	Y = 1;
	var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
		e = /\n/g,
		r = /^\s*/,
		n = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
		i = /^:\s*/,
		o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
		u = /^[;\s]*/,
		a = /^\s+|\s+$/g,
		d = `
`,
		l = '/',
		p = '*',
		b = '',
		S = 'comment',
		E = 'declaration';
	B = function (f, v) {
		if (typeof f != 'string') throw new TypeError('First argument must be a string');
		if (!f) return [];
		v = v || {};
		var _ = 1,
			y = 1;
		function F(c) {
			var s = c.match(e);
			s && (_ += s.length);
			var m = c.lastIndexOf(d);
			y = ~m ? c.length - m : y + c.length;
		}
		function G() {
			var c = { line: _, column: y };
			return function (s) {
				return (s.position = new X(c)), H(), s;
			};
		}
		function X(c) {
			(this.start = c), (this.end = { line: _, column: y }), (this.source = v.source);
		}
		X.prototype.content = f;
		function $(c) {
			var s = new Error(v.source + ':' + _ + ':' + y + ': ' + c);
			if (
				((s.reason = c),
				(s.filename = v.source),
				(s.line = _),
				(s.column = y),
				(s.source = f),
				!v.silent)
			)
				throw s;
		}
		function x(c) {
			var s = c.exec(f);
			if (s) {
				var m = s[0];
				return F(m), (f = f.slice(m.length)), s;
			}
		}
		function H() {
			x(r);
		}
		function U(c) {
			var s;
			for (c = c || []; (s = V()); ) s !== !1 && c.push(s);
			return c;
		}
		function V() {
			var c = G();
			if (!(l != f.charAt(0) || p != f.charAt(1))) {
				for (var s = 2; b != f.charAt(s) && (p != f.charAt(s) || l != f.charAt(s + 1)); ) ++s;
				if (((s += 2), b === f.charAt(s - 1))) return $('End of comment missing');
				var m = f.slice(2, s - 2);
				return (y += 2), F(m), (f = f.slice(s)), (y += 2), c({ type: S, comment: m });
			}
		}
		function it() {
			var c = G(),
				s = x(n);
			if (s) {
				if ((V(), !x(i))) return $("property missing ':'");
				var m = x(o),
					st = c({
						type: E,
						property: T(s[0].replace(t, b)),
						value: m ? T(m[0].replace(t, b)) : b
					});
				return x(u), st;
			}
		}
		function ot() {
			var c = [];
			U(c);
			for (var s; (s = it()); ) s !== !1 && (c.push(s), U(c));
			return c;
		}
		return H(), ot();
	};
	function T(f) {
		return f ? f.replace(a, b) : b;
	}
	return B;
}
var z;
function jt() {
	if (z) return g;
	z = 1;
	var t =
		(g && g.__importDefault) ||
		function (n) {
			return n && n.__esModule ? n : { default: n };
		};
	Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = r);
	var e = t(Tt());
	function r(n, i) {
		var o = null;
		if (!n || typeof n != 'string') return o;
		var u = (0, e.default)(n),
			a = typeof i == 'function';
		return (
			u.forEach(function (d) {
				if (d.type === 'declaration') {
					var l = d.property,
						p = d.value;
					a ? i(l, p, d) : p && ((o = o || {}), (o[l] = p));
				}
			}),
			o
		);
	}
	return g;
}
var Ot = jt();
const K = ht(Ot),
	Pt = K.default || K,
	Wt = /\d/,
	Ct = ['-', '_', '/', '.'];
function Bt(t = '') {
	if (!Wt.test(t)) return t !== t.toLowerCase();
}
function Rt(t) {
	const e = [];
	let r = '',
		n,
		i;
	for (const o of t) {
		const u = Ct.includes(o);
		if (u === !0) {
			e.push(r), (r = ''), (n = void 0);
			continue;
		}
		const a = Bt(o);
		if (i === !1) {
			if (n === !1 && a === !0) {
				e.push(r), (r = o), (n = a);
				continue;
			}
			if (n === !0 && a === !1 && r.length > 1) {
				const d = r.at(-1);
				e.push(r.slice(0, Math.max(0, r.length - 1))), (r = d + o), (n = a);
				continue;
			}
		}
		(r += o), (n = a), (i = u);
	}
	return e.push(r), e;
}
function tt(t) {
	return t
		? Rt(t)
				.map((e) => Mt(e))
				.join('')
		: '';
}
function Lt(t) {
	return Ft(tt(t || ''));
}
function Mt(t) {
	return t ? t[0].toUpperCase() + t.slice(1) : '';
}
function Ft(t) {
	return t ? t[0].toLowerCase() + t.slice(1) : '';
}
function O(t) {
	if (!t) return {};
	const e = {};
	function r(n, i) {
		if (
			n.startsWith('-moz-') ||
			n.startsWith('-webkit-') ||
			n.startsWith('-ms-') ||
			n.startsWith('-o-')
		) {
			e[tt(n)] = i;
			return;
		}
		if (n.startsWith('--')) {
			e[n] = i;
			return;
		}
		e[Lt(n)] = i;
	}
	return Pt(t, r), e;
}
function Gt(...t) {
	return (...e) => {
		for (const r of t) typeof r == 'function' && r(...e);
	};
}
function Xt(t, e) {
	const r = RegExp(t, 'g');
	return (n) => {
		if (typeof n != 'string')
			throw new TypeError(`expected an argument of type string, but got ${typeof n}`);
		return n.match(r) ? n.replace(r, e) : n;
	};
}
const $t = Xt(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function Ht(t) {
	if (!t || typeof t != 'object' || Array.isArray(t))
		throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
	return Object.keys(t).map((e) => `${$t(e)}: ${t[e]};`).join(`
`);
}
function et(t = {}) {
	return Ht(t).replace(
		`
`,
		' '
	);
}
const Ut = {
	position: 'absolute',
	width: '1px',
	height: '1px',
	padding: '0',
	margin: '-1px',
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	borderWidth: '0',
	transform: 'translateX(-100%)'
};
et(Ut);
function Vt(t) {
	var e;
	return (
		t.length > 2 && t.startsWith('on') && t[2] === ((e = t[2]) == null ? void 0 : e.toLowerCase())
	);
}
function re(...t) {
	const e = { ...t[0] };
	for (let r = 1; r < t.length; r++) {
		const n = t[r];
		for (const i in n) {
			const o = e[i],
				u = n[i],
				a = typeof o == 'function',
				d = typeof u == 'function';
			if (a && Vt(i)) {
				const l = o,
					p = u;
				e[i] = At(l, p);
			} else if (a && d) e[i] = Gt(o, u);
			else if (i === 'class') {
				const l = R(o),
					p = R(u);
				l && p ? (e[i] = C(o, u)) : l ? (e[i] = C(o)) : p && (e[i] = C(u));
			} else if (i === 'style') {
				const l = typeof o == 'object',
					p = typeof u == 'object',
					b = typeof o == 'string',
					S = typeof u == 'string';
				if (l && p) e[i] = { ...o, ...u };
				else if (l && S) {
					const E = O(u);
					e[i] = { ...o, ...E };
				} else if (b && p) {
					const E = O(o);
					e[i] = { ...E, ...u };
				} else if (b && S) {
					const E = O(o),
						T = O(u);
					e[i] = { ...E, ...T };
				} else l ? (e[i] = o) : p ? (e[i] = u) : b ? (e[i] = o) : S && (e[i] = u);
			} else e[i] = u !== void 0 ? u : o;
		}
	}
	return (
		typeof e.style == 'object' &&
			(e.style = et(e.style).replaceAll(
				`
`,
				' '
			)),
		e.hidden !== !0 && ((e.hidden = void 0), delete e.hidden),
		e.disabled !== !0 && ((e.disabled = void 0), delete e.disabled),
		e
	);
}
const kt = typeof window < 'u' ? window : void 0;
function Dt(t) {
	let e = t.activeElement;
	for (; e != null && e.shadowRoot; ) {
		const r = e.shadowRoot.activeElement;
		if (r === e) break;
		e = r;
	}
	return e;
}
var w, A;
class Nt {
	constructor(e = {}) {
		P(this, w);
		P(this, A);
		const { window: r = kt, document: n = r == null ? void 0 : r.document } = e;
		r !== void 0 &&
			(W(this, w, n),
			W(
				this,
				A,
				mt((i) => {
					const o = q(r, 'focusin', i),
						u = q(r, 'focusout', i);
					return () => {
						o(), u();
					};
				})
			));
	}
	get current() {
		var e;
		return (e = j(this, A)) == null || e.call(this), j(this, w) ? Dt(j(this, w)) : null;
	}
}
(w = new WeakMap()), (A = new WeakMap());
new Nt();
function qt(t, e) {
	switch (t) {
		case 'post':
			Q(e);
			break;
		case 'pre':
			dt(e);
			break;
	}
}
function rt(t, e, r, n = {}) {
	const { lazy: i = !1 } = n;
	let o = !i,
		u = Array.isArray(t) ? [] : void 0;
	qt(e, () => {
		const a = Array.isArray(t) ? t.map((l) => l()) : t();
		if (!o) {
			(o = !0), (u = a);
			return;
		}
		const d = J(() => r(a, u));
		return (u = a), d;
	});
}
function nt(t, e, r) {
	rt(t, 'post', e, r);
}
function Yt(t, e, r) {
	rt(t, 'pre', e, r);
}
nt.pre = Yt;
function zt(t) {
	Q(() => () => {
		t();
	});
}
function ne({ id: t, ref: e, deps: r = () => !0, onRefChange: n, getRootNode: i }) {
	nt([() => t.current, r], ([o]) => {
		const u = (i == null ? void 0 : i()) ?? document,
			a = u == null ? void 0 : u.getElementById(o);
		a ? (e.current = a) : (e.current = null), n == null || n(e.current);
	}),
		zt(() => {
			(e.current = null), n == null || n(null);
		});
}
globalThis.bitsIdCounter ?? (globalThis.bitsIdCounter = { current: 0 });
function ie(t = 'bits') {
	return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
export {
	ne as a,
	h as b,
	Ut as c,
	mt as d,
	Gt as e,
	kt as f,
	At as g,
	O as h,
	bt as i,
	re as m,
	zt as o,
	et as s,
	ie as u,
	nt as w
};
