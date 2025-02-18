var Oe = Object.defineProperty;
var ue = (e) => {
	throw TypeError(e);
};
var xe = (e, t, n) =>
	t in e ? Oe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var l = (e, t, n) => xe(e, typeof t != 'symbol' ? t + '' : t, n),
	Jt = (e, t, n) => t.has(e) || ue('Cannot ' + n);
var c = (e, t, n) => (Jt(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
	b = (e, t, n) =>
		t.has(e)
			? ue('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n),
	xt = (e, t, n, r) => (Jt(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
	tt = (e, t, n) => (Jt(e, t, 'access private method'), n);
import './Bg9kRutz.js';
import {
	p as z,
	a as L,
	u as G,
	v as i,
	q as A,
	w as I,
	a3 as fe,
	f as S,
	c as q,
	x as Q,
	r as V,
	t as dt,
	s as ae,
	d as ce,
	aV as Fe
} from './DQMf8gWK.js';
import { e as T, a as y, t as X } from './BGOrq1ZG.js';
import { s as x } from './D3E8oDJG.js';
import { p as h, i as Y, r as rt, s as lt } from './DjKtoK8y.js';
import { b as C, w as ge, a as ot, m as j, u as Yt, e as Ee } from './B7uXBihW.js';
import {
	A as Et,
	x as $t,
	y as te,
	z as ht,
	d as me,
	i as De,
	H as ve,
	B as Ke,
	n as J,
	o as Re,
	E as be,
	c as ee,
	D as Ne,
	G as Ge,
	I as ne,
	J as ze,
	K as Me,
	L as Le,
	M as He,
	N as We,
	C as Ut,
	O as we,
	e as _e,
	Q as Be,
	R as et,
	T as pt,
	U as qe,
	h as Ve,
	l as Ye,
	k as Ue,
	V as je,
	W as Je,
	m as de,
	X as Qe,
	b as Xe,
	Y as Ze,
	F as $e,
	P as tn,
	p as en,
	q as le,
	r as nn,
	Z as rn
} from './B8S9RRQw.js';
import { c as Xt } from './D7_cnrTr.js';
import { a as ye } from './DWr6XhLj.js';
import { s as U } from './DvbRtjlS.js';
import { p as W } from './BJa4LW-r.js';
import { o as Qt } from './BTRVP7y_.js';
function on(e) {
	return window.getComputedStyle(e).getPropertyValue('direction');
}
function sn(e = 'ltr', t = 'horizontal') {
	return { horizontal: e === 'rtl' ? te : $t, vertical: ht }[t];
}
function un(e = 'ltr', t = 'horizontal') {
	return { horizontal: e === 'rtl' ? $t : te, vertical: Et }[t];
}
function an(e = 'ltr', t = 'horizontal') {
	return (
		['ltr', 'rtl'].includes(e) || (e = 'ltr'),
		['horizontal', 'vertical'].includes(t) || (t = 'horizontal'),
		{ nextKey: sn(e, t), prevKey: un(e, t) }
	);
}
function cn(e) {
	const t = C(null);
	function n() {
		if (!De) return [];
		const s = document.getElementById(e.rootNodeId.current);
		return s
			? e.candidateSelector
				? Array.from(s.querySelectorAll(e.candidateSelector))
				: Array.from(s.querySelectorAll(`[${e.candidateAttr}]:not([data-disabled])`))
			: [];
	}
	function r() {
		var a;
		const s = n();
		s.length && ((a = s[0]) == null || a.focus());
	}
	function o(s, a, p = !1) {
		var Z;
		const d = document.getElementById(e.rootNodeId.current);
		if (!d || !s) return;
		const u = n();
		if (!u.length) return;
		const m = u.indexOf(s),
			_ = on(d),
			{ nextKey: P, prevKey: w } = an(_, e.orientation.current),
			f = e.loop.current,
			v = { [P]: m + 1, [w]: m - 1, [ve]: 0, [me]: u.length - 1 };
		if (p) {
			const st = P === ht ? $t : ht,
				D = w === Et ? te : Et;
			(v[st] = m + 1), (v[D] = m - 1);
		}
		let k = v[a.key];
		if (k === void 0) return;
		a.preventDefault(), k < 0 && f ? (k = u.length - 1) : k === u.length && f && (k = 0);
		const M = u[k];
		if (M)
			return M.focus(), (t.current = M.id), (Z = e.onCandidateFocus) == null || Z.call(e, M), M;
	}
	function g(s) {
		const a = n(),
			p = t.current !== null;
		return s && !p && a[0] === s
			? ((t.current = s.id), 0)
			: (s == null ? void 0 : s.id) === t.current
				? 0
				: -1;
	}
	return {
		setCurrentTabStopId(s) {
			t.current = s;
		},
		getTabIndex: g,
		handleKeydown: o,
		focusFirstCandidate: r,
		currentTabStopId: t
	};
}
function ir(e, t, n = !0) {
	if (!(e.length === 0 || t < 0 || t >= e.length))
		return e.length === 1 && t === 0 ? e[0] : t === e.length - 1 ? (n ? e[0] : void 0) : e[t + 1];
}
function ur(e, t, n = !0) {
	if (!(e.length === 0 || t < 0 || t >= e.length))
		return e.length === 1 && t === 0 ? e[0] : t === 0 ? (n ? e[e.length - 1] : void 0) : e[t - 1];
}
function ar(e, t, n, r = !0) {
	if (e.length === 0 || t < 0 || t >= e.length) return;
	let o = t + n;
	return (
		r ? (o = ((o % e.length) + e.length) % e.length) : (o = Math.max(0, Math.min(o, e.length - 1))),
		e[o]
	);
}
function cr(e, t, n, r = !0) {
	if (e.length === 0 || t < 0 || t >= e.length) return;
	let o = t - n;
	return (
		r ? (o = ((o % e.length) + e.length) % e.length) : (o = Math.max(0, Math.min(o, e.length - 1))),
		e[o]
	);
}
function dn(e, t, n) {
	const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t,
		g = n ? e.indexOf(n) : -1;
	let s = ln(e, Math.max(g, 0));
	o.length === 1 && (s = s.filter((d) => d !== n));
	const p = s.find((d) => (d == null ? void 0 : d.toLowerCase().startsWith(o.toLowerCase())));
	return p !== n ? p : void 0;
}
function ln(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function hn(e) {
	const t = Ke('', 1e3),
		n = (e == null ? void 0 : e.onMatch) ?? ((s) => s.focus()),
		r = (e == null ? void 0 : e.getCurrentItem) ?? (() => document.activeElement);
	function o(s, a) {
		var P, w;
		if (!a.length) return;
		t.current = t.current + s;
		const p = r(),
			d =
				((w = (P = a.find((f) => f === p)) == null ? void 0 : P.textContent) == null
					? void 0
					: w.trim()) ?? '',
			u = a.map((f) => {
				var v;
				return ((v = f.textContent) == null ? void 0 : v.trim()) ?? '';
			}),
			m = dn(u, t.current, d),
			_ = a.find((f) => {
				var v;
				return ((v = f.textContent) == null ? void 0 : v.trim()) === m;
			});
		return _ && n(_), _;
	}
	function g() {
		t.current = '';
	}
	return { search: t, handleTypeaheadSearch: o, resetTypeahead: g };
}
function he(e, t) {
	z(t, !0);
	let n = h(t, 'mounted', 15, !1),
		r = h(t, 'onMountedChange', 3, J);
	Re(
		() => (
			n(!0),
			r()(!0),
			() => {
				n(!1), r()(!1);
			}
		)
	),
		L();
}
const pn = [be, ee],
	fn = [ht, Ne, ve],
	Ce = [Et, Ge, me],
	gn = [...fn, ...Ce];
function mn(e) {
	return e === 'indeterminate';
}
function vn(e) {
	return mn(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
}
function pe(e) {
	return e.pointerType === 'mouse';
}
function ct() {
	return {
		getShadowRoot: !0,
		displayCheck:
			typeof ResizeObserver == 'function' && ResizeObserver.toString().includes('[native code]')
				? 'full'
				: 'none'
	};
}
function bn(e, t) {
	if (!ne(e, ct())) return Mn(e, t);
	const n = ze(Me(e).body, ct());
	t === 'prev' && n.reverse();
	const r = n.indexOf(e);
	return r === -1 ? document.body : n.slice(r + 1)[0];
}
function Mn(e, t) {
	if (!Le(e, ct())) return document.body;
	const n = He(Me(e).body, ct());
	t === 'prev' && n.reverse();
	const r = n.indexOf(e);
	return r === -1 ? document.body : (n.slice(r + 1).find((g) => ne(g, ct())) ?? document.body);
}
const re = new Ut('Menu.Root'),
	oe = new Ut('Menu.Root | Menu.Sub'),
	se = new Ut('Menu.Content'),
	Pe = new Ut('Menu.Group | Menu.RadioGroup'),
	wn = new Ue('bitsmenuopen', { bubbles: !1, cancelable: !0 });
var ft, gt;
class _n {
	constructor(t) {
		l(this, 'opts');
		l(this, 'isUsingKeyboard', new Zt());
		b(this, ft, G(!1));
		b(this, gt, G(!1));
		this.opts = t;
	}
	get ignoreCloseAutoFocus() {
		return i(c(this, ft));
	}
	set ignoreCloseAutoFocus(t) {
		A(c(this, ft), W(t));
	}
	get isPointerInTransit() {
		return i(c(this, gt));
	}
	set isPointerInTransit(t) {
		A(c(this, gt), W(t));
	}
	getAttr(t) {
		return `data-${this.opts.variant.current}-${t}`;
	}
}
(ft = new WeakMap()), (gt = new WeakMap());
var mt, vt;
class yn {
	constructor(t, n, r) {
		l(this, 'opts');
		l(this, 'root');
		l(this, 'parentMenu');
		l(
			this,
			'contentId',
			C.with(() => '')
		);
		b(this, mt, G(null));
		b(this, vt, G(null));
		(this.opts = t),
			(this.root = n),
			(this.parentMenu = r),
			r &&
				ge(
					() => r.opts.open.current,
					() => {
						r.opts.open.current || (this.opts.open.current = !1);
					}
				);
	}
	get contentNode() {
		return i(c(this, mt));
	}
	set contentNode(t) {
		A(c(this, mt), W(t));
	}
	get triggerNode() {
		return i(c(this, vt));
	}
	set triggerNode(t) {
		A(c(this, vt), W(t));
	}
	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}
	onOpen() {
		this.opts.open.current = !0;
	}
	onClose() {
		this.opts.open.current = !1;
	}
}
(mt = new WeakMap()), (vt = new WeakMap());
var bt, Mt, wt, _t, yt, H, Ie, Ft, Dt, Kt;
class Cn {
	constructor(t, n) {
		b(this, H);
		l(this, 'opts');
		l(this, 'parentMenu');
		b(this, bt, G(''));
		b(this, Mt, 0);
		b(this, wt);
		l(this, 'rovingFocusGroup');
		b(this, _t, G(!1));
		b(this, yt);
		l(this, 'onCloseAutoFocus', (t) => {
			this.opts.onCloseAutoFocus.current(t),
				!(t.defaultPrevented || c(this, yt)) &&
					this.parentMenu.triggerNode &&
					ne(this.parentMenu.triggerNode) &&
					this.parentMenu.triggerNode.focus();
		});
		l(this, 'onOpenAutoFocus', (t) => {
			if (t.defaultPrevented) return;
			t.preventDefault();
			const n = this.parentMenu.contentNode;
			n == null || n.focus();
		});
		b(
			this,
			Dt,
			I(() => ({ open: this.parentMenu.opts.open.current }))
		);
		b(
			this,
			Kt,
			I(() => ({
				id: this.opts.id.current,
				role: 'menu',
				'aria-orientation': Xe('vertical'),
				[this.parentMenu.root.getAttr('content')]: '',
				'data-state': we(this.parentMenu.opts.open.current),
				onkeydown: this.onkeydown,
				onblur: this.onblur,
				onfocus: this.onfocus,
				dir: this.parentMenu.root.opts.dir.current,
				style: { pointerEvents: 'auto' }
			}))
		);
		l(this, 'popperProps', { onCloseAutoFocus: (t) => this.onCloseAutoFocus(t) });
		(this.opts = t),
			(this.parentMenu = n),
			(n.contentId = t.id),
			xt(this, yt, t.isSub ?? !1),
			(this.onkeydown = this.onkeydown.bind(this)),
			(this.onblur = this.onblur.bind(this)),
			(this.onfocus = this.onfocus.bind(this)),
			(this.handleInteractOutside = this.handleInteractOutside.bind(this)),
			ot({
				...t,
				deps: () => this.parentMenu.opts.open.current,
				onRefChange: (r) => {
					this.parentMenu.contentNode !== r && (this.parentMenu.contentNode = r);
				}
			}),
			Ye({
				contentNode: () => this.parentMenu.contentNode,
				triggerNode: () => this.parentMenu.triggerNode,
				enabled: () => {
					var r;
					return (
						this.parentMenu.opts.open.current &&
						!!(
							(r = this.parentMenu.triggerNode) != null &&
							r.hasAttribute(this.parentMenu.root.getAttr('sub-trigger'))
						)
					);
				},
				onPointerExit: () => {
					this.parentMenu.opts.open.current = !1;
				},
				setIsPointerInTransit: (r) => {
					this.parentMenu.root.isPointerInTransit = r;
				}
			}),
			xt(this, wt, hn().handleTypeaheadSearch),
			(this.rovingFocusGroup = cn({
				rootNodeId: this.parentMenu.contentId,
				candidateAttr: this.parentMenu.root.getAttr('item'),
				loop: this.opts.loop,
				orientation: C.with(() => 'vertical')
			})),
			ge(
				() => this.parentMenu.contentNode,
				(r) => {
					if (!r) return;
					const o = () => {
						et(() => {
							this.parentMenu.root.isUsingKeyboard.current &&
								this.rovingFocusGroup.focusFirstCandidate();
						});
					};
					return wn.listen(r, o);
				}
			),
			fe(() => {
				this.parentMenu.opts.open.current || window.clearTimeout(c(this, Mt));
			});
	}
	get search() {
		return i(c(this, bt));
	}
	set search(t) {
		A(c(this, bt), W(t));
	}
	get mounted() {
		return i(c(this, _t));
	}
	set mounted(t) {
		A(c(this, _t), W(t));
	}
	handleTabKeyDown(t) {
		let n = this.parentMenu;
		for (; n.parentMenu !== null; ) n = n.parentMenu;
		if (!n.triggerNode) return;
		t.preventDefault();
		const r = bn(n.triggerNode, t.shiftKey ? 'prev' : 'next');
		r
			? ((this.parentMenu.root.ignoreCloseAutoFocus = !0),
				n.onClose(),
				r.focus(),
				et(() => {
					this.parentMenu.root.ignoreCloseAutoFocus = !1;
				}))
			: document.body.focus();
	}
	onkeydown(t) {
		var d, u;
		if (t.defaultPrevented) return;
		if (t.key === je) {
			this.handleTabKeyDown(t);
			return;
		}
		const n = t.target,
			r = t.currentTarget;
		if (!pt(n) || !pt(r)) return;
		const o =
				((d = n.closest(`[${this.parentMenu.root.getAttr('content')}]`)) == null
					? void 0
					: d.id) === this.parentMenu.contentId.current,
			g = t.ctrlKey || t.altKey || t.metaKey,
			s = t.key.length === 1;
		if (this.rovingFocusGroup.handleKeydown(n, t) || t.code === 'Space') return;
		const p = tt(this, H, Ie).call(this);
		o && !g && s && c(this, wt).call(this, t.key, p),
			((u = t.target) == null ? void 0 : u.id) === this.parentMenu.contentId.current &&
				gn.includes(t.key) &&
				(t.preventDefault(), Ce.includes(t.key) && p.reverse(), Je(p));
	}
	onblur(t) {
		var n, r;
		de(t.currentTarget) &&
			de(t.target) &&
			(((r = (n = t.currentTarget).contains) != null && r.call(n, t.target)) ||
				(window.clearTimeout(c(this, Mt)), (this.search = '')));
	}
	onfocus(t) {
		this.parentMenu.root.isUsingKeyboard.current &&
			et(() => this.rovingFocusGroup.focusFirstCandidate());
	}
	onItemEnter() {
		return tt(this, H, Ft).call(this);
	}
	onItemLeave(t) {
		if (
			t.currentTarget.hasAttribute(this.parentMenu.root.getAttr('sub-trigger')) ||
			tt(this, H, Ft).call(this) ||
			this.parentMenu.root.isUsingKeyboard.current
		)
			return;
		const n = this.parentMenu.contentNode;
		n == null || n.focus(), this.rovingFocusGroup.setCurrentTabStopId('');
	}
	onTriggerLeave() {
		return !!tt(this, H, Ft).call(this);
	}
	handleInteractOutside(t) {
		var r;
		if (!Qe(t.target)) return;
		const n = (r = this.parentMenu.triggerNode) == null ? void 0 : r.id;
		if (t.target.id === n) {
			t.preventDefault();
			return;
		}
		t.target.closest(`#${n}`) && t.preventDefault();
	}
	get snippetProps() {
		return i(c(this, Dt));
	}
	get props() {
		return i(c(this, Kt));
	}
}
(bt = new WeakMap()),
	(Mt = new WeakMap()),
	(wt = new WeakMap()),
	(_t = new WeakMap()),
	(yt = new WeakMap()),
	(H = new WeakSet()),
	(Ie = function () {
		const t = this.parentMenu.contentNode;
		return t
			? Array.from(
					t.querySelectorAll(`[${this.parentMenu.root.getAttr('item')}]:not([data-disabled])`)
				)
			: [];
	}),
	(Ft = function () {
		return this.parentMenu.root.isPointerInTransit;
	}),
	(Dt = new WeakMap()),
	(Kt = new WeakMap());
var nt, Rt;
class Se {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'content');
		b(this, nt, G(!1));
		b(
			this,
			Rt,
			I(() => ({
				id: this.opts.id.current,
				tabindex: -1,
				role: 'menuitem',
				'aria-disabled': qe(this.opts.disabled.current),
				'data-disabled': _e(this.opts.disabled.current),
				'data-highlighted': i(c(this, nt)) ? '' : void 0,
				[this.content.parentMenu.root.getAttr('item')]: '',
				onpointermove: this.onpointermove,
				onpointerleave: this.onpointerleave,
				onfocus: this.onfocus,
				onblur: this.onblur
			}))
		);
		(this.opts = t),
			(this.content = n),
			(this.onpointermove = this.onpointermove.bind(this)),
			(this.onpointerleave = this.onpointerleave.bind(this)),
			(this.onfocus = this.onfocus.bind(this)),
			(this.onblur = this.onblur.bind(this)),
			ot({ ...t, deps: () => this.content.mounted });
	}
	onpointermove(t) {
		if (!t.defaultPrevented && pe(t))
			if (this.opts.disabled.current) this.content.onItemLeave(t);
			else {
				if (this.content.onItemEnter()) return;
				const r = t.currentTarget;
				if (!pt(r)) return;
				r.focus();
			}
	}
	onpointerleave(t) {
		t.defaultPrevented || (pe(t) && this.content.onItemLeave(t));
	}
	onfocus(t) {
		et(() => {
			t.defaultPrevented || this.opts.disabled.current || A(c(this, nt), !0);
		});
	}
	onblur(t) {
		et(() => {
			t.defaultPrevented || A(c(this, nt), !1);
		});
	}
	get props() {
		return i(c(this, Rt));
	}
}
(nt = new WeakMap()), (Rt = new WeakMap());
var Ct, Nt, Te, Gt;
class ke {
	constructor(t, n) {
		b(this, Nt);
		l(this, 'opts');
		l(this, 'item');
		b(this, Ct, !1);
		l(this, 'root');
		b(
			this,
			Gt,
			I(() =>
				j(this.item.props, {
					onclick: this.onclick,
					onpointerdown: this.onpointerdown,
					onpointerup: this.onpointerup,
					onkeydown: this.onkeydown
				})
			)
		);
		(this.opts = t),
			(this.item = n),
			(this.root = n.content.parentMenu.root),
			(this.onkeydown = this.onkeydown.bind(this)),
			(this.onclick = this.onclick.bind(this)),
			(this.onpointerdown = this.onpointerdown.bind(this)),
			(this.onpointerup = this.onpointerup.bind(this));
	}
	onkeydown(t) {
		const n = this.item.content.search !== '';
		if (!(this.item.opts.disabled.current || (n && t.key === ee)) && pn.includes(t.key)) {
			if (!pt(t.currentTarget)) return;
			t.currentTarget.click(), t.preventDefault();
		}
	}
	onclick(t) {
		this.item.opts.disabled.current || tt(this, Nt, Te).call(this);
	}
	onpointerup(t) {
		var n;
		if (!t.defaultPrevented && !c(this, Ct)) {
			if (!pt(t.currentTarget)) return;
			(n = t.currentTarget) == null || n.click();
		}
	}
	onpointerdown(t) {
		xt(this, Ct, !0);
	}
	get props() {
		return i(c(this, Gt));
	}
}
(Ct = new WeakMap()),
	(Nt = new WeakSet()),
	(Te = function () {
		if (this.item.opts.disabled.current) return;
		const t = new CustomEvent('menuitemselect', { bubbles: !0, cancelable: !0 });
		this.opts.onSelect.current(t),
			et(() => {
				if (t.defaultPrevented) {
					this.item.content.parentMenu.root.isUsingKeyboard.current = !1;
					return;
				}
				this.opts.closeOnSelect.current && this.item.content.parentMenu.root.opts.onClose();
			});
	}),
	(Gt = new WeakMap());
var zt, Lt;
class Pn {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'item');
		b(
			this,
			zt,
			I(() => ({
				checked: this.opts.checked.current,
				indeterminate: this.opts.indeterminate.current
			}))
		);
		b(
			this,
			Lt,
			I(() => ({
				...this.item.props,
				role: 'menuitemcheckbox',
				'aria-checked': Ve(this.opts.checked.current, this.opts.indeterminate.current),
				'data-state': vn(this.opts.checked.current),
				[this.item.root.getAttr('checkbox-item')]: ''
			}))
		);
		(this.opts = t), (this.item = n);
	}
	toggleChecked() {
		this.opts.indeterminate.current
			? ((this.opts.indeterminate.current = !1), (this.opts.checked.current = !0))
			: (this.opts.checked.current = !this.opts.checked.current);
	}
	get snippetProps() {
		return i(c(this, zt));
	}
	get props() {
		return i(c(this, Lt));
	}
}
(zt = new WeakMap()), (Lt = new WeakMap());
var Pt, Ht;
class In {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'root');
		b(this, Pt, G(void 0));
		b(
			this,
			Ht,
			I(() => ({
				id: this.opts.id.current,
				role: 'group',
				'aria-labelledby': this.groupHeadingId,
				[this.root.getAttr('group')]: ''
			}))
		);
		(this.opts = t), (this.root = n), ot(this.opts);
	}
	get groupHeadingId() {
		return i(c(this, Pt));
	}
	set groupHeadingId(t) {
		A(c(this, Pt), W(t));
	}
	get props() {
		return i(c(this, Ht));
	}
}
(Pt = new WeakMap()), (Ht = new WeakMap());
var Wt;
class Sn {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'group');
		b(
			this,
			Wt,
			I(() => ({
				id: this.opts.id.current,
				role: 'group',
				[this.group.root.getAttr('group-heading')]: ''
			}))
		);
		(this.opts = t),
			(this.group = n),
			ot({
				...t,
				onRefChange: (r) => {
					this.group.groupHeadingId = r == null ? void 0 : r.id;
				}
			});
	}
	get props() {
		return i(c(this, Wt));
	}
}
Wt = new WeakMap();
var Bt;
class kn {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'root');
		b(
			this,
			Bt,
			I(() => ({ id: this.opts.id.current, role: 'group', [this.root.getAttr('separator')]: '' }))
		);
		(this.opts = t), (this.root = n), ot(t);
	}
	get props() {
		return i(c(this, Bt));
	}
}
Bt = new WeakMap();
var qt, Vt;
class Tn {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'parentMenu');
		b(
			this,
			qt,
			I(() => {
				if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current)
					return this.parentMenu.contentId.current;
			})
		);
		b(
			this,
			Vt,
			I(() => ({
				id: this.opts.id.current,
				disabled: this.opts.disabled.current,
				'aria-haspopup': 'menu',
				'aria-expanded': Be(this.parentMenu.opts.open.current),
				'aria-controls': i(c(this, qt)),
				'data-disabled': _e(this.opts.disabled.current),
				'data-state': we(this.parentMenu.opts.open.current),
				[this.parentMenu.root.getAttr('trigger')]: '',
				onpointerdown: this.onpointerdown,
				onpointerup: this.onpointerup,
				onkeydown: this.onkeydown
			}))
		);
		(this.opts = t),
			(this.parentMenu = n),
			(this.onpointerdown = this.onpointerdown.bind(this)),
			(this.onpointerup = this.onpointerup.bind(this)),
			(this.onkeydown = this.onkeydown.bind(this)),
			ot({
				...t,
				onRefChange: (r) => {
					this.parentMenu.triggerNode = r;
				}
			});
	}
	onpointerdown(t) {
		if (!this.opts.disabled.current) {
			if (t.pointerType === 'touch') return t.preventDefault();
			t.button === 0 &&
				t.ctrlKey === !1 &&
				(this.parentMenu.toggleOpen(), this.parentMenu.opts.open.current || t.preventDefault());
		}
	}
	onpointerup(t) {
		this.opts.disabled.current ||
			(t.pointerType === 'touch' && (t.preventDefault(), this.parentMenu.toggleOpen()));
	}
	onkeydown(t) {
		if (!this.opts.disabled.current) {
			if (t.key === ee || t.key === be) {
				this.parentMenu.toggleOpen(), t.preventDefault();
				return;
			}
			t.key === ht && (this.parentMenu.onOpen(), t.preventDefault());
		}
	}
	get props() {
		return i(c(this, Vt));
	}
}
(qt = new WeakMap()), (Vt = new WeakMap());
function An(e) {
	const t = new _n(e);
	return (
		We.set({
			get ignoreCloseAutoFocus() {
				return t.ignoreCloseAutoFocus;
			}
		}),
		re.set(t)
	);
}
function On(e, t) {
	return oe.set(new yn(t, e, null));
}
function xn(e) {
	return new Tn(e, oe.get());
}
function Fn(e) {
	return se.set(new Cn(e, oe.get()));
}
function En(e) {
	const t = new Se(e, se.get());
	return new ke(e, t);
}
function dr(e) {
	const t = new ke(e, new Se(e, se.get()));
	return new Pn(e, t);
}
function Dn(e) {
	return Pe.set(new In(e, re.get()));
}
function lr(e) {
	return new Sn(e, Pe.get());
}
function hr(e) {
	return new kn(e, re.get());
}
var Kn = X('<div><!></div>');
function Rn(e, t) {
	z(t, !0);
	let n = h(t, 'ref', 15, null),
		r = h(t, 'id', 19, Yt),
		o = h(t, 'disabled', 3, !1),
		g = h(t, 'onSelect', 3, J),
		s = h(t, 'closeOnSelect', 3, !0),
		a = rt(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'child',
			'children',
			'ref',
			'id',
			'disabled',
			'onSelect',
			'closeOnSelect'
		]);
	const p = En({
			id: C.with(() => r()),
			disabled: C.with(() => o()),
			onSelect: C.with(() => g()),
			ref: C.with(
				() => n(),
				(w) => n(w)
			),
			closeOnSelect: C.with(() => s())
		}),
		d = I(() => j(a, p.props));
	var u = T(),
		m = S(u);
	{
		var _ = (w) => {
				var f = T(),
					v = S(f);
				x(
					v,
					() => t.child,
					() => ({ props: i(d) })
				),
					y(w, f);
			},
			P = (w) => {
				var f = Kn();
				let v;
				var k = q(f);
				x(k, () => t.children ?? Q), V(f), dt(() => (v = U(f, v, { ...i(d) }))), y(w, f);
			};
		Y(m, (w) => {
			t.child ? w(_) : w(P, !1);
		});
	}
	y(e, u), L();
}
var Nn = X('<div><!></div>');
function Gn(e, t) {
	z(t, !0);
	let n = h(t, 'ref', 15, null),
		r = h(t, 'id', 19, Yt),
		o = rt(t, ['$$slots', '$$events', '$$legacy', 'children', 'child', 'ref', 'id']);
	const g = Dn({
			id: C.with(() => r()),
			ref: C.with(
				() => n(),
				(m) => n(m)
			)
		}),
		s = I(() => j(o, g.props));
	var a = T(),
		p = S(a);
	{
		var d = (m) => {
				var _ = T(),
					P = S(_);
				x(
					P,
					() => t.child,
					() => ({ props: i(s) })
				),
					y(m, _);
			},
			u = (m) => {
				var _ = Nn();
				let P;
				var w = q(_);
				x(w, () => t.children ?? Q), V(_), dt(() => (P = U(_, P, { ...i(s) }))), y(m, _);
			};
		Y(p, (m) => {
			t.child ? m(d) : m(u, !1);
		});
	}
	y(e, a), L();
}
function pr(e, t) {
	z(t, !0);
	let n = h(t, 'open', 15, !1),
		r = h(t, 'onOpenChange', 3, J);
	Ze({
		variant: C.with(() => 'dialog'),
		open: C.with(
			() => n(),
			(s) => {
				n(s), r()(s);
			}
		)
	});
	var o = T(),
		g = S(o);
	x(g, () => t.children ?? Q), y(e, o), L();
}
function zn(e, t) {
	z(t, !0);
	let n = h(t, 'open', 15, !1),
		r = h(t, 'dir', 3, 'ltr'),
		o = h(t, 'onOpenChange', 3, J),
		g = h(t, '_internal_variant', 3, 'dropdown-menu');
	const s = An({
		variant: C.with(() => g()),
		dir: C.with(() => r()),
		onClose: () => {
			n(!1), o()(!1);
		}
	});
	On(s, {
		open: C.with(
			() => n(),
			(a) => {
				n(a), o()(a);
			}
		)
	}),
		$e(e, {
			children: (a, p) => {
				var d = T(),
					u = S(d);
				x(u, () => t.children ?? Q), y(a, d);
			},
			$$slots: { default: !0 }
		}),
		L();
}
var Ln = X('<div><div><!></div></div>'),
	Hn = X('<!> <!>', 1),
	Wn = X('<div><div><!></div></div>'),
	Bn = X('<!> <!>', 1);
