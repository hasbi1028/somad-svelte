import {
	m as d,
	ao as p,
	B as c,
	ap as h,
	aq as g,
	O as m,
	h as f,
	i as s,
	l as E,
	e as T
} from './DQMf8gWK.js';
function v(r) {
	var t = document.createElement('template');
	return (t.innerHTML = r), t.content;
}
function a(r, t) {
	var e = m;
	e.nodes_start === null && ((e.nodes_start = r), (e.nodes_end = t));
}
function y(r, t) {
	var e = (t & h) !== 0,
		_ = (t & g) !== 0,
		n,
		i = !r.startsWith('<!>');
	return () => {
		if (f) return a(s, null), s;
		n === void 0 && ((n = v(i ? r : '<!>' + r)), e || (n = d(n)));
		var o = _ || p ? document.importNode(n, !0) : n.cloneNode(!0);
		if (e) {
			var l = d(o),
				u = o.lastChild;
			a(l, u);
		} else a(o, o);
		return o;
	};
}
function M(r, t, e = 'svg') {
	var _ = !r.startsWith('<!>'),
		n = `<${e}>${_ ? r : '<!>' + r}</${e}>`,
		i;
	return () => {
		if (f) return a(s, null), s;
		if (!i) {
			var o = v(n),
				l = d(o);
			i = d(l);
		}
		var u = i.cloneNode(!0);
		return a(u, u), u;
	};
}
function N(r = '') {
	if (!f) {
		var t = c(r + '');
		return a(t, t), t;
	}
	var e = s;
	return e.nodeType !== 3 && (e.before((e = c())), E(e)), a(e, e), e;
}
function b() {
	if (f) return a(s, null), s;
	var r = document.createDocumentFragment(),
		t = document.createComment(''),
		e = c();
	return r.append(t, e), a(t, e), r;
}
function A(r, t) {
	if (f) {
		(m.nodes_end = s), T();
		return;
	}
	r !== null && r.before(t);
}
export { A as a, N as b, a as c, v as d, b as e, M as n, y as t };
