var Ro = Object.defineProperty;
var so = (a) => {
	throw TypeError(a);
};
var Go = (a, t, r) =>
	t in a ? Ro(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (a[t] = r);
var H = (a, t, r) => Go(a, typeof t != 'symbol' ? t + '' : t, r),
	Er = (a, t, r) => t.has(a) || so('Cannot ' + r);
var h = (a, t, r) => (Er(a, t, 'read from private field'), r ? r.call(a) : t.get(a)),
	O = (a, t, r) =>
		t.has(a)
			? so('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(a)
				: t.set(a, r),
	Br = (a, t, r, n) => (Er(a, t, 'write to private field'), n ? n.call(a, r) : t.set(a, r), r),
	Ue = (a, t, r) => (Er(a, t, 'access private method'), r);
import '../chunks/Bg9kRutz.js';
import {
	f as i,
	w as G,
	v as l,
	a3 as Qr,
	u as It,
	q as St,
	a2 as Uo,
	p as zt,
	t as $t,
	a as Dt,
	d as nr,
	c as A,
	x as Zt,
	r as z,
	s,
	aO as Vo,
	aN as Eo,
	n as c
} from '../chunks/DQMf8gWK.js';
import { s as ar } from '../chunks/CPLw4cna.js';
import { e as V, a as e, t as d, b as $ } from '../chunks/BGOrq1ZG.js';
import { c as o } from '../chunks/D7_cnrTr.js';
import { r as Bo, s as Nt, a as ao } from '../chunks/DvbRtjlS.js';
import { p as Tt } from '../chunks/BJa4LW-r.js';
import { l as Fo, s as jt, p as x, i as At, r as Bt, b as Ko } from '../chunks/DjKtoK8y.js';
import { B as Lo } from '../chunks/DiI5vKnB.js';
import { a as jo, b as Fr, c as no, d as io, e as qo, B as Wo } from '../chunks/J8Vpfqcd.js';
import { a as he, c as Yo, B as de } from '../chunks/DWr6XhLj.js';
import { C as Ne } from '../chunks/CTqa1KBK.js';
import { C as Ce, a as ke, b as rr, c as Ie } from '../chunks/tqNMKigX.js';
import { C as Zo } from '../chunks/C7FUM4tv.js';
import {
	h as Jo,
	i as Qo,
	n as Xo,
	p as ts,
	j as es,
	k as rs,
	M as Xr,
	f as os,
	T as ss,
	D as as,
	G as ns,
	a as Kr,
	R as is
} from '../chunks/KMVKlTlO.js';
import { I as me } from '../chunks/CdbIut2i.js';
import { L as re } from '../chunks/JEuZ2Ig_.js';
import { e as ls, i as ds } from '../chunks/Ds4ehkC6.js';
import { s as mt } from '../chunks/D3E8oDJG.js';
import {
	B as us,
	C as to,
	R as bo,
	A as De,
	z as Ve,
	E as Yr,
	c as Zr,
	V as lo,
	D as $o,
	H as Po,
	G as xo,
	d as wo,
	e as Gr,
	O as yo,
	n as $e,
	a as cs,
	a5 as hs,
	a6 as vs,
	a7 as ps,
	v as So,
	P as fs,
	p as gs,
	F as _s,
	r as ms,
	h as bs,
	a8 as $s,
	g as No,
	Z as Ps,
	S as xs
} from '../chunks/B8S9RRQw.js';
import {
	w as Pe,
	a as Se,
	o as ws,
	s as ys,
	c as Ss,
	b as Y,
	u as xe,
	m as ie
} from '../chunks/B7uXBihW.js';
import { o as eo, p as Ns } from '../chunks/BTRVP7y_.js';
import { b as Co } from '../chunks/BTx9E6zY.js';
import { V as Cs } from '../chunks/gNrIG8ns.js';
import { T as ks, R as Is } from '../chunks/B30UQf1T.js';
import { T as Ts, a as As, b as or, c as sr, d as zs, e as Yt } from '../chunks/CAqpGiXc.js';
import { R as Te, T as Ae, a as ze, P as uo } from '../chunks/BRCSvknx.js';
import { P as co } from '../chunks/Bd-3lPh9.js';
import { S as Ds, D as Hs } from '../chunks/PBI3cEsC.js';
import { C as Os } from '../chunks/RBZk_sAS.js';
import { H as ho } from '../chunks/v68N3jfw.js';
import { S as vo, P as po, C as fo } from '../chunks/CEA1YfQ0.js';
import { U as go, S as Ms } from '../chunks/CWiE73gJ.js';
import { P as Rs } from '../chunks/BQKSChen.js';
import { D as _o } from '../chunks/4vG4j1h8.js';
import { C as Gs } from '../chunks/D16Zmgwe.js';
import '../chunks/69_IOA4Y.js';
import { s as Us } from '../chunks/jIU1MAPh.js';
import { I as Vs } from '../chunks/DcIEMM9l.js';
import { C as Es } from '../chunks/C5OltRP6.js';
import { C as Bs } from '../chunks/YG4ye7e7.js';
import { U as Fs } from '../chunks/BoPi1Apq.js';
function ko(a, t) {
	const r = Fo(t, ['children', '$$slots', '$$events', '$$legacy']);
	Vs(
		a,
		jt({ name: 'chevron-down' }, () => r, {
			iconNode: [['path', { d: 'm6 9 6 6 6-6' }]],
			children: (f, u) => {
				var C = V(),
					S = i(C);
				Us(S, t, 'default', {}, null), e(f, C);
			},
			$$slots: { default: !0 }
		})
	);
}
function Ks(a) {
	const t = us('', 1e3);
	function r(f, u) {
		if (!a.enabled || !u.length) return;
		t.current = t.current + f;
		const C = a.getCurrentItem(),
			S = u.find((k) => k === C) ?? '',
			E = u.map((k) => k ?? ''),
			w = Jo(E, t.current, S),
			m = u.find((k) => k === w);
		return m && a.onMatch(m), m;
	}
	function n() {
		t.current = '';
	}
	return { search: t, handleTypeaheadSearch: r, resetTypeahead: n };
}
const Ls = [Ve, $o, Po],
	js = [De, xo, wo],
	qs = [...Ls, ...js];
var Ee, Be, Fe, Ke, Le, je, qe, ir, lr, dr;
class Io {
	constructor(t) {
		H(this, 'opts');
		O(this, Ee, It(!1));
		O(this, Be, It(''));
		O(this, Fe, It(null));
		O(this, Ke, It(null));
		O(this, Le, It(null));
		O(this, je, It(''));
		O(this, qe, It(null));
		O(
			this,
			ir,
			G(() => (this.highlightedNode ? this.highlightedNode.getAttribute('data-value') : null))
		);
		O(
			this,
			lr,
			G(() => {
				if (this.highlightedNode) return this.highlightedNode.id;
			})
		);
		O(
			this,
			dr,
			G(() => (this.highlightedNode ? this.highlightedNode.getAttribute('data-label') : null))
		);
		H(this, 'isUsingKeyboard', !1);
		H(this, 'isCombobox', !1);
		H(this, 'bitsAttrs');
		(this.opts = t),
			(this.isCombobox = t.isCombobox),
			(this.bitsAttrs = ha(this)),
			Uo(() => {
				this.opts.open.current || this.setHighlightedNode(null);
			});
	}
	get touchedInput() {
		return l(h(this, Ee));
	}
	set touchedInput(t) {
		St(h(this, Ee), Tt(t));
	}
	get inputValue() {
		return l(h(this, Be));
	}
	set inputValue(t) {
		St(h(this, Be), Tt(t));
	}
	get inputNode() {
		return l(h(this, Fe));
	}
	set inputNode(t) {
		St(h(this, Fe), Tt(t));
	}
	get contentNode() {
		return l(h(this, Ke));
	}
	set contentNode(t) {
		St(h(this, Ke), Tt(t));
	}
	get triggerNode() {
		return l(h(this, Le));
	}
	set triggerNode(t) {
		St(h(this, Le), Tt(t));
	}
	get valueId() {
		return l(h(this, je));
	}
	set valueId(t) {
		St(h(this, je), Tt(t));
	}
	get highlightedNode() {
		return l(h(this, qe));
	}
	set highlightedNode(t) {
		St(h(this, qe), Tt(t));
	}
	get highlightedValue() {
		return l(h(this, ir));
	}
	get highlightedId() {
		return l(h(this, lr));
	}
	get highlightedLabel() {
		return l(h(this, dr));
	}
	setHighlightedNode(t, r = !1) {
		(this.highlightedNode = t),
			t && (this.isUsingKeyboard || r) && t.scrollIntoView({ block: 'nearest' });
	}
	getCandidateNodes() {
		const t = this.contentNode;
		return t ? Array.from(t.querySelectorAll(`[${this.bitsAttrs.item}]:not([data-disabled])`)) : [];
	}
	setHighlightedToFirstCandidate() {
		this.setHighlightedNode(null);
		const t = this.getCandidateNodes();
		t.length && this.setHighlightedNode(t[0]);
	}
	getNodeByValue(t) {
		return this.getCandidateNodes().find((n) => n.dataset.value === t) ?? null;
	}
	setOpen(t) {
		this.opts.open.current = t;
	}
	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}
	handleOpen() {
		this.setOpen(!0);
	}
	handleClose() {
		this.setHighlightedNode(null), this.setOpen(!1);
	}
	toggleMenu() {
		this.toggleOpen();
	}
}
(Ee = new WeakMap()),
	(Be = new WeakMap()),
	(Fe = new WeakMap()),
	(Ke = new WeakMap()),
	(Le = new WeakMap()),
	(je = new WeakMap()),
	(qe = new WeakMap()),
	(ir = new WeakMap()),
	(lr = new WeakMap()),
	(dr = new WeakMap());
var ur, cr, hr, vr;
class Ws extends Io {
	constructor(r) {
		super(r);
		H(this, 'opts');
		H(this, 'isMulti', !1);
		O(
			this,
			ur,
			G(() => this.opts.value.current !== '')
		);
		O(
			this,
			cr,
			G(() => {
				var n;
				return this.opts.items.current.length
					? (((n = this.opts.items.current.find((f) => f.value === this.opts.value.current)) == null
							? void 0
							: n.label) ?? '')
					: '';
			})
		);
		O(
			this,
			hr,
			G(() =>
				this.opts.items.current.length
					? this.opts.items.current.filter((n) => !n.disabled).map((n) => n.label)
					: []
			)
		);
		O(
			this,
			vr,
			G(() => !(this.isMulti || this.opts.items.current.length === 0))
		);
		(this.opts = r),
			Qr(() => {
				!this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
			}),
			Pe(
				() => this.opts.open.current,
				() => {
					this.opts.open.current && this.setInitialHighlightedNode();
				}
			);
	}
	get hasValue() {
		return l(h(this, ur));
	}
	get currentLabel() {
		return l(h(this, cr));
	}
	get candidateLabels() {
		return l(h(this, hr));
	}
	get dataTypeaheadEnabled() {
		return l(h(this, vr));
	}
	includesItem(r) {
		return this.opts.value.current === r;
	}
	toggleItem(r, n = r) {
		(this.opts.value.current = this.includesItem(r) ? '' : r), (this.inputValue = n);
	}
	setInitialHighlightedNode() {
		bo(() => {
			if (this.highlightedNode && document.contains(this.highlightedNode)) return;
			if (this.opts.value.current !== '') {
				const n = this.getNodeByValue(this.opts.value.current);
				if (n) {
					this.setHighlightedNode(n, !0);
					return;
				}
			}
			const r = this.getCandidateNodes()[0];
			r && this.setHighlightedNode(r, !0);
		});
	}
}
(ur = new WeakMap()), (cr = new WeakMap()), (hr = new WeakMap()), (vr = new WeakMap());
var pr;
class Ys extends Io {
	constructor(r) {
		super(r);
		H(this, 'opts');
		H(this, 'isMulti', !0);
		O(
			this,
			pr,
			G(() => this.opts.value.current.length > 0)
		);
		(this.opts = r),
			Pe(
				() => this.opts.open.current,
				() => {
					this.opts.open.current && this.setInitialHighlightedNode();
				}
			);
	}
	get hasValue() {
		return l(h(this, pr));
	}
	includesItem(r) {
		return this.opts.value.current.includes(r);
	}
	toggleItem(r, n = r) {
		this.includesItem(r)
			? (this.opts.value.current = this.opts.value.current.filter((f) => f !== r))
			: (this.opts.value.current = [...this.opts.value.current, r]),
			(this.inputValue = n);
	}
	setInitialHighlightedNode() {
		bo(() => {
			if (this.highlightedNode && document.contains(this.highlightedNode)) return;
			if (this.opts.value.current.length && this.opts.value.current[0] !== '') {
				const n = this.getNodeByValue(this.opts.value.current[0]);
				if (n) {
					this.setHighlightedNode(n, !0);
					return;
				}
			}
			const r = this.getCandidateNodes()[0];
			r && this.setHighlightedNode(r, !0);
		});
	}
}
pr = new WeakMap();
var He, Oe, ye, To, Jr, fr;
class Zs {
	constructor(t, r) {
		O(this, ye);
		H(this, 'opts');
		H(this, 'root');
		O(this, He);
		O(this, Oe);
		O(
			this,
			fr,
			G(() => ({
				id: this.opts.id.current,
				disabled: this.root.opts.disabled.current ? !0 : void 0,
				'aria-haspopup': 'listbox',
				'data-state': yo(this.root.opts.open.current),
				'data-disabled': Gr(this.root.opts.disabled.current),
				'data-placeholder': this.root.hasValue ? void 0 : '',
				[this.root.bitsAttrs.trigger]: '',
				onpointerdown: this.onpointerdown,
				onkeydown: this.onkeydown,
				onclick: this.onclick,
				onpointerup: this.onpointerup
			}))
		);
		(this.opts = t),
			(this.root = r),
			Se({
				...t,
				onRefChange: (n) => {
					this.root.triggerNode = n;
				}
			}),
			Br(
				this,
				He,
				Qo({
					getCurrentItem: () => this.root.highlightedNode,
					onMatch: (n) => {
						this.root.setHighlightedNode(n);
					}
				})
			),
			Br(
				this,
				Oe,
				Ks({
					getCurrentItem: () => (this.root.isMulti ? '' : this.root.currentLabel),
					onMatch: (n) => {
						if (this.root.isMulti || !this.root.opts.items.current) return;
						const f = this.root.opts.items.current.find((u) => u.label === n);
						f && (this.root.opts.value.current = f.value);
					},
					enabled: !this.root.isMulti && this.root.dataTypeaheadEnabled
				})
			),
			(this.onkeydown = this.onkeydown.bind(this)),
			(this.onpointerdown = this.onpointerdown.bind(this)),
			(this.onpointerup = this.onpointerup.bind(this)),
			(this.onclick = this.onclick.bind(this));
	}
	onkeydown(t) {
		if (
			((this.root.isUsingKeyboard = !0),
			(t.key === De || t.key === Ve) && t.preventDefault(),
			!this.root.opts.open.current)
		) {
			if (t.key === Yr || t.key === Zr || t.key === Ve || t.key === De)
				t.preventDefault(), this.root.handleOpen();
			else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
				h(this, Oe).handleTypeaheadSearch(t.key, this.root.candidateLabels);
				return;
			}
			if (this.root.hasValue) return;
			const u = this.root.getCandidateNodes();
			if (!u.length) return;
			if (t.key === Ve) {
				const C = u[0];
				this.root.setHighlightedNode(C);
			} else if (t.key === De) {
				const C = u[u.length - 1];
				this.root.setHighlightedNode(C);
			}
			return;
		}
		if (t.key === lo) {
			this.root.handleClose();
			return;
		}
		if ((t.key === Yr || t.key === Zr) && !t.isComposing) {
			t.preventDefault();
			const u = this.root.highlightedValue === this.root.opts.value.current;
			if (!this.root.opts.allowDeselect.current && u && !this.root.isMulti) {
				this.root.handleClose();
				return;
			}
			this.root.highlightedValue !== null &&
				this.root.toggleItem(this.root.highlightedValue, this.root.highlightedLabel ?? void 0),
				!this.root.isMulti && !u && this.root.handleClose();
		}
		if ((t.key === De && t.altKey && this.root.handleClose(), qs.includes(t.key))) {
			t.preventDefault();
			const u = this.root.getCandidateNodes(),
				C = this.root.highlightedNode,
				S = C ? u.indexOf(C) : -1,
				E = this.root.opts.loop.current;
			let w;
			if (
				(t.key === Ve
					? (w = Xo(u, S, E))
					: t.key === De
						? (w = ts(u, S, E))
						: t.key === xo
							? (w = es(u, S, 10, E))
							: t.key === $o
								? (w = rs(u, S, 10, E))
								: t.key === Po
									? (w = u[0])
									: t.key === wo && (w = u[u.length - 1]),
				!w)
			)
				return;
			this.root.setHighlightedNode(w);
			return;
		}
		const r = t.ctrlKey || t.altKey || t.metaKey,
			n = t.key.length === 1;
		if (t.code === 'Space') return;
		const f = this.root.getCandidateNodes();
		if (t.key !== lo) {
			if (!r && n) {
				h(this, He).handleTypeaheadSearch(t.key, f);
				return;
			}
			this.root.highlightedNode || this.root.setHighlightedToFirstCandidate();
		}
	}
	onclick(t) {
		t.currentTarget.focus();
	}
	onpointerdown(t) {
		if (this.root.opts.disabled.current) return;
		if (t.pointerType === 'touch') return t.preventDefault();
		const r = t.target;
		r != null &&
			r.hasPointerCapture(t.pointerId) &&
			(r == null || r.releasePointerCapture(t.pointerId)),
			t.button === 0 &&
				t.ctrlKey === !1 &&
				(this.root.opts.open.current === !1
					? (Ue(this, ye, Jr).call(this, t), t.preventDefault())
					: this.root.handleClose());
	}
	onpointerup(t) {
		t.preventDefault(), t.pointerType === 'touch' && Ue(this, ye, Jr).call(this, t);
	}
	get props() {
		return l(h(this, fr));
	}
}
(He = new WeakMap()),
	(Oe = new WeakMap()),
	(ye = new WeakSet()),
	(To = function () {
		(this.root.opts.open.current = !0), h(this, Oe).resetTypeahead(), h(this, He).resetTypeahead();
	}),
	(Jr = function (t) {
		Ue(this, ye, To).call(this);
	}),
	(fr = new WeakMap());
