import { s as c, g as o } from './Dz4tvtyB.js';
import { y as i, R as a, e as l, g as d, T as p, V as _ } from './BHafZ7-g.js';
let s = !1,
	t = Symbol();
function v(e, u, r) {
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
function N(e, u) {
	return e.set(u), u;
}
function S() {
	const e = {};
	function u() {
		p(() => {
			for (var r in e) e[r].unsubscribe();
			_(e, t, { enumerable: !1, value: !0 });
		});
	}
	return [e, u];
}
function T(e) {
	var u = s;
	try {
		return (s = !1), [e(), s];
	} finally {
		s = u;
	}
}
export { S as a, N as b, T as c, m as d, v as s };
