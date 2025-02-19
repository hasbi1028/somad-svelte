import '../chunks/Bg9kRutz.js';
import {
	p as Oe,
	f as g,
	a as De,
	t as Q,
	s as Se,
	ag as d,
	ah as Ct,
	af as v,
	e as r,
	ai as m,
	g as e,
	c as ke,
	r as fe,
	d as j,
	aG as Qt
} from '../chunks/BHafZ7-g.js';
import { c as T, a, t as F, n as lt, e as $, b as kt } from '../chunks/D4wBL3Sd.js';
import { s as $t } from '../chunks/CiWmPosG.js';
import '../chunks/1dHx3Gtq.js';
import { p as eo } from '../chunks/BRbqKDqJ.js';
import {
	d as Ot,
	a as to,
	s as Et,
	i as oo,
	b as ao,
	c as no,
	e as so,
	l as ro,
	m as Nt,
	f as At
} from '../chunks/B4fvhT3s.js';
import '../chunks/69_IOA4Y.js';
import { p as s, i as C, l as Tt, b as Dt, s as it, r as io } from '../chunks/CjIAJ7VA.js';
import { i as qe } from '../chunks/CBZYCnD7.js';
import { a as ct, s as Ee, d as lo } from '../chunks/ByDptKy-.js';
import { o as Bt, a as co } from '../chunks/CGny5e2U.js';
import { s as uo, d as fo, a as mo, b as vo } from '../chunks/B7Pfnr5e.js';
import { s as x, b as We, a as go } from '../chunks/eK_4uKAs.js';
import { h as ho, s as nt } from '../chunks/709vCQOk.js';
import { h as po } from '../chunks/Bjx_aVGJ.js';
import { e as St, i as Ht } from '../chunks/CNlA5Cx2.js';
import { s as pe } from '../chunks/BtEvizs7.js';
import { a as Lt, u as _o, c as Ye } from '../chunks/BZRW7dRF.js';
import { c as st } from '../chunks/D-TmFHfb.js';
import { s as Ze } from '../chunks/BpyTwlt-.js';
function Ce(B, t, l, S) {
	var _ = B.__styles ?? (B.__styles = {});
	_[t] !== l && ((_[t] = l), l == null ? B.style.removeProperty(t) : B.style.setProperty(t, l, ''));
}
const yo = !1,
	wo = !0,
	bo = !1,
	ha = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, csr: wo, prerender: bo, ssr: yo },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	);
var xo = F('<meta name="theme-color">');
function To(B, t) {
	Oe(t, !1);
	let l = s(t, 'themeColors', 24, () => {});
	qe();
	var S = T(),
		_ = g(S);
	{
		var k = (y) => {
			var A = xo();
			Q(() => x(A, 'content', l().dark)), a(y, A);
		};
		C(_, (y) => {
			l() && y(k);
		});
	}
	a(B, S), De();
}
var So = F('<meta name="theme-color">'),
	Co = F('<!> <!>', 1);
