import {
	a1 as d,
	a2 as g,
	a3 as i,
	a4 as l,
	z as m,
	a5 as v,
	v as p,
	a6 as b,
	w as h
} from './DQMf8gWK.js';
function x(n = !1) {
	const s = d,
		e = s.l.u;
	if (!e) return;
	let f = () => b(s.s);
	if (n) {
		let a = 0,
			t = {};
		const _ = h(() => {
			let c = !1;
			const r = s.s;
			for (const o in r) r[o] !== t[o] && ((t[o] = r[o]), (c = !0));
			return c && a++, a;
		});
		f = () => p(_);
	}
	e.b.length &&
		g(() => {
			u(s, f), l(e.b);
		}),
		i(() => {
			const a = m(() => e.m.map(v));
			return () => {
				for (const t of a) typeof t == 'function' && t();
			};
		}),
		e.a.length &&
			i(() => {
				u(s, f), l(e.a);
			});
}
function u(n, s) {
	if (n.l.s) for (const e of n.l.s) p(e);
	s();
}
export { x as i };
