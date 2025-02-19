import '../chunks/Bg9kRutz.js';
import {
	p as jr,
	b as Ce,
	u as kr,
	f as a,
	a as Gr,
	s as t,
	c as q,
	g as s,
	e as ue,
	n as l,
	r as J,
	h as He,
	t as ee
} from '../chunks/BHafZ7-g.js';
import { s as ce } from '../chunks/709vCQOk.js';
import { s as Kr, i as Qr } from '../chunks/CjIAJ7VA.js';
import { e as wr, i as qr } from '../chunks/CNlA5Cx2.js';
import { t as c, a as e, c as u, b as _ } from '../chunks/D4wBL3Sd.js';
import { c as r } from '../chunks/D-TmFHfb.js';
import { s as Jr } from '../chunks/eK_4uKAs.js';
import { p as re } from '../chunks/BMat-oFk.js';
import { o as Fr } from '../chunks/CGny5e2U.js';
import { p as Cr } from '../chunks/BMGf2NTm.js';
import { B as Hr, a as Oe, b as yr, c as Sr, d as Or, e as Vr } from '../chunks/gqCKvLmc.js';
import { S as Dr } from '../chunks/QDzNhrkw.js';
import { M as Wr } from '../chunks/CZSIPx2q.js';
import { I as Xr } from '../chunks/C5wd2lyJ.js';
import { S as Yr } from '../chunks/BBGdLrs8.js';
import '../chunks/DvUo5-ap.js';
import { B as Ve } from '../chunks/Bsldq5z3.js';
import { t as Zr } from '../chunks/B7Pfnr5e.js';
import '../chunks/69_IOA4Y.js';
import '../chunks/B4fvhT3s.js';
import { P as et, a as rt, b as Ee } from '../chunks/3ME8iwst.js';
import { I as tt, P as at, a as st, b as ot, c as lt } from '../chunks/y1BRFByf.js';
import '../chunks/FIXHeqsx.js';
import { C as nt } from '../chunks/QDtlYqdc.js';
import { C as dt, a as it, b as _t, c as vt, D as ut } from '../chunks/CbUYl22c.js';
import { C as ct } from '../chunks/vYS07VBd.js';
import { R as $t, T as pt, D as mt, G as ft, a as Br } from '../chunks/BOSOt6G1.js';
import { T as ht, a as gt, b as zr, c as te, d as Pt, e as ae } from '../chunks/CYrfLlo4.js';
import { T as bt, a as Ne, b as xt, R as Tt } from '../chunks/CaFChx9j.js';
import { S as kt } from '../chunks/B0otktkl.js';
import { S as wt, M as Ct } from '../chunks/BmsKTWgn.js';
import { C as yt } from '../chunks/BLV2UlSA.js';
import { C as St } from '../chunks/B4xPSlFl.js';
import { C as Dt } from '../chunks/CoAsnqVS.js';
import { E as Bt } from '../chunks/5MHrB5bI.js';
var zt = c('<!> <!> <span class="sr-only">Toggle theme</span>', 1),
	It = c('<span class="hover:underline">Dashboard</span>'),
	Lt = c('<a href="/students">Data Siswa</a>'),
	Mt = c('<!> <!> <!> <!> <!>', 1),
	At = c('<!> <!> <!> <!>', 1),
	Rt = c('<!> <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Add User</span>', 1),
	Et = c('<!> <!>', 1),
	Nt = c('<!> <!> <!> <!> <!> <!> <!>', 1),
	Ut = c('<img alt="User" class="aspect-square rounded-md object-cover" height="64" width="64">'),
	jt = c('<!> <span class="sr-only">Toggle menu</span>', 1),
	Gt = c('<!> <!> <!>', 1),
	Kt = c('<!> <!>', 1),
	Qt = c('<!> <!> <!> <!> <!> <!> <!>', 1),
	qt = c('<!> <!>', 1),
	Jt = c('<!> <span class="hidden sm:block">Previous</span>', 1),
	Ft = c('<span class="hidden sm:block">Next</span> <!>', 1),
	Ht = c('<!> <!> <!>', 1),
	Ot = c('<!> <div class="overflow-x-auto"><!></div> <!>', 1),
	Vt = c(
		'<div class="flex items-center"><!> <div class="ml-auto flex items-center gap-2"><!> <!></div></div> <!>',
		1
	),
	Wt = c(
		'<header class="flex h-16 shrink-0 items-center gap-2 px-4 py-2"><div class="flex items-center gap-3"><!> <!> <!> <!> <!></div> <div class="relative ml-auto flex flex-1 items-center justify-end"><!> <!></div></header> <div class="flex flex-1 flex-col gap-4 p-10 pt-0"><main class="grid flex-1 items-start"><!></main></div>',
		1
	);