function Bo(B, t) {
	Oe(t, !1);
	let l = s(t, 'trueNonce', 8, ''),
		S = s(t, 'initConfig', 8),
		_ = s(t, 'themeColors', 24, () => {});
	qe(),
		ho((k) => {
			var y = Co(),
				A = g(y);
			{
				var H = (G) => {
					var W = So();
					Q(() => x(W, 'content', _().dark)), a(G, W);
				};
				C(A, (G) => {
					_() && G(H);
				});
			}
			var U = Se(A, 2);
			po(
				U,
				() =>
					`<script${l() ? ` nonce=${l()}` : ''}>(` +
					uo.toString() +
					')(' +
					JSON.stringify(S()) +
					');<\/script>'
			),
				a(k, y);
		}),
		De();
}
function Mo(B, t) {
	Oe(t, !1);
	const [l, S] = ct(),
		_ = () => Ee(Nt, '$modeStorageKeyStore', l),
		k = () => Ee(At, '$themeStorageKeyStore', l),
		y = m();
	let A = s(t, 'track', 8, !0),
		H = s(t, 'defaultMode', 8, 'system'),
		U = s(t, 'themeColors', 24, () => {}),
		G = s(t, 'disableTransitions', 8, !0),
		W = s(t, 'darkClassNames', 24, () => ['dark']),
		h = s(t, 'lightClassNames', 24, () => []),
		ee = s(t, 'defaultTheme', 8, ''),
		le = s(t, 'nonce', 8, ''),
		K = s(t, 'themeStorageKey', 8, 'mode-watcher-theme'),
		te = s(t, 'modeStorageKey', 8, 'mode-watcher-mode'),
		V = s(t, 'disableHeadScriptInjection', 8, !1);
	Bt(() => {
		const Z = Ot.subscribe(() => {}),
			Xe = to.subscribe(() => {});
		Et.tracking(A()), Et.query();
		const He = localStorage.getItem(_());
		mo(oo(He) ? He : H());
		const Je = localStorage.getItem(k());
		return (
			vo(Je || ee()),
			() => {
				Z(), Xe();
			}
		);
	});
	const X = fo({
		defaultMode: H(),
		themeColors: U(),
		darkClassNames: W(),
		lightClassNames: h(),
		defaultTheme: ee(),
		modeStorageKey: te(),
		themeStorageKey: K()
	});
	d(
		() => v(G()),
		() => {
			ao.set(G());
		}
	),
		d(
			() => v(U()),
			() => {
				no.set(U());
			}
		),
		d(
			() => v(W()),
			() => {
				so.set(W());
			}
		),
		d(
			() => v(h()),
			() => {
				ro.set(h());
			}
		),
		d(
			() => v(te()),
			() => {
				Nt.set(te());
			}
		),
		d(
			() => v(K()),
			() => {
				At.set(K());
			}
		),
		d(
			() => v(le()),
			() => {
				r(y, typeof window > 'u' ? le() : '');
			}
		),
		Ct(),
		qe();
	var Y = T(),
		_e = g(Y);
	{
		var ye = (Z) => {
				To(Z, {
					get themeColors() {
						return U();
					}
				});
			},
			ce = (Z) => {
				Bo(Z, {
					get trueNonce() {
						return e(y);
					},
					initConfig: X,
					get themeColors() {
						return U();
					}
				});
			};
		C(_e, (Z) => {
			V() ? Z(ye) : Z(ce, !1);
		});
	}
	a(B, Y), De(), S();
}
var Po = lt(
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>'
	),
	Io = lt(
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>'
	),
	ko = lt(
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>'
	),
	Eo = lt(
		'<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>'
	);
function rt(B, t) {
	let l = s(t, 'type', 8, 'success');
	var S = T(),
		_ = g(S);
	{
		var k = (A) => {
				var H = Po();
				a(A, H);
			},
			y = (A) => {
				var H = T(),
					U = g(H);
				{
					var G = (h) => {
							var ee = Io();
							a(h, ee);
						},
						W = (h) => {
							var ee = T(),
								le = g(ee);
							{
								var K = (V) => {
										var X = ko();
										a(V, X);
									},
									te = (V) => {
										var X = T(),
											Y = g(X);
										{
											var _e = (ce) => {
													var Z = Eo();
													a(ce, Z);
												},
												ye = (ce) => {};
											C(
												Y,
												(ce) => {
													l() === 'warning' ? ce(_e) : ce(ye, !1);
												},
												!0
											);
										}
										a(V, X);
									};
								C(
									le,
									(V) => {
										l() === 'info' ? V(K) : V(te, !1);
									},
									!0
								);
							}
							a(h, ee);
						};
					C(
						U,
						(h) => {
							l() === 'error' ? h(G) : h(W, !1);
						},
						!0
					);
				}
				a(A, H);
			};
		C(_, (A) => {
			l() === 'success' ? A(k) : A(y, !1);
		});
	}
	a(B, S);
}
var No = F('<div class="sonner-loading-bar"></div>'),
	Ao = F('<div class="sonner-loading-wrapper"><div class="sonner-spinner"></div></div>');
function Oo(B, t) {
	Oe(t, !1);
	let l = s(t, 'visible', 8);
	const S = Array(12).fill(0);
	qe();
	var _ = Ao(),
		k = ke(_);
	St(
		k,
		5,
		() => S,
		Ht,
		(y, A) => {
			var H = No();
			a(y, H);
		}
	),
		fe(k),
		fe(_),
		Q(() => x(_, 'data-visible', l())),
		a(B, _),
		De();
}
var Do = F(
		'<button aria-label="Close toast" data-close-button=""><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>'
	),
	Ho = F('<div data-icon=""><!> <!></div>'),
	Lo = F('<div data-title=""><!></div>'),
	Ko = F('<div data-description=""><!></div>'),
	Ro = F('<button data-button="" data-cancel=""> </button>'),
	zo = F('<button data-button=""> </button>'),
	Fo = F('<!> <div data-content=""><!> <!></div> <!> <!>', 1),
	Uo = F('<li aria-atomic="true" role="status" data-sonner-toast=""><!> <!></li>');
