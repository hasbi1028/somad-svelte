var Xt = (t) => {
	throw TypeError(t);
};
var je = (t, e, n) => e.has(t) || Xt('Cannot ' + n);
var A = (t, e, n) => (je(t, e, 'read from private field'), n ? n.call(t) : e.get(t)),
	P = (t, e, n) =>
		e.has(t)
			? Xt('Cannot add the same private member more than once')
			: e instanceof WeakSet
				? e.add(t)
				: e.set(t, n);
import { b as C, g as O, e as N, aG as $e } from './BHafZ7-g.js';
import { w as jt } from './Dz4tvtyB.js';
import { o as Zt } from './CGny5e2U.js';
new URL('sveltekit-internal://');
function De(t, e) {
	return t === '/' || e === 'ignore'
		? t
		: e === 'never'
			? t.endsWith('/')
				? t.slice(0, -1)
				: t
			: e === 'always' && !t.endsWith('/')
				? t + '/'
				: t;
}
function Fe(t) {
	return t.split('%25').map(decodeURI).join('%25');
}
function Ve(t) {
	for (const e in t) t[e] = decodeURIComponent(t[e]);
	return t;
}
function Ut({ href: t }) {
	return t.split('#')[0];
}
function Be(t, e, n, r = !1) {
	const a = new URL(t);
	Object.defineProperty(a, 'searchParams', {
		value: new Proxy(a.searchParams, {
			get(i, o) {
				if (o === 'get' || o === 'getAll' || o === 'has') return (f) => (n(f), i[o](f));
				e();
				const c = Reflect.get(i, o);
				return typeof c == 'function' ? c.bind(i) : c;
			}
		}),
		enumerable: !0,
		configurable: !0
	});
	const s = ['href', 'pathname', 'search', 'toString', 'toJSON'];
	r && s.push('hash');
	for (const i of s)
		Object.defineProperty(a, i, {
			get() {
				return e(), t[i];
			},
			enumerable: !0,
			configurable: !0
		});
	return a;
}
function Ge(...t) {
	let e = 5381;
	for (const n of t)
		if (typeof n == 'string') {
			let r = n.length;
			for (; r; ) e = (e * 33) ^ n.charCodeAt(--r);
		} else if (ArrayBuffer.isView(n)) {
			const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
			let a = r.length;
			for (; a; ) e = (e * 33) ^ r[--a];
		} else throw new TypeError('value must be a string or TypedArray');
	return (e >>> 0).toString(36);
}
function Me(t) {
	const e = atob(t),
		n = new Uint8Array(e.length);
	for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
	return n.buffer;
}
const qe = window.fetch;
window.fetch = (t, e) => (
	(t instanceof Request ? t.method : (e == null ? void 0 : e.method) || 'GET') !== 'GET' &&
		W.delete($t(t)),
	qe(t, e)
);
const W = new Map();
function He(t, e) {
	const n = $t(t, e),
		r = document.querySelector(n);
	if (r != null && r.textContent) {
		let { body: a, ...s } = JSON.parse(r.textContent);
		const i = r.getAttribute('data-ttl');
		return (
			i && W.set(n, { body: a, init: s, ttl: 1e3 * Number(i) }),
			r.getAttribute('data-b64') !== null && (a = Me(a)),
			Promise.resolve(new Response(a, s))
		);
	}
	return window.fetch(t, e);
}
function Ke(t, e, n) {
	if (W.size > 0) {
		const r = $t(t, n),
			a = W.get(r);
		if (a) {
			if (
				performance.now() < a.ttl &&
				['default', 'force-cache', 'only-if-cached', void 0].includes(n == null ? void 0 : n.cache)
			)
				return new Response(a.body, a.init);
			W.delete(r);
		}
	}
	return window.fetch(e, n);
}
function $t(t, e) {
	let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request ? t.url : t)}]`;
	if ((e != null && e.headers) || (e != null && e.body)) {
		const a = [];
		e.headers && a.push([...new Headers(e.headers)].join(',')),
			e.body && (typeof e.body == 'string' || ArrayBuffer.isView(e.body)) && a.push(e.body),
			(r += `[data-hash="${Ge(...a)}"]`);
	}
	return r;
}
const We = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Ye(t) {
	const e = [];
	return {
		pattern:
			t === '/'
				? /^\/$/
				: new RegExp(
						`^${ze(t)
							.map((r) => {
								const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
								if (a)
									return (
										e.push({ name: a[1], matcher: a[2], optional: !1, rest: !0, chained: !0 }),
										'(?:/(.*))?'
									);
								const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
								if (s)
									return (
										e.push({ name: s[1], matcher: s[2], optional: !0, rest: !1, chained: !0 }),
										'(?:/([^/]+))?'
									);
								if (!r) return;
								const i = r.split(/\[(.+?)\](?!\])/);
								return (
									'/' +
									i
										.map((c, f) => {
											if (f % 2) {
												if (c.startsWith('x+'))
													return Lt(String.fromCharCode(parseInt(c.slice(2), 16)));
												if (c.startsWith('u+'))
													return Lt(
														String.fromCharCode(
															...c
																.slice(2)
																.split('-')
																.map((d) => parseInt(d, 16))
														)
													);
												const u = We.exec(c),
													[, p, w, l, m] = u;
												return (
													e.push({
														name: l,
														matcher: m,
														optional: !!p,
														rest: !!w,
														chained: w ? f === 1 && i[0] === '' : !1
													}),
													w ? '(.*?)' : p ? '([^/]*)?' : '([^/]+?)'
												);
											}
											return Lt(c);
										})
										.join('')
								);
							})
							.join('')}/?$`
					),
		params: e
	};
}
function Je(t) {
	return !/^\([^)]+\)$/.test(t);
}
function ze(t) {
	return t.slice(1).split('/').filter(Je);
}
function Xe(t, e, n) {
	const r = {},
		a = t.slice(1),
		s = a.filter((o) => o !== void 0);
	let i = 0;
	for (let o = 0; o < e.length; o += 1) {
		const c = e[o];
		let f = a[o - i];
		if (
			(c.chained &&
				c.rest &&
				i &&
				((f = a
					.slice(o - i, o + 1)
					.filter((u) => u)
					.join('/')),
				(i = 0)),
			f === void 0)
		) {
			c.rest && (r[c.name] = '');
			continue;
		}
		if (!c.matcher || n[c.matcher](f)) {
			r[c.name] = f;
			const u = e[o + 1],
				p = a[o + 1];
			u && !u.rest && u.optional && p && c.chained && (i = 0),
				!u && !p && Object.keys(r).length === s.length && (i = 0);
			continue;
		}
		if (c.optional && c.chained) {
			i++;
			continue;
		}
		return;
	}
	if (!i) return r;
}
function Lt(t) {
	return t
		.normalize()
		.replace(/[[\]]/g, '\\$&')
		.replace(/%/g, '%25')
		.replace(/\//g, '%2[Ff]')
		.replace(/\?/g, '%3[Ff]')
		.replace(/#/g, '%23')
		.replace(/[.*+?^${}()|\\]/g, '\\$&');
}
function Ze({ nodes: t, server_loads: e, dictionary: n, matchers: r }) {
	const a = new Set(e);
	return Object.entries(n).map(([o, [c, f, u]]) => {
		const { pattern: p, params: w } = Ye(o),
			l = {
				id: o,
				exec: (m) => {
					const d = p.exec(m);
					if (d) return Xe(d, w, r);
				},
				errors: [1, ...(u || [])].map((m) => t[m]),
				layouts: [0, ...(f || [])].map(i),
				leaf: s(c)
			};
		return (l.errors.length = l.layouts.length = Math.max(l.errors.length, l.layouts.length)), l;
	});
	function s(o) {
		const c = o < 0;
		return c && (o = ~o), [c, t[o]];
	}
	function i(o) {
		return o === void 0 ? o : [a.has(o), t[o]];
	}
}
function de(t, e = JSON.parse) {
	try {
		return e(sessionStorage[t]);
	} catch {}
}
function Qt(t, e, n = JSON.stringify) {
	const r = n(e);
	try {
		sessionStorage[t] = r;
	} catch {}
}
var ce;
const x = ((ce = globalThis.__sveltekit_2l0ocx) == null ? void 0 : ce.base) ?? '';
var le;
const Qe = ((le = globalThis.__sveltekit_2l0ocx) == null ? void 0 : le.assets) ?? x,
	tn = '1739879870414',
	pe = 'sveltekit:snapshot',
	ge = 'sveltekit:scroll',
	me = 'sveltekit:states',
	en = 'sveltekit:pageurl',
	G = 'sveltekit:history',
	z = 'sveltekit:navigation',
	ht = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
	ft = location.origin;
function we(t) {
	if (t instanceof URL) return t;
	let e = document.baseURI;
	if (!e) {
		const n = document.getElementsByTagName('base');
		e = n.length ? n[0].href : document.URL;
	}
	return new URL(t, e);
}
function Dt() {
	return { x: pageXOffset, y: pageYOffset };
}
function B(t, e) {
	return t.getAttribute(`data-sveltekit-${e}`);
}
const te = { ...ht, '': ht.hover };
function ye(t) {
	let e = t.assignedSlot ?? t.parentNode;
	return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e;
}
function _e(t, e) {
	for (; t && t !== e; ) {
		if (t.nodeName.toUpperCase() === 'A' && t.hasAttribute('href')) return t;
		t = ye(t);
	}
}
function Ct(t, e, n) {
	let r;
	try {
		if (
			((r = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI)),
			n && r.hash.match(/^#[^/]/))
		) {
			const o = location.hash.split('#')[1] || '/';
			r.hash = `#${o}${r.hash}`;
		}
	} catch {}
	const a = t instanceof SVGAElement ? t.target.baseVal : t.target,
		s = !r || !!a || bt(r, e, n) || (t.getAttribute('rel') || '').split(/\s+/).includes('external'),
		i = (r == null ? void 0 : r.origin) === ft && t.hasAttribute('download');
	return { url: r, external: s, target: a, download: i };
}
function dt(t) {
	let e = null,
		n = null,
		r = null,
		a = null,
		s = null,
		i = null,
		o = t;
	for (; o && o !== document.documentElement; )
		r === null && (r = B(o, 'preload-code')),
			a === null && (a = B(o, 'preload-data')),
			e === null && (e = B(o, 'keepfocus')),
			n === null && (n = B(o, 'noscroll')),
			s === null && (s = B(o, 'reload')),
			i === null && (i = B(o, 'replacestate')),
			(o = ye(o));
	function c(f) {
		switch (f) {
			case '':
			case 'true':
				return !0;
			case 'off':
			case 'false':
				return !1;
			default:
				return;
		}
	}
	return {
		preload_code: te[r ?? 'off'],
		preload_data: te[a ?? 'off'],
		keepfocus: c(e),
		noscroll: c(n),
		reload: c(s),
		replace_state: c(i)
	};
}
function ee(t) {
	const e = jt(t);
	let n = !0;
	function r() {
		(n = !0), e.update((i) => i);
	}
	function a(i) {
		(n = !1), e.set(i);
	}
	function s(i) {
		let o;
		return e.subscribe((c) => {
			(o === void 0 || (n && c !== o)) && i((o = c));
		});
	}
	return { notify: r, set: a, subscribe: s };
}
const ve = { v: () => {} };
function nn() {
	const { set: t, subscribe: e } = jt(!1);
	let n;
	async function r() {
		clearTimeout(n);
		try {
			const a = await fetch(`${Qe}/_app/version.json`, {
				headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
			});
			if (!a.ok) return !1;
			const i = (await a.json()).version !== tn;
			return i && (t(!0), ve.v(), clearTimeout(n)), i;
		} catch {
			return !1;
		}
	}
	return { subscribe: e, check: r };
}
function bt(t, e, n) {
	return t.origin !== ft || !t.pathname.startsWith(e)
		? !0
		: n
			? !(
					t.pathname === e + '/' ||
					t.pathname === e + '/index.html' ||
					(t.protocol === 'file:' && t.pathname.replace(/\/[^/]+\.html?$/, '') === e)
				)
			: !1;
}
function ne(t) {
	const e = an(t),
		n = new ArrayBuffer(e.length),
		r = new DataView(n);
	for (let a = 0; a < n.byteLength; a++) r.setUint8(a, e.charCodeAt(a));
	return n;
}
const rn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function an(t) {
	t.length % 4 === 0 && (t = t.replace(/==?$/, ''));
	let e = '',
		n = 0,
		r = 0;
	for (let a = 0; a < t.length; a++)
		(n <<= 6),
			(n |= rn.indexOf(t[a])),
			(r += 6),
			r === 24 &&
				((e += String.fromCharCode((n & 16711680) >> 16)),
				(e += String.fromCharCode((n & 65280) >> 8)),
				(e += String.fromCharCode(n & 255)),
				(n = r = 0));
	return (
		r === 12
			? ((n >>= 4), (e += String.fromCharCode(n)))
			: r === 18 &&
				((n >>= 2),
				(e += String.fromCharCode((n & 65280) >> 8)),
				(e += String.fromCharCode(n & 255))),
		e
	);
}
const on = -1,
	sn = -2,
	cn = -3,
	ln = -4,
	fn = -5,
	un = -6;
