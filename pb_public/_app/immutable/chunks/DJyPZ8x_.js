import './Bg9kRutz.js';
import './69_IOA4Y.js';
import {
	f as p,
	p as L,
	a as j,
	v as k,
	d as Q,
	c as q,
	x as H,
	r as V,
	t as R,
	w as z,
	s as T
} from './DQMf8gWK.js';
import { e as b, a as u, t as Z } from './BGOrq1ZG.js';
import { s as A } from './jIU1MAPh.js';
import { l as B, s as O, p as a, i as E, r as G } from './DjKtoK8y.js';
import { I as J } from './DcIEMM9l.js';
import { s as N } from './D3E8oDJG.js';
import { c as U } from './D7_cnrTr.js';
import { a as F } from './DWr6XhLj.js';
import { s as W } from './DvbRtjlS.js';
import { u as X, b as f, m as Y } from './B7uXBihW.js';
import { d as $ } from './KMVKlTlO.js';
import { n as I } from './B8S9RRQw.js';
import { M as ee } from './BJVriFMU.js';
import { C as te } from './YG4ye7e7.js';
function xe(l, e) {
	const i = B(e, ['children', '$$slots', '$$events', '$$legacy']);
	J(
		l,
		O({ name: 'file' }, () => i, {
			iconNode: [
				['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' }],
				['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4' }]
			],
			children: (d, _) => {
				var s = b(),
					h = p(s);
				A(h, e, 'default', {}, null), u(d, s);
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
			children: (d, _) => {
				var s = b(),
					h = p(s);
				A(h, e, 'default', {}, null), u(d, s);
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
		d = a(e, 'id', 19, X),
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
		id: f.with(() => d()),
		disabled: f.with(() => s()),
		onSelect: f.with(() => c),
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
	function c(t) {
		h()(t), !t.defaultPrevented && n.toggleChecked();
	}
	const C = z(() => Y(D, n.props));
	var S = b(),
		w = p(S);
	{
		var g = (t) => {
				var o = b(),
					v = p(o),
					r = Q(() => ({ props: k(C), ...n.snippetProps }));
				N(
					v,
					() => e.child,
					() => k(r)
				),
					u(t, o);
			},
			y = (t) => {
				var o = ne();
				let v;
				var r = q(o);
				N(
					r,
					() => e.children ?? H,
					() => n.snippetProps
				),
					V(o),
					R(() => (v = W(o, v, { ...k(C) }))),
					u(t, o);
			};
		E(w, (t) => {
			e.child ? t(g) : t(y, !1);
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
		d = a(e, 'indeterminate', 15, !1),
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
		h = p(s);
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
							return d();
						},
						set indeterminate(n) {
							d(n);
						},
						children: (n, c) => {
							let C = () => (c == null ? void 0 : c().checked),
								S = () => (c == null ? void 0 : c().indeterminate);
							var w = se(),
								g = p(w),
								y = q(g);
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
								E(y, (r) => {
									S() ? r(t) : r(o, !1);
								});
							}
							V(g);
							var v = T(g, 2);
							N(v, () => e.children ?? H), u(n, w);
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
