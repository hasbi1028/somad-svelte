import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import { f as d, c as p, s as a, n as t, r as c } from '../chunks/BHafZ7-g.js';
import { t as v, a as g } from '../chunks/D4wBL3Sd.js';
import { S as h } from '../chunks/QDzNhrkw.js';
import '../chunks/CZSIPx2q.js';
import { S } from '../chunks/BBGdLrs8.js';
import '../chunks/DvUo5-ap.js';
import { B as _ } from '../chunks/Bsldq5z3.js';
import { t as w } from '../chunks/B7Pfnr5e.js';
import '../chunks/B4fvhT3s.js';
import { S as k, M as A } from '../chunks/BmsKTWgn.js';
var y = v('<!> <!> <span class="sr-only">Toggle theme</span>', 1),
	$ = v(
		`<header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"><div class="flex items-center gap-2 px-4"><!> <!> <!> <!> <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-lg md:min-h-min"><div class="px-4 py-1 text-sm">Selamat datang Admin. Selamat datang di halaman admin. Anda dapat mengatur berbagai halaman
				yang ada di dalam website ini.</div></div></div></header> <div class="flex flex-1 flex-col gap-4 p-4 pt-0"><div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"><h1 class="text-4xl font-bold p-4">Selamat datang Admin</h1> <p class="text-lg p-4">Selamat datang di halaman admin. Anda dapat mengatur berbagai halaman yang ada di dalam
			website ini.</p> <img src="/favicon.png" alt="Admin" class="w-full max-w-md mx-auto mt-4"></div></div>`,
		1
	);
function I(f) {
	var e = $(),
		r = d(e),
		i = p(r),
		s = p(i);
	S(s, { class: '-ml-1' });
	var n = a(s, 2);
	h(n, { orientation: 'vertical', class: 'mr-2 h-4' });
	var l = a(n, 2);
	_(l, {
		onclick: w,
		variant: 'outline',
		size: 'sm',
		class: 'mr-2',
		children: (u, M) => {
			var m = y(),
				o = d(m);
			k(o, {
				class:
					'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
			});
			var b = a(o, 2);
			A(b, {
				class:
					'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
			}),
				t(2),
				g(u, m);
		},
		$$slots: { default: !0 }
	});
	var x = a(l, 2);
	h(x, { orientation: 'vertical', class: 'mr-2 h-4' }), t(2), c(i), c(r), t(2), g(f, e);
}
export { I as component };
