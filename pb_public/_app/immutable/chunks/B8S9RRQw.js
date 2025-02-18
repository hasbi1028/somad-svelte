var si = Object.defineProperty;
var ai = Object.getPrototypeOf;
var ci = Reflect.get;
var cr = (e) => {
	throw TypeError(e);
};
var li = (e, t, n) =>
	t in e ? si(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var I = (e, t, n) => li(e, typeof t != 'symbol' ? t + '' : t, n),
	Ln = (e, t, n) => t.has(e) || cr('Cannot ' + n);
var l = (e, t, n) => (Ln(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
	y = (e, t, n) =>
		t.has(e)
			? cr('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n),
	Z = (e, t, n, r) => (Ln(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
	Nt = (e, t, n) => (Ln(e, t, 'access private method'), n);
var lr = (e, t, n) => ci(ai(e), n, t);
import {
	h as ur,
	e as ui,
	y as di,
	aX as fi,
	ar as hi,
	b as gi,
	J as mi,
	g as vi,
	i as pi,
	ab as yi,
	f as k,
	T as Ht,
	v as d,
	q as T,
	u as R,
	a3 as q,
	aY as wi,
	aN as dr,
	aO as bi,
	aM as xi,
	z as Pr,
	w as C,
	p as U,
	a as Y,
	x as X,
	aZ as Si,
	aV as Ai,
	d as Kn,
	c as Un,
	r as Yn,
	t as qn,
	s as ee,
	n as Oi
} from './DQMf8gWK.js';
import './Bg9kRutz.js';
import { e as L, a as N, t as It } from './BGOrq1ZG.js';
import { s as B } from './D3E8oDJG.js';
import {
	i as $t,
	f as Ei,
	b as A,
	w as J,
	e as kt,
	a as st,
	o as Pi,
	u as Bt,
	g as Ci,
	m as wt,
	h as Ti,
	s as Fi
} from './B7uXBihW.js';
import { l as Di, s as rt, i as bt, p as x, r as At } from './DjKtoK8y.js';
import { o as Ii } from './BFd-cvYk.js';
import { p as F } from './BJa4LW-r.js';
import { o as Q } from './BTRVP7y_.js';
import { c as ke } from './D7_cnrTr.js';
import { a as Cr, c as Ni } from './DWr6XhLj.js';
import { s as Xn } from './DvbRtjlS.js';
import './69_IOA4Y.js';
import { s as Ri } from './jIU1MAPh.js';
import { I as ki } from './DcIEMM9l.js';
import { m as _i, u as Li } from './CPLw4cna.js';
function Bi(e, t, n) {
	ur && ui();
	var r = e,
		i = yi,
		o,
		s = di() ? fi : hi;
	gi(() => {
		s(i, (i = t())) && (o && mi(o), (o = vi(() => n(r))));
	}),
		ur && (r = pi);
}
function Mi(e, t) {
	const n = Di(t, ['children', '$$slots', '$$events', '$$legacy']);
	ki(
		e,
		rt({ name: 'x' }, () => n, {
			iconNode: [
				['path', { d: 'M18 6 6 18' }],
				['path', { d: 'm6 6 12 12' }]
			],
			children: (i, o) => {
				var s = L(),
					a = k(s);
				Ri(a, t, 'default', {}, null), N(i, s);
			},
			$$slots: { default: !0 }
		})
	);
}
var ut, dt, mt, zt, _e;
const ar = class ar extends Map {
	constructor(n) {
		super();
		y(this, zt);
		y(this, ut, new Map());
		y(this, dt, Ht(0));
		y(this, mt, Ht(0));
		if (n) {
			for (var [r, i] of n) super.set(r, i);
			l(this, mt).v = super.size;
		}
	}
	has(n) {
		var r = l(this, ut),
			i = r.get(n);
		if (i === void 0) {
			var o = super.get(n);
			if (o !== void 0) (i = Ht(0)), r.set(n, i);
			else return d(l(this, dt)), !1;
		}
		return d(i), !0;
	}
	forEach(n, r) {
		Nt(this, zt, _e).call(this), super.forEach(n, r);
	}
	get(n) {
		var r = l(this, ut),
			i = r.get(n);
		if (i === void 0) {
			var o = super.get(n);
			if (o !== void 0) (i = Ht(0)), r.set(n, i);
			else {
				d(l(this, dt));
				return;
			}
		}
		return d(i), super.get(n);
	}
	set(n, r) {
		var f;
		var i = l(this, ut),
			o = i.get(n),
			s = super.get(n),
			a = super.set(n, r),
			c = l(this, dt);
		if (o === void 0) i.set(n, Ht(0)), T(l(this, mt), super.size), $t(c);
		else if (s !== r) {
			$t(o);
			var u = c.reactions === null ? null : new Set(c.reactions),
				g = u === null || !((f = o.reactions) != null && f.every((h) => u.has(h)));
			g && $t(c);
		}
		return a;
	}
	delete(n) {
		var r = l(this, ut),
			i = r.get(n),
			o = super.delete(n);
		return i !== void 0 && (r.delete(n), T(l(this, mt), super.size), T(i, -1), $t(l(this, dt))), o;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var n = l(this, ut);
			T(l(this, mt), 0);
			for (var r of n.values()) T(r, -1);
			$t(l(this, dt)), n.clear();
		}
	}
	keys() {
		return d(l(this, dt)), super.keys();
	}
	values() {
		return Nt(this, zt, _e).call(this), super.values();
	}
	entries() {
		return Nt(this, zt, _e).call(this), super.entries();
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	get size() {
		return d(l(this, mt)), super.size;
	}
};
(ut = new WeakMap()),
	(dt = new WeakMap()),
	(mt = new WeakMap()),
	(zt = new WeakSet()),
	(_e = function () {
		d(l(this, dt));
		var n = l(this, ut);
		if (l(this, mt).v !== n.size)
			for (var r of lr(ar.prototype, this, 'keys').call(this)) n.has(r) || n.set(r, Ht(0));
		for (var [, i] of l(this, ut)) d(i);
	});
let Mn = ar;
function Wi(e) {
	return typeof e == 'function';
}
function Hi(e) {
	return Wi(e) ? e() : e;
}
var vt;
class Vi {
	constructor(t, n = { box: 'border-box' }) {
		y(this, vt, R(F({ width: 0, height: 0 })));
		var i, o;
		const r = n.window ?? Ei;
		(l(this, vt).v = F({
			width: ((i = n.initialSize) == null ? void 0 : i.width) ?? 0,
			height: ((o = n.initialSize) == null ? void 0 : o.height) ?? 0
		})),
			q(() => {
				if (!r) return;
				const s = Hi(t);
				if (!s) return;
				const a = new r.ResizeObserver((c) => {
					for (const u of c) {
						const g = n.box === 'content-box' ? u.contentBoxSize : u.borderBoxSize,
							f = Array.isArray(g) ? g : [g];
						(d(l(this, vt)).width = f.reduce((h, m) => Math.max(h, m.inlineSize), 0)),
							(d(l(this, vt)).height = f.reduce((h, m) => Math.max(h, m.blockSize), 0));
					}
				});
				return (
					a.observe(s),
					() => {
						a.disconnect();
					}
				);
			});
	}
	get current() {
		return d(l(this, vt));
	}
	get width() {
		return d(l(this, vt)).width;
	}
	get height() {
		return d(l(this, vt)).height;
	}
}
vt = new WeakMap();
var ie, oe;
class zi {
	constructor(t) {
		y(this, ie, R(void 0));
		y(this, oe);
		q(() => {
			T(l(this, ie), F(l(this, oe))), Z(this, oe, t());
		});
	}
	get current() {
		return d(l(this, ie));
	}
}
(ie = new WeakMap()), (oe = new WeakMap());
var se, pt;
class Dn {
	constructor(t) {
		y(this, se);
		y(this, pt);
		Z(this, se, t), Z(this, pt, Symbol(t));
	}
	get key() {
		return l(this, pt);
	}
	exists() {
		return wi(l(this, pt));
	}
	get() {
		const t = dr(l(this, pt));
		if (t === void 0) throw new Error(`Context "${l(this, se)}" not found`);
		return t;
	}
	getOr(t) {
		const n = dr(l(this, pt));
		return n === void 0 ? t : n;
	}
	set(t) {
		return bi(l(this, pt), t);
	}
}
(se = new WeakMap()), (pt = new WeakMap());
function jn(e, t) {
	return setTimeout(t, e);
}
function In(e) {
	xi().then(e);
}
function Ka(e) {
	q(() => Pr(() => e()));
}
function Ki(e) {
	return e ? 'open' : 'closed';
}
function Ua(e) {
	return e ? 'true' : 'false';
}
function Ui(e) {
	return e ? 'true' : 'false';
}
function Ya(e) {
	return e ? '' : void 0;
}
function qa(e) {
	return e ? 'true' : 'false';
}
function Xa(e) {
	return e ? 'true' : 'false';
}
function ja(e, t) {
	return t ? 'mixed' : e ? 'true' : 'false';
}
function Ga(e) {
	return e;
}
function Za(e) {
	return e ? 'true' : void 0;
}
function Ja(e) {
	return e;
}
function Qa(e) {
	return e ? !0 : void 0;
}
function $a(e) {
	return e ? !0 : void 0;
}
function tc(e) {
	return e ? 'true' : 'false';
}
function ec(e) {
	return e ? !0 : void 0;
}
const nc = 'ArrowDown',
	rc = 'ArrowLeft',
	ic = 'ArrowRight',
	oc = 'ArrowUp',
	sc = 'End',
	Tr = 'Enter',
	Yi = 'Escape',
	ac = 'Home',
	cc = 'PageDown',
	lc = 'PageUp',
	Fr = ' ',
	qi = 'Tab',
	Gn = typeof document < 'u',
	fr = Xi();
function Xi() {
	var e, t;
	return (
		Gn &&
		((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) &&
		(/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
			(((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 &&
				/iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent)))
	);
}
function Le(e) {
	return e instanceof HTMLElement;
}
function Dr(e) {
	return e instanceof Element;
}
function uc(e) {
	return e instanceof Element || e instanceof SVGElement;
}
function dc(e) {
	return e.matches(':focus-visible');
}
function ji(e) {
	return e !== null;
}
function Gi(e) {
	return e instanceof HTMLInputElement && 'select' in e;
}
function Zi(e, t) {
	if (getComputedStyle(e).visibility === 'hidden') return !0;
	for (; e; ) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === 'none') return !0;
		e = e.parentElement;
	}
	return !1;
}
function K() {}
function Ji(e, t) {
	const n = A(e);
	function r(o) {
		return t[n.current][o] ?? n.current;
	}
	return {
		state: n,
		dispatch: (o) => {
			n.current = r(o);
		}
	};
}
function Qi(e, t) {
	let n = R(F({})),
		r = R('none');
	const i = e.current ? 'mounted' : 'unmounted';
	let o = R(null);
	const s = new zi(() => e.current);
	J([() => t.current, () => e.current], ([h, m]) => {
		!h ||
			!m ||
			In(() => {
				T(o, F(document.getElementById(h)));
			});
	});
	const { state: a, dispatch: c } = Ji(i, {
		mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
		unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
		unmounted: { MOUNT: 'mounted' }
	});
	J(
		() => e.current,
		(h) => {
			if ((d(o) || T(o, F(document.getElementById(t.current))), !d(o) || !(h !== s.current)))
				return;
			const p = d(r),
				b = Ie(d(o));
			h
				? c('MOUNT')
				: b === 'none' || d(n).display === 'none'
					? c('UNMOUNT')
					: c(s && p !== b ? 'ANIMATION_OUT' : 'UNMOUNT');
		}
	);
	function u(h) {
		if ((d(o) || T(o, F(document.getElementById(t.current))), !d(o))) return;
		const m = Ie(d(o)),
			p = m.includes(h.animationName) || m === 'none';
		h.target === d(o) && p && c('ANIMATION_END');
	}
	function g(h) {
		d(o) || T(o, F(document.getElementById(t.current))),
			d(o) && h.target === d(o) && T(r, F(Ie(d(o))));
	}
	J(
		() => a.current,
		() => {
			if ((d(o) || T(o, F(document.getElementById(t.current))), !d(o))) return;
			const h = Ie(d(o));
			T(r, F(a.current === 'mounted' ? h : 'none'));
		}
	),
		J(
			() => d(o),
			(h) => {
				if (h)
					return (
						T(n, F(getComputedStyle(h))),
						kt(Q(h, 'animationstart', g), Q(h, 'animationcancel', u), Q(h, 'animationend', u))
					);
			}
		);
	const f = C(() => ['mounted', 'unmountSuspended'].includes(a.current));
	return {
		get current() {
			return d(f);
		}
	};
}
function Ie(e) {
	return (e && getComputedStyle(e).animationName) || 'none';
}
function Zn(e, t) {
	U(t, !0);
	const n = Qi(
		A.with(() => t.present),
		A.with(() => t.id)
	);
	var r = L(),
		i = k(r);
	{
		var o = (s) => {
			var a = L(),
				c = k(a);
			B(
				c,
				() => t.presence ?? X,
				() => ({ present: n })
			),
				N(s, a);
		};
		bt(i, (s) => {
			(t.forceMount || t.present || n.current) && s(o);
		});
	}
	N(e, r), Y();
}
function $i(e) {
	return {
		content: `data-${e}-content`,
		trigger: `data-${e}-trigger`,
		overlay: `data-${e}-overlay`,
		title: `data-${e}-title`,
		description: `data-${e}-description`,
		close: `data-${e}-close`,
		cancel: `data-${e}-cancel`,
		action: `data-${e}-action`
	};
}
var ae, ce, le, ue, de, fe, he, ge, me, Ye, qe;
class to {
	constructor(t) {
		I(this, 'opts');
		y(this, ae, R(null));
		y(this, ce, R(null));
		y(this, le, R(null));
		y(this, ue, R(null));
		y(this, de, R(void 0));
		y(this, fe, R(void 0));
		y(this, he, R(void 0));
		y(this, ge, R(void 0));
		y(this, me, R(null));
		y(
			this,
			Ye,
			C(() => $i(this.opts.variant.current))
		);
		y(
			this,
			qe,
			C(() => ({ 'data-state': Ki(this.opts.open.current) }))
		);
		(this.opts = t),
			(this.handleOpen = this.handleOpen.bind(this)),
			(this.handleClose = this.handleClose.bind(this));
	}
	get triggerNode() {
		return d(l(this, ae));
	}
	set triggerNode(t) {
		T(l(this, ae), F(t));
	}
	get titleNode() {
		return d(l(this, ce));
	}
	set titleNode(t) {
		T(l(this, ce), F(t));
	}
	get contentNode() {
		return d(l(this, le));
	}
	set contentNode(t) {
		T(l(this, le), F(t));
	}
	get descriptionNode() {
		return d(l(this, ue));
	}
	set descriptionNode(t) {
		T(l(this, ue), F(t));
	}
	get contentId() {
		return d(l(this, de));
	}
	set contentId(t) {
		T(l(this, de), F(t));
	}
	get titleId() {
		return d(l(this, fe));
	}
	set titleId(t) {
		T(l(this, fe), F(t));
	}
	get triggerId() {
		return d(l(this, he));
	}
	set triggerId(t) {
		T(l(this, he), F(t));
	}
	get descriptionId() {
		return d(l(this, ge));
	}
	set descriptionId(t) {
		T(l(this, ge), F(t));
	}
	get cancelNode() {
		return d(l(this, me));
	}
	set cancelNode(t) {
		T(l(this, me), F(t));
	}
	get attrs() {
		return d(l(this, Ye));
	}
	handleOpen() {
		this.opts.open.current || (this.opts.open.current = !0);
	}
	handleClose() {
		this.opts.open.current && (this.opts.open.current = !1);
	}
	get sharedProps() {
		return d(l(this, qe));
	}
}
(ae = new WeakMap()),
	(ce = new WeakMap()),
	(le = new WeakMap()),
	(ue = new WeakMap()),
	(de = new WeakMap()),
	(fe = new WeakMap()),
	(he = new WeakMap()),
	(ge = new WeakMap()),
	(me = new WeakMap()),
	(Ye = new WeakMap()),
	(qe = new WeakMap());
var Xe;
class eo {
	constructor(t, n) {
		I(this, 'opts');
		I(this, 'root');
		y(
			this,
			Xe,
			C(() => ({
				id: this.opts.id.current,
				'aria-haspopup': 'dialog',
				'aria-expanded': Ui(this.root.opts.open.current),
				'aria-controls': this.root.contentId,
				[this.root.attrs.trigger]: '',
				onpointerdown: this.onpointerdown,
				onkeydown: this.onkeydown,
				onclick: this.onclick,
				disabled: this.opts.disabled.current ? !0 : void 0,
				...this.root.sharedProps
			}))
		);
		(this.opts = t),
			(this.root = n),
			(this.onclick = this.onclick.bind(this)),
			(this.onpointerdown = this.onpointerdown.bind(this)),
			(this.onkeydown = this.onkeydown.bind(this)),
			st({
				...t,
				onRefChange: (r) => {
					(this.root.triggerNode = r), (this.root.triggerId = r == null ? void 0 : r.id);
				}
			}),
			(this.onclick = this.onclick.bind(this)),
			(this.onpointerdown = this.onpointerdown.bind(this)),
			(this.onkeydown = this.onkeydown.bind(this));
	}
	onclick(t) {
		this.opts.disabled.current || t.button > 0 || this.root.handleOpen();
	}
	onpointerdown(t) {
		this.opts.disabled.current || t.button > 0 || t.preventDefault();
	}
	onkeydown(t) {
		this.opts.disabled.current ||
			((t.key === Fr || t.key === Tr) && (t.preventDefault(), this.root.handleOpen()));
	}
	get props() {
		return d(l(this, Xe));
	}
}
Xe = new WeakMap();
var je, Ge;
class no {
	constructor(t, n) {
		I(this, 'opts');
		I(this, 'root');
		y(
			this,
			je,
			C(() => this.root.attrs[this.opts.variant.current])
		);
		y(
			this,
			Ge,
			C(() => ({
				id: this.opts.id.current,
				[d(l(this, je))]: '',
				onclick: this.onclick,
				onkeydown: this.onkeydown,
				disabled: this.opts.disabled.current ? !0 : void 0,
				...this.root.sharedProps
			}))
		);
		(this.opts = t),
			(this.root = n),
			(this.onclick = this.onclick.bind(this)),
			(this.onkeydown = this.onkeydown.bind(this)),
			st({ ...t, deps: () => this.root.opts.open.current });
	}
	onclick(t) {
		this.opts.disabled.current || t.button > 0 || this.root.handleClose();
	}
	onkeydown(t) {
		this.opts.disabled.current ||
			((t.key === Fr || t.key === Tr) && (t.preventDefault(), this.root.handleClose()));
	}
	get props() {
		return d(l(this, Ge));
	}
}
(je = new WeakMap()), (Ge = new WeakMap());
var Ze;
class ro {
	constructor(t, n) {
		I(this, 'opts');
		I(this, 'root');
		y(
			this,
			Ze,
			C(() => ({
				id: this.opts.id.current,
				role: 'heading',
				'aria-level': this.opts.level.current,
				[this.root.attrs.title]: '',
				...this.root.sharedProps
			}))
		);
		(this.opts = t),
			(this.root = n),
			st({
				...t,
				onRefChange: (r) => {
					(this.root.titleNode = r), (this.root.titleId = r == null ? void 0 : r.id);
				},
				deps: () => this.root.opts.open.current
			});
	}
	get props() {
		return d(l(this, Ze));
	}
}
Ze = new WeakMap();
var Je;
class io {
	constructor(t, n) {
		I(this, 'opts');
		I(this, 'root');
		y(
			this,
			Je,
			C(() => ({
				id: this.opts.id.current,
				[this.root.attrs.description]: '',
				...this.root.sharedProps
			}))
		);
		(this.opts = t),
			(this.root = n),
			st({
				...t,
				deps: () => this.root.opts.open.current,
				onRefChange: (r) => {
					(this.root.descriptionNode = r), (this.root.descriptionId = r == null ? void 0 : r.id);
				}
			});
	}
	get props() {
		return d(l(this, Je));
	}
}
Je = new WeakMap();
var Qe, $e;
class oo {
	constructor(t, n) {
		I(this, 'opts');
		I(this, 'root');
		y(
			this,
			Qe,
			C(() => ({ open: this.root.opts.open.current }))
		);
		y(
			this,
			$e,
			C(() => ({
				id: this.opts.id.current,
				role: this.root.opts.variant.current === 'alert-dialog' ? 'alertdialog' : 'dialog',
				'aria-describedby': this.root.descriptionId,
				'aria-labelledby': this.root.titleId,
				[this.root.attrs.content]: '',
				style: { pointerEvents: 'auto' },
				...this.root.sharedProps
			}))
		);
		(this.opts = t),
			(this.root = n),
			st({
				...t,
				deps: () => this.root.opts.open.current,
				onRefChange: (r) => {
					(this.root.contentNode = r), (this.root.contentId = r == null ? void 0 : r.id);
				}
			});
	}
	get snippetProps() {
		return d(l(this, Qe));
	}
	get props() {
		return d(l(this, $e));
	}
}
(Qe = new WeakMap()), ($e = new WeakMap());
var tn, en;
class so {
	constructor(t, n) {
		I(this, 'opts');
		I(this, 'root');
		y(
			this,
			tn,
			C(() => ({ open: this.root.opts.open.current }))
		);
		y(
			this,
			en,
			C(() => ({
				id: this.opts.id.current,
				[this.root.attrs.overlay]: '',
				style: { pointerEvents: 'auto' },
				...this.root.sharedProps
			}))
		);
		(this.opts = t), (this.root = n), st({ ...t, deps: () => this.root.opts.open.current });
	}
	get snippetProps() {
		return d(l(this, tn));
	}
	get props() {
		return d(l(this, en));
	}
}
(tn = new WeakMap()), (en = new WeakMap());
const Mt = new Dn('Dialog.Root');
function fc(e) {
	return Mt.set(new to(e));
}
function hc(e) {
	return new eo(e, Mt.get());
}
function gc(e) {
	return new ro(e, Mt.get());
}
function ao(e) {
	return new oo(e, Mt.get());
}
function co(e) {
	return new so(e, Mt.get());
}
function mc(e) {
	return new io(e, Mt.get());
}
function lo(e) {
	return new no(e, Mt.get());
}
function uo(e, t) {
	var n = L(),
		r = k(n);
	Bi(
		r,
		() => t.children,
		(i) => {
			var o = L(),
				s = k(o);
			B(s, () => t.children ?? X), N(i, o);
		}
	),
		N(e, n);
}
function fo(e, t) {
	U(t, !0);
	let n = x(t, 'to', 3, 'body');
	const r = Si();
	let i = C(o);
	function o() {
		if (!Gn || t.disabled) return null;
		let f = null;
		return (
			typeof n() == 'string'
				? (f = document.querySelector(n()))
				: (n() instanceof HTMLElement || n() instanceof DocumentFragment) && (f = n()),
			f
		);
	}
	let s;
	function a() {
		s && (Li(s), (s = null));
	}
	J([() => d(i), () => t.disabled], ([f, h]) => {
		if (!f || h) {
			a();
			return;
		}
		return (
			(s = _i(uo, { target: f, props: { children: t.children }, context: r })),
			() => {
				a();
			}
		);
	});
	var c = L(),
		u = k(c);
	{
		var g = (f) => {
			var h = L(),
				m = k(h);
			B(m, () => t.children ?? X), N(f, h);
		};
		bt(u, (f) => {
			t.disabled && f(g);
		});
	}
	N(e, c), Y();
}
function Ir(e, t, n, r) {
	const i = Array.isArray(t) ? t : [t];
	return (
		i.forEach((o) => e.addEventListener(o, n, r)),
		() => {
			i.forEach((o) => e.removeEventListener(o, n, r));
		}
	);
}
class Nr {
	constructor(t, n = { bubbles: !0, cancelable: !0 }) {
		I(this, 'eventName');
		I(this, 'options');
		(this.eventName = t), (this.options = n);
	}
	createEvent(t) {
		return new CustomEvent(this.eventName, { ...this.options, detail: t });
	}
	dispatch(t, n) {
		const r = this.createEvent(n);
		return t.dispatchEvent(r), r;
	}
	listen(t, n, r) {
		const i = (o) => {
			n(o);
		};
		return Q(t, this.eventName, i, r);
	}
}
function hr(e, t = 500) {
	let n = null;
	const r = (...i) => {
		n !== null && clearTimeout(n),
			(n = setTimeout(() => {
				e(...i);
			}, t));
	};
	return (
		(r.destroy = () => {
			n !== null && (clearTimeout(n), (n = null));
		}),
		r
	);
}
function Jn(e, t) {
	return e === t || e.contains(t);
}
function Rr(e) {
	return (e == null ? void 0 : e.ownerDocument) ?? document;
}
function vc(e) {
	return (e == null ? void 0 : e.ownerDocument) ?? document;
}
function ho(e, t) {
	const { clientX: n, clientY: r } = e,
		i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
globalThis.bitsDismissableLayers ?? (globalThis.bitsDismissableLayers = new Map());
var Kt, Rt, Pt, Ut, Yt, Ct, ve, pe, yt, nn, Gt, kr, rn, qt, on, sn, an, cn, ye, _r, ln, un;
class go {
	constructor(t) {
		y(this, Gt);
		I(this, 'opts');
		y(this, Kt);
		y(this, Rt);
		y(this, Pt, { pointerdown: !1 });
		y(this, Ut, !1);
		y(this, Yt, !1);
		I(this, 'node', A(null));
		y(this, Ct);
		y(this, ve);
		y(this, pe, R(null));
		y(this, yt, K);
		y(this, nn, (t) => {
			t.defaultPrevented ||
				(this.currNode &&
					In(() => {
						var n, r;
						!this.currNode ||
							l(this, cn).call(this, t.target) ||
							(t.target &&
								!l(this, Yt) &&
								((r = (n = l(this, ve)).current) == null || r.call(n, t)));
					}));
		});
		y(this, rn, (t) => {
			let n = t;
			n.defaultPrevented && (n = gr(t)), l(this, Kt).current(t);
		});
		y(
			this,
			qt,
			hr((t) => {
				if (!this.currNode) {
					l(this, yt).call(this);
					return;
				}
				const n = this.opts.isValidEvent.current(t, this.currNode) || yo(t, this.currNode);
				if (!l(this, Ut) || Nt(this, Gt, _r).call(this) || !n) {
					l(this, yt).call(this);
					return;
				}
				let r = t;
				if (
					(r.defaultPrevented && (r = gr(r)),
					l(this, Rt).current !== 'close' && l(this, Rt).current !== 'defer-otherwise-close')
				) {
					l(this, yt).call(this);
					return;
				}
				t.pointerType === 'touch'
					? (l(this, yt).call(this),
						Z(this, yt, Ir(l(this, Ct), 'click', l(this, rn), { once: !0 })))
					: l(this, Kt).current(r);
			}, 10)
		);
		y(this, on, (t) => {
			l(this, Pt)[t.type] = !0;
		});
		y(this, sn, (t) => {
			l(this, Pt)[t.type] = !1;
		});
		y(this, an, () => {
			this.node.current && Z(this, Ut, po(this.node.current));
		});
		y(this, cn, (t) => (this.node.current ? Jn(this.node.current, t) : !1));
		y(
			this,
			ye,
			hr(() => {
				for (const t in l(this, Pt)) l(this, Pt)[t] = !1;
				Z(this, Ut, !1);
			}, 20)
		);
		y(this, ln, () => {
			Z(this, Yt, !0);
		});
		y(this, un, () => {
			Z(this, Yt, !1);
		});
		I(this, 'props', { onfocuscapture: l(this, ln), onblurcapture: l(this, un) });
		(this.opts = t),
			st({
				id: t.id,
				ref: this.node,
				deps: () => t.enabled.current,
				onRefChange: (i) => {
					this.currNode = i;
				}
			}),
			Z(this, Rt, t.interactOutsideBehavior),
			Z(this, Kt, t.onInteractOutside),
			Z(this, ve, t.onFocusOutside),
			q(() => {
				Z(this, Ct, Rr(this.currNode));
			});
		let n = K;
		const r = () => {
			l(this, ye).call(this),
				globalThis.bitsDismissableLayers.delete(this),
				l(this, qt).destroy(),
				n();
		};
		J([() => this.opts.enabled.current, () => this.currNode], ([i, o]) => {
			if (!(!i || !o))
				return (
					jn(1, () => {
						this.currNode &&
							(globalThis.bitsDismissableLayers.set(this, l(this, Rt)),
							n(),
							(n = Nt(this, Gt, kr).call(this)));
					}),
					r
				);
		}),
			Pi(() => {
				l(this, ye).destroy(),
					globalThis.bitsDismissableLayers.delete(this),
					l(this, qt).destroy(),
					l(this, yt).call(this),
					n();
			});
	}
	get currNode() {
		return d(l(this, pe));
	}
	set currNode(t) {
		T(l(this, pe), F(t));
	}
}
(Kt = new WeakMap()),
	(Rt = new WeakMap()),
	(Pt = new WeakMap()),
	(Ut = new WeakMap()),
	(Yt = new WeakMap()),
	(Ct = new WeakMap()),
	(ve = new WeakMap()),
	(pe = new WeakMap()),
	(yt = new WeakMap()),
	(nn = new WeakMap()),
	(Gt = new WeakSet()),
	(kr = function () {
		return kt(
			Q(l(this, Ct), 'pointerdown', kt(l(this, on), l(this, an)), { capture: !0 }),
			Q(l(this, Ct), 'pointerdown', kt(l(this, sn), l(this, qt))),
			Q(l(this, Ct), 'focusin', l(this, nn))
		);
	}),
	(rn = new WeakMap()),
	(qt = new WeakMap()),
	(on = new WeakMap()),
	(sn = new WeakMap()),
	(an = new WeakMap()),
	(cn = new WeakMap()),
	(ye = new WeakMap()),
	(_r = function () {
		return Object.values(l(this, Pt)).some(Boolean);
	}),
	(ln = new WeakMap()),
	(un = new WeakMap());
function mo(e) {
	return new go(e);
}
function vo(e) {
	return e.findLast(([t, { current: n }]) => n === 'close' || n === 'ignore');
}
function po(e) {
	const t = [...globalThis.bitsDismissableLayers],
		n = vo(t);
	if (n) return n[0].node.current === e;
	const [r] = t[0];
	return r.node.current === e;
}
function yo(e, t) {
	if ('button' in e && e.button > 0) return !1;
	const n = e.target;
	return Dr(n) ? Rr(n).documentElement.contains(n) && !Jn(t, n) && ho(e, t) : !1;
}
function gr(e) {
	const t = e.currentTarget,
		n = e.target;
	let r;
	e instanceof PointerEvent
		? (r = new PointerEvent(e.type, e))
		: (r = new PointerEvent('pointerdown', e));
	let i = !1;
	return new Proxy(r, {
		get: (s, a) =>
			a === 'currentTarget'
				? t
				: a === 'target'
					? n
					: a === 'preventDefault'
						? () => {
								(i = !0), typeof s.preventDefault == 'function' && s.preventDefault();
							}
						: a === 'defaultPrevented'
							? i
							: a in s
								? s[a]
								: e[a]
	});
}
function Lr(e, t) {
	U(t, !0);
	let n = x(t, 'interactOutsideBehavior', 3, 'close'),
		r = x(t, 'onInteractOutside', 3, K),
		i = x(t, 'onFocusOutside', 3, K),
		o = x(t, 'isValidEvent', 3, () => !1);
	const s = mo({
		id: A.with(() => t.id),
		interactOutsideBehavior: A.with(() => n()),
		onInteractOutside: A.with(() => r()),
		enabled: A.with(() => t.enabled),
		onFocusOutside: A.with(() => i()),
		isValidEvent: A.with(() => o())
	});
	var a = L(),
		c = k(a);
	B(
		c,
		() => t.children ?? X,
		() => ({ props: s.props })
	),
		N(e, a),
		Y();
}
globalThis.bitsEscapeLayers ?? (globalThis.bitsEscapeLayers = new Map());
var dn, fn;
class wo {
	constructor(t) {
		I(this, 'opts');
		y(this, dn, () => Q(document, 'keydown', l(this, fn), { passive: !1 }));
		y(this, fn, (t) => {
			if (t.key !== Yi || !xo(this)) return;
			const n = new KeyboardEvent(t.type, t);
			t.preventDefault();
			const r = this.opts.escapeKeydownBehavior.current;
			(r !== 'close' && r !== 'defer-otherwise-close') || this.opts.onEscapeKeydown.current(n);
		});
		this.opts = t;
		let n = K;
		J(
			() => t.enabled.current,
			(r) => (
				r &&
					(globalThis.bitsEscapeLayers.set(this, t.escapeKeydownBehavior),
					(n = l(this, dn).call(this))),
				() => {
					n(), globalThis.bitsEscapeLayers.delete(this);
				}
			)
		);
	}
}
(dn = new WeakMap()), (fn = new WeakMap());
function bo(e) {
	return new wo(e);
}
function xo(e) {
	const t = [...globalThis.bitsEscapeLayers],
		n = t.findLast(([i, { current: o }]) => o === 'close' || o === 'ignore');
	if (n) return n[0] === e;
	const [r] = t[0];
	return r === e;
}
function Br(e, t) {
	U(t, !0);
	let n = x(t, 'escapeKeydownBehavior', 3, 'close'),
		r = x(t, 'onEscapeKeydown', 3, K);
	bo({
		escapeKeydownBehavior: A.with(() => n()),
		onEscapeKeydown: A.with(() => r()),
		enabled: A.with(() => t.enabled)
	});
	var i = L(),
		o = k(i);
	B(o, () => t.children ?? X), N(e, i), Y();
}
const Ot = A([]);
function So() {
	return {
		add(e) {
			const t = Ot.current[0];
			t && e.id !== t.id && t.pause(), (Ot.current = mr(Ot.current, e)), Ot.current.unshift(e);
		},
		remove(e) {
			var t;
			(Ot.current = mr(Ot.current, e)), (t = Ot.current[0]) == null || t.resume();
		},
		get current() {
			return Ot.current;
		}
	};
}
function Ao() {
	let e = R(!1),
		t = R(!1);
	return {
		id: Bt(),
		get paused() {
			return d(e);
		},
		get isHandlingFocus() {
			return d(t);
		},
		set isHandlingFocus(n) {
			T(t, F(n));
		},
		pause() {
			T(e, !0);
		},
		resume() {
			T(e, !1);
		}
	};
}
function mr(e, t) {
	return [...e].filter((n) => n.id !== t.id);
}
function Oo(e) {
	return e.filter((t) => t.tagName !== 'A');
}
function Et(e, { select: t = !1 } = {}) {
	if (!(e && e.focus) || document.activeElement === e) return;
	const n = document.activeElement;
	e.focus({ preventScroll: !0 }), e !== n && Gi(e) && t && e.select();
}
function Eo(e, { select: t = !1 } = {}) {
	const n = document.activeElement;
	for (const r of e) if ((Et(r, { select: t }), document.activeElement !== n)) return !0;
}
function vr(e, t) {
	for (const n of e) if (!Zi(n, t)) return n;
}
function Mr(e) {
	const t = [],
		n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode: (r) => {
				const i = r.tagName === 'INPUT' && r.type === 'hidden';
				return r.disabled || r.hidden || i
					? NodeFilter.FILTER_SKIP
					: r.tabIndex >= 0
						? NodeFilter.FILTER_ACCEPT
						: NodeFilter.FILTER_SKIP;
			}
		});
	for (; n.nextNode(); ) t.push(n.currentNode);
	return t;
}
function Po(e) {
	const t = Mr(e),
		n = vr(t, e),
		r = vr(t.reverse(), e);
	return [n, r];
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var Wr = [
		'input:not([inert])',
		'select:not([inert])',
		'textarea:not([inert])',
		'a[href]:not([inert])',
		'button:not([inert])',
		'[tabindex]:not(slot):not([inert])',
		'audio[controls]:not([inert])',
		'video[controls]:not([inert])',
		'[contenteditable]:not([contenteditable="false"]):not([inert])',
		'details>summary:first-of-type:not([inert])',
		'details:not([inert])'
	],
	Be = Wr.join(','),
	Hr = typeof Element > 'u',
	_t = Hr
		? function () {}
		: Element.prototype.matches ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector,
	Me =
		!Hr && Element.prototype.getRootNode
			? function (e) {
					var t;
					return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
				}
			: function (e) {
					return e == null ? void 0 : e.ownerDocument;
				},
	We = function e(t, n) {
		var r;
		n === void 0 && (n = !0);
		var i =
				t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, 'inert'),
			o = i === '' || i === 'true',
			s = o || (n && t && e(t.parentNode));
		return s;
	},
	Co = function (t) {
		var n,
			r =
				t == null || (n = t.getAttribute) === null || n === void 0
					? void 0
					: n.call(t, 'contenteditable');
		return r === '' || r === 'true';
	},
	Vr = function (t, n, r) {
		if (We(t)) return [];
		var i = Array.prototype.slice.apply(t.querySelectorAll(Be));
		return n && _t.call(t, Be) && i.unshift(t), (i = i.filter(r)), i;
	},
	zr = function e(t, n, r) {
		for (var i = [], o = Array.from(t); o.length; ) {
			var s = o.shift();
			if (!We(s, !1))
				if (s.tagName === 'SLOT') {
					var a = s.assignedElements(),
						c = a.length ? a : s.children,
						u = e(c, !0, r);
					r.flatten ? i.push.apply(i, u) : i.push({ scopeParent: s, candidates: u });
				} else {
					var g = _t.call(s, Be);
					g && r.filter(s) && (n || !t.includes(s)) && i.push(s);
					var f = s.shadowRoot || (typeof r.getShadowRoot == 'function' && r.getShadowRoot(s)),
						h = !We(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
					if (f && h) {
						var m = e(f === !0 ? s.children : f.children, !0, r);
						r.flatten ? i.push.apply(i, m) : i.push({ scopeParent: s, candidates: m });
					} else o.unshift.apply(o, s.children);
				}
		}
		return i;
	},
	Kr = function (t) {
		return !isNaN(parseInt(t.getAttribute('tabindex'), 10));
	},
	Ur = function (t) {
		if (!t) throw new Error('No node provided');
		return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Co(t)) && !Kr(t)
			? 0
			: t.tabIndex;
	},
	To = function (t, n) {
		var r = Ur(t);
		return r < 0 && n && !Kr(t) ? 0 : r;
	},
	Fo = function (t, n) {
		return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
	},
	Yr = function (t) {
		return t.tagName === 'INPUT';
	},
	Do = function (t) {
		return Yr(t) && t.type === 'hidden';
	},
	Io = function (t) {
		var n =
			t.tagName === 'DETAILS' &&
			Array.prototype.slice.apply(t.children).some(function (r) {
				return r.tagName === 'SUMMARY';
			});
		return n;
	},
	No = function (t, n) {
		for (var r = 0; r < t.length; r++) if (t[r].checked && t[r].form === n) return t[r];
	},
	Ro = function (t) {
		if (!t.name) return !0;
		var n = t.form || Me(t),
			r = function (a) {
				return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
			},
			i;
		if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
			i = r(window.CSS.escape(t.name));
		else
			try {
				i = r(t.name);
			} catch (s) {
				return (
					console.error(
						'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
						s.message
					),
					!1
				);
			}
		var o = No(i, t.form);
		return !o || o === t;
	},
	ko = function (t) {
		return Yr(t) && t.type === 'radio';
	},
	_o = function (t) {
		return ko(t) && !Ro(t);
	},
	Lo = function (t) {
		var n,
			r = t && Me(t),
			i = (n = r) === null || n === void 0 ? void 0 : n.host,
			o = !1;
		if (r && r !== t) {
			var s, a, c;
			for (
				o = !!(
					((s = i) !== null &&
						s !== void 0 &&
						(a = s.ownerDocument) !== null &&
						a !== void 0 &&
						a.contains(i)) ||
					(t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t))
				);
				!o && i;

			) {
				var u, g, f;
				(r = Me(i)),
					(i = (u = r) === null || u === void 0 ? void 0 : u.host),
					(o = !!(
						(g = i) !== null &&
						g !== void 0 &&
						(f = g.ownerDocument) !== null &&
						f !== void 0 &&
						f.contains(i)
					));
			}
		}
		return o;
	},
	pr = function (t) {
		var n = t.getBoundingClientRect(),
			r = n.width,
			i = n.height;
		return r === 0 && i === 0;
	},
	Bo = function (t, n) {
		var r = n.displayCheck,
			i = n.getShadowRoot;
		if (getComputedStyle(t).visibility === 'hidden') return !0;
		var o = _t.call(t, 'details>summary:first-of-type'),
			s = o ? t.parentElement : t;
		if (_t.call(s, 'details:not([open]) *')) return !0;
		if (!r || r === 'full' || r === 'legacy-full') {
			if (typeof i == 'function') {
				for (var a = t; t; ) {
					var c = t.parentElement,
						u = Me(t);
					if (c && !c.shadowRoot && i(c) === !0) return pr(t);
					t.assignedSlot
						? (t = t.assignedSlot)
						: !c && u !== t.ownerDocument
							? (t = u.host)
							: (t = c);
				}
				t = a;
			}
			if (Lo(t)) return !t.getClientRects().length;
			if (r !== 'legacy-full') return !0;
		} else if (r === 'non-zero-area') return pr(t);
		return !1;
	},
	Mo = function (t) {
		if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
			for (var n = t.parentElement; n; ) {
				if (n.tagName === 'FIELDSET' && n.disabled) {
					for (var r = 0; r < n.children.length; r++) {
						var i = n.children.item(r);
						if (i.tagName === 'LEGEND')
							return _t.call(n, 'fieldset[disabled] *') ? !0 : !i.contains(t);
					}
					return !0;
				}
				n = n.parentElement;
			}
		return !1;
	},
	He = function (t, n) {
		return !(n.disabled || We(n) || Do(n) || Bo(n, t) || Io(n) || Mo(n));
	},
	Wn = function (t, n) {
		return !(_o(n) || Ur(n) < 0 || !He(t, n));
	},
	Wo = function (t) {
		var n = parseInt(t.getAttribute('tabindex'), 10);
		return !!(isNaN(n) || n >= 0);
	},
	Ho = function e(t) {
		var n = [],
			r = [];
		return (
			t.forEach(function (i, o) {
				var s = !!i.scopeParent,
					a = s ? i.scopeParent : i,
					c = To(a, s),
					u = s ? e(i.candidates) : a;
				c === 0
					? s
						? n.push.apply(n, u)
						: n.push(a)
					: r.push({ documentOrder: o, tabIndex: c, item: i, isScope: s, content: u });
			}),
			r
				.sort(Fo)
				.reduce(function (i, o) {
					return o.isScope ? i.push.apply(i, o.content) : i.push(o.content), i;
				}, [])
				.concat(n)
		);
	},
	pc = function (t, n) {
		n = n || {};
		var r;
		return (
			n.getShadowRoot
				? (r = zr([t], n.includeContainer, {
						filter: Wn.bind(null, n),
						flatten: !1,
						getShadowRoot: n.getShadowRoot,
						shadowRootFilter: Wo
					}))
				: (r = Vr(t, n.includeContainer, Wn.bind(null, n))),
			Ho(r)
		);
	},
	yc = function (t, n) {
		n = n || {};
		var r;
		return (
			n.getShadowRoot
				? (r = zr([t], n.includeContainer, {
						filter: He.bind(null, n),
						flatten: !0,
						getShadowRoot: n.getShadowRoot
					}))
				: (r = Vr(t, n.includeContainer, He.bind(null, n))),
			r
		);
	},
	Vo = function (t, n) {
		if (((n = n || {}), !t)) throw new Error('No node provided');
		return _t.call(t, Be) === !1 ? !1 : Wn(n, t);
	},
	zo = Wr.concat('iframe').join(','),
	wc = function (t, n) {
		if (((n = n || {}), !t)) throw new Error('No node provided');
		return _t.call(t, zo) === !1 ? !1 : He(n, t);
	};
const Ko = new Nr('focusScope.autoFocusOnMount', { bubbles: !1, cancelable: !0 }),
	Uo = new Nr('focusScope.autoFocusOnDestroy', { bubbles: !1, cancelable: !0 }),
	Yo = new Dn('FocusScope');
function qo({
	id: e,
	loop: t,
	enabled: n,
	onOpenAutoFocus: r,
	onCloseAutoFocus: i,
	forceMount: o
}) {
	const s = So(),
		a = Ao(),
		c = A(null),
		u = Yo.getOr({ ignoreCloseAutoFocus: !1 });
	let g = null;
	st({ id: e, ref: c, deps: () => n.current });
	function f(v) {
		if (!(a.paused || !c.current || a.isHandlingFocus)) {
			a.isHandlingFocus = !0;
			try {
				const S = v.target;
				if (!Le(S)) return;
				const w = c.current.contains(S);
				if (v.type === 'focusin')
					if (w) g = S;
					else {
						if (u.ignoreCloseAutoFocus) return;
						Et(g, { select: !0 });
					}
				else v.type === 'focusout' && !w && !u.ignoreCloseAutoFocus && Et(g, { select: !0 });
			} finally {
				a.isHandlingFocus = !1;
			}
		}
	}
	function h(v) {
		var w;
		!((w = c.current) == null ? void 0 : w.contains(g)) && c.current && Et(c.current);
	}
	J([() => c.current, () => n.current], ([v, S]) => {
		if (!v || !S) return;
		const w = kt(Q(document, 'focusin', f), Q(document, 'focusout', f)),
			E = new MutationObserver(h);
		return (
			E.observe(v, { childList: !0, subtree: !0 }),
			() => {
				w(), E.disconnect();
			}
		);
	}),
		J([() => o.current, () => c.current], ([v, S]) => {
			if (v) return;
			const w = document.activeElement;
			return (
				m(S, w),
				() => {
					S && p(w);
				}
			);
		}),
		J([() => o.current, () => c.current, () => n.current], ([v, S]) => {
			if (!v) return;
			const w = document.activeElement;
			return (
				m(S, w),
				() => {
					S && p(w);
				}
			);
		});
	function m(v, S) {
		if ((v || (v = document.getElementById(e.current)), !v || !n.current)) return;
		if ((s.add(a), !v.contains(S))) {
			const E = Ko.createEvent();
			r.current(E),
				E.defaultPrevented ||
					In(() => {
						v && (Eo(Oo(Mr(v)), { select: !0 }), document.activeElement === S && Et(v));
					});
		}
	}
	function p(v) {
		const S = Uo.createEvent();
		i.current(S);
		const w = u.ignoreCloseAutoFocus;
		jn(0, () => {
			!S.defaultPrevented && v && !w && Et(Vo(v) ? v : document.body, { select: !0 }), s.remove(a);
		});
	}
	function b(v) {
		if (!n.current || (!t.current && !n.current) || a.paused) return;
		const S = v.key === qi && !v.ctrlKey && !v.altKey && !v.metaKey,
			w = document.activeElement;
		if (!(S && w)) return;
		const E = c.current;
		if (!E) return;
		const [P, D] = Po(E);
		P && D
			? !v.shiftKey && w === D
				? (v.preventDefault(), t.current && Et(P, { select: !0 }))
				: v.shiftKey && w === P && (v.preventDefault(), t.current && Et(D, { select: !0 }))
			: w === E && v.preventDefault();
	}
	const O = C(() => ({ id: e.current, tabindex: -1, onkeydown: b }));
	return {
		get props() {
			return d(O);
		}
	};
}
function qr(e, t) {
	U(t, !0);
	let n = x(t, 'trapFocus', 3, !1),
		r = x(t, 'loop', 3, !1),
		i = x(t, 'onCloseAutoFocus', 3, K),
		o = x(t, 'onOpenAutoFocus', 3, K),
		s = x(t, 'forceMount', 3, !1);
	const a = qo({
		enabled: A.with(() => n()),
		loop: A.with(() => r()),
		onCloseAutoFocus: A.with(() => i()),
		onOpenAutoFocus: A.with(() => o()),
		id: A.with(() => t.id),
		forceMount: A.with(() => s())
	});
	var c = L(),
		u = k(c);
	B(
		u,
		() => t.focusScope ?? X,
		() => ({ props: a.props })
	),
		N(e, c),
		Y();
}
globalThis.bitsTextSelectionLayers ?? (globalThis.bitsTextSelectionLayers = new Map());
var Xt, we, hn, Xr, gn, be;
class Xo {
	constructor(t) {
		y(this, hn);
		I(this, 'opts');
		y(this, Xt, K);
		y(this, we, A(null));
		y(this, gn, (t) => {
			const n = l(this, we).current,
				r = t.target;
			!Le(n) ||
				!Le(r) ||
				!this.opts.enabled.current ||
				!Zo(this) ||
				!Jn(n, r) ||
				(this.opts.onPointerDown.current(t), !t.defaultPrevented && Z(this, Xt, Go(n)));
		});
		y(this, be, () => {
			l(this, Xt).call(this), Z(this, Xt, K);
		});
		(this.opts = t), st({ id: t.id, ref: l(this, we), deps: () => this.opts.enabled.current });
		let n = K;
		J(
			() => this.opts.enabled.current,
			(r) => (
				r &&
					(globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled),
					n(),
					(n = Nt(this, hn, Xr).call(this))),
				() => {
					n(), l(this, be).call(this), globalThis.bitsTextSelectionLayers.delete(this);
				}
			)
		);
	}
}
(Xt = new WeakMap()),
	(we = new WeakMap()),
	(hn = new WeakSet()),
	(Xr = function () {
		return kt(
			Q(document, 'pointerdown', l(this, gn)),
			Q(document, 'pointerup', Ci(l(this, be), this.opts.onPointerUp.current))
		);
	}),
	(gn = new WeakMap()),
	(be = new WeakMap());
function jo(e) {
	return new Xo(e);
}
const yr = (e) => e.style.userSelect || e.style.webkitUserSelect;
function Go(e) {
	const t = document.body,
		n = yr(t),
		r = yr(e);
	return (
		Ne(t, 'none'),
		Ne(e, 'text'),
		() => {
			Ne(t, n), Ne(e, r);
		}
	);
}
function Ne(e, t) {
	(e.style.userSelect = t), (e.style.webkitUserSelect = t);
}
function Zo(e) {
	const t = [...globalThis.bitsTextSelectionLayers];
	if (!t.length) return !1;
	const n = t.at(-1);
	return n ? n[0] === e : !1;
}
function jr(e, t) {
	U(t, !0);
	let n = x(t, 'preventOverflowTextSelection', 3, !0),
		r = x(t, 'onPointerDown', 3, K),
		i = x(t, 'onPointerUp', 3, K);
	jo({
		id: A.with(() => t.id),
		preventOverflowTextSelection: A.with(() => n()),
		onPointerDown: A.with(() => r()),
		onPointerUp: A.with(() => i()),
		enabled: A.with(() => t.enabled)
	});
	var o = L(),
		s = k(o);
	B(s, () => t.children ?? X), N(e, o), Y();
}
function Jo(e) {
	let t = 0,
		n = R(void 0),
		r;
	function i() {
		(t -= 1), r && t <= 0 && (r(), T(n, void 0), (r = void 0));
	}
	return (...o) => (
		(t += 1),
		d(n) === void 0 &&
			(r = Ai(() => {
				T(n, F(e(...o)));
			})),
		q(() => () => {
			i();
		}),
		d(n)
	);
}
const Qo = Jo(() => {
	const e = new Mn(),
		t = C(() => {
			for (const o of e.values()) if (o) return !0;
			return !1;
		});
	let n = R(null),
		r = null;
	function i() {
		Gn &&
			(document.body.setAttribute('style', d(n) ?? ''),
			document.body.style.removeProperty('--scrollbar-width'),
			fr && (r == null || r()));
	}
	return (
		q(() => {
			const o = d(t);
			return Pr(() => {
				if (!o) return;
				T(n, F(document.body.getAttribute('style')));
				const s = getComputedStyle(document.body),
					a = window.innerWidth - document.documentElement.clientWidth,
					u = {
						padding: Number.parseInt(s.paddingRight ?? '0', 10) + a,
						margin: Number.parseInt(s.marginRight ?? '0', 10)
					};
				a > 0 &&
					((document.body.style.paddingRight = `${u.padding}px`),
					(document.body.style.marginRight = `${u.margin}px`),
					document.body.style.setProperty('--scrollbar-width', `${a}px`),
					(document.body.style.overflow = 'hidden')),
					fr &&
						(r = Ir(
							document,
							'touchmove',
							(g) => {
								g.target === document.documentElement &&
									(g.touches.length > 1 || g.preventDefault());
							},
							{ passive: !1 }
						)),
					In(() => {
						(document.body.style.pointerEvents = 'none'), (document.body.style.overflow = 'hidden');
					});
			});
		}),
		q(() => () => {
			r == null || r();
		}),
		{
			get map() {
				return e;
			},
			resetBodyStyle: i
		}
	);
});
function $o(e, t = () => null) {
	const n = Bt(),
		r = Qo();
	if (!r) return;
	const i = C(t);
	r.map.set(n, e ?? !1);
	const o = A.with(
		() => r.map.get(n) ?? !1,
		(s) => r.map.set(n, s)
	);
	return (
		q(() => () => {
			r.map.delete(n),
				!ts(r.map) &&
					(d(i) === null
						? requestAnimationFrame(() => r.resetBodyStyle())
						: jn(d(i), () => r.resetBodyStyle()));
		}),
		o
	);
}
function ts(e) {
	for (const [t, n] of e) if (n) return !0;
	return !1;
}
function Ve(e, t) {
	U(t, !0);
	let n = x(t, 'preventScroll', 3, !0),
		r = x(t, 'restoreScrollDelay', 3, null);
	$o(n(), () => r()), Y();
}
function es({ forceMount: e, present: t, trapFocus: n, open: r }) {
	return e ? r && n : t && n && r;
}
var ns = It('<div><!></div>');
function rs(e, t) {
	U(t, !0);
	let n = x(t, 'id', 19, Bt),
		r = x(t, 'forceMount', 3, !1),
		i = x(t, 'ref', 15, null),
		o = At(t, ['$$slots', '$$events', '$$legacy', 'id', 'forceMount', 'child', 'children', 'ref']);
	const s = co({
			id: A.with(() => n()),
			ref: A.with(
				() => i(),
				(u) => i(u)
			)
		}),
		a = C(() => wt(o, s.props)),
		c = C(() => s.root.opts.open.current || r());
	Zn(e, {
		get id() {
			return n();
		},
		get present() {
			return d(c);
		},
		presence: (g) => {
			var f = L(),
				h = k(f);
			{
				var m = (b) => {
						var O = L(),
							v = k(O),
							S = Kn(() => ({ props: wt(d(a)), ...s.snippetProps }));
						B(
							v,
							() => t.child,
							() => d(S)
						),
							N(b, O);
					},
					p = (b) => {
						var O = ns();
						let v;
						var S = Un(O);
						B(
							S,
							() => t.children ?? X,
							() => s.snippetProps
						),
							Yn(O),
							qn((w) => (v = Xn(O, v, { ...w })), [() => wt(d(a))]),
							N(b, O);
					};
				bt(h, (b) => {
					t.child ? b(m) : b(p, !1);
				});
			}
			N(g, f);
		},
		$$slots: { presence: !0 }
	}),
		Y();
}
const is = ['top', 'right', 'bottom', 'left'],
	Tt = Math.min,
	nt = Math.max,
	ze = Math.round,
	Re = Math.floor,
	ft = (e) => ({ x: e, y: e }),
	os = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
	ss = { start: 'end', end: 'start' };
function Hn(e, t, n) {
	return nt(e, Tt(t, n));
}
function xt(e, t) {
	return typeof e == 'function' ? e(t) : e;
}
function St(e) {
	return e.split('-')[0];
}
function Zt(e) {
	return e.split('-')[1];
}
function Qn(e) {
	return e === 'x' ? 'y' : 'x';
}
function $n(e) {
	return e === 'y' ? 'height' : 'width';
}
function Ft(e) {
	return ['top', 'bottom'].includes(St(e)) ? 'y' : 'x';
}
function tr(e) {
	return Qn(Ft(e));
}
function as(e, t, n) {
	n === void 0 && (n = !1);
	const r = Zt(e),
		i = tr(e),
		o = $n(i);
	let s =
		i === 'x' ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top';
	return t.reference[o] > t.floating[o] && (s = Ke(s)), [s, Ke(s)];
}
function cs(e) {
	const t = Ke(e);
	return [Vn(e), t, Vn(t)];
}
function Vn(e) {
	return e.replace(/start|end/g, (t) => ss[t]);
}
function ls(e, t, n) {
	const r = ['left', 'right'],
		i = ['right', 'left'],
		o = ['top', 'bottom'],
		s = ['bottom', 'top'];
	switch (e) {
		case 'top':
		case 'bottom':
			return n ? (t ? i : r) : t ? r : i;
		case 'left':
		case 'right':
			return t ? o : s;
		default:
			return [];
	}
}
function us(e, t, n, r) {
	const i = Zt(e);
	let o = ls(St(e), n === 'start', r);
	return i && ((o = o.map((s) => s + '-' + i)), t && (o = o.concat(o.map(Vn)))), o;
}
function Ke(e) {
	return e.replace(/left|right|bottom|top/g, (t) => os[t]);
}
function ds(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Gr(e) {
	return typeof e != 'number' ? ds(e) : { top: e, right: e, bottom: e, left: e };
}
function Ue(e) {
	const { x: t, y: n, width: r, height: i } = e;
	return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
}
function wr(e, t, n) {
	let { reference: r, floating: i } = e;
	const o = Ft(t),
		s = tr(t),
		a = $n(s),
		c = St(t),
		u = o === 'y',
		g = r.x + r.width / 2 - i.width / 2,
		f = r.y + r.height / 2 - i.height / 2,
		h = r[a] / 2 - i[a] / 2;
	let m;
	switch (c) {
		case 'top':
			m = { x: g, y: r.y - i.height };
			break;
		case 'bottom':
			m = { x: g, y: r.y + r.height };
			break;
		case 'right':
			m = { x: r.x + r.width, y: f };
			break;
		case 'left':
			m = { x: r.x - i.width, y: f };
			break;
		default:
			m = { x: r.x, y: r.y };
	}
	switch (Zt(t)) {
		case 'start':
			m[s] -= h * (n && u ? -1 : 1);
			break;
		case 'end':
			m[s] += h * (n && u ? -1 : 1);
			break;
	}
	return m;
}
const fs = async (e, t, n) => {
	const { placement: r = 'bottom', strategy: i = 'absolute', middleware: o = [], platform: s } = n,
		a = o.filter(Boolean),
		c = await (s.isRTL == null ? void 0 : s.isRTL(t));
	let u = await s.getElementRects({ reference: e, floating: t, strategy: i }),
		{ x: g, y: f } = wr(u, r, c),
		h = r,
		m = {},
		p = 0;
	for (let b = 0; b < a.length; b++) {
		const { name: O, fn: v } = a[b],
			{
				x: S,
				y: w,
				data: E,
				reset: P
			} = await v({
				x: g,
				y: f,
				initialPlacement: r,
				placement: h,
				strategy: i,
				middlewareData: m,
				rects: u,
				platform: s,
				elements: { reference: e, floating: t }
			});
		(g = S ?? g),
			(f = w ?? f),
			(m = { ...m, [O]: { ...m[O], ...E } }),
			P &&
				p <= 50 &&
				(p++,
				typeof P == 'object' &&
					(P.placement && (h = P.placement),
					P.rects &&
						(u =
							P.rects === !0
								? await s.getElementRects({ reference: e, floating: t, strategy: i })
								: P.rects),
					({ x: g, y: f } = wr(u, h, c))),
				(b = -1));
	}
	return { x: g, y: f, placement: h, strategy: i, middlewareData: m };
};
async function ne(e, t) {
	var n;
	t === void 0 && (t = {});
	const { x: r, y: i, platform: o, rects: s, elements: a, strategy: c } = e,
		{
			boundary: u = 'clippingAncestors',
			rootBoundary: g = 'viewport',
			elementContext: f = 'floating',
			altBoundary: h = !1,
			padding: m = 0
		} = xt(t, e),
		p = Gr(m),
		O = a[h ? (f === 'floating' ? 'reference' : 'floating') : f],
		v = Ue(
			await o.getClippingRect({
				element:
					(n = await (o.isElement == null ? void 0 : o.isElement(O))) == null || n
						? O
						: O.contextElement ||
							(await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating))),
				boundary: u,
				rootBoundary: g,
				strategy: c
			})
		),
		S =
			f === 'floating'
				? { x: r, y: i, width: s.floating.width, height: s.floating.height }
				: s.reference,
		w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)),
		E = (await (o.isElement == null ? void 0 : o.isElement(w)))
			? (await (o.getScale == null ? void 0 : o.getScale(w))) || { x: 1, y: 1 }
			: { x: 1, y: 1 },
		P = Ue(
			o.convertOffsetParentRelativeRectToViewportRelativeRect
				? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
						elements: a,
						rect: S,
						offsetParent: w,
						strategy: c
					})
				: S
		);
	return {
		top: (v.top - P.top + p.top) / E.y,
		bottom: (P.bottom - v.bottom + p.bottom) / E.y,
		left: (v.left - P.left + p.left) / E.x,
		right: (P.right - v.right + p.right) / E.x
	};
}
const hs = (e) => ({
		name: 'arrow',
		options: e,
		async fn(t) {
			const { x: n, y: r, placement: i, rects: o, platform: s, elements: a, middlewareData: c } = t,
				{ element: u, padding: g = 0 } = xt(e, t) || {};
			if (u == null) return {};
			const f = Gr(g),
				h = { x: n, y: r },
				m = tr(i),
				p = $n(m),
				b = await s.getDimensions(u),
				O = m === 'y',
				v = O ? 'top' : 'left',
				S = O ? 'bottom' : 'right',
				w = O ? 'clientHeight' : 'clientWidth',
				E = o.reference[p] + o.reference[m] - h[m] - o.floating[p],
				P = h[m] - o.reference[m],
				D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
			let _ = D ? D[w] : 0;
			(!_ || !(await (s.isElement == null ? void 0 : s.isElement(D)))) &&
				(_ = a.floating[w] || o.floating[p]);
			const z = E / 2 - P / 2,
				et = _ / 2 - b[p] / 2 - 1,
				M = Tt(f[v], et),
				j = Tt(f[S], et),
				G = M,
				ot = _ - b[p] - j,
				W = _ / 2 - b[p] / 2 + z,
				at = Hn(G, W, ot),
				H =
					!c.arrow &&
					Zt(i) != null &&
					W !== at &&
					o.reference[p] / 2 - (W < G ? M : j) - b[p] / 2 < 0,
				V = H ? (W < G ? W - G : W - ot) : 0;
			return {
				[m]: h[m] + V,
				data: { [m]: at, centerOffset: W - at - V, ...(H && { alignmentOffset: V }) },
				reset: H
			};
		}
	}),
	gs = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'flip',
				options: e,
				async fn(t) {
					var n, r;
					const {
							placement: i,
							middlewareData: o,
							rects: s,
							initialPlacement: a,
							platform: c,
							elements: u
						} = t,
						{
							mainAxis: g = !0,
							crossAxis: f = !0,
							fallbackPlacements: h,
							fallbackStrategy: m = 'bestFit',
							fallbackAxisSideDirection: p = 'none',
							flipAlignment: b = !0,
							...O
						} = xt(e, t);
					if ((n = o.arrow) != null && n.alignmentOffset) return {};
					const v = St(i),
						S = Ft(a),
						w = St(a) === a,
						E = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
						P = h || (w || !b ? [Ke(a)] : cs(a)),
						D = p !== 'none';
					!h && D && P.push(...us(a, b, p, E));
					const _ = [a, ...P],
						z = await ne(t, O),
						et = [];
					let M = ((r = o.flip) == null ? void 0 : r.overflows) || [];
					if ((g && et.push(z[v]), f)) {
						const W = as(i, s, E);
						et.push(z[W[0]], z[W[1]]);
					}
					if (((M = [...M, { placement: i, overflows: et }]), !et.every((W) => W <= 0))) {
						var j, G;
						const W = (((j = o.flip) == null ? void 0 : j.index) || 0) + 1,
							at = _[W];
						if (at) return { data: { index: W, overflows: M }, reset: { placement: at } };
						let H =
							(G = M.filter((V) => V.overflows[0] <= 0).sort(
								(V, $) => V.overflows[1] - $.overflows[1]
							)[0]) == null
								? void 0
								: G.placement;
						if (!H)
							switch (m) {
								case 'bestFit': {
									var ot;
									const V =
										(ot = M.filter(($) => {
											if (D) {
												const tt = Ft($.placement);
												return tt === S || tt === 'y';
											}
											return !0;
										})
											.map(($) => [
												$.placement,
												$.overflows.filter((tt) => tt > 0).reduce((tt, Wt) => tt + Wt, 0)
											])
											.sort(($, tt) => $[1] - tt[1])[0]) == null
											? void 0
											: ot[0];
									V && (H = V);
									break;
								}
								case 'initialPlacement':
									H = a;
									break;
							}
						if (i !== H) return { reset: { placement: H } };
					}
					return {};
				}
			}
		);
	};
