var $ = Object.defineProperty;
var L = (t) => {
	throw TypeError(t);
};
var ee = (t, e, s) =>
	e in t ? $(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[e] = s);
var u = (t, e, s) => ee(t, typeof e != 'symbol' ? e + '' : e, s),
	N = (t, e, s) => e.has(t) || L('Cannot ' + s);
var o = (t, e, s) => (N(t, e, 'read from private field'), s ? s.call(t) : e.get(t)),
	c = (t, e, s) =>
		e.has(t)
			? L('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(t)
				: e.set(t, s),
	B = (t, e, s, i) => (N(t, e, 'write to private field'), i ? i.call(t, s) : e.set(t, s), s);
import './Bg9kRutz.js';
import {
	aH as te,
	aI as se,
	h as g,
	g as d,
	b as ae,
	e as re,
	p as oe,
	f as v,
	a as ne,
	s as ie,
	c as ce,
	y as de,
	r as le,
	t as pe
} from './BHafZ7-g.js';
import { v as ue, c as R, a as b, t as Y } from './D4wBL3Sd.js';
import { p as w, i as V, s as be, b as he, r as fe } from './CjIAJ7VA.js';
import { s as W } from './CiWmPosG.js';
import { c as K } from './D-TmFHfb.js';
import { a as me } from './eK_4uKAs.js';
import { c as ve, a as ge } from './Bsldq5z3.js';
import { T as _e, a as xe, R as Me } from './WCo3IhKC.js';
import { p as Se } from './BMat-oFk.js';
import { d as Ie, m as Oe } from './iSg1OsVq.js';
var _, x;
class Ee {
	constructor(e, s) {
		c(this, _);
		c(this, x);
		B(this, _, e), B(this, x, Ie(s));
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
			(I) => ue(S, 'change', I)
		);
	}
}
const Re = 768;
class we extends Be {
	constructor() {
		super(`max-width: ${Re - 1}px`);
	}
}
const qe = 'sidebar:state',
	Fe = 60 * 60 * 24 * 7,
	Je = '16rem',
	Ze = '18rem',
	$e = '3rem',
	ye = 'b';
var y, M, h, C;
class Ce {
	constructor(e) {
		u(this, 'props');
		c(
			this,
			y,
			g(() => this.props.open())
		);
		c(this, M, ae(!1));
		u(this, 'setOpen');
		c(this, h);
		c(
			this,
			C,
			g(() => (this.open ? 'expanded' : 'collapsed'))
		);
		u(this, 'handleShortcutKeydown', (e) => {
			e.key === ye && (e.metaKey || e.ctrlKey) && (e.preventDefault(), this.toggle());
		});
		u(this, 'setOpenMobile', (e) => {
			this.openMobile = e;
		});
		u(this, 'toggle', () =>
			o(this, h).current ? (this.openMobile = !this.openMobile) : this.setOpen(!this.open)
		);
		(this.setOpen = e.setOpen), B(this, h, new we()), (this.props = e);
	}
	get open() {
		return d(o(this, y));
	}
	get openMobile() {
		return d(o(this, M));
	}
	set openMobile(e) {
		re(o(this, M), Se(e));
	}
	get state() {
		return d(o(this, C));
	}
	get isMobile() {
		return o(this, h).current;
	}
}
(y = new WeakMap()), (M = new WeakMap()), (h = new WeakMap()), (C = new WeakMap());
const G = 'scn-sidebar';
function et(t) {
	return se(Symbol.for(G), new Ce(t));
}
function De() {
	return te(Symbol.for(G));
}
const ze = ve({
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
function tt(t, e) {
	oe(e, !0);
	const s = (n, l) => {
		let D = () => (l == null ? void 0 : l().props);
		var O = R();
		const E = g(() => Oe(d(X), D()));
		var z = v(O);
		{
			var H = (r) => {
					var a = R(),
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
						he(
							a,
							(m) => i(m),
							() => i()
						),
						pe(() => (p = me(a, p, { ...d(E) }))),
						b(r, a);
				};
			V(z, (r) => {
				e.child ? r(H) : r(A, !1);
			});
		}
		b(n, O);
	};
	let i = w(e, 'ref', 15, null),
		S = w(e, 'variant', 3, 'default'),
		I = w(e, 'size', 3, 'default'),
		Q = w(e, 'isActive', 3, !1),
		U = fe(e, [
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
	const P = De(),
		X = g(() => ({
			class: ge(ze({ variant: S(), size: I() }), e.class),
			'data-sidebar': 'menu-button',
			'data-size': I(),
			'data-active': Q(),
			...U
		}));
	var k = R(),
		j = v(k);
	{
		var q = (n) => {
				s(n, () => ({}));
			},
			F = (n) => {
				var l = R(),
					D = v(l);
				K(
					D,
					() => Me,
					(O, E) => {
						E(O, {
							children: (z, H) => {
								var A = Ke(),
									r = v(A);
								K(
									r,
									() => _e,
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
									() => xe,
									(f, m) => {
										m(
											f,
											be(
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
		V(j, (n) => {
			e.tooltipContent ? n(F, !1) : n(q);
		});
	}
	b(t, k), ne();
}
export { Be as M, tt as S, qe as a, Fe as b, Je as c, $e as d, Ze as e, et as s, De as u };
