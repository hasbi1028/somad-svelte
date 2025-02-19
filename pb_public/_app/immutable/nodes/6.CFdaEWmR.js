import '../chunks/Bg9kRutz.js';
import {
	p as Ur,
	b as ye,
	u as br,
	f as a,
	a as Gr,
	s as t,
	e as ue,
	g as s,
	c as M,
	n,
	r as N,
	h as Fe,
	t as Z
} from '../chunks/BHafZ7-g.js';
import { s as ve } from '../chunks/709vCQOk.js';
import { s as Kr, i as Qr } from '../chunks/CjIAJ7VA.js';
import { e as wr, i as qr } from '../chunks/CNlA5Cx2.js';
import { t as c, a as e, c as v, b as _ } from '../chunks/D4wBL3Sd.js';
import { c as r } from '../chunks/D-TmFHfb.js';
import { s as Jr } from '../chunks/eK_4uKAs.js';
import { p as ee } from '../chunks/BMat-oFk.js';
import { o as Fr } from '../chunks/CGny5e2U.js';
import { p as Tr } from '../chunks/BRbqKDqJ.js';
import { B as Hr, a as He, b as Cr, c as yr, d as Or, e as Vr } from '../chunks/gqCKvLmc.js';
import { S as kr } from '../chunks/QDzNhrkw.js';
import { M as Wr } from '../chunks/CZSIPx2q.js';
import { I as Xr } from '../chunks/C5wd2lyJ.js';
import { S as Yr } from '../chunks/BBGdLrs8.js';
import '../chunks/DvUo5-ap.js';
import { B as Sr } from '../chunks/Bsldq5z3.js';
import '../chunks/B4fvhT3s.js';
import '../chunks/69_IOA4Y.js';
import { P as Zr, a as et, b as je } from '../chunks/3ME8iwst.js';
import { I as rt, P as tt, a as at, b as st, c as ot } from '../chunks/DmhfpRFb.js';
import '../chunks/FIXHeqsx.js';
import { C as lt } from '../chunks/QDtlYqdc.js';
import { C as nt, a as dt, b as it, c as _t, D as ut } from '../chunks/CbUYl22c.js';
import { C as vt } from '../chunks/vYS07VBd.js';
import { R as $t, T as ct, D as pt, G as mt, a as Dr } from '../chunks/BOSOt6G1.js';
import { T as ft, a as ht, b as Br, c as re, d as gt, e as te } from '../chunks/CYrfLlo4.js';
import { T as Pt, a as Ee, b as xt, R as bt } from '../chunks/CaFChx9j.js';
import { S as wt } from '../chunks/B0otktkl.js';
import { C as Tt } from '../chunks/BLV2UlSA.js';
import { C as Ct } from '../chunks/B4xPSlFl.js';
import { C as yt } from '../chunks/CoAsnqVS.js';
import { E as kt } from '../chunks/5MHrB5bI.js';
var St = c('<span class="hover:underline">Dashboard</span>'),
	Dt = c('<a href="/students">Data Siswa</a>'),
	Bt = c('<!> <!> <!> <!> <!>', 1),
	zt = c('<!> <!> <!> <!>', 1),
	It = c('<!> <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Add User</span>', 1),
	Lt = c('<!> <!>', 1),
	At = c('<!> <!> <!> <!> <!> <!> <!>', 1),
	Rt = c('<img alt="User" class="aspect-square rounded-md object-cover" height="64" width="64">'),
	jt = c('<!> <span class="sr-only">Toggle menu</span>', 1),
	Et = c('<!> <!> <!>', 1),
	Mt = c('<!> <!>', 1),
	Nt = c('<!> <!> <!> <!> <!> <!> <!>', 1),
	Ut = c('<!> <!>', 1),
	Gt = c('<!> <span class="hidden sm:block">Previous</span>', 1),
	Kt = c('<span class="hidden sm:block">Next</span> <!>', 1),
	Qt = c('<!> <!> <!>', 1),
	qt = c('<!> <div class="overflow-x-auto"><!></div> <!>', 1),
	Jt = c(
		'<div class="flex items-center"><!> <div class="ml-auto flex items-center gap-2"><!> <!></div></div> <!>',
		1
	),
	Ft = c(
		'<header class="flex flex-col md:flex-row h-auto md:h-16 gap-4 md:gap-2 px-4 py-2"><div class="flex items-center justify-between w-full md:w-auto"><div class="flex items-center gap-3"><!> <!> <!> <!></div> <div class="relative ml-auto flex flex-1 items-center justify-end"><!> <!></div></div></header> <div class="flex flex-1 flex-col gap-4 p-10 pt-0"><main class="grid flex-1 items-start"><!></main></div>',
		1
	);
