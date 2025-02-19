import { w as C, g as b } from './Dz4tvtyB.js';
function z(...t) {
	return t.filter(Boolean).join(' ');
}
const h = typeof document < 'u';
function w(t) {
	const o = C(t);
	function p(l) {
		h && o.set(l);
	}
	function i(l) {
		h && o.update(l);
	}
	return { subscribe: o.subscribe, set: p, update: i };
}
let x = 0;
function D() {
	const t = w([]),
		o = w([]);
	function p(n) {
		t.update((e) => [n, ...e]);
	}
	function i(n) {
		var y;
		const { message: e, ...s } = n,
			u =
				typeof (n == null ? void 0 : n.id) == 'number' ||
				(n.id && ((y = n.id) == null ? void 0 : y.length) > 0)
					? n.id
					: x++,
			f = n.dismissable === void 0 ? !0 : n.dismissable,
			r = n.type === void 0 ? 'default' : n.type;
		return (
			b(t).find((m) => m.id === u)
				? t.update((m) =>
						m.map((g) =>
							g.id === u
								? { ...g, ...n, id: u, title: e, dismissable: f, type: r, updated: !0 }
								: { ...g, updated: !1 }
						)
					)
				: p({ ...s, id: u, title: e, dismissable: f, type: r }),
			u
		);
	}
	function l(n) {
		if (n === void 0) {
			t.update((e) => e.map((s) => ({ ...s, dismiss: !0 })));
			return;
		}
		return t.update((e) => e.map((s) => (s.id === n ? { ...s, dismiss: !0 } : s))), n;
	}
	function I(n) {
		if (n === void 0) {
			t.set([]);
			return;
		}
		return t.update((e) => e.filter((s) => s.id !== n)), n;
	}
	function T(n, e) {
		return i({ ...e, type: 'default', message: n });
	}
	function a(n, e) {
		return i({ ...e, type: 'error', message: n });
	}
	function E(n, e) {
		return i({ ...e, type: 'success', message: n });
	}
	function H(n, e) {
		return i({ ...e, type: 'info', message: n });
	}
	function $(n, e) {
		return i({ ...e, type: 'warning', message: n });
	}
	function j(n, e) {
		return i({ ...e, type: 'loading', message: n });
	}
	function k(n, e) {
		if (!e) return;
		let s;
		e.loading !== void 0 && (s = i({ ...e, promise: n, type: 'loading', message: e.loading }));
		const u = n instanceof Promise ? n : n();
		let f = s !== void 0;
		return (
			u
				.then((r) => {
					if (r && typeof r.ok == 'boolean' && !r.ok) {
						f = !1;
						const d =
							typeof e.error == 'function' ? e.error(`HTTP error! status: ${r.status}`) : e.error;
						i({ id: s, type: 'error', message: d });
					} else if (e.success !== void 0) {
						f = !1;
						const d = typeof e.success == 'function' ? e.success(r) : e.success;
						i({ id: s, type: 'success', message: d });
					}
				})
				.catch((r) => {
					if (e.error !== void 0) {
						f = !1;
						const d = typeof e.error == 'function' ? e.error(r) : e.error;
						i({ id: s, type: 'error', message: d });
					}
				})
				.finally(() => {
					var r;
					f && (l(s), (s = void 0)), (r = e.finally) == null || r.call(e);
				}),
			s
		);
	}
	function v(n, e) {
		const s = (e == null ? void 0 : e.id) || x++;
		return i({ component: n, id: s, ...e }), s;
	}
	function B(n) {
		o.update((e) => e.filter((s) => s.toastId !== n));
	}
	function P(n) {
		if (b(o).find((s) => s.toastId === n.toastId) === void 0) {
			o.update((s) => [n, ...s]);
			return;
		}
		o.update((s) => s.map((u) => (u.toastId === n.toastId ? n : u)));
	}
	function S() {
		t.set([]), o.set([]);
	}
	return {
		create: i,
		addToast: p,
		dismiss: l,
		remove: I,
		message: T,
		error: a,
		success: E,
		info: H,
		warning: $,
		loading: j,
		promise: k,
		custom: v,
		removeHeight: B,
		setHeight: P,
		reset: S,
		toasts: t,
		heights: o
	};
}
const c = D();
function F(t, o) {
	return c.create({ message: t, ...o });
}
const O = F,
	A = Object.assign(O, {
		success: c.success,
		info: c.info,
		warning: c.warning,
		error: c.error,
		custom: c.custom,
		message: c.message,
		promise: c.promise,
		dismiss: c.dismiss,
		loading: c.loading
	}),
	G = (t) => ({ subscribe: t });
export { c as a, z as c, A as t, G as u };
