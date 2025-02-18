import './Bg9kRutz.js';
import { p as br, f as gr, a as mr, c as je, x as $e, r as Te, t as Ve } from './DQMf8gWK.js';
import { e as hr, a as ye, t as Xe } from './BGOrq1ZG.js';
import { p as ce, i as yr, b as Ne, r as xr } from './DjKtoK8y.js';
import { s as Ee } from './D3E8oDJG.js';
import { c as vr, s as Le } from './DvbRtjlS.js';
const Pe = '-',
	wr = (e) => {
		const t = zr(e),
			{ conflictingClassGroups: r, conflictingClassGroupModifiers: o } = e;
		return {
			getClassGroupId: (s) => {
				const i = s.split(Pe);
				return i[0] === '' && i.length !== 1 && i.shift(), Qe(i, t) || kr(s);
			},
			getConflictingClassGroupIds: (s, i) => {
				const a = r[s] || [];
				return i && o[s] ? [...a, ...o[s]] : a;
			}
		};
	},
	Qe = (e, t) => {
		var s;
		if (e.length === 0) return t.classGroupId;
		const r = e[0],
			o = t.nextPart.get(r),
			l = o ? Qe(e.slice(1), o) : void 0;
		if (l) return l;
		if (t.validators.length === 0) return;
		const n = e.join(Pe);
		return (s = t.validators.find(({ validator: i }) => i(n))) == null ? void 0 : s.classGroupId;
	},
	_e = /^\[(.+)\]$/,
	kr = (e) => {
		if (_e.test(e)) {
			const t = _e.exec(e)[1],
				r = t == null ? void 0 : t.substring(0, t.indexOf(':'));
			if (r) return 'arbitrary..' + r;
		}
	},
	zr = (e) => {
		const { theme: t, classGroups: r } = e,
			o = { nextPart: new Map(), validators: [] };
		for (const l in r) ke(r[l], o, l, t);
		return o;
	},
	ke = (e, t, r, o) => {
		e.forEach((l) => {
			if (typeof l == 'string') {
				const n = l === '' ? t : Oe(t, l);
				n.classGroupId = r;
				return;
			}
			if (typeof l == 'function') {
				if (Cr(l)) {
					ke(l(o), t, r, o);
					return;
				}
				t.validators.push({ validator: l, classGroupId: r });
				return;
			}
			Object.entries(l).forEach(([n, s]) => {
				ke(s, Oe(t, n), r, o);
			});
		});
	},
	Oe = (e, t) => {
		let r = e;
		return (
			t.split(Pe).forEach((o) => {
				r.nextPart.has(o) || r.nextPart.set(o, { nextPart: new Map(), validators: [] }),
					(r = r.nextPart.get(o));
			}),
			r
		);
	},
	Cr = (e) => e.isThemeGetter,
	Ar = (e) => {
		if (e < 1) return { get: () => {}, set: () => {} };
		let t = 0,
			r = new Map(),
			o = new Map();
		const l = (n, s) => {
			r.set(n, s), t++, t > e && ((t = 0), (o = r), (r = new Map()));
		};
		return {
			get(n) {
				let s = r.get(n);
				if (s !== void 0) return s;
				if ((s = o.get(n)) !== void 0) return l(n, s), s;
			},
			set(n, s) {
				r.has(n) ? r.set(n, s) : l(n, s);
			}
		};
	},
	ze = '!',
	Ce = ':',
	Sr = Ce.length,
	Mr = (e) => {
		const { prefix: t, experimentalParseClassName: r } = e;
		let o = (l) => {
			const n = [];
			let s = 0,
				i = 0,
				a = 0,
				w;
			for (let C = 0; C < l.length; C++) {
				let x = l[C];
				if (s === 0 && i === 0) {
					if (x === Ce) {
						n.push(l.slice(a, C)), (a = C + Sr);
						continue;
					}
					if (x === '/') {
						w = C;
						continue;
					}
				}
				x === '[' ? s++ : x === ']' ? s-- : x === '(' ? i++ : x === ')' && i--;
			}
			const b = n.length === 0 ? l : l.substring(a),
				I = Gr(b),
				P = I !== b,
				M = w && w > a ? w - a : void 0;
			return {
				modifiers: n,
				hasImportantModifier: P,
				baseClassName: I,
				maybePostfixModifierPosition: M
			};
		};
		if (t) {
			const l = t + Ce,
				n = o;
			o = (s) =>
				s.startsWith(l)
					? n(s.substring(l.length))
					: {
							isExternal: !0,
							modifiers: [],
							hasImportantModifier: !1,
							baseClassName: s,
							maybePostfixModifierPosition: void 0
						};
		}
		if (r) {
			const l = o;
			o = (n) => r({ className: n, parseClassName: l });
		}
		return o;
	},
	Gr = (e) =>
		e.endsWith(ze) ? e.substring(0, e.length - 1) : e.startsWith(ze) ? e.substring(1) : e,
	Pr = (e) => {
		const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
		return (o) => {
			if (o.length <= 1) return o;
			const l = [];
			let n = [];
			return (
				o.forEach((s) => {
					s[0] === '[' || t[s] ? (l.push(...n.sort(), s), (n = [])) : n.push(s);
				}),
				l.push(...n.sort()),
				l
			);
		};
	},
	Rr = (e) => ({ cache: Ar(e.cacheSize), parseClassName: Mr(e), sortModifiers: Pr(e), ...wr(e) }),
	Ir = /\s+/,
	jr = (e, t) => {
		const {
				parseClassName: r,
				getClassGroupId: o,
				getConflictingClassGroupIds: l,
				sortModifiers: n
			} = t,
			s = [],
			i = e.trim().split(Ir);
		let a = '';
		for (let w = i.length - 1; w >= 0; w -= 1) {
			const b = i[w],
				{
					isExternal: I,
					modifiers: P,
					hasImportantModifier: M,
					baseClassName: C,
					maybePostfixModifierPosition: x
				} = r(b);
			if (I) {
				a = b + (a.length > 0 ? ' ' + a : a);
				continue;
			}
			let g = !!x,
				j = o(g ? C.substring(0, x) : C);
			if (!j) {
				if (!g) {
					a = b + (a.length > 0 ? ' ' + a : a);
					continue;
				}
				if (((j = o(C)), !j)) {
					a = b + (a.length > 0 ? ' ' + a : a);
					continue;
				}
				g = !1;
			}
			const A = n(P).join(':'),
				_ = M ? A + ze : A,
				N = _ + j;
			if (s.includes(N)) continue;
			s.push(N);
			const O = l(j, g);
			for (let T = 0; T < O.length; ++T) {
				const B = O[T];
				s.push(_ + B);
			}
			a = b + (a.length > 0 ? ' ' + a : a);
		}
		return a;
	};