function qn(e, t) {
	z(t, !0);
	let n = h(t, 'id', 19, Yt),
		r = h(t, 'ref', 15, null),
		o = h(t, 'loop', 3, !0),
		g = h(t, 'onInteractOutside', 3, J),
		s = h(t, 'onEscapeKeydown', 3, J),
		a = h(t, 'onCloseAutoFocus', 3, J),
		p = h(t, 'forceMount', 3, !1),
		d = rt(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'id',
			'child',
			'children',
			'ref',
			'loop',
			'onInteractOutside',
			'onEscapeKeydown',
			'onCloseAutoFocus',
			'forceMount'
		]);
	const u = Fn({
			id: C.with(() => n()),
			loop: C.with(() => o()),
			ref: C.with(
				() => r(),
				(M) => r(M)
			),
			onCloseAutoFocus: C.with(() => a())
		}),
		m = I(() => j(d, u.props));
	function _(M) {
		u.handleInteractOutside(M),
			!M.defaultPrevented && (g()(M), !M.defaultPrevented && u.parentMenu.onClose());
	}
	function P(M) {
		s()(M), !M.defaultPrevented && u.parentMenu.onClose();
	}
	var w = T(),
		f = S(w);
	{
		var v = (M) => {
				tn(
					M,
					lt(
						() => i(m),
						() => u.popperProps,
						{
							get enabled() {
								return u.parentMenu.opts.open.current;
							},
							onInteractOutside: _,
							onEscapeKeydown: P,
							trapFocus: !0,
							get loop() {
								return o();
							},
							forceMount: !0,
							get id() {
								return n();
							},
							popper: (st, D) => {
								let it = () => (D == null ? void 0 : D().props),
									jt = () => (D == null ? void 0 : D().wrapperProps);
								var It = Hn();
								const K = I(() => j(it(), { style: le('dropdown-menu') }));
								var St = S(It);
								{
									var kt = (F) => {
											var R = T(),
												$ = S(R),
												B = ce(() => ({ props: i(K), wrapperProps: jt(), ...u.snippetProps }));
											x(
												$,
												() => t.child,
												() => i(B)
											),
												y(F, R);
										},
										Tt = (F) => {
											var R = Ln();
											let $;
											var B = q(R);
											let E;
											var N = q(B);
											x(N, () => t.children ?? Q),
												V(B),
												V(R),
												dt(() => {
													($ = U(R, $, { ...jt() })), (E = U(B, E, { ...i(K) }));
												}),
												y(F, R);
										};
									Y(St, (F) => {
										t.child ? F(kt) : F(Tt, !1);
									});
								}
								var At = ae(St, 2);
								he(At, {
									get mounted() {
										return u.mounted;
									},
									set mounted(F) {
										u.mounted = F;
									}
								}),
									y(st, It);
							},
							$$slots: { popper: !0 }
						}
					)
				);
			},
			k = (M) => {
				var Z = T(),
					st = S(Z);
				{
					var D = (it) => {
						en(
							it,
							lt(
								() => i(m),
								() => u.popperProps,
								{
									get present() {
										return u.parentMenu.opts.open.current;
									},
									onInteractOutside: _,
									onEscapeKeydown: P,
									trapFocus: !0,
									get loop() {
										return o();
									},
									forceMount: !1,
									get id() {
										return n();
									},
									popper: (It, K) => {
										let St = () => (K == null ? void 0 : K().props),
											kt = () => (K == null ? void 0 : K().wrapperProps);
										var Tt = Bn();
										const At = I(() => j(St(), { style: le('dropdown-menu') }));
										var F = S(Tt);
										{
											var R = (E) => {
													var N = T(),
														Ot = S(N),
														ut = ce(() => ({
															props: i(At),
															wrapperProps: kt(),
															...u.snippetProps
														}));
													x(
														Ot,
														() => t.child,
														() => i(ut)
													),
														y(E, N);
												},
												$ = (E) => {
													var N = Wn();
													let Ot;
													var ut = q(N);
													let ie;
													var Ae = q(ut);
													x(Ae, () => t.children ?? Q),
														V(ut),
														V(N),
														dt(() => {
															(Ot = U(N, Ot, { ...kt() })), (ie = U(ut, ie, { ...i(At) }));
														}),
														y(E, N);
												};
											Y(F, (E) => {
												t.child ? E(R) : E($, !1);
											});
										}
										var B = ae(F, 2);
										he(B, {
											get mounted() {
												return u.mounted;
											},
											set mounted(E) {
												u.mounted = E;
											}
										}),
											y(It, Tt);
									},
									$$slots: { popper: !0 }
								}
							)
						);
					};
					Y(
						st,
						(it) => {
							p() || it(D);
						},
						!0
					);
				}
				y(M, Z);
			};
		Y(f, (M) => {
			p() ? M(v) : M(k, !1);
		});
	}
	y(e, w), L();
}
var Vn = X('<button><!></button>');
function Yn(e, t) {
	z(t, !0);
	let n = h(t, 'id', 19, Yt),
		r = h(t, 'ref', 15, null),
		o = h(t, 'disabled', 3, !1),
		g = h(t, 'type', 3, 'button'),
		s = rt(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'id',
			'ref',
			'child',
			'children',
			'disabled',
			'type'
		]);
	const a = xn({
			id: C.with(() => n()),
			disabled: C.with(() => o() ?? !1),
			ref: C.with(
				() => r(),
				(d) => r(d)
			)
		}),
		p = I(() => j(s, a.props, { type: g() }));
	nn(e, {
		get id() {
			return n();
		},
		children: (d, u) => {
			var m = T(),
				_ = S(m);
			{
				var P = (f) => {
						var v = T(),
							k = S(v);
						x(
							k,
							() => t.child,
							() => ({ props: i(p) })
						),
							y(f, v);
					},
					w = (f) => {
						var v = Vn();
						let k;
						var M = q(v);
						x(M, () => t.children ?? Q), V(v), dt(() => (k = U(v, k, { ...i(p) }))), y(f, v);
					};
				Y(_, (f) => {
					t.child ? f(P) : f(w, !1);
				});
			}
			y(d, m);
		},
		$$slots: { default: !0 }
	}),
		L();
}
let at = G(!1);
const O = class O {
	constructor() {
		fe(
			() => (
				O._refs === 0 &&
					(O._cleanup = Fe(() => {
						const t = [],
							n = (o) => {
								A(at, !1);
							},
							r = (o) => {
								A(at, !0);
							};
						return (
							t.push(
								Qt(document, 'pointerdown', n, { capture: !0 }),
								Qt(document, 'pointermove', n, { capture: !0 }),
								Qt(document, 'keydown', r, { capture: !0 })
							),
							Ee(...t)
						);
					})),
				O._refs++,
				() => {
					var t;
					O._refs--, O._refs === 0 && (A(at, !1), (t = O._cleanup) == null || t.call(O));
				}
			)
		);
	}
	get current() {
		return i(at);
	}
	set current(t) {
		A(at, W(t));
	}
};
l(O, '_refs', 0), l(O, '_cleanup');
let Zt = O;
function fr(e, t) {
	z(t, !0);
	let n = h(t, 'ref', 15, null),
		r = h(t, 'sideOffset', 3, 4),
		o = rt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'sideOffset', 'portalProps', 'class']);
	var g = T(),
		s = S(g);
	Xt(
		s,
		() => rn,
		(a, p) => {
			p(
				a,
				lt(() => t.portalProps, {
					children: (d, u) => {
						var m = T(),
							_ = S(m);
						const P = I(() =>
							ye(
								'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md outline-none',
								t.class
							)
						);
						Xt(
							_,
							() => qn,
							(w, f) => {
								f(
									w,
									lt(
										{
											get sideOffset() {
												return r();
											},
											get class() {
												return i(P);
											}
										},
										() => o,
										{
											get ref() {
												return n();
											},
											set ref(v) {
												n(v);
											}
										}
									)
								);
							}
						),
							y(d, m);
					},
					$$slots: { default: !0 }
				})
			);
		}
	),
		y(e, g),
		L();
}
function gr(e, t) {
	z(t, !0);
	let n = h(t, 'ref', 15, null),
		r = rt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'inset']);
	var o = T(),
		g = S(o);
	const s = I(() =>
		ye(
			'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
			t.inset && 'pl-8',
			t.class
		)
	);
	Xt(
		g,
		() => Rn,
		(a, p) => {
			p(
				a,
				lt(
					{
						get class() {
							return i(s);
						}
					},
					() => r,
					{
						get ref() {
							return n();
						},
						set ref(d) {
							n(d);
						}
					}
				)
			);
		}
	),
		y(e, o),
		L();
}
const mr = zn,
	vr = Yn,
	br = Gn;
export {
	fr as D,
	br as G,
	he as M,
	mr as R,
	vr as T,
	gr as a,
	pr as b,
	lr as c,
	dr as d,
	an as e,
	cn as f,
	on as g,
	dn as h,
	hn as i,
	ar as j,
	cr as k,
	ir as n,
	ur as p,
	hr as u
};