function Ma(Ir, Lr) {
	jr(Lr, !0);
	const We = new Wr('(min-width: 768px)'),
		Xe = He(() => (We.current ? 5 : 8)),
		Mr = He(() => (We.current ? 1 : 0));
	re([]);
	let Ye = Ce(re([])),
		$e = Ce(''),
		pe = Ce(1),
		Ze = Ce(0),
		se = Ce('all');
	kr(() => {
		s(se) && ue(pe, 1);
	});
	async function er() {
		try {
			const b = [];
			s($e).trim() && b.push(`user_id.full_name ~ "${s($e)}"`),
				s(se) !== 'all' && b.push(`status = "${s(se)}"`);
			const U = b.join(' && '),
				z = await Cr.collection('students').getList(s(pe), s(Xe), {
					filter: U,
					expand: 'user_id,class_id'
				});
			ue(Ye, re(z.items)), ue(Ze, re(z.totalItems));
		} catch (b) {
			console.error('Error fetching students:', b);
		}
	}
	Fr(() => {
		er();
	}),
		kr(() => {
			s($e), s(pe), s(se), er();
		});
	var rr = Wt(),
		Ue = a(rr),
		je = q(Ue),
		tr = q(je);
	r(
		tr,
		() => Yr,
		(b, U) => {
			U(b, { class: '-ml-1' });
		}
	);
	var ar = t(tr, 2);
	Dr(ar, { orientation: 'vertical', class: 'mr-2 h-4' });
	var sr = t(ar, 2);
	Ve(sr, {
		onclick: Zr,
		variant: 'outline',
		size: 'sm',
		class: 'mr-2',
		children: (b, U) => {
			var z = zt(),
				ye = a(z);
			wt(ye, {
				class:
					'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
			});
			var F = t(ye, 2);
			Ct(F, {
				class:
					'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
			}),
				l(2),
				e(b, z);
		},
		$$slots: { default: !0 }
	});
	var or = t(sr, 2);
	Dr(or, { orientation: 'vertical', class: 'mr-2 h-4' });
	var Ar = t(or, 2);
	r(
		Ar,
		() => Vr,
		(b, U) => {
			U(b, {
				children: (z, ye) => {
					var F = u(),
						me = a(F);
					r(
						me,
						() => Hr,
						(Se, De) => {
							De(Se, {
								children: (Be, _r) => {
									var ze = Mt(),
										j = a(ze);
									r(
										j,
										() => Oe,
										(T, k) => {
											k(T, {
												class: 'hidden md:block',
												children: (R, le) => {
													var p = u(),
														f = a(p);
													r(
														f,
														() => yr,
														(h, C) => {
															C(h, {
																href: '#',
																children: (x, Ie) => {
																	l();
																	var I = _('Menu Tambahan');
																	e(x, I);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(R, p);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var H = t(j, 2);
									r(
										H,
										() => Sr,
										(T, k) => {
											k(T, { class: 'hidden md:block' });
										}
									);
									var N = t(H, 2);
									r(
										N,
										() => Oe,
										(T, k) => {
											k(T, {
												children: (R, le) => {
													var p = u(),
														f = a(p);
													r(
														f,
														() => yr,
														(h, C) => {
															C(h, {
																href: '/dashboard',
																children: (x, Ie) => {
																	var I = It();
																	e(x, I);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(R, p);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var oe = t(N, 2);
									r(
										oe,
										() => Sr,
										(T, k) => {
											k(T, {});
										}
									);
									var O = t(oe, 2);
									r(
										O,
										() => Oe,
										(T, k) => {
											k(T, {
												children: (R, le) => {
													var p = u(),
														f = a(p);
													r(
														f,
														() => Or,
														(h, C) => {
															C(h, {
																children: (x, Ie) => {
																	var I = Lt();
																	e(x, I);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(R, p);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Be, ze);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(z, F);
				},
				$$slots: { default: !0 }
			});
		}
	),
		J(je);
	var lr = t(je, 2),
		nr = q(lr);
	Xr(nr, {
		type: 'search',
		placeholder: 'Cari Siswa',
		class: 'bg-background w-full rounded-lg pr-8 md:w-[200px] lg:w-[320px]',
		get value() {
			return s($e);
		},
		set value(b) {
			ue($e, re(b));
		}
	});
	var Rr = t(nr, 2);
	kt(Rr, { class: 'text-muted-foreground absolute right-2.5 top-2.5 size-4' }), J(lr), J(Ue);
	var dr = t(Ue, 2),
		ir = q(dr),
		Er = q(ir);
	r(
		Er,
		() => Tt,
		(b, U) => {
			U(b, {
				get value() {
					return s(se);
				},
				set value(z) {
					ue(se, re(z));
				},
				children: (z, ye) => {
					var F = Vt(),
						me = a(F),
						Se = q(me);
					r(
						Se,
						() => bt,
						(j, H) => {
							H(j, {
								children: (N, oe) => {
									var O = At(),
										T = a(O);
									r(
										T,
										() => Ne,
										(p, f) => {
											f(p, {
												value: 'all',
												children: (h, C) => {
													l();
													var x = _('Semua');
													e(h, x);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var k = t(T, 2);
									r(
										k,
										() => Ne,
										(p, f) => {
											f(p, {
												value: 'active',
												children: (h, C) => {
													l();
													var x = _('Aktif');
													e(h, x);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var R = t(k, 2);
									r(
										R,
										() => Ne,
										(p, f) => {
											f(p, {
												value: 'graduated',
												children: (h, C) => {
													l();
													var x = _('Lulus');
													e(h, x);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var le = t(R, 2);
									r(
										le,
										() => Ne,
										(p, f) => {
											f(p, {
												value: 'dropped',
												children: (h, C) => {
													l();
													var x = _('Berhenti');
													e(h, x);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(N, O);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var De = t(Se, 2),
						Be = q(De);
					tt(Be, {});
					var _r = t(Be, 2);
					Ve(_r, {
						size: 'sm',
						class: 'h-7 gap-1',
						children: (j, H) => {
							var N = Rt(),
								oe = a(N);
							yt(oe, { class: 'size-3.5' }), l(2), e(j, N);
						},
						$$slots: { default: !0 }
					}),
						J(De),
						J(me);
					var ze = t(me, 2);
					r(
						ze,
						() => xt,
						(j, H) => {
							H(j, {
								value: 'all',
								children: (N, oe) => {
									var O = u(),
										T = a(O);
									r(
										T,
										() => nt,
										(k, R) => {
											R(k, {
												children: (le, p) => {
													var f = Ot(),
														h = a(f);
													r(
														h,
														() => dt,
														(I, fe) => {
															fe(I, {
																children: (he, vr) => {
																	var G = Et(),
																		ne = a(G);
																	r(
																		ne,
																		() => it,
																		(V, de) => {
																			de(V, {
																				children: (K, L) => {
																					l();
																					var Q = _('Data User');
																					e(K, Q);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	);
																	var ge = t(ne, 2);
																	r(
																		ge,
																		() => _t,
																		(V, de) => {
																			de(V, {
																				children: (K, L) => {
																					l();
																					var Q = _(
																						'Kelola pengguna Anda dan lihat informasi mereka.'
																					);
																					e(K, Q);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		e(he, G);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var C = t(h, 2),
														x = q(C);
													r(
														x,
														() => vt,
														(I, fe) => {
															fe(I, {
																children: (he, vr) => {
																	var G = u(),
																		ne = a(G);
																	r(
																		ne,
																		() => ht,
																		(ge, V) => {
																			V(ge, {
																				children: (de, K) => {
																					var L = qt(),
																						Q = a(L);
																					r(
																						Q,
																						() => gt,
																						(ie, Pe) => {
																							Pe(ie, {
																								children: (be, Ke) => {
																									var W = u(),
																										Le = a(W);
																									r(
																										Le,
																										() => zr,
																										(_e, y) => {
																											y(_e, {
																												children: (X, Me) => {
																													var B = Nt(),
																														S = a(B);
																													r(
																														S,
																														() => te,
																														(d, v) => {
																															v(d, {
																																class: 'hidden sm:table-cell',
																																children: (n, P) => {
																																	l();
																																	var o = _('Photo');
																																	e(n, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var M = t(S, 2);
																													r(
																														M,
																														() => te,
																														(d, v) => {
																															v(d, {
																																class: 'hidden lg:table-cell',
																																children: (n, P) => {
																																	l();
																																	var o = _('NISN');
																																	e(n, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var Y = t(M, 2);
																													r(
																														Y,
																														() => te,
																														(d, v) => {
																															v(d, {
																																children: (n, P) => {
																																	l();
																																	var o = _('Nama Lengkap');
																																	e(n, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var D = t(Y, 2);
																													r(
																														D,
																														() => te,
																														(d, v) => {
																															v(d, {
																																class: 'hidden md:table-cell',
																																children: (n, P) => {
																																	l();
																																	var o = _('Tempat Lahir');
																																	e(n, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var A = t(D, 2);
																													r(
																														A,
																														() => te,
																														(d, v) => {
																															v(d, {
																																class: 'hidden lg:table-cell',
																																children: (n, P) => {
																																	l();
																																	var o = _('Tanggal Lahir');
																																	e(n, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var g = t(A, 2);
																													r(
																														g,
																														() => te,
																														(d, v) => {
																															v(d, {
																																class: 'hidden lg:table-cell',
																																children: (n, P) => {
																																	l();
																																	var o = _('Jenis Kelamin');
																																	e(n, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var w = t(g, 2);
																													r(
																														w,
																														() => te,
																														(d, v) => {
																															v(d, {
																																children: (n, P) => {
																																	l();
																																	var o = _('Actions');
																																	e(n, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													),
																														e(X, B);
																												},
																												$$slots: { default: !0 }
																											});
																										}
																									),
																										e(be, W);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var Ge = t(Q, 2);
																					r(
																						Ge,
																						() => Pt,
																						(ie, Pe) => {
																							Pe(ie, {
																								children: (be, Ke) => {
																									var W = u(),
																										Le = a(W);
																									wr(
																										Le,
																										17,
																										() => s(Ye),
																										qr,
																										(_e, y) => {
																											var X = u(),
																												Me = a(X);
																											r(
																												Me,
																												() => zr,
																												(B, S) => {
																													S(B, {
																														children: (M, Y) => {
																															var D = Qt(),
																																A = a(D);
																															r(
																																A,
																																() => ae,
																																(o, $) => {
																																	$(o, {
																																		class: 'hidden sm:table-cell',
																																		children: (m, E) => {
																																			var i = Ut();
																																			ee(
																																				(Z) => Jr(i, 'src', Z),
																																				[
																																					() =>
																																						s(y).expand.user_id
																																							.avatar
																																							? Cr.files.getURL(
																																									s(y).expand
																																										.user_id,
																																									s(y).expand
																																										.user_id.avatar
																																								)
																																							: 'https://placehold.co/40'
																																				]
																																			),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															);
																															var g = t(A, 2);
																															r(
																																g,
																																() => ae,
																																(o, $) => {
																																	$(o, {
																																		class:
																																			'font-medium hidden lg:table-cell',
																																		children: (m, E) => {
																																			l();
																																			var i = _();
																																			ee(() => ce(i, s(y).nisn)),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															);
																															var w = t(g, 2);
																															r(
																																w,
																																() => ae,
																																(o, $) => {
																																	$(o, {
																																		children: (m, E) => {
																																			l();
																																			var i = _();
																																			ee(() =>
																																				ce(
																																					i,
																																					s(y).expand.user_id
																																						.full_name
																																				)
																																			),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															);
																															var d = t(w, 2);
																															r(
																																d,
																																() => ae,
																																(o, $) => {
																																	$(o, {
																																		class: 'hidden md:table-cell',
																																		children: (m, E) => {
																																			l();
																																			var i = _();
																																			ee(() =>
																																				ce(
																																					i,
																																					s(y).expand.user_id
																																						.birth_place
																																				)
																																			),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															);
																															var v = t(d, 2);
																															r(
																																v,
																																() => ae,
																																(o, $) => {
																																	$(o, {
																																		class: 'hidden lg:table-cell',
																																		children: (m, E) => {
																																			l();
																																			var i = _();
																																			ee(
																																				(Z) => ce(i, Z),
																																				[
																																					() =>
																																						new Date(
																																							s(
																																								y
																																							).expand.user_id.birth_date
																																						).toLocaleString(
																																							'id-ID',
																																							{
																																								day: 'numeric',
																																								month: 'long',
																																								year: 'numeric'
																																							}
																																						)
																																				]
																																			),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															);
																															var n = t(v, 2);
																															r(
																																n,
																																() => ae,
																																(o, $) => {
																																	$(o, {
																																		class: 'hidden lg:table-cell',
																																		children: (m, E) => {
																																			l();
																																			var i = _();
																																			ee(() =>
																																				ce(
																																					i,
																																					s(y).expand.user_id.gender
																																				)
																																			),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															);
																															var P = t(n, 2);
																															r(
																																P,
																																() => ae,
																																(o, $) => {
																																	$(o, {
																																		children: (m, E) => {
																																			var i = u(),
																																				Z = a(i);
																																			r(
																																				Z,
																																				() => $t,
																																				(Qe, ur) => {
																																					ur(Qe, {
																																						children: (Ae, Xt) => {
																																							var cr = Kt(),
																																								$r = a(cr);
																																							r(
																																								$r,
																																								() => pt,
																																								(qe, Je) => {
																																									Je(qe, {
																																										child: (
																																											mr,
																																											ve
																																										) => {
																																											Ve(
																																												mr,
																																												Kr(
																																													() =>
																																														ve ==
																																														null
																																															? void 0
																																															: ve()
																																																	.props,
																																													{
																																														'aria-haspopup':
																																															'true',
																																														size: 'icon',
																																														variant:
																																															'ghost',
																																														children:
																																															(
																																																Fe,
																																																hr
																																															) => {
																																																var Re =
																																																		jt(),
																																																	gr =
																																																		a(
																																																			Re
																																																		);
																																																Bt(
																																																	gr,
																																																	{
																																																		class:
																																																			'size-4'
																																																	}
																																																),
																																																	l(
																																																		2
																																																	),
																																																	e(
																																																		Fe,
																																																		Re
																																																	);
																																															},
																																														$$slots:
																																															{
																																																default:
																																																	!0
																																															}
																																													}
																																												)
																																											);
																																										},
																																										$$slots: {
																																											child: !0
																																										}
																																									});
																																								}
																																							);
																																							var Nr = t($r, 2);
																																							r(
																																								Nr,
																																								() => mt,
																																								(qe, Je) => {
																																									Je(qe, {
																																										align: 'end',
																																										children: (
																																											pr,
																																											mr
																																										) => {
																																											var ve = u(),
																																												fr = a(ve);
																																											r(
																																												fr,
																																												() => ft,
																																												(
																																													Fe,
																																													hr
																																												) => {
																																													hr(Fe, {
																																														children:
																																															(
																																																Re,
																																																gr
																																															) => {
																																																var Pr =
																																																		Gt(),
																																																	br =
																																																		a(
																																																			Pr
																																																		);
																																																r(
																																																	br,
																																																	() =>
																																																		ut,
																																																	(
																																																		xe,
																																																		Te
																																																	) => {
																																																		Te(
																																																			xe,
																																																			{
																																																				children:
																																																					(
																																																						ke,
																																																						Tr
																																																					) => {
																																																						l();
																																																						var we =
																																																							_(
																																																								'Actions'
																																																							);
																																																						e(
																																																							ke,
																																																							we
																																																						);
																																																					},
																																																				$$slots:
																																																					{
																																																						default:
																																																							!0
																																																					}
																																																			}
																																																		);
																																																	}
																																																);
																																																var xr =
																																																	t(
																																																		br,
																																																		2
																																																	);
																																																r(
																																																	xr,
																																																	() =>
																																																		Br,
																																																	(
																																																		xe,
																																																		Te
																																																	) => {
																																																		Te(
																																																			xe,
																																																			{
																																																				children:
																																																					(
																																																						ke,
																																																						Tr
																																																					) => {
																																																						l();
																																																						var we =
																																																							_(
																																																								'Edit'
																																																							);
																																																						e(
																																																							ke,
																																																							we
																																																						);
																																																					},
																																																				$$slots:
																																																					{
																																																						default:
																																																							!0
																																																					}
																																																			}
																																																		);
																																																	}
																																																);
																																																var Ur =
																																																	t(
																																																		xr,
																																																		2
																																																	);
																																																r(
																																																	Ur,
																																																	() =>
																																																		Br,
																																																	(
																																																		xe,
																																																		Te
																																																	) => {
																																																		Te(
																																																			xe,
																																																			{
																																																				children:
																																																					(
																																																						ke,
																																																						Tr
																																																					) => {
																																																						l();
																																																						var we =
																																																							_(
																																																								'Delete'
																																																							);
																																																						e(
																																																							ke,
																																																							we
																																																						);
																																																					},
																																																				$$slots:
																																																					{
																																																						default:
																																																							!0
																																																					}
																																																			}
																																																		);
																																																	}
																																																),
																																																	e(
																																																		Re,
																																																		Pr
																																																	);
																																															},
																																														$$slots:
																																															{
																																																default:
																																																	!0
																																															}
																																													});
																																												}
																																											),
																																												e(pr, ve);
																																										},
																																										$$slots: {
																																											default: !0
																																										}
																																									});
																																								}
																																							),
																																								e(Ae, cr);
																																						},
																																						$$slots: { default: !0 }
																																					});
																																				}
																																			),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															),
																																e(M, D);
																														},
																														$$slots: { default: !0 }
																													});
																												}
																											),
																												e(_e, X);
																										}
																									),
																										e(be, W);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					),
																						e(de, L);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		e(he, G);
																},
																$$slots: { default: !0 }
															});
														}
													),
														J(C);
													var Ie = t(C, 2);
													r(
														Ie,
														() => ct,
														(I, fe) => {
															fe(I, {
																children: (he, vr) => {
																	var G = u(),
																		ne = a(G);
																	r(
																		ne,
																		() => et,
																		(ge, V) => {
																			V(ge, {
																				get count() {
																					return s(Ze);
																				},
																				get perPage() {
																					return s(Xe);
																				},
																				get siblingCount() {
																					return s(Mr);
																				},
																				get page() {
																					return s(pe);
																				},
																				set page(K) {
																					ue(pe, re(K));
																				},
																				children: (K, L) => {
																					let Q = () => (L == null ? void 0 : L().pages),
																						Ge = () => (L == null ? void 0 : L().currentPage);
																					var ie = u(),
																						Pe = a(ie);
																					r(
																						Pe,
																						() => rt,
																						(be, Ke) => {
																							Ke(be, {
																								children: (W, Le) => {
																									var _e = Ht(),
																										y = a(_e);
																									r(
																										y,
																										() => Ee,
																										(B, S) => {
																											S(B, {
																												children: (M, Y) => {
																													var D = u(),
																														A = a(D);
																													r(
																														A,
																														() => at,
																														(g, w) => {
																															w(g, {
																																children: (d, v) => {
																																	var n = Jt(),
																																		P = a(n);
																																	St(P, { class: 'size-4' }),
																																		l(2),
																																		e(d, n);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													),
																														e(M, D);
																												},
																												$$slots: { default: !0 }
																											});
																										}
																									);
																									var X = t(y, 2);
																									wr(
																										X,
																										17,
																										Q,
																										(B) => B.key,
																										(B, S) => {
																											var M = u(),
																												Y = a(M);
																											{
																												var D = (g) => {
																														var w = u(),
																															d = a(w);
																														r(
																															d,
																															() => Ee,
																															(v, n) => {
																																n(v, {
																																	children: (P, o) => {
																																		var $ = u(),
																																			m = a($);
																																		r(
																																			m,
																																			() => ot,
																																			(E, i) => {
																																				i(E, {});
																																			}
																																		),
																																			e(P, $);
																																	},
																																	$$slots: { default: !0 }
																																});
																															}
																														),
																															e(g, w);
																													},
																													A = (g) => {
																														var w = u(),
																															d = a(w);
																														r(
																															d,
																															() => Ee,
																															(v, n) => {
																																n(v, {
																																	children: (P, o) => {
																																		var $ = u(),
																																			m = a($);
																																		const E = He(
																																			() => Ge() === s(S).value
																																		);
																																		r(
																																			m,
																																			() => lt,
																																			(i, Z) => {
																																				Z(i, {
																																					get page() {
																																						return s(S);
																																					},
																																					get isActive() {
																																						return s(E);
																																					},
																																					children: (Qe, ur) => {
																																						l();
																																						var Ae = _();
																																						ee(() =>
																																							ce(Ae, s(S).value)
																																						),
																																							e(Qe, Ae);
																																					},
																																					$$slots: { default: !0 }
																																				});
																																			}
																																		),
																																			e(P, $);
																																	},
																																	$$slots: { default: !0 }
																																});
																															}
																														),
																															e(g, w);
																													};
																												Qr(Y, (g) => {
																													s(S).type === 'ellipsis'
																														? g(D)
																														: g(A, !1);
																												});
																											}
																											e(B, M);
																										}
																									);
																									var Me = t(X, 2);
																									r(
																										Me,
																										() => Ee,
																										(B, S) => {
																											S(B, {
																												children: (M, Y) => {
																													var D = u(),
																														A = a(D);
																													r(
																														A,
																														() => st,
																														(g, w) => {
																															w(g, {
																																children: (d, v) => {
																																	var n = Ft(),
																																		P = t(a(n), 2);
																																	Dt(P, { class: 'size-4' }),
																																		e(d, n);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													),
																														e(M, D);
																												},
																												$$slots: { default: !0 }
																											});
																										}
																									),
																										e(W, _e);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					),
																						e(K, ie);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		e(he, G);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(le, f);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(N, O);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(z, F);
				},
				$$slots: { default: !0 }
			});
		}
	),
		J(ir),
		J(dr),
		e(Ir, rr),
		Gr();
}
export { Ma as component };