var We, Ye, gr, _r, mr;
class Js {
	constructor(t, r) {
		H(this, 'opts');
		H(this, 'root');
		O(this, We, It(null));
		O(this, Ye, It(!1));
		O(
			this,
			gr,
			G(() => {
				const t = this.root.isCombobox ? '--bits-combobox' : '--bits-select';
				return {
					[`${t}-content-transform-origin`]: 'var(--bits-floating-transform-origin)',
					[`${t}-content-available-width`]: 'var(--bits-floating-available-width)',
					[`${t}-content-available-height`]: 'var(--bits-floating-available-height)',
					[`${t}-anchor-width`]: ' var(--bits-floating-anchor-width)',
					[`${t}-anchor-height`]: 'var(--bits-floating-anchor-height)'
				};
			})
		);
		H(this, 'onInteractOutside', (t) => {
			if (t.target === this.root.triggerNode || t.target === this.root.inputNode) {
				t.preventDefault();
				return;
			}
			this.opts.onInteractOutside.current(t), !t.defaultPrevented && this.root.handleClose();
		});
		H(this, 'onEscapeKeydown', (t) => {
			this.opts.onEscapeKeydown.current(t), !t.defaultPrevented && this.root.handleClose();
		});
		H(this, 'onOpenAutoFocus', (t) => {
			t.preventDefault();
		});
		H(this, 'onCloseAutoFocus', (t) => {
			t.preventDefault();
		});
		O(
			this,
			_r,
			G(() => ({ open: this.root.opts.open.current }))
		);
		O(
			this,
			mr,
			G(() => ({
				id: this.opts.id.current,
				role: 'listbox',
				'data-state': yo(this.root.opts.open.current),
				[this.root.bitsAttrs.content]: '',
				style: {
					display: 'flex',
					flexDirection: 'column',
					outline: 'none',
					boxSizing: 'border-box',
					pointerEvents: 'auto',
					...l(h(this, gr))
				},
				onpointermove: this.onpointermove
			}))
		);
		H(this, 'popperProps', {
			onInteractOutside: this.onInteractOutside,
			onEscapeKeydown: this.onEscapeKeydown,
			onOpenAutoFocus: this.onOpenAutoFocus,
			onCloseAutoFocus: this.onCloseAutoFocus,
			trapFocus: !1,
			loop: !1,
			onPlaced: () => {
				this.isPositioned = !0;
			}
		});
		(this.opts = t),
			(this.root = r),
			Se({
				...t,
				onRefChange: (n) => {
					this.root.contentNode = n;
				},
				deps: () => this.root.opts.open.current
			}),
			ws(() => {
				(this.root.contentNode = null), (this.isPositioned = !1);
			}),
			Pe(
				() => this.root.opts.open.current,
				() => {
					this.root.opts.open.current || (this.isPositioned = !1);
				}
			),
			(this.onpointermove = this.onpointermove.bind(this));
	}
	get viewportNode() {
		return l(h(this, We));
	}
	set viewportNode(t) {
		St(h(this, We), Tt(t));
	}
	get isPositioned() {
		return l(h(this, Ye));
	}
	set isPositioned(t) {
		St(h(this, Ye), Tt(t));
	}
	onpointermove(t) {
		this.root.isUsingKeyboard = !1;
	}
	get snippetProps() {
		return l(h(this, _r));
	}
	get props() {
		return l(h(this, mr));
	}
}
(We = new WeakMap()),
	(Ye = new WeakMap()),
	(gr = new WeakMap()),
	(_r = new WeakMap()),
	(mr = new WeakMap());
var br, $r, Ze, Pr, xr;
class Qs {
	constructor(t, r) {
		H(this, 'opts');
		H(this, 'root');
		O(
			this,
			br,
			G(() => this.root.includesItem(this.opts.value.current))
		);
		O(
			this,
			$r,
			G(() => this.root.highlightedValue === this.opts.value.current)
		);
		H(this, 'prevHighlighted', new hs(() => this.isHighlighted));
		O(this, Ze, It(!1));
		O(
			this,
			Pr,
			G(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }))
		);
		O(
			this,
			xr,
			G(() => ({
				id: this.opts.id.current,
				role: 'option',
				'aria-selected': this.root.includesItem(this.opts.value.current) ? 'true' : void 0,
				'data-value': this.opts.value.current,
				'data-disabled': Gr(this.opts.disabled.current),
				'data-highlighted': this.root.highlightedValue === this.opts.value.current ? '' : void 0,
				'data-selected': this.root.includesItem(this.opts.value.current) ? '' : void 0,
				'data-label': this.opts.label.current,
				[this.root.bitsAttrs.item]: '',
				onpointermove: this.onpointermove,
				onpointerdown: this.onpointerdown,
				onpointerup: this.onpointerup
			}))
		);
		(this.opts = t),
			(this.root = r),
			Se({ ...t, deps: () => this.mounted }),
			Pe([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
				this.isHighlighted
					? this.opts.onHighlight.current()
					: this.prevHighlighted.current && this.opts.onUnhighlight.current();
			}),
			Pe(
				() => this.mounted,
				() => {
					this.mounted && this.root.setInitialHighlightedNode();
				}
			),
			(this.onpointerdown = this.onpointerdown.bind(this)),
			(this.onpointerup = this.onpointerup.bind(this)),
			(this.onpointermove = this.onpointermove.bind(this));
	}
	get isSelected() {
		return l(h(this, br));
	}
	get isHighlighted() {
		return l(h(this, $r));
	}
	get mounted() {
		return l(h(this, Ze));
	}
	set mounted(t) {
		St(h(this, Ze), Tt(t));
	}
	handleSelect() {
		if (this.opts.disabled.current) return;
		const t = this.opts.value.current === this.root.opts.value.current;
		if (!this.root.opts.allowDeselect.current && t && !this.root.isMulti) {
			this.root.handleClose();
			return;
		}
		this.root.toggleItem(this.opts.value.current, this.opts.label.current),
			!this.root.isMulti && !t && this.root.handleClose();
	}
	get snippetProps() {
		return l(h(this, Pr));
	}
	onpointerdown(t) {
		t.preventDefault();
	}
	onpointerup(t) {
		if (!(t.defaultPrevented || !this.opts.ref.current)) {
			if (t.pointerType === 'touch' && !vs) {
				eo(
					this.opts.ref.current,
					'click',
					() => {
						this.handleSelect(), this.root.setHighlightedNode(this.opts.ref.current);
					},
					{ once: !0 }
				);
				return;
			}
			t.preventDefault(),
				this.handleSelect(),
				t.pointerType === 'touch' && this.root.setHighlightedNode(this.opts.ref.current);
		}
	}
	onpointermove(t) {
		t.pointerType !== 'touch' &&
			this.root.highlightedNode !== this.opts.ref.current &&
			this.root.setHighlightedNode(this.opts.ref.current);
	}
	get props() {
		return l(h(this, xr));
	}
}
(br = new WeakMap()),
	($r = new WeakMap()),
	(Ze = new WeakMap()),
	(Pr = new WeakMap()),
	(xr = new WeakMap());