function Vo(B, t) {
	const l = Tt(t, ['children', '$$slots', '$$events', '$$legacy']);
	Oe(t, !1);
	const [S, _] = ct(),
		k = () => Ee(dt, '$heights', S),
		y = () => Ee(e(at), '$effect', S),
		A = () => Ee(Je, '$toasts', S),
		H = m(void 0, !0),
		U = m(void 0, !0),
		G = m(void 0, !0),
		W = m(void 0, !0),
		h = m(void 0, !0),
		ee = m(void 0, !0),
		le = m(void 0, !0),
		K = m(void 0, !0),
		te = m(void 0, !0),
		V = m(void 0, !0),
		X = m(void 0, !0),
		Y = m(void 0, !0),
		_e = 4e3,
		ye = 14,
		ce = 20,
		Z = 200,
		Xe = 0.05,
		He = {
			toast: '',
			title: '',
			description: '',
			loader: '',
			closeButton: '',
			cancelButton: '',
			actionButton: '',
			action: '',
			warning: '',
			error: '',
			success: '',
			default: '',
			info: '',
			loading: ''
		},
		{ toasts: Je, heights: dt, removeHeight: me, setHeight: Le, remove: tt } = Lt;
	let o = s(t, 'toast', 9),
		de = s(t, 'index', 9),
		Ke = s(t, 'expanded', 9),
		oe = s(t, 'invert', 13),
		Ne = s(t, 'position', 9),
		Be = s(t, 'visibleToasts', 9),
		we = s(t, 'expandByDefault', 9),
		be = s(t, 'closeButton', 9),
		Me = s(t, 'interacting', 9),
		ut = s(t, 'cancelButtonStyle', 9, ''),
		ft = s(t, 'actionButtonStyle', 9, ''),
		Re = s(t, 'duration', 9, 4e3),
		mt = s(t, 'descriptionClass', 9, ''),
		ae = s(t, 'classes', 29, () => ({})),
		u = s(t, 'unstyled', 9, !1),
		M = m(!1, !0),
		ne = m(!1, !0),
		se = m(!1, !0),
		ve = m(!1, !0),
		Pe = m(0, !0),
		P = m(0, !0),
		J = m(void 0, !0),
		R = m(0, !0),
		Ie = 0,
		ze = 0,
		ge = null;
	async function vt() {
		if (!e(M)) return;
		await Qt();
		let n;
		Ke() || we() ? (n = 1) : (n = 1 - de() * Xe), e(J).style.setProperty('height', 'auto');
		const c = e(J).offsetHeight,
			b = e(J).getBoundingClientRect().height,
			I = Math.round((b / n + Number.EPSILON) * 100) / 100;
		e(J).style.removeProperty('height');
		let E;
		Math.abs(I - c) < 1 ? (E = I) : (E = c), r(P, E), Le({ toastId: o().id, height: E });
	}
	function xe() {
		r(ne, !0),
			r(Pe, e(R)),
			me(o().id),
			setTimeout(() => {
				tt(o().id);
			}, Z);
	}
	let Ae = m(void 0, !0),
		Fe = m(o().duration || Re() || _e, !0);
	function gt() {
		if (ze < Ie) {
			const n = new Date().getTime() - Ie;
			r(Fe, e(Fe) - n);
		}
		ze = new Date().getTime();
	}
	function ot() {
		(Ie = new Date().getTime()),
			r(
				Ae,
				setTimeout(() => {
					var n, c;
					(c = (n = o()).onAutoClose) == null || c.call(n, o()), xe();
				}, e(Fe))
			);
	}
	let at = m(void 0, !0);
	Bt(() => {
		r(M, !0);
		const n = e(J).getBoundingClientRect().height;
		return r(P, n), Le({ toastId: o().id, height: n }), () => me(o().id);
	});
	function w(n) {
		if (e(X)) return;
		r(Pe, e(R));
		const c = n.target;
		c.setPointerCapture(n.pointerId),
			c.tagName !== 'BUTTON' && (r(se, !0), (ge = { x: n.clientX, y: n.clientY }));
	}
	function Ue() {
		var c, b, I;
		if (e(ve)) return;
		ge = null;
		const n = Number(
			((c = e(J)) == null
				? void 0
				: c.style.getPropertyValue('--swipe-amount').replace('px', '')) || 0
		);
		if (Math.abs(n) >= ce) {
			r(Pe, e(R)), (I = (b = o()).onDismiss) == null || I.call(b, o()), xe(), r(ve, !0);
			return;
		}
		e(J).style.setProperty('--swipe-amount', '0px'), r(se, !1);
	}
	function z(n) {
		if (!ge) return;
		const c = n.clientY - ge.y,
			b = n.clientX - ge.x,
			E = (e(te)[0] === 'top' ? Math.min : Math.max)(0, c),
			ue = n.pointerType === 'touch' ? 10 : 2;
		Math.abs(E) > ue
			? e(J).style.setProperty('--swipe-amount', `${c}px`)
			: Math.abs(b) > ue && (ge = null);
	}
	d(
		() => v(ae()),
		() => {
			ae({ ...He, ...ae() });
		}
	),
		d(
			() => v(de()),
			() => {
				r(H, de() === 0);
			}
		),
		d(
			() => (v(de()), v(Be())),
			() => {
				r(U, de() + 1 <= Be());
			}
		),
		d(
			() => v(o()),
			() => {
				r(G, o().title);
			}
		),
		d(
			() => v(o()),
			() => {
				r(W, o().description);
			}
		),
		d(
			() => v(o()),
			() => {
				r(h, o().type);
			}
		),
		d(
			() => v(o()),
			() => {
				r(ee, o().class || '');
			}
		),
		d(
			() => v(o()),
			() => {
				r(le, o().descriptionClass || '');
			}
		),
		d(
			() => (k(), v(o())),
			() => {
				r(K, k().findIndex((n) => n.toastId === o().id) || 0);
			}
		),
		d(
			() => v(Ne()),
			() => {
				r(te, Ne().split('-'));
			}
		),
		d(
			() => (k(), e(K)),
			() => {
				r(
					V,
					k().reduce((n, c, b) => (b >= e(K) ? n : n + c.height), 0)
				);
			}
		),
		d(
			() => (v(oe()), v(o())),
			() => {
				oe(o().invert || oe());
			}
		),
		d(
			() => e(h),
			() => {
				r(X, e(h) === 'loading');
			}
		),
		d(
			() => (e(K), e(V)),
			() => {
				r(R, Math.round(e(K) * ye + e(V)));
			}
		),
		d(
			() => (e(G), e(W)),
			() => {
				e(G), e(W), vt();
			}
		),
		d(
			() => (v(o()), e(Ae), v(Re())),
			() => {
				o().updated && (clearTimeout(e(Ae)), r(Fe, o().duration || Re() || _e), ot());
			}
		),
		d(
			() => (v(o()), e(h)),
			() => {
				r(Y, (o().promise && e(h) === 'loading') || o().duration === Number.POSITIVE_INFINITY);
			}
		),
		d(
			() => (e(Y), v(Ke()), v(Me()), e(Ae)),
			() => {
				lo(
					r(
						at,
						_o(() => (e(Y) || (Ke() || Me() ? gt() : ot()), () => clearTimeout(e(Ae))))
					),
					'$effect',
					S
				);
			}
		),
		d(
			() => y(),
			() => {
				y();
			}
		),
		d(
			() => v(o()),
			() => {
				o().delete && xe();
			}
		),
		Ct(),
		qe(!0);
	var i = Uo();
	x(i, 'tabindex', 0);
	var re = ke(i);
	{
		var ht = (n) => {
			var c = Do();
			Q(
				(b) => {
					x(c, 'data-disabled', e(X)), Ze(c, We(b));
				},
				[
					() => {
						var b, I, E;
						return Ye(
							(b = ae()) == null ? void 0 : b.closeButton,
							(E = (I = o()) == null ? void 0 : I.classes) == null ? void 0 : E.closeButton
						);
					}
				],
				j
			),
				$('click', c, function (...b) {
					var I;
					(I = e(X)
						? void 0
						: () => {
								var E, ue;
								xe(), (ue = (E = o()).onDismiss) == null || ue.call(E, o());
							}) == null || I.apply(this, b);
				}),
				a(n, c);
		};
		C(re, (n) => {
			be() && !o().component && n(ht);
		});
	}
	var Kt = Se(re, 2);
	{
		var Rt = (n) => {
				var c = T(),
					b = g(c);
				st(
					b,
					() => o().component,
					(I, E) => {
						E(
							I,
							it(() => o().componentProps, { $$events: { closeToast: xe } })
						);
					}
				),
					a(n, c);
			},
			zt = (n) => {
				var c = Fo(),
					b = g(c);
				{
					var I = (O) => {
						var p = Ho(),
							he = ke(p);
						{
							var N = (L) => {
								var ie = T(),
									Te = g(ie);
								pe(Te, t, 'loading-icon', {}, null), a(L, ie);
							};
							C(he, (L) => {
								(o().promise || e(h) === 'loading') && !o().icon && L(N);
							});
						}
						var q = Se(he, 2);
						{
							var f = (L) => {
									var ie = T(),
										Te = g(ie);
									st(
										Te,
										() => o().icon,
										(pt, _t) => {
											_t(pt, {});
										}
									),
										a(L, ie);
								},
								D = (L) => {
									var ie = T(),
										Te = g(ie);
									{
										var pt = (Ve) => {
												var Qe = T(),
													yt = g(Qe);
												pe(yt, t, 'success-icon', {}, null), a(Ve, Qe);
											},
											_t = (Ve) => {
												var Qe = T(),
													yt = g(Qe);
												{
													var Wt = (je) => {
															var $e = T(),
																wt = g($e);
															pe(wt, t, 'error-icon', {}, null), a(je, $e);
														},
														Yt = (je) => {
															var $e = T(),
																wt = g($e);
															{
																var Zt = (Ge) => {
																		var et = T(),
																			bt = g(et);
																		pe(bt, t, 'warning-icon', {}, null), a(Ge, et);
																	},
																	qt = (Ge) => {
																		var et = T(),
																			bt = g(et);
																		{
																			var Xt = (xt) => {
																				var It = T(),
																					Jt = g(It);
																				pe(Jt, t, 'info-icon', {}, null), a(xt, It);
																			};
																			C(
																				bt,
																				(xt) => {
																					e(h) === 'info' && xt(Xt);
																				},
																				!0
																			);
																		}
																		a(Ge, et);
																	};
																C(
																	wt,
																	(Ge) => {
																		e(h) === 'warning' ? Ge(Zt) : Ge(qt, !1);
																	},
																	!0
																);
															}
															a(je, $e);
														};
													C(
														yt,
														(je) => {
															e(h) === 'error' ? je(Wt) : je(Yt, !1);
														},
														!0
													);
												}
												a(Ve, Qe);
											};
										C(
											Te,
											(Ve) => {
												e(h) === 'success' ? Ve(pt) : Ve(_t, !1);
											},
											!0
										);
									}
									a(L, ie);
								};
							C(q, (L) => {
								o().icon ? L(f) : L(D, !1);
							});
						}
						fe(p), a(O, p);
					};
					C(b, (O) => {
						(e(h) !== 'default' || o().icon || o().promise) && O(I);
					});
				}
				var E = Se(b, 2),
					ue = ke(E);
				{
					var Mt = (O) => {
						var p = Lo(),
							he = ke(p);
						{
							var N = (f) => {
									var D = T(),
										L = g(D);
									st(
										L,
										() => o().title,
										(ie, Te) => {
											Te(
												ie,
												it(() => o().componentProps)
											);
										}
									),
										a(f, D);
								},
								q = (f) => {
									var D = kt();
									Q(() => nt(D, o().title)), a(f, D);
								};
							C(he, (f) => {
								typeof o().title != 'string' ? f(N) : f(q, !1);
							});
						}
						fe(p),
							Q(
								(f) => Ze(p, We(f)),
								[
									() => {
										var f, D, L;
										return Ye(
											(f = ae()) == null ? void 0 : f.title,
											(L = (D = o()) == null ? void 0 : D.classes) == null ? void 0 : L.title
										);
									}
								],
								j
							),
							a(O, p);
					};
					C(ue, (O) => {
						o().title && O(Mt);
					});
				}
				var Ft = Se(ue, 2);
				{
					var Ut = (O) => {
						var p = Ko(),
							he = ke(p);
						{
							var N = (f) => {
									var D = T(),
										L = g(D);
									st(
										L,
										() => o().description,
										(ie, Te) => {
											Te(
												ie,
												it(() => o().componentProps)
											);
										}
									),
										a(f, D);
								},
								q = (f) => {
									var D = kt();
									Q(() => nt(D, o().description)), a(f, D);
								};
							C(he, (f) => {
								typeof o().description != 'string' ? f(N) : f(q, !1);
							});
						}
						fe(p),
							Q(
								(f) => Ze(p, We(f)),
								[
									() => {
										var f, D;
										return Ye(
											mt(),
											e(le),
											(f = ae()) == null ? void 0 : f.description,
											(D = o().classes) == null ? void 0 : D.description
										);
									}
								],
								j
							),
							a(O, p);
					};
					C(Ft, (O) => {
						o().description && O(Ut);
					});
				}
				fe(E);
				var Pt = Se(E, 2);
				{
					var Vt = (O) => {
						var p = Ro(),
							he = ke(p, !0);
						fe(p),
							Q(
								(N) => {
									x(p, 'style', ut()), Ze(p, We(N)), nt(he, o().cancel.label);
								},
								[
									() => {
										var N, q, f;
										return Ye(
											(N = ae()) == null ? void 0 : N.cancelButton,
											(f = (q = o()) == null ? void 0 : q.classes) == null ? void 0 : f.cancelButton
										);
									}
								],
								j
							),
							$('click', p, () => {
								var N;
								xe(), (N = o().cancel) != null && N.onClick && o().cancel.onClick();
							}),
							a(O, p);
					};
					C(Pt, (O) => {
						o().cancel && O(Vt);
					});
				}
				var jt = Se(Pt, 2);
				{
					var Gt = (O) => {
						var p = zo(),
							he = ke(p, !0);
						fe(p),
							Q(
								(N) => {
									x(p, 'style', ft()), Ze(p, We(N)), nt(he, o().action.label);
								},
								[
									() => {
										var N, q, f;
										return Ye(
											(N = ae()) == null ? void 0 : N.actionButton,
											(f = (q = o()) == null ? void 0 : q.classes) == null ? void 0 : f.actionButton
										);
									}
								],
								j
							),
							$('click', p, (N) => {
								var q;
								(q = o().action) == null || q.onClick(N), !N.defaultPrevented && xe();
							}),
							a(O, p);
					};
					C(jt, (O) => {
						o().action && O(Gt);
					});
				}
				a(n, c);
			};
		C(Kt, (n) => {
			o().component ? n(Rt) : n(zt, !1);
		});
	}
	fe(i),
		Dt(
			i,
			(n) => r(J, n),
			() => e(J)
		),
		Q(
			(n, c, b) => {
				var I;
				x(i, 'aria-live', o().important ? 'assertive' : 'polite'),
					Ze(i, We(n)),
					x(i, 'data-styled', !(o().component || ((I = o()) != null && I.unstyled) || u())),
					x(i, 'data-mounted', e(M)),
					x(i, 'data-promise', c),
					x(i, 'data-removed', e(ne)),
					x(i, 'data-visible', e(U)),
					x(i, 'data-y-position', e(te)[0]),
					x(i, 'data-x-position', e(te)[1]),
					x(i, 'data-index', de()),
					x(i, 'data-front', e(H)),
					x(i, 'data-swiping', e(se)),
					x(i, 'data-type', e(h)),
					x(i, 'data-invert', oe()),
					x(i, 'data-swipe-out', e(ve)),
					x(i, 'data-expanded', b),
					x(i, 'style', `${l.style} ${o().style}`),
					Ce(i, '--index', de()),
					Ce(i, '--toasts-before', de()),
					Ce(i, '--z-index', A().length - de()),
					Ce(i, '--offset', `${e(ne) ? e(Pe) : e(R)}px`),
					Ce(i, '--initial-height', `${e(P)}px`);
			},
			[
				() => {
					var n, c, b, I, E, ue;
					return Ye(
						l.class,
						e(ee),
						(n = ae()) == null ? void 0 : n.toast,
						(b = (c = o()) == null ? void 0 : c.classes) == null ? void 0 : b.toast,
						(I = ae()) == null ? void 0 : I[e(h)],
						(ue = (E = o()) == null ? void 0 : E.classes) == null ? void 0 : ue[e(h)]
					);
				},
				() => !!o().promise,
				() => !!(Ke() || (we() && e(M)))
			],
			j
		),
		$('pointerdown', i, w),
		$('pointerup', i, Ue),
		$('pointermove', i, z),
		a(B, i),
		De(),
		_();
}
var jo = F('<ol></ol>'),
	Go = F('<section class="svelte-1fo5d1m"></section>');