function hn(t, e) {
	if (typeof t == 'number') return a(t, !0);
	if (!Array.isArray(t) || t.length === 0) throw new Error('Invalid input');
	const n = t,
		r = Array(n.length);
	function a(s, i = !1) {
		if (s === on) return;
		if (s === cn) return NaN;
		if (s === ln) return 1 / 0;
		if (s === fn) return -1 / 0;
		if (s === un) return -0;
		if (i) throw new Error('Invalid input');
		if (s in r) return r[s];
		const o = n[s];
		if (!o || typeof o != 'object') r[s] = o;
		else if (Array.isArray(o))
			if (typeof o[0] == 'string') {
				const c = o[0],
					f = e == null ? void 0 : e[c];
				if (f) return (r[s] = f(a(o[1])));
				switch (c) {
					case 'Date':
						r[s] = new Date(o[1]);
						break;
					case 'Set':
						const u = new Set();
						r[s] = u;
						for (let l = 1; l < o.length; l += 1) u.add(a(o[l]));
						break;
					case 'Map':
						const p = new Map();
						r[s] = p;
						for (let l = 1; l < o.length; l += 2) p.set(a(o[l]), a(o[l + 1]));
						break;
					case 'RegExp':
						r[s] = new RegExp(o[1], o[2]);
						break;
					case 'Object':
						r[s] = Object(o[1]);
						break;
					case 'BigInt':
						r[s] = BigInt(o[1]);
						break;
					case 'null':
						const w = Object.create(null);
						r[s] = w;
						for (let l = 1; l < o.length; l += 2) w[o[l]] = a(o[l + 1]);
						break;
					case 'Int8Array':
					case 'Uint8Array':
					case 'Uint8ClampedArray':
					case 'Int16Array':
					case 'Uint16Array':
					case 'Int32Array':
					case 'Uint32Array':
					case 'Float32Array':
					case 'Float64Array':
					case 'BigInt64Array':
					case 'BigUint64Array': {
						const l = globalThis[c],
							m = o[1],
							d = ne(m),
							h = new l(d);
						r[s] = h;
						break;
					}
					case 'ArrayBuffer': {
						const l = o[1],
							m = ne(l);
						r[s] = m;
						break;
					}
					default:
						throw new Error(`Unknown type ${c}`);
				}
			} else {
				const c = new Array(o.length);
				r[s] = c;
				for (let f = 0; f < o.length; f += 1) {
					const u = o[f];
					u !== sn && (c[f] = a(u));
				}
			}
		else {
			const c = {};
			r[s] = c;
			for (const f in o) {
				const u = o[f];
				c[f] = a(u);
			}
		}
		return r[s];
	}
	return a(0);
}
const be = new Set(['load', 'prerender', 'csr', 'ssr', 'trailingSlash', 'config']);
[...be];
const dn = new Set([...be]);
[...dn];
function pn(t) {
	return t.filter((e) => e != null);
}
class At {
	constructor(e, n) {
		(this.status = e),
			typeof n == 'string'
				? (this.body = { message: n })
				: n
					? (this.body = n)
					: (this.body = { message: `Error: ${e}` });
	}
	toString() {
		return JSON.stringify(this.body);
	}
}
class Ft {
	constructor(e, n) {
		(this.status = e), (this.location = n);
	}
}
class Vt extends Error {
	constructor(e, n, r) {
		super(r), (this.status = e), (this.text = n);
	}
}
const gn = 'x-sveltekit-invalidated',
	mn = 'x-sveltekit-trailing-slash';
