import './Bg9kRutz.js';
import { p as b, f as i, a as h, t as x, N as y, x as _ } from './DQMf8gWK.js';
import { e as f, a as d } from './BGOrq1ZG.js';
import { s as N } from './D3E8oDJG.js';
import { e as V } from './DcIEMM9l.js';
import { s as A } from './DvbRtjlS.js';
import { p as c, b as B, r as E } from './DjKtoK8y.js';
import { c as P, a as S } from './DWr6XhLj.js';
const C = P({
	base: 'focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-primary/80 border-transparent',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent',
			destructive:
				'bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent',
			outline: 'text-foreground'
		}
	},
	defaultVariants: { variant: 'default' }
});
function w(u, r) {
	b(r, !0);
	let t = c(r, 'ref', 15, null),
		l = c(r, 'variant', 3, 'default'),
		m = E(r, ['$$slots', '$$events', '$$legacy', 'ref', 'href', 'class', 'variant', 'children']);
	var s = f(),
		p = i(s);
	V(
		p,
		() => (r.href ? 'a' : 'span'),
		!1,
		(e, g) => {
			B(
				e,
				(a) => t(a),
				() => t()
			);
			let n;
			x(
				(a) =>
					(n = A(
						e,
						n,
						{ href: r.href, class: a, ...m },
						void 0,
						e.namespaceURI === y,
						e.nodeName.includes('-')
					)),
				[() => S(C({ variant: l() }), r.class)]
			);
			var o = f(),
				v = i(o);
			N(v, () => r.children ?? _), d(g, o);
		}
	),
		d(u, s),
		h();
}
export { w as B };
