var $ = Object.defineProperty;
var N = (t) => {
	throw TypeError(t);
};
var ee = (t, e, s) =>
	e in t ? $(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[e] = s);
var u = (t, e, s) => ee(t, typeof e != 'symbol' ? e + '' : e, s),
	L = (t, e, s) => e.has(t) || N('Cannot ' + s);
var o = (t, e, s) => (L(t, e, 'read from private field'), s ? s.call(t) : e.get(t)),
	c = (t, e, s) =>
		e.has(t)
			? N('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(t)
				: e.set(t, s),
	B = (t, e, s, i) => (L(t, e, 'write to private field'), i ? i.call(t, s) : e.set(t, s), s);
import './Bg9kRutz.js';
import {
	aN as te,
	aO as se,
	w as g,
	v as d,
	u as ae,
	q as re,
	p as oe,
	f as v,
	a as ne,
	s as ie,
	c as ce,
	x as de,
	r as le,
	t as pe
} from './DQMf8gWK.js';
import { e as w, a as b, t as Y } from './BGOrq1ZG.js';
import { p as R, i as V, s as ue, b as be, r as he } from './DjKtoK8y.js';
import { s as W } from './D3E8oDJG.js';
import { c as K } from './D7_cnrTr.js';
import { s as fe } from './DvbRtjlS.js';
import { c as me, a as ve } from './DWr6XhLj.js';
import { T as ge, a as _e, R as xe } from './BRCSvknx.js';
import { p as Me } from './BJa4LW-r.js';
import { o as Se } from './BTRVP7y_.js';
import { d as Oe, m as Ie } from './B7uXBihW.js';
var _, x;
class Ee {
	constructor(e, s) {
		c(this, _);
		c(this, x);
		B(this, _, e), B(this, x, Oe(s));
	}
	get current() {
		return o(this, x).call(this), o(this, _).call(this);
	}
}
(_ = new WeakMap()), (x = new WeakMap());
const Ae = /\(.+\)/;
class Be extends Ee {
	constructor(e, s) {
		let i = Ae.test(e) ? e : `(${e})`;
		const S = window.matchMedia(i);
		super(
			() => S.matches,
			(O) => Se(S, 'change', O)
		);
	}
}
const we = 768;
class Re extends Be {
	constructor() {
		super(`max-width: ${we - 1}px`);
	}
}
const Fe = 'sidebar:state',
	Je = 60 * 60 * 24 * 7,
	Ze = '16rem',
	$e = '18rem',
	et = '3rem',
	Ce = 'b';
var C, M, h, D;
class De {
	constructor(e) {
		u(this, 'props');
		c(
			this,
			C,
			g(() => this.props.open())
		);
		c(this, M, ae(!1));
		u(this, 'setOpen');
		c(this, h);
		c(
			this,
			D,
			g(() => (this.open ? 'expanded' : 'collapsed'))
		);
		u(this, 'handleShortcutKeydown', (e) => {
			e.key === Ce && (e.metaKey || e.ctrlKey) && (e.preventDefault(), this.toggle());
		});
		u(this, 'setOpenMobile', (e) => {
			this.openMobile = e;
		});
		u(this, 'toggle', () =>
			o(this, h).current ? (this.openMobile = !this.openMobile) : this.setOpen(!this.open)
		);
		(this.setOpen = e.setOpen), B(this, h, new Re()), (this.props = e);
	}
	get open() {
		return d(o(this, C));
	}
	get openMobile() {
		return d(o(this, M));
	}
	set openMobile(e) {
		re(o(this, M), Me(e));
	}
	get state() {
		return d(o(this, D));
	}
	get isMobile() {
		return o(this, h).current;
	}
}
(C = new WeakMap()), (M = new WeakMap()), (h = new WeakMap()), (D = new WeakMap());
const q = 'scn-sidebar';
function tt(t) {
	return se(Symbol.for(q), new De(t));
}
function ye() {
	return te(Symbol.for(q));
}
const ze = me({
	base: 'peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
	variants: {
		variant: {
			default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
			outline:
				'bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]'
		},
		size: {
			default: 'h-8 text-sm',
			sm: 'h-7 text-xs',
			lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0'
		}
	},
	defaultVariants: { variant: 'default', size: 'default' }
});
var Te = Y('<button><!></button>'),
	Ke = Y('<!> <!>', 1);
function st(t, e) {
	oe(e, !0);
	const s = (n, l) => {
		let y = () => (l == null ? void 0 : l().props);
		var I = w();
		const E = g(() => Ie(d(U), y()));
		var z = v(I);
		{
			var H = (r) => {
					var a = w(),
						p = v(a);
					W(
						p,
						() => e.child,
						() => ({ props: d(E) })
					),
						b(r, a);
				},
				A = (r) => {
					var a = Te();
					let p;
					var f = ce(a);
					W(f, () => e.children ?? de),
						le(a),
						be(
							a,
							(m) => i(m),
							() => i()
						),
						pe(() => (p = fe(a, p, { ...d(E) }))),
						b(r, a);
				};
			V(z, (r) => {
				e.child ? r(H) : r(A, !1);
			});
		}
		b(n, I);
	};
	let i = R(e, 'ref', 15, null),
		S = R(e, 'variant', 3, 'default'),
		O = R(e, 'size', 3, 'default'),
		G = R(e, 'isActive', 3, !1),
		Q = he(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'ref',
			'class',
			'children',
			'child',
			'variant',
			'size',
			'isActive',
			'tooltipContent',
			'tooltipContentProps'
		]);
	const P = ye(),
		U = g(() => ({
			class: ve(ze({ variant: S(), size: O() }), e.class),
			'data-sidebar': 'menu-button',
			'data-size': O(),
			'data-active': G(),
			...Q
		}));
	var k = w(),
		X = v(k);
	{
		var j = (n) => {
				s(n, () => ({}));
			},
			F = (n) => {
				var l = w(),
					y = v(l);
				K(
					y,
					() => xe,
					(I, E) => {
						E(I, {
							children: (z, H) => {
								var A = Ke(),
									r = v(A);
								K(
									r,
									() => ge,
									(f, m) => {
										m(f, {
											child: (J, T) => {
												let Z = () => (T == null ? void 0 : T().props);
												s(J, () => ({ props: Z() }));
											},
											$$slots: { child: !0 }
										});
									}
								);
								var a = ie(r, 2);
								const p = g(() => P.state !== 'collapsed' || P.isMobile);
								K(
									a,
									() => _e,
									(f, m) => {
										m(
											f,
											ue(
												{
													side: 'right',
													align: 'center',
													get hidden() {
														return d(p);
													},
													get children() {
														return e.tooltipContent;
													}
												},
												() => e.tooltipContentProps
											)
										);
									}
								),
									b(z, A);
							},
							$$slots: { default: !0 }
						});
					}
				),
					b(n, l);
			};
		V(X, (n) => {
			e.tooltipContent ? n(F, !1) : n(j);
		});
	}
	b(t, k), ne();
}
export { Be as M, st as S, Fe as a, Je as b, Ze as c, et as d, $e as e, tt as s, ye as u };