var wr, yr;
class Xs {
	constructor(t, r) {
		H(this, 'opts');
		H(this, 'root');
		O(
			this,
			wr,
			G(() => this.root.opts.name.current !== '')
		);
		O(
			this,
			yr,
			G(() => ({
				disabled: So(this.root.opts.disabled.current),
				required: ps(this.root.opts.required.current),
				name: this.root.opts.name.current,
				value: this.opts.value.current,
				style: ys(Ss),
				tabindex: -1,
				onfocus: this.onfocus
			}))
		);
		(this.opts = t), (this.root = r), (this.onfocus = this.onfocus.bind(this));
	}
	get shouldRender() {
		return l(h(this, wr));
	}
	onfocus(t) {
		var r, n;
		t.preventDefault(),
			this.root.isCombobox
				? (n = this.root.inputNode) == null || n.focus()
				: (r = this.root.triggerNode) == null || r.focus();
	}
	get props() {
		return l(h(this, yr));
	}
}
(wr = new WeakMap()), (yr = new WeakMap());
var Je, Sr;
class ta {
	constructor(t, r) {
		H(this, 'opts');
		H(this, 'content');
		H(this, 'root');
		O(this, Je, It(0));
		O(
			this,
			Sr,
			G(() => ({
				id: this.opts.id.current,
				role: 'presentation',
				[this.root.bitsAttrs.viewport]: '',
				style: { position: 'relative', flex: 1, overflow: 'auto' }
			}))
		);
		(this.opts = t),
			(this.content = r),
			(this.root = r.root),
			Se({
				...t,
				onRefChange: (n) => {
					this.content.viewportNode = n;
				},
				deps: () => this.root.opts.open.current
			});
	}
	get prevScrollTop() {
		return l(h(this, Je));
	}
	set prevScrollTop(t) {
		St(h(this, Je), Tt(t));
	}
	get props() {
		return l(h(this, Sr));
	}
}
(Je = new WeakMap()), (Sr = new WeakMap());
var Qe, Nr;
class Ao {
	constructor(t, r) {
		H(this, 'opts');
		H(this, 'content');
		H(this, 'root');
		H(this, 'autoScrollInterval', null);
		H(this, 'userScrollTimer', -1);
		H(this, 'isUserScrolling', !1);
		H(this, 'onAutoScroll', $e);
		O(this, Qe, It(!1));
		O(
			this,
			Nr,
			G(() => ({
				id: this.opts.id.current,
				'aria-hidden': cs(!0),
				style: { flexShrink: 0 },
				onpointerdown: this.onpointerdown,
				onpointermove: this.onpointermove,
				onpointerleave: this.onpointerleave
			}))
		);
		(this.opts = t),
			(this.content = r),
			(this.root = r.root),
			Se({ ...t, deps: () => this.mounted }),
			Pe(
				() => this.mounted,
				() => {
					if (!this.mounted) {
						this.isUserScrolling = !1;
						return;
					}
					if (this.isUserScrolling) return;
					const n = this.root.highlightedNode;
					n == null || n.scrollIntoView({ block: 'nearest' });
				}
			),
			Qr(() => {
				this.mounted || this.clearAutoScrollInterval();
			}),
			(this.onpointerdown = this.onpointerdown.bind(this)),
			(this.onpointermove = this.onpointermove.bind(this)),
			(this.onpointerleave = this.onpointerleave.bind(this));
	}
	get mounted() {
		return l(h(this, Qe));
	}
	set mounted(t) {
		St(h(this, Qe), Tt(t));
	}
	handleUserScroll() {
		window.clearTimeout(this.userScrollTimer),
			(this.isUserScrolling = !0),
			(this.userScrollTimer = window.setTimeout(() => {
				this.isUserScrolling = !1;
			}, 200));
	}
	clearAutoScrollInterval() {
		this.autoScrollInterval !== null &&
			(window.clearInterval(this.autoScrollInterval), (this.autoScrollInterval = null));
	}
	onpointerdown(t) {
		this.autoScrollInterval === null &&
			(this.autoScrollInterval = window.setInterval(() => {
				this.onAutoScroll();
			}, 50));
	}
	onpointermove(t) {
		this.autoScrollInterval === null &&
			(this.autoScrollInterval = window.setInterval(() => {
				this.onAutoScroll();
			}, 50));
	}
	onpointerleave(t) {
		this.clearAutoScrollInterval();
	}
	get props() {
		return l(h(this, Nr));
	}
}
(Qe = new WeakMap()), (Nr = new WeakMap());
var Xe, Cr;
class ea {
	constructor(t) {
		H(this, 'state');
		H(this, 'content');
		H(this, 'root');
		O(this, Xe, It(!1));
		H(this, 'handleScroll', (t = !1) => {
			if ((t || this.state.handleUserScroll(), !this.content.viewportNode)) return;
			const r = this.content.viewportNode.scrollHeight - this.content.viewportNode.clientHeight,
				n = Number.parseInt(getComputedStyle(this.content.viewportNode).paddingTop, 10);
			this.canScrollDown = Math.ceil(this.content.viewportNode.scrollTop) < r - n;
		});
		H(this, 'handleAutoScroll', () => {
			const t = this.content.viewportNode,
				r = this.root.highlightedNode;
			!t || !r || (t.scrollTop = t.scrollTop + r.offsetHeight);
		});
		O(
			this,
			Cr,
			G(() => ({ ...this.state.props, [this.root.bitsAttrs['scroll-down-button']]: '' }))
		);
		(this.state = t),
			(this.content = t.content),
			(this.root = t.root),
			(this.state.onAutoScroll = this.handleAutoScroll),
			Pe(
				[
					() => this.content.viewportNode,
					() => this.content.isPositioned,
					() => this.root.opts.open.current
				],
				() => {
					if (
						!(
							!this.content.viewportNode ||
							!this.content.isPositioned ||
							!this.root.opts.open.current
						)
					)
						return (
							this.handleScroll(!0),
							eo(this.content.viewportNode, 'scroll', () => this.handleScroll())
						);
				}
			);
	}
	get canScrollDown() {
		return l(h(this, Xe));
	}
	set canScrollDown(t) {
		St(h(this, Xe), Tt(t));
	}
	get props() {
		return l(h(this, Cr));
	}
}
(Xe = new WeakMap()), (Cr = new WeakMap());
var tr, kr;
class ra {
	constructor(t) {
		H(this, 'state');
		H(this, 'content');
		H(this, 'root');
		O(this, tr, It(!1));
		H(this, 'handleScroll', (t = !1) => {
			if ((t || this.state.handleUserScroll(), !this.content.viewportNode)) return;
			const r = Number.parseInt(getComputedStyle(this.content.viewportNode).paddingTop, 10);
			this.canScrollUp = this.content.viewportNode.scrollTop - r > 0.1;
		});
		H(this, 'handleAutoScroll', () => {
			!this.content.viewportNode ||
				!this.root.highlightedNode ||
				(this.content.viewportNode.scrollTop =
					this.content.viewportNode.scrollTop - this.root.highlightedNode.offsetHeight);
		});
		O(
			this,
			kr,
			G(() => ({ ...this.state.props, [this.root.bitsAttrs['scroll-up-button']]: '' }))
		);
		(this.state = t),
			(this.content = t.content),
			(this.root = t.root),
			(this.state.onAutoScroll = this.handleAutoScroll),
			Pe([() => this.content.viewportNode, () => this.content.isPositioned], () => {
				if (!(!this.content.viewportNode || !this.content.isPositioned))
					return (
						this.handleScroll(!0),
						eo(this.content.viewportNode, 'scroll', () => this.handleScroll())
					);
			});
	}
	get canScrollUp() {
		return l(h(this, tr));
	}
	set canScrollUp(t) {
		St(h(this, tr), Tt(t));
	}
	get props() {
		return l(h(this, kr));
	}
}
(tr = new WeakMap()), (kr = new WeakMap());
const er = new to('Select.Root | Combobox.Root'),
	Ur = new to('Select.Content | Combobox.Content');
function oa(a) {
	const { type: t, ...r } = a,
		n = t === 'single' ? new Ws(r) : new Ys(r);
	return er.set(n);
}
function sa(a) {
	return Ur.set(new Js(a, er.get()));
}
function aa(a) {
	return new Zs(a, er.get());
}
function na(a) {
	return new Qs(a, er.get());
}
function ia(a) {
	return new ta(a, Ur.get());
}
function la(a) {
	return new ra(new Ao(a, Ur.get()));
}
function da(a) {
	return new ea(new Ao(a, Ur.get()));
}
function ua(a) {
	return new Xs(a, er.get());
}
const ca = [
	'trigger',
	'content',
	'item',
	'viewport',
	'scroll-up-button',
	'scroll-down-button',
	'group',
	'group-label',
	'separator',
	'arrow',
	'input',
	'content-wrapper',
	'item-text',
	'value'
];
function ha(a) {
	const t = a.isCombobox,
		r = {};
	for (const n of ca) r[n] = t ? `data-combobox-${n}` : `data-select-${n}`;
	return r;
}
var va = d('<input>');
function mo(a, t) {
	zt(t, !0);
	let r = x(t, 'value', 15, '');
	const n = ua({ value: Y.with(() => r()) });
	Cs(a, {
		children: (f, u) => {
			var C = V(),
				S = i(C);
			{
				var E = (w) => {
					var m = va();
					Bo(m);
					let k;
					$t(() => (k = Nt(m, k, { ...n.props }))), Co(m, r), e(w, m);
				};
				At(S, (w) => {
					n.shouldRender && w(E);
				});
			}
			e(f, C);
		},
		$$slots: { default: !0 }
	}),
		Dt();
}
var pa = d('<div><div><!></div></div>'),
	fa = d('<div><div><!></div></div>');
function ga(a, t) {
	zt(t, !0);
	let r = x(t, 'id', 19, xe),
		n = x(t, 'ref', 15, null),
		f = x(t, 'forceMount', 3, !1),
		u = x(t, 'side', 3, 'bottom'),
		C = x(t, 'onInteractOutside', 3, $e),
		S = x(t, 'onEscapeKeydown', 3, $e),
		E = x(t, 'preventScroll', 3, !1),
		w = Bt(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'id',
			'ref',
			'forceMount',
			'side',
			'onInteractOutside',
			'onEscapeKeydown',
			'children',
			'child',
			'preventScroll'
		]);
	const m = sa({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(N) => n(N)
			),
			onInteractOutside: Y.with(() => C()),
			onEscapeKeydown: Y.with(() => S())
		}),
		k = G(() => ie(w, m.props));
	var F = V(),
		j = i(F);
	{
		var et = (N) => {
				fs(
					N,
					jt(
						() => l(k),
						() => m.popperProps,
						{
							get side() {
								return u();
							},
							get enabled() {
								return m.root.opts.open.current;
							},
							get id() {
								return r();
							},
							get preventScroll() {
								return E();
							},
							onPlaced: () => (m.isPositioned = !0),
							forceMount: !0,
							popper: (K, T) => {
								let ht = () => (T == null ? void 0 : T().props),
									vt = () => (T == null ? void 0 : T().wrapperProps);
								var Pt = V();
								const xt = G(() => ie(ht(), { style: m.props.style }));
								var Jt = i(Pt);
								{
									var Qt = (Vt) => {
											var Ft = V(),
												se = i(Ft),
												ae = nr(() => ({ props: l(xt), wrapperProps: vt(), ...m.snippetProps }));
											mt(
												se,
												() => t.child,
												() => l(ae)
											),
												e(Vt, Ft);
										},
										oe = (Vt) => {
											var Ft = pa();
											let se;
											var ae = A(Ft);
											let qt;
											var Xt = A(ae);
											mt(Xt, () => t.children ?? Zt),
												z(ae),
												z(Ft),
												$t(() => {
													(se = Nt(Ft, se, { ...vt() })), (qt = Nt(ae, qt, { ...l(xt) }));
												}),
												e(Vt, Ft);
										};
									At(Jt, (Vt) => {
										t.child ? Vt(Qt) : Vt(oe, !1);
									});
								}
								e(K, Pt);
							},
							$$slots: { popper: !0 }
						}
					)
				);
			},
			dt = (N) => {
				var D = V(),
					K = i(D);
				{
					var T = (ht) => {
						gs(
							ht,
							jt(
								() => l(k),
								() => m.popperProps,
								{
									get side() {
										return u();
									},
									get present() {
										return m.root.opts.open.current;
									},
									get id() {
										return r();
									},
									get preventScroll() {
										return E();
									},
									forceMount: !1,
									popper: (Pt, xt) => {
										let Jt = () => (xt == null ? void 0 : xt().props),
											Qt = () => (xt == null ? void 0 : xt().wrapperProps);
										var oe = V();
										const Vt = G(() => ie(Jt(), { style: m.props.style }));
										var Ft = i(oe);
										{
											var se = (qt) => {
													var Xt = V(),
														we = i(Xt),
														ve = nr(() => ({
															props: l(Vt),
															wrapperProps: Qt(),
															...m.snippetProps
														}));
													mt(
														we,
														() => t.child,
														() => l(ve)
													),
														e(qt, Xt);
												},
												ae = (qt) => {
													var Xt = fa();
													let we;
													var ve = A(Xt);
													let Re;
													var Vr = A(ve);
													mt(Vr, () => t.children ?? Zt),
														z(ve),
														z(Xt),
														$t(() => {
															(we = Nt(Xt, we, { ...Qt() })), (Re = Nt(ve, Re, { ...l(Vt) }));
														}),
														e(qt, Xt);
												};
											At(Ft, (qt) => {
												t.child ? qt(se) : qt(ae, !1);
											});
										}
										e(Pt, oe);
									},
									$$slots: { popper: !0 }
								}
							)
						);
					};
					At(
						K,
						(ht) => {
							f() || ht(T);
						},
						!0
					);
				}
				e(N, D);
			};
		At(j, (N) => {
			f() ? N(et) : N(dt, !1);
		});
	}
	e(a, F), Dt();
}
var _a = d('<div><!></div>'),
	ma = d('<!> <!>', 1);