function Sa(zr, Ir) {
	Ur(Ir, !0);
	const Oe = new Wr('(min-width: 768px)'),
		Ve = Fe(() => (Oe.current ? 5 : 8)),
		Lr = Fe(() => (Oe.current ? 1 : 0));
	ee([]);
	let We = ye(ee([])),
		$e = ye(''),
		ce = ye(1),
		Xe = ye(0),
		ae = ye('all');
	br(() => {
		s(ae) && ue(ce, 1);
	});
	async function Ye() {
		try {
			const C = [];
			s($e).trim() && C.push(`user_id.full_name ~ "${s($e)}"`),
				s(ae) !== 'all' && C.push(`status = "${s(ae)}"`);
			const J = C.join(' && '),
				U = await Tr.collection('students').getList(s(ce), s(Ve), {
					filter: J,
					expand: 'user_id,class_id'
				});
			ue(We, ee(U.items)), ue(Xe, ee(U.totalItems));
		} catch (C) {
			console.error('Error fetching students:', C);
		}
	}
	Fr(() => {
		Ye();
	}),
		br(() => {
			s($e), s(ce), s(ae), Ye();
		});
	var Ze = Ft(),
		Me = a(Ze),
		er = M(Me),
		Ne = M(er),
		rr = M(Ne);
	r(
		rr,
		() => Yr,
		(C, J) => {
			J(C, { class: '-ml-1' });
		}
	);
	var tr = t(rr, 2);
	kr(tr, { orientation: 'vertical', class: 'mr-2 h-4' });
	var ar = t(tr, 2);
	kr(ar, { orientation: 'vertical', class: 'mr-2 h-4' });
	var Ar = t(ar, 2);
	r(
		Ar,
		() => Vr,
		(C, J) => {
			J(C, {
				children: (U, Er) => {
					var pe = v(),
						me = a(pe);
					r(
						me,
						() => Hr,
						(ke, Se) => {
							Se(ke, {
								children: (De, dr) => {
									var Be = Bt(),
										G = a(Be);
									r(
										G,
										() => He,
										(b, w) => {
											w(b, {
												class: 'hidden md:block',
												children: (R, oe) => {
													var p = v(),
														f = a(p);
													r(
														f,
														() => Cr,
														(h, y) => {
															y(h, {
																href: '#',
																children: (x, ze) => {
																	n();
																	var z = _('Menu Tambahan');
																	e(x, z);
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
									var F = t(G, 2);
									r(
										F,
										() => yr,
										(b, w) => {
											w(b, { class: 'hidden md:block' });
										}
									);
									var E = t(F, 2);
									r(
										E,
										() => He,
										(b, w) => {
											w(b, {
												children: (R, oe) => {
													var p = v(),
														f = a(p);
													r(
														f,
														() => Cr,
														(h, y) => {
															y(h, {
																href: '/dashboard',
																children: (x, ze) => {
																	var z = St();
																	e(x, z);
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
									var se = t(E, 2);
									r(
										se,
										() => yr,
										(b, w) => {
											w(b, {});
										}
									);
									var H = t(se, 2);
									r(
										H,
										() => He,
										(b, w) => {
											w(b, {
												children: (R, oe) => {
													var p = v(),
														f = a(p);
													r(
														f,
														() => Or,
														(h, y) => {
															y(h, {
																children: (x, ze) => {
																	var z = Dt();
																	e(x, z);
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
										e(De, Be);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(U, pe);
				},
				$$slots: { default: !0 }
			});
		}
	),
		N(Ne);
	var sr = t(Ne, 2),
		or = M(sr);
	Xr(or, {
		type: 'search',
		placeholder: 'Cari Siswa',
		class: 'bg-background w-full rounded-lg pr-8 md:w-[200px] lg:w-[320px]',
		get value() {
			return s($e);
		},
		set value(C) {
			ue($e, ee(C));
		}
	});
	var Rr = t(or, 2);
	wt(Rr, { class: 'text-muted-foreground absolute right-2.5 top-2.5 size-4' }), N(sr), N(er), N(Me);
	var lr = t(Me, 2),
		nr = M(lr),
		jr = M(nr);
	r(
		jr,
		() => bt,
		(C, J) => {
			J(C, {
				get value() {
					return s(ae);
				},
				set value(U) {
					ue(ae, ee(U));
				},
				children: (U, Er) => {
					var pe = Jt(),
						me = a(pe),
						ke = M(me);
					r(
						ke,
						() => Pt,
						(G, F) => {
							F(G, {
								children: (E, se) => {
									var H = zt(),
										b = a(H);
									r(
										b,
										() => Ee,
										(p, f) => {
											f(p, {
												value: 'all',
												children: (h, y) => {
													n();
													var x = _('Semua');
													e(h, x);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var w = t(b, 2);
									r(
										w,
										() => Ee,
										(p, f) => {
											f(p, {
												value: 'active',
												children: (h, y) => {
													n();
													var x = _('Aktif');
													e(h, x);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var R = t(w, 2);
									r(
										R,
										() => Ee,
										(p, f) => {
											f(p, {
												value: 'graduated',
												children: (h, y) => {
													n();
													var x = _('Lulus');
													e(h, x);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var oe = t(R, 2);
									r(
										oe,
										() => Ee,
										(p, f) => {
											f(p, {
												value: 'dropped',
												children: (h, y) => {
													n();
													var x = _('Berhenti');
													e(h, x);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(E, H);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var Se = t(ke, 2),
						De = M(Se);
					rt(De, {});
					var dr = t(De, 2);
					Sr(dr, {
						size: 'sm',
						class: 'h-7 gap-1',
						children: (G, F) => {
							var E = It(),
								se = a(E);
							Tt(se, { class: 'size-3.5' }), n(2), e(G, E);
						},
						$$slots: { default: !0 }
					}),
						N(Se),
						N(me);
					var Be = t(me, 2);
					r(
						Be,
						() => xt,
						(G, F) => {
							F(G, {
								value: 'all',
								children: (E, se) => {
									var H = v(),
										b = a(H);
									r(
										b,
										() => lt,
										(w, R) => {
											R(w, {
												children: (oe, p) => {
													var f = qt(),
														h = a(f);
													r(
														h,
														() => nt,
														(z, fe) => {
															fe(z, {
																children: (he, ir) => {
																	var K = Lt(),
																		le = a(K);
																	r(
																		le,
																		() => dt,
																		(O, ne) => {
																			ne(O, {
																				children: (Q, I) => {
																					n();
																					var q = _('Data User');
																					e(Q, q);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	);
																	var ge = t(le, 2);
																	r(
																		ge,
																		() => it,
																		(O, ne) => {
																			ne(O, {
																				children: (Q, I) => {
																					n();
																					var q = _(
																						'Kelola pengguna Anda dan lihat informasi mereka.'
																					);
																					e(Q, q);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		e(he, K);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var y = t(h, 2),
														x = M(y);
													r(
														x,
														() => _t,
														(z, fe) => {
															fe(z, {
																children: (he, ir) => {
																	var K = v(),
																		le = a(K);
																	r(
																		le,
																		() => ft,
																		(ge, O) => {
																			O(ge, {
																				children: (ne, Q) => {
																					var I = Ut(),
																						q = a(I);
																					r(
																						q,
																						() => ht,
																						(de, Pe) => {
																							Pe(de, {
																								children: (xe, Ge) => {
																									var V = v(),
																										Ie = a(V);
																									r(
																										Ie,
																										() => Br,
																										(ie, k) => {
																											k(ie, {
																												children: (W, Le) => {
																													var B = At(),
																														S = a(B);
																													r(
																														S,
																														() => re,
																														(d, u) => {
																															u(d, {
																																class: 'hidden sm:table-cell',
																																children: (l, P) => {
																																	n();
																																	var o = _('Photo');
																																	e(l, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var L = t(S, 2);
																													r(
																														L,
																														() => re,
																														(d, u) => {
																															u(d, {
																																class: 'hidden lg:table-cell',
																																children: (l, P) => {
																																	n();
																																	var o = _('NISN');
																																	e(l, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var X = t(L, 2);
																													r(
																														X,
																														() => re,
																														(d, u) => {
																															u(d, {
																																children: (l, P) => {
																																	n();
																																	var o = _('Nama Lengkap');
																																	e(l, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var D = t(X, 2);
																													r(
																														D,
																														() => re,
																														(d, u) => {
																															u(d, {
																																class: 'hidden md:table-cell',
																																children: (l, P) => {
																																	n();
																																	var o = _('Tempat Lahir');
																																	e(l, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var A = t(D, 2);
																													r(
																														A,
																														() => re,
																														(d, u) => {
																															u(d, {
																																class: 'hidden lg:table-cell',
																																children: (l, P) => {
																																	n();
																																	var o = _('Tanggal Lahir');
																																	e(l, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var g = t(A, 2);
																													r(
																														g,
																														() => re,
																														(d, u) => {
																															u(d, {
																																class: 'hidden lg:table-cell',
																																children: (l, P) => {
																																	n();
																																	var o = _('Jenis Kelamin');
																																	e(l, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var T = t(g, 2);
																													r(
																														T,
																														() => re,
																														(d, u) => {
																															u(d, {
																																children: (l, P) => {
																																	n();
																																	var o = _('Actions');
																																	e(l, o);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													),
																														e(W, B);
																												},
																												$$slots: { default: !0 }
																											});
																										}
																									),
																										e(xe, V);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var Ue = t(q, 2);
																					r(
																						Ue,
																						() => gt,
																						(de, Pe) => {
																							Pe(de, {
																								children: (xe, Ge) => {
																									var V = v(),
																										Ie = a(V);
																									wr(
																										Ie,
																										17,
																										() => s(We),
																										qr,
																										(ie, k) => {
																											var W = v(),
																												Le = a(W);
																											r(
																												Le,
																												() => Br,
																												(B, S) => {
																													S(B, {
																														children: (L, X) => {
																															var D = Nt(),
																																A = a(D);
																															r(
																																A,
																																() => te,
																																(o, $) => {
																																	$(o, {
																																		class: 'hidden sm:table-cell',
																																		children: (m, j) => {
																																			var i = Rt();
																																			Z(
																																				(Y) => Jr(i, 'src', Y),
																																				[
																																					() =>
																																						s(k).expand.user_id
																																							.avatar
																																							? Tr.files.getURL(
																																									s(k).expand
																																										.user_id,
																																									s(k).expand
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
																																() => te,
																																(o, $) => {
																																	$(o, {
																																		class:
																																			'font-medium hidden lg:table-cell',
																																		children: (m, j) => {
																																			n();
																																			var i = _();
																																			Z(() => ve(i, s(k).nisn)),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															);
																															var T = t(g, 2);
																															r(
																																T,
																																() => te,
																																(o, $) => {
																																	$(o, {
																																		children: (m, j) => {
																																			n();
																																			var i = _();
																																			Z(() =>
																																				ve(
																																					i,
																																					s(k).expand.user_id
																																						.full_name
																																				)
																																			),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															);
																															var d = t(T, 2);
																															r(
																																d,
																																() => te,
																																(o, $) => {
																																	$(o, {
																																		class: 'hidden md:table-cell',
																																		children: (m, j) => {
																																			n();
																																			var i = _();
																																			Z(() =>
																																				ve(
																																					i,
																																					s(k).expand.user_id
																																						.birth_place
																																				)
																																			),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															);
																															var u = t(d, 2);
																															r(
																																u,
																																() => te,
																																(o, $) => {
																																	$(o, {
																																		class: 'hidden lg:table-cell',
																																		children: (m, j) => {
																																			n();
																																			var i = _();
																																			Z(
																																				(Y) => ve(i, Y),
																																				[
																																					() =>
																																						new Date(
																																							s(
																																								k
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
																															var l = t(u, 2);
																															r(
																																l,
																																() => te,
																																(o, $) => {
																																	$(o, {
																																		class: 'hidden lg:table-cell',
																																		children: (m, j) => {
																																			n();
																																			var i = _();
																																			Z(() =>
																																				ve(
																																					i,
																																					s(k).expand.user_id.gender
																																				)
																																			),
																																				e(m, i);
																																		},
																																		$$slots: { default: !0 }
																																	});
																																}
																															);
																															var P = t(l, 2);
																															r(
																																P,
																																() => te,
																																(o, $) => {
																																	$(o, {
																																		children: (m, j) => {
																																			var i = v(),
																																				Y = a(i);
																																			r(
																																				Y,
																																				() => $t,
																																				(Ke, _r) => {
																																					_r(Ke, {
																																						children: (Ae, Ht) => {
																																							var ur = Mt(),
																																								vr = a(ur);
																																							r(
																																								vr,
																																								() => ct,
																																								(Qe, qe) => {
																																									qe(Qe, {
																																										child: (
																																											cr,
																																											_e
																																										) => {
																																											Sr(
																																												cr,
																																												Kr(
																																													() =>
																																														_e ==
																																														null
																																															? void 0
																																															: _e()
																																																	.props,
																																													{
																																														'aria-haspopup':
																																															'true',
																																														size: 'icon',
																																														variant:
																																															'ghost',
																																														children:
																																															(
																																																Je,
																																																mr
																																															) => {
																																																var Re =
																																																		jt(),
																																																	fr =
																																																		a(
																																																			Re
																																																		);
																																																kt(
																																																	fr,
																																																	{
																																																		class:
																																																			'size-4'
																																																	}
																																																),
																																																	n(
																																																		2
																																																	),
																																																	e(
																																																		Je,
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
																																							var Mr = t(vr, 2);
																																							r(
																																								Mr,
																																								() => pt,
																																								(Qe, qe) => {
																																									qe(Qe, {
																																										align: 'end',
																																										children: (
																																											$r,
																																											cr
																																										) => {
																																											var _e = v(),
																																												pr = a(_e);
																																											r(
																																												pr,
																																												() => mt,
																																												(
																																													Je,
																																													mr
																																												) => {
																																													mr(Je, {
																																														children:
																																															(
																																																Re,
																																																fr
																																															) => {
																																																var hr =
																																																		Et(),
																																																	gr =
																																																		a(
																																																			hr
																																																		);
																																																r(
																																																	gr,
																																																	() =>
																																																		ut,
																																																	(
																																																		be,
																																																		we
																																																	) => {
																																																		we(
																																																			be,
																																																			{
																																																				children:
																																																					(
																																																						Te,
																																																						xr
																																																					) => {
																																																						n();
																																																						var Ce =
																																																							_(
																																																								'Actions'
																																																							);
																																																						e(
																																																							Te,
																																																							Ce
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
																																																var Pr =
																																																	t(
																																																		gr,
																																																		2
																																																	);
																																																r(
																																																	Pr,
																																																	() =>
																																																		Dr,
																																																	(
																																																		be,
																																																		we
																																																	) => {
																																																		we(
																																																			be,
																																																			{
																																																				children:
																																																					(
																																																						Te,
																																																						xr
																																																					) => {
																																																						n();
																																																						var Ce =
																																																							_(
																																																								'Edit'
																																																							);
																																																						e(
																																																							Te,
																																																							Ce
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
																																																var Nr =
																																																	t(
																																																		Pr,
																																																		2
																																																	);
																																																r(
																																																	Nr,
																																																	() =>
																																																		Dr,
																																																	(
																																																		be,
																																																		we
																																																	) => {
																																																		we(
																																																			be,
																																																			{
																																																				children:
																																																					(
																																																						Te,
																																																						xr
																																																					) => {
																																																						n();
																																																						var Ce =
																																																							_(
																																																								'Delete'
																																																							);
																																																						e(
																																																							Te,
																																																							Ce
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
																																																		hr
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
																																												e($r, _e);
																																										},
																																										$$slots: {
																																											default: !0
																																										}
																																									});
																																								}
																																							),
																																								e(Ae, ur);
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
																																e(L, D);
																														},
																														$$slots: { default: !0 }
																													});
																												}
																											),
																												e(ie, W);
																										}
																									),
																										e(xe, V);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					),
																						e(ne, I);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		e(he, K);
																},
																$$slots: { default: !0 }
															});
														}
													),
														N(y);
													var ze = t(y, 2);
													r(
														ze,
														() => vt,
														(z, fe) => {
															fe(z, {
																children: (he, ir) => {
																	var K = v(),
																		le = a(K);
																	r(
																		le,
																		() => Zr,
																		(ge, O) => {
																			O(ge, {
																				get count() {
																					return s(Xe);
																				},
																				get perPage() {
																					return s(Ve);
																				},
																				get siblingCount() {
																					return s(Lr);
																				},
																				get page() {
																					return s(ce);
																				},
																				set page(Q) {
																					ue(ce, ee(Q));
																				},
																				children: (Q, I) => {
																					let q = () => (I == null ? void 0 : I().pages),
																						Ue = () => (I == null ? void 0 : I().currentPage);
																					var de = v(),
																						Pe = a(de);
																					r(
																						Pe,
																						() => et,
																						(xe, Ge) => {
																							Ge(xe, {
																								children: (V, Ie) => {
																									var ie = Qt(),
																										k = a(ie);
																									r(
																										k,
																										() => je,
																										(B, S) => {
																											S(B, {
																												children: (L, X) => {
																													var D = v(),
																														A = a(D);
																													r(
																														A,
																														() => tt,
																														(g, T) => {
																															T(g, {
																																children: (d, u) => {
																																	var l = Gt(),
																																		P = a(l);
																																	Ct(P, { class: 'size-4' }),
																																		n(2),
																																		e(d, l);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													),
																														e(L, D);
																												},
																												$$slots: { default: !0 }
																											});
																										}
																									);
																									var W = t(k, 2);
																									wr(
																										W,
																										17,
																										q,
																										(B) => B.key,
																										(B, S) => {
																											var L = v(),
																												X = a(L);
																											{
																												var D = (g) => {
																														var T = v(),
																															d = a(T);
																														r(
																															d,
																															() => je,
																															(u, l) => {
																																l(u, {
																																	children: (P, o) => {
																																		var $ = v(),
																																			m = a($);
																																		r(
																																			m,
																																			() => st,
																																			(j, i) => {
																																				i(j, {});
																																			}
																																		),
																																			e(P, $);
																																	},
																																	$$slots: { default: !0 }
																																});
																															}
																														),
																															e(g, T);
																													},
																													A = (g) => {
																														var T = v(),
																															d = a(T);
																														r(
																															d,
																															() => je,
																															(u, l) => {
																																l(u, {
																																	children: (P, o) => {
																																		var $ = v(),
																																			m = a($);
																																		const j = Fe(
																																			() => Ue() === s(S).value
																																		);
																																		r(
																																			m,
																																			() => ot,
																																			(i, Y) => {
																																				Y(i, {
																																					get page() {
																																						return s(S);
																																					},
																																					get isActive() {
																																						return s(j);
																																					},
																																					children: (Ke, _r) => {
																																						n();
																																						var Ae = _();
																																						Z(() =>
																																							ve(Ae, s(S).value)
																																						),
																																							e(Ke, Ae);
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
																															e(g, T);
																													};
																												Qr(X, (g) => {
																													s(S).type === 'ellipsis'
																														? g(D)
																														: g(A, !1);
																												});
																											}
																											e(B, L);
																										}
																									);
																									var Le = t(W, 2);
																									r(
																										Le,
																										() => je,
																										(B, S) => {
																											S(B, {
																												children: (L, X) => {
																													var D = v(),
																														A = a(D);
																													r(
																														A,
																														() => at,
																														(g, T) => {
																															T(g, {
																																children: (d, u) => {
																																	var l = Kt(),
																																		P = t(a(l), 2);
																																	yt(P, { class: 'size-4' }),
																																		e(d, l);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													),
																														e(L, D);
																												},
																												$$slots: { default: !0 }
																											});
																										}
																									),
																										e(V, ie);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					),
																						e(Q, de);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		e(he, K);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(oe, f);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(E, H);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(U, pe);
				},
				$$slots: { default: !0 }
			});
		}
	),
		N(nr),
		N(lr),
		e(zr, Ze),
		Gr();
}
export { Sa as component };
