var st = Object.defineProperty;
var Be = (o) => {
	throw TypeError(o);
};
var nt = (o, e, r) =>
	e in o ? st(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (o[e] = r);
var u = (o, e, r) => nt(o, typeof e != 'symbol' ? e + '' : e, r),
	Ue = (o, e, r) => e.has(o) || Be('Cannot ' + r);
var t = (o, e, r) => (Ue(o, e, 'read from private field'), r ? r.call(o) : e.get(o)),
	s = (o, e, r) =>
		e.has(o)
			? Be('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(o)
				: e.set(o, r),
	ae = (o, e, r, n) => (Ue(o, e, 'write to private field'), n ? n.call(o, r) : e.set(o, r), r);
import './Bg9kRutz.js';
import {
	u as V,
	v as i,
	q as I,
	w as p,
	p as Y,
	f as C,
	a as Z,
	x as j,
	d as Ve,
	c as z,
	r as G,
	t as Ae
} from './DQMf8gWK.js';
import { e as T, a as f, t as Le } from './BGOrq1ZG.js';
import { c as at } from './D7_cnrTr.js';
import { p as a, i as B, s as Re, r as We } from './DjKtoK8y.js';
import { a as lt } from './DWr6XhLj.js';
import { s as K } from './D3E8oDJG.js';
import { s as U } from './DvbRtjlS.js';
import { b as l, o as dt, w as je, a as Qe, e as ut, u as Xe, m as le } from './B7uXBihW.js';
import {
	i as ct,
	C as Ye,
	j as pt,
	e as Ze,
	k as ht,
	l as ft,
	o as gt,
	m as vt,
	n as He,
	F as bt,
	P as mt,
	p as yt,
	q as Je,
	r as Ct
} from './B8S9RRQw.js';
import { p as Se } from './BJa4LW-r.js';
import { o as Tt } from './BTRVP7y_.js';
function Me(o, e, r = {}) {
	const { immediate: n = !0 } = r,
		d = l(!1);
	let c;
	function g() {
		c && (clearTimeout(c), (c = null));
	}
	function v() {
		(d.current = !1), g();
	}
	function b(...y) {
		g(),
			(d.current = !0),
			(c = setTimeout(() => {
				(d.current = !1), (c = null), o(...y);
			}, e));
	}
	return (
		n && ((d.current = !0), ct && b()),
		dt(() => {
			v();
		}),
		{ isPending: l.readonly(d), start: b, stop: v }
	);
}
const wt = 'data-tooltip-content',
	Pt = 'data-tooltip-trigger',
	$e = new ht('bits.tooltip.open', { bubbles: !1, cancelable: !1 });
var J, M, de, ue;
class _t {
	constructor(e) {
		u(this, 'opts');
		s(this, J, V(!0));
		u(this, 'isPointerInTransit', l(!1));
		s(this, M);
		s(this, de, () => {
			t(this, M).start();
		});
		s(this, ue, () => {
			t(this, M).stop();
		});
		u(this, 'onOpen', () => {
			t(this, ue).call(this), (this.isOpenDelayed = !1);
		});
		u(this, 'onClose', () => {
			t(this, de).call(this);
		});
		(this.opts = e),
			ae(
				this,
				M,
				Me(
					() => {
						this.isOpenDelayed = !0;
					},
					this.opts.skipDelayDuration.current,
					{ immediate: !1 }
				)
			);
	}
	get isOpenDelayed() {
		return i(t(this, J));
	}
	set isOpenDelayed(e) {
		I(t(this, J), Se(e));
	}
}
(J = new WeakMap()), (M = new WeakMap()), (de = new WeakMap()), (ue = new WeakMap());
var ce, pe, he, fe, ge, Q, X, A, N, ve, be;
class Ot {
	constructor(e, r) {
		u(this, 'opts');
		u(this, 'provider');
		s(
			this,
			ce,
			p(() => this.opts.delayDuration.current ?? this.provider.opts.delayDuration.current)
		);
		s(
			this,
			pe,
			p(
				() =>
					this.opts.disableHoverableContent.current ??
					this.provider.opts.disableHoverableContent.current
			)
		);
		s(
			this,
			he,
			p(
				() =>
					this.opts.disableCloseOnTriggerClick.current ??
					this.provider.opts.disableCloseOnTriggerClick.current
			)
		);
		s(
			this,
			fe,
			p(() => this.opts.disabled.current ?? this.provider.opts.disabled.current)
		);
		s(
			this,
			ge,
			p(
				() =>
					this.opts.ignoreNonKeyboardFocus.current ??
					this.provider.opts.ignoreNonKeyboardFocus.current
			)
		);
		s(this, Q, V(null));
		s(this, X, V(null));
		s(this, A, V(!1));
		s(this, N);
		s(
			this,
			ve,
			p(() =>
				this.opts.open.current ? (i(t(this, A)) ? 'delayed-open' : 'instant-open') : 'closed'
			)
		);
		u(this, 'handleOpen', () => {
			t(this, N).stop(), I(t(this, A), !1), (this.opts.open.current = !0);
		});
		u(this, 'handleClose', () => {
			t(this, N).stop(), (this.opts.open.current = !1);
		});
		s(this, be, () => {
			t(this, N).start();
		});
		u(this, 'onTriggerEnter', () => {
			t(this, be).call(this);
		});
		u(this, 'onTriggerLeave', () => {
			this.disableHoverableContent ? this.handleClose() : t(this, N).stop();
		});
		(this.opts = e),
			(this.provider = r),
			ae(
				this,
				N,
				Me(
					() => {
						I(t(this, A), !0), (this.opts.open.current = !0);
					},
					this.delayDuration ?? 0,
					{ immediate: !1 }
				)
			),
			je(
				() => this.delayDuration,
				() => {
					this.delayDuration !== void 0 &&
						ae(
							this,
							N,
							Me(
								() => {
									I(t(this, A), !0), (this.opts.open.current = !0);
								},
								this.delayDuration,
								{ immediate: !1 }
							)
						);
				}
			),
			je(
				() => this.opts.open.current,
				(n) => {
					this.provider.onClose &&
						(n ? (this.provider.onOpen(), $e.dispatch(document)) : this.provider.onClose());
				}
			);
	}
	get delayDuration() {
		return i(t(this, ce));
	}
	get disableHoverableContent() {
		return i(t(this, pe));
	}
	get disableCloseOnTriggerClick() {
		return i(t(this, he));
	}
	get disabled() {
		return i(t(this, fe));
	}
	get ignoreNonKeyboardFocus() {
		return i(t(this, ge));
	}
	get contentNode() {
		return i(t(this, Q));
	}
	set contentNode(e) {
		I(t(this, Q), Se(e));
	}
	get triggerNode() {
		return i(t(this, X));
	}
	set triggerNode(e) {
		I(t(this, X), Se(e));
	}
	get stateAttr() {
		return i(t(this, ve));
	}
}
(ce = new WeakMap()),
	(pe = new WeakMap()),
	(he = new WeakMap()),
	(fe = new WeakMap()),
	(ge = new WeakMap()),
	(Q = new WeakMap()),
	(X = new WeakMap()),
	(A = new WeakMap()),
	(N = new WeakMap()),
	(ve = new WeakMap()),
	(be = new WeakMap());
var R, L, m, me, ye, Ce, Te, we, Pe, _e, Oe;
class Dt {
	constructor(e, r) {
		u(this, 'opts');
		u(this, 'root');
		s(this, R, l(!1));
		s(this, L, V(!1));
		s(
			this,
			m,
			p(() => this.opts.disabled.current || this.root.disabled)
		);
		u(this, 'handlePointerUp', () => {
			t(this, R).current = !1;
		});
		s(this, me, () => {
			i(t(this, m)) || (t(this, R).current = !1);
		});
		s(this, ye, () => {
			i(t(this, m)) ||
				((t(this, R).current = !0),
				document.addEventListener(
					'pointerup',
					() => {
						this.handlePointerUp();
					},
					{ once: !0 }
				));
		});
		s(this, Ce, (e) => {
			i(t(this, m)) ||
				(e.pointerType !== 'touch' &&
					(i(t(this, L)) ||
						this.root.provider.isPointerInTransit.current ||
						(this.root.onTriggerEnter(), I(t(this, L), !0))));
		});
		s(this, Te, () => {
			i(t(this, m)) || (this.root.onTriggerLeave(), I(t(this, L), !1));
		});
		s(this, we, (e) => {
			t(this, R).current ||
				i(t(this, m)) ||
				(this.root.ignoreNonKeyboardFocus && !pt(e.currentTarget)) ||
				this.root.handleOpen();
		});
		s(this, Pe, () => {
			i(t(this, m)) || this.root.handleClose();
		});
		s(this, _e, () => {
			this.root.disableCloseOnTriggerClick || i(t(this, m)) || this.root.handleClose();
		});
		s(
			this,
			Oe,
			p(() => {
				var e;
				return {
					id: this.opts.id.current,
					'aria-describedby': this.root.opts.open.current
						? (e = this.root.contentNode) == null
							? void 0
							: e.id
						: void 0,
					'data-state': this.root.stateAttr,
					'data-disabled': Ze(i(t(this, m))),
					'data-delay-duration': `${this.root.delayDuration}`,
					[Pt]: '',
					tabindex: i(t(this, m)) ? void 0 : 0,
					disabled: this.opts.disabled.current,
					onpointerup: t(this, me),
					onpointerdown: t(this, ye),
					onpointermove: t(this, Ce),
					onpointerleave: t(this, Te),
					onfocus: t(this, we),
					onblur: t(this, Pe),
					onclick: t(this, _e)
				};
			})
		);
		(this.opts = e),
			(this.root = r),
			Qe({
				...e,
				onRefChange: (n) => {
					this.root.triggerNode = n;
				}
			});
	}
	get props() {
		return i(t(this, Oe));
	}
}
(R = new WeakMap()),
	(L = new WeakMap()),
	(m = new WeakMap()),
	(me = new WeakMap()),
	(ye = new WeakMap()),
	(Ce = new WeakMap()),
	(Te = new WeakMap()),
	(we = new WeakMap()),
	(Pe = new WeakMap()),
	(_e = new WeakMap()),
	(Oe = new WeakMap());
var De, Ne;
class Nt {
	constructor(e, r) {
		u(this, 'opts');
		u(this, 'root');
		u(this, 'onInteractOutside', (e) => {
			var r;
			if (
				vt(e.target) &&
				(r = this.root.triggerNode) != null &&
				r.contains(e.target) &&
				this.root.disableCloseOnTriggerClick
			) {
				e.preventDefault();
				return;
			}
			this.opts.onInteractOutside.current(e), !e.defaultPrevented && this.root.handleClose();
		});
		u(this, 'onEscapeKeydown', (e) => {
			var r, n;
			(n = (r = this.opts.onEscapeKeydown).current) == null || n.call(r, e),
				!e.defaultPrevented && this.root.handleClose();
		});
		u(this, 'onOpenAutoFocus', (e) => {
			e.preventDefault();
		});
		u(this, 'onCloseAutoFocus', (e) => {
			e.preventDefault();
		});
		s(
			this,
			De,
			p(() => ({ open: this.root.opts.open.current }))
		);
		s(
			this,
			Ne,
			p(() => ({
				id: this.opts.id.current,
				'data-state': this.root.stateAttr,
				'data-disabled': Ze(this.root.disabled),
				style: { pointerEvents: 'auto', outline: 'none' },
				[wt]: ''
			}))
		);
		u(this, 'popperProps', {
			onInteractOutside: this.onInteractOutside,
			onEscapeKeydown: this.onEscapeKeydown,
			onOpenAutoFocus: this.onOpenAutoFocus,
			onCloseAutoFocus: this.onCloseAutoFocus
		});
		(this.opts = e),
			(this.root = r),
			Qe({
				...e,
				onRefChange: (n) => {
					this.root.contentNode = n;
				},
				deps: () => this.root.opts.open.current
			}),
			ft({
				triggerNode: () => this.root.triggerNode,
				contentNode: () => this.root.contentNode,
				enabled: () => this.root.opts.open.current && !this.root.disableHoverableContent,
				onPointerExit: () => {
					this.root.handleClose();
				},
				setIsPointerInTransit: (n) => {
					this.root.provider.isPointerInTransit.current = n;
				}
			}),
			gt(() =>
				ut(
					Tt(window, 'scroll', (n) => {
						const d = n.target;
						d && d.contains(this.root.triggerNode) && this.root.handleClose();
					}),
					$e.listen(window, this.root.handleClose)
				)
			);
	}
	get snippetProps() {
		return i(t(this, De));
	}
	get props() {
		return i(t(this, Ne));
	}
}
(De = new WeakMap()), (Ne = new WeakMap());
const et = new Ye('Tooltip.Provider'),
	qe = new Ye('Tooltip.Root');
function Ft(o) {
	return et.set(new _t(o));
}
function kt(o) {
	return qe.set(new Ot(o, et.get()));
}
function Et(o) {
	return new Dt(o, qe.get());
}
function It(o) {
	return new Nt(o, qe.get());
}
function Kt(o, e) {
	Y(e, !0);
	let r = a(e, 'open', 15, !1),
		n = a(e, 'onOpenChange', 3, He);
	kt({
		open: l.with(
			() => r(),
			(d) => {
				r(d), n()(d);
			}
		),
		delayDuration: l.with(() => e.delayDuration),
		disableCloseOnTriggerClick: l.with(() => e.disableCloseOnTriggerClick),
		disableHoverableContent: l.with(() => e.disableHoverableContent),
		ignoreNonKeyboardFocus: l.with(() => e.ignoreNonKeyboardFocus),
		disabled: l.with(() => e.disabled)
	}),
		bt(o, {
			children: (d, c) => {
				var g = T(),
					v = C(g);
				K(v, () => e.children ?? j), f(d, g);
			},
			$$slots: { default: !0 }
		}),
		Z();
}
var xt = Le('<div><div><!></div></div>'),
	At = Le('<div><div><!></div></div>');
function Rt(o, e) {
	Y(e, !0);
	let r = a(e, 'id', 19, Xe),
		n = a(e, 'ref', 15, null),
		d = a(e, 'side', 3, 'top'),
		c = a(e, 'sideOffset', 3, 0),
		g = a(e, 'align', 3, 'center'),
		v = a(e, 'avoidCollisions', 3, !0),
		b = a(e, 'arrowPadding', 3, 0),
		y = a(e, 'sticky', 3, 'partial'),
		$ = a(e, 'hideWhenDetached', 3, !1),
		ee = a(e, 'collisionPadding', 3, 0),
		Fe = a(e, 'onInteractOutside', 3, He),
		ke = a(e, 'onEscapeKeydown', 3, He),
		te = a(e, 'forceMount', 3, !1),
		F = We(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'children',
			'child',
			'id',
			'ref',
			'side',
			'sideOffset',
			'align',
			'avoidCollisions',
			'arrowPadding',
			'sticky',
			'hideWhenDetached',
			'collisionPadding',
			'onInteractOutside',
			'onEscapeKeydown',
			'forceMount'
		]);
	const h = It({
			id: l.with(() => r()),
			ref: l.with(
				() => n(),
				(k) => n(k)
			),
			onInteractOutside: l.with(() => Fe()),
			onEscapeKeydown: l.with(() => ke())
		}),
		H = p(() => ({
			side: d(),
			sideOffset: c(),
			align: g(),
			avoidCollisions: v(),
			arrowPadding: b(),
			sticky: y(),
			hideWhenDetached: $(),
			collisionPadding: ee()
		})),
		oe = p(() => le(F, i(H), h.props));
	var ze = T(),
		tt = C(ze);
	{
		var ot = (k) => {
				mt(
					k,
					Re(
						() => i(oe),
						() => h.popperProps,
						{
							get enabled() {
								return h.root.opts.open.current;
							},
							get id() {
								return r();
							},
							trapFocus: !1,
							loop: !1,
							preventScroll: !1,
							forceMount: !0,
							popper: (Ie, E) => {
								let W = () => (E == null ? void 0 : E().props),
									Ke = () => (E == null ? void 0 : E().wrapperProps);
								var re = T();
								const w = p(() => le(W(), { style: Je('tooltip') }));
								var xe = C(re);
								{
									var ie = (P) => {
											var _ = T(),
												S = C(_),
												x = Ve(() => ({ props: i(w), wrapperProps: Ke(), ...h.snippetProps }));
											K(
												S,
												() => e.child,
												() => i(x)
											),
												f(P, _);
										},
										se = (P) => {
											var _ = xt();
											let S;
											var x = z(_);
											let O;
											var D = z(x);
											K(D, () => e.children ?? j),
												G(x),
												G(_),
												Ae(() => {
													(S = U(_, S, { ...Ke() })), (O = U(x, O, { ...i(w) }));
												}),
												f(P, _);
										};
									B(xe, (P) => {
										e.child ? P(ie) : P(se, !1);
									});
								}
								f(Ie, re);
							},
							$$slots: { popper: !0 }
						}
					)
				);
			},
			rt = (k) => {
				var Ee = T(),
					Ie = C(Ee);
				{
					var E = (W) => {
						yt(
							W,
							Re(
								() => i(oe),
								() => h.popperProps,
								{
									get present() {
										return h.root.opts.open.current;
									},
									get id() {
										return r();
									},
									trapFocus: !1,
									loop: !1,
									preventScroll: !1,
									forceMount: !1,
									popper: (re, w) => {
										let xe = () => (w == null ? void 0 : w().props),
											ie = () => (w == null ? void 0 : w().wrapperProps);
										var se = T();
										const P = p(() => le(xe(), { style: Je('tooltip') }));
										var _ = C(se);
										{
											var S = (O) => {
													var D = T(),
														ne = C(D),
														q = Ve(() => ({ props: i(P), wrapperProps: ie(), ...h.snippetProps }));
													K(
														ne,
														() => e.child,
														() => i(q)
													),
														f(O, D);
												},
												x = (O) => {
													var D = At();
													let ne;
													var q = z(D);
													let Ge;
													var it = z(q);
													K(it, () => e.children ?? j),
														G(q),
														G(D),
														Ae(() => {
															(ne = U(D, ne, { ...ie() })), (Ge = U(q, Ge, { ...i(P) }));
														}),
														f(O, D);
												};
											B(_, (O) => {
												e.child ? O(S) : O(x, !1);
											});
										}
										f(re, se);
									},
									$$slots: { popper: !0 }
								}
							)
						);
					};
					B(
						Ie,
						(W) => {
							te() || W(E);
						},
						!0
					);
				}
				f(k, Ee);
			};
		B(tt, (k) => {
			te() ? k(ot) : k(rt, !1);
		});
	}
	f(o, ze), Z();
}
var Ht = Le('<button><!></button>');
function St(o, e) {
	Y(e, !0);
	let r = a(e, 'id', 19, Xe),
		n = a(e, 'disabled', 3, !1),
		d = a(e, 'type', 3, 'button'),
		c = a(e, 'ref', 15, null),
		g = We(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'children',
			'child',
			'id',
			'disabled',
			'type',
			'ref'
		]);
	const v = Et({
			id: l.with(() => r()),
			disabled: l.with(() => n() ?? !1),
			ref: l.with(
				() => c(),
				(y) => c(y)
			)
		}),
		b = p(() => le(g, v.props, { type: d() }));
	Ct(o, {
		get id() {
			return r();
		},
		children: (y, $) => {
			var ee = T(),
				Fe = C(ee);
			{
				var ke = (F) => {
						var h = T(),
							H = C(h);
						K(
							H,
							() => e.child,
							() => ({ props: i(b) })
						),
							f(F, h);
					},
					te = (F) => {
						var h = Ht();
						let H;
						var oe = z(h);
						K(oe, () => e.children ?? j), G(h), Ae(() => (H = U(h, H, { ...i(b) }))), f(F, h);
					};
				B(Fe, (F) => {
					e.child ? F(ke) : F(te, !1);
				});
			}
			f(y, ee);
		},
		$$slots: { default: !0 }
	}),
		Z();
}
function Mt(o, e) {
	Y(e, !0);
	let r = a(e, 'delayDuration', 3, 700),
		n = a(e, 'disableCloseOnTriggerClick', 3, !1),
		d = a(e, 'disableHoverableContent', 3, !1),
		c = a(e, 'disabled', 3, !1),
		g = a(e, 'ignoreNonKeyboardFocus', 3, !1),
		v = a(e, 'skipDelayDuration', 3, 300);
	Ft({
		delayDuration: l.with(() => r()),
		disableCloseOnTriggerClick: l.with(() => n()),
		disableHoverableContent: l.with(() => d()),
		disabled: l.with(() => c()),
		ignoreNonKeyboardFocus: l.with(() => g()),
		skipDelayDuration: l.with(() => v())
	});
	var b = T(),
		y = C(b);
	K(y, () => e.children ?? j), f(o, b), Z();
}
function Zt(o, e) {
	Y(e, !0);
	let r = a(e, 'ref', 15, null),
		n = a(e, 'sideOffset', 3, 4),
		d = We(e, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'sideOffset']);
	var c = T(),
		g = C(c);
	const v = p(() =>
		lt(
			'bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md',
			e.class
		)
	);
	at(
		g,
		() => Rt,
		(b, y) => {
			y(
				b,
				Re(
					{
						get sideOffset() {
							return n();
						},
						get class() {
							return i(v);
						}
					},
					() => d,
					{
						get ref() {
							return r();
						},
						set ref($) {
							r($);
						}
					}
				)
			);
		}
	),
		f(o, c),
		Z();
}
const $t = Kt,
	eo = St,
	to = Mt;
export { to as P, $t as R, eo as T, Zt as a };