function ba(a, t) {
	zt(t, !0);
	let r = x(t, 'id', 19, xe),
		n = x(t, 'ref', 15, null),
		f = x(t, 'label', 19, () => t.value),
		u = x(t, 'disabled', 3, !1),
		C = x(t, 'onHighlight', 3, $e),
		S = x(t, 'onUnhighlight', 3, $e),
		E = Bt(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'id',
			'ref',
			'value',
			'label',
			'disabled',
			'children',
			'child',
			'onHighlight',
			'onUnhighlight'
		]);
	const w = na({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(N) => n(N)
			),
			value: Y.with(() => t.value),
			disabled: Y.with(() => u()),
			label: Y.with(() => f()),
			onHighlight: Y.with(() => C()),
			onUnhighlight: Y.with(() => S())
		}),
		m = G(() => ie(E, w.props));
	var k = ma(),
		F = i(k);
	{
		var j = (N) => {
				var D = V(),
					K = i(D),
					T = nr(() => ({ props: l(m), ...w.snippetProps }));
				mt(
					K,
					() => t.child,
					() => l(T)
				),
					e(N, D);
			},
			et = (N) => {
				var D = _a();
				let K;
				var T = A(D);
				mt(
					T,
					() => t.children ?? Zt,
					() => w.snippetProps
				),
					z(D),
					$t(() => (K = Nt(D, K, { ...l(m) }))),
					e(N, D);
			};
		At(F, (N) => {
			t.child ? N(j) : N(et, !1);
		});
	}
	var dt = s(F, 2);
	Xr(dt, {
		get mounted() {
			return w.mounted;
		},
		set mounted(N) {
			w.mounted = N;
		}
	}),
		e(a, k),
		Dt();
}
var $a = d('<div><!></div>');
function Pa(a, t) {
	zt(t, !0);
	let r = x(t, 'id', 19, xe),
		n = x(t, 'ref', 15, null),
		f = Bt(t, ['$$slots', '$$events', '$$legacy', 'id', 'ref', 'children', 'child']);
	const u = ia({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(k) => n(k)
			)
		}),
		C = G(() => ie(f, u.props));
	var S = V(),
		E = i(S);
	{
		var w = (k) => {
				var F = V(),
					j = i(F);
				mt(
					j,
					() => t.child,
					() => ({ props: l(C) })
				),
					e(k, F);
			},
			m = (k) => {
				var F = $a();
				let j;
				var et = A(F);
				mt(et, () => t.children ?? Zt),
					z(F),
					$t(() => (j = Nt(F, j, { ...l(C) }, 'svelte-uf90i5'))),
					e(k, F);
			};
		At(E, (k) => {
			t.child ? k(w) : k(m, !1);
		});
	}
	e(a, S), Dt();
}
var xa = d('<div><!></div>'),
	wa = d('<!> <!>', 1);
function ya(a, t) {
	zt(t, !0);
	let r = x(t, 'id', 19, xe),
		n = x(t, 'ref', 15, null),
		f = Bt(t, ['$$slots', '$$events', '$$legacy', 'id', 'ref', 'child', 'children']);
	const u = da({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(m) => n(m)
			)
		}),
		C = G(() => ie(f, u.props));
	var S = V(),
		E = i(S);
	{
		var w = (m) => {
			var k = wa(),
				F = i(k);
			Xr(F, {
				get mounted() {
					return u.state.mounted;
				},
				set mounted(N) {
					u.state.mounted = N;
				}
			});
			var j = s(F, 2);
			{
				var et = (N) => {
						var D = V(),
							K = i(D);
						mt(
							K,
							() => t.child,
							() => ({ props: f })
						),
							e(N, D);
					},
					dt = (N) => {
						var D = xa();
						let K;
						var T = A(D);
						mt(T, () => t.children ?? Zt), z(D), $t(() => (K = Nt(D, K, { ...l(C) }))), e(N, D);
					};
				At(j, (N) => {
					t.child ? N(et) : N(dt, !1);
				});
			}
			e(m, k);
		};
		At(E, (m) => {
			u.canScrollDown && m(w);
		});
	}
	e(a, S), Dt();
}
var Sa = d('<div><!></div>'),
	Na = d('<!> <!>', 1);
function Ca(a, t) {
	zt(t, !0);
	let r = x(t, 'id', 19, xe),
		n = x(t, 'ref', 15, null),
		f = Bt(t, ['$$slots', '$$events', '$$legacy', 'id', 'ref', 'child', 'children']);
	const u = la({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(m) => n(m)
			)
		}),
		C = G(() => ie(f, u.props));
	var S = V(),
		E = i(S);
	{
		var w = (m) => {
			var k = Na(),
				F = i(k);
			Xr(F, {
				get mounted() {
					return u.state.mounted;
				},
				set mounted(N) {
					u.state.mounted = N;
				}
			});
			var j = s(F, 2);
			{
				var et = (N) => {
						var D = V(),
							K = i(D);
						mt(
							K,
							() => t.child,
							() => ({ props: f })
						),
							e(N, D);
					},
					dt = (N) => {
						var D = Sa();
						let K;
						var T = A(D);
						mt(T, () => t.children ?? Zt), z(D), $t(() => (K = Nt(D, K, { ...l(C) }))), e(N, D);
					};
				At(j, (N) => {
					t.child ? N(et) : N(dt, !1);
				});
			}
			e(m, k);
		};
		At(E, (m) => {
			u.canScrollUp && m(w);
		});
	}
	e(a, S), Dt();
}
var ka = d('<!> <!>', 1);
function Ia(a, t) {
	zt(t, !0);
	let r = x(t, 'value', 15),
		n = x(t, 'onValueChange', 3, $e),
		f = x(t, 'name', 3, ''),
		u = x(t, 'disabled', 3, !1),
		C = x(t, 'open', 15, !1),
		S = x(t, 'onOpenChange', 3, $e),
		E = x(t, 'loop', 3, !1),
		w = x(t, 'scrollAlignment', 3, 'nearest'),
		m = x(t, 'required', 3, !1),
		k = x(t, 'items', 19, () => []),
		F = x(t, 'allowDeselect', 3, !1);
	if (r() === void 0) {
		const T = t.type === 'single' ? '' : [];
		r(T);
	}
	const j = oa({
		type: t.type,
		value: Y.with(
			() => r(),
			(T) => {
				r(T), n()(T);
			}
		),
		disabled: Y.with(() => u()),
		required: Y.with(() => m()),
		open: Y.with(
			() => C(),
			(T) => {
				C(T), S()(T);
			}
		),
		loop: Y.with(() => E()),
		scrollAlignment: Y.with(() => w()),
		name: Y.with(() => f()),
		isCombobox: !1,
		items: Y.with(() => k()),
		allowDeselect: Y.with(() => F())
	});
	var et = ka(),
		dt = i(et);
	_s(dt, {
		children: (T, ht) => {
			var vt = V(),
				Pt = i(vt);
			mt(Pt, () => t.children ?? Zt), e(T, vt);
		},
		$$slots: { default: !0 }
	});
	var N = s(dt, 2);
	{
		var D = (T) => {
				var ht = V(),
					vt = i(ht);
				{
					var Pt = (xt) => {
						var Jt = V(),
							Qt = i(Jt);
						ls(
							Qt,
							17,
							() => j.opts.value.current,
							ds,
							(oe, Vt) => {
								mo(oe, {
									get value() {
										return l(Vt);
									}
								});
							}
						),
							e(xt, Jt);
					};
					At(vt, (xt) => {
						j.opts.value.current.length && xt(Pt);
					});
				}
				e(T, ht);
			},
			K = (T) => {
				mo(T, {
					get value() {
						return j.opts.value.current;
					},
					set value(ht) {
						j.opts.value.current = ht;
					}
				});
			};
		At(N, (T) => {
			Array.isArray(j.opts.value.current) ? T(D) : T(K, !1);
		});
	}
	e(a, et), Dt();
}
var Ta = d('<button><!></button>');
function Aa(a, t) {
	zt(t, !0);
	let r = x(t, 'id', 19, xe),
		n = x(t, 'ref', 15, null),
		f = x(t, 'type', 3, 'button'),
		u = Bt(t, ['$$slots', '$$events', '$$legacy', 'id', 'ref', 'child', 'children', 'type']);
	const C = aa({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(m) => n(m)
			)
		}),
		S = G(() => ie(u, C.props, { type: f() }));
	var E = V(),
		w = i(E);
	o(
		w,
		() => ms,
		(m, k) => {
			k(m, {
				get id() {
					return r();
				},
				children: (F, j) => {
					var et = V(),
						dt = i(et);
					{
						var N = (K) => {
								var T = V(),
									ht = i(T);
								mt(
									ht,
									() => t.child,
									() => ({ props: l(S) })
								),
									e(K, T);
							},
							D = (K) => {
								var T = Ta();
								let ht;
								var vt = A(T);
								mt(vt, () => t.children ?? Zt),
									z(T),
									$t(() => (ht = Nt(T, ht, { ...l(S) }))),
									e(K, T);
							};
						At(dt, (K) => {
							t.child ? K(N) : K(D, !1);
						});
					}
					e(F, et);
				},
				$$slots: { default: !0 }
			});
		}
	),
		e(a, E),
		Dt();
}
const za = 'data-toggle-group-root',
	zo = 'data-toggle-group-item';
var Ir;
class Do {
	constructor(t) {
		H(this, 'opts');
		H(this, 'rovingFocusGroup');
		O(
			this,
			Ir,
			G(() => ({
				id: this.opts.id.current,
				[za]: '',
				role: 'group',
				'data-orientation': No(this.opts.orientation.current),
				'data-disabled': Gr(this.opts.disabled.current)
			}))
		);
		(this.opts = t),
			(this.rovingFocusGroup = os({
				candidateAttr: zo,
				rootNodeId: t.id,
				loop: t.loop,
				orientation: t.orientation
			})),
			Se(t);
	}
	get props() {
		return l(h(this, Ir));
	}
}
Ir = new WeakMap();
var Tr;
class Da extends Do {
	constructor(r) {
		super(r);
		H(this, 'opts');
		H(this, 'isMulti', !1);
		O(
			this,
			Tr,
			G(() => this.opts.value.current !== '')
		);
		this.opts = r;
	}
	get anyPressed() {
		return l(h(this, Tr));
	}
	includesItem(r) {
		return this.opts.value.current === r;
	}
	toggleItem(r, n) {
		this.includesItem(r)
			? (this.opts.value.current = '')
			: ((this.opts.value.current = r), this.rovingFocusGroup.setCurrentTabStopId(n));
	}
}
Tr = new WeakMap();
var Ar;
class Ha extends Do {
	constructor(r) {
		super(r);
		H(this, 'opts');
		H(this, 'isMulti', !0);
		O(
			this,
			Ar,
			G(() => this.opts.value.current.length > 0)
		);
		this.opts = r;
	}
	get anyPressed() {
		return l(h(this, Ar));
	}
	includesItem(r) {
		return this.opts.value.current.includes(r);
	}
	toggleItem(r, n) {
		this.includesItem(r)
			? (this.opts.value.current = this.opts.value.current.filter((f) => f !== r))
			: ((this.opts.value.current = [...this.opts.value.current, r]),
				this.rovingFocusGroup.setCurrentTabStopId(n));
	}
}
Ar = new WeakMap();
var be, zr, Ho, Dr, Hr, Or, Me, Mr, Rr;
class Oa {
	constructor(t, r) {
		O(this, zr);
		H(this, 'opts');
		H(this, 'root');
		O(
			this,
			be,
			G(() => this.opts.disabled.current || this.root.opts.disabled.current)
		);
		O(
			this,
			Dr,
			G(() => this.root.includesItem(this.opts.value.current))
		);
		O(
			this,
			Hr,
			G(() => (this.root.isMulti ? void 0 : bs(this.isPressed, !1)))
		);
		O(
			this,
			Or,
			G(() => (this.root.isMulti ? $s(this.isPressed) : void 0))
		);
		O(this, Me, It(0));
		O(
			this,
			Mr,
			G(() => ({ pressed: this.isPressed }))
		);
		O(
			this,
			Rr,
			G(() => ({
				id: this.opts.id.current,
				role: this.root.isMulti ? void 0 : 'radio',
				tabindex: l(h(this, Me)),
				'data-orientation': No(this.root.opts.orientation.current),
				'data-disabled': Gr(l(h(this, be))),
				'data-state': Ma(this.isPressed),
				'data-value': this.opts.value.current,
				'aria-pressed': l(h(this, Or)),
				'aria-checked': l(h(this, Hr)),
				disabled: So(l(h(this, be))),
				[zo]: '',
				onclick: this.onclick,
				onkeydown: this.onkeydown
			}))
		);
		(this.opts = t),
			(this.root = r),
			Se(t),
			Qr(() => {
				this.root.opts.rovingFocus.current
					? St(h(this, Me), Tt(this.root.rovingFocusGroup.getTabIndex(this.opts.ref.current)))
					: St(h(this, Me), 0);
			}),
			(this.onclick = this.onclick.bind(this)),
			(this.onkeydown = this.onkeydown.bind(this));
	}
	onclick(t) {
		l(h(this, be)) || this.root.toggleItem(this.opts.value.current, this.opts.id.current);
	}
	onkeydown(t) {
		if (!l(h(this, be))) {
			if (t.key === Yr || t.key === Zr) {
				t.preventDefault(), Ue(this, zr, Ho).call(this);
				return;
			}
			this.root.opts.rovingFocus.current &&
				this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, t);
		}
	}
	get isPressed() {
		return l(h(this, Dr));
	}
	get snippetProps() {
		return l(h(this, Mr));
	}
	get props() {
		return l(h(this, Rr));
	}
}
(be = new WeakMap()),
	(zr = new WeakSet()),
	(Ho = function () {
		l(h(this, be)) || this.root.toggleItem(this.opts.value.current, this.opts.id.current);
	}),
	(Dr = new WeakMap()),
	(Hr = new WeakMap()),
	(Or = new WeakMap()),
	(Me = new WeakMap()),
	(Mr = new WeakMap()),
	(Rr = new WeakMap());
