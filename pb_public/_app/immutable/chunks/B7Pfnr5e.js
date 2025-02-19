import { g as h } from './Dz4tvtyB.js';
import { u as m, d as g, t as u } from './B4fvhT3s.js';
function p() {
	m.set(h(g) === 'dark' ? 'light' : 'dark');
}
function w(t) {
	m.set(t);
}
function L(t) {
	u.set(t);
}
function S(t) {
	return t;
}
function b({
	defaultMode: t = 'system',
	themeColors: n,
	darkClassNames: o = ['dark'],
	lightClassNames: c = [],
	defaultTheme: f = '',
	modeStorageKey: r = 'mode-watcher-mode',
	themeStorageKey: d = 'mode-watcher-theme'
}) {
	const e = document.documentElement,
		i = localStorage.getItem(r) || t,
		s = localStorage.getItem(d) || f,
		a =
			i === 'light' ||
			(i === 'system' && window.matchMedia('(prefers-color-scheme: light)').matches);
	if (
		(a
			? (o.length && e.classList.remove(...o), c.length && e.classList.add(...c))
			: (c.length && e.classList.remove(...c), o.length && e.classList.add(...o)),
		(e.style.colorScheme = a ? 'light' : 'dark'),
		n)
	) {
		const l = document.querySelector('meta[name="theme-color"]');
		l && l.setAttribute('content', i === 'light' ? n.light : n.dark);
	}
	s && (e.setAttribute('data-theme', s), localStorage.setItem(d, s)), localStorage.setItem(r, i);
}
export { w as a, L as b, S as d, b as s, p as t };
