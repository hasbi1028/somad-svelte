var Fe = Object.defineProperty;
var ue = (e) => {
	throw TypeError(e);
};
var Oe = (e, t, n) =>
	t in e ? Fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var l = (e, t, n) => Oe(e, typeof t != 'symbol' ? t + '' : t, n),
	Qt = (e, t, n) => t.has(e) || ue('Cannot ' + n);
var c = (e, t, n) => (Qt(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
	v = (e, t, n) =>
		t.has(e)
			? ue('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, n),
	Ot = (e, t, n, r) => (Qt(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
	Z = (e, t, n) => (Qt(e, t, 'access private method'), n);
import './Bg9kRutz.js';
import {
	p as H,
	a as W,
	b as G,
	g as i,
	e as A,
	h as I,
	u as fe,
	f as S,
	c as q,
	y as nt,
	r as V,
	t as dt,
	s as ae,
	d as ce,
	aQ as xe
} from './BHafZ7-g.js';
import { c as k, a as _, t as Q, v as Jt } from './D4wBL3Sd.js';
import { c as Xt } from './D-TmFHfb.js';
import { p as f, i as Y, r as rt, s as lt } from './CjIAJ7VA.js';
import { a as ge } from './Bsldq5z3.js';
import { s as E } from './CiWmPosG.js';
import { a as U } from './eK_4uKAs.js';
import { b as C, w as me, a as ot, m as j, u as Yt, e as Ee } from './iSg1OsVq.js';
import {
	A as Et,
	y as $t,
	z as te,
	B as ht,
	e as ve,
	j as De,
	H as be,
	D as Ke,
	n as $,
	o as Ne,
	E as Me,
	d as ee,
	G as Re,
	I as Ge,
	J as ne,
	K as ze,
	L as we,
	M as Le,
	N as He,
	O as We,
	C as Ut,
	Q as ye,
	f as _e,
	R as Be,
	T as tt,
	U as pt,
	V as qe,
	i as Ve,
	m as Ye,
	l as Ue,
	W as je,
	X as Qe,
	p as de,
	Y as Je,
	c as Xe,
	F as Ze,
	P as $e,
	q as tn,
	r as le,
	s as en,
	Z as nn
} from './DvUo5-ap.js';
import { p as L } from './BMat-oFk.js';
function rn(e) {
	return window.getComputedStyle(e).getPropertyValue('direction');
}
function on(e = 'ltr', t = 'horizontal') {
	return { horizontal: e === 'rtl' ? te : $t, vertical: ht }[t];
}
function sn(e = 'ltr', t = 'horizontal') {
	return { horizontal: e === 'rtl' ? $t : te, vertical: Et }[t];
}
function un(e = 'ltr', t = 'horizontal') {
	return (
		['ltr', 'rtl'].includes(e) || (e = 'ltr'),
		['horizontal', 'vertical'].includes(t) || (t = 'horizontal'),
		{ nextKey: on(e, t), prevKey: sn(e, t) }
	);
}
function an(e) {
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
	function o(s, a, h = !1) {
		var J;
		const d = document.getElementById(e.rootNodeId.current);
		if (!d || !s) return;
		const u = n();
		if (!u.length) return;
		const g = u.indexOf(s),
			y = rn(d),
			{ nextKey: P, prevKey: w } = un(y, e.orientation.current),
			p = e.loop.current,
			m = { [P]: g + 1, [w]: g - 1, [be]: 0, [ve]: u.length - 1 };
		if (h) {
			const st = P === ht ? $t : ht,
				D = w === Et ? te : Et;
			(m[st] = g + 1), (m[D] = g - 1);
		}
		let T = m[a.key];
		if (T === void 0) return;
		a.preventDefault(), T < 0 && p ? (T = u.length - 1) : T === u.length && p && (T = 0);
		const M = u[T];
		if (M)
			return M.focus(), (t.current = M.id), (J = e.onCandidateFocus) == null || J.call(e, M), M;
	}
	function b(s) {
		const a = n(),
			h = t.current !== null;
		return s && !h && a[0] === s
			? ((t.current = s.id), 0)
			: (s == null ? void 0 : s.id) === t.current
				? 0
				: -1;
	}
	return {
		setCurrentTabStopId(s) {
			t.current = s;
		},
		getTabIndex: b,
		handleKeydown: o,
		focusFirstCandidate: r,
		currentTabStopId: t
	};
}
function or(e, t, n = !0) {
	if (!(e.length === 0 || t < 0 || t >= e.length))
		return e.length === 1 && t === 0 ? e[0] : t === e.length - 1 ? (n ? e[0] : void 0) : e[t + 1];
}
function sr(e, t, n = !0) {
	if (!(e.length === 0 || t < 0 || t >= e.length))
		return e.length === 1 && t === 0 ? e[0] : t === 0 ? (n ? e[e.length - 1] : void 0) : e[t - 1];
}
function ir(e, t, n, r = !0) {
	if (e.length === 0 || t < 0 || t >= e.length) return;
	let o = t + n;
	return (
		r ? (o = ((o % e.length) + e.length) % e.length) : (o = Math.max(0, Math.min(o, e.length - 1))),
		e[o]
	);
}
function ur(e, t, n, r = !0) {
	if (e.length === 0 || t < 0 || t >= e.length) return;
	let o = t - n;
	return (
		r ? (o = ((o % e.length) + e.length) % e.length) : (o = Math.max(0, Math.min(o, e.length - 1))),
		e[o]
	);
}
function cn(e, t, n) {
	const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t,
		b = n ? e.indexOf(n) : -1;
	let s = dn(e, Math.max(b, 0));
	o.length === 1 && (s = s.filter((d) => d !== n));
	const h = s.find((d) => (d == null ? void 0 : d.toLowerCase().startsWith(o.toLowerCase())));
	return h !== n ? h : void 0;
}
function dn(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function ln(e) {
	const t = Ke('', 1e3),
		n = (e == null ? void 0 : e.onMatch) ?? ((s) => s.focus()),
		r = (e == null ? void 0 : e.getCurrentItem) ?? (() => document.activeElement);
	function o(s, a) {
		var P, w;
		if (!a.length) return;
		t.current = t.current + s;
		const h = r(),
			d =
				((w = (P = a.find((p) => p === h)) == null ? void 0 : P.textContent) == null
					? void 0
					: w.trim()) ?? '',
			u = a.map((p) => {
				var m;
				return ((m = p.textContent) == null ? void 0 : m.trim()) ?? '';
			}),
			g = cn(u, t.current, d),
			y = a.find((p) => {
				var m;
				return ((m = p.textContent) == null ? void 0 : m.trim()) === g;
			});
		return y && n(y), y;
	}
	function b() {
		t.current = '';
	}
	return { search: t, handleTypeaheadSearch: o, resetTypeahead: b };
}
function he(e, t) {
	H(t, !0);
	let n = f(t, 'mounted', 15, !1),
		r = f(t, 'onMountedChange', 3, $);
	Ne(
		() => (
			n(!0),
			r()(!0),
			() => {
				n(!1), r()(!1);
			}
		)
	),
		W();
}
const hn = [Me, ee],
	pn = [ht, Re, be],
	Ce = [Et, Ge, ve],
	fn = [...pn, ...Ce];
function gn(e) {
	return e === 'indeterminate';
}
function mn(e) {
	return gn(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
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
function vn(e, t) {
	if (!ne(e, ct())) return bn(e, t);
	const n = ze(we(e).body, ct());
	t === 'prev' && n.reverse();
	const r = n.indexOf(e);
	return r === -1 ? document.body : n.slice(r + 1)[0];
}
function bn(e, t) {
	if (!Le(e, ct())) return document.body;
	const n = He(we(e).body, ct());
	t === 'prev' && n.reverse();
	const r = n.indexOf(e);
	return r === -1 ? document.body : (n.slice(r + 1).find((b) => ne(b, ct())) ?? document.body);
}
const re = new Ut('Menu.Root'),
	oe = new Ut('Menu.Root | Menu.Sub'),
	se = new Ut('Menu.Content'),
	Pe = new Ut('Menu.Group | Menu.RadioGroup'),
	Mn = new Ue('bitsmenuopen', { bubbles: !1, cancelable: !0 });
var ft, gt;
class wn {
	constructor(t) {
		l(this, 'opts');
		l(this, 'isUsingKeyboard', new Zt());
		v(this, ft, G(!1));
		v(this, gt, G(!1));
		this.opts = t;
	}
	get ignoreCloseAutoFocus() {
		return i(c(this, ft));
	}
	set ignoreCloseAutoFocus(t) {
		A(c(this, ft), L(t));
	}
	get isPointerInTransit() {
		return i(c(this, gt));
	}
	set isPointerInTransit(t) {
		A(c(this, gt), L(t));
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
		v(this, mt, G(null));
		v(this, vt, G(null));
		(this.opts = t),
			(this.root = n),
			(this.parentMenu = r),
			r &&
				me(
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
		A(c(this, mt), L(t));
	}
	get triggerNode() {
		return i(c(this, vt));
	}
	set triggerNode(t) {
		A(c(this, vt), L(t));
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
var bt, Mt, wt, yt, _t, z, Ie, xt, Dt, Kt;
class _n {
	constructor(t, n) {
		v(this, z);
		l(this, 'opts');
		l(this, 'parentMenu');
		v(this, bt, G(''));
		v(this, Mt, 0);
		v(this, wt);
		l(this, 'rovingFocusGroup');
		v(this, yt, G(!1));
		v(this, _t);
		l(this, 'onCloseAutoFocus', (t) => {
			this.opts.onCloseAutoFocus.current(t),
				!(t.defaultPrevented || c(this, _t)) &&
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
		v(
			this,
			Dt,
			I(() => ({ open: this.parentMenu.opts.open.current }))
		);
		v(
			this,
			Kt,
			I(() => ({
				id: this.opts.id.current,
				role: 'menu',
				'aria-orientation': Xe('vertical'),
				[this.parentMenu.root.getAttr('content')]: '',
				'data-state': ye(this.parentMenu.opts.open.current),
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
			Ot(this, _t, t.isSub ?? !1),
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
			Ot(this, wt, ln().handleTypeaheadSearch),
			(this.rovingFocusGroup = an({
				rootNodeId: this.parentMenu.contentId,
				candidateAttr: this.parentMenu.root.getAttr('item'),
				loop: this.opts.loop,
				orientation: C.with(() => 'vertical')
			})),
			me(
				() => this.parentMenu.contentNode,
				(r) => {
					if (!r) return;
					const o = () => {
						tt(() => {
							this.parentMenu.root.isUsingKeyboard.current &&
								this.rovingFocusGroup.focusFirstCandidate();
						});
					};
					return Mn.listen(r, o);
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
		A(c(this, bt), L(t));
	}
	get mounted() {
		return i(c(this, yt));
	}
	set mounted(t) {
		A(c(this, yt), L(t));
	}
	handleTabKeyDown(t) {
		let n = this.parentMenu;
		for (; n.parentMenu !== null; ) n = n.parentMenu;
		if (!n.triggerNode) return;
		t.preventDefault();
		const r = vn(n.triggerNode, t.shiftKey ? 'prev' : 'next');
		r
			? ((this.parentMenu.root.ignoreCloseAutoFocus = !0),
				n.onClose(),
				r.focus(),
				tt(() => {
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
			b = t.ctrlKey || t.altKey || t.metaKey,
			s = t.key.length === 1;
		if (this.rovingFocusGroup.handleKeydown(n, t) || t.code === 'Space') return;
		const h = Z(this, z, Ie).call(this);
		o && !b && s && c(this, wt).call(this, t.key, h),
			((u = t.target) == null ? void 0 : u.id) === this.parentMenu.contentId.current &&
				fn.includes(t.key) &&
				(t.preventDefault(), Ce.includes(t.key) && h.reverse(), Qe(h));
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
			tt(() => this.rovingFocusGroup.focusFirstCandidate());
	}
	onItemEnter() {
		return Z(this, z, xt).call(this);
	}
	onItemLeave(t) {
		if (
			t.currentTarget.hasAttribute(this.parentMenu.root.getAttr('sub-trigger')) ||
			Z(this, z, xt).call(this) ||
			this.parentMenu.root.isUsingKeyboard.current
		)
			return;
		const n = this.parentMenu.contentNode;
		n == null || n.focus(), this.rovingFocusGroup.setCurrentTabStopId('');
	}
	onTriggerLeave() {
		return !!Z(this, z, xt).call(this);
	}
	handleInteractOutside(t) {
		var r;
		if (!Je(t.target)) return;
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
	(yt = new WeakMap()),
	(_t = new WeakMap()),
	(z = new WeakSet()),
	(Ie = function () {
		const t = this.parentMenu.contentNode;
		return t
			? Array.from(
					t.querySelectorAll(`[${this.parentMenu.root.getAttr('item')}]:not([data-disabled])`)
				)
			: [];
	}),
	(xt = function () {
		return this.parentMenu.root.isPointerInTransit;
	}),
	(Dt = new WeakMap()),
	(Kt = new WeakMap());
var et, Nt;
class Se {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'content');
		v(this, et, G(!1));
		v(
			this,
			Nt,
			I(() => ({
				id: this.opts.id.current,
				tabindex: -1,
				role: 'menuitem',
				'aria-disabled': qe(this.opts.disabled.current),
				'data-disabled': _e(this.opts.disabled.current),
				'data-highlighted': i(c(this, et)) ? '' : void 0,
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
		tt(() => {
			t.defaultPrevented || this.opts.disabled.current || A(c(this, et), !0);
		});
	}
	onblur(t) {
		tt(() => {
			t.defaultPrevented || A(c(this, et), !1);
		});
	}
	get props() {
		return i(c(this, Nt));
	}
}
(et = new WeakMap()), (Nt = new WeakMap());
var Ct, Rt, ke, Gt;
class Te {
	constructor(t, n) {
		v(this, Rt);
		l(this, 'opts');
		l(this, 'item');
		v(this, Ct, !1);
		l(this, 'root');
		v(
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
		if (!(this.item.opts.disabled.current || (n && t.key === ee)) && hn.includes(t.key)) {
			if (!pt(t.currentTarget)) return;
			t.currentTarget.click(), t.preventDefault();
		}
	}
	onclick(t) {
		this.item.opts.disabled.current || Z(this, Rt, ke).call(this);
	}
	onpointerup(t) {
		var n;
		if (!t.defaultPrevented && !c(this, Ct)) {
			if (!pt(t.currentTarget)) return;
			(n = t.currentTarget) == null || n.click();
		}
	}
	onpointerdown(t) {
		Ot(this, Ct, !0);
	}
	get props() {
		return i(c(this, Gt));
	}
}
(Ct = new WeakMap()),
	(Rt = new WeakSet()),
	(ke = function () {
		if (this.item.opts.disabled.current) return;
		const t = new CustomEvent('menuitemselect', { bubbles: !0, cancelable: !0 });
		this.opts.onSelect.current(t),
			tt(() => {
				if (t.defaultPrevented) {
					this.item.content.parentMenu.root.isUsingKeyboard.current = !1;
					return;
				}
				this.opts.closeOnSelect.current && this.item.content.parentMenu.root.opts.onClose();
			});
	}),
	(Gt = new WeakMap());
var zt, Lt;
class Cn {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'item');
		v(
			this,
			zt,
			I(() => ({
				checked: this.opts.checked.current,
				indeterminate: this.opts.indeterminate.current
			}))
		);
		v(
			this,
			Lt,
			I(() => ({
				...this.item.props,
				role: 'menuitemcheckbox',
				'aria-checked': Ve(this.opts.checked.current, this.opts.indeterminate.current),
				'data-state': mn(this.opts.checked.current),
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
class Pn {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'root');
		v(this, Pt, G(void 0));
		v(
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
		A(c(this, Pt), L(t));
	}
	get props() {
		return i(c(this, Ht));
	}
}
(Pt = new WeakMap()), (Ht = new WeakMap());
var Wt;
class In {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'group');
		v(
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
class Sn {
	constructor(t, n) {
		l(this, 'opts');
		l(this, 'root');
		v(
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
		v(
			this,
			qt,
			I(() => {
				if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current)
					return this.parentMenu.contentId.current;
			})
		);
		v(
			this,
			Vt,
			I(() => ({
				id: this.opts.id.current,
				disabled: this.opts.disabled.current,
				'aria-haspopup': 'menu',
				'aria-expanded': Be(this.parentMenu.opts.open.current),
				'aria-controls': i(c(this, qt)),
				'data-disabled': _e(this.opts.disabled.current),
				'data-state': ye(this.parentMenu.opts.open.current),
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
			if (t.key === ee || t.key === Me) {
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
function kn(e) {
	const t = new wn(e);
	return (
		We.set({
			get ignoreCloseAutoFocus() {
				return t.ignoreCloseAutoFocus;
			}
		}),
		re.set(t)
	);
}
function An(e, t) {
	return oe.set(new yn(t, e, null));
}
function Fn(e) {
	return new Tn(e, oe.get());
}
function On(e) {
	return se.set(new _n(e, oe.get()));
}
function xn(e) {
	const t = new Se(e, se.get());
	return new Te(e, t);
}
function ar(e) {
	const t = new Te(e, new Se(e, se.get()));
	return new Cn(e, t);
}
function En(e) {
	return Pe.set(new Pn(e, re.get()));
}
function cr(e) {
	return new In(e, Pe.get());
}
function dr(e) {
	return new Sn(e, re.get());
}
var Dn = Q('<div><!></div>');
function Kn(e, t) {
	H(t, !0);
	let n = f(t, 'ref', 15, null),
		r = f(t, 'id', 19, Yt),
		o = f(t, 'disabled', 3, !1),
		b = f(t, 'onSelect', 3, $),
		s = f(t, 'closeOnSelect', 3, !0),
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
	const h = xn({
			id: C.with(() => r()),
			disabled: C.with(() => o()),
			onSelect: C.with(() => b()),
			ref: C.with(
				() => n(),
				(w) => n(w)
			),
			closeOnSelect: C.with(() => s())
		}),
		d = I(() => j(a, h.props));
	var u = k(),
		g = S(u);
	{
		var y = (w) => {
				var p = k(),
					m = S(p);
				E(
					m,
					() => t.child,
					() => ({ props: i(d) })
				),
					_(w, p);
			},
			P = (w) => {
				var p = Dn();
				let m;
				var T = q(p);
				E(T, () => t.children ?? nt), V(p), dt(() => (m = U(p, m, { ...i(d) }))), _(w, p);
			};
		Y(g, (w) => {
			t.child ? w(y) : w(P, !1);
		});
	}
	_(e, u), W();
}
var Nn = Q('<div><!></div>');
function Rn(e, t) {
	H(t, !0);
	let n = f(t, 'ref', 15, null),
		r = f(t, 'id', 19, Yt),
		o = rt(t, ['$$slots', '$$events', '$$legacy', 'children', 'child', 'ref', 'id']);
	const b = En({
			id: C.with(() => r()),
			ref: C.with(
				() => n(),
				(g) => n(g)
			)
		}),
		s = I(() => j(o, b.props));
	var a = k(),
		h = S(a);
	{
		var d = (g) => {
				var y = k(),
					P = S(y);
				E(
					P,
					() => t.child,
					() => ({ props: i(s) })
				),
					_(g, y);
			},
			u = (g) => {
				var y = Nn();
				let P;
				var w = q(y);
				E(w, () => t.children ?? nt), V(y), dt(() => (P = U(y, P, { ...i(s) }))), _(g, y);
			};
		Y(h, (g) => {
			t.child ? g(d) : g(u, !1);
		});
	}
	_(e, a), W();
}
function Gn(e, t) {
	H(t, !0);
	let n = f(t, 'open', 15, !1),
		r = f(t, 'dir', 3, 'ltr'),
		o = f(t, 'onOpenChange', 3, $),
		b = f(t, '_internal_variant', 3, 'dropdown-menu');
	const s = kn({
		variant: C.with(() => b()),
		dir: C.with(() => r()),
		onClose: () => {
			n(!1), o()(!1);
		}
	});
	An(s, {
		open: C.with(
			() => n(),
			(a) => {
				n(a), o()(a);
			}
		)
	}),
		Ze(e, {
			children: (a, h) => {
				var d = k(),
					u = S(d);
				E(u, () => t.children ?? nt), _(a, d);
			},
			$$slots: { default: !0 }
		}),
		W();
}
var zn = Q('<div><div><!></div></div>'),
	Ln = Q('<!> <!>', 1),
	Hn = Q('<div><div><!></div></div>'),
	Wn = Q('<!> <!>', 1);
function Bn(e, t) {
	H(t, !0);
	let n = f(t, 'id', 19, Yt),
		r = f(t, 'ref', 15, null),
		o = f(t, 'loop', 3, !0),
		b = f(t, 'onInteractOutside', 3, $),
		s = f(t, 'onEscapeKeydown', 3, $),
		a = f(t, 'onCloseAutoFocus', 3, $),
		h = f(t, 'forceMount', 3, !1),
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
	const u = On({
			id: C.with(() => n()),
			loop: C.with(() => o()),
			ref: C.with(
				() => r(),
				(M) => r(M)
			),
			onCloseAutoFocus: C.with(() => a())
		}),
		g = I(() => j(d, u.props));
	function y(M) {
		u.handleInteractOutside(M),
			!M.defaultPrevented && (b()(M), !M.defaultPrevented && u.parentMenu.onClose());
	}
	function P(M) {
		s()(M), !M.defaultPrevented && u.parentMenu.onClose();
	}
	var w = k(),
		p = S(w);
	{
		var m = (M) => {
				$e(
					M,
					lt(
						() => i(g),
						() => u.popperProps,
						{
							get enabled() {
								return u.parentMenu.opts.open.current;
							},
							onInteractOutside: y,
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
								var It = Ln();
								const K = I(() => j(it(), { style: le('dropdown-menu') }));
								var St = S(It);
								{
									var Tt = (O) => {
											var N = k(),
												X = S(N),
												B = ce(() => ({ props: i(K), wrapperProps: jt(), ...u.snippetProps }));
											E(
												X,
												() => t.child,
												() => i(B)
											),
												_(O, N);
										},
										kt = (O) => {
											var N = zn();
											let X;
											var B = q(N);
											let x;
											var R = q(B);
											E(R, () => t.children ?? nt),
												V(B),
												V(N),
												dt(() => {
													(X = U(N, X, { ...jt() })), (x = U(B, x, { ...i(K) }));
												}),
												_(O, N);
										};
									Y(St, (O) => {
										t.child ? O(Tt) : O(kt, !1);
									});
								}
								var At = ae(St, 2);
								he(At, {
									get mounted() {
										return u.mounted;
									},
									set mounted(O) {
										u.mounted = O;
									}
								}),
									_(st, It);
							},
							$$slots: { popper: !0 }
						}
					)
				);
			},
			T = (M) => {
				var J = k(),
					st = S(J);
				{
					var D = (it) => {
						tn(
							it,
							lt(
								() => i(g),
								() => u.popperProps,
								{
									get present() {
										return u.parentMenu.opts.open.current;
									},
									onInteractOutside: y,
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
											Tt = () => (K == null ? void 0 : K().wrapperProps);
										var kt = Wn();
										const At = I(() => j(St(), { style: le('dropdown-menu') }));
										var O = S(kt);
										{
											var N = (x) => {
													var R = k(),
														Ft = S(R),
														ut = ce(() => ({
															props: i(At),
															wrapperProps: Tt(),
															...u.snippetProps
														}));
													E(
														Ft,
														() => t.child,
														() => i(ut)
													),
														_(x, R);
												},
												X = (x) => {
													var R = Hn();
													let Ft;
													var ut = q(R);
													let ie;
													var Ae = q(ut);
													E(Ae, () => t.children ?? nt),
														V(ut),
														V(R),
														dt(() => {
															(Ft = U(R, Ft, { ...Tt() })), (ie = U(ut, ie, { ...i(At) }));
														}),
														_(x, R);
												};
											Y(O, (x) => {
												t.child ? x(N) : x(X, !1);
											});
										}
										var B = ae(O, 2);
										he(B, {
											get mounted() {
												return u.mounted;
											},
											set mounted(x) {
												u.mounted = x;
											}
										}),
											_(It, kt);
									},
									$$slots: { popper: !0 }
								}
							)
						);
					};
					Y(
						st,
						(it) => {
							h() || it(D);
						},
						!0
					);
				}
				_(M, J);
			};
		Y(p, (M) => {
			h() ? M(m) : M(T, !1);
		});
	}
	_(e, w), W();
}
var qn = Q('<button><!></button>');
function Vn(e, t) {
	H(t, !0);
	let n = f(t, 'id', 19, Yt),
		r = f(t, 'ref', 15, null),
		o = f(t, 'disabled', 3, !1),
		b = f(t, 'type', 3, 'button'),
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
	const a = Fn({
			id: C.with(() => n()),
			disabled: C.with(() => o() ?? !1),
			ref: C.with(
				() => r(),
				(d) => r(d)
			)
		}),
		h = I(() => j(s, a.props, { type: b() }));
	en(e, {
		get id() {
			return n();
		},
		children: (d, u) => {
			var g = k(),
				y = S(g);
			{
				var P = (p) => {
						var m = k(),
							T = S(m);
						E(
							T,
							() => t.child,
							() => ({ props: i(h) })
						),
							_(p, m);
					},
					w = (p) => {
						var m = qn();
						let T;
						var M = q(m);
						E(M, () => t.children ?? nt), V(m), dt(() => (T = U(m, T, { ...i(h) }))), _(p, m);
					};
				Y(y, (p) => {
					t.child ? p(P) : p(w, !1);
				});
			}
			_(d, g);
		},
		$$slots: { default: !0 }
	}),
		W();
}
let at = G(!1);
const F = class F {
	constructor() {
		fe(
			() => (
				F._refs === 0 &&
					(F._cleanup = xe(() => {
						const t = [],
							n = (o) => {
								A(at, !1);
							},
							r = (o) => {
								A(at, !0);
							};
						return (
							t.push(
								Jt(document, 'pointerdown', n, { capture: !0 }),
								Jt(document, 'pointermove', n, { capture: !0 }),
								Jt(document, 'keydown', r, { capture: !0 })
							),
							Ee(...t)
						);
					})),
				F._refs++,
				() => {
					var t;
					F._refs--, F._refs === 0 && (A(at, !1), (t = F._cleanup) == null || t.call(F));
				}
			)
		);
	}
	get current() {
		return i(at);
	}
	set current(t) {
		A(at, L(t));
	}
};
l(F, '_refs', 0), l(F, '_cleanup');
let Zt = F;
function lr(e, t) {
	H(t, !0);
	let n = f(t, 'ref', 15, null),
		r = f(t, 'sideOffset', 3, 4),
		o = rt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'sideOffset', 'portalProps', 'class']);
	var b = k(),
		s = S(b);
	Xt(
		s,
		() => nn,
		(a, h) => {
			h(
				a,
				lt(() => t.portalProps, {
					children: (d, u) => {
						var g = k(),
							y = S(g);
						const P = I(() =>
							ge(
								'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md outline-none',
								t.class
							)
						);
						Xt(
							y,
							() => Bn,
							(w, p) => {
								p(
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
											set ref(m) {
												n(m);
											}
										}
									)
								);
							}
						),
							_(d, g);
					},
					$$slots: { default: !0 }
				})
			);
		}
	),
		_(e, b),
		W();
}
function hr(e, t) {
	H(t, !0);
	let n = f(t, 'ref', 15, null),
		r = rt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'inset']);
	var o = k(),
		b = S(o);
	const s = I(() =>
		ge(
			'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
			t.inset && 'pl-8',
			t.class
		)
	);
	Xt(
		b,
		() => Kn,
		(a, h) => {
			h(
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
		_(e, o),
		W();
}
const pr = Gn,
	fr = Vn,
	gr = Rn;
export {
	lr as D,
	gr as G,
	he as M,
	pr as R,
	fr as T,
	hr as a,
	ar as b,
	un as c,
	cr as d,
	an as e,
	cn as f,
	rn as g,
	ln as h,
	ir as i,
	ur as j,
	or as n,
	sr as p,
	dr as u
};