function $r() {
	let e = 0,
		t,
		r,
		o = '';
	for (; e < arguments.length; ) (t = arguments[e++]) && (r = Ze(t)) && (o && (o += ' '), (o += r));
	return o;
}
const Ze = (e) => {
	if (typeof e == 'string') return e;
	let t,
		r = '';
	for (let o = 0; o < e.length; o++) e[o] && (t = Ze(e[o])) && (r && (r += ' '), (r += t));
	return r;
};
function Tr(e, ...t) {
	let r,
		o,
		l,
		n = s;
	function s(a) {
		const w = t.reduce((b, I) => I(b), e());
		return (r = Rr(w)), (o = r.cache.get), (l = r.cache.set), (n = i), i(a);
	}
	function i(a) {
		const w = o(a);
		if (w) return w;
		const b = jr(a, r);
		return l(a, b), b;
	}
	return function () {
		return n($r.apply(null, arguments));
	};
}
const V = (e) => {
		const t = (r) => r[e] || [];
		return (t.isThemeGetter = !0), t;
	},
	Ye = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
	De = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
	Vr = /^\d+\/\d+$/,
	Nr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	Er =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	Lr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
	_r = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	Or =
		/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	ne = (e) => Vr.test(e),
	z = (e) => !!e && !Number.isNaN(Number(e)),
	D = (e) => !!e && Number.isInteger(Number(e)),
	We = (e) => e.endsWith('%') && z(e.slice(0, -1)),
	H = (e) => Nr.test(e),
	Wr = () => !0,
	Br = (e) => Er.test(e) && !Lr.test(e),
	Re = () => !1,
	Fr = (e) => _r.test(e),
	Ur = (e) => Or.test(e),
	qr = (e) => !c(e) && !d(e),
	Jr = (e) => ie(e, tr, Re),
	c = (e) => Ye.test(e),
	ee = (e) => ie(e, or, Br),
	xe = (e) => ie(e, ot, z),
	Kr = (e) => ie(e, er, Re),
	Hr = (e) => ie(e, rr, Ur),
	Xr = (e) => ie(e, Re, Fr),
	d = (e) => De.test(e),
	me = (e) => le(e, or),
	Qr = (e) => le(e, nt),
	Zr = (e) => le(e, er),
	Yr = (e) => le(e, tr),
	Dr = (e) => le(e, rr),
	et = (e) => le(e, st, !0),
	ie = (e, t, r) => {
		const o = Ye.exec(e);
		return o ? (o[1] ? t(o[1]) : r(o[2])) : !1;
	},
	le = (e, t, r = !1) => {
		const o = De.exec(e);
		return o ? (o[1] ? t(o[1]) : r) : !1;
	},
	er = (e) => e === 'position',
	rt = new Set(['image', 'url']),
	rr = (e) => rt.has(e),
	tt = new Set(['length', 'size', 'percentage']),
	tr = (e) => tt.has(e),
	or = (e) => e === 'length',
	ot = (e) => e === 'number',
	nt = (e) => e === 'family-name',
	st = (e) => e === 'shadow',
	it = () => {
		const e = V('color'),
			t = V('font'),
			r = V('text'),
			o = V('font-weight'),
			l = V('tracking'),
			n = V('leading'),
			s = V('breakpoint'),
			i = V('container'),
			a = V('spacing'),
			w = V('radius'),
			b = V('shadow'),
			I = V('inset-shadow'),
			P = V('drop-shadow'),
			M = V('blur'),
			C = V('perspective'),
			x = V('aspect'),
			g = V('ease'),
			j = V('animate'),
			A = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
			_ = () => [
				'bottom',
				'center',
				'left',
				'left-bottom',
				'left-top',
				'right',
				'right-bottom',
				'right-top',
				'top'
			],
			N = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
			O = () => ['auto', 'contain', 'none'],
			T = () => [ne, 'px', 'full', 'auto', d, c, a],
			B = () => [D, 'none', 'subgrid', d, c],
			J = () => ['auto', { span: ['full', D, d, c] }, d, c],
			W = () => [D, 'auto', d, c],
			K = () => ['auto', 'min', 'max', 'fr', d, c],
			F = () => [d, c, a],
			p = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch', 'baseline'],
			h = () => ['start', 'end', 'center', 'stretch'],
			u = () => [d, c, a],
			v = () => ['px', ...u()],
			m = () => ['px', 'auto', ...u()],
			k = () => [
				ne,
				'auto',
				'px',
				'full',
				'dvw',
				'dvh',
				'lvw',
				'lvh',
				'svw',
				'svh',
				'min',
				'max',
				'fit',
				d,
				c,
				a
			],
			f = () => [e, d, c],
			R = () => [We, ee],
			S = () => ['', 'none', 'full', w, d, c],
			G = () => ['', z, me, ee],
			E = () => ['solid', 'dashed', 'dotted', 'double'],
			Z = () => [
				'normal',
				'multiply',
				'screen',
				'overlay',
				'darken',
				'lighten',
				'color-dodge',
				'color-burn',
				'hard-light',
				'soft-light',
				'difference',
				'exclusion',
				'hue',
				'saturation',
				'color',
				'luminosity'
			],
			re = () => ['', 'none', M, d, c],
			te = () => [
				'center',
				'top',
				'top-right',
				'right',
				'bottom-right',
				'bottom',
				'bottom-left',
				'left',
				'top-left',
				d,
				c
			],
			Y = () => ['none', z, d, c],
			oe = () => ['none', z, d, c],
			he = () => [z, d, c],
			ge = () => [ne, 'full', 'px', d, c, a];
		return {
			cacheSize: 500,
			theme: {
				animate: ['spin', 'ping', 'pulse', 'bounce'],
				aspect: ['video'],
				blur: [H],
				breakpoint: [H],
				color: [Wr],
				container: [H],
				'drop-shadow': [H],
				ease: ['in', 'out', 'in-out'],
				font: [qr],
				'font-weight': [
					'thin',
					'extralight',
					'light',
					'normal',
					'medium',
					'semibold',
					'bold',
					'extrabold',
					'black'
				],
				'inset-shadow': [H],
				leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
				perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
				radius: [H],
				shadow: [H],
				spacing: [z],
				text: [H],
				tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest']
			},
			classGroups: {
				aspect: [{ aspect: ['auto', 'square', ne, c, d, x] }],
				container: ['container'],
				columns: [{ columns: [z, c, d, i] }],
				'break-after': [{ 'break-after': A() }],
				'break-before': [{ 'break-before': A() }],
				'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
				'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
				box: [{ box: ['border', 'content'] }],
				display: [
					'block',
					'inline-block',
					'inline',
					'flex',
					'inline-flex',
					'table',
					'inline-table',
					'table-caption',
					'table-cell',
					'table-column',
					'table-column-group',
					'table-footer-group',
					'table-header-group',
					'table-row-group',
					'table-row',
					'flow-root',
					'grid',
					'inline-grid',
					'contents',
					'list-item',
					'hidden'
				],
				sr: ['sr-only', 'not-sr-only'],
				float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
				clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
				isolation: ['isolate', 'isolation-auto'],
				'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
				'object-position': [{ object: [..._(), c, d] }],
				overflow: [{ overflow: N() }],
				'overflow-x': [{ 'overflow-x': N() }],
				'overflow-y': [{ 'overflow-y': N() }],
				overscroll: [{ overscroll: O() }],
				'overscroll-x': [{ 'overscroll-x': O() }],
				'overscroll-y': [{ 'overscroll-y': O() }],
				position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
				inset: [{ inset: T() }],
				'inset-x': [{ 'inset-x': T() }],
				'inset-y': [{ 'inset-y': T() }],
				start: [{ start: T() }],
				end: [{ end: T() }],
				top: [{ top: T() }],
				right: [{ right: T() }],
				bottom: [{ bottom: T() }],
				left: [{ left: T() }],
				visibility: ['visible', 'invisible', 'collapse'],
				z: [{ z: [D, 'auto', d, c] }],
				basis: [{ basis: [ne, 'full', 'auto', d, c, i, a] }],
				'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
				'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
				flex: [{ flex: [z, ne, 'auto', 'initial', 'none', c] }],
				grow: [{ grow: ['', z, d, c] }],
				shrink: [{ shrink: ['', z, d, c] }],
				order: [{ order: [D, 'first', 'last', 'none', d, c] }],
				'grid-cols': [{ 'grid-cols': B() }],
				'col-start-end': [{ col: J() }],
				'col-start': [{ 'col-start': W() }],
				'col-end': [{ 'col-end': W() }],
				'grid-rows': [{ 'grid-rows': B() }],
				'row-start-end': [{ row: J() }],
				'row-start': [{ 'row-start': W() }],
				'row-end': [{ 'row-end': W() }],
				'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
				'auto-cols': [{ 'auto-cols': K() }],
				'auto-rows': [{ 'auto-rows': K() }],
				gap: [{ gap: F() }],
				'gap-x': [{ 'gap-x': F() }],
				'gap-y': [{ 'gap-y': F() }],
				'justify-content': [{ justify: [...p(), 'normal'] }],
				'justify-items': [{ 'justify-items': [...h(), 'normal'] }],
				'justify-self': [{ 'justify-self': ['auto', ...h()] }],
				'align-content': [{ content: ['normal', ...p()] }],
				'align-items': [{ items: [...h(), 'baseline'] }],
				'align-self': [{ self: ['auto', ...h(), 'baseline'] }],
				'place-content': [{ 'place-content': p() }],
				'place-items': [{ 'place-items': [...h(), 'baseline'] }],
				'place-self': [{ 'place-self': ['auto', ...h()] }],
				p: [{ p: v() }],
				px: [{ px: v() }],
				py: [{ py: v() }],
				ps: [{ ps: v() }],
				pe: [{ pe: v() }],
				pt: [{ pt: v() }],
				pr: [{ pr: v() }],
				pb: [{ pb: v() }],
				pl: [{ pl: v() }],
				m: [{ m: m() }],
				mx: [{ mx: m() }],
				my: [{ my: m() }],
				ms: [{ ms: m() }],
				me: [{ me: m() }],
				mt: [{ mt: m() }],
				mr: [{ mr: m() }],
				mb: [{ mb: m() }],
				ml: [{ ml: m() }],
				'space-x': [{ 'space-x': u() }],
				'space-x-reverse': ['space-x-reverse'],
				'space-y': [{ 'space-y': u() }],
				'space-y-reverse': ['space-y-reverse'],
				size: [{ size: k() }],
				w: [{ w: [i, 'screen', ...k()] }],
				'min-w': [{ 'min-w': [i, 'screen', 'none', ...k()] }],
				'max-w': [{ 'max-w': [i, 'screen', 'none', 'prose', { screen: [s] }, ...k()] }],
				h: [{ h: ['screen', ...k()] }],
				'min-h': [{ 'min-h': ['screen', 'none', ...k()] }],
				'max-h': [{ 'max-h': ['screen', ...k()] }],
				'font-size': [{ text: ['base', r, me, ee] }],
				'font-smoothing': ['antialiased', 'subpixel-antialiased'],
				'font-style': ['italic', 'not-italic'],
				'font-weight': [{ font: [o, d, xe] }],
				'font-stretch': [
					{
						'font-stretch': [
							'ultra-condensed',
							'extra-condensed',
							'condensed',
							'semi-condensed',
							'normal',
							'semi-expanded',
							'expanded',
							'extra-expanded',
							'ultra-expanded',
							We,
							c
						]
					}
				],
				'font-family': [{ font: [Qr, c, t] }],
				'fvn-normal': ['normal-nums'],
				'fvn-ordinal': ['ordinal'],
				'fvn-slashed-zero': ['slashed-zero'],
				'fvn-figure': ['lining-nums', 'oldstyle-nums'],
				'fvn-spacing': ['proportional-nums', 'tabular-nums'],
				'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
				tracking: [{ tracking: [l, d, c] }],
				'line-clamp': [{ 'line-clamp': [z, 'none', d, xe] }],
				leading: [{ leading: [d, c, n, a] }],
				'list-image': [{ 'list-image': ['none', d, c] }],
				'list-style-position': [{ list: ['inside', 'outside'] }],
				'list-style-type': [{ list: ['disc', 'decimal', 'none', d, c] }],
				'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
				'placeholder-color': [{ placeholder: f() }],
				'text-color': [{ text: f() }],
				'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
				'text-decoration-style': [{ decoration: [...E(), 'wavy'] }],
				'text-decoration-thickness': [{ decoration: [z, 'from-font', 'auto', d, ee] }],
				'text-decoration-color': [{ decoration: f() }],
				'underline-offset': [{ 'underline-offset': [z, 'auto', d, c] }],
				'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
				'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
				'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
				indent: [{ indent: ['px', ...u()] }],
				'vertical-align': [
					{
						align: [
							'baseline',
							'top',
							'middle',
							'bottom',
							'text-top',
							'text-bottom',
							'sub',
							'super',
							d,
							c
						]
					}
				],
				whitespace: [
					{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }
				],
				break: [{ break: ['normal', 'words', 'all', 'keep'] }],
				hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
				content: [{ content: ['none', d, c] }],
				'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
				'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
				'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
				'bg-position': [{ bg: [..._(), Zr, Kr] }],
				'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }] }],
				'bg-size': [{ bg: ['auto', 'cover', 'contain', Yr, Jr] }],
				'bg-image': [
					{
						bg: [
							'none',
							{
								linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, D, d, c],
								radial: ['', d, c],
								conic: [D, d, c]
							},
							Dr,
							Hr
						]
					}
				],
				'bg-color': [{ bg: f() }],
				'gradient-from-pos': [{ from: R() }],
				'gradient-via-pos': [{ via: R() }],
				'gradient-to-pos': [{ to: R() }],
				'gradient-from': [{ from: f() }],
				'gradient-via': [{ via: f() }],
				'gradient-to': [{ to: f() }],
				rounded: [{ rounded: S() }],
				'rounded-s': [{ 'rounded-s': S() }],
				'rounded-e': [{ 'rounded-e': S() }],
				'rounded-t': [{ 'rounded-t': S() }],
				'rounded-r': [{ 'rounded-r': S() }],
				'rounded-b': [{ 'rounded-b': S() }],
				'rounded-l': [{ 'rounded-l': S() }],
				'rounded-ss': [{ 'rounded-ss': S() }],
				'rounded-se': [{ 'rounded-se': S() }],
				'rounded-ee': [{ 'rounded-ee': S() }],
				'rounded-es': [{ 'rounded-es': S() }],
				'rounded-tl': [{ 'rounded-tl': S() }],
				'rounded-tr': [{ 'rounded-tr': S() }],
				'rounded-br': [{ 'rounded-br': S() }],
				'rounded-bl': [{ 'rounded-bl': S() }],
				'border-w': [{ border: G() }],
				'border-w-x': [{ 'border-x': G() }],
				'border-w-y': [{ 'border-y': G() }],
				'border-w-s': [{ 'border-s': G() }],
				'border-w-e': [{ 'border-e': G() }],
				'border-w-t': [{ 'border-t': G() }],
				'border-w-r': [{ 'border-r': G() }],
				'border-w-b': [{ 'border-b': G() }],
				'border-w-l': [{ 'border-l': G() }],
				'divide-x': [{ 'divide-x': G() }],
				'divide-x-reverse': ['divide-x-reverse'],
				'divide-y': [{ 'divide-y': G() }],
				'divide-y-reverse': ['divide-y-reverse'],
				'border-style': [{ border: [...E(), 'hidden', 'none'] }],
				'divide-style': [{ divide: [...E(), 'hidden', 'none'] }],
				'border-color': [{ border: f() }],
				'border-color-x': [{ 'border-x': f() }],
				'border-color-y': [{ 'border-y': f() }],
				'border-color-s': [{ 'border-s': f() }],
				'border-color-e': [{ 'border-e': f() }],
				'border-color-t': [{ 'border-t': f() }],
				'border-color-r': [{ 'border-r': f() }],
				'border-color-b': [{ 'border-b': f() }],
				'border-color-l': [{ 'border-l': f() }],
				'divide-color': [{ divide: f() }],
				'outline-style': [{ outline: [...E(), 'none', 'hidden'] }],
				'outline-offset': [{ 'outline-offset': [z, d, c] }],
				'outline-w': [{ outline: ['', z, me, ee] }],
				'outline-color': [{ outline: [e] }],
				shadow: [{ shadow: ['', 'none', b, et, Xr] }],
				'shadow-color': [{ shadow: f() }],
				'inset-shadow': [{ 'inset-shadow': ['none', d, c, I] }],
				'inset-shadow-color': [{ 'inset-shadow': f() }],
				'ring-w': [{ ring: G() }],
				'ring-w-inset': ['ring-inset'],
				'ring-color': [{ ring: f() }],
				'ring-offset-w': [{ 'ring-offset': [z, ee] }],
				'ring-offset-color': [{ 'ring-offset': f() }],
				'inset-ring-w': [{ 'inset-ring': G() }],
				'inset-ring-color': [{ 'inset-ring': f() }],
				opacity: [{ opacity: [z, d, c] }],
				'mix-blend': [{ 'mix-blend': [...Z(), 'plus-darker', 'plus-lighter'] }],
				'bg-blend': [{ 'bg-blend': Z() }],
				filter: [{ filter: ['', 'none', d, c] }],
				blur: [{ blur: re() }],
				brightness: [{ brightness: [z, d, c] }],
				contrast: [{ contrast: [z, d, c] }],
				'drop-shadow': [{ 'drop-shadow': ['', 'none', P, d, c] }],
				grayscale: [{ grayscale: ['', z, d, c] }],
				'hue-rotate': [{ 'hue-rotate': [z, d, c] }],
				invert: [{ invert: ['', z, d, c] }],
				saturate: [{ saturate: [z, d, c] }],
				sepia: [{ sepia: ['', z, d, c] }],
				'backdrop-filter': [{ 'backdrop-filter': ['', 'none', d, c] }],
				'backdrop-blur': [{ 'backdrop-blur': re() }],
				'backdrop-brightness': [{ 'backdrop-brightness': [z, d, c] }],
				'backdrop-contrast': [{ 'backdrop-contrast': [z, d, c] }],
				'backdrop-grayscale': [{ 'backdrop-grayscale': ['', z, d, c] }],
				'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [z, d, c] }],
				'backdrop-invert': [{ 'backdrop-invert': ['', z, d, c] }],
				'backdrop-opacity': [{ 'backdrop-opacity': [z, d, c] }],
				'backdrop-saturate': [{ 'backdrop-saturate': [z, d, c] }],
				'backdrop-sepia': [{ 'backdrop-sepia': ['', z, d, c] }],
				'border-collapse': [{ border: ['collapse', 'separate'] }],
				'border-spacing': [{ 'border-spacing': u() }],
				'border-spacing-x': [{ 'border-spacing-x': u() }],
				'border-spacing-y': [{ 'border-spacing-y': u() }],
				'table-layout': [{ table: ['auto', 'fixed'] }],
				caption: [{ caption: ['top', 'bottom'] }],
				transition: [
					{ transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', d, c] }
				],
				'transition-behavior': [{ transition: ['normal', 'discrete'] }],
				duration: [{ duration: [z, 'initial', d, c] }],
				ease: [{ ease: ['linear', 'initial', g, d, c] }],
				delay: [{ delay: [z, d, c] }],
				animate: [{ animate: ['none', j, d, c] }],
				backface: [{ backface: ['hidden', 'visible'] }],
				perspective: [{ perspective: [C, d, c] }],
				'perspective-origin': [{ 'perspective-origin': te() }],
				rotate: [{ rotate: Y() }],
				'rotate-x': [{ 'rotate-x': Y() }],
				'rotate-y': [{ 'rotate-y': Y() }],
				'rotate-z': [{ 'rotate-z': Y() }],
				scale: [{ scale: oe() }],
				'scale-x': [{ 'scale-x': oe() }],
				'scale-y': [{ 'scale-y': oe() }],
				'scale-z': [{ 'scale-z': oe() }],
				'scale-3d': ['scale-3d'],
				skew: [{ skew: he() }],
				'skew-x': [{ 'skew-x': he() }],
				'skew-y': [{ 'skew-y': he() }],
				transform: [{ transform: [d, c, '', 'none', 'gpu', 'cpu'] }],
				'transform-origin': [{ origin: te() }],
				'transform-style': [{ transform: ['3d', 'flat'] }],
				translate: [{ translate: ge() }],
				'translate-x': [{ 'translate-x': ge() }],
				'translate-y': [{ 'translate-y': ge() }],
				'translate-z': [{ 'translate-z': ge() }],
				'translate-none': ['translate-none'],
				accent: [{ accent: f() }],
				appearance: [{ appearance: ['none', 'auto'] }],
				'caret-color': [{ caret: f() }],
				'color-scheme': [
					{ scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light'] }
				],
				cursor: [
					{
						cursor: [
							'auto',
							'default',
							'pointer',
							'wait',
							'text',
							'move',
							'help',
							'not-allowed',
							'none',
							'context-menu',
							'progress',
							'cell',
							'crosshair',
							'vertical-text',
							'alias',
							'copy',
							'no-drop',
							'grab',
							'grabbing',
							'all-scroll',
							'col-resize',
							'row-resize',
							'n-resize',
							'e-resize',
							's-resize',
							'w-resize',
							'ne-resize',
							'nw-resize',
							'se-resize',
							'sw-resize',
							'ew-resize',
							'ns-resize',
							'nesw-resize',
							'nwse-resize',
							'zoom-in',
							'zoom-out',
							d,
							c
						]
					}
				],
				'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
				'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
				resize: [{ resize: ['none', '', 'y', 'x'] }],
				'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
				'scroll-m': [{ 'scroll-m': u() }],
				'scroll-mx': [{ 'scroll-mx': u() }],
				'scroll-my': [{ 'scroll-my': u() }],
				'scroll-ms': [{ 'scroll-ms': u() }],
				'scroll-me': [{ 'scroll-me': u() }],
				'scroll-mt': [{ 'scroll-mt': u() }],
				'scroll-mr': [{ 'scroll-mr': u() }],
				'scroll-mb': [{ 'scroll-mb': u() }],
				'scroll-ml': [{ 'scroll-ml': u() }],
				'scroll-p': [{ 'scroll-p': u() }],
				'scroll-px': [{ 'scroll-px': u() }],
				'scroll-py': [{ 'scroll-py': u() }],
				'scroll-ps': [{ 'scroll-ps': u() }],
				'scroll-pe': [{ 'scroll-pe': u() }],
				'scroll-pt': [{ 'scroll-pt': u() }],
				'scroll-pr': [{ 'scroll-pr': u() }],
				'scroll-pb': [{ 'scroll-pb': u() }],
				'scroll-pl': [{ 'scroll-pl': u() }],
				'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
				'snap-stop': [{ snap: ['normal', 'always'] }],
				'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
				'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
				touch: [{ touch: ['auto', 'none', 'manipulation'] }],
				'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
				'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
				'touch-pz': ['touch-pinch-zoom'],
				select: [{ select: ['none', 'text', 'all', 'auto'] }],
				'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', d, c] }],
				fill: [{ fill: ['none', ...f()] }],
				'stroke-w': [{ stroke: [z, me, ee, xe] }],
				stroke: [{ stroke: ['none', ...f()] }],
				'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }]
			},
			conflictingClassGroups: {
				overflow: ['overflow-x', 'overflow-y'],
				overscroll: ['overscroll-x', 'overscroll-y'],
				inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
				'inset-x': ['right', 'left'],
				'inset-y': ['top', 'bottom'],
				flex: ['basis', 'grow', 'shrink'],
				gap: ['gap-x', 'gap-y'],
				p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
				px: ['pr', 'pl'],
				py: ['pt', 'pb'],
				m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
				mx: ['mr', 'ml'],
				my: ['mt', 'mb'],
				size: ['w', 'h'],
				'font-size': ['leading'],
				'fvn-normal': [
					'fvn-ordinal',
					'fvn-slashed-zero',
					'fvn-figure',
					'fvn-spacing',
					'fvn-fraction'
				],
				'fvn-ordinal': ['fvn-normal'],
				'fvn-slashed-zero': ['fvn-normal'],
				'fvn-figure': ['fvn-normal'],
				'fvn-spacing': ['fvn-normal'],
				'fvn-fraction': ['fvn-normal'],
				'line-clamp': ['display', 'overflow'],
				rounded: [
					'rounded-s',
					'rounded-e',
					'rounded-t',
					'rounded-r',
					'rounded-b',
					'rounded-l',
					'rounded-ss',
					'rounded-se',
					'rounded-ee',
					'rounded-es',
					'rounded-tl',
					'rounded-tr',
					'rounded-br',
					'rounded-bl'
				],
				'rounded-s': ['rounded-ss', 'rounded-es'],
				'rounded-e': ['rounded-se', 'rounded-ee'],
				'rounded-t': ['rounded-tl', 'rounded-tr'],
				'rounded-r': ['rounded-tr', 'rounded-br'],
				'rounded-b': ['rounded-br', 'rounded-bl'],
				'rounded-l': ['rounded-tl', 'rounded-bl'],
				'border-spacing': ['border-spacing-x', 'border-spacing-y'],
				'border-w': [
					'border-w-s',
					'border-w-e',
					'border-w-t',
					'border-w-r',
					'border-w-b',
					'border-w-l'
				],
				'border-w-x': ['border-w-r', 'border-w-l'],
				'border-w-y': ['border-w-t', 'border-w-b'],
				'border-color': [
					'border-color-s',
					'border-color-e',
					'border-color-t',
					'border-color-r',
					'border-color-b',
					'border-color-l'
				],
				'border-color-x': ['border-color-r', 'border-color-l'],
				'border-color-y': ['border-color-t', 'border-color-b'],
				translate: ['translate-x', 'translate-y', 'translate-none'],
				'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
				'scroll-m': [
					'scroll-mx',
					'scroll-my',
					'scroll-ms',
					'scroll-me',
					'scroll-mt',
					'scroll-mr',
					'scroll-mb',
					'scroll-ml'
				],
				'scroll-mx': ['scroll-mr', 'scroll-ml'],
				'scroll-my': ['scroll-mt', 'scroll-mb'],
				'scroll-p': [
					'scroll-px',
					'scroll-py',
					'scroll-ps',
					'scroll-pe',
					'scroll-pt',
					'scroll-pr',
					'scroll-pb',
					'scroll-pl'
				],
				'scroll-px': ['scroll-pr', 'scroll-pl'],
				'scroll-py': ['scroll-pt', 'scroll-pb'],
				touch: ['touch-x', 'touch-y', 'touch-pz'],
				'touch-x': ['touch'],
				'touch-y': ['touch'],
				'touch-pz': ['touch']
			},
			conflictingClassGroupModifiers: { 'font-size': ['leading'] },
			orderSensitiveModifiers: [
				'before',
				'after',
				'placeholder',
				'file',
				'marker',
				'selection',
				'first-line',
				'first-letter',
				'backdrop',
				'*',
				'**'
			]
		};
	},
	lt = Tr(it);
