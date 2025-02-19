import './Bg9kRutz.js';
import './69_IOA4Y.js';
import {
	f as v,
	p as L,
	a as j,
	g as k,
	d as Q,
	c as q,
	y as H,
	r as V,
	t as R,
	h as z,
	s as T
} from './BHafZ7-g.js';
import { c as b, a as u, t as Z } from './D4wBL3Sd.js';
import { s as A } from './BtEvizs7.js';
import { l as B, s as O, p as a, i as E, r as G } from './CjIAJ7VA.js';
import { I as J } from './DtoOq0pI.js';
import { s as N } from './CiWmPosG.js';
import { c as U } from './D-TmFHfb.js';
import { a as F } from './Bsldq5z3.js';
import { a as W } from './eK_4uKAs.js';
import { u as X, b as f, m as Y } from './iSg1OsVq.js';
import { b as $ } from './BOSOt6G1.js';
import { n as I } from './DvUo5-ap.js';
import { M as ee } from './CsBS4j6z.js';
import { C as te } from './CmjqrqP0.js';
function xe(l, e) {
	const i = B(e, ['children', '$$slots', '$$events', '$$legacy']);
	J(
		l,
		O({ name: 'file' }, () => i, {
			iconNode: [
				['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' }],
				['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4' }]
			],
			children: (c, _) => {
				var s = b(),
					h = v(s);
				A(h, e, 'default', {}, null), u(c, s);
			},
			$$slots: { default: !0 }
		})
	);
}
function Ce(l, e) {
	const i = B(e, ['children', '$$slots', '$$events', '$$legacy']);
	J(
		l,
		O({ name: 'list-filter' }, () => i, {
			iconNode: [
				['path', { d: 'M3 6h18' }],
				['path', { d: 'M7 12h10' }],
				['path', { d: 'M10 18h4' }]
			],
			children: (c, _) => {
				var s = b(),
					h = v(s);
				A(h, e, 'default', {}, null), u(c, s);
			},
			$$slots: { default: !0 }
		})
	);
}
var ne = Z('<div><!></div>');
function ae(l, e) {
	L(e, !0);
	let i = a(e, 'ref', 15, null),
		m = a(e, 'checked', 15, !1),
		c = a(e, 'id', 19, X),
		_ = a(e, 'onCheckedChange', 3, I),
		s = a(e, 'disabled', 3, !1),
		h = a(e, 'onSelect', 3, I),
		M = a(e, 'closeOnSelect', 3, !0),
		x = a(e, 'indeterminate', 15, !1),
		P = a(e, 'onIndeterminateChange', 3, I),
		D = G(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'child',
			'children',
			'ref',
			'checked',
			'id',
			'onCheckedChange',
			'disabled',
			'onSelect',
			'closeOnSelect',
			'indeterminate',
			'onIndeterminateChange'
		]);
	const n = $({
		checked: f.with(
			() => m(),
			(t) => {
				m(t), _()(t);
			}
		),
		id: f.with(() => c()),
		disabled: f.with(() => s()),
		onSelect: f.with(() => d),
		ref: f.with(
			() => i(),
			(t) => i(t)
		),
		closeOnSelect: f.with(() => M()),
		indeterminate: f.with(
			() => x(),
			(t) => {
				x(t), P()(t);
			}
		)
	});
	function d(t) {
		h()(t), !t.defaultPrevented && n.toggleChecked();
	}
	const C = z(() => Y(D, n.props));
	var S = b(),
		y = v(S);
	{
		var g = (t) => {
				var o = b(),
					p = v(o),
					r = Q(() => ({ props: k(C), ...n.snippetProps }));
				N(
					p,
					() => e.child,
					() => k(r)
				),
					u(t, o);
			},
			w = (t) => {
				var o = ne();
				let p;
				var r = q(o);
				N(
					r,
					() => e.children ?? H,
					() => n.snippetProps
				),
					V(o),
					R(() => (p = W(o, p, { ...k(C) }))),
					u(t, o);
			};
		E(y, (t) => {
			e.child ? t(g) : t(w, !1);
		});
	}
	u(l, S), j();
}
var se = Z(
	'<span class="absolute left-2 flex size-3.5 items-center justify-center"><!></span> <!>',
	1
);
function Se(l, e) {
	L(e, !0);
	let i = a(e, 'ref', 15, null),
		m = a(e, 'checked', 15, !1),
		c = a(e, 'indeterminate', 15, !1),
		_ = G(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'ref',
			'checked',
			'indeterminate',
			'class',
			'children'
		]);
	var s = b(),
		h = v(s);
	const M = z(() =>
		F(
			'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			e.class
		)
	);
	U(
		h,
		() => ae,
		(x, P) => {
			P(
				x,
				O(
					{
						get class() {
							return k(M);
						}
					},
					() => _,
					{
						get ref() {
							return i();
						},
						set ref(n) {
							i(n);
						},
						get checked() {
							return m();
						},
						set checked(n) {
							m(n);
						},
						get indeterminate() {
							return c();
						},
						set indeterminate(n) {
							c(n);
						},
						children: (n, d) => {
							let C = () => (d == null ? void 0 : d().checked),
								S = () => (d == null ? void 0 : d().indeterminate);
							var y = se(),
								g = v(y),
								w = q(g);
							{
								var t = (r) => {
										ee(r, { class: 'size-4' });
									},
									o = (r) => {
										const K = z(() => F('size-4', !C() && 'text-transparent'));
										te(r, {
											get class() {
												return k(K);
											}
										});
									};
								E(w, (r) => {
									S() ? r(t) : r(o, !1);
								});
							}
							V(g);
							var p = T(g, 2);
							N(p, () => e.children ?? H), u(n, y);
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		u(l, s),
		j();
}
export { Se as D, xe as F, Ce as L };
