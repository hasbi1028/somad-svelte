import { aB as B, M as I, j as y, _ as N, aC as M, aD as V } from './BHafZ7-g.js';
import { k as q, m as D, o as E, p as z, q as G, s as K, u as P } from './D4wBL3Sd.js';
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
function R() {
	for (var s, r, i = 0, a = '', u = arguments.length; i < u; i++)
		(s = arguments[i]) && (r = w(s)) && (a && (a += ' '), (a += r));
	return a;
}
function S(s) {
	return typeof s == 'object' ? R(s) : (s ?? '');
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
		(s.__on_r = i), V(i), P();
	}
}
function Y(s, r) {
	r ? s.hasAttribute('selected') || s.setAttribute('selected', '') : s.removeAttribute('selected');
}
function n(s, r, i, a) {
	var u = s.__attributes ?? (s.__attributes = {});
	(y &&
		((u[r] = s.getAttribute(r)),
		r === 'src' || r === 'srcset' || (r === 'href' && s.nodeName === 'LINK'))) ||
		(u[r] !== (u[r] = i) &&
			(r === 'style' && '__styles' in s && (s.__styles = {}),
			r === 'loading' && (s[B] = i),
			i == null
				? s.removeAttribute(r)
				: typeof i != 'string' && C(s).includes(r)
					? (s[r] = i)
					: s.setAttribute(r, i)));
}
function U(s, r, i, a, u = !1, _ = !1, F = !1) {
	let h = y && _;
	h && N(!1);
	var c = r || {},
		g = s.tagName === 'OPTION';
	for (var p in r) p in i || (i[p] = null);
	i.class && (i.class = S(i.class)), a !== void 0 && (i.class = i.class ? i.class + ' ' + a : a);
	var L = C(s),
		O = s.__attributes ?? (s.__attributes = {});
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
					var v = K(f);
					if ((q(f) && ((f = f.slice(0, -7)), (o.capture = !0)), !v && A)) {
						if (e != null) continue;
						s.removeEventListener(f, c[d], o), (c[d] = null);
					}
					if (e != null)
						if (v) (s[`__${f}`] = e), E([f]);
						else {
							let T = function (j) {
								c[t].call(this, j);
							};
							c[d] = D(f, s, T, o);
						}
					else v && (s[`__${f}`] = void 0);
				} else if (t === 'style' && e != null) s.style.cssText = e + '';
				else if (t === 'autofocus') z(s, !!e);
				else if (!_ && (t === '__value' || (t === 'value' && e != null))) s.value = s.__value = e;
				else if (t === 'selected' && g) Y(s, e);
				else {
					var l = t;
					u || (l = G(l));
					var b = l === 'defaultValue' || l === 'defaultChecked';
					if (e == null && !_ && !b)
						if (((O[t] = null), l === 'value' || l === 'checked')) {
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
						b || (L.includes(l) && (_ || typeof e != 'string'))
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
function C(s) {
	var r = $.get(s.nodeName);
	if (r) return r;
	$.set(s.nodeName, (r = []));
	for (var i, a = s, u = Element.prototype; u !== a; ) {
		i = M(a);
		for (var _ in i) i[_].set && r.push(_);
		a = I(a);
	}
	return r;
}
export { U as a, S as b, R as c, Q as r, n as s };