function br(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function xr(e) {
	return is.some((t) => e[t] >= 0);
}
const ms = function (e) {
	return (
		e === void 0 && (e = {}),
		{
			name: 'hide',
			options: e,
			async fn(t) {
				const { rects: n } = t,
					{ strategy: r = 'referenceHidden', ...i } = xt(e, t);
				switch (r) {
					case 'referenceHidden': {
						const o = await ne(t, { ...i, elementContext: 'reference' }),
							s = br(o, n.reference);
						return { data: { referenceHiddenOffsets: s, referenceHidden: xr(s) } };
					}
					case 'escaped': {
						const o = await ne(t, { ...i, altBoundary: !0 }),
							s = br(o, n.floating);
						return { data: { escapedOffsets: s, escaped: xr(s) } };
					}
					default:
						return {};
				}
			}
		}
	);
};
async function vs(e, t) {
	const { placement: n, platform: r, elements: i } = e,
		o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
		s = St(n),
		a = Zt(n),
		c = Ft(n) === 'y',
		u = ['left', 'top'].includes(s) ? -1 : 1,
		g = o && c ? -1 : 1,
		f = xt(t, e);
	let {
		mainAxis: h,
		crossAxis: m,
		alignmentAxis: p
	} = typeof f == 'number'
		? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
		: { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
	return (
		a && typeof p == 'number' && (m = a === 'end' ? p * -1 : p),
		c ? { x: m * g, y: h * u } : { x: h * u, y: m * g }
	);
}
const ps = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: 'offset',
				options: e,
				async fn(t) {
					var n, r;
					const { x: i, y: o, placement: s, middlewareData: a } = t,
						c = await vs(t, e);
					return s === ((n = a.offset) == null ? void 0 : n.placement) &&
						(r = a.arrow) != null &&
						r.alignmentOffset
						? {}
						: { x: i + c.x, y: o + c.y, data: { ...c, placement: s } };
				}
			}
		);
	},
	ys = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'shift',
				options: e,
				async fn(t) {
					const { x: n, y: r, placement: i } = t,
						{
							mainAxis: o = !0,
							crossAxis: s = !1,
							limiter: a = {
								fn: (O) => {
									let { x: v, y: S } = O;
									return { x: v, y: S };
								}
							},
							...c
						} = xt(e, t),
						u = { x: n, y: r },
						g = await ne(t, c),
						f = Ft(St(i)),
						h = Qn(f);
					let m = u[h],
						p = u[f];
					if (o) {
						const O = h === 'y' ? 'top' : 'left',
							v = h === 'y' ? 'bottom' : 'right',
							S = m + g[O],
							w = m - g[v];
						m = Hn(S, m, w);
					}
					if (s) {
						const O = f === 'y' ? 'top' : 'left',
							v = f === 'y' ? 'bottom' : 'right',
							S = p + g[O],
							w = p - g[v];
						p = Hn(S, p, w);
					}
					const b = a.fn({ ...t, [h]: m, [f]: p });
					return { ...b, data: { x: b.x - n, y: b.y - r, enabled: { [h]: o, [f]: s } } };
				}
			}
		);
	},
	ws = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				options: e,
				fn(t) {
					const { x: n, y: r, placement: i, rects: o, middlewareData: s } = t,
						{ offset: a = 0, mainAxis: c = !0, crossAxis: u = !0 } = xt(e, t),
						g = { x: n, y: r },
						f = Ft(i),
						h = Qn(f);
					let m = g[h],
						p = g[f];
					const b = xt(a, t),
						O =
							typeof b == 'number'
								? { mainAxis: b, crossAxis: 0 }
								: { mainAxis: 0, crossAxis: 0, ...b };
					if (c) {
						const w = h === 'y' ? 'height' : 'width',
							E = o.reference[h] - o.floating[w] + O.mainAxis,
							P = o.reference[h] + o.reference[w] - O.mainAxis;
						m < E ? (m = E) : m > P && (m = P);
					}
					if (u) {
						var v, S;
						const w = h === 'y' ? 'width' : 'height',
							E = ['top', 'left'].includes(St(i)),
							P =
								o.reference[f] -
								o.floating[w] +
								((E && ((v = s.offset) == null ? void 0 : v[f])) || 0) +
								(E ? 0 : O.crossAxis),
							D =
								o.reference[f] +
								o.reference[w] +
								(E ? 0 : ((S = s.offset) == null ? void 0 : S[f]) || 0) -
								(E ? O.crossAxis : 0);
						p < P ? (p = P) : p > D && (p = D);
					}
					return { [h]: m, [f]: p };
				}
			}
		);
	},
	bs = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'size',
				options: e,
				async fn(t) {
					var n, r;
					const { placement: i, rects: o, platform: s, elements: a } = t,
						{ apply: c = () => {}, ...u } = xt(e, t),
						g = await ne(t, u),
						f = St(i),
						h = Zt(i),
						m = Ft(i) === 'y',
						{ width: p, height: b } = o.floating;
					let O, v;
					f === 'top' || f === 'bottom'
						? ((O = f),
							(v =
								h === ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating))) ? 'start' : 'end')
									? 'left'
									: 'right'))
						: ((v = f), (O = h === 'end' ? 'top' : 'bottom'));
					const S = b - g.top - g.bottom,
						w = p - g.left - g.right,
						E = Tt(b - g[O], S),
						P = Tt(p - g[v], w),
						D = !t.middlewareData.shift;
					let _ = E,
						z = P;
					if (
						((n = t.middlewareData.shift) != null && n.enabled.x && (z = w),
						(r = t.middlewareData.shift) != null && r.enabled.y && (_ = S),
						D && !h)
					) {
						const M = nt(g.left, 0),
							j = nt(g.right, 0),
							G = nt(g.top, 0),
							ot = nt(g.bottom, 0);
						m
							? (z = p - 2 * (M !== 0 || j !== 0 ? M + j : nt(g.left, g.right)))
							: (_ = b - 2 * (G !== 0 || ot !== 0 ? G + ot : nt(g.top, g.bottom)));
					}
					await c({ ...t, availableWidth: z, availableHeight: _ });
					const et = await s.getDimensions(a.floating);
					return p !== et.width || b !== et.height ? { reset: { rects: !0 } } : {};
				}
			}
		);
	};
