import './Bg9kRutz.js';
import { p as v, c, x as u, r as f, t as m, a as g } from './DQMf8gWK.js';
import { t as p, a as b } from './BGOrq1ZG.js';
import { s as x } from './D3E8oDJG.js';
import { s as h } from './DvbRtjlS.js';
import { p as n, b as _, r as A } from './DjKtoK8y.js';
import { c as y, a as k } from './DWr6XhLj.js';
const P = y({
	base: '[&>svg]:text-foreground relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7',
	variants: {
		variant: {
			default: 'bg-background text-foreground',
			destructive:
				'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
		}
	},
	defaultVariants: { variant: 'default' }
});
var V = p('<div><!></div>');
function F(l, t) {
	v(t, !0);
	let a = n(t, 'ref', 15, null),
		d = n(t, 'variant', 3, 'default'),
		r = A(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'variant', 'children']);
	var e = V();
	let i;
	var s = c(e);
	x(s, () => t.children ?? u),
		f(e),
		_(
			e,
			(o) => a(o),
			() => a()
		),
		m(
			(o) => (i = h(e, i, { class: o, ...r, role: 'alert' })),
			[() => k(P({ variant: d() }), t.class)]
		),
		b(l, e),
		g();
}
var w = p('<div><!></div>');
function G(l, t) {
	v(t, !0);
	let a = n(t, 'ref', 15, null),
		d = A(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var r = w();
	let e;
	var i = c(r);
	x(i, () => t.children ?? u),
		f(r),
		_(
			r,
			(s) => a(s),
			() => a()
		),
		m(
			(s) => (e = h(r, e, { class: s, ...d })),
			[() => k('text-sm [&_p]:leading-relaxed', t.class)]
		),
		b(l, r),
		g();
}
export { G as A, F as a };