function Wo(B, t) {
	const l = Tt(t, ['children', '$$slots', '$$events', '$$legacy']),
		S = Tt(l, [
			'invert',
			'theme',
			'position',
			'hotkey',
			'containerAriaLabel',
			'richColors',
			'expand',
			'duration',
			'visibleToasts',
			'closeButton',
			'toastOptions',
			'offset',
			'dir'
		]);
	Oe(t, !1);
	const [_, k] = ct(),
		y = () => Ee(o, '$toasts', _),
		A = () => Ee(de, '$heights', _),
		H = m(),
		U = m(),
		G = 3,
		W = '32px',
		h = 356,
		ee = 14,
		le = 'dark',
		K = 'light';
	function te(u) {
		return u !== 'system'
			? u
			: typeof window < 'u' &&
				  window.matchMedia &&
				  window.matchMedia('(prefers-color-scheme: dark)').matches
				? le
				: K;
	}
	function V() {
		if (typeof window > 'u' || typeof document > 'u') return 'ltr';
		const u = document.documentElement.getAttribute('dir');
		return u === 'auto' || !u ? window.getComputedStyle(document.documentElement).direction : u;
	}
	let X = s(t, 'invert', 8, !1),
		Y = s(t, 'theme', 8, 'light'),
		_e = s(t, 'position', 8, 'bottom-right'),
		ye = s(t, 'hotkey', 24, () => ['altKey', 'KeyT']),
		ce = s(t, 'containerAriaLabel', 8, 'Notifications'),
		Z = s(t, 'richColors', 8, !1),
		Xe = s(t, 'expand', 8, !1),
		He = s(t, 'duration', 8, 4e3),
		Je = s(t, 'visibleToasts', 8, G),
		dt = s(t, 'closeButton', 8, !1),
		me = s(t, 'toastOptions', 24, () => ({})),
		Le = s(t, 'offset', 8, null),
		tt = s(t, 'dir', 24, V);
	const { toasts: o, heights: de, reset: Ke } = Lt;
	let oe = m(!1),
		Ne = m(!1),
		Be = m(te(Y())),
		we = m(),
		be = null,
		Me = !1;
	co(() => {
		e(we) && be && (be.focus({ preventScroll: !0 }), (be = null), (Me = !1));
	}),
		Bt(() => {
			Ke();
			const u = (M) => {
				var se, ve;
				ye().every((Pe) => M[Pe] || M.code === Pe) &&
					(r(oe, !0), (se = e(we)) == null || se.focus()),
					M.code === 'Escape' &&
						(document.activeElement === e(we) ||
							((ve = e(we)) != null && ve.contains(document.activeElement))) &&
						r(oe, !1);
			};
			return (
				document.addEventListener('keydown', u),
				() => {
					document.removeEventListener('keydown', u);
				}
			);
		});
	function ut(u) {
		Me &&
			!u.currentTarget.contains(u.relatedTarget) &&
			((Me = !1), be && (be.focus({ preventScroll: !0 }), (be = null)));
	}
	function ft(u) {
		Me || ((Me = !0), (be = u.relatedTarget));
	}
	d(
		() => (v(_e()), y()),
		() => {
			r(
				H,
				Array.from(
					new Set(
						[
							_e(),
							...y()
								.filter((u) => u.position)
								.map((u) => u.position)
						].filter(Boolean)
					)
				)
			);
		}
	),
		d(
			() => v(ye()),
			() => {
				r(U, ye().join('+').replace(/Key/g, '').replace(/Digit/g, ''));
			}
		),
		d(
			() => y(),
			() => {
				y().length <= 1 && r(oe, !1);
			}
		),
		d(
			() => y(),
			() => {
				const u = y().filter((M) => M.dismiss && !M.delete);
				if (u.length > 0) {
					const M = y().map((ne) => (u.find((ve) => ve.id === ne.id) ? { ...ne, delete: !0 } : ne));
					o.set(M);
				}
			}
		),
		d(
			() => v(Y()),
			() => {
				if ((Y() !== 'system' && r(Be, Y()), typeof window < 'u')) {
					Y() === 'system' &&
						(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
							? r(Be, le)
							: r(Be, K));
					const u = window.matchMedia('(prefers-color-scheme: dark)'),
						M = ({ matches: ne }) => {
							r(Be, ne ? le : K);
						};
					'addEventListener' in u ? u.addEventListener('change', M) : u.addListener(M);
				}
			}
		),
		Ct(),
		qe();
	var Re = T(),
		mt = g(Re);
	{
		var ae = (u) => {
			var M = Go();
			x(M, 'tabindex', -1),
				St(
					M,
					5,
					() => e(H),
					Ht,
					(ne, se, ve, Pe) => {
						var P = jo();
						let J;
						St(
							P,
							7,
							() => y().filter((R) => (!R.position && ve === 0) || R.position === e(se)),
							(R) => R.id,
							(R, Ie, ze, ge) => {
								const vt = j(() => {
										var w;
										return ((w = me()) == null ? void 0 : w.actionButtonStyle) || '';
									}),
									xe = j(() => {
										var w;
										return ((w = me()) == null ? void 0 : w.cancelButtonStyle) || '';
									}),
									Ae = j(() => {
										var w;
										return ((w = me()) == null ? void 0 : w.class) || '';
									}),
									Fe = j(() => {
										var w;
										return ((w = me()) == null ? void 0 : w.descriptionClass) || '';
									}),
									gt = j(() => me().classes || {}),
									ot = j(() => {
										var w;
										return ((w = me()) == null ? void 0 : w.duration) ?? He();
									}),
									at = j(() => me().unstyled || !1);
								Vo(R, {
									get index() {
										return e(ze);
									},
									get toast() {
										return e(Ie);
									},
									get invert() {
										return X();
									},
									get visibleToasts() {
										return Je();
									},
									get closeButton() {
										return dt();
									},
									get interacting() {
										return e(Ne);
									},
									get position() {
										return e(se);
									},
									get expandByDefault() {
										return Xe();
									},
									get expanded() {
										return e(oe);
									},
									get actionButtonStyle() {
										return e(vt);
									},
									get cancelButtonStyle() {
										return e(xe);
									},
									get class() {
										return e(Ae);
									},
									get descriptionClass() {
										return e(Fe);
									},
									get classes() {
										return e(gt);
									},
									get duration() {
										return e(ot);
									},
									get unstyled() {
										return e(at);
									},
									$$slots: {
										'loading-icon': (w, Ue) => {
											var z = T(),
												i = g(z);
											pe(i, t, 'loading-icon', {}, (re) => {
												const ht = j(() => e(Ie).type === 'loading');
												Oo(re, {
													get visible() {
														return e(ht);
													}
												});
											}),
												a(w, z);
										},
										'success-icon': (w, Ue) => {
											var z = T(),
												i = g(z);
											pe(i, t, 'success-icon', {}, (re) => {
												rt(re, { type: 'success' });
											}),
												a(w, z);
										},
										'error-icon': (w, Ue) => {
											var z = T(),
												i = g(z);
											pe(i, t, 'error-icon', {}, (re) => {
												rt(re, { type: 'error' });
											}),
												a(w, z);
										},
										'warning-icon': (w, Ue) => {
											var z = T(),
												i = g(z);
											pe(i, t, 'warning-icon', {}, (re) => {
												rt(re, { type: 'warning' });
											}),
												a(w, z);
										},
										'info-icon': (w, Ue) => {
											var z = T(),
												i = g(z);
											pe(i, t, 'info-icon', {}, (re) => {
												rt(re, { type: 'info' });
											}),
												a(w, z);
										}
									}
								});
							}
						),
							fe(P),
							Dt(
								P,
								(R) => r(we, R),
								() => e(we)
							),
							Q(
								(R, Ie, ze) => {
									var ge;
									(J = go(
										P,
										J,
										{
											tabIndex: -1,
											class: l.class,
											'data-sonner-toaster': !0,
											'data-theme': e(Be),
											'data-rich-colors': Z(),
											dir: R,
											'data-y-position': Ie,
											'data-x-position': ze,
											style: l.style,
											...S
										},
										'svelte-1fo5d1m'
									)),
										Ce(
											P,
											'--front-toast-height',
											`${(ge = A()[0]) == null ? void 0 : ge.height}px`
										),
										Ce(P, '--offset', typeof Le() == 'number' ? `${Le()}px` : Le() || W),
										Ce(P, '--width', `${h}px`),
										Ce(P, '--gap', `${ee}px`),
										(P.dir = P.dir);
								},
								[
									() => (tt() === 'auto' ? V() : tt()),
									() => e(se).split('-')[0],
									() => e(se).split('-')[1]
								],
								j
							),
							$('blur', P, ut),
							$('focus', P, ft),
							$('mouseenter', P, () => r(oe, !0)),
							$('mousemove', P, () => r(oe, !0)),
							$('mouseleave', P, () => {
								e(Ne) || r(oe, !1);
							}),
							$('pointerdown', P, () => r(Ne, !0)),
							$('pointerup', P, () => r(Ne, !1)),
							a(ne, P);
					}
				),
				fe(M),
				Q(() => x(M, 'aria-label', `${ce()} ${e(U)}`)),
				a(u, M);
		};
		C(mt, (u) => {
			y().length > 0 && u(ae);
		});
	}
	a(B, Re), De(), k();
}
function Yo(B, t) {
	const [l, S] = ct(),
		_ = () => Ee(Ot, '$mode', l);
	let k = io(t, ['$$slots', '$$events', '$$legacy']);
	Wo(
		B,
		it(
			{
				get theme() {
					return _();
				},
				class: 'toaster group',
				toastOptions: {
					classes: {
						toast:
							'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
						description: 'group-[.toast]:text-muted-foreground',
						actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
						cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
					}
				}
			},
			() => k
		)
	),
		S();
}
var Zo = F('<!> <!> <!>', 1);
function pa(B, t) {
	Oe(t, !0), eo.authStore.isValid;
	var l = Zo(),
		S = g(l);
	Mo(S, {});
	var _ = Se(S, 2);
	Yo(_, {});
	var k = Se(_, 2);
	$t(k, () => t.children), a(B, l), De();
}
export { pa as component, ha as universal };
