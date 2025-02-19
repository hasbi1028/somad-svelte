import './Bg9kRutz.js';
import { p as s, f, a as h, y as l } from './BHafZ7-g.js';
import { c as g, a as c } from './D4wBL3Sd.js';
import { s as d } from './CiWmPosG.js';
import { p as r } from './CjIAJ7VA.js';
import { b as t } from './iSg1OsVq.js';
import { u, n as D } from './DvUo5-ap.js';
function R(e, o) {
	s(o, !0);
	let a = r(o, 'open', 15, !1),
		i = r(o, 'onOpenChange', 3, D);
	u({
		variant: t.with(() => 'dialog'),
		open: t.with(
			() => a(),
			(p) => {
				a(p), i()(p);
			}
		)
	});
	var n = g(),
		m = f(n);
	d(m, () => o.children ?? l), c(e, n), h();
}
export { R as D };
