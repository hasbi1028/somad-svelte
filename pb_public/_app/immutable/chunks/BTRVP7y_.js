import {
	M as E,
	h as g,
	m as P,
	X as I,
	aI as l,
	aJ as f,
	aK as w,
	O as k,
	$ as M,
	a0 as V,
	U as N
} from './DQMf8gWK.js';
function X(e) {
	return e.endsWith('capture') && e !== 'gotpointercapture' && e !== 'lostpointercapture';
}
const O = [
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
function z(e) {
	return O.includes(e);
}
const W = {
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
function F(e) {
	return (e = e.toLowerCase()), W[e] ?? e;
}
const j = ['touchstart', 'touchmove'];
function G(e) {
	return j.includes(e);
}
const q = ['textarea', 'script', 'style', 'title'];
function J(e) {
	return q.includes(e);
}
function K(e, t) {
	if (t) {
		const r = document.body;
		(e.autofocus = !0),
			E(() => {
				document.activeElement === r && e.focus();
			});
	}
}
function $(e) {
	g && P(e) !== null && I(e);
}
let y = !1;
function B() {
	y ||
		((y = !0),
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
function m(e) {
	var t = w,
		r = k;
	l(null), f(null);
	try {
		return e();
	} finally {
		l(t), f(r);
	}
}
function H(e, t, r, o = r) {
	e.addEventListener(t, () => m(r));
	const n = e.__on_r;
	n
		? (e.__on_r = () => {
				n(), o(!0);
			})
		: (e.__on_r = () => o(!0)),
		B();
}
const C = new Set(),
	D = new Set();
function Q(e) {
	if (!g) return;
	e.onload && e.removeAttribute('onload'), e.onerror && e.removeAttribute('onerror');
	const t = e.__e;
	t !== void 0 &&
		((e.__e = void 0),
		queueMicrotask(() => {
			e.isConnected && e.dispatchEvent(t);
		}));
}
function T(e, t, r, o = {}) {
	function n(a) {
		if ((o.capture || R.call(t, a), !a.cancelBubble))
			return m(() => (r == null ? void 0 : r.call(this, a)));
	}
	return (
		e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
			? E(() => {
					t.addEventListener(e, n, o);
				})
			: t.addEventListener(e, n, o),
		n
	);
}
function Y(e, t, r, o = {}) {
	var n = T(t, e, r, o);
	return () => {
		e.removeEventListener(t, n, o);
	};
}
function Z(e, t, r, o, n) {
	var a = { capture: o, passive: n },
		i = T(e, t, r, a);
	(t === document.body || t === window || t === document) &&
		M(() => {
			t.removeEventListener(e, i, a);
		});
}
function ee(e) {
	for (var t = 0; t < e.length; t++) C.add(e[t]);
	for (var r of D) r(e);
}
function R(e) {
	var b;
	var t = this,
		r = t.ownerDocument,
		o = e.type,
		n = ((b = e.composedPath) == null ? void 0 : b.call(e)) || [],
		a = n[0] || e.target,
		i = 0,
		p = e.__root;
	if (p) {
		var _ = n.indexOf(p);
		if (_ !== -1 && (t === document || t === window)) {
			e.__root = t;
			return;
		}
		var v = n.indexOf(t);
		if (v === -1) return;
		_ <= v && (i = _);
	}
	if (((a = n[i] || e.target), a !== t)) {
		V(e, 'currentTarget', {
			configurable: !0,
			get() {
				return a || r;
			}
		});
		var L = w,
			S = k;
		l(null), f(null);
		try {
			for (var u, h = []; a !== null; ) {
				var d = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var s = a['__' + o];
					if (s !== void 0 && !a.disabled)
						if (N(s)) {
							var [A, ...x] = s;
							A.apply(a, [e, ...x]);
						} else s.call(a, e);
				} catch (c) {
					u ? h.push(c) : (u = c);
				}
				if (e.cancelBubble || d === t || d === null) break;
				a = d;
			}
			if (u) {
				for (let c of h)
					queueMicrotask(() => {
						throw c;
					});
				throw u;
			}
		} finally {
			(e.__root = t), delete e.currentTarget, l(L), f(S);
		}
	}
}
export {
	C as a,
	J as b,
	X as c,
	T as d,
	Z as e,
	ee as f,
	K as g,
	R as h,
	G as i,
	z as j,
	B as k,
	H as l,
	Q as m,
	F as n,
	Y as o,
	$ as p,
	D as r,
	m as w
};
