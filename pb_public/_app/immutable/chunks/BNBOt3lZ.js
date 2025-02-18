import { s as c, g as o } from './Czq1kdWV.js';
import { x as i, S as a, q as l, v as d, $ as p, a0 as _ } from './DQMf8gWK.js';
let s = !1,
	t = Symbol();
function y(e, u, r) {
	const n = r[u] ?? (r[u] = { store: null, source: a(void 0), unsubscribe: i });
	if (n.store !== e && !(t in r))
		if ((n.unsubscribe(), (n.store = e ?? null), e == null))
			(n.source.v = void 0), (n.unsubscribe = i);
		else {
			var f = !0;
			(n.unsubscribe = c(e, (b) => {
				f ? (n.source.v = b) : l(n.source, b);
			})),
				(f = !1);
		}
	return e && t in r ? o(e) : d(n.source);
}
function m(e, u, r) {
	let n = r[u];
	return n && n.store !== e && (n.unsubscribe(), (n.unsubscribe = i)), e;
}
function S(e, u) {
	return e.set(u), u;
}
function x() {
	const e = {};
	function u() {
		p(() => {
			for (var r in e) e[r].unsubscribe();
			_(e, t, { enumerable: !1, value: !0 });
		});
	}
	return [e, u];
}
function N(e) {
	var u = s;
	try {
		return (s = !1), [e(), s];
	} finally {
		s = u;
	}
}
export { x as a, S as b, N as c, m as d, y as s };