function Be(...e) {
	return lt(vr(e));
}
var Fe = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
	L = (e) => !e || typeof e != 'object' || Object.keys(e).length === 0,
	at = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function nr(e, t) {
	e.forEach(function (r) {
		Array.isArray(r) ? nr(r, t) : t.push(r);
	});
}
function sr(e) {
	let t = [];
	return nr(e, t), t;
}
var ir = (...e) => sr(e).filter(Boolean),
	lr = (e, t) => {
		let r = {},
			o = Object.keys(e),
			l = Object.keys(t);
		for (let n of o)
			if (l.includes(n)) {
				let s = e[n],
					i = t[n];
				Array.isArray(s) || Array.isArray(i)
					? (r[n] = ir(i, s))
					: typeof s == 'object' && typeof i == 'object'
						? (r[n] = lr(s, i))
						: (r[n] = i + ' ' + s);
			} else r[n] = e[n];
		for (let n of l) o.includes(n) || (r[n] = t[n]);
		return r;
	},
	Ue = (e) => (!e || typeof e != 'string' ? e : e.replace(/\s+/g, ' ').trim());
const Ie = '-',
	ct = (e) => {
		const t = ut(e),
			{ conflictingClassGroups: r, conflictingClassGroupModifiers: o } = e;
		return {
			getClassGroupId: (s) => {
				const i = s.split(Ie);
				return i[0] === '' && i.length !== 1 && i.shift(), ar(i, t) || dt(s);
			},
			getConflictingClassGroupIds: (s, i) => {
				const a = r[s] || [];
				return i && o[s] ? [...a, ...o[s]] : a;
			}
		};
	},
	ar = (e, t) => {
		var s;
		if (e.length === 0) return t.classGroupId;
		const r = e[0],
			o = t.nextPart.get(r),
			l = o ? ar(e.slice(1), o) : void 0;
		if (l) return l;
		if (t.validators.length === 0) return;
		const n = e.join(Ie);
		return (s = t.validators.find(({ validator: i }) => i(n))) == null ? void 0 : s.classGroupId;
	},
	qe = /^\[(.+)\]$/,
	dt = (e) => {
		if (qe.test(e)) {
			const t = qe.exec(e)[1],
				r = t == null ? void 0 : t.substring(0, t.indexOf(':'));
			if (r) return 'arbitrary..' + r;
		}
	},
	ut = (e) => {
		const { theme: t, prefix: r } = e,
			o = { nextPart: new Map(), validators: [] };
		return (
			ft(Object.entries(e.classGroups), r).forEach(([n, s]) => {
				Ae(s, o, n, t);
			}),
			o
		);
	},
	Ae = (e, t, r, o) => {
		e.forEach((l) => {
			if (typeof l == 'string') {
				const n = l === '' ? t : Je(t, l);
				n.classGroupId = r;
				return;
			}
			if (typeof l == 'function') {
				if (pt(l)) {
					Ae(l(o), t, r, o);
					return;
				}
				t.validators.push({ validator: l, classGroupId: r });
				return;
			}
			Object.entries(l).forEach(([n, s]) => {
				Ae(s, Je(t, n), r, o);
			});
		});
	},
	Je = (e, t) => {
		let r = e;
		return (
			t.split(Ie).forEach((o) => {
				r.nextPart.has(o) || r.nextPart.set(o, { nextPart: new Map(), validators: [] }),
					(r = r.nextPart.get(o));
			}),
			r
		);
	},
	pt = (e) => e.isThemeGetter,
	ft = (e, t) =>
		t
			? e.map(([r, o]) => {
					const l = o.map((n) =>
						typeof n == 'string'
							? t + n
							: typeof n == 'object'
								? Object.fromEntries(Object.entries(n).map(([s, i]) => [t + s, i]))
								: n
					);
					return [r, l];
				})
			: e,
	bt = (e) => {
		if (e < 1) return { get: () => {}, set: () => {} };
		let t = 0,
			r = new Map(),
			o = new Map();
		const l = (n, s) => {
			r.set(n, s), t++, t > e && ((t = 0), (o = r), (r = new Map()));
		};
		return {
			get(n) {
				let s = r.get(n);
				if (s !== void 0) return s;
				if ((s = o.get(n)) !== void 0) return l(n, s), s;
			},
			set(n, s) {
				r.has(n) ? r.set(n, s) : l(n, s);
			}
		};
	},
	cr = '!',
	gt = (e) => {
		const { separator: t, experimentalParseClassName: r } = e,
			o = t.length === 1,
			l = t[0],
			n = t.length,
			s = (i) => {
				const a = [];
				let w = 0,
					b = 0,
					I;
				for (let g = 0; g < i.length; g++) {
					let j = i[g];
					if (w === 0) {
						if (j === l && (o || i.slice(g, g + n) === t)) {
							a.push(i.slice(b, g)), (b = g + n);
							continue;
						}
						if (j === '/') {
							I = g;
							continue;
						}
					}
					j === '[' ? w++ : j === ']' && w--;
				}
				const P = a.length === 0 ? i : i.substring(b),
					M = P.startsWith(cr),
					C = M ? P.substring(1) : P,
					x = I && I > b ? I - b : void 0;
				return {
					modifiers: a,
					hasImportantModifier: M,
					baseClassName: C,
					maybePostfixModifierPosition: x
				};
			};
		return r ? (i) => r({ className: i, parseClassName: s }) : s;
	},
	mt = (e) => {
		if (e.length <= 1) return e;
		const t = [];
		let r = [];
		return (
			e.forEach((o) => {
				o[0] === '[' ? (t.push(...r.sort(), o), (r = [])) : r.push(o);
			}),
			t.push(...r.sort()),
			t
		);
	},
	ht = (e) => ({ cache: bt(e.cacheSize), parseClassName: gt(e), ...ct(e) }),
	yt = /\s+/,
	xt = (e, t) => {
		const { parseClassName: r, getClassGroupId: o, getConflictingClassGroupIds: l } = t,
			n = [],
			s = e.trim().split(yt);
		let i = '';
		for (let a = s.length - 1; a >= 0; a -= 1) {
			const w = s[a],
				{
					modifiers: b,
					hasImportantModifier: I,
					baseClassName: P,
					maybePostfixModifierPosition: M
				} = r(w);
			let C = !!M,
				x = o(C ? P.substring(0, M) : P);
			if (!x) {
				if (!C) {
					i = w + (i.length > 0 ? ' ' + i : i);
					continue;
				}
				if (((x = o(P)), !x)) {
					i = w + (i.length > 0 ? ' ' + i : i);
					continue;
				}
				C = !1;
			}
			const g = mt(b).join(':'),
				j = I ? g + cr : g,
				A = j + x;
			if (n.includes(A)) continue;
			n.push(A);
			const _ = l(x, C);
			for (let N = 0; N < _.length; ++N) {
				const O = _[N];
				n.push(j + O);
			}
			i = w + (i.length > 0 ? ' ' + i : i);
		}
		return i;
	};