function pt(t) {
	return t instanceof At || t instanceof Vt ? t.status : 500;
}
function wn(t) {
	return t instanceof Vt ? t.text : 'Internal Error';
}
let I, X, Tt;
const yn = Zt.toString().includes('$$') || /function \w+\(\) \{\}/.test(Zt.toString());
var tt, et, nt, rt, at, ot, st, it, fe, ct, ue, lt, he;
yn
	? ((I = {
			data: {},
			form: null,
			error: null,
			params: {},
			route: { id: null },
			state: {},
			status: -1,
			url: new URL('https://example.com')
		}),
		(X = { current: null }),
		(Tt = { current: !1 }))
	: ((I = new ((fe = class {
			constructor() {
				P(this, tt, C({}));
				P(this, et, C(null));
				P(this, nt, C(null));
				P(this, rt, C({}));
				P(this, at, C({ id: null }));
				P(this, ot, C({}));
				P(this, st, C(-1));
				P(this, it, C(new URL('https://example.com')));
			}
			get data() {
				return O(A(this, tt));
			}
			set data(e) {
				N(A(this, tt), e);
			}
			get form() {
				return O(A(this, et));
			}
			set form(e) {
				N(A(this, et), e);
			}
			get error() {
				return O(A(this, nt));
			}
			set error(e) {
				N(A(this, nt), e);
			}
			get params() {
				return O(A(this, rt));
			}
			set params(e) {
				N(A(this, rt), e);
			}
			get route() {
				return O(A(this, at));
			}
			set route(e) {
				N(A(this, at), e);
			}
			get state() {
				return O(A(this, ot));
			}
			set state(e) {
				N(A(this, ot), e);
			}
			get status() {
				return O(A(this, st));
			}
			set status(e) {
				N(A(this, st), e);
			}
			get url() {
				return O(A(this, it));
			}
			set url(e) {
				N(A(this, it), e);
			}
		}),
		(tt = new WeakMap()),
		(et = new WeakMap()),
		(nt = new WeakMap()),
		(rt = new WeakMap()),
		(at = new WeakMap()),
		(ot = new WeakMap()),
		(st = new WeakMap()),
		(it = new WeakMap()),
		fe)()),
		(X = new ((ue = class {
			constructor() {
				P(this, ct, C(null));
			}
			get current() {
				return O(A(this, ct));
			}
			set current(e) {
				N(A(this, ct), e);
			}
		}),
		(ct = new WeakMap()),
		ue)()),
		(Tt = new ((he = class {
			constructor() {
				P(this, lt, C(!1));
			}
			get current() {
				return O(A(this, lt));
			}
			set current(e) {
				N(A(this, lt), e);
			}
		}),
		(lt = new WeakMap()),
		he)()),
		(ve.v = () => (Tt.current = !0)));
function Ae(t) {
	Object.assign(I, t);
}
const _n = '/__data.json',
	vn = '.html__data.json';
