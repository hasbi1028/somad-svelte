import { y as t, z as _, A as c, h as d } from './DQMf8gWK.js';
import { l as m } from './BTRVP7y_.js';
function h(e, a, n = a) {
	var o = t();
	m(e, 'input', (l) => {
		var r = l ? e.defaultValue : e.value;
		if (((r = v(e) ? f(r) : r), n(r), o && r !== (r = a()))) {
			var u = e.selectionStart,
				s = e.selectionEnd;
			(e.value = r ?? ''),
				s !== null && ((e.selectionStart = u), (e.selectionEnd = Math.min(s, e.value.length)));
		}
	}),
		((d && e.defaultValue !== e.value) || (_(a) == null && e.value)) &&
			n(v(e) ? f(e.value) : e.value),
		c(() => {
			var l = a();
			(v(e) && l === f(e.value)) ||
				(e.type === 'date' && !l && !e.value) ||
				(l !== e.value && (e.value = l ?? ''));
		});
}
function v(e) {
	var a = e.type;
	return a === 'number' || a === 'range';
}
function f(e) {
	return e === '' ? null : +e;
}
export { h as b };
