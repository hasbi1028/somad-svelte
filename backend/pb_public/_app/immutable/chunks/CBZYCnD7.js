import {
	Q as d,
	ac as g,
	u as i,
	ad as l,
	A as m,
	ae as b,
	g as p,
	af as h,
	h as v
} from './BHafZ7-g.js';
function x(n = !1) {
	const s = d,
		e = s.l.u;
	if (!e) return;
	let o = () => h(s.s);
	if (n) {
		let a = 0,
			t = {};
		const _ = v(() => {
			let c = !1;
			const r = s.s;
			for (const f in r) r[f] !== t[f] && ((t[f] = r[f]), (c = !0));
			return c && a++, a;
		});
		o = () => p(_);
	}
	e.b.length &&
		g(() => {
			u(s, o), l(e.b);
		}),
		i(() => {
			const a = m(() => e.m.map(b));
			return () => {
				for (const t of a) typeof t == 'function' && t();
			};
		}),
		e.a.length &&
			i(() => {
				u(s, o), l(e.a);
			});
}
function u(n, s) {
	if (n.l.s) for (const e of n.l.s) p(e);
	s();
}
export { x as i };