function vt() {
	let e = 0,
		t,
		r,
		o = '';
	for (; e < arguments.length; ) (t = arguments[e++]) && (r = dr(t)) && (o && (o += ' '), (o += r));
	return o;
}
const dr = (e) => {
	if (typeof e == 'string') return e;
	let t,
		r = '';
	for (let o = 0; o < e.length; o++) e[o] && (t = dr(e[o])) && (r && (r += ' '), (r += t));
	return r;
};
function Se(e, ...t) {
	let r,
		o,
		l,
		n = s;
	function s(a) {
		const w = t.reduce((b, I) => I(b), e());
		return (r = ht(w)), (o = r.cache.get), (l = r.cache.set), (n = i), i(a);
	}
	function i(a) {
		const w = o(a);
		if (w) return w;
		const b = xt(a, r);
		return l(a, b), b;
	}
	return function () {
		return n(vt.apply(null, arguments));
	};
}
const $ = (e) => {
		const t = (r) => r[e] || [];
		return (t.isThemeGetter = !0), t;
	},
	ur = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	wt = /^\d+\/\d+$/,
	kt = new Set(['px', 'full', 'screen']),
	zt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	Ct =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	At = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
	St = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	Mt =
		/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	U = (e) => se(e) || kt.has(e) || wt.test(e),
	X = (e) => ae(e, 'length', Vt),
	se = (e) => !!e && !Number.isNaN(Number(e)),
	ve = (e) => ae(e, 'number', se),
	de = (e) => !!e && Number.isInteger(Number(e)),
	Gt = (e) => e.endsWith('%') && se(e.slice(0, -1)),
	y = (e) => ur.test(e),
	Q = (e) => zt.test(e),
	Pt = new Set(['length', 'size', 'percentage']),
	Rt = (e) => ae(e, Pt, pr),
	It = (e) => ae(e, 'position', pr),
	jt = new Set(['image', 'url']),
	$t = (e) => ae(e, jt, Et),
	Tt = (e) => ae(e, '', Nt),
	ue = () => !0,
	ae = (e, t, r) => {
		const o = ur.exec(e);
		return o ? (o[1] ? (typeof t == 'string' ? o[1] === t : t.has(o[1])) : r(o[2])) : !1;
	},
	Vt = (e) => Ct.test(e) && !At.test(e),
	pr = () => !1,
	Nt = (e) => St.test(e),
	Et = (e) => Mt.test(e),
	Me = () => {
		const e = $('colors'),
			t = $('spacing'),
			r = $('blur'),
			o = $('brightness'),
			l = $('borderColor'),
			n = $('borderRadius'),
			s = $('borderSpacing'),
			i = $('borderWidth'),
			a = $('contrast'),
			w = $('grayscale'),
			b = $('hueRotate'),
			I = $('invert'),
			P = $('gap'),
			M = $('gradientColorStops'),
			C = $('gradientColorStopPositions'),
			x = $('inset'),
			g = $('margin'),
			j = $('opacity'),
			A = $('padding'),
			_ = $('saturate'),
			N = $('scale'),
			O = $('sepia'),
			T = $('skew'),
			B = $('space'),
			J = $('translate'),
			W = () => ['auto', 'contain', 'none'],
			K = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
			F = () => ['auto', y, t],
			p = () => [y, t],
			h = () => ['', U, X],
			u = () => ['auto', se, y],
			v = () => [
				'bottom',
				'center',
				'left',
				'left-bottom',
				'left-top',
				'right',
				'right-bottom',
				'right-top',
				'top'
			],
			m = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
			k = () => [
				'normal',
				'multiply',
				'screen',
				'overlay',
				'darken',
				'lighten',
				'color-dodge',
				'color-burn',
				'hard-light',
				'soft-light',
				'difference',
				'exclusion',
				'hue',
				'saturation',
				'color',
				'luminosity'
			],
			f = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
			R = () => ['', '0', y],
			S = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
			G = () => [se, y];
		return {
			cacheSize: 500,
			separator: ':',
			theme: {
				colors: [ue],
				spacing: [U, X],
				blur: ['none', '', Q, y],
				brightness: G(),
				borderColor: [e],
				borderRadius: ['none', '', 'full', Q, y],
				borderSpacing: p(),
				borderWidth: h(),
				contrast: G(),
				grayscale: R(),
				hueRotate: G(),
				invert: R(),
				gap: p(),
				gradientColorStops: [e],
				gradientColorStopPositions: [Gt, X],
				inset: F(),
				margin: F(),
				opacity: G(),
				padding: p(),
				saturate: G(),
				scale: G(),
				sepia: R(),
				skew: G(),
				space: p(),
				translate: p()
			},
			classGroups: {
				aspect: [{ aspect: ['auto', 'square', 'video', y] }],
				container: ['container'],
				columns: [{ columns: [Q] }],
				'break-after': [{ 'break-after': S() }],
				'break-before': [{ 'break-before': S() }],
				'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
				'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
				box: [{ box: ['border', 'content'] }],
				display: [
					'block',
					'inline-block',
					'inline',
					'flex',
					'inline-flex',
					'table',
					'inline-table',
					'table-caption',
					'table-cell',
					'table-column',
					'table-column-group',
					'table-footer-group',
					'table-header-group',
					'table-row-group',
					'table-row',
					'flow-root',
					'grid',
					'inline-grid',
					'contents',
					'list-item',
					'hidden'
				],
				float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
				clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
				isolation: ['isolate', 'isolation-auto'],
				'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
				'object-position': [{ object: [...v(), y] }],
				overflow: [{ overflow: K() }],
				'overflow-x': [{ 'overflow-x': K() }],
				'overflow-y': [{ 'overflow-y': K() }],
				overscroll: [{ overscroll: W() }],
				'overscroll-x': [{ 'overscroll-x': W() }],
				'overscroll-y': [{ 'overscroll-y': W() }],
				position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
				inset: [{ inset: [x] }],
				'inset-x': [{ 'inset-x': [x] }],
				'inset-y': [{ 'inset-y': [x] }],
				start: [{ start: [x] }],
				end: [{ end: [x] }],
				top: [{ top: [x] }],
				right: [{ right: [x] }],
				bottom: [{ bottom: [x] }],
				left: [{ left: [x] }],
				visibility: ['visible', 'invisible', 'collapse'],
				z: [{ z: ['auto', de, y] }],
				basis: [{ basis: F() }],
				'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
				'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
				flex: [{ flex: ['1', 'auto', 'initial', 'none', y] }],
				grow: [{ grow: R() }],
				shrink: [{ shrink: R() }],
				order: [{ order: ['first', 'last', 'none', de, y] }],
				'grid-cols': [{ 'grid-cols': [ue] }],
				'col-start-end': [{ col: ['auto', { span: ['full', de, y] }, y] }],
				'col-start': [{ 'col-start': u() }],
				'col-end': [{ 'col-end': u() }],
				'grid-rows': [{ 'grid-rows': [ue] }],
				'row-start-end': [{ row: ['auto', { span: [de, y] }, y] }],
				'row-start': [{ 'row-start': u() }],
				'row-end': [{ 'row-end': u() }],
				'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
				'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', y] }],
				'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', y] }],
				gap: [{ gap: [P] }],
				'gap-x': [{ 'gap-x': [P] }],
				'gap-y': [{ 'gap-y': [P] }],
				'justify-content': [{ justify: ['normal', ...f()] }],
				'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
				'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
				'align-content': [{ content: ['normal', ...f(), 'baseline'] }],
				'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
				'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
				'place-content': [{ 'place-content': [...f(), 'baseline'] }],
				'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
				'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
				p: [{ p: [A] }],
				px: [{ px: [A] }],
				py: [{ py: [A] }],
				ps: [{ ps: [A] }],
				pe: [{ pe: [A] }],
				pt: [{ pt: [A] }],
				pr: [{ pr: [A] }],
				pb: [{ pb: [A] }],
				pl: [{ pl: [A] }],
				m: [{ m: [g] }],
				mx: [{ mx: [g] }],
				my: [{ my: [g] }],
				ms: [{ ms: [g] }],
				me: [{ me: [g] }],
				mt: [{ mt: [g] }],
				mr: [{ mr: [g] }],
				mb: [{ mb: [g] }],
				ml: [{ ml: [g] }],
				'space-x': [{ 'space-x': [B] }],
				'space-x-reverse': ['space-x-reverse'],
				'space-y': [{ 'space-y': [B] }],
				'space-y-reverse': ['space-y-reverse'],
				w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', y, t] }],
				'min-w': [{ 'min-w': [y, t, 'min', 'max', 'fit'] }],
				'max-w': [
					{ 'max-w': [y, t, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [Q] }, Q] }
				],
				h: [{ h: [y, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				'min-h': [{ 'min-h': [y, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				'max-h': [{ 'max-h': [y, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				size: [{ size: [y, t, 'auto', 'min', 'max', 'fit'] }],
				'font-size': [{ text: ['base', Q, X] }],
				'font-smoothing': ['antialiased', 'subpixel-antialiased'],
				'font-style': ['italic', 'not-italic'],
				'font-weight': [
					{
						font: [
							'thin',
							'extralight',
							'light',
							'normal',
							'medium',
							'semibold',
							'bold',
							'extrabold',
							'black',
							ve
						]
					}
				],
				'font-family': [{ font: [ue] }],
				'fvn-normal': ['normal-nums'],
				'fvn-ordinal': ['ordinal'],
				'fvn-slashed-zero': ['slashed-zero'],
				'fvn-figure': ['lining-nums', 'oldstyle-nums'],
				'fvn-spacing': ['proportional-nums', 'tabular-nums'],
				'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
				tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', y] }],
				'line-clamp': [{ 'line-clamp': ['none', se, ve] }],
				leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', U, y] }],
				'list-image': [{ 'list-image': ['none', y] }],
				'list-style-type': [{ list: ['none', 'disc', 'decimal', y] }],
				'list-style-position': [{ list: ['inside', 'outside'] }],
				'placeholder-color': [{ placeholder: [e] }],
				'placeholder-opacity': [{ 'placeholder-opacity': [j] }],
				'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
				'text-color': [{ text: [e] }],
				'text-opacity': [{ 'text-opacity': [j] }],
				'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
				'text-decoration-style': [{ decoration: [...m(), 'wavy'] }],
				'text-decoration-thickness': [{ decoration: ['auto', 'from-font', U, X] }],
				'underline-offset': [{ 'underline-offset': ['auto', U, y] }],
				'text-decoration-color': [{ decoration: [e] }],
				'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
				'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
				'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
				indent: [{ indent: p() }],
				'vertical-align': [
					{
						align: [
							'baseline',
							'top',
							'middle',
							'bottom',
							'text-top',
							'text-bottom',
							'sub',
							'super',
							y
						]
					}
				],
				whitespace: [
					{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }
				],
				break: [{ break: ['normal', 'words', 'all', 'keep'] }],
				hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
				content: [{ content: ['none', y] }],
				'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
				'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
				'bg-opacity': [{ 'bg-opacity': [j] }],
				'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
				'bg-position': [{ bg: [...v(), It] }],
				'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
				'bg-size': [{ bg: ['auto', 'cover', 'contain', Rt] }],
				'bg-image': [
					{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, $t] }
				],
				'bg-color': [{ bg: [e] }],
				'gradient-from-pos': [{ from: [C] }],
				'gradient-via-pos': [{ via: [C] }],
				'gradient-to-pos': [{ to: [C] }],
				'gradient-from': [{ from: [M] }],
				'gradient-via': [{ via: [M] }],
				'gradient-to': [{ to: [M] }],
				rounded: [{ rounded: [n] }],
				'rounded-s': [{ 'rounded-s': [n] }],
				'rounded-e': [{ 'rounded-e': [n] }],
				'rounded-t': [{ 'rounded-t': [n] }],
				'rounded-r': [{ 'rounded-r': [n] }],
				'rounded-b': [{ 'rounded-b': [n] }],
				'rounded-l': [{ 'rounded-l': [n] }],
				'rounded-ss': [{ 'rounded-ss': [n] }],
				'rounded-se': [{ 'rounded-se': [n] }],
				'rounded-ee': [{ 'rounded-ee': [n] }],
				'rounded-es': [{ 'rounded-es': [n] }],
				'rounded-tl': [{ 'rounded-tl': [n] }],
				'rounded-tr': [{ 'rounded-tr': [n] }],
				'rounded-br': [{ 'rounded-br': [n] }],
				'rounded-bl': [{ 'rounded-bl': [n] }],
				'border-w': [{ border: [i] }],
				'border-w-x': [{ 'border-x': [i] }],
				'border-w-y': [{ 'border-y': [i] }],
				'border-w-s': [{ 'border-s': [i] }],
				'border-w-e': [{ 'border-e': [i] }],
				'border-w-t': [{ 'border-t': [i] }],
				'border-w-r': [{ 'border-r': [i] }],
				'border-w-b': [{ 'border-b': [i] }],
				'border-w-l': [{ 'border-l': [i] }],
				'border-opacity': [{ 'border-opacity': [j] }],
				'border-style': [{ border: [...m(), 'hidden'] }],
				'divide-x': [{ 'divide-x': [i] }],
				'divide-x-reverse': ['divide-x-reverse'],
				'divide-y': [{ 'divide-y': [i] }],
				'divide-y-reverse': ['divide-y-reverse'],
				'divide-opacity': [{ 'divide-opacity': [j] }],
				'divide-style': [{ divide: m() }],
				'border-color': [{ border: [l] }],
				'border-color-x': [{ 'border-x': [l] }],
				'border-color-y': [{ 'border-y': [l] }],
				'border-color-s': [{ 'border-s': [l] }],
				'border-color-e': [{ 'border-e': [l] }],
				'border-color-t': [{ 'border-t': [l] }],
				'border-color-r': [{ 'border-r': [l] }],
				'border-color-b': [{ 'border-b': [l] }],
				'border-color-l': [{ 'border-l': [l] }],
				'divide-color': [{ divide: [l] }],
				'outline-style': [{ outline: ['', ...m()] }],
				'outline-offset': [{ 'outline-offset': [U, y] }],
				'outline-w': [{ outline: [U, X] }],
				'outline-color': [{ outline: [e] }],
				'ring-w': [{ ring: h() }],
				'ring-w-inset': ['ring-inset'],
				'ring-color': [{ ring: [e] }],
				'ring-opacity': [{ 'ring-opacity': [j] }],
				'ring-offset-w': [{ 'ring-offset': [U, X] }],
				'ring-offset-color': [{ 'ring-offset': [e] }],
				shadow: [{ shadow: ['', 'inner', 'none', Q, Tt] }],
				'shadow-color': [{ shadow: [ue] }],
				opacity: [{ opacity: [j] }],
				'mix-blend': [{ 'mix-blend': [...k(), 'plus-lighter', 'plus-darker'] }],
				'bg-blend': [{ 'bg-blend': k() }],
				filter: [{ filter: ['', 'none'] }],
				blur: [{ blur: [r] }],
				brightness: [{ brightness: [o] }],
				contrast: [{ contrast: [a] }],
				'drop-shadow': [{ 'drop-shadow': ['', 'none', Q, y] }],
				grayscale: [{ grayscale: [w] }],
				'hue-rotate': [{ 'hue-rotate': [b] }],
				invert: [{ invert: [I] }],
				saturate: [{ saturate: [_] }],
				sepia: [{ sepia: [O] }],
				'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
				'backdrop-blur': [{ 'backdrop-blur': [r] }],
				'backdrop-brightness': [{ 'backdrop-brightness': [o] }],
				'backdrop-contrast': [{ 'backdrop-contrast': [a] }],
				'backdrop-grayscale': [{ 'backdrop-grayscale': [w] }],
				'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [b] }],
				'backdrop-invert': [{ 'backdrop-invert': [I] }],
				'backdrop-opacity': [{ 'backdrop-opacity': [j] }],
				'backdrop-saturate': [{ 'backdrop-saturate': [_] }],
				'backdrop-sepia': [{ 'backdrop-sepia': [O] }],
				'border-collapse': [{ border: ['collapse', 'separate'] }],
				'border-spacing': [{ 'border-spacing': [s] }],
				'border-spacing-x': [{ 'border-spacing-x': [s] }],
				'border-spacing-y': [{ 'border-spacing-y': [s] }],
				'table-layout': [{ table: ['auto', 'fixed'] }],
				caption: [{ caption: ['top', 'bottom'] }],
				transition: [
					{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', y] }
				],
				duration: [{ duration: G() }],
				ease: [{ ease: ['linear', 'in', 'out', 'in-out', y] }],
				delay: [{ delay: G() }],
				animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', y] }],
				transform: [{ transform: ['', 'gpu', 'none'] }],
				scale: [{ scale: [N] }],
				'scale-x': [{ 'scale-x': [N] }],
				'scale-y': [{ 'scale-y': [N] }],
				rotate: [{ rotate: [de, y] }],
				'translate-x': [{ 'translate-x': [J] }],
				'translate-y': [{ 'translate-y': [J] }],
				'skew-x': [{ 'skew-x': [T] }],
				'skew-y': [{ 'skew-y': [T] }],
				'transform-origin': [
					{
						origin: [
							'center',
							'top',
							'top-right',
							'right',
							'bottom-right',
							'bottom',
							'bottom-left',
							'left',
							'top-left',
							y
						]
					}
				],
				accent: [{ accent: ['auto', e] }],
				appearance: [{ appearance: ['none', 'auto'] }],
				cursor: [
					{
						cursor: [
							'auto',
							'default',
							'pointer',
							'wait',
							'text',
							'move',
							'help',
							'not-allowed',
							'none',
							'context-menu',
							'progress',
							'cell',
							'crosshair',
							'vertical-text',
							'alias',
							'copy',
							'no-drop',
							'grab',
							'grabbing',
							'all-scroll',
							'col-resize',
							'row-resize',
							'n-resize',
							'e-resize',
							's-resize',
							'w-resize',
							'ne-resize',
							'nw-resize',
							'se-resize',
							'sw-resize',
							'ew-resize',
							'ns-resize',
							'nesw-resize',
							'nwse-resize',
							'zoom-in',
							'zoom-out',
							y
						]
					}
				],
				'caret-color': [{ caret: [e] }],
				'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
				resize: [{ resize: ['none', 'y', 'x', ''] }],
				'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
				'scroll-m': [{ 'scroll-m': p() }],
				'scroll-mx': [{ 'scroll-mx': p() }],
				'scroll-my': [{ 'scroll-my': p() }],
				'scroll-ms': [{ 'scroll-ms': p() }],
				'scroll-me': [{ 'scroll-me': p() }],
				'scroll-mt': [{ 'scroll-mt': p() }],
				'scroll-mr': [{ 'scroll-mr': p() }],
				'scroll-mb': [{ 'scroll-mb': p() }],
				'scroll-ml': [{ 'scroll-ml': p() }],
				'scroll-p': [{ 'scroll-p': p() }],
				'scroll-px': [{ 'scroll-px': p() }],
				'scroll-py': [{ 'scroll-py': p() }],
				'scroll-ps': [{ 'scroll-ps': p() }],
				'scroll-pe': [{ 'scroll-pe': p() }],
				'scroll-pt': [{ 'scroll-pt': p() }],
				'scroll-pr': [{ 'scroll-pr': p() }],
				'scroll-pb': [{ 'scroll-pb': p() }],
				'scroll-pl': [{ 'scroll-pl': p() }],
				'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
				'snap-stop': [{ snap: ['normal', 'always'] }],
				'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
				'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
				touch: [{ touch: ['auto', 'none', 'manipulation'] }],
				'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
				'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
				'touch-pz': ['touch-pinch-zoom'],
				select: [{ select: ['none', 'text', 'all', 'auto'] }],
				'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', y] }],
				fill: [{ fill: [e, 'none'] }],
				'stroke-w': [{ stroke: [U, X, ve] }],
				stroke: [{ stroke: [e, 'none'] }],
				sr: ['sr-only', 'not-sr-only'],
				'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }]
			},
			conflictingClassGroups: {
				overflow: ['overflow-x', 'overflow-y'],
				overscroll: ['overscroll-x', 'overscroll-y'],
				inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
				'inset-x': ['right', 'left'],
				'inset-y': ['top', 'bottom'],
				flex: ['basis', 'grow', 'shrink'],
				gap: ['gap-x', 'gap-y'],
				p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
				px: ['pr', 'pl'],
				py: ['pt', 'pb'],
				m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
				mx: ['mr', 'ml'],
				my: ['mt', 'mb'],
				size: ['w', 'h'],
				'font-size': ['leading'],
				'fvn-normal': [
					'fvn-ordinal',
					'fvn-slashed-zero',
					'fvn-figure',
					'fvn-spacing',
					'fvn-fraction'
				],
				'fvn-ordinal': ['fvn-normal'],
				'fvn-slashed-zero': ['fvn-normal'],
				'fvn-figure': ['fvn-normal'],
				'fvn-spacing': ['fvn-normal'],
				'fvn-fraction': ['fvn-normal'],
				'line-clamp': ['display', 'overflow'],
				rounded: [
					'rounded-s',
					'rounded-e',
					'rounded-t',
					'rounded-r',
					'rounded-b',
					'rounded-l',
					'rounded-ss',
					'rounded-se',
					'rounded-ee',
					'rounded-es',
					'rounded-tl',
					'rounded-tr',
					'rounded-br',
					'rounded-bl'
				],
				'rounded-s': ['rounded-ss', 'rounded-es'],
				'rounded-e': ['rounded-se', 'rounded-ee'],
				'rounded-t': ['rounded-tl', 'rounded-tr'],
				'rounded-r': ['rounded-tr', 'rounded-br'],
				'rounded-b': ['rounded-br', 'rounded-bl'],
				'rounded-l': ['rounded-tl', 'rounded-bl'],
				'border-spacing': ['border-spacing-x', 'border-spacing-y'],
				'border-w': [
					'border-w-s',
					'border-w-e',
					'border-w-t',
					'border-w-r',
					'border-w-b',
					'border-w-l'
				],
				'border-w-x': ['border-w-r', 'border-w-l'],
				'border-w-y': ['border-w-t', 'border-w-b'],
				'border-color': [
					'border-color-s',
					'border-color-e',
					'border-color-t',
					'border-color-r',
					'border-color-b',
					'border-color-l'
				],
				'border-color-x': ['border-color-r', 'border-color-l'],
				'border-color-y': ['border-color-t', 'border-color-b'],
				'scroll-m': [
					'scroll-mx',
					'scroll-my',
					'scroll-ms',
					'scroll-me',
					'scroll-mt',
					'scroll-mr',
					'scroll-mb',
					'scroll-ml'
				],
				'scroll-mx': ['scroll-mr', 'scroll-ml'],
				'scroll-my': ['scroll-mt', 'scroll-mb'],
				'scroll-p': [
					'scroll-px',
					'scroll-py',
					'scroll-ps',
					'scroll-pe',
					'scroll-pt',
					'scroll-pr',
					'scroll-pb',
					'scroll-pl'
				],
				'scroll-px': ['scroll-pr', 'scroll-pl'],
				'scroll-py': ['scroll-pt', 'scroll-pb'],
				touch: ['touch-x', 'touch-y', 'touch-pz'],
				'touch-x': ['touch'],
				'touch-y': ['touch'],
				'touch-pz': ['touch']
			},
			conflictingClassGroupModifiers: { 'font-size': ['leading'] }
		};
	},
	Lt = (
		e,
		{
			cacheSize: t,
			prefix: r,
			separator: o,
			experimentalParseClassName: l,
			extend: n = {},
			override: s = {}
		}
	) => {
		fe(e, 'cacheSize', t),
			fe(e, 'prefix', r),
			fe(e, 'separator', o),
			fe(e, 'experimentalParseClassName', l);
		for (const i in s) _t(e[i], s[i]);
		for (const i in n) Ot(e[i], n[i]);
		return e;
	},
	fe = (e, t, r) => {
		r !== void 0 && (e[t] = r);
	},
	_t = (e, t) => {
		if (t) for (const r in t) fe(e, r, t[r]);
	},
	Ot = (e, t) => {
		if (t)
			for (const r in t) {
				const o = t[r];
				o !== void 0 && (e[r] = (e[r] || []).concat(o));
			}
	},
	Wt = (e, ...t) => (typeof e == 'function' ? Se(Me, e, ...t) : Se(() => Lt(Me(), e), ...t)),
	Bt = Se(Me);
var Ft = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
	fr = (e) => e || void 0,
	be = (...e) => fr(sr(e).filter(Boolean).join(' ')),
	we = null,
	q = {},
	Ge = !1,
	pe =
		(...e) =>
		(t) =>
			t.twMerge
				? ((!we || Ge) &&
						((Ge = !1),
						(we = L(q)
							? Bt
							: Wt({
									...q,
									extend: {
										theme: q.theme,
										classGroups: q.classGroups,
										conflictingClassGroupModifiers: q.conflictingClassGroupModifiers,
										conflictingClassGroups: q.conflictingClassGroups,
										...q.extend
									}
								}))),
					fr(we(be(e))))
				: be(e),
	Ke = (e, t) => {
		for (let r in t) e.hasOwnProperty(r) ? (e[r] = be(e[r], t[r])) : (e[r] = t[r]);
		return e;
	},
	Ut = (e, t) => {
		let {
				extend: r = null,
				slots: o = {},
				variants: l = {},
				compoundVariants: n = [],
				compoundSlots: s = [],
				defaultVariants: i = {}
			} = e,
			a = { ...Ft, ...t },
			w =
				r != null && r.base ? be(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base,
			b = r != null && r.variants && !L(r.variants) ? lr(l, r.variants) : l,
			I =
				r != null && r.defaultVariants && !L(r.defaultVariants)
					? { ...r.defaultVariants, ...i }
					: i;
		!L(a.twMergeConfig) && !at(a.twMergeConfig, q) && ((Ge = !0), (q = a.twMergeConfig));
		let P = L(r == null ? void 0 : r.slots),
			M = L(o)
				? {}
				: { base: be(e == null ? void 0 : e.base, P && (r == null ? void 0 : r.base)), ...o },
			C = P
				? M
				: Ke(
						{ ...(r == null ? void 0 : r.slots) },
						L(M) ? { base: e == null ? void 0 : e.base } : M
					),
			x = L(r == null ? void 0 : r.compoundVariants)
				? n
				: ir(r == null ? void 0 : r.compoundVariants, n),
			g = (A) => {
				if (L(b) && L(o) && P)
					return pe(w, A == null ? void 0 : A.class, A == null ? void 0 : A.className)(a);
				if (x && !Array.isArray(x))
					throw new TypeError(
						`The "compoundVariants" prop must be an array. Received: ${typeof x}`
					);
				if (s && !Array.isArray(s))
					throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
				let _ = (p, h, u = [], v) => {
						let m = u;
						if (typeof h == 'string')
							m = m.concat(
								Ue(h)
									.split(' ')
									.map((k) => `${p}:${k}`)
							);
						else if (Array.isArray(h)) m = m.concat(h.reduce((k, f) => k.concat(`${p}:${f}`), []));
						else if (typeof h == 'object' && typeof v == 'string') {
							for (let k in h)
								if (h.hasOwnProperty(k) && k === v) {
									let f = h[k];
									if (f && typeof f == 'string') {
										let R = Ue(f);
										m[v]
											? (m[v] = m[v].concat(R.split(' ').map((S) => `${p}:${S}`)))
											: (m[v] = R.split(' ').map((S) => `${p}:${S}`));
									} else
										Array.isArray(f) &&
											f.length > 0 &&
											(m[v] = f.reduce((R, S) => R.concat(`${p}:${S}`), []));
								}
						}
						return m;
					},
					N = (p, h = b, u = null, v = null) => {
						var m;
						let k = h[p];
						if (!k || L(k)) return null;
						let f = (m = v == null ? void 0 : v[p]) != null ? m : A == null ? void 0 : A[p];
						if (f === null) return null;
						let R = Fe(f),
							S =
								(Array.isArray(a.responsiveVariants) && a.responsiveVariants.length > 0) ||
								a.responsiveVariants === !0,
							G = I == null ? void 0 : I[p],
							E = [];
						if (typeof R == 'object' && S)
							for (let [te, Y] of Object.entries(R)) {
								let oe = k[Y];
								if (te === 'initial') {
									G = Y;
									continue;
								}
								(Array.isArray(a.responsiveVariants) && !a.responsiveVariants.includes(te)) ||
									(E = _(te, oe, E, u));
							}
						let Z = R != null && typeof R != 'object' ? R : Fe(G),
							re = k[Z || 'false'];
						return typeof E == 'object' && typeof u == 'string' && E[u]
							? Ke(E, re)
							: E.length > 0
								? (E.push(re), u === 'base' ? E.join(' ') : E)
								: re;
					},
					O = () => (b ? Object.keys(b).map((p) => N(p, b)) : null),
					T = (p, h) => {
						if (!b || typeof b != 'object') return null;
						let u = new Array();
						for (let v in b) {
							let m = N(v, b, p, h),
								k = p === 'base' && typeof m == 'string' ? m : m && m[p];
							k && (u[u.length] = k);
						}
						return u;
					},
					B = {};
				for (let p in A) A[p] !== void 0 && (B[p] = A[p]);
				let J = (p, h) => {
						var u;
						let v =
							typeof (A == null ? void 0 : A[p]) == 'object'
								? { [p]: (u = A[p]) == null ? void 0 : u.initial }
								: {};
						return { ...I, ...B, ...v, ...h };
					},
					W = (p = [], h) => {
						let u = [];
						for (let { class: v, className: m, ...k } of p) {
							let f = !0;
							for (let [R, S] of Object.entries(k)) {
								let G = J(R, h)[R];
								if (Array.isArray(S)) {
									if (!S.includes(G)) {
										f = !1;
										break;
									}
								} else {
									let E = (Z) => Z == null || Z === !1;
									if (E(S) && E(G)) continue;
									if (G !== S) {
										f = !1;
										break;
									}
								}
							}
							f && (v && u.push(v), m && u.push(m));
						}
						return u;
					},
					K = (p) => {
						let h = W(x, p);
						if (!Array.isArray(h)) return h;
						let u = {};
						for (let v of h)
							if ((typeof v == 'string' && (u.base = pe(u.base, v)(a)), typeof v == 'object'))
								for (let [m, k] of Object.entries(v)) u[m] = pe(u[m], k)(a);
						return u;
					},
					F = (p) => {
						if (s.length < 1) return null;
						let h = {};
						for (let { slots: u = [], class: v, className: m, ...k } of s) {
							if (!L(k)) {
								let f = !0;
								for (let R of Object.keys(k)) {
									let S = J(R, p)[R];
									if (S === void 0 || (Array.isArray(k[R]) ? !k[R].includes(S) : k[R] !== S)) {
										f = !1;
										break;
									}
								}
								if (!f) continue;
							}
							for (let f of u) (h[f] = h[f] || []), h[f].push([v, m]);
						}
						return h;
					};
				if (!L(o) || !P) {
					let p = {};
					if (typeof C == 'object' && !L(C))
						for (let h of Object.keys(C))
							p[h] = (u) => {
								var v, m;
								return pe(
									C[h],
									T(h, u),
									((v = K(u)) != null ? v : [])[h],
									((m = F(u)) != null ? m : [])[h],
									u == null ? void 0 : u.class,
									u == null ? void 0 : u.className
								)(a);
							};
					return p;
				}
				return pe(w, O(), W(x), A == null ? void 0 : A.class, A == null ? void 0 : A.className)(a);
			},
			j = () => {
				if (!(!b || typeof b != 'object')) return Object.keys(b);
			};
		return (
			(g.variantKeys = j()),
			(g.extend = r),
			(g.base = w),
			(g.slots = C),
			(g.variants = b),
			(g.defaultVariants = I),
			(g.compoundSlots = s),
			(g.compoundVariants = x),
			g
		);
	};
const He = Ut({
	base: 'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-primary/90',
			destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: { variant: 'default', size: 'default' }
});
var qt = Xe('<a><!></a>'),
	Jt = Xe('<button><!></button>');
function Dt(e, t) {
	br(t, !0);
	let r = ce(t, 'variant', 3, 'default'),
		o = ce(t, 'size', 3, 'default'),
		l = ce(t, 'ref', 15, null),
		n = ce(t, 'href', 3, void 0),
		s = ce(t, 'type', 3, 'button'),
		i = xr(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'class',
			'variant',
			'size',
			'ref',
			'href',
			'type',
			'children'
		]);
	var a = hr(),
		w = gr(a);
	{
		var b = (P) => {
				var M = qt();
				let C;
				var x = je(M);
				Ee(x, () => t.children ?? $e),
					Te(M),
					Ne(
						M,
						(g) => l(g),
						() => l()
					),
					Ve(
						(g) => (C = Le(M, C, { class: g, href: n(), ...i })),
						[() => Be(He({ variant: r(), size: o() }), t.class)]
					),
					ye(P, M);
			},
			I = (P) => {
				var M = Jt();
				let C;
				var x = je(M);
				Ee(x, () => t.children ?? $e),
					Te(M),
					Ne(
						M,
						(g) => l(g),
						() => l()
					),
					Ve(
						(g) => (C = Le(M, C, { class: g, type: s(), ...i })),
						[() => Be(He({ variant: r(), size: o() }), t.class)]
					),
					ye(P, M);
			};
		yr(w, (P) => {
			n() ? P(b) : P(I, !1);
		});
	}
	ye(e, a), mr();
}
export { Dt as B, Be as a, He as b, Ut as c };
