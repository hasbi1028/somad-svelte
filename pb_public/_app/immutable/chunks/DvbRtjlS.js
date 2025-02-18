import { aE as E, ae as I, h as y, F as N, aF as V, aG as B } from './DQMf8gWK.js';
import { c as F, d as G, f as M, g as q, n as z, j as D, k as K } from './BTRVP7y_.js';
function w(s) {
	var r,
		i,
		a = '';
	if (typeof s == 'string' || typeof s == 'number') a += s;
	else if (typeof s == 'object')
		if (Array.isArray(s)) {
			var u = s.length;
			for (r = 0; r < u; r++) s[r] && (i = w(s[r])) && (a && (a += ' '), (a += i));
		} else for (i in s) s[i] && (a && (a += ' '), (a += i));
	return a;
}
function P() {
	for (var s, r, i = 0, a = '', u = arguments.length; i < u; i++)
		(s = arguments[i]) && (r = w(s)) && (a && (a += ' '), (a += r));
	return a;
}
function R(s) {
	return typeof s == 'object' ? P(s) : (s ?? '');
}
function Q(s) {
	if (y) {
		var r = !1,
			i = () => {
				if (!r) {
					if (((r = !0), s.hasAttribute('value'))) {
						var a = s.value;
						n(s, 'value', null), (s.value = a);
					}
					if (s.hasAttribute('checked')) {
						var u = s.checked;
						n(s, 'checked', null), (s.checked = u);
					}
				}
			};
		(s.__on_r = i), B(i), K();
	}
}
function S(s, r) {
	r ? s.hasAttribute('selected') || s.setAttribute('selected', '') : s.removeAttribute('selected');
}
function n(s, r, i, a) {
	var u = s.__attributes ?? (s.__attributes = {});
	(y &&
		((u[r] = s.getAttribute(r)),
		r === 'src' || r === 'srcset' || (r === 'href' && s.nodeName === 'LINK'))) ||
		(u[r] !== (u[r] = i) &&
			(r === 'style' && '__styles' in s && (s.__styles = {}),
			r === 'loading' && (s[E] = i),
			i == null
				? s.removeAttribute(r)
				: typeof i != 'string' && L(s).includes(r)
					? (s[r] = i)
					: s.setAttribute(r, i)));
}
function U(s, r, i, a, u = !1, _ = !1, Y = !1) {
	let h = y && _;
	h && N(!1);
	var c = r || {},
		g = s.tagName === 'OPTION';
	for (var p in r) p in i || (i[p] = null);
	i.class && (i.class = R(i.class)), a !== void 0 && (i.class = i.class ? i.class + ' ' + a : a);
	var O = L(s),
		T = s.__attributes ?? (s.__attributes = {});
	for (const t in i) {
		let e = i[t];
		if (g && t === 'value' && e == null) {
			(s.value = s.__value = ''), (c[t] = e);
			continue;
		}
		var A = c[t];
		if (e !== A) {
			c[t] = e;
			var k = t[0] + t[1];
			if (k !== '$$') {
				if (k === 'on') {
					const o = {},
						d = '$$' + t;
					let f = t.slice(2);
					var v = D(f);
					if ((F(f) && ((f = f.slice(0, -7)), (o.capture = !0)), !v && A)) {
						if (e != null) continue;
						s.removeEventListener(f, c[d], o), (c[d] = null);
					}
					if (e != null)
						if (v) (s[`__${f}`] = e), M([f]);
						else {
							let j = function (C) {
								c[t].call(this, C);
							};
							c[d] = G(f, s, j, o);
						}
					else v && (s[`__${f}`] = void 0);
				} else if (t === 'style' && e != null) s.style.cssText = e + '';
				else if (t === 'autofocus') q(s, !!e);
				else if (!_ && (t === '__value' || (t === 'value' && e != null))) s.value = s.__value = e;
				else if (t === 'selected' && g) S(s, e);
				else {
					var l = t;
					u || (l = z(l));
					var b = l === 'defaultValue' || l === 'defaultChecked';
					if (e == null && !_ && !b)
						if (((T[t] = null), l === 'value' || l === 'checked')) {
							let o = s;
							const d = r === void 0;
							if (l === 'value') {
								let f = o.defaultValue;
								o.removeAttribute(l), (o.defaultValue = f), (o.value = o.__value = d ? f : null);
							} else {
								let f = o.defaultChecked;
								o.removeAttribute(l), (o.defaultChecked = f), (o.checked = d ? f : !1);
							}
						} else s.removeAttribute(t);
					else
						b || (O.includes(l) && (_ || typeof e != 'string'))
							? (s[l] = e)
							: typeof e != 'function' && n(s, l, e);
				}
				t === 'style' && '__styles' in s && (s.__styles = {});
			}
		}
	}
	return h && N(!0), c;
}
var $ = new Map();
function L(s) {
	var r = $.get(s.nodeName);
	if (r) return r;
	$.set(s.nodeName, (r = []));
	for (var i, a = s, u = Element.prototype; u !== a; ) {
		i = V(a);
		for (var _ in i) i[_].set && r.push(_);
		a = I(a);
	}
	return r;
}
export { n as a, R as b, P as c, Q as r, U as s };