function Nn() {
	return typeof window < 'u';
}
function Jt(e) {
	return Zr(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function it(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gt(e) {
	var t;
	return (t = (Zr(e) ? e.ownerDocument : e.document) || window.document) == null
		? void 0
		: t.documentElement;
}
function Zr(e) {
	return Nn() ? e instanceof Node || e instanceof it(e).Node : !1;
}
function ct(e) {
	return Nn() ? e instanceof Element || e instanceof it(e).Element : !1;
}
function ht(e) {
	return Nn() ? e instanceof HTMLElement || e instanceof it(e).HTMLElement : !1;
}
function Sr(e) {
	return !Nn() || typeof ShadowRoot > 'u'
		? !1
		: e instanceof ShadowRoot || e instanceof it(e).ShadowRoot;
}
function De(e) {
	const { overflow: t, overflowX: n, overflowY: r, display: i } = lt(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(i);
}
function xs(e) {
	return ['table', 'td', 'th'].includes(Jt(e));
}
function Rn(e) {
	return [':popover-open', ':modal'].some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
function er(e) {
	const t = nr(),
		n = ct(e) ? lt(e) : e;
	return (
		['transform', 'translate', 'scale', 'rotate', 'perspective'].some((r) =>
			n[r] ? n[r] !== 'none' : !1
		) ||
		(n.containerType ? n.containerType !== 'normal' : !1) ||
		(!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
		(!t && (n.filter ? n.filter !== 'none' : !1)) ||
		['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some((r) =>
			(n.willChange || '').includes(r)
		) ||
		['paint', 'layout', 'strict', 'content'].some((r) => (n.contain || '').includes(r))
	);
}
function Ss(e) {
	let t = Dt(e);
	for (; ht(t) && !jt(t); ) {
		if (er(t)) return t;
		if (Rn(t)) return null;
		t = Dt(t);
	}
	return null;
}
function nr() {
	return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function jt(e) {
	return ['html', 'body', '#document'].includes(Jt(e));
}
function lt(e) {
	return it(e).getComputedStyle(e);
}
function kn(e) {
	return ct(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Dt(e) {
	if (Jt(e) === 'html') return e;
	const t = e.assignedSlot || e.parentNode || (Sr(e) && e.host) || gt(e);
	return Sr(t) ? t.host : t;
}
function Jr(e) {
	const t = Dt(e);
	return jt(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : ht(t) && De(t) ? t : Jr(t);
}
function re(e, t, n) {
	var r;
	t === void 0 && (t = []), n === void 0 && (n = !0);
	const i = Jr(e),
		o = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
		s = it(i);
	if (o) {
		const a = zn(s);
		return t.concat(s, s.visualViewport || [], De(i) ? i : [], a && n ? re(a) : []);
	}
	return t.concat(i, re(i, [], n));
}
function zn(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Qr(e) {
	const t = lt(e);
	let n = parseFloat(t.width) || 0,
		r = parseFloat(t.height) || 0;
	const i = ht(e),
		o = i ? e.offsetWidth : n,
		s = i ? e.offsetHeight : r,
		a = ze(n) !== o || ze(r) !== s;
	return a && ((n = o), (r = s)), { width: n, height: r, $: a };
}
function rr(e) {
	return ct(e) ? e : e.contextElement;
}
function Vt(e) {
	const t = rr(e);
	if (!ht(t)) return ft(1);
	const n = t.getBoundingClientRect(),
		{ width: r, height: i, $: o } = Qr(t);
	let s = (o ? ze(n.width) : n.width) / r,
		a = (o ? ze(n.height) : n.height) / i;
	return (
		(!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: s, y: a }
	);
}
const As = ft(0);
function $r(e) {
	const t = it(e);
	return !nr() || !t.visualViewport
		? As
		: { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Os(e, t, n) {
	return t === void 0 && (t = !1), !n || (t && n !== it(e)) ? !1 : t;
}
function Lt(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	const i = e.getBoundingClientRect(),
		o = rr(e);
	let s = ft(1);
	t && (r ? ct(r) && (s = Vt(r)) : (s = Vt(e)));
	const a = Os(o, n, r) ? $r(o) : ft(0);
	let c = (i.left + a.x) / s.x,
		u = (i.top + a.y) / s.y,
		g = i.width / s.x,
		f = i.height / s.y;
	if (o) {
		const h = it(o),
			m = r && ct(r) ? it(r) : r;
		let p = h,
			b = zn(p);
		for (; b && r && m !== p; ) {
			const O = Vt(b),
				v = b.getBoundingClientRect(),
				S = lt(b),
				w = v.left + (b.clientLeft + parseFloat(S.paddingLeft)) * O.x,
				E = v.top + (b.clientTop + parseFloat(S.paddingTop)) * O.y;
			(c *= O.x), (u *= O.y), (g *= O.x), (f *= O.y), (c += w), (u += E), (p = it(b)), (b = zn(p));
		}
	}
	return Ue({ width: g, height: f, x: c, y: u });
}
function ir(e, t) {
	const n = kn(e).scrollLeft;
	return t ? t.left + n : Lt(gt(e)).left + n;
}
function ti(e, t, n) {
	n === void 0 && (n = !1);
	const r = e.getBoundingClientRect(),
		i = r.left + t.scrollLeft - (n ? 0 : ir(e, r)),
		o = r.top + t.scrollTop;
	return { x: i, y: o };
}
function Es(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
	const o = i === 'fixed',
		s = gt(r),
		a = t ? Rn(t.floating) : !1;
	if (r === s || (a && o)) return n;
	let c = { scrollLeft: 0, scrollTop: 0 },
		u = ft(1);
	const g = ft(0),
		f = ht(r);
	if ((f || (!f && !o)) && ((Jt(r) !== 'body' || De(s)) && (c = kn(r)), ht(r))) {
		const m = Lt(r);
		(u = Vt(r)), (g.x = m.x + r.clientLeft), (g.y = m.y + r.clientTop);
	}
	const h = s && !f && !o ? ti(s, c, !0) : ft(0);
	return {
		width: n.width * u.x,
		height: n.height * u.y,
		x: n.x * u.x - c.scrollLeft * u.x + g.x + h.x,
		y: n.y * u.y - c.scrollTop * u.y + g.y + h.y
	};
}
function Ps(e) {
	return Array.from(e.getClientRects());
}
function Cs(e) {
	const t = gt(e),
		n = kn(e),
		r = e.ownerDocument.body,
		i = nt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
		o = nt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
	let s = -n.scrollLeft + ir(e);
	const a = -n.scrollTop;
	return (
		lt(r).direction === 'rtl' && (s += nt(t.clientWidth, r.clientWidth) - i),
		{ width: i, height: o, x: s, y: a }
	);
}
function Ts(e, t) {
	const n = it(e),
		r = gt(e),
		i = n.visualViewport;
	let o = r.clientWidth,
		s = r.clientHeight,
		a = 0,
		c = 0;
	if (i) {
		(o = i.width), (s = i.height);
		const u = nr();
		(!u || (u && t === 'fixed')) && ((a = i.offsetLeft), (c = i.offsetTop));
	}
	return { width: o, height: s, x: a, y: c };
}
function Fs(e, t) {
	const n = Lt(e, !0, t === 'fixed'),
		r = n.top + e.clientTop,
		i = n.left + e.clientLeft,
		o = ht(e) ? Vt(e) : ft(1),
		s = e.clientWidth * o.x,
		a = e.clientHeight * o.y,
		c = i * o.x,
		u = r * o.y;
	return { width: s, height: a, x: c, y: u };
}
function Ar(e, t, n) {
	let r;
	if (t === 'viewport') r = Ts(e, n);
	else if (t === 'document') r = Cs(gt(e));
	else if (ct(t)) r = Fs(t, n);
	else {
		const i = $r(e);
		r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
	}
	return Ue(r);
}
function ei(e, t) {
	const n = Dt(e);
	return n === t || !ct(n) || jt(n) ? !1 : lt(n).position === 'fixed' || ei(n, t);
}
function Ds(e, t) {
	const n = t.get(e);
	if (n) return n;
	let r = re(e, [], !1).filter((a) => ct(a) && Jt(a) !== 'body'),
		i = null;
	const o = lt(e).position === 'fixed';
	let s = o ? Dt(e) : e;
	for (; ct(s) && !jt(s); ) {
		const a = lt(s),
			c = er(s);
		!c && a.position === 'fixed' && (i = null),
			(
				o
					? !c && !i
					: (!c && a.position === 'static' && !!i && ['absolute', 'fixed'].includes(i.position)) ||
						(De(s) && !c && ei(e, s))
			)
				? (r = r.filter((g) => g !== s))
				: (i = a),
			(s = Dt(s));
	}
	return t.set(e, r), r;
}
function Is(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
	const s = [...(n === 'clippingAncestors' ? (Rn(t) ? [] : Ds(t, this._c)) : [].concat(n)), r],
		a = s[0],
		c = s.reduce(
			(u, g) => {
				const f = Ar(t, g, i);
				return (
					(u.top = nt(f.top, u.top)),
					(u.right = Tt(f.right, u.right)),
					(u.bottom = Tt(f.bottom, u.bottom)),
					(u.left = nt(f.left, u.left)),
					u
				);
			},
			Ar(t, a, i)
		);
	return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function Ns(e) {
	const { width: t, height: n } = Qr(e);
	return { width: t, height: n };
}
function Rs(e, t, n) {
	const r = ht(t),
		i = gt(t),
		o = n === 'fixed',
		s = Lt(e, !0, o, t);
	let a = { scrollLeft: 0, scrollTop: 0 };
	const c = ft(0);
	if (r || (!r && !o))
		if (((Jt(t) !== 'body' || De(i)) && (a = kn(t)), r)) {
			const h = Lt(t, !0, o, t);
			(c.x = h.x + t.clientLeft), (c.y = h.y + t.clientTop);
		} else i && (c.x = ir(i));
	const u = i && !r && !o ? ti(i, a) : ft(0),
		g = s.left + a.scrollLeft - c.x - u.x,
		f = s.top + a.scrollTop - c.y - u.y;
	return { x: g, y: f, width: s.width, height: s.height };
}
function Bn(e) {
	return lt(e).position === 'static';
}
function Or(e, t) {
	if (!ht(e) || lt(e).position === 'fixed') return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return gt(e) === n && (n = n.ownerDocument.body), n;
}
function ni(e, t) {
	const n = it(e);
	if (Rn(e)) return n;
	if (!ht(e)) {
		let i = Dt(e);
		for (; i && !jt(i); ) {
			if (ct(i) && !Bn(i)) return i;
			i = Dt(i);
		}
		return n;
	}
	let r = Or(e, t);
	for (; r && xs(r) && Bn(r); ) r = Or(r, t);
	return r && jt(r) && Bn(r) && !er(r) ? n : r || Ss(e) || n;
}
const ks = async function (e) {
	const t = this.getOffsetParent || ni,
		n = this.getDimensions,
		r = await n(e.floating);
	return {
		reference: Rs(e.reference, await t(e.floating), e.strategy),
		floating: { x: 0, y: 0, width: r.width, height: r.height }
	};
};
function _s(e) {
	return lt(e).direction === 'rtl';
}
const Ls = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Es,
	getDocumentElement: gt,
	getClippingRect: Is,
	getOffsetParent: ni,
	getElementRects: ks,
	getClientRects: Ps,
	getDimensions: Ns,
	getScale: Vt,
	isElement: ct,
	isRTL: _s
};
function ri(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Bs(e, t) {
	let n = null,
		r;
	const i = gt(e);
	function o() {
		var a;
		clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
	}
	function s(a, c) {
		a === void 0 && (a = !1), c === void 0 && (c = 1), o();
		const u = e.getBoundingClientRect(),
			{ left: g, top: f, width: h, height: m } = u;
		if ((a || t(), !h || !m)) return;
		const p = Re(f),
			b = Re(i.clientWidth - (g + h)),
			O = Re(i.clientHeight - (f + m)),
			v = Re(g),
			w = {
				rootMargin: -p + 'px ' + -b + 'px ' + -O + 'px ' + -v + 'px',
				threshold: nt(0, Tt(1, c)) || 1
			};
		let E = !0;
		function P(D) {
			const _ = D[0].intersectionRatio;
			if (_ !== c) {
				if (!E) return s();
				_
					? s(!1, _)
					: (r = setTimeout(() => {
							s(!1, 1e-7);
						}, 1e3));
			}
			_ === 1 && !ri(u, e.getBoundingClientRect()) && s(), (E = !1);
		}
		try {
			n = new IntersectionObserver(P, { ...w, root: i.ownerDocument });
		} catch {
			n = new IntersectionObserver(P, w);
		}
		n.observe(e);
	}
	return s(!0), o;
}
function Ms(e, t, n, r) {
	r === void 0 && (r = {});
	const {
			ancestorScroll: i = !0,
			ancestorResize: o = !0,
			elementResize: s = typeof ResizeObserver == 'function',
			layoutShift: a = typeof IntersectionObserver == 'function',
			animationFrame: c = !1
		} = r,
		u = rr(e),
		g = i || o ? [...(u ? re(u) : []), ...re(t)] : [];
	g.forEach((v) => {
		i && v.addEventListener('scroll', n, { passive: !0 }), o && v.addEventListener('resize', n);
	});
	const f = u && a ? Bs(u, n) : null;
	let h = -1,
		m = null;
	s &&
		((m = new ResizeObserver((v) => {
			let [S] = v;
			S &&
				S.target === u &&
				m &&
				(m.unobserve(t),
				cancelAnimationFrame(h),
				(h = requestAnimationFrame(() => {
					var w;
					(w = m) == null || w.observe(t);
				}))),
				n();
		})),
		u && !c && m.observe(u),
		m.observe(t));
	let p,
		b = c ? Lt(e) : null;
	c && O();
	function O() {
		const v = Lt(e);
		b && !ri(b, v) && n(), (b = v), (p = requestAnimationFrame(O));
	}
	return (
		n(),
		() => {
			var v;
			g.forEach((S) => {
				i && S.removeEventListener('scroll', n), o && S.removeEventListener('resize', n);
			}),
				f == null || f(),
				(v = m) == null || v.disconnect(),
				(m = null),
				c && cancelAnimationFrame(p);
		}
	);
}
const Ws = ps,
	Hs = ys,
	Vs = gs,
	zs = bs,
	Ks = ms,
	Us = hs,
	Ys = ws,
	qs = (e, t, n) => {
		const r = new Map(),
			i = { platform: Ls, ...n },
			o = { ...i.platform, _c: r };
		return fs(e, t, { ...i, platform: o });
	};
function te(e) {
	return typeof e == 'function' ? e() : e;
}
function ii(e) {
	return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Er(e, t) {
	const n = ii(e);
	return Math.round(t * n) / n;
}
function bc(e) {
	return {
		[`--bits-${e}-content-transform-origin`]: 'var(--bits-floating-transform-origin)',
		[`--bits-${e}-content-available-width`]: 'var(--bits-floating-available-width)',
		[`--bits-${e}-content-available-height`]: 'var(--bits-floating-available-height)',
		[`--bits-${e}-anchor-width`]: 'var(--bits-floating-anchor-width)',
		[`--bits-${e}-anchor-height`]: 'var(--bits-floating-anchor-height)'
	};
}
function Xs(e) {
	const t = e.whileElementsMounted,
		n = C(() => te(e.open) ?? !0),
		r = C(() => te(e.middleware)),
		i = C(() => te(e.transform) ?? !0),
		o = C(() => te(e.placement) ?? 'bottom'),
		s = C(() => te(e.strategy) ?? 'absolute'),
		a = e.reference;
	let c = R(0),
		u = R(0);
	const g = A(null);
	let f = R(F(d(s))),
		h = R(F(d(o))),
		m = R(F({})),
		p = R(!1);
	const b = C(() => {
		const P = { position: d(f), left: '0', top: '0' };
		if (!g.current) return P;
		const D = Er(g.current, d(c)),
			_ = Er(g.current, d(u));
		return d(i)
			? {
					...P,
					transform: `translate(${D}px, ${_}px)`,
					...(ii(g.current) >= 1.5 && { willChange: 'transform' })
				}
			: { position: d(f), left: `${D}px`, top: `${_}px` };
	});
	let O;
	function v() {
		a.current === null ||
			g.current === null ||
			qs(a.current, g.current, { middleware: d(r), placement: d(o), strategy: d(s) }).then((P) => {
				T(c, F(P.x)),
					T(u, F(P.y)),
					T(f, F(P.strategy)),
					T(h, F(P.placement)),
					T(m, F(P.middlewareData)),
					T(p, !0);
			});
	}
	function S() {
		typeof O == 'function' && (O(), (O = void 0));
	}
	function w() {
		if ((S(), t === void 0)) {
			v();
			return;
		}
		a.current === null || g.current === null || (O = t(a.current, g.current, v));
	}
	function E() {
		d(n) || T(p, !1);
	}
	return (
		q(v),
		q(w),
		q(E),
		q(() => S),
		{
			floating: g,
			reference: a,
			get strategy() {
				return d(f);
			},
			get placement() {
				return d(h);
			},
			get middlewareData() {
				return d(m);
			},
			get isPositioned() {
				return d(p);
			},
			get floatingStyles() {
				return d(b);
			},
			get update() {
				return v;
			}
		}
	);
}
const js = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' };
class Gs {
	constructor() {
		I(this, 'anchorNode', A(null));
		I(this, 'customAnchorNode', A(null));
		I(this, 'triggerNode', A(null));
		q(() => {
			this.customAnchorNode.current
				? typeof this.customAnchorNode.current == 'string'
					? (this.anchorNode.current = document.querySelector(this.customAnchorNode.current))
					: (this.anchorNode.current = this.customAnchorNode.current)
				: (this.anchorNode.current = this.triggerNode.current);
		});
	}
}
var xe, mn, Se, vn, Ae, pn, Oe, yn, wn, Ee, Pe, Ce, Te, bn, xn, Sn, An, On, En, Fe, Pn, Cn, Tn, Fn;
class Zs {
	constructor(t, n) {
		I(this, 'opts');
		I(this, 'root');
		I(this, 'contentRef', A(null));
		I(this, 'wrapperRef', A(null));
		I(this, 'arrowRef', A(null));
		I(this, 'arrowId', A(Bt()));
		y(
			this,
			xe,
			C(() => {
				if (typeof this.opts.style == 'string') return Ti(this.opts.style);
				if (!this.opts.style) return {};
			})
		);
		y(this, mn);
		y(this, Se, new Vi(() => this.arrowRef.current ?? void 0));
		y(
			this,
			vn,
			C(() => {
				var t;
				return ((t = l(this, Se)) == null ? void 0 : t.width) ?? 0;
			})
		);
		y(
			this,
			Ae,
			C(() => {
				var t;
				return ((t = l(this, Se)) == null ? void 0 : t.height) ?? 0;
			})
		);
		y(
			this,
			pn,
			C(() => {
				var t;
				return (
					((t = this.opts.side) == null ? void 0 : t.current) +
					(this.opts.align.current !== 'center' ? `-${this.opts.align.current}` : '')
				);
			})
		);
		y(
			this,
			Oe,
			C(() =>
				Array.isArray(this.opts.collisionBoundary.current)
					? this.opts.collisionBoundary.current
					: [this.opts.collisionBoundary.current]
			)
		);
		y(
			this,
			yn,
			C(() => d(l(this, Oe)).length > 0)
		);
		y(
			this,
			wn,
			C(() => ({
				padding: this.opts.collisionPadding.current,
				boundary: d(l(this, Oe)).filter(ji),
				altBoundary: this.hasExplicitBoundaries
			}))
		);
		y(this, Ee, R(void 0));
		y(this, Pe, R(void 0));
		y(this, Ce, R(void 0));
		y(this, Te, R(void 0));
		y(
			this,
			bn,
			C(() =>
				[
					Ws({
						mainAxis: this.opts.sideOffset.current + d(l(this, Ae)),
						alignmentAxis: this.opts.alignOffset.current
					}),
					this.opts.avoidCollisions.current &&
						Hs({
							mainAxis: !0,
							crossAxis: !1,
							limiter: this.opts.sticky.current === 'partial' ? Ys() : void 0,
							...this.detectOverflowOptions
						}),
					this.opts.avoidCollisions.current && Vs({ ...this.detectOverflowOptions }),
					zs({
						...this.detectOverflowOptions,
						apply: ({ rects: t, availableWidth: n, availableHeight: r }) => {
							const { width: i, height: o } = t.reference;
							T(l(this, Ee), F(n)),
								T(l(this, Pe), F(r)),
								T(l(this, Ce), F(i)),
								T(l(this, Te), F(o));
						}
					}),
					this.arrowRef.current &&
						Us({ element: this.arrowRef.current, padding: this.opts.arrowPadding.current }),
					na({ arrowWidth: d(l(this, vn)), arrowHeight: d(l(this, Ae)) }),
					this.opts.hideWhenDetached.current &&
						Ks({ strategy: 'referenceHidden', ...this.detectOverflowOptions })
				].filter(Boolean)
			)
		);
		I(this, 'floating');
		y(
			this,
			xn,
			C(() => ra(this.floating.placement))
		);
		y(
			this,
			Sn,
			C(() => ia(this.floating.placement))
		);
		y(
			this,
			An,
			C(() => {
				var t;
				return ((t = this.floating.middlewareData.arrow) == null ? void 0 : t.x) ?? 0;
			})
		);
		y(
			this,
			On,
			C(() => {
				var t;
				return ((t = this.floating.middlewareData.arrow) == null ? void 0 : t.y) ?? 0;
			})
		);
		y(
			this,
			En,
			C(() => {
				var t;
				return ((t = this.floating.middlewareData.arrow) == null ? void 0 : t.centerOffset) !== 0;
			})
		);
		y(this, Fe, R());
		y(
			this,
			Pn,
			C(() => js[this.placedSide])
		);
		y(
			this,
			Cn,
			C(() => {
				var t, n, r;
				return {
					id: this.opts.wrapperId.current,
					'data-bits-floating-content-wrapper': '',
					style: {
						...this.floating.floatingStyles,
						transform: this.floating.isPositioned
							? this.floating.floatingStyles.transform
							: 'translate(0, -200%)',
						minWidth: 'max-content',
						zIndex: this.contentZIndex,
						'--bits-floating-transform-origin': `${(t = this.floating.middlewareData.transformOrigin) == null ? void 0 : t.x} ${(n = this.floating.middlewareData.transformOrigin) == null ? void 0 : n.y}`,
						'--bits-floating-available-width': `${d(l(this, Ee))}px`,
						'--bits-floating-available-height': `${d(l(this, Pe))}px`,
						'--bits-floating-anchor-width': `${d(l(this, Ce))}px`,
						'--bits-floating-anchor-height': `${d(l(this, Te))}px`,
						...(((r = this.floating.middlewareData.hide) == null ? void 0 : r.referenceHidden) && {
							visibility: 'hidden',
							'pointer-events': 'none'
						}),
						...d(l(this, xe))
					},
					dir: this.opts.dir.current
				};
			})
		);
		y(
			this,
			Tn,
			C(() => ({
				'data-side': this.placedSide,
				'data-align': this.placedAlign,
				style: Fi({ ...d(l(this, xe)) })
			}))
		);
		y(
			this,
			Fn,
			C(() => ({
				position: 'absolute',
				left: this.arrowX ? `${this.arrowX}px` : void 0,
				top: this.arrowY ? `${this.arrowY}px` : void 0,
				[this.arrowBaseSide]: 0,
				'transform-origin': { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[
					this.placedSide
				],
				transform: {
					top: 'translateY(100%)',
					right: 'translateY(50%) rotate(90deg) translateX(-50%)',
					bottom: 'rotate(180deg)',
					left: 'translateY(50%) rotate(-90deg) translateX(50%)'
				}[this.placedSide],
				visibility: this.cannotCenterArrow ? 'hidden' : void 0
			}))
		);
		(this.opts = t),
			(this.root = n),
			t.customAnchor && (this.root.customAnchorNode.current = t.customAnchor.current),
			J(
				() => t.customAnchor.current,
				(r) => {
					this.root.customAnchorNode.current = r;
				}
			),
			st({ id: this.opts.wrapperId, ref: this.wrapperRef, deps: () => this.opts.enabled.current }),
			st({ id: this.opts.id, ref: this.contentRef, deps: () => this.opts.enabled.current }),
			(this.floating = Xs({
				strategy: () => this.opts.strategy.current,
				placement: () => d(l(this, pn)),
				middleware: () => this.middleware,
				reference: this.root.anchorNode,
				whileElementsMounted: (...r) => {
					var o;
					return Ms(...r, {
						animationFrame: ((o = l(this, mn)) == null ? void 0 : o.current) === 'always'
					});
				},
				open: () => this.opts.enabled.current
			})),
			q(() => {
				var r;
				this.floating.isPositioned && ((r = this.opts.onPlaced) == null || r.current());
			}),
			J(
				() => this.contentRef.current,
				(r) => {
					r && (this.contentZIndex = window.getComputedStyle(r).zIndex);
				}
			),
			q(() => {
				this.floating.floating.current = this.wrapperRef.current;
			});
	}
	get hasExplicitBoundaries() {
		return d(l(this, yn));
	}
	get detectOverflowOptions() {
		return d(l(this, wn));
	}
	get middleware() {
		return d(l(this, bn));
	}
	get placedSide() {
		return d(l(this, xn));
	}
	get placedAlign() {
		return d(l(this, Sn));
	}
	get arrowX() {
		return d(l(this, An));
	}
	get arrowY() {
		return d(l(this, On));
	}
	get cannotCenterArrow() {
		return d(l(this, En));
	}
	get contentZIndex() {
		return d(l(this, Fe));
	}
	set contentZIndex(t) {
		T(l(this, Fe), F(t));
	}
	get arrowBaseSide() {
		return d(l(this, Pn));
	}
	get wrapperProps() {
		return d(l(this, Cn));
	}
	get props() {
		return d(l(this, Tn));
	}
	get arrowStyle() {
		return d(l(this, Fn));
	}
}
(xe = new WeakMap()),
	(mn = new WeakMap()),
	(Se = new WeakMap()),
	(vn = new WeakMap()),
	(Ae = new WeakMap()),
	(pn = new WeakMap()),
	(Oe = new WeakMap()),
	(yn = new WeakMap()),
	(wn = new WeakMap()),
	(Ee = new WeakMap()),
	(Pe = new WeakMap()),
	(Ce = new WeakMap()),
	(Te = new WeakMap()),
	(bn = new WeakMap()),
	(xn = new WeakMap()),
	(Sn = new WeakMap()),
	(An = new WeakMap()),
	(On = new WeakMap()),
	(En = new WeakMap()),
	(Fe = new WeakMap()),
	(Pn = new WeakMap()),
	(Cn = new WeakMap()),
	(Tn = new WeakMap()),
	(Fn = new WeakMap());
class Js {
	constructor(t, n) {
		I(this, 'opts');
		I(this, 'root');
		I(this, 'ref', A(null));
		(this.opts = t),
			(this.root = n),
			t.virtualEl && t.virtualEl.current
				? (n.triggerNode = A.from(t.virtualEl.current))
				: st({
						id: t.id,
						ref: this.ref,
						onRefChange: (r) => {
							n.triggerNode.current = r;
						}
					});
	}
}
const or = new Dn('Floating.Root'),
	Qs = new Dn('Floating.Content');
function $s() {
	return or.set(new Gs());
}
function ta(e) {
	return Qs.set(new Zs(e, or.get()));
}
function ea(e) {
	return new Js(e, or.get());
}
function na(e) {
	return {
		name: 'transformOrigin',
		options: e,
		fn(t) {
			var O, v, S;
			const { placement: n, rects: r, middlewareData: i } = t,
				s = ((O = i.arrow) == null ? void 0 : O.centerOffset) !== 0,
				a = s ? 0 : e.arrowWidth,
				c = s ? 0 : e.arrowHeight,
				[u, g] = sr(n),
				f = { start: '0%', center: '50%', end: '100%' }[g],
				h = (((v = i.arrow) == null ? void 0 : v.x) ?? 0) + a / 2,
				m = (((S = i.arrow) == null ? void 0 : S.y) ?? 0) + c / 2;
			let p = '',
				b = '';
			return (
				u === 'bottom'
					? ((p = s ? f : `${h}px`), (b = `${-c}px`))
					: u === 'top'
						? ((p = s ? f : `${h}px`), (b = `${r.floating.height + c}px`))
						: u === 'right'
							? ((p = `${-c}px`), (b = s ? f : `${m}px`))
							: u === 'left' && ((p = `${r.floating.width + c}px`), (b = s ? f : `${m}px`)),
				{ data: { x: p, y: b } }
			);
		}
	};
}
function sr(e) {
	const [t, n = 'center'] = e.split('-');
	return [t, n];
}
function ra(e) {
	return sr(e)[0];
}
function ia(e) {
	return sr(e)[1];
}
function xc(e, t) {
	U(t, !0), $s();
	var n = L(),
		r = k(n);
	B(r, () => t.children ?? X), N(e, n), Y();
}
function oa(e, t = 1e4, n = K) {
	let r = null,
		i = R(F(e));
	function o() {
		return window.setTimeout(() => {
			T(i, F(e)), n(e);
		}, t);
	}
	return (
		q(() => () => {
			r && clearTimeout(r);
		}),
		A.with(
			() => d(i),
			(s) => {
				T(i, F(s)), n(s), r && clearTimeout(r), (r = o());
			}
		)
	);
}
function Sc(e, t) {
	U(t, !0), ea({ id: A.with(() => t.id), virtualEl: A.with(() => t.virtualEl) });
	var n = L(),
		r = k(n);
	B(r, () => t.children ?? X), N(e, n), Y();
}
function sa(e, t) {
	U(t, !0);
	let n = x(t, 'side', 3, 'bottom'),
		r = x(t, 'sideOffset', 3, 0),
		i = x(t, 'align', 3, 'center'),
		o = x(t, 'alignOffset', 3, 0),
		s = x(t, 'arrowPadding', 3, 0),
		a = x(t, 'avoidCollisions', 3, !0),
		c = x(t, 'collisionBoundary', 19, () => []),
		u = x(t, 'collisionPadding', 3, 0),
		g = x(t, 'hideWhenDetached', 3, !1),
		f = x(t, 'onPlaced', 3, () => {}),
		h = x(t, 'sticky', 3, 'partial'),
		m = x(t, 'updatePositionStrategy', 3, 'optimized'),
		p = x(t, 'strategy', 3, 'fixed'),
		b = x(t, 'dir', 3, 'ltr'),
		O = x(t, 'style', 19, () => ({})),
		v = x(t, 'wrapperId', 19, Bt),
		S = x(t, 'customAnchor', 3, null);
	const w = ta({
			side: A.with(() => n()),
			sideOffset: A.with(() => r()),
			align: A.with(() => i()),
			alignOffset: A.with(() => o()),
			id: A.with(() => t.id),
			arrowPadding: A.with(() => s()),
			avoidCollisions: A.with(() => a()),
			collisionBoundary: A.with(() => c()),
			collisionPadding: A.with(() => u()),
			hideWhenDetached: A.with(() => g()),
			onPlaced: A.with(() => f()),
			sticky: A.with(() => h()),
			updatePositionStrategy: A.with(() => m()),
			strategy: A.with(() => p()),
			dir: A.with(() => b()),
			style: A.with(() => O()),
			enabled: A.with(() => t.enabled),
			wrapperId: A.with(() => v()),
			customAnchor: A.with(() => S())
		}),
		E = C(() => wt(w.wrapperProps, { style: { pointerEvents: 'auto' } }));
	var P = L(),
		D = k(P);
	B(
		D,
		() => t.content ?? X,
		() => ({ props: w.props, wrapperProps: d(E) })
	),
		N(e, P),
		Y();
}
function aa(e, t) {
	U(t, !0),
		Ii(() => {
			var i;
			(i = t.onPlaced) == null || i.call(t);
		});
	var n = L(),
		r = k(n);
	B(
		r,
		() => t.content ?? X,
		() => ({ props: {}, wrapperProps: {} })
	),
		N(e, n),
		Y();
}
function ca(e, t) {
	let n = x(t, 'isStatic', 3, !1),
		r = At(t, ['$$slots', '$$events', '$$legacy', 'content', 'isStatic', 'onPlaced']);
	var i = L(),
		o = k(i);
	{
		var s = (c) => {
				aa(c, {
					get content() {
						return t.content;
					},
					get onPlaced() {
						return t.onPlaced;
					}
				});
			},
			a = (c) => {
				sa(
					c,
					rt(
						{
							get content() {
								return t.content;
							},
							get onPlaced() {
								return t.onPlaced;
							}
						},
						() => r
					)
				);
			};
		bt(o, (c) => {
			n() ? c(s) : c(a, !1);
		});
	}
	N(e, i);
}
var la = It('<!> <!>', 1);
function oi(e, t) {
	U(t, !0);
	let n = x(t, 'interactOutsideBehavior', 3, 'close'),
		r = x(t, 'trapFocus', 3, !0),
		i = x(t, 'isValidEvent', 3, () => !1),
		o = x(t, 'customAnchor', 3, null),
		s = x(t, 'isStatic', 3, !1),
		a = At(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'popper',
			'onEscapeKeydown',
			'escapeKeydownBehavior',
			'preventOverflowTextSelection',
			'id',
			'onPointerDown',
			'onPointerUp',
			'side',
			'sideOffset',
			'align',
			'alignOffset',
			'arrowPadding',
			'avoidCollisions',
			'collisionBoundary',
			'collisionPadding',
			'sticky',
			'hideWhenDetached',
			'updatePositionStrategy',
			'strategy',
			'dir',
			'preventScroll',
			'wrapperId',
			'style',
			'onPlaced',
			'onInteractOutside',
			'onCloseAutoFocus',
			'onOpenAutoFocus',
			'onFocusOutside',
			'interactOutsideBehavior',
			'loop',
			'trapFocus',
			'isValidEvent',
			'customAnchor',
			'isStatic',
			'enabled'
		]);
	ca(e, {
		get isStatic() {
			return s();
		},
		get id() {
			return t.id;
		},
		get side() {
			return t.side;
		},
		get sideOffset() {
			return t.sideOffset;
		},
		get align() {
			return t.align;
		},
		get alignOffset() {
			return t.alignOffset;
		},
		get arrowPadding() {
			return t.arrowPadding;
		},
		get avoidCollisions() {
			return t.avoidCollisions;
		},
		get collisionBoundary() {
			return t.collisionBoundary;
		},
		get collisionPadding() {
			return t.collisionPadding;
		},
		get sticky() {
			return t.sticky;
		},
		get hideWhenDetached() {
			return t.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return t.updatePositionStrategy;
		},
		get strategy() {
			return t.strategy;
		},
		get dir() {
			return t.dir;
		},
		get wrapperId() {
			return t.wrapperId;
		},
		get style() {
			return t.style;
		},
		get onPlaced() {
			return t.onPlaced;
		},
		get customAnchor() {
			return o();
		},
		get enabled() {
			return t.enabled;
		},
		content: (u, g) => {
			let f = () => (g == null ? void 0 : g().props),
				h = () => (g == null ? void 0 : g().wrapperProps);
			var m = la(),
				p = k(m);
			{
				var b = (w) => {
						Ve(w, {
							get preventScroll() {
								return t.preventScroll;
							}
						});
					},
					O = (w) => {
						var E = L(),
							P = k(E);
						{
							var D = (_) => {
								Ve(_, {
									get preventScroll() {
										return t.preventScroll;
									}
								});
							};
							bt(
								P,
								(_) => {
									t.forceMount || _(D);
								},
								!0
							);
						}
						N(w, E);
					};
				bt(p, (w) => {
					t.forceMount && t.enabled ? w(b) : w(O, !1);
				});
			}
			var v = ee(p, 2);
			const S = C(() => t.enabled && r());
			qr(v, {
				get id() {
					return t.id;
				},
				get onOpenAutoFocus() {
					return t.onOpenAutoFocus;
				},
				get onCloseAutoFocus() {
					return t.onCloseAutoFocus;
				},
				get loop() {
					return t.loop;
				},
				get trapFocus() {
					return d(S);
				},
				get forceMount() {
					return t.forceMount;
				},
				focusScope: (E, P) => {
					let D = () => (P == null ? void 0 : P().props);
					Br(E, {
						get onEscapeKeydown() {
							return t.onEscapeKeydown;
						},
						get escapeKeydownBehavior() {
							return t.escapeKeydownBehavior;
						},
						get enabled() {
							return t.enabled;
						},
						children: (_, z) => {
							Lr(_, {
								get id() {
									return t.id;
								},
								get onInteractOutside() {
									return t.onInteractOutside;
								},
								get onFocusOutside() {
									return t.onFocusOutside;
								},
								get interactOutsideBehavior() {
									return n();
								},
								get isValidEvent() {
									return i();
								},
								get enabled() {
									return t.enabled;
								},
								children: (M, j) => {
									let G = () => (j == null ? void 0 : j().props);
									jr(M, {
										get id() {
											return t.id;
										},
										get preventOverflowTextSelection() {
											return t.preventOverflowTextSelection;
										},
										get onPointerDown() {
											return t.onPointerDown;
										},
										get onPointerUp() {
											return t.onPointerUp;
										},
										get enabled() {
											return t.enabled;
										},
										children: (ot, W) => {
											var at = L(),
												H = k(at),
												V = Kn(() => ({
													props: wt(a, f(), G(), D(), { style: { pointerEvents: 'auto' } }),
													wrapperProps: h()
												}));
											B(
												H,
												() => t.popper ?? X,
												() => d(V)
											),
												N(ot, at);
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							});
						},
						$$slots: { default: !0 }
					});
				},
				$$slots: { focusScope: !0 }
			}),
				N(u, m);
		},
		$$slots: { content: !0 }
	}),
		Y();
}
function Ac(e, t) {
	let n = x(t, 'interactOutsideBehavior', 3, 'close'),
		r = x(t, 'trapFocus', 3, !0),
		i = x(t, 'isValidEvent', 3, () => !1),
		o = x(t, 'customAnchor', 3, null),
		s = x(t, 'isStatic', 3, !1),
		a = At(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'popper',
			'present',
			'onEscapeKeydown',
			'escapeKeydownBehavior',
			'preventOverflowTextSelection',
			'id',
			'onPointerDown',
			'onPointerUp',
			'side',
			'sideOffset',
			'align',
			'alignOffset',
			'arrowPadding',
			'avoidCollisions',
			'collisionBoundary',
			'collisionPadding',
			'sticky',
			'hideWhenDetached',
			'updatePositionStrategy',
			'strategy',
			'dir',
			'preventScroll',
			'wrapperId',
			'style',
			'onPlaced',
			'onInteractOutside',
			'onCloseAutoFocus',
			'onOpenAutoFocus',
			'onFocusOutside',
			'interactOutsideBehavior',
			'loop',
			'trapFocus',
			'isValidEvent',
			'customAnchor',
			'isStatic'
		]);
	Zn(
		e,
		rt(
			{
				get id() {
					return t.id;
				},
				get present() {
					return t.present;
				}
			},
			() => a,
			{
				presence: (u) => {
					oi(
						u,
						rt(
							{
								get popper() {
									return t.popper;
								},
								get onEscapeKeydown() {
									return t.onEscapeKeydown;
								},
								get escapeKeydownBehavior() {
									return t.escapeKeydownBehavior;
								},
								get preventOverflowTextSelection() {
									return t.preventOverflowTextSelection;
								},
								get id() {
									return t.id;
								},
								get onPointerDown() {
									return t.onPointerDown;
								},
								get onPointerUp() {
									return t.onPointerUp;
								},
								get side() {
									return t.side;
								},
								get sideOffset() {
									return t.sideOffset;
								},
								get align() {
									return t.align;
								},
								get alignOffset() {
									return t.alignOffset;
								},
								get arrowPadding() {
									return t.arrowPadding;
								},
								get avoidCollisions() {
									return t.avoidCollisions;
								},
								get collisionBoundary() {
									return t.collisionBoundary;
								},
								get collisionPadding() {
									return t.collisionPadding;
								},
								get sticky() {
									return t.sticky;
								},
								get hideWhenDetached() {
									return t.hideWhenDetached;
								},
								get updatePositionStrategy() {
									return t.updatePositionStrategy;
								},
								get strategy() {
									return t.strategy;
								},
								get dir() {
									return t.dir;
								},
								get preventScroll() {
									return t.preventScroll;
								},
								get wrapperId() {
									return t.wrapperId;
								},
								get style() {
									return t.style;
								},
								get onPlaced() {
									return t.onPlaced;
								},
								get customAnchor() {
									return o();
								},
								get isStatic() {
									return s();
								},
								get enabled() {
									return t.present;
								},
								get onInteractOutside() {
									return t.onInteractOutside;
								},
								get onCloseAutoFocus() {
									return t.onCloseAutoFocus;
								},
								get onOpenAutoFocus() {
									return t.onOpenAutoFocus;
								},
								get interactOutsideBehavior() {
									return n();
								},
								get loop() {
									return t.loop;
								},
								get trapFocus() {
									return r();
								},
								get isValidEvent() {
									return i();
								},
								get onFocusOutside() {
									return t.onFocusOutside;
								},
								forceMount: !1
							},
							() => a
						)
					);
				},
				$$slots: { presence: !0 }
			}
		)
	);
}
function Oc(e, t) {
	let n = x(t, 'interactOutsideBehavior', 3, 'close'),
		r = x(t, 'trapFocus', 3, !0),
		i = x(t, 'isValidEvent', 3, () => !1),
		o = x(t, 'customAnchor', 3, null),
		s = x(t, 'isStatic', 3, !1),
		a = At(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'popper',
			'onEscapeKeydown',
			'escapeKeydownBehavior',
			'preventOverflowTextSelection',
			'id',
			'onPointerDown',
			'onPointerUp',
			'side',
			'sideOffset',
			'align',
			'alignOffset',
			'arrowPadding',
			'avoidCollisions',
			'collisionBoundary',
			'collisionPadding',
			'sticky',
			'hideWhenDetached',
			'updatePositionStrategy',
			'strategy',
			'dir',
			'preventScroll',
			'wrapperId',
			'style',
			'onPlaced',
			'onInteractOutside',
			'onCloseAutoFocus',
			'onOpenAutoFocus',
			'onFocusOutside',
			'interactOutsideBehavior',
			'loop',
			'trapFocus',
			'isValidEvent',
			'customAnchor',
			'isStatic',
			'enabled'
		]);
	oi(
		e,
		rt(
			{
				get popper() {
					return t.popper;
				},
				get onEscapeKeydown() {
					return t.onEscapeKeydown;
				},
				get escapeKeydownBehavior() {
					return t.escapeKeydownBehavior;
				},
				get preventOverflowTextSelection() {
					return t.preventOverflowTextSelection;
				},
				get id() {
					return t.id;
				},
				get onPointerDown() {
					return t.onPointerDown;
				},
				get onPointerUp() {
					return t.onPointerUp;
				},
				get side() {
					return t.side;
				},
				get sideOffset() {
					return t.sideOffset;
				},
				get align() {
					return t.align;
				},
				get alignOffset() {
					return t.alignOffset;
				},
				get arrowPadding() {
					return t.arrowPadding;
				},
				get avoidCollisions() {
					return t.avoidCollisions;
				},
				get collisionBoundary() {
					return t.collisionBoundary;
				},
				get collisionPadding() {
					return t.collisionPadding;
				},
				get sticky() {
					return t.sticky;
				},
				get hideWhenDetached() {
					return t.hideWhenDetached;
				},
				get updatePositionStrategy() {
					return t.updatePositionStrategy;
				},
				get strategy() {
					return t.strategy;
				},
				get dir() {
					return t.dir;
				},
				get preventScroll() {
					return t.preventScroll;
				},
				get wrapperId() {
					return t.wrapperId;
				},
				get style() {
					return t.style;
				},
				get onPlaced() {
					return t.onPlaced;
				},
				get customAnchor() {
					return o();
				},
				get isStatic() {
					return s();
				},
				get enabled() {
					return t.enabled;
				},
				get onInteractOutside() {
					return t.onInteractOutside;
				},
				get onCloseAutoFocus() {
					return t.onCloseAutoFocus;
				},
				get onOpenAutoFocus() {
					return t.onOpenAutoFocus;
				},
				get interactOutsideBehavior() {
					return n();
				},
				get loop() {
					return t.loop;
				},
				get trapFocus() {
					return r();
				},
				get isValidEvent() {
					return i();
				},
				get onFocusOutside() {
					return t.onFocusOutside;
				}
			},
			() => a,
			{ forceMount: !0 }
		)
	);
}
function Ec(e) {
	const t = C(() => e.enabled()),
		n = oa(!1, 300, (s) => {
			var a;
			d(t) && ((a = e.setIsPointerInTransit) == null || a.call(e, s));
		});
	let r = R(null);
	function i() {
		T(r, null), (n.current = !1);
	}
	function o(s, a) {
		const c = s.currentTarget;
		if (!Le(c)) return;
		const u = { x: s.clientX, y: s.clientY },
			g = ua(u, c.getBoundingClientRect()),
			f = da(u, g),
			h = fa(a.getBoundingClientRect()),
			m = ga([...f, ...h]);
		T(r, F(m)), (n.current = !0);
	}
	return (
		J([e.triggerNode, e.contentNode, e.enabled], ([s, a, c]) => {
			if (!s || !a || !c) return;
			const u = (f) => {
					o(f, a);
				},
				g = (f) => {
					o(f, s);
				};
			return kt(Q(s, 'pointerleave', u), Q(a, 'pointerleave', g));
		}),
		J(
			() => d(r),
			() =>
				Q(document, 'pointermove', (a) => {
					var h, m;
					if (!d(r)) return;
					const c = a.target;
					if (!Dr(c)) return;
					const u = { x: a.clientX, y: a.clientY },
						g =
							((h = e.triggerNode()) == null ? void 0 : h.contains(c)) ||
							((m = e.contentNode()) == null ? void 0 : m.contains(c)),
						f = !ha(u, d(r));
					g ? i() : f && (i(), e.onPointerExit());
				})
		),
		{ isPointerInTransit: n }
	);
}
function ua(e, t) {
	const n = Math.abs(t.top - e.y),
		r = Math.abs(t.bottom - e.y),
		i = Math.abs(t.right - e.x),
		o = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, o)) {
		case o:
			return 'left';
		case i:
			return 'right';
		case n:
			return 'top';
		case r:
			return 'bottom';
		default:
			throw new Error('unreachable');
	}
}
function da(e, t, n = 5) {
	const r = n * 1.5;
	switch (t) {
		case 'top':
			return [
				{ x: e.x - n, y: e.y + n },
				{ x: e.x, y: e.y - r },
				{ x: e.x + n, y: e.y + n }
			];
		case 'bottom':
			return [
				{ x: e.x - n, y: e.y - n },
				{ x: e.x, y: e.y + r },
				{ x: e.x + n, y: e.y - n }
			];
		case 'left':
			return [
				{ x: e.x + n, y: e.y - n },
				{ x: e.x - r, y: e.y },
				{ x: e.x + n, y: e.y + n }
			];
		case 'right':
			return [
				{ x: e.x - n, y: e.y - n },
				{ x: e.x + r, y: e.y },
				{ x: e.x - n, y: e.y + n }
			];
	}
}
function fa(e) {
	const { top: t, right: n, bottom: r, left: i } = e;
	return [
		{ x: i, y: t },
		{ x: n, y: t },
		{ x: n, y: r },
		{ x: i, y: r }
	];
}
function ha(e, t) {
	const { x: n, y: r } = e;
	let i = !1;
	for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
		const a = t[o].x,
			c = t[o].y,
			u = t[s].x,
			g = t[s].y;
		c > r != g > r && n < ((u - a) * (r - c)) / (g - c) + a && (i = !i);
	}
	return i;
}
function ga(e) {
	const t = e.slice();
	return (
		t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)), ma(t)
	);
}
function ma(e) {
	if (e.length <= 1) return e.slice();
	const t = [];
	for (let r = 0; r < e.length; r++) {
		const i = e[r];
		for (; t.length >= 2; ) {
			const o = t[t.length - 1],
				s = t[t.length - 2];
			if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) t.pop();
			else break;
		}
		t.push(i);
	}
	t.pop();
	const n = [];
	for (let r = e.length - 1; r >= 0; r--) {
		const i = e[r];
		for (; n.length >= 2; ) {
			const o = n[n.length - 1],
				s = n[n.length - 2];
			if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) n.pop();
			else break;
		}
		n.push(i);
	}
	return (
		n.pop(),
		t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
	);
}
var va = It('<button><!></button>');
function pa(e, t) {
	U(t, !0);
	let n = x(t, 'id', 19, Bt),
		r = x(t, 'ref', 15, null),
		i = x(t, 'disabled', 3, !1),
		o = At(t, ['$$slots', '$$events', '$$legacy', 'children', 'child', 'id', 'ref', 'disabled']);
	const s = lo({
			variant: A.with(() => 'close'),
			id: A.with(() => n()),
			ref: A.with(
				() => r(),
				(h) => r(h)
			),
			disabled: A.with(() => !!i())
		}),
		a = C(() => wt(o, s.props));
	var c = L(),
		u = k(c);
	{
		var g = (h) => {
				var m = L(),
					p = k(m);
				B(
					p,
					() => t.child,
					() => ({ props: d(a) })
				),
					N(h, m);
			},
			f = (h) => {
				var m = va();
				let p;
				var b = Un(m);
				B(b, () => t.children ?? X), Yn(m), qn(() => (p = Xn(m, p, { ...d(a) }))), N(h, m);
			};
		bt(u, (h) => {
			t.child ? h(g) : h(f, !1);
		});
	}
	N(e, c), Y();
}
var ya = It('<!> <!>', 1),
	wa = It('<!> <div><!></div>', 1);
function ba(e, t) {
	U(t, !0);
	let n = x(t, 'id', 19, Bt),
		r = x(t, 'ref', 15, null),
		i = x(t, 'forceMount', 3, !1),
		o = x(t, 'onCloseAutoFocus', 3, K),
		s = x(t, 'onEscapeKeydown', 3, K),
		a = x(t, 'onInteractOutside', 3, K),
		c = x(t, 'trapFocus', 3, !0),
		u = x(t, 'preventScroll', 3, !0),
		g = x(t, 'restoreScrollDelay', 3, null),
		f = At(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'id',
			'children',
			'child',
			'ref',
			'forceMount',
			'onCloseAutoFocus',
			'onEscapeKeydown',
			'onInteractOutside',
			'trapFocus',
			'preventScroll',
			'restoreScrollDelay'
		]);
	const h = ao({
			id: A.with(() => n()),
			ref: A.with(
				() => r(),
				(b) => r(b)
			)
		}),
		m = C(() => wt(f, h.props)),
		p = C(() => h.root.opts.open.current || i());
	Zn(
		e,
		rt(() => d(m), {
			get forceMount() {
				return i();
			},
			get present() {
				return d(p);
			},
			presence: (O) => {
				const v = C(() =>
					es({
						forceMount: i(),
						present: h.root.opts.open.current,
						trapFocus: c(),
						open: h.root.opts.open.current
					})
				);
				qr(
					O,
					rt(
						{
							loop: !0,
							get trapFocus() {
								return d(v);
							}
						},
						() => d(m),
						{
							onCloseAutoFocus: (w) => {
								var E;
								o()(w), !w.defaultPrevented && ((E = h.root.triggerNode) == null || E.focus());
							},
							focusScope: (w, E) => {
								let P = () => (E == null ? void 0 : E().props);
								Br(
									w,
									rt(() => d(m), {
										get enabled() {
											return h.root.opts.open.current;
										},
										onEscapeKeydown: (D) => {
											s()(D), !D.defaultPrevented && h.root.handleClose();
										},
										children: (D, _) => {
											Lr(
												D,
												rt(() => d(m), {
													get enabled() {
														return h.root.opts.open.current;
													},
													onInteractOutside: (z) => {
														a()(z), !z.defaultPrevented && h.root.handleClose();
													},
													children: (z, et) => {
														jr(
															z,
															rt(() => d(m), {
																get enabled() {
																	return h.root.opts.open.current;
																},
																children: (M, j) => {
																	var G = L(),
																		ot = k(G);
																	{
																		var W = (H) => {
																				var V = ya(),
																					$ = k(V);
																				{
																					var tt = (Qt) => {
																						Ve(Qt, {
																							get preventScroll() {
																								return u();
																							},
																							get restoreScrollDelay() {
																								return g();
																							}
																						});
																					};
																					bt($, (Qt) => {
																						h.root.opts.open.current && Qt(tt);
																					});
																				}
																				var Wt = ee($, 2),
																					_n = Kn(() => ({
																						props: wt(d(m), P()),
																						...h.snippetProps
																					}));
																				B(
																					Wt,
																					() => t.child,
																					() => d(_n)
																				),
																					N(H, V);
																			},
																			at = (H) => {
																				var V = wa(),
																					$ = k(V);
																				Ve($, {
																					get preventScroll() {
																						return u();
																					}
																				});
																				var tt = ee($, 2);
																				let Wt;
																				var _n = Un(tt);
																				B(_n, () => t.children ?? X),
																					Yn(tt),
																					qn(
																						(Qt) => (Wt = Xn(tt, Wt, { ...Qt })),
																						[() => wt(d(m), P())]
																					),
																					N(H, V);
																			};
																		bt(ot, (H) => {
																			t.child ? H(W) : H(at, !1);
																		});
																	}
																	N(M, G);
																},
																$$slots: { default: !0 }
															})
														);
													},
													$$slots: { default: !0 }
												})
											);
										},
										$$slots: { default: !0 }
									})
								);
							},
							$$slots: { focusScope: !0 }
						}
					)
				);
			},
			$$slots: { presence: !0 }
		})
	),
		Y();
}
function xa(e, t) {
	U(t, !0);
	let n = x(t, 'ref', 15, null),
		r = x(t, 'class', 7),
		i = At(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var o = L(),
		s = k(o);
	const a = C(() =>
		Cr(
			'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80',
			r()
		)
	);
	return (
		ke(
			s,
			() => rs,
			(c, u) => {
				u(
					c,
					rt(
						{
							get class() {
								return d(a);
							}
						},
						() => i,
						{
							get ref() {
								return n();
							},
							set ref(g) {
								n(g);
							}
						}
					)
				);
			}
		),
		N(e, o),
		Y({
			get class() {
				return r();
			},
			set class(c) {
				r(c);
			}
		})
	);
}
const Sa = Ni({
	base: 'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
	variants: {
		side: {
			top: 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b',
			bottom:
				'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t',
			left: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
			right:
				'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm'
		}
	},
	defaultVariants: { side: 'right' }
});
var Aa = It('<!> <span class="sr-only">Close</span>', 1),
	Oa = It('<!> <!>', 1),
	Ea = It('<!> <!>', 1);
function Pc(e, t) {
	U(t, !0);
	let n = x(t, 'ref', 15, null),
		r = x(t, 'side', 3, 'right'),
		i = At(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'ref',
			'class',
			'side',
			'portalProps',
			'children'
		]);
	var o = L(),
		s = k(o);
	ke(
		s,
		() => fo,
		(a, c) => {
			c(
				a,
				rt(() => t.portalProps, {
					children: (u, g) => {
						var f = Ea(),
							h = k(f);
						xa(h, {});
						var m = ee(h, 2);
						const p = C(() => Cr(Sa({ side: r() }), t.class));
						ke(
							m,
							() => ba,
							(b, O) => {
								O(
									b,
									rt(
										{
											get class() {
												return d(p);
											}
										},
										() => i,
										{
											get ref() {
												return n();
											},
											set ref(v) {
												n(v);
											},
											children: (v, S) => {
												var w = Oa(),
													E = k(w);
												B(E, () => t.children ?? X);
												var P = ee(E, 2);
												ke(
													P,
													() => pa,
													(D, _) => {
														_(D, {
															class:
																'ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none',
															children: (z, et) => {
																var M = Aa(),
																	j = k(M);
																Mi(j, { class: 'size-4' }), Oi(2), N(z, M);
															},
															$$slots: { default: !0 }
														});
													}
												),
													N(v, w);
											},
											$$slots: { default: !0 }
										}
									)
								);
							}
						),
							N(u, f);
					},
					$$slots: { default: !0 }
				})
			);
		}
	),
		N(e, o),
		Y();
}
export {
	mc as $,
	oc as A,
	oa as B,
	Dn as C,
	lc as D,
	Tr as E,
	xc as F,
	cc as G,
	ac as H,
	Vo as I,
	pc as J,
	vc as K,
	wc as L,
	yc as M,
	Yo as N,
	Ki as O,
	Oc as P,
	Ui as Q,
	In as R,
	Pc as S,
	Le as T,
	Ua as U,
	qi as V,
	Eo as W,
	uc as X,
	fc as Y,
	fo as Z,
	gc as _,
	Za as a,
	rs as a0,
	ba as a1,
	pa as a2,
	Mi as a3,
	Zn as a4,
	zi as a5,
	fr as a6,
	ec as a7,
	tc as a8,
	Ga as b,
	Fr as c,
	sc as d,
	Ya as e,
	qa as f,
	Ja as g,
	ja as h,
	Gn as i,
	dc as j,
	Nr as k,
	Ec as l,
	Dr as m,
	K as n,
	Ka as o,
	Ac as p,
	bc as q,
	Sc as r,
	Mn as s,
	Qa as t,
	hc as u,
	$a as v,
	Xa as w,
	ic as x,
	rc as y,
	nc as z
};
