import { g as vr } from './CqkleIqs.js';
var Y = { exports: {} },
	V;
function sr() {
	return (
		V ||
			((V = 1),
			(function (q, gr) {
				var G = (function () {
					var I = function (x, w) {
						var v = 236,
							l = 17,
							n = x,
							h = O[w],
							t = null,
							r = 0,
							g = null,
							o = [],
							s = {},
							_ = function (a, f) {
								(r = n * 4 + 17),
									(t = (function (e) {
										for (var i = new Array(e), u = 0; u < e; u += 1) {
											i[u] = new Array(e);
											for (var d = 0; d < e; d += 1) i[u][d] = null;
										}
										return i;
									})(r)),
									B(0, 0),
									B(r - 7, 0),
									B(0, r - 7),
									D(),
									b(),
									m(a, f),
									n >= 7 && N(a),
									g == null && (g = ur(n, h, o)),
									U(g, f);
							},
							B = function (a, f) {
								for (var e = -1; e <= 7; e += 1)
									if (!(a + e <= -1 || r <= a + e))
										for (var i = -1; i <= 7; i += 1)
											f + i <= -1 ||
												r <= f + i ||
												((0 <= e && e <= 6 && (i == 0 || i == 6)) ||
												(0 <= i && i <= 6 && (e == 0 || e == 6)) ||
												(2 <= e && e <= 4 && 2 <= i && i <= 4)
													? (t[a + e][f + i] = !0)
													: (t[a + e][f + i] = !1));
							},
							y = function () {
								for (var a = 0, f = 0, e = 0; e < 8; e += 1) {
									_(!0, e);
									var i = k.getLostPoint(s);
									(e == 0 || a > i) && ((a = i), (f = e));
								}
								return f;
							},
							b = function () {
								for (var a = 8; a < r - 8; a += 1) t[a][6] == null && (t[a][6] = a % 2 == 0);
								for (var f = 8; f < r - 8; f += 1) t[6][f] == null && (t[6][f] = f % 2 == 0);
							},
							D = function () {
								for (var a = k.getPatternPosition(n), f = 0; f < a.length; f += 1)
									for (var e = 0; e < a.length; e += 1) {
										var i = a[f],
											u = a[e];
										if (t[i][u] == null)
											for (var d = -2; d <= 2; d += 1)
												for (var c = -2; c <= 2; c += 1)
													d == -2 || d == 2 || c == -2 || c == 2 || (d == 0 && c == 0)
														? (t[i + d][u + c] = !0)
														: (t[i + d][u + c] = !1);
									}
							},
							N = function (a) {
								for (var f = k.getBCHTypeNumber(n), e = 0; e < 18; e += 1) {
									var i = !a && ((f >> e) & 1) == 1;
									t[Math.floor(e / 3)][(e % 3) + r - 8 - 3] = i;
								}
								for (var e = 0; e < 18; e += 1) {
									var i = !a && ((f >> e) & 1) == 1;
									t[(e % 3) + r - 8 - 3][Math.floor(e / 3)] = i;
								}
							},
							m = function (a, f) {
								for (var e = (h << 3) | f, i = k.getBCHTypeInfo(e), u = 0; u < 15; u += 1) {
									var d = !a && ((i >> u) & 1) == 1;
									u < 6 ? (t[u][8] = d) : u < 8 ? (t[u + 1][8] = d) : (t[r - 15 + u][8] = d);
								}
								for (var u = 0; u < 15; u += 1) {
									var d = !a && ((i >> u) & 1) == 1;
									u < 8
										? (t[8][r - u - 1] = d)
										: u < 9
											? (t[8][15 - u - 1 + 1] = d)
											: (t[8][15 - u - 1] = d);
								}
								t[r - 8][8] = !a;
							},
							U = function (a, f) {
								for (
									var e = -1, i = r - 1, u = 7, d = 0, c = k.getMaskFunction(f), p = r - 1;
									p > 0;
									p -= 2
								)
									for (p == 6 && (p -= 1); ; ) {
										for (var T = 0; T < 2; T += 1)
											if (t[i][p - T] == null) {
												var C = !1;
												d < a.length && (C = ((a[d] >>> u) & 1) == 1);
												var A = c(i, p - T);
												A && (C = !C), (t[i][p - T] = C), (u -= 1), u == -1 && ((d += 1), (u = 7));
											}
										if (((i += e), i < 0 || r <= i)) {
											(i -= e), (e = -e);
											break;
										}
									}
							},
							F = function (a, f) {
								for (
									var e = 0, i = 0, u = 0, d = new Array(f.length), c = new Array(f.length), p = 0;
									p < f.length;
									p += 1
								) {
									var T = f[p].dataCount,
										C = f[p].totalCount - T;
									(i = Math.max(i, T)), (u = Math.max(u, C)), (d[p] = new Array(T));
									for (var A = 0; A < d[p].length; A += 1) d[p][A] = 255 & a.getBuffer()[A + e];
									e += T;
									var R = k.getErrorCorrectPolynomial(C),
										P = Q(d[p], R.getLength() - 1),
										Z = P.mod(R);
									c[p] = new Array(R.getLength() - 1);
									for (var A = 0; A < c[p].length; A += 1) {
										var $ = A + Z.getLength() - c[p].length;
										c[p][A] = $ >= 0 ? Z.getAt($) : 0;
									}
								}
								for (var W = 0, A = 0; A < f.length; A += 1) W += f[A].totalCount;
								for (var J = new Array(W), K = 0, A = 0; A < i; A += 1)
									for (var p = 0; p < f.length; p += 1)
										A < d[p].length && ((J[K] = d[p][A]), (K += 1));
								for (var A = 0; A < u; A += 1)
									for (var p = 0; p < f.length; p += 1)
										A < c[p].length && ((J[K] = c[p][A]), (K += 1));
								return J;
							},
							ur = function (a, f, e) {
								for (var i = j.getRSBlocks(a, f), u = S(), d = 0; d < e.length; d += 1) {
									var c = e[d];
									u.put(c.getMode(), 4),
										u.put(c.getLength(), k.getLengthInBits(c.getMode(), a)),
										c.write(u);
								}
								for (var p = 0, d = 0; d < i.length; d += 1) p += i[d].dataCount;
								if (u.getLengthInBits() > p * 8)
									throw 'code length overflow. (' + u.getLengthInBits() + '>' + p * 8 + ')';
								for (
									u.getLengthInBits() + 4 <= p * 8 && u.put(0, 4);
									u.getLengthInBits() % 8 != 0;

								)
									u.putBit(!1);
								for (
									;
									!(u.getLengthInBits() >= p * 8 || (u.put(v, 8), u.getLengthInBits() >= p * 8));

								)
									u.put(l, 8);
								return F(u, i);
							};
						(s.addData = function (a, f) {
							f = f || 'Byte';
							var e = null;
							switch (f) {
								case 'Numeric':
									e = z(a);
									break;
								case 'Alphanumeric':
									e = rr(a);
									break;
								case 'Byte':
									e = tr(a);
									break;
								case 'Kanji':
									e = er(a);
									break;
								default:
									throw 'mode:' + f;
							}
							o.push(e), (g = null);
						}),
							(s.isDark = function (a, f) {
								if (a < 0 || r <= a || f < 0 || r <= f) throw a + ',' + f;
								return t[a][f];
							}),
							(s.getModuleCount = function () {
								return r;
							}),
							(s.make = function () {
								if (n < 1) {
									for (var a = 1; a < 40; a++) {
										for (var f = j.getRSBlocks(a, h), e = S(), i = 0; i < o.length; i++) {
											var u = o[i];
											e.put(u.getMode(), 4),
												e.put(u.getLength(), k.getLengthInBits(u.getMode(), a)),
												u.write(e);
										}
										for (var d = 0, i = 0; i < f.length; i++) d += f[i].dataCount;
										if (e.getLengthInBits() <= d * 8) break;
									}
									n = a;
								}
								_(!1, y());
							}),
							(s.createTableTag = function (a, f) {
								(a = a || 2), (f = typeof f > 'u' ? a * 4 : f);
								var e = '';
								(e += '<table style="'),
									(e += ' border-width: 0px; border-style: none;'),
									(e += ' border-collapse: collapse;'),
									(e += ' padding: 0px; margin: ' + f + 'px;'),
									(e += '">'),
									(e += '<tbody>');
								for (var i = 0; i < s.getModuleCount(); i += 1) {
									e += '<tr>';
									for (var u = 0; u < s.getModuleCount(); u += 1)
										(e += '<td style="'),
											(e += ' border-width: 0px; border-style: none;'),
											(e += ' border-collapse: collapse;'),
											(e += ' padding: 0px; margin: 0px;'),
											(e += ' width: ' + a + 'px;'),
											(e += ' height: ' + a + 'px;'),
											(e += ' background-color: '),
											(e += s.isDark(i, u) ? '#000000' : '#ffffff'),
											(e += ';'),
											(e += '"/>');
									e += '</tr>';
								}
								return (e += '</tbody>'), (e += '</table>'), e;
							}),
							(s.createSvgTag = function (a, f, e, i) {
								var u = {};
								typeof arguments[0] == 'object' &&
									((u = arguments[0]),
									(a = u.cellSize),
									(f = u.margin),
									(e = u.alt),
									(i = u.title)),
									(a = a || 2),
									(f = typeof f > 'u' ? a * 4 : f),
									(e = typeof e == 'string' ? { text: e } : e || {}),
									(e.text = e.text || null),
									(e.id = e.text ? e.id || 'qrcode-description' : null),
									(i = typeof i == 'string' ? { text: i } : i || {}),
									(i.text = i.text || null),
									(i.id = i.text ? i.id || 'qrcode-title' : null);
								var d = s.getModuleCount() * a + f * 2,
									c,
									p,
									T,
									C,
									A = '',
									R;
								for (
									R = 'l' + a + ',0 0,' + a + ' -' + a + ',0 0,-' + a + 'z ',
										A += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
										A += u.scalable ? '' : ' width="' + d + 'px" height="' + d + 'px"',
										A += ' viewBox="0 0 ' + d + ' ' + d + '" ',
										A += ' preserveAspectRatio="xMinYMin meet"',
										A +=
											i.text || e.text
												? ' role="img" aria-labelledby="' + H([i.id, e.id].join(' ').trim()) + '"'
												: '',
										A += '>',
										A += i.text ? '<title id="' + H(i.id) + '">' + H(i.text) + '</title>' : '',
										A += e.text
											? '<description id="' + H(e.id) + '">' + H(e.text) + '</description>'
											: '',
										A += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
										A += '<path d="',
										T = 0;
									T < s.getModuleCount();
									T += 1
								)
									for (C = T * a + f, c = 0; c < s.getModuleCount(); c += 1)
										s.isDark(T, c) && ((p = c * a + f), (A += 'M' + p + ',' + C + R));
								return (A += '" stroke="transparent" fill="black"/>'), (A += '</svg>'), A;
							}),
							(s.createDataURL = function (a, f) {
								(a = a || 2), (f = typeof f > 'u' ? a * 4 : f);
								var e = s.getModuleCount() * a + f * 2,
									i = f,
									u = e - f;
								return ir(e, e, function (d, c) {
									if (i <= d && d < u && i <= c && c < u) {
										var p = Math.floor((d - i) / a),
											T = Math.floor((c - i) / a);
										return s.isDark(T, p) ? 0 : 1;
									} else return 1;
								});
							}),
							(s.createImgTag = function (a, f, e) {
								(a = a || 2), (f = typeof f > 'u' ? a * 4 : f);
								var i = s.getModuleCount() * a + f * 2,
									u = '';
								return (
									(u += '<img'),
									(u += ' src="'),
									(u += s.createDataURL(a, f)),
									(u += '"'),
									(u += ' width="'),
									(u += i),
									(u += '"'),
									(u += ' height="'),
									(u += i),
									(u += '"'),
									e && ((u += ' alt="'), (u += H(e)), (u += '"')),
									(u += '/>'),
									u
								);
							});
						var H = function (a) {
								for (var f = '', e = 0; e < a.length; e += 1) {
									var i = a.charAt(e);
									switch (i) {
										case '<':
											f += '&lt;';
											break;
										case '>':
											f += '&gt;';
											break;
										case '&':
											f += '&amp;';
											break;
										case '"':
											f += '&quot;';
											break;
										default:
											f += i;
											break;
									}
								}
								return f;
							},
							or = function (a) {
								var f = 1;
								a = typeof a > 'u' ? f * 2 : a;
								var e = s.getModuleCount() * f + a * 2,
									i = a,
									u = e - a,
									d,
									c,
									p,
									T,
									C,
									A = { '██': '█', '█ ': '▀', ' █': '▄', '  ': ' ' },
									R = { '██': '▀', '█ ': '▀', ' █': ' ', '  ': ' ' },
									P = '';
								for (d = 0; d < e; d += 2) {
									for (
										p = Math.floor((d - i) / f), T = Math.floor((d + 1 - i) / f), c = 0;
										c < e;
										c += 1
									)
										(C = '█'),
											i <= c &&
												c < u &&
												i <= d &&
												d < u &&
												s.isDark(p, Math.floor((c - i) / f)) &&
												(C = ' '),
											i <= c &&
											c < u &&
											i <= d + 1 &&
											d + 1 < u &&
											s.isDark(T, Math.floor((c - i) / f))
												? (C += ' ')
												: (C += '█'),
											(P += a < 1 && d + 1 >= u ? R[C] : A[C]);
									P += `
`;
								}
								return e % 2 && a > 0
									? P.substring(0, P.length - e - 1) + Array(e + 1).join('▀')
									: P.substring(0, P.length - 1);
							};
						return (
							(s.createASCII = function (a, f) {
								if (((a = a || 1), a < 2)) return or(f);
								(a -= 1), (f = typeof f > 'u' ? a * 2 : f);
								var e = s.getModuleCount() * a + f * 2,
									i = f,
									u = e - f,
									d,
									c,
									p,
									T,
									C = Array(a + 1).join('██'),
									A = Array(a + 1).join('  '),
									R = '',
									P = '';
								for (d = 0; d < e; d += 1) {
									for (p = Math.floor((d - i) / a), P = '', c = 0; c < e; c += 1)
										(T = 1),
											i <= c &&
												c < u &&
												i <= d &&
												d < u &&
												s.isDark(p, Math.floor((c - i) / a)) &&
												(T = 0),
											(P += T ? C : A);
									for (p = 0; p < a; p += 1)
										R +=
											P +
											`
`;
								}
								return R.substring(0, R.length - 1);
							}),
							(s.renderTo2dContext = function (a, f) {
								f = f || 2;
								for (var e = s.getModuleCount(), i = 0; i < e; i++)
									for (var u = 0; u < e; u++)
										(a.fillStyle = s.isDark(i, u) ? 'black' : 'white'),
											a.fillRect(i * f, u * f, f, f);
							}),
							s
						);
					};
					(I.stringToBytesFuncs = {
						default: function (x) {
							for (var w = [], v = 0; v < x.length; v += 1) {
								var l = x.charCodeAt(v);
								w.push(l & 255);
							}
							return w;
						}
					}),
						(I.stringToBytes = I.stringToBytesFuncs.default),
						(I.createStringToBytes = function (x, w) {
							var v = (function () {
									for (
										var n = ar(x),
											h = function () {
												var b = n.read();
												if (b == -1) throw 'eof';
												return b;
											},
											t = 0,
											r = {};
										;

									) {
										var g = n.read();
										if (g == -1) break;
										var o = h(),
											s = h(),
											_ = h(),
											B = String.fromCharCode((g << 8) | o),
											y = (s << 8) | _;
										(r[B] = y), (t += 1);
									}
									if (t != w) throw t + ' != ' + w;
									return r;
								})(),
								l = 63;
							return function (n) {
								for (var h = [], t = 0; t < n.length; t += 1) {
									var r = n.charCodeAt(t);
									if (r < 128) h.push(r);
									else {
										var g = v[n.charAt(t)];
										typeof g == 'number'
											? (g & 255) == g
												? h.push(g)
												: (h.push(g >>> 8), h.push(g & 255))
											: h.push(l);
									}
								}
								return h;
							};
						});
					var E = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 },
						O = { L: 1, M: 0, Q: 3, H: 2 },
						L = {
							PATTERN000: 0,
							PATTERN001: 1,
							PATTERN010: 2,
							PATTERN011: 3,
							PATTERN100: 4,
							PATTERN101: 5,
							PATTERN110: 6,
							PATTERN111: 7
						},
						k = (function () {
							var x = [
									[],
									[6, 18],
									[6, 22],
									[6, 26],
									[6, 30],
									[6, 34],
									[6, 22, 38],
									[6, 24, 42],
									[6, 26, 46],
									[6, 28, 50],
									[6, 30, 54],
									[6, 32, 58],
									[6, 34, 62],
									[6, 26, 46, 66],
									[6, 26, 48, 70],
									[6, 26, 50, 74],
									[6, 30, 54, 78],
									[6, 30, 56, 82],
									[6, 30, 58, 86],
									[6, 34, 62, 90],
									[6, 28, 50, 72, 94],
									[6, 26, 50, 74, 98],
									[6, 30, 54, 78, 102],
									[6, 28, 54, 80, 106],
									[6, 32, 58, 84, 110],
									[6, 30, 58, 86, 114],
									[6, 34, 62, 90, 118],
									[6, 26, 50, 74, 98, 122],
									[6, 30, 54, 78, 102, 126],
									[6, 26, 52, 78, 104, 130],
									[6, 30, 56, 82, 108, 134],
									[6, 34, 60, 86, 112, 138],
									[6, 30, 58, 86, 114, 142],
									[6, 34, 62, 90, 118, 146],
									[6, 30, 54, 78, 102, 126, 150],
									[6, 24, 50, 76, 102, 128, 154],
									[6, 28, 54, 80, 106, 132, 158],
									[6, 32, 58, 84, 110, 136, 162],
									[6, 26, 54, 82, 110, 138, 166],
									[6, 30, 58, 86, 114, 142, 170]
								],
								w = 1335,
								v = 7973,
								l = 21522,
								n = {},
								h = function (t) {
									for (var r = 0; t != 0; ) (r += 1), (t >>>= 1);
									return r;
								};
							return (
								(n.getBCHTypeInfo = function (t) {
									for (var r = t << 10; h(r) - h(w) >= 0; ) r ^= w << (h(r) - h(w));
									return ((t << 10) | r) ^ l;
								}),
								(n.getBCHTypeNumber = function (t) {
									for (var r = t << 12; h(r) - h(v) >= 0; ) r ^= v << (h(r) - h(v));
									return (t << 12) | r;
								}),
								(n.getPatternPosition = function (t) {
									return x[t - 1];
								}),
								(n.getMaskFunction = function (t) {
									switch (t) {
										case L.PATTERN000:
											return function (r, g) {
												return (r + g) % 2 == 0;
											};
										case L.PATTERN001:
											return function (r, g) {
												return r % 2 == 0;
											};
										case L.PATTERN010:
											return function (r, g) {
												return g % 3 == 0;
											};
										case L.PATTERN011:
											return function (r, g) {
												return (r + g) % 3 == 0;
											};
										case L.PATTERN100:
											return function (r, g) {
												return (Math.floor(r / 2) + Math.floor(g / 3)) % 2 == 0;
											};
										case L.PATTERN101:
											return function (r, g) {
												return ((r * g) % 2) + ((r * g) % 3) == 0;
											};
										case L.PATTERN110:
											return function (r, g) {
												return (((r * g) % 2) + ((r * g) % 3)) % 2 == 0;
											};
										case L.PATTERN111:
											return function (r, g) {
												return (((r * g) % 3) + ((r + g) % 2)) % 2 == 0;
											};
										default:
											throw 'bad maskPattern:' + t;
									}
								}),
								(n.getErrorCorrectPolynomial = function (t) {
									for (var r = Q([1], 0), g = 0; g < t; g += 1)
										r = r.multiply(Q([1, M.gexp(g)], 0));
									return r;
								}),
								(n.getLengthInBits = function (t, r) {
									if (1 <= r && r < 10)
										switch (t) {
											case E.MODE_NUMBER:
												return 10;
											case E.MODE_ALPHA_NUM:
												return 9;
											case E.MODE_8BIT_BYTE:
												return 8;
											case E.MODE_KANJI:
												return 8;
											default:
												throw 'mode:' + t;
										}
									else if (r < 27)
										switch (t) {
											case E.MODE_NUMBER:
												return 12;
											case E.MODE_ALPHA_NUM:
												return 11;
											case E.MODE_8BIT_BYTE:
												return 16;
											case E.MODE_KANJI:
												return 10;
											default:
												throw 'mode:' + t;
										}
									else if (r < 41)
										switch (t) {
											case E.MODE_NUMBER:
												return 14;
											case E.MODE_ALPHA_NUM:
												return 13;
											case E.MODE_8BIT_BYTE:
												return 16;
											case E.MODE_KANJI:
												return 12;
											default:
												throw 'mode:' + t;
										}
									else throw 'type:' + r;
								}),
								(n.getLostPoint = function (t) {
									for (var r = t.getModuleCount(), g = 0, o = 0; o < r; o += 1)
										for (var s = 0; s < r; s += 1) {
											for (var _ = 0, B = t.isDark(o, s), y = -1; y <= 1; y += 1)
												if (!(o + y < 0 || r <= o + y))
													for (var b = -1; b <= 1; b += 1)
														s + b < 0 ||
															r <= s + b ||
															(y == 0 && b == 0) ||
															(B == t.isDark(o + y, s + b) && (_ += 1));
											_ > 5 && (g += 3 + _ - 5);
										}
									for (var o = 0; o < r - 1; o += 1)
										for (var s = 0; s < r - 1; s += 1) {
											var D = 0;
											t.isDark(o, s) && (D += 1),
												t.isDark(o + 1, s) && (D += 1),
												t.isDark(o, s + 1) && (D += 1),
												t.isDark(o + 1, s + 1) && (D += 1),
												(D == 0 || D == 4) && (g += 3);
										}
									for (var o = 0; o < r; o += 1)
										for (var s = 0; s < r - 6; s += 1)
											t.isDark(o, s) &&
												!t.isDark(o, s + 1) &&
												t.isDark(o, s + 2) &&
												t.isDark(o, s + 3) &&
												t.isDark(o, s + 4) &&
												!t.isDark(o, s + 5) &&
												t.isDark(o, s + 6) &&
												(g += 40);
									for (var s = 0; s < r; s += 1)
										for (var o = 0; o < r - 6; o += 1)
											t.isDark(o, s) &&
												!t.isDark(o + 1, s) &&
												t.isDark(o + 2, s) &&
												t.isDark(o + 3, s) &&
												t.isDark(o + 4, s) &&
												!t.isDark(o + 5, s) &&
												t.isDark(o + 6, s) &&
												(g += 40);
									for (var N = 0, s = 0; s < r; s += 1)
										for (var o = 0; o < r; o += 1) t.isDark(o, s) && (N += 1);
									var m = Math.abs((100 * N) / r / r - 50) / 5;
									return (g += m * 10), g;
								}),
								n
							);
						})(),
						M = (function () {
							for (var x = new Array(256), w = new Array(256), v = 0; v < 8; v += 1) x[v] = 1 << v;
							for (var v = 8; v < 256; v += 1) x[v] = x[v - 4] ^ x[v - 5] ^ x[v - 6] ^ x[v - 8];
							for (var v = 0; v < 255; v += 1) w[x[v]] = v;
							var l = {};
							return (
								(l.glog = function (n) {
									if (n < 1) throw 'glog(' + n + ')';
									return w[n];
								}),
								(l.gexp = function (n) {
									for (; n < 0; ) n += 255;
									for (; n >= 256; ) n -= 255;
									return x[n];
								}),
								l
							);
						})();
					function Q(x, w) {
						if (typeof x.length > 'u') throw x.length + '/' + w;
						var v = (function () {
								for (var n = 0; n < x.length && x[n] == 0; ) n += 1;
								for (var h = new Array(x.length - n + w), t = 0; t < x.length - n; t += 1)
									h[t] = x[t + n];
								return h;
							})(),
							l = {};
						return (
							(l.getAt = function (n) {
								return v[n];
							}),
							(l.getLength = function () {
								return v.length;
							}),
							(l.multiply = function (n) {
								for (
									var h = new Array(l.getLength() + n.getLength() - 1), t = 0;
									t < l.getLength();
									t += 1
								)
									for (var r = 0; r < n.getLength(); r += 1)
										h[t + r] ^= M.gexp(M.glog(l.getAt(t)) + M.glog(n.getAt(r)));
								return Q(h, 0);
							}),
							(l.mod = function (n) {
								if (l.getLength() - n.getLength() < 0) return l;
								for (
									var h = M.glog(l.getAt(0)) - M.glog(n.getAt(0)),
										t = new Array(l.getLength()),
										r = 0;
									r < l.getLength();
									r += 1
								)
									t[r] = l.getAt(r);
								for (var r = 0; r < n.getLength(); r += 1) t[r] ^= M.gexp(M.glog(n.getAt(r)) + h);
								return Q(t, 0).mod(n);
							}),
							l
						);
					}
					var j = (function () {
							var x = [
									[1, 26, 19],
									[1, 26, 16],
									[1, 26, 13],
									[1, 26, 9],
									[1, 44, 34],
									[1, 44, 28],
									[1, 44, 22],
									[1, 44, 16],
									[1, 70, 55],
									[1, 70, 44],
									[2, 35, 17],
									[2, 35, 13],
									[1, 100, 80],
									[2, 50, 32],
									[2, 50, 24],
									[4, 25, 9],
									[1, 134, 108],
									[2, 67, 43],
									[2, 33, 15, 2, 34, 16],
									[2, 33, 11, 2, 34, 12],
									[2, 86, 68],
									[4, 43, 27],
									[4, 43, 19],
									[4, 43, 15],
									[2, 98, 78],
									[4, 49, 31],
									[2, 32, 14, 4, 33, 15],
									[4, 39, 13, 1, 40, 14],
									[2, 121, 97],
									[2, 60, 38, 2, 61, 39],
									[4, 40, 18, 2, 41, 19],
									[4, 40, 14, 2, 41, 15],
									[2, 146, 116],
									[3, 58, 36, 2, 59, 37],
									[4, 36, 16, 4, 37, 17],
									[4, 36, 12, 4, 37, 13],
									[2, 86, 68, 2, 87, 69],
									[4, 69, 43, 1, 70, 44],
									[6, 43, 19, 2, 44, 20],
									[6, 43, 15, 2, 44, 16],
									[4, 101, 81],
									[1, 80, 50, 4, 81, 51],
									[4, 50, 22, 4, 51, 23],
									[3, 36, 12, 8, 37, 13],
									[2, 116, 92, 2, 117, 93],
									[6, 58, 36, 2, 59, 37],
									[4, 46, 20, 6, 47, 21],
									[7, 42, 14, 4, 43, 15],
									[4, 133, 107],
									[8, 59, 37, 1, 60, 38],
									[8, 44, 20, 4, 45, 21],
									[12, 33, 11, 4, 34, 12],
									[3, 145, 115, 1, 146, 116],
									[4, 64, 40, 5, 65, 41],
									[11, 36, 16, 5, 37, 17],
									[11, 36, 12, 5, 37, 13],
									[5, 109, 87, 1, 110, 88],
									[5, 65, 41, 5, 66, 42],
									[5, 54, 24, 7, 55, 25],
									[11, 36, 12, 7, 37, 13],
									[5, 122, 98, 1, 123, 99],
									[7, 73, 45, 3, 74, 46],
									[15, 43, 19, 2, 44, 20],
									[3, 45, 15, 13, 46, 16],
									[1, 135, 107, 5, 136, 108],
									[10, 74, 46, 1, 75, 47],
									[1, 50, 22, 15, 51, 23],
									[2, 42, 14, 17, 43, 15],
									[5, 150, 120, 1, 151, 121],
									[9, 69, 43, 4, 70, 44],
									[17, 50, 22, 1, 51, 23],
									[2, 42, 14, 19, 43, 15],
									[3, 141, 113, 4, 142, 114],
									[3, 70, 44, 11, 71, 45],
									[17, 47, 21, 4, 48, 22],
									[9, 39, 13, 16, 40, 14],
									[3, 135, 107, 5, 136, 108],
									[3, 67, 41, 13, 68, 42],
									[15, 54, 24, 5, 55, 25],
									[15, 43, 15, 10, 44, 16],
									[4, 144, 116, 4, 145, 117],
									[17, 68, 42],
									[17, 50, 22, 6, 51, 23],
									[19, 46, 16, 6, 47, 17],
									[2, 139, 111, 7, 140, 112],
									[17, 74, 46],
									[7, 54, 24, 16, 55, 25],
									[34, 37, 13],
									[4, 151, 121, 5, 152, 122],
									[4, 75, 47, 14, 76, 48],
									[11, 54, 24, 14, 55, 25],
									[16, 45, 15, 14, 46, 16],
									[6, 147, 117, 4, 148, 118],
									[6, 73, 45, 14, 74, 46],
									[11, 54, 24, 16, 55, 25],
									[30, 46, 16, 2, 47, 17],
									[8, 132, 106, 4, 133, 107],
									[8, 75, 47, 13, 76, 48],
									[7, 54, 24, 22, 55, 25],
									[22, 45, 15, 13, 46, 16],
									[10, 142, 114, 2, 143, 115],
									[19, 74, 46, 4, 75, 47],
									[28, 50, 22, 6, 51, 23],
									[33, 46, 16, 4, 47, 17],
									[8, 152, 122, 4, 153, 123],
									[22, 73, 45, 3, 74, 46],
									[8, 53, 23, 26, 54, 24],
									[12, 45, 15, 28, 46, 16],
									[3, 147, 117, 10, 148, 118],
									[3, 73, 45, 23, 74, 46],
									[4, 54, 24, 31, 55, 25],
									[11, 45, 15, 31, 46, 16],
									[7, 146, 116, 7, 147, 117],
									[21, 73, 45, 7, 74, 46],
									[1, 53, 23, 37, 54, 24],
									[19, 45, 15, 26, 46, 16],
									[5, 145, 115, 10, 146, 116],
									[19, 75, 47, 10, 76, 48],
									[15, 54, 24, 25, 55, 25],
									[23, 45, 15, 25, 46, 16],
									[13, 145, 115, 3, 146, 116],
									[2, 74, 46, 29, 75, 47],
									[42, 54, 24, 1, 55, 25],
									[23, 45, 15, 28, 46, 16],
									[17, 145, 115],
									[10, 74, 46, 23, 75, 47],
									[10, 54, 24, 35, 55, 25],
									[19, 45, 15, 35, 46, 16],
									[17, 145, 115, 1, 146, 116],
									[14, 74, 46, 21, 75, 47],
									[29, 54, 24, 19, 55, 25],
									[11, 45, 15, 46, 46, 16],
									[13, 145, 115, 6, 146, 116],
									[14, 74, 46, 23, 75, 47],
									[44, 54, 24, 7, 55, 25],
									[59, 46, 16, 1, 47, 17],
									[12, 151, 121, 7, 152, 122],
									[12, 75, 47, 26, 76, 48],
									[39, 54, 24, 14, 55, 25],
									[22, 45, 15, 41, 46, 16],
									[6, 151, 121, 14, 152, 122],
									[6, 75, 47, 34, 76, 48],
									[46, 54, 24, 10, 55, 25],
									[2, 45, 15, 64, 46, 16],
									[17, 152, 122, 4, 153, 123],
									[29, 74, 46, 14, 75, 47],
									[49, 54, 24, 10, 55, 25],
									[24, 45, 15, 46, 46, 16],
									[4, 152, 122, 18, 153, 123],
									[13, 74, 46, 32, 75, 47],
									[48, 54, 24, 14, 55, 25],
									[42, 45, 15, 32, 46, 16],
									[20, 147, 117, 4, 148, 118],
									[40, 75, 47, 7, 76, 48],
									[43, 54, 24, 22, 55, 25],
									[10, 45, 15, 67, 46, 16],
									[19, 148, 118, 6, 149, 119],
									[18, 75, 47, 31, 76, 48],
									[34, 54, 24, 34, 55, 25],
									[20, 45, 15, 61, 46, 16]
								],
								w = function (n, h) {
									var t = {};
									return (t.totalCount = n), (t.dataCount = h), t;
								},
								v = {},
								l = function (n, h) {
									switch (h) {
										case O.L:
											return x[(n - 1) * 4 + 0];
										case O.M:
											return x[(n - 1) * 4 + 1];
										case O.Q:
											return x[(n - 1) * 4 + 2];
										case O.H:
											return x[(n - 1) * 4 + 3];
										default:
											return;
									}
								};
							return (
								(v.getRSBlocks = function (n, h) {
									var t = l(n, h);
									if (typeof t > 'u')
										throw 'bad rs block @ typeNumber:' + n + '/errorCorrectionLevel:' + h;
									for (var r = t.length / 3, g = [], o = 0; o < r; o += 1)
										for (
											var s = t[o * 3 + 0], _ = t[o * 3 + 1], B = t[o * 3 + 2], y = 0;
											y < s;
											y += 1
										)
											g.push(w(_, B));
									return g;
								}),
								v
							);
						})(),
						S = function () {
							var x = [],
								w = 0,
								v = {};
							return (
								(v.getBuffer = function () {
									return x;
								}),
								(v.getAt = function (l) {
									var n = Math.floor(l / 8);
									return ((x[n] >>> (7 - (l % 8))) & 1) == 1;
								}),
								(v.put = function (l, n) {
									for (var h = 0; h < n; h += 1) v.putBit(((l >>> (n - h - 1)) & 1) == 1);
								}),
								(v.getLengthInBits = function () {
									return w;
								}),
								(v.putBit = function (l) {
									var n = Math.floor(w / 8);
									x.length <= n && x.push(0), l && (x[n] |= 128 >>> w % 8), (w += 1);
								}),
								v
							);
						},
						z = function (x) {
							var w = E.MODE_NUMBER,
								v = x,
								l = {};
							(l.getMode = function () {
								return w;
							}),
								(l.getLength = function (t) {
									return v.length;
								}),
								(l.write = function (t) {
									for (var r = v, g = 0; g + 2 < r.length; )
										t.put(n(r.substring(g, g + 3)), 10), (g += 3);
									g < r.length &&
										(r.length - g == 1
											? t.put(n(r.substring(g, g + 1)), 4)
											: r.length - g == 2 && t.put(n(r.substring(g, g + 2)), 7));
								});
							var n = function (t) {
									for (var r = 0, g = 0; g < t.length; g += 1) r = r * 10 + h(t.charAt(g));
									return r;
								},
								h = function (t) {
									if ('0' <= t && t <= '9') return t.charCodeAt(0) - 48;
									throw 'illegal char :' + t;
								};
							return l;
						},
						rr = function (x) {
							var w = E.MODE_ALPHA_NUM,
								v = x,
								l = {};
							(l.getMode = function () {
								return w;
							}),
								(l.getLength = function (h) {
									return v.length;
								}),
								(l.write = function (h) {
									for (var t = v, r = 0; r + 1 < t.length; )
										h.put(n(t.charAt(r)) * 45 + n(t.charAt(r + 1)), 11), (r += 2);
									r < t.length && h.put(n(t.charAt(r)), 6);
								});
							var n = function (h) {
								if ('0' <= h && h <= '9') return h.charCodeAt(0) - 48;
								if ('A' <= h && h <= 'Z') return h.charCodeAt(0) - 65 + 10;
								switch (h) {
									case ' ':
										return 36;
									case '$':
										return 37;
									case '%':
										return 38;
									case '*':
										return 39;
									case '+':
										return 40;
									case '-':
										return 41;
									case '.':
										return 42;
									case '/':
										return 43;
									case ':':
										return 44;
									default:
										throw 'illegal char :' + h;
								}
							};
							return l;
						},
						tr = function (x) {
							var w = E.MODE_8BIT_BYTE,
								v = I.stringToBytes(x),
								l = {};
							return (
								(l.getMode = function () {
									return w;
								}),
								(l.getLength = function (n) {
									return v.length;
								}),
								(l.write = function (n) {
									for (var h = 0; h < v.length; h += 1) n.put(v[h], 8);
								}),
								l
							);
						},
						er = function (x) {
							var w = E.MODE_KANJI,
								v = I.stringToBytesFuncs.SJIS;
							if (!v) throw 'sjis not supported.';
							(function (h, t) {
								var r = v(h);
								if (r.length != 2 || ((r[0] << 8) | r[1]) != t) throw 'sjis not supported.';
							})('友', 38726);
							var l = v(x),
								n = {};
							return (
								(n.getMode = function () {
									return w;
								}),
								(n.getLength = function (h) {
									return ~~(l.length / 2);
								}),
								(n.write = function (h) {
									for (var t = l, r = 0; r + 1 < t.length; ) {
										var g = ((255 & t[r]) << 8) | (255 & t[r + 1]);
										if (33088 <= g && g <= 40956) g -= 33088;
										else if (57408 <= g && g <= 60351) g -= 49472;
										else throw 'illegal char at ' + (r + 1) + '/' + g;
										(g = ((g >>> 8) & 255) * 192 + (g & 255)), h.put(g, 13), (r += 2);
									}
									if (r < t.length) throw 'illegal char at ' + (r + 1);
								}),
								n
							);
						},
						X = function () {
							var x = [],
								w = {};
							return (
								(w.writeByte = function (v) {
									x.push(v & 255);
								}),
								(w.writeShort = function (v) {
									w.writeByte(v), w.writeByte(v >>> 8);
								}),
								(w.writeBytes = function (v, l, n) {
									(l = l || 0), (n = n || v.length);
									for (var h = 0; h < n; h += 1) w.writeByte(v[h + l]);
								}),
								(w.writeString = function (v) {
									for (var l = 0; l < v.length; l += 1) w.writeByte(v.charCodeAt(l));
								}),
								(w.toByteArray = function () {
									return x;
								}),
								(w.toString = function () {
									var v = '';
									v += '[';
									for (var l = 0; l < x.length; l += 1) l > 0 && (v += ','), (v += x[l]);
									return (v += ']'), v;
								}),
								w
							);
						},
						nr = function () {
							var x = 0,
								w = 0,
								v = 0,
								l = '',
								n = {},
								h = function (r) {
									l += String.fromCharCode(t(r & 63));
								},
								t = function (r) {
									if (!(r < 0)) {
										if (r < 26) return 65 + r;
										if (r < 52) return 97 + (r - 26);
										if (r < 62) return 48 + (r - 52);
										if (r == 62) return 43;
										if (r == 63) return 47;
									}
									throw 'n:' + r;
								};
							return (
								(n.writeByte = function (r) {
									for (x = (x << 8) | (r & 255), w += 8, v += 1; w >= 6; )
										h(x >>> (w - 6)), (w -= 6);
								}),
								(n.flush = function () {
									if ((w > 0 && (h(x << (6 - w)), (x = 0), (w = 0)), v % 3 != 0))
										for (var r = 3 - (v % 3), g = 0; g < r; g += 1) l += '=';
								}),
								(n.toString = function () {
									return l;
								}),
								n
							);
						},
						ar = function (x) {
							var w = x,
								v = 0,
								l = 0,
								n = 0,
								h = {};
							h.read = function () {
								for (; n < 8; ) {
									if (v >= w.length) {
										if (n == 0) return -1;
										throw 'unexpected end of file./' + n;
									}
									var r = w.charAt(v);
									if (((v += 1), r == '=')) return (n = 0), -1;
									if (r.match(/^\s$/)) continue;
									(l = (l << 6) | t(r.charCodeAt(0))), (n += 6);
								}
								var g = (l >>> (n - 8)) & 255;
								return (n -= 8), g;
							};
							var t = function (r) {
								if (65 <= r && r <= 90) return r - 65;
								if (97 <= r && r <= 122) return r - 97 + 26;
								if (48 <= r && r <= 57) return r - 48 + 52;
								if (r == 43) return 62;
								if (r == 47) return 63;
								throw 'c:' + r;
							};
							return h;
						},
						fr = function (x, w) {
							var v = x,
								l = w,
								n = new Array(x * w),
								h = {};
							(h.setPixel = function (o, s, _) {
								n[s * v + o] = _;
							}),
								(h.write = function (o) {
									o.writeString('GIF87a'),
										o.writeShort(v),
										o.writeShort(l),
										o.writeByte(128),
										o.writeByte(0),
										o.writeByte(0),
										o.writeByte(0),
										o.writeByte(0),
										o.writeByte(0),
										o.writeByte(255),
										o.writeByte(255),
										o.writeByte(255),
										o.writeString(','),
										o.writeShort(0),
										o.writeShort(0),
										o.writeShort(v),
										o.writeShort(l),
										o.writeByte(0);
									var s = 2,
										_ = r(s);
									o.writeByte(s);
									for (var B = 0; _.length - B > 255; )
										o.writeByte(255), o.writeBytes(_, B, 255), (B += 255);
									o.writeByte(_.length - B),
										o.writeBytes(_, B, _.length - B),
										o.writeByte(0),
										o.writeString(';');
								});
							var t = function (o) {
									var s = o,
										_ = 0,
										B = 0,
										y = {};
									return (
										(y.write = function (b, D) {
											if (b >>> D) throw 'length over';
											for (; _ + D >= 8; )
												s.writeByte(255 & ((b << _) | B)),
													(D -= 8 - _),
													(b >>>= 8 - _),
													(B = 0),
													(_ = 0);
											(B = (b << _) | B), (_ = _ + D);
										}),
										(y.flush = function () {
											_ > 0 && s.writeByte(B);
										}),
										y
									);
								},
								r = function (o) {
									for (var s = 1 << o, _ = (1 << o) + 1, B = o + 1, y = g(), b = 0; b < s; b += 1)
										y.add(String.fromCharCode(b));
									y.add(String.fromCharCode(s)), y.add(String.fromCharCode(_));
									var D = X(),
										N = t(D);
									N.write(s, B);
									var m = 0,
										U = String.fromCharCode(n[m]);
									for (m += 1; m < n.length; ) {
										var F = String.fromCharCode(n[m]);
										(m += 1),
											y.contains(U + F)
												? (U = U + F)
												: (N.write(y.indexOf(U), B),
													y.size() < 4095 && (y.size() == 1 << B && (B += 1), y.add(U + F)),
													(U = F));
									}
									return N.write(y.indexOf(U), B), N.write(_, B), N.flush(), D.toByteArray();
								},
								g = function () {
									var o = {},
										s = 0,
										_ = {};
									return (
										(_.add = function (B) {
											if (_.contains(B)) throw 'dup key:' + B;
											(o[B] = s), (s += 1);
										}),
										(_.size = function () {
											return s;
										}),
										(_.indexOf = function (B) {
											return o[B];
										}),
										(_.contains = function (B) {
											return typeof o[B] < 'u';
										}),
										_
									);
								};
							return h;
						},
						ir = function (x, w, v) {
							for (var l = fr(x, w), n = 0; n < w; n += 1)
								for (var h = 0; h < x; h += 1) l.setPixel(h, n, v(h, n));
							var t = X();
							l.write(t);
							for (var r = nr(), g = t.toByteArray(), o = 0; o < g.length; o += 1)
								r.writeByte(g[o]);
							return r.flush(), 'data:image/gif;base64,' + r;
						};
					return I;
				})();
				(function () {
					G.stringToBytesFuncs['UTF-8'] = function (I) {
						function E(O) {
							for (var L = [], k = 0; k < O.length; k++) {
								var M = O.charCodeAt(k);
								M < 128
									? L.push(M)
									: M < 2048
										? L.push(192 | (M >> 6), 128 | (M & 63))
										: M < 55296 || M >= 57344
											? L.push(224 | (M >> 12), 128 | ((M >> 6) & 63), 128 | (M & 63))
											: (k++,
												(M = 65536 + (((M & 1023) << 10) | (O.charCodeAt(k) & 1023))),
												L.push(
													240 | (M >> 18),
													128 | ((M >> 12) & 63),
													128 | ((M >> 6) & 63),
													128 | (M & 63)
												));
							}
							return L;
						}
						return E(I);
					};
				})(),
					(function (I) {
						q.exports = I();
					})(function () {
						return G;
					});
			})(Y)),
		Y.exports
	);
}
var hr = sr();
const dr = vr(hr);
export { dr as Q };
