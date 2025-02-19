import {
	a3 as L,
	j as l,
	w as _,
	a9 as W,
	aJ as h,
	aK as m,
	aL as x,
	K as E,
	T as I,
	V as C,
	O as D,
	aM as R,
	W as g,
	aN as j,
	aO as q,
	m as c,
	v as B,
	k as F
} from './BHafZ7-g.js';
function Y(e) {
	return e.endsWith('capture') && e !== 'gotpointercapture' && e !== 'lostpointercapture';
}
const $ = [
	'beforeinput',
	'click',
	'change',
	'dblclick',
	'contextmenu',
	'focusin',
	'focusout',
	'input',
	'keydown',
	'keyup',
	'mousedown',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup',
	'pointerdown',
	'pointermove',
	'pointerout',
	'pointerover',
	'pointerup',
	'touchend',
	'touchmove',
	'touchstart'
];
function Z(e) {
	return $.includes(e);
}
const G = {
	formnovalidate: 'formNoValidate',
	ismap: 'isMap',
	nomodule: 'noModule',
	playsinline: 'playsInline',
	readonly: 'readOnly',
	defaultvalue: 'defaultValue',
	defaultchecked: 'defaultChecked',
	srcobject: 'srcObject',
	novalidate: 'noValidate',
	allowfullscreen: 'allowFullscreen',
	disablepictureinpicture: 'disablePictureInPicture',
	disableremoteplayback: 'disableRemotePlayback'
};
function ee(e) {
	return (e = e.toLowerCase()), G[e] ?? e;
}
const K = ['touchstart', 'touchmove'];
function te(e) {
	return K.includes(e);
}
const U = ['textarea', 'script', 'style', 'title'];
function re(e) {
	return U.includes(e);
}
function ae(e, t) {
	if (t) {
		const r = document.body;
		(e.autofocus = !0),
			L(() => {
				document.activeElement === r && e.focus();
			});
	}
}
function ne(e) {
	l && _(e) !== null && W(e);
}
let k = !1;
function z() {
	k ||
		((k = !0),
		document.addEventListener(
			'reset',
			(e) => {
				Promise.resolve().then(() => {
					var t;
					if (!e.defaultPrevented)
						for (const r of e.target.elements) (t = r.__on_r) == null || t.call(r);
				});
			},
			{ capture: !0 }
		));
}
function A(e) {
	var t = x,
		r = E;
	h(null), m(null);
	try {
		return e();
	} finally {
		h(t), m(r);
	}
}
function oe(e, t, r, o = r) {
	e.addEventListener(t, () => A(r));
	const n = e.__on_r;
	n
		? (e.__on_r = () => {
				n(), o(!0);
			})
		: (e.__on_r = () => o(!0)),
		z();
}
const H = new Set(),
	J = new Set();
function ie(e) {
	if (!l) return;
	e.onload && e.removeAttribute('onload'), e.onerror && e.removeAttribute('onerror');
	const t = e.__e;
	t !== void 0 &&
		((e.__e = void 0),
		queueMicrotask(() => {
			e.isConnected && e.dispatchEvent(t);
		}));
}
function M(e, t, r, o = {}) {
	function n(a) {
		if ((o.capture || X.call(t, a), !a.cancelBubble))
			return A(() => (r == null ? void 0 : r.call(this, a)));
	}
	return (
		e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
			? L(() => {
					t.addEventListener(e, n, o);
				})
			: t.addEventListener(e, n, o),
		n
	);
}
function ue(e, t, r, o = {}) {
	var n = M(t, e, r, o);
	return () => {
		e.removeEventListener(t, n, o);
	};
}
function se(e, t, r, o, n) {
	var a = { capture: o, passive: n },
		i = M(e, t, r, a);
	(t === document.body || t === window || t === document) &&
		I(() => {
			t.removeEventListener(e, i, a);
		});
}
function ce(e) {
	for (var t = 0; t < e.length; t++) H.add(e[t]);
	for (var r of J) r(e);
}
function X(e) {
	var T;
	var t = this,
		r = t.ownerDocument,
		o = e.type,
		n = ((T = e.composedPath) == null ? void 0 : T.call(e)) || [],
		a = n[0] || e.target,
		i = 0,
		f = e.__root;
	if (f) {
		var u = n.indexOf(f);
		if (u !== -1 && (t === document || t === window)) {
			e.__root = t;
			return;
		}
		var y = n.indexOf(t);
		if (y === -1) return;
		u <= y && (i = u);
	}
	if (((a = n[i] || e.target), a !== t)) {
		C(e, 'currentTarget', {
			configurable: !0,
			get() {
				return a || r;
			}
		});
		var S = x,
			P = E;
		h(null), m(null);
		try {
			for (var d, w = []; a !== null; ) {
				var b = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var v = a['__' + o];
					if (v !== void 0 && !a.disabled)
						if (D(v)) {
							var [O, ...V] = v;
							O.apply(a, [e, ...V]);
						} else v.call(a, e);
				} catch (p) {
					d ? w.push(p) : (d = p);
				}
				if (e.cancelBubble || b === t || b === null) break;
				a = b;
			}
			if (d) {
				for (let p of w)
					queueMicrotask(() => {
						throw p;
					});
				throw d;
			}
		} finally {
			(e.__root = t), delete e.currentTarget, h(S), m(P);
		}
	}
}
function N(e) {
	var t = document.createElement('template');
	return (t.innerHTML = e), t.content;
}
function s(e, t) {
	var r = E;
	r.nodes_start === null && ((r.nodes_start = e), (r.nodes_end = t));
}
function le(e, t) {
	var r = (t & j) !== 0,
		o = (t & q) !== 0,
		n,
		a = !e.startsWith('<!>');
	return () => {
		if (l) return s(c, null), c;
		n === void 0 && ((n = N(a ? e : '<!>' + e)), r || (n = _(n)));
		var i = o || R ? document.importNode(n, !0) : n.cloneNode(!0);
		if (r) {
			var f = _(i),
				u = i.lastChild;
			s(f, u);
		} else s(i, i);
		return i;
	};
}
function fe(e, t, r = 'svg') {
	var o = !e.startsWith('<!>'),
		n = `<${r}>${o ? e : '<!>' + e}</${r}>`,
		a;
	return () => {
		if (l) return s(c, null), c;
		if (!a) {
			var i = N(n),
				f = _(i);
			a = _(f);
		}
		var u = a.cloneNode(!0);
		return s(u, u), u;
	};
}
function _e(e = '') {
	if (!l) {
		var t = g(e + '');
		return s(t, t), t;
	}
	var r = c;
	return r.nodeType !== 3 && (r.before((r = g())), B(r)), s(r, r), r;
}
function de() {
	if (l) return s(c, null), c;
	var e = document.createDocumentFragment(),
		t = document.createComment(''),
		r = g();
	return e.append(t, r), s(t, r), e;
}
function ve(e, t) {
	if (l) {
		(E.nodes_end = c), F();
		return;
	}
	e !== null && e.before(t);
}
export {
	ve as a,
	_e as b,
	de as c,
	s as d,
	se as e,
	N as f,
	H as g,
	X as h,
	te as i,
	re as j,
	Y as k,
	oe as l,
	M as m,
	fe as n,
	ce as o,
	ae as p,
	ee as q,
	J as r,
	Z as s,
	le as t,
	z as u,
	ue as v,
	ie as w,
	ne as x
};