function bn(t) {
	return t.endsWith('.html') ? t.replace(/\.html$/, vn) : t.replace(/\/$/, '') + _n;
}
const An = new Set(['icon', 'shortcut icon', 'apple-touch-icon']),
	V = de(ge) ?? {},
	Z = de(pe) ?? {},
	D = { url: ee({}), page: ee({}), navigating: jt(null), updated: nn() };
function Bt(t) {
	V[t] = Dt();
}
function kn(t, e) {
	let n = t + 1;
	for (; V[n]; ) delete V[n], (n += 1);
	for (n = e + 1; Z[n]; ) delete Z[n], (n += 1);
}
function q(t) {
	return (location.href = t.href), new Promise(() => {});
}
async function ke() {
	if ('serviceWorker' in navigator) {
		const t = await navigator.serviceWorker.getRegistration(x || '/');
		t && (await t.update());
	}
}
function re() {}
let Gt, Ot, gt, j, Nt, k;
const mt = [],
	wt = [];
let L = null;
const Se = new Set(),
	Sn = new Set(),
	Y = new Set();
let _ = { branch: [], error: null, url: null },
	Mt = !1,
	yt = !1,
	ae = !0,
	Q = !1,
	H = !1,
	Ee = !1,
	kt = !1,
	qt,
	R,
	T,
	$;
