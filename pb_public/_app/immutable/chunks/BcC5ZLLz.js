import './Bg9kRutz.js';
import { p as c, a as m, f as d, v as f, w as g, n as p } from './DQMf8gWK.js';
import { t as u, a as v } from './BGOrq1ZG.js';
import { p as _, s as b, r as h } from './DjKtoK8y.js';
import { B as P, a as S } from './DWr6XhLj.js';
import { u as k } from './BVZZpjpa.js';
import { P as x } from './BQKSChen.js';
var y = u('<!> <span class="sr-only">Toggle Sidebar</span>', 1);
function C(r, a) {
	c(a, !0), _(a, 'ref', 11, null);
	let o = h(a, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'onclick']);
	const i = k(),
		n = g(() => S('h-7 w-7', a.class));
	P(
		r,
		b(
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
					x(l, {}), p(2), v(s, e);
				},
				$$slots: { default: !0 }
			}
		)
	),
		m();
}
export { C as S };
