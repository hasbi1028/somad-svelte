import './Bg9kRutz.js';
import { p as c, a as m, f as d, g as f, h as g, n as p } from './BHafZ7-g.js';
import { t as u, a as _ } from './D4wBL3Sd.js';
import { p as b, s as h, r as v } from './CjIAJ7VA.js';
import { B as P, a as S } from './Bsldq5z3.js';
import { u as k } from './CZSIPx2q.js';
import { P as x } from './DVMtRMN1.js';
var y = u('<!> <span class="sr-only">Toggle Sidebar</span>', 1);
function C(r, a) {
	c(a, !0), b(a, 'ref', 11, null);
	let o = v(a, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'onclick']);
	const i = k(),
		n = g(() => S('h-7 w-7', a.class));
	P(
		r,
		h(
			{
				type: 'button',
				onclick: (s) => {
					var t;
					(t = a.onclick) == null || t.call(a, s), i.toggle();
				},
				'data-sidebar': 'trigger',
				variant: 'ghost',
				size: 'icon',
				get class() {
					return f(n);
				}
			},
			() => o,
			{
				children: (s, t) => {
					var e = y(),
						l = d(e);
					x(l, {}), p(2), _(s, e);
				},
				$$slots: { default: !0 }
			}
		)
	),
		m();
}
export { C as S };