const J = new Set();
let xt;
async function qn(t, e, n) {
	var a, s, i, o;
	document.URL !== location.href && (location.href = location.href),
		(k = t),
		await ((s = (a = t.hooks).init) == null ? void 0 : s.call(a)),
		(Gt = Ze(t)),
		(j = document.documentElement),
		(Nt = e),
		(Ot = t.nodes[0]),
		(gt = t.nodes[1]),
		Ot(),
		gt(),
		(R = (i = history.state) == null ? void 0 : i[G]),
		(T = (o = history.state) == null ? void 0 : o[z]),
		R || ((R = T = Date.now()), history.replaceState({ ...history.state, [G]: R, [z]: T }, ''));
	const r = V[R];
	r && ((history.scrollRestoration = 'manual'), scrollTo(r.x, r.y)),
		n
			? await Nn(Nt, n)
			: await Pn(k.hash ? Ne(new URL(location.href)) : location.href, { replaceState: !0 }),
		On();
}
async function En() {
	if ((await (xt || (xt = Promise.resolve())), !xt)) return;
	xt = null;
	const t = ($ = {}),
		e = await ut(_.url, !0);
	L = null;
	const n = e && (await Wt(e));
	if (!(!n || t !== $)) {
		if (n.type === 'redirect') return St(new URL(n.location, _.url).href, {}, 1, t);
		n.props.page && Object.assign(I, n.props.page),
			(_ = n.state),
			Re(),
			qt.$set(n.props),
			Ae(n.props.page);
	}
}
function Re() {
	(mt.length = 0), (kt = !1);
}
function Ie(t) {
	wt.some((e) => (e == null ? void 0 : e.snapshot)) &&
		(Z[t] = wt.map((e) => {
			var n;
			return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture();
		}));
}
function Ue(t) {
	var e;
	(e = Z[t]) == null ||
		e.forEach((n, r) => {
			var a, s;
			(s = (a = wt[r]) == null ? void 0 : a.snapshot) == null || s.restore(n);
		});
}
function oe() {
	Bt(R), Qt(ge, V), Ie(T), Qt(pe, Z);
}
async function St(t, e, n, r) {
	return K({
		type: 'goto',
		url: we(t),
		keepfocus: e.keepFocus,
		noscroll: e.noScroll,
		replace_state: e.replaceState,
		state: e.state,
		redirect_count: n,
		nav_token: r,
		accept: () => {
			e.invalidateAll && (kt = !0), e.invalidate && e.invalidate.forEach(Cn);
		}
	});
}
async function Rn(t) {
	if (t.id !== (L == null ? void 0 : L.id)) {
		const e = {};
		J.add(e),
			(L = {
				id: t.id,
				token: e,
				promise: Wt({ ...t, preload: e }).then(
					(n) => (J.delete(e), n.type === 'loaded' && n.state.error && (L = null), n)
				)
			});
	}
	return L.promise;
}
async function Pt(t) {
	var n;
	const e = (n = await ut(t, !1)) == null ? void 0 : n.route;
	e && (await Promise.all([...e.layouts, e.leaf].map((r) => (r == null ? void 0 : r[1]()))));
}
function Le(t, e, n) {
	var s;
	_ = t.state;
	const r = document.querySelector('style[data-sveltekit]');
	r && r.remove(),
		Object.assign(I, t.props.page),
		(qt = new k.root({
			target: e,
			props: { ...t.props, stores: D, components: wt },
			hydrate: n,
			sync: !1
		})),
		Ue(T);
	const a = {
		from: null,
		to: {
			params: _.params,
			route: { id: ((s = _.route) == null ? void 0 : s.id) ?? null },
			url: new URL(location.href)
		},
		willUnload: !1,
		type: 'enter',
		complete: Promise.resolve()
	};
	Y.forEach((i) => i(a)), (yt = !0);
}
function _t({ url: t, params: e, branch: n, status: r, error: a, route: s, form: i }) {
	let o = 'never';
	if (x && (t.pathname === x || t.pathname === x + '/')) o = 'always';
	else for (const l of n) (l == null ? void 0 : l.slash) !== void 0 && (o = l.slash);
	(t.pathname = De(t.pathname, o)), (t.search = t.search);
	const c = {
		type: 'loaded',
		state: { url: t, params: e, branch: n, error: a, route: s },
		props: { constructors: pn(n).map((l) => l.node.component), page: Yt(I) }
	};
	i !== void 0 && (c.props.form = i);
	let f = {},
		u = !I,
		p = 0;
	for (let l = 0; l < Math.max(n.length, _.branch.length); l += 1) {
		const m = n[l],
			d = _.branch[l];
		(m == null ? void 0 : m.data) !== (d == null ? void 0 : d.data) && (u = !0),
			m && ((f = { ...f, ...m.data }), u && (c.props[`data_${p}`] = f), (p += 1));
	}
	return (
		(!_.url || t.href !== _.url.href || _.error !== a || (i !== void 0 && i !== I.form) || u) &&
			(c.props.page = {
				error: a,
				params: e,
				route: { id: (s == null ? void 0 : s.id) ?? null },
				state: {},
				status: r,
				url: new URL(t),
				form: i ?? null,
				data: u ? f : I.data
			}),
		c
	);
}
async function Ht({ loader: t, parent: e, url: n, params: r, route: a, server_data_node: s }) {
	var u, p, w;
	let i = null,
		o = !0;
	const c = {
			dependencies: new Set(),
			params: new Set(),
			parent: !1,
			route: !1,
			url: !1,
			search_params: new Set()
		},
		f = await t();
	if ((u = f.universal) != null && u.load) {
		let l = function (...d) {
			for (const h of d) {
				const { href: y } = new URL(h, n);
				c.dependencies.add(y);
			}
		};
		const m = {
			route: new Proxy(a, { get: (d, h) => (o && (c.route = !0), d[h]) }),
			params: new Proxy(r, { get: (d, h) => (o && c.params.add(h), d[h]) }),
			data: (s == null ? void 0 : s.data) ?? null,
			url: Be(
				n,
				() => {
					o && (c.url = !0);
				},
				(d) => {
					o && c.search_params.add(d);
				},
				k.hash
			),
			async fetch(d, h) {
				let y;
				d instanceof Request
					? ((y = d.url),
						(h = {
							body: d.method === 'GET' || d.method === 'HEAD' ? void 0 : await d.blob(),
							cache: d.cache,
							credentials: d.credentials,
							headers: [...d.headers].length ? d.headers : void 0,
							integrity: d.integrity,
							keepalive: d.keepalive,
							method: d.method,
							mode: d.mode,
							redirect: d.redirect,
							referrer: d.referrer,
							referrerPolicy: d.referrerPolicy,
							signal: d.signal,
							...h
						}))
					: (y = d);
				const S = new URL(y, n);
				return (
					o && l(S.href),
					S.origin === n.origin && (y = S.href.slice(n.origin.length)),
					yt ? Ke(y, S.href, h) : He(y, h)
				);
			},
			setHeaders: () => {},
			depends: l,
			parent() {
				return o && (c.parent = !0), e();
			},
			untrack(d) {
				o = !1;
				try {
					return d();
				} finally {
					o = !0;
				}
			}
		};
		i = (await f.universal.load.call(null, m)) ?? null;
	}
	return {
		node: f,
		loader: t,
		server: s,
		universal: (p = f.universal) != null && p.load ? { type: 'data', data: i, uses: c } : null,
		data: i ?? (s == null ? void 0 : s.data) ?? null,
		slash: ((w = f.universal) == null ? void 0 : w.trailingSlash) ?? (s == null ? void 0 : s.slash)
	};
}
function se(t, e, n, r, a, s) {
	if (kt) return !0;
	if (!a) return !1;
	if ((a.parent && t) || (a.route && e) || (a.url && n)) return !0;
	for (const i of a.search_params) if (r.has(i)) return !0;
	for (const i of a.params) if (s[i] !== _.params[i]) return !0;
	for (const i of a.dependencies) if (mt.some((o) => o(new URL(i)))) return !0;
	return !1;
}
function Kt(t, e) {
	return (t == null ? void 0 : t.type) === 'data'
		? t
		: (t == null ? void 0 : t.type) === 'skip'
			? (e ?? null)
			: null;
}
function In(t, e) {
	if (!t) return new Set(e.searchParams.keys());
	const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
	for (const r of n) {
		const a = t.searchParams.getAll(r),
			s = e.searchParams.getAll(r);
		a.every((i) => s.includes(i)) && s.every((i) => a.includes(i)) && n.delete(r);
	}
	return n;
}
function ie({ error: t, url: e, route: n, params: r }) {
	return {
		type: 'loaded',
		state: { error: t, url: e, route: n, params: r, branch: [] },
		props: { page: Yt(I), constructors: [] }
	};
}
async function Wt({ id: t, invalidating: e, url: n, params: r, route: a, preload: s }) {
	if ((L == null ? void 0 : L.id) === t) return J.delete(L.token), L.promise;
	const { errors: i, layouts: o, leaf: c } = a,
		f = [...o, c];
	i.forEach((g) => (g == null ? void 0 : g().catch(() => {}))),
		f.forEach((g) => (g == null ? void 0 : g[1]().catch(() => {})));
	let u = null;
	const p = _.url ? t !== vt(_.url) : !1,
		w = _.route ? a.id !== _.route.id : !1,
		l = In(_.url, n);
	let m = !1;
	const d = f.map((g, v) => {
		var F;
		const b = _.branch[v],
			E =
				!!(g != null && g[0]) &&
				((b == null ? void 0 : b.loader) !== g[1] ||
					se(m, w, p, l, (F = b.server) == null ? void 0 : F.uses, r));
		return E && (m = !0), E;
	});
	if (d.some(Boolean)) {
		try {
			u = await Pe(n, d);
		} catch (g) {
			const v = await M(g, { url: n, params: r, route: { id: t } });
			return J.has(s)
				? ie({ error: v, url: n, params: r, route: a })
				: Et({ status: pt(g), error: v, url: n, route: a });
		}
		if (u.type === 'redirect') return u;
	}
	const h = u == null ? void 0 : u.nodes;
	let y = !1;
	const S = f.map(async (g, v) => {
		var Rt;
		if (!g) return;
		const b = _.branch[v],
			E = h == null ? void 0 : h[v];
		if (
			(!E || E.type === 'skip') &&
			g[1] === (b == null ? void 0 : b.loader) &&
			!se(y, w, p, l, (Rt = b.universal) == null ? void 0 : Rt.uses, r)
		)
			return b;
		if (((y = !0), (E == null ? void 0 : E.type) === 'error')) throw E;
		return Ht({
			loader: g[1],
			url: n,
			params: r,
			route: a,
			parent: async () => {
				var zt;
				const Jt = {};
				for (let It = 0; It < v; It += 1)
					Object.assign(Jt, (zt = await S[It]) == null ? void 0 : zt.data);
				return Jt;
			},
			server_data_node: Kt(
				E === void 0 && g[0] ? { type: 'skip' } : (E ?? null),
				g[0] ? (b == null ? void 0 : b.server) : void 0
			)
		});
	});
	for (const g of S) g.catch(() => {});
	const U = [];
	for (let g = 0; g < f.length; g += 1)
		if (f[g])
			try {
				U.push(await S[g]);
			} catch (v) {
				if (v instanceof Ft) return { type: 'redirect', location: v.location };
				if (J.has(s))
					return ie({
						error: await M(v, { params: r, url: n, route: { id: a.id } }),
						url: n,
						params: r,
						route: a
					});
				let b = pt(v),
					E;
				if (h != null && h.includes(v)) (b = v.status ?? b), (E = v.error);
				else if (v instanceof At) E = v.body;
				else {
					if (await D.updated.check()) return await ke(), await q(n);
					E = await M(v, { params: r, url: n, route: { id: a.id } });
				}
				const F = await Un(g, U, i);
				return F
					? _t({
							url: n,
							params: r,
							branch: U.slice(0, F.idx).concat(F.node),
							status: b,
							error: E,
							route: a
						})
					: await xe(n, { id: a.id }, E, b);
			}
		else U.push(void 0);
	return _t({
		url: n,
		params: r,
		branch: U,
		status: 200,
		error: null,
		route: a,
		form: e ? void 0 : null
	});
}
async function Un(t, e, n) {
	for (; t--; )
		if (n[t]) {
			let r = t;
			for (; !e[r]; ) r -= 1;
			try {
				return {
					idx: r + 1,
					node: { node: await n[t](), loader: n[t], data: {}, server: null, universal: null }
				};
			} catch {
				continue;
			}
		}
}
async function Et({ status: t, error: e, url: n, route: r }) {
	const a = {};
	let s = null;
	if (k.server_loads[0] === 0)
		try {
			const o = await Pe(n, [!0]);
			if (o.type !== 'data' || (o.nodes[0] && o.nodes[0].type !== 'data')) throw 0;
			s = o.nodes[0] ?? null;
		} catch {
			(n.origin !== ft || n.pathname !== location.pathname || Mt) && (await q(n));
		}
	try {
		const o = await Ht({
				loader: Ot,
				url: n,
				params: a,
				route: r,
				parent: () => Promise.resolve({}),
				server_data_node: Kt(s)
			}),
			c = { node: await gt(), loader: gt, universal: null, server: null, data: null };
		return _t({ url: n, params: a, branch: [o, c], status: t, error: e, route: null });
	} catch (o) {
		if (o instanceof Ft) return St(new URL(o.location, location.href), {}, 0);
		throw o;
	}
}
function Ln(t) {
	let e;
	try {
		if (((e = k.hooks.reroute({ url: new URL(t) }) ?? t), typeof e == 'string')) {
			const n = new URL(t);
			k.hash ? (n.hash = e) : (n.pathname = e), (e = n);
		}
	} catch {
		return;
	}
	return e;
}
async function ut(t, e) {
	if (t && !bt(t, x, k.hash)) {
		const n = Ln(t);
		if (!n) return;
		const r = Tn(n);
		for (const a of Gt) {
			const s = a.exec(r);
			if (s) return { id: vt(t), invalidating: e, route: a, params: Ve(s), url: t };
		}
	}
}
function Tn(t) {
	return (
		Fe(k.hash ? t.hash.replace(/^#/, '').replace(/[?#].+/, '') : t.pathname.slice(x.length)) || '/'
	);
}
function vt(t) {
	return (k.hash ? t.hash.replace(/^#/, '') : t.pathname) + t.search;
}
function Te({ url: t, type: e, intent: n, delta: r }) {
	let a = !1;
	const s = Oe(_, n, t, e);
	r !== void 0 && (s.navigation.delta = r);
	const i = {
		...s.navigation,
		cancel: () => {
			(a = !0), s.reject(new Error('navigation cancelled'));
		}
	};
	return Q || Se.forEach((o) => o(i)), a ? null : s;
}
async function K({
	type: t,
	url: e,
	popped: n,
	keepfocus: r,
	noscroll: a,
	replace_state: s,
	state: i = {},
	redirect_count: o = 0,
	nav_token: c = {},
	accept: f = re,
	block: u = re
}) {
	const p = $;
	$ = c;
	const w = await ut(e, !1),
		l = Te({ url: e, type: t, delta: n == null ? void 0 : n.delta, intent: w });
	if (!l) {
		u(), $ === c && ($ = p);
		return;
	}
	const m = R,
		d = T;
	f(), (Q = !0), yt && D.navigating.set((X.current = l.navigation));
	let h = w && (await Wt(w));
	if (!h) {
		if (bt(e, x, k.hash)) return await q(e);
		h = await xe(
			e,
			{ id: null },
			await M(new Vt(404, 'Not Found', `Not found: ${e.pathname}`), {
				url: e,
				params: {},
				route: { id: null }
			}),
			404
		);
	}
	if (((e = (w == null ? void 0 : w.url) || e), $ !== c))
		return l.reject(new Error('navigation aborted')), !1;
	if (h.type === 'redirect')
		if (o >= 20)
			h = await Et({
				status: 500,
				error: await M(new Error('Redirect loop'), { url: e, params: {}, route: { id: null } }),
				url: e,
				route: { id: null }
			});
		else return await St(new URL(h.location, e).href, {}, o + 1, c), !1;
	else h.props.page.status >= 400 && (await D.updated.check()) && (await ke(), await q(e));
	if (
		(Re(),
		Bt(m),
		Ie(d),
		h.props.page.url.pathname !== e.pathname && (e.pathname = h.props.page.url.pathname),
		(i = n ? n.state : i),
		!n)
	) {
		const g = s ? 0 : 1,
			v = { [G]: (R += g), [z]: (T += g), [me]: i };
		(s ? history.replaceState : history.pushState).call(history, v, '', e), s || kn(R, T);
	}
	if (((L = null), (h.props.page.state = i), yt)) {
		(_ = h.state), h.props.page && (h.props.page.url = e);
		const g = (await Promise.all(Array.from(Sn, (v) => v(l.navigation)))).filter(
			(v) => typeof v == 'function'
		);
		if (g.length > 0) {
			let v = function () {
				g.forEach((b) => {
					Y.delete(b);
				});
			};
			g.push(v),
				g.forEach((b) => {
					Y.add(b);
				});
		}
		qt.$set(h.props), Ae(h.props.page), (Ee = !0);
	} else Le(h, Nt, !1);
	const { activeElement: y } = document;
	await $e();
	const S = n ? n.scroll : a ? Dt() : null;
	if (ae) {
		const g =
			e.hash &&
			document.getElementById(
				decodeURIComponent(k.hash ? (e.hash.split('#')[2] ?? '') : e.hash.slice(1))
			);
		S ? scrollTo(S.x, S.y) : g ? g.scrollIntoView() : scrollTo(0, 0);
	}
	const U = document.activeElement !== y && document.activeElement !== document.body;
	!r && !U && jn(),
		(ae = !0),
		h.props.page && Object.assign(I, h.props.page),
		(Q = !1),
		t === 'popstate' && Ue(T),
		l.fulfil(void 0),
		Y.forEach((g) => g(l.navigation)),
		D.navigating.set((X.current = null));
}
async function xe(t, e, n, r) {
	return t.origin === ft && t.pathname === location.pathname && !Mt
		? await Et({ status: r, error: n, url: t, route: e })
		: await q(t);
}
function xn() {
	let t, e;
	j.addEventListener('mousemove', (i) => {
		const o = i.target;
		clearTimeout(t),
			(t = setTimeout(() => {
				a(o, 2);
			}, 20));
	});
	function n(i) {
		i.defaultPrevented || a(i.composedPath()[0], 1);
	}
	j.addEventListener('mousedown', n), j.addEventListener('touchstart', n, { passive: !0 });
	const r = new IntersectionObserver(
		(i) => {
			for (const o of i) o.isIntersecting && (Pt(new URL(o.target.href)), r.unobserve(o.target));
		},
		{ threshold: 0 }
	);
	async function a(i, o) {
		const c = _e(i, j);
		if (!c || c === e) return;
		e = c;
		const { url: f, external: u, download: p } = Ct(c, x, k.hash);
		if (u || p) return;
		const w = dt(c),
			l = f && vt(_.url) === vt(f);
		if (!w.reload && !l)
			if (o <= w.preload_data) {
				const m = await ut(f, !1);
				m && Rn(m);
			} else o <= w.preload_code && Pt(f);
	}
	function s() {
		r.disconnect();
		for (const i of j.querySelectorAll('a')) {
			const { url: o, external: c, download: f } = Ct(i, x, k.hash);
			if (c || f) continue;
			const u = dt(i);
			u.reload ||
				(u.preload_code === ht.viewport && r.observe(i), u.preload_code === ht.eager && Pt(o));
		}
	}
	Y.add(s), s();
}
function M(t, e) {
	if (t instanceof At) return t.body;
	const n = pt(t),
		r = wn(t);
	return k.hooks.handleError({ error: t, event: e, status: n, message: r }) ?? { message: r };
}
function Pn(t, e = {}) {
	return (
		(t = new URL(we(t))),
		t.origin !== ft ? Promise.reject(new Error('goto: invalid URL')) : St(t, e, 0)
	);
}
function Cn(t) {
	if (typeof t == 'function') mt.push(t);
	else {
		const { href: e } = new URL(t, location.href);
		mt.push((n) => n.href === e);
	}
}
function Hn() {
	return (kt = !0), En();
}
function On() {
	var e;
	(history.scrollRestoration = 'manual'),
		addEventListener('beforeunload', (n) => {
			let r = !1;
			if ((oe(), !Q)) {
				const a = Oe(_, void 0, null, 'leave'),
					s = {
						...a.navigation,
						cancel: () => {
							(r = !0), a.reject(new Error('navigation cancelled'));
						}
					};
				Se.forEach((i) => i(s));
			}
			r ? (n.preventDefault(), (n.returnValue = '')) : (history.scrollRestoration = 'auto');
		}),
		addEventListener('visibilitychange', () => {
			document.visibilityState === 'hidden' && oe();
		}),
		((e = navigator.connection) != null && e.saveData) || xn(),
		j.addEventListener('click', async (n) => {
			if (
				n.button ||
				n.which !== 1 ||
				n.metaKey ||
				n.ctrlKey ||
				n.shiftKey ||
				n.altKey ||
				n.defaultPrevented
			)
				return;
			const r = _e(n.composedPath()[0], j);
			if (!r) return;
			const { url: a, external: s, target: i, download: o } = Ct(r, x, k.hash);
			if (!a) return;
			if (i === '_parent' || i === '_top') {
				if (window.parent !== window) return;
			} else if (i && i !== '_self') return;
			const c = dt(r);
			if (
				(!(r instanceof SVGAElement) &&
					a.protocol !== location.protocol &&
					!(a.protocol === 'https:' || a.protocol === 'http:')) ||
				o
			)
				return;
			const [u, p] = (k.hash ? a.hash.replace(/^#/, '') : a.href).split('#'),
				w = u === Ut(location);
			if (s || (c.reload && (!w || !p))) {
				Te({ url: a, type: 'link' }) ? (Q = !0) : n.preventDefault();
				return;
			}
			if (p !== void 0 && w) {
				const [, l] = _.url.href.split('#');
				if (l === p) {
					if (
						(n.preventDefault(),
						p === '' || (p === 'top' && r.ownerDocument.getElementById('top') === null))
					)
						window.scrollTo({ top: 0 });
					else {
						const m = r.ownerDocument.getElementById(decodeURIComponent(p));
						m && (m.scrollIntoView(), m.focus());
					}
					return;
				}
				if (((H = !0), Bt(R), t(a), !c.replace_state)) return;
				H = !1;
			}
			n.preventDefault(),
				await new Promise((l) => {
					requestAnimationFrame(() => {
						setTimeout(l, 0);
					}),
						setTimeout(l, 100);
				}),
				await K({
					type: 'link',
					url: a,
					keepfocus: c.keepfocus,
					noscroll: c.noscroll,
					replace_state: c.replace_state ?? a.href === location.href
				});
		}),
		j.addEventListener('submit', (n) => {
			if (n.defaultPrevented) return;
			const r = HTMLFormElement.prototype.cloneNode.call(n.target),
				a = n.submitter;
			if (
				((a == null ? void 0 : a.formTarget) || r.target) === '_blank' ||
				((a == null ? void 0 : a.formMethod) || r.method) !== 'get'
			)
				return;
			const o = new URL(
				((a == null ? void 0 : a.hasAttribute('formaction')) &&
					(a == null ? void 0 : a.formAction)) ||
					r.action
			);
			if (bt(o, x, !1)) return;
			const c = n.target,
				f = dt(c);
			if (f.reload) return;
			n.preventDefault(), n.stopPropagation();
			const u = new FormData(c),
				p = a == null ? void 0 : a.getAttribute('name');
			p && u.append(p, (a == null ? void 0 : a.getAttribute('value')) ?? ''),
				(o.search = new URLSearchParams(u).toString()),
				K({
					type: 'form',
					url: o,
					keepfocus: f.keepfocus,
					noscroll: f.noscroll,
					replace_state: f.replace_state ?? o.href === location.href
				});
		}),
		addEventListener('popstate', async (n) => {
			var r;
			if ((r = n.state) != null && r[G]) {
				const a = n.state[G];
				if ((($ = {}), a === R)) return;
				const s = V[a],
					i = n.state[me] ?? {},
					o = new URL(n.state[en] ?? location.href),
					c = n.state[z],
					f = _.url ? Ut(location) === Ut(_.url) : !1;
				if (c === T && (Ee || f)) {
					i !== I.state && (I.state = i), t(o), (V[R] = Dt()), s && scrollTo(s.x, s.y), (R = a);
					return;
				}
				const p = a - R;
				await K({
					type: 'popstate',
					url: o,
					popped: { state: i, scroll: s, delta: p },
					accept: () => {
						(R = a), (T = c);
					},
					block: () => {
						history.go(-p);
					},
					nav_token: $
				});
			} else if (!H) {
				const a = new URL(location.href);
				t(a);
			}
		}),
		addEventListener('hashchange', () => {
			H
				? ((H = !1),
					history.replaceState({ ...history.state, [G]: ++R, [z]: T }, '', location.href))
				: k.hash && _.url.hash === location.hash && K({ type: 'goto', url: Ne(_.url) });
		});
	for (const n of document.querySelectorAll('link')) An.has(n.rel) && (n.href = n.href);
	addEventListener('pageshow', (n) => {
		n.persisted && D.navigating.set((X.current = null));
	});
	function t(n) {
		(_.url = I.url = n), D.page.set(Yt(I)), D.page.notify();
	}
}
async function Nn(
	t,
	{ status: e = 200, error: n, node_ids: r, params: a, route: s, server_route: i, data: o, form: c }
) {
	Mt = !0;
	const f = new URL(location.href);
	let u;
	({ params: a = {}, route: s = { id: null } } = (await ut(f, !1)) || {}),
		(u = Gt.find(({ id: l }) => l === s.id));
	let p,
		w = !0;
	try {
		const l = r.map(async (d, h) => {
				const y = o[h];
				return (
					y != null && y.uses && (y.uses = Ce(y.uses)),
					Ht({
						loader: k.nodes[d],
						url: f,
						params: a,
						route: s,
						parent: async () => {
							const S = {};
							for (let U = 0; U < h; U += 1) Object.assign(S, (await l[U]).data);
							return S;
						},
						server_data_node: Kt(y)
					})
				);
			}),
			m = await Promise.all(l);
		if (u) {
			const d = u.layouts;
			for (let h = 0; h < d.length; h++) d[h] || m.splice(h, 0, void 0);
		}
		p = _t({ url: f, params: a, branch: m, status: e, error: n, form: c, route: u ?? null });
	} catch (l) {
		if (l instanceof Ft) {
			await q(new URL(l.location, location.href));
			return;
		}
		(p = await Et({
			status: pt(l),
			error: await M(l, { url: f, params: a, route: s }),
			url: f,
			route: s
		})),
			(t.textContent = ''),
			(w = !1);
	}
	p.props.page && (p.props.page.state = {}), Le(p, t, w);
}
async function Pe(t, e) {
	var s;
	const n = new URL(t);
	(n.pathname = bn(t.pathname)),
		t.pathname.endsWith('/') && n.searchParams.append(mn, '1'),
		n.searchParams.append(gn, e.map((i) => (i ? '1' : '0')).join(''));
	const r = window.fetch,
		a = await r(n.href, {});
	if (!a.ok) {
		let i;
		throw (
			((s = a.headers.get('content-type')) != null && s.includes('application/json')
				? (i = await a.json())
				: a.status === 404
					? (i = 'Not Found')
					: a.status === 500 && (i = 'Internal Error'),
			new At(a.status, i))
		);
	}
	return new Promise(async (i) => {
		var w;
		const o = new Map(),
			c = a.body.getReader(),
			f = new TextDecoder();
		function u(l) {
			return hn(l, {
				...k.decoders,
				Promise: (m) =>
					new Promise((d, h) => {
						o.set(m, { fulfil: d, reject: h });
					})
			});
		}
		let p = '';
		for (;;) {
			const { done: l, value: m } = await c.read();
			if (l && !p) break;
			for (
				p +=
					!m && p
						? `
`
						: f.decode(m, { stream: !0 });
				;

			) {
				const d = p.indexOf(`
`);
				if (d === -1) break;
				const h = JSON.parse(p.slice(0, d));
				if (((p = p.slice(d + 1)), h.type === 'redirect')) return i(h);
				if (h.type === 'data')
					(w = h.nodes) == null ||
						w.forEach((y) => {
							(y == null ? void 0 : y.type) === 'data' &&
								((y.uses = Ce(y.uses)), (y.data = u(y.data)));
						}),
						i(h);
				else if (h.type === 'chunk') {
					const { id: y, data: S, error: U } = h,
						g = o.get(y);
					o.delete(y), U ? g.reject(u(U)) : g.fulfil(u(S));
				}
			}
		}
	});
}
function Ce(t) {
	return {
		dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
		params: new Set((t == null ? void 0 : t.params) ?? []),
		parent: !!(t != null && t.parent),
		route: !!(t != null && t.route),
		url: !!(t != null && t.url),
		search_params: new Set((t == null ? void 0 : t.search_params) ?? [])
	};
}
function jn() {
	const t = document.querySelector('[autofocus]');
	if (t) t.focus();
	else {
		const e = document.body,
			n = e.getAttribute('tabindex');
		(e.tabIndex = -1),
			e.focus({ preventScroll: !0, focusVisible: !1 }),
			n !== null ? e.setAttribute('tabindex', n) : e.removeAttribute('tabindex');
		const r = getSelection();
		if (r && r.type !== 'None') {
			const a = [];
			for (let s = 0; s < r.rangeCount; s += 1) a.push(r.getRangeAt(s));
			setTimeout(() => {
				if (r.rangeCount === a.length) {
					for (let s = 0; s < r.rangeCount; s += 1) {
						const i = a[s],
							o = r.getRangeAt(s);
						if (
							i.commonAncestorContainer !== o.commonAncestorContainer ||
							i.startContainer !== o.startContainer ||
							i.endContainer !== o.endContainer ||
							i.startOffset !== o.startOffset ||
							i.endOffset !== o.endOffset
						)
							return;
					}
					r.removeAllRanges();
				}
			});
		}
	}
}
function Oe(t, e, n, r) {
	var c, f;
	let a, s;
	const i = new Promise((u, p) => {
		(a = u), (s = p);
	});
	return (
		i.catch(() => {}),
		{
			navigation: {
				from: {
					params: t.params,
					route: { id: ((c = t.route) == null ? void 0 : c.id) ?? null },
					url: t.url
				},
				to: n && {
					params: (e == null ? void 0 : e.params) ?? null,
					route: { id: ((f = e == null ? void 0 : e.route) == null ? void 0 : f.id) ?? null },
					url: n
				},
				willUnload: !e,
				type: r,
				complete: i
			},
			fulfil: a,
			reject: s
		}
	);
}
function Yt(t) {
	return {
		data: t.data,
		error: t.error,
		form: t.form,
		params: t.params,
		route: t.route,
		state: t.state,
		status: t.status,
		url: t.url
	};
}
function Ne(t) {
	const e = new URL(t);
	return (e.hash = decodeURIComponent(t.hash)), e;
}
export { qn as a, Pn as g, Hn as i, I as p, D as s };
