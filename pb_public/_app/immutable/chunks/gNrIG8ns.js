import './Bg9kRutz.js';
import { p as u, f as p, a as b, v as n, w, c as x, x as y, r as P, t as k } from './DQMf8gWK.js';
import { e as l, a as s, t as V } from './BGOrq1ZG.js';
import { i as S, r as W } from './DjKtoK8y.js';
import { s as m } from './D3E8oDJG.js';
import { s as j } from './DvbRtjlS.js';
import { m as q } from './B7uXBihW.js';
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
			_ = (e) => {
				var a = z();
				let t;
				var g = x(a);
				m(g, () => r.children ?? y), P(a), k(() => (t = j(a, t, { ...n(o) }))), s(e, a);
			};
		S(h, (e) => {
			r.child ? e(v) : e(_, !1);
		});
	}
	s(d, i), b();
}
export { H as V };
