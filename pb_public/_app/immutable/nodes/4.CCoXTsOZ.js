import '../chunks/Bg9kRutz.js';
import '../chunks/69_IOA4Y.js';
import { f as d, c as p, s as a, n as e, r as c } from '../chunks/DQMf8gWK.js';
import { t as v, a as g } from '../chunks/BGOrq1ZG.js';
import { S as h } from '../chunks/CnGJdrx-.js';
import '../chunks/BVZZpjpa.js';
import { S } from '../chunks/BcC5ZLLz.js';
import '../chunks/B8S9RRQw.js';
import { B as _ } from '../chunks/DWr6XhLj.js';
import { t as w } from '../chunks/D9BtlccV.js';
import { S as k, M as A } from '../chunks/CTb5GqYX.js';
var y = v('<!> <!> <span class="sr-only">Toggle theme</span>', 1),
	$ = v(
		'<header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"><div class="flex items-center gap-2 px-4"><!> <!> <!> <!> <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-lg md:min-h-min "><div class="px-4 py-1 text-sm">Selamat datang Admin. Selamat datang di halaman admin. Anda dapat mengatur berbagai halaman yang ada di dalam website ini.</div></div></div></header> <div class="flex flex-1 flex-col gap-4 p-4 pt-0"><div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"><h1 class="text-4xl font-bold p-4">Selamat datang Admin</h1> <p class="text-lg p-4">Selamat datang di halaman admin. Anda dapat mengatur berbagai halaman yang ada di dalam website ini.</p> <img src="/favicon.png" alt="Admin" class="w-full max-w-md mx-auto mt-4"></div></div>',
		1
	);
function H(f) {
	var t = $(),
		r = d(t),
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
				e(2),
				g(u, m);
		},
		$$slots: { default: !0 }
	});
	var x = a(l, 2);
	h(x, { orientation: 'vertical', class: 'mr-2 h-4' }), e(2), c(i), c(r), e(2), g(f, t);
}
export { H as component };
