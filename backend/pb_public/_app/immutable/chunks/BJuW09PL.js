import './Bg9kRutz.js';
import {
	p as O,
	c as u,
	y as m,
	r as b,
	t as y,
	a as E,
	f as R,
	g as J,
	h as $,
	aP as ee,
	s as ae
} from './BHafZ7-g.js';
import { t as p, a as d, c as B, e as te } from './D4wBL3Sd.js';
import { s as h } from './CiWmPosG.js';
import { a as S, s as N, b as re } from './eK_4uKAs.js';
import { p as f, b as P, r as D, i as X, s as ie } from './CjIAJ7VA.js';
import { a as _ } from './Bsldq5z3.js';
import { c as j } from './D-TmFHfb.js';
import { P as se } from './WCo3IhKC.js';
import { s as le, a as de, b as ne, c as oe, d as ce, u as ve, e as fe } from './CZSIPx2q.js';
import { s as ue } from './BpyTwlt-.js';
import { R as be } from './BvN8JEzU.js';
import { S as ge } from './DvUo5-ap.js';
var he = p('<div><!></div>');
function Ne(o, e) {
	O(e, !0);
	let r = f(e, 'ref', 15, null),
		s = D(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var a = he();
	let i;
	var l = u(a);
	h(l, () => e.children ?? m),
		b(a),
		P(
			a,
			(t) => r(t),
			() => r()
		),
		y(
			(t) => (i = S(a, i, { 'data-sidebar': 'content', class: t, ...s })),
			[
				() =>
					_(
						'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
						e.class
					)
			]
		),
		d(o, a),
		E();
}
var me = p('<div><!></div>');
function Ge(o, e) {
	O(e, !0);
	let r = f(e, 'ref', 15, null),
		s = D(e, ['$$slots', '$$events', '$$legacy', 'ref', 'children', 'child', 'class']);
	const a = $(() => ({
		class: _(
			'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
			'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
			e.class
		),
		'data-sidebar': 'group-label',
		...s
	}));
	var i = B(),
		l = R(i);
	{
		var t = (c) => {
				var v = B(),
					I = R(v);
				h(
					I,
					() => e.child,
					() => ({ props: J(a) })
				),
					d(c, v);
			},
			C = (c) => {
				var v = me();
				let I;
				var w = u(v);
				h(w, () => e.children ?? m),
					b(v),
					P(
						v,
						(n) => r(n),
						() => r()
					),
					y(() => (I = S(v, I, { ...J(a) }))),
					d(c, v);
			};
		X(l, (c) => {
			e.child ? c(t) : c(C, !1);
		});
	}
	d(o, i), E();
}
var _e = p('<div><!></div>');
function Le(o, e) {
	O(e, !0);
	let r = f(e, 'ref', 15, null),
		s = D(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var a = _e();
	let i;
	var l = u(a);
	h(l, () => e.children ?? m),
		b(a),
		P(
			a,
			(t) => r(t),
			() => r()
		),
		y(
			(t) => (i = S(a, i, { 'data-sidebar': 'group', class: t, ...s })),
			[() => _('relative flex w-full min-w-0 flex-col p-2', e.class)]
		),
		d(o, a),
		E();
}
var pe = p('<main><!></main>');
function Xe(o, e) {
	O(e, !0);
	let r = f(e, 'ref', 15, null),
		s = D(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var a = pe();
	let i;
	var l = u(a);
	h(l, () => e.children ?? m),
		b(a),
		P(
			a,
			(t) => r(t),
			() => r()
		),
		y(
			(t) => (i = S(a, i, { class: t, ...s })),
			[
				() =>
					_(
						'bg-background relative flex min-h-svh flex-1 flex-col',
						'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
						e.class
					)
			]
		),
		d(o, a),
		E();
}
var we = p('<li><!></li>');
function je(o, e) {
	O(e, !0);
	let r = f(e, 'ref', 15, null),
		s = D(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var a = we();
	let i;
	var l = u(a);
	h(l, () => e.children ?? m),
		b(a),
		P(
			a,
			(t) => r(t),
			() => r()
		),
		y(
			(t) => (i = S(a, i, { 'data-sidebar': 'menu-item', class: t, ...s })),
			[() => _('group/menu-item relative', e.class)]
		),
		d(o, a),
		E();
}
var xe = p('<ul><!></ul>');
function qe(o, e) {
	O(e, !0);
	let r = f(e, 'ref', 15, null),
		s = D(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var a = xe();
	let i;
	var l = u(a);
	h(l, () => e.children ?? m),
		b(a),
		P(
			a,
			(t) => r(t),
			() => r()
		),
		y(
			(t) => (i = S(a, i, { 'data-sidebar': 'menu', class: t, ...s })),
			[() => _('flex w-full min-w-0 flex-col gap-1', e.class)]
		),
		d(o, a),
		E();
}
var ye = p('<div><!></div>');
function Fe(o, e) {
	O(e, !0);
	let r = f(e, 'ref', 15, null),
		s = f(e, 'open', 15, !0),
		a = f(e, 'onOpenChange', 3, () => {}),
		i = D(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'ref',
			'open',
			'onOpenChange',
			'class',
			'style',
			'children'
		]);
	const l = le({
		open: () => s(),
		setOpen: (c) => {
			s(c), a()(c), (document.cookie = `${de}=${s()}; path=/; max-age=${ne}`);
		}
	});
	var t = B();
	te('keydown', ee, function (...c) {
		var v;
		(v = l.handleShortcutKeydown) == null || v.apply(this, c);
	});
	var C = R(t);
	j(
		C,
		() => se,
		(c, v) => {
			v(c, {
				delayDuration: 0,
				children: (I, w) => {
					var n = ye();
					let A;
					var K = u(n);
					h(K, () => e.children ?? m),
						b(n),
						P(
							n,
							(x) => r(x),
							() => r()
						),
						y(
							(x) =>
								(A = S(n, A, {
									style: `--sidebar-width: ${oe}; --sidebar-width-icon: ${ce}; ${e.style ?? ''}`,
									class: x,
									...i
								})),
							[
								() =>
									_(
										'group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full',
										e.class
									)
							]
						),
						d(I, n);
				},
				$$slots: { default: !0 }
			});
		}
	),
		d(o, t),
		E();
}
var Se = p('<div><!></div>'),
	Pe = p('<div class="flex h-full w-full flex-col"><!></div>'),
	Ie = p(
		'<div class="text-sidebar-foreground group peer hidden md:block"><div></div> <div><div data-sidebar="sidebar" class="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"><!></div></div></div>'
	);
function Je(o, e) {
	O(e, !0);
	let r = f(e, 'ref', 15, null),
		s = f(e, 'side', 3, 'left'),
		a = f(e, 'variant', 3, 'sidebar'),
		i = f(e, 'collapsible', 3, 'offcanvas'),
		l = D(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'ref',
			'side',
			'variant',
			'collapsible',
			'class',
			'children'
		]);
	const t = ve();
	var C = B(),
		c = R(C);
	{
		var v = (w) => {
				var n = Se();
				let A;
				var K = u(n);
				h(K, () => e.children ?? m),
					b(n),
					P(
						n,
						(x) => r(x),
						() => r()
					),
					y(
						(x) => (A = S(n, A, { class: x, ...l })),
						[
							() =>
								_(
									'bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col',
									e.class
								)
						]
					),
					d(w, n);
			},
			I = (w) => {
				var n = B(),
					A = R(n);
				{
					var K = (M) => {
							var g = B(),
								W = R(g),
								T = () => t.openMobile,
								z = (H) => t.setOpenMobile(H);
							j(
								W,
								() => be,
								(H, G) => {
									G(
										H,
										ie(
											{
												get open() {
													return T();
												},
												set open(k) {
													z(k);
												}
											},
											() => l,
											{
												children: (k, q) => {
													var F = B(),
														Q = R(F);
													j(
														Q,
														() => ge,
														(U, V) => {
															V(U, {
																'data-sidebar': 'sidebar',
																'data-mobile': 'true',
																class:
																	'bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden',
																style: `--sidebar-width: ${fe};`,
																get side() {
																	return s();
																},
																children: (Y, Oe) => {
																	var L = Pe(),
																		Z = u(L);
																	h(Z, () => e.children ?? m), b(L), d(Y, L);
																},
																$$slots: { default: !0 }
															});
														}
													),
														d(k, F);
												},
												$$slots: { default: !0 }
											}
										)
									);
								}
							),
								d(M, g);
						},
						x = (M) => {
							var g = Ie(),
								W = u(g),
								T = ae(W, 2);
							let z;
							var H = u(T),
								G = u(H);
							h(G, () => e.children ?? m),
								b(H),
								b(T),
								b(g),
								P(
									g,
									(k) => r(k),
									() => r()
								),
								y(
									(k, q) => {
										N(g, 'data-state', t.state),
											N(g, 'data-collapsible', t.state === 'collapsed' ? i() : ''),
											N(g, 'data-variant', a()),
											N(g, 'data-side', s()),
											ue(W, re(k)),
											(z = S(T, z, { class: q, ...l }));
									},
									[
										() =>
											_(
												'relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
												'group-data-[collapsible=offcanvas]:w-0',
												'group-data-[side=right]:rotate-180',
												a() === 'floating' || a() === 'inset'
													? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
													: 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
											),
										() =>
											_(
												'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex',
												s() === 'left'
													? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
													: 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
												a() === 'floating' || a() === 'inset'
													? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
													: 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
												e.class
											)
									]
								),
								d(M, g);
						};
					X(
						A,
						(M) => {
							t.isMobile ? M(K) : M(x, !1);
						},
						!0
					);
				}
				d(w, n);
			};
		X(c, (w) => {
			i() === 'none' ? w(v) : w(I, !1);
		});
	}
	d(o, C), E();
}
export { Xe as S, Fe as a, Je as b, Ne as c, Le as d, Ge as e, qe as f, je as g };