function Ma(a) {
	return a ? 'on' : 'off';
}
const Oo = new to('ToggleGroup.Root');
function Ra(a) {
	const { type: t, ...r } = a,
		n = t === 'single' ? new Da(r) : new Ha(r);
	return Oo.set(n);
}
function Ga(a) {
	return new Oa(a, Oo.get());
}
var Ua = d('<div><!></div>');
function Va(a, t) {
	zt(t, !0);
	let r = x(t, 'id', 19, xe),
		n = x(t, 'ref', 15, null),
		f = x(t, 'value', 15),
		u = x(t, 'onValueChange', 3, $e),
		C = x(t, 'disabled', 3, !1),
		S = x(t, 'loop', 3, !0),
		E = x(t, 'orientation', 3, 'horizontal'),
		w = x(t, 'rovingFocus', 3, !0),
		m = Bt(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'id',
			'ref',
			'value',
			'onValueChange',
			'type',
			'disabled',
			'loop',
			'orientation',
			'rovingFocus',
			'child',
			'children'
		]);
	if (f() === void 0) {
		const D = t.type === 'single' ? '' : [];
		f(D);
	}
	const k = Ra({
			id: Y.with(() => r()),
			value: Y.with(
				() => f(),
				(D) => {
					f(D), u()(D);
				}
			),
			disabled: Y.with(() => C()),
			loop: Y.with(() => S()),
			orientation: Y.with(() => E()),
			rovingFocus: Y.with(() => w()),
			type: t.type,
			ref: Y.with(
				() => n(),
				(D) => n(D)
			)
		}),
		F = G(() => ie(m, k.props));
	var j = V(),
		et = i(j);
	{
		var dt = (D) => {
				var K = V(),
					T = i(K);
				mt(
					T,
					() => t.child,
					() => ({ props: l(F) })
				),
					e(D, K);
			},
			N = (D) => {
				var K = Ua();
				let T;
				var ht = A(K);
				mt(ht, () => t.children ?? Zt), z(K), $t(() => (T = Nt(K, T, { ...l(F) }))), e(D, K);
			};
		At(et, (D) => {
			t.child ? D(dt) : D(N, !1);
		});
	}
	e(a, j), Dt();
}
var Ea = d('<button><!></button>');
function Ba(a, t) {
	zt(t, !0);
	let r = x(t, 'ref', 15, null),
		n = x(t, 'disabled', 3, !1),
		f = x(t, 'id', 19, xe),
		u = x(t, 'type', 3, 'button'),
		C = Bt(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'children',
			'child',
			'ref',
			'value',
			'disabled',
			'id',
			'type'
		]);
	const S = Ga({
			id: Y.with(() => f()),
			value: Y.with(() => t.value),
			disabled: Y.with(() => n() ?? !1),
			ref: Y.with(
				() => r(),
				(j) => r(j)
			)
		}),
		E = G(() => ie(C, S.props, { type: u() }));
	var w = V(),
		m = i(w);
	{
		var k = (j) => {
				var et = V(),
					dt = i(et),
					N = nr(() => ({ props: l(E), ...S.snippetProps }));
				mt(
					dt,
					() => t.child,
					() => l(N)
				),
					e(j, et);
			},
			F = (j) => {
				var et = Ea();
				let dt;
				var N = A(et);
				mt(
					N,
					() => t.children ?? Zt,
					() => S.snippetProps
				),
					z(et),
					$t(() => (dt = Nt(et, dt, { ...l(E) }))),
					e(j, et);
			};
		At(m, (j) => {
			t.child ? j(k) : j(F, !1);
		});
	}
	e(a, w), Dt();
}
var Fa = d(
	'<span class="absolute left-2 flex size-3.5 items-center justify-center"><!></span> <!>',
	1
);
function ue(a, t) {
	zt(t, !0);
	let r = x(t, 'ref', 15, null),
		n = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'value', 'label', 'children']);
	var f = V(),
		u = i(f);
	const C = G(() =>
		he(
			'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			t.class
		)
	);
	o(
		u,
		() => ba,
		(S, E) => {
			E(
				S,
				jt(
					{
						get value() {
							return t.value;
						},
						get class() {
							return l(C);
						}
					},
					() => n,
					{
						get ref() {
							return r();
						},
						set ref(m) {
							r(m);
						},
						children: (m, k) => {
							let F = () => (k == null ? void 0 : k().selected),
								j = () => (k == null ? void 0 : k().highlighted);
							var et = Fa(),
								dt = i(et),
								N = A(dt);
							{
								var D = (vt) => {
									Bs(vt, { class: 'size-4' });
								};
								At(N, (vt) => {
									F() && vt(D);
								});
							}
							z(dt);
							var K = s(dt, 2);
							{
								var T = (vt) => {
										var Pt = V(),
											xt = i(Pt);
										mt(
											xt,
											() => t.children,
											() => ({ selected: F(), highlighted: j() })
										),
											e(vt, Pt);
									},
									ht = (vt) => {
										var Pt = $();
										$t(() => ar(Pt, t.label || t.value)), e(vt, Pt);
									};
								At(K, (vt) => {
									t.children ? vt(T) : vt(ht, !1);
								});
							}
							e(m, et);
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		e(a, f),
		Dt();
}
function Ka(a, t) {
	zt(t, !0);
	let r = x(t, 'ref', 15, null),
		n = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var f = V(),
		u = i(f);
	const C = G(() => he('flex cursor-default items-center justify-center py-1', t.class));
	o(
		u,
		() => Ca,
		(S, E) => {
			E(
				S,
				jt(
					{
						get class() {
							return l(C);
						}
					},
					() => n,
					{
						get ref() {
							return r();
						},
						set ref(w) {
							r(w);
						},
						children: (w, m) => {
							Es(w, { class: 'size-4' });
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		e(a, f),
		Dt();
}
function La(a, t) {
	zt(t, !0);
	let r = x(t, 'ref', 15, null),
		n = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var f = V(),
		u = i(f);
	const C = G(() => he('flex cursor-default items-center justify-center py-1', t.class));
	o(
		u,
		() => ya,
		(S, E) => {
			E(
				S,
				jt(
					{
						get class() {
							return l(C);
						}
					},
					() => n,
					{
						get ref() {
							return r();
						},
						set ref(w) {
							r(w);
						},
						children: (w, m) => {
							ko(w, { class: 'size-4' });
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		e(a, f),
		Dt();
}
var ja = d('<!> <!> <!>', 1);
function Lr(a, t) {
	zt(t, !0);
	let r = x(t, 'ref', 15, null),
		n = x(t, 'sideOffset', 3, 4),
		f = Bt(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'ref',
			'class',
			'sideOffset',
			'portalProps',
			'children'
		]);
	var u = V(),
		C = i(u);
	o(
		C,
		() => Ps,
		(S, E) => {
			E(
				S,
				jt(() => t.portalProps, {
					children: (w, m) => {
						var k = V(),
							F = i(k);
						const j = G(() =>
							he(
								'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
								t.class
							)
						);
						o(
							F,
							() => ga,
							(et, dt) => {
								dt(
									et,
									jt(
										{
											get sideOffset() {
												return n();
											},
											get class() {
												return l(j);
											}
										},
										() => f,
										{
											get ref() {
												return r();
											},
											set ref(N) {
												r(N);
											},
											children: (N, D) => {
												var K = ja(),
													T = i(K);
												Ka(T, {});
												var ht = s(T, 2);
												const vt = G(() =>
													he(
														'h-[var(--bits-select-anchor-height)] w-full min-w-[var(--bits-select-anchor-width)] p-1'
													)
												);
												o(
													ht,
													() => Pa,
													(xt, Jt) => {
														Jt(xt, {
															get class() {
																return l(vt);
															},
															children: (Qt, oe) => {
																var Vt = V(),
																	Ft = i(Vt);
																mt(Ft, () => t.children ?? Zt), e(Qt, Vt);
															},
															$$slots: { default: !0 }
														});
													}
												);
												var Pt = s(ht, 2);
												La(Pt, {}), e(N, K);
											},
											$$slots: { default: !0 }
										}
									)
								);
							}
						),
							e(w, k);
					},
					$$slots: { default: !0 }
				})
			);
		}
	),
		e(a, u),
		Dt();
}
var qa = d('<!> <!>', 1);
function jr(a, t) {
	zt(t, !0);
	let r = x(t, 'ref', 15, null),
		n = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var f = V(),
		u = i(f);
	const C = G(() =>
		he(
			'border-input bg-background ring-offset-background data-[placeholder]:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
			t.class
		)
	);
	o(
		u,
		() => Aa,
		(S, E) => {
			E(
				S,
				jt(
					{
						get class() {
							return l(C);
						}
					},
					() => n,
					{
						get ref() {
							return r();
						},
						set ref(w) {
							r(w);
						},
						children: (w, m) => {
							var k = qa(),
								F = i(k);
							mt(F, () => t.children ?? Zt);
							var j = s(F, 2);
							ko(j, { class: 'size-4 opacity-50' }), e(w, k);
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		e(a, f),
		Dt();
}
const qr = Ia;
var Wa = d('<textarea></textarea>');
function Ya(a, t) {
	zt(t, !0);
	let r = x(t, 'ref', 15, null),
		n = x(t, 'value', 15),
		f = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'value', 'class']);
	var u = Wa();
	Ns(u);
	let C;
	Ko(
		u,
		(S) => r(S),
		() => r()
	),
		$t(
			(S) => (C = Nt(u, C, { class: S, ...f })),
			[
				() =>
					he(
						'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
						t.class
					)
			]
		),
		Co(u, n),
		e(a, u),
		Dt();
}
function Za(a) {
	Vo('toggleGroup', a);
}
function Ja() {
	return Eo('toggleGroup');
}
function Wr(a, t) {
	zt(t, !0);
	let r = x(t, 'ref', 15, null),
		n = x(t, 'value', 15),
		f = x(t, 'size', 3, 'default'),
		u = x(t, 'variant', 3, 'default'),
		C = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'value', 'class', 'size', 'variant']);
	Za({ variant: u(), size: f() });
	var S = V(),
		E = i(S);
	const w = G(() => he('flex items-center justify-center gap-1', t.class));
	o(
		E,
		() => Va,
		(m, k) => {
			k(
				m,
				jt(
					{
						get class() {
							return l(w);
						}
					},
					() => C,
					{
						get value() {
							return n();
						},
						set value(F) {
							n(F);
						},
						get ref() {
							return r();
						},
						set ref(F) {
							r(F);
						}
					}
				)
			);
		}
	),
		e(a, S),
		Dt();
}
const Qa = Yo({
	base: 'ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-accent data-[state=on]:text-accent-foreground inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	variants: {
		variant: {
			default: 'bg-transparent',
			outline: 'border-input hover:bg-accent hover:text-accent-foreground border bg-transparent'
		},
		size: { default: 'h-10 min-w-10 px-3', sm: 'h-9 min-w-9 px-2.5', lg: 'h-11 min-w-11 px-5' }
	},
	defaultVariants: { variant: 'default', size: 'default' }
});
function ce(a, t) {
	zt(t, !0);
	let r = x(t, 'ref', 15, null),
		n = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'value', 'class', 'size', 'variant']);
	const f = Ja();
	var u = V(),
		C = i(u);
	const S = G(() => he(Qa({ variant: f.variant || t.variant, size: f.size || t.size }), t.class));
	o(
		C,
		() => Ba,
		(E, w) => {
			w(
				E,
				jt(
					{
						get class() {
							return l(S);
						},
						get value() {
							return t.value;
						}
					},
					() => n,
					{
						get ref() {
							return r();
						},
						set ref(m) {
							r(m);
						}
					}
				)
			);
		}
	),
		e(a, u),
		Dt();
}
var Xa = d('<a><!> <span class="sr-only">Dashboard</span></a>'),
	tn = d('<!> <!>', 1),
	en = d('<a><!> <span class="sr-only">Orders</span></a>'),
	rn = d('<!> <!>', 1),
	on = d('<a><!> <span class="sr-only">Products</span></a>'),
	sn = d('<!> <!>', 1),
	an = d('<a><!> <span class="sr-only">Customers</span></a>'),
	nn = d('<!> <!>', 1),
	ln = d('<a><!> <span class="sr-only">Analytics</span></a>'),
	dn = d('<!> <!>', 1),
	un = d('<!> <!> <!> <!> <!>', 1),
	cn = d('<a><!> <span class="sr-only">Settings</span></a>'),
	hn = d('<!> <!>', 1),
	vn = d('<!> <span class="sr-only">Toggle Menu</span>', 1),
	pn = d(
		'<nav class="grid gap-6 text-lg font-medium"><a href="##" class="bg-primary text-primary-foreground group flex size-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"><!> <span class="sr-only">Acme Inc</span></a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Dashboard</a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Orders</a> <a href="##" class="text-foreground flex items-center gap-4 px-2.5"><!> Products</a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Customers</a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Settings</a></nav>'
	),
	fn = d('<!> <!>', 1),
	gn = d('<!> <!> <!> <!> <!>', 1),
	_n = d(
		'<img src="/images/placeholder-user.jpg" alt="Avatar" class="overflow-hidden rounded-full">'
	),
	mn = d('<!> <!> <!> <!> <!> <!>', 1),
	bn = d('<!> <!>', 1),
	$n = d('<!> <span class="sr-only">Back</span>', 1),
	Pn = d('<!> <!>', 1),
	xn = d(
		'<div class="grid gap-6"><div class="grid gap-3"><!> <!></div> <div class="grid gap-3"><!> <!></div></div>'
	),
	wn = d('<!> <!>', 1),
	yn = d('<!> <!>', 1),
	Sn = d('<!> <!> <!> <!>', 1),
	Nn = d('<!> <!>', 1),
	Cn = d('<!> <!>', 1),
	kn = d('<!> <!> <!>', 1),
	In = d('<!> <!> <!> <!>', 1),
	Tn = d('<!> <!>', 1),
	An = d('<!> <!>', 1),
	zn = d('<!> <!> <!>', 1),
	Dn = d('<!> <!> <!> <!>', 1),
	Hn = d('<!> <!>', 1),
	On = d('<!> <!>', 1),
	Mn = d('<!> <!> <!>', 1),
	Rn = d('<!> <!> <!> <!>', 1),
	Gn = d('<!> <!> <!>', 1),
	Un = d('<!> <!>', 1),
	Vn = d('<!> Add Variant', 1),
	En = d('<!> <!> <!>', 1),
	Bn = d('<!> <!> <!>', 1),
	Fn = d('<!> <!>', 1),
	Kn = d('<!> <!> <!>', 1),
	Ln = d('<!> <!>', 1),
	jn = d(
		'<div class="grid gap-6 sm:grid-cols-3"><div class="grid gap-3"><!> <!></div> <div class="grid gap-3"><!> <!></div></div>'
	),
	qn = d('<!> <!>', 1),
	Wn = d('<!> <!> <!>', 1),
	Yn = d('<!> <!>', 1),
	Zn = d('<div class="grid gap-6"><div class="grid gap-3"><!> <!></div></div>'),
	Jn = d('<!> <!>', 1),
	Qn = d('<!> <!>', 1),
	Xn = d(
		'<div class="grid gap-2"><img alt="Product" class="aspect-square w-full rounded-md object-cover" height="300" src="/images/placeholder.svg" width="300"> <div class="grid grid-cols-3 gap-2"><button aria-label="Product"><img alt="Product" class="aspect-square w-full rounded-md object-cover" height="84" src="/images/placeholder.svg" width="84"></button> <button aria-label="Product"><img alt="Product" class="aspect-square w-full rounded-md object-cover" height="84" src="/images/placeholder.svg" width="84"></button> <button class="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"><!> <span class="sr-only">Upload</span></button></div></div>'
	),
	ti = d('<!> <!>', 1),
	ei = d('<!> <!>', 1),
	ri = d('<div></div> <!>', 1),
	oi = d('<!> <!>', 1),
	si = d(
		'<div class="bg-muted/40 flex min-h-screen w-full flex-col"><aside class="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex"><nav class="flex flex-col items-center gap-4 px-2 py-4"><a href="##" class="bg-primary text-primary-foreground group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base"><!> <span class="sr-only">Acme Inc</span></a> <!></nav> <nav class="mt-auto flex flex-col items-center gap-4 px-2 py-4"><!></nav></aside> <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14"><header class="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"><!> <!> <div class="relative ml-auto flex-1 md:grow-0"><!> <!></div> <!></header> <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"><div class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4"><div class="flex items-center gap-4"><!> <h1 class="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Pro Controller</h1> <!> <div class="hidden items-center gap-2 md:ml-auto md:flex"><!> <!></div></div> <div class="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8"><div class="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8"><!> <!> <!></div> <div class="grid auto-rows-max items-start gap-4 lg:gap-8"><!> <!> <!></div></div> <div class="flex items-center justify-center gap-2 md:hidden"><!> <!></div></div></main></div></div>'
	);
function Wi(a) {
	let t = It(''),
		r = It(''),
		n = It('');
	var f = si(),
		u = A(f),
		C = A(u),
		S = A(C),
		E = A(S);
	co(E, { class: 'size-4 transition-all group-hover:scale-110' }), c(2), z(S);
	var w = s(S, 2);
	o(
		w,
		() => uo,
		(rt, ut) => {
			ut(rt, {
				children: (tt, Wt) => {
					var ot = un(),
						lt = i(ot);
					o(
						lt,
						() => Te,
						(Z, v) => {
							v(Z, {
								children: (P, R) => {
									var b = tn(),
										p = i(b);
									o(
										p,
										() => Ae,
										(g, _) => {
											_(g, {
												child: (I, M) => {
													let X = () => (M == null ? void 0 : M().props);
													var U = Xa();
													let L;
													var W = A(U);
													ho(W, { class: 'size-5' }),
														c(2),
														z(U),
														$t(
															() =>
																(L = Nt(U, L, {
																	href: '##',
																	class:
																		'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	...X()
																}))
														),
														e(I, U);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var y = s(p, 2);
									o(
										y,
										() => ze,
										(g, _) => {
											_(g, {
												side: 'right',
												children: (B, I) => {
													c();
													var M = $('Dashboard');
													e(B, M);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(P, b);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = s(lt, 2);
					o(
						pt,
						() => Te,
						(Z, v) => {
							v(Z, {
								children: (P, R) => {
									var b = rn(),
										p = i(b);
									o(
										p,
										() => Ae,
										(g, _) => {
											_(g, {
												child: (I, M) => {
													let X = () => (M == null ? void 0 : M().props);
													var U = en();
													let L;
													var W = A(U);
													vo(W, { class: 'size-5' }),
														c(2),
														z(U),
														$t(
															() =>
																(L = Nt(U, L, {
																	href: '##',
																	class:
																		'hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	...X()
																}))
														),
														e(I, U);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var y = s(p, 2);
									o(
										y,
										() => ze,
										(g, _) => {
											_(g, {
												side: 'right',
												children: (B, I) => {
													c();
													var M = $('Orders');
													e(B, M);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(P, b);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var J = s(pt, 2);
					o(
						J,
						() => Te,
						(Z, v) => {
							v(Z, {
								children: (P, R) => {
									var b = sn(),
										p = i(b);
									o(
										p,
										() => Ae,
										(g, _) => {
											_(g, {
												child: (I, M) => {
													let X = () => (M == null ? void 0 : M().props);
													var U = on();
													let L;
													var W = A(U);
													po(W, { class: 'size-5' }),
														c(2),
														z(U),
														$t(
															() =>
																(L = Nt(U, L, {
																	href: '##',
																	class:
																		'bg-accent text-accent-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	...X()
																}))
														),
														e(I, U);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var y = s(p, 2);
									o(
										y,
										() => ze,
										(g, _) => {
											_(g, {
												side: 'right',
												children: (B, I) => {
													c();
													var M = $('Products');
													e(B, M);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(P, b);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var q = s(J, 2);
					o(
						q,
						() => Te,
						(Z, v) => {
							v(Z, {
								children: (P, R) => {
									var b = nn(),
										p = i(b);
									o(
										p,
										() => Ae,
										(g, _) => {
											_(g, {
												child: (I, M) => {
													let X = () => (M == null ? void 0 : M().props);
													var U = an();
													let L;
													var W = A(U);
													go(W, { class: 'size-5' }),
														c(2),
														z(U),
														$t(
															() =>
																(L = Nt(U, L, {
																	href: '##',
																	class:
																		'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	...X()
																}))
														),
														e(I, U);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var y = s(p, 2);
									o(
										y,
										() => ze,
										(g, _) => {
											_(g, {
												side: 'right',
												children: (B, I) => {
													c();
													var M = $('Customers');
													e(B, M);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(P, b);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var Q = s(q, 2);
					o(
						Q,
						() => Te,
						(Z, v) => {
							v(Z, {
								children: (P, R) => {
									var b = dn(),
										p = i(b);
									o(
										p,
										() => Ae,
										(g, _) => {
											_(g, {
												child: (I, M) => {
													let X = () => (M == null ? void 0 : M().props);
													var U = ln();
													let L;
													var W = A(U);
													fo(W, { class: 'size-5' }),
														c(2),
														z(U),
														$t(
															() =>
																(L = Nt(U, L, {
																	href: '##',
																	class:
																		'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	...X()
																}))
														),
														e(I, U);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var y = s(p, 2);
									o(
										y,
										() => ze,
										(g, _) => {
											_(g, {
												side: 'right',
												children: (B, I) => {
													c();
													var M = $('Analytics');
													e(B, M);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(P, b);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	),
		z(C);
	var m = s(C, 2),
		k = A(m);
	o(
		k,
		() => uo,
		(rt, ut) => {
			ut(rt, {
				children: (tt, Wt) => {
					var ot = V(),
						lt = i(ot);
					o(
						lt,
						() => Te,
						(pt, J) => {
							J(pt, {
								children: (q, Q) => {
									var Z = hn(),
										v = i(Z);
									o(
										v,
										() => Ae,
										(R, b) => {
											b(R, {
												child: (y, g) => {
													let _ = () => (g == null ? void 0 : g().props);
													var B = cn();
													let I;
													var M = A(B);
													Ms(M, { class: 'size-5' }),
														c(2),
														z(B),
														$t(
															() =>
																(I = Nt(B, I, {
																	href: '##',
																	class:
																		'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	..._()
																}))
														),
														e(y, B);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var P = s(v, 2);
									o(
										P,
										() => ze,
										(R, b) => {
											b(R, {
												side: 'right',
												children: (p, y) => {
													c();
													var g = $('Settings');
													e(p, g);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(q, Z);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	),
		z(m),
		z(u);
	var F = s(u, 2),
		j = A(F),
		et = A(j);
	o(
		et,
		() => Is,
		(rt, ut) => {
			ut(rt, {
				children: (tt, Wt) => {
					var ot = fn(),
						lt = i(ot);
					o(
						lt,
						() => ks,
						(J, q) => {
							q(J, {
								child: (Z, v) => {
									de(
										Z,
										jt(() => (v == null ? void 0 : v().props), {
											variant: 'outline',
											size: 'icon',
											class: 'sm:hidden',
											children: (R, b) => {
												var p = vn(),
													y = i(p);
												Rs(y, { class: 'size-5' }), c(2), e(R, p);
											},
											$$slots: { default: !0 }
										})
									);
								},
								$$slots: { child: !0 }
							});
						}
					);
					var pt = s(lt, 2);
					o(
						pt,
						() => xs,
						(J, q) => {
							q(J, {
								side: 'left',
								class: 'sm:max-w-xs',
								children: (Q, Z) => {
									var v = pn(),
										P = A(v),
										R = A(P);
									co(R, { class: 'size-5 transition-all group-hover:scale-110' }), c(2), z(P);
									var b = s(P, 2),
										p = A(b);
									ho(p, { class: 'size-5' }), c(), z(b);
									var y = s(b, 2),
										g = A(y);
									vo(g, { class: 'size-5' }), c(), z(y);
									var _ = s(y, 2),
										B = A(_);
									po(B, { class: 'size-5' }), c(), z(_);
									var I = s(_, 2),
										M = A(I);
									go(M, { class: 'size-5' }), c(), z(I);
									var X = s(I, 2),
										U = A(X);
									fo(U, { class: 'size-5' }), c(), z(X), z(v), e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	);
	var dt = s(et, 2);
	o(
		dt,
		() => Wo,
		(rt, ut) => {
			ut(rt, {
				class: 'hidden md:flex',
				children: (tt, Wt) => {
					var ot = V(),
						lt = i(ot);
					o(
						lt,
						() => jo,
						(pt, J) => {
							J(pt, {
								children: (q, Q) => {
									var Z = gn(),
										v = i(Z);
									o(
										v,
										() => Fr,
										(y, g) => {
											g(y, {
												children: (_, B) => {
													var I = V(),
														M = i(I);
													o(
														M,
														() => no,
														(X, U) => {
															U(X, {
																href: '##',
																children: (L, W) => {
																	c();
																	var st = $('Dashboard');
																	e(L, st);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(_, I);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var P = s(v, 2);
									o(
										P,
										() => io,
										(y, g) => {
											g(y, {});
										}
									);
									var R = s(P, 2);
									o(
										R,
										() => Fr,
										(y, g) => {
											g(y, {
												children: (_, B) => {
													var I = V(),
														M = i(I);
													o(
														M,
														() => no,
														(X, U) => {
															U(X, {
																href: '##',
																children: (L, W) => {
																	c();
																	var st = $('Products');
																	e(L, st);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(_, I);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var b = s(R, 2);
									o(
										b,
										() => io,
										(y, g) => {
											g(y, {});
										}
									);
									var p = s(b, 2);
									o(
										p,
										() => Fr,
										(y, g) => {
											g(y, {
												children: (_, B) => {
													var I = V(),
														M = i(I);
													o(
														M,
														() => qo,
														(X, U) => {
															U(X, {
																children: (L, W) => {
																	c();
																	var st = $('Edit Product');
																	e(L, st);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(_, I);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(q, Z);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	);
	var N = s(dt, 2),
		D = A(N);
	Ds(D, { class: 'text-muted-foreground absolute left-2.5 top-2.5 size-4' });
	var K = s(D, 2);
	me(K, {
		type: 'search',
		placeholder: 'Search...',
		class: 'bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[320px]'
	}),
		z(N);
	var T = s(N, 2);
	o(
		T,
		() => is,
		(rt, ut) => {
			ut(rt, {
				children: (tt, Wt) => {
					var ot = bn(),
						lt = i(ot);
					o(
						lt,
						() => ss,
						(J, q) => {
							q(J, {
								child: (Z, v) => {
									de(
										Z,
										jt(() => (v == null ? void 0 : v().props), {
											size: 'icon',
											variant: 'outline',
											class: 'overflow-hidden rounded-full',
											children: (R, b) => {
												var p = _n();
												ao(p, 'width', 36), ao(p, 'height', 36), e(R, p);
											},
											$$slots: { default: !0 }
										})
									);
								},
								$$slots: { child: !0 }
							});
						}
					);
					var pt = s(lt, 2);
					o(
						pt,
						() => as,
						(J, q) => {
							q(J, {
								align: 'end',
								children: (Q, Z) => {
									var v = V(),
										P = i(v);
									o(
										P,
										() => ns,
										(R, b) => {
											b(R, {
												children: (p, y) => {
													var g = mn(),
														_ = i(g);
													o(
														_,
														() => Hs,
														(L, W) => {
															W(L, {
																children: (st, yt) => {
																	c();
																	var Ct = $('My Account');
																	e(st, Ct);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var B = s(_, 2);
													o(
														B,
														() => _o,
														(L, W) => {
															W(L, {});
														}
													);
													var I = s(B, 2);
													o(
														I,
														() => Kr,
														(L, W) => {
															W(L, {
																children: (st, yt) => {
																	c();
																	var Ct = $('Settings');
																	e(st, Ct);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var M = s(I, 2);
													o(
														M,
														() => Kr,
														(L, W) => {
															W(L, {
																children: (st, yt) => {
																	c();
																	var Ct = $('Support');
																	e(st, Ct);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var X = s(M, 2);
													o(
														X,
														() => _o,
														(L, W) => {
															W(L, {});
														}
													);
													var U = s(X, 2);
													o(
														U,
														() => Kr,
														(L, W) => {
															W(L, {
																children: (st, yt) => {
																	c();
																	var Ct = $('Logout');
																	e(st, Ct);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(p, g);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	),
		z(j);
	var ht = s(j, 2),
		vt = A(ht),
		Pt = A(vt),
		xt = A(Pt);
	de(xt, {
		variant: 'outline',
		size: 'icon',
		class: 'size-7',
		children: (rt, ut) => {
			var tt = $n(),
				Wt = i(tt);
			Os(Wt, { class: 'size-4' }), c(2), e(rt, tt);
		},
		$$slots: { default: !0 }
	});
	var Jt = s(xt, 4);
	Lo(Jt, {
		variant: 'outline',
		class: 'ml-auto sm:ml-0',
		children: (rt, ut) => {
			c();
			var tt = $('In stock');
			e(rt, tt);
		},
		$$slots: { default: !0 }
	});
	var Qt = s(Jt, 2),
		oe = A(Qt);
	de(oe, {
		variant: 'outline',
		size: 'sm',
		children: (rt, ut) => {
			c();
			var tt = $('Discard');
			e(rt, tt);
		},
		$$slots: { default: !0 }
	});
	var Vt = s(oe, 2);
	de(Vt, {
		size: 'sm',
		children: (rt, ut) => {
			c();
			var tt = $('Save Product');
			e(rt, tt);
		},
		$$slots: { default: !0 }
	}),
		z(Qt),
		z(Pt);
	var Ft = s(Pt, 2),
		se = A(Ft),
		ae = A(se);
	o(
		ae,
		() => Ne,
		(rt, ut) => {
			ut(rt, {
				'data-x-chunk-name': 'dashboard-07-chunk-0',
				'data-x-chunk-description': 'A card with a form to edit the product details',
				children: (tt, Wt) => {
					var ot = wn(),
						lt = i(ot);
					o(
						lt,
						() => Ce,
						(J, q) => {
							q(J, {
								children: (Q, Z) => {
									var v = Pn(),
										P = i(v);
									o(
										P,
										() => ke,
										(b, p) => {
											p(b, {
												children: (y, g) => {
													c();
													var _ = $('Product Details');
													e(y, _);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var R = s(P, 2);
									o(
										R,
										() => rr,
										(b, p) => {
											p(b, {
												children: (y, g) => {
													c();
													var _ = $('Lipsum dolor sit amet, consectetur adipiscing elit');
													e(y, _);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = s(lt, 2);
					o(
						pt,
						() => Ie,
						(J, q) => {
							q(J, {
								children: (Q, Z) => {
									var v = xn(),
										P = A(v),
										R = A(P);
									re(R, {
										for: 'name',
										children: (_, B) => {
											c();
											var I = $('Name');
											e(_, I);
										},
										$$slots: { default: !0 }
									});
									var b = s(R, 2);
									me(b, {
										id: 'name',
										type: 'text',
										class: 'w-full',
										value: 'Gamer Gear Pro Controller'
									}),
										z(P);
									var p = s(P, 2),
										y = A(p);
									re(y, {
										for: 'description',
										children: (_, B) => {
											c();
											var I = $('Description');
											e(_, I);
										},
										$$slots: { default: !0 }
									});
									var g = s(y, 2);
									Ya(g, {
										id: 'description',
										value:
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.',
										class: 'min-h-32'
									}),
										z(p),
										z(v),
										e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	);
	var qt = s(ae, 2);
	o(
		qt,
		() => Ne,
		(rt, ut) => {
			ut(rt, {
				'data-x-chunk-name': 'dashboard-07-chunk-1',
				'data-x-chunk-description': 'A card with a form to edit the product stock and variants',
				children: (tt, Wt) => {
					var ot = En(),
						lt = i(ot);
					o(
						lt,
						() => Ce,
						(q, Q) => {
							Q(q, {
								children: (Z, v) => {
									var P = yn(),
										R = i(P);
									o(
										R,
										() => ke,
										(p, y) => {
											y(p, {
												children: (g, _) => {
													c();
													var B = $('Stock');
													e(g, B);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var b = s(R, 2);
									o(
										b,
										() => rr,
										(p, y) => {
											y(p, {
												children: (g, _) => {
													c();
													var B = $('Lipsum dolor sit amet, consectetur adipiscing elit');
													e(g, B);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Z, P);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = s(lt, 2);
					o(
						pt,
						() => Ie,
						(q, Q) => {
							Q(q, {
								children: (Z, v) => {
									var P = V(),
										R = i(P);
									o(
										R,
										() => Ts,
										(b, p) => {
											p(b, {
												children: (y, g) => {
													var _ = Un(),
														B = i(_);
													o(
														B,
														() => As,
														(M, X) => {
															X(M, {
																children: (U, L) => {
																	var W = V(),
																		st = i(W);
																	o(
																		st,
																		() => or,
																		(yt, Ct) => {
																			Ct(yt, {
																				children: (bt, kt) => {
																					var wt = Sn(),
																						le = i(wt);
																					o(
																						le,
																						() => sr,
																						(Et, Lt) => {
																							Lt(Et, {
																								class: 'w-[100px]',
																								children: (nt, ct) => {
																									c();
																									var it = $('SKU');
																									e(nt, it);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var ft = s(le, 2);
																					o(
																						ft,
																						() => sr,
																						(Et, Lt) => {
																							Lt(Et, {
																								children: (nt, ct) => {
																									c();
																									var it = $('Stock');
																									e(nt, it);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var gt = s(ft, 2);
																					o(
																						gt,
																						() => sr,
																						(Et, Lt) => {
																							Lt(Et, {
																								children: (nt, ct) => {
																									c();
																									var it = $('Price');
																									e(nt, it);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var ne = s(gt, 2);
																					o(
																						ne,
																						() => sr,
																						(Et, Lt) => {
																							Lt(Et, {
																								class: 'w-[100px]',
																								children: (nt, ct) => {
																									c();
																									var it = $('Size');
																									e(nt, it);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					),
																						e(bt, wt);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		e(U, W);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var I = s(B, 2);
													o(
														I,
														() => zs,
														(M, X) => {
															X(M, {
																children: (U, L) => {
																	var W = Gn(),
																		st = i(W);
																	o(
																		st,
																		() => or,
																		(bt, kt) => {
																			kt(bt, {
																				children: (wt, le) => {
																					var ft = In(),
																						gt = i(ft);
																					o(
																						gt,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								class: 'font-semibold',
																								children: (it, te) => {
																									c();
																									var at = $('GGPC-001');
																									e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var ne = s(gt, 2);
																					o(
																						ne,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = Nn(),
																										_t = i(at);
																									re(_t, {
																										for: 'stock-1',
																										class: 'sr-only',
																										children: (Ot, ee) => {
																											c();
																											var Kt = $('Stock');
																											e(Ot, Kt);
																										},
																										$$slots: { default: !0 }
																									});
																									var Ht = s(_t, 2);
																									me(Ht, {
																										id: 'stock-1',
																										type: 'number',
																										value: '100'
																									}),
																										e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var Et = s(ne, 2);
																					o(
																						Et,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = Cn(),
																										_t = i(at);
																									re(_t, {
																										for: 'price-1',
																										class: 'sr-only',
																										children: (Ot, ee) => {
																											c();
																											var Kt = $('Price');
																											e(Ot, Kt);
																										},
																										$$slots: { default: !0 }
																									});
																									var Ht = s(_t, 2);
																									me(Ht, {
																										id: 'price-1',
																										type: 'number',
																										value: '99.99'
																									}),
																										e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var Lt = s(Et, 2);
																					o(
																						Lt,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = V(),
																										_t = i(at);
																									o(
																										_t,
																										() => Wr,
																										(Ht, Ot) => {
																											Ot(Ht, {
																												type: 'single',
																												value: 's',
																												variant: 'outline',
																												children: (ee, Kt) => {
																													var pe = kn(),
																														fe = i(pe);
																													o(
																														fe,
																														() => ce,
																														(Mt, Rt) => {
																															Rt(Mt, {
																																value: 's',
																																children: (Gt, _e) => {
																																	c();
																																	var Ut = $('S');
																																	e(Gt, Ut);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var ge = s(fe, 2);
																													o(
																														ge,
																														() => ce,
																														(Mt, Rt) => {
																															Rt(Mt, {
																																value: 'm',
																																children: (Gt, _e) => {
																																	c();
																																	var Ut = $('M');
																																	e(Gt, Ut);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var Ge = s(ge, 2);
																													o(
																														Ge,
																														() => ce,
																														(Mt, Rt) => {
																															Rt(Mt, {
																																value: 'l',
																																children: (Gt, _e) => {
																																	c();
																																	var Ut = $('L');
																																	e(Gt, Ut);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													),
																														e(ee, pe);
																												},
																												$$slots: { default: !0 }
																											});
																										}
																									),
																										e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					),
																						e(wt, ft);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	);
																	var yt = s(st, 2);
																	o(
																		yt,
																		() => or,
																		(bt, kt) => {
																			kt(bt, {
																				children: (wt, le) => {
																					var ft = Dn(),
																						gt = i(ft);
																					o(
																						gt,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								class: 'font-semibold',
																								children: (it, te) => {
																									c();
																									var at = $('GGPC-002');
																									e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var ne = s(gt, 2);
																					o(
																						ne,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = Tn(),
																										_t = i(at);
																									re(_t, {
																										for: 'stock-2',
																										class: 'sr-only',
																										children: (Ot, ee) => {
																											c();
																											var Kt = $('Stock');
																											e(Ot, Kt);
																										},
																										$$slots: { default: !0 }
																									});
																									var Ht = s(_t, 2);
																									me(Ht, {
																										id: 'stock-2',
																										type: 'number',
																										value: '143'
																									}),
																										e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var Et = s(ne, 2);
																					o(
																						Et,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = An(),
																										_t = i(at);
																									re(_t, {
																										for: 'price-2',
																										class: 'sr-only',
																										children: (Ot, ee) => {
																											c();
																											var Kt = $('Price');
																											e(Ot, Kt);
																										},
																										$$slots: { default: !0 }
																									});
																									var Ht = s(_t, 2);
																									me(Ht, {
																										id: 'price-2',
																										type: 'number',
																										value: '99.99'
																									}),
																										e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var Lt = s(Et, 2);
																					o(
																						Lt,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = V(),
																										_t = i(at);
																									o(
																										_t,
																										() => Wr,
																										(Ht, Ot) => {
																											Ot(Ht, {
																												type: 'single',
																												value: 'm',
																												variant: 'outline',
																												children: (ee, Kt) => {
																													var pe = zn(),
																														fe = i(pe);
																													o(
																														fe,
																														() => ce,
																														(Mt, Rt) => {
																															Rt(Mt, {
																																value: 's',
																																children: (Gt, _e) => {
																																	c();
																																	var Ut = $('S');
																																	e(Gt, Ut);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var ge = s(fe, 2);
																													o(
																														ge,
																														() => ce,
																														(Mt, Rt) => {
																															Rt(Mt, {
																																value: 'm',
																																children: (Gt, _e) => {
																																	c();
																																	var Ut = $('M');
																																	e(Gt, Ut);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var Ge = s(ge, 2);
																													o(
																														Ge,
																														() => ce,
																														(Mt, Rt) => {
																															Rt(Mt, {
																																value: 'l',
																																children: (Gt, _e) => {
																																	c();
																																	var Ut = $('L');
																																	e(Gt, Ut);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													),
																														e(ee, pe);
																												},
																												$$slots: { default: !0 }
																											});
																										}
																									),
																										e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					),
																						e(wt, ft);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	);
																	var Ct = s(yt, 2);
																	o(
																		Ct,
																		() => or,
																		(bt, kt) => {
																			kt(bt, {
																				children: (wt, le) => {
																					var ft = Rn(),
																						gt = i(ft);
																					o(
																						gt,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								class: 'font-semibold',
																								children: (it, te) => {
																									c();
																									var at = $('GGPC-003');
																									e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var ne = s(gt, 2);
																					o(
																						ne,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = Hn(),
																										_t = i(at);
																									re(_t, {
																										for: 'stock-3',
																										class: 'sr-only',
																										children: (Ot, ee) => {
																											c();
																											var Kt = $('Stock');
																											e(Ot, Kt);
																										},
																										$$slots: { default: !0 }
																									});
																									var Ht = s(_t, 2);
																									me(Ht, {
																										id: 'stock-3',
																										type: 'number',
																										value: '32'
																									}),
																										e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var Et = s(ne, 2);
																					o(
																						Et,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = On(),
																										_t = i(at);
																									re(_t, {
																										for: 'price-3',
																										class: 'sr-only',
																										children: (Ot, ee) => {
																											c();
																											var Kt = $('Stock');
																											e(Ot, Kt);
																										},
																										$$slots: { default: !0 }
																									});
																									var Ht = s(_t, 2);
																									me(Ht, {
																										id: 'price-3',
																										type: 'number',
																										value: '99.99'
																									}),
																										e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var Lt = s(Et, 2);
																					o(
																						Lt,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = V(),
																										_t = i(at);
																									o(
																										_t,
																										() => Wr,
																										(Ht, Ot) => {
																											Ot(Ht, {
																												type: 'single',
																												value: 's',
																												variant: 'outline',
																												children: (ee, Kt) => {
																													var pe = Mn(),
																														fe = i(pe);
																													o(
																														fe,
																														() => ce,
																														(Mt, Rt) => {
																															Rt(Mt, {
																																value: 's',
																																children: (Gt, _e) => {
																																	c();
																																	var Ut = $('S');
																																	e(Gt, Ut);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var ge = s(fe, 2);
																													o(
																														ge,
																														() => ce,
																														(Mt, Rt) => {
																															Rt(Mt, {
																																value: 'm',
																																children: (Gt, _e) => {
																																	c();
																																	var Ut = $('M');
																																	e(Gt, Ut);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													);
																													var Ge = s(ge, 2);
																													o(
																														Ge,
																														() => ce,
																														(Mt, Rt) => {
																															Rt(Mt, {
																																value: 'l',
																																children: (Gt, _e) => {
																																	c();
																																	var Ut = $('L');
																																	e(Gt, Ut);
																																},
																																$$slots: { default: !0 }
																															});
																														}
																													),
																														e(ee, pe);
																												},
																												$$slots: { default: !0 }
																											});
																										}
																									),
																										e(it, at);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					),
																						e(wt, ft);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		e(U, W);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(y, _);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Z, P);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var J = s(pt, 2);
					o(
						J,
						() => Zo,
						(q, Q) => {
							Q(q, {
								class: 'justify-center border-t p-4',
								children: (Z, v) => {
									de(Z, {
										size: 'sm',
										variant: 'ghost',
										class: 'gap-1',
										children: (P, R) => {
											var b = Vn(),
												p = i(b);
											Gs(p, { class: 'size-3.5' }), c(), e(P, b);
										},
										$$slots: { default: !0 }
									});
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	);
	var Xt = s(qt, 2);
	o(
		Xt,
		() => Ne,
		(rt, ut) => {
			ut(rt, {
				'data-x-chunk-name': 'dashboard-07-chunk-2',
				'data-x-chunk-description':
					'A card with a form to edit the product category and subcategory',
				children: (tt, Wt) => {
					var ot = qn(),
						lt = i(ot);
					o(
						lt,
						() => Ce,
						(J, q) => {
							q(J, {
								children: (Q, Z) => {
									var v = V(),
										P = i(v);
									o(
										P,
										() => ke,
										(R, b) => {
											b(R, {
												children: (p, y) => {
													c();
													var g = $('Product Category');
													e(p, g);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = s(lt, 2);
					o(
						pt,
						() => Ie,
						(J, q) => {
							q(J, {
								children: (Q, Z) => {
									var v = jn(),
										P = A(v),
										R = A(P);
									re(R, {
										for: 'category',
										children: (_, B) => {
											c();
											var I = $('Category');
											e(_, I);
										},
										$$slots: { default: !0 }
									});
									var b = s(R, 2);
									o(
										b,
										() => qr,
										(_, B) => {
											B(_, {
												type: 'single',
												get value() {
													return l(t);
												},
												set value(I) {
													St(t, Tt(I));
												},
												children: (I, M) => {
													var X = Fn(),
														U = i(X);
													o(
														U,
														() => jr,
														(W, st) => {
															st(W, {
																id: 'category',
																'aria-label': 'Select category',
																class: 'capitalize',
																children: (yt, Ct) => {
																	c();
																	var bt = $();
																	$t(() => ar(bt, l(t) ?? 'Select category')), e(yt, bt);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var L = s(U, 2);
													o(
														L,
														() => Lr,
														(W, st) => {
															st(W, {
																children: (yt, Ct) => {
																	var bt = Bn(),
																		kt = i(bt);
																	o(
																		kt,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 'clothing', label: 'Clothing' });
																		}
																	);
																	var wt = s(kt, 2);
																	o(
																		wt,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 'electronics', label: 'Electronics' });
																		}
																	);
																	var le = s(wt, 2);
																	o(
																		le,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 'accessories', label: 'Accessories' });
																		}
																	),
																		e(yt, bt);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(I, X);
												},
												$$slots: { default: !0 }
											});
										}
									),
										z(P);
									var p = s(P, 2),
										y = A(p);
									re(y, {
										for: 'subcategory',
										children: (_, B) => {
											c();
											var I = $('Subcategory (optional)');
											e(_, I);
										},
										$$slots: { default: !0 }
									});
									var g = s(y, 2);
									o(
										g,
										() => qr,
										(_, B) => {
											B(_, {
												type: 'single',
												get value() {
													return l(r);
												},
												set value(I) {
													St(r, Tt(I));
												},
												children: (I, M) => {
													var X = Ln(),
														U = i(X);
													o(
														U,
														() => jr,
														(W, st) => {
															st(W, {
																id: 'subcategory',
																'aria-label': 'Select subcategory',
																children: (yt, Ct) => {
																	c();
																	var bt = $();
																	$t(() => ar(bt, l(r) ?? 'Select subcategory')), e(yt, bt);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var L = s(U, 2);
													o(
														L,
														() => Lr,
														(W, st) => {
															st(W, {
																children: (yt, Ct) => {
																	var bt = Kn(),
																		kt = i(bt);
																	o(
																		kt,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 't-shirts', label: 'T-Shirts' });
																		}
																	);
																	var wt = s(kt, 2);
																	o(
																		wt,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 'hoodies', label: 'Hoodies' });
																		}
																	);
																	var le = s(wt, 2);
																	o(
																		le,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 'sweatshirts', label: 'Sweatshirts' });
																		}
																	),
																		e(yt, bt);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(I, X);
												},
												$$slots: { default: !0 }
											});
										}
									),
										z(p),
										z(v),
										e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	),
		z(se);
	var we = s(se, 2),
		ve = A(we);
	o(
		ve,
		() => Ne,
		(rt, ut) => {
			ut(rt, {
				'data-x-chunk-name': 'dashboard-07-chunk-3',
				'data-x-chunk-description': 'A card with a form to edit the product status',
				children: (tt, Wt) => {
					var ot = Jn(),
						lt = i(ot);
					o(
						lt,
						() => Ce,
						(J, q) => {
							q(J, {
								children: (Q, Z) => {
									var v = V(),
										P = i(v);
									o(
										P,
										() => ke,
										(R, b) => {
											b(R, {
												children: (p, y) => {
													c();
													var g = $('Product Status');
													e(p, g);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = s(lt, 2);
					o(
						pt,
						() => Ie,
						(J, q) => {
							q(J, {
								children: (Q, Z) => {
									var v = Zn(),
										P = A(v),
										R = A(P);
									re(R, {
										for: 'status',
										children: (p, y) => {
											c();
											var g = $('Status');
											e(p, g);
										},
										$$slots: { default: !0 }
									});
									var b = s(R, 2);
									o(
										b,
										() => qr,
										(p, y) => {
											y(p, {
												type: 'single',
												get value() {
													return l(n);
												},
												set value(g) {
													St(n, Tt(g));
												},
												children: (g, _) => {
													var B = Yn(),
														I = i(B);
													o(
														I,
														() => jr,
														(X, U) => {
															U(X, {
																id: 'status',
																'aria-label': 'Select status',
																class: 'capitalize',
																children: (L, W) => {
																	c();
																	var st = $();
																	$t(() => ar(st, l(n) ?? 'Select status')), e(L, st);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var M = s(I, 2);
													o(
														M,
														() => Lr,
														(X, U) => {
															U(X, {
																children: (L, W) => {
																	var st = Wn(),
																		yt = i(st);
																	o(
																		yt,
																		() => ue,
																		(kt, wt) => {
																			wt(kt, { value: 'draft', label: 'Draft' });
																		}
																	);
																	var Ct = s(yt, 2);
																	o(
																		Ct,
																		() => ue,
																		(kt, wt) => {
																			wt(kt, { value: 'published', label: 'Active' });
																		}
																	);
																	var bt = s(Ct, 2);
																	o(
																		bt,
																		() => ue,
																		(kt, wt) => {
																			wt(kt, { value: 'archived', label: 'Archived' });
																		}
																	),
																		e(L, st);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(g, B);
												},
												$$slots: { default: !0 }
											});
										}
									),
										z(P),
										z(v),
										e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	);
	var Re = s(ve, 2);
	o(
		Re,
		() => Ne,
		(rt, ut) => {
			ut(rt, {
				class: 'overflow-hidden',
				'data-x-chunk-name': 'dashboard-07-chunk-4',
				'data-x-chunk-description': 'A card with a form to upload product images',
				children: (tt, Wt) => {
					var ot = ti(),
						lt = i(ot);
					o(
						lt,
						() => Ce,
						(J, q) => {
							q(J, {
								children: (Q, Z) => {
									var v = Qn(),
										P = i(v);
									o(
										P,
										() => ke,
										(b, p) => {
											p(b, {
												children: (y, g) => {
													c();
													var _ = $('Product Images');
													e(y, _);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var R = s(P, 2);
									o(
										R,
										() => rr,
										(b, p) => {
											p(b, {
												children: (y, g) => {
													c();
													var _ = $('Lipsum dolor sit amet, consectetur adipiscing elit');
													e(y, _);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = s(lt, 2);
					o(
						pt,
						() => Ie,
						(J, q) => {
							q(J, {
								children: (Q, Z) => {
									var v = Xn(),
										P = s(A(v), 2),
										R = s(A(P), 4),
										b = A(R);
									Fs(b, { class: 'text-muted-foreground size-4' }), c(2), z(R), z(P), z(v), e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	);
	var Vr = s(Re, 2);
	o(
		Vr,
		() => Ne,
		(rt, ut) => {
			ut(rt, {
				'data-x-chunk-name': 'dashboard-07-chunk-5',
				'data-x-chunk-description': 'A card with a call to action to archive the product',
				children: (tt, Wt) => {
					var ot = oi(),
						lt = i(ot);
					o(
						lt,
						() => Ce,
						(J, q) => {
							q(J, {
								children: (Q, Z) => {
									var v = ei(),
										P = i(v);
									o(
										P,
										() => ke,
										(b, p) => {
											p(b, {
												children: (y, g) => {
													c();
													var _ = $('Archive Product');
													e(y, _);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var R = s(P, 2);
									o(
										R,
										() => rr,
										(b, p) => {
											p(b, {
												children: (y, g) => {
													c();
													var _ = $('Lipsum dolor sit amet, consectetur adipiscing elit.');
													e(y, _);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = s(lt, 2);
					o(
						pt,
						() => Ie,
						(J, q) => {
							q(J, {
								children: (Q, Z) => {
									var v = ri(),
										P = s(i(v), 2);
									de(P, {
										size: 'sm',
										variant: 'secondary',
										children: (R, b) => {
											c();
											var p = $('Archive Product');
											e(R, p);
										},
										$$slots: { default: !0 }
									}),
										e(Q, v);
								},
								$$slots: { default: !0 }
							});
						}
					),
						e(tt, ot);
				},
				$$slots: { default: !0 }
			});
		}
	),
		z(we),
		z(Ft);
	var ro = s(Ft, 2),
		oo = A(ro);
	de(oo, {
		variant: 'outline',
		size: 'sm',
		children: (rt, ut) => {
			c();
			var tt = $('Discard');
			e(rt, tt);
		},
		$$slots: { default: !0 }
	});
	var Mo = s(oo, 2);
	de(Mo, {
		size: 'sm',
		children: (rt, ut) => {
			c();
			var tt = $('Save Product');
			e(rt, tt);
		},
		$$slots: { default: !0 }
	}),
		z(ro),
		z(vt),
		z(ht),
		z(F),
		z(f),
		e(a, f);
}
export { Wi as component };
