import { h as l } from './DQMf8gWK.js';
function n(s, e, r) {
	var c = s.__className,
		a = t(e);
	l && s.className === a
		? (s.__className = a)
		: (c !== a || (l && s.className !== a)) &&
			(e == null ? s.removeAttribute('class') : (s.className = a), (s.__className = a));
}
function t(s, e) {
	return (s ?? '') + '';
}
export { n as s };
