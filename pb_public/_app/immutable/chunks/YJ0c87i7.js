import './Bg9kRutz.js';
import {
	p as u,
	f as p,
	a as b,
	g as n,
	h as w,
	c as y,
	y as x,
	r as P,
	t as k
} from './BHafZ7-g.js';
import { c as l, a as s, t as V } from './D4wBL3Sd.js';
import { i as S, r as W } from './CjIAJ7VA.js';
import { s as m } from './CiWmPosG.js';
import { a as j } from './eK_4uKAs.js';
import { m as q } from './iSg1OsVq.js';
var z = V('<span><!></span>');
function H(d, r) {
	u(r, !0);
	let c = W(r, ['$$slots', '$$events', '$$legacy', 'children', 'child']);
	const f = {
			position: 'absolute',
			border: 0,
			width: '1px',
			display: 'inline-block',
			height: '1px',
			padding: 0,
			margin: '-1px',
			overflow: 'hidden',
			clip: 'rect(0 0 0 0)',
			whiteSpace: 'nowrap',
			wordWrap: 'normal'
		},
		o = w(() => q(c, { style: f }));
	var i = l(),
		h = p(i);
	{
		var v = (e) => {
				var a = l(),
					t = p(a);
				m(
					t,
					() => r.child,
					() => ({ props: n(o) })
				),
					s(e, a);
			},
			g = (e) => {
				var a = z();
				let t;
				var _ = y(a);
				m(_, () => r.children ?? x), P(a), k(() => (t = j(a, t, { ...n(o) }))), s(e, a);
			};
		S(h, (e) => {
			r.child ? e(v) : e(g, !1);
		});
	}
	s(d, i), b();
}
export { H as V };
