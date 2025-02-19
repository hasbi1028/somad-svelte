var Vo = Object.defineProperty;
var so = (s) => {
	throw TypeError(s);
};
var Eo = (s, t, r) =>
	t in s ? Vo(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (s[t] = r);
var H = (s, t, r) => Eo(s, typeof t != 'symbol' ? t + '' : t, r),
	Er = (s, t, r) => t.has(s) || so('Cannot ' + r);
var h = (s, t, r) => (Er(s, t, 'read from private field'), r ? r.call(s) : t.get(s)),
	O = (s, t, r) =>
		t.has(s)
			? so('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(s)
				: t.set(s, r),
	Br = (s, t, r, n) => (Er(s, t, 'write to private field'), n ? n.call(s, r) : t.set(s, r), r),
	Ue = (s, t, r) => (Er(s, t, 'access private method'), r);
import '../chunks/Bg9kRutz.js';
import {
	f as i,
	h as U,
	g as l,
	u as Jr,
	b as It,
	e as St,
	ac as Bo,
	p as zt,
	t as $t,
	a as Dt,
	d as nr,
	c as A,
	y as Qt,
	r as z,
	s as a,
	aI as Fo,
	aH as Ko,
	n as c
} from '../chunks/BHafZ7-g.js';
import { s as ar } from '../chunks/709vCQOk.js';
import { c as G, a as e, v as Xr, t as u, b as $, x as Lo } from '../chunks/D4wBL3Sd.js';
import { c as o } from '../chunks/D-TmFHfb.js';
import { r as jo, a as Nt, s as ao } from '../chunks/eK_4uKAs.js';
import { p as Tt } from '../chunks/BMat-oFk.js';
import { l as bo, s as Lt, p as y, i as At, r as Bt, b as qo } from '../chunks/CjIAJ7VA.js';
import { B as Wo } from '../chunks/FIXHeqsx.js';
import { B as Yo, a as Fr, b as no, c as io, d as Qo, e as Zo } from '../chunks/gqCKvLmc.js';
import { a as he, c as Jo, B as de } from '../chunks/Bsldq5z3.js';
import { C as Ne } from '../chunks/QDtlYqdc.js';
import { D as Xo, C as Ce, a as ke, b as rr, c as Ie } from '../chunks/CbUYl22c.js';
import { C as ts } from '../chunks/vYS07VBd.js';
import {
	f as es,
	h as rs,
	n as os,
	p as ss,
	i as as,
	j as ns,
	M as to,
	e as is,
	T as ls,
	D as ds,
	G as us,
	a as Kr,
	R as cs
} from '../chunks/BOSOt6G1.js';
import { I as me } from '../chunks/C5wd2lyJ.js';
import { L as re } from '../chunks/CDypPdYK.js';
import { e as hs, i as vs } from '../chunks/CNlA5Cx2.js';
import { s as mt } from '../chunks/CiWmPosG.js';
import {
	D as ps,
	C as eo,
	T as $o,
	A as De,
	B as Ve,
	E as Yr,
	d as Qr,
	W as lo,
	G as Po,
	H as xo,
	I as yo,
	e as wo,
	f as Gr,
	Q as So,
	n as $e,
	b as fs,
	a5 as gs,
	a6 as _s,
	a7 as ms,
	w as No,
	P as bs,
	q as $s,
	F as Ps,
	s as xs,
	i as ys,
	a8 as ws,
	g as Co,
	Z as Ss,
	S as Ns
} from '../chunks/DvUo5-ap.js';
import {
	w as Pe,
	a as Se,
	o as Cs,
	s as ks,
	c as Is,
	b as Y,
	u as xe,
	m as ie
} from '../chunks/iSg1OsVq.js';
import { b as ko } from '../chunks/DOrg4k1C.js';
import { V as Ts } from '../chunks/YJ0c87i7.js';
import { T as As, R as zs } from '../chunks/BvN8JEzU.js';
import { T as Ds, a as Hs, b as or, c as sr, d as Os, e as Yt } from '../chunks/CYrfLlo4.js';
import { R as Te, T as Ae, a as ze, P as uo } from '../chunks/WCo3IhKC.js';
import { P as co } from '../chunks/Db07kPmK.js';
import { S as Ms } from '../chunks/B0otktkl.js';
import { C as Rs } from '../chunks/B4xPSlFl.js';
import { H as ho } from '../chunks/Cblokx3N.js';
import { S as vo, P as po, C as fo } from '../chunks/A5zQAGlp.js';
import { U as go } from '../chunks/BS_YBG0Y.js';
import { S as Gs } from '../chunks/Bw9OX24f.js';
import { P as Us } from '../chunks/DVMtRMN1.js';
import { D as _o } from '../chunks/BX2CG_nZ.js';
import { C as Vs } from '../chunks/BLV2UlSA.js';
import '../chunks/69_IOA4Y.js';
import { s as Io } from '../chunks/BtEvizs7.js';
import { I as To } from '../chunks/DtoOq0pI.js';
import { C as Es } from '../chunks/CmjqrqP0.js';
import { U as Bs } from '../chunks/DIdrg3Ti.js';
function Ao(s, t) {
	const r = bo(t, ['children', '$$slots', '$$events', '$$legacy']);
	To(
		s,
		Lt({ name: 'chevron-down' }, () => r, {
			iconNode: [['path', { d: 'm6 9 6 6 6-6' }]],
			children: (v, d) => {
				var w = G(),
					P = i(w);
				Io(P, t, 'default', {}, null), e(v, w);
			},
			$$slots: { default: !0 }
		})
	);
}
function Fs(s, t) {
	const r = bo(t, ['children', '$$slots', '$$events', '$$legacy']);
	To(
		s,
		Lt({ name: 'chevron-up' }, () => r, {
			iconNode: [['path', { d: 'm18 15-6-6-6 6' }]],
			children: (v, d) => {
				var w = G(),
					P = i(w);
				Io(P, t, 'default', {}, null), e(v, w);
			},
			$$slots: { default: !0 }
		})
	);
}
function Ks(s) {
	const t = ps('', 1e3);
	function r(v, d) {
		if (!s.enabled || !d.length) return;
		t.current = t.current + v;
		const w = s.getCurrentItem(),
			P = d.find((k) => k === w) ?? '',
			E = d.map((k) => k ?? ''),
			S = es(E, t.current, P),
			m = d.find((k) => k === S);
		return m && s.onMatch(m), m;
	}
	function n() {
		t.current = '';
	}
	return { search: t, handleTypeaheadSearch: r, resetTypeahead: n };
}
const Ls = [Ve, Po, xo],
	js = [De, yo, wo],
	qs = [...Ls, ...js];
var Ee, Be, Fe, Ke, Le, je, qe, ir, lr, dr;
class zo {
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
			U(() => (this.highlightedNode ? this.highlightedNode.getAttribute('data-value') : null))
		);
		O(
			this,
			lr,
			U(() => {
				if (this.highlightedNode) return this.highlightedNode.id;
			})
		);
		O(
			this,
			dr,
			U(() => (this.highlightedNode ? this.highlightedNode.getAttribute('data-label') : null))
		);
		H(this, 'isUsingKeyboard', !1);
		H(this, 'isCombobox', !1);
		H(this, 'bitsAttrs');
		(this.opts = t),
			(this.isCombobox = t.isCombobox),
			(this.bitsAttrs = ha(this)),
			Bo(() => {
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
class Ws extends zo {
	constructor(r) {
		super(r);
		H(this, 'opts');
		H(this, 'isMulti', !1);
		O(
			this,
			ur,
			U(() => this.opts.value.current !== '')
		);
		O(
			this,
			cr,
			U(() => {
				var n;
				return this.opts.items.current.length
					? (((n = this.opts.items.current.find((v) => v.value === this.opts.value.current)) == null
							? void 0
							: n.label) ?? '')
					: '';
			})
		);
		O(
			this,
			hr,
			U(() =>
				this.opts.items.current.length
					? this.opts.items.current.filter((n) => !n.disabled).map((n) => n.label)
					: []
			)
		);
		O(
			this,
			vr,
			U(() => !(this.isMulti || this.opts.items.current.length === 0))
		);
		(this.opts = r),
			Jr(() => {
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
		$o(() => {
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
class Ys extends zo {
	constructor(r) {
		super(r);
		H(this, 'opts');
		H(this, 'isMulti', !0);
		O(
			this,
			pr,
			U(() => this.opts.value.current.length > 0)
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
			? (this.opts.value.current = this.opts.value.current.filter((v) => v !== r))
			: (this.opts.value.current = [...this.opts.value.current, r]),
			(this.inputValue = n);
	}
	setInitialHighlightedNode() {
		$o(() => {
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
var He, Oe, we, Do, Zr, fr;
class Qs {
	constructor(t, r) {
		O(this, we);
		H(this, 'opts');
		H(this, 'root');
		O(this, He);
		O(this, Oe);
		O(
			this,
			fr,
			U(() => ({
				id: this.opts.id.current,
				disabled: this.root.opts.disabled.current ? !0 : void 0,
				'aria-haspopup': 'listbox',
				'data-state': So(this.root.opts.open.current),
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
				rs({
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
						const v = this.root.opts.items.current.find((d) => d.label === n);
						v && (this.root.opts.value.current = v.value);
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
			if (t.key === Yr || t.key === Qr || t.key === Ve || t.key === De)
				t.preventDefault(), this.root.handleOpen();
			else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
				h(this, Oe).handleTypeaheadSearch(t.key, this.root.candidateLabels);
				return;
			}
			if (this.root.hasValue) return;
			const d = this.root.getCandidateNodes();
			if (!d.length) return;
			if (t.key === Ve) {
				const w = d[0];
				this.root.setHighlightedNode(w);
			} else if (t.key === De) {
				const w = d[d.length - 1];
				this.root.setHighlightedNode(w);
			}
			return;
		}
		if (t.key === lo) {
			this.root.handleClose();
			return;
		}
		if ((t.key === Yr || t.key === Qr) && !t.isComposing) {
			t.preventDefault();
			const d = this.root.highlightedValue === this.root.opts.value.current;
			if (!this.root.opts.allowDeselect.current && d && !this.root.isMulti) {
				this.root.handleClose();
				return;
			}
			this.root.highlightedValue !== null &&
				this.root.toggleItem(this.root.highlightedValue, this.root.highlightedLabel ?? void 0),
				!this.root.isMulti && !d && this.root.handleClose();
		}
		if ((t.key === De && t.altKey && this.root.handleClose(), qs.includes(t.key))) {
			t.preventDefault();
			const d = this.root.getCandidateNodes(),
				w = this.root.highlightedNode,
				P = w ? d.indexOf(w) : -1,
				E = this.root.opts.loop.current;
			let S;
			if (
				(t.key === Ve
					? (S = os(d, P, E))
					: t.key === De
						? (S = ss(d, P, E))
						: t.key === yo
							? (S = as(d, P, 10, E))
							: t.key === Po
								? (S = ns(d, P, 10, E))
								: t.key === xo
									? (S = d[0])
									: t.key === wo && (S = d[d.length - 1]),
				!S)
			)
				return;
			this.root.setHighlightedNode(S);
			return;
		}
		const r = t.ctrlKey || t.altKey || t.metaKey,
			n = t.key.length === 1;
		if (t.code === 'Space') return;
		const v = this.root.getCandidateNodes();
		if (t.key !== lo) {
			if (!r && n) {
				h(this, He).handleTypeaheadSearch(t.key, v);
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
					? (Ue(this, we, Zr).call(this, t), t.preventDefault())
					: this.root.handleClose());
	}
	onpointerup(t) {
		t.preventDefault(), t.pointerType === 'touch' && Ue(this, we, Zr).call(this, t);
	}
	get props() {
		return l(h(this, fr));
	}
}
(He = new WeakMap()),
	(Oe = new WeakMap()),
	(we = new WeakSet()),
	(Do = function () {
		(this.root.opts.open.current = !0), h(this, Oe).resetTypeahead(), h(this, He).resetTypeahead();
	}),
	(Zr = function (t) {
		Ue(this, we, Do).call(this);
	}),
	(fr = new WeakMap());
var We, Ye, gr, _r, mr;
class Zs {
	constructor(t, r) {
		H(this, 'opts');
		H(this, 'root');
		O(this, We, It(null));
		O(this, Ye, It(!1));
		O(
			this,
			gr,
			U(() => {
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
			U(() => ({ open: this.root.opts.open.current }))
		);
		O(
			this,
			mr,
			U(() => ({
				id: this.opts.id.current,
				role: 'listbox',
				'data-state': So(this.root.opts.open.current),
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
			Cs(() => {
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
var br, $r, Qe, Pr, xr;
class Js {
	constructor(t, r) {
		H(this, 'opts');
		H(this, 'root');
		O(
			this,
			br,
			U(() => this.root.includesItem(this.opts.value.current))
		);
		O(
			this,
			$r,
			U(() => this.root.highlightedValue === this.opts.value.current)
		);
		H(this, 'prevHighlighted', new gs(() => this.isHighlighted));
		O(this, Qe, It(!1));
		O(
			this,
			Pr,
			U(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }))
		);
		O(
			this,
			xr,
			U(() => ({
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
		return l(h(this, Qe));
	}
	set mounted(t) {
		St(h(this, Qe), Tt(t));
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
			if (t.pointerType === 'touch' && !_s) {
				Xr(
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
	(Qe = new WeakMap()),
	(Pr = new WeakMap()),
	(xr = new WeakMap());
var yr, wr;
class Xs {
	constructor(t, r) {
		H(this, 'opts');
		H(this, 'root');
		O(
			this,
			yr,
			U(() => this.root.opts.name.current !== '')
		);
		O(
			this,
			wr,
			U(() => ({
				disabled: No(this.root.opts.disabled.current),
				required: ms(this.root.opts.required.current),
				name: this.root.opts.name.current,
				value: this.opts.value.current,
				style: ks(Is),
				tabindex: -1,
				onfocus: this.onfocus
			}))
		);
		(this.opts = t), (this.root = r), (this.onfocus = this.onfocus.bind(this));
	}
	get shouldRender() {
		return l(h(this, yr));
	}
	onfocus(t) {
		var r, n;
		t.preventDefault(),
			this.root.isCombobox
				? (n = this.root.inputNode) == null || n.focus()
				: (r = this.root.triggerNode) == null || r.focus();
	}
	get props() {
		return l(h(this, wr));
	}
}
(yr = new WeakMap()), (wr = new WeakMap());
var Ze, Sr;
class ta {
	constructor(t, r) {
		H(this, 'opts');
		H(this, 'content');
		H(this, 'root');
		O(this, Ze, It(0));
		O(
			this,
			Sr,
			U(() => ({
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
		return l(h(this, Ze));
	}
	set prevScrollTop(t) {
		St(h(this, Ze), Tt(t));
	}
	get props() {
		return l(h(this, Sr));
	}
}
(Ze = new WeakMap()), (Sr = new WeakMap());
var Je, Nr;
class Ho {
	constructor(t, r) {
		H(this, 'opts');
		H(this, 'content');
		H(this, 'root');
		H(this, 'autoScrollInterval', null);
		H(this, 'userScrollTimer', -1);
		H(this, 'isUserScrolling', !1);
		H(this, 'onAutoScroll', $e);
		O(this, Je, It(!1));
		O(
			this,
			Nr,
			U(() => ({
				id: this.opts.id.current,
				'aria-hidden': fs(!0),
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
			Jr(() => {
				this.mounted || this.clearAutoScrollInterval();
			}),
			(this.onpointerdown = this.onpointerdown.bind(this)),
			(this.onpointermove = this.onpointermove.bind(this)),
			(this.onpointerleave = this.onpointerleave.bind(this));
	}
	get mounted() {
		return l(h(this, Je));
	}
	set mounted(t) {
		St(h(this, Je), Tt(t));
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
(Je = new WeakMap()), (Nr = new WeakMap());
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
			U(() => ({ ...this.state.props, [this.root.bitsAttrs['scroll-down-button']]: '' }))
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
							Xr(this.content.viewportNode, 'scroll', () => this.handleScroll())
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
			U(() => ({ ...this.state.props, [this.root.bitsAttrs['scroll-up-button']]: '' }))
		);
		(this.state = t),
			(this.content = t.content),
			(this.root = t.root),
			(this.state.onAutoScroll = this.handleAutoScroll),
			Pe([() => this.content.viewportNode, () => this.content.isPositioned], () => {
				if (!(!this.content.viewportNode || !this.content.isPositioned))
					return (
						this.handleScroll(!0),
						Xr(this.content.viewportNode, 'scroll', () => this.handleScroll())
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
const er = new eo('Select.Root | Combobox.Root'),
	Ur = new eo('Select.Content | Combobox.Content');
function oa(s) {
	const { type: t, ...r } = s,
		n = t === 'single' ? new Ws(r) : new Ys(r);
	return er.set(n);
}
function sa(s) {
	return Ur.set(new Zs(s, er.get()));
}
function aa(s) {
	return new Qs(s, er.get());
}
function na(s) {
	return new Js(s, er.get());
}
function ia(s) {
	return new ta(s, Ur.get());
}
function la(s) {
	return new ra(new Ho(s, Ur.get()));
}
function da(s) {
	return new ea(new Ho(s, Ur.get()));
}
function ua(s) {
	return new Xs(s, er.get());
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
function ha(s) {
	const t = s.isCombobox,
		r = {};
	for (const n of ca) r[n] = t ? `data-combobox-${n}` : `data-select-${n}`;
	return r;
}
var va = u('<input>');
function mo(s, t) {
	zt(t, !0);
	let r = y(t, 'value', 15, '');
	const n = ua({ value: Y.with(() => r()) });
	Ts(s, {
		children: (v, d) => {
			var w = G(),
				P = i(w);
			{
				var E = (S) => {
					var m = va();
					jo(m);
					let k;
					$t(() => (k = Nt(m, k, { ...n.props }))), ko(m, r), e(S, m);
				};
				At(P, (S) => {
					n.shouldRender && S(E);
				});
			}
			e(v, w);
		},
		$$slots: { default: !0 }
	}),
		Dt();
}
var pa = u('<div><div><!></div></div>'),
	fa = u('<div><div><!></div></div>');
function ga(s, t) {
	zt(t, !0);
	let r = y(t, 'id', 19, xe),
		n = y(t, 'ref', 15, null),
		v = y(t, 'forceMount', 3, !1),
		d = y(t, 'side', 3, 'bottom'),
		w = y(t, 'onInteractOutside', 3, $e),
		P = y(t, 'onEscapeKeydown', 3, $e),
		E = y(t, 'preventScroll', 3, !1),
		S = Bt(t, [
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
				(C) => n(C)
			),
			onInteractOutside: Y.with(() => w()),
			onEscapeKeydown: Y.with(() => P())
		}),
		k = U(() => ie(S, m.props));
	var F = G(),
		j = i(F);
	{
		var et = (C) => {
				bs(
					C,
					Lt(
						() => l(k),
						() => m.popperProps,
						{
							get side() {
								return d();
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
								var Pt = G();
								const xt = U(() => ie(ht(), { style: m.props.style }));
								var Zt = i(Pt);
								{
									var Jt = (Vt) => {
											var Ft = G(),
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
											mt(Xt, () => t.children ?? Qt),
												z(ae),
												z(Ft),
												$t(() => {
													(se = Nt(Ft, se, { ...vt() })), (qt = Nt(ae, qt, { ...l(xt) }));
												}),
												e(Vt, Ft);
										};
									At(Zt, (Vt) => {
										t.child ? Vt(Jt) : Vt(oe, !1);
									});
								}
								e(K, Pt);
							},
							$$slots: { popper: !0 }
						}
					)
				);
			},
			dt = (C) => {
				var D = G(),
					K = i(D);
				{
					var T = (ht) => {
						$s(
							ht,
							Lt(
								() => l(k),
								() => m.popperProps,
								{
									get side() {
										return d();
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
										let Zt = () => (xt == null ? void 0 : xt().props),
											Jt = () => (xt == null ? void 0 : xt().wrapperProps);
										var oe = G();
										const Vt = U(() => ie(Zt(), { style: m.props.style }));
										var Ft = i(oe);
										{
											var se = (qt) => {
													var Xt = G(),
														ye = i(Xt),
														ve = nr(() => ({
															props: l(Vt),
															wrapperProps: Jt(),
															...m.snippetProps
														}));
													mt(
														ye,
														() => t.child,
														() => l(ve)
													),
														e(qt, Xt);
												},
												ae = (qt) => {
													var Xt = fa();
													let ye;
													var ve = A(Xt);
													let Re;
													var Vr = A(ve);
													mt(Vr, () => t.children ?? Qt),
														z(ve),
														z(Xt),
														$t(() => {
															(ye = Nt(Xt, ye, { ...Jt() })), (Re = Nt(ve, Re, { ...l(Vt) }));
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
							v() || ht(T);
						},
						!0
					);
				}
				e(C, D);
			};
		At(j, (C) => {
			v() ? C(et) : C(dt, !1);
		});
	}
	e(s, F), Dt();
}
var _a = u('<div><!></div>'),
	ma = u('<!> <!>', 1);
function ba(s, t) {
	zt(t, !0);
	let r = y(t, 'id', 19, xe),
		n = y(t, 'ref', 15, null),
		v = y(t, 'label', 19, () => t.value),
		d = y(t, 'disabled', 3, !1),
		w = y(t, 'onHighlight', 3, $e),
		P = y(t, 'onUnhighlight', 3, $e),
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
	const S = na({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(C) => n(C)
			),
			value: Y.with(() => t.value),
			disabled: Y.with(() => d()),
			label: Y.with(() => v()),
			onHighlight: Y.with(() => w()),
			onUnhighlight: Y.with(() => P())
		}),
		m = U(() => ie(E, S.props));
	var k = ma(),
		F = i(k);
	{
		var j = (C) => {
				var D = G(),
					K = i(D),
					T = nr(() => ({ props: l(m), ...S.snippetProps }));
				mt(
					K,
					() => t.child,
					() => l(T)
				),
					e(C, D);
			},
			et = (C) => {
				var D = _a();
				let K;
				var T = A(D);
				mt(
					T,
					() => t.children ?? Qt,
					() => S.snippetProps
				),
					z(D),
					$t(() => (K = Nt(D, K, { ...l(m) }))),
					e(C, D);
			};
		At(F, (C) => {
			t.child ? C(j) : C(et, !1);
		});
	}
	var dt = a(F, 2);
	to(dt, {
		get mounted() {
			return S.mounted;
		},
		set mounted(C) {
			S.mounted = C;
		}
	}),
		e(s, k),
		Dt();
}
var $a = u('<div><!></div>');
function Pa(s, t) {
	zt(t, !0);
	let r = y(t, 'id', 19, xe),
		n = y(t, 'ref', 15, null),
		v = Bt(t, ['$$slots', '$$events', '$$legacy', 'id', 'ref', 'children', 'child']);
	const d = ia({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(k) => n(k)
			)
		}),
		w = U(() => ie(v, d.props));
	var P = G(),
		E = i(P);
	{
		var S = (k) => {
				var F = G(),
					j = i(F);
				mt(
					j,
					() => t.child,
					() => ({ props: l(w) })
				),
					e(k, F);
			},
			m = (k) => {
				var F = $a();
				let j;
				var et = A(F);
				mt(et, () => t.children ?? Qt),
					z(F),
					$t(() => (j = Nt(F, j, { ...l(w) }, 'svelte-uf90i5'))),
					e(k, F);
			};
		At(E, (k) => {
			t.child ? k(S) : k(m, !1);
		});
	}
	e(s, P), Dt();
}
var xa = u('<div><!></div>'),
	ya = u('<!> <!>', 1);
function wa(s, t) {
	zt(t, !0);
	let r = y(t, 'id', 19, xe),
		n = y(t, 'ref', 15, null),
		v = Bt(t, ['$$slots', '$$events', '$$legacy', 'id', 'ref', 'child', 'children']);
	const d = da({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(m) => n(m)
			)
		}),
		w = U(() => ie(v, d.props));
	var P = G(),
		E = i(P);
	{
		var S = (m) => {
			var k = ya(),
				F = i(k);
			to(F, {
				get mounted() {
					return d.state.mounted;
				},
				set mounted(C) {
					d.state.mounted = C;
				}
			});
			var j = a(F, 2);
			{
				var et = (C) => {
						var D = G(),
							K = i(D);
						mt(
							K,
							() => t.child,
							() => ({ props: v })
						),
							e(C, D);
					},
					dt = (C) => {
						var D = xa();
						let K;
						var T = A(D);
						mt(T, () => t.children ?? Qt), z(D), $t(() => (K = Nt(D, K, { ...l(w) }))), e(C, D);
					};
				At(j, (C) => {
					t.child ? C(et) : C(dt, !1);
				});
			}
			e(m, k);
		};
		At(E, (m) => {
			d.canScrollDown && m(S);
		});
	}
	e(s, P), Dt();
}
var Sa = u('<div><!></div>'),
	Na = u('<!> <!>', 1);
function Ca(s, t) {
	zt(t, !0);
	let r = y(t, 'id', 19, xe),
		n = y(t, 'ref', 15, null),
		v = Bt(t, ['$$slots', '$$events', '$$legacy', 'id', 'ref', 'child', 'children']);
	const d = la({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(m) => n(m)
			)
		}),
		w = U(() => ie(v, d.props));
	var P = G(),
		E = i(P);
	{
		var S = (m) => {
			var k = Na(),
				F = i(k);
			to(F, {
				get mounted() {
					return d.state.mounted;
				},
				set mounted(C) {
					d.state.mounted = C;
				}
			});
			var j = a(F, 2);
			{
				var et = (C) => {
						var D = G(),
							K = i(D);
						mt(
							K,
							() => t.child,
							() => ({ props: v })
						),
							e(C, D);
					},
					dt = (C) => {
						var D = Sa();
						let K;
						var T = A(D);
						mt(T, () => t.children ?? Qt), z(D), $t(() => (K = Nt(D, K, { ...l(w) }))), e(C, D);
					};
				At(j, (C) => {
					t.child ? C(et) : C(dt, !1);
				});
			}
			e(m, k);
		};
		At(E, (m) => {
			d.canScrollUp && m(S);
		});
	}
	e(s, P), Dt();
}
var ka = u('<!> <!>', 1);
function Ia(s, t) {
	zt(t, !0);
	let r = y(t, 'value', 15),
		n = y(t, 'onValueChange', 3, $e),
		v = y(t, 'name', 3, ''),
		d = y(t, 'disabled', 3, !1),
		w = y(t, 'open', 15, !1),
		P = y(t, 'onOpenChange', 3, $e),
		E = y(t, 'loop', 3, !1),
		S = y(t, 'scrollAlignment', 3, 'nearest'),
		m = y(t, 'required', 3, !1),
		k = y(t, 'items', 19, () => []),
		F = y(t, 'allowDeselect', 3, !1);
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
		disabled: Y.with(() => d()),
		required: Y.with(() => m()),
		open: Y.with(
			() => w(),
			(T) => {
				w(T), P()(T);
			}
		),
		loop: Y.with(() => E()),
		scrollAlignment: Y.with(() => S()),
		name: Y.with(() => v()),
		isCombobox: !1,
		items: Y.with(() => k()),
		allowDeselect: Y.with(() => F())
	});
	var et = ka(),
		dt = i(et);
	Ps(dt, {
		children: (T, ht) => {
			var vt = G(),
				Pt = i(vt);
			mt(Pt, () => t.children ?? Qt), e(T, vt);
		},
		$$slots: { default: !0 }
	});
	var C = a(dt, 2);
	{
		var D = (T) => {
				var ht = G(),
					vt = i(ht);
				{
					var Pt = (xt) => {
						var Zt = G(),
							Jt = i(Zt);
						hs(
							Jt,
							17,
							() => j.opts.value.current,
							vs,
							(oe, Vt) => {
								mo(oe, {
									get value() {
										return l(Vt);
									}
								});
							}
						),
							e(xt, Zt);
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
		At(C, (T) => {
			Array.isArray(j.opts.value.current) ? T(D) : T(K, !1);
		});
	}
	e(s, et), Dt();
}
var Ta = u('<button><!></button>');
function Aa(s, t) {
	zt(t, !0);
	let r = y(t, 'id', 19, xe),
		n = y(t, 'ref', 15, null),
		v = y(t, 'type', 3, 'button'),
		d = Bt(t, ['$$slots', '$$events', '$$legacy', 'id', 'ref', 'child', 'children', 'type']);
	const w = aa({
			id: Y.with(() => r()),
			ref: Y.with(
				() => n(),
				(m) => n(m)
			)
		}),
		P = U(() => ie(d, w.props, { type: v() }));
	var E = G(),
		S = i(E);
	o(
		S,
		() => xs,
		(m, k) => {
			k(m, {
				get id() {
					return r();
				},
				children: (F, j) => {
					var et = G(),
						dt = i(et);
					{
						var C = (K) => {
								var T = G(),
									ht = i(T);
								mt(
									ht,
									() => t.child,
									() => ({ props: l(P) })
								),
									e(K, T);
							},
							D = (K) => {
								var T = Ta();
								let ht;
								var vt = A(T);
								mt(vt, () => t.children ?? Qt),
									z(T),
									$t(() => (ht = Nt(T, ht, { ...l(P) }))),
									e(K, T);
							};
						At(dt, (K) => {
							t.child ? K(C) : K(D, !1);
						});
					}
					e(F, et);
				},
				$$slots: { default: !0 }
			});
		}
	),
		e(s, E),
		Dt();
}
const za = 'data-toggle-group-root',
	Oo = 'data-toggle-group-item';
var Ir;
class Mo {
	constructor(t) {
		H(this, 'opts');
		H(this, 'rovingFocusGroup');
		O(
			this,
			Ir,
			U(() => ({
				id: this.opts.id.current,
				[za]: '',
				role: 'group',
				'data-orientation': Co(this.opts.orientation.current),
				'data-disabled': Gr(this.opts.disabled.current)
			}))
		);
		(this.opts = t),
			(this.rovingFocusGroup = is({
				candidateAttr: Oo,
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
class Da extends Mo {
	constructor(r) {
		super(r);
		H(this, 'opts');
		H(this, 'isMulti', !1);
		O(
			this,
			Tr,
			U(() => this.opts.value.current !== '')
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
class Ha extends Mo {
	constructor(r) {
		super(r);
		H(this, 'opts');
		H(this, 'isMulti', !0);
		O(
			this,
			Ar,
			U(() => this.opts.value.current.length > 0)
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
			? (this.opts.value.current = this.opts.value.current.filter((v) => v !== r))
			: ((this.opts.value.current = [...this.opts.value.current, r]),
				this.rovingFocusGroup.setCurrentTabStopId(n));
	}
}
Ar = new WeakMap();
var be, zr, Ro, Dr, Hr, Or, Me, Mr, Rr;
class Oa {
	constructor(t, r) {
		O(this, zr);
		H(this, 'opts');
		H(this, 'root');
		O(
			this,
			be,
			U(() => this.opts.disabled.current || this.root.opts.disabled.current)
		);
		O(
			this,
			Dr,
			U(() => this.root.includesItem(this.opts.value.current))
		);
		O(
			this,
			Hr,
			U(() => (this.root.isMulti ? void 0 : ys(this.isPressed, !1)))
		);
		O(
			this,
			Or,
			U(() => (this.root.isMulti ? ws(this.isPressed) : void 0))
		);
		O(this, Me, It(0));
		O(
			this,
			Mr,
			U(() => ({ pressed: this.isPressed }))
		);
		O(
			this,
			Rr,
			U(() => ({
				id: this.opts.id.current,
				role: this.root.isMulti ? void 0 : 'radio',
				tabindex: l(h(this, Me)),
				'data-orientation': Co(this.root.opts.orientation.current),
				'data-disabled': Gr(l(h(this, be))),
				'data-state': Ma(this.isPressed),
				'data-value': this.opts.value.current,
				'aria-pressed': l(h(this, Or)),
				'aria-checked': l(h(this, Hr)),
				disabled: No(l(h(this, be))),
				[Oo]: '',
				onclick: this.onclick,
				onkeydown: this.onkeydown
			}))
		);
		(this.opts = t),
			(this.root = r),
			Se(t),
			Jr(() => {
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
			if (t.key === Yr || t.key === Qr) {
				t.preventDefault(), Ue(this, zr, Ro).call(this);
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
	(Ro = function () {
		l(h(this, be)) || this.root.toggleItem(this.opts.value.current, this.opts.id.current);
	}),
	(Dr = new WeakMap()),
	(Hr = new WeakMap()),
	(Or = new WeakMap()),
	(Me = new WeakMap()),
	(Mr = new WeakMap()),
	(Rr = new WeakMap());
function Ma(s) {
	return s ? 'on' : 'off';
}
const Go = new eo('ToggleGroup.Root');
function Ra(s) {
	const { type: t, ...r } = s,
		n = t === 'single' ? new Da(r) : new Ha(r);
	return Go.set(n);
}
function Ga(s) {
	return new Oa(s, Go.get());
}
var Ua = u('<div><!></div>');
function Va(s, t) {
	zt(t, !0);
	let r = y(t, 'id', 19, xe),
		n = y(t, 'ref', 15, null),
		v = y(t, 'value', 15),
		d = y(t, 'onValueChange', 3, $e),
		w = y(t, 'disabled', 3, !1),
		P = y(t, 'loop', 3, !0),
		E = y(t, 'orientation', 3, 'horizontal'),
		S = y(t, 'rovingFocus', 3, !0),
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
	if (v() === void 0) {
		const D = t.type === 'single' ? '' : [];
		v(D);
	}
	const k = Ra({
			id: Y.with(() => r()),
			value: Y.with(
				() => v(),
				(D) => {
					v(D), d()(D);
				}
			),
			disabled: Y.with(() => w()),
			loop: Y.with(() => P()),
			orientation: Y.with(() => E()),
			rovingFocus: Y.with(() => S()),
			type: t.type,
			ref: Y.with(
				() => n(),
				(D) => n(D)
			)
		}),
		F = U(() => ie(m, k.props));
	var j = G(),
		et = i(j);
	{
		var dt = (D) => {
				var K = G(),
					T = i(K);
				mt(
					T,
					() => t.child,
					() => ({ props: l(F) })
				),
					e(D, K);
			},
			C = (D) => {
				var K = Ua();
				let T;
				var ht = A(K);
				mt(ht, () => t.children ?? Qt), z(K), $t(() => (T = Nt(K, T, { ...l(F) }))), e(D, K);
			};
		At(et, (D) => {
			t.child ? D(dt) : D(C, !1);
		});
	}
	e(s, j), Dt();
}
var Ea = u('<button><!></button>');
function Ba(s, t) {
	zt(t, !0);
	let r = y(t, 'ref', 15, null),
		n = y(t, 'disabled', 3, !1),
		v = y(t, 'id', 19, xe),
		d = y(t, 'type', 3, 'button'),
		w = Bt(t, [
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
	const P = Ga({
			id: Y.with(() => v()),
			value: Y.with(() => t.value),
			disabled: Y.with(() => n() ?? !1),
			ref: Y.with(
				() => r(),
				(j) => r(j)
			)
		}),
		E = U(() => ie(w, P.props, { type: d() }));
	var S = G(),
		m = i(S);
	{
		var k = (j) => {
				var et = G(),
					dt = i(et),
					C = nr(() => ({ props: l(E), ...P.snippetProps }));
				mt(
					dt,
					() => t.child,
					() => l(C)
				),
					e(j, et);
			},
			F = (j) => {
				var et = Ea();
				let dt;
				var C = A(et);
				mt(
					C,
					() => t.children ?? Qt,
					() => P.snippetProps
				),
					z(et),
					$t(() => (dt = Nt(et, dt, { ...l(E) }))),
					e(j, et);
			};
		At(m, (j) => {
			t.child ? j(k) : j(F, !1);
		});
	}
	e(s, S), Dt();
}
var Fa = u(
	'<span class="absolute left-2 flex size-3.5 items-center justify-center"><!></span> <!>',
	1
);
function ue(s, t) {
	zt(t, !0);
	let r = y(t, 'ref', 15, null),
		n = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'value', 'label', 'children']);
	var v = G(),
		d = i(v);
	const w = U(() =>
		he(
			'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			t.class
		)
	);
	o(
		d,
		() => ba,
		(P, E) => {
			E(
				P,
				Lt(
					{
						get value() {
							return t.value;
						},
						get class() {
							return l(w);
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
								C = A(dt);
							{
								var D = (vt) => {
									Es(vt, { class: 'size-4' });
								};
								At(C, (vt) => {
									F() && vt(D);
								});
							}
							z(dt);
							var K = a(dt, 2);
							{
								var T = (vt) => {
										var Pt = G(),
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
		e(s, v),
		Dt();
}
function Ka(s, t) {
	zt(t, !0);
	let r = y(t, 'ref', 15, null),
		n = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var v = G(),
		d = i(v);
	const w = U(() => he('flex cursor-default items-center justify-center py-1', t.class));
	o(
		d,
		() => Ca,
		(P, E) => {
			E(
				P,
				Lt(
					{
						get class() {
							return l(w);
						}
					},
					() => n,
					{
						get ref() {
							return r();
						},
						set ref(S) {
							r(S);
						},
						children: (S, m) => {
							Fs(S, { class: 'size-4' });
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		e(s, v),
		Dt();
}
function La(s, t) {
	zt(t, !0);
	let r = y(t, 'ref', 15, null),
		n = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class']);
	var v = G(),
		d = i(v);
	const w = U(() => he('flex cursor-default items-center justify-center py-1', t.class));
	o(
		d,
		() => wa,
		(P, E) => {
			E(
				P,
				Lt(
					{
						get class() {
							return l(w);
						}
					},
					() => n,
					{
						get ref() {
							return r();
						},
						set ref(S) {
							r(S);
						},
						children: (S, m) => {
							Ao(S, { class: 'size-4' });
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		e(s, v),
		Dt();
}
var ja = u('<!> <!> <!>', 1);
function Lr(s, t) {
	zt(t, !0);
	let r = y(t, 'ref', 15, null),
		n = y(t, 'sideOffset', 3, 4),
		v = Bt(t, [
			'$$slots',
			'$$events',
			'$$legacy',
			'ref',
			'class',
			'sideOffset',
			'portalProps',
			'children'
		]);
	var d = G(),
		w = i(d);
	o(
		w,
		() => Ss,
		(P, E) => {
			E(
				P,
				Lt(() => t.portalProps, {
					children: (S, m) => {
						var k = G(),
							F = i(k);
						const j = U(() =>
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
									Lt(
										{
											get sideOffset() {
												return n();
											},
											get class() {
												return l(j);
											}
										},
										() => v,
										{
											get ref() {
												return r();
											},
											set ref(C) {
												r(C);
											},
											children: (C, D) => {
												var K = ja(),
													T = i(K);
												Ka(T, {});
												var ht = a(T, 2);
												const vt = U(() =>
													he(
														'h-[var(--bits-select-anchor-height)] w-full min-w-[var(--bits-select-anchor-width)] p-1'
													)
												);
												o(
													ht,
													() => Pa,
													(xt, Zt) => {
														Zt(xt, {
															get class() {
																return l(vt);
															},
															children: (Jt, oe) => {
																var Vt = G(),
																	Ft = i(Vt);
																mt(Ft, () => t.children ?? Qt), e(Jt, Vt);
															},
															$$slots: { default: !0 }
														});
													}
												);
												var Pt = a(ht, 2);
												La(Pt, {}), e(C, K);
											},
											$$slots: { default: !0 }
										}
									)
								);
							}
						),
							e(S, k);
					},
					$$slots: { default: !0 }
				})
			);
		}
	),
		e(s, d),
		Dt();
}
var qa = u('<!> <!>', 1);
function jr(s, t) {
	zt(t, !0);
	let r = y(t, 'ref', 15, null),
		n = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'class', 'children']);
	var v = G(),
		d = i(v);
	const w = U(() =>
		he(
			'border-input bg-background ring-offset-background data-[placeholder]:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
			t.class
		)
	);
	o(
		d,
		() => Aa,
		(P, E) => {
			E(
				P,
				Lt(
					{
						get class() {
							return l(w);
						}
					},
					() => n,
					{
						get ref() {
							return r();
						},
						set ref(S) {
							r(S);
						},
						children: (S, m) => {
							var k = qa(),
								F = i(k);
							mt(F, () => t.children ?? Qt);
							var j = a(F, 2);
							Ao(j, { class: 'size-4 opacity-50' }), e(S, k);
						},
						$$slots: { default: !0 }
					}
				)
			);
		}
	),
		e(s, v),
		Dt();
}
const qr = Ia;
var Wa = u('<textarea></textarea>');
function Ya(s, t) {
	zt(t, !0);
	let r = y(t, 'ref', 15, null),
		n = y(t, 'value', 15),
		v = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'value', 'class']);
	var d = Wa();
	Lo(d);
	let w;
	qo(
		d,
		(P) => r(P),
		() => r()
	),
		$t(
			(P) => (w = Nt(d, w, { class: P, ...v })),
			[
				() =>
					he(
						'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
						t.class
					)
			]
		),
		ko(d, n),
		e(s, d),
		Dt();
}
function Qa(s) {
	Fo('toggleGroup', s);
}
function Za() {
	return Ko('toggleGroup');
}
function Wr(s, t) {
	zt(t, !0);
	let r = y(t, 'ref', 15, null),
		n = y(t, 'value', 15),
		v = y(t, 'size', 3, 'default'),
		d = y(t, 'variant', 3, 'default'),
		w = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'value', 'class', 'size', 'variant']);
	Qa({ variant: d(), size: v() });
	var P = G(),
		E = i(P);
	const S = U(() => he('flex items-center justify-center gap-1', t.class));
	o(
		E,
		() => Va,
		(m, k) => {
			k(
				m,
				Lt(
					{
						get class() {
							return l(S);
						}
					},
					() => w,
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
		e(s, P),
		Dt();
}
const Ja = Jo({
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
function ce(s, t) {
	zt(t, !0);
	let r = y(t, 'ref', 15, null),
		n = Bt(t, ['$$slots', '$$events', '$$legacy', 'ref', 'value', 'class', 'size', 'variant']);
	const v = Za();
	var d = G(),
		w = i(d);
	const P = U(() => he(Ja({ variant: v.variant || t.variant, size: v.size || t.size }), t.class));
	o(
		w,
		() => Ba,
		(E, S) => {
			S(
				E,
				Lt(
					{
						get class() {
							return l(P);
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
		e(s, d),
		Dt();
}
var Xa = u('<a><!> <span class="sr-only">Dashboard</span></a>'),
	tn = u('<!> <!>', 1),
	en = u('<a><!> <span class="sr-only">Orders</span></a>'),
	rn = u('<!> <!>', 1),
	on = u('<a><!> <span class="sr-only">Products</span></a>'),
	sn = u('<!> <!>', 1),
	an = u('<a><!> <span class="sr-only">Customers</span></a>'),
	nn = u('<!> <!>', 1),
	ln = u('<a><!> <span class="sr-only">Analytics</span></a>'),
	dn = u('<!> <!>', 1),
	un = u('<!> <!> <!> <!> <!>', 1),
	cn = u('<a><!> <span class="sr-only">Settings</span></a>'),
	hn = u('<!> <!>', 1),
	vn = u('<!> <span class="sr-only">Toggle Menu</span>', 1),
	pn = u(
		'<nav class="grid gap-6 text-lg font-medium"><a href="##" class="bg-primary text-primary-foreground group flex size-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"><!> <span class="sr-only">Acme Inc</span></a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Dashboard</a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Orders</a> <a href="##" class="text-foreground flex items-center gap-4 px-2.5"><!> Products</a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Customers</a> <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"><!> Settings</a></nav>'
	),
	fn = u('<!> <!>', 1),
	gn = u('<!> <!> <!> <!> <!>', 1),
	_n = u(
		'<img src="/images/placeholder-user.jpg" alt="Avatar" class="overflow-hidden rounded-full">'
	),
	mn = u('<!> <!> <!> <!> <!> <!>', 1),
	bn = u('<!> <!>', 1),
	$n = u('<!> <span class="sr-only">Back</span>', 1),
	Pn = u('<!> <!>', 1),
	xn = u(
		'<div class="grid gap-6"><div class="grid gap-3"><!> <!></div> <div class="grid gap-3"><!> <!></div></div>'
	),
	yn = u('<!> <!>', 1),
	wn = u('<!> <!>', 1),
	Sn = u('<!> <!> <!> <!>', 1),
	Nn = u('<!> <!>', 1),
	Cn = u('<!> <!>', 1),
	kn = u('<!> <!> <!>', 1),
	In = u('<!> <!> <!> <!>', 1),
	Tn = u('<!> <!>', 1),
	An = u('<!> <!>', 1),
	zn = u('<!> <!> <!>', 1),
	Dn = u('<!> <!> <!> <!>', 1),
	Hn = u('<!> <!>', 1),
	On = u('<!> <!>', 1),
	Mn = u('<!> <!> <!>', 1),
	Rn = u('<!> <!> <!> <!>', 1),
	Gn = u('<!> <!> <!>', 1),
	Un = u('<!> <!>', 1),
	Vn = u('<!> Add Variant', 1),
	En = u('<!> <!> <!>', 1),
	Bn = u('<!> <!> <!>', 1),
	Fn = u('<!> <!>', 1),
	Kn = u('<!> <!> <!>', 1),
	Ln = u('<!> <!>', 1),
	jn = u(
		'<div class="grid gap-6 sm:grid-cols-3"><div class="grid gap-3"><!> <!></div> <div class="grid gap-3"><!> <!></div></div>'
	),
	qn = u('<!> <!>', 1),
	Wn = u('<!> <!> <!>', 1),
	Yn = u('<!> <!>', 1),
	Qn = u('<div class="grid gap-6"><div class="grid gap-3"><!> <!></div></div>'),
	Zn = u('<!> <!>', 1),
	Jn = u('<!> <!>', 1),
	Xn = u(
		'<div class="grid gap-2"><img alt="Product" class="aspect-square w-full rounded-md object-cover" height="300" src="/images/placeholder.svg" width="300"> <div class="grid grid-cols-3 gap-2"><button aria-label="Product"><img alt="Product" class="aspect-square w-full rounded-md object-cover" height="84" src="/images/placeholder.svg" width="84"></button> <button aria-label="Product"><img alt="Product" class="aspect-square w-full rounded-md object-cover" height="84" src="/images/placeholder.svg" width="84"></button> <button class="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"><!> <span class="sr-only">Upload</span></button></div></div>'
	),
	ti = u('<!> <!>', 1),
	ei = u('<!> <!>', 1),
	ri = u('<div></div> <!>', 1),
	oi = u('<!> <!>', 1),
	si = u(
		'<div class="bg-muted/40 flex min-h-screen w-full flex-col"><aside class="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex"><nav class="flex flex-col items-center gap-4 px-2 py-4"><a href="##" class="bg-primary text-primary-foreground group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base"><!> <span class="sr-only">Acme Inc</span></a> <!></nav> <nav class="mt-auto flex flex-col items-center gap-4 px-2 py-4"><!></nav></aside> <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14"><header class="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"><!> <!> <div class="relative ml-auto flex-1 md:grow-0"><!> <!></div> <!></header> <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"><div class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4"><div class="flex items-center gap-4"><!> <h1 class="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Pro Controller</h1> <!> <div class="hidden items-center gap-2 md:ml-auto md:flex"><!> <!></div></div> <div class="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8"><div class="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8"><!> <!> <!></div> <div class="grid auto-rows-max items-start gap-4 lg:gap-8"><!> <!> <!></div></div> <div class="flex items-center justify-center gap-2 md:hidden"><!> <!></div></div></main></div></div>'
	);
function qi(s) {
	let t = It(''),
		r = It(''),
		n = It('');
	var v = si(),
		d = A(v),
		w = A(d),
		P = A(w),
		E = A(P);
	co(E, { class: 'size-4 transition-all group-hover:scale-110' }), c(2), z(P);
	var S = a(P, 2);
	o(
		S,
		() => uo,
		(rt, ut) => {
			ut(rt, {
				children: (tt, Wt) => {
					var ot = un(),
						lt = i(ot);
					o(
						lt,
						() => Te,
						(Q, p) => {
							p(Q, {
								children: (x, R) => {
									var b = tn(),
										f = i(b);
									o(
										f,
										() => Ae,
										(g, _) => {
											_(g, {
												child: (I, M) => {
													let X = () => (M == null ? void 0 : M().props);
													var V = Xa();
													let L;
													var W = A(V);
													ho(W, { class: 'size-5' }),
														c(2),
														z(V),
														$t(
															() =>
																(L = Nt(V, L, {
																	href: '##',
																	class:
																		'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	...X()
																}))
														),
														e(I, V);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var N = a(f, 2);
									o(
										N,
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
										e(x, b);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = a(lt, 2);
					o(
						pt,
						() => Te,
						(Q, p) => {
							p(Q, {
								children: (x, R) => {
									var b = rn(),
										f = i(b);
									o(
										f,
										() => Ae,
										(g, _) => {
											_(g, {
												child: (I, M) => {
													let X = () => (M == null ? void 0 : M().props);
													var V = en();
													let L;
													var W = A(V);
													vo(W, { class: 'size-5' }),
														c(2),
														z(V),
														$t(
															() =>
																(L = Nt(V, L, {
																	href: '##',
																	class:
																		'hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	...X()
																}))
														),
														e(I, V);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var N = a(f, 2);
									o(
										N,
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
										e(x, b);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var Z = a(pt, 2);
					o(
						Z,
						() => Te,
						(Q, p) => {
							p(Q, {
								children: (x, R) => {
									var b = sn(),
										f = i(b);
									o(
										f,
										() => Ae,
										(g, _) => {
											_(g, {
												child: (I, M) => {
													let X = () => (M == null ? void 0 : M().props);
													var V = on();
													let L;
													var W = A(V);
													po(W, { class: 'size-5' }),
														c(2),
														z(V),
														$t(
															() =>
																(L = Nt(V, L, {
																	href: '##',
																	class:
																		'bg-accent text-accent-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	...X()
																}))
														),
														e(I, V);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var N = a(f, 2);
									o(
										N,
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
										e(x, b);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var q = a(Z, 2);
					o(
						q,
						() => Te,
						(Q, p) => {
							p(Q, {
								children: (x, R) => {
									var b = nn(),
										f = i(b);
									o(
										f,
										() => Ae,
										(g, _) => {
											_(g, {
												child: (I, M) => {
													let X = () => (M == null ? void 0 : M().props);
													var V = an();
													let L;
													var W = A(V);
													go(W, { class: 'size-5' }),
														c(2),
														z(V),
														$t(
															() =>
																(L = Nt(V, L, {
																	href: '##',
																	class:
																		'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	...X()
																}))
														),
														e(I, V);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var N = a(f, 2);
									o(
										N,
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
										e(x, b);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var J = a(q, 2);
					o(
						J,
						() => Te,
						(Q, p) => {
							p(Q, {
								children: (x, R) => {
									var b = dn(),
										f = i(b);
									o(
										f,
										() => Ae,
										(g, _) => {
											_(g, {
												child: (I, M) => {
													let X = () => (M == null ? void 0 : M().props);
													var V = ln();
													let L;
													var W = A(V);
													fo(W, { class: 'size-5' }),
														c(2),
														z(V),
														$t(
															() =>
																(L = Nt(V, L, {
																	href: '##',
																	class:
																		'text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
																	...X()
																}))
														),
														e(I, V);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var N = a(f, 2);
									o(
										N,
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
										e(x, b);
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
		z(w);
	var m = a(w, 2),
		k = A(m);
	o(
		k,
		() => uo,
		(rt, ut) => {
			ut(rt, {
				children: (tt, Wt) => {
					var ot = G(),
						lt = i(ot);
					o(
						lt,
						() => Te,
						(pt, Z) => {
							Z(pt, {
								children: (q, J) => {
									var Q = hn(),
										p = i(Q);
									o(
										p,
										() => Ae,
										(R, b) => {
											b(R, {
												child: (N, g) => {
													let _ = () => (g == null ? void 0 : g().props);
													var B = cn();
													let I;
													var M = A(B);
													Gs(M, { class: 'size-5' }),
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
														e(N, B);
												},
												$$slots: { child: !0 }
											});
										}
									);
									var x = a(p, 2);
									o(
										x,
										() => ze,
										(R, b) => {
											b(R, {
												side: 'right',
												children: (f, N) => {
													c();
													var g = $('Settings');
													e(f, g);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(q, Q);
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
		z(d);
	var F = a(d, 2),
		j = A(F),
		et = A(j);
	o(
		et,
		() => zs,
		(rt, ut) => {
			ut(rt, {
				children: (tt, Wt) => {
					var ot = fn(),
						lt = i(ot);
					o(
						lt,
						() => As,
						(Z, q) => {
							q(Z, {
								child: (Q, p) => {
									de(
										Q,
										Lt(() => (p == null ? void 0 : p().props), {
											variant: 'outline',
											size: 'icon',
											class: 'sm:hidden',
											children: (R, b) => {
												var f = vn(),
													N = i(f);
												Us(N, { class: 'size-5' }), c(2), e(R, f);
											},
											$$slots: { default: !0 }
										})
									);
								},
								$$slots: { child: !0 }
							});
						}
					);
					var pt = a(lt, 2);
					o(
						pt,
						() => Ns,
						(Z, q) => {
							q(Z, {
								side: 'left',
								class: 'sm:max-w-xs',
								children: (J, Q) => {
									var p = pn(),
										x = A(p),
										R = A(x);
									co(R, { class: 'size-5 transition-all group-hover:scale-110' }), c(2), z(x);
									var b = a(x, 2),
										f = A(b);
									ho(f, { class: 'size-5' }), c(), z(b);
									var N = a(b, 2),
										g = A(N);
									vo(g, { class: 'size-5' }), c(), z(N);
									var _ = a(N, 2),
										B = A(_);
									po(B, { class: 'size-5' }), c(), z(_);
									var I = a(_, 2),
										M = A(I);
									go(M, { class: 'size-5' }), c(), z(I);
									var X = a(I, 2),
										V = A(X);
									fo(V, { class: 'size-5' }), c(), z(X), z(p), e(J, p);
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
	var dt = a(et, 2);
	o(
		dt,
		() => Zo,
		(rt, ut) => {
			ut(rt, {
				class: 'hidden md:flex',
				children: (tt, Wt) => {
					var ot = G(),
						lt = i(ot);
					o(
						lt,
						() => Yo,
						(pt, Z) => {
							Z(pt, {
								children: (q, J) => {
									var Q = gn(),
										p = i(Q);
									o(
										p,
										() => Fr,
										(N, g) => {
											g(N, {
												children: (_, B) => {
													var I = G(),
														M = i(I);
													o(
														M,
														() => no,
														(X, V) => {
															V(X, {
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
									var x = a(p, 2);
									o(
										x,
										() => io,
										(N, g) => {
											g(N, {});
										}
									);
									var R = a(x, 2);
									o(
										R,
										() => Fr,
										(N, g) => {
											g(N, {
												children: (_, B) => {
													var I = G(),
														M = i(I);
													o(
														M,
														() => no,
														(X, V) => {
															V(X, {
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
									var b = a(R, 2);
									o(
										b,
										() => io,
										(N, g) => {
											g(N, {});
										}
									);
									var f = a(b, 2);
									o(
										f,
										() => Fr,
										(N, g) => {
											g(N, {
												children: (_, B) => {
													var I = G(),
														M = i(I);
													o(
														M,
														() => Qo,
														(X, V) => {
															V(X, {
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
										e(q, Q);
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
	var C = a(dt, 2),
		D = A(C);
	Ms(D, { class: 'text-muted-foreground absolute left-2.5 top-2.5 size-4' });
	var K = a(D, 2);
	me(K, {
		type: 'search',
		placeholder: 'Search...',
		class: 'bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[320px]'
	}),
		z(C);
	var T = a(C, 2);
	o(
		T,
		() => cs,
		(rt, ut) => {
			ut(rt, {
				children: (tt, Wt) => {
					var ot = bn(),
						lt = i(ot);
					o(
						lt,
						() => ls,
						(Z, q) => {
							q(Z, {
								child: (Q, p) => {
									de(
										Q,
										Lt(() => (p == null ? void 0 : p().props), {
											size: 'icon',
											variant: 'outline',
											class: 'overflow-hidden rounded-full',
											children: (R, b) => {
												var f = _n();
												ao(f, 'width', 36), ao(f, 'height', 36), e(R, f);
											},
											$$slots: { default: !0 }
										})
									);
								},
								$$slots: { child: !0 }
							});
						}
					);
					var pt = a(lt, 2);
					o(
						pt,
						() => ds,
						(Z, q) => {
							q(Z, {
								align: 'end',
								children: (J, Q) => {
									var p = G(),
										x = i(p);
									o(
										x,
										() => us,
										(R, b) => {
											b(R, {
												children: (f, N) => {
													var g = mn(),
														_ = i(g);
													o(
														_,
														() => Xo,
														(L, W) => {
															W(L, {
																children: (st, wt) => {
																	c();
																	var Ct = $('My Account');
																	e(st, Ct);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var B = a(_, 2);
													o(
														B,
														() => _o,
														(L, W) => {
															W(L, {});
														}
													);
													var I = a(B, 2);
													o(
														I,
														() => Kr,
														(L, W) => {
															W(L, {
																children: (st, wt) => {
																	c();
																	var Ct = $('Settings');
																	e(st, Ct);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var M = a(I, 2);
													o(
														M,
														() => Kr,
														(L, W) => {
															W(L, {
																children: (st, wt) => {
																	c();
																	var Ct = $('Support');
																	e(st, Ct);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var X = a(M, 2);
													o(
														X,
														() => _o,
														(L, W) => {
															W(L, {});
														}
													);
													var V = a(X, 2);
													o(
														V,
														() => Kr,
														(L, W) => {
															W(L, {
																children: (st, wt) => {
																	c();
																	var Ct = $('Logout');
																	e(st, Ct);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(f, g);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(J, p);
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
	var ht = a(j, 2),
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
			Rs(Wt, { class: 'size-4' }), c(2), e(rt, tt);
		},
		$$slots: { default: !0 }
	});
	var Zt = a(xt, 4);
	Wo(Zt, {
		variant: 'outline',
		class: 'ml-auto sm:ml-0',
		children: (rt, ut) => {
			c();
			var tt = $('In stock');
			e(rt, tt);
		},
		$$slots: { default: !0 }
	});
	var Jt = a(Zt, 2),
		oe = A(Jt);
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
	var Vt = a(oe, 2);
	de(Vt, {
		size: 'sm',
		children: (rt, ut) => {
			c();
			var tt = $('Save Product');
			e(rt, tt);
		},
		$$slots: { default: !0 }
	}),
		z(Jt),
		z(Pt);
	var Ft = a(Pt, 2),
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
					var ot = yn(),
						lt = i(ot);
					o(
						lt,
						() => Ce,
						(Z, q) => {
							q(Z, {
								children: (J, Q) => {
									var p = Pn(),
										x = i(p);
									o(
										x,
										() => ke,
										(b, f) => {
											f(b, {
												children: (N, g) => {
													c();
													var _ = $('Product Details');
													e(N, _);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var R = a(x, 2);
									o(
										R,
										() => rr,
										(b, f) => {
											f(b, {
												children: (N, g) => {
													c();
													var _ = $('Lipsum dolor sit amet, consectetur adipiscing elit');
													e(N, _);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(J, p);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = a(lt, 2);
					o(
						pt,
						() => Ie,
						(Z, q) => {
							q(Z, {
								children: (J, Q) => {
									var p = xn(),
										x = A(p),
										R = A(x);
									re(R, {
										for: 'name',
										children: (_, B) => {
											c();
											var I = $('Name');
											e(_, I);
										},
										$$slots: { default: !0 }
									});
									var b = a(R, 2);
									me(b, {
										id: 'name',
										type: 'text',
										class: 'w-full',
										value: 'Gamer Gear Pro Controller'
									}),
										z(x);
									var f = a(x, 2),
										N = A(f);
									re(N, {
										for: 'description',
										children: (_, B) => {
											c();
											var I = $('Description');
											e(_, I);
										},
										$$slots: { default: !0 }
									});
									var g = a(N, 2);
									Ya(g, {
										id: 'description',
										value:
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.',
										class: 'min-h-32'
									}),
										z(f),
										z(p),
										e(J, p);
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
	var qt = a(ae, 2);
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
						(q, J) => {
							J(q, {
								children: (Q, p) => {
									var x = wn(),
										R = i(x);
									o(
										R,
										() => ke,
										(f, N) => {
											N(f, {
												children: (g, _) => {
													c();
													var B = $('Stock');
													e(g, B);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var b = a(R, 2);
									o(
										b,
										() => rr,
										(f, N) => {
											N(f, {
												children: (g, _) => {
													c();
													var B = $('Lipsum dolor sit amet, consectetur adipiscing elit');
													e(g, B);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Q, x);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = a(lt, 2);
					o(
						pt,
						() => Ie,
						(q, J) => {
							J(q, {
								children: (Q, p) => {
									var x = G(),
										R = i(x);
									o(
										R,
										() => Ds,
										(b, f) => {
											f(b, {
												children: (N, g) => {
													var _ = Un(),
														B = i(_);
													o(
														B,
														() => Hs,
														(M, X) => {
															X(M, {
																children: (V, L) => {
																	var W = G(),
																		st = i(W);
																	o(
																		st,
																		() => or,
																		(wt, Ct) => {
																			Ct(wt, {
																				children: (bt, kt) => {
																					var yt = Sn(),
																						le = i(yt);
																					o(
																						le,
																						() => sr,
																						(Et, jt) => {
																							jt(Et, {
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
																					var ft = a(le, 2);
																					o(
																						ft,
																						() => sr,
																						(Et, jt) => {
																							jt(Et, {
																								children: (nt, ct) => {
																									c();
																									var it = $('Stock');
																									e(nt, it);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var gt = a(ft, 2);
																					o(
																						gt,
																						() => sr,
																						(Et, jt) => {
																							jt(Et, {
																								children: (nt, ct) => {
																									c();
																									var it = $('Price');
																									e(nt, it);
																								},
																								$$slots: { default: !0 }
																							});
																						}
																					);
																					var ne = a(gt, 2);
																					o(
																						ne,
																						() => sr,
																						(Et, jt) => {
																							jt(Et, {
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
																						e(bt, yt);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		e(V, W);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var I = a(B, 2);
													o(
														I,
														() => Os,
														(M, X) => {
															X(M, {
																children: (V, L) => {
																	var W = Gn(),
																		st = i(W);
																	o(
																		st,
																		() => or,
																		(bt, kt) => {
																			kt(bt, {
																				children: (yt, le) => {
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
																					var ne = a(gt, 2);
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
																									var Ht = a(_t, 2);
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
																					var Et = a(ne, 2);
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
																									var Ht = a(_t, 2);
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
																					var jt = a(Et, 2);
																					o(
																						jt,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = G(),
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
																													var ge = a(fe, 2);
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
																													var Ge = a(ge, 2);
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
																						e(yt, ft);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	);
																	var wt = a(st, 2);
																	o(
																		wt,
																		() => or,
																		(bt, kt) => {
																			kt(bt, {
																				children: (yt, le) => {
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
																					var ne = a(gt, 2);
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
																									var Ht = a(_t, 2);
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
																					var Et = a(ne, 2);
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
																									var Ht = a(_t, 2);
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
																					var jt = a(Et, 2);
																					o(
																						jt,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = G(),
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
																													var ge = a(fe, 2);
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
																													var Ge = a(ge, 2);
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
																						e(yt, ft);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	);
																	var Ct = a(wt, 2);
																	o(
																		Ct,
																		() => or,
																		(bt, kt) => {
																			kt(bt, {
																				children: (yt, le) => {
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
																					var ne = a(gt, 2);
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
																									var Ht = a(_t, 2);
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
																					var Et = a(ne, 2);
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
																									var Ht = a(_t, 2);
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
																					var jt = a(Et, 2);
																					o(
																						jt,
																						() => Yt,
																						(nt, ct) => {
																							ct(nt, {
																								children: (it, te) => {
																									var at = G(),
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
																													var ge = a(fe, 2);
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
																													var Ge = a(ge, 2);
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
																						e(yt, ft);
																				},
																				$$slots: { default: !0 }
																			});
																		}
																	),
																		e(V, W);
																},
																$$slots: { default: !0 }
															});
														}
													),
														e(N, _);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(Q, x);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var Z = a(pt, 2);
					o(
						Z,
						() => ts,
						(q, J) => {
							J(q, {
								class: 'justify-center border-t p-4',
								children: (Q, p) => {
									de(Q, {
										size: 'sm',
										variant: 'ghost',
										class: 'gap-1',
										children: (x, R) => {
											var b = Vn(),
												f = i(b);
											Vs(f, { class: 'size-3.5' }), c(), e(x, b);
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
	var Xt = a(qt, 2);
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
						(Z, q) => {
							q(Z, {
								children: (J, Q) => {
									var p = G(),
										x = i(p);
									o(
										x,
										() => ke,
										(R, b) => {
											b(R, {
												children: (f, N) => {
													c();
													var g = $('Product Category');
													e(f, g);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(J, p);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = a(lt, 2);
					o(
						pt,
						() => Ie,
						(Z, q) => {
							q(Z, {
								children: (J, Q) => {
									var p = jn(),
										x = A(p),
										R = A(x);
									re(R, {
										for: 'category',
										children: (_, B) => {
											c();
											var I = $('Category');
											e(_, I);
										},
										$$slots: { default: !0 }
									});
									var b = a(R, 2);
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
														V = i(X);
													o(
														V,
														() => jr,
														(W, st) => {
															st(W, {
																id: 'category',
																'aria-label': 'Select category',
																class: 'capitalize',
																children: (wt, Ct) => {
																	c();
																	var bt = $();
																	$t(() => ar(bt, l(t) ?? 'Select category')), e(wt, bt);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var L = a(V, 2);
													o(
														L,
														() => Lr,
														(W, st) => {
															st(W, {
																children: (wt, Ct) => {
																	var bt = Bn(),
																		kt = i(bt);
																	o(
																		kt,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 'clothing', label: 'Clothing' });
																		}
																	);
																	var yt = a(kt, 2);
																	o(
																		yt,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 'electronics', label: 'Electronics' });
																		}
																	);
																	var le = a(yt, 2);
																	o(
																		le,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 'accessories', label: 'Accessories' });
																		}
																	),
																		e(wt, bt);
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
										z(x);
									var f = a(x, 2),
										N = A(f);
									re(N, {
										for: 'subcategory',
										children: (_, B) => {
											c();
											var I = $('Subcategory (optional)');
											e(_, I);
										},
										$$slots: { default: !0 }
									});
									var g = a(N, 2);
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
														V = i(X);
													o(
														V,
														() => jr,
														(W, st) => {
															st(W, {
																id: 'subcategory',
																'aria-label': 'Select subcategory',
																children: (wt, Ct) => {
																	c();
																	var bt = $();
																	$t(() => ar(bt, l(r) ?? 'Select subcategory')), e(wt, bt);
																},
																$$slots: { default: !0 }
															});
														}
													);
													var L = a(V, 2);
													o(
														L,
														() => Lr,
														(W, st) => {
															st(W, {
																children: (wt, Ct) => {
																	var bt = Kn(),
																		kt = i(bt);
																	o(
																		kt,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 't-shirts', label: 'T-Shirts' });
																		}
																	);
																	var yt = a(kt, 2);
																	o(
																		yt,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 'hoodies', label: 'Hoodies' });
																		}
																	);
																	var le = a(yt, 2);
																	o(
																		le,
																		() => ue,
																		(ft, gt) => {
																			gt(ft, { value: 'sweatshirts', label: 'Sweatshirts' });
																		}
																	),
																		e(wt, bt);
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
										z(f),
										z(p),
										e(J, p);
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
	var ye = a(se, 2),
		ve = A(ye);
	o(
		ve,
		() => Ne,
		(rt, ut) => {
			ut(rt, {
				'data-x-chunk-name': 'dashboard-07-chunk-3',
				'data-x-chunk-description': 'A card with a form to edit the product status',
				children: (tt, Wt) => {
					var ot = Zn(),
						lt = i(ot);
					o(
						lt,
						() => Ce,
						(Z, q) => {
							q(Z, {
								children: (J, Q) => {
									var p = G(),
										x = i(p);
									o(
										x,
										() => ke,
										(R, b) => {
											b(R, {
												children: (f, N) => {
													c();
													var g = $('Product Status');
													e(f, g);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(J, p);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = a(lt, 2);
					o(
						pt,
						() => Ie,
						(Z, q) => {
							q(Z, {
								children: (J, Q) => {
									var p = Qn(),
										x = A(p),
										R = A(x);
									re(R, {
										for: 'status',
										children: (f, N) => {
											c();
											var g = $('Status');
											e(f, g);
										},
										$$slots: { default: !0 }
									});
									var b = a(R, 2);
									o(
										b,
										() => qr,
										(f, N) => {
											N(f, {
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
														(X, V) => {
															V(X, {
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
													var M = a(I, 2);
													o(
														M,
														() => Lr,
														(X, V) => {
															V(X, {
																children: (L, W) => {
																	var st = Wn(),
																		wt = i(st);
																	o(
																		wt,
																		() => ue,
																		(kt, yt) => {
																			yt(kt, { value: 'draft', label: 'Draft' });
																		}
																	);
																	var Ct = a(wt, 2);
																	o(
																		Ct,
																		() => ue,
																		(kt, yt) => {
																			yt(kt, { value: 'published', label: 'Active' });
																		}
																	);
																	var bt = a(Ct, 2);
																	o(
																		bt,
																		() => ue,
																		(kt, yt) => {
																			yt(kt, { value: 'archived', label: 'Archived' });
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
										z(x),
										z(p),
										e(J, p);
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
	var Re = a(ve, 2);
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
						(Z, q) => {
							q(Z, {
								children: (J, Q) => {
									var p = Jn(),
										x = i(p);
									o(
										x,
										() => ke,
										(b, f) => {
											f(b, {
												children: (N, g) => {
													c();
													var _ = $('Product Images');
													e(N, _);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var R = a(x, 2);
									o(
										R,
										() => rr,
										(b, f) => {
											f(b, {
												children: (N, g) => {
													c();
													var _ = $('Lipsum dolor sit amet, consectetur adipiscing elit');
													e(N, _);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(J, p);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = a(lt, 2);
					o(
						pt,
						() => Ie,
						(Z, q) => {
							q(Z, {
								children: (J, Q) => {
									var p = Xn(),
										x = a(A(p), 2),
										R = a(A(x), 4),
										b = A(R);
									Bs(b, { class: 'text-muted-foreground size-4' }), c(2), z(R), z(x), z(p), e(J, p);
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
	var Vr = a(Re, 2);
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
						(Z, q) => {
							q(Z, {
								children: (J, Q) => {
									var p = ei(),
										x = i(p);
									o(
										x,
										() => ke,
										(b, f) => {
											f(b, {
												children: (N, g) => {
													c();
													var _ = $('Archive Product');
													e(N, _);
												},
												$$slots: { default: !0 }
											});
										}
									);
									var R = a(x, 2);
									o(
										R,
										() => rr,
										(b, f) => {
											f(b, {
												children: (N, g) => {
													c();
													var _ = $('Lipsum dolor sit amet, consectetur adipiscing elit.');
													e(N, _);
												},
												$$slots: { default: !0 }
											});
										}
									),
										e(J, p);
								},
								$$slots: { default: !0 }
							});
						}
					);
					var pt = a(lt, 2);
					o(
						pt,
						() => Ie,
						(Z, q) => {
							q(Z, {
								children: (J, Q) => {
									var p = ri(),
										x = a(i(p), 2);
									de(x, {
										size: 'sm',
										variant: 'secondary',
										children: (R, b) => {
											c();
											var f = $('Archive Product');
											e(R, f);
										},
										$$slots: { default: !0 }
									}),
										e(J, p);
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
		z(ye),
		z(Ft);
	var ro = a(Ft, 2),
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
	var Uo = a(oo, 2);
	de(Uo, {
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
		z(v),
		e(s, v);
}
export { qi as component };
